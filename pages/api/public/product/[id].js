import { prisma } from '@/pages/api/server/db/prisma';

export default async function handler(req, res) {
    // Adicionar headers CORS para permitir acesso cross-origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { id } = req.query;

    if (!id || isNaN(id)) {
        return res.status(400).json({ 
            success: false,
            error: 'ID do produto inválido' 
        });
    }

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                images: {
                    orderBy: { order: 'asc' }
                },
                category: true,
                variations: {
                    where: { isActive: true }
                }
            }
        });

        if (!product) {
            return res.status(404).json({ 
                success: false,
                error: 'Produto não encontrado' 
            });
        }

        // Verificar se o produto está ativo
        if (!product.isActive) {
            return res.status(404).json({ 
                success: false,
                error: 'Produto não disponível' 
            });
        }

        // Estruturar dados para o site de vendas
        const productData = {
            id: product.id,
            name: product.name,
            title: product.name,
            description: product.description,
            price: Number(product.basePrice),
            basePrice: Number(product.basePrice),
            brand: product.brand,
            category: product.category ? {
                id: product.category.id,
                name: product.category.name,
                description: product.category.description
            } : null,
            images: product.images.map(img => ({
                id: img.id,
                url: img.url,
                alt: img.alt,
                isPrimary: img.isPrimary
            })),
            primaryImage: product.images.find(img => img.isPrimary)?.url || null,
            variations: product.variations.map(variation => ({
                id: variation.id,
                size: variation.size,
                color: variation.color,
                material: variation.material,
                price: Number(variation.price),
                stock: variation.stock,
                sku: variation.sku,
                available: variation.stock > 0
            })),
            // Campos úteis para o site
            slug: product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, ''),
            available: true,
            stock: product.variations.reduce((total, v) => total + v.stock, 99), // Somar estoque das variações
            createdAt: product.createdAt.toISOString(),
            updatedAt: product.updatedAt.toISOString()
        };

        res.status(200).json({
            success: true,
            data: productData
        });
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ 
            success: false,
            error: 'Error fetching product',
            message: 'Erro interno do servidor'
        });
    }
}