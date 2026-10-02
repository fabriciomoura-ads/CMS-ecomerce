import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Basicrangearea,
    Comborangearea,
} from '../../../../shared/data/charts/apexcharts/rangeareadata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Rangeareacharts = () => {
    return (
        <Fragment>
            <Seo title={'Rangeareacharts'} />
            <Pageheader
                title="Apex Range Area Charts"
                heading="Apex Charts"
                active="Apex Range Area Charts"
            />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Range Area Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-basic">
                                <Basicrangearea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Combo Range Area Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-combo">
                                <Comborangearea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Rangeareacharts.layout = 'Contentlayout';
export default Rangeareacharts;
