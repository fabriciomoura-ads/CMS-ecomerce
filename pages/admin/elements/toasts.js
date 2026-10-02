import { useState } from 'react';
import {
    Button,
    CloseButton,
    Col,
    Row,
    Toast,
    ToastContainer,
} from 'react-bootstrap';
import {
    toast1,
    toast10,
    toast2,
    toast3,
    toast4,
    toast5,
    toast6,
    toast7,
    toast8,
    toast9,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';
const Toasts = () => {
    //live example
    const [show, setShow] = useState(false);
    //Color Variants Live
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);

    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false);
    const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);
    const [show21, setShow21] = useState(false);
    //basic example
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    //Translucent
    const [showB, setShowB] = useState(true);
    const toggleShowB = () => setShowB(!showB);
    //color schemes
    const [showC, setShowC] = useState(true);
    const toggleShowC = () => setShowC(!showC);

    const [showD, setShowD] = useState(true);
    const toggleShowD = () => setShowD(!showD);

    const [showE, setShowE] = useState(true);
    const toggleShowE = () => setShowE(!showE);

    const [showF, setShowF] = useState(true);
    const toggleShowF = () => setShowF(!showF);
    //Stacking
    const [showG, setShowG] = useState(true);
    const toggleShowG = () => setShowG(!showG);

    const [showH, setShowH] = useState(true);
    const toggleShowH = () => setShowH(!showH);
    //Custom Content
    const [showI, setShowI] = useState(true);
    const toggleShowI = () => setShowI(!showI);

    const [showJ, setShowJ] = useState(true);
    const toggleShowJ = () => setShowJ(!showJ);

    const [showK, setShowK] = useState(true);
    const toggleShowK = () => setShowK(!showK);

    return (
        <>
            <Seo title={'Toasts'} />
            <Pageheader title="TOASTs" heading="Elements" active="Toasts" />

            {/* <!-- row --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode
                        title="Live example"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast4}
                    >
                        <div className="example">
                            <Button
                                type="button"
                                className="btn btn-primary btn-wave"
                                id="liveToastBtn"
                                onClick={() => setShow(true)}
                            >
                                Show live toast
                            </Button>
                            <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                                <Toast
                                    id="liveToast"
                                    className="toast fade show"
                                    role="alert"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                    onClose={() => setShow(false)}
                                    show={show}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="text-default">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/favicon.ico"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>{' '}
                                        <small>11 mins ago</small>
                                    </Toast.Header>
                                    <Toast.Body className="">
                                        {' '}
                                        Hello, world! This is a toast message.{' '}
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </div>
                    </ShowCode>
                    <ShowCode
                        title=" Color schemes"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast5}
                    >
                        <div className="example">
                            <Toast
                                className="toast align-items-center text-bg-primary border-0 fade show mb-4"
                                show={showC}
                            >
                                <div className="d-flex">
                                    <Toast.Body className=" text-fixed-white">
                                        Hello, world! This is Primary toast
                                        message.{' '}
                                    </Toast.Body>
                                    <CloseButton
                                        aria-label="Close"
                                        className="btn-close btn-close-white me-2 m-auto"
                                        onClick={toggleShowC}
                                    ></CloseButton>
                                </div>
                            </Toast>
                            <Toast
                                className="toast align-items-center text-bg-secondary border-0 fade show mb-4"
                                show={showD}
                            >
                                <div className="d-flex">
                                    <Toast.Body className=" text-fixed-white">
                                        Hello, world! This is Secondary toast
                                        message.{' '}
                                    </Toast.Body>
                                    <CloseButton
                                        aria-label="Close"
                                        className="btn-close btn-close-white me-2 m-auto"
                                        onClick={toggleShowD}
                                    ></CloseButton>
                                </div>
                            </Toast>
                            <Toast
                                className="toast align-items-center text-bg-success border-0 fade show mb-4"
                                show={showE}
                            >
                                <div className="d-flex">
                                    <Toast.Body className=" text-fixed-white">
                                        Hello, world! This is Success toast
                                        message.{' '}
                                    </Toast.Body>
                                    <CloseButton
                                        aria-label="Close"
                                        className="btn-close btn-close-white me-2 m-auto"
                                        onClick={toggleShowE}
                                    ></CloseButton>
                                </div>
                            </Toast>
                            <Toast
                                className="toast align-items-center text-bg-info border-0 fade show mb-4"
                                show={showF}
                            >
                                <div className="d-flex">
                                    <Toast.Body className=" text-fixed-white">
                                        Hello, world! This is info toast
                                        message.{' '}
                                    </Toast.Body>
                                    <CloseButton
                                        aria-label="Close"
                                        className="btn-close btn-close-white me-2 m-auto"
                                        onClick={toggleShowF}
                                    ></CloseButton>
                                </div>
                            </Toast>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Basic example"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast6}
                    >
                        <div className="example">
                            <Toast
                                show={showA}
                                onClose={toggleShowA}
                                className="toast show"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true"
                                data-bs-autohide="false"
                            >
                                <Toast.Header className="text-default">
                                    <img
                                        src="../../../assets/images/brand-logos/favicon.ico"
                                        alt=""
                                        className="me-2"
                                        height="18"
                                    />
                                    <strong className="me-auto">Nowa</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>
                                    {' '}
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                            </Toast>
                        </div>
                    </ShowCode>
                    <ShowCode
                        title="Stacking"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast7}
                    >
                        <div className="example">
                            <ToastContainer className="toast-container position-static">
                                <Toast
                                    show={showG}
                                    onClose={toggleShowG}
                                    className="toast fade show"
                                >
                                    <Toast.Header className="toast-header text-default">
                                        <img
                                            src="../../../assets/images/brand-logos/favicon.ico"
                                            alt=""
                                            className="me-2"
                                            height="18"
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                        <small>just now</small>
                                    </Toast.Header>
                                    <Toast.Body>
                                        {' '}
                                        See? Just like this.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    show={showH}
                                    onClose={toggleShowH}
                                    className="toast fade show"
                                >
                                    <Toast.Header className="toast-header text-default">
                                        <img
                                            src="../../../assets/images/brand-logos/favicon.ico"
                                            alt=""
                                            className="me-2"
                                            height="18"
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                        <small>2 seconds ago</small>
                                    </Toast.Header>
                                    <Toast.Body>
                                        {' '}
                                        Heads up, toasts will stack
                                        automatically
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Translucent"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast8}
                    >
                        <div className="example">
                            <Toast
                                show={showB}
                                onClose={toggleShowB}
                                className="toast show"
                                role="alert"
                                aria-live="assertive"
                                aria-atomic="true"
                                data-bs-autohide="false"
                            >
                                <Toast.Header className="text-default">
                                    <img
                                        src="../../../assets/images/brand-logos/favicon.ico"
                                        alt=""
                                        className="me-2"
                                        height="18"
                                    />
                                    <strong className="me-auto">Nowa</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>
                                    {' '}
                                    Hello, world! This is a toast message.
                                </Toast.Body>
                            </Toast>
                        </div>
                    </ShowCode>
                    <ShowCode
                        title="Custom content"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast9}
                    >
                        <div className="example">
                            <Toast
                                role="alert"
                                className="toast align-items-center fade show mb-3"
                                show={showI}
                            >
                                <div className="d-flex">
                                    <Toast.Body className=" text-dark">
                                        {' '}
                                        Hello, world! This is a toast message.
                                    </Toast.Body>
                                    <CloseButton
                                        type="button"
                                        className="btn-close me-2 m-auto"
                                        onClick={toggleShowI}
                                    ></CloseButton>
                                </div>
                            </Toast>
                            <div>
                                <span className="my-4 text-muted">
                                    Alternatively, you can also add additional
                                    controls and admin to toasts.
                                </span>
                            </div>
                            <Toast
                                className="toast fade show mt-2"
                                role="alert"
                                aria-live="assertive"
                                show={showJ}
                            >
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                    <div className="mt-2 pt-2 border-top">
                                        <Button
                                            type="button"
                                            className="btn btn-primary btn-sm btn-wave me-2"
                                        >
                                            Take action
                                        </Button>
                                        <Button
                                            type="button"
                                            className="btn btn-secondary btn-sm btn-wave"
                                            onClick={toggleShowJ}
                                        >
                                            Close
                                        </Button>
                                    </div>
                                </Toast.Body>
                            </Toast>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Color Variants Live"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast2}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <Button
                                    type="button"
                                    variant="primary-light"
                                    className="btn me-2 btn-wave"
                                    id="primaryToastBtn"
                                    onClick={() => setShow1(true)}
                                >
                                    Primary
                                </Button>
                                <Button
                                    variant="secondary-light"
                                    type="button"
                                    className="btn me-2 btn-wave"
                                    id="secondaryToastBtn"
                                    onClick={() => setShow2(true)}
                                >
                                    secondary
                                </Button>
                                <Button
                                    variant="warning-light"
                                    type="button"
                                    className="btn  me-2 btn-wave"
                                    id="warningToastBtn"
                                    onClick={() => setShow3(true)}
                                >
                                    warning
                                </Button>
                                <Button
                                    variant="info-light"
                                    type="button"
                                    className="btn  me-2 btn-wave"
                                    id="infoToastBtn"
                                    onClick={() => setShow4(true)}
                                >
                                    info
                                </Button>
                                <Button
                                    variant="success-light"
                                    type="button"
                                    className="btn  me-2 btn-wave"
                                    id="successToastBtn"
                                    onClick={() => setShow5(true)}
                                >
                                    success
                                </Button>
                                <Button
                                    variant="danger-light"
                                    type="button"
                                    className="btn me-2 btn-wave"
                                    id="dangerToastBtn"
                                    onClick={() => setShow6(true)}
                                >
                                    danger
                                </Button>
                            </div>
                            <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                                <Toast
                                    id="primaryToast"
                                    bg="primary-transparent"
                                    className="toast colored-toast"
                                    onClose={() => setShow1(false)}
                                    show={show1}
                                    delay={3000}
                                    autohide
                                    aria-atomic="true"
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="secondaryToast"
                                    className="toast colored-toast bg-secondary-transparent"
                                    role="alert"
                                    aria-live="assertive"
                                    aria-atomic="true"
                                    onClose={() => setShow2(false)}
                                    show={show2}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-secondary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="warningToast"
                                    className="toast colored-toast bg-warning-transparent"
                                    role="alert"
                                    aria-live="assertive"
                                    onClose={() => setShow3(false)}
                                    show={show3}
                                    delay={3000}
                                    autohide
                                    aria-atomic="true"
                                >
                                    <Toast.Header className="toast-header bg-warning text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="infoToast"
                                    className="toast colored-toast bg-info-transparent"
                                    role="alert"
                                    aria-live="assertive"
                                    onClose={() => setShow4(false)}
                                    show={show4}
                                    delay={3000}
                                    autohide
                                    aria-atomic="true"
                                >
                                    <Toast.Header className="bg-info text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="successToast"
                                    className="toast colored-toast bg-success-transparent"
                                    role="alert"
                                    aria-live="assertive"
                                    onClose={() => setShow5(false)}
                                    show={show5}
                                    delay={3000}
                                    autohide
                                    aria-atomic="true"
                                >
                                    <Toast.Header className="bg-success text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="dangerToast"
                                    className="toast colored-toast bg-danger-transparent"
                                    role="alert"
                                    aria-live="assertive"
                                    onClose={() => setShow6(false)}
                                    show={show6}
                                    delay={3000}
                                    autohide
                                    aria-atomic="true"
                                >
                                    <Toast.Header className="toast-header bg-danger text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Solid Background Toasts"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast3}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <Button
                                    variant="primary"
                                    type="button"
                                    className="btn btn-primary me-2 btn-wave"
                                    id="solidprimaryToastBtn"
                                    onClick={() => setShow7(true)}
                                >
                                    Primary
                                </Button>
                                <Button
                                    variant="secondary"
                                    type="button"
                                    className="btn btn-secondary me-2 btn-wave"
                                    id="solidsecondaryToastBtn"
                                    onClick={() => setShow8(true)}
                                >
                                    secondary
                                </Button>
                                <Button
                                    variant="warning"
                                    type="button"
                                    className="btn btn-warning me-2 btn-wave"
                                    id="solidwarningToastBtn"
                                    onClick={() => setShow9(true)}
                                >
                                    warning
                                </Button>
                                <Button
                                    variant="info"
                                    type="button"
                                    className="btn btn-info me-2 btn-wave"
                                    id="solidinfoToastBtn"
                                    onClick={() => setShow10(true)}
                                >
                                    info
                                </Button>
                                <Button
                                    variant="success"
                                    type="button"
                                    className="btn btn-success me-2 btn-wave"
                                    id="solidsuccessToastBtn"
                                    onClick={() => setShow11(true)}
                                >
                                    success
                                </Button>
                                <Button
                                    variant="danger"
                                    type="button"
                                    className="btn btn-danger me-2 btn-wave"
                                    id="soliddangerToastBtn"
                                    onClick={() => setShow12(true)}
                                >
                                    danger
                                </Button>
                            </div>
                            <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                                <Toast
                                    id="solid-primaryToast"
                                    className="toast colored-toast bg-primary text-fixed-white"
                                    onClose={() => setShow7(false)}
                                    show={show7}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="solid-secondaryToast"
                                    className="toast colored-toast bg-secondary text-fixed-white"
                                    onClose={() => setShow8(false)}
                                    show={show8}
                                    delay={3000}
                                    autohide
                                    aria-atomic="true"
                                >
                                    <Toast.Header className="toast-header bg-secondary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="solid-warningToast"
                                    className="toast colored-toast bg-warning text-fixed-white"
                                    onClose={() => setShow9(false)}
                                    show={show9}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-warning text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="solid-infoToast"
                                    className="toast colored-toast bg-info text-fixed-white"
                                    onClose={() => setShow10(false)}
                                    show={show10}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-info text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="solid-successToast"
                                    className="toast colored-toast bg-success text-fixed-white"
                                    onClose={() => setShow11(false)}
                                    show={show11}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-success text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast
                                    id="solid-dangerToast"
                                    className="toast colored-toast bg-danger text-fixed-white"
                                    onClose={() => setShow12(false)}
                                    show={show12}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-danger text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode
                        title="Toast Placements"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast1}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    onClick={() => setShow13(true)}
                                    className="btn  me-2 btn-wave"
                                    id="topleftToastBtn"
                                >
                                    Top Left
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    onClick={() => setShow14(true)}
                                    className="btn  me-2 btn-wave"
                                    id="topcenterToastBtn"
                                >
                                    Top Center
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    onClick={() => setShow15(true)}
                                    className="btn  me-2 btn-wave"
                                    id="toprightToastBtn"
                                >
                                    Top Right
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    onClick={() => setShow16(true)}
                                    className="btn  me-2 btn-wave"
                                    id="middleleftToastBtn"
                                >
                                    Middle Left
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    onClick={() => setShow17(true)}
                                    className="btn  me-2 btn-wave"
                                    id="middlecenterToastBtn"
                                >
                                    Middle Center
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    onClick={() => setShow18(true)}
                                    className="btn  me-2 btn-wave"
                                    id="middlerightToastBtn"
                                >
                                    Middle Right
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    onClick={() => setShow19(true)}
                                    className="btn  me-2 btn-wave"
                                    id="bottomleftToastBtn"
                                >
                                    Bottom Left
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    onClick={() => setShow20(true)}
                                    className="btn  me-2 btn-wave"
                                    id="bottomcenterToastBtn"
                                >
                                    Bottom Center
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    onClick={() => setShow21(true)}
                                    className="btn  me-2 btn-wave"
                                    id="bottomrightToastBtn"
                                >
                                    Bottom Right
                                </Button>
                            </div>
                            <ToastContainer className="toast-container position-fixed top-0 start-0 p-3">
                                <Toast
                                    id="topleft-Toast"
                                    className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow13(false)}
                                    show={show13}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
                                <Toast
                                    id="topcenter-Toast"
                                    className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow14(false)}
                                    show={show14}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                                <Toast
                                    id="topright-Toast"
                                    className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow15(false)}
                                    show={show15}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
                                <Toast
                                    id="middleleft-Toast"
                                    className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow16(false)}
                                    show={show16}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-50 start-50 translate-middle">
                                <Toast
                                    id="middlecenter-Toast"
                                    className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow17(false)}
                                    show={show17}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
                                <Toast
                                    id="middleright-Toast"
                                    className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow18(false)}
                                    show={show18}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed bottom-0 start-0 p-3">
                                <Toast
                                    id="bottomleft-Toast"
                                    className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow19(false)}
                                    show={show19}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
                                <Toast
                                    id="bottomcenter-Toast"
                                    className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow20(false)}
                                    show={show20}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed bottom-0 end-0 p-3">
                                <Toast
                                    id="bottomright-Toast"
                                    className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow21(false)}
                                    show={show21}
                                    delay={3000}
                                    autohide
                                >
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img
                                            className="bd-placeholder-img rounded me-2"
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt="..."
                                        />
                                        <strong className="me-auto">
                                            Nowa
                                        </strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode
                        title="Aligning Toast Using Flexbox"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={toast10}
                    >
                        <div className="example">
                            <div className="bd-example bg-light bd-example-toasts d-flex p-0 px-3">
                                <div
                                    aria-live="polite"
                                    aria-atomic="true"
                                    className="d-flex justify-content-center align-items-center w-100"
                                >
                                    <Toast
                                        show={showK}
                                        onClose={toggleShowK}
                                        className="toast fade show shadow-lg"
                                    >
                                        <Toast.Header className="text-default">
                                            <img
                                                src="../../../assets/images/brand-logos/favicon.ico"
                                                alt=""
                                                className="bd-placeholder-img rounded me-2"
                                            />
                                            <strong className="me-auto">
                                                Nowa
                                            </strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>
                                            {' '}
                                            Hello, world! This is a toast
                                            message.
                                        </Toast.Body>
                                    </Toast>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </>
    );
};
Toasts.layout = 'Contentlayout';

export default Toasts;
