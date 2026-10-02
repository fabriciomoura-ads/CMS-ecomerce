import { getallPayments } from '../server/db/finance/getallPayments';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const totalOrders = await getallPayments();
            res.status(200).json(totalOrders);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter dados dos pedidos' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
