import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import {
    Card,
    Col,
    Form,
    FormGroup,
    InputGroup,
    OverlayTrigger,
    Pagination,
    Row,
    Tooltip,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    OptionBabyKids,
    Optioncategory1,
    OptionElectronics,
    OptionMens,
    OptionSportBooksMore,
    OptionType,
    OptionWomen,
} from '../../../../shared/data/pages/e-commerce/shop';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
import {
    addToCart,
    addToWishlist,
    setSelectedItem,
} from '../../../../shared/redux/action';
const Select = dynamic(() => import('react-select'), { ssr: false });
const Shop = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products);
    const handleItemClick = (item) => {
        dispatch(setSelectedItem(item));
    };
    const handleAddToWishlist = (item) => {
        dispatch(addToWishlist(item));
    };

    const allIds = [
        ...cart.map((item) => item.id),
        ...products.map((item) => item.id),
    ];
    const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, id: nextId }));
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(products);
    // Function to handle search
    //   useEffect(() => {
    //     const filteredResults = products.filter(item =>
    // 		 item.itemname.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //     setSearchResults(filteredResults);
    //   }, [searchTerm, products]);

    return (
        <div>
            <Seo title={'Shop'} />
            <Pageheader title="SHOP" heading="Ecommerce" active="Products" />

            {/* <!-- row --> */}
            <Row className="row-sm">
                <Col xl={9} lg={8} md={12}>
                    <Row className="row-sm">
                        {searchResults.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No data
                                </td>
                            </tr>
                        ) : (
                            searchResults.map((item, index) => (
                                <Col
                                    sm={6}
                                    xl={4}
                                    xxl={3}
                                    lg={6}
                                    md={6}
                                    key={index}
                                >
                                    <Card>
                                        <Card.Body className="h-100  product-grid6">
                                            <div className="pro-img-box product-image">
                                                <div>
                                                    <Link
                                                        href={
                                                            '/admin/pages/e-commerce/product-details/'
                                                        }
                                                        onClick={() =>
                                                            handleItemClick(
                                                                item
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            className="pic-1"
                                                            src={item.pic1}
                                                            alt="product"
                                                        />
                                                        <img
                                                            className="pic-2"
                                                            src={item.pic2}
                                                            alt="product"
                                                        />
                                                    </Link>
                                                </div>

                                                <ul className="icons">
                                                    <li>
                                                        <Link
                                                            href={
                                                                '/admin/pages/e-commerce/wish-list/'
                                                            }
                                                            onClick={() =>
                                                                handleAddToWishlist(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={
                                                                    <Tooltip>
                                                                        Add to
                                                                        Wishlist
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <div className="primary-gradient me-2">
                                                                    <i className="fa fa-heart"></i>
                                                                </div>
                                                            </OverlayTrigger>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href={
                                                                '/admin/pages/e-commerce/cart/'
                                                            }
                                                            onClick={() =>
                                                                handleAddToCart(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={
                                                                    <Tooltip>
                                                                        Add to
                                                                        Cart
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <div className="secondary-gradient me-2">
                                                                    <i className="fa fa-shopping-cart"></i>
                                                                </div>
                                                            </OverlayTrigger>
                                                        </Link>
                                                    </li>

                                                    <li>
                                                        <Link
                                                            href={
                                                                '/admin/pages/e-commerce/product-details/'
                                                            }
                                                            onClick={() =>
                                                                handleItemClick(
                                                                    item
                                                                )
                                                            }
                                                        >
                                                            <OverlayTrigger
                                                                placement="top"
                                                                overlay={
                                                                    <Tooltip>
                                                                        Quick
                                                                        View
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <div className="info-gradient">
                                                                    <i className="fas fa-eye"></i>
                                                                </div>
                                                            </OverlayTrigger>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center pt-2">
                                                <h3 className="h6 mb-2 mt-4 fw-bold text-uppercase">
                                                    {item.item}
                                                </h3>
                                                <span className="fs-15 ms-auto">
                                                    <i className="ion ion-md-star text-warning"></i>
                                                    <i className="ion ion-md-star text-warning"></i>
                                                    <i className="ion ion-md-star text-warning"></i>
                                                    <i className="ion ion-md-star-half text-warning"></i>
                                                    <i className="ion ion-md-star-outline text-warning"></i>
                                                </span>
                                                <h4 className="h5 mb-0 mt-1 text-center fw-bold  fs-22">
                                                    {item.prices}
                                                    <del className="text-secondary font-weight-normal fs-13 d-inline-block ms-1 prev-price">
                                                        {item.disc}
                                                    </del>
                                                </h4>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        )}

                        <Pagination className="pagination product-pagination justify-content-end list-unstyled">
                            <Pagination.Item className="page-item page-prev disabled">
                                Prev
                            </Pagination.Item>
                            <Pagination.Item className="page-item active">
                                1
                            </Pagination.Item>
                            <Pagination.Item className="page-item">
                                2
                            </Pagination.Item>
                            <Pagination.Item className="page-item">
                                3
                            </Pagination.Item>
                            <Pagination.Item className="page-item">
                                4
                            </Pagination.Item>
                            <Pagination.Item className="page-item page-next">
                                Next
                            </Pagination.Item>
                        </Pagination>
                    </Row>
                </Col>
                <Col xl={3} lg={4} md={12} className="mb-md-0 mb-3">
                    <Card>
                        <Card.Body className="p-2">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Search ..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                                <InputGroup.Text className="btn btn-primary">
                                    Search
                                </InputGroup.Text>
                            </InputGroup>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <h3 className="card-title">Colors</h3>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gutters-xs">
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="azure"
                                            className="colorinput-input"
                                            defaultChecked
                                        />
                                        <span className="colorinput-color bg-azure"></span>
                                    </Form.Label>
                                </div>
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="indigo"
                                            className="colorinput-input"
                                        />
                                        <span className="colorinput-color bg-indigo"></span>
                                    </Form.Label>
                                </div>
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="purple"
                                            className="colorinput-input"
                                        />
                                        <span className="colorinput-color bg-purple"></span>
                                    </Form.Label>
                                </div>
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="pink"
                                            className="colorinput-input"
                                        />
                                        <span className="colorinput-color bg-pink"></span>
                                    </Form.Label>
                                </div>
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="red"
                                            className="colorinput-input"
                                        />
                                        <span className="colorinput-color bg-red"></span>
                                    </Form.Label>
                                </div>
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="orange"
                                            className="colorinput-input"
                                        />
                                        <span className="colorinput-color bg-orange"></span>
                                    </Form.Label>
                                </div>
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="yellow"
                                            className="colorinput-input"
                                        />
                                        <span className="colorinput-color bg-yellow"></span>
                                    </Form.Label>
                                </div>
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="lime"
                                            className="colorinput-input"
                                        />
                                        <span className="colorinput-color bg-lime"></span>
                                    </Form.Label>
                                </div>
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="green"
                                            className="colorinput-input"
                                        />
                                        <span className="colorinput-color bg-green"></span>
                                    </Form.Label>
                                </div>
                                <div className="col-auto">
                                    <Form.Label className="colorinput">
                                        <input
                                            name="color"
                                            type="radio"
                                            value="teal"
                                            className="colorinput-input"
                                        />
                                        <span className="colorinput-color bg-teal"></span>
                                    </Form.Label>
                                </div>
                            </Row>
                        </Card.Body>
                        <Card>
                            <Card.Header className="border-bottom pt-3 pb-3 mb-0 fw-bold text-uppercase">
                                Category
                            </Card.Header>
                            <Card.Body className="pb-0">
                                <FormGroup>
                                    <Form.Label className="form-label">
                                        Mens
                                    </Form.Label>
                                    <Select
                                        classNamePrefix="Select2"
                                        options={OptionMens}
                                        placeholder="Select"
                                    />
                                </FormGroup>
                                <FormGroup className="form-group mt-2">
                                    <Form.Label className="form-label">
                                        Women
                                    </Form.Label>
                                    <Select
                                        classNamePrefix="Select2"
                                        options={OptionWomen}
                                        placeholder="Select"
                                    />
                                </FormGroup>
                                <FormGroup className="form-group mt-2">
                                    <Form.Label className="form-label">
                                        Baby & Kids
                                    </Form.Label>
                                    <Select
                                        classNamePrefix="Select2"
                                        options={OptionBabyKids}
                                        placeholder="Select"
                                    />
                                </FormGroup>
                                <FormGroup className="form-group mt-2">
                                    <Form.Label className="form-label">
                                        Electronics
                                    </Form.Label>
                                    <Select
                                        classNamePrefix="Select2"
                                        options={OptionElectronics}
                                        placeholder="Select"
                                    />
                                </FormGroup>
                                <FormGroup className="form-group mt-2">
                                    <Form.Label className="form-label">
                                        Sport,Books & More{' '}
                                    </Form.Label>
                                    <Select
                                        classNamePrefix="Select2"
                                        options={OptionSportBooksMore}
                                        placeholder="Select"
                                    />
                                </FormGroup>
                            </Card.Body>
                            <Card.Header className="border-bottom border-top pt-3 pb-3 mb-0 fw-bold text-uppercase rounded-0">
                                Rating
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <FormGroup>
                                        <Form.Label>Brand</Form.Label>
                                        <Select
                                            classNamePrefix="Select2"
                                            options={Optioncategory1}
                                            placeholder="Select"
                                        />
                                    </FormGroup>
                                    <FormGroup className="form-group mt-2">
                                        <Form.Label>Type</Form.Label>
                                        <Select
                                            classNamePrefix="Select2"
                                            options={OptionType}
                                            placeholder="Select"
                                        />
                                    </FormGroup>
                                </Form>
                            </Card.Body>
                            <Card.Header className="border-bottom border-top pt-3 pb-3 mb-0 fw-bold text-uppercase rounded-0">
                                Rating
                            </Card.Header>
                            <div className="py-2 px-3">
                                <label className="p-1 mt-2 d-flex align-items-center">
                                    <span className="form-check mb-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckdefaultChecked1"
                                            defaultChecked
                                        />
                                    </span>
                                    <span className="ms-2 fs-16 my-auto">
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                    </span>
                                </label>
                                <label className="p-1 mt-2 d-flex align-items-center">
                                    <span className="form-check mb-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckdefaultChecked2"
                                            defaultChecked
                                        />
                                    </span>
                                    <span className="ms-2 fs-16 my-auto">
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                    </span>
                                </label>
                                <label className="p-1 mt-2 d-flex align-items-center">
                                    <span className="form-check mb-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckdefaultChecked3"
                                            defaultChecked
                                        />
                                    </span>
                                    <span className="ms-2 fs-16 my-auto">
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                    </span>
                                </label>
                                <label className="p-1 mt-2 d-flex align-items-center">
                                    <span className="form-check mb-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckdefaultChecked4"
                                        />
                                    </span>
                                    <span className="ms-2 fs-16 my-auto">
                                        <i className="ion ion-md-star  text-warning"></i>
                                        <i className="ion ion-md-star  text-warning"></i>
                                    </span>
                                </label>
                                <label className="p-1 mt-2 d-flex align-items-center">
                                    <span className="form-check mb-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckdefaultChecked5"
                                        />
                                    </span>
                                    <span className="ms-2 fs-16 my-auto">
                                        <i className="ion ion-md-star  text-warning"></i>
                                    </span>
                                </label>
                                <button
                                    className="btn btn-primary mt-2 mb-2 pb-2"
                                    type="submit"
                                >
                                    Filter
                                </button>
                            </div>
                        </Card>
                    </Card>
                </Col>
            </Row>

            {/* <!-- row closed --> */}
        </div>
    );
};

Shop.layout = 'Contentlayout';

export default Shop;
