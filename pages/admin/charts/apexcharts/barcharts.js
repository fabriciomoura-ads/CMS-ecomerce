import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Basicbar,
    Categorybar,
    Grouped,
    Imagebar,
    Markerbar,
    Negativebar,
    Patternbar,
    Reversedbar,
    Stacked100bar,
    Stackedbar,
} from '../../../../shared/data/charts/apexcharts/barchartdata';

import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Barcharts = () => {
    return (
        <Fragment>
            <Seo title={'Barcharts'} />
            <Pageheader
                title="Apex Bar Charts"
                heading="Apex Charts"
                active="Apex Bar Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-basic">
                                <Basicbar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Grouped Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-group">
                                <Grouped />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Stacked Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-stacked">
                                <Stackedbar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                100% Stacked Bar Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-full">
                                <Stacked100bar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Bar Chart With Negative Values
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-negative">
                                <Negativebar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Bar Chart With Markers
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-markers">
                                <Markerbar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Reversed Bar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-reversed">
                                <Reversedbar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Bar With Categogry DataLabels
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-categories">
                                <Categorybar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Patterned Bar Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-pattern">
                                <Patternbar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Bar With Image Fill
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-image">
                                <Imagebar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Barcharts.layout = 'Contentlayout';

export default Barcharts;
