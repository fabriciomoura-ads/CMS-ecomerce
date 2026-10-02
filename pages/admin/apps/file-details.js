import Link from 'next/link';
import { Fragment, useCallback, useState } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import ImageViewer from 'react-simple-image-viewer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from '../../../shared/data/apps/filedetailsdata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const FileDetails = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <Fragment>
            <Seo title={'File Details'} />
            <Pageheader
                title="FILE DETAILS"
                heading="Apps"
                active="File details"
            />

            {/* <!-- Row1 --> */}
            <Row className=" row-sm">
                <Col xxl={8} xl={12} lg={12} md={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className=" px-4 pt-4">
                            <Link href={'/admin/advancedui/blog-details/'}>
                                <img
                                    src={
                                        '../../../assets/images/photos/blog.jpg'
                                    }
                                    alt=""
                                    className="cover-image br-7 w-100"
                                />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={12} lg={12} xxl={4}>
                    <Card className="custom-card">
                        <Card.Body>
                            <h5 className="mb-3">File details :</h5>
                            <div className="">
                                <Row className="">
                                    <Col xl={12}>
                                        <div className="table-responsive">
                                            <Table className="table mb-0 border-top table-bordered text-nowrap">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            File-name
                                                        </th>
                                                        <td>image.jpg</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            File-size
                                                        </th>
                                                        <td>12.45mb</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            uploaded-date
                                                        </th>
                                                        <td>01-12-2020</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            uploaded-by
                                                        </th>
                                                        <td>prityy abodh</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            image-width
                                                        </th>
                                                        <td>1000</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            image-height
                                                        </th>
                                                        <td>600</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            File-formate
                                                        </th>
                                                        <td>jpg</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            File-location
                                                        </th>
                                                        <td>
                                                            storage/photos/image.jpg
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={8} xl={12} lg={12} md={12}>
                    <Card className="custom-card">
                        <Card.Body className=" h-100">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={4}
                                pagination={{ clickable: true }}
                                navigation={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Navigation, Autoplay]}
                                className="keyboard-control"
                            >
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/photos/fileimage4.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/photos/fileimage1.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/photos/fileimage2.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/photos/fileimage3.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/photos/fileimage4.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/photos/fileimage5.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/photos/fileimage1.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/photos/fileimage3.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src="../../../assets/images/photos/fileimage5.jpg"
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={12} lg={12} xxl={4}>
                    <Card className=" custom-card">
                        <Card.Body>
                            <h5 className="mb-3">Recent Files</h5>
                            <div id="" className="row">
                                {images.map((image, index) => (
                                    <div
                                        className="col-lg-3 col-md-3 col-sm-6 col-12"
                                        key={index}
                                    >
                                        <img
                                            onClick={() =>
                                                openImageViewer(index)
                                            }
                                            src={image}
                                            data-gallery="gallery1"
                                            className="glightbox card"
                                            alt=""
                                        />
                                    </div>
                                ))}
                                {isViewerOpen && (
                                    <ImageViewer
                                        src={images}
                                        currentIndex={currentImage}
                                        onClose={closeImageViewer}
                                        disableScroll={false}
                                        backgroundStyle={{
                                            backgroundColor: 'rgba(0,0,0,0.9)',
                                        }}
                                        closeOnClickOutside={true}
                                    />
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End Row1 --> */}
        </Fragment>
    );
};

FileDetails.layout = 'Contentlayout';

export default FileDetails;
