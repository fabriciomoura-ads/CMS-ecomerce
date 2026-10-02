import { prisma } from '@/pages/api/server/db/prisma';

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            const { id } = req.query;

            if (!id) {
                return res
                    .status(400)
                    .json({ error: 'ID do produto é obrigatório' });
            }

            const deletedCoupon = await prisma.coupon.delete({
                where: { id: id },
            });

            return res.status(200).json({
                message: 'Coupon deletado com sucesso',
                deletedCoupon,
            });
        } catch (error) {
            console.error('Erro ao deletar Coupon:', error);
            res.status(500).json({ error: 'Erro ao deletar o coupon' });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
