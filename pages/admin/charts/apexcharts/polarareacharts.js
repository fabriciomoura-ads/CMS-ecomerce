import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Basicpolararea,
    Monochromepolar,
} from '../../../../shared/data/charts/apexcharts/polarareadata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Polarareacharts = () => {
    return (
        <Fragment>
            <Seo title={'Polarareacharts'} />
            <Pageheader
                title="Apex Polar Area Charts"
                heading="Apex Charts"
                active="Apex Polar Area Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Polar Area Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="polararea-basic">
                                <Basicpolararea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Polar Area Monochrome Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="polararea-monochrome">
                                <Monochromepolar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Polarareacharts.layout = 'Contentlayout';
export default Polarareacharts;
