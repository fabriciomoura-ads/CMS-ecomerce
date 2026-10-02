import { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import {
    BasicTreeviewexample1,
    BasicTreeviewexample2,
    BasicTreeviewexample3,
    BasicTreeviewexample4,
} from '../../../shared/data/apps/TreeviewFunctionality';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Treeview = () => {
    return (
        <Fragment>
            <Seo title={'Treeview'} />
            <Pageheader title="TREEVIEW" heading="Apps" active="Treeview" />
            {/* <!-- ROW OPEN --> */}
            <Row>
                <Col md={12}>
                    <Card className="mg-b-20">
                        <Card.Header>
                            <Card.Title>
                                <h3 className="card-title">Treeview</h3>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body">
                            <div className="card-content">
                                <Row>
                                    {/* <!-- col --> */}
                                    <Col lg={4}>
                                        <div
                                            id="tree"
                                            className="font-semibold text-gray-600"
                                        >
                                            <BasicTreeviewexample1 />
                                            <BasicTreeviewexample2 />
                                            <BasicTreeviewexample3 />
                                            <BasicTreeviewexample4 />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- ROW CLOSED --> */}
        </Fragment>
    );
};
Treeview.layout = 'Contentlayout';
export default Treeview;
