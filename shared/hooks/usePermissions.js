import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const usePermissions = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (status === 'loading') {
            setIsLoading(true);
            return;
        }
        
        if (!session) {
            router.push('/');
            return;
        }
        
        setUserRole(session.user?.role || 'CUSTOMER');
        setIsLoading(false);
    }, [session, status, router]);

    const hasAccess = (allowedRoles) => {
        if (!userRole) return false;
        return allowedRoles.includes(userRole);
    };

    const isAdmin = () => userRole === 'ADMIN';
    const isDesigner = () => userRole === 'DESIGNER';
    const isCustomer = () => userRole === 'CUSTOMER';

    const canAccessPage = (pagePath) => {
        if (isAdmin()) return true; // Admin tem acesso a tudo
        
        if (isDesigner()) {
            // Designer só pode acessar produtos
            return pagePath === '/admin/products';
        }
        
        if (isCustomer()) {
            // Customer não tem acesso ao painel
            return false;
        }
        
        return false;
    };

    return {
        userRole,
        isLoading,
        hasAccess,
        isAdmin,
        isDesigner,
        isCustomer,
        canAccessPage,
        session
    };
}; 