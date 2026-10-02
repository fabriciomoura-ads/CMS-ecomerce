import Link from 'next/link';
import { Fragment } from 'react';
import {
    Button,
    Card,
    Col,
    Dropdown,
    Nav,
    OverlayTrigger,
    Row,
    Tooltip,
} from 'react-bootstrap';
import Seo from '../../../shared/layout-components/seo/seo';
const Contacts = () => {
    return (
        <Fragment>
            <Seo title={'Contacts'} />
            <div className="breadcrumb-header justify-content-between">
                <div className="left-content">
                    <span className="main-content-title mg-b-0 mg-b-lg-1">
                        CONTACTS
                    </span>
                </div>
                <div className="justify-content-center">
                    <Button
                        variant=""
                        type="button"
                        className="btn btn-primary"
                    >
                        <i className="fe fe-plus me-1"></i> Add New Contact
                    </Button>
                </div>
            </div>

            {/* <!-- Row1 --> */}
            <Row className=" row-sm">
                <Col sm={12} lg={5} xl={12} xxl={3}>
                    <Card className="custom-card">
                        <div className="">
                            <div className="main-content-contacts pt-0">
                                <div className="main-content-left main-content-left-contacts slid1">
                                    <Nav
                                        defaultActiveKey="link-1"
                                        className="nav main-nav-line  border-bottom-0 main-nav-line-chat  p-3"
                                    >
                                        <Nav.Item>
                                            <Nav.Link
                                                eventKey="link-1"
                                                className="nav-link"
                                                data-bs-toggle="tab"
                                            >
                                                All Contacts
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link
                                                eventKey="link-2"
                                                className="nav-link"
                                                data-bs-toggle="tab"
                                            >
                                                Favorites
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <div
                                        className="main-contacts-list"
                                        id="mainContactList"
                                    >
                                        <div className="main-contact-label">
                                            A
                                        </div>
                                        <div className="main-contact-item selected">
                                            <div className="main-img-user online">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/2.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Abigail Johnson</h6>
                                                <span className="phone">
                                                    +1-234-567-890
                                                </span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-img-user online">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/3.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Archie Cantones</h6>
                                                <span>archie@cantones.com</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>

                                        <div className="main-contact-item">
                                            <div className="main-avatar online">
                                                A
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Allan Rey Palban</h6>
                                                <span>allanr@palban.com</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-avatar bg-secondary">
                                                A
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Aileen Mante</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-label border-bottom">
                                            B
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-img-user">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/4.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Brandon Dilao</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-img-user online">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/5.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Britney Labares</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-avatar bg-danger">
                                                B
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Brateyley Cruz</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-label border-bottom">
                                            C
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-img-user">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/6.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Camille Audrey</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-img-user online">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/7.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Christian Lerio</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-img-user online">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/8.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Christopher Segovia</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-label border-bottom">
                                            D
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-img-user online">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/9.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Darius Clayton</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-img-user">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/10.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Dyanne Aceron</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="main-contact-item">
                                            <div className="main-img-user online">
                                                <img
                                                    alt="avatar"
                                                    src="../../../assets/images/faces/11.jpg"
                                                />
                                            </div>
                                            <div className="main-contact-body">
                                                <h6>Divina Gracia</h6>
                                                <span>+1-234-567-890</span>
                                            </div>
                                            <Dropdown className="main-contact-star">
                                                <Dropdown.Toggle
                                                    as="a"
                                                    className="no-caret"
                                                    variant=""
                                                >
                                                    <i className="fe fe-more-vertical fs-18"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu align="end">
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-star me-2 "></i>
                                                        Add to Favorite
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-edit me-2"></i>
                                                        Edit
                                                    </Dropdown.Item>
                                                    <Dropdown.Item href="#">
                                                        <i className="fe fe-trash-2 me-2"></i>
                                                        Delete
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>

                <Col sm={12} lg={7} xl={12} xxl={9}>
                    <div className="">
                        <Link
                            className="main-header-arrow"
                            href="#!"
                            id="ChatBodyHide"
                        ></Link>
                        <div className="main-content-body main-content-body-contacts card custom-card">
                            <div className="main-contact-info-header pt-3">
                                <div className="media">
                                    <div className="main-img-user">
                                        <img
                                            alt="avatar"
                                            src="../../../assets/images/faces/6.jpg"
                                        />{' '}
                                        <Link href="#!">
                                            <i className="fe fe-camera"></i>
                                        </Link>
                                    </div>
                                    <div className="media-body">
                                        <h5>Teri Dactyl</h5>
                                        <p>Web Designer</p>
                                        <nav className="contact-info">
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip>Call</Tooltip>
                                                }
                                            >
                                                <Link
                                                    href="#!"
                                                    className="contact-icon border tx-inverse"
                                                >
                                                    <i className="fe fe-phone"></i>
                                                </Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip>Video</Tooltip>
                                                }
                                            >
                                                <Link
                                                    href="#!"
                                                    className="contact-icon border tx-inverse"
                                                >
                                                    <i className="fe fe-video"></i>
                                                </Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip>Message</Tooltip>
                                                }
                                            >
                                                <Link
                                                    href="#!"
                                                    className="contact-icon border tx-inverse"
                                                >
                                                    <i className="fe fe-message-square"></i>
                                                </Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip>
                                                        Add to Group
                                                    </Tooltip>
                                                }
                                            >
                                                <Link
                                                    href="#!"
                                                    className="contact-icon border tx-inverse"
                                                >
                                                    <i className="fe fe-user-plus"></i>
                                                </Link>
                                            </OverlayTrigger>
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip>Block</Tooltip>
                                                }
                                            >
                                                <Link
                                                    href="#!"
                                                    className="contact-icon border tx-inverse"
                                                >
                                                    <i className="fe fe-slash"></i>
                                                </Link>
                                            </OverlayTrigger>
                                        </nav>
                                    </div>
                                </div>
                                <div className="main-contact-action btn-list pt-3 pe-0">
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip>Edit Profile</Tooltip>
                                        }
                                    >
                                        <Link
                                            href="#!"
                                            className="btn ripple btn-primary text-fixed-white btn-icon"
                                        >
                                            <i className="fe fe-edit"></i>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip>Delete Profile</Tooltip>
                                        }
                                    >
                                        <Link
                                            href="#!"
                                            className="btn ripple btn-secondary text-fixed-white btn-icon"
                                        >
                                            <i className="fe fe-trash-2"></i>
                                        </Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip>Add Favorite</Tooltip>
                                        }
                                    >
                                        <Link
                                            href="#!"
                                            className="btn ripple btn-warning text-fixed-white btn-icon"
                                        >
                                            <i className="fe fe-star"></i>
                                        </Link>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div className="main-contact-info-body">
                                <div className="px-4 py-3">
                                    <h6>Biography :</h6>
                                    <p>
                                        Ut enim ad minima veniam, quis nostrum
                                        exercitationem ullam corporis suscipit
                                        laboriosam, nisi ut aliquid ex ea
                                        commodi consequatur? Quis autem vel eum
                                        iure reprehenderit qui in ea voluptate
                                        velit esse quam nihil molestiae
                                        consequatur, vel illum qui dolorem eum
                                        fugiat quo voluptas nulla pariatur.
                                    </p>
                                    <p>
                                        Ut enim ad minima veniam, quis nostrum
                                        exercitationem ullam corporis suscipit
                                        laboriosam, nisi ut aliquid ex ea
                                        commodi consequatur? Quis autem vel eum
                                        iure reprehenderit qui in ea voluptate
                                        velit esse quam nihil molestiae
                                        consequatur, vel illum qui dolorem eum
                                        fugiat quo voluptas nulla
                                        pariaturexplicabo. Nemo enim ipsam
                                        voluptatem quia voluptas sit aspernatur
                                        aut odit aut fugit, sed quia
                                        consequuntur magni dolores eos qui
                                        ratione voluptatem sequi nesciunt.
                                    </p>
                                </div>
                                <div className="media-list pb-0">
                                    <div className="media">
                                        <div className="media-body px-4">
                                            <div>
                                                <label>Work :</label>{' '}
                                                <span className="tx-medium">
                                                    +1 (234) 567 8901
                                                </span>
                                            </div>
                                            <div>
                                                <label>Personal :</label>{' '}
                                                <span className="tx-medium">
                                                    +1 (498) 021 0090
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body px-4">
                                            <div>
                                                <label>Gmail Account :</label>{' '}
                                                <span className="tx-medium">
                                                    Dactyl.taylor@gmail.com
                                                </span>
                                            </div>
                                            <div>
                                                <label>Other Account :</label>{' '}
                                                <span className="tx-medium">
                                                    me@bootstrapdash.me
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <div className="media-body px-4">
                                            <div>
                                                <label>Current Address :</label>{' '}
                                                <span className="tx-medium">
                                                    012 Dashboard Apartments,
                                                    Dayl Francisco, California
                                                    13245
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media mb-0">
                                        <div className="media-body px-4 pb-3">
                                            <div>
                                                <label>Call History :</label>{' '}
                                                <span className="tx-medium">
                                                    Duration of last call: 5m
                                                    25sec
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card custom-card">
                            <div className="card-header pb-0">
                                <div className="card-title">
                                    Recent Contacts
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
                                        <div className="border d-flex p-2 br-5 mb-2 flex-wrap">
                                            <div className="recent-contacts me-3">
                                                <div className="main-img-user avatar avatar-md">
                                                    <img
                                                        alt="avatar"
                                                        className="rounded-circle"
                                                        src="../../../assets/images/faces/5.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="mt-1 mb-1">
                                                    Abigali kelly
                                                </h6>
                                                <p className="mb-0 text-muted">
                                                    Front end
                                                </p>
                                            </div>
                                            <div className="my-auto ms-auto">
                                                <nav className="contact-info d-flex">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Call
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Call"
                                                        >
                                                            <i className="fe fe-phone tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Video
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Video"
                                                        >
                                                            <i className="fe fe-video tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
                                        <div className="border d-flex p-2 br-5 mb-2 flex-wrap">
                                            <div className="recent-contacts me-3">
                                                <div className="main-img-user avatar avatar-md">
                                                    <img
                                                        alt="avatar"
                                                        className="rounded-circle"
                                                        src="../../../assets/images/faces/2.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="mt-1 mb-1">
                                                    Brenda Crux
                                                </h6>
                                                <p className="mb-0 text-muted">
                                                    Angular
                                                </p>
                                            </div>
                                            <div className="my-auto ms-auto">
                                                <nav className="contact-info d-flex">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Call
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Call"
                                                        >
                                                            <i className="fe fe-phone tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Video
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Video"
                                                        >
                                                            <i className="fe fe-video tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
                                        <div className="border d-flex p-2 br-5 mb-2 flex-wrap">
                                            <div className="recent-contacts me-3">
                                                <div className="main-img-user avatar avatar-md">
                                                    <img
                                                        alt="avatar"
                                                        className="rounded-circle"
                                                        src="../../../assets/images/faces/8.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="mt-1 mb-1">
                                                    Rach Michelle
                                                </h6>
                                                <p className="mb-0 text-muted">
                                                    Php
                                                </p>
                                            </div>
                                            <div className="my-auto ms-auto">
                                                <nav className="contact-info d-flex">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Call
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Call"
                                                        >
                                                            <i className="fe fe-phone tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Video
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Video"
                                                        >
                                                            <i className="fe fe-video tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
                                        <div className="border d-flex p-2 br-5 mb-2 flex-wrap">
                                            <div className="recent-contacts me-3">
                                                <div className="main-img-user avatar avatar-md">
                                                    <img
                                                        alt="avatar"
                                                        className="rounded-circle"
                                                        src="../../../assets/images/faces/9.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="mt-1 mb-1">
                                                    Matt Harder
                                                </h6>
                                                <p className="mb-0 text-muted">
                                                    Codeignitor
                                                </p>
                                            </div>
                                            <div className="my-auto ms-auto">
                                                <nav className="contact-info d-flex">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Call
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Call"
                                                        >
                                                            <i className="fe fe-phone tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Video
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Video"
                                                        >
                                                            <i className="fe fe-video tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
                                        <div className="border d-flex p-2 br-5 mb-2 flex-wrap">
                                            <div className="recent-contacts me-3">
                                                <div className="main-img-user avatar avatar-md">
                                                    <img
                                                        alt="avatar"
                                                        className="rounded-circle"
                                                        src="../../../assets/images/faces/1.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="mt-1 mb-1">
                                                    Micheal Phelps
                                                </h6>
                                                <p className="mb-0 text-muted">
                                                    Web Testing
                                                </p>
                                            </div>
                                            <div className="my-auto ms-auto">
                                                <nav className="contact-info d-flex">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Call
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Call"
                                                        >
                                                            <i className="fe fe-phone tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Video
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Video"
                                                        >
                                                            <i className="fe fe-video tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-12 col-xl-6 col-xxl-4">
                                        <div className="border d-flex p-2 br-5 mb-2 flex-wrap">
                                            <div className="recent-contacts me-3">
                                                <div className="main-img-user avatar avatar-md">
                                                    <img
                                                        alt="avatar"
                                                        className="rounded-circle"
                                                        src="../../../assets/images/faces/7.jpg"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <h6 className="mt-1 mb-1">
                                                    Azenda Hills
                                                </h6>
                                                <p className="mb-0 text-muted">
                                                    Django
                                                </p>
                                            </div>
                                            <div className="my-auto ms-auto d-md-flex">
                                                <nav className="contact-info d-flex">
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Call
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Call"
                                                        >
                                                            <i className="fe fe-phone tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip>
                                                                Video
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="contact-icon border tx-inverse rounded-pill"
                                                            data-bs-toggle="tooltip"
                                                            title="Video"
                                                        >
                                                            <i className="fe fe-video tx-12"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* <!-- End Row1 --> */}
        </Fragment>
    );
};

Contacts.layout = 'Contentlayout';

export default Contacts;
