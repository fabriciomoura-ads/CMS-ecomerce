import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Backgroundechart,
    Basicareaechart,
    Basicbarechart,
    Basicechart,
    Basicradarechart,
    Basicscatter,
    Bubblechart,
    Candlestickechart,
    Doughnutchart,
    Funnelechart,
    Gaugeechart,
    Heatmapechart,
    Horizontalechart,
    Horizontalstackechart,
    Negativeechart,
    Pieechart,
    Simplegraph,
    Singlebarechart,
    Smoothedechart,
    Stackedarea,
    Stackedline,
    Steplineechart,
    Treemapechart,
    Waterfallechart,
} from '../../../shared/data/charts/echartdata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Echartscharts = () => {
    return (
        <Fragment>
            <Seo title={'Echartscharts'} />
            <Pageheader
                title="ECHART CHARTS"
                heading="Charts"
                active="Echart Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Line Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-basic-line"
                                className="echart-charts"
                            >
                                <Basicechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Smoothed Line Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-smoothed-line"
                                className="echart-charts"
                            >
                                <Smoothedechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-basic-area"
                                className="echart-charts"
                            >
                                <Basicareaechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Stacked Line Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-stacked-line"
                                className="echart-charts"
                            >
                                <Stackedline />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Stacked Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-stacked-area"
                                className="echart-charts"
                            >
                                <Stackedarea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Step Line Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-step-line"
                                className="echart-charts"
                            >
                                <Steplineechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-bar-basic"
                                className="echart-charts"
                            >
                                <Basicbarechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Bar With Background Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-bar-background"
                                className="echart-charts"
                            >
                                <Backgroundechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Style For a Single Bar Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-bar-single"
                                className="echart-charts"
                            >
                                <Singlebarechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Water Fall Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-waterfall"
                                className="echart-charts"
                            >
                                <Waterfallechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Bar With Negative Values Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-negative-values"
                                className="echart-charts"
                            >
                                <Negativeechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Horizontal Bar Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-bar-horizontal"
                                className="echart-charts"
                            >
                                <Horizontalechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Horizontal Stacked Bar Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-stacked-horizontal"
                                className="echart-charts"
                            >
                                <Horizontalstackechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Pie Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="echart-pie" className="echart-charts">
                                <Pieechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Doughnut Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="echart-doughnut" className="echart-charts">
                                <Doughnutchart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Scatter Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="echart-scatter" className="echart-charts">
                                <Basicscatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Bubble Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="echart-bubble" className="echart-charts">
                                <Bubblechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Candlestick Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-candlestick"
                                className="echart-charts"
                            >
                                <Candlestickechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Radar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-basic-radar"
                                className="echart-charts"
                            >
                                <Basicradarechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Heatmap Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="echart-heatmap" className="echart-charts">
                                <Heatmapechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Treemap Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="echart-treemap" className="echart-charts">
                                <Treemapechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Funnel Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="echart-funnel" className="echart-charts">
                                <Funnelechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Gauge Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-gauge-basic"
                                className="echart-charts"
                            >
                                <Gaugeechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Simple Graph Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div
                                id="echart-simple-graph"
                                className="echart-charts"
                            >
                                <Simplegraph />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Echartscharts.layout = 'Contentlayout';
export default Echartscharts;
