import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
// import * as Switcherdatacustam from "../../../../shared/data/switcher/Switcherdatacustam";
import Seo from "../../../../shared/layout-components/seo/seo";
const ResetPassword = () => (
  <div>
    <Seo title={"Reset Password"} />

    <div className="cover-image forgot-page">
      <Container>
        <Row className=" justify-content-center align-items-center authentication authentication-basic h-100">
          <Col
            xl={5}
            lg={6}
            md={8}
            sm={8}
            xs={10}
            className=" card-sigin-main py-4 justify-content-center mx-auto"
          >
            <div className="card-sigin">
              <div className="main-card-signin d-md-flex">
                <div className="wd-100p">
                  <div className="d-flex mb-3">
                    <Link href={"/admin/dashboard/"}>
                      <img
                        src="/escarpasLogo.jpeg"
                        className="sign-favicon ht-40"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="  mb-1">
                    <div className="main-signin-header">
                      <div className="">
                        <h2>Welcome back!</h2>
                        <h4 className="text-start">Reset Your Password</h4>
                        <form>
                          <div className="form-group text-start">
                            <label>Email</label>
                            <input
                              className="form-control"
                              placeholder="Enter your email"
                              type="text"
                            />
                          </div>
                          <div className="form-group text-start">
                            <label>New Password</label>
                            <input
                              className="form-control"
                              placeholder="Enter your password"
                              type="password"
                            />
                          </div>
                          <div className="form-group text-start">
                            <label>Confirm Password</label>
                            <input
                              className="form-control"
                              placeholder="Enter your password"
                              type="password"
                            />
                          </div>
                          <Link
                            href={"/admin/dashboard/"}
                            className="btn ripple btn-primary btn-block"
                          >
                            Reset Password
                          </Link>
                        </form>
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
                      </div>
                    </div>
                    <div className="main-signup-footer mt-3 text-center">
                      <p>
                        Already have an account?{" "}
                        <Link href="/admin/pages/authentication/sign-in">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

ResetPassword.layout = "Authenticationlayout";

export default ResetPassword;
