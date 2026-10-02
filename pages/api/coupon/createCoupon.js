import { prisma } from '@/pages/api/server/db/prisma';
import { nanoid } from 'nanoid';
import { getServerSession } from 'next-auth';

const formatDiscount = (discount) => {
    const match = discount.match(/(\d+([.,]\d{2})?)/);
    return match ? match[0].replace(',', '') : null;
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const session = await getServerSession(req, res);

    if (!session) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const { code, discount, createdAt, isActive, discountType } = req.body;

    const formattedDiscount = formatDiscount(discount);

    try {
        const newCoupon = await prisma.coupon.create({
            data: {
                id: nanoid(),
                code,
                discount: parseFloat(formattedDiscount),
                createdAt: new Date(),
                updatedAt: new Date(),
                isActive,
                discountType,
            },
        });
        res.status(201).json(newCoupon);
    } catch (error) {
        console.error('Error creating coupon:', error);
        res.status(500).json({ message: 'Failed to create coupon' });
    }
}
