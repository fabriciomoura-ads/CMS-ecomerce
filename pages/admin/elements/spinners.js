import { Button, Col, Row } from 'react-bootstrap';
import {
    Buttonspinner,
    Colorspinner,
} from '../../../shared/data/elements/spinnersdata';
import {
    spinner1,
    spinner10,
    spinner2,
    spinner3,
    spinner4,
    spinner5,
    spinner6,
    spinner7,
    spinner8,
    spinner9,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';
const Spinners = () => {
    return (
        <>
            <Seo title={'spinners'} />
            <Pageheader title="SPINNERS" heading="Elements" active="Spinners" />

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Border spinner"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={spinner1}
                    >
                        <div className="example">
                            <div className="spinner-border " role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Colors"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={spinner2}
                    >
                        <div className="example">
                            {Colorspinner.map((idx) => (
                                <div
                                    className={`spinner-border me-2 text-${idx.color}`}
                                    role="status"
                                    key={Math.random()}
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Growing spinner"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={spinner3}
                    >
                        <div className="example">
                            <div className="spinner-grow " role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Growing spinner"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={spinner4}
                    >
                        <div className="example">
                            {Colorspinner.map((idx) => (
                                <div
                                    className={`spinner-grow me-1 text-${idx.color}`}
                                    role="status"
                                    key={Math.random()}
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Alignment Flex"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={spinner5}
                    >
                        <div className="example">
                            <div className="d-flex justify-content-center mb-4">
                                <div className="spinner-border " role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div
                                    className="spinner-border  ms-auto"
                                    role="status"
                                    aria-hidden="true"
                                ></div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Alignment Float"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={spinner6}
                    >
                        <div className="example">
                            <div className="clearfix mb-4">
                                <div
                                    className="spinner-border  float-end"
                                    role="status"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                            <div className="clearfix">
                                <div
                                    className="spinner-border  float-start"
                                    role="status"
                                >
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Alignment Text center"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={spinner7}
                    >
                        <div className="example">
                            <div className="text-center">
                                <div className="spinner-border " role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                    <ShowCode
                        title="Spinner Sizes"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex align-items-center"
                        code={spinner8}
                    >
                        <div className="example">
                            <div
                                className="spinner-border  spinner-border-sm me-4"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                            <div
                                className="spinner-grow  spinner-grow-sm me-4"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                            <div
                                className="spinner-border  me-4"
                                style={{ width: '3rem', height: '3rem' }}
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                            <div
                                className="spinner-grow "
                                style={{ width: '3rem', height: '3rem' }}
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Alignment Margin"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex align-items-center"
                        code={spinner9}
                    >
                        <div className="example">
                            <div className="spinner-border  m-5" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode
                        title="Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={spinner10}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <Button
                                    variant=""
                                    className="btn btn-primary-light"
                                    type="button"
                                    disabled
                                >
                                    <span
                                        className="spinner-border spinner-border-sm align-middle"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </Button>
                                <Button
                                    variant=""
                                    className="btn btn-primary-light"
                                    type="button"
                                    disabled
                                >
                                    <span
                                        className="spinner-border me-2 spinner-border-sm align-middle"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    Loading...
                                </Button>
                                <Button
                                    variant=""
                                    className="btn btn-primary-light"
                                    type="button"
                                    disabled
                                >
                                    <span
                                        className="spinner-grow spinner-grow-sm align-middle"
                                        role="status"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </Button>
                                {Buttonspinner.map((idx) => (
                                    <Button
                                        variant={idx.color}
                                        className="btn"
                                        type="button"
                                        disabled
                                        key={Math.random()}
                                    >
                                        <span
                                            className="spinner-grow me-2 spinner-grow-sm align-middle"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Loading...
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </>
    );
};
Spinners.layout = 'Contentlayout';

export default Spinners;
