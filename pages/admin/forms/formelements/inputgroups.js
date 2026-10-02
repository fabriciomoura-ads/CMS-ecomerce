import { Fragment } from 'react';
import { Button, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap';
import {
    inputgroup1,
    inputgroup10,
    inputgroup11,
    inputgroup2,
    inputgroup3,
    inputgroup4,
    inputgroup5,
    inputgroup6,
    inputgroup7,
    inputgroup8,
    inputgroup9,
} from '../../../../shared/data/prismdata/formsdata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
import ShowCode from '../../../../shared/showcode/showcode';
const Inputgroups = () => {
    return (
        <Fragment>
            <Seo title={'Inputgroups'} />
            <Pageheader
                title="INPUT GROUP"
                heading="Form Elements"
                active="INPUT GROUP"
            />
            <Row>
                <Col xl={12}>
                    <ShowCode
                        title="Input Groups"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={inputgroup1}
                    >
                        <InputGroup className="mb-3">
                            <InputGroup.Text className="" id="basic-addon1">
                                @
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                className=""
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="text"
                                className=""
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text className="" id="basic-addon2">
                                @example.com
                            </InputGroup.Text>
                        </InputGroup>
                        <Form.Label htmlFor="basic-url" className="form-label">
                            Your vanity URL
                        </Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text className="" id="basic-addon3">
                                https://example.com/users/
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                className=""
                                id="basic-url"
                                aria-describedby="basic-addon3"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text className="">$</InputGroup.Text>
                            <Form.Control
                                type="text"
                                className=""
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <InputGroup.Text className="">.00</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control
                                type="text"
                                className=""
                                placeholder="Username"
                                aria-label="Username"
                            />
                            <InputGroup.Text className="">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                className=""
                                placeholder="Server"
                                aria-label="Server"
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text className="">
                                With textarea
                            </InputGroup.Text>
                            <Form.Control
                                as="textarea"
                                className=""
                                aria-label="With textarea"
                            />
                        </InputGroup>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <ShowCode
                        title="Warpping"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={inputgroup11}
                    >
                        <InputGroup className="flex-nowrap">
                            <InputGroup.Text className="" id="addon-wrapping">
                                @
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                className=""
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                            />
                        </InputGroup>
                    </ShowCode>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode
                                title="Sizing"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={inputgroup2}
                            >
                                <InputGroup className="input-group-sm mb-3">
                                    <InputGroup.Text
                                        className=""
                                        id="inputGroup-sizing-sm"
                                    >
                                        Small
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text
                                        className=""
                                        id="inputGroup-sizing-default"
                                    >
                                        Default
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-default"
                                    />
                                </InputGroup>
                                <InputGroup className="input-group-lg">
                                    <InputGroup.Text
                                        className=""
                                        id="inputGroup-sizing-lg"
                                    >
                                        Large
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-lg"
                                    />
                                </InputGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Buttons addons"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={inputgroup3}
                            >
                                <InputGroup className="mb-3">
                                    <Button
                                        variant="primary"
                                        className=""
                                        type="button"
                                        id="button-addon1"
                                    >
                                        Button
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        placeholder=""
                                        aria-label="Example text with button addon"
                                        aria-describedby="button-addon1"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="text"
                                        className=""
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2"
                                    />
                                    <Button
                                        variant="primary"
                                        className=""
                                        type="button"
                                        id="button-addon2"
                                    >
                                        Button
                                    </Button>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Button
                                        variant="primary"
                                        className=""
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className=""
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        placeholder=""
                                        aria-label="Example text with two button addons"
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        placeholder="Recipient's username"
                                        aria-label="Recipient's username with two button addons"
                                    />
                                    <Button
                                        variant="primary"
                                        className=""
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className=""
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                </InputGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Buttons with dropdowns"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={inputgroup4}
                            >
                                <InputGroup className="mb-3">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant=""
                                            className="btn btn-primary dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="">
                                            <Dropdown.Item href="#">
                                                Action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Something else here
                                            </Dropdown.Item>
                                            <Dropdown.Divider></Dropdown.Divider>
                                            <Dropdown.Item href="#">
                                                Separated link
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        aria-label="Text input with dropdown button"
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="text"
                                        className="form-control"
                                        aria-label="Text input with dropdown button"
                                    />
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant=""
                                            className="btn btn-outline-primary dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="" align="end">
                                            <Dropdown.Item href="#">
                                                Action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Something else here
                                            </Dropdown.Item>
                                            <Dropdown.Divider></Dropdown.Divider>
                                            <Dropdown.Item href="#">
                                                Separated link
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </InputGroup>
                                <InputGroup className="flex-nowrap">
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant=""
                                            className="btn btn-primary-transparent dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="">
                                            <Dropdown.Item href="#">
                                                Action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Something else here
                                            </Dropdown.Item>
                                            <Dropdown.Divider></Dropdown.Divider>
                                            <Dropdown.Item href="#">
                                                Separated link
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        aria-label="Text input with 2 dropdown buttons"
                                    />
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant=""
                                            className="btn btn-primary-transparent dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="" align="end">
                                            <Dropdown.Item href="#">
                                                Action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Something else here
                                            </Dropdown.Item>
                                            <Dropdown.Divider></Dropdown.Divider>
                                            <Dropdown.Item href="#">
                                                Separated link
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </InputGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Custom file input"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={inputgroup5}
                            >
                                <InputGroup className="mb-3">
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupFile01"
                                    >
                                        Upload
                                    </label>
                                    <Form.Control
                                        type="file"
                                        className="form-control"
                                        id="inputGroupFile01"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="file"
                                        className="form-control"
                                        id="inputGroupFile02"
                                    />
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupFile02"
                                    >
                                        Upload
                                    </label>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <Button
                                        variant=""
                                        className="btn btn-primary"
                                        type="button"
                                        id="inputGroupFileAddon03"
                                    >
                                        Button
                                    </Button>
                                    <Form.Control
                                        type="file"
                                        className="form-control"
                                        id="inputGroupFile03"
                                        aria-describedby="inputGroupFileAddon03"
                                        aria-label="Upload"
                                    />
                                </InputGroup>

                                <InputGroup>
                                    <Form.Control
                                        type="file"
                                        className="form-control"
                                        id="inputGroupFile04"
                                        aria-describedby="inputGroupFileAddon04"
                                        aria-label="Upload"
                                    />
                                    <Button
                                        variant=""
                                        className="btn btn-primary"
                                        type="button"
                                        id="inputGroupFileAddon04"
                                    >
                                        Button
                                    </Button>
                                </InputGroup>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode
                                title="Multiple inputs"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={inputgroup6}
                            >
                                <InputGroup>
                                    <InputGroup.Text className="">
                                        First and last name
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        aria-label="First name"
                                        className=""
                                    />
                                    <Form.Control
                                        type="text"
                                        aria-label="Last name"
                                        className=""
                                    />
                                </InputGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Checkboxes and radios"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={inputgroup7}
                            >
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="">
                                        <Form.Check
                                            className=" mt-0"
                                            type="checkbox"
                                            value=""
                                            aria-label="Checkbox for following text input"
                                        />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        aria-label="Text input with checkbox"
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Text className="">
                                        <Form.Check
                                            className=" mt-0"
                                            type="radio"
                                            value=""
                                            aria-label="Radio button for following text input"
                                        />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        aria-label="Text input with radio button"
                                    />
                                </InputGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Multiple addons"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={inputgroup8}
                            >
                                <InputGroup className="mb-3">
                                    <InputGroup.Text className="">
                                        <Form.Check
                                            className="mt-0"
                                            type="checkbox"
                                            value=""
                                            aria-label="Checkbox for following text input"
                                        />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        aria-label="Text input with checkbox"
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Text className="">
                                        <Form.Check
                                            className="mt-0"
                                            type="radio"
                                            value=""
                                            aria-label="Radio button for following text input"
                                        />
                                    </InputGroup.Text>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        aria-label="Text input with radio button"
                                    />
                                </InputGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Segmented buttons"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={inputgroup9}
                            >
                                <InputGroup className="mb-3">
                                    <Button
                                        variant="primary"
                                        type="button"
                                        className=""
                                    >
                                        Action
                                    </Button>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            type="button"
                                            className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">
                                                Toggle Dropdown
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="">
                                            <Dropdown.Item href="#">
                                                Action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Something else here
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">
                                                Separated link
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        aria-label="Text input with segmented dropdown button"
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        className=""
                                        aria-label="Text input with segmented dropdown button"
                                    />
                                    <Button
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        Action
                                    </Button>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant=""
                                            type="button"
                                            className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">
                                                Toggle Dropdown
                                            </span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="dropdown-menu-end">
                                            <Dropdown.Item href="#">
                                                Action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Another action
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#">
                                                Something else here
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#">
                                                Separated link
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </InputGroup>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Custom select"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={inputgroup10}
                            >
                                <InputGroup className="mb-3">
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Options
                                    </label>
                                    <Form.Select
                                        className="form-select"
                                        id="inputGroupSelect03"
                                        aria-label="Example select with button addon"
                                    >
                                        <option>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Form.Select
                                        className="form-select"
                                        id="inputGroupSelect02"
                                    >
                                        <option>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupSelect02"
                                    >
                                        Options
                                    </label>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Button
                                        variant=""
                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                    <Form.Select
                                        className="form-select"
                                        id="inputGroupSelect03"
                                        aria-label="Example select with button addon"
                                    >
                                        <option>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </InputGroup>
                                <InputGroup>
                                    <Form.Select
                                        className="form-select"
                                        id="inputGroupSelect04"
                                        aria-label="Example select with button addon"
                                    >
                                        <option>Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                    <Button
                                        variant=""
                                        className="btn btn-primary"
                                        type="button"
                                    >
                                        Button
                                    </Button>
                                </InputGroup>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};
Inputgroups.layout = 'Contentlayout';

export default Inputgroups;
