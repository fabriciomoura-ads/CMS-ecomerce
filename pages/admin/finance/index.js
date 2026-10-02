import axios from 'axios';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Papa from 'papaparse';
import { Fragment, useState } from 'react';
import {
    Button,
    Card,
    Col,
    ListGroup,
    ListGroupItem,
    Row,
    Spinner,
} from 'react-bootstrap';
import * as Dashboard2data from '../../../shared/data/dashboards/dashboard2data';
import { BasicTable } from '../../../shared/data/dashboards/dashboards1data';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import { getAccessData } from '../../api/server/db/access/getAccessData';
import { getMonthlySalesData } from '../../api/server/db/finance/getMonthlySalesData';
import { getRecentPayments } from '../../api/server/db/finance/getRecentPayments';
import { getSalesAmountLastWeek } from '../../api/server/db/finance/getSalesAmountLastWeek';
import { getSalesAmountToday } from '../../api/server/db/finance/getSalesAmountToday';
import { getTotalApprovedPayments } from '../../api/server/db/finance/getTotalApprovedPayments';
import { getProductsSoldLastWeek } from '../../api/server/db/products/getProductsSoldLastWeek';
import { getProductsSoldToday } from '../../api/server/db/products/getProductsSoldToday';
import styles from './styles.module.scss';
const Finance = ({
    totalSoldToday,
    totalSoldYesterday,
    salesAmountToday,
    salesAmountYesterday,
    totalSalesAmountLastWeek,
    totalSalesAmountWeekBeforeLast,
    chartData,
    recentOrders,
    accessData,
    totalSales,
    totalRevenueThisMonth,
    totalRevenueLastMonth,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const formatAmount = (amount) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(amount);
    };

    const exportOrdersToCSV = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('/api/orders');

            const ordersData = response.data;

            const csvData = ordersData.map((order) => ({
                Nome: order.name,
                Data: new Date(order.date).toLocaleDateString('pt-BR'),
                Status: order.status === 'APPROVED' ? 'Aprovado' : 'Pendente',
                Valor: formatAmount(order.amount),
            }));

            const csv = Papa.unparse(csvData, { header: true });
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);

            link.href = url;
            link.setAttribute('download', 'Relatório completo.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    };

    const percentageChangeThisMonth =
        totalRevenueLastMonth > 0
            ? ((totalRevenueThisMonth - totalRevenueLastMonth) /
                  totalRevenueLastMonth) *
              100
            : 0;

    const percentageChangeOrders =
        totalSoldYesterday > 0
            ? ((totalSoldToday - totalSoldYesterday) / totalSoldYesterday) * 100
            : 0;

    const percentageChangeSalesToday =
        salesAmountYesterday > 0
            ? ((salesAmountToday - salesAmountYesterday) /
                  salesAmountYesterday) *
              100
            : 0;

    const percentageChangeLastWeekSales =
        totalSalesAmountWeekBeforeLast > 0
            ? ((totalSalesAmountLastWeek - totalSalesAmountWeekBeforeLast) /
                  totalSalesAmountWeekBeforeLast) *
              100
            : 0;

    const colors = [
        '#3498db',
        '#e74c3c',
        '#2ecc71',
        '#9b59b6',
        '#f1c40f',
        '#34495e',
        '#e67e22',
        '#1abc9c',
        '#c0392b',
        '#8e44ad',
    ];

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" variant="primary" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
                <span className="ms-2">Processando dados...</span>
            </div>
        );
    }

    return (
        <Fragment>
            <Seo title={'Financeiro'} />

            <Pageheader
                title="FINANCEIRO"
                heading="Financeiro"
                active="Financeiro"
            />
            <Row>
                <Col xxl={9} xl={12} lg={12} md={12} sm={12}>
                    <Col xl={12} lg={12} md={12} sm={12} className="px-0">
                        <Card className=" px-3 ps-4">
                            <Row className="index1">
                                <Col xl={6} lg={6} md={6} sm={6} xxl={3}>
                                    <Row className=" border-end bd-xs-e-0 p-3">
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <div className="circle-icon bg-primary text-center align-self-center overflow-hidden shadow">
                                                <i className="fe fe-shopping-bag tx-15 text-white"></i>
                                            </div>
                                        </div>
                                        <div className="col-10 py-0">
                                            <div className="pt-4 pb-3">
                                                <div className="d-flex">
                                                    <h6 className="mb-2 fs-12 d-block">
                                                        Pedidos Hoje
                                                    </h6>
                                                    <span className="badge bg-success-transparent text-success fw-semibold ms-auto rounded-pill lh-maincard px-2 my-auto">
                                                        <i
                                                            className={`bx bx-caret-${
                                                                percentageChangeOrders >=
                                                                0
                                                                    ? 'up'
                                                                    : 'down'
                                                            } mx-2 text-${
                                                                percentageChangeOrders >=
                                                                0
                                                                    ? 'success'
                                                                    : 'danger'
                                                            }`}
                                                        ></i>
                                                        <span
                                                            className={`fw-semibold text-${
                                                                percentageChangeOrders >=
                                                                0
                                                                    ? 'success'
                                                                    : 'danger'
                                                            }`}
                                                        >
                                                            {percentageChangeOrders.toFixed(
                                                                2
                                                            )}
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="pb-0 mt-0">
                                                    <div className="d-flex">
                                                        <h4 className="fs-18 fw-semibold mb-0">
                                                            {new Intl.NumberFormat(
                                                                'pt-BR'
                                                            ).format(
                                                                totalSoldToday
                                                            )}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>

                                <Col xl={6} lg={6} md={6} sm={6} xxl={3}>
                                    <Row className=" border-end bd-md-e-0 bd-xs-e-0 bd-lg-e-0 bd-xl-e-0  p-3">
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <div className="circle-icon bg-warning text-center align-self-center overflow-hidden shadow">
                                                <i className="fe fe-dollar-sign tx-15 text-white"></i>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="pt-4 pb-3">
                                                <div className="d-flex">
                                                    <h6 className="mb-2 tx-12">
                                                        Faturado Hoje
                                                    </h6>
                                                    <span className="badge bg-success-transparent text-success fw-semibold ms-auto rounded-pill lh-maincard px-2 my-auto">
                                                        <i
                                                            className={`bx bx-caret-${
                                                                percentageChangeSalesToday >=
                                                                0
                                                                    ? 'up'
                                                                    : 'down'
                                                            } mx-2 text-${
                                                                percentageChangeSalesToday >=
                                                                0
                                                                    ? 'success'
                                                                    : 'danger'
                                                            }`}
                                                        ></i>
                                                        <span
                                                            className={`fw-semibold text-${
                                                                percentageChangeSalesToday >=
                                                                0
                                                                    ? 'success'
                                                                    : 'danger'
                                                            }`}
                                                        >
                                                            {percentageChangeSalesToday.toFixed(
                                                                2
                                                            )}
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="pb-0 mt-0">
                                                    <div className="d-flex">
                                                        <h4 className="fs-18 font-weight-semibold mb-0">
                                                            {formatAmount(
                                                                salesAmountToday
                                                            )}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>

                                <Col xl={6} lg={6} md={6} sm={6} xxl={3}>
                                    <Row className=" border-end bd-xs-e-0  p-3">
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <div className="circle-icon bg-secondary text-center align-self-center overflow-hidden shadow">
                                                <i className="fe fe-external-link tx-15 text-white"></i>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="pt-4 pb-3">
                                                <div className="d-flex">
                                                    <h6 className="mb-2 tx-12">
                                                        Últimos 7 dias
                                                    </h6>
                                                    <span className="badge bg-success-transparent text-success fw-semibold ms-auto rounded-pill lh-maincard px-2 my-auto">
                                                        <i
                                                            className={`bx bx-caret-${
                                                                percentageChangeLastWeekSales >=
                                                                0
                                                                    ? 'up'
                                                                    : 'down'
                                                            } mx-2 text-${
                                                                percentageChangeLastWeekSales >=
                                                                0
                                                                    ? 'success'
                                                                    : 'danger'
                                                            }`}
                                                        ></i>
                                                        <span
                                                            className={`fw-semibold text-${
                                                                percentageChangeLastWeekSales >=
                                                                0
                                                                    ? 'success'
                                                                    : 'danger'
                                                            }`}
                                                        >
                                                            {percentageChangeLastWeekSales.toFixed(
                                                                2
                                                            )}
                                                            %
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="pb-0 mt-0">
                                                    <div className="d-flex">
                                                        <h4 className="tx-18 font-weight-semibold mb-0">
                                                            {formatAmount(
                                                                totalSalesAmountLastWeek
                                                            )}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>

                                {/* Total Faturado */}
                                <Col xl={6} lg={6} md={6} sm={6} xxl={3}>
                                    <Row className="p-3">
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <div className="circle-icon bg-info text-center align-self-center overflow-hidden shadow">
                                                <i className="fe fe-credit-card tx-15 text-white"></i>
                                            </div>
                                        </div>
                                        <div className="col-10">
                                            <div className="pt-4 pb-3">
                                                <div className="d-flex">
                                                    <h6 className="mb-2 fs-12 d-block">
                                                        Total Faturado
                                                    </h6>
                                                </div>
                                                <div className="pb-0 mt-0">
                                                    <div className="d-flex">
                                                        <h4 className="tx-18 font-weight-semibold mb-0">
                                                            {formatAmount(
                                                                totalSales
                                                            )}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={12} className="px-0">
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className=" border-bottom-0 d-flex">
                                <h3 className="card-title mb-2 ">
                                    Atividade de Vendas
                                </h3>
                            </Card.Header>
                            <Card.Body>
                                <Row className=" mb-2 ps-lg-5">
                                    {/* Esse mês */}
                                    <Col xl={4} lg={4} md={4} sm={4}>
                                        <p className="mb-1">Esse mês</p>
                                        <h5 className="mb-1">
                                            {formatAmount(
                                                totalRevenueThisMonth
                                            )}
                                        </h5>
                                        <p className="tx-11 text-muted">
                                            Mês passado
                                            <span
                                                className={`text-${
                                                    percentageChangeThisMonth >=
                                                    0
                                                        ? 'success'
                                                        : 'danger'
                                                } ms-2`}
                                            >
                                                <i
                                                    className={`fa fa-caret-${
                                                        percentageChangeThisMonth >=
                                                        0
                                                            ? 'up'
                                                            : 'down'
                                                    } me-2`}
                                                ></i>
                                                <span
                                                    className={`badge bg-${
                                                        percentageChangeThisMonth >=
                                                        0
                                                            ? 'success'
                                                            : 'danger'
                                                    } text-white tx-11`}
                                                >
                                                    {percentageChangeThisMonth.toFixed(
                                                        2
                                                    )}
                                                    %
                                                </span>
                                            </span>
                                        </p>
                                    </Col>

                                    <Col xl={4} lg={4} md={4} sm={4}>
                                        <p className=" mb-1">Semana passada</p>
                                        <h5 className="mb-1">
                                            {formatAmount(
                                                totalSalesAmountLastWeek
                                            )}
                                        </h5>
                                        <p className="tx-11 text-muted">
                                            Últimos 14 dias
                                            <span
                                                className={`text-${
                                                    percentageChangeLastWeekSales >=
                                                    0
                                                        ? 'success'
                                                        : 'danger'
                                                } ms-2`}
                                            >
                                                <i
                                                    className={`fa fa-caret-${
                                                        percentageChangeLastWeekSales >=
                                                        0
                                                            ? 'up'
                                                            : 'down'
                                                    } me-2`}
                                                ></i>
                                                <span
                                                    className={`badge bg-${
                                                        percentageChangeLastWeekSales >=
                                                        0
                                                            ? 'success'
                                                            : 'danger'
                                                    } text-white tx-11`}
                                                >
                                                    {percentageChangeLastWeekSales.toFixed(
                                                        2
                                                    )}
                                                    %
                                                </span>
                                            </span>
                                        </p>
                                    </Col>

                                    {/* Hoje */}
                                    <Col xl={4} lg={4} md={4} sm={4}>
                                        <p className=" mb-1">Hoje</p>
                                        <h5 className="mb-1">
                                            {formatAmount(salesAmountToday)}
                                        </h5>
                                        <p className="tx-11 text-muted">
                                            Ontem
                                            <span
                                                className={`text-${
                                                    percentageChangeSalesToday >=
                                                    0
                                                        ? 'success'
                                                        : 'danger'
                                                } ms-2`}
                                            >
                                                <i
                                                    className={`fa fa-caret-${
                                                        percentageChangeSalesToday >=
                                                        0
                                                            ? 'up'
                                                            : 'down'
                                                    } me-2`}
                                                ></i>
                                                <span
                                                    className={`badge bg-${
                                                        percentageChangeSalesToday >=
                                                        0
                                                            ? 'success'
                                                            : 'danger'
                                                    } text-white tx-11`}
                                                >
                                                    {percentageChangeSalesToday.toFixed(
                                                        2
                                                    )}
                                                    %
                                                </span>
                                            </span>
                                        </p>
                                    </Col>
                                </Row>

                                <div id="statistics2">
                                    <Dashboard2data.Statistics2
                                        series={chartData.series}
                                        categories={chartData.categories}
                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={12} lg={12} md={12} sm={12} className="px-0">
                        <Row>
                            {accessData.top10Cities.map((cityStat, index) => (
                                <Col sm={12} lg={12} xl={4} key={cityStat.city}>
                                    <Card>
                                        <Card.Header className=" pb-3">
                                            <h3 className="card-title mb-2">
                                                {cityStat.city}
                                            </h3>
                                        </Card.Header>
                                        {/* <Card.Body className="p-0 customers mt-1">
                                            <div className="country-card pt-0">
                                                <div className="mb-4">
                                                    <div className="d-flex">
                                                        <span className="fs-13 fw-semibold">
                                                            {cityStat.city}
                                                        </span>
                                                        <div className="ms-auto">
                                                            <span className="text-success mx-1">
                                                                <i className="fe fe-trending-up"></i>
                                                            </span>
                                                            <span className="number-font">
                                                                {
                                                                    cityStat.accessCount
                                                                }{' '}
                                                                acessos
                                                            </span>
                                                            (
                                                            {
                                                                cityStat.percentage
                                                            }
                                                            %)
                                                        </div>
                                                    </div>
                                                    <div className="progress progress-style ht-5 mt-2 mb-4">
                                                        <div
                                                            className="progress-bar"
                                                            role="progressbar"
                                                            style={{
                                                                width: `${cityStat.percentage}%`,
                                                                backgroundColor:
                                                                    colors[
                                                                        index %
                                                                            colors.length
                                                                    ],
                                                            }}
                                                            aria-valuenow={
                                                                cityStat.percentage
                                                            }
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body> */}
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Col>
                <Col xs={12} lg={12} md={12} xl={12} xxl={3}>
                    <div className={styles.buttonContainer}>
                        <Button
                            variant=""
                            type="button"
                            className="btn btn-primary"
                            onClick={exportOrdersToCSV}
                        >
                            <i className="fe fe-download me-1"></i> Extrair
                            Relatório
                        </Button>
                    </div>
                    <Card className="overflow-hidden">
                        <Card.Header className=" pb-1">
                            <h3 className="card-title mb-2">
                                Transações Recentes
                            </h3>
                        </Card.Header>
                        <Card.Body className=" p-0 customers mt-1">
                            <ListGroup className="list-lg-group list-group-flush">
                                {recentOrders.map((order, index) => (
                                    <Link
                                        href="#!"
                                        key={index}
                                        className="border-0"
                                    >
                                        <ListGroupItem className="list-group-item-action border-0">
                                            <div className="media mt-0">
                                                <span
                                                    className={`me-3 bg-${
                                                        order.status ===
                                                        'APPROVED'
                                                            ? 'success'
                                                            : 'warning'
                                                    }-transparent text-${
                                                        order.status ===
                                                        'APPROVED'
                                                            ? 'success'
                                                            : 'warning'
                                                    } transaction-icon`}
                                                >
                                                    <i
                                                        className={`fe ${
                                                            order.status ===
                                                            'APPROVED'
                                                                ? 'fe-chevrons-right'
                                                                : 'fe-alert-circle'
                                                        }`}
                                                    ></i>
                                                </span>
                                                <div className="media-body">
                                                    <div className="d-flex align-items-center">
                                                        <div className="mt-0">
                                                            <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                                {order.name}
                                                            </h5>
                                                            <p className="mb-0 tx-12 text-muted">
                                                                {new Date(
                                                                    order.date
                                                                ).toLocaleDateString(
                                                                    'pt-BR'
                                                                )}
                                                            </p>
                                                        </div>
                                                        <span className="ms-auto wd-25p tx-12">
                                                            <span
                                                                className={`text-${
                                                                    order.status ===
                                                                    'APPROVED'
                                                                        ? 'success'
                                                                        : 'danger'
                                                                } tx-11 text-end d-block`}
                                                            >
                                                                {order.status ===
                                                                'APPROVED'
                                                                    ? 'Aprovado'
                                                                    : 'Pendente'}
                                                            </span>
                                                            <span
                                                                className={`float-end text-${
                                                                    order.status ===
                                                                    'APPROVED'
                                                                        ? 'success'
                                                                        : 'danger'
                                                                } font-weight-semibold`}
                                                            >
                                                                {formatAmount(
                                                                    order.amount
                                                                )}
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    </Link>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="col-12">
                    <Card>
                        <Card.Header>
                            <h4 className="card-title">Últimos pedidos</h4>
                        </Card.Header>
                        <Card.Body className="pt-0 example1-table">
                            <div className="table-responsive">
                                <BasicTable recentOrders={recentOrders} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

Finance.layout = 'Contentlayout';

export default Finance;

export const getServerSideProps = async (context) => {
    const session = await getServerSession(context.req, context.res);
  
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  
    // evita erro de serialização (undefined em JSON)
    const safeSession = {
      ...session,
      user: {
        ...session.user,
        image: session.user?.image ?? null,
        name: session.user?.name ?? null,
      },
    };
  
    // --- dados de hoje
    const {
      totalProductsSoldToday: totalSoldToday,
      totalProductsSoldYesterday: totalSoldYesterday,
    } = await getProductsSoldToday();
  
    const {
      totalSalesAmountToday: salesAmountToday,
      totalSalesAmountYesterday: salesAmountYesterday,
    } = await getSalesAmountToday();
  
    // --- últimas semanas
    const {
      totalProductsSoldLastWeek,
      totalProductsSoldWeekBeforeLast,
    } = await getProductsSoldLastWeek();
  
    const {
      totalSalesAmountLastWeek,
      totalSalesAmountWeekBeforeLast,
    } = await getSalesAmountLastWeek();
  
    // --- demais dados
    const recentOrders = await getRecentPayments();
    const monthlySalesData = await getMonthlySalesData();
    const accessData = await getAccessData();
    const totalSales = await getTotalApprovedPayments();
  
    // mês atual e anterior
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const previousMonthDate = new Date();
    previousMonthDate.setMonth(previousMonthDate.getMonth() - 1);
    const lastMonth = previousMonthDate.toLocaleString('default', { month: 'long' });
  
    const currentMonthData =
      monthlySalesData.find((d) => d.month === currentMonth) || { totalRevenue: 0 };
    const lastMonthData =
      monthlySalesData.find((d) => d.month === lastMonth) || { totalRevenue: 0 };
  
    const totalRevenueThisMonth = Number(currentMonthData.totalRevenue || 0);
    const totalRevenueLastMonth = Number(lastMonthData.totalRevenue || 0);
  
    const chartData = {
      series: [
        {
          name: 'Total de Pedidos',
          data: monthlySalesData.map((d) => d.totalOrders),
        },
        {
          name: 'Total Faturado',
          data: monthlySalesData.map((d) => d.totalRevenue),
        },
      ],
      categories: monthlySalesData.map((d) => d.month),
    };
  
    return {
      props: {
        session: safeSession,
        totalSoldToday,
        totalSoldYesterday,
        salesAmountToday,
        salesAmountYesterday,
        totalProductsSoldLastWeek,
        totalProductsSoldWeekBeforeLast,
        totalSalesAmountLastWeek,
        totalSalesAmountWeekBeforeLast,
        chartData,
        recentOrders,
        accessData,
        totalSales,
        totalRevenueThisMonth,
        totalRevenueLastMonth,
      },
    };
};