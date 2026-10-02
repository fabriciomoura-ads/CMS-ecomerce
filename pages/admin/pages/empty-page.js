import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const EmptyPage = () => (
    <div>
        <Seo title={'Empty Page'} />
        <Pageheader title="EMPTY PAGE" heading="Pages" active="Empty Page" />
        {/* <!-- row open --> */}
        <Row>
            <Col md={12} xl={12} xs={12} sm={12}>
                <Card>
                    <Card.Body>
                        <div>
                            <h6>Type text here.....</h6>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- row closed --> */}
    </div>
);

EmptyPage.layout = 'Contentlayout';

export default EmptyPage;
