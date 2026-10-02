import { Fragment, useState } from 'react';
import { Alert, Button, Card, Col, Row } from 'react-bootstrap';
import {
    Additionalcontentalerts,
    avatarsizealert,
    Customizedalert1,
    Defaultalerts,
    Defaultsolidalerts,
    Imagealerts,
    Linkalerts,
    Outlinealerts,
    Roundedefaultalerts,
    Roundedoutlinealerts,
    Roundedsolidalerts,
    Roundewithbtnalerts,
    Shadowsolidalerts,
    Solidalerts,
    Svgalert,
    Svgalert1,
} from '../../../shared/data/elements/alertsdata';

import Link from 'next/link';
import {
    alert10,
    alert11,
    alert12,
    alert13,
    alert14,
    alert15,
    alert6,
    alert7,
    alert8,
    alert9,
    alerts1,
    alerts2,
    alerts3,
    alerts4,
    alerts5,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';

const Alerts = () => {
    const [alerts, setAlerts] = useState([]);

    const handleShowAlert = () => {
        const newAlert = {
            id: new Date().getTime(), // Unique ID for each alert
        };

        setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
    };

    // Function to close the alert when the close button is clicked
    const handleCloseAlert = (id) => {
        setAlerts((prevAlerts) =>
            prevAlerts.filter((alert) => alert.id !== id)
        );
    };

    const [show1, setShow1] = useState(true);
    const toggleShow1 = () => setShow1(!show1);

    const [show, setShow] = useState(true);
    const toggleShow = () => setShow(!show);

    const [show2, setShow2] = useState(true);
    const toggleShow2 = () => setShow2(!show2);

    const [show3, setShow3] = useState(true);
    const toggleShow3 = () => setShow3(!show3);

    const [show4, setShow4] = useState(true);
    const toggleShow4 = () => setShow4(!show4);

    //solidalertsremovefn
    const [solidalert, setSolidalert] = useState(Solidalerts);
    const handleRemove = (id) => {
        const newList = solidalert.filter((list) => list.id !== id);
        setSolidalert(newList);
    };

    //additionalcontent
    const [additionalcontentalert, setadditionalcontentalert] = useState(
        Additionalcontentalerts
    );
    const handleRemove7 = (id) => {
        const newList = additionalcontentalert.filter((list) => list.id !== id);
        setadditionalcontentalert(newList);
    };
    //outline
    const [outlinealert, setOutlinealert] = useState(Outlinealerts);
    const handleRemove1 = (id) => {
        const newList = outlinealert.filter((list) => list.id !== id);
        setOutlinealert(newList);
    };
    //outline
    const [shadowsolidalert, setShadowsolidalert] = useState(Shadowsolidalerts);
    const handleRemove2 = (id) => {
        const newList = shadowsolidalert.filter((list) => list.id !== id);
        setShadowsolidalert(newList);
    };
    //roundedsolid
    const [roundedsolidalert, setRoundedsolidalert] =
        useState(Roundedsolidalerts);
    const handleRemove3 = (id) => {
        const newList = roundedsolidalert.filter((list) => list.id !== id);
        setRoundedsolidalert(newList);
    };
    // //roundedoutline
    const [roundedoutlinealert, setRoundedOutlinealert] =
        useState(Roundedoutlinealerts);
    const handleRemove4 = (id) => {
        const newList = roundedoutlinealert.filter((list) => list.id !== id);
        setRoundedOutlinealert(newList);
    };
    //roundeddefault
    const [roundeddefaultalert, setRoundedDefaultalert] =
        useState(Roundedefaultalerts);
    const handleRemove5 = (id) => {
        const newList = roundeddefaultalert.filter((list) => list.id !== id);
        setRoundedDefaultalert(newList);
    };
    //roundedwithbtn
    const [roundedwithbtnalert, setRoundedwithbtnalert] =
        useState(Roundewithbtnalerts);
    const handleRemove6 = (id) => {
        const newList = roundedwithbtnalert.filter((list) => list.id !== id);
        setRoundedwithbtnalert(newList);
    };
    //svg1
    const [customized1alert, setcustomized1alert] = useState(Customizedalert1);
    const handleRemove12 = (id) => {
        const newList = customized1alert.filter((list) => list.id !== id);
        setcustomized1alert(newList);
    };
    const [imagesalert, setimagesalert] = useState(Imagealerts);
    const handleRemove8 = (id) => {
        const newList = imagesalert.filter((list) => list.id !== id);
        setimagesalert(newList);
    };
    //avatar
    const [avataralert, setavataralert] = useState(avatarsizealert);
    const handleRemove9 = (id) => {
        const newList = avataralert.filter((list) => list.id !== id);
        setavataralert(newList);
    };
    //svg
    const [svgalert, setsvgalert] = useState(Svgalert);
    const handleRemove10 = (id) => {
        const newList = svgalert.filter((list) => list.id !== id);
        setsvgalert(newList);
    };
    //svg1
    const [svg1alert, setsvg1alert] = useState(Svgalert1);
    const handleRemove11 = (id) => {
        const newList = svg1alert.filter((list) => list.id !== id);
        setsvg1alert(newList);
    };
    return (
        <Fragment>
            <Seo title={'Alerts'} />
            <Pageheader title="ALERTS" heading="Elements" active="Alerts" />

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Basic Alert"
                        code={alerts1}
                        customCardHeaderClass="justify-content-between"
                    >
                        <div className="example">
                            <Alert
                                variant="warning"
                                className="alert alert-warning alert-dismissible fade show"
                                role="alert"
                                show={show}
                            >
                                <strong>Holy guacamole!</strong> You should
                                check in on some of those fields below.
                                <Button
                                    variant=""
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                >
                                    <i
                                        className="bi bi-x"
                                        onClick={toggleShow}
                                    ></i>
                                </Button>
                            </Alert>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Live example"
                        code={alerts2}
                        customCardHeaderClass="justify-content-between"
                    >
                        <div className="example">
                            {alerts.map((alert) => (
                                <Alert
                                    key={alert.id}
                                    variant="success"
                                    className="alert alert-warning alert-dismissible fade show"
                                    role="alert"
                                >
                                    <strong>Holy guacamole!</strong> You should
                                    check in on some of those fields below.
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() =>
                                            setAlerts((prevAlerts) =>
                                                prevAlerts.filter(
                                                    (a) => a.id !== alert.id
                                                )
                                            )
                                        }
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                </Alert>
                            ))}
                            <Button
                                type="button"
                                className="mt-2"
                                onClick={handleShowAlert}
                            >
                                Show live alert
                            </Button>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Default alerts"
                        customCardHeaderClass="justify-content-between"
                        customCardClass="custom-card"
                        code={alerts3}
                    >
                        <div className="example">
                            {Defaultalerts.map((idx) => (
                                <Alert
                                    variant={idx.class}
                                    role="alert"
                                    key={Math.random()}
                                >
                                    {idx.text}
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Links in alerts"
                        customCardClass="custom-card"
                        code={alerts4}
                    >
                        <div className="example">
                            {Linkalerts.map((idx) => (
                                <Alert
                                    variant={idx.class}
                                    role="alert"
                                    key={Math.random()}
                                >
                                    {idx.text1}{' '}
                                    <Link href="#!" className="alert-link">
                                        {idx.text2}
                                    </Link>
                                    {idx.text3}
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Solid Colored Alerts"
                        customCardClass="custom-card"
                        code={alerts5}
                    >
                        <div className="example">
                            {solidalert.map((idx) => (
                                <Alert
                                    variant={idx.class}
                                    className={`alert-dismissible fade show ${idx.color}`}
                                    key={Math.random()}
                                >
                                    {idx.text}
                                    <Button
                                        variant=""
                                        type="button"
                                        className={`btn-close ${idx.color}`}
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => handleRemove(idx.id)}
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Outline Alerts"
                        customCardClass="custom-card"
                        code={alert6}
                    >
                        <div className="example">
                            {outlinealert.map((idx) => (
                                <Alert
                                    variant={idx.class}
                                    className="alert-dismissible fade show"
                                    key={Math.random()}
                                >
                                    A simple outline primary alert—check it out!
                                    <Button
                                        variant=""
                                        type="button"
                                        className={`btn-close ${idx.color}`}
                                        onClick={() => handleRemove1(idx.id)}
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Solid Alerts With Different Shadows"
                        customCardClass="custom-card"
                        code={alert7}
                    >
                        <div className="example">
                            {shadowsolidalert.map((idx) => (
                                <Alert
                                    variant={idx.class}
                                    className={`alert shadow-${idx.size} alert-dismissible fade show`}
                                    key={Math.random()}
                                >
                                    {idx.text}
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        onClick={() => handleRemove2(idx.id)}
                                        aria-label="Close"
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Default Alerts With Different Shadows"
                        customCardClass="custom-card"
                        code={alert8}
                    >
                        <div className="example">
                            {Defaultsolidalerts.map((idx) => (
                                <Alert
                                    variant={idx.class}
                                    className={`alert shadow-${idx.size}`}
                                    key={Math.random()}
                                >
                                    A simple primary alert with small
                                    shadow—check it out!
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>

                <Col xl={6}>
                    <ShowCode
                        title="Rounded Default Alerts"
                        customCardClass="custom-card"
                        code={alert9}
                    >
                        <div className="example">
                            {roundeddefaultalert.map((idx) => (
                                <Alert
                                    variant={idx.class}
                                    className="alert rounded-pill alert-dismissible fade show"
                                    key={Math.random()}
                                >
                                    {idx.text}
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => handleRemove5(idx.id)}
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Rounded Alerts With Custom Close Button"
                        customCardClass="custom-card"
                        code={alert10}
                    >
                        <div className="example">
                            {roundedwithbtnalert.map((idx) => (
                                <Alert
                                    variant={idx.class}
                                    className="alert rounded-pill alert-dismissible custom-rounded-alerts fade show"
                                    key={Math.random()}
                                >
                                    {idx.text}
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close custom-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => handleRemove6(idx.id)}
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Alerts with icons"
                        customCardClass="custom-card"
                        code={alert11}
                    >
                        <div className="example">
                            <Alert
                                variant="primary"
                                className="alert d-flex align-items-center"
                                role="alert"
                            >
                                <svg
                                    className="flex-shrink-0 me-2 svg-primary"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem"
                                    viewBox="0 0 24 24"
                                    width="1.5rem"
                                    fill="#000000"
                                >
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                </svg>
                                <div>An example alert with an icon</div>
                            </Alert>
                            <Alert
                                variant="success"
                                className="alert  d-flex align-items-center"
                                role="alert"
                            >
                                <svg
                                    className="flex-shrink-0 me-2 svg-success"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem"
                                    viewBox="0 0 24 24"
                                    width="1.5rem"
                                    fill="#000000"
                                >
                                    <path
                                        d="M0 0h24v24H0V0zm0 0h24v24H0V0z"
                                        fill="none"
                                    />
                                    <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                </svg>
                                <div>An example success alert with an icon</div>
                            </Alert>
                            <Alert
                                variant="warning"
                                className="alert  d-flex align-items-center"
                                role="alert"
                            >
                                <svg
                                    className="flex-shrink-0 me-2 svg-warning"
                                    xmlns="http://www.w3.org/2000/svg"
                                    enableBackground="new 0 0 24 24"
                                    height="1.5rem"
                                    viewBox="0 0 24 24"
                                    width="1.5rem"
                                    fill="#000000"
                                >
                                    <g>
                                        <rect
                                            fill="none"
                                            height="24"
                                            width="24"
                                        />
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                                <polygon points="13,16 11,16 11,18 13,18" />
                                                <polygon points="13,10 11,10 11,15 13,15" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <div>An example warning alert with an icon</div>
                            </Alert>
                            <Alert
                                variant="danger"
                                className="alert  d-flex align-items-center"
                                role="alert"
                            >
                                <svg
                                    className="flex-shrink-0 me-2 svg-danger"
                                    xmlns="http://www.w3.org/2000/svg"
                                    enableBackground="new 0 0 24 24"
                                    height="1.5rem"
                                    viewBox="0 0 24 24"
                                    width="1.5rem"
                                    fill="#000000"
                                >
                                    <g>
                                        <rect
                                            fill="none"
                                            height="24"
                                            width="24"
                                        />
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                                <rect
                                                    height="6"
                                                    width="2"
                                                    x="11"
                                                    y="7"
                                                />
                                                <rect
                                                    height="2"
                                                    width="2"
                                                    x="11"
                                                    y="15"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <div>An example danger alert with an icon</div>
                            </Alert>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Customized Alerts With SVG's"
                        customCardClass="custom-card"
                        code={alert12}
                    >
                        <div className="example">
                            {customized1alert.map((idx) => (
                                <Alert
                                    variant={idx.color}
                                    className="alert alert-dismissible fade show custom-alert-icon shadow-sm"
                                    role="alert"
                                    key={Math.random()}
                                >
                                    <svg
                                        className={`me-2 svg-${idx.color}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.5rem"
                                        viewBox="0 0 24 24"
                                        width="1.5rem"
                                        fill="#000000"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d={idx.class1} />
                                    </svg>
                                    A customized {idx.color} alert with an icon
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => handleRemove12(idx.id)}
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Alerts With Images"
                        customCardClass="custom-card"
                        code={alert13}
                    >
                        <div className="example">
                            {imagesalert.map((idx) => (
                                <Alert
                                    variant={idx.color}
                                    className="alert alert-img alert-dismissible fase show rounded-pill flex-wrap"
                                    role="alert"
                                    key={Math.random()}
                                >
                                    <div className="avatar avatar-sm me-3 avatar-rounded">
                                        <img src={idx.src1} alt="img" />
                                    </div>
                                    <div>
                                        A simple {idx.color} alert with
                                        image—check it out!
                                    </div>
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => handleRemove8(idx.id)}
                                    >
                                        <i
                                            className={`bi bi-x  ${idx.class}`}
                                        ></i>
                                    </Button>
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Alerts With Different size Images"
                        customCardClass="custom-card"
                        code={alert14}
                    >
                        <div className="example">
                            {avataralert.map((idx) => (
                                <Alert
                                    variant={idx.color}
                                    className="alert alert-img alert-dismissible fase show flex-wrap"
                                    role="alert"
                                    key={Math.random()}
                                >
                                    <div
                                        className={`avatar avatar-${idx.class} me-3`}
                                    >
                                        <img src={idx.src1} alt="img" />
                                    </div>
                                    <div>
                                        A simple {idx.color} alert with
                                        image—check it out!
                                    </div>
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={() => handleRemove9(idx.id)}
                                    >
                                        <i
                                            className={`bi bi-x ${idx.class1}`}
                                        ></i>
                                    </Button>
                                </Alert>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <Row>
                        <Col
                            xxl={3}
                            xl={6}
                            lg={6}
                            md={6}
                            sm={6}
                            className="col-12"
                        >
                            <div className="card bg-white border-0">
                                <Alert
                                    variant="primary"
                                    className="alert custom-alert1"
                                    show={show1}
                                >
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close ms-auto"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={toggleShow1}
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg
                                            className="custom-alert-icon svg-primary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1.5rem"
                                            viewBox="0 0 24 24"
                                            width="1.5rem"
                                            fill="#000000"
                                        >
                                            <path
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                        </svg>
                                        <h5>Information?</h5>
                                        <p className="">
                                            This alert is created to just show
                                            the related information.
                                        </p>
                                        <div className="">
                                            <Button
                                                variant="outline-danger"
                                                className="btn btn-sm btn-outline-danger m-1"
                                            >
                                                Decline
                                            </Button>
                                            <Button
                                                variant="primary"
                                                className="btn btn-sm btn-primary m-1"
                                            >
                                                Accept
                                            </Button>
                                        </div>
                                    </div>
                                </Alert>
                            </div>
                        </Col>
                        <Col
                            xxl={3}
                            xl={6}
                            lg={6}
                            md={6}
                            sm={6}
                            className="col-12"
                        >
                            <Card className=" bg-white border-0">
                                <Alert
                                    variant="secondary"
                                    className="alert custom-alert1 "
                                    show={show2}
                                >
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close ms-auto"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={toggleShow2}
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg
                                            className="custom-alert-icon svg-secondary"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1.5rem"
                                            viewBox="0 0 24 24"
                                            width="1.5rem"
                                            fill="#000000"
                                        >
                                            <path
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                        <h5>Confirmed</h5>
                                        <p className="">
                                            This alert is created to just show
                                            the confirmation message.
                                        </p>
                                        <div className="">
                                            <Button className="btn btn-sm btn-secondary m-1">
                                                Close
                                            </Button>
                                        </div>
                                    </div>
                                </Alert>
                            </Card>
                        </Col>
                        <Col
                            xxl={3}
                            xl={6}
                            lg={6}
                            md={6}
                            sm={6}
                            className="col-12"
                        >
                            <Card className="bg-white border-0">
                                <Alert
                                    variant="warning"
                                    className="alert custom-alert1 "
                                    show={show3}
                                >
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close ms-auto"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={toggleShow3}
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg
                                            className="custom-alert-icon svg-warning"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1.5rem"
                                            viewBox="0 0 24 24"
                                            width="1.5rem"
                                            fill="#000000"
                                        >
                                            <path
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                        </svg>
                                        <h5>Warning</h5>
                                        <p className="">
                                            This alert is created to just show
                                            the warning message.
                                        </p>
                                        <div className="">
                                            <Button
                                                variant="outline-secondary"
                                                className="btn btn-sm btn-outline-secondary m-1"
                                            >
                                                Back
                                            </Button>
                                            <Button className="btn btn-sm btn-warning m-1">
                                                Continue
                                            </Button>
                                        </div>
                                    </div>
                                </Alert>
                            </Card>
                        </Col>
                        <Col
                            xxl={3}
                            xl={6}
                            lg={6}
                            md={6}
                            sm={6}
                            className="col-12"
                        >
                            <Card className="bg-white border-0">
                                <Alert
                                    variant="danger"
                                    className="alert custom-alert1 "
                                    show={show4}
                                >
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn-close ms-auto"
                                        data-bs-dismiss="alert"
                                        aria-label="Close"
                                        onClick={toggleShow4}
                                    >
                                        <i className="bi bi-x"></i>
                                    </Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg
                                            className="custom-alert-icon svg-danger"
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="1.5rem"
                                            viewBox="0 0 24 24"
                                            width="1.5rem"
                                            fill="#000000"
                                        >
                                            <path
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
                                        </svg>
                                        <h5>danger</h5>
                                        <p className="">
                                            This alert is created to just show
                                            the danger message.
                                        </p>
                                        <div className="">
                                            <Button className="btn btn-sm btn-danger m-1">
                                                Delete
                                            </Button>
                                        </div>
                                    </div>
                                </Alert>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Row>
                                {svgalert.map((idx) => (
                                    <Col xl={3} key={Math.random()}>
                                        <Card className="border-0">
                                            <Alert
                                                variant={idx.color}
                                                className={`alert  border border-${idx.color} mb-0 p-2"`}
                                            >
                                                <div className="d-flex align-items-start">
                                                    <div className="me-2">
                                                        <svg
                                                            className={`flex-shrink-0 svg-${idx.color}`}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1.5rem"
                                                            viewBox="0 0 24 24"
                                                            width="1.5rem"
                                                            fill="#000000"
                                                        >
                                                            <path
                                                                d="M0 0h24v24H0V0z"
                                                                fill="none"
                                                            />
                                                            <path
                                                                d={idx.class1}
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div
                                                        className={`text-${idx.color} w-100`}
                                                    >
                                                        <div className="fw-semibold d-flex justify-content-between">
                                                            {idx.text1}
                                                            <Button
                                                                variant=""
                                                                type="button"
                                                                className="btn-close p-0"
                                                                data-bs-dismiss="alert"
                                                                aria-label="Close"
                                                                onClick={() =>
                                                                    handleRemove10(
                                                                        idx.id
                                                                    )
                                                                }
                                                            >
                                                                <i className="bi bi-x"></i>
                                                            </Button>
                                                        </div>
                                                        <div className="fs-12 op-8 mb-1">
                                                            {idx.text2}
                                                        </div>
                                                        <div className="fs-12">
                                                            <Link
                                                                href="#!"
                                                                className={`text-${idx.class} fw-semibold me-2 d-inline-block`}
                                                            >
                                                                cancel
                                                            </Link>
                                                            <Link
                                                                href="#!"
                                                                className={`text-${idx.color} fw-semibold`}
                                                            >
                                                                open
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Alert>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col xl={12}>
                            <Row>
                                {svg1alert.map((idx) => (
                                    <Col xl={3} key={Math.random()}>
                                        <div className="card border-0">
                                            <Alert
                                                variant={`solid-${idx.color}`}
                                                className={`alert  border border-${idx.color} mb-0 p-2`}
                                            >
                                                <div className="d-flex align-items-start">
                                                    <div className="me-2">
                                                        <svg
                                                            className="flex-shrink-0 svg-white"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            height="1.5rem"
                                                            viewBox="0 0 24 24"
                                                            width="1.5rem"
                                                            fill="#000000"
                                                        >
                                                            <path
                                                                d="M0 0h24v24H0V0z"
                                                                fill="none"
                                                            />
                                                            <path
                                                                d={idx.class1}
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text-fixed-white w-100">
                                                        <div className="fw-semibold d-flex justify-content-between">
                                                            {idx.text1}
                                                            <Button
                                                                variant=""
                                                                onClick={() =>
                                                                    handleRemove11(
                                                                        idx.id
                                                                    )
                                                                }
                                                                type="button"
                                                                className="btn-close p-0"
                                                                data-bs-dismiss="alert"
                                                                aria-label="Close"
                                                            >
                                                                <i className="bi bi-x"></i>
                                                            </Button>
                                                        </div>
                                                        <div className="fs-12 op-8 mb-1">
                                                            {idx.text2}
                                                        </div>
                                                        <div className="fs-12">
                                                            <Link
                                                                href="#!"
                                                                className="text-fixed-white fw-semibold me-2 op-7"
                                                            >
                                                                {idx.btn1}
                                                            </Link>
                                                            <Link
                                                                href="#!"
                                                                className="text-fixed-white fw-semibold"
                                                            >
                                                                {idx.btn2}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Alert>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                        <Col xl={12}>
                            <div className="example">
                                <ShowCode
                                    title="Additional content"
                                    customCardClass="custom-card"
                                    code={alert15}
                                >
                                    <div className="row gy-3">
                                        {additionalcontentalert.map((idx) => (
                                            <Col xl={6} key={Math.random()}>
                                                <Alert
                                                    variant={idx.class}
                                                    className="overflow-hidden p-0"
                                                    role="alert"
                                                >
                                                    <div
                                                        className={`p-3 bg-${idx.class} text-fixed-white d-flex justify-content-between`}
                                                    >
                                                        <h6 className="aletr-heading text-fixed-white mb-0">
                                                            Thank you for
                                                            reporting this.
                                                        </h6>
                                                        <Button
                                                            type="button"
                                                            variant=""
                                                            className="btn-close p-0 text-fixed-white"
                                                            onClick={() =>
                                                                handleRemove7(
                                                                    idx.id
                                                                )
                                                            }
                                                            data-bs-dismiss="alert"
                                                            aria-label="Close"
                                                        >
                                                            <i className="bi bi-x"></i>
                                                        </Button>
                                                    </div>
                                                    <hr className="my-0" />
                                                    <div className="p-3">
                                                        <p className="mb-0">
                                                            {idx.text2}{' '}
                                                            <Link
                                                                href="#!"
                                                                className="fw-semibold text-decoration-underline"
                                                            >
                                                                {idx.text3}
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </Alert>
                                            </Col>
                                        ))}
                                    </div>
                                </ShowCode>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </Fragment>
    );
};
Alerts.layout = 'Contentlayout';
export default Alerts;
