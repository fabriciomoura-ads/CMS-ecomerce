import { SnackbarProvider, closeSnackbar, enqueueSnackbar } from 'notistack';
import { Fragment } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Notifications = () => {
    const action = (i) => (
        <Fragment>
            <Button
                variant="warning"
                className="me-2"
                onClick={() => {
                    alert(`I belong to snackbar with id ${i}`);
                }}
            >
                Undo
            </Button>
            <Button
                variant="danger"
                onClick={() => {
                    closeSnackbar(i);
                }}
            >
                Dismiss
            </Button>
        </Fragment>
    );

    return (
        <Fragment>
            <Seo title={'Notifications'} />
            <Pageheader
                title="NOTIFICATIONS"
                heading="Apps"
                active="Notifications"
            />
            <SnackbarProvider maxSnack={3} />
            <ToastContainer />
            {/* <!-- Row1 --> */}
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header className="border-bottom">
                            <div className="card-title">
                                Notistack Notification
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button
                                    onClick={() =>
                                        enqueueSnackbar('Welcome to Nowa !')
                                    }
                                >
                                    Default Notification
                                </Button>
                                <Button
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'I can only available for Three times!'
                                        )
                                    }
                                >
                                    Maximum 3 of notification
                                </Button>
                                <Button
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Your post has been archived',
                                            { action }
                                        )
                                    }
                                >
                                    Notistack Action
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={6}>
                    <Card>
                        <Card.Header className="border-bottom">
                            <div className="card-title">
                                Notistack variant Notification
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button
                                    variant="primary"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am default variant',
                                            { variant: 'default' }
                                        )
                                    }
                                >
                                    Default
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am error variant',
                                            { variant: 'error' }
                                        )
                                    }
                                >
                                    error{' '}
                                </Button>
                                <Button
                                    variant="info"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am info variant',
                                            { variant: 'info' }
                                        )
                                    }
                                >
                                    info
                                </Button>
                                <Button
                                    variant="success"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am success variant',
                                            { variant: 'success' }
                                        )
                                    }
                                >
                                    success
                                </Button>
                                <Button
                                    variant="warning"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am warning variant',
                                            { variant: 'warning' }
                                        )
                                    }
                                >
                                    warning
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card>
                        <Card.Header className="border-bottom">
                            <div className="card-title">
                                Notistack Positioning Notification
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button
                                    variant="primary"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am at top and right corner',
                                            {
                                                anchorOrigin: {
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                },
                                            }
                                        )
                                    }
                                >
                                    Top
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am at bottom and right corner',
                                            {
                                                anchorOrigin: {
                                                    vertical: 'bottom',
                                                    horizontal: 'right',
                                                },
                                            }
                                        )
                                    }
                                >
                                    Bottom
                                </Button>
                                <Button
                                    variant="info"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am at top and left corner',
                                            {
                                                anchorOrigin: {
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                },
                                            }
                                        )
                                    }
                                >
                                    Left
                                </Button>
                                <Button
                                    variant="success"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am at top and right corner',
                                            {
                                                anchorOrigin: {
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                },
                                            }
                                        )
                                    }
                                >
                                    Right
                                </Button>
                                <Button
                                    variant="warning"
                                    onClick={() =>
                                        enqueueSnackbar(
                                            'Hi.. I am at top and center corner',
                                            {
                                                anchorOrigin: {
                                                    vertical: 'top',
                                                    horizontal: 'center',
                                                },
                                            }
                                        )
                                    }
                                >
                                    Center
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row1 Closed --> */}

            {/* <!-- Row2 --> */}
            <Row>
                <Col xl={4}>
                    <Card>
                        <Card.Header className="border-bottom">
                            <div className="card-title">
                                React Tostify Positioning Notification
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="card-content">
                                <div className="btn-list">
                                    <Button
                                        variant="primary"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            enqueueSnackbar(
                                                'Hi.. I am at top and right corner',
                                                {
                                                    anchorOrigin: {
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    },
                                                }
                                            );
                                        }}
                                    >
                                        Top
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            enqueueSnackbar(
                                                'Hi.. I am at bottom and right corner',
                                                {
                                                    anchorOrigin: {
                                                        vertical: 'bottom',
                                                        horizontal: 'right',
                                                    },
                                                }
                                            );
                                        }}
                                    >
                                        Bottom
                                    </Button>
                                    <Button
                                        variant="info"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            enqueueSnackbar(
                                                'Hi.. I am at top and left corner',
                                                {
                                                    anchorOrigin: {
                                                        vertical: 'top',
                                                        horizontal: 'left',
                                                    },
                                                }
                                            );
                                        }}
                                    >
                                        Left
                                    </Button>
                                    <Button
                                        variant="success"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            enqueueSnackbar(
                                                'Hi.. I am at top and right corner',
                                                {
                                                    anchorOrigin: {
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    },
                                                }
                                            );
                                        }}
                                    >
                                        Right
                                    </Button>
                                    <Button
                                        variant="warning"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            enqueueSnackbar(
                                                'Hi.. I am at top and center corner',
                                                {
                                                    anchorOrigin: {
                                                        vertical: 'top',
                                                        horizontal: 'center',
                                                    },
                                                }
                                            );
                                        }}
                                    >
                                        Center
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Header className="border-bottom">
                            <div className="card-title">
                                React Tostify Type Notification
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="card-content">
                                <div className="btn-list">
                                    <Button
                                        variant="light"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toast(
                                                '⭐ Hello i am default notification !!',
                                                { position: 'top-left' }
                                            );
                                        }}
                                    >
                                        Default
                                    </Button>
                                    <Button
                                        variant="info"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toast.info(
                                                'Hello i am info notification !!',
                                                { position: 'top-left' }
                                            );
                                        }}
                                    >
                                        Info
                                    </Button>
                                    <Button
                                        variant="success"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toast.success(
                                                'Hello i am success notification !!',
                                                { position: 'top-left' }
                                            );
                                        }}
                                    >
                                        Success
                                    </Button>
                                    <Button
                                        variant="warning"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toast.warning(
                                                'Hello i am warning notification !!',
                                                { position: 'top-left' }
                                            );
                                        }}
                                    >
                                        Warning
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toast.error(
                                                'Hello i am error notification !!',
                                                { position: 'top-left' }
                                            );
                                        }}
                                    >
                                        Error
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Header className="border-bottom">
                            <div className="card-title">
                                React Tostify Theme Notification
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="card-content">
                                <div className="btn-list">
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            toast.success(
                                                '⭐ Hello i am success notification !!',
                                                {
                                                    position: 'top-left',
                                                    theme: 'light',
                                                }
                                            )
                                        }
                                    >
                                        success
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            toast.error(
                                                ' ⭐ Hello i am error notification !!',
                                                {
                                                    position: 'top-left',
                                                    theme: 'dark',
                                                }
                                            )
                                        }
                                    >
                                        error
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            toast.warning(
                                                ' ⭐ Hello i am warning notification !!',
                                                {
                                                    position: 'top-left',
                                                    theme: 'colored',
                                                }
                                            )
                                        }
                                    >
                                        warning
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card>
                        <Card.Header className="border-bottom">
                            <div className="card-title">
                                React Tostify Other featured style
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="card-content">
                                <div className="btn-list">
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            toast.success(
                                                '⭐ Hello i will close in 1Sec !!',
                                                {
                                                    position: 'top-left',
                                                    theme: 'light',
                                                    autoClose: 1000,
                                                }
                                            )
                                        }
                                    >
                                        Auto closed notification
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            toast.success(
                                                ' ⭐ Hello i am dark notification !!',
                                                {
                                                    position: 'top-left',
                                                    theme: 'light',
                                                    draggable: true,
                                                }
                                            )
                                        }
                                    >
                                        Draggble
                                    </Button>
                                    <Button
                                        variant="primary"
                                        onClick={() => {
                                            const resolveAfter3Sec =
                                                new Promise((resolve) =>
                                                    setTimeout(resolve, 3000)
                                                );
                                            toast.promise(resolveAfter3Sec, {
                                                pending: 'Promise is pending',
                                                success: 'Promise resolved 👌',
                                                error: 'Promise rejected 🤯',
                                            });
                                        }}
                                    >
                                        Promises
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row2 Closed --> */}
        </Fragment>
    );
};
Notifications.layout = 'Contentlayout';
export default Notifications;
