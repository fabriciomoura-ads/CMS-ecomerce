import Link from 'next/link';
import { Card, Col, Dropdown, Nav, Pagination, Row } from 'react-bootstrap';
import { mailData } from '../../../../shared/data/pages/mail/maildata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
const Mail = () => (
    <div>
        <Seo title={'Mail'} />
        <Pageheader title="MAIL" heading="Mail" active="Mail" />
        {/* <!-- row --> */}
        <Row className=" row-sm main-content-mail">
            <Col lg={4} xl={3} md={12}>
                <Card className=" mg-b-20">
                    <Card.Body className="main-content-left main-content-left-mail card-body">
                        <Link
                            href={'/admin/pages/mail/mail-compose/'}
                            variant=""
                            className="btn btn-primary btn-compose"
                            id="btnCompose"
                        >
                            Compose
                        </Link>
                        <div className="main-mail-menu">
                            <Nav
                                className="nav main-nav-column mg-b-20"
                                defaultActiveKey="Inbox"
                            >
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link thumb "
                                        eventKey="Inbox"
                                    >
                                        <i className="far fa-envelope"></i>{' '}
                                        Inbox <span>20</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link thumb"
                                        eventKey="Important"
                                    >
                                        <i className="far fa-bookmark"></i>{' '}
                                        Important <span>10</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link thumb"
                                        eventKey="Sent"
                                    >
                                        <i className="far fa-paper-plane"></i>{' '}
                                        Sent Mail <span>8</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link thumb"
                                        eventKey="Drafts"
                                    >
                                        <i className="far fa-hourglass"></i>{' '}
                                        Drafts <span>15</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link thumb"
                                        eventKey="Trash"
                                    >
                                        <i className="fe fe-trash"></i> Trash{' '}
                                        <span>6</span>
                                    </Nav.Link>
                                </Nav.Item>

                                <label className="main-content-label main-content-label-sm mailnav ms-3">
                                    Label
                                </label>

                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link thumb"
                                        eventKey="Social"
                                    >
                                        <i className="fab fa-instagram"></i>{' '}
                                        Social <span>10</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link thumb"
                                        eventKey="Promotions"
                                    >
                                        <i className="far fa-plus-square"></i>{' '}
                                        Promotions
                                        <span>22</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        className="nav-link thumb"
                                        eventKey="Updates"
                                    >
                                        <i className="far fa-arrow-alt-circle-up"></i>{' '}
                                        Updates
                                        <span>17</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        {/* <!-- main-mail-menu --> */}
                    </Card.Body>
                </Card>
                <Card className=" mt-3">
                    <Card.Body className=" p-0">
                        <label className="main-content-label p-3">
                            contacts
                        </label>
                        <Nav className=" main-nav-column">
                            {mailData.map((idx) => (
                                <div
                                    className="main-contact-item px-2"
                                    key={Math.random()}
                                >
                                    <div className="main-img-user online">
                                        <img alt="avatar" src={idx.src} />
                                    </div>
                                    <div className="main-contact-body">
                                        <h6>{idx.name}</h6>
                                        <span className="phone">
                                            {idx.phone}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </Nav>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={8} xl={9} md={12}>
                <Card>
                    <Card.Body className="main-content-body main-content-body-mail ">
                        <div className="mail-option">
                            <div className="chk-all border-0">
                                <div className="btn-group">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant=""
                                            href="#!"
                                            className="btn mini all border"
                                            aria-expanded="false"
                                        >
                                            All
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu
                                            className="dropdown-menu"
                                            style={{ margin: '0px' }}
                                        >
                                            <Dropdown.Item>None</Dropdown.Item>
                                            <Dropdown.Item>Read</Dropdown.Item>
                                            <Dropdown.Item>
                                                Unread
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="btn-group me-2">
                                <Link href="#!" className="btn mini tooltips">
                                    <i className="fe fe-repeat"></i>
                                </Link>
                            </div>
                            <div className="btn-group hidden-phone">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant=""
                                        data-bs-toggle="dropdown"
                                        href="#!"
                                        className="btn mini blue border"
                                        aria-expanded="false"
                                    >
                                        More
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={{ margin: '0px' }}
                                        className="dropdown-menu"
                                    >
                                        <Dropdown.Item>
                                            <i className="fe fe-edit me-2"></i>{' '}
                                            Mark as Read
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <i className="fe fe fe-slash me-2"></i>{' '}
                                            Spam
                                        </Dropdown.Item>
                                        <li className="divider"></li>
                                        <Dropdown.Item>
                                            <i className="fe fe-trash me-2"></i>{' '}
                                            Delete
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <ul className="unstyled inbox-pagination">
                                <li>
                                    <span>1-50 of 234</span>
                                </li>

                                <li className="mt-1">
                                    <Link className="btn np-btn" href="#!">
                                        <i className="fe fe-chevron-right pagination-right"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- main-mail-list-header --> */}
                    </Card.Body>
                    {/* <!-- main-mail-options --> */}
                    <div className="main-mail-list bd-t-0">
                        <div className="main-mail-item unread">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked1"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/5.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">
                                    Adrian Monino
                                </div>
                                <div className="main-mail-subject">
                                    <strong>Someone who believes in you</strong>{' '}
                                    <span>
                                        enean commodo li gula eget dolor cum
                                        socia eget dolor enean commodo li gula
                                        eget dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-attachment"></div>
                            <div className="main-mail-date">11:30am</div>
                        </div>
                        <div className="main-mail-item unread">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked2"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star active">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/2.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">
                                    Albert Ansing
                                </div>
                                <div className="main-mail-subject">
                                    <strong>
                                        Here's What You Missed This Week
                                    </strong>{' '}
                                    <span>
                                        enean commodo li gula eget dolor cum
                                        socia eget dolor enean commodo li gula
                                        eget dolor cum socia eget dolor...
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-date">06:50am</div>
                        </div>
                        <div className="main-mail-item">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked3"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/9.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">
                                    Carla Guden
                                </div>
                                <div className="main-mail-subject">
                                    <strong>
                                        4 Ways to Optimize Your Search
                                    </strong>{' '}
                                    <span>
                                        viva mus elemen tum semper nisi enean
                                        vulputat enean commodo li gula eget
                                        dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-attachment"></div>
                            <div className="main-mail-date">Yesterday</div>
                        </div>
                        <div className="main-mail-item unread">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked4"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/10.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">
                                    Reven Galeon
                                </div>
                                <div className="main-mail-subject">
                                    <strong>
                                        We're Giving a Macbook for Free
                                    </strong>{' '}
                                    <span>
                                        viva mus elemen tum semper nisi enean
                                        vulputat enean commodo li gula eget
                                        dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-date">Yesterday</div>
                        </div>
                        <div className="main-mail-item">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked5"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/12.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">Elisse Tan</div>
                                <div className="main-mail-subject">
                                    <strong>
                                        Keep Your Personal Data Safe
                                    </strong>{' '}
                                    <span>
                                        viva mus elemen tum semper nisi enean
                                        vulputat enean commodo li gula eget
                                        dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-date">Oct 13</div>
                        </div>
                        <div className="main-mail-item">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked6"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/14.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">
                                    Marianne Audrey
                                </div>
                                <div className="main-mail-subject">
                                    <strong>We've Made Some Changes</strong>{' '}
                                    <span>
                                        viva mus elemen tum semper nisi enean
                                        vulputat enean commodo li gula eget
                                        dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-date">Oct 13</div>
                        </div>
                        <div className="main-mail-item">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked7"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-avatar bg-gray-800">J</div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">
                                    Jane Phoebe
                                </div>
                                <div className="main-mail-subject">
                                    <strong>Grab Our Holiday Deals</strong>{' '}
                                    <span>
                                        viva mus elemen tum semper nisi enean
                                        vulputat enean commodo li gula eget
                                        dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-date">Oct 12</div>
                        </div>
                        <div className="main-mail-item">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked8"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/15.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">
                                    Raffy Godinez
                                </div>
                                <div className="main-mail-subject">
                                    <strong>Just a Few Steps Away</strong>{' '}
                                    <span>
                                        viva mus elemen tum semper nisi enean
                                        vulputat enean commodo li gula eget
                                        dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-date">Oct 05</div>
                        </div>
                        <div className="main-mail-item">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked9"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star active">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/7.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">
                                    Allan Cadungog
                                </div>
                                <div className="main-mail-subject">
                                    <strong>Credit Card Promos</strong>{' '}
                                    <span>
                                        viva mus elemen tum semper nisi enean
                                        vulputat enean commodo li gula eget
                                        dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-date">Oct 04</div>
                        </div>
                        <div className="main-mail-item">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked10"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/10.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">
                                    Alfie Salinas
                                </div>
                                <div className="main-mail-subject">
                                    <strong>
                                        4 Ways to Optimize Your Search
                                    </strong>{' '}
                                    <span>
                                        viva mus elemen tum semper nisi enean
                                        vulputat enean commodo li gula eget
                                        dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-date">Oct 02</div>
                        </div>
                        <div className="main-mail-item ">
                            <div className="main-mail-checkbox">
                                <label className="ckbox">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckChecked11"
                                    />{' '}
                                    <span></span>
                                </label>
                            </div>
                            <div className="main-mail-star">
                                <i className="typcn typcn-star"></i>
                            </div>
                            <div className="main-img-user">
                                <img
                                    alt=""
                                    src="../../../../assets/images/faces/1.jpg"
                                />
                            </div>
                            <div className="main-mail-body">
                                <div className="main-mail-from">Jove Guden</div>
                                <div className="main-mail-subject">
                                    <strong>
                                        Keep Your Personal Data Safe
                                    </strong>{' '}
                                    <span>
                                        viva mus elemen tum semper nisi enean
                                        vulputat enean commodo li gula eget
                                        dolor cum socia eget dolor
                                    </span>
                                </div>
                            </div>
                            <div className="main-mail-date">Oct 02</div>
                        </div>
                        <div className="main-mail-item border-bottom-0"></div>
                    </div>
                    <div className="mg-lg-b-30"></div>
                </Card>
            </Col>
        </Row>
        <Row className="">
            <Pagination className="pagination product-pagination justify-content-end">
                <Pagination.Item className="page-item page-prev disabled">
                    Prev
                </Pagination.Item>
                <Pagination.Item className="page-item active">
                    1
                </Pagination.Item>
                <Pagination.Item className="page-item">2</Pagination.Item>
                <Pagination.Item className="page-item">3</Pagination.Item>
                <Pagination.Item className="page-item">4</Pagination.Item>
                <Pagination.Item className="page-item page-next">
                    Next
                </Pagination.Item>
            </Pagination>
            {/* <!-- COL-END --> */}
        </Row>
    </div>
);

Mail.layout = 'Contentlayout';

export default Mail;
