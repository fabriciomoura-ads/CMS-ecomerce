import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    Button,
    Card,
    Col,
    Form,
    OverlayTrigger,
    Row,
    Table,
    Tooltip,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { shoppingcartData } from '../../../../shared/data/pages/e-commerce/cart';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
import {
    addToCheckout,
    addToWishlist,
    removeFromCart,
    updateCartQuantity,
} from '../../../../shared/redux/action';
const Cart = () => {
    const dispatch = useDispatch();
    const reduxCart = useSelector((state) => state.cart);
    const [localCart, setLocalCart] = useState(shoppingcartData);
    const Datacard = [...localCart, ...reduxCart];

    useEffect(() => {
        setLocalCart(
            localCart.filter(
                (item) =>
                    !reduxCart.some((reduxItem) => reduxItem.id === item.id)
            )
        );
    }, [reduxCart]);

    const handleDelete = (id) => {
        setLocalCart(localCart.filter((item) => item.id !== id));
        dispatch(removeFromCart(id));
    };

    const handleAddToWishlist = (item) => {
        dispatch(addToWishlist(item));
    };

    const handleCheckout = () => {
        const combinedItems = [...localCart, ...reduxCart];
        dispatch(addToCheckout(combinedItems));
    };

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;

        setLocalCart((prevLocalCart) =>
            prevLocalCart.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );

        dispatch(updateCartQuantity(id, newQuantity));
    };

    const isEmpty = Datacard.length === 0;
    return (
        <div>
            <Seo title={'Cart'} />
            <Pageheader title="CART" heading="Ecommerce" active="Cart" />

            {/* <!-- row --> */}
            <Row>
                <Col lg={12} xl={9} md={12}>
                    <Card>
                        <Card.Body>
                            <div className="product-details table-responsive text-nowrap">
                                {isEmpty ? (
                                    <div className="text-center">
                                        <img
                                            src="../../../../assets/images/ecommerce/30.png"
                                            alt=""
                                        />
                                        <h6>Your Shopping Cart is Empty</h6>
                                        <p>
                                            Add Some items to make me happy 😃
                                        </p>
                                    </div>
                                ) : (
                                    <Table className="table table-bordered table-hover mb-0 text-nowrap">
                                        <thead>
                                            <tr>
                                                <th className="text-start">
                                                    Product
                                                </th>
                                                <th className="w-150">
                                                    Quantity
                                                </th>
                                                <th>Prize</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Datacard.map((item) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <div className="media">
                                                            <div className="card-aside-img">
                                                                <img
                                                                    src={
                                                                        item.src
                                                                    }
                                                                    alt="img"
                                                                    className="h-60 w-60"
                                                                />
                                                            </div>
                                                            <div className="media-body">
                                                                <div className="card-item-desc mt-0">
                                                                    <h6 className="fw-semibold mt-0 text-uppercase">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </h6>
                                                                    <dl className="card-item-desc-1">
                                                                        <dt>
                                                                            Size:&nbsp;
                                                                        </dt>
                                                                        <dd>
                                                                            {
                                                                                item.size
                                                                            }
                                                                        </dd>
                                                                    </dl>
                                                                    <dl className="card-item-desc-1">
                                                                        <dt>
                                                                            Color:&nbsp;
                                                                        </dt>
                                                                        <dd>
                                                                            {
                                                                                item.color
                                                                            }
                                                                        </dd>
                                                                    </dl>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="handle-counter input-group border rounded flex-nowrap">
                                                            <Button
                                                                variant=""
                                                                className="btn btn-icon btn-light input-group-text product-quantity-minus"
                                                                onClick={() =>
                                                                    updateQuantity(
                                                                        item.id,
                                                                        item.quantity -
                                                                            1
                                                                    )
                                                                }
                                                            >
                                                                <i className="ri-subtract-line"></i>
                                                            </Button>
                                                            <span
                                                                className="m-2 text-center w-100"
                                                                aria-label="quantity"
                                                            >
                                                                {item.quantity}
                                                            </span>
                                                            <Button
                                                                variant=""
                                                                className="btn btn-icon btn-light input-group-text product-quantity-plus"
                                                                onClick={() =>
                                                                    updateQuantity(
                                                                        item.id,
                                                                        item.quantity +
                                                                            1
                                                                    )
                                                                }
                                                            >
                                                                <i className="ri-add-line"></i>
                                                            </Button>
                                                        </div>
                                                    </td>
                                                    <td className="text-center text-lg text-medium fw-bold fs-15">
                                                        {item.prices}
                                                    </td>
                                                    <td className="text-center">
                                                        <span
                                                            className={`badge bg-${item.stockbg} p-1`}
                                                        >
                                                            {item.stock}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <OverlayTrigger
                                                            overlay={
                                                                <Tooltip>
                                                                    Save for
                                                                    Wishlist
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Link
                                                                href={
                                                                    '/admin/pages/e-commerce/wish-list/'
                                                                }
                                                                className="btn btn-icon btn-secondary-transparent btn-wave waves-effect waves-light me-1"
                                                                onClick={() =>
                                                                    handleAddToWishlist(
                                                                        item
                                                                    )
                                                                }
                                                            >
                                                                <i className="ri-heart-line"></i>
                                                            </Link>
                                                        </OverlayTrigger>
                                                        <OverlayTrigger
                                                            overlay={
                                                                <Tooltip>
                                                                    Remove
                                                                </Tooltip>
                                                            }
                                                        >
                                                            <Link
                                                                href="#!"
                                                                className="btn btn-icon btn-info-transparent btn-wave waves-effect waves-light me-1"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                <i className="ri-delete-bin-7-line"></i>
                                                            </Link>
                                                        </OverlayTrigger>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                )}
                            </div>
                        </Card.Body>
                        <Card.Footer className=" d-flex justify-content-between flex-wrap gap-2">
                            <div>
                                <Link
                                    className="btn btn-secondary"
                                    href="/admin/pages/e-commerce/shop"
                                >
                                    <i className="fe fe-corner-up-left  mx-2"></i>
                                    Back to Shopping
                                </Link>
                            </div>
                            <div className="btn-list">
                                <Link className="btn btn-primary" href="#!">
                                    <i className="fe fe-refresh-cw mx-2"></i>
                                    Update Cart
                                </Link>
                                <Link
                                    className="btn btn-outline-primary"
                                    href="/admin/pages/e-commerce/checkout"
                                    onClick={handleCheckout}
                                >
                                    <i className="fe fe-log-in mx-2"></i>
                                    Checkout
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={12} xl={3} md={12}>
                    <Card className=" custom-card">
                        <Card.Body>
                            <Form>
                                <Form.Group className="form-group mb-0">
                                    {' '}
                                    <label>Have coupon?</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Coupon code"
                                            aria-label="Coupon code"
                                            aria-describedby="button-addon2"
                                        />
                                        <Button
                                            variant="primary"
                                            className="btn "
                                            type="button"
                                        >
                                            Apply
                                        </Button>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card cart-details">
                        <Card.Body className=" p-0">
                            <div className="p-4">
                                <p className="mb-3 fw-bold fs-14">
                                    PRICE DETAIL
                                </p>
                                <dl className="dlist-align">
                                    <dt className="">ITEMS 3</dt>
                                    <dd className="text-end ms-auto">
                                        $ 262.00
                                    </dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dt>Discount:</dt>
                                    <dd className="text-end text-danger ms-auto">
                                        - $20.00
                                    </dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dt>Total price:</dt>
                                    <dd className="text-end ms-auto">
                                        $252.97
                                    </dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dt>Delivery:</dt>
                                    <dd className="text-end text-success ms-auto">
                                        Free
                                    </dd>
                                </dl>
                            </div>
                            <hr />
                            <div className="px-4">
                                <dl className="dlist-align">
                                    <dt>Total:</dt>
                                    <dd className="text-end  ms-auto fs-20">
                                        <strong>$252.97</strong>
                                    </dd>
                                </dl>
                            </div>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="column">
                                <Link
                                    className="btn btn-primary"
                                    href="/admin/pages/e-commerce/shop/"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- row closed --> */}
        </div>
    );
};

Cart.layout = 'Contentlayout';

export default Cart;
