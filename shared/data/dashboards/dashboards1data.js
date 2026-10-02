import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import localeData from 'dayjs/plugin/localeData';
import dynamic from 'next/dynamic';
import React, { Fragment } from 'react';
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from 'react-table';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});
dayjs.extend(localeData);
dayjs.locale('pt-br');
export class Statistics1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: props.chartData.series || [
                {
                    name: 'Total de Pedidos',
                    data: [44, 42, 57, 86, 58, 55, 70, 43, 23, 54, 77, 34],
                },
                {
                    name: 'Total Faturado',
                    data: [34, 22, 37, 56, 21, 35, 60, 34, 56, 78, 89, 53],
                },
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 280,
                },
                grid: {
                    borderColor: '#f2f6f7',
                    show: true,
                },
                colors: ['#FF0000', '#FFC107'], // Total de Pedidos em vermelho e Total Faturado em amarelo
                plotOptions: {
                    bar: {
                        borderRadius: 5,
                        colors: {
                            ranges: [
                                {
                                    from: -100,
                                    to: -46,
                                    color: '#ebeff5',
                                },
                                {
                                    from: -45,
                                    to: 0,
                                    color: '#ebeff5',
                                },
                            ],
                        },
                        columnWidth: '40%',
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 4,
                    colors: ['transparent'],
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
                    type: 'month',
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    axisBorder: {
                        show: true,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        width: 6,
                        offsetX: 0,
                        offsetY: 0,
                    },
                    labels: {
                        rotate: -90,
                    },
                },
                yaxis: {
                    title: {
                        text: '',
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + '';
                        },
                    },
                },
                fill: {
                    opacity: 1,
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height={280}
                />
            </div>
        );
    }
}

export class Viewers extends React.Component {
    constructor(props) {
        super(props);

        // Garantir que accessData existe e tem as propriedades necessárias
        const accessData = props.accessData || {};
        const mobileData = accessData.mobile || new Array(7).fill(0);
        const desktopData = accessData.desktop || new Array(7).fill(0);
        const dates = accessData.dates || ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

        this.state = {
            series: [
                {
                    name: 'Celular',
                    data: mobileData,
                },
                {
                    name: 'Computador',
                    data: desktopData,
                },
            ],
            options: {
                chart: {
                    height: 315,
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    background: 'none',
                    fill: '#fff',
                },
                grid: {
                    borderColor: '#f2f6f7',
                },
                colors: ['#3b82f6', '#f59e0b'], // Azul para mobile, amarelo para desktop
                background: 'transparent',
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },
                legend: {
                    show: true,
                    position: 'top',
                },
                xaxis: {
                    categories: dates,
                    axisBorder: {
                        show: false,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: false,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        width: 6,
                        offsetX: 0,
                        offsetY: 0,
                    },
                    labels: {
                        rotate: -90,
                    },
                },
                yaxis: {
                    show: true,
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                tooltip: {
                    theme: 'dark',
                    x: {
                        format: 'dd/MM/yy HH:mm',
                    },
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    height={310}
                />
            </div>
        );
    }
}

export const Radialbar = {
    series: [85],
    options: {
        states: {
            normal: {
                filter: {
                    type: 'none',
                },
            },
            hover: {
                filter: {
                    type: 'none',
                },
            },
            active: {
                filter: {
                    type: 'none',
                },
            },
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                hollow: {
                    margin: 20,
                    size: '50%',
                    background: '#fff',
                    stroke: {
                        width: 5,
                    },
                },
                dataLabels: {
                    name: {
                        show: false,
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 5,
                    },
                    value: {
                        show: false,
                        offsetY: 76,
                        fontSize: '22px',
                        color: undefined,
                    },
                },
            },
        },
        chart: {
            height: 170,
            width: 148,
            type: 'radialBar',
        },
        stroke: {
            lineCap: 'round',
        },
        colors: ['var(--primary-color)'],
        labels: [''],
    },
};

export const COLUMNS = [
    {
        Header: 'Data da compra',
        accessor: 'date', // Chave referente ao campo da data de compra
        Cell: ({ value }) => {
            return dayjs(value).format('DD/MM/YYYY'); // Formatar a data
        },
    },
    {
        Header: 'Nome do cliente',
        accessor: 'name', // Chave referente ao nome do cliente
    },
    {
        Header: 'ID do produto',
        accessor: 'productId', // Chave referente ao ID do produto
    },
    {
        Header: 'Método de pagamento',
        accessor: 'paymentMethod', // Chave referente ao método de pagamento
    },
    {
        Header: 'Valor do produto',
        accessor: 'amount', // Chave referente ao valor do produto
        Cell: ({ value }) => {
            return `R$ ${value.toFixed(2)}`; // Formatar o valor do produto
        },
    },
    {
        Header: 'Status',
        accessor: 'status', // Chave referente ao status do pedido
        Cell: ({ value }) => {
            let badgeClass = '';
            let statusText = '';

            // Definindo as classes e textos de acordo com o status
            if (value === 'PENDING') {
                badgeClass = 'badge bg-orange';
                statusText = 'Pendente';
            } else if (value === 'APPROVED') {
                badgeClass = 'badge bg-success';
                statusText = 'Aprovado';
            } else if (value === 'DELIVERED') {
                badgeClass = 'badge bg-blue';
                statusText = 'Aprovado';
            } else if (value === 'CANCELED') {
                badgeClass = 'badge bg-red';
                statusText = 'Cancelado';
            }

            return <span className={badgeClass}>{statusText}</span>;
        },
    },
];

export const DATATABLE = [
    {
        PurchaseDate: '#01',
        ClientName: 'Sean Black',
        ProductID: 'PRO12345',
        Product: 'Mi LED Smart TV 4A 80',
        PaymentMode: 'Online Payment',
        Status: <span className="badge bg-success">Delivered</span>,
        ProductCost: '$14,500',
        color: 'badge badge-success',
    },
    {
        PurchaseDate: '#02',
        ClientName: 'Evan Rees',
        ProductID: 'PRO8765',
        Product: 'Thomson R9 122cm (48 inch) Full HD LED TV',
        PaymentMode: 'Cash on delivered',
        Status: <span className="badge bg-primary">Add Cart</span>,
        ProductCost: '$30,000',
    },
    {
        PurchaseDate: '#03',
        ClientName: 'David Wallace',
        ProductID: 'PRO54321',
        Product: 'Vu 80cm (32 inch) HD Ready LED TV',
        PaymentMode: 'Online Payment',
        Status: <span className="badge bg-orange">Pending</span>,
        ProductCost: '$13,200',
    },
    {
        PurchaseDate: '#04',
        ClientName: 'Julia Bower',
        ProductID: 'PRO97654',
        Product: 'Micromax 81cm (32 inch) HD Ready LED TV',
        PaymentMode: 'Cash on delivered',
        Status: <span className="badge bg-secondary">Delivering</span>,
        ProductCost: '$15,100',
    },
    {
        PurchaseDate: '#05',
        ClientName: 'Kevin James',
        ProductID: 'PRO4532',
        Product: 'HP 200 Mouse &amp; Wireless Laptop Keyboard',
        PaymentMode: 'Online Payment',
        Status: <span className="badge bg-danger">Shipped</span>,
        ProductCost: '$5,987',
    },
    {
        PurchaseDate: '#06',
        ClientName: 'Theresa Wright',
        ProductID: '$11,987',
        Product: 'Digisol DG-HR3400 Router ',
        PaymentMode: 'Cash on delivered',
        Status: <span className="badge bg-secondary">Delivering</span>,
        ProductCost: '$372,000',
    },
    {
        PurchaseDate: '#07',
        ClientName: 'Sebastian	Black',
        ProductID: 'PRO4567',
        Product: 'Dell WM118 Wireless Optical Mouse',
        PaymentMode: 'Online Payment',
        Status: <span className="badge bg-info">Add to Cart</span>,
        ProductCost: '$4,700',
    },
    {
        PurchaseDate: '#08',
        ClientName: 'Kevin Glover',
        ProductID: 'PRO32156',
        Product: 'Dell 16 inch Laptop Backpack ',
        PaymentMode: 'Cash on delivered',
        Status: <span className="badge bg-pink">Delivered</span>,
        ProductCost: '$678',
    },
];

export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <input
            value={filter || ''}
            onChange={(e) => setFilter(e.target.value)}
            className="form-control form-control-sm "
            placeholder="Search..."
        />
    );
};
export const BasicTable = ({ recentOrders }) => {
    const tableInstance = useTable(
        {
            columns: COLUMNS,
            data: recentOrders, // Passa os dados recebidos de recentOrders
        },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const {
        getTableProps, // table props from react-table
        headerGroups, // headerGroups, if your table has groupings
        getTableBodyProps, // table body props from react-table
        prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
        state,
        setGlobalFilter,
        page, // use, page or rows
        nextPage,
        previousPage,
        // canNextPage,
        // canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
    } = tableInstance;

    const { globalFilter, pageIndex, pageSize } = state;

    return (
        <>
            <div className="d-flex justify-content-between flex-wrap gap-2 mb-3">
                <div>
                    {/* <GlobalFilter
                        filter={globalFilter}
                        setFilter={setGlobalFilter}
                    /> */}
                </div>
                {/* <ButtonGroup>
                    <Dropdown>
                        <Dropdown.Toggle
                            variant=""
                            aria-expanded="false"
                            aria-haspopup="true"
                            className="btn-primary btn-sm btn-wave waves-effect waves-light"
                            data-bs-toggle="dropdown"
                            id="dropdownMenuButton1"
                            type="button"
                        >
                            Sort By
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                            style={{ margin: '0px' }}
                            className="dropdown-menu tx-13"
                        >
                            <Dropdown.Item className="dropdown-item" href="#!">
                                New
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" href="#!">
                                Popular
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-item" href="#!">
                                Relevant
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonGroup> */}
            </div>
            <table {...getTableProps()} className="table  mb-0 table-bordered">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            key={Math.random()}
                        >
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(
                                        column.getSortByToggleProps()
                                    )}
                                    className={column.className}
                                    key={Math.random()}
                                >
                                    <Fragment key={Math.random()}>
                                        <span className="tabletitle">
                                            {column.render('Header')}
                                        </span>
                                        <span>
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <i className="fa fa-angle-down"></i>
                                                ) : (
                                                    <i className="fa fa-angle-up"></i>
                                                )
                                            ) : (
                                                ''
                                            )}
                                        </span>
                                    </Fragment>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={Math.random()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            className="text-center"
                                            {...cell.getCellProps()}
                                            key={Math.random()}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
