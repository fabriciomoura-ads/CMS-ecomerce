import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import * as Dashboarddata from '../../../shared/data/dashboards/dashboards1data';
import { BasicTable } from '../../../shared/data/dashboards/dashboards1data';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ProtectedRoute from '../../../shared/components/ProtectedRoute';
import { getAccessData } from '../../api/server/db/access/getAccessData';
import { getMonthlySalesData } from '../../api/server/db/finance/getMonthlySalesData';
import { getRecentPayments } from '../../api/server/db/finance/getRecentPayments';
import { getSalesAmountLastWeek } from '../../api/server/db/finance/getSalesAmountLastWeek';
import { getSalesAmountToday } from '../../api/server/db/finance/getSalesAmountToday';
import { getProductsSoldLastWeek } from '../../api/server/db/products/getProductsSoldLastWeek';
import { getProductsSoldToday } from '../../api/server/db/products/getProductsSoldToday';

const Dashboard = ({
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
}) => {
    const { data: session } = useSession();
    const capitalizeFirstLetter = (name) => {
        if (!name) return '';
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    };

    const formatAmount = (amount) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(amount);
    };

    const firstName = capitalizeFirstLetter(session?.user?.name?.split(' ')[0]);

    const percentageChangeOrders =
        totalSoldYesterday > 0
            ? ((totalSoldToday - totalSoldYesterday) / totalSoldYesterday) * 100
            : 0;

    const percentageChangeSales =
        salesAmountYesterday > 0
            ? ((salesAmountToday - salesAmountYesterday) /
                  salesAmountYesterday) *
              100
            : 0;

    const percentageChangeLastWeekOrders =
        totalProductsSoldWeekBeforeLast > 0
            ? ((totalProductsSoldLastWeek - totalProductsSoldWeekBeforeLast) /
                  totalProductsSoldWeekBeforeLast) *
              100
            : 0;

    const percentageChangeLastWeekSales =
        totalSalesAmountWeekBeforeLast > 0
            ? ((totalSalesAmountLastWeek - totalSalesAmountWeekBeforeLast) /
                  totalSalesAmountWeekBeforeLast) *
              100
            : 0;

    return (
        <>
            <Seo title={'Dashboard'} />
            <ProtectedRoute>
                <React.Fragment>
                    <Pageheader
                        title="DASHBOARD"
                        heading="Dashboard"
                        active="Geral"
                    />
                    <Row>
                        <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
                            <Row>
                                <Col xl={12} lg={12} md={12} xs={12}>
                                    <Card>
                                        <Card.Body>
                                            <Row>
                                                <Col
                                                    xl={9}
                                                    lg={10}
                                                    md={10}
                                                    sm={12}
                                                    className="mb-sm-0 mb-4 "
                                                >
                                                    <div className="text-justified align-items-center">
                                                        <h3 className="text-dark fw-semibold mb-2 mt-0">
                                                            Olá, Bem Vindo de volta{' '}
                                                            <span className="text-primary">
                                                                {firstName}
                                                            </span>
                                                        </h3>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                                    <Card className=" sales-card">
                                        <Row>
                                            <div className="col-8">
                                                <div className="ps-4 pt-4 pe-3 pb-4">
                                                    <div className="">
                                                        <span className="mb-2 fs-12 fw-semibold d-block">
                                                            Pedidos hoje
                                                        </span>
                                                    </div>
                                                    <div className="pb-0 mt-0">
                                                        <div className="d-flex">
                                                            <h4 className="fs-20 fw-semibold mb-2">
                                                                {new Intl.NumberFormat(
                                                                    'pt-BR'
                                                                ).format(
                                                                    totalSoldToday
                                                                )}
                                                            </h4>
                                                        </div>
                                                        <p className="mb-0 fs-12 text-muted">
                                                            Ontem
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
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div
                                                    className="circle-icon bg-primary-transparent text-center align-self-center overflow-hidden"
                                                    style={{
                                                        paddingTop: '2px',
                                                    }}
                                                >
                                                    <i className="bi bi-bag-check fs-16 text-primary"></i>
                                                </div>
                                            </div>
                                        </Row>
                                    </Card>
                                </Col>

                                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                                    <Card className=" sales-card">
                                        <Row className="row">
                                            <div className="col-8">
                                                <div className="ps-4 pt-4 pe-3 pb-4">
                                                    <div className="">
                                                        <span className="mb-2 fs-12 fw-semibold d-block">
                                                            Faturado hoje
                                                        </span>
                                                    </div>
                                                    <div className="pb-0 mt-0">
                                                        <div className="d-flex">
                                                            <h4 className="fs-20 fw-semibold mb-2">
                                                                {formatAmount(
                                                                    salesAmountToday
                                                                )}
                                                            </h4>
                                                        </div>
                                                        <p className="mb-0 fs-12 text-muted">
                                                            Ontem
                                                            <i
                                                                className={`bx bx-caret-${
                                                                    percentageChangeSales >=
                                                                    0
                                                                        ? 'up'
                                                                        : 'down'
                                                                } mx-2 text-${
                                                                    percentageChangeSales >=
                                                                    0
                                                                        ? 'success'
                                                                        : 'danger'
                                                                }`}
                                                            ></i>
                                                            <span
                                                                className={`fw-semibold text-${
                                                                    percentageChangeSales >=
                                                                    0
                                                                        ? 'success'
                                                                        : 'danger'
                                                                }`}
                                                            >
                                                                {percentageChangeSales.toFixed(
                                                                    2
                                                                )}
                                                                %
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="circle-icon bg-info-transparent text-center align-self-center overflow-hidden">
                                                    <i className="fe fe-dollar-sign fs-16 text-info"></i>
                                                </div>
                                            </div>
                                        </Row>
                                    </Card>
                                </Col>

                                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                                    <Card className=" sales-card">
                                        <Row className="row">
                                            <div className="col-8">
                                                <div className="ps-4 pt-4 pe-3 pb-4">
                                                    <div className="">
                                                        <span className="mb-2 fs-12 fw-semibold d-block">
                                                            Pedidos nos últimos 7
                                                            dias
                                                        </span>
                                                    </div>
                                                    <div className="pb-0 mt-0">
                                                        <div className="d-flex">
                                                            <h4 className="fs-20 fw-semibold mb-2">
                                                                {new Intl.NumberFormat(
                                                                    'pt-BR'
                                                                ).format(
                                                                    totalProductsSoldLastWeek
                                                                )}
                                                            </h4>
                                                        </div>
                                                        <p className="mb-0 fs-12 text-muted">
                                                            Últimos 14 dias
                                                            <i
                                                                className={`bx bx-caret-${
                                                                    percentageChangeLastWeekOrders >=
                                                                    0
                                                                        ? 'up'
                                                                        : 'down'
                                                                } mx-2 text-${
                                                                    percentageChangeLastWeekOrders >=
                                                                    0
                                                                        ? 'success'
                                                                        : 'danger'
                                                                }`}
                                                            ></i>
                                                            <span
                                                                className={`fw-semibold text-${
                                                                    percentageChangeLastWeekOrders >=
                                                                    0
                                                                        ? 'success'
                                                                        : 'danger'
                                                                }`}
                                                            >
                                                                {percentageChangeLastWeekOrders.toFixed(
                                                                    2
                                                                )}
                                                                %
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="circle-icon bg-secondary-transparent text-center align-self-center overflow-hidden">
                                                    <i className="fe fe-shopping-bag fs-16 text-secondary"></i>
                                                </div>
                                            </div>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                                    <Card className=" sales-card">
                                        <Row className="row">
                                            <div className="col-8">
                                                <div className="ps-4 pt-4 pe-3 pb-4">
                                                    <div className="">
                                                        <span className="mb-2 fs-12 fw-semibold d-block">
                                                            Faturado semana passada
                                                        </span>
                                                    </div>
                                                    <div className="pb-0 mt-0">
                                                        <div className="d-flex">
                                                            <h4 className="fs-20 fw-semibold mb-2">
                                                                {formatAmount(
                                                                    totalSalesAmountLastWeek
                                                                )}
                                                            </h4>
                                                        </div>
                                                        <p className="mb-0 fs-12  text-muted">
                                                            Semana anterior
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
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="circle-icon bg-warning-transparent text-center align-self-center overflow-hidden">
                                                    <i className="bi bi-coin fs-18 text-warning"></i>
                                                </div>
                                            </div>
                                        </Row>
                                    </Card>
                                </Col>

                                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Card className="browser-usage">
                                        <Card.Header className="pb-1">
                                            <h3 className="card-title mb-2">
                                                Acessos
                                            </h3>
                                        </Card.Header>
                                        <Card.Body className="card-body p-0">
                                            <div className="browser-stats">
                                                {Object.entries(accessData?.browser)
                                                    .sort(
                                                        ([, countA], [, countB]) =>
                                                            countB - countA
                                                    )
                                                    .slice(0, 7)
                                                    .map(([browser, count]) => {
                                                        let iconPath = '';
                                                        let company = '';

                                                        switch (
                                                            browser.toLowerCase()
                                                        ) {
                                                            case 'chrome':
                                                                iconPath =
                                                                    '../../../assets/images/svgicons/chrome.svg';
                                                                company =
                                                                    'Google, Inc.';
                                                                break;
                                                            case 'edge':
                                                                iconPath =
                                                                    '../../../assets/images/svgicons/edge.svg';
                                                                company =
                                                                    'Microsoft Corporation, Inc.';
                                                                break;
                                                            case 'firefox':
                                                                iconPath =
                                                                    '../../../assets/images/svgicons/firefox.svg';
                                                                company =
                                                                    'Mozilla Foundation, Inc.';
                                                                break;
                                                            case 'mobile safari':
                                                            case 'safari':
                                                                iconPath =
                                                                    '../../../assets/images/svgicons/safari.svg';
                                                                company =
                                                                    'Apple Corporation, Inc.';
                                                                break;
                                                            case 'opera':
                                                                iconPath =
                                                                    '../../../assets/images/svgicons/opera.svg';
                                                                company =
                                                                    'Opera, Inc.';
                                                                break;
                                                            case 'samsung internet':
                                                                iconPath =
                                                                    '../../../assets/images/svgicons/ss-internet.svg';
                                                                company =
                                                                    'Samsung Electronics';
                                                                break;
                                                            case 'instagram':
                                                                iconPath =
                                                                    '../../../assets/images/svgicons/insta.webp';
                                                                company =
                                                                    'Instagram, Inc.';
                                                                break;
                                                            case 'facebook':
                                                                iconPath =
                                                                    '../../../assets/images/svgicons/facebook.png';
                                                                company =
                                                                    'Facebook, Inc.';
                                                                break;
                                                            default:
                                                                iconPath =
                                                                    '../../../assets/images/svgicons/opera.svg';
                                                                company = 'Outros';
                                                                break;
                                                        }

                                                        return (
                                                            <div
                                                                className="d-flex align-items-center item border-bottom my-2"
                                                                key={browser}
                                                            >
                                                                <div className="d-flex">
                                                                    <img
                                                                        src={
                                                                            iconPath
                                                                        }
                                                                        alt={
                                                                            browser
                                                                        }
                                                                        className="ht-30 wd-30 me-2"
                                                                    />
                                                                    <div className="truncate">
                                                                        <h6 className="">
                                                                            {
                                                                                browser
                                                                            }
                                                                        </h6>
                                                                        <span className="text-muted fs-12">
                                                                            {
                                                                                company
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="ms-auto my-auto">
                                                                    <div className="d-flex">
                                                                        <span className="me-4 mt-1 fw-semibold fs-16">
                                                                            {new Intl.NumberFormat(
                                                                                'pt-BR'
                                                                            ).format(
                                                                                count
                                                                            )}{' '}
                                                                            acessos
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl={7} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className=" border-bottom-0">
                                    <div>
                                        <h3 className="card-title mb-2 ">
                                            Relatório Mensal
                                        </h3>{' '}
                                        <span className="d-block fs-12 mb-0 text-muted"></span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div id="statistics1">
                                        <Dashboarddata.Statistics1
                                            chartData={chartData}
                                        />
                                    </div>
                                </Card.Body>
                            </Card>
                            <Row>
                                <Col xl={6} lg={12} sm={12}>
                                    <Card className=" overflow-hidden website">
                                        <Card.Header className=" pb-1">
                                            <h3 className="card-title mb-2">
                                                Clientes recentes
                                            </h3>
                                        </Card.Header>
                                        <Card.Body className=" p-0 customers mt-1">
                                            <div className="list-group list-lg-group list-group-flush">
                                                {recentOrders
                                                    .slice(0, 7)
                                                    .map((order, index) => (
                                                        <div
                                                            className="border-0"
                                                            key={index}
                                                        >
                                                            <div className="list-group-item list-group-item-action p-3 border-0">
                                                                <div className="media mt-0">
                                                                    <img
                                                                        className="avatar-lg rounded-circle me-3 my-auto shadow"
                                                                        src="../../../assets/images/faces/person.png"
                                                                        alt="Image description"
                                                                    />
                                                                    <div className="media-body flex-fill">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="mt-0">
                                                                                <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                                                    {
                                                                                        order.name
                                                                                    }
                                                                                </h5>
                                                                                <p className="mb-0 fs-12 text-muted">
                                                                                    User
                                                                                    ID:
                                                                                    #
                                                                                    {
                                                                                        order.userId
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                            <span className="ms-auto wd-45p fs-14">
                                                                                <span
                                                                                    className={`float-end badge ${
                                                                                        order.status ===
                                                                                        'APPROVED'
                                                                                            ? 'bg-success-transparent'
                                                                                            : 'bg-danger-transparent'
                                                                                    }`}
                                                                                >
                                                                                    <span
                                                                                        className={`op-7 fw-semibold ${
                                                                                            order.status ===
                                                                                            'APPROVED'
                                                                                                ? 'text-success'
                                                                                                : 'text-danger'
                                                                                        }`}
                                                                                    >
                                                                                        {order.status ===
                                                                                        'APPROVED'
                                                                                            ? ' Pago'
                                                                                            : 'Pendente'}
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col xl={6} lg={12} sm={12}>
                                    {/* <Card>
                                        <Card.Header className=" pb-0">
                                            <h3 className="card-title mb-2">
                                                Visitas Semanais
                                            </h3>
                                        </Card.Header>
                                        <Card.Body className=" pb-0">
                                            <div className="row mb-4">
                                                <div className="col-6">
                                                    <div className="text-muted fs-12 text-center mb-2">
                                                        Visitas com celular
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                                                        <span className="me-3 fs-26 fw-semibold">
                                                            {new Intl.NumberFormat(
                                                                'pt-BR'
                                                            ).format(
                                                                accessData?.totalMobileAccesses || 0
                                                            )}
                                                        </span>
                                                        <span className="text-success fw-semibold">
                                                            <i className="fa fa-caret-up me-2"></i>
                                                            0.23%
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="text-muted fs-12 text-center mb-2">
                                                        Visitas com computador
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center flex-wrap">
                                                        <span className="me-3 fs-26 fw-semibold">
                                                            {new Intl.NumberFormat(
                                                                'pt-BR'
                                                            ).format(
                                                                accessData?.totalDesktopAccesses || 0
                                                            )}
                                                        </span>
                                                        <span className="text-danger fw-semibold">
                                                            <i className="fa fa-caret-down me-2"></i>
                                                            0.11%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="Viewers">
                                                {accessData && (accessData.totalMobileAccesses > 0 || accessData.totalDesktopAccesses > 0) ? (
                                                    <Dashboarddata.Viewers
                                                        accessData={accessData || {}}
                                                    />
                                                ) : (
                                                    <div className="text-center py-4">
                                                        <p className="text-muted">Nenhum dado de acesso disponível</p>
                                                        <small className="text-muted">Os dados aparecerão aqui quando houver visitas registradas</small>
                                                    </div>
                                                )}
                                            </div>
                                        </Card.Body>
                                    </Card> */}
                                </Col>
                            </Row>
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
                </React.Fragment>
            </ProtectedRoute>
        </>
    );
};

Dashboard.layout = 'Contentlayout';

export default Dashboard;

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

    const safeSession = {
        expires: session?.expires ?? null,
        user: {
          name:  session?.user?.name  ?? null,
          email: session?.user?.email ?? null,
          image: session?.user?.image ?? null,
        },
      };

    const {
        totalProductsSoldToday: totalSoldToday,
        totalProductsSoldYesterday: totalSoldYesterday,
    } = await getProductsSoldToday();

    const {
        totalSalesAmountToday: salesAmountToday,
        totalSalesAmountYesterday: salesAmountYesterday,
    } = await getSalesAmountToday();

    const { totalProductsSoldLastWeek, totalProductsSoldWeekBeforeLast } =
        await getProductsSoldLastWeek();

    const { totalSalesAmountLastWeek, totalSalesAmountWeekBeforeLast } =
        await getSalesAmountLastWeek();

    const recentOrders = await getRecentPayments();
    const monthlySalesData = await getMonthlySalesData();
    const accessData = await getAccessData();

    const chartData = {
        series: [
            {
                name: 'Total de Pedidos',
                data: monthlySalesData.map((data) => data.totalOrders),
            },
            {
                name: 'Total Faturado',
                data: monthlySalesData.map((data) => data.totalRevenue),
            },
        ],
        categories: monthlySalesData.map((data) => data.month),
    };

    console.log(totalSoldToday);

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
        },
    };
};
