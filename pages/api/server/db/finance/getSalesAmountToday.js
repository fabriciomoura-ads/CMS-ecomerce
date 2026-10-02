// pages/api/server/db/finance/getSalesAmountToday.ts
import { endOfDay, startOfDay, subDays } from 'date-fns';
import { PaymentStatus } from '@prisma/client';
import { prisma } from '../prisma';

export async function getSalesAmountToday() {
  const todayStart = startOfDay(new Date());
  const todayEnd   = endOfDay(new Date());
  const yStart     = startOfDay(subDays(new Date(), 1));
  const yEnd       = endOfDay(subDays(new Date(), 1));

  try {
    const [todayAgg, yestAgg] = await Promise.all([
      prisma.payment.aggregate({
        _sum: { amountCents: true },
        where: {
          createdAt: { gte: todayStart, lte: todayEnd },
          status: PaymentStatus.APPROVED,
        },
      }),
      prisma.payment.aggregate({
        _sum: { amountCents: true },
        where: {
          createdAt: { gte: yStart, lte: yEnd },
          status: PaymentStatus.APPROVED,
        },
      }),
    ]);

    const todayCents = Number(todayAgg._sum.amountCents ?? 0);
    const yestCents  = Number(yestAgg._sum.amountCents ?? 0);

    return {
      // valores em reais (R$)
      totalSalesAmountToday: todayCents / 100,
      totalSalesAmountYesterday: yestCents / 100,
      // extras em centavos (caso precise)
      totalSalesAmountTodayCents: todayCents,
      totalSalesAmountYesterdayCents: yestCents,
    };
  } catch (err) {
    console.error('getSalesAmountToday error:', err);
    return {
      totalSalesAmountToday: 0,
      totalSalesAmountYesterday: 0,
      totalSalesAmountTodayCents: 0,
      totalSalesAmountYesterdayCents: 0,
    };
  }
}
