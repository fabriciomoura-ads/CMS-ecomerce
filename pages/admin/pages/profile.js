import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Card, Col, Dropdown, Nav, Row, Tab } from 'react-bootstrap';
import Gallery3, {
    OptionLanguage,
    OptionTimezone,
} from '../../../shared/data/pages/e-commerce/profiledata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
const Select = dynamic(() => import('react-select'), { ssr: false });

const Profile = () => {
    return (
        <div>
            <Seo title={'Profile'} />
            <Pageheader title="PROFILE" heading="Pages" active="Profile" />
            <Row>
                <Col lg={12} md={12}>
                    <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="About"
                    >
                        <Card className="custom-card ">
                            <Card.Body className=" d-md-flex bg-white">
                                <span className="profile-image position-relative">
                                    <img
                                        className="br-5"
                                        alt=""
                                        src="../../../assets/images/faces/profile.jpg"
                                    />
                                    <span className="bg-success text-white wd-1 ht-1 rounded-pill profile-online"></span>
                                </span>
                                <div className="my-md-auto mt-4 prof-details">
                                    <h4 className="fw-semibold ms-md-4 ms-0 mb-1 pb-0">
                                        Sonya Taylor
                                    </h4>
                                    <p className="fs-13 text-muted ms-md-4 ms-0 mb-2 pb-2 ">
                                        <span className="me-3 d-inline-block">
                                            <i className="far fa-address-card me-2"></i>
                                            Ui/Ux Developer
                                        </span>
                                        <span className="me-3 d-inline-block">
                                            <i className="fa fa-taxi me-2"></i>
                                            West fransisco,Alabama
                                        </span>
                                        <span className="d-inline-block">
                                            <i className="far fa-flag me-2"></i>
                                            New Jersey
                                        </span>
                                    </p>
                                    <p className="text-muted ms-md-4 ms-0 mb-2">
                                        <span>
                                            <i className="fa fa-phone me-2"></i>
                                        </span>
                                        <span className="fw-semibold me-2">
                                            Phone:
                                        </span>
                                        <span>+94 12345 6789</span>
                                    </p>
                                    <p className="text-muted ms-md-4 ms-0 mb-2">
                                        <span>
                                            <i className="fa fa-envelope me-2"></i>
                                        </span>
                                        <span className="fw-semibold me-2">
                                            Email:
                                        </span>
                                        <span>spruko.space@gmail.com</span>
                                    </p>
                                    <p className="text-muted ms-md-4 ms-0 mb-2">
                                        <span>
                                            <i className="fa fa-globe me-2"></i>
                                        </span>
                                        <span className="fw-semibold me-2">
                                            Website
                                        </span>
                                        <span>sprukotechnologies</span>
                                    </p>
                                </div>
                            </Card.Body>
                            <Card.Footer className="py-0">
                                <div className="profile-tab tab-menu-heading border-bottom-0">
                                    <Nav
                                        variant="pills"
                                        className="nav main-nav-line p-0 tabs-menu profile-nav-line border-0 br-5 mb-0		"
                                    >
                                        <Nav.Item className="me-1">
                                            <Nav.Link
                                                className=" mb-2 mt-2"
                                                eventKey="About"
                                            >
                                                About
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="me-1">
                                            <Nav.Link
                                                className="mb-2 mt-2"
                                                eventKey="EditProfile"
                                            >
                                                Edit Profile
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="me-1">
                                            <Nav.Link
                                                className="mb-2 mt-2"
                                                eventKey="Timeline"
                                            >
                                                Timeline
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="me-1">
                                            <Nav.Link
                                                className="mb-2 mt-2"
                                                eventKey="Gallery"
                                            >
                                                Gallery
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="me-1">
                                            <Nav.Link
                                                className="mb-2 mt-2"
                                                eventKey="Friends"
                                            >
                                                Friends
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="me-1">
                                            <Nav.Link
                                                className="mb-2 mt-2"
                                                eventKey="AccountSettings"
                                            >
                                                Account Settings
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Footer>
                        </Card>
                        <span className=" py-0 ">
                            <div className="profile-tab tab-menu-heading border-bottom-0 ">
                                <Row className=" row-sm ">
                                    <Col lg={12} md={12}>
                                        <div className="custom-card main-content-body-profile">
                                            <Tab.Content className="">
                                                <Tab.Pane
                                                    eventKey="About"
                                                    className="main-content-body  p-0 border-0  "
                                                >
                                                    <Card className="">
                                                        <Card.Body className=" p-0 border-0 p-0 rounded-10">
                                                            <div className="p-4">
                                                                <h4 className="fs-15 text-uppercase mb-3">
                                                                    BIOdata
                                                                </h4>
                                                                <p className="m-b-5">
                                                                    Hi I'm Teri
                                                                    Dactyl,has
                                                                    been the
                                                                    industry's
                                                                    standard
                                                                    dummy text
                                                                    ever since
                                                                    the 1500s,
                                                                    when an
                                                                    unknown
                                                                    printer took
                                                                    a galley of
                                                                    type. Donec
                                                                    pede justo,
                                                                    fringilla
                                                                    vel, aliquet
                                                                    nec,
                                                                    vulputate
                                                                    eget, arcu.
                                                                    In enim
                                                                    justo,
                                                                    rhoncus ut,
                                                                    imperdiet a,
                                                                    venenatis
                                                                    vitae,
                                                                    justo.
                                                                    Nullam
                                                                    dictum felis
                                                                    eu pede
                                                                    mollis
                                                                    pretium.
                                                                    Integer
                                                                    tincidunt.Cras
                                                                    dapibus.
                                                                    Vivamus
                                                                    elementum
                                                                    semper nisi.
                                                                    Aenean
                                                                    vulputate
                                                                    eleifend
                                                                    tellus.
                                                                    Aenean leo
                                                                    ligula,
                                                                    porttitor
                                                                    eu,
                                                                    consequat
                                                                    vitae,
                                                                    eleifend ac,
                                                                    enim.
                                                                </p>
                                                                <div className="m-t-30">
                                                                    <div className=" p-t-10">
                                                                        <p className="text-primary mb-2 fs-14 fw-semibold">
                                                                            Lead
                                                                            designer
                                                                            /
                                                                            Developer
                                                                        </p>
                                                                        <p className="">
                                                                            websitename.com
                                                                        </p>
                                                                        <p>
                                                                            <b>
                                                                                2010-2015
                                                                            </b>
                                                                        </p>
                                                                        <p className="text-muted fs-13 m-b-0">
                                                                            Lorem
                                                                            Ipsum
                                                                            is
                                                                            simply
                                                                            dummy
                                                                            text
                                                                            of
                                                                            the
                                                                            printing
                                                                            and
                                                                            typesetting
                                                                            industry.
                                                                            Lorem
                                                                            Ipsum
                                                                            has
                                                                            been
                                                                            the
                                                                            industry's
                                                                            standard
                                                                            dummy
                                                                            text
                                                                            ever
                                                                            since
                                                                            the
                                                                            1500s,
                                                                            when
                                                                            an
                                                                            unknown
                                                                            printer
                                                                            took
                                                                            a
                                                                            galley
                                                                            of
                                                                            type
                                                                            and
                                                                            scrambled
                                                                            it
                                                                            to
                                                                            make
                                                                            a
                                                                            type
                                                                            specimen
                                                                            book.
                                                                        </p>
                                                                    </div>
                                                                    <div className="">
                                                                        <p className="text-primary fw-semibold mb-2 fs-14">
                                                                            Senior
                                                                            Graphic
                                                                            Designer
                                                                        </p>
                                                                        <p className="">
                                                                            coderthemes.com
                                                                        </p>
                                                                        <p>
                                                                            <b>
                                                                                2007-2009
                                                                            </b>
                                                                        </p>
                                                                        <p className="text-muted fs-13 mb-0">
                                                                            Lorem
                                                                            Ipsum
                                                                            is
                                                                            simply
                                                                            dummy
                                                                            text
                                                                            of
                                                                            the
                                                                            printing
                                                                            and
                                                                            typesetting
                                                                            industry.
                                                                            Lorem
                                                                            Ipsum
                                                                            has
                                                                            been
                                                                            the
                                                                            industry's
                                                                            standard
                                                                            dummy
                                                                            text
                                                                            ever
                                                                            since
                                                                            the
                                                                            1500s,
                                                                            when
                                                                            an
                                                                            unknown
                                                                            printer
                                                                            took
                                                                            a
                                                                            galley
                                                                            of
                                                                            type
                                                                            and
                                                                            scrambled
                                                                            it
                                                                            to
                                                                            make
                                                                            a
                                                                            type
                                                                            specimen
                                                                            book.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="border-top"></div>
                                                            <div className="p-4">
                                                                <label className="main-content-label fs-13 mg-b-20">
                                                                    Statistics
                                                                </label>
                                                                <div className="profile-cover__info ms-4 ms-auto p-0">
                                                                    <ul className="nav p-0 border-bottom-0 mb-0 gap-4">
                                                                        <li className="border p-2 br-5 bg-light wd-100 ht-70">
                                                                            <span className="border-0 mb-1 pb-0 lh-1">
                                                                                113
                                                                            </span>
                                                                            Projects
                                                                        </li>
                                                                        <li className="border p-2 br-5 bg-light wd-100 ht-70">
                                                                            <span className="border-0 mb-1 pb-0 lh-1">
                                                                                245
                                                                            </span>
                                                                            Followers
                                                                        </li>
                                                                        <li className="border p-2 br-5 bg-light wd-100 ht-70">
                                                                            <span className="border-0 mb-1 pb-0 lh-1">
                                                                                128
                                                                            </span>
                                                                            Following
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="border-top"></div>
                                                            <div className="p-4">
                                                                <label className="main-content-label fs-13 mg-b-20">
                                                                    Contact
                                                                </label>
                                                                <div className="d-sm-flex">
                                                                    <div className="ms-3 mb-2">
                                                                        <div className="main-profile-contact-list">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    <i className="icon ion-md-phone-portrait"></i>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {' '}
                                                                                    <span>
                                                                                        Mobile
                                                                                    </span>
                                                                                    <div>
                                                                                        {' '}
                                                                                        +245
                                                                                        354
                                                                                        654{' '}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 mb-2">
                                                                        <div className="main-profile-contact-list">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-success-transparent text-success">
                                                                                    <i className="icon ion-logo-slack"></i>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {' '}
                                                                                    <span>
                                                                                        Slack
                                                                                    </span>
                                                                                    <div>
                                                                                        {' '}
                                                                                        @spruko.w{' '}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 mb-2">
                                                                        <div className="main-profile-contact-list">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-info-transparent text-info">
                                                                                    <i className="icon ion-md-locate"></i>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {' '}
                                                                                    <span>
                                                                                        Current
                                                                                        Address
                                                                                    </span>
                                                                                    <div>
                                                                                        {' '}
                                                                                        San
                                                                                        Francisco,
                                                                                        CA{' '}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="border-top"></div>
                                                            <div className="p-4">
                                                                <label className="main-content-label fs-13 mg-b-20">
                                                                    Social
                                                                </label>
                                                                <div className="d-xl-flex">
                                                                    <div className="ms-3 mb-2">
                                                                        <div className="main-profile-social-list">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-primary-transparent text-primary">
                                                                                    <i className="icon ion-logo-github"></i>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {' '}
                                                                                    <span>
                                                                                        Github
                                                                                    </span>{' '}
                                                                                    <a href="">
                                                                                        github.com/spruko
                                                                                    </a>{' '}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 mb-2">
                                                                        <div className="main-profile-social-list">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-success-transparent text-success">
                                                                                    <i className="ri-twitter-x-line"></i>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {' '}
                                                                                    <span>
                                                                                        Twitter
                                                                                    </span>{' '}
                                                                                    <a href="">
                                                                                        twitter.com/spruko.me
                                                                                    </a>{' '}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 mb-2">
                                                                        <div className="main-profile-social-list">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-info-transparent text-info">
                                                                                    <i className="icon ion-logo-linkedin"></i>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {' '}
                                                                                    <span>
                                                                                        Linkedin
                                                                                    </span>{' '}
                                                                                    <a href="">
                                                                                        linkedin.com/in/spruko
                                                                                    </a>{' '}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="ms-3 mb-2">
                                                                        <div className="main-profile-social-list">
                                                                            <div className="media">
                                                                                <div className="media-icon bg-danger-transparent text-danger">
                                                                                    <i className="icon ion-md-link"></i>
                                                                                </div>
                                                                                <div className="media-body">
                                                                                    {' '}
                                                                                    <span>
                                                                                        My
                                                                                        Portfolio
                                                                                    </span>{' '}
                                                                                    <a href="">
                                                                                        spruko.com/
                                                                                    </a>{' '}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </Tab.Pane>
                                                <Tab.Pane
                                                    eventKey="EditProfile"
                                                    className="main-content-body  p-0 border-0"
                                                    id="edit"
                                                >
                                                    <Card className="">
                                                        <Card.Body className=" border-0">
                                                            <div className="mb-4 main-content-label">
                                                                Personal
                                                                Information
                                                            </div>
                                                            <form className="form-horizontal">
                                                                <div className="mb-4 main-content-label">
                                                                    Name
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                User
                                                                                Name
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="User Name"
                                                                                defaultValue="Mack Adamia"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                First
                                                                                Name
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="First Name"
                                                                                defaultValue="Mack Adamia"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                last
                                                                                Name
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Last Name"
                                                                                defaultValue="Mack Adamia"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Nick
                                                                                Name
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Nick Name"
                                                                                defaultValue="Nowa"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Designation
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Designation"
                                                                                defaultValue="Web Designer"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="mb-4 main-content-label">
                                                                    Contact Info
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Email
                                                                                <i>
                                                                                    (required)
                                                                                </i>
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Email"
                                                                                defaultValue="info@Nowa.in"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Website
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Website"
                                                                                defaultValue="@spruko.w"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Phone
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="phone number"
                                                                                defaultValue="+245 354 654"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Address
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <textarea
                                                                                className="form-control"
                                                                                name="example-textarea-input"
                                                                                rows="2"
                                                                                defaultValue="San Francisco, CA"
                                                                                placeholder="Address"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="mb-4 main-content-label">
                                                                    Social Info
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Twitter
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="twitter"
                                                                                defaultValue="twitter.com/spruko.me"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Facebook
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="facebook"
                                                                                defaultValue="#!Nowa"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Google+
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="google"
                                                                                defaultValue="spruko.com"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Linked
                                                                                in
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="linkedin"
                                                                                defaultValue="linkedin.com/in/spruko"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Github
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="github"
                                                                                defaultValue="github.com/sprukos"
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="mb-4 main-content-label">
                                                                    About
                                                                    Yourself
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Biographical
                                                                                Info
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <textarea
                                                                                className="form-control"
                                                                                name="example-textarea-input"
                                                                                rows="4"
                                                                                defaultValue="pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.."
                                                                            />
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="mb-4 main-content-label">
                                                                    Email
                                                                    Preferences
                                                                </div>
                                                                <div className="form-group mb-0">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Verified
                                                                                User
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <div className="custom-controls-stacked">
                                                                                <label className="ckbox  mb-2">
                                                                                    <input
                                                                                        className="form-check-input mt-0"
                                                                                        type="checkbox"
                                                                                        defaultValue=""
                                                                                        id="flexCheckChecked1"
                                                                                        defaultChecked
                                                                                    />
                                                                                    <span>
                                                                                        {' '}
                                                                                        Accept
                                                                                        to
                                                                                        receive
                                                                                        post
                                                                                        or
                                                                                        page
                                                                                        notification
                                                                                        emails
                                                                                    </span>
                                                                                </label>
                                                                                <label className="ckbox">
                                                                                    <input
                                                                                        className="form-check-input mt-0"
                                                                                        type="checkbox"
                                                                                        defaultValue=""
                                                                                        id="flexCheckChecked2"
                                                                                        defaultChecked
                                                                                    />
                                                                                    <span>
                                                                                        {' '}
                                                                                        Accept
                                                                                        to
                                                                                        receive
                                                                                        email
                                                                                        sent
                                                                                        to
                                                                                        multiple
                                                                                        recipients
                                                                                    </span>
                                                                                </label>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </form>
                                                        </Card.Body>
                                                    </Card>
                                                </Tab.Pane>
                                                <Tab.Pane
                                                    eventKey="Timeline"
                                                    className="main-content-body   p-0 border-0"
                                                    id="timeline"
                                                >
                                                    <div className="border-0">
                                                        <div className="main-content-body main-content-body-profile">
                                                            <div className="main-profile-body p-0">
                                                                <Row className=" row-sm">
                                                                    <div className="col-12">
                                                                        <Card className=" mg-b-20 border">
                                                                            <div className="p-4">
                                                                                <div className="media">
                                                                                    <div className="media-user me-2">
                                                                                        <div className="main-img-user avatar avatar-md">
                                                                                            <img
                                                                                                alt=""
                                                                                                className="rounded-circle"
                                                                                                src="../../../assets/images/faces/6.jpg"
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h6 className="mb-0 mg-t-2 ms-2">
                                                                                            Mintrona
                                                                                            Pechon
                                                                                            Pechon
                                                                                        </h6>
                                                                                        <span className="text-primary ms-2">
                                                                                            just
                                                                                            now
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="ms-auto">
                                                                                        <Dropdown
                                                                                            align={
                                                                                                'end'
                                                                                            }
                                                                                            className="dropdown  main-contact-star no-caret"
                                                                                        >
                                                                                            {' '}
                                                                                            <Dropdown.Toggle
                                                                                                variant=""
                                                                                                className="new option-dots2 border-0 "
                                                                                                data-bs-toggle="dropdown"
                                                                                                href="#!"
                                                                                            >
                                                                                                <i className="fe fe-more-vertical  fs-18"></i>
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu className="shadow">
                                                                                                {' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Edit
                                                                                                    Post
                                                                                                </Dropdown.Item>{' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Delete
                                                                                                    Post
                                                                                                </Dropdown.Item>{' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Personal
                                                                                                    Settings
                                                                                                </Dropdown.Item>{' '}
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="card-body">
                                                                                <p className="mg-t-0">
                                                                                    There
                                                                                    are
                                                                                    many
                                                                                    variations
                                                                                    of
                                                                                    passages
                                                                                    of
                                                                                    Lorem
                                                                                    Ipsum
                                                                                    available,
                                                                                    but
                                                                                    the
                                                                                    majority
                                                                                    have
                                                                                    suffered
                                                                                    alteration
                                                                                    in
                                                                                    some
                                                                                    form,
                                                                                    by
                                                                                    injected
                                                                                    humour,
                                                                                    or
                                                                                    randomised
                                                                                    words
                                                                                    which
                                                                                    don't
                                                                                    look
                                                                                    even
                                                                                    slightly
                                                                                    believable.
                                                                                </p>
                                                                                <Row className=" row-sm">
                                                                                    <div className="col">
                                                                                        <Link href="/admin/apps/gallery">
                                                                                            <img
                                                                                                alt="img"
                                                                                                className="wd-200 br-5 mb-2 mt-2 me-4"
                                                                                                src="../../../assets/images/media/media-91.jpg"
                                                                                            />
                                                                                        </Link>
                                                                                        <Link href="/admin/apps/gallery">
                                                                                            <img
                                                                                                alt="img"
                                                                                                className="wd-200 br-5"
                                                                                                src="../../../assets/images/media/media-92.jpg"
                                                                                            />
                                                                                        </Link>
                                                                                    </div>
                                                                                </Row>
                                                                                <div className="media mt-3 profile-footer">
                                                                                    <div className="media-user me-2">
                                                                                        <div className="demo-avatar-group">
                                                                                            <div className="demo-avatar-group main-avatar-list-stacked">
                                                                                                <div className="main-img-user">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/12.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/12.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user online">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/5.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/6.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-avatar">
                                                                                                    {' '}
                                                                                                    +23{' '}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h6 className="mb-0 mg-t-10">
                                                                                            28
                                                                                            people
                                                                                            like
                                                                                            your
                                                                                            photo
                                                                                        </h6>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </Card>
                                                                        <div className="card mg-b-20 border">
                                                                            <div className="p-4">
                                                                                <div className="media">
                                                                                    <div className="media-user me-2">
                                                                                        <div className="main-img-user avatar avatar-md">
                                                                                            <img
                                                                                                alt=""
                                                                                                className="rounded-circle"
                                                                                                src="../../../assets/images/faces/6.jpg"
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h6 className="mb-0 ms-2 mg-t-3">
                                                                                            Mintrona
                                                                                            Pechon
                                                                                            Pechon
                                                                                        </h6>
                                                                                        <span className="text-muted ms-2">
                                                                                            Sep
                                                                                            26
                                                                                            2019,
                                                                                            10:14am
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="ms-auto">
                                                                                        <Dropdown
                                                                                            align={
                                                                                                'end'
                                                                                            }
                                                                                            className="dropdown  main-contact-star no-caret"
                                                                                        >
                                                                                            {' '}
                                                                                            <Dropdown.Toggle
                                                                                                variant=""
                                                                                                className="new option-dots2 border-0"
                                                                                                data-bs-toggle="dropdown"
                                                                                                href="#!"
                                                                                            >
                                                                                                <i className="fe fe-more-vertical  fs-18"></i>
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu className="shadow">
                                                                                                {' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Edit
                                                                                                    Post
                                                                                                </Dropdown.Item>{' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Delete
                                                                                                    Post
                                                                                                </Dropdown.Item>{' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Personal
                                                                                                    Settings
                                                                                                </Dropdown.Item>{' '}
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="card-body h-100">
                                                                                <p className="mg-t-0">
                                                                                    There
                                                                                    are
                                                                                    many
                                                                                    variations
                                                                                    of
                                                                                    passages
                                                                                    of
                                                                                    Lorem
                                                                                    Ipsum
                                                                                    available,
                                                                                    but
                                                                                    the
                                                                                    majority
                                                                                    have
                                                                                    suffered
                                                                                    alteration
                                                                                    in
                                                                                    some
                                                                                    form,
                                                                                    by
                                                                                    injected
                                                                                    humour,
                                                                                    or
                                                                                    randomised
                                                                                    words
                                                                                    which
                                                                                    don't
                                                                                    look
                                                                                    even
                                                                                    slightly
                                                                                    believable.
                                                                                </p>
                                                                                <Row className=" row-sm">
                                                                                    <div className="col">
                                                                                        <Link href="/admin/apps/gallery">
                                                                                            <img
                                                                                                alt="img"
                                                                                                className="wd-200 br-5 mb-2 mt-2 me-4"
                                                                                                src="../../../assets/images/media/media-94.jpg"
                                                                                            />
                                                                                        </Link>
                                                                                        <Link href="/admin/apps/gallery">
                                                                                            <img
                                                                                                alt="img"
                                                                                                className="wd-200 br-5 mb-2 mt-2"
                                                                                                src="../../../assets/images/media/media-91.jpg"
                                                                                            />
                                                                                        </Link>
                                                                                    </div>
                                                                                </Row>
                                                                                <div className="media mt-3 profile-footer">
                                                                                    <div className="media-user me-2">
                                                                                        <div className="demo-avatar-group">
                                                                                            <div className="demo-avatar-group main-avatar-list-stacked">
                                                                                                <div className="main-img-user">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/12.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user online">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/7.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user online">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/5.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/6.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-avatar">
                                                                                                    {' '}
                                                                                                    +23{' '}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h6 className="mb-0 mg-t-10">
                                                                                            28
                                                                                            people
                                                                                            like
                                                                                            your
                                                                                            photo
                                                                                        </h6>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card mg-b-20 border">
                                                                            <div className="p-4">
                                                                                <div className="media">
                                                                                    <div className="media-user me-2">
                                                                                        <div className="main-img-user avatar avatar-md">
                                                                                            <img
                                                                                                alt=""
                                                                                                className="rounded-circle"
                                                                                                src="../../../assets/images/faces/6.jpg"
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h6 className="mb-0 ms-2 mg-t-3">
                                                                                            Mintrona
                                                                                            Pechon
                                                                                            Pechon
                                                                                        </h6>
                                                                                        <span className="text-muted ms-2">
                                                                                            Sep
                                                                                            26
                                                                                            2019,
                                                                                            10:14am
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="ms-auto">
                                                                                        <Dropdown
                                                                                            align={
                                                                                                'end'
                                                                                            }
                                                                                            className="dropdown  main-contact-star no-caret"
                                                                                        >
                                                                                            {' '}
                                                                                            <Dropdown.Toggle
                                                                                                variant=""
                                                                                                className="new option-dots2 border-0"
                                                                                                data-bs-toggle="dropdown"
                                                                                                href="#!"
                                                                                            >
                                                                                                <i className="fe fe-more-vertical  fs-18"></i>
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu className="shadow">
                                                                                                {' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Edit
                                                                                                    Post
                                                                                                </Dropdown.Item>{' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Delete
                                                                                                    Post
                                                                                                </Dropdown.Item>{' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Personal
                                                                                                    Settings
                                                                                                </Dropdown.Item>{' '}
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="card-body h-100">
                                                                                <p className="mg-t-0">
                                                                                    There
                                                                                    are
                                                                                    many
                                                                                    variations
                                                                                    of
                                                                                    passages
                                                                                    of
                                                                                    Lorem
                                                                                    Ipsum
                                                                                    available,
                                                                                    but
                                                                                    the
                                                                                    majority
                                                                                    have
                                                                                    suffered
                                                                                    alteration
                                                                                    in
                                                                                    some
                                                                                    form,
                                                                                    by
                                                                                    injected
                                                                                    humour,
                                                                                    or
                                                                                    randomised
                                                                                    words
                                                                                    which
                                                                                    don't
                                                                                    look
                                                                                    even
                                                                                    slightly
                                                                                    believable.
                                                                                </p>
                                                                                <div className="media mt-3 profile-footer">
                                                                                    <div className="media-user me-2">
                                                                                        <div className="demo-avatar-group">
                                                                                            <div className="demo-avatar-group main-avatar-list-stacked">
                                                                                                <div className="main-img-user online">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/12.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/3.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/4.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user online">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/10.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-avatar">
                                                                                                    {' '}
                                                                                                    +23{' '}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h6 className="mb-0 mg-t-10">
                                                                                            28
                                                                                            people
                                                                                            like
                                                                                            your
                                                                                            photo
                                                                                        </h6>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="card border">
                                                                            <div className="p-4">
                                                                                <div className="media">
                                                                                    <div className="media-user me-2">
                                                                                        <div className="main-img-user avatar avatar-md">
                                                                                            <img
                                                                                                alt=""
                                                                                                className="rounded-circle"
                                                                                                src="../../../assets/images/faces/2.jpg"
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h6 className="mb-0 ms-2 mg-t-3">
                                                                                            Mintrona
                                                                                            Pechon
                                                                                            Pechon
                                                                                        </h6>
                                                                                        <span className="text-muted ms-2">
                                                                                            Sep
                                                                                            26
                                                                                            2019,
                                                                                            10:14am
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className="ms-auto">
                                                                                        <Dropdown
                                                                                            align={
                                                                                                'end'
                                                                                            }
                                                                                            className="dropdown  main-contact-star no-caret"
                                                                                        >
                                                                                            {' '}
                                                                                            <Dropdown.Toggle
                                                                                                variant=""
                                                                                                className="new option-dots2 border-0"
                                                                                                data-bs-toggle="dropdown"
                                                                                                href="#!"
                                                                                            >
                                                                                                <i className="fe fe-more-vertical  fs-18"></i>
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu className="shadow">
                                                                                                {' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Edit
                                                                                                    Post
                                                                                                </Dropdown.Item>{' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Delete
                                                                                                    Post
                                                                                                </Dropdown.Item>{' '}
                                                                                                <Dropdown.Item
                                                                                                    className=""
                                                                                                    href="#!"
                                                                                                >
                                                                                                    Personal
                                                                                                    Settings
                                                                                                </Dropdown.Item>{' '}
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="card-body h-100">
                                                                                <p className="mg-t-0">
                                                                                    There
                                                                                    are
                                                                                    many
                                                                                    variations
                                                                                    of
                                                                                    passages
                                                                                    of
                                                                                    Lorem
                                                                                    Ipsum
                                                                                    available,
                                                                                    but
                                                                                    the
                                                                                    majority
                                                                                    have
                                                                                    suffered
                                                                                    alteration
                                                                                    in
                                                                                    some
                                                                                    form,
                                                                                    by
                                                                                    injected
                                                                                    humour,
                                                                                    or
                                                                                    randomised
                                                                                    words
                                                                                    which
                                                                                    don't
                                                                                    look
                                                                                    even
                                                                                    slightly
                                                                                    believable.
                                                                                </p>
                                                                                <Row className=" row-sm">
                                                                                    <div className="col">
                                                                                        <Link href="/admin/apps/gallery">
                                                                                            <img
                                                                                                alt="img"
                                                                                                className="wd-200 br-5 mb-2 mt-2 me-3"
                                                                                                src="../../../assets/images/media/media-94.jpg"
                                                                                            />
                                                                                        </Link>
                                                                                        <Link href="/admin/apps/gallery">
                                                                                            <img
                                                                                                alt="img"
                                                                                                className="wd-200 br-5 mb-2 mt-2"
                                                                                                src="../../../assets/images/media/media-93.jpg"
                                                                                            />
                                                                                        </Link>
                                                                                    </div>
                                                                                </Row>
                                                                                <div className="media mt-3 profile-footer">
                                                                                    <div className="media-user me-2">
                                                                                        <div className="demo-avatar-group">
                                                                                            <div className="demo-avatar-group main-avatar-list-stacked">
                                                                                                <div className="main-img-user online">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/11.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/12.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/3.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-img-user online">
                                                                                                    <img
                                                                                                        alt=""
                                                                                                        className="rounded-circle"
                                                                                                        src="../../../assets/images/faces/5.jpg"
                                                                                                    />
                                                                                                </div>
                                                                                                <div className="main-avatar">
                                                                                                    {' '}
                                                                                                    +23{' '}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="media-body">
                                                                                        <h6 className="mb-0 mg-t-10">
                                                                                            28
                                                                                            people
                                                                                            like
                                                                                            your
                                                                                            photo
                                                                                        </h6>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane
                                                    eventKey="Gallery"
                                                    className="main-content-body border-0  p-0"
                                                    id="gallery"
                                                >
                                                    <Card>
                                                        <Card.Body>
                                                            <Gallery3 />
                                                        </Card.Body>
                                                    </Card>
                                                </Tab.Pane>
                                                <Tab.Pane
                                                    eventKey="Friends"
                                                    className="main-content-body  border-0 p-0"
                                                    id="friends"
                                                >
                                                    <Card className="">
                                                        <Card.Body className=" pd-b-10">
                                                            <Row className=" row-sm">
                                                                <Col
                                                                    sm={12}
                                                                    md={6}
                                                                    lg={6}
                                                                    xl={3}
                                                                    className=""
                                                                >
                                                                    <Card className=" custom-card border">
                                                                        <Card.Body className="  user-lock text-center">
                                                                            <Dropdown
                                                                                className=" text-end no-caret"
                                                                                align={{
                                                                                    lg: 'start',
                                                                                }}
                                                                            >
                                                                                <Dropdown.Toggle
                                                                                    variant=""
                                                                                    href="#!"
                                                                                    className="option-dots"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="true"
                                                                                >
                                                                                    <i className="fe fe-more-vertical"></i>{' '}
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu className=" dropdown-menu-end shadow">
                                                                                    {' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-message-square me-2"></i>{' '}
                                                                                        Message
                                                                                    </Dropdown.Item>
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-edit-2 me-2"></i>{' '}
                                                                                        Edit
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-eye me-2"></i>{' '}
                                                                                        View
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-trash-2 me-2"></i>{' '}
                                                                                        Delete
                                                                                    </Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                            <Link href="#!">
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle"
                                                                                    src="../../../assets/images/faces/1.jpg"
                                                                                />
                                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                                                                    James
                                                                                    Thomas
                                                                                </h4>
                                                                                <span className="text-muted">
                                                                                    Web
                                                                                    designer
                                                                                </span>
                                                                                <div className="mt-3 d-flex text-center justify-content-center">
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            <i className="ri-facebook-fill  social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col
                                                                    sm={12}
                                                                    md={6}
                                                                    lg={6}
                                                                    xl={3}
                                                                    className=""
                                                                >
                                                                    <Card className=" custom-card border">
                                                                        <Card.Body className="  user-lock text-center">
                                                                            <Dropdown
                                                                                align={{
                                                                                    lg: 'end',
                                                                                }}
                                                                                className=" text-end no-caret"
                                                                            >
                                                                                <Dropdown.Toggle
                                                                                    variant=""
                                                                                    href="#!"
                                                                                    className="option-dots"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="true"
                                                                                >
                                                                                    {' '}
                                                                                    <i className="fe fe-more-vertical"></i>{' '}
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu className=" dropdown-menu-end shadow">
                                                                                    {' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-message-square me-2"></i>
                                                                                        Message
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-edit-2 me-2"></i>{' '}
                                                                                        Edit
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-eye me-2"></i>{' '}
                                                                                        View
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-trash-2 me-2"></i>{' '}
                                                                                        Delete
                                                                                    </Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                            <a href="/admin/pages/profile">
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle"
                                                                                    src="../../../assets/images/faces/2.jpg"
                                                                                />
                                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                                                                    Reynante
                                                                                    Labares
                                                                                </h4>
                                                                                <span className="text-muted">
                                                                                    Web
                                                                                    designer
                                                                                </span>
                                                                                <div className="mt-3 d-flex text-center justify-content-center">
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            <i className="ri-facebook-fill  social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </a>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col
                                                                    sm={12}
                                                                    md={6}
                                                                    lg={6}
                                                                    xl={3}
                                                                    className=""
                                                                >
                                                                    <Card className=" custom-card border">
                                                                        <Card.Body className="  user-lock text-center">
                                                                            <Dropdown
                                                                                align={{
                                                                                    lg: 'end',
                                                                                }}
                                                                                className=" text-end no-caret"
                                                                            >
                                                                                <Dropdown.Toggle
                                                                                    variant=""
                                                                                    href="#!"
                                                                                    className="option-dots"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="true"
                                                                                >
                                                                                    {' '}
                                                                                    <i className="fe fe-more-vertical"></i>{' '}
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu className=" dropdown-menu-end shadow">
                                                                                    {' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-message-square me-2"></i>
                                                                                        Message
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-edit-2 me-2"></i>{' '}
                                                                                        Edit
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-eye me-2"></i>{' '}
                                                                                        View
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-trash-2 me-2"></i>{' '}
                                                                                        Delete
                                                                                    </Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                            <Link href="/admin/pages/profile">
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle"
                                                                                    src="../../../assets/images/faces/3.jpg"
                                                                                />
                                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                                                                    Owen
                                                                                    Bongcaras
                                                                                </h4>
                                                                                <span className="text-muted">
                                                                                    Web
                                                                                    designer
                                                                                </span>
                                                                                <div className="mt-3 d-flex text-center justify-content-center">
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            <i className="ri-facebook-fill  social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col
                                                                    sm={12}
                                                                    md={6}
                                                                    lg={6}
                                                                    xl={3}
                                                                    className=""
                                                                >
                                                                    <Card className=" custom-card border">
                                                                        <Card.Body className="  user-lock text-center">
                                                                            <Dropdown
                                                                                align={{
                                                                                    lg: 'end',
                                                                                }}
                                                                                className=" text-end no-caret"
                                                                            >
                                                                                <Dropdown.Toggle
                                                                                    variant=""
                                                                                    href="#!"
                                                                                    className="option-dots"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="true"
                                                                                >
                                                                                    {' '}
                                                                                    <i className="fe fe-more-vertical"></i>{' '}
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu className=" dropdown-menu-end shadow">
                                                                                    {' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-message-square me-2"></i>
                                                                                        Message
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-edit-2 me-2"></i>{' '}
                                                                                        Edit
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-eye me-2"></i>{' '}
                                                                                        View
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-trash-2 me-2"></i>{' '}
                                                                                        Delete
                                                                                    </Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                            <Link href="/admin/pages/profile">
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle"
                                                                                    src="../../../assets/images/faces/4.jpg"
                                                                                />
                                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                                                                    Stephen
                                                                                    Metcalfe
                                                                                </h4>
                                                                                <span className="text-muted">
                                                                                    Administrator
                                                                                </span>
                                                                                <div className="mt-3 d-flex text-center justify-content-center">
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            <i className="ri-facebook-fill  social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col
                                                                    sm={12}
                                                                    md={6}
                                                                    lg={6}
                                                                    xl={3}
                                                                    className=""
                                                                >
                                                                    <Card className=" custom-card border">
                                                                        <Card.Body className="  user-lock text-center">
                                                                            <Dropdown
                                                                                align={{
                                                                                    lg: 'end',
                                                                                }}
                                                                                className=" text-end no-caret"
                                                                            >
                                                                                <Dropdown.Toggle
                                                                                    variant=""
                                                                                    href="#!"
                                                                                    className="option-dots"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="true"
                                                                                >
                                                                                    {' '}
                                                                                    <i className="fe fe-more-vertical"></i>{' '}
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu className=" dropdown-menu-end shadow">
                                                                                    {' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-message-square me-2"></i>
                                                                                        Message
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-edit-2 me-2"></i>{' '}
                                                                                        Edit
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-eye me-2"></i>{' '}
                                                                                        View
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-trash-2 me-2"></i>{' '}
                                                                                        Delete
                                                                                    </Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                            <Link href="/admin/pages/profile">
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle"
                                                                                    src="../../../assets/images/faces/5.jpg"
                                                                                />
                                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                                                                    Socrates
                                                                                    Itumay
                                                                                </h4>
                                                                                <span className="text-muted">
                                                                                    Project
                                                                                    Manager
                                                                                </span>
                                                                                <div className="mt-3 d-flex text-center justify-content-center">
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            <i className="ri-facebook-fill  social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col
                                                                    sm={12}
                                                                    md={6}
                                                                    lg={6}
                                                                    xl={3}
                                                                    className=""
                                                                >
                                                                    <Card className=" custom-card border">
                                                                        <Card.Body className=" user-lock text-center">
                                                                            <Dropdown
                                                                                align={{
                                                                                    lg: 'end',
                                                                                }}
                                                                                className=" text-end no-caret"
                                                                            >
                                                                                <Dropdown.Toggle
                                                                                    variant=""
                                                                                    href="#!"
                                                                                    className="option-dots"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="true"
                                                                                >
                                                                                    {' '}
                                                                                    <i className="fe fe-more-vertical"></i>{' '}
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu className=" dropdown-menu-end shadow">
                                                                                    {' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-message-square me-2"></i>
                                                                                        Message
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-edit-2 me-2"></i>{' '}
                                                                                        Edit
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-eye me-2"></i>{' '}
                                                                                        View
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-trash-2 me-2"></i>{' '}
                                                                                        Delete
                                                                                    </Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                            <Link href="/admin/pages/profile">
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle"
                                                                                    src="../../../assets/images/faces/6.jpg"
                                                                                />
                                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                                                                    Cedric
                                                                                    Kelly
                                                                                </h4>
                                                                                <span className="text-muted">
                                                                                    Web
                                                                                    Designer
                                                                                </span>
                                                                                <div className="mt-3 d-flex text-center justify-content-center">
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            <i className="ri-facebook-fill  social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col
                                                                    sm={12}
                                                                    md={6}
                                                                    lg={6}
                                                                    xl={3}
                                                                    className=""
                                                                >
                                                                    <Card className=" custom-card border">
                                                                        <Card.Body className="  user-lock text-center">
                                                                            <Dropdown className=" text-end no-caret">
                                                                                <Dropdown.Toggle
                                                                                    variant=""
                                                                                    href="#!"
                                                                                    className="option-dots"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="true"
                                                                                >
                                                                                    {' '}
                                                                                    <i className="fe fe-more-vertical"></i>{' '}
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu className=" dropdown-menu-end shadow">
                                                                                    {' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-message-square me-2"></i>
                                                                                        Message
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-edit-2 me-2"></i>{' '}
                                                                                        Edit
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-eye me-2"></i>{' '}
                                                                                        View
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-trash-2 me-2"></i>{' '}
                                                                                        Delete
                                                                                    </Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                            <Link href="/admin/pages/profile">
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle"
                                                                                    src="../../../assets/images/faces/7.jpg"
                                                                                />
                                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                                                                    Cedric
                                                                                    Kelly
                                                                                </h4>
                                                                                <span className="text-muted">
                                                                                    App
                                                                                    Developer
                                                                                </span>
                                                                                <div className="mt-3 d-flex text-center justify-content-center">
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            <i className="ri-facebook-fill  social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                                <Col
                                                                    sm={12}
                                                                    md={6}
                                                                    lg={6}
                                                                    xl={3}
                                                                    className=""
                                                                >
                                                                    <Card className=" custom-card border">
                                                                        <Card.Body className="  user-lock text-center">
                                                                            <Dropdown
                                                                                align={{
                                                                                    lg: 'end',
                                                                                }}
                                                                                className=" text-end no-caret"
                                                                            >
                                                                                <Dropdown.Toggle
                                                                                    variant=""
                                                                                    href="#!"
                                                                                    className="option-dots"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="true"
                                                                                >
                                                                                    {' '}
                                                                                    <i className="fe fe-more-vertical"></i>{' '}
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu className=" dropdown-menu-end shadow">
                                                                                    {' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-message-square me-2"></i>
                                                                                        Message
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-edit-2 me-2"></i>{' '}
                                                                                        Edit
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-eye me-2"></i>{' '}
                                                                                        View
                                                                                    </Dropdown.Item>{' '}
                                                                                    <Dropdown.Item
                                                                                        className=""
                                                                                        href="#!"
                                                                                    >
                                                                                        <i className="fe fe-trash-2 me-2"></i>{' '}
                                                                                        Delete
                                                                                    </Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                            <Link href="/admin/pages/profile">
                                                                                <img
                                                                                    alt="avatar"
                                                                                    className="rounded-circle"
                                                                                    src="../../../assets/images/faces/8.jpg"
                                                                                />
                                                                                <h4 className="fs-16 mb-0 mt-3 text-dark fw-semibold">
                                                                                    Gavin
                                                                                    Gibson
                                                                                </h4>
                                                                                <span className="text-muted">
                                                                                    Administrator
                                                                                </span>
                                                                                <div className="mt-3 d-flex text-center justify-content-center">
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            <i className="ri-facebook-fill  social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span className="me-3">
                                                                                        <span className="btn-inner--icon">
                                                                                            {' '}
                                                                                            <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </Link>
                                                                        </Card.Body>
                                                                    </Card>
                                                                </Col>
                                                            </Row>
                                                        </Card.Body>
                                                    </Card>
                                                </Tab.Pane>
                                                <Tab.Pane
                                                    eventKey="AccountSettings"
                                                    className="main-content-body   border-0 p-0"
                                                    id="settings"
                                                >
                                                    <Card className="">
                                                        <Card.Body
                                                            className=" border-0"
                                                            data-select2-id="12"
                                                        >
                                                            <form
                                                                className="form-horizontal"
                                                                data-select2-id="11"
                                                            >
                                                                <div className="mb-4 main-content-label">
                                                                    Account
                                                                </div>
                                                                <div className="form-group ">
                                                                    <div className="row row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                User
                                                                                Name
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="User Name"
                                                                                defaultValue="Sonia Taylor"
                                                                            />
                                                                        </Col>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <div className="row row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Email
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Email"
                                                                                defaultValue="info@SoniaTaylor.in"
                                                                            />
                                                                        </Col>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="form-group "
                                                                    data-select2-id="108"
                                                                >
                                                                    <div
                                                                        className="row"
                                                                        data-select2-id="107"
                                                                    >
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Language
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                            data-select2-id="106"
                                                                        >
                                                                            <Select
                                                                                name="choices-single-default"
                                                                                options={
                                                                                    OptionLanguage
                                                                                }
                                                                                id="choices-single-default1"
                                                                                classNamePrefix="Select2"
                                                                            />
                                                                        </Col>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="form-group "
                                                                    data-select2-id="10"
                                                                >
                                                                    <div
                                                                        className="row"
                                                                        data-select2-id="9"
                                                                    >
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Timezone
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                            data-select2-id="8"
                                                                        >
                                                                            <Select
                                                                                name="choices-single-default"
                                                                                options={
                                                                                    OptionTimezone
                                                                                }
                                                                                id="choices-single-default2"
                                                                                classNamePrefix="Select2"
                                                                            />
                                                                        </Col>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <div className="row row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Verification
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="ckbox  mb-2">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="checkbox"
                                                                                    defaultValue=""
                                                                                    id="flexCheckChecked7"
                                                                                />
                                                                                <span>
                                                                                    Email
                                                                                </span>
                                                                            </label>
                                                                            <label className="ckbox  mb-2">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="checkbox"
                                                                                    defaultValue=""
                                                                                    id="flexCheckChecked3"
                                                                                    defaultChecked
                                                                                />
                                                                                <span>
                                                                                    SMS
                                                                                </span>
                                                                            </label>
                                                                            <label className="ckbox  mb-2">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="checkbox"
                                                                                    defaultValue=""
                                                                                    id="flexCheckChecked8"
                                                                                />
                                                                                <span>
                                                                                    Phone
                                                                                </span>
                                                                            </label>
                                                                        </Col>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-4 main-content-label">
                                                                    Security
                                                                    Settings
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Login
                                                                                Verification
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            {' '}
                                                                            <a
                                                                                className=""
                                                                                href="#!"
                                                                            >
                                                                                Settup
                                                                                Verification
                                                                            </a>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div className="form-group ">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                3
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="form-label">
                                                                                Password
                                                                                Verification
                                                                            </label>
                                                                        </Col>
                                                                        <Col
                                                                            md={
                                                                                9
                                                                            }
                                                                            className=""
                                                                        >
                                                                            <label className="ckbox  mg-b-10">
                                                                                <input
                                                                                    className="form-check-input mt-0"
                                                                                    type="checkbox"
                                                                                    defaultValue=""
                                                                                    id="flexCheckChecked9"
                                                                                />
                                                                                <span>
                                                                                    Require
                                                                                    Personal
                                                                                    Details
                                                                                </span>
                                                                            </label>
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                                <div>
                                                                   /* <div className="mb-4 main-content-label">
                                                                        Notifications
                                                                    </div>
                                                                    <div className="form-group mb-0">
                                                                        <Row className=" row-sm">
                                                                            <Col
                                                                                md={
                                                                                    3
                                                                                }
                                                                                className=""
                                                                            >
                                                                                <label className="form-label">
                                                                                    Configure
                                                                                    Notifications
                                                                                </label>
                                                                            </Col>
                                                                            <Col
                                                                                md={
                                                                                    9
                                                                                }
                                                                                className=""
                                                                            >
                                                                                <label className="d-block mg-b-15-f">
                                                                                    <input
                                                                                        className="form-check-input mt-0"
                                                                                        type="checkbox"
                                                                                        defaultValue=""
                                                                                        id="flexCheckChecked4"
                                                                                        defaultChecked
                                                                                    />
                                                                                    <span className="custom-switch-indicator"></span>
                                                                                    <span className="text-muted ms-2">
                                                                                        Allow
                                                                                        all
                                                                                        Notifications
                                                                                    </span>
                                                                                </label>
                                                                                <label className="d-block mg-b-15-f">
                                                                                    <input
                                                                                        className="form-check-input mt-0"
                                                                                        type="checkbox"
                                                                                        defaultValue=""
                                                                                        id="flexCheckChecked6"
                                                                                    />
                                                                                    <span className="custom-switch-indicator"></span>
                                                                                    <span className="text-muted ms-2">
                                                                                        Disable
                                                                                        all
                                                                                        Notifications
                                                                                    </span>
                                                                                </label>
                                                                                <label className="d-block mg-b-15-f">
                                                                                    <input
                                                                                        className="form-check-input mt-0"
                                                                                        type="checkbox"
                                                                                        defaultValue=""
                                                                                        id="flexCheckChecked5"
                                                                                        defaultChecked
                                                                                    />
                                                                                    <span className="custom-switch-indicator"></span>
                                                                                    <span className="text-muted ms-2">
                                                                                        Notification
                                                                                        Sounds
                                                                                    </span>
                                                                                </label>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group float-end">
                                                                    <Row className=" row-sm">
                                                                        <Col
                                                                            md={
                                                                                12
                                                                            }
                                                                            className=" btn-list"
                                                                        >
                                                                            <Link
                                                                                className="mg-r-20 btn btn-primary"
                                                                                href="#!"
                                                                            >
                                                                                Deactivate
                                                                                Account
                                                                            </Link>
                                                                            <Link
                                                                                className="btn btn-secondary"
                                                                                href="#!"
                                                                            >
                                                                                Change
                                                                                Password
                                                                            </Link>{' '}
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </form>
                                                        </Card.Body>
                                                    </Card>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </span>
                    </Tab.Container>
                </Col>
            </Row>

            <Row className=" row-sm">
                <Col lg={12} md={12}>
                    <div className="tab-content"></div>
                </Col>
            </Row>
        </div>
    );
};

Profile.layout = 'Contentlayout';

export default Profile;
