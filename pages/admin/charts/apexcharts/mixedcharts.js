import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Linearea,
    Linecolumnarea,
    Mixedlinecolumn,
    MultipleYaxis,
} from '../../../../shared/data/charts/apexcharts/mixeddata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Mixedcharts = () => {
    return (
        <Fragment>
            <Seo title={'Mixedcharts'} />
            <Pageheader
                title="Apex Mixed Charts"
                heading="Apex Charts"
                active="Apex Mixed Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Line & Column Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linecolumn">
                                <Mixedlinecolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Multiple Y-Axis Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-multiple-y">
                                <MultipleYaxis />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Line & Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linearea">
                                <Linearea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Line,Column & Area Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-all">
                                <Linecolumnarea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Mixedcharts.layout = 'Contentlayout';
export default Mixedcharts;
