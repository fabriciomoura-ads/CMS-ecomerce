import { Fragment, useState } from 'react';
import { Button, Col, Offcanvas, Row } from 'react-bootstrap';
import { OffcanvasData } from '../../../shared/data/advancedui/Offcanvasdata';
import {
    offcanvas1,
    offcanvas2,
    offcanvas3,
    offcanvas4,
    offcanvas5,
} from '../../../shared/data/prismdata/advanceuidata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';

const Offcanvass = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    // OffCanvas Enable
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //static
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //Placement
    const [showt, setShowt] = useState(false);

    const handleCloset = () => setShowt(false);
    const handleShowt = () => setShowt(true);

    //right

    const [showr, setShowr] = useState(false);

    const handleCloser = () => setShowr(false);
    const handleShowr = () => setShowr(true);

    //bottom

    const [showb, setShowb] = useState(false);

    const handleCloseb = () => setShowb(false);
    const handleShowb = () => setShowb(true);

    return (
        <Fragment>
            <Seo title={'Offcanvas'} />
            <Pageheader
                title="OFFCANVAS"
                heading="Advanced UI"
                active="Offcanvas"
            />
            {/* <!-- Row1 --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode
                        title=" Live demo"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={offcanvas1}
                    >
                        <Button
                            variant="primary"
                            className="m-1"
                            data-bs-toggle="offcanvas"
                            href="#offcanvasExample"
                            onClick={handleShow}
                            role="button"
                            aria-controls="offcanvasExample"
                        >
                            Link with href
                        </Button>
                        <Button
                            variant="primary"
                            className="m-1"
                            type="button"
                            data-bs-toggle="offcanvas"
                            onClick={handleShow}
                            data-bs-target="#offcanvasExample"
                            aria-controls="offcanvasExample"
                        >
                            Button with data-bs-target
                        </Button>
                        <Offcanvas
                            show={show}
                            onHide={handleClose}
                            backdrop={true}
                            className="offcanvas offcanvas-start"
                            tabIndex={-1}
                            id="offcanvasExample"
                        >
                            <Offcanvas.Header
                                closeButton
                                className="border-bottom border-block-end-dashed"
                            >
                                <h5
                                    className="offcanvas-title"
                                    id="offcanvasExampleLabel"
                                >
                                    Notifications
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=" p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        {OffcanvasData.map((idx) => (
                                            <li
                                                className="list-group-item"
                                                key={Math.random()}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        {idx.src ? (
                                                            <div className="avatar avatar-md avatar-rounded">
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
                                                                className={`avatar avatar-md bg-${idx.color}  text-fixed-white avatar-rounded`}
                                                            >
                                                                {idx.text}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">
                                                            {idx.name}
                                                            <span className=" badge bg-light text-muted float-end">
                                                                {idx.date}
                                                            </span>
                                                        </p>
                                                        <span className="fs-12 text-muted">
                                                            <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                                                            {idx.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Body scrolling"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={offcanvas2}
                    >
                        <Button
                            variant="primary"
                            className=""
                            type="button"
                            data-bs-toggle="offcanvas"
                            onClick={handleShow1}
                            data-bs-target="#offcanvasScrolling"
                            aria-controls="offcanvasScrolling"
                        >
                            Enable body scrolling
                        </Button>
                        <Offcanvas
                            show={show1}
                            onHide={handleClose1}
                            backdrop={true}
                            className="offcanvas offcanvas-start"
                            tabIndex={-1}
                            id="offcanvasExample"
                        >
                            <Offcanvas.Header
                                closeButton
                                className="border-bottom border-block-end-dashed"
                            >
                                <h5
                                    className="offcanvas-title"
                                    id="offcanvasExampleLabel"
                                >
                                    Notifications
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=" p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        {OffcanvasData.map((idx) => (
                                            <li
                                                className="list-group-item"
                                                key={Math.random()}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        {idx.src ? (
                                                            <div className="avatar avatar-md avatar-rounded">
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
                                                                className={`avatar avatar-md bg-${idx.color}  text-fixed-white avatar-rounded`}
                                                            >
                                                                {idx.text}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">
                                                            {idx.name}
                                                            <span className=" badge bg-light text-muted float-end">
                                                                {idx.date}
                                                            </span>
                                                        </p>
                                                        <span className="fs-12 text-muted">
                                                            <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                                                            {idx.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Static backdrop"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={offcanvas3}
                    >
                        <Button
                            variant="primary"
                            className=""
                            type="button"
                            data-bs-toggle="offcanvas"
                            onClick={handleShow2}
                            data-bs-target="#staticBackdrop"
                            aria-controls="staticBackdrop"
                        >
                            Toggle static offcanvas
                        </Button>
                        <Offcanvas
                            show={show2}
                            onHide={handleClose2}
                            backdrop={true}
                            className="offcanvas offcanvas-start"
                            tabIndex={-1}
                            id="offcanvasExample"
                        >
                            <Offcanvas.Header
                                closeButton
                                className="border-bottom border-block-end-dashed"
                            >
                                <h5
                                    className="offcanvas-title"
                                    id="offcanvasExampleLabel"
                                >
                                    Notifications
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=" p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        {OffcanvasData.map((idx) => (
                                            <li
                                                className="list-group-item"
                                                key={Math.random()}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        {idx.src ? (
                                                            <div className="avatar avatar-md avatar-rounded">
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
                                                                className={`avatar avatar-md bg-${idx.color}  text-fixed-white avatar-rounded`}
                                                            >
                                                                {idx.text}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">
                                                            {idx.name}
                                                            <span className=" badge bg-light text-muted float-end">
                                                                {idx.date}
                                                            </span>
                                                        </p>
                                                        <span className="fs-12 text-muted">
                                                            <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                                                            {idx.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row1 Closed --> */}

            {/* <!-- Row2 --> */}
            <Row>
                <Col xl={3}>
                    <ShowCode
                        title="Body scrolling and backdrop"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={offcanvas4}
                    >
                        <Button
                            className="btn btn-primary"
                            type="button"
                            data-bs-toggle="offcanvas"
                            onClick={handleShow3}
                            data-bs-target="#offcanvasWithBothOptions"
                            aria-controls="offcanvasWithBothOptions"
                        >
                            Enable both scrolling &amp; backdrop
                        </Button>
                        <Offcanvas
                            show={show3}
                            onHide={handleClose3}
                            backdrop={true}
                            className="offcanvas offcanvas-start"
                            tabIndex={-1}
                            id="offcanvasExample"
                        >
                            <Offcanvas.Header
                                closeButton
                                className="border-bottom border-block-end-dashed"
                            >
                                <h5
                                    className="offcanvas-title"
                                    id="offcanvasExampleLabel"
                                >
                                    Notifications
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=" p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        {OffcanvasData.map((idx) => (
                                            <li
                                                className="list-group-item"
                                                key={Math.random()}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        {idx.src ? (
                                                            <div className="avatar avatar-md avatar-rounded">
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
                                                                className={`avatar avatar-md bg-${idx.color}  text-fixed-white avatar-rounded`}
                                                            >
                                                                {idx.text}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">
                                                            {idx.name}
                                                            <span className=" badge bg-light text-muted float-end">
                                                                {idx.date}
                                                            </span>
                                                        </p>
                                                        <span className="fs-12 text-muted">
                                                            <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                                                            {idx.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
                <Col xl={5}>
                    <ShowCode
                        title="Placement"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={offcanvas5}
                    >
                        <Button
                            variant="primary"
                            className="m-1"
                            type="button"
                            data-bs-toggle="offcanvas"
                            onClick={handleShowt}
                            data-bs-target="#offcanvasTop"
                            aria-controls="offcanvasTop"
                        >
                            Toggle top offcanvas
                        </Button>
                        <Offcanvas
                            placement="top"
                            show={showt}
                            onHide={handleCloset}
                            className="offcanvas-top"
                            tabIndex={-1}
                            id="offcanvasTop"
                            aria-labelledby="offcanvasTopLabel"
                        >
                            <Offcanvas.Header closeButton>
                                <h5
                                    className="offcanvas-title"
                                    id="offcanvasTopLabel"
                                >
                                    Offcanvas top
                                </h5>
                            </Offcanvas.Header>
                            <div className="">...</div>
                        </Offcanvas>
                        <Button
                            variant="primary"
                            className="m-1"
                            type="button"
                            data-bs-toggle="offcanvas"
                            onClick={handleShowr}
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            Toggle right offcanvas
                        </Button>
                        <Offcanvas
                            placement="end"
                            show={showr}
                            onHide={handleCloser}
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel1"
                        >
                            <Offcanvas.Header
                                closeButton
                                className="offcanvas-header border-bottom border-block-end-dashed"
                            >
                                <h5
                                    className="offcanvas-title"
                                    id="offcanvasRightLabel1"
                                >
                                    Notifications
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=" p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        {OffcanvasData.map((idx) => (
                                            <li
                                                className="list-group-item"
                                                key={Math.random()}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        {idx.src ? (
                                                            <div className="avatar avatar-md avatar-rounded">
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
                                                                className={`avatar avatar-md bg-${idx.color}  text-fixed-white avatar-rounded`}
                                                            >
                                                                {idx.text}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">
                                                            {idx.name}
                                                            <span className=" badge bg-light text-muted float-end">
                                                                {idx.date}
                                                            </span>
                                                        </p>
                                                        <span className="fs-12 text-muted">
                                                            <i className="ri-time-line align-middle me-1 d-inline-block"></i>
                                                            {idx.time}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <Button
                            variant="primary"
                            className="m-1"
                            type="button"
                            data-bs-toggle="offcanvas"
                            onClick={handleShowb}
                            data-bs-target="#offcanvasBottom"
                            aria-controls="offcanvasBottom"
                        >
                            Toggle bottom offcanvas
                        </Button>
                        <Offcanvas
                            placement="bottom"
                            show={showb}
                            onHide={handleCloseb}
                            className="offcanvas offcanvas-bottom"
                            tabIndex={-1}
                            id="offcanvasBottom"
                            aria-labelledby="offcanvasBottomLabel"
                        >
                            <Offcanvas.Header closeButton>
                                <h5
                                    className="offcanvas-title"
                                    id="offcanvasBottomLabel"
                                >
                                    Offcanvas bottom
                                </h5>
                            </Offcanvas.Header>
                            <Offcanvas.Body className=" small">
                                ...
                            </Offcanvas.Body>
                        </Offcanvas>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row2 Closed --> */}
        </Fragment>
    );
};

Offcanvass.layout = 'Contentlayout';
export default Offcanvass;
