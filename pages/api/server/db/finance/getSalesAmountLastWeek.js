// pages/api/server/db/finance/getSalesAmountLastWeek.js
import {
    endOfDay,
    endOfWeek,
    startOfDay,
    startOfWeek,
    subDays,
    subWeeks,
  } from 'date-fns';
  import { prisma } from '../prisma';
  
  export async function getSalesAmountLastWeek() {
    const lastWeekStart = startOfDay(subDays(new Date(), 7));
    const lastWeekEnd   = endOfDay(subDays(new Date(), 1));
  
    const weekBeforeLastStart = startOfWeek(subWeeks(new Date(), 2), { weekStartsOn: 0 });
    const weekBeforeLastEnd   = endOfWeek(subWeeks(new Date(), 2),   { weekStartsOn: 0 });
  
    const [lastWeekAgg, beforeAgg] = await Promise.all([
      prisma.payment.aggregate({
        _sum: { amountCents: true },
        where: {
          status: 'APPROVED',
          createdAt: { gte: lastWeekStart, lte: lastWeekEnd },
        },
      }),
      prisma.payment.aggregate({
        _sum: { amountCents: true },
        where: {
          status: 'APPROVED',
          createdAt: { gte: weekBeforeLastStart, lte: weekBeforeLastEnd },
        },
      }),
    ]);
  
    const lastWeekCents = Number(lastWeekAgg._sum?.amountCents ?? 0);
    const beforeCents   = Number(beforeAgg._sum?.amountCents ?? 0);
  
    return {
      totalSalesAmountLastWeek: lastWeekCents / 100,
      totalSalesAmountWeekBeforeLast: beforeCents / 100,
      // se quiser em centavos também:
      totalSalesAmountLastWeekCents: lastWeekCents,
      totalSalesAmountWeekBeforeLastCents: beforeCents,
    };
  }
  