import Link from 'next/link';
import { Row } from 'react-bootstrap';
// import * as Switcherdatacustam from "../../../../shared/data/switcher/Switcherdatacustam";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Seo from '../../../../shared/layout-components/seo/seo';
const Error500 = () => (
    <div>
        <HelmetProvider>
            <Helmet>
                <body className="error-1 bg-primary"></body>
            </Helmet>
        </HelmetProvider>
        <Seo title={'500'} />

        <div className="square-box">
            {' '}
            <div></div> <div></div> <div></div> <div></div> <div></div>{' '}
            <div></div> <div></div> <div></div> <div></div> <div></div>{' '}
            <div></div> <div></div> <div></div> <div></div> <div></div>{' '}
        </div>
        <div
            className="page"
            // onClick={() => Switcherdatacustam.Swichermainrightremove()}
        >
            {/* <!-- Main-error-wrapper --> */}
            <div className="main-error-wrapper page page-h  pe-1">
                <div>
                    <h1 className="text-fixed-white">
                        500<span className="fs-20">error</span>
                    </h1>
                    <h2 className="text-fixed-white">
                        Oopps. The page you were looking for {"doesn't"} exist.
                    </h2>
                    <h6 className="text-fixed-white op-6">
                        You may have mistyped the address or the page may have
                        moved.
                    </h6>
                    <Link className="btn btn-light" href={'/admin/dashboard/'}>
                        Back to Home
                    </Link>
                </div>
            </div>
            {/* <!-- /Main-error-wrapper --> */}
        </div>
        <Row className="row">
            <div className="d-flex"></div>
        </Row>
    </div>
);
Error500.layout = 'Authenticationlayout';

export default Error500;
