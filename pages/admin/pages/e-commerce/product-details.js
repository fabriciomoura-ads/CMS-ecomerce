import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    Button,
    Card,
    Col,
    Form,
    Nav,
    ProgressBar,
    Row,
    Tab,
    Table,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/swiper-bundle.css';
import {
    Optioncategory1,
    productdetailsdata,
} from '../../../../shared/data/pages/e-commerce/productdetailsdata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
import { addToCart, buynow } from '../../../../shared/redux/action';
const Select = dynamic(() => import('react-select'), { ssr: false });

const ProductDetails = () => {
    const [img, setImg] = useState(
        '../../../../assets/images/ecommerce/25.png'
    );
    const selectedItem = useSelector((state) => state.selectedItem);
    const dispatch = useDispatch();

    const handleBuyNow = () => {
        if (selectedItem) {
            dispatch(buynow(selectedItem));
        }
    };
    const [img1, setImg1] = useState(''); // State to keep track of active image
    useEffect(() => {
        if (
            selectedItem &&
            selectedItem.images &&
            selectedItem.images.length > 0
        ) {
            setImg1(selectedItem.images[0].img); // Initialize img1 with the first image URL from selectedItem
        }
    }, [selectedItem]);
    const handleAddToCart = () => {
        if (selectedItem) {
            dispatch(addToCart(selectedItem));
        }
    };

    const handleImageClick = (image) => {
        setImg(image); // Set the clicked image as active
    };
    const handleImageClick1 = (image) => {
        setImg1(image); // Update state with the clicked image URL or data
    };
    const images = [
        '../../../../assets/images/ecommerce/25.png',
        '../../../../assets/images/ecommerce/27.png',
        '../../../../assets/images/ecommerce/28.png',
        '../../../../assets/images/ecommerce/26.png',
    ];

    return (
        <div>
            <Seo title={'Product-Details'} />
            <Pageheader
                title="PRODUCT DETAILS"
                heading="Ecommerce"
                active="Product details"
            />
            <Row className="row-sm">
                <Col xxl={12}>
                    <Card>
                        <Card.Body>
                            <Row className="row-sm">
                                <Col xxl={6} lg={12} md={12}>
                                    <Row>
                                        <Col
                                            xxl={2}
                                            xl={2}
                                            lg={2}
                                            md={2}
                                            sm={2}
                                        >
                                            <div className="clearfix carousel-slider">
                                                <div
                                                    id="thumbcarousel"
                                                    className="carousel slide"
                                                    data-bs-interval="false"
                                                >
                                                    <div className="carousel-inner">
                                                        <ul className="carousel-item active">
                                                            {selectedItem
                                                                ? selectedItem.images.map(
                                                                      (
                                                                          ele,
                                                                          index
                                                                      ) => (
                                                                          <li
                                                                              key={
                                                                                  index
                                                                              }
                                                                              className={`thumb my-sm-2 m-2 mx-sm-0 ${
                                                                                  img1 ===
                                                                                  ele.img
                                                                                      ? 'active'
                                                                                      : ''
                                                                              }`}
                                                                              onClick={() =>
                                                                                  handleImageClick1(
                                                                                      ele.img
                                                                                  )
                                                                              }
                                                                          >
                                                                              <img
                                                                                  src={
                                                                                      ele.img
                                                                                  }
                                                                                  alt="img"
                                                                              />
                                                                          </li>
                                                                      )
                                                                  )
                                                                : images.map(
                                                                      (
                                                                          image,
                                                                          index
                                                                      ) => (
                                                                          <li
                                                                              key={
                                                                                  index
                                                                              }
                                                                              className={`thumb my-sm-2 m-2 mx-sm-0 ${
                                                                                  img ===
                                                                                  image
                                                                                      ? 'active'
                                                                                      : ''
                                                                              }`}
                                                                              onClick={() =>
                                                                                  handleImageClick(
                                                                                      image
                                                                                  )
                                                                              }
                                                                          >
                                                                              <img
                                                                                  src={
                                                                                      image
                                                                                  }
                                                                                  alt="img"
                                                                              />
                                                                          </li>
                                                                      )
                                                                  )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col
                                            xxl={10}
                                            xl={10}
                                            lg={10}
                                            md={10}
                                            sm={9}
                                        >
                                            <div className="product-carousel border br-5">
                                                <div
                                                    id="Slider"
                                                    className="carousel slide"
                                                >
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            {selectedItem ? (
                                                                <img
                                                                    alt="Selected Product"
                                                                    className="img-fluid mx-auto d-block"
                                                                    src={img1}
                                                                />
                                                            ) : (
                                                                <img
                                                                    className="img-fluid mx-auto d-block"
                                                                    alt="Default Product"
                                                                    src={img}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center mt-4 btn-list">
                                                <Link
                                                    href="/admin/pages/e-commerce/cart"
                                                    className="btn ripple btn-primary me-2"
                                                    onClick={handleAddToCart}
                                                >
                                                    <i className="fe fe-shopping-cart"></i>{' '}
                                                    Add to cart
                                                </Link>
                                                <Link
                                                    href="/admin/pages/e-commerce/checkout"
                                                    className="btn ripple btn-secondary"
                                                    onClick={handleBuyNow}
                                                >
                                                    <i className="fe fe-credit-card"></i>{' '}
                                                    Buy Now
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col
                                    xxl={6}
                                    lg={12}
                                    md={12}
                                    className="details  mt-4"
                                >
                                    <h4 className="product-title mb-1">
                                        {selectedItem
                                            ? selectedItem.name
                                            : "Jyothi Fashion Women's Fit & Flare Knee Length Western Frock"}
                                    </h4>

                                    <p className="text-muted fs-13 mb-1">
                                        {selectedItem
                                            ? selectedItem.description
                                            : 'women red & Grey Checked Casual frock'}
                                    </p>
                                    <div className="rating mb-1">
                                        <div className="stars">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star text-muted"></span>
                                            <span className="fa fa-star text-muted"></span>
                                        </div>
                                        <span className="review-no">
                                            41 reviews
                                        </span>
                                    </div>
                                    <h6 className="price">
                                        current price:{' '}
                                        <span className="h3 ms-2">
                                            {selectedItem
                                                ? selectedItem.prices
                                                : '$257'}
                                        </span>
                                    </h6>
                                    <p className="vote">
                                        <strong>91%</strong> of buyers enjoyed
                                        this product!{' '}
                                        <strong>(87 votes)</strong>
                                    </p>
                                    <div className="mb-3">
                                        <div className="">
                                            <p className="font-weight-normal">
                                                <span className="h4">
                                                    Hurry Up!
                                                </span>{' '}
                                                Sold:
                                                <span className="text-primary h5 ">
                                                    110/150
                                                </span>{' '}
                                                products in stock.
                                            </p>
                                        </div>
                                        <div className="">
                                            <ProgressBar
                                                className=" progress ht-10  mt-0"
                                                now={60}
                                                animated
                                                variant="primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="sizes d-flex">
                                        sizes:
                                        <span className="size d-flex">
                                            <label className="rdiobox mb-0">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault1"
                                                    defaultChecked
                                                />{' '}
                                                <span>s</span>
                                            </label>
                                        </span>
                                        <span className="size d-flex">
                                            <label className="rdiobox mb-0">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault2"
                                                />{' '}
                                                <span>m</span>
                                            </label>
                                        </span>
                                        <span className="size d-flex">
                                            <label className="rdiobox mb-0">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault3"
                                                />{' '}
                                                <span>l</span>
                                            </label>
                                        </span>
                                        <span className="size d-flex">
                                            <label className="rdiobox mb-0">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="flexRadioDefault"
                                                    id="flexRadioDefault4"
                                                />{' '}
                                                <span>xl</span>
                                            </label>
                                        </span>
                                    </div>
                                    <div className="d-flex  mt-2">
                                        <div className="mt-2 product-title">
                                            Quantity:
                                        </div>
                                        <div className="d-flex ms-2">
                                            <ul className=" mb-0 Quantity-list">
                                                <li>
                                                    <div className="form-group">
                                                        <Select
                                                            classNamePrefix="Select2"
                                                            options={
                                                                Optioncategory1
                                                            }
                                                            placeholder="Select"
                                                        />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="colors d-flex me-3 mt-2">
                                        <span className="mt-2">colors:</span>
                                        <div className="d-sm-flex ms-4">
                                            <div className="me-2">
                                                <label className="colorinput">
                                                    <input
                                                        name="color"
                                                        type="radio"
                                                        value="azure"
                                                        className="colorinput-input"
                                                        defaultChecked
                                                    />
                                                    <span className="colorinput-color bg-primary"></span>
                                                </label>
                                            </div>
                                            <div className="me-2">
                                                <label className="colorinput">
                                                    <input
                                                        name="color"
                                                        type="radio"
                                                        value="indigo"
                                                        className="colorinput-input"
                                                    />
                                                    <span className="colorinput-color bg-secondary"></span>
                                                </label>
                                            </div>
                                            <div className="me-2">
                                                <label className="colorinput">
                                                    <input
                                                        name="color"
                                                        type="radio"
                                                        value="purple"
                                                        className="colorinput-input"
                                                    />
                                                    <span className="colorinput-color bg-danger"></span>
                                                </label>
                                            </div>
                                            <div className="me-2">
                                                <label className="colorinput">
                                                    <input
                                                        name="color"
                                                        type="radio"
                                                        value="pink"
                                                        className="colorinput-input"
                                                    />
                                                    <span className="colorinput-color bg-pink"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className=" row-sm">
                <Col lg={12} md={12}>
                    <Card className=" productdesc">
                        <Card.Body>
                            <div className="panel panel-primary">
                                <Tab.Container defaultActiveKey="1">
                                    <div className=" tab-menu-heading">
                                        <div className="tabs-menu1">
                                            <Nav
                                                as="ul"
                                                variant=""
                                                className=" panel-tabs"
                                            >
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        eventKey="1"
                                                        href="#tab5"
                                                        className=""
                                                        data-bs-toggle="tab"
                                                    >
                                                        Specifications
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        eventKey="2"
                                                        href="#tab6"
                                                        data-bs-toggle="tab"
                                                    >
                                                        Dimensions
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        eventKey="3"
                                                        href="#tab7"
                                                        data-bs-toggle="tab"
                                                    >
                                                        Features
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </div>
                                    <div className="panel-body tabs-menu-body">
                                        <Tab.Content>
                                            <Tab.Pane
                                                eventKey="1"
                                                className=" border-0"
                                                id="tab5"
                                            >
                                                <h5 className="mb-2 mt-1 fw-semibold">
                                                    Description :
                                                </h5>
                                                <p className="mb-3 fs-13">
                                                    At vero eos et accusamus et
                                                    iusto odio dignissimos
                                                    ducimus qui blanditiis
                                                    praesentium voluptatum
                                                    deleniti atque corrupti quos
                                                    dolores et quas molestias
                                                    excepturi sint occaecati
                                                    cupiditate non provident,
                                                    similique sunt in culpa qui
                                                    officia deserunt mollitia
                                                    animi, id est laborum et
                                                    dolorum fuga.
                                                </p>
                                                <p className="mb-3 fs-13">
                                                    odio dignissimos ducimus qui
                                                    blanditiis praesentium
                                                    voluptatum deleniti atque
                                                    corrupti quos dolores et
                                                    quas molestias excepturi
                                                    sint occaecati cupiditate
                                                    non provident, similique
                                                    sunt in culpa qui officia.
                                                </p>
                                                <h5 className="mb-2 mt-3 fw-semibold">
                                                    Specifications :
                                                </h5>
                                                <div className="table-responsive">
                                                    <Table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td className="fw-semibold">
                                                                    Package
                                                                    Dimensions
                                                                </td>
                                                                <td>
                                                                    {' '}
                                                                    33 x 22 x 3
                                                                    cm; 450
                                                                    Grams
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-semibold">
                                                                    Manufacturer
                                                                </td>
                                                                <td>
                                                                    gownu
                                                                    Production
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-semibold">
                                                                    Item part
                                                                    number{' '}
                                                                </td>
                                                                <td>
                                                                    BNVRDMRHENFULL-Z14
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-semibold">
                                                                    Best Sellers
                                                                    Rank
                                                                </td>
                                                                <td>
                                                                    {' '}
                                                                    #141 in
                                                                    Clothing &
                                                                    Accessories
                                                                    (See Top 100
                                                                    in Clothing
                                                                    &
                                                                    Accessories)
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="fw-semibold">
                                                                    Customer
                                                                    Reviews
                                                                </td>
                                                                <td>
                                                                    <p className="text-muted float-start me-3">
                                                                        <span className="fa fa-star text-warning me-1"></span>
                                                                        <span className="fa fa-star text-warning me-1"></span>
                                                                        <span className="fa fa-star text-warning me-1"></span>
                                                                        <span className="fa fa-star-half-o text-warning me-1"></span>
                                                                        <span className="fa fa-star-o text-warning me-1"></span>
                                                                        <span className="text-success fw-semibold me-1">
                                                                            (2,076
                                                                            ratings)
                                                                        </span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane
                                                eventKey="2"
                                                className=" border-0"
                                                id="tab6"
                                            >
                                                <div className="table-responsive">
                                                    <Table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    {' '}
                                                                    Care
                                                                    Instructions
                                                                </td>
                                                                <td>
                                                                    Hand Wash
                                                                    Only
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    {' '}
                                                                    Fit Type
                                                                </td>
                                                                <td>Regular</td>
                                                            </tr>
                                                            <tr>
                                                                <td> Fabric</td>
                                                                <td>
                                                                    Soft Crepe
                                                                    || full
                                                                    stitched
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td> Size</td>
                                                                <td>
                                                                    S(34''),
                                                                    M(36"),
                                                                    L(38"),
                                                                    XL(40"),
                                                                    XXL(42")
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td> Length</td>
                                                                <td>
                                                                    Up to 44
                                                                    inch
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    {' '}
                                                                    Manufacturer
                                                                </td>
                                                                <td>
                                                                    Jyothi
                                                                    fashions
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane
                                                eventKey="3"
                                                className=" border-0"
                                                id="tab7"
                                            >
                                                <div className="table-responsive">
                                                    <Table className="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa fa-check me-3 text-success"></i>
                                                                    Care
                                                                    Instructions:
                                                                    Hand Wash
                                                                    Only
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa fa-check me-3 text-success"></i>
                                                                    Kurta
                                                                    Material:Poly
                                                                    Crepe
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa fa-check me-3 text-success"></i>
                                                                    Style:
                                                                    A-line 48"
                                                                    length Kurta
                                                                    with 3/4
                                                                    Bell Sleeve
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa fa-check me-3 text-success"></i>
                                                                    Ocassion:Casual,
                                                                    Formal
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa fa-check me-3 text-success"></i>
                                                                    Packet
                                                                    contains: 1
                                                                    readymade
                                                                    Kurta.
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <i className="fa fa-check me-3 text-success"></i>
                                                                    Size
                                                                    Declaration:
                                                                    Please
                                                                    choose
                                                                    garment size
                                                                    that is two
                                                                    inches more
                                                                    than your
                                                                    body
                                                                    measurement.e.g:-For
                                                                    Bust size
                                                                    -36(S),Select
                                                                    garment
                                                                    size-38''(M).
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={12}>
                    <Card>
                        <Card.Body className="card-body p-0">
                            <div className="d-flex p-3">
                                <h5 className="float-start main-content-label mb-0 mt-2">
                                    All Ratings and Reviews
                                </h5>
                                <Link
                                    href="#!"
                                    className="btn btn-outline-primary btn-sm float-end ms-auto"
                                >
                                    Top Rated
                                </Link>
                            </div>
                            <div className="media mt-0 p-3 border-bottom border-top">
                                <div className="d-flex me-3">
                                    <Link href={'/admin/pages/profile/'}>
                                        <img
                                            className="media-image avatar avatar-md rounded-circle"
                                            alt="64x64"
                                            src={
                                                '../../../../assets/images/faces/6.jpg'
                                            }
                                        />{' '}
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <Link href={'/admin/pages/profile/'}>
                                        <h5 className="mt-0 mb-1 font-weight-semibold tx-16">
                                            Bruce Tran
                                            <span
                                                className="fs-14 ms-0"
                                                data-bs-toggle="tooltip"
                                                data-placement="top"
                                                title=""
                                                data-bs-original-title="verified"
                                            >
                                                <i className="fa fa-check-circle-o text-success"></i>
                                            </span>
                                        </h5>
                                    </Link>
                                    <span className="text-muted tx-13">
                                        Tue, 20 Mar 2020
                                    </span>
                                    <div className="text-warning mt-1">
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star"></i>
                                    </div>
                                    <p className="font-13  mb-2 mt-2">
                                        Lorem Ipsum available, quis Neque porro
                                        quisquam est, qui dolorem ipsum quia .
                                    </p>
                                    <p className="mb-1">
                                        {' '}
                                        <Link href="#!" className="me-2">
                                            <span className="badge badge-primary">
                                                Helpful
                                            </span>
                                        </Link>
                                        <Link href="#!" className="me-2">
                                            <span className="">Comment</span>
                                        </Link>
                                        <Link href="#!" className="me-2">
                                            <span className="">Report</span>
                                        </Link>
                                        <span className="float-end">
                                            {' '}
                                            <Link
                                                href="#!"
                                                className="new ms-3"
                                            >
                                                <i className="text-success br-7 text-success fe fe-thumbs-up fs-16 text-icon "></i>
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="new ms-3 mt-6"
                                            >
                                                <i className="text-danger br-7 text-danger fe fe-thumbs-down  fs-16 text-icon"></i>
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="media mt-0  p-3 border-bottom">
                                <div className="d-flex me-3">
                                    <Link href={'/admin/pages/profile/'}>
                                        <img
                                            className="media-image avatar avatar-md rounded-circle"
                                            alt="64x64"
                                            src={
                                                '../../../../assets/images/faces/7.jpg'
                                            }
                                        />{' '}
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <Link href={'/admin/pages/profile/'}>
                                        <h5 className="mt-0 mb-1 font-weight-semibold tx-16">
                                            Mina Harpe
                                            <span
                                                className="fs-14 ms-0"
                                                data-bs-toggle="tooltip"
                                                data-placement="top"
                                                title=""
                                                data-bs-original-title="verified"
                                            >
                                                <i className="fa fa-check-circle-o text-success"></i>
                                            </span>
                                        </h5>
                                    </Link>
                                    <span className="text-muted tx-13">
                                        Tue, 20 Mar 2020
                                    </span>
                                    <div className="text-warning mt-1">
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star"></i>
                                    </div>
                                    <p className="font-13  mb-2 mt-2">
                                        Lorem Ipsum available, quis Neque porro
                                        quisquam est, qui dolorem ipsum quia
                                        dolor sit amet, et nostrud exercitation
                                        ullamco laboris commodo consequat.
                                    </p>
                                    <p className="mb-1">
                                        <Link href="#!" className="me-2">
                                            <span className="badge badge-primary">
                                                Helpful
                                            </span>
                                        </Link>
                                        <Link href="#!" className="me-2">
                                            <span className="">Comment</span>
                                        </Link>
                                        <Link href="#!" className="me-2">
                                            <span className="">Report</span>
                                        </Link>
                                        <span className="float-end">
                                            {' '}
                                            <Link
                                                href="#!"
                                                className="new ms-3"
                                            >
                                                <i className="text-success br-7 text-success fe fe-thumbs-up fs-16 text-icon "></i>
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="new ms-3 mt-6"
                                            >
                                                <i className="text-danger br-7 text-danger fe fe-thumbs-down  fs-16 text-icon"></i>
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="media mt-0 p-3">
                                <div className="d-flex me-3">
                                    <Link href={'/admin/pages/profile/'}>
                                        <img
                                            className="media-image avatar avatar-md rounded-circle"
                                            alt="64x64"
                                            src={
                                                '../../../../assets/images/faces/8.jpg'
                                            }
                                        />{' '}
                                    </Link>
                                </div>
                                <div className="media-body">
                                    <Link href={'/admin/pages/profile/'}>
                                        <h5 className="mt-0 mb-1 font-weight-semibold tx-16">
                                            Maria Quinn
                                            <span
                                                className="fs-14 ms-0"
                                                data-bs-toggle="tooltip"
                                                data-placement="top"
                                                title=""
                                                data-bs-original-title="verified"
                                            >
                                                <i className="fa fa-check-circle-o text-success"></i>
                                            </span>
                                        </h5>
                                    </Link>
                                    <span className="text-muted tx-13">
                                        Tue, 20 Mar 2020
                                    </span>
                                    <div className="text-warning mt-1">
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star active"></i>
                                        <i className="bx bxs-star text-light"></i>
                                    </div>
                                    <p className="font-13  mb-2 mt-2">
                                        Lorem Ipsum available, quis Neque porro
                                        quisquam est exercitation ullamco
                                        laboris commodo consequat.
                                    </p>
                                    <p className="mb-1">
                                        <Link href="#!" className="me-2">
                                            <span className="badge badge-primary">
                                                Helpful
                                            </span>
                                        </Link>
                                        <Link href="#!" className="me-2">
                                            <span className="">Comment</span>
                                        </Link>
                                        <Link href="#!" className="me-2">
                                            <span className="">Report</span>
                                        </Link>
                                        <span className="float-end">
                                            {' '}
                                            <Link
                                                href="#!"
                                                className="new ms-3"
                                            >
                                                <i className="text-success br-7 text-success fe fe-thumbs-up fs-16 text-icon "></i>
                                            </Link>
                                            <Link
                                                href="#!"
                                                className="new ms-3 mt-6"
                                            >
                                                <i className="text-danger br-7 text-danger fe fe-thumbs-down  fs-16 text-icon"></i>
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <Card.Footer>
                                <Button variant="" className="btn btn-light">
                                    More Reviews
                                </Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12} lg={12} md={12} sm={12}>
                    <Card>
                        <div className="ps-4 pe-4 pb-2 pt-4">
                            <h5 className="mb-4">Write Review</h5>
                            <div className="mb-1">
                                <Row>
                                    <Col className="form-group" md={6}>
                                        <div className="mb-3 font-weight-semibold">
                                            Your Name
                                        </div>{' '}
                                        <Form.Control
                                            className="form-control"
                                            placeholder="Your Name"
                                            type="text"
                                        />
                                    </Col>
                                    <Col className="form-group" md={6}>
                                        <div className="mb-3 font-weight-semibold">
                                            Email Address
                                        </div>{' '}
                                        <Form.Control
                                            className="form-control"
                                            placeholder="Email Address"
                                            type="text"
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <span className="star-rating">
                                <Link href="#!">
                                    <i className="icofont-ui-rating icofont-2x"></i>
                                </Link>
                                <Link href="#!">
                                    <i className="icofont-ui-rating icofont-2x"></i>
                                </Link>
                                <Link href="#!">
                                    <i className="icofont-ui-rating icofont-2x"></i>
                                </Link>
                                <Link href="#!">
                                    <i className="icofont-ui-rating icofont-2x"></i>
                                </Link>
                                <Link href="#!">
                                    <i className="icofont-ui-rating icofont-2x"></i>
                                </Link>
                            </span>
                            <Form>
                                <Form.Group className="form-group">
                                    <div className="mb-3 font-weight-semibold">
                                        Your Comment
                                    </div>
                                    <textarea className="form-control"></textarea>
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Button
                                        variant=""
                                        className="btn btn-primary mt-3 mb-0"
                                        type="button"
                                    >
                                        Post your review
                                    </Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                {productdetailsdata.map((idx) => (
                    <Col xl={3} sm={6} key={Math.random()}>
                        <Card className=" item-card">
                            <Card.Body className=" pb-0 h-100  product-grid6">
                                <div className="text-center product-image">
                                    <img
                                        src={idx.src}
                                        alt="img"
                                        className="img-fluid"
                                    />
                                </div>
                                <Card.Body className=" cardbody position-relative">
                                    <div className="cardtitle">
                                        <span className="fs-12 mb-2 fw-bold text-uppercase">
                                            {idx.name}{' '}
                                        </span>
                                        <a className="h6 mb-2 mt-4 fw-bold text-uppercase">
                                            {' '}
                                            {idx.item}{' '}
                                        </a>
                                    </div>
                                    <div className="cardprice">
                                        <span className="type--strikethrough">
                                            {idx.price}
                                        </span>
                                        <strong>{idx.discount}</strong>
                                    </div>
                                </Card.Body>
                            </Card.Body>
                            <div className="text-center border-top pt-3 pb-3 ps-2 pe-2 ">
                                <Link
                                    href="#!"
                                    className="btn btn-primary mb-0 mb-lg-2 me-1"
                                >
                                    {' '}
                                    View More
                                </Link>
                                <Link
                                    href="/admin/pages/e-commerce/cart"
                                    className="btn btn-secondary mb-0 mb-lg-2"
                                >
                                    <i className="fa fa-shopping-cart"></i> Add
                                    to cart
                                </Link>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

ProductDetails.layout = 'Contentlayout';

export default ProductDetails;
