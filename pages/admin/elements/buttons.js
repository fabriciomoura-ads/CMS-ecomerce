import { Button, Col, Row } from 'react-bootstrap';
import {
    ColoredButtons,
    DefaultButtons,
    GhostButtons,
    GradientButtons,
    LightButtons,
    OutlineButtons,
    SocialIconButtons,
} from '../../../shared/data/elements/buttonsdata';
import {
    button1,
    button10,
    button11,
    button12,
    button13,
    button14,
    button15,
    button16,
    button17,
    button18,
    button19,
    button2,
    button20,
    button21,
    button22,
    button23,
    button24,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8,
    button9,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';
const Buttons = () => {
    return (
        <>
            <Seo title={'Buttons'} />
            <Pageheader title="BUTTONS" heading="Elements" active="Buttons" />

            {/* <!-- row  --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Default Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button1}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {DefaultButtons.map((idx) => (
                                    <Button
                                        variant={idx.class}
                                        type="button"
                                        className="btn-wave waves-effect waves-light me-2"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Rounded Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button2}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {DefaultButtons.map((idx) => (
                                    <Button
                                        variant={idx.class}
                                        type="button"
                                        className="rounded-pill btn-wave me-2"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Light Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button3}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {LightButtons.map((idx) => (
                                    <Button
                                        type="button"
                                        variant={idx.class}
                                        className="btn btn-wave me-2"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Light Rounded Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button4}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {LightButtons.map((idx) => (
                                    <Button
                                        type="button"
                                        variant={idx.class}
                                        className="btn rounded-pill btn-wave me-2"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Outline Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button5}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {OutlineButtons.map((idx) => (
                                    <Button
                                        type="button"
                                        variant={idx.class}
                                        className="btn  btn-wave me-2"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Rounded Outline Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button6}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {OutlineButtons.map((idx) => (
                                    <Button
                                        type="button"
                                        variant={idx.class}
                                        className="btn rounded-pill btn-wave me-2"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Gradient Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button7}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {GradientButtons.map((idx) => (
                                    <Button
                                        type="button"
                                        variant={idx.class}
                                        className="btn btn-wave me-2"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Rounded Gradient Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button8}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {GradientButtons.map((idx) => (
                                    <Button
                                        type="button"
                                        variant={idx.class}
                                        className="btn rounded-pill btn-wave me-2"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="disabled state with anchor tags"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button9}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <div className="mb-4">
                                    <Button
                                        type="button"
                                        variant="primary"
                                        className="btn"
                                        disabled
                                    >
                                        Primary button
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        className="btn"
                                        disabled
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline-primary"
                                        className="btn b"
                                        disabled
                                    >
                                        Primary button
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline-secondary"
                                        className="btn "
                                        disabled
                                    >
                                        Button
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        variant="primary"
                                        disabled
                                        className="btn"
                                        role="button"
                                    >
                                        Primary link
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        disabled
                                        className="btn"
                                        role="button"
                                    >
                                        Link
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="button plugin toggle states"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button10}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <div className="mb-4">
                                    <Button
                                        type="button"
                                        variant="primary"
                                        className="btn btn-wave"
                                    >
                                        Toggle button
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        active
                                        className="btn  btn-wave"
                                    >
                                        Active toggle button
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="teal"
                                        className="btn btn-wave"
                                        disabled
                                    >
                                        Disabled toggle button
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        variant="primary"
                                        href="#!"
                                        className="btn btn-wave"
                                        role="button"
                                    >
                                        Toggle link
                                    </Button>
                                    <Button
                                        href="#!"
                                        variant="secondary"
                                        active
                                        className="btn btn-wave"
                                        role="button"
                                    >
                                        Active toggle link
                                    </Button>
                                    <Button
                                        variant="teal"
                                        className="btn  btn-wave"
                                        role="button"
                                        disabled
                                    >
                                        Disabled toggle link
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Loading Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button11}
                    >
                        <div className="example">
                            <div className="btn-list d-md-flex flex-wrap">
                                <Button
                                    variant="primary"
                                    className="btn  btn-loader"
                                >
                                    <span className="me-2">Loading</span>
                                    <span className="loading">
                                        <i className="ri-loader-2-fill fs-16"></i>
                                    </span>
                                </Button>
                                <Button
                                    variant="outline-secondary"
                                    className="btn btn-loader"
                                >
                                    <span className="me-2">Loading</span>
                                    <span className="loading">
                                        <i className="ri-loader-2-fill fs-16"></i>
                                    </span>
                                </Button>
                                <Button
                                    variant="info-transparent"
                                    className="btn  btn-loader"
                                >
                                    <span className="me-2">Loading</span>
                                    <span className="loading">
                                        <i className="ri-loader-4-line fs-16"></i>
                                    </span>
                                </Button>
                                <Button
                                    variant="warning-transparent"
                                    className="btn  btn-loader"
                                >
                                    <span className="me-2">Loading</span>
                                    <span className="loading">
                                        <i className="ri-loader-5-line fs-16"></i>
                                    </span>
                                </Button>
                                <Button
                                    variant="success"
                                    className="btn btn-loader"
                                    disabled
                                >
                                    <span className="me-2">Disabled</span>
                                    <span className="loading">
                                        <i className="ri-refresh-line fs-16"></i>
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Icon Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button12}
                    >
                        <div className="example">
                            <div className="btn-list d-md-flex d-block">
                                <div className="mb-md-0 mb-2">
                                    <Button
                                        variant="primary"
                                        className="btn btn-icon  btn-wave waves-effect waves-light"
                                    >
                                        <i className="ri-bank-fill"></i>
                                    </Button>
                                    <Button
                                        variant="info"
                                        className="btn btn-icon  btn-wave waves-effect waves-light"
                                    >
                                        <i className="ri-medal-line"></i>
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="btn btn-icon  btn-wave waves-effect waves-light"
                                    >
                                        <i className="ri-archive-line"></i>
                                    </Button>
                                    <Button
                                        variant="warning"
                                        className="btn btn-icon  btn-wave waves-effect waves-light me-5"
                                    >
                                        <i className="ri-calendar-2-line"></i>
                                    </Button>
                                </div>
                                <div className="mb-md-0 mb-2">
                                    <Button
                                        variant="primary-transparent"
                                        className="btn btn-icon rounded-pill btn-wave waves-effect waves-light"
                                    >
                                        <i className="ri-home-smile-line"></i>
                                    </Button>
                                    <Button
                                        variant="secondary-transparent"
                                        className="btn btn-icon  rounded-pill btn-wave waves-effect waves-light"
                                    >
                                        <i className="ri-delete-bin-line"></i>
                                    </Button>
                                    <Button
                                        variant="success-transparent"
                                        className="btn btn-icon  rounded-pill btn-wave waves-effect waves-light"
                                    >
                                        <i className="ri-notification-3-line"></i>
                                    </Button>
                                    <Button
                                        variant="danger-transparent"
                                        className="btn btn-icon  rounded-pill btn-wave me-5 waves-effect waves-light"
                                    >
                                        <i className="ri-chat-settings-line"></i>
                                    </Button>
                                </div>
                                <div className="">
                                    <Button
                                        variant="outline-primary"
                                        className="btn btn-icon  rounded-pill btn-wave waves-effect waves-light"
                                    >
                                        <i className="ri-phone-line"></i>
                                    </Button>
                                    <Button
                                        variant="outline-teal"
                                        className="btn btn-icon  rounded-pill btn-wave waves-effect waves-light "
                                    >
                                        <i className="ri-customer-service-2-line"></i>
                                    </Button>
                                    <Button
                                        variant="outline-success"
                                        className="btn btn-icon  rounded-pill btn-wave waves-effect waves-light "
                                    >
                                        <i className="ri-live-line"></i>
                                    </Button>
                                    <Button
                                        variant="outline-secondary"
                                        className="btn btn-icon  rounded-pill btn-wave waves-effect waves-light"
                                    >
                                        <i className="ri-save-line"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Ghost Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button13}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {GhostButtons.map((idx) => (
                                    <Button
                                        type="button"
                                        variant={idx.class}
                                        className="btn btn-wave me-2"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Button tags"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button14}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <Button
                                    variant="primary"
                                    className="btn  btn-wave"
                                    href="#!"
                                    role="button"
                                >
                                    Link
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="btn  btn-wave"
                                    type="submit"
                                >
                                    Button
                                </Button>
                                <Button
                                    variant="info"
                                    as="input"
                                    className="btn "
                                    type="button"
                                    value="Input"
                                />
                                <Button
                                    variant="warning"
                                    as="input"
                                    className="btn"
                                    type="submit"
                                    value="Submit"
                                />
                                <Button
                                    variant="success"
                                    as="input"
                                    className="btn "
                                    type="reset"
                                    value="Reset"
                                />
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title=" Link functionally caveat"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button15}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <Button
                                    variant="primary"
                                    disabled
                                    className="btn"
                                    tabIndex={-1}
                                    role="button"
                                >
                                    Primary link
                                </Button>
                                <Button
                                    variant="secondary"
                                    disabled
                                    className="btn"
                                    tabIndex={-1}
                                    role="button"
                                >
                                    Link
                                </Button>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title=" Social Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button16}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {SocialIconButtons.map((idx) => (
                                    <Button
                                        variant={idx.class1}
                                        className="btn btn-icon btn-facebook btn-wave waves-effect waves-light"
                                        key={Math.random()}
                                    >
                                        <i
                                            className={`ri-${idx.class}-line`}
                                        ></i>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode
                                title="Sizes"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={button17}
                            >
                                <div className="example">
                                    <div className="btn-list">
                                        <Button
                                            type="button"
                                            variant="primary"
                                            className="btn  btn-sm btn-wave"
                                        >
                                            Small button
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className="btn  btn-wave"
                                        >
                                            Default button
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="success"
                                            className="btn  btn-lg btn-wave"
                                        >
                                            Large button
                                        </Button>
                                    </div>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode
                                title="Button Widths"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={button18}
                            >
                                <div className="example">
                                    <div className="btn-list">
                                        <Button
                                            type="button"
                                            variant="primary"
                                            className="btn btn-w-xs btn-wave"
                                        >
                                            XS
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            className="btn btn-w-sm btn-wave"
                                        >
                                            SM
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="warning"
                                            className="btn btn-w-md btn-wave"
                                        >
                                            MD
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="info"
                                            className="btn btn-w-lg btn-wave"
                                        >
                                            LG
                                        </Button>
                                    </div>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Buttons With Different Shadows"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button19}
                    >
                        <div className="example">
                            <div className="btn-list d-flex">
                                <div className="me-5">
                                    <Button
                                        variant="primary"
                                        className="btn  shadow-sm btn-wave"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className="btn btn-primary shadow btn-wave"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className="btn btn-primary shadow-lg btn-wave"
                                    >
                                        Button
                                    </Button>
                                </div>
                                <div>
                                    <Button
                                        variant="secondary"
                                        className="btn  btn-sm shadow-sm btn-wave"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="info"
                                        className="btn  shadow btn-wave"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="success"
                                        className="btn btn-lg  shadow-lg btn-wave"
                                    >
                                        Button
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Different Colored Buttons With Shadows"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button20}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {ColoredButtons.map((idx) => (
                                    <Button
                                        variant={idx.class}
                                        className={`btn shadow-${idx.class} btn-wave`}
                                        key={Math.random()}
                                    >
                                        Button
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Raised Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button21}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {ColoredButtons.map((idx) => (
                                    <Button
                                        variant={idx.class}
                                        className="btn  btn-raised-shadow btn-wave"
                                        key={Math.random()}
                                    >
                                        Button
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Label Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button22}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <Button className="btn btn-primary label-btn">
                                    <i className="ri-chat-smile-line label-btn-icon me-2"></i>
                                    Primary
                                </Button>
                                <Button className="btn btn-secondary label-btn">
                                    <i className="ri-settings-4-line label-btn-icon me-2"></i>
                                    Secondary
                                </Button>
                                <Button className="btn btn-warning label-btn rounded-pill">
                                    <i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
                                    Warning
                                </Button>
                                <Button className="btn btn-info label-btn rounded-pill">
                                    <i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
                                    Info
                                </Button>
                                <Button className="btn btn-success label-btn label-end">
                                    Success
                                    <i className="ri-thumb-up-line label-btn-icon ms-2"></i>
                                </Button>
                                <Button className="btn btn-danger label-btn label-end rounded-pill">
                                    Cancel
                                    <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
                                </Button>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode
                        title="Custom Buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button23}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <Button
                                    variant="info"
                                    className="btn  custom-button rounded-pill"
                                >
                                    <span className="custom-btn-icons">
                                        <i className="ri-twitter-x-line text-info"></i>
                                    </span>
                                    Twitter
                                </Button>
                                <Button
                                    variant="teal-light"
                                    className="btn  btn-border-down"
                                >
                                    Border
                                </Button>
                                <Button
                                    variant="secondary-light"
                                    className="btn  btn-border-start"
                                >
                                    Border
                                </Button>
                                <Button
                                    variant="purple-light"
                                    className="btn  btn-border-end"
                                >
                                    Border
                                </Button>
                                <Button
                                    variant="warning-light"
                                    className="btn  btn-border-top"
                                >
                                    Border
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="btn  btn-glare"
                                >
                                    <span>Glare Button</span>
                                </Button>
                                <Button
                                    variant="danger"
                                    className="btn  btn-hover btn-hover-animate"
                                >
                                    Like
                                </Button>
                                <Button
                                    variant="success"
                                    className="btn  btn-darken-hover"
                                >
                                    Hover
                                </Button>
                                <Button
                                    variant="orange"
                                    className="btn  btn-custom-border"
                                >
                                    Hover
                                </Button>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12}>
                    <ShowCode
                        title="Block buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={button24}
                    >
                        <div className="example">
                            <div className="btn-list">
                                <div className="d-grid gap-2 mb-4">
                                    <Button
                                        variant="primary"
                                        className="btn  btn-wave"
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        className="btn  btn-wave"
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                </div>
                                <div className="d-grid gap-2 d-md-block">
                                    <Button
                                        variant="info"
                                        className="btn  btn-wave"
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="success"
                                        className="btn  btn-wave"
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <Button
                                        variant="danger"
                                        className="btn  btn-wave"
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="warning"
                                        className="btn  btn-wave"
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Button
                                        variant="teal"
                                        className="btn me-md-2 btn-wave"
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="purple"
                                        className="btn  btn-wave"
                                        type="button"
                                    >
                                        Button
                                    </Button>
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
Buttons.layout = 'Contentlayout';

export default Buttons;
