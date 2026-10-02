import { prisma } from '@/pages/api/server/db/prisma';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Método não permitido' });
    }

    try {
        console.log('🔍 Debug: Testando conexão com banco...');
        
        // Teste de conexão
        await prisma.$connect();
        console.log('🔍 Debug: Prisma conectado');

        // Teste de query simples
        const userCount = await prisma.user.count();
        console.log('🔍 Debug: Total de usuários:', userCount);

        // Teste de query com findMany
        const users = await prisma.user.findMany({
            take: 5,
            select: {
                id: true,
                name: true,
                email: true,
                role: true
            }
        });
        console.log('🔍 Debug: Usuários encontrados:', users);

        res.status(200).json({
            success: true,
            message: 'Conexão com banco funcionando!',
            userCount,
            users
        });
    } catch (error) {
        console.error('❌ Erro no teste de banco:', error);
        res.status(500).json({
            success: false,
            message: 'Erro na conexão com banco',
            error: error.message
        });
    } finally {
        await prisma.$disconnect();
    }
} 