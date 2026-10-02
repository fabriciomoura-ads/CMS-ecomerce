import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Basicradialbar,
    Circlechart,
    Circlegauge,
    Circlewithimage,
    Gradientcircle,
    Multipleradial,
    Semicirclegauge,
} from '../../../../shared/data/charts/apexcharts/radialbardata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Radialbarcharts = () => {
    return (
        <Fragment>
            <Seo title={'Radialbarcharts'} />
            <Pageheader
                title="Apex Radialbar Charts"
                heading="Apex Charts"
                active="Apex Radialbar Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Pie Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-basic">
                                <Basicradialbar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Multiple Radialbar Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-multiple">
                                <Multipleradial />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Circle Chart - Custom Angle
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-custom">
                                <Circlechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Gradient Circle Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="gradient-circle">
                                <Gradientcircle />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Stroked Circular Gauge
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-stroked">
                                <Circlegauge />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Circle Chart With Image
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-image">
                                <Circlewithimage />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Semi Circular Gauge
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-semi">
                                <Semicirclegauge />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Radialbarcharts.layout = 'Contentlayout';
export default Radialbarcharts;
