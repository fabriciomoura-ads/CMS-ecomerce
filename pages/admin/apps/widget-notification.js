import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Widgetnotification = () => (
    <div>
        <Seo title={'Widget notification'} />
        <Pageheader
            title="WIDGET NOTIFICATION"
            heading="Apps"
            active="Widget notification"
        />
        {/* <!-- Row1 --> */}
        <Row className=" row-sm">
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" text-danger bg-danger-transparent br-5 border border-danger">
                        <div className="main-error-wrapper">
                            <i className="bi bi-x-circle mg-b-20 fs-50 lh-1"></i>
                            <h4 className="mg-b-20 text-danger">
                                Data Not Found.
                            </h4>
                            <Link
                                className="btn btn-outline-danger btn-sm"
                                href="#!"
                            >
                                Click to view details
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" text-success bg-success-transparent br-5  border border-success">
                        <div className="main-error-wrapper">
                            <i className="bi bi-check-circle mg-b-20 fs-50 lh-1"></i>
                            <h4 className="mg-b-20 text-success">
                                Success Data
                            </h4>
                            <Link
                                className="btn btn-outline-success btn-sm"
                                href="#!"
                            >
                                Click to view details
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" text-warning bg-warning-transparent br-5  border border-warning">
                        <div className="main-error-wrapper">
                            <i className="bi bi-exclamation-circle mg-b-20 fs-50 lh-1"></i>
                            <h4 className="mg-b-20 text-warning">
                                Warning Alert
                            </h4>
                            <Link
                                className="btn btn-outline-warning btn-sm"
                                href="#!"
                            >
                                Click to view details
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" text-info bg-info-transparent br-5 border border-info">
                        <div className="main-error-wrapper">
                            <i className="bi bi-info-circle mg-b-20 fs-50 lh-1"></i>
                            <h4 className="mg-b-20 text-info">Info Alert</h4>
                            <Link
                                className="btn btn-outline-info btn-sm"
                                href="#!"
                            >
                                Click to view details
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- Row1 Closed --> */}

        {/* <!-- Row2 --> */}
        <Row className=" row-sm">
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20 bg-danger-transparent p-0 border-0">
                    <Card.Header className=" p-3 text-danger fw-bold">
                        <i className="bi bi-x-circle me-1"></i> Error Data
                    </Card.Header>
                    <Card.Body className=" text-danger">
                        <strong>Oh snap!</strong> Change a few things up and try
                        submitting again.
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mb-2 bg-success-transparent p-0 border-0">
                    <Card.Header className=" p-3 text-success fw-bold">
                        <i className="bi bi-check-circle me-1"></i> Success Data
                    </Card.Header>
                    <Card.Body className=" text-success">
                        <strong>Well done!</strong> You successfully read this
                        important alert message.
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mb-2 bg-warning-transparent p-0 border-0">
                    <Card.Header className=" p-3 text-warning fw-bold">
                        <i className="bi bi-exclamation-circle me-1"></i>{' '}
                        warning Data
                    </Card.Header>
                    <Card.Body className=" text-warning">
                        <strong>Well done!</strong> You successfully read this
                        important alert message.
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mb-2 bg-info-transparent p-0 border-0">
                    <Card.Header className=" p-3 text-info fw-bold">
                        <i className="bi bi-info-circle me-1"></i> Info Data
                    </Card.Header>
                    <Card.Body className=" text-info">
                        <strong>Heads up!</strong> This alert needs your
                        attention, but it's not super important.
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- Row2 Closed --> */}

        {/* <!-- Row3 --> */}
        <Row className=" row-sm mt-3">
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mb-2">
                    <Card.Body className=" border border-success text-center rounded">
                        <div className="success-widget">
                            <i className="bi bi-check-circle mg-b-20 fs-50 text-success lh-1"></i>
                            <h3 className="mt-3 text-success">Success!</h3>
                            <p className="mt-3 mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" border border-info text-center rounded">
                        <div className="info-widget">
                            <i className="bi bi-info-circle mg-b-20 fs-50 text-info lh-1"></i>
                            <h3 className="mt-3 text-info">info!</h3>
                            <p className="mt-3 mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" border border-danger text-center rounded">
                        <i className="bi bi-x-circle mg-b-20 fs-50 text-danger lh-1"></i>
                        <div className="danger-widget">
                            <h3 className="mt-3 text-danger">Danger!</h3>
                            <p className="mt-3 mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className="bd-0 mg-b-20">
                    <Card.Body className=" border border-warning text-center rounded">
                        <i className="bi bi-exclamation-circle mg-b-20 fs-50 text-warning lh-1"></i>
                        <div className="warning-widget">
                            <h3 className="mt-3 text-warning">Warning!</h3>
                            <p className="mt-3 mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- Row3 Closed --> */}

        {/* <!-- Row4 --> */}
        <Row className=" row-sm mt-3">
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" border border-success text-center rounded">
                        <div className="success-widget">
                            <h3 className="text-success">Success!</h3>
                            <p className="mt-3 mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" border border-info text-center rounded">
                        <div className="info-widget">
                            <h3 className="text-info">info!</h3>
                            <p className="mt-3 mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" border border-danger text-center rounded">
                        <div className="danger-widget">
                            <h3 className="text-danger">Danger!</h3>
                            <p className="mt-3 mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" border border-warning text-center rounded">
                        <div className="warning-widget">
                            <h3 className="text-warning">Warning!</h3>
                            <p className="mt-3 mb-0">
                                Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- Row4 Closed --> */}

        {/* <!-- Row5 --> */}
        <Row className=" row-sm">
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20 bg-danger">
                    <Card.Body>
                        <div className="main-error-wrapper">
                            <i className="bi bi-x-circle mg-b-20 fs-50 lh-1 text-fixed-white"></i>
                            <h4 className="mg-b-0 text-fixed-white">
                                Data Not Found.
                            </h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20 bg-success">
                    <Card.Body>
                        <div className="main-error-wrapper">
                            <i className="bi bi-check-circle mg-b-20 fs-50 lh-1 text-fixed-white"></i>
                            <h4 className="mg-b-0 text-fixed-white">
                                Submitted Successfully
                            </h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20 bg-info">
                    <Card.Body>
                        <div className="main-error-wrapper">
                            <i className="bi bi-info-circle mg-b-20 fs-50 lh-1 text-fixed-white"></i>
                            <h4 className="mg-b-0 text-fixed-white">
                                Info Alert
                            </h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20 bg-warning">
                    <Card.Body>
                        <div className="main-error-wrapper">
                            <i className="bi bi-exclamation-circle mg-b-20 fs-50 lh-1 text-fixed-white"></i>
                            <h4 className="mg-b-0 text-fixed-white">
                                Warning Alert
                            </h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- Row5 Closed --> */}

        {/* <!-- Row6 --> */}
        <Row className=" row-sm">
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" text-danger">
                        <div className="main-error-wrapper">
                            <i className="bi bi-x-circle mg-b-20 fs-50 lh-1"></i>
                            <h4 className="mg-b-0 text-danger">
                                Data Not Found.
                            </h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" text-success">
                        <div className="main-error-wrapper">
                            <i className="bi bi-check-circle mg-b-20 fs-50 lh-1"></i>
                            <h4 className="mg-b-0 text-success">
                                Submitted Successfully
                            </h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" text-info">
                        <div className="main-error-wrapper">
                            <i className="bi bi-info-circle mg-b-20 fs-50 lh-1"></i>
                            <h4 className="mg-b-0 text-info">Info Alert</h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={3} md={12} lg={6}>
                <Card className=" bd-0 mg-b-20">
                    <Card.Body className=" text-warning">
                        <div className="main-error-wrapper">
                            <i className="bi bi-exclamation-circle mg-b-20 fs-50 lh-1"></i>
                            <h4 className="mg-b-0 text-warning">
                                Warning Alert
                            </h4>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- Row6 Closed --> */}

        {/* <!-- Row7 --> */}
        <Row className=" row-sm">
            <Col xl={4} md={6} lg={6}>
                <Card className=" mg-b-20 text-center">
                    <Card.Body className=" h-100">
                        <img
                            src="../../../assets/images/svgicons/no-data.svg"
                            alt=""
                            className="wd-35p"
                        />
                        <h5 className="mg-b-10 mg-t-15 tx-18">
                            Items Not Found
                        </h5>
                        <Link href="#!" className="text-muted">
                            Check The Settings
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} md={6} lg={6}>
                <Card className=" mg-b-20 text-center">
                    <Card.Body className=" h-100">
                        <img
                            src="../../../assets/images/svgicons/note_taking.svg"
                            alt=""
                            className="wd-35p"
                        />
                        <h5 className="mg-b-10 mg-t-15 tx-18">
                            Its Empty In Here
                        </h5>
                        <Link href="#!" className="text-muted">
                            Check The Settings
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} md={6} lg={6}>
                <Card className=" mg-b-20 text-center">
                    <Card.Body className=" h-100">
                        <img
                            src="../../../assets/images/svgicons/imac.svg"
                            alt=""
                            className="wd-35p"
                        />
                        <h5 className="mg-b-10 mg-t-15 tx-18">
                            No Site Selected
                        </h5>
                        <Link href="#!" className="text-muted">
                            Check The Settings
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- Row7 Closed --> */}
    </div>
);

Widgetnotification.layout = 'Contentlayout';

export default Widgetnotification;
