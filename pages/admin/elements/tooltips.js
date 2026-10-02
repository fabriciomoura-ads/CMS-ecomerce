import Link from 'next/link';
import { Fragment } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import {
    SVGtooltip,
    Tooltipdirtooltip,
} from '../../../shared/data/elements/tooltipsdata';
import {
    tooltip1,
    tooltip2,
    tooltip3,
    tooltip4,
    tooltip5,
    tooltip6,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';
const Tooltips = () => {
    return (
        <Fragment>
            <Seo title={'Tooltips'} />
            <Pageheader title="TOOLTIPS" heading="Elements" active="Tooltips" />

            {/* <!-- row --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode
                        title="Tooltip Directions"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={tooltip1}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {Tooltipdirtooltip.map((idx) => (
                                    <OverlayTrigger
                                        placement={idx.text}
                                        overlay={
                                            <Tooltip>
                                                Tooltip on {idx.text}{' '}
                                            </Tooltip>
                                        }
                                        key={Math.random()}
                                    >
                                        <Button
                                            type="button"
                                            className="btn btn-primary btn-wave"
                                        >
                                            Tooltip on {idx.text}
                                        </Button>
                                    </OverlayTrigger>
                                ))}
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
                        title="Colored Tooltips"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={tooltip2}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip className="tooltip-primary">
                                            Primary Tooltip{' '}
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        type="button"
                                        variant="primary"
                                        className="btn  btn-wave"
                                    >
                                        Primary Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="right"
                                    overlay={
                                        <Tooltip className="tooltip-secondary">
                                            Secondary Tooltip{' '}
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        className="btn  btn-wave"
                                    >
                                        Secondary Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip className="tooltip-warning">
                                            Warning Tooltip{' '}
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        type="button"
                                        variant="warning"
                                        className="btn  btn-wave"
                                    >
                                        Warning Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={
                                        <Tooltip className="tooltip-info">
                                            Info Tooltip{' '}
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        type="button"
                                        variant="info"
                                        className="btn  btn-wave"
                                    >
                                        Info Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip className="tooltip-success">
                                            Success Tooltip{' '}
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        type="button"
                                        variant="success"
                                        className="btn  btn-wave"
                                    >
                                        Success Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip className="tooltip-danger">
                                            Danger Tooltip{' '}
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        type="button"
                                        variant="danger"
                                        className="btn  btn-wave"
                                    >
                                        Danger Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip className="tooltip-light">
                                            Light Tooltip{' '}
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        type="button"
                                        variant="light"
                                        className="btn  btn-wave"
                                    >
                                        Light Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip className="tooltip-dark">
                                            Dark Tooltip{' '}
                                        </Tooltip>
                                    }
                                >
                                    <Button
                                        type="button"
                                        variant="dark"
                                        className="btn  btn-wave"
                                    >
                                        Dark Tooltip
                                    </Button>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode
                        title="Tooltips on links"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={tooltip3}
                    >
                        <div className="example">
                            <p className="text-muted mb-0">
                                Hover on the link to view the
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip className="tooltip-primary">
                                            Link Tooltip{' '}
                                        </Tooltip>
                                    }
                                >
                                    <a
                                        href="#!"
                                        className="text-primary ms-1 d-inline-flex"
                                    >
                                        Tooltip
                                    </a>
                                </OverlayTrigger>
                            </p>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="With an SVG's"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={tooltip4}
                    >
                        <div className="example">
                            {SVGtooltip.map((idx) => (
                                <OverlayTrigger
                                    key={Math.random()}
                                    placement="top"
                                    overlay={
                                        <Tooltip
                                            className={`tooltip-${idx.color}`}
                                        >
                                            {idx.text}{' '}
                                        </Tooltip>
                                    }
                                >
                                    <a href="#!" className="me-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`svg-${idx.color}`}
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            width="24px"
                                            fill="#000000"
                                        >
                                            <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d={idx.class} />
                                        </svg>
                                    </a>
                                </OverlayTrigger>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Disabled elements"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={tooltip5}
                    >
                        <div className="example">
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id="tooltip-disabled">
                                        Disabled tooltip
                                    </Tooltip>
                                }
                            >
                                <span className="d-inline-block">
                                    <Button
                                        disabled
                                        style={{ pointerEvents: 'none' }}
                                    >
                                        Disabled button
                                    </Button>
                                </span>
                            </OverlayTrigger>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode
                        title="Tooltip For Images"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={tooltip6}
                    >
                        <div className="example">
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip className="tooltip-primary">
                                        Alex Carey
                                    </Tooltip>
                                }
                            >
                                <Link
                                    href="#!"
                                    className="avatar avatar-md me-2 online avatar-rounded"
                                >
                                    <img
                                        src="../../../assets/images/faces/12.jpg"
                                        alt="img"
                                    />
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip className="tooltip-primary">
                                        Marina Kai
                                    </Tooltip>
                                }
                            >
                                <Link
                                    href="#!"
                                    className="avatar avatar-lg me-2 online avatar-rounded"
                                >
                                    <img
                                        src="../../../assets/images/faces/3.jpg"
                                        alt="img"
                                    />
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip className="tooltip-primary">
                                        Tim Cook
                                    </Tooltip>
                                }
                            >
                                <Link
                                    href="#!"
                                    className="avatar avatar-xl me-2 online avatar-rounded"
                                >
                                    <img
                                        src="../../../assets/images/faces/15.jpg"
                                        alt="img"
                                    />
                                </Link>
                            </OverlayTrigger>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </Fragment>
    );
};
Tooltips.layout = 'Contentlayout';

export default Tooltips;
