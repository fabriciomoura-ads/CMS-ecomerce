import { prisma } from '../prisma';

export const getAllCategories = async () => {
    // Buscar todas as categorias da tabela Category
    const categories = await prisma.category.findMany({
        orderBy: {
            id: 'asc'
        }
    });

    return categories.map(category => ({
        id: category.id,
        name: category.name,
        description: category.description,
        createdAt: category.createdAt.toISOString()
    }));
};
