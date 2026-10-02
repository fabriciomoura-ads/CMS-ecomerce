import Link from 'next/link';
import React from 'react';
import {
    Button,
    Card,
    Col,
    Dropdown,
    Form,
    FormGroup,
    Modal,
    OverlayTrigger,
    Row,
    Table,
    Tooltip,
} from 'react-bootstrap';
import { Userlist1 } from '../../../shared/data/advancedui/userlistdata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Userlist = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Seo title={'User List'} />

            <Pageheader
                title="USER LIST"
                heading="Advanced UI"
                active="User List"
            />
            <div className="d-flex justify-content-between mb-3 flex-wrap gap-2">
                <div>
                    <Link
                        className="btn ripple btn-primary"
                        href="#!"
                        onClick={handleShow}
                    >
                        <i className="fe fe-plus me-2"></i>Add New User
                    </Link>

                    <Modal centered show={show} onHide={handleClose}>
                        <Modal.Header>
                            <h6 className="modal-title">Add User</h6>
                            <Button
                                variant=""
                                className="btn-close"
                                type="button"
                                onClick={handleClose}
                            ></Button>
                        </Modal.Header>

                        <Modal.Body className="modal-body">
                            {' '}
                            <div className="p-4">
                                <Form className="form-horizontal">
                                    <FormGroup className="form-group">
                                        <Form.Control
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            placeholder="Name"
                                        />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Form.Control
                                            type="text"
                                            className="form-control"
                                            id="inputName1"
                                            placeholder="Role"
                                        />
                                    </FormGroup>
                                    <FormGroup className="form-group">
                                        <Form.Control
                                            type="email"
                                            className="form-control"
                                            id="inputEmail3"
                                            placeholder="Email"
                                        />
                                    </FormGroup>
                                    <FormGroup className="form-group mb-0 justify-content-end">
                                        <div className="checkbox">
                                            <div className="custom-checkbox custom-control">
                                                <input
                                                    type="checkbox"
                                                    data-checkboxes="mygroup"
                                                    className="custom-control-input"
                                                    id="checkbox-2"
                                                />
                                                <label
                                                    htmlFor="checkbox-2"
                                                    className="custom-control-label ms-1 text-dark"
                                                >
                                                    New User?
                                                </label>
                                            </div>
                                        </div>
                                    </FormGroup>
                                </Form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                variant=""
                                className="btn ripple btn-primary"
                                type="button"
                            >
                                Add
                            </Button>
                            <Button
                                variant=""
                                className="btn ripple btn-secondary"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className="btn-list">
                    <Button id="userlist-1" className="btn btn-primary  me-2">
                        Delete User
                    </Button>
                    <Button type="button" className="btn btn-secondary">
                        <i className="fe fe-download me-1"></i> Download User
                        Data
                    </Button>
                </div>
            </div>
            <Row className="row-sm">
                <Col lg={12}>
                    <Card className=" custom-card">
                        <Card.Body>
                            <div className="d-flex justify-content-between flex-wrap gap-2 mb-3 ">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant=""
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                        className="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                        data-bs-toggle="dropdown"
                                        type="button"
                                    >
                                        Sort By
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={{ margin: '0px' }}
                                        className="dropdown-menu tx-13"
                                    >
                                        <Dropdown.Item
                                            className="dropdown-item"
                                            href="#!"
                                        >
                                            New
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            className="dropdown-item"
                                            href="#!"
                                        >
                                            Popular
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            className="dropdown-item"
                                            href="#!"
                                        >
                                            Relevant
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <div>
                                    <input
                                        className="form-control form-control-sm"
                                        type="text"
                                        placeholder="Search Here"
                                        aria-label=".form-control-sm example"
                                    />
                                </div>
                            </div>
                            <div className="table-responsive deleted-table">
                                <Table
                                    id="user-datatable"
                                    className="table table-bordered text-nowrap border-bottom Userlist"
                                >
                                    <thead>
                                        <tr>
                                            <th className="wd-2">Photo</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Last Active</th>
                                            <th>Country</th>
                                            <th>Verification</th>
                                            <th>Joined Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Userlist1.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div>
                                                        {idx.src ? (
                                                            <div className="avatar avatar-md bg- rounded-circle">
                                                                <img
                                                                    alt="avatar"
                                                                    className="rounded-circle"
                                                                    src={
                                                                        idx.src
                                                                    }
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div
                                                                className={`avatar avatar-md bg-${idx.color2}  text-fixed-white rounded-circle`}
                                                            >
                                                                {idx.text}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="tx-14 font-weight-semibold text-dark mb-1">
                                                        {idx.name}
                                                    </p>
                                                    <p className="tx-13 text-muted mb-0">
                                                        {idx.email}
                                                    </p>
                                                </td>
                                                <td>
                                                    <span className="text-muted tx-13">
                                                        {idx.role}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-muted tx-13">
                                                        {idx.date}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-muted tx-13">
                                                        {idx.country}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span
                                                        className={`badge font-weight-semibold bg-${idx.color}-transparent text-${idx.color} tx-11`}
                                                    >
                                                        {idx.Verified}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-muted tx-13">
                                                        {idx.joindate}
                                                    </span>
                                                </td>
                                                <td>
                                                    <OverlayTrigger
                                                        placement="top"
                                                        overlay={
                                                            <Tooltip id="tooltip-edit">
                                                                Edit
                                                            </Tooltip>
                                                        }
                                                    >
                                                        <Link
                                                            href="#!"
                                                            className="btn btn-icon btn-primary-light me-2"
                                                        >
                                                            <i className="las la-pen"></i>
                                                        </Link>
                                                    </OverlayTrigger>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

Userlist.layout = 'Contentlayout';

export default Userlist;
