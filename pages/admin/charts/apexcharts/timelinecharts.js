import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Advancedmultirange,
    Basictimeline,
    Multiplecolored,
    Timelinegrouped,
    Timelinegrouped1,
} from '../../../../shared/data/charts/apexcharts/timelinedata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Timelinecharts = () => {
    return (
        <Fragment>
            <Seo title={'Timelinecharts'} />
            <Pageheader
                title="Apex Timeline Charts"
                heading="Apex Charts"
                active="Apex Timeline Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic TImeline Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-basic">
                                <Basictimeline />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Multiple Colored TImeline Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-colors">
                                <Multiplecolored />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Multi Series Timeline Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-multi">
                                <Timelinegrouped1 />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Advanced Timeline Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-advanced">
                                <Advancedmultirange />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Timeline-Grouped Rows
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-grouped">
                                <Timelinegrouped />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Timelinecharts.layout = 'Contentlayout';
export default Timelinecharts;
