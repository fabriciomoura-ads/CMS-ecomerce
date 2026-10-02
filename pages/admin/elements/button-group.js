import {
    Button,
    ButtonGroup,
    ButtonToolbar,
    Col,
    Dropdown,
    DropdownButton,
    Form,
    InputGroup,
    Row,
} from 'react-bootstrap';
import { SocialIconButtons } from '../../../shared/data/elements/buttonsdata';
import {
    btngroup1,
    btngroup10,
    btngroup11,
    btngroup2,
    btngroup3,
    btngroup4,
    btngroup5,
    btngroup6,
    btngroup7,
    btngroup8,
    btngroup9,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';
const Buttongroup = () => {
    return (
        <>
            <Seo title={'Buttongroup'} />
            <Pageheader
                title="BUTTON GROUP"
                heading="Elements"
                active="BUTTON GROUP"
            />

            {/* <!-- row --> */}
            <Row>
                <Col xxl={3} md={6}>
                    <ShowCode
                        title="Basic example"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={btngroup1}
                    >
                        <div className="example">
                            <ButtonGroup
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                            >
                                <Button
                                    variant="info"
                                    type="button"
                                    className="btn btn-wave"
                                >
                                    <i className="bi bi-skip-backward"></i>
                                </Button>
                                <Button
                                    variant="info"
                                    type="button"
                                    className="btn btn-wave"
                                >
                                    <i className="bi bi-pause"></i>
                                </Button>
                                <Button
                                    variant="info"
                                    type="button"
                                    className="btn btn-wave"
                                >
                                    <i className="bi bi-skip-forward"></i>
                                </Button>
                            </ButtonGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={3} md={6}>
                    <ShowCode
                        title="Navigation"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={btngroup2}
                    >
                        <div className="example">
                            <ButtonGroup className="btn-group">
                                <Button
                                    variant="primary"
                                    active
                                    href="#"
                                    className="btn  active btn-wave"
                                    aria-current="page"
                                >
                                    Active link
                                </Button>
                                <Button
                                    variant="primary"
                                    href="#"
                                    className="btn"
                                >
                                    Link
                                </Button>
                                <Button
                                    variant="primary"
                                    href="#"
                                    className="btn "
                                >
                                    Link
                                </Button>
                            </ButtonGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={3} md={6}>
                    <ShowCode
                        title="Mixed Style"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={btngroup3}
                    >
                        <div className="example">
                            <ButtonGroup
                                className="btn-group"
                                role="group"
                                aria-label="Basic mixed styles example"
                            >
                                <Button
                                    variant="danger"
                                    type="button"
                                    className="btn btn-wave"
                                >
                                    Left
                                </Button>
                                <Button
                                    variant="warning"
                                    type="button"
                                    className="btn btn-wave"
                                >
                                    Middle
                                </Button>
                                <Button
                                    variant="success"
                                    type="button"
                                    className="btn btn-wave"
                                >
                                    Right
                                </Button>
                            </ButtonGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xxl={3} md={6}>
                    <ShowCode
                        title="Outline styled"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={btngroup4}
                    >
                        <div className="example">
                            <ButtonGroup
                                className="btn-group1"
                                role="group"
                                aria-label="Basic outlined example"
                            >
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    className="btn btn-wave"
                                >
                                    Left
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    className="btn btn-wave"
                                >
                                    Middle
                                </Button>
                                <Button
                                    variant="outline-primary"
                                    type="button"
                                    className="btn btn-wave"
                                >
                                    Right
                                </Button>
                            </ButtonGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title="Checkbox button groups"
                        customCardClass="custom-card"
                        customCardBodyClass=" checkbox-button-group"
                        code={btngroup5}
                    >
                        <div className="example">
                            <ButtonGroup
                                className="btn-group2"
                                role="group"
                                aria-label="Basic checkbox toggle button group"
                            >
                                <input
                                    type="checkbox"
                                    className="btn-check"
                                    id="btncheck1"
                                />
                                <label
                                    className="btn btn-outline-primary"
                                    htmlFor="btncheck1"
                                >
                                    Checkbox 1
                                </label>
                                <input
                                    type="checkbox"
                                    className="btn-check"
                                    id="btncheck2"
                                />
                                <label
                                    className="btn btn-outline-primary"
                                    htmlFor="btncheck2"
                                >
                                    Checkbox 2
                                </label>
                                <input
                                    type="checkbox"
                                    className="btn-check"
                                    id="btncheck3"
                                />
                                <label
                                    className="btn btn-outline-primary"
                                    htmlFor="btncheck3"
                                >
                                    Checkbox 3
                                </label>
                            </ButtonGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <ShowCode
                        title=" Radio button groups"
                        customCardClass="custom-card"
                        customCardBodyClass="radio-button-group"
                        code={btngroup6}
                    >
                        <div className="example">
                            <ButtonGroup
                                className="btn-group2"
                                role="group"
                                aria-label="Basic radio toggle button group"
                            >
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio1"
                                    defaultChecked
                                />
                                <label
                                    className="btn btn-outline-primary"
                                    htmlFor="btnradio1"
                                >
                                    Radio 1
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio2"
                                />
                                <label
                                    className="btn btn-outline-primary"
                                    htmlFor="btnradio2"
                                >
                                    Radio 2
                                </label>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id="btnradio3"
                                />
                                <label
                                    className="btn btn-outline-primary"
                                    htmlFor="btnradio3"
                                >
                                    Radio 3
                                </label>
                            </ButtonGroup>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode
                                title="Sizing"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={btngroup7}
                            >
                                <div className="example">
                                    <ButtonGroup
                                        className="btn-group btn-group-lg my-1 me-1"
                                        role="group"
                                        aria-label="Large button group"
                                    >
                                        <Button
                                            variant="outline-success"
                                            type="button"
                                            className="btn"
                                        >
                                            Left
                                        </Button>
                                        <Button
                                            variant="outline-success"
                                            type="button"
                                            className="btn"
                                        >
                                            Middle
                                        </Button>
                                        <Button
                                            variant="outline-success"
                                            type="button"
                                            className="btn"
                                        >
                                            Right
                                        </Button>
                                    </ButtonGroup>
                                    <ButtonGroup
                                        className="btn-group my-1 me-1"
                                        role="group"
                                        aria-label="Default button group"
                                    >
                                        <Button
                                            variant="outline-success"
                                            type="button"
                                            className="btn"
                                        >
                                            Left
                                        </Button>
                                        <Button
                                            variant="outline-success"
                                            type="button"
                                            className="btn"
                                        >
                                            Middle
                                        </Button>
                                        <Button
                                            variant="outline-success"
                                            type="button"
                                            className="btn"
                                        >
                                            Right
                                        </Button>
                                    </ButtonGroup>
                                    <ButtonGroup
                                        className="btn-group btn-group-sm my-1 me-1"
                                        role="group"
                                        aria-label="Small button group"
                                    >
                                        <Button
                                            variant="outline-success"
                                            type="button"
                                            className="btn"
                                        >
                                            Left
                                        </Button>
                                        <Button
                                            variant="outline-success"
                                            type="button"
                                            className="btn"
                                        >
                                            Middle
                                        </Button>
                                        <Button
                                            variant="outline-success"
                                            type="button"
                                            className="btn"
                                        >
                                            Right
                                        </Button>
                                    </ButtonGroup>
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Button toolbar"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={btngroup8}
                            >
                                <div className="example">
                                    <ButtonToolbar
                                        className="mb-4"
                                        role="toolbar"
                                        aria-label="Toolbar with button groups"
                                    >
                                        <ButtonGroup
                                            className="btn-group me-2 my-1"
                                            role="group"
                                            aria-label="First group"
                                        >
                                            <Button
                                                variant="primary"
                                                type="button"
                                                className="btn"
                                            >
                                                1
                                            </Button>
                                            <Button
                                                variant="primary"
                                                type="button"
                                                className="btn"
                                            >
                                                2
                                            </Button>
                                            <Button
                                                variant="primary"
                                                type="button"
                                                className="btn"
                                            >
                                                3
                                            </Button>
                                            <Button
                                                variant="primary"
                                                type="button"
                                                className="btn"
                                            >
                                                4
                                            </Button>
                                        </ButtonGroup>
                                        <ButtonGroup
                                            className="btn-group me-2 my-1"
                                            role="group"
                                            aria-label="Second group"
                                        >
                                            <Button
                                                variant="secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                5
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                6
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                7
                                            </Button>
                                        </ButtonGroup>
                                        <ButtonGroup
                                            className="btn-group my-1"
                                            role="group"
                                            aria-label="Third group"
                                        >
                                            <Button
                                                variant="info"
                                                type="button"
                                                className="btn btn-info"
                                            >
                                                8
                                            </Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                    <ButtonToolbar
                                        className="mb-3"
                                        role="toolbar"
                                        aria-label="Toolbar with button groups"
                                    >
                                        <ButtonGroup
                                            className="btn-group me-2 my-1"
                                            role="group"
                                            aria-label="First group"
                                        >
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                1
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                2
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                3
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                4
                                            </Button>
                                        </ButtonGroup>
                                        <InputGroup>
                                            <InputGroup.Text id="btnGroupAddon">
                                                @
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Input group example"
                                                aria-label="Input group example"
                                                aria-describedby="btnGroupAddon"
                                            />
                                        </InputGroup>
                                    </ButtonToolbar>
                                    <ButtonToolbar
                                        className="justify-content-between"
                                        role="toolbar"
                                        aria-label="Toolbar with button groups"
                                    >
                                        <ButtonGroup
                                            className="btn-group my-1"
                                            role="group"
                                            aria-label="First group"
                                        >
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                1
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                2
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                3
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                type="button"
                                                className="btn"
                                            >
                                                4
                                            </Button>
                                        </ButtonGroup>
                                        <InputGroup>
                                            <InputGroup.Text id="btnGroupAddon2">
                                                @
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="text"
                                                placeholder="Input group example"
                                                aria-label="Input group example"
                                                aria-describedby="btnGroupAddon2"
                                            />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Nesting"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={btngroup9}
                            >
                                <div className="example">
                                    <ButtonGroup
                                        className="btn-group"
                                        role="group"
                                        aria-label="Button group with nested dropdown"
                                    >
                                        <Button
                                            variant=""
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            1
                                        </Button>
                                        <Button
                                            variant=""
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            2
                                        </Button>
                                        <DropdownButton
                                            as={ButtonGroup}
                                            title="Dropdown"
                                            id="bg-nested-dropdown"
                                        >
                                            <Dropdown.Item eventKey="1">
                                                Dropdown link
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="2">
                                                Dropdown link
                                            </Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <ShowCode
                                title="Vertical variation"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={btngroup10}
                            >
                                <div className="example">
                                    <div className="row gap-2 justify-content-between ">
                                        <Col sm={3}>
                                            <ButtonGroup
                                                vertical
                                                role="group"
                                                aria-label="Vertical button group"
                                            >
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="btn "
                                                >
                                                    Button
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="btn "
                                                >
                                                    Button
                                                </Button>
                                                <DropdownButton
                                                    as={ButtonGroup}
                                                    title="Dropdown"
                                                    id="bg-vertical-dropdown-1"
                                                >
                                                    <Dropdown.Item eventKey="1">
                                                        Dropdown link
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">
                                                        Dropdown link
                                                    </Dropdown.Item>
                                                </DropdownButton>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="btn "
                                                >
                                                    Button
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="btn "
                                                >
                                                    Button
                                                </Button>
                                                <DropdownButton
                                                    as={ButtonGroup}
                                                    title="Dropdown"
                                                    id="bg-vertical-dropdown-1"
                                                >
                                                    <Dropdown.Item eventKey="1">
                                                        Dropdown link
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">
                                                        Dropdown link
                                                    </Dropdown.Item>
                                                </DropdownButton>
                                                <DropdownButton
                                                    as={ButtonGroup}
                                                    title="Dropdown"
                                                    id="bg-vertical-dropdown-1"
                                                >
                                                    <Dropdown.Item eventKey="1">
                                                        Dropdown link
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">
                                                        Dropdown link
                                                    </Dropdown.Item>
                                                </DropdownButton>
                                                <DropdownButton
                                                    as={ButtonGroup}
                                                    title="Dropdown"
                                                    id="bg-vertical-dropdown-1"
                                                >
                                                    <Dropdown.Item eventKey="1">
                                                        Dropdown link
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">
                                                        Dropdown link
                                                    </Dropdown.Item>
                                                </DropdownButton>
                                            </ButtonGroup>
                                        </Col>
                                        <Col sm={3}>
                                            <ButtonGroup
                                                vertical
                                                role="group"
                                                aria-label="Vertical button group"
                                            >
                                                <Button
                                                    variant=""
                                                    type="button"
                                                    className="btn btn-info"
                                                >
                                                    Button
                                                </Button>
                                                <Button
                                                    variant=""
                                                    type="button"
                                                    className="btn btn-info"
                                                >
                                                    Button
                                                </Button>
                                                <Button
                                                    variant=""
                                                    type="button"
                                                    className="btn btn-info"
                                                >
                                                    Button
                                                </Button>
                                                <Button
                                                    variant=""
                                                    type="button"
                                                    className="btn btn-info"
                                                >
                                                    Button
                                                </Button>
                                                <Button
                                                    variant=""
                                                    type="button"
                                                    className="btn btn-info"
                                                >
                                                    Button
                                                </Button>
                                                <Button
                                                    variant=""
                                                    type="button"
                                                    className="btn btn-info"
                                                >
                                                    Button
                                                </Button>
                                            </ButtonGroup>
                                        </Col>
                                        <Col sm={3}>
                                            <ButtonGroup
                                                vertical
                                                role="group"
                                                aria-label="Vertical radio toggle button group"
                                            >
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    name="vbtn-radio"
                                                    id="vbtn-radio1"
                                                    defaultChecked
                                                />
                                                <label
                                                    className="btn btn-outline-danger mb-0"
                                                    htmlFor="vbtn-radio1"
                                                >
                                                    Radio 1
                                                </label>
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    name="vbtn-radio"
                                                    id="vbtn-radio2"
                                                />
                                                <label
                                                    className="btn btn-outline-danger mb-0"
                                                    htmlFor="vbtn-radio2"
                                                >
                                                    Radio 2
                                                </label>
                                                <input
                                                    type="radio"
                                                    className="btn-check"
                                                    name="vbtn-radio"
                                                    id="vbtn-radio3"
                                                />
                                                <label
                                                    className="btn btn-outline-danger mb-0"
                                                    htmlFor="vbtn-radio3"
                                                >
                                                    Radio 3
                                                </label>
                                            </ButtonGroup>
                                        </Col>
                                    </div>
                                </div>
                            </ShowCode>
                        </Col>
                        <Col xl={12}>
                            <ShowCode
                                title="Social Group Buttons"
                                customCardClass="custom-card"
                                customCardBodyClass=""
                                code={btngroup11}
                            >
                                <div className="example">
                                    <ButtonGroup
                                        className="btn-group"
                                        role="group"
                                        aria-label="Basic example"
                                    >
                                        {SocialIconButtons.map((idx) => (
                                            <Button
                                                variant={idx.class1}
                                                className="btn btn-icon btn-wave"
                                                key={Math.random()}
                                            >
                                                <i
                                                    className={`ri-${idx.class}-line`}
                                                ></i>
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </div>
                            </ShowCode>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </>
    );
};
Buttongroup.layout = 'Contentlayout';

export default Buttongroup;
