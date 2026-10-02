import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    Basiheatmap,
    Colorrange,
    Multiseriesheatmap,
    Shadesheatmap,
} from '../../../../shared/data/charts/apexcharts/heatmapdata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Heatmapcharts = () => {
    return (
        <Fragment>
            <Seo title={'Heatmapcharts'} />
            <Pageheader
                title="Apex Heatmap Charts"
                heading="Apex Charts"
                active="Apex Heatmap Charts"
            />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Basic Heatmap Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-basic">
                                <Basiheatmap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Multi Series Heatmap Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-multiseries">
                                <Multiseriesheatmap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Color Range Heatmap Chart
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-colorrange">
                                <Colorrange />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Heatmap Range Without Shades
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="heatmap-range">
                                <Shadesheatmap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Heatmapcharts.layout = 'Contentlayout';
export default Heatmapcharts;
