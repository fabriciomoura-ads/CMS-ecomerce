import Link from "next/link";
// import * as Switcherdatacustam from "../../../../shared/data/switcher/Switcherdatacustam";
import Seo from "../../../../shared/layout-components/seo/seo";
const ForgotPassword = () => (
  <div>
    <Seo title={"Forgot Password"} />

    <div className="cover-image forgot-page">
      <div className="container">
        <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-8 col-xs-10 card-sigin-main py-4 justify-content-center mx-auto">
            <div className="card-sigin">
              <div className="main-card-signin d-md-flex">
                <div className="wd-100p">
                  <div className="mb-3 d-flex">
                    {" "}
                    <Link href="/admin/dashboard/">
                      <img
                        src="/escarpasLogo.jpeg"
                        className="sign-favicon ht-40"
                        alt="logo"
                      />
                    </Link>
                  </div>
                  <div className="main-card-signin d-md-flex bg-white">
                    <div className="wd-100p">
                      <div className="main-signin-header">
                        <h2>Forgot Password!</h2>
                        <h4>Please Enter Your Email</h4>
                        <form action="#">
                          <div className="form-group">
                            <label>Email</label>{" "}
                            <input
                              className="form-control"
                              placeholder="Enter your email"
                              type="text"
                            />
                          </div>
                          <Link
                            href="/admin/dashboard/"
                            className="btn btn-primary btn-block"
                          >
                            Submit
                          </Link>
                        </form>
                      </div>
                      <div className="main-signup-footer mt-2 text-center">
                        <p>
                          Forget it,{" "}
                          <Link href="/admin/pages/authentication/sign-in">
                            {" "}
                            Send me back
                          </Link>{" "}
                          to the sign in screen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ForgotPassword.layout = "Authenticationlayout";

export default ForgotPassword;
