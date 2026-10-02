// pages/api/server/db/products/getProductsSoldToday.js
import { endOfDay, startOfDay, subDays } from 'date-fns';
import { prisma } from '../prisma';

export async function getProductsSoldToday() {
  const todayStart = startOfDay(new Date());
  const todayEnd   = endOfDay(new Date());

  const yStart = startOfDay(subDays(new Date(), 1));
  const yEnd   = endOfDay(subDays(new Date(), 1));

  const [todayAgg, yestAgg] = await Promise.all([
    prisma.orderItem.aggregate({
      _sum: { quantity: true },
      where: {
        itemType: 'PRODUCT',
        order: {
          invoices: {
            some: {
              payments: {
                some: {
                  status: 'APPROVED',
                  // use paidAt se preferir a data de pagamento
                  createdAt: { gte: todayStart, lte: todayEnd },
                },
              },
            },
          },
        },
      },
    }),
    prisma.orderItem.aggregate({
      _sum: { quantity: true },
      where: {
        itemType: 'PRODUCT',
        order: {
          invoices: {
            some: {
              payments: {
                some: {
                  status: 'APPROVED',
                  createdAt: { gte: yStart, lte: yEnd },
                },
              },
            },
          },
        },
      },
    }),
  ]);

  const totalProductsSoldToday = Number(todayAgg._sum?.quantity ?? 0);
  const totalProductsSoldYesterday = Number(yestAgg._sum?.quantity ?? 0);

  return { totalProductsSoldToday, totalProductsSoldYesterday };
}
