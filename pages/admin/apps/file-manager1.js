import Link from 'next/link';
import { Fragment } from 'react';
import { Card, Col, Dropdown, Pagination, Row } from 'react-bootstrap';
import { allData } from '../../../shared/data/apps/filemanagerdata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Filemanager1 = () => (
    <Fragment>
        <Seo title={'File manager1'} />
        <Pageheader
            title="FILE MANAGER 1"
            heading="Apps"
            active="File manager1"
        />

        {/* <!-- Row1 --> */}
        <Row>
            <Col lg={12} xl={12}>
                <Row>
                    <div className="col-6">
                        <div className="fs-18 mb-4">Files</div>
                    </div>
                    <div className="col-6 col-auto">
                        <div className="input-group mb-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search files"
                                aria-label="Search files"
                                aria-describedby="button-addon2"
                            />
                            <button className="btn btn-primary" type="button">
                                Search
                            </button>
                        </div>
                    </div>
                </Row>
                <Row>
                    {allData.map((folder) => (
                        <Col sm={6} xl={2} md={4} key={Math.random()}>
                            <Card className=" p-0 ">
                                <div className="d-flex align-items-center px-3 pt-3 mb-1">
                                    <Dropdown
                                        align={{ lg: 'end' }}
                                        className="float-end ms-auto no-caret"
                                    >
                                        <Dropdown.Toggle
                                            variant=""
                                            href="#!"
                                            className="option-dots"
                                        >
                                            <i className="fe fe-more-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#!">
                                                <i className="fe fe-edit me-2"></i>{' '}
                                                Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#!">
                                                <i className="fe fe-share me-2"></i>{' '}
                                                Share
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#!">
                                                <i className="fe fe-trash me-2"></i>{' '}
                                                Delete
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <Card.Body className="pt-0 text-center">
                                    <div className="file-manger-icon">
                                        <Link
                                            href={'/admin/apps/file-details/'}
                                        >
                                            <img
                                                src={folder.src}
                                                alt="img"
                                                className="br-7"
                                            />
                                        </Link>
                                    </div>
                                    <h6
                                        className={`mb-1 font-weight-semibold ${folder.class}`}
                                    >
                                        {folder.heading}
                                    </h6>
                                    <span className="text-muted">
                                        {folder.main}
                                    </span>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Pagination className="float-end mb-4">
                    <Pagination.Prev disabled className="page-prev" />
                    <Pagination.Item active>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Next className="page-next" />
                </Pagination>
            </Col>
        </Row>
        {/* <!-- End Row1 --> */}
    </Fragment>
);

Filemanager1.layout = 'Contentlayout';

export default Filemanager1;
