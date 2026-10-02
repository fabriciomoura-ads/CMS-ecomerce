// pages/api/server/db/finance/getTotalApprovedPayments.js
import { prisma } from '../prisma';

export async function getTotalApprovedPayments() {
  const agg = await prisma.payment.aggregate({
    _sum: { amountCents: true },
    where: { status: 'APPROVED' },
  });

  const totalCents = Number(agg._sum?.amountCents ?? 0);
  const totalBRL = totalCents / 100; // retorna em reais

  return totalBRL;
}
