import Link from "next/link";
import { Container, Form, Nav, Row, Tab } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Seo from "../../../../shared/layout-components/seo/seo";

const SignIn = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <body className="error-1 bg-primary"></body>
        </Helmet>
      </HelmetProvider>
      <Seo title={"Sign-in"} />
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
      <Container>
        <Row className=" justify-content-center align-items-center authentication authentication-basic h-100">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-8 col-xs-10 card-sigin-main mx-auto my-auto py-4 justify-content-center">
            <div className="card-sigin">
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
                      <h2>Welcome back!</h2>
                      <h6 className="font-weight-semibold mb-4">
                        Please sign in to continue.
                      </h6>
                      <div className="panel panel-primary">
                        <Tab.Container defaultActiveKey="email">
                          <div className=" tab-menu-heading mb-2 border-bottom-0">
                            <div className="tabs-menu1">
                              <Nav as="ul" className="nav panel-tabs">
                                <Nav.Item as="li" className="me-2">
                                  <Nav.Link
                                    eventKey="email"
                                    data-bs-toggle="tab"
                                  >
                                    Email
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                  <Nav.Link
                                    eventKey="Mobile"
                                    data-bs-toggle="tab"
                                    className=""
                                  >
                                    Mobile no
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </div>
                          </div>
                          <div className="panel-body tabs-menu-body border-0 p-0 pt-3">
                            <Tab.Content>
                              <Tab.Pane eventKey="email" id="tab5">
                                <Form action="#">
                                  <Form.Group className="form-group">
                                    <label>Email</label>
                                    <Form.Control
                                      className=""
                                      placeholder="Enter your email"
                                      type="text"
                                    />
                                  </Form.Group>
                                  <Form.Group className="form-group">
                                    <label>Password</label>
                                    <Form.Control
                                      className=""
                                      placeholder="Enter your password"
                                      type="password"
                                    />
                                  </Form.Group>
                                  <Link
                                    href={"/admin/dashboard/"}
                                    className="btn btn-primary btn-block"
                                  >
                                    Sign In
                                  </Link>
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
                              </Tab.Pane>
                              <Tab.Pane eventKey="Mobile" id="tab6">
                                <div
                                  id="mobile-num"
                                  className="wrap-input100 validate-input input-group mb-2"
                                >
                                  <Link
                                    href="#!"
                                    className="input-group-text bg-white text-muted"
                                  >
                                    <span>+91</span>
                                  </Link>
                                  <Form.Control
                                    className="input100 "
                                    type="number"
                                    placeholder="number"
                                  />
                                </div>
                                <span>
                                  Note : Login with registered mobile number to
                                  generate OTP.
                                </span>
                                <div className="container-login100-form-btn mt-3">
                                  <Link
                                    href="#!"
                                    className="btn login100-form-btn btn-primary"
                                    id="generate-otp"
                                  >
                                    Proceed
                                  </Link>
                                </div>
                              </Tab.Pane>
                            </Tab.Content>
                          </div>
                        </Tab.Container>
                      </div>

                      <div className="main-signin-footer text-center mt-3">
                        <p>
                          <Link
                            href="/admin/pages/authentication/forgot-password"
                            className="mb-3"
                          >
                            Forgot password?
                          </Link>
                        </p>
                        <p>
                          Don't have an account?{" "}
                          <Link href="/admin/pages/authentication/sign-up">
                            Create an Account
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

SignIn.layout = "Authenticationlayout";
export default SignIn;
