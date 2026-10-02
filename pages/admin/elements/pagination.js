import { Col, Pagination, Row } from 'react-bootstrap';
import {
    pagination1,
    pagination2,
    pagination3,
    pagination4,
    pagination5,
    pagination6,
    pagination7,
    pagination8,
    pagination9,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';
const Paginations = () => {
    return (
        <>
            <Seo title={'Pagination'} />
            <Pageheader
                title="PAGINATION"
                heading="Elements"
                active="Pagination"
            />

            {/* <!-- row --> */}
            <Row>
                <Col xxl={6} xl={6}>
                    <ShowCode
                        title="Basic Pagination"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={pagination1}
                    >
                        <div className="example">
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0">
                                    <Pagination.Item
                                        disabled
                                        className="disabled"
                                        href="#!"
                                    >
                                        Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        Next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={6} xl={6}>
                    <ShowCode
                        title="Pagination With Icons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={pagination2}
                    >
                        <div className="example">
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0">
                                    <Pagination.Item
                                        className="page-item"
                                        href="#!"
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">
                                            <i className="fe fe-chevrons-left"></i>
                                        </span>
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        3
                                    </Pagination.Item>
                                    <Pagination.Item
                                        className="page-item"
                                        href="#!"
                                        aria-label="Next"
                                    >
                                        <span aria-hidden="true">
                                            <i className="fe fe-chevrons-right"></i>
                                        </span>
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={12} xl={12}>
                    <ShowCode
                        title="Pagination Sizing"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap justify-content-between"
                        code={pagination3}
                    >
                        <div className="example d-flex flex-wrap justify-content-between gap-2">
                            <nav aria-label="...">
                                <Pagination className="pagination pagination-sm mb-2 mb-sm-0">
                                    <Pagination.Item active aria-current="page">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        3
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                            <nav aria-label="...">
                                <Pagination className="pagination  mb-2 mb-sm-0">
                                    <Pagination.Item active aria-current="page">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        3
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                            <nav aria-label="...">
                                <Pagination className="pagination pagination-lg mb-2 mb-sm-0">
                                    <Pagination.Item
                                        className=" active"
                                        aria-current="page"
                                    >
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        3
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Center & Right Aligned Pagination"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={pagination4}
                    >
                        <div className="example">
                            <nav aria-label="Page navigation">
                                <Pagination className="justify-content-sm-center">
                                    <Pagination.Item disabled>
                                        Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item
                                        href="#!"
                                        className="d-sm-block d-none"
                                    >
                                        3
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        Next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                            <nav aria-label="Page navigation">
                                <Pagination className="justify-content-sm-end mb-0">
                                    <Pagination.Item disabled>
                                        Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item
                                        href="#!"
                                        className="d-sm-block d-none"
                                    >
                                        3
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        Next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Active and disabled states"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap"
                        code={pagination5}
                    >
                        <div className="example">
                            <nav aria-label="..." className="me-3">
                                <Pagination className="pagination">
                                    <Pagination.Item disabled>
                                        Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item
                                        active
                                        aria-current="page"
                                        href="#!"
                                    >
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        Next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                            <nav aria-label="...">
                                <Pagination className="pagination">
                                    <Pagination.Item disabled>
                                        Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item active aria-current="page">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        Next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xxl={3} xl={6}>
                    <ShowCode
                        title="Pagination Style-1"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={pagination6}
                    >
                        <div className="example">
                            <nav
                                aria-label="Page navigation"
                                className="pagination-style-1"
                            >
                                <Pagination className="pagination mb-0">
                                    <Pagination.Item disabled href="#!">
                                        <i className="ri-arrow-left-s-line align-middle"></i>
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item active href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        <i className="bi bi-three-dots"></i>
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        21
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        <i className="ri-arrow-right-s-line align-middle"></i>
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6}>
                    <ShowCode
                        title="Pagination Style-2"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={pagination7}
                    >
                        <div className="example">
                            <nav
                                aria-label="Page navigation"
                                className="pagination-style-2"
                            >
                                <Pagination className="mb-0 flex-wrap">
                                    <Pagination.Item disabled href="#!">
                                        Prev
                                    </Pagination.Item>
                                    <Pagination.Item active href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item>
                                        <i className="bi bi-three-dots"></i>
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        17
                                    </Pagination.Item>
                                    <Pagination.Item
                                        className="pagination-next"
                                        href="#!"
                                    >
                                        next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6}>
                    <ShowCode
                        title="Pagination Style-3"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={pagination8}
                    >
                        <div className="example">
                            <nav
                                aria-label="Page navigation"
                                className="pagination-style-3"
                            >
                                <Pagination className=" mb-0 flex-wrap">
                                    <Pagination.Item disabled>
                                        Prev
                                    </Pagination.Item>
                                    <Pagination.Item active href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        <i className="bi bi-three-dots"></i>
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        16
                                    </Pagination.Item>
                                    <Pagination.Item
                                        className="pagination-next"
                                        href="#!"
                                    >
                                        next{' '}
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6}>
                    <ShowCode
                        title="Pagination Style-4"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={pagination9}
                    >
                        <div className="example">
                            <nav
                                aria-label="Page navigation"
                                className="pagination-style-4"
                            >
                                <Pagination className="mb-0 flex-wrap">
                                    <Pagination.Item disabled href="#!">
                                        Prev
                                    </Pagination.Item>
                                    <Pagination.Item active href="#!">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        2
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        <i className="bi bi-three-dots"></i>
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        16
                                    </Pagination.Item>
                                    <Pagination.Item href="#!">
                                        17
                                    </Pagination.Item>
                                    <Pagination.Item
                                        className="pagination-next"
                                        href="#!"
                                    >
                                        next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </>
    );
};
Paginations.layout = 'Contentlayout';

export default Paginations;
