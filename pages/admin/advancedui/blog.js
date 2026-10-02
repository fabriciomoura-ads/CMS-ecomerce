import Link from 'next/link';
import { Card, Col, Pagination, Row } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Blog = () => (
    <div>
        <Seo title={'Blog'} />
        <Pageheader title="BLOG" heading="Advanced UI" active="Blog" />

        {/* <!-- Row1 --> */}
        <Row>
            <Col xxl={6} xl={12} lg={12} md={12}>
                <Card className="card overflow-hidden">
                    <Link
                        href={'/admin/advancedui/blog-details/'}
                        className="card custom-card card-img-top-1 background-image-blog mb-0"
                    ></Link>
                    <Card.Body>
                        <Link href="#!" className="mt-4">
                            <h5 className="font-weight-semibold">
                                Best Place To visit For a Holiday idea of
                                denouncing pleasure?
                            </h5>
                        </Link>
                        <p className="mb-0 mt-3">
                            I must explain to you how all this mistaken idea of
                            denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system, and
                            expound the actual teachings of the great explorer
                            of the truth, the master-builder of human happiness.
                            No one rejects, dislikes, or avoids pleasure itself,
                            because it is pleasure.
                        </p>
                    </Card.Body>
                    <Card.Footer>
                        <div className="item7-card-desc d-sm-flex mt-0">
                            <Link
                                href={'/admin/pages/profile/'}
                                className="d-flex"
                            >
                                <span className="fe fe-user text-muted me-2 tx-17"></span>
                                <div className="mt-0 mt-0  font-weight-semibold text-muted">
                                    Anna Ogden
                                </div>
                            </Link>
                            <div className="d-sm-flex ms-sm-auto">
                                <Link href="#!" className="d-flex me-3">
                                    <span className="fe fe-calendar text-muted me-2 tx-17"></span>
                                    <div className="mt-0 mt-0  font-weight-semibold text-muted">
                                        Jan-18-2020
                                    </div>
                                </Link>
                                <Link className="me-0 d-flex" href="#!">
                                    <span className="fe fe-message-square text-muted me-2 tx-17"></span>
                                    <div className="mt-0 mt-0  font-weight-semibold text-muted">
                                        12 Comments
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
            <Col xxl={3} xl={6} lg={6} sm={6}>
                <Card className="card custom-card card-img-top-1">
                    <Link href={'/admin/advancedui/blog-details/'}>
                        <img
                            className="card-img-top w-100 w-100"
                            src={'../../../assets/images/photos/11.jpg'}
                            alt=""
                        />
                    </Link>
                    <Card.Body className="pb-0">
                        <Link href={'/admin/advancedui/blog-details/'}>
                            <h4 className="card-title">
                                10 Ways To Immediately Start Selling Products !
                            </h4>
                        </Link>
                        <p className="mb-2">
                            Those who do not know how pursues or desires to
                            occur in which toil and pain can procure him some
                            great pleasure. To take a trivial example pain was
                            born and I will give you a complete account of the
                            system, and expound the actual teachings of the
                            great explorer of the truth, the master-buil
                        </p>
                    </Card.Body>
                    <div className="item7-card-desc d-flex p-3 pt-0 align-items-center justify-content-center border-top">
                        <div className="main-img-user online">
                            <Link href={'/admin/pages/profile/'}>
                                <img
                                    alt="avatar"
                                    src={'../../../assets/images/faces/9.jpg'}
                                />
                            </Link>
                        </div>
                        <div className="main-contact-body">
                            <Link href={'/admin/pages/profile/'}>
                                <h6>Jiggel mossin</h6>
                            </Link>
                        </div>
                        <div className="ms-auto">
                            <Link className="me-0 d-flex" href="#!">
                                <span className="phone me-3 font-weight-semibold text-muted">
                                    <span className="fe fe-calendar text-muted me-2 ms-2 tx-16 d-inline-flex"></span>
                                    Aug 01,2021
                                </span>
                            </Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xxl={3} xl={6} lg={6} sm={6}>
                <Card>
                    <Card.Header className=" pb-0">
                        <h3 className="card-title">Latest Posts</h3>
                    </Card.Header>
                    <Card.Body>
                        <div className="media d-flex mb-4">
                            <img
                                alt=""
                                className="main-img-user avatar avatar-lg me-4 br-5"
                                src="../../../assets/images/photos/blog1.jpg"
                            />
                            <div className="media-body">
                                <span className="d-block">Tourism</span>
                                <p className="mb-0 fw-semibold">
                                    Explore tourism by visitinig places.
                                </p>
                                <small className="d-block text-muted">
                                    2 day ago
                                </small>
                            </div>
                        </div>
                        <div className="media d-flex mb-4">
                            <img
                                alt=""
                                className="main-img-user avatar avatar-lg me-4 br-5"
                                src="../../../assets/images/photos/blog2.jpg"
                            />
                            <div className="media-body">
                                <span className="d-block">Beautician</span>
                                <p className="mb-0 fw-semibold">
                                    Beautification courses are available.
                                </p>
                                <small className="d-block text-muted">
                                    2 hrs ago
                                </small>
                            </div>
                        </div>
                        <div className="media d-flex mb-4">
                            <img
                                alt=""
                                className="main-img-user avatar avatar-lg me-4 br-5"
                                src="../../../assets/images/photos/blog5.jpg"
                            />
                            <div className="media-body">
                                <span className="d-block">Music</span>
                                <p className="mb-0 fw-semibold">
                                    Music in a peaceful way.
                                </p>
                                <small className="d-block text-muted">
                                    1 day ago
                                </small>
                            </div>
                        </div>
                        <div className="media d-flex mb-4">
                            <img
                                alt=""
                                className="main-img-user avatar avatar-lg me-4 br-5"
                                src="../../../assets/images/photos/blog4.jpg"
                            />
                            <div className="media-body">
                                <span className="d-block">Literature</span>
                                <p className="mb-0 fw-semibold">
                                    English and spanish classes in Your way
                                </p>
                                <small className="d-block text-muted">
                                    1 week ago
                                </small>
                            </div>
                        </div>
                        <div className="media d-flex mb-3">
                            <img
                                alt=""
                                className="main-img-user avatar avatar-lg me-4 br-5"
                                src="../../../assets/images/photos/blog6.jpg"
                            />
                            <div className="media-body">
                                <span className="d-block">Health</span>
                                <p className="mb-0 fw-semibold">
                                    Health care and fitness awareness.
                                </p>
                                <small className="d-block text-muted">
                                    22 hrs ago
                                </small>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- Row1 Closed --> */}

        {/* <!-- Row2 --> */}
        <Row className=" ">
            <Col xxl={3} xl={6} lg={6} sm={6}>
                <Card className="card custom-card card-img-top-1">
                    <Link href={'/admin/advancedui/blog-details/'}>
                        <img
                            className="card-img-top w-100 w-100"
                            src={'../../../assets/images/photos/2.jpg'}
                            alt=""
                        />
                    </Link>
                    <Card.Body className="pb-0">
                        <Link href={'/admin/advancedui/blog-details/'}>
                            <h4 className="card-title">
                                How To Become Better With Building In 1 Month !
                            </h4>
                        </Link>
                        <p className="card-text mb-2">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Card.Body>
                    <div className="item7-card-desc d-flex p-3 pt-0 align-items-center justify-content-center border-top">
                        <div className="main-img-user online">
                            <Link href={'/admin/pages/profile/'}>
                                <img
                                    alt="avatar"
                                    src={'../../../assets/images/faces/2.jpg'}
                                />
                            </Link>
                        </div>
                        <div className="main-contact-body">
                            <Link href={'/admin/pages/profile/'}>
                                <h6>Abigail John</h6>
                            </Link>
                        </div>
                        <div className="ms-auto">
                            <Link className="me-0 d-flex" href="#!">
                                <span className="phone me-3 font-weight-semibold text-muted">
                                    <span className="fe fe-calendar text-muted me-1 tx-16 d-inline-flex"></span>
                                    Aug 24,2021
                                </span>
                            </Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xxl={3} xl={6} lg={6} sm={6}>
                <Card className="card custom-card card-img-top-1">
                    <Link href={'/admin/advancedui/blog-details/'}>
                        <img
                            className="card-img-top w-100 w-100"
                            src={'../../../assets/images/photos/1.jpg'}
                            alt=""
                        />
                    </Link>
                    <Card.Body className="pb-0">
                        <Link href={'/admin/advancedui/blog-details/'}>
                            <h4 className="card-title">
                                10 Ways To Immediately Start Selling Products !
                            </h4>
                        </Link>
                        <p className="card-text mb-2">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Card.Body>
                    <div className="item7-card-desc d-flex p-3 pt-0 align-items-center justify-content-center border-top">
                        <div className="main-img-user online">
                            <Link href={'/admin/pages/profile/'}>
                                <img
                                    alt="avatar"
                                    src={'../../../assets/images/faces/9.jpg'}
                                />
                            </Link>
                        </div>
                        <div className="main-contact-body">
                            <Link href={'/admin/pages/profile/'}>
                                <h6>Jiggel mossin</h6>
                            </Link>
                        </div>
                        <div className="ms-auto">
                            <Link className="me-0 d-flex" href="#!">
                                <span className="phone me-3 font-weight-semibold text-muted">
                                    <span className="fe fe-calendar text-muted me-1 tx-16 d-inline-flex"></span>
                                    Aug 01,2021
                                </span>
                            </Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xxl={3} xl={6} lg={6} sm={6}>
                <Card className="card custom-card card-img-top-1">
                    <Link href={'/admin/advancedui/blog-details/'}>
                        <img
                            className="card-img-top w-100 w-100"
                            src={'../../../assets/images/photos/9.jpg'}
                            alt=""
                        />
                    </Link>
                    <Card.Body className="pb-0">
                        <Link href={'/admin/advancedui/blog-details/'}>
                            <h4 className="card-title">
                                3 Easy Ways To Make Your mobile Faster & Even !
                            </h4>
                        </Link>
                        <p className="card-text mb-2">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Card.Body>
                    <div className="item7-card-desc d-flex p-3 pt-0 align-items-center justify-content-center border-top">
                        <div className="main-img-user online">
                            <Link href={'/admin/pages/profile/'}>
                                <img
                                    alt="avatar"
                                    src={'../../../assets/images/faces/7.jpg'}
                                />
                            </Link>
                        </div>
                        <div className="main-contact-body">
                            <Link href={'/admin/pages/profile/'}>
                                <h6>Raven Chanan</h6>
                            </Link>
                        </div>
                        <div className="ms-auto">
                            <Link className="me-0 d-flex" href="#!">
                                <span className="phone me-3 font-weight-semibold text-muted">
                                    <span className="fe fe-calendar text-muted me-1 tx-16 d-inline-flex"></span>
                                    Feb 19,2021
                                </span>
                            </Link>
                        </div>
                    </div>
                </Card>
            </Col>
            <Col xxl={3} xl={6} lg={6} sm={6}>
                <Card className="card overflow-hidden">
                    <Card.Header className=" pb-1">
                        <h3 className="card-title mb-2">Blog AUthors</h3>
                    </Card.Header>
                    <Card.Body className="p-0 customers mt-1">
                        <div className="list-group list-lg-group list-group-flush">
                            <div className="border-0">
                                <div className="list-group-item list-group-item-action">
                                    <div className="media mt-0">
                                        <Link href={'/admin/pages/profile/'}>
                                            <img
                                                className="avatar-lg rounded-circle me-3 my-auto"
                                                src={
                                                    '../../../assets/images/faces/3.jpg'
                                                }
                                                alt="description"
                                            />
                                        </Link>
                                        <div className="media-body">
                                            <div className="d-flex align-items-center">
                                                <div className="mt-0">
                                                    <Link
                                                        href={
                                                            '/admin/pages/profile/'
                                                        }
                                                    >
                                                        <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                            Samantha Melon
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-0 tx-13 text-muted">
                                                        User ID: #1234
                                                    </p>
                                                </div>
                                                <span className="ms-auto wd-45p fs-12 ">
                                                    <span
                                                        id="spark1"
                                                        className="wd-100p"
                                                    ></span>
                                                    <span className="float-end badge bg-success-transparent">
                                                        <span className="op-7 text-success fw-semibold">
                                                            8 hrs ago
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-0">
                                <div className="list-group-item list-group-item-action">
                                    <div className="media mt-0">
                                        <Link href={'/admin/pages/profile/'}>
                                            <img
                                                className="avatar-lg rounded-circle me-3 my-auto"
                                                src={
                                                    '../../../assets/images/faces/11.jpg'
                                                }
                                                alt="description"
                                            />
                                        </Link>
                                        <div className="media-body">
                                            <div className="d-flex align-items-center">
                                                <div className="mt-1">
                                                    <Link
                                                        href={
                                                            '/admin/pages/profile/'
                                                        }
                                                    >
                                                        <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                            Allie Grater
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-0 tx-13 text-muted">
                                                        User ID: #1234
                                                    </p>
                                                </div>
                                                <span className="ms-auto wd-45p fs-12 ">
                                                    <span
                                                        id="spark2"
                                                        className="wd-100p"
                                                    ></span>
                                                    <span className="float-end badge bg-danger-transparent ">
                                                        <span className="op-7 text-danger fw-semibold">
                                                            12 hrs ago
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-0">
                                <div className="list-group-item list-group-item-action">
                                    <div className="media mt-0">
                                        <Link href={'/admin/pages/profile/'}>
                                            <img
                                                className="avatar-lg rounded-circle me-3 my-auto"
                                                src={
                                                    '../../../assets/images/faces/17.jpg'
                                                }
                                                alt="description"
                                            />
                                        </Link>
                                        <div className="media-body">
                                            <div className="d-flex align-items-center">
                                                <div className="mt-1">
                                                    <Link
                                                        href={
                                                            '/admin/pages/profile/'
                                                        }
                                                    >
                                                        <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                            Gabe Lackmen
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-0 tx-13 text-muted">
                                                        User ID: #1234
                                                    </p>
                                                </div>
                                                <span className="ms-auto wd-45p fs-12 ">
                                                    <span
                                                        id="spark3"
                                                        className="wd-100p"
                                                    ></span>
                                                    <span className="float-end badge bg-danger-transparent ">
                                                        <span className="op-7 text-danger font-weight-semibold">
                                                            1 hr ago
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-0">
                                <div className="list-group-item list-group-item-action">
                                    <div className="media mt-0">
                                        <Link href={'/admin/pages/profile/'}>
                                            <img
                                                className="avatar-lg rounded-circle me-3 my-auto"
                                                src={
                                                    '../../../assets/images/faces/15.jpg'
                                                }
                                                alt="description"
                                            />
                                        </Link>
                                        <div className="media-body">
                                            <div className="d-flex align-items-center">
                                                <div className="mt-1">
                                                    <Link
                                                        href={
                                                            '/admin/pages/profile/'
                                                        }
                                                    >
                                                        <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                            Manuel Labor
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-0 tx-13 text-muted">
                                                        User ID: #1234
                                                    </p>
                                                </div>
                                                <span className="ms-auto wd-45p fs-12">
                                                    <span
                                                        id="spark6"
                                                        className="wd-100p"
                                                    ></span>
                                                    <span className="float-end badge bg-success-transparent ">
                                                        <span className="op-7 text-success font-weight-semibold">
                                                            3 days ago
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-0">
                                <div className="list-group-item list-group-item-action">
                                    <div className="media mt-0">
                                        <Link href={'/admin/pages/profile/'}>
                                            <img
                                                className="avatar-lg rounded-circle me-3 my-auto"
                                                src={
                                                    '../../../assets/images/faces/13.jpg'
                                                }
                                                alt="description"
                                            />
                                        </Link>
                                        <div className="media-body">
                                            <div className="d-flex align-items-center">
                                                <div className="mt-1">
                                                    <Link
                                                        href={
                                                            '/admin/pages/profile/'
                                                        }
                                                    >
                                                        <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                            Cedric Kelly
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-0 tx-13 text-muted">
                                                        User ID: #1234
                                                    </p>
                                                </div>
                                                <span className="ms-auto wd-45p fs-12">
                                                    <span
                                                        id="spark4"
                                                        className="wd-100p"
                                                    ></span>
                                                    <span className="float-end badge bg-danger-transparent ">
                                                        <span className="op-7 text-danger font-weight-semibold">
                                                            22 hrs ago
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-0">
                                <div className="list-group-item list-group-item-action">
                                    <div className="media mt-0">
                                        <Link href={'/admin/pages/profile/'}>
                                            <img
                                                className="avatar-lg rounded-circle me-3 my-auto"
                                                src={
                                                    '../../../assets/images/faces/14.jpg'
                                                }
                                                alt="description"
                                            />
                                        </Link>
                                        <div className="media-body">
                                            <div className="d-flex align-items-center">
                                                <div className="mt-1">
                                                    <Link
                                                        href={
                                                            '/admin/pages/profile/'
                                                        }
                                                    >
                                                        <h5 className="mb-1 fs-13 font-weight-sembold text-dark">
                                                            Julian Kerr
                                                        </h5>
                                                    </Link>
                                                    <p className="mb-0 tx-13 text-muted">
                                                        User ID: #1234
                                                    </p>
                                                </div>
                                                <span className="ms-auto wd-45p fs-12">
                                                    <span
                                                        id="spark5"
                                                        className="wd-100p"
                                                    ></span>
                                                    <span className="float-end badge bg-danger-transparent ">
                                                        <span className="op-7 text-danger font-weight-semibold">
                                                            1 day ago
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <!-- Row2 Closed --> */}

        <Pagination className="pagination product-pagination ms-auto float-sm-end">
            <Pagination.Item className="page-item page-prev disabled">
                Prev
            </Pagination.Item>
            <Pagination.Item className="page-item active">1</Pagination.Item>
            <Pagination.Item className="page-item">2</Pagination.Item>
            <Pagination.Item className="page-item">3</Pagination.Item>
            <Pagination.Item className="page-item">4</Pagination.Item>
            <Pagination.Item className="page-item page-next">
                Next
            </Pagination.Item>
        </Pagination>
    </div>
);

Blog.layout = 'Contentlayout';

export default Blog;
