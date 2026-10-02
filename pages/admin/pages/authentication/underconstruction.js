import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { DayCounter } from '../../../../shared/data/authentication/undermaintenance';
import Seo from '../../../../shared/layout-components/seo/seo';
function underconstruction() {
    return (
        <div>
            <Seo title={'Under-Construction'} />
            <div className="cover-image forgot-page">
                <div className="container">
                    <Row className=" justify-content-center align-items-center authentication authentication-basic h-100">
                        <div className="col mx-auto">
                            <div className="row py-4 justify-content-center">
                                <Col xl={5} className=" card-sigin-main ">
                                    <div className="card-sigin">
                                        <div className="">
                                            <div>
                                                <h2 className="tx-30 text-center">
                                                    Under Maintenance
                                                </h2>
                                                <p className="tx-12 text-muted text-center">
                                                    Our website is currently
                                                    undergoing scheduled
                                                    maintenance. We Should be
                                                    back shortly. Thank you for
                                                    your patience!
                                                </p>
                                                <DayCounter />
                                                <div className="input-group mb-3 mt-5 text-center">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter your Email"
                                                        aria-label="Enter your Email"
                                                        aria-describedby="button-addon2"
                                                    />
                                                    <button
                                                        className="btn btn-primary"
                                                        type="button"
                                                        id="button-addon2"
                                                    >
                                                        Subscribe
                                                    </button>
                                                </div>
                                                <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                                    <Link
                                                        href="#!"
                                                        className="me-3"
                                                    >
                                                        <span className="btn-inner--icon">
                                                            {' '}
                                                            <i className="ri-facebook-fill social-btn-icons fs-18 tx-prime"></i>{' '}
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        href="#!"
                                                        className="me-3"
                                                    >
                                                        <span className="btn-inner--icon">
                                                            {' '}
                                                            <i className="ri-twitter-x-line social-btn-icons fs-18 tx-prime"></i>{' '}
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        href="#!"
                                                        className="me-3"
                                                    >
                                                        <span className="btn-inner--icon">
                                                            {' '}
                                                            <i className="ri-linkedin-fill social-btn-icons fs-18 tx-prime"></i>{' '}
                                                        </span>
                                                    </Link>
                                                    <Link
                                                        href="#!"
                                                        className="me-3"
                                                    >
                                                        <span className="btn-inner--icon">
                                                            {' '}
                                                            <i className="ri-instagram-fill social-btn-icons fs-18 tx-prime"></i>{' '}
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    );
}
underconstruction.layout = 'Authenticationlayout';
export default underconstruction;
