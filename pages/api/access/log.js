import { prisma } from '@/pages/api/server/db/prisma';

export default async function handler(req, res) {
    // Adicionar headers CORS para permitir acesso cross-origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const {
            userId = null,
            ip,
            city = null,
            browser = 'Other',
            deviceType,
            isIphone = false,
            deviceBrand = null,
            deviceModel = null
        } = req.body;

        // Validação básica
        if (!ip || !deviceType) {
            return res.status(400).json({ 
                error: 'IP e deviceType são obrigatórios' 
            });
        }

        // Validar deviceType
        if (!['MOBILE', 'DESKTOP'].includes(deviceType)) {
            return res.status(400).json({ 
                error: 'deviceType deve ser MOBILE ou DESKTOP' 
            });
        }

        // Criar log de acesso
        const accessLog = await prisma.accessLog.create({
            data: {
                userId: userId ? parseInt(userId) : null,
                ip: ip.toString(),
                city: city ? city.toString() : null,
                browser: browser.toString(),
                deviceType: deviceType,
                isIphone: Boolean(isIphone),
                deviceBrand: deviceBrand ? deviceBrand.toString() : null,
                deviceModel: deviceModel ? deviceModel.toString() : null,
            }
        });

        res.status(201).json({
            success: true,
            data: accessLog,
            message: 'Log de acesso criado com sucesso'
        });

    } catch (error) {
        console.error('Error creating access log:', error);
        res.status(500).json({
            success: false,
            error: 'Error creating access log',
            message: 'Erro interno do servidor'
        });
    }
}