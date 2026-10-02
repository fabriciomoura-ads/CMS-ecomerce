import Link from 'next/link';
import {
    Button,
    Card,
    Col,
    Dropdown,
    OverlayTrigger,
    Row,
    Tooltip,
} from 'react-bootstrap';
import { Tododata } from '../../../shared/data/pages/todotask';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Todotask = () => (
    <div>
        <Seo title={'Todotask'} />
        <Pageheader title="TODO TASK" heading="Pages" active="Todotask" />
        {/* <!-- row --> */}
        <Row className="row-sm">
            <Col md={12} xl={3} lg={12}>
                <Card className=" tasks-card">
                    <div className="list-group list-group-transparent mb-0 mail-inbox pb-3">
                        <div className="mt-4 mb-4 mx-4 text-center">
                            <Link href="#!" className="btn btn-primary d-grid">
                                <span>Add New Task</span>
                            </Link>
                        </div>
                        <Link
                            href="#!"
                            className="list-group-item  d-flex align-items-center border-0 py-2"
                        >
                            <i className="fe fe-codepen fs-18 me-4 p-2 border-primary rounded-circle bg-primary-transparent text-primary"></i>
                            <span>All Tasks</span>
                        </Link>
                        <Link
                            href="#!"
                            className="list-group-item  d-flex align-items-center border-0 py-2"
                        >
                            <i className="fe fe-alert-octagon fs-18 me-4 p-2 border-warning rounded-circle bg-warning-transparent text-warning"></i>
                            <span>Important </span>
                            <span className="ms-auto badge bg-danger">6</span>
                        </Link>
                        <Link
                            href="#!"
                            className="list-group-item  d-flex align-items-center border-0 py-2 "
                        >
                            <i className="fe fe-star fs-18 me-4 p-2 border-secondary rounded-circle bg-secondary-transparent text-secondary"></i>
                            <span>Starred</span>
                        </Link>
                        <Link
                            href="#!"
                            className="list-group-item  d-flex align-items-center border-0 py-2"
                        >
                            <i className="fe fe-briefcase fs-18 me-4 p-2 border-info rounded-circle bg-info-transparent text-info"></i>
                            <span>Spam</span>
                        </Link>
                        <Link
                            href="#!"
                            className="list-group-item  d-flex align-items-center border-0 py-2"
                        >
                            <i className="fe fe-bell fs-18 me-4 p-2 border-success rounded-circle bg-success-transparent text-success"></i>
                            <span>Archive</span>{' '}
                            <span className="ms-auto badge bg-warning">4</span>
                        </Link>
                        <Link
                            href="#!"
                            className="list-group-item  d-flex align-items-center border-bottom-0 border-0 py-2"
                        >
                            <i className="fe fe-trash-2 fs-18 me-4 p-2 border-danger rounded-circle bg-danger-transparent text-danger"></i>
                            <span>Trash</span>
                        </Link>
                    </div>
                </Card>
            </Col>
            <Col xl={9} lg={12}>
                <Row className=" row-sm">
                    <Col lg={12}>
                        <Card className="card mg-b-20">
                            <Card.Body className=" d-flex p-3">
                                <div className="main-content-label mb-0 mt-1">
                                    User Today Tasks
                                </div>
                                <div className="ms-auto">
                                    <OverlayTrigger
                                        placement="top"
                                        className=""
                                        overlay={
                                            <Tooltip>Add New User</Tooltip>
                                        }
                                    >
                                        <i
                                            as=""
                                            className="si si-plus text-muted"
                                        ></i>
                                    </OverlayTrigger>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    {Tododata.map((playerData) => (
                        <Col xxl={4} md={6} key={playerData.id}>
                            <Card className=" mg-b-20">
                                <Card.Body className=" p-0">
                                    <div className="todo-widget-header d-flex p-3 border-bottom">
                                        <Dropdown
                                            drop="down"
                                            className="dropdown"
                                        >
                                            <Dropdown.Toggle
                                                as="div"
                                                variant=""
                                                className="drop-down-profile no-caret"
                                                aria-expanded="false"
                                            >
                                                <img
                                                    alt=""
                                                    className="rounded-circle avatar avatar-md "
                                                    src={playerData.img}
                                                />
                                                <span
                                                    className={`assigned-task bg-${playerData.color}`}
                                                >
                                                    {playerData.num}
                                                </span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="">
                                                <Dropdown.Item className="main-header-profile text-center py-1 flex-column">
                                                    <div className="fs-16 fw-semibold mb-0">
                                                        Teri Dactyl
                                                    </div>
                                                    <div className="fs-11">
                                                        Web Designer
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    View Total Tasks
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Completed Tasks
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Settings
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <div className="ms-auto">
                                            <div className="card-options-task">
                                                <Link
                                                    href="#!"
                                                    className="p-2 border br-5 text-primary me-1"
                                                >
                                                    <OverlayTrigger
                                                        placement="top"
                                                        className=""
                                                        overlay={
                                                            <Tooltip>
                                                                archive
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <i
                                                            as=""
                                                            className="fe fe-folder-plus align-middle"
                                                        ></i>
                                                    </OverlayTrigger>
                                                </Link>
                                                <Link
                                                    href="#!"
                                                    className="p-2 border br-5 text-primary me-1"
                                                >
                                                    <OverlayTrigger
                                                        placement="top"
                                                        className=""
                                                        overlay={
                                                            <Tooltip>
                                                                Move to spam
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <i
                                                            as=""
                                                            className="fe fe-info align-middle"
                                                        ></i>
                                                    </OverlayTrigger>
                                                </Link>
                                                <Dropdown
                                                    as="span"
                                                    className="me-1 mt-2"
                                                >
                                                    <Dropdown.Toggle
                                                        variant=""
                                                        as="a"
                                                        className="p-2 border br-5 text-primary no-caret"
                                                    >
                                                        <i className="fe fe-more-vertical align-middle"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="fs-13 dropleft ">
                                                        <Dropdown.Item href="#!">
                                                            Mark As Unread
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#!">
                                                            Mark As Important
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#!">
                                                            Add to Tasks
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#!">
                                                            Add Star
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#!">
                                                            Move to
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#!">
                                                            Mute
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#!">
                                                            Move to Trash
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <span className="fs-12 text-muted">
                                            {playerData.time}
                                        </span>
                                        <span
                                            className={`badge bg-${playerData.bgcolor}-transparent m-1  text-${playerData.color} float-end`}
                                        >
                                            {playerData.bgtext}
                                        </span>
                                        <h5 className="fs-14 mb-0 mg-t-5 text-capitalize">
                                            {playerData.text}
                                        </h5>
                                    </div>
                                    <div className="p-4 border-top">
                                        <span className="fs-12 text-muted">
                                            10.54am
                                        </span>
                                        <h5 className="fs-14 mb-0 mg-t-5 text-capitalize">
                                            {playerData.text2}
                                        </h5>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <OverlayTrigger
                                        placement="top"
                                        className=""
                                        overlay={<Tooltip>Assign Task</Tooltip>}
                                    >
                                        <Button
                                            variant=""
                                            className="btn btn-primary"
                                        >
                                            Assign
                                        </Button>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="top"
                                        className=""
                                        overlay={<Tooltip>View Task</Tooltip>}
                                    >
                                        <Button
                                            variant=""
                                            className="btn btn-outline-primary ms-auto float-end"
                                        >
                                            View All
                                        </Button>
                                    </OverlayTrigger>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
        {/* <!-- row closed --> */}
    </div>
);

Todotask.layout = 'Contentlayout';

export default Todotask;
