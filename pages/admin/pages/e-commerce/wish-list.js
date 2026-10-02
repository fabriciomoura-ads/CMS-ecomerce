import Link from 'next/link';
import { useState } from 'react';
import { Button, Card, Col, Pagination, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { defaultWishlistdata } from '../../../../shared/data/pages/e-commerce/wish-listdata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
import { addToCart, removeFromWishlist } from '../../../../shared/redux/action';
const Wishlist = () => {
    const reduxWishlist = useSelector((state) => state.wishlist);
    const [localWishlist, setLocalWishlist] = useState(defaultWishlistdata);
    const combinedWishlist = [...localWishlist, ...reduxWishlist];

    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        setLocalWishlist(localWishlist.filter((item) => item.id !== id));
        dispatch(removeFromWishlist(id));
    };

    const allIds = [
        ...cart.map((item) => item.id),
        ...products.map((item) => item.id),
    ];
    const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

    const handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, id: nextId }));
    };

    const isEmpty = combinedWishlist.length === 0;

    return (
        <div>
            <Seo title={'Wish list'} />
            <Pageheader
                title="WISH LIST"
                heading="Ecommerce"
                active="Wish-list"
            />

            {/* <!-- ROW-1 OPEN --> */}
            <Col className="p-0" lg={12} xl={12}>
                <Row className="row">
                    {isEmpty ? (
                        <div className="text-center">
                            <img src={ALLImages('png13')} alt="" />
                            <h5>Your Wishlist is Empty</h5>
                            <h6>Add Some items to make me happy 😃</h6>
                        </div>
                    ) : (
                        combinedWishlist.map((item) => (
                            <Col
                                xl={3}
                                lg={6}
                                md={4}
                                className="alert"
                                key={item.id}
                            >
                                <Card className="item-card">
                                    <Card.Body className="pb-0">
                                        <div className="text-center zoom">
                                            <Link
                                                href={
                                                    '/admin/pages/e-commerce/shop/'
                                                }
                                            >
                                                <img
                                                    className="w-100 br-5"
                                                    src={item.src}
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <Card.Body className="px-0 pb-3">
                                            <Row>
                                                <div className="col-8">
                                                    <div className="cardtitle">
                                                        <div>
                                                            <Link href="#!">
                                                                <i className="fa fa-star text-warning fs-16"></i>
                                                            </Link>
                                                            <Link href="#!">
                                                                <i className="fa fa-star text-warning fs-16"></i>
                                                            </Link>
                                                            <Link href="#!">
                                                                <i className="fa fa-star text-warning fs-16"></i>
                                                            </Link>
                                                            <Link href="#!">
                                                                <i className="fa fa-star-half text-warning fs-16"></i>
                                                            </Link>
                                                            <Link href="#!">
                                                                <i className="fa fa-star-o text-warning fs-16"></i>
                                                            </Link>
                                                            <Link href="#!">
                                                                {item.num}
                                                            </Link>
                                                        </div>
                                                        <Link
                                                            href="#!"
                                                            className="shop-title"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="cardprice-2">
                                                        <span className="type--strikethrough number-font">
                                                            {item.disc}
                                                        </span>
                                                        <span className="number-font">
                                                            {item.prices}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Row>
                                            <div>
                                                <p className="shop-description fs-13 text-muted mt-2 mb-0">
                                                    {item.text}
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card.Body>
                                    <Card.Footer className="text-center">
                                        <div className="text-center ps-2 pe-2">
                                            <Button
                                                variant=""
                                                className="btn btn-md btn-primary mb-2 ms-2 w-45"
                                            >
                                                <Link
                                                    href={
                                                        '/admin/pages/e-commerce/cart/'
                                                    }
                                                    className="text-fixed-white"
                                                    onClick={() =>
                                                        handleAddToCart(item)
                                                    }
                                                >
                                                    <i className="fe fe-shopping-cart me-1"></i>{' '}
                                                    Add to Cart
                                                </Link>
                                            </Button>
                                            <Link
                                                href="#!"
                                                className="btn btn-md btn-light mb-2 ms-2 w-45"
                                                data-bs-dismiss="alert"
                                                aria-label="Close"
                                                onClick={() =>
                                                    handleDelete(item.id)
                                                }
                                            >
                                                <span className="me-2 fs-14">
                                                    Remove
                                                </span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="16px"
                                                    viewBox="0 0 24 24"
                                                    width="16px"
                                                    fill="#495057"
                                                >
                                                    <path
                                                        d="M0 0h24v24H0V0z"
                                                        fill="none"
                                                    />
                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
                <div className="d-flex justify-content-end">
                    <Pagination className="pagination mb-5">
                        <Pagination.Item className="disabled page-item">
                            ‹
                        </Pagination.Item>
                        <Pagination.Item className="active page-item">
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
                        <Pagination.Item className="page-item">
                            5
                        </Pagination.Item>
                        <Pagination.Item className="page-item">
                            ›
                        </Pagination.Item>
                    </Pagination>
                </div>
            </Col>
            {/* <!-- COL-END --> */}
        </div>
    );
};
Wishlist.layout = 'Contentlayout';

export default Wishlist;
