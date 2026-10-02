import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import localeData from 'dayjs/plugin/localeData';
import { prisma } from '../prisma';

dayjs.extend(localeData);
dayjs.locale('pt-br');

export async function getAccessData() {
  // início dos últimos 7 dias (inclui hoje)
  const start7 = dayjs().startOf('day').subtract(6, 'day');
  const start7Date = start7.toDate();

  // busca logs no período
  const logs = await prisma.accessLog.findMany({
    where: { createdAt: { gte: start7Date } },
    select: { 
      createdAt: true, 
      deviceType: true, 
      browser: true, 
      city: true,
      ip: true,
      userId: true
    },
  });

  // labels curtas em pt-BR
  const shortWeekdays = {
    'segunda-feira': 'Segunda',
    'terça-feira': 'Terça',
    'quarta-feira': 'Quarta',
    'quinta-feira': 'Quinta',
    'sexta-feira': 'Sexta',
    'sábado': 'Sábado',
    'domingo': 'Domingo',
  };

  // sequência de labels de start7 → hoje
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = start7.add(i, 'day');
    return shortWeekdays[d.format('dddd')];
  });

  const mobile = new Array(7).fill(0);
  const desktop = new Array(7).fill(0);
  const browserCounts = {};
  const cityCounts = {};
  let totalAccesses = 0;
  const uniqueIPs = new Set();
  const uniqueUsers = new Set();

  for (const l of logs) {
    // índice do dia (0..6) relativo a start7
    const idx = dayjs(l.createdAt).startOf('day').diff(start7.startOf('day'), 'day');
    if (idx < 0 || idx > 6) continue;

    if (l.deviceType === 'MOBILE') mobile[idx] += 1;
    else desktop[idx] += 1;

    const b = !l.browser || l.browser === 'Unknown' ? 'Outros' : l.browser;
    browserCounts[b] = (browserCounts[b] || 0) + 1;

    const c = l.city || 'Desconhecida';
    cityCounts[c] = (cityCounts[c] || 0) + 1;

    // Contar IPs únicos
    if (l.ip) {
      uniqueIPs.add(l.ip);
    }

    // Contar usuários únicos
    if (l.userId) {
      uniqueUsers.add(l.userId);
    }

    totalAccesses += 1;
  }

  const sum = (arr) => arr.reduce((a, b) => a + b, 0);
  const totalMobileAccesses = sum(mobile);
  const totalDesktopAccesses = sum(desktop);

  const cityStats = Object.keys(cityCounts)
    .map((city) => {
      const accessCount = cityCounts[city];
      const percentage =
        totalAccesses === 0
          ? '0.00'
          : ((accessCount / totalAccesses) * 100).toFixed(2);
      return { city, accessCount, percentage };
    })
    .sort((a, b) => b.accessCount - a.accessCount);

  const top10Cities = cityStats.slice(0, 9);

  return {
    mobile,
    desktop,
    browser: browserCounts,
    dates,
    totalMobileAccesses,
    totalDesktopAccesses,
    totalAccesses,
    cityStats,
    top10Cities,
    uniqueIPsCount: uniqueIPs.size,
    uniqueUsersCount: uniqueUsers.size,
    
    // Adicionar dados para gráficos mais detalhados
    browserStats: Object.keys(browserCounts).map(browser => ({
      name: browser,
      count: browserCounts[browser],
      percentage: totalAccesses === 0 
        ? '0.00' 
        : ((browserCounts[browser] / totalAccesses) * 100).toFixed(2)
    })).sort((a, b) => b.count - a.count),
    
    // Dados dos últimos 7 dias para métricas
    last7DaysData: {
      dates,
      mobileAccesses: mobile,
      desktopAccesses: desktop,
      totalPerDay: mobile.map((m, i) => m + desktop[i])
    },

    // Estatísticas gerais
    stats: {
      totalAccesses,
      uniqueVisitors: uniqueIPs.size,
      registeredUsers: uniqueUsers.size,
      mobilePercentage: totalAccesses > 0 
        ? ((totalMobileAccesses / totalAccesses) * 100).toFixed(2)
        : '0.00',
      desktopPercentage: totalAccesses > 0 
        ? ((totalDesktopAccesses / totalAccesses) * 100).toFixed(2)
        : '0.00'
    }
  };
}
