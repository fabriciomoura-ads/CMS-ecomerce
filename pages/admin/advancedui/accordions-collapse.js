import { Fragment, useState } from 'react';
import { Accordion, Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import {
    accordion1,
    accordion10,
    accordion11,
    accordion12,
    accordion13,
    accordion14,
    accordion15,
    accordion16,
    accordion2,
    accordion3,
    accordion4,
    accordion5,
    accordion6,
    accordion7,
    accordion8,
    accordion9,
} from '../../../shared/data/prismdata/advanceuidata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';

const Accordionsandcollapse = () => {
    //MULTIPLE TARGETS

    const [isFirstCollapsed, setisFirstCollapsed] = useState(false);
    const [isSecondCollapsed, setisSecondCollapsed] = useState(false);

    const first = () => {
        if (isFirstCollapsed === false) {
            setisFirstCollapsed(true);
        } else if (isFirstCollapsed === true) {
            setisFirstCollapsed(false);
        }
    };

    const second = () => {
        if (isSecondCollapsed === true) {
            setisSecondCollapsed(false);
        } else if (isSecondCollapsed === false) {
            setisSecondCollapsed(true);
        }
    };

    const both = () => {
        if (isSecondCollapsed === true) {
            setisSecondCollapsed(false);
        } else if (isSecondCollapsed === false) {
            setisSecondCollapsed(true);
        }
        if (isFirstCollapsed === true) {
            setisFirstCollapsed(false);
        } else if (isFirstCollapsed === false) {
            setisFirstCollapsed(true);
        }
    };

    const [open, setOpen] = useState(false);

    const [openb, setOpenb] = useState(false);

    return (
        <Fragment>
            <Seo title={'Accordionsandcollapse'} />
            <Pageheader
                title="ACCORDIONS"
                heading="Advanced UI"
                active="Accordions"
            />

            {/* <!-- Row1 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Basic Accordion"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion1}
                    >
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Always Open Accordion <p class='text-muted subtitle fs-12 fw-normal'>Omit the <code>data-bs-parent</code>
					attribute on each
					<code>.accordion-collapse</code>
					to make accordion items stay open when another item is opened.
				</p>"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion2}
                    >
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row1 closed --> */}

            {/* <!-- Row2 --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode
                        title="Flush Accordion <p class='subtitle text-muted fs-12 fw-normal'>
                Add <code>.accordion-flush</code> to remove the default <code>background-color</code>,
                some borders, and some rounded corners to render accordions edge-to-edge with
                their
                parent container.
              </p>"
                        customCardClass="custom-card"
                        customCardBodyClass="p-0"
                        code={accordion3}
                    >
                        <Accordion
                            className="accordion accordion-flush"
                            id="accordionFlushExample"
                            defaultActiveKey="0"
                            flush
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header id="flush-headingOne">
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body className="">
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the{' '}
                                    <code>.accordion-flush</code> class. This is
                                    the first item's accordion body.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header id="flush-headingTwo">
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the{' '}
                                    <code>.accordion-flush</code> class. This is
                                    the second item's accordion body. Let's
                                    imagine this being filled with some actual
                                    content.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header id="flush-headingThree">
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    Placeholder content for this accordion,
                                    which is intended to demonstrate the{' '}
                                    <code>.accordion-flush</code> class. This is
                                    the third item's accordion body. Nothing
                                    more exciting happening here in terms of
                                    content, but just filling up the space to
                                    make it look, at least at first glance, a
                                    bit more representative of how this would
                                    look in a real-world application.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row2 closed --> */}

            <h6 className="mb-3">Solid Colors:</h6>
            {/* <!-- Row3 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Primary"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion4}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion accordion-solid-primary"
                            id="accordionPrimarySolidExample"
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Secondary"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion5}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion accordion-solid-secondary"
                            id="accordionSecondarySolidExample"
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row3 closed --> */}

            <h6 className="mb-3">Light Colors:</h6>
            {/* <!-- Row4 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Primary"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion6}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion accordion-primary"
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Secondary"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion7}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion accordion-secondary"
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row4 closed --> */}

            {/* <!-- Row5 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Custom Icon Accordion"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion8}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion accordion-customicon1 accordions-items-seperate"
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Custom Accordion"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion9}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion customized-accordion accordions-items-seperate"
                        >
                            <Accordion.Item
                                eventKey="0"
                                className="custom-accordion-primary"
                            >
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item
                                eventKey="1"
                                className="accordion-item custom-accordion-secondary"
                            >
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item
                                eventKey="2"
                                className="accordion-item custom-accordion-danger"
                            >
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row5 closed --> */}

            <h6 className="mb-3">Colored Borders:</h6>
            {/* <!-- Row6 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Primary"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion10}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion accordion-border-primary accordions-items-seperate"
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Success"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion11}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion accordion-border-success accordions-items-seperate"
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row6 closed --> */}

            {/* <!-- Row7 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Left Aligned Icons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion12}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion accordionicon-left accordions-items-seperate"
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Without Icon"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion13}
                    >
                        <Accordion
                            defaultActiveKey="0"
                            className="accordion accordionicon-none accordions-items-seperate"
                        >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Accordion Item #1
                                </Accordion.Header>
                                <Accordion.Body>
                                    {' '}
                                    <strong>
                                        This is the first item's accordion body.
                                    </strong>{' '}
                                    It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Accordion Item #2
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the second item's accordion
                                        body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    Accordion Item #3
                                </Accordion.Header>
                                <Accordion.Body>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{' '}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{' '}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row7 closed --> */}

            {/* <!-- Row8 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Example"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion14}
                    >
                        <p className="mb-0">
                            <Button
                                className="btn btn-primary collapsed m-1"
                                aria-controls="example-collapse-text"
                                data-bs-toggle="collapse"
                                onClick={() => setOpenb(!openb)}
                                href="#collapseExample"
                            >
                                Link with href
                            </Button>
                            <Button
                                className="btn btn-secondary collapsed m-1"
                                type="button"
                                onClick={() => setOpenb(!openb)}
                                aria-controls="example-collapse-text"
                                aria-expanded={openb}
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseExample"
                            >
                                Button with data-bs-target
                            </Button>
                        </p>
                        <Collapse in={openb}>
                            <div className="card card-body mb-0">
                                Some placeholder content for the collapse
                                component. This panel is hidden by default but
                                revealed when the user activates the relevant
                                trigger.
                            </div>
                        </Collapse>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Multiple Targets Collapse"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion15}
                    >
                        <p className="mb-0">
                            <Button
                                variant="primary"
                                className="m-1"
                                data-bs-toggle="collapse"
                                onClick={() => {
                                    first();
                                }}
                                href="#!"
                                aria-expanded="false"
                                aria-controls=""
                            >
                                Toggle first element
                            </Button>
                            <Button
                                variant="success"
                                className="m-1"
                                type="button"
                                data-bs-toggle="collapse"
                                onClick={() => {
                                    second();
                                }}
                                data-bs-target="#multiCollapseExample2"
                                aria-expanded="false"
                                aria-controls="multiCollapseExample2"
                            >
                                Toggle second element
                            </Button>
                            <Button
                                variant="danger"
                                className="m-1"
                                type="button"
                                data-bs-toggle="collapse"
                                onClick={() => {
                                    both();
                                }}
                                data-bs-target=".multi-collapse"
                                aria-expanded="false"
                                aria-controls=" multiCollapseExample2"
                            >
                                Toggle both elements
                            </Button>
                        </p>
                        <Row>
                            <div className="col m-1">
                                {isFirstCollapsed ? (
                                    <div
                                        className="multi-collapse"
                                        id="multiCollapseExample1"
                                    >
                                        <div className="card card-body mb-0">
                                            Some placeholder content for the
                                            first collapse component of this
                                            multi-collapse example. This panel
                                            is hidden by default but revealed
                                            when the user activates the relevant
                                            trigger.
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            <div className="col m-1">
                                {isSecondCollapsed ? (
                                    <div
                                        className=" multi-collapse"
                                        id="multiCollapseExample2"
                                    >
                                        <div className="card card-body mb-0">
                                            Some placeholder content for the
                                            second collapse component of this
                                            multi-collapse example. This panel
                                            is hidden by default but revealed
                                            when the user activates the relevant
                                            trigger.
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </Row>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row8 closed --> */}

            {/* <!-- Row9 --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Horizontal Collapse"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={accordion16}
                    >
                        <p>
                            <Button
                                variant="primary"
                                className=""
                                type="button"
                                data-bs-toggle="collapse"
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                                data-bs-target="#collapseWidthExample"
                            >
                                Toggle width collapse
                            </Button>
                        </p>
                        <div style={{ minHeight: '120px' }}>
                            <Collapse in={open} dimension="width">
                                <div id="example-collapse-text">
                                    <Card body style={{ width: '230px' }}>
                                        This is some placeholder content for a
                                        horizontal collapse. It's hidden by
                                        default and shown when triggered.
                                    </Card>
                                </div>
                            </Collapse>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- Row9 closed --> */}
        </Fragment>
    );
};

Accordionsandcollapse.layout = 'Contentlayout';
export default Accordionsandcollapse;
