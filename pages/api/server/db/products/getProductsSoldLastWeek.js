import {
    endOfDay,
    endOfWeek,
    startOfDay,
    startOfWeek,
    subDays,
    subWeeks,
  } from 'date-fns';
  import { prisma } from '../prisma';
  import { OrderItemType, PaymentStatus } from '@prisma/client';
  
  export async function getProductsSoldLastWeek() {
    // últimos 7 dias (exclui hoje)
    const lastWeekStart = startOfDay(subDays(new Date(), 7));
    const lastWeekEnd   = endOfDay(subDays(new Date(), 1));
  
    // semana anterior (calendário), dom→sáb
    const weekBeforeLastStart = startOfWeek(subWeeks(new Date(), 2), { weekStartsOn: 0 });
    const weekBeforeLastEnd   = endOfWeek(subWeeks(new Date(), 2), { weekStartsOn: 0 });
  
    const [lastWeek, beforeLast] = await Promise.all([
      prisma.orderItem.aggregate({
        _sum: { quantity: true },
        where: {
          itemType: OrderItemType.PRODUCT,
          order: {
            invoices: {
              some: {
                payments: {
                  some: {
                    status: PaymentStatus.APPROVED,
                    createdAt: { gte: lastWeekStart, lte: lastWeekEnd },
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
          itemType: OrderItemType.PRODUCT,
          order: {
            invoices: {
              some: {
                payments: {
                  some: {
                    status: PaymentStatus.APPROVED,
                    createdAt: { gte: weekBeforeLastStart, lte: weekBeforeLastEnd },
                  },
                },
              },
            },
          },
        },
      }),
    ]);
  
    const totalProductsSoldLastWeek        = Number(lastWeek._sum.quantity ?? 0);
    const totalProductsSoldWeekBeforeLast  = Number(beforeLast._sum.quantity ?? 0);
  
    return { totalProductsSoldLastWeek, totalProductsSoldWeekBeforeLast };
  }
  