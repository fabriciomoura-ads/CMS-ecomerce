// pages/api/server/db/finance/getMonthlySalesData.js
import { endOfMonth, startOfMonth } from 'date-fns';
import { prisma } from '../prisma';

export async function getMonthlySalesData() {
  const currentYear = new Date().getFullYear();
  const monthlyData = [];

  for (let month = 0; month < 12; month++) {
    const monthStart = startOfMonth(new Date(currentYear, month));
    const monthEnd   = endOfMonth(new Date(currentYear, month));

    const agg = await prisma.payment.aggregate({
      _count: true,                       // nº de registros (pagamentos)
      _sum: { amountCents: true },        // soma em centavos
      where: {
        status: 'APPROVED',
        createdAt: { gte: monthStart, lte: monthEnd },
      },
    });

    const totalOrders        = Number(agg._count ?? 0);
    const totalRevenueCents  = Number(agg._sum?.amountCents ?? 0);

    monthlyData.push({
      month: monthStart.toLocaleString('default', { month: 'long' }),
      totalOrders,
      totalRevenue: totalRevenueCents / 100,  // em reais
      totalRevenueCents,                      // opcional, se quiser em centavos
    });
  }

  return monthlyData;
}
