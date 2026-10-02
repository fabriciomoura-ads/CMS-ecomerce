import { prisma } from '@/pages/api/server/db/prisma';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método não permitido' });
    }

    try {
        const { productId, fileType, fileUrl } = req.body;

        if (!productId || !fileType || !fileUrl) {
            return res.status(400).json({ message: 'Dados incompletos para log de download' });
        }

        // Por enquanto, vamos apenas logar no console
        // Em uma implementação futura, você pode salvar no banco usando o modelo DownloadLog
        console.log('📥 Download realizado:', {
            productId,
            fileType,
            fileUrl,
            timestamp: new Date().toISOString(),
            userAgent: req.headers['user-agent'],
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
        });

        res.status(200).json({
            success: true,
            message: 'Download logado com sucesso'
        });
    } catch (error) {
        console.error('Erro ao logar download:', error);
        res.status(500).json({
            success: false,
            message: 'Erro interno do servidor'
        });
    }
} 