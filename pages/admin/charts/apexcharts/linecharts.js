import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Annotations,
    Basicline,
    Brushchart,
    Dashed,
    Gradientline,
    Linechartwithlabels,
    Missingnullvalues,
    Stepline,
    Syncing,
    Zoomabletime,
} from '../../../../shared/data/charts/apexcharts/linedata';

import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
const Linecharts = () => {
    return (
        <Fragment>
            <Seo title={'Linecharts'} />
            <Pageheader
                title="Apex Line Charts"
                heading="Apex Charts"
                active="Apex Line Charts"
            />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Line Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="line-chart">
                                <Basicline />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Line Chart With Data Labels
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="line-chart-datalabels">
                                <Linechartwithlabels />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Zoomable Time Series
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="zoom-chart">
                                <Zoomabletime />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Line With Annotations
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="annotation-chart">
                                <Annotations />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Brush Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Brushchart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">StepLine Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="stepline-chart">
                                <Stepline />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Gradient Line Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="gradient-chart">
                                <Gradientline />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Missing/Null Values Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="null-chart">
                                <Missingnullvalues />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Dashed Line Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="dashed-chart">
                                <Dashed />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Syncing Charts</div>
                        </Card.Header>
                        <Card.Body>
                            <Syncing />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Linecharts.layout = 'Contentlayout';
export default Linecharts;
