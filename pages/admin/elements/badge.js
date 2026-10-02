import { Badge, Button, Col, Row } from 'react-bootstrap';
import {
    badges1,
    badgesdata,
    Outlinebadgesdata,
} from '../../../shared/data/elements/badgesdata';
import {
    badge1,
    badge10,
    badge11,
    badge12,
    badge13,
    badge2,
    badge3,
    badge4,
    badge5,
    badge6,
    badge7,
    badge8,
    badge9,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';
const Badges = () => {
    return (
        <>
            <Seo title={'Badge'} />
            <Pageheader title="BADGES" heading="Elements" active="Badge" />

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge1}
                    >
                        <div className="example">
                            {badgesdata.map((badge) => (
                                <Badge
                                    key={Math.random()}
                                    bg={badge.color}
                                    className={`badge bg-${badge.color} ${badge.class} me-1`}
                                >
                                    {badge.heading}
                                </Badge>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Pill badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge2}
                    >
                        <div className="example">
                            {badgesdata.map((badge) => (
                                <Badge
                                    key={Math.random()}
                                    bg={badge.color}
                                    className={`badge bg-${badge.color} ${badge.class} rounded-pill me-1 `}
                                >
                                    {badge.heading}
                                </Badge>
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
                        title="Light Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge3}
                    >
                        <div className="example">
                            {Outlinebadgesdata.map((badge) => (
                                <Badge
                                    key={Math.random()}
                                    bg={badge.color}
                                    className={`badge bg-${badge.color}-transparent ${badge.class} me-1`}
                                >
                                    {badge.heading}
                                </Badge>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Light Pill Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge4}
                    >
                        <div className="example">
                            {Outlinebadgesdata.map((badge) => (
                                <Badge
                                    key={Math.random()}
                                    bg={badge.color}
                                    className={`badge bg-${badge.color}-transparent ${badge.class} rounded-pill me-1`}
                                >
                                    {badge.heading}
                                </Badge>
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
                        title="Outline Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge5}
                    >
                        <div className="example">
                            {Outlinebadgesdata.map((badge) => (
                                <Badge
                                    key={Math.random()}
                                    bg={`outline-${badge.color}`}
                                    className={`badge outline-${badge.color}-transparent ${badge.class} me-1`}
                                >
                                    {badge.heading}
                                </Badge>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Outline Pill Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge6}
                    >
                        <div className="example">
                            {Outlinebadgesdata.map((badge) => (
                                <Badge
                                    key={Math.random()}
                                    bg={`outline-${badge.color}`}
                                    className={`badge outline-${badge.color}-transparent ${badge.class} rounded-pill me-1`}
                                >
                                    {badge.heading}
                                </Badge>
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
                        title="Gradient Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge7}
                    >
                        <div className="example">
                            {badges1.map((badge1) => (
                                <Badge
                                    key={Math.random()}
                                    bg={badge1.color}
                                    className={`badge bg-${badge1.color}-gradient me-1`}
                                >
                                    {badge1.heading}
                                </Badge>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Gradient Pill Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge8}
                    >
                        <div className="example">
                            {badges1.map((badge1) => (
                                <Badge
                                    key={Math.random()}
                                    bg={badge1.color}
                                    className={`badge bg-${badge1.color}-gradient rounded-pill me-1`}
                                >
                                    {badge1.heading}
                                </Badge>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col lg={12}>
                    <ShowCode
                        title="Buttons With Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge9}
                    >
                        <div className="example">
                            <Button
                                variant="danger"
                                type="button"
                                className="my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="white" className=" ms-2 text-danger">
                                    777
                                </Badge>
                            </Button>
                            <Button
                                variant="primary"
                                type="button"
                                className="my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge
                                    bg="white"
                                    className=" ms-2 text-primary"
                                >
                                    4
                                </Badge>
                            </Button>
                            <Button
                                variant="info"
                                type="button"
                                className="my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="white" className=" ms-2 text-info">
                                    32
                                </Badge>
                            </Button>
                            <Button
                                variant="warning"
                                type="button"
                                className="my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge
                                    bg="white"
                                    className=" ms-2 text-warning"
                                >
                                    7
                                </Badge>
                            </Button>
                            <Button
                                variant="success"
                                type="button"
                                className="my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge
                                    bg="white"
                                    className=" ms-2 text-success"
                                >
                                    12
                                </Badge>
                            </Button>
                            <Button
                                variant="secondary"
                                type="button"
                                className="my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge
                                    bg="white"
                                    className=" ms-2 text-secondary"
                                >
                                    7
                                </Badge>
                            </Button>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Buttons With Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge10}
                    >
                        <div className="example">
                            <Button
                                variant="primary"
                                type="button"
                                className=" my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="secondary" className="ms-2 ">
                                    4
                                </Badge>
                            </Button>
                            <Button
                                variant="secondary"
                                type="button"
                                className=" my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="primary" className="ms-2 ">
                                    7
                                </Badge>
                            </Button>
                            <Button
                                variant="success"
                                type="button"
                                className=" my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="danger" className="ms-2 ">
                                    12
                                </Badge>
                            </Button>
                            <Button
                                variant="info"
                                type="button"
                                className=" my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="warning" className="ms-2 ">
                                    32
                                </Badge>
                            </Button>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Outline Button Badges"
                        customCardClass="custom-card"
                        customCardBodyClass="d-flex flex-wrap gap-2"
                        code={badge11}
                    >
                        <div className="example">
                            <Button
                                variant="outline-primary"
                                type="button"
                                className="btn  my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="" className="badge ms-2">
                                    4
                                </Badge>
                            </Button>
                            <Button
                                variant="outline-secondary"
                                type="button"
                                className="btn  my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="" className="badge ms-2">
                                    7
                                </Badge>
                            </Button>
                            <Button
                                variant="outline-success"
                                type="button"
                                className="btn  my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="" className="badge ms-2">
                                    12
                                </Badge>
                            </Button>
                            <Button
                                variant="outline-info"
                                type="button"
                                className="btn  my-1 me-2"
                            >
                                Notifications{' '}
                                <Badge bg="" className="badge ms-2">
                                    32
                                </Badge>
                            </Button>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Headings"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={badge12}
                    >
                        <div className="example">
                            <h1>
                                Example heading{' '}
                                <Badge bg="primary" className="badge">
                                    New
                                </Badge>
                            </h1>
                            <h2>
                                Example heading{' '}
                                <Badge bg="primary" className="badge">
                                    New
                                </Badge>
                            </h2>
                            <h3>
                                Example heading{' '}
                                <Badge bg="primary" className="badge">
                                    New
                                </Badge>
                            </h3>
                            <h4>
                                Example heading{' '}
                                <Badge bg="primary" className="badge">
                                    New
                                </Badge>
                            </h4>
                            <h5>
                                Example heading{' '}
                                <Badge bg="primary" className="badge">
                                    New
                                </Badge>
                            </h5>
                            <h6>
                                Example heading{' '}
                                <Badge bg="primary" className="badge">
                                    New
                                </Badge>
                            </h6>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode
                                title="Positioned Badges"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={badge13}
                            >
                                <div className="example">
                                    <div className="d-flex flex-wrap gap-4">
                                        <Button
                                            type="button"
                                            className="btn btn-primary position-relative"
                                        >
                                            Inbox
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                99+
                                                <span className="visually-hidden">
                                                    unread messages
                                                </span>
                                            </span>
                                        </Button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary position-relative"
                                        >
                                            Profile
                                            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                                                <span className="visually-hidden">
                                                    New alerts
                                                </span>
                                            </span>
                                        </button>
                                        <span className="avatar">
                                            <img
                                                src="../../../assets/images/faces/2.jpg"
                                                alt="img"
                                            />
                                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                                <span className="visually-hidden">
                                                    New alerts
                                                </span>
                                            </span>
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <img
                                                src="../../../assets/images/faces/15.jpg"
                                                alt="img"
                                            />
                                            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light              rounded-circle">
                                                <span className="visually-hidden">
                                                    New alerts
                                                </span>
                                            </span>
                                        </span>
                                        <span className="avatar avatar-rounded">
                                            <img
                                                src="../../../assets/images/faces/10.jpg"
                                                alt="img"
                                            />
                                            <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">
                                                1000+
                                                <span className="visually-hidden">
                                                    New alerts
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Custom Badges"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={badge13}
                            >
                                <div className="example">
                                    <div className="d-flex align-items-center gap-5 flex-wrap">
                                        <div>
                                            <span className="badge bg-outline-secondary custom-badge fs-15">
                                                <i className="ti ti-flame me-1"></i>
                                                Hot
                                            </span>
                                        </div>
                                        <div>
                                            <span className="icon-badge">
                                                <svg
                                                    className="icon"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    width="24px"
                                                    fill="#000000"
                                                >
                                                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                                                </svg>
                                                <span className="badge rounded-pill bg-success">
                                                    14
                                                </span>
                                            </span>
                                        </div>
                                        <div>
                                            <span className="badge border bg-light text-default custom-badge">
                                                <i className="fe fe-eye me-1 d-inline-block"></i>
                                                13.2k
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-badge">
                                                <span className="text fs-18">
                                                    Inbox
                                                </span>
                                                <span className="badge rounded-pill bg-success">
                                                    32
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </>
    );
};
Badges.layout = 'Contentlayout';

export default Badges;
