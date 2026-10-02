import { prisma } from '@/pages/api/server/db/prisma';
import { getServerSession } from 'next-auth';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const session = await getServerSession(req, res);

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const { name, description } = req.body;

    if (!name) {
        return res.status(400).json({
            success: false,
            message: 'Nome da categoria é obrigatório'
        });
    }

    console.log('Criando categoria:', name, description);

    try {
        // Verificar se categoria já existe
        const existingCategory = await prisma.category.findFirst({
            where: {
                name: name
            }
        });

        if (existingCategory) {
            return res.status(400).json({ 
                success: false,
                message: 'Categoria já existe!' 
            });
        }

        // Gerar slug baseado no nome
        const slug = name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')  // Remove acentos
            .replace(/[^a-z0-9\s-]/g, '')      // Remove caracteres especiais
            .replace(/\s+/g, '-')               // Substitui espaços por hífens
            .replace(/-+/g, '-')                // Remove hífens duplicados
            .replace(/^-+|-+$/g, '')            // Remove hífens das extremidades
            .trim() || 'categoria-' + Date.now(); // Fallback se slug ficar vazio

        // Criar nova categoria
        const newCategory = await prisma.category.create({
            data: {
                name: name,
                slug: slug,
                description: description || `Categoria: ${name}`
            }
        });

        res.status(201).json({
            success: true,
            category: {
                id: newCategory.id,
                name: newCategory.name,
                description: newCategory.description,
                createdAt: newCategory.createdAt.toISOString()
            },
            message: 'Categoria criada com sucesso!'
        });
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ 
            success: false,
            message: 'Erro ao criar categoria',
            error: error.message 
        });
    }
}
