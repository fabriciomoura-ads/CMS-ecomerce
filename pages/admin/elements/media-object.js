import { Col, Row } from 'react-bootstrap';
import {
    objectfit1,
    objectfit10,
    objectfit11,
    objectfit12,
    objectfit13,
    objectfit14,
    objectfit15,
    objectfit2,
    objectfit3,
    objectfit4,
    objectfit5,
    objectfit6,
    objectfit7,
    objectfit8,
    objectfit9,
} from '../../../shared/data/prismdata/uielementsprim';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import ShowCode from '../../../shared/showcode/showcode';

const Mediaobject = () => {
    return (
        <>
            <Seo title={'Media Object'} />
            <Pageheader
                title="MEDIA OBJECT"
                heading="Elements"
                active="Media object"
            />

            {/* <!-- row --> */}
            <Row>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Contain"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit1}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-contain border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>

                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Cover"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit2}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-cover border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Fill"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit3}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-fill border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Scale Down"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit4}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-scale border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit None"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit5}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-none border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Contain (SM - responsive)"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit6}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-sm-contain border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Contain (MD - responsive)"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit7}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-md-contain border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Contain (LG - responsive)"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit8}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-lg-contain border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Contain (XL - responsive)"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit9}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-xl-contain border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Contain (XXL - responsive)"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit10}
                    >
                        <img
                            src="../../../assets/images/media/media-28.jpg"
                            className="object-fit-xxl-contain border rounded"
                            alt="..."
                        />
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Contain Video"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit11}
                    >
                        <video
                            src="../../../assets/video/1.mp4"
                            className="object-fit-contain rounded border"
                            autoPlay
                            loop
                            muted
                        ></video>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Cover Video"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit12}
                    >
                        <video
                            src="../../../assets/video/1.mp4"
                            className="object-fit-cover rounded border"
                            autoPlay
                            loop
                            muted
                        ></video>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Fill Video"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit13}
                    >
                        <video
                            src="../../../assets/video/1.mp4"
                            className="object-fit-fill rounded border"
                            autoPlay
                            loop
                            muted
                        ></video>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit Scale Video"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit14}
                    >
                        <video
                            src="../../../assets/video/1.mp4"
                            className="object-fit-scale rounded border"
                            autoPlay
                            loop
                            muted
                        ></video>
                    </ShowCode>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <ShowCode
                        title="Object Fit None Video"
                        customCardClass="custom-card"
                        customCardBodyClass="object-fit-container"
                        code={objectfit15}
                    >
                        <video
                            src="../../../assets/video/1.mp4"
                            className="object-fit-none rounded border"
                            autoPlay
                            loop
                            muted
                        ></video>
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </>
    );
};

Mediaobject.layout = 'Contentlayout';

export default Mediaobject;
