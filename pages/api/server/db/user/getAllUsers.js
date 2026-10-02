import { prisma } from '../prisma';

export const getAllUsers = async () => {
    const users = await prisma.user.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return users.map((user) => ({
        id: user.id,
        name: user.name || null,
        email: user.email || null,
        cpf: user.cpf || null,
        role: user.role,
        createdAt: user.createdAt ? user.createdAt.toISOString() : null,
        updatedAt: user.updatedAt ? user.updatedAt.toISOString() : null,
    }));
};
