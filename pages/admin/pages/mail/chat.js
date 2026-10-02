import Link from 'next/link';
import {
    Card,
    Col,
    Dropdown,
    Nav,
    OverlayTrigger,
    Row,
    Tooltip,
} from 'react-bootstrap';
import SimpleBar from 'simplebar-react';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

const Chat = () => (
    <div>
        <Seo title={'Chat'} />
        <Pageheader title="CHAT" heading="Mail" active="Chat" />

        <Row className=" row-sm mb-4">
            <Col xl={12} lg={12}>
                <Row className=" main-chart-wrapper">
                    <Col xxl={3} lg={12}>
                        <div className="card">
                            <div className="main-content-app d-block">
                                <div className="main-content-left main-content-left-chat overflow-hidden">
                                    <Nav
                                        className=" main-nav-line main-nav-line-chat"
                                        defaultActiveKey="Recent"
                                    >
                                        <Nav.Item>
                                            <Nav.Link
                                                className="nav-link "
                                                href="#!"
                                                eventKey="Recent"
                                            >
                                                Recent Chat
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link
                                                className="nav-link "
                                                href="#!"
                                                eventKey="Groups"
                                            >
                                                Groups{' '}
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link
                                                className="nav-link "
                                                href="#!"
                                                eventKey="Calls"
                                            >
                                                Calls{' '}
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <SimpleBar
                                        className="main-chat-list chat-users-tab"
                                        id="chat-msg-scroll"
                                    >
                                        <div className="media new">
                                            <div className="main-img-user online">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/5.jpg"
                                                />{' '}
                                                <span>2</span>
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>Socrates Itumay</span>{' '}
                                                    <span>2 hours</span>
                                                </div>
                                                <p>
                                                    Nam quam nunc, blandit vel
                                                    aecenas et ante tincid
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media new">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/6.jpg"
                                                />{' '}
                                                <span>1</span>
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>
                                                        Dexter dela Cruz
                                                    </span>{' '}
                                                    <span>3 hours</span>
                                                </div>
                                                <p>
                                                    Maec enas tempus, tellus
                                                    eget con dime ntum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media selected">
                                            <div className="main-img-user online">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/9.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>
                                                        Reynante Labares
                                                    </span>{' '}
                                                    <span>10 hours</span>
                                                </div>
                                                <p>
                                                    Nam quam nunc, bl ndit vel
                                                    aecenas et ante tincid
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/11.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>Joyce Chua</span>{' '}
                                                    <span>2 days</span>
                                                </div>
                                                <p>
                                                    Ma ecenas tempus, tellus
                                                    eget con dimen tum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/4.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>Rolando Paloso</span>{' '}
                                                    <span>2 days</span>
                                                </div>
                                                <p>
                                                    Nam quam nunc, blandit vel
                                                    aecenas et ante tincid
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media new">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/7.jpg"
                                                />{' '}
                                                <span>1</span>
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>Ariana Monino</span>{' '}
                                                    <span>3 days</span>
                                                </div>
                                                <p>
                                                    Maece nas tempus, tellus
                                                    eget cond imentum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/8.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>
                                                        Maricel Villalon
                                                    </span>{' '}
                                                    <span>4 days</span>
                                                </div>
                                                <p>
                                                    Nam quam nunc, blandit vel
                                                    aecenas et ante tincid
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/12.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>
                                                        Maryjane Cruiser
                                                    </span>{' '}
                                                    <span>5 days</span>
                                                </div>
                                                <p>
                                                    Mae cenas tempus, tellus
                                                    eget co ndimen tum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/15.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>
                                                        Lovely Dela Cruz
                                                    </span>{' '}
                                                    <span>5 days</span>
                                                </div>
                                                <p>
                                                    Mae cenas tempus, tellus
                                                    eget co ndimen tum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/10.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>Daniel Padilla</span>{' '}
                                                    <span>5 days</span>
                                                </div>
                                                <p>
                                                    Mae cenas tempus, tellus
                                                    eget co ndimen tum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/3.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>John Pratts</span>{' '}
                                                    <span>6 days</span>
                                                </div>
                                                <p>
                                                    Mae cenas tempus, tellus
                                                    eget co ndimen tum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/7.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>
                                                        Raymart Santiago
                                                    </span>{' '}
                                                    <span>6 days</span>
                                                </div>
                                                <p>
                                                    Nam quam nunc, blandit vel
                                                    aecenas et ante tincid
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media border-bottom-0">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/6.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>Samuel Lerin</span>{' '}
                                                    <span>7 days</span>
                                                </div>
                                                <p>
                                                    Nam quam nunc, blandit vel
                                                    aecenas et ante tincid
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/15.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>
                                                        Lovely Dela Cruz
                                                    </span>{' '}
                                                    <span>5 days</span>
                                                </div>
                                                <p>
                                                    Mae cenas tempus, tellus
                                                    eget co ndimen tum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/10.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>Daniel Padilla</span>{' '}
                                                    <span>5 days</span>
                                                </div>
                                                <p>
                                                    Mae cenas tempus, tellus
                                                    eget co ndimen tum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/3.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>John Pratts</span>{' '}
                                                    <span>6 days</span>
                                                </div>
                                                <p>
                                                    Mae cenas tempus, tellus
                                                    eget co ndimen tum rhoncus,
                                                    sem quam
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/7.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>
                                                        Raymart Santiago
                                                    </span>{' '}
                                                    <span>6 days</span>
                                                </div>
                                                <p>
                                                    Nam quam nunc, blandit vel
                                                    aecenas et ante tincid
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media border-bottom-0">
                                            <div className="main-img-user">
                                                <img
                                                    alt=""
                                                    src="../../../../assets/images/faces/6.jpg"
                                                />
                                            </div>
                                            <div className="media-body">
                                                <div className="media-contact-name">
                                                    <span>Samuel Lerin</span>{' '}
                                                    <span>7 days</span>
                                                </div>
                                                <p>
                                                    Nam quam nunc, blandit vel
                                                    aecenas et ante tincid
                                                </p>
                                            </div>
                                        </div>
                                    </SimpleBar>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} lg={12}>
                        <div className="card overflow-hidden">
                            <div className="main-content-app d-block">
                                <div className="main-content-body main-content-body-chat">
                                    <div className="main-chat-header">
                                        <div className="main-img-user">
                                            <img
                                                alt=""
                                                src="../../../../assets/images/faces/9.jpg"
                                            />
                                        </div>
                                        <div className="main-chat-msg-name">
                                            <h6>Reynante Labares</h6>
                                            <small>
                                                Last seen: 2 minutes ago
                                            </small>
                                        </div>
                                        <Nav className="nav">
                                            <Link
                                                className="nav-link"
                                                href="#!"
                                            >
                                                <i className="icon ion-md-more"></i>
                                            </Link>
                                            <OverlayTrigger
                                                placement="top"
                                                href=""
                                                overlay={
                                                    <Tooltip>Call</Tooltip>
                                                }
                                            >
                                                <i className="nav-link fe fe-star"></i>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                href=""
                                                overlay={
                                                    <Tooltip>Trash</Tooltip>
                                                }
                                            >
                                                <i className="nav-link fe fe-trash"></i>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                href=""
                                                overlay={
                                                    <Tooltip>View Info</Tooltip>
                                                }
                                            >
                                                <i className="nav-link fe fe-alert-circle"></i>
                                            </OverlayTrigger>
                                        </Nav>
                                    </div>
                                    <div className="main-chat-body">
                                        <SimpleBar
                                            className="content-inner chat-content"
                                            id="main-chat-content"
                                        >
                                            <label className="main-chat-time">
                                                <span>3 days ago</span>
                                            </label>
                                            <div className="media flex-row-reverse">
                                                <div className="main-img-user online">
                                                    <img
                                                        alt=""
                                                        src="../../../../assets/images/faces/9.jpg"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="main-msg-wrapper right">
                                                        Nulla consequat massa
                                                        quis enim. Donec pede
                                                        justo, fringilla vel...
                                                    </div>
                                                    <div className="main-msg-wrapper right">
                                                        rhoncus ut, imperdiet a,
                                                        venenatis vitae,
                                                        justo...
                                                    </div>
                                                    <div className="main-msg-wrapper p-0">
                                                        <img
                                                            alt=""
                                                            className="wd-100 ht-100 br-5"
                                                            src="../../../../assets/images/ecommerce/6.jpg"
                                                        />
                                                    </div>
                                                    <div>
                                                        <span>9:48 am</span>{' '}
                                                        <a href="#!">
                                                            <i className="icon ion-android-more-horizontal"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="main-img-user online">
                                                    <img
                                                        alt=""
                                                        src="../../../../assets/images/faces/6.jpg"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="main-msg-wrapper left">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit. Aenean
                                                        commodo ligula eget
                                                        dolor.
                                                    </div>
                                                    <div>
                                                        <span>9:32 am</span>{' '}
                                                        <a href="#!">
                                                            <i className="icon ion-android-more-horizontal"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media flex-row-reverse">
                                                <div className="main-img-user online">
                                                    <img
                                                        alt=""
                                                        src="../../../../assets/images/faces/9.jpg"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="main-msg-wrapper right">
                                                        Nullam dictum felis eu
                                                        pede mollis pretium
                                                    </div>
                                                    <div>
                                                        <span>11:22 am</span>{' '}
                                                        <a href="#!">
                                                            <i className="icon ion-android-more-horizontal"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="main-chat-time">
                                                <span>Yesterday</span>
                                            </label>
                                            <div className="media">
                                                <div className="main-img-user online">
                                                    <img
                                                        alt=""
                                                        src="../../../../assets/images/faces/6.jpg"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="main-msg-wrapper left">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetuer
                                                        adipiscing elit. Aenean
                                                        commodo ligula eget
                                                        dolor.
                                                    </div>
                                                    <div>
                                                        <span>9:32 am</span>{' '}
                                                        <a href="#!">
                                                            <i className="icon ion-android-more-horizontal"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media flex-row-reverse">
                                                <div className="main-img-user online">
                                                    <img
                                                        alt=""
                                                        src="../../../../assets/images/faces/9.jpg"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="main-msg-wrapper right">
                                                        Donec quam felis,
                                                        ultricies nec,
                                                        pellentesque euerdiet a,
                                                        venenatis vitae, justo.
                                                    </div>
                                                    <div className="main-msg-wrapper right">
                                                        Nullam dictum felis eu
                                                        pede mollis pretium
                                                    </div>
                                                    <div>
                                                        <span>9:48 am</span>{' '}
                                                        <a href="#!">
                                                            <i className="icon ion-android-more-horizontal"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="main-chat-time">
                                                <span>Today</span>
                                            </label>
                                            <div className="media">
                                                <div className="main-img-user online">
                                                    <img
                                                        alt=""
                                                        src="../../../../assets/images/faces/6.jpg"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="main-msg-wrapper left">
                                                        Maecenas tempus, tellus
                                                        eget condimentum rhoncus
                                                    </div>
                                                    <div className="main-msg-wrapper left">
                                                        Nam quam nunc, blandit
                                                        vel, luctus pulvinar,
                                                        hendrerit id, lorem.
                                                        Maecenas nec odio et
                                                        ante tincidunt tempus.
                                                        Donec vitae sapien ut
                                                        libero venenatis
                                                        faucibus.
                                                    </div>
                                                    <div>
                                                        <span>10:12 am</span>{' '}
                                                        <a href="#!">
                                                            <i className="icon ion-android-more-horizontal"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media flex-row-reverse">
                                                <div className="main-img-user online">
                                                    <img
                                                        alt=""
                                                        src="../../../../assets/images/faces/9.jpg"
                                                    />
                                                </div>
                                                <div className="media-body">
                                                    <div className="main-msg-wrapper right">
                                                        Maecenas tempus, tellus
                                                        eget condimentum rhoncus
                                                    </div>
                                                    <div className="main-msg-wrapper right">
                                                        Nam quam nunc, blandit
                                                        vel, luctus pulvinar,
                                                        hendrerit id, lorem.
                                                        Maecenas nec odio et
                                                        ante tincidunt tempus.
                                                        Donec vitae sapien ut
                                                        libero venenatis
                                                        faucibus.
                                                    </div>
                                                    <div>
                                                        <span>09:40 am</span>{' '}
                                                        <a href="#!">
                                                            <i className="icon ion-android-more-horizontal"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </SimpleBar>
                                    </div>
                                    <div className="main-chat-footer">
                                        <Nav className="nav"></Nav>
                                        <input
                                            className="form-control"
                                            placeholder="Type your message here..."
                                            type="text"
                                        />
                                        <OverlayTrigger
                                            placement="top"
                                            href=""
                                            overlay={
                                                <Tooltip>Add Emoticons</Tooltip>
                                            }
                                        >
                                            <i className="nav-link me-2 fe fe-paperclip"></i>
                                        </OverlayTrigger>
                                        <Link
                                            className="main-msg-send"
                                            href="#!"
                                        >
                                            <i className="fe fe-send"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={3} lg={12}>
                        <Card className=" overflow-hidden">
                            <div className="main-content-app">
                                <Card.Body className=" p-0 chat-main">
                                    <SimpleBar
                                        className="chat-user-details"
                                        id="chat-user-details"
                                    >
                                        <div className="user_vertical-drop">
                                            <Dropdown className="dropdown show main-contact-star">
                                                <Dropdown.Toggle
                                                    className="new option-dots no-caret"
                                                    variant=""
                                                    href="#!"
                                                >
                                                    <i className="fe fe-more-vertical  tx-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu
                                                    style={{ margin: '0px' }}
                                                    className="dropdown-menu shadow"
                                                >
                                                    <Dropdown.Item
                                                        className="dropdown-item"
                                                        href="#!"
                                                    >
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item
                                                        className="dropdown-item"
                                                        href="#!"
                                                    >
                                                        Delete
                                                    </Dropdown.Item>
                                                    <Dropdown.Item
                                                        className="dropdown-item"
                                                        href="#!"
                                                    >
                                                        Settings
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="text-center border-bottom chat-image p-4 pb-0 mb-4 br-5 mt-3">
                                            <div className="main-img-user avatar-xl main-avatar online mb-3 mx-auto">
                                                <Link
                                                    className=""
                                                    href="/admin/pages/profile"
                                                >
                                                    <img
                                                        alt="avatar"
                                                        className="rounded-circle"
                                                        src="../../../../assets/images/faces/2.jpg"
                                                    />
                                                </Link>
                                            </div>
                                            <Link href="/admin/pages/profile">
                                                <h5 className="mb-1">
                                                    Ryan Gracie
                                                </h5>
                                            </Link>
                                            <p className="text-muted mt-0 mb-1 pt-0 fs-13">
                                                Senior Web Designer
                                            </p>
                                            <p className="text-muted mt-0 pt-0 fs-13 mb-0">
                                                +123(45)-678-90
                                            </p>
                                        </div>
                                        <div className="">
                                            <div className="px-4">
                                                <h6 className="mb-3">
                                                    Contact Details :
                                                </h6>
                                                <div className="d-flex">
                                                    <div>
                                                        <Link
                                                            className="nav-link border rounded-pill chat-profile me-2"
                                                            href="#!"
                                                        >
                                                            <i className="fe fe-shield"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="ms-2">
                                                        <p className="fs-13 font-weight-semibold mb-0">
                                                            Id
                                                        </p>
                                                        <p className="fs-12 text-muted">
                                                            2E345D4.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex">
                                                    <div>
                                                        <Link
                                                            className="nav-link border rounded-pill chat-profile me-2"
                                                            href="#!"
                                                        >
                                                            <i className="fe fe-mail"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="ms-2">
                                                        <p className="fs-13 font-weight-semibold mb-0">
                                                            Email
                                                        </p>
                                                        <p className="fs-12 text-muted">
                                                            gracie435@gmail.com.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div>
                                                        <Link
                                                            className="nav-link border rounded-pill chat-profile me-2"
                                                            href="#!"
                                                        >
                                                            <i className="fe fe-map-pin"></i>
                                                        </Link>
                                                    </div>
                                                    <div className="ms-2">
                                                        <p className="fs-13 font-weight-semibold mb-0">
                                                            Address
                                                        </p>
                                                        <p className="fs-12 text-muted">
                                                            2nd street,houston
                                                            texas,united states.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4">
                                                <h6 className="mb-0">
                                                    Shared Files :
                                                </h6>
                                                <div className="card custom-card overflow-hidden border-0">
                                                    <div className="card-body pb-0 ps-0">
                                                        <div className="border-0 p-0 mb-4">
                                                            <div className="media mt-0">
                                                                <div className="ps-0 me-3">
                                                                    <i className="fa fa-folder-open shared-files text-muted"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="mt-0">
                                                                            <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                                                {' '}
                                                                                Ex
                                                                                Document
                                                                            </h5>
                                                                            <p className="mb-0 fs-13 text-muted">
                                                                                ppt
                                                                                <span className="fs-11 ms-2">
                                                                                    1.2
                                                                                    mb
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="ms-auto wd-45p fs-16 ">
                                                                            <span
                                                                                id="spark1"
                                                                                className="wd-100p"
                                                                            ></span>
                                                                            <span className="float-end badge">
                                                                                <span className="op-7 text-muted font-weight-semibold">
                                                                                    4
                                                                                    hrs
                                                                                    ago{' '}
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border-0 p-0 mb-4">
                                                            <div className="media mt-0">
                                                                <div className="ps-0 me-3">
                                                                    <i className="fa fa-image shared-files text-muted"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="mt-0">
                                                                            <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                                                Sam
                                                                                Photo
                                                                            </h5>
                                                                            <p className="mb-0 fs-13 text-muted">
                                                                                img
                                                                                <span className="fs-11 ms-2">
                                                                                    12
                                                                                    mb
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="ms-auto wd-45p fs-16 ">
                                                                            <span
                                                                                id="spark2"
                                                                                className="wd-100p"
                                                                            ></span>
                                                                            <span className="float-end badge">
                                                                                <span className="op-7 text-muted font-weight-semibold">
                                                                                    4
                                                                                    hrs
                                                                                    ago{' '}
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="border-0 p-0 mb-0">
                                                            <div className="media mt-0">
                                                                <div className="ps-0 me-3">
                                                                    <i className="fa fa-envelope shared-files text-muted"></i>
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="mt-0">
                                                                            <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                                                {' '}
                                                                                video
                                                                            </h5>
                                                                            <p className="mb-0 fs-13 text-muted">
                                                                                Video
                                                                                <span className="fs-12 ms-2">
                                                                                    16
                                                                                    mb
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                        <span className="ms-auto wd-45p fs-16 ">
                                                                            <span
                                                                                id="spark3"
                                                                                className="wd-100p"
                                                                            ></span>
                                                                            <span className="float-end badge">
                                                                                <span className="op-7 text-muted font-weight-semibold text-wrap">
                                                                                    22
                                                                                    mins
                                                                                    ago{' '}
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SimpleBar>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
);

Chat.layout = 'Contentlayout';

export default Chat;
