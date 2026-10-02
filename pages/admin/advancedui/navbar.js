import Link from 'next/link';
import { Fragment, useState } from 'react';
import {
    Button,
    Card,
    Col,
    Collapse,
    Container,
    Dropdown,
    Form,
    InputGroup,
    Nav,
    NavDropdown,
    Navbar,
    Offcanvas,
    Row,
} from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Navbar1 = () => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <Seo title={'Navbar'} />
            <Pageheader title="NAVBAR" heading="Advanced UI" active="Navbar" />
            {/* <!-- Row1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Navbar with sub-component
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg bg-light"
                            >
                                <Container fluid>
                                    <Navbar.Brand>
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                            className="d-inline-block align-text-top"
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className=""
                                        id="navbarSupportedContent"
                                    >
                                        <Nav
                                            as="ul"
                                            className="navbar-nav me-auto mb-2 mb-lg-0"
                                        >
                                            <Nav.Item>
                                                <Nav.Link
                                                    active
                                                    className="active"
                                                    aria-current="page"
                                                    href="#!"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Link</Nav.Link>
                                            </Nav.Item>
                                            <NavDropdown
                                                title="Dropdown"
                                                id="basic-nav-dropdown"
                                            >
                                                <NavDropdown.Item href="#action/3.1">
                                                    Action
                                                </NavDropdown.Item>
                                                <NavDropdown.Item href="#action/3.2">
                                                    Another action
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item href="#action/3.4">
                                                    Something else here
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Item>
                                                <Nav.Link className="disabled">
                                                    Disabled
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control
                                                className="me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                variant="primary"
                                                className="btn"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row1 Closed --> */}

            {/* <!-- Row2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Brand With And Without Links
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="navbar bg-light mb-3">
                                <Container fluid>
                                    <Link className="navbar-brand" href="#!">
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </Link>
                                </Container>
                            </Navbar>
                            <Navbar className="navbar bg-light">
                                <Container fluid>
                                    <span className="navbar-brand mb-0 h1">
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </span>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row2 Closed --> */}

            {/* <!-- Row3 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Image and text</div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="navbar bg-light">
                                <Container fluid>
                                    <Navbar.Brand
                                        className="navbar-brand"
                                        href="#!"
                                    >
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                            height="24"
                                            className="d-inline-block align-text-top"
                                        />{' '}
                                        Bootstrap
                                    </Navbar.Brand>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row3 Closed --> */}

            {/* <!-- Row4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Nav with lists, links and dropdowns
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg bg-light mb-3"
                            >
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarNav"
                                    >
                                        <Nav className="navbar-nav">
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="disabled">
                                                    Disabled
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg bg-light mb-3"
                            >
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarNavAltMarkup"
                                    >
                                        <Nav className="navbar-nav">
                                            <Nav.Link
                                                className="active"
                                                aria-current="page"
                                            >
                                                Home
                                            </Nav.Link>
                                            <Nav.Link>Features</Nav.Link>
                                            <Nav.Link>Pricing</Nav.Link>
                                            <Nav.Link className="disabled">
                                                Disabled
                                            </Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg bg-light"
                            >
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarNavDropdown"
                                    >
                                        <Nav className="navbar-nav">
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="dropdown">
                                                <NavDropdown
                                                    title="Dropdown Link"
                                                    id="basic-nav-dropdown"
                                                >
                                                    <NavDropdown.Item>
                                                        Action
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item>
                                                        Another action
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item>
                                                        Something else here
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav.Item>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row4 Closed --> */}

            {/* <!-- Row5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Forms In Navbar</div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="navbar bg-light mb-3">
                                <Container fluid>
                                    <Form className="d-flex" role="search">
                                        <Form.Control
                                            className="form-control me-2"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <Button
                                            variant="primary"
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Search
                                        </Button>
                                    </Form>
                                </Container>
                            </Navbar>
                            <Navbar className="navbar bg-light mb-3">
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        {' '}
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Form className="d-flex" role="search">
                                        <input
                                            className="form-control me-2"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <Button
                                            variant="primary"
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Search
                                        </Button>
                                    </Form>
                                </Container>
                            </Navbar>
                            <h6 className="mb-3 fw-semibold">
                                Input groups in navbar forms
                            </h6>
                            <Navbar className="navbar bg-light mb-3">
                                <Form className="container-fluid">
                                    <InputGroup>
                                        <span
                                            className="input-group-text"
                                            id="basic-addon1"
                                        >
                                            @
                                        </span>
                                        <Form.Control
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Form>
                            </Navbar>
                            <h6 className="mb-3 fw-semibold">
                                {' '}
                                Variation buttons are supported as part of the
                                navbar forms
                            </h6>
                            <Navbar className="navbar bg-light">
                                <Form className="container-fluid justify-content-start">
                                    <Button
                                        variant="primary"
                                        className="btn m-1"
                                        type="button"
                                    >
                                        Main button
                                    </Button>
                                    <Button
                                        variant=""
                                        className="btn btn-sm btn-outline-secondary m-1"
                                        type="button"
                                    >
                                        Smaller button
                                    </Button>
                                </Form>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row5 Closed --> */}

            {/* <!-- Row6 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Navbar With Text</div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="navbar bg-light mb-3">
                                <Container fluid>
                                    <span className="navbar-text">
                                        Navbar text with an inline element
                                    </span>
                                </Container>
                            </Navbar>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg bg-light"
                            >
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        Navbar with text
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarText"
                                    >
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="nav-link active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link">
                                                    Features
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link">
                                                    Pricing
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <span className="navbar-text">
                                            Navbar text with an inline element
                                        </span>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row6 Closed --> */}

            {/* <!-- Row7 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Transparent Color Schemes
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-primary-transparent mb-3"
                            >
                                <Container fluid>
                                    <Navbar.Brand
                                        className="navbar-brand"
                                        href="#!"
                                    >
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarColor01"
                                    >
                                        <Nav
                                            as="ul"
                                            className="navbar-nav me-auto mb-2 mb-lg-0"
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>About</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control
                                                className="form-control me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                className="btn"
                                                variant="primary"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg navbar-secondary-transparent mb-3"
                            >
                                <Container fluid>
                                    <Navbar.Brand
                                        href="#!"
                                        className="navbar-brand"
                                    >
                                        {' '}
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarColor02"
                                    >
                                        <Nav
                                            as="ul"
                                            className="navbar-nav me-auto mb-2 mb-lg-0"
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>About</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control
                                                className="form-control me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                variant="secondary"
                                                className="btn btn-secondary"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg navbar-dark-transparent"
                            >
                                <Container fluid>
                                    <Navbar.Brand
                                        href="#!"
                                        className="navbar-brand"
                                    >
                                        {' '}
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarColor03"
                                    >
                                        <Nav
                                            as="ul"
                                            className="navbar-nav me-auto mb-2 mb-lg-0"
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>About</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex" role="search">
                                            <Form.Control
                                                className="form-control me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                variant="dark"
                                                className="btn "
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Solid Color Schemes
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg navbar-primary mb-3"
                            >
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarColor04"
                                    >
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link">
                                                    Features
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link">
                                                    Pricing
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className="nav-link">
                                                    About
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <form className="d-flex" role="search">
                                            <Form.Control
                                                className="form-control me-2 border-0"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                variant="light"
                                                className="btn btn-light"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg navbar-secondary mb-3"
                            >
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        {' '}
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-dark.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarColor05"
                                    >
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>About</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <form className="d-flex" role="search">
                                            <Form.Control
                                                className="form-control me-2 border-0"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                variant="light"
                                                className="btn btn-light"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg navbar-dark"
                            >
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        {' '}
                                        <img
                                            src="../../../assets/images/brand-logos/toggle-logo.png"
                                            alt=""
                                        />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarColor06"
                                    >
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Features</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Pricing</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>About</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <form className="d-flex" role="search">
                                            <Form.Control
                                                className="form-control me-2 border-0"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                variant="light"
                                                className="btn btn-light"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row7 Closed --> */}

            {/* <!-- Row8 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Containers</div>
                        </Card.Header>
                        <Card.Body>
                            <h6>Top center</h6>
                            <Container>
                                <Navbar
                                    expand="lg"
                                    className="navbar-expand-lg bg-light mb-3"
                                >
                                    <Container fluid>
                                        <Navbar.Brand href="#!">
                                            Navbar
                                        </Navbar.Brand>
                                    </Container>
                                </Navbar>
                            </Container>
                            <h6>
                                Change the responsive container to how to wide
                                the content
                            </h6>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg bg-light"
                            >
                                <div className="container-md">
                                    <Navbar.Brand href="#!">
                                        Navbar
                                    </Navbar.Brand>
                                </div>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row8 Closed --> */}

            {/* <!-- Row9 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Placement</div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="navbar bg-light">
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        Default
                                    </Navbar.Brand>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row9 Closed --> */}

            {/* <!-- Row10  --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Placement</div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="navbar fixed-top bg-light">
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        Fixed top
                                    </Navbar.Brand>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row10 Closed --> */}

            {/* <!-- Row11 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Placement</div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="navbar fixed-bottom navbar-light bg-light">
                                <Container fluid>
                                    <Navbar.Brand href="#!">
                                        Fixed bottom
                                    </Navbar.Brand>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row11 Closed --> */}

            {/* <!-- Row12 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Placement</div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar className="sticky-top navbar-light bg-light">
                                <Container fluid>
                                    <Navbar.Brand href="#!" className="">
                                        Sticky top
                                    </Navbar.Brand>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row12 Closed --> */}

            {/* <!-- Row13 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Scrolling</div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg navbar-light bg-light"
                            >
                                <Container fluid>
                                    <Navbar.Brand className="" href="#!">
                                        Navbar scroll
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarScroll"
                                    >
                                        <Nav
                                            as="ul"
                                            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    className="nav-link active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link className="nav-link">
                                                    Link
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Dropdown className="nav-item dropdown">
                                                <Dropdown.Toggle
                                                    variant=""
                                                    className="nav-link dropdown-toggle"
                                                    id="navbarScrollingDropdown"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Link
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu
                                                    className="dropdown-menu"
                                                    aria-labelledby="navbarScrollingDropdown"
                                                >
                                                    <Dropdown.Item className="dropdown-item">
                                                        Action
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item">
                                                        Another action
                                                    </Dropdown.Item>
                                                    <Dropdown.Divider className="dropdown-divider" />
                                                    <Dropdown.Item className="dropdown-item">
                                                        Something else here
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    className="disabled"
                                                    tabIndex={-1}
                                                    aria-disabled="true"
                                                >
                                                    Link
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex mt-3">
                                            <Form.Control
                                                className=" me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                className="btn btn-primary"
                                                variant="primary"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row13 Closed --> */}

            {/* <!-- Row14 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Responsive behaviors Toggler
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg navbar-light bg-light mb-3"
                            >
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarTogglerDemo01"
                                    >
                                        <Navbar.Brand
                                            className="navbar-brand text-default"
                                            href="#!"
                                        >
                                            Hidden brand
                                        </Navbar.Brand>
                                        <Nav
                                            as="ul"
                                            className="navbar-nav me-auto mb-2 mb-lg-0"
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>Link</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    className="nav-link disabled"
                                                    tabIndex={-1}
                                                    aria-disabled="true"
                                                >
                                                    Disabled
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex">
                                            <Form.Control
                                                className="form-control me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                className="btn btn-primary"
                                                variant="primary"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <h6>
                                With a brand name shown on the left and toggler
                                on the right:
                            </h6>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg navbar-light bg-light mb-3"
                            >
                                <Container fluid>
                                    <Navbar.Brand
                                        href="#!"
                                        className="navbar-brand text-default"
                                    >
                                        Navbar
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarTogglerDemo02"
                                    >
                                        <Nav className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link>Link</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link
                                                    className="disabled"
                                                    tabIndex={-1}
                                                    aria-disabled="true"
                                                >
                                                    Disabled
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex">
                                            <Form.Control
                                                className="form-control me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                className="btn btn-primary"
                                                variant="primary"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <h6>
                                With a toggler on the left and brand name on the
                                right:
                            </h6>
                            <Navbar
                                expand="lg"
                                className="navbar navbar-expand-lg navbar-light bg-light"
                            >
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Brand
                                        href="#!"
                                        className="navbar-brand text-default"
                                    >
                                        Navbar
                                    </Navbar.Brand>
                                    <Navbar.Collapse
                                        className="collapse navbar-collapse"
                                        id="navbarTogglerDemo03"
                                    >
                                        <Nav
                                            as="ul"
                                            className="navbar-nav me-auto mb-2 mb-lg-0"
                                        >
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    className="active"
                                                    aria-current="page"
                                                >
                                                    Home
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link>Link</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link
                                                    className="disabled"
                                                    tabIndex={-1}
                                                    aria-disabled="true"
                                                >
                                                    Disabled
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Form className="d-flex">
                                            <Form.Control
                                                className="form-control me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <Button
                                                className="btn btn-primary"
                                                variant="primary"
                                                type="submit"
                                            >
                                                Search
                                            </Button>
                                        </Form>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row14 Closed --> */}

            {/* <!-- Row15 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card external-content">
                        <Card.Header>
                            <div className="card-title">External content</div>
                        </Card.Header>
                        <Card.Body>
                            <Collapse in={open}>
                                <div className="bg-dark p-4">
                                    <h5 className="text-white h4">
                                        Collapsed content
                                    </h5>
                                    <span className="text-white op-7">
                                        Toggleable via the navbar brand.
                                    </span>
                                </div>
                            </Collapse>
                            <Navbar className="navbar navbar-dark bg-dark rounded-0">
                                <Container fluid>
                                    <Button
                                        variant=""
                                        onClick={() => setOpen(!open)}
                                        className="nav-toggle"
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </Button>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row15 Closed --> */}

            {/* <!-- Row16--> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Offcanvas</div>
                        </Card.Header>
                        <Card.Body>
                            <Navbar
                                expand={false}
                                className="navbar bg-light fixed-top"
                            >
                                <Container fluid>
                                    <Navbar.Brand>
                                        Offcanvas navbar
                                    </Navbar.Brand>
                                    <Navbar.Toggle
                                        aria-controls="offcanvasNavbar-expand-false"
                                        className="dark-filter-img"
                                    />
                                    <Navbar.Offcanvas
                                        id={'offcanvasNavbar-expand-false'}
                                        aria-labelledby="offcanvasNavbarLabel-expand-false"
                                        placement="end"
                                    >
                                        <Offcanvas.Header closeButton>
                                            <Offcanvas.Title id="offcanvasNavbarLabel-expand-false">
                                                Offcanvas
                                            </Offcanvas.Title>
                                        </Offcanvas.Header>
                                        <Offcanvas.Body>
                                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                                <Nav.Link
                                                    active
                                                    className="px-2 mb-1"
                                                >
                                                    Home
                                                </Nav.Link>
                                                <Nav.Link className="px-2">
                                                    Link
                                                </Nav.Link>
                                                <NavDropdown
                                                    title="Dropdown"
                                                    id="offcanvasNavbarDropdown-expand-false"
                                                >
                                                    <NavDropdown.Item>
                                                        Action
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Item>
                                                        Another action
                                                    </NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item>
                                                        Something else here
                                                    </NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                            <Form className="d-flex mt-3">
                                                <Form.Control
                                                    type="search"
                                                    placeholder="Search"
                                                    className="me-2"
                                                    aria-label="Search"
                                                />
                                                <Button variant="outline-success">
                                                    Search
                                                </Button>
                                            </Form>
                                        </Offcanvas.Body>
                                    </Navbar.Offcanvas>
                                </Container>
                            </Navbar>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row16 Closed --> */}
        </Fragment>
    );
};

Navbar1.layout = 'Contentlayout';
export default Navbar1;
