import Link from 'next/link';
import { Accordion, Card, Col, FormGroup, Row } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Faqs = () => (
    <div>
        <Seo title={"Faq's"} />
        <Pageheader title="FAQ'S" heading="Pages" active="Faq's" />
        {/* <!-- row --> */}
        <Row className="faq">
            <Col xl={12}>
                <Accordion className="overflow-hidden card">
                    <Accordion.Item
                        eventKey="0"
                        className="accordion accordion-customicon1 accordions-items-seperate "
                    >
                        <Accordion.Header className="">
                            1. How To Insert All The Plugins?
                        </Accordion.Header>
                        <Accordion.Body
                            id="collapseFour1"
                            className="panel-body"
                        >
                            <p className="text-muted fs-14">
                                I must explain to you how all this mistaken idea
                                of denouncing pleasure and praising pain was
                                born and I will give you a complete account of
                                the system, and expound the actual teachings of
                                the great explorer of the truth, the
                                master-builder of human happiness. No one
                                rejects, dislikes, or avoids pleasure itself,
                                because it is pleasure, but because those who do
                                not know how to pursue pleasure rationally
                                encounter consequences
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="overflow-hidden card">
                    <Accordion.Item
                        eventKey="0"
                        className="accordion accordion-customicon1 accordions-items-seperate "
                    >
                        <Accordion.Header className="accordion-toggle font-weight-semibold fs-15 panel-heading2">
                            2. How Can I contact?
                        </Accordion.Header>
                        <Accordion.Body
                            id="collapseFour2"
                            className="panel-body"
                        >
                            <p className="text-muted mb-0 fs-14">
                                I must explain to you how all this mistaken idea
                                of denouncing pleasure and praising pain was
                                born and I will give you a complete account of
                                the system, and expound the actual teachings of
                                the great explorer of the truth, the
                                master-builder of human happiness. No one
                                rejects, dislikes, or avoids pleasure itself,
                                because it is pleasure, but because those who do
                                not know how to pursue pleasure rationally
                                encounter consequences
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="overflow-hidden card">
                    <Accordion.Item
                        eventKey="0"
                        className="accordion accordion-customicon1 accordions-items-seperate "
                    >
                        <Accordion.Header className="accordion-toggle font-weight-semibold tx-12 panel-heading2">
                            3. Can I use this Plugins in Another Template?
                        </Accordion.Header>
                        <Accordion.Body
                            id="collapseFour3"
                            className="panel-body"
                        >
                            <p className="text-muted mb-0 fs-14">
                                I must explain to you how all this mistaken idea
                                of denouncing pleasure and praising pain was
                                born and I will give you a complete account of
                                the system, and expound the actual teachings of
                                the great explorer of the truth, the
                                master-builder of human happiness. No one
                                rejects, dislikes, or avoids pleasure itself,
                                because it is pleasure, but because those who do
                                not know how to pursue pleasure rationally
                                encounter consequences
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="overflow-hidden card">
                    <Accordion.Item
                        eventKey="0"
                        className="accordion accordion-customicon1 accordions-items-seperate "
                    >
                        <Accordion.Header className="accordion-toggle font-weight-semibold tx-12 panel-heading2">
                            4. It is Easy to Customizable?
                        </Accordion.Header>
                        <Accordion.Body
                            id="collapseFour4"
                            className="panel-body"
                        >
                            <p className="text-muted mb-0 fs-14">
                                I must explain to you how all this mistaken idea
                                of denouncing pleasure and praising pain was
                                born and I will give you a complete account of
                                the system, and expound the actual teachings of
                                the great explorer of the truth, the
                                master-builder of human happiness. No one
                                rejects, dislikes, or avoids pleasure itself,
                                because it is pleasure, but because those who do
                                not know how to pursue pleasure rationally
                                encounter consequences
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="overflow-hidden card">
                    <Accordion.Item
                        eventKey="0"
                        className="accordion accordion-customicon1 accordions-items-seperate "
                    >
                        <Accordion.Header className="accordion-toggle font-weight-semibold tx-12 panel-heading2">
                            5. How Can I Add another page in Template?
                        </Accordion.Header>
                        <Accordion.Body
                            id="collapseFour5"
                            className="panel-body"
                        >
                            <p className="text-muted mb-0 fs-14">
                                I must explain to you how all this mistaken idea
                                of denouncing pleasure and praising pain was
                                born and I will give you a complete account of
                                the system, and expound the actual teachings of
                                the great explorer of the truth, the
                                master-builder of human happiness. No one
                                rejects, dislikes, or avoids pleasure itself,
                                because it is pleasure, but because those who do
                                not know how to pursue pleasure rationally
                                encounter consequences
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="overflow-hidden card">
                    <Accordion.Item
                        eventKey="0"
                        className="accordion accordion-customicon1 accordions-items-seperate "
                    >
                        <Accordion.Header className="accordion-toggle font-weight-semibold tx-12 panel-heading2">
                            6. How can I download This template?
                        </Accordion.Header>
                        <Accordion.Body
                            id="collapseFour6"
                            className="panel-body"
                        >
                            <p className="text-muted mb-0 fs-14">
                                I must explain to you how all this mistaken idea
                                of denouncing pleasure and praising pain was
                                born and I will give you a complete account of
                                the system, and expound the actual teachings of
                                the great explorer of the truth, the
                                master-builder of human happiness. No one
                                rejects, dislikes, or avoids pleasure itself,
                                because it is pleasure, but because those who do
                                not know how to pursue pleasure rationally
                                encounter consequences
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion className="overflow-hidden card">
                    <Accordion.Item
                        eventKey="0"
                        className="accordion accordion-customicon1 accordions-items-seperate "
                    >
                        <Accordion.Header className="accordion-toggle font-weight-semibold tx-12 panel-heading2">
                            7. How To Add additional plugins?
                        </Accordion.Header>
                        <Accordion.Body
                            id="collapseFour7"
                            className="panel-body"
                        >
                            <p className="text-muted mb-0 fs-14">
                                I must explain to you how all this mistaken idea
                                of denouncing pleasure and praising pain was
                                born and I will give you a complete account of
                                the system, and expound the actual teachings of
                                the great explorer of the truth, the
                                master-builder of human happiness. No one
                                rejects, dislikes, or avoids pleasure itself,
                                because it is pleasure, but because those who do
                                not know how to pursue pleasure rationally
                                encounter consequences
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Col>
        </Row>
        {/* <!-- row closed --> */}
        <Row>
            <Col xl={12}>
                <Card className="custom-card">
                    <Card.Header>
                        <h3 className="card-title">Ask Question</h3>
                    </Card.Header>
                    <Card.Body>
                        <h6>
                            If Your Query Not Clarified Post Your Question, My
                            Customer Support will help You.
                        </h6>
                        <div className="pt-4">
                            <FormGroup className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name1"
                                    placeholder="Your Name"
                                />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email Address"
                                />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <textarea
                                    className="form-control"
                                    name="example-textarea-input"
                                    rows="6"
                                    placeholder="Post Your Query"
                                ></textarea>
                            </FormGroup>
                            <Link href="#!" className="btn btn-primary">
                                Send Question
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
);

Faqs.layout = 'Contentlayout';

export default Faqs;
