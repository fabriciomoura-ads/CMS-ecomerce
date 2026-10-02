import { Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
// import required modules
import {
    Autoplay,
    EffectCoverflow,
    EffectCube,
    EffectFade,
    EffectFlip,
    FreeMode,
    Keyboard,
    Mousewheel,
    Navigation,
    Pagination,
    Scrollbar,
    Thumbs,
} from 'swiper/modules';

const SwipperJs = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <Fragment>
            <Seo title={'SwiperJs'} />
            <Pageheader
                title="SWIPER JS"
                heading="Advanced UI"
                active="Swiper Js"
            />
            {/* <!-- Row1 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Swiper</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper swiper swiper-basic"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-27.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-26.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-25.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Swiper with Pagination
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{ clickable: true }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-33.jpg"
                                        alt=""
                                        className="h-100 w-100"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-31.jpg"
                                        alt=""
                                        className="h-100 w-100"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-33.jpg"
                                        alt=""
                                        className="h-100 w-100"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Swiper With Navigation
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper swiper-navigation"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-28.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-29.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-30.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row1 Closed --> */}

            {/* <!-- Row2--> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Vertical Swiper</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                direction={'vertical'}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper swiper vertical swiper-vertical"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-8.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-32.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-17.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Custom Paginatioin</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                pagination={pagination}
                                modules={[Pagination, Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                className="mySwiper swiper custom-pagination"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-25.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-5.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-33.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Scrollbar Swiper</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                scrollbar={{ hide: true }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Scrollbar, Autoplay]}
                                className="mySwiper swiper scrollbar-swiper"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-30.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-28.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-29.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row2 Closed --> */}

            {/* <!-- Row3 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Pagination Fraction
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                pagination={{ type: 'fraction' }}
                                navigation={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper swiper pagination-fraction "
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-16.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-30.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-31.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Dynamic Pagination</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    dynamicBullets: true,
                                    clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-15.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-17.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-16.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Pagination With Progress
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                pagination={{ type: 'progressbar' }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-12.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-8.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-5.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row3 Closed --> */}

            {/* <!-- Row4 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Effect Fade</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                spaceBetween={30}
                                effect={'fade'}
                                navigation={true}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[
                                    EffectFade,
                                    Navigation,
                                    Pagination,
                                    Autoplay,
                                ]}
                                className="mySwiper swiper swiper-fade"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-18.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-19.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-13.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Effect Cube</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                effect={'cube'}
                                grabCursor={true}
                                cubeEffect={{
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={true}
                                modules={[EffectCube, Pagination, Autoplay]}
                                className="mySwiper swiper swiper-effect-cube"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-62.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-63.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-64.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Effect Flip</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                effect={'flip'}
                                grabCursor={true}
                                pagination={true}
                                navigation={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[
                                    EffectFlip,
                                    Pagination,
                                    Navigation,
                                    Autoplay,
                                ]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-64.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-62.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-63.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row4 Closed --> */}

            {/* <!-- Row5 --> */}
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Nested Swiper</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                className="mySwiper swiper-h swiper swiper-horizontal1"
                                spaceBetween={50}
                                pagination={{ clickable: true }}
                                modules={[Pagination]}
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-30.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Swiper
                                        className="mySwiper2 swiper-v swiper vertical swiper-vertical1"
                                        direction={'vertical'}
                                        spaceBetween={50}
                                        pagination={{ clickable: true }}
                                        modules={[Pagination]}
                                    >
                                        <SwiperSlide>
                                            <img
                                                src="../../../assets/images/media/media-25.jpg"
                                                alt=""
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                src="../../../assets/images/media/media-31.jpg"
                                                alt=""
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img
                                                src="../../../assets/images/media/media-32.jpg"
                                                alt=""
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-28.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-29.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Keyboard Control</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                keyboard={{ enabled: true }}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[
                                    Keyboard,
                                    Pagination,
                                    Navigation,
                                    Autoplay,
                                ]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-31.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-12.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-8.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Mouse Wheel Control
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                direction={'vertical'}
                                slidesPerView={1}
                                spaceBetween={30}
                                mousewheel={true}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Mousewheel, Pagination, Autoplay]}
                                className="mySwiper swiper vertical vertical-mouse-control"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-28.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-30.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/media/media-32.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
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
                            <div className="card-title">Effect Coverflow</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={false}
                                slidesPerView={4}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[
                                    EffectCoverflow,
                                    Pagination,
                                    Autoplay,
                                ]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/images/media/media-40.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/images/media/media-41.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/images/media/media-42.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/images/media/media-43.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/images/media/media-44.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/images/media/media-59.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/images/media/media-60.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid"
                                        src="../../../assets/images/media/media-61.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row6 Closed --> */}

            {/* <!-- Row7 --> */}
            <Row>
                <Col xl={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Thumbs Gallery</div>
                        </Card.Header>
                        <Card.Body>
                            <Swiper
                                spaceBetween={10}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                thumbs={{
                                    swiper:
                                        thumbsSwiper && !thumbsSwiper.destroyed
                                            ? thumbsSwiper
                                            : null,
                                }}
                                modules={[
                                    FreeMode,
                                    Navigation,
                                    Thumbs,
                                    Autoplay,
                                ]}
                                className="mySwiper2 swiper swiper-preview"
                            >
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-1.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-2.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-3.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-6.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-7.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-10.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-11.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[
                                    FreeMode,
                                    Navigation,
                                    Thumbs,
                                    Autoplay,
                                ]}
                                className="mySwiper swiper swiper-view"
                            >
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-1.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-2.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-3.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-6.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-7.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-10.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        className="img-fluid rounded"
                                        src="../../../assets/images/media/media-11.jpg"
                                        alt="img"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row7 Closed --> */}
        </Fragment>
    );
};

SwipperJs.layout = 'Contentlayout';
export default SwipperJs;
