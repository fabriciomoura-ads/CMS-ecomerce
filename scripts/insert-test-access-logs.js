const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function insertTestAccessLogs() {
  try {
    console.log('Inserindo logs de acesso de teste...');

    // Criar alguns logs de teste para os últimos 7 dias
    const testLogs = [
      {
        ip: '192.168.1.1',
        city: 'São Paulo',
        browser: 'Chrome',
        deviceType: 'DESKTOP',
        isIphone: false,
        deviceBrand: 'Dell',
        deviceModel: 'Inspiron',
        createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 dias atrás
      },
      {
        ip: '192.168.1.2',
        city: 'Rio de Janeiro',
        browser: 'Safari',
        deviceType: 'MOBILE',
        isIphone: true,
        deviceBrand: 'Apple',
        deviceModel: 'iPhone 14',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 dias atrás
      },
      {
        ip: '192.168.1.3',
        city: 'Belo Horizonte',
        browser: 'Firefox',
        deviceType: 'DESKTOP',
        isIphone: false,
        deviceBrand: 'HP',
        deviceModel: 'Pavilion',
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 dias atrás
      },
      {
        ip: '192.168.1.4',
        city: 'Brasília',
        browser: 'Chrome',
        deviceType: 'MOBILE',
        isIphone: false,
        deviceBrand: 'Samsung',
        deviceModel: 'Galaxy S23',
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 dias atrás
      },
      {
        ip: '192.168.1.5',
        city: 'Salvador',
        browser: 'Edge',
        deviceType: 'DESKTOP',
        isIphone: false,
        deviceBrand: 'Lenovo',
        deviceModel: 'ThinkPad',
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 dias atrás
      },
      {
        ip: '192.168.1.6',
        city: 'Fortaleza',
        browser: 'Chrome',
        deviceType: 'MOBILE',
        isIphone: false,
        deviceBrand: 'Xiaomi',
        deviceModel: 'Redmi Note',
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 dia atrás
      },
      {
        ip: '192.168.1.7',
        city: 'Curitiba',
        browser: 'Safari',
        deviceType: 'DESKTOP',
        isIphone: false,
        deviceBrand: 'Apple',
        deviceModel: 'iMac',
        createdAt: new Date(), // Hoje
      },
      {
        ip: '192.168.1.8',
        city: 'Recife',
        browser: 'Chrome',
        deviceType: 'MOBILE',
        isIphone: false,
        deviceBrand: 'Motorola',
        deviceModel: 'Moto G',
        createdAt: new Date(), // Hoje
      },
    ];

    

    console.log('Logs de teste inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir logs de teste:', error);
  } finally {
    await prisma.$disconnect();
  }
}

insertTestAccessLogs();
