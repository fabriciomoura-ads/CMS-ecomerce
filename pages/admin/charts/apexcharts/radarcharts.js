import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Basicradar,
    Multipleradar,
    Polygonradar,
} from '../../../../shared/data/charts/apexcharts/radardata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Radarcharts = () => {
    return (
        <Fragment>
            <Seo title={'Radarcharts'} />
            <Pageheader
                title="Apex Radar Charts"
                heading="Apex Charts"
                active="Apex Radar Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Radar Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-basic">
                                <Basicradar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Radar Chart-Multiple Series
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-multiple">
                                <Multipleradar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Radar Chart Polygon Fill
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="radar-polygon">
                                <Polygonradar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Radarcharts.layout = 'Contentlayout';
export default Radarcharts;
