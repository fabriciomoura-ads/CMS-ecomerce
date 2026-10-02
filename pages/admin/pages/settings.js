import Link from 'next/link';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Settings = () => (
    <div>
        <Seo title={'Settings'} />
        <Pageheader title="SETTINGS" heading="Pages" active="Settings" />

        {/* <!-- row --> */}
        <Row>
            <Col lg={4} xl={3}>
                <Card className="card custom-card">
                    <Card.Header className="card-header">
                        <div className="card-title">Settings</div>
                    </Card.Header>
                    <Card.Body className="main-content-left main-content-left-mail card-body">
                        <div className="main-settings-menu">
                            <Nav
                                className="nav main-nav-column"
                                defaultActiveKey="Main"
                            >
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#!"
                                        className="nav-link thumb  mb-2"
                                        eventKey="Main"
                                    >
                                        <i className="fe fe-home"></i> Main
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#!"
                                        className="nav-link thumb mb-2"
                                        eventKey="WebApps"
                                    >
                                        <i className="fe fe-grid"></i> Web Apps
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#!"
                                        className="nav-link thumb mb-2"
                                        eventKey="General"
                                    >
                                        <i className="fe fe-server"></i> General
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#!"
                                        className="nav-link thumb mb-2"
                                        eventKey="admin"
                                    >
                                        <i className="fe fe-globe"></i> admin
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#!"
                                        className="nav-link thumb mb-2"
                                        eventKey="Pages"
                                    >
                                        <i className="fe fe-layers"></i> Pages
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#!"
                                        className="nav-link thumb mb-2"
                                        eventKey="Language"
                                    >
                                        <i className="fe fe-flag"></i> Language
                                        & Region
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link
                                        href="#!"
                                        className="nav-link thumb mb-2"
                                        eventKey="Notifications"
                                    >
                                        <i className="fe fe-bell"></i>{' '}
                                        Notifications
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={8} xl={9}>
                <Card className=" custom-card">
                    <Card.Header className=" d-block">
                        <div className="card-title">Overview</div>
                        <p>
                            Used to customize and manage all settngs about this
                            Dashboard
                        </p>
                    </Card.Header>
                </Card>
                <Row>
                    <Col lg={12} xl={6} md={12} sm={12} className="p-2">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={12}>
                                        <div className="d-flex">
                                            <div className="settings-main-icon me-4 mt-1">
                                                <i className="fe fe-home"></i>
                                            </div>
                                            <div>
                                                <p className="fs-20 fw-semibold d-flex mb-0">
                                                    Dashboard
                                                </p>
                                                <p className="fs-13 text-muted mb-0">
                                                    Dashboard Settings such as
                                                    sidemenu,header and main
                                                    page can be Controlled.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="p-3 d-flex">
                                <Link href="#!" className="fs-14 mb-0">
                                    Go to Settings
                                </Link>
                                <label className="custom-switch ms-auto mb-0 d-flex">
                                    <Link href="#!" className="fs-14 mb-0 me-2">
                                        Restore default
                                    </Link>
                                    <span className="form-check form-check-md form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="switch-md1"
                                        />
                                    </span>
                                </label>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={12} xl={6} md={12} sm={12} className="p-2">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={12}>
                                        <div className="d-flex">
                                            <div className="settings-main-icon me-4 mt-1">
                                                <i className="fe fe-grid"></i>
                                            </div>
                                            <div>
                                                <p className="fs-20 fw-semibold d-flex mb-0">
                                                    Webapps
                                                </p>
                                                <p className="fs-13 text-muted mb-0">
                                                    Web apps settings such as
                                                    Apps,Elements,Advanced Ui &
                                                    Mail can be Controlled.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className=" p-3 d-flex">
                                <Link href="#!" className="fs-14 mb-0">
                                    Go to Settings
                                </Link>
                                <label className="custom-switch ms-auto mb-0 d-flex">
                                    <Link href="#!" className="fs-14 mb-0 me-2">
                                        Restore default
                                    </Link>
                                    <span className="form-check form-check-md form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="switch-md2"
                                        />
                                    </span>
                                </label>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={12} xl={6} md={12} sm={12} className="p-2">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={12}>
                                        <div className="d-flex">
                                            <div className="settings-main-icon me-4 mt-1">
                                                <i className="fe fe-server"></i>
                                            </div>
                                            <div>
                                                <p className="fs-20 fw-semibold d-flex mb-0">
                                                    General
                                                </p>
                                                <p className="fs-13 text-muted mb-0">
                                                    General settings such as
                                                    Icons,Charts,Ecommerce can
                                                    be Controlled.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className=" p-3 d-flex">
                                <Link href="#!" className="fs-14 mb-0">
                                    Go to Settings
                                </Link>
                                <label className="custom-switch ms-auto mb-0 d-flex">
                                    <Link href="#!" className="fs-14 mb-0 me-2">
                                        Restore default
                                    </Link>
                                    <span className="form-check form-check-md form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="switch-md6"
                                            defaultChecked
                                        />
                                    </span>
                                </label>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={12} xl={6} md={12} sm={12} className="p-2">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={12}>
                                        <div className="d-flex">
                                            <div className="settings-main-icon me-4 mt-1">
                                                <i className="fe fe-flag"></i>
                                            </div>
                                            <div>
                                                <p className="fs-20 fw-semibold d-flex mb-0">
                                                    Region & language
                                                </p>
                                                <p className="fs-13 text-muted mb-0">
                                                    In this settings we can
                                                    change the region and
                                                    language manually.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className=" p-3 d-flex">
                                <Link href="#!" className="fs-14 mb-0">
                                    Go to Settings
                                </Link>
                                <label className="custom-switch ms-auto mb-0 d-flex">
                                    <Link href="#!" className="fs-14 mb-0 me-2">
                                        Restore default
                                    </Link>
                                    <span className="form-check form-check-md form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="switch-md3"
                                        />
                                    </span>
                                </label>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={12} xl={6} md={12} sm={12} className="p-2">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={12}>
                                        <div className="d-flex">
                                            <div className="settings-main-icon me-4 mt-1">
                                                <i className="fe fe-bell"></i>
                                            </div>
                                            <div>
                                                <p className="fs-20 fw-semibold d-flex mb-0">
                                                    Notification
                                                </p>
                                                <p className="fs-13 text-muted mb-0">
                                                    Notification settings we can
                                                    control the notification
                                                    privacy and security.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className=" p-3 d-flex">
                                <Link href="#!" className="fs-14 mb-0">
                                    Go to Settings
                                </Link>
                                <label className="custom-switch ms-auto mb-0 d-flex">
                                    <Link href="#!" className="fs-14 mb-0 me-2">
                                        Restore default
                                    </Link>
                                    <span className="form-check form-check-md form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="switch-md4"
                                        />
                                    </span>
                                </label>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col lg={12} xl={6} md={12} sm={12} className="p-2">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col lg={12}>
                                        <div className="d-flex">
                                            <div className="settings-main-icon me-4 mt-1">
                                                <i className="fe fe-settings"></i>
                                            </div>
                                            <div>
                                                <p className="fs-20 fw-semibold d-flex mb-0">
                                                    Blog
                                                </p>
                                                <p className="fs-13 text-muted mb-0">
                                                    In this settings we can
                                                    modify all Blog related
                                                    settings in this template.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className=" p-3 d-flex">
                                <Link href="#!" className="fs-14 mb-0">
                                    Go to Settings
                                </Link>
                                <label className="custom-switch ms-auto mb-0 d-flex">
                                    <Link href="#!" className="fs-14 mb-0 me-2">
                                        Restore default
                                    </Link>
                                    <span className="form-check form-check-md form-switch">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="switch-md5"
                                            defaultChecked
                                        />
                                    </span>
                                </label>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
        {/* <!-- row closed--> */}
    </div>
);

Settings.layout = 'Contentlayout';

export default Settings;
