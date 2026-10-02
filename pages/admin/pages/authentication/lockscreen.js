import Link from "next/link";
import { Col, Container, Form, Row } from "react-bootstrap";
import Seo from "../../../../shared/layout-components/seo/seo";
const Lockscreen = () => (
  <div>
    <Seo title={"Lock screen"} />

    <div className="cover-image forgot-page">
      <Container>
        <Row className=" justify-content-center align-items-center authentication authentication-basic h-100">
          <Col
            xl={5}
            lg={6}
            md={8}
            sm={8}
            xs={10}
            className="card-sigin-main py-4 justify-content-center mx-auto"
          >
            <div className="card-sigin">
              <div className="main-card-signin d-md-flex">
                <div className="wd-100p">
                  <div className="d-flex mx-auto">
                    {" "}
                    <Link href="/admin/dashboard/" className="mx-auto d-flex">
                      <img
                        src="/escarpasLogo.jpeg"
                        className="sign-favicon ht-40 mx-auto"
                        alt="logo"
                      />
                      <h1 className="main-logo1 ms-1 me-0 my-auto fs-28 text-dark ms-2">
                        no<span>w</span>a
                      </h1>
                    </Link>
                  </div>
                  <div className="main-card-signin d-md-flex bg-white">
                    <div className="p-4 wd-100p">
                      <div className="main-signin-header">
                        <div className="text-center mb-2">
                          <img
                            alt=""
                            className="avatar avatar-xxl rounded-circle  mt-2 mb-2 "
                            src={"../../../../assets/images/faces/6.jpg"}
                          />
                        </div>
                        <div className="mx-auto text-center mt-4 mg-b-20">
                          <h5 className="mg-b-10 tx-16">Teri Dactyl</h5>
                          <p className="tx-13 text-muted">
                            Enter Your Password to View your Screen
                          </p>
                        </div>
                        <form action="#">
                          <div className="form-group">
                            <Form.Control
                              className="form-control"
                              placeholder="Enter your password"
                              type="password"
                            />
                          </div>
                          <Link
                            href="/admin/dashboard/"
                            className="btn btn-primary btn-block"
                          >
                            Unlock
                          </Link>
                        </form>
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
  </div>
);

Lockscreen.layout = "Authenticationlayout";

export default Lockscreen;
