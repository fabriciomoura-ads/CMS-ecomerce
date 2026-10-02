import { prisma } from '../prisma';

export async function getallPayments() {
    try {
        // Buscar pagamentos usando a estrutura correta do schema Prisma
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
                                items: {
                                    include: {
                                        product: {
                                            select: {
                                                id: true,
                                                name: true
                                            }
                                        }
                                    }
                                },
                                user: {
                                    select: {
                                        name: true,
                                        email: true
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

        // Processar os pagamentos para o formato esperado
        const paymentsWithProductId = recentPayments.map((payment) => {
            let productId = 'N/A';
            let productTitle = '';
            let userName = '';
            let userEmail = '';
            
            // Extrair informações do usuário
            if (payment.invoice?.order?.user) {
                userName = payment.invoice.order.user.name || 'N/A';
                userEmail = payment.invoice.order.user.email || 'N/A';
            }
            
            // Extrair informações do produto
            if (payment.invoice?.order?.items && payment.invoice.order.items.length > 0) {
                const firstItem = payment.invoice.order.items[0];
                if (firstItem.product) {
                    productId = firstItem.product.id;
                    productTitle = firstItem.product.name;
                }
            }
            
            // Se não encontrou produto, usar fallback
            if (productId === 'N/A') {
                productId = '22'; // ID padrão como fallback
            }

            return {
                name: userName,
                email: userEmail,
                status: payment.status,
                amount: Number(payment.amountCents) / 100, // Converter de centavos para reais
                paymentId: payment.id,
                productId: productId.toString(),
                paymentMethod: payment.method,
                date: payment.createdAt.toISOString(),
            };
        });

        return paymentsWithProductId;
    } catch (error) {
        console.error('Erro ao buscar pagamentos:', error);
        throw new Error('Erro ao buscar dados dos pagamentos');
    }
}
