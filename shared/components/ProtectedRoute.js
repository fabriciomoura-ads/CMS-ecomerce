import { usePermissions } from '../hooks/usePermissions';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Spinner, Alert, Container } from 'react-bootstrap';

const ProtectedRoute = ({ children, allowedRoles = [], redirectTo = '/' }) => {
    const { userRole, isLoading, hasAccess, canAccessPage } = usePermissions();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && userRole) {
            if (!canAccessPage(router.pathname)) {
                if (userRole === 'DESIGNER') {
                    router.push('/admin/products');
                } else if (userRole === 'ADMIN') {
                    router.push('/admin/dashboard');
                } else {
                    router.push(redirectTo);
                }
            }
        }
    }, [userRole, isLoading, router, canAccessPage, redirectTo]);

    if (isLoading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            </Container>
        );
    }

    if (!userRole) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">
                    <Alert.Heading>Acesso Negado</Alert.Heading>
                    <p>Você não tem permissão para acessar esta página.</p>
                </Alert>
            </Container>
        );
    }

    if (allowedRoles.length > 0 && !hasAccess(allowedRoles)) {
        return (
            <Container className="mt-4">
                <Alert variant="warning">
                    <Alert.Heading>Permissão Insuficiente</Alert.Heading>
                    <p>Você não tem as permissões necessárias para acessar esta página.</p>
                </Alert>
            </Container>
        );
    }

    return children;
};

export default ProtectedRoute; 