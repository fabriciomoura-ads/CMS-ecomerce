import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
function tags() {
    return (
        <div>
            <Seo title={'Tags'} />
            <Pageheader title="TAGS" heading="Elements" active="Tags" />

            {/* <!-- row --> */}
            <Row>
                <Col xl={6} lg={12}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="main-content-label mg-b-5">
                                    DEFAULT TAG
                                </div>
                            </div>
                            <p className="mg-b-20">
                                It is Very Easy to Customize and it uses in your
                                website aplication.
                            </p>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag">
                                            First tag
                                            <Link
                                                href="#!"
                                                className="tag-addon"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                        <span className="tag">
                                            Second tag
                                            <Link
                                                href="#!"
                                                className="tag-addon"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                        <span className="tag">
                                            Third tag
                                            <Link
                                                href="#!"
                                                className="tag-addon"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                        <span className="tag">
                                            Fourth tag
                                            <Link
                                                href="#!"
                                                className="tag-addon"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} lg={12}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="main-content-label mg-b-5">
                                    Link Tag
                                </div>
                            </div>
                            <p className="mg-b-20">
                                It is Very Easy to Customize and it uses in your
                                website aplication.
                            </p>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag tag-rounded">
                                            First tag
                                            <Link
                                                href="#!"
                                                className="tag-addon rounded-pill"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                        <span className="tag tag-rounded">
                                            Second tag
                                            <Link
                                                href="#!"
                                                className="tag-addon rounded-pill"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                        <span className="tag tag-rounded">
                                            Third tag
                                            <Link
                                                href="#!"
                                                className="tag-addon rounded-pill"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                        <span className="tag tag-rounded">
                                            Fourth tag
                                            <Link
                                                href="#!"
                                                className="tag-addon rounded-pill "
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <!--/div--> */}
                {/* <!--div--> */}
                <Col xl={6} lg={12}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="main-content-label mg-b-5">
                                    Default Tags Addon
                                </div>
                            </div>
                            <p className="mg-b-20">
                                It is Very Easy to Customize and it uses in your
                                website aplication.
                            </p>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag tag-default bg-light">
                                            One
                                            <Link
                                                href="#!"
                                                className="tag-addon"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                        <span className="tag tag-default  bg-light">
                                            Two
                                            <Link
                                                href="#!"
                                                className="tag-addon"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                        <span className="tag tag-default  bg-light">
                                            Three
                                            <Link
                                                href="#!"
                                                className="tag-addon"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                        <span className="tag tag-default  bg-light">
                                            Four
                                            <Link
                                                href="#!"
                                                className="tag-addon"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} lg={12}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex">
                                <div className="main-content-label mg-b-5">
                                    Colored tags
                                </div>
                            </div>
                            <p className="mg-b-20">
                                It is Very Easy to Customize and it uses in your
                                website aplication.
                            </p>
                            <div className="text-wrap">
                                <div className="example">
                                    <div className="tags">
                                        <span className="tag tag-primary br-5">
                                            primary tag
                                            <Link
                                                href="#!"
                                                className="tag-addon bg-primary"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>{' '}
                                        </span>
                                        <span className="tag tag-secondary br-5">
                                            secondary tag
                                            <Link
                                                href="#!"
                                                className="tag-addon bg-secondary"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>{' '}
                                        </span>
                                        <span className="tag tag-success br-5">
                                            success tag
                                            <Link
                                                href="#!"
                                                className="tag-addon bg-success"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>{' '}
                                        </span>
                                        <span className="tag tag-warning br-5">
                                            warning tag
                                            <Link
                                                href="#!"
                                                className="tag-addon bg-warning"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>{' '}
                                        </span>
                                        <span className="tag tag-teal br-5">
                                            teal tag
                                            <Link
                                                href="#!"
                                                className="tag-addon bg-teal"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>{' '}
                                        </span>
                                        <span className="tag tag-danger br-5">
                                            danger tag
                                            <Link
                                                href="#!"
                                                className="tag-addon bg-danger"
                                            >
                                                <i className="fe fe-x"></i>
                                            </Link>{' '}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </div>
    );
}
tags.layout = 'Contentlayout';
export default tags;
