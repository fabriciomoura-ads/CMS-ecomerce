// pages/api/server/db/finance/getRecentPayments.js
import { prisma } from '../prisma';

export async function getRecentPayments() {
  const payments = await prisma.payment.findMany({
    where: { status: { in: ['APPROVED', 'PENDING'] } },
    orderBy: { createdAt: 'desc' },
    take: 20,
    include: {
      invoice: {
        include: {
          order: {
            include: {
              user: { select: { name: true, email: true } },
              items: {
                include: {
                  product: { select: { id: true, name: true } },
                  plan: { select: { id: true, name: true } },
                },
              },
            },
          },
        },
      },
    },
  });

  return payments.map((p) => {
    const order = p.invoice?.order;
    const user = order?.user;

    // pega o primeiro item de produto (se existir)
    const firstProductItem = order?.items?.find(
      (it) => it.itemType === 'PRODUCT' && it.product
    );

    return {
      name: user?.name ?? null,
      email: user?.email ?? null,
      status: p.status,                  // 'APPROVED' | 'PENDING' | ...
      amount: (p.amountCents ?? 0) / 100,
      amountCents: p.amountCents ?? 0,
      paymentId: p.id,
      productId: firstProductItem?.product?.id ?? null,
      productTitle: firstProductItem?.product?.name ?? null,
      paymentMethod: p.method,           // CARD | PIX | BOLETO
      date: p.createdAt.toISOString(),
    };
  });
}
