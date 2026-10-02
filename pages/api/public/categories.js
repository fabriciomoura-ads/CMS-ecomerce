import { getAllCategories } from '@/pages/api/server/db/categories/getAllCategories';

export default async function handler(req, res) {
    // Adicionar headers CORS para permitir acesso cross-origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const categories = await getAllCategories();
        
        res.status(200).json({
            success: true,
            data: categories,
            total: categories.length
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ 
            success: false,
            error: 'Error fetching categories',
            message: 'Erro interno do servidor'
        });
    }
} 