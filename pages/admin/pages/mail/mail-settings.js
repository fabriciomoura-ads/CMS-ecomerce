import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import { Card, Col, Form, Nav, Row } from 'react-bootstrap';
import {
    OptionLanguage,
    OptionTimezone,
} from '../../../../shared/data/pages/mail/mail-settings';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
const Select = dynamic(() => import('react-select'), { ssr: false });
const Mailsettings = () => {
    const [Timezone, setTimezone] = React.useState('');
    const [Language, setLanguage] = React.useState('');

    const handleOnchangeTimezone = () => {
        setTimezone(Timezone);
    };

    const handleOnchangeLanguage = () => {
        setLanguage(Language);
    };
    return (
        <div>
            <Seo title={'Mail-settings'} />
            <Pageheader
                title="MAIL SETTINGS"
                heading="Mail"
                active="Mail-settings"
            />
            <Row className="row-sm">
                {/* <!-- Col --> */}
                <Col lg={4} xl={3} md={12} sm={12}>
                    <Card className=" mg-b-20">
                        <Card.Body className="main-content-left main-content-left-mail ">
                            <Link
                                className="btn btn-primary btn-compose"
                                href="#!"
                                id="btnCompose"
                            >
                                Email Settings
                            </Link>
                            <div className="main-mail-menu">
                                <Nav
                                    className="nav main-nav-column mg-b-20"
                                    defaultActiveKey="Inbox"
                                >
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Inbox"
                                        >
                                            <i className="far fa-envelope"></i>{' '}
                                            Inbox <span>18</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Starred"
                                        >
                                            <i className="far fa-star"></i>{' '}
                                            Starred<span>8</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Snoozed"
                                        >
                                            <i className="far fa-clock"></i>{' '}
                                            Snoozed <span>6</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Important"
                                        >
                                            <i className="far fa-bookmark"></i>{' '}
                                            Important <span>15</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Sent"
                                        >
                                            <i className="far fa-paper-plane"></i>{' '}
                                            Sent Mail <span>24</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Drafts"
                                        >
                                            <i className="far fa-hourglass"></i>{' '}
                                            Drafts <span>2</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Spam"
                                        >
                                            <i className="far fa-dot-circle"></i>{' '}
                                            Spam <span>32</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Chats"
                                        >
                                            <i className="far fa-comments"></i>{' '}
                                            Chats <span>14</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Contacts"
                                        >
                                            <i className="far fa-user-circle"></i>{' '}
                                            Contacts <span>547</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link thumb"
                                            eventKey="Trash"
                                        >
                                            <i className="fe fe-trash"></i>{' '}
                                            Trash <span>365</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <label className="main-content-label main-content-label-sm">
                                    Settings
                                </label>
                                <Nav
                                    className="nav main-nav-column"
                                    defaultActiveKey="Email"
                                >
                                    <Nav.Item>
                                        <Nav.Link
                                            className="nav-link"
                                            eventKey="Email"
                                        >
                                            Email Settings
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8} xl={9}>
                    <Card>
                        <Card.Body>
                            <Form className="form-horizontal">
                                <div className="mb-4 main-content-label">
                                    Account
                                </div>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Row>
                                        <Col md={3}>
                                            <label className="form-label">
                                                User Name
                                            </label>
                                        </Col>
                                        <Col md={9}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="User Name"
                                                defaultValue="Petey"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Row>
                                        <Col md={3}>
                                            <label className="form-label">
                                                Email
                                            </label>
                                        </Col>
                                        <Col md={9}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email"
                                                defaultValue="info@Nowa.in"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Row>
                                        <Col md={3}>
                                            <label className="form-label">
                                                Language
                                            </label>
                                        </Col>
                                        <Col md={9}>
                                            <Select
                                                name="choices-single-default"
                                                options={OptionLanguage}
                                                id="choices-single-default1"
                                                classNamePrefix="Select2"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Row>
                                        <Col md={3}>
                                            <label className="form-label">
                                                Timezone
                                            </label>
                                        </Col>
                                        <Col md={9}>
                                            <Select
                                                name="choices-single-default"
                                                options={OptionTimezone}
                                                id="choices-single-default2"
                                                classNamePrefix="Select2"
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Row>
                                        <div className="col-md-3 col">
                                            <label className="form-label">
                                                Verification
                                            </label>
                                        </div>
                                        <div className="col-md-9 col">
                                            <Form.Check className="ckbox mb-2">
                                                <input
                                                    className="form-check-input mt-0"
                                                    type="checkbox"
                                                    value=""
                                                    id="flexCheckChecked1"
                                                />
                                                <span>Email</span>
                                            </Form.Check>
                                            <Form.Check className="ckbox mb-2">
                                                <input
                                                    className="form-check-input mt-0"
                                                    type="checkbox"
                                                    value=""
                                                    id="flexCheckChecked2"
                                                    defaultChecked
                                                />
                                                <span>SMS</span>
                                            </Form.Check>
                                            <Form.Check className="ckbox mb-2">
                                                <input
                                                    className="form-check-input mt-0"
                                                    type="checkbox"
                                                    value=""
                                                    id="flexCheckChecked3"
                                                />
                                                <span>Phone</span>
                                            </Form.Check>
                                        </div>
                                    </Row>
                                </Form.Group>
                                <div className="mb-4 main-content-label">
                                    Security Settings
                                </div>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Row>
                                        <Col md={3}>
                                            <label className="form-label">
                                                Login Verification
                                            </label>
                                        </Col>
                                        <Col md={9}>
                                            <Link className="" href="#!">
                                                Settup Verification
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Row>
                                        <Col md={3}>
                                            <label className="form-label">
                                                Password Verification
                                            </label>
                                        </Col>
                                        <Col md={9}>
                                            <Form.Check className="ckbox mg-b-10">
                                                <input
                                                    className="form-check-input mt-0"
                                                    type="checkbox"
                                                    value=""
                                                    id="flexCheckChecked"
                                                />
                                                <span>
                                                    Require Personal Details
                                                </span>
                                            </Form.Check>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Row>
                                        <Col md={3}></Col>
                                        <Col md={9}>
                                            <Link className="me-3" href="#!">
                                                Deactivate Account
                                            </Link>
                                            <Link className="" href="#!">
                                                Change Password
                                            </Link>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="card-footer justify-content-end">
                            <div>
                                <Link href="#!" className="btn btn-success">
                                    Save Changes
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

Mailsettings.layout = 'Contentlayout';

export default Mailsettings;
