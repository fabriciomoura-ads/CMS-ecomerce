import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Bar,
    Bubble,
    Doughnut,
    Line,
    Pie,
    PolarArea,
    Radar,
    Scatter,
} from 'react-chartjs-2';
import * as chartjsdata from '../../../shared/data/charts/chartjsdata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Chartjscharts = () => {
    return (
        <Fragment>
            <Seo title={'Chartjscharts'} />
            <Pageheader
                title="CHARTJS CHARTS"
                heading="Charts"
                active="Chartjs charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Line Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Line
                                options={chartjsdata.Option1}
                                data={chartjsdata.Data1}
                                height="300px"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Bar Chart </div>
                        </Card.Header>
                        <Card.Body>
                            <Bar
                                options={chartjsdata.Option2}
                                data={chartjsdata.Data2}
                                height="300px"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Chartjs Pie Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <Pie
                                options={chartjsdata.Option3}
                                data={chartjsdata.Data3}
                                height="300px"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Chartjs Doughnut Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Doughnut
                                options={chartjsdata.Option4}
                                data={chartjsdata.Data4}
                                height="300px"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Chartjs Mixed Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Scatter
                                options={chartjsdata.Option5}
                                data={chartjsdata.Data5}
                                height="300px"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Chartjs Polar Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <PolarArea
                                options={chartjsdata.Option6}
                                data={chartjsdata.Data6}
                                height="300px"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Chartjs Radial Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Radar
                                options={chartjsdata.Option7}
                                data={chartjsdata.Data7}
                                height="300px"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Chartjs Scatter Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Scatter
                                options={chartjsdata.Option8}
                                data={chartjsdata.Data8}
                                height="300px"
                            />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Chartjs Bubble Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Bubble
                                options={chartjsdata.Option9}
                                data={chartjsdata.Data9}
                                height="300px"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Chartjscharts.layout = 'Contentlayout';

export default Chartjscharts;
