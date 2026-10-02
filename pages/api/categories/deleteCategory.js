import { prisma } from '@/pages/api/server/db/prisma';

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ 
                    success: false,
                    error: 'ID da categoria é obrigatório para exclusão' 
                });
            }

            // Buscar categoria pelo ID
            const categoryToDelete = await prisma.category.findUnique({
                where: { id: id }
            });
            
            if (!categoryToDelete) {
                return res.status(404).json({
                    success: false,
                    error: 'Categoria não encontrada'
                });
            }

            // Verificar se existem produtos usando esta categoria
            const productsWithCategory = await prisma.productCategory.findMany({
                where: {
                    categoryId: id
                },
                include: {
                    product: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });

            if (productsWithCategory.length > 0) {
                return res.status(400).json({
                    success: false,
                    error: `Não é possível deletar a categoria "${categoryToDelete.name}" pois existem ${productsWithCategory.length} produto(s) usando esta categoria.`,
                    productsCount: productsWithCategory.length,
                    products: productsWithCategory.map(pc => ({
                        id: pc.product.id,
                        name: pc.product.name
                    }))
                });
            }

            // Deletar categoria
            await prisma.category.delete({
                where: { id: parseInt(id) }
            });

            return res.status(200).json({
                success: true,
                message: 'Categoria deletada com sucesso',
                deletedCategory: {
                    id: categoryToDelete.id,
                    name: categoryToDelete.name,
                    deletedAt: new Date().toISOString()
                }
            });
        } catch (error) {
            console.error('Erro ao deletar Categoria:', error);
            res.status(500).json({ 
                success: false,
                error: 'Erro ao deletar a categoria',
                details: error.message 
            });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
