import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Basicscatter,
    Datetimescatter,
    Imagefillescatter,
} from '../../../../shared/data/charts/apexcharts/scatterdata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Scattercharts = () => {
    return (
        <Fragment>
            <Seo title={'Scattercharts'} />
            <Pageheader
                title="Apex Scatter Charts"
                heading="Apex Charts"
                active="Apex Scatter Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Scatter Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-basic">
                                <Basicscatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Datetime Scatter Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-datetime">
                                <Datetimescatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Image Fill Scatter Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-image">
                                <Imagefillescatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Scattercharts.layout = 'Contentlayout';
export default Scattercharts;
