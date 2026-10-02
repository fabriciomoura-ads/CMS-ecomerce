import {
    Button,
    ButtonGroup,
    Col,
    Dropdown,
    DropdownButton,
    Form,
    Row,
    SplitButton,
} from 'react-bootstrap';
import {
    GhostButtons,
    OutlineButtons,
} from '../../../shared/data/elements/buttonsdata';
import {
    AlignmentButtons,
    AutocloseButtons,
    CustomButtons,
    SingleButtons,
    SplitButtonsdata,
} from '../../../shared/data/elements/dropdownsdata';
import {
    dropdown1,
    dropdown10,
    dropdown11,
    dropdown12,
    dropdown13,
    dropdown14,
    dropdown15,
    dropdown16,
    dropdown17,
    dropdown18,
    dropdown19,
    dropdown2,
    dropdown20,
    dropdown21,
    dropdown22,
    dropdown23,
    dropdown24,
    dropdown25,
    dropdown26,
    dropdown27,
    dropdown28,
    dropdown29,
    dropdown3,
    dropdown4,
    dropdown5,
    dropdown6,
    dropdown7,
    dropdown8,
    dropdown9,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';
const Dropdowns = () => {
    return (
        <>
            <Seo title={'Dropdowns'} />
            <Pageheader
                title="DROPDOWNS"
                heading="Elements"
                active="Dropdowns"
            />

            {/* <!-- row --> */}
            <Row>
                <Col xl={12}>
                    <ShowCode
                        title="Dropdowns"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown1}
                    >
                        <div className="example">
                            <div className="btn-list d-flex align-items-center flex-wrap">
                                <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                        variant=""
                                        className="btn btn-primary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown button
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        as="ul"
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <Dropdown.Item as="li" href="#!">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Something else here
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="dropdown">
                                    <Dropdown.Toggle
                                        className="btn btn-secondary dropdown-toggle"
                                        href="#!"
                                        role="button"
                                        id="dropdownMenuLink"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown link
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        as="ul"
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuLink"
                                    >
                                        <Dropdown.Item as="li" href="#!">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Something else here
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Single dropdown buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown2}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {SingleButtons.map((idx) => (
                                    <div
                                        className="btn-group"
                                        key={Math.random()}
                                    >
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                type="button"
                                                variant={idx.class}
                                                className="btn"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Something else here
                                                </Dropdown.Item>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Separated link
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Rounded Button Dropdowns"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown3}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {SingleButtons.map((idx) => (
                                    <div
                                        className="btn-group"
                                        key={Math.random()}
                                    >
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant={idx.class}
                                                type="button"
                                                className="btn dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Something else here
                                                </Dropdown.Item>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Separated link
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Outline Button Dropdowns"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown4}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {OutlineButtons.map((idx) => (
                                    <div
                                        className="btn-group me-0"
                                        key={Math.random()}
                                    >
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant={idx.class}
                                                type="button"
                                                className="btn  dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Something else here
                                                </Dropdown.Item>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Separated link
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Rounded Outline Dropdowns"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown5}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {OutlineButtons.map((idx) => (
                                    <div
                                        className="btn-group me-0"
                                        key={Math.random()}
                                    >
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant={idx.class}
                                                type="button"
                                                className="btn dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Something else here
                                                </Dropdown.Item>
                                                <Dropdown.Divider className="dropdown-divider" />
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Separated link
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Split buttons"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown6}
                    >
                        <div className="example">
                            {SplitButtonsdata.map((idx) => (
                                <SplitButton
                                    key={Math.random()}
                                    className="me-2 my-1"
                                    variant={idx.class}
                                    title="Action"
                                >
                                    <Dropdown.Item eventKey="1">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="2">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="3" active>
                                        Active Item
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="4">
                                        Separated link
                                    </Dropdown.Item>
                                </SplitButton>
                            ))}
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Dropdown Sizing"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown7}
                    >
                        <div className="example">
                            <div className="btn-group my-1 me-2">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant=""
                                        className="btn btn-primary btn-lg dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Large button
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li" href="#!">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Something else here
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#!">
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="btn-group my-1 me-2">
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="light">
                                        Large split button
                                    </Button>
                                    <Dropdown.Toggle
                                        split
                                        variant="light"
                                        id="dropdown-split-basic"
                                    />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            Something else
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#!">
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="btn-group my-1 me-2">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        size="sm"
                                        variant=""
                                        className="btn btn-primary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Small button
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li" href="#!">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Something else here
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#!">
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="btn-group my-1 me-2">
                                <Dropdown as={ButtonGroup}>
                                    <Button size="sm" variant="light">
                                        Small split button
                                    </Button>
                                    <Dropdown.Toggle
                                        split
                                        variant="light"
                                        id="dropdown-split-basic"
                                    />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            Something else
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#!">
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={3}>
                    <ShowCode
                        title="Dropup"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown8}
                    >
                        <div className="example">
                            <Dropdown
                                drop="up"
                                className="btn-group dropup my-1 me-2"
                            >
                                <Dropdown.Toggle
                                    variant=""
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropup
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Something else here
                                    </Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#!">
                                        Separated link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown
                                drop="up"
                                className="btn-group dropup my-1"
                            >
                                <Button
                                    variant=""
                                    type="button"
                                    className="btn btn-info"
                                >
                                    Split dropup
                                </Button>
                                <Dropdown.Toggle
                                    variant=""
                                    type="button"
                                    className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="visually-hidden">
                                        Toggle Dropdown
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Something else here
                                    </Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#!">
                                        Separated link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode
                        title="Dropup right"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown9}
                    >
                        <div className="example">
                            <Dropdown
                                className="btn-group dropend my-1 me-2"
                                drop="end"
                                align={{ lg: 'start' }}
                            >
                                <Dropdown.Toggle
                                    variant=""
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropright
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Something else here
                                    </Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#!">
                                        Separated link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown
                                drop="end"
                                className="btn-group dropend my-1"
                            >
                                <Button
                                    variant=""
                                    type="button"
                                    className="btn btn-info"
                                >
                                    Split dropend
                                </Button>
                                <Dropdown.Toggle
                                    variant=""
                                    type="button"
                                    className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span className="visually-hidden">
                                        Toggle Dropright
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Something else here
                                    </Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#!">
                                        Separated link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode
                        title="Dropup left"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown10}
                    >
                        <div className="example">
                            <Dropdown
                                className="btn-group dropstart my-1 me-2"
                                drop="start"
                            >
                                <Dropdown.Toggle
                                    variant=""
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropstart
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Something else here
                                    </Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#!">
                                        Separated link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="btn-group">
                                <Dropdown
                                    className="btn-group dropstart my-1"
                                    role="group"
                                    drop="start"
                                >
                                    <Dropdown.Toggle
                                        variant=""
                                        type="button"
                                        className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span className="visually-hidden">
                                            Toggle Dropstart
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li" href="#!">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Something else here
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#!">
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button
                                    variant=""
                                    type="button"
                                    className="btn btn-info my-1"
                                >
                                    Split dropstart
                                </Button>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode
                        title="Active"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown11}
                    >
                        <div className="example">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant=""
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropstart
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#!">
                                        Regular link
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-item active"
                                        href="#!"
                                        aria-current="true"
                                    >
                                        Active link
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Another link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={3}>
                    <ShowCode
                        title="Disabled"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown12}
                    >
                        <div className="example">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant=""
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropstart
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#!">
                                        Regular link
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-item disabled"
                                        href="#!"
                                        aria-current="true"
                                    >
                                        Active link
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Another link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Auto close behavior"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown13}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {AutocloseButtons.map((idx) => (
                                    <div
                                        className="btn-group"
                                        key={Math.random()}
                                    >
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant={idx.class}
                                                className="btn btn-primary dropdown-toggle"
                                                type="button"
                                                id="defaultDropdown"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="true"
                                                aria-expanded="false"
                                            >
                                                {idx.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu
                                                as="ul"
                                                aria-labelledby="defaultDropdown"
                                            >
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Menu item
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Menu item
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Menu item
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode
                        title="dropdowns with Forms"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown14}
                    >
                        <div className="example">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant=""
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenu2"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                    <Form className="px-4 py-3">
                                        <div className="mb-3">
                                            <Form.Label
                                                htmlFor="exampleDropdownFormEmail1"
                                                className="form-label"
                                            >
                                                Email address
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                className="form-control"
                                                id="exampleDropdownFormEmail1"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label
                                                htmlFor="exampleDropdownFormPassword1"
                                                className="form-label"
                                            >
                                                Password
                                            </Form.Label>
                                            <Form.Control
                                                type="password"
                                                className="form-control"
                                                id="exampleDropdownFormPassword1"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="dropdownCheck"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="dropdownCheck"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <Button
                                            variant=""
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Sign in
                                        </Button>
                                    </Form>
                                    <div className="dropdown-divider"></div>
                                    <Dropdown.Item as="li" href="#!">
                                        New around here? Sign up
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Forgot password?
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xxl={3} xl={6}>
                    <ShowCode
                        title="Dropdown menu centered"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown15}
                    >
                        <div className="example">
                            <p className="card-title mb-3">
                                Use <code>.dropdown-center</code> on the parent
                                element.
                            </p>
                            <Dropdown className="dropdown-center">
                                <Dropdown.Toggle
                                    variant=""
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    id="dropdownCenterBtn"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Centered dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    as="ul"
                                    aria-labelledby="dropdownCenterBtn"
                                >
                                    <Dropdown.Item as="li" href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Action two
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Action three
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6}>
                    <ShowCode
                        title="Dropup centered"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown16}
                    >
                        <div className="example">
                            <p className="card-title mb-3">
                                Use <code>.dropup-center</code>
                                on the parent element.
                            </p>
                            <Dropdown
                                className="dropup-center dropup"
                                drop="up"
                            >
                                <Dropdown.Toggle
                                    variant=""
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropupCenterBtn"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Centered dropup
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    as="ul"
                                    aria-labelledby="dropupCenterBtn"
                                >
                                    <Dropdown.Item as="li" href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Action two
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Action three
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6}>
                    <ShowCode
                        title="Menu items"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown17}
                    >
                        <div className="example">
                            <p className="card-title mb-3">
                                You can use <code>&lt;a&gt;</code> or{' '}
                                <code>&lt;button&gt;</code> as dropdown items.
                            </p>
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle
                                    variant=""
                                    className="btn btn-info dropdown-toggle"
                                    type="button"
                                    id="dropdownMenu1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    as="ul"
                                    aria-labelledby="dropdownMenu1"
                                >
                                    <Dropdown.Item>Action</Dropdown.Item>
                                    <Dropdown.Item>
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Something else here
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6}>
                    <ShowCode
                        title="Dropdowns options"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown18}
                    >
                        <div className="example">
                            <p className="card-title mb-3">
                                Use <code>data-bs-offset</code> or{' '}
                                <code>data-bs-reference</code> to change the
                                location of the dropdown.
                            </p>
                            <div className="d-flex align-items-center flex-wrap">
                                <Dropdown className="dropdown me-1 mt-1">
                                    <Dropdown.Toggle
                                        variant=""
                                        type="button"
                                        className="btn btn-primary dropdown-toggle"
                                        id="dropdownMenuOffset"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        data-bs-offset="10,20"
                                    >
                                        Offset
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        as="ul"
                                        aria-labelledby="dropdownMenuOffset"
                                    >
                                        <Dropdown.Item as="li" href="#!">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Something else here
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown
                                    drop="up"
                                    className="btn-group dropup my-1"
                                >
                                    <Button
                                        variant=""
                                        type="button"
                                        className="btn btn-info"
                                    >
                                        Reference
                                    </Button>
                                    <Dropdown.Toggle
                                        variant=""
                                        type="button"
                                        className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span className="visually-hidden">
                                            Reference
                                        </span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li" href="#!">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item as="li" href="#!">
                                            Something else here
                                        </Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#!">
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={9}>
                    <ShowCode
                        title="Alignment options"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown19}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {AlignmentButtons.map((idx) => (
                                    <div
                                        className="btn-group"
                                        key={Math.random()}
                                    >
                                        <Dropdown drop={idx.dir}>
                                            <Dropdown.Toggle
                                                variant={idx.class}
                                                className="btn btn-primary dropdown-toggle mb-0"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {idx.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu
                                                as="ul"
                                                aria-labelledby="dropdownMenuButton"
                                            >
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Menu item
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Menu item
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    as="li"
                                                    href="#!"
                                                >
                                                    Menu item
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode
                        title="Dark Dropdowns"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown20}
                    >
                        <div className="example">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant=""
                                    className="btn btn-dark dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton3"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown button
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    as="ul"
                                    className="dropdown-menu dropdown-menu-dark"
                                >
                                    <Dropdown.Item as="li" href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#!">
                                        Something else here
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row --> */}
            <Row>
                <Col xl={4}>
                    <ShowCode
                        title="Menu alignment"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown21}
                    >
                        <div className="example">
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant=""
                                    type="button"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Right-aligned menu example
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                    <Dropdown.Item>Action</Dropdown.Item>
                                    <Dropdown.Item>
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        Something else here
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Responsive alignment end"
                        customCardClass="custom-card"
                        customCardBodyClass="responsive-dropdown"
                        code={dropdown22}
                    >
                        <div className="example">
                            <div className="btn-group ">
                                <DropdownButton
                                    variant="secondary"
                                    className="text-wrap"
                                    as={ButtonGroup}
                                    align={{ lg: 'end' }}
                                    title="Left-aligned but right aligned when large screen"
                                >
                                    <Dropdown.Item href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#!">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#!">
                                        Something else here
                                    </Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={4}>
                    <ShowCode
                        title="Responsive alignment left"
                        customCardClass="custom-card"
                        customCardBodyClass="responsive-dropdown"
                        code={dropdown23}
                    >
                        <div className="example">
                            <div className="btn-group">
                                <DropdownButton
                                    variant="info"
                                    as={ButtonGroup}
                                    align={{ lg: 'start' }}
                                    title="Left-aligned but right aligned when large screen"
                                    className=" text-wrap"
                                >
                                    <Dropdown.Item href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#!">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#!">
                                        Something else here
                                    </Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Custom Dropdown Menu's"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown24}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {CustomButtons.map((idx) => (
                                    <div
                                        className="btn-group"
                                        key={Math.random()}
                                    >
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant={idx.class}
                                                className="btn dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {idx.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu
                                                className={`dropdown-menu-${idx.class} dropdown-${idx.class1} dropmenu}`}
                                            >
                                                <li>
                                                    <Dropdown.Item
                                                        as="a"
                                                        className="dropdown-item"
                                                        href="#!"
                                                    >
                                                        Action
                                                    </Dropdown.Item>
                                                </li>
                                                <li>
                                                    <Dropdown.Item
                                                        as="a"
                                                        className="dropdown-item"
                                                        href="#!"
                                                    >
                                                        Another action
                                                    </Dropdown.Item>
                                                </li>
                                                <li>
                                                    <Dropdown.Item
                                                        as="a"
                                                        className="dropdown-item"
                                                        href="#!"
                                                    >
                                                        Something else here
                                                    </Dropdown.Item>
                                                </li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Ghost Button Dropdowns"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown25}
                    >
                        <div className="example">
                            <div className="btn-list">
                                {GhostButtons.map((idx) => (
                                    <div
                                        className="btn-group"
                                        key={Math.random()}
                                    >
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant={idx.class}
                                                type="button"
                                                className="btn btn-primary-ghost dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {idx.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item
                                                    className="dropdown-item"
                                                    href="#!"
                                                >
                                                    Action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="dropdown-item"
                                                    href="#!"
                                                >
                                                    Another action
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="dropdown-item"
                                                    href="#!"
                                                >
                                                    Something else here
                                                </Dropdown.Item>
                                                <Dropdown.Divider className="dropdown-divider" />
                                                <Dropdown.Item
                                                    className="dropdown-item"
                                                    href="#!"
                                                >
                                                    Separated link
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}

            {/* <!-- row --> */}
            <Row>
                <Col xl={3}>
                    <ShowCode
                        title="non-interactive dropdown items"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown26}
                    >
                        <div className="example">
                            <p className="card-title mb-3">
                                Use <code>.dropdown-item-text.</code> to create
                                non-interactive dropdown items.
                            </p>
                            <div className="bd-example">
                                <Dropdown.Menu className="dropdown-menu" show>
                                    <Dropdown.Item>
                                        <span className="dropdown-item-text px-0">
                                            Dropdown item text
                                        </span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#!">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#!">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#!">
                                        Something else here
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode
                        title="Dropdown Headers"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown27}
                    >
                        <div className="example">
                            <p className="card-titlte mb-3">
                                Add a <code>.dropdown-header</code> to label
                                sections of actions in any dropdown menu.
                            </p>
                            <div className="bd-example">
                                <Dropdown.Menu show>
                                    <Dropdown.Header>
                                        <h6 className="dropdown-header px-0">
                                            Dropdown header
                                        </h6>
                                    </Dropdown.Header>
                                    <Dropdown.Item
                                        className="dropdown-item"
                                        href="#!"
                                    >
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-item"
                                        href="#!"
                                    >
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-item"
                                        href="#!"
                                    >
                                        Something else here
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode
                        title="Dropdown Dividers"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown28}
                    >
                        <div className="example">
                            <div className="bd-example">
                                <Dropdown.Menu className="dropdown-menu" show>
                                    <Dropdown.Header>Heading</Dropdown.Header>
                                    <Dropdown.Item
                                        className="dropdown-item"
                                        href="#!"
                                    >
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-item"
                                        href="#!"
                                    >
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        className="dropdown-item"
                                        href="#!"
                                    >
                                        Something else here
                                    </Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item
                                        className="dropdown-item"
                                        href="#!"
                                    >
                                        Separated link
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={3}>
                    <ShowCode
                        title="Dropdown Menu Text"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={dropdown29}
                    >
                        <div className="example">
                            <div className="bd-example">
                                <Dropdown.Menu
                                    show
                                    className="dropdown-menu p-4 text-muted"
                                    style={{ maxWidth: 200 }}
                                >
                                    <p>
                                        Some example text that's free-flowing
                                        within the dropdown menu.
                                    </p>
                                    <p className="mb-0">
                                        And this is more example text.
                                    </p>
                                </Dropdown.Menu>
                            </div>
                        </div>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </>
    );
};
Dropdowns.layout = 'Contentlayout';

export default Dropdowns;
