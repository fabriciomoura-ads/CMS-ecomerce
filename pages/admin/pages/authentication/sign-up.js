import Link from "next/link";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Seo from "../../../../shared/layout-components/seo/seo";
const SignUp = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <body className="error-1 bg-primary"></body>
        </Helmet>
      </HelmetProvider>
      <Seo title={"Sign-Up"} />
      <div className="square-box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Container className="">
        <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
          <Col
            xl={5}
            lg={6}
            md={8}
            sm={8}
            className=" col-xs-10 card-sigin-main py-4 justify-content-center mx-auto"
          >
            <div className="card-sigin ">
              <div className="main-card-signin d-md-flex">
                <div className="wd-100p">
                  <div className="d-flex mb-4">
                    <Link href={"/admin/dashboard/"}>
                      <img
                        src="/escarpasLogo.jpeg"
                        className="sign-favicon ht-40"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="">
                    <div className="main-signup-header">
                      <h2 className="text-dark">Get Started</h2>
                      <h6 className="fw-normal mb-4">
                        It's free to signup and only takes a minute.
                      </h6>
                      <Form action="#">
                        <Form.Group className="form-group">
                          <label>Firstname &amp; Lastname</label>
                          <Form.Control
                            className=""
                            placeholder="Enter your firstname and lastname"
                            type="text"
                          />
                        </Form.Group>
                        <Form.Group className="form-group">
                          <label className="">Email</label>
                          <Form.Control
                            className=""
                            placeholder="Enter your email"
                            type="text"
                          />
                        </Form.Group>
                        <Form.Group className="form-group">
                          <label className="">Password</label>
                          <Form.Control
                            className=""
                            placeholder="Enter your password"
                            type="password"
                          />
                        </Form.Group>
                        <Button variant="primary" className=" btn-block">
                          Create Account
                        </Button>
                        <div className="mt-4 d-flex text-center justify-content-center mb-2">
                          <Link href="#!" className=" me-3">
                            <span className="btn-inner--icon">
                              {" "}
                              <i className="ri-facebook-fill social-btn-icons fs-18 tx-prime"></i>{" "}
                            </span>
                          </Link>
                          <Link href="#!" className=" me-3">
                            <span className="btn-inner--icon">
                              {" "}
                              <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>{" "}
                            </span>
                          </Link>
                          <Link href="#!" className=" me-3">
                            <span className="btn-inner--icon">
                              {" "}
                              <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>{" "}
                            </span>
                          </Link>
                          <Link href="#!" className=" me-3">
                            <span className="btn-inner--icon">
                              {" "}
                              <i className="ri-instagram-fill social-btn-icons fs-18 tx-prime"></i>{" "}
                            </span>
                          </Link>
                        </div>
                      </Form>
                      <div className="main-signup-footer mt-3 text-center">
                        <p>
                          Already have an account?{" "}
                          <Link href="/admin/pages/authentication/sign-in/">
                            Sign In
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

SignUp.layout = "Authenticationlayout";

export default SignUp;
