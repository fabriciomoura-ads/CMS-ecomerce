import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Basicolumn,
    Columnwithlabels,
    Distributed,
    Loaded,
    Markers,
    Negativecolumn,
    Rangecolumn,
    Rotated,
    Stacked100column,
    Stackedcolumn,
} from '../../../../shared/data/charts/apexcharts/columndata';

import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Columncharts = () => {
    return (
        <Fragment>
            <Seo title={'Columncharts'} />
            <Pageheader
                title="Apex Column Charts"
                heading="Apex Charts"
                active="Apex Column Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Column Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-basic">
                                <Basicolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Column Chart With Datalabels
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-datalabels">
                                <Columnwithlabels />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Stacked Column Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-stacked">
                                <Stackedcolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                100% Stacked Column Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-stacked-full">
                                <Stacked100column />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Column Chart With Markers
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-markers">
                                <Markers />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Column Chart With Rotated Labels
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-rotated-labels">
                                <Rotated />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Column Chart With Negative Values
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-negative">
                                <Negativecolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Range Column Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-range">
                                <Rangecolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Dynamic Loaded Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Loaded />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Distributed Columns Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="columns-distributed">
                                <Distributed />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Columncharts.layout = 'Contentlayout';
export default Columncharts;
