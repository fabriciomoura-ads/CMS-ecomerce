import { prisma } from '@/pages/api/server/db/prisma';
import { getServerSession } from 'next-auth';

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const session = await getServerSession(req, res);

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id, code, discount, createdAt, isActive, discountType } = req.body;

    try {
        const updatedCoupon = await prisma.coupon.update({
            where: { id },
            data: {
                code,
                discount: parseFloat(discount),
                createdAt: createdAt ? new Date(createdAt) : undefined,
                isActive: isActive === 0 ? false : true,
                discountType,
            },
        });
        res.status(200).json(updatedCoupon);
    } catch (error) {
        console.error('Error updating coupon:', error);
        res.status(500).json({ message: 'Failed to update coupon' });
    }
}
