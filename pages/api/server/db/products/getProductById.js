import { prisma } from '../prisma';

export const getProductById = async (id) => {
    return await prisma.product.findUnique({
        where: { id },
        include: {
            category: {
                select: {
                    name: true,
                },
            },
        },
    });
};
