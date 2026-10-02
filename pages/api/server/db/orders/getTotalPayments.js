import { prisma } from '../prisma';

export async function getRecentPayments() {
    try {
        const recentPayments = await prisma.payment.findMany({
            where: {
                status: {
                    in: ['APPROVED', 'PENDING']
                }
            },
            include: {
                invoice: {
                    include: {
                        order: {
                            include: {
                                user: {
                                    select: {
                                        id: true,
                                        name: true
                                    }
                                },
                                items: {
                                    include: {
                                        product: {
                                            select: {
                                                id: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        return recentPayments.map((payment) => ({
            name: payment.invoice?.order?.user?.name || 'N/A',
            userId: payment.invoice?.order?.user?.id || 'N/A',
            status: payment.status,
            amount: Number(payment.amountCents) / 100, // Converter de centavos para reais
            productId: payment.invoice?.order?.items?.[0]?.product?.id || 'N/A',
            paymentMethod: payment.method,
            date: payment.createdAt.toISOString(),
        }));
    } catch (error) {
        console.error('Erro ao buscar pagamentos:', error);
        throw new Error('Erro ao buscar dados dos pagamentos');
    }
}
