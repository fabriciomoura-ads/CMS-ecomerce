import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import {
    layout1,
    layout10,
    layout11,
    layout12,
    layout2,
    layout3,
    layout4,
    layout5,
    layout6,
    layout7,
    layout8,
    layout9,
} from '../../../shared/data/prismdata/formsdata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';

const Formlayouts = () => {
    return (
        <>
            <Seo title={'Formlayouts'} />
            <Pageheader
                title="Form Layouts"
                heading="Forms"
                active="Form Layouts"
            />
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Vertical Forms"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout1}
                    >
                        <div className="mb-3">
                            <Form.Label
                                htmlFor="form-text"
                                className=" fs-14 text-dark"
                            >
                                Enter name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                className=""
                                id="form-text"
                                placeholder="first name"
                            />
                        </div>
                        <div className="mb-3">
                            <Form.Label
                                htmlFor="form-password"
                                className="fs-14 text-dark"
                            >
                                Enter Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                className=""
                                id="form-password"
                                placeholder="password"
                            />
                        </div>
                        <Form.Check
                            className="mb-3"
                            type="checkbox"
                            value=""
                            id="invalidCheck"
                            label="Accept Policy"
                            required
                        />
                        <Button variant="primary" className="" type="submit">
                            Submit
                        </Button>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Horizontal form"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout2}
                    >
                        <form>
                            <div className="row mb-3">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    Email
                                </label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="email"
                                        className="form-control"
                                        id="inputEmail3"
                                    />
                                </Col>
                            </div>
                            <div className="row mb-3">
                                <label
                                    htmlFor="inputPassword3"
                                    className="col-sm-2 col-form-label"
                                >
                                    Password
                                </label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="password"
                                        className="form-control"
                                        id="inputPassword3"
                                    />
                                </Col>
                            </div>
                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">
                                    Qualified
                                </legend>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Prelims"
                                        defaultChecked
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Mains"
                                        disabled
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Certified"
                                    />
                                </Col>
                            </fieldset>
                            <Button
                                variant="primary"
                                type="submit"
                                className=""
                            >
                                Sign in
                            </Button>
                        </form>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title=" Vertical Forms with icon"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout7}
                    >
                        <div className="mb-3">
                            <Form.Label
                                htmlFor="form-text1"
                                className="fs-14 text-dark"
                            >
                                Enter name
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="">
                                    <i className="ri-user-line"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    className=""
                                    id="form-text1"
                                    placeholder=""
                                />
                            </InputGroup>
                        </div>
                        <div className="mb-3">
                            <Form.Label
                                htmlFor="form-password1"
                                className="fs-14 text-dark"
                            >
                                Enter Password
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="">
                                    <i className="ri-lock-line"></i>
                                </InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    className=""
                                    id="form-password1"
                                    placeholder=""
                                />
                            </InputGroup>
                        </div>
                        <Form.Check
                            className="mb-3"
                            type="checkbox"
                            label="Accept Policy"
                        />
                        <Button variant="primary" className="" type="submit">
                            Submit
                        </Button>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Horizontal form With Icons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout8}
                    >
                        <Form>
                            <Row className="mb-3">
                                <label
                                    htmlFor="inputEmail1"
                                    className="col-sm-2 col-form-label"
                                >
                                    Email
                                </label>
                                <Col sm={10}>
                                    <InputGroup>
                                        <Form.Control
                                            type="email"
                                            className="form-control"
                                            id="inputEmail1"
                                        />
                                        <InputGroup.Text className="input-group-text">
                                            <i className="ri-mail-line"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className="row mb-3">
                                <label
                                    htmlFor="inputPassword1"
                                    className="col-sm-2 col-form-label"
                                >
                                    Password
                                </label>
                                <Col sm={10}>
                                    <InputGroup>
                                        <Form.Control
                                            type="password"
                                            className="form-control"
                                            id="inputPassword1"
                                        />
                                        <InputGroup.Text className="input-group-text">
                                            <i className="ri-lock-line"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">
                                    Qualified
                                </legend>
                                <Col sm={10}>
                                    <Form.Check
                                        defaultChecked
                                        type="radio"
                                        label="Prelims"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                    <Form.Check
                                        disabled
                                        type="radio"
                                        label="Mains"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="checkbox"
                                        label="Certified"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                    />
                                </Col>
                            </fieldset>
                            <Button
                                variant=""
                                type="submit"
                                className="btn btn-primary"
                            >
                                Sign in
                            </Button>
                        </Form>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Inline forms"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout3}
                    >
                        <Form className="row row-cols-lg-auto g-3 align-items-center">
                            <div className="col-12">
                                <label
                                    className="visually-hidden"
                                    htmlFor="inlineFormInputGroupUsername"
                                >
                                    Username
                                </label>
                                <InputGroup>
                                    <InputGroup.Text className="input-group-text">
                                        @
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="inlineFormInputGroupUsername"
                                        placeholder="Username"
                                    />
                                </InputGroup>
                            </div>
                            <div className="col-12">
                                <label
                                    className="visually-hidden"
                                    htmlFor="inlineFormSelectPref"
                                >
                                    Preference
                                </label>
                                <Form.Select
                                    className="form-select"
                                    id="inlineFormSelectPref"
                                    defaultValue="Choose..."
                                >
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </div>
                            <div className="col-12">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember me"
                                />
                            </div>

                            <div className="col-12">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className=""
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Column sizing"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout4}
                    >
                        <Row className="g-3">
                            <Col sm={7} className="">
                                <Form.Control
                                    type="text"
                                    className=""
                                    placeholder="City"
                                    aria-label="City"
                                />
                            </Col>
                            <div className="col-sm">
                                <Form.Control
                                    type="text"
                                    className=""
                                    placeholder="State"
                                    aria-label="State"
                                />
                            </div>
                            <div className="col-sm">
                                <Form.Control
                                    type="text"
                                    className=""
                                    placeholder="Zip"
                                    aria-label="Zip"
                                />
                            </div>
                        </Row>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Utilities"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout5}
                    >
                        <div className="mb-3">
                            <Form.Label
                                htmlFor="formGroupExampleInput"
                                className=""
                            >
                                Example label
                            </Form.Label>
                            <Form.Control
                                type="text"
                                className=""
                                id="formGroupExampleInput"
                                placeholder="Example input placeholder"
                            />
                        </div>
                        <div className="mb-1">
                            <Form.Label
                                htmlFor="formGroupExampleInput2"
                                className=""
                            >
                                Another label
                            </Form.Label>
                            <Form.Control
                                type="text"
                                className=""
                                id="formGroupExampleInput2"
                                placeholder="Another input placeholder"
                            />
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Horizontal form label sizing"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout6}
                    >
                        <Row className="mb-3">
                            <Form.Label
                                htmlFor="colFormLabelSm"
                                column="sm"
                                sm={2}
                                className="col-sm-2 col-form-label col-form-label-sm"
                            >
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="email"
                                    className="form-control-sm"
                                    size="sm"
                                    id="colFormLabelSm"
                                    placeholder="col-form-label-sm"
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Label
                                column="sm"
                                sm={2}
                                htmlFor="colFormLabel"
                                className="col-sm-2 col-form-label"
                            >
                                Email
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="email"
                                    className=""
                                    id="colFormLabel"
                                    placeholder="col-form-label"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <label
                                htmlFor="colFormLabelLg"
                                className="col-sm-2 col-form-label col-form-label-lg"
                            >
                                Email
                            </label>
                            <Col sm={10}>
                                <Form.Control
                                    type="email"
                                    className="form-control-lg"
                                    size="lg"
                                    id="colFormLabelLg"
                                    placeholder="col-form-label-lg"
                                />
                            </Col>
                        </Row>
                    </ShowCode>
                </Col>
            </Row>

            <Row>
                <Col xl={12}>
                    <ShowCode
                        title="Auto sizing"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout9}
                    >
                        <Form className="row gy-2 gx-3 align-items-center mb-4">
                            <Col xs="auto">
                                <Form.Label
                                    htmlFor="inlineFormInput"
                                    visuallyHidden
                                >
                                    Name
                                </Form.Label>
                                <Form.Control
                                    className="mb-2"
                                    id="inlineFormInput"
                                    placeholder="Jane Doe"
                                />
                            </Col>
                            <Col xs="auto">
                                <Form.Label
                                    htmlFor="inlineFormInputGroup"
                                    visuallyHidden
                                >
                                    Username
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>@</InputGroup.Text>
                                    <Form.Control
                                        id="inlineFormInputGroup"
                                        placeholder="Username"
                                    />
                                </InputGroup>
                            </Col>
                            <Col className="col-auto">
                                <label
                                    className="visually-hidden"
                                    htmlFor="autoSizingSelect"
                                >
                                    Preference
                                </label>
                                <Form.Select
                                    className="form-select"
                                    id="autoSizingSelect"
                                >
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col xs="auto">
                                <Form.Check
                                    type="checkbox"
                                    id="autoSizingCheck"
                                    className="mb-2"
                                    label="Remember me"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" className="mb-2">
                                    Submit
                                </Button>
                            </Col>
                        </Form>
                        <span className="fw-semibold mb-1 text-muted">
                            You can then remix that once again with
                            size-specific column classes.
                        </span>
                        <Form className="row gx-3 gy-2 align-items-center mt-0">
                            <Col sm={3} className="">
                                <label
                                    className="visually-hidden"
                                    htmlFor="specificSizeInputName"
                                >
                                    Name
                                </label>
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    id="specificSizeInputName"
                                    placeholder="Jane Doe"
                                />
                            </Col>
                            <Col sm={3} className="">
                                <label
                                    className="visually-hidden"
                                    htmlFor="specificSizeInputGroupUsername"
                                >
                                    Username
                                </label>
                                <InputGroup>
                                    <InputGroup.Text className="input-group-text">
                                        @
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        id="specificSizeInputGroupUsername"
                                        placeholder="Username"
                                    />
                                </InputGroup>
                            </Col>
                            <Col sm={3} className="">
                                <label
                                    className="visually-hidden"
                                    htmlFor="specificSizeSelect"
                                >
                                    Preference
                                </label>
                                <Form.Select
                                    className="form-select"
                                    id="specificSizeSelect"
                                >
                                    <option>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <div className="col-auto">
                                <Form.Check
                                    type="checkbox"
                                    id="autoSizingCheck"
                                    className="mb-2"
                                    label="Remember me"
                                />
                            </div>
                            <div className="col-auto">
                                <Button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xxl={6}>
                    <ShowCode
                        title="Form grid"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout10}
                    >
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Label className="">First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    aria-label="First name"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Label className="">Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    aria-label="Last name"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Label className="">Address</Form.Label>
                                <Row>
                                    <Col xl={12} className="mb-3">
                                        <Form.Control
                                            type="text"
                                            className=""
                                            placeholder="Street"
                                            aria-label="Street"
                                        />
                                    </Col>
                                    <Col xl={12} className="mb-3">
                                        <Form.Control
                                            type="text"
                                            className=""
                                            placeholder="Landmark"
                                            aria-label="Landmark"
                                        />
                                    </Col>
                                    <Col xl={6} className="mb-3">
                                        <Form.Control
                                            type="text"
                                            className=""
                                            placeholder="City"
                                            aria-label="City"
                                        />
                                    </Col>
                                    <Col xl={6} className="mb-3">
                                        <Form.Select
                                            id="inputState1"
                                            className="form-select"
                                        >
                                            <option>State</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xl={6} className="mb-3">
                                        <Form.Control
                                            type="text"
                                            className=""
                                            placeholder="Postal/Zip code"
                                            aria-label="Postal/Zip code"
                                        />
                                    </Col>
                                    <Col xl={6} className="mb-3">
                                        <Form.Select
                                            id="inputCountry"
                                            className="form-select"
                                        >
                                            <option>Country</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Row>
                                    <Col xl={12} className="mb-3">
                                        <Form.Label className="">
                                            Email
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            className=""
                                            placeholder="Email"
                                            aria-label="email"
                                        />
                                    </Col>
                                    <Col xl={12} className="mb-3">
                                        <Form.Label className="">
                                            D.O.B
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            className=""
                                            aria-label="dateofbirth"
                                        />
                                    </Col>
                                    <Col xl={12} className="mb-3">
                                        <Row>
                                            <Form.Label className=" mb-1">
                                                Maritial Status
                                            </Form.Label>
                                            <Col xl={6}>
                                                <Form.Check
                                                    name="example-radios"
                                                    type="radio"
                                                    label="Married"
                                                />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Check
                                                    name="example-radios"
                                                    type="radio"
                                                    label="Single"
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xl={12}></Col>
                                </Row>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Label className="">
                                    Contact Number
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    className=""
                                    placeholder="Phone number"
                                    aria-label="Phone number"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Label className="">
                                    Alternative Contact
                                </Form.Label>
                                <Form.Control
                                    type="number"
                                    className=""
                                    placeholder="Phone number"
                                    aria-label="Phone number"
                                />
                            </Col>
                            <Col md={12} className="">
                                <Form.Check
                                    className="mb-3"
                                    type="checkbox"
                                    label="Check me out"
                                />
                            </Col>
                            <Col md={12}>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className=""
                                >
                                    Sign in
                                </Button>
                            </Col>
                        </Row>
                    </ShowCode>
                </Col>
                <Col xxl={6}>
                    <ShowCode
                        title="Gutters"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout11}
                    >
                        <Form className="row g-3 mt-0">
                            <Col md={6}>
                                <Form.Label className="">First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    className=""
                                    placeholder="First name"
                                    aria-label="First name"
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Label className="">Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    className=""
                                    placeholder="Last name"
                                    aria-label="Last name"
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Label htmlFor="inputEmail4" className="">
                                    Email
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    className=""
                                    id="inputEmail4"
                                />
                            </Col>
                            <Col md={6}>
                                <Form.Label
                                    htmlFor="inputPassword4"
                                    className=""
                                >
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    className=""
                                    id="inputPassword4"
                                />
                            </Col>
                            <div className="col-12">
                                <Form.Label htmlFor="inputAddress" className="">
                                    Address
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className=""
                                    id="inputAddress"
                                    placeholder="1234 Main St"
                                />
                            </div>
                            <div className="col-12">
                                <Form.Label
                                    htmlFor="inputAddress2"
                                    className=""
                                >
                                    Address 2
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className=""
                                    id="inputAddress2"
                                    placeholder="Apartment, studio, or floor"
                                />
                            </div>
                            <Col md={6}>
                                <Form.Label htmlFor="inputCity" className="">
                                    City
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className=""
                                    id="inputCity"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Label htmlFor="inputState" className="">
                                    State
                                </Form.Label>
                                <Form.Select
                                    id="inputState"
                                    className="form-select-lg"
                                >
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Col>
                            <Col md={2}>
                                <Form.Label htmlFor="inputZip" className="">
                                    Zip
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="form-control"
                                    id="inputZip"
                                />
                            </Col>
                            <div className="col-12">
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
                                />
                            </div>
                            <div className="col-12">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className=""
                                >
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <ShowCode
                        title="Contact Us Form"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={layout12}
                    >
                        <Row>
                            <Col xl={12} className="rounded-3">
                                <div className="row gy-2">
                                    <Col xl={6}>
                                        <label
                                            htmlFor="contact-address-firstname"
                                            className="form-label "
                                        >
                                            First Name :
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contact-address-firstname"
                                            placeholder="Enter Name"
                                        />
                                    </Col>
                                    <Col xl={6}>
                                        <label
                                            htmlFor="contact-address-lastname"
                                            className="form-label "
                                        >
                                            Last Name :
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contact-address-lastname"
                                            placeholder="Enter Name"
                                        />
                                    </Col>
                                    <div className="col-xl-6 mt-4">
                                        <label
                                            htmlFor="contact-address-phone"
                                            className="form-label "
                                        >
                                            Phone No :
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="contact-address-phone"
                                            placeholder="Enter Phone No"
                                        />
                                    </div>
                                    <div className="col-xl-6 mt-4">
                                        <label
                                            htmlFor="contact-address-email"
                                            className="form-label "
                                        >
                                            Email Id :
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="contact-address-email"
                                            placeholder="Enter Email Id"
                                        />
                                    </div>
                                    <div className="col-xl-12 mt-4">
                                        <label
                                            htmlFor="contact-address-address"
                                            className="form-label "
                                        >
                                            Address :
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="contact-address-address"
                                            rows={2}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button className="btn btn-primary btn-wave">
                                        Send Message
                                    </button>
                                </div>
                            </Col>
                        </Row>
                    </ShowCode>
                </Col>
            </Row>
        </>
    );
};
Formlayouts.layout = 'Contentlayout';

export default Formlayouts;
