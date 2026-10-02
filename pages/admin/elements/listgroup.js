import { Badge, Col, ListGroup, Row } from 'react-bootstrap';
import {
    ActiveButtons,
    BasicButtons,
    ContextualButtons,
    CustomButtons,
    HorizontalButtons,
    LinksButtons,
    ListbadgesButtons,
    SubheadingsButtons,
} from '../../../shared/data/elements/listgroupdata';
import {
    Listgroup1,
    Listgroup10,
    Listgroup11,
    Listgroup12,
    Listgroup13,
    Listgroup14,
    Listgroup15,
    Listgroup16,
    Listgroup2,
    Listgroup3,
    Listgroup4,
    Listgroup5,
    Listgroup6,
    Listgroup7,
    Listgroup8,
    Listgroup9,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';
const Listgroup = () => {
    return (
        <>
            <Seo title={'Listgroup'} />
            <Pageheader
                title="LIST GROUP"
                heading="Elements"
                active="List Group"
            />

            {/* <!-- row --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode
                        title="Basic List"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup1}
                    >
                        <div className="example">
                            <ListGroup as="ul">
                                {BasicButtons.map((idx) => (
                                    <ListGroup.Item as="li" key={Math.random()}>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm">
                                                <img src={idx.src} alt="img" />
                                            </span>
                                            <div className="ms-2 fw-semibold">
                                                {idx.text}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Active items"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup2}
                    >
                        <div className="example">
                            <ListGroup as="ul">
                                {ActiveButtons.map((idx) => (
                                    <ListGroup.Item
                                        as="li"
                                        className={`list-group-item ${idx.class1}`}
                                        aria-current="true"
                                        key={Math.random()}
                                    >
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <span className="fs-15 ">
                                                    <i
                                                        className={`bi bi-${idx.class}`}
                                                    ></i>
                                                </span>
                                            </div>
                                            <div className="ms-2">
                                                {idx.text}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Disabled items"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup3}
                    >
                        <div className="example">
                            <ListGroup as="ul">
                                <ListGroup.Item
                                    as="li"
                                    disabled
                                    className=""
                                    aria-disabled="true"
                                >
                                    A disabled item meant to be disabled
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Simply dummy text of the printing
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    There are many variations of passages
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    All the Lorem Ipsum generators
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    All the Lorem Ipsum generators
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Written in 45 BC. This book is a treatise on
                                    the theory
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode
                        title="Flush"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup4}
                    >
                        <div className="example">
                            <ListGroup variant="flush" className="">
                                <ListGroup.Item className="fw-semibold">
                                    <i className="bi bi-envelope align-middle me-2 text-muted"></i>
                                    Asish Trivedhi
                                    <span className="ms-1 text-muted fw-normal d-inline-block">
                                        (+1023-84534)
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item className="fw-semibold">
                                    <i className="bi bi-tiktok align-middle me-2 text-muted"></i>
                                    Alezander Russo
                                    <span className="ms-1 text-muted fw-normal d-inline-block">
                                        (+7546-12342)
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item className="fw-semibold">
                                    <i className="bi bi-whatsapp align-middle me-2 text-muted"></i>
                                    Karem Smith
                                    <span className="ms-1 text-muted fw-normal d-inline-block">
                                        (+9944-56632)
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item className="fw-semibold">
                                    <i className="bi bi-facebook align-middle me-2 text-muted"></i>
                                    Melissa Brien
                                    <span className="ms-1 text-muted fw-normal d-inline-block">
                                        (+1023-34323)
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item className="fw-semibold">
                                    <i className="bi bi-instagram align-middle me-2 text-muted"></i>
                                    Kamala Harris
                                    <span className="ms-1 text-muted fw-normal d-inline-block">
                                        (+91-63421)
                                    </span>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Links"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup5}
                    >
                        <div className="example">
                            <ListGroup className="list-group">
                                {LinksButtons.map((idx) => (
                                    <ListGroup.Item
                                        action
                                        className={`list-group-item-action ${idx.class1}`}
                                        key={Math.random()}
                                        aria-current="true"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <span
                                                    className={`avatar avatar-xs bg-${idx.class} text-${idx.color} avatar-rounded`}
                                                >
                                                    {idx.text1}
                                                </span>
                                            </div>
                                            <div className="ms-2">
                                                {idx.text}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup6}
                    >
                        <div className="example">
                            <ListGroup className="list-group">
                                <ListGroup.Item
                                    type="button"
                                    className="list-group-item-action active"
                                    aria-current="true"
                                >
                                    Simply dummy text of the printing
                                    <span className="badge float-end bg-primary">
                                        243
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    type="button"
                                    className="list-group-item-action"
                                >
                                    There are many variations of passages
                                    <span className="badge float-end bg-secondary-transparent">
                                        35
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    type="button"
                                    className="list-group-item-action"
                                >
                                    All the Lorem Ipsum generators
                                    <span className="badge float-end bg-info-transparent">
                                        132
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    type="button"
                                    className="list-group-item-action"
                                >
                                    All the Lorem Ipsum generators
                                    <span className="badge float-end bg-success-transparent">
                                        2525
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item
                                    type="button"
                                    className="list-group-item-action"
                                    disabled
                                >
                                    A disabled item meant to be disabled
                                    <span className="badge float-end bg-danger-transparent">
                                        21
                                    </span>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Contextual classes"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup7}
                    >
                        <div className="example">
                            <ListGroup as="ul">
                                {ContextualButtons.map((idx) => (
                                    <ListGroup.Item
                                        as="li"
                                        variant={idx.class}
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Contextual classes with hover styles"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup8}
                    >
                        <div className="example">
                            <ListGroup>
                                {ContextualButtons.map((idx) => (
                                    <ListGroup.Item
                                        variant={idx.class}
                                        action
                                        className=" list-group-item-action"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Solid Colored Lists"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup9}
                    >
                        <div className="example">
                            <ListGroup as="ul">
                                {ContextualButtons.map((idx) => (
                                    <ListGroup.Item
                                        className={`list-item-solid-${idx.class} ${idx.class1}`}
                                        as="li"
                                        key={Math.random()}
                                    >
                                        {idx.text}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Custom content"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup10}
                    >
                        <div className="example">
                            <ListGroup className="list-group">
                                {CustomButtons.map((idx) => (
                                    <ListGroup.Item
                                        action
                                        className={`list-group-item-action ${idx.class1}`}
                                        key={Math.random()}
                                        aria-current="true"
                                    >
                                        <div className="d-flex w-100 justify-content-between gap-1">
                                            <h6
                                                className={`mb-1 fw-semibold text-${idx.color}`}
                                            >
                                                {idx.heading}
                                            </h6>
                                            <small className={idx.class2}>
                                                {idx.text1}
                                            </small>
                                        </div>
                                        <p className="mb-1">{idx.text2}</p>
                                        <small>{idx.text3}.</small>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode
                        title="Sub headings"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup11}
                    >
                        <div className="example">
                            <ListGroup as="ol" numbered>
                                {SubheadingsButtons.map((idx) => (
                                    <ListGroup.Item
                                        as="li"
                                        className="list-group-item d-flex justify-content-between align-items-start"
                                        key={Math.random()}
                                    >
                                        <div className="ms-2 me-auto text-muted">
                                            <div className="fw-semibold fs-14 text-default">
                                                {idx.text1}
                                            </div>
                                            {idx.text2}
                                        </div>
                                        <Badge bg={idx.class}>
                                            {idx.text3}
                                        </Badge>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Numbered Lists"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup12}
                    >
                        <div className="example">
                            <ListGroup as="ol" numbered>
                                <ListGroup.Item as="li">
                                    Simply dummy text of the printing.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    There are many variations of passages.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    All the Lorem Ipsum generators.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Written in 45 BC. This book is a treatise on
                                    the theory.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Randomised words which don't look.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Always free from repetition, injected
                                    humour.
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="List With Checkboxes"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup13}
                    >
                        <div className="example">
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    <input
                                        className="form-check-input me-2 fw-semibold"
                                        type="checkbox"
                                        value=""
                                        aria-label="..."
                                        defaultChecked
                                    />
                                    Accurate information at any given point.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input
                                        className="form-check-input me-2 fw-semibold"
                                        type="checkbox"
                                        value=""
                                        aria-label="..."
                                    />
                                    Hearing the information and responding.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input
                                        className="form-check-input me-2 fw-semibold"
                                        type="checkbox"
                                        value=""
                                        aria-label="..."
                                        defaultChecked
                                    />
                                    Setting up and customizing your own sales.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input
                                        className="form-check-input me-2 fw-semibold"
                                        type="checkbox"
                                        value=""
                                        aria-label="..."
                                        defaultChecked
                                    />
                                    New Admin Launched.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input
                                        className="form-check-input me-2 fw-semibold"
                                        type="checkbox"
                                        value=""
                                        aria-label="..."
                                    />
                                    To maximize profits and improve
                                    productivity.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input
                                        className="form-check-input me-2 fw-semibold"
                                        type="checkbox"
                                        value=""
                                        aria-label="..."
                                    />
                                    To have a complete 360° overview of sales
                                    information, having.
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="List With Radios"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup14}
                    >
                        <div className="example">
                            <ListGroup className="list-group">
                                <ListGroup.Item className="list-group-item">
                                    <input
                                        className="form-check-input me-1"
                                        type="radio"
                                        value=""
                                        name="list-radio"
                                        defaultChecked
                                    />
                                    Accurate information at any given point.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input
                                        className="form-check-input me-1"
                                        type="radio"
                                        value=""
                                        name="list-radio"
                                        defaultChecked
                                    />
                                    Hearing the information and responding.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input
                                        className="form-check-input me-1"
                                        type="radio"
                                        value=""
                                        name="list-radio"
                                        defaultChecked
                                    />
                                    Setting up and customizing your own sales.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input
                                        className="form-check-input me-1"
                                        type="radio"
                                        value=""
                                        name="list-radio"
                                    />
                                    New Admin Launched.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input
                                        className="form-check-input me-1"
                                        type="radio"
                                        value=""
                                        name="list-radio"
                                    />
                                    To maximize profits and improve
                                    productivity.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input
                                        className="form-check-input me-1"
                                        type="radio"
                                        value=""
                                        name="list-radio"
                                    />
                                    To have a complete 360° overview of sales
                                    information, having.
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="List With badges"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup15}
                    >
                        <div className="example">
                            <ListGroup as="ul">
                                {ListbadgesButtons.map((idx) => (
                                    <ListGroup.Item
                                        key={Math.random()}
                                        className="list-group-item d-flex justify-content-between align-items-center fw-semibold"
                                    >
                                        {idx.text1}
                                        <Badge
                                            bg={idx.class}
                                            className={idx.color}
                                        >
                                            {idx.text2}
                                        </Badge>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Horizontal"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={Listgroup16}
                    >
                        <div className="example">
                            {HorizontalButtons.map((idx) => (
                                <ListGroup
                                    as="ul"
                                    className={`mb-2 list-group-horizontal${idx.class} `}
                                    key={Math.random()}
                                >
                                    <ListGroup.Item as="li">
                                        An item
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        A second item
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">
                                        A third item
                                    </ListGroup.Item>
                                </ListGroup>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </>
    );
};
Listgroup.layout = 'Contentlayout';

export default Listgroup;
