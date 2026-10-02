import { prisma } from '../prisma';

export const getAllCoupons = async () => {
    try {
        // Por enquanto, retornar array vazio até que o sistema de cupons seja implementado
        // TODO: Implementar sistema de cupons quando o schema for atualizado
        return [];
        
        /* 
        // Código para quando o sistema de cupons estiver implementado:
        
        // Buscar cupons com informações básicas
        const coupons = await prisma.coupon.findMany({
            include: {
                product: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Para cada cupom, buscar estatísticas de uso
        const couponsWithStats = await Promise.all(
            coupons.map(async (coupon) => {
                // Buscar pagamentos que usaram este cupom
                const paymentsWithCoupon = await prisma.payment.findMany({
                    where: {
                        status: 'APPROVED',
                        couponCode: coupon.code
                    }
                });

                // Calcular estatísticas
                const totalQuantitySold = paymentsWithCoupon.length;
                const totalSalesAmount = paymentsWithCoupon.reduce((sum, payment) => {
                    return sum + (Number(payment.amountCents) / 100);
                }, 0);

                return {
                    id: coupon.id,
                    code: coupon.code,
                    discount: coupon.discount,
                    discountType: coupon.discountType,
                    maxUses: coupon.maxUses,
                    startAmount: coupon.startAmount,
                    availableAmount: coupon.availableAmount,
                    isActive: coupon.isActive,
                    createdAt: coupon.createdAt.toISOString(),
                    updatedAt: coupon.updatedAt.toISOString(),
                    product: coupon.product
                        ? {
                              id: coupon.product.id,
                              title: coupon.product.name,
                          }
                        : null,
                    totalQuantitySold: totalQuantitySold,
                    totalSalesAmount: totalSalesAmount,
                };
            })
        );

        return couponsWithStats;
        */
    } catch (error) {
        console.error('Erro ao buscar cupons:', error);
        return []; // Retornar array vazio em caso de erro
    }
};
