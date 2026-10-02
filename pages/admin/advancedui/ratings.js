import StarsIcon from '@mui/icons-material/Stars';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Fragment, useState } from 'react';
import {
    Button,
    Card,
    Col,
    OverlayTrigger,
    Row,
    Tooltip,
} from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Ratings = () => {
    const [ratingValue, setRatingValue] = useState(null);
    const [ratingValue1, setRatingValue1] = useState(null);
    const handleRatingChange1 = (_event, newValue) => {
        setRatingValue1(newValue);
    };
    const [ratingValue2, setRatingValue2] = useState(null);
    const handleRatingChange2 = (_event, newValue) => {
        setRatingValue2(newValue);
    };
    const [ratingValue3, setRatingValue3] = useState(null);
    const handleRatingChange3 = (_event, newValue) => {
        setRatingValue3(newValue);
    };
    const [ratingValue4, setRatingValue4] = useState(null);
    const handleRatingChange4 = (_event, newValue) => {
        setRatingValue4(newValue);
    };
    const handleRatingChange = (_event, newValue) => {
        setRatingValue(newValue);
    };

    const handleResetRating = () => {
        setRatingValue(null);
    };

    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    const labels = ['0', '1', '2', '3', '4', '5'];
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    return (
        <Fragment>
            <Seo title={'Ratings'} />
            <Pageheader
                title="RATINGS"
                heading="Advanced UI"
                active="Ratings"
            />
            {/* <!-- Row1 --> */}
            <Row>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Rater</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">
                                    Show Some{' '}
                                    <span className="text-danger">
                                        &#10084;
                                    </span>{' '}
                                    with rating :
                                </p>
                                <Rating
                                    name="clickable-rating"
                                    value={ratingValue1}
                                    onChange={handleRatingChange1}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                5 star rater with steps
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">
                                    Dont forget to rate the product :
                                </p>
                                <Rating
                                    name="half-rating"
                                    value={ratingValue2}
                                    onChange={handleRatingChange2}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Custom messages</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">
                                    Your rating is much appreciated&#128079; :
                                </p>
                                <Box sx={{ '& > legend': { mt: 2 } }}>
                                    <Rating
                                        name="no-value"
                                        size="large"
                                        value={ratingValue4}
                                        max={5}
                                        onChange={handleRatingChange4}
                                    />
                                </Box>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Unlimited number of stars readOnly
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">
                                    Thanks for rating :
                                </p>
                                <Stack
                                    spacing={1}
                                    className="rating-stars block my-rating-7 flex-wrap"
                                >
                                    <Rating
                                        name="half-rating-read"
                                        value={3}
                                        max={10}
                                        size="large"
                                        readOnly
                                    />
                                </Stack>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                5 Star rater with custom isBusyText and
                                simulated backend
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">
                                    Thanks for rating :
                                </p>
                                <Rating
                                    name="no-value"
                                    value={ratingValue3}
                                    onChange={handleRatingChange3}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">On hover event</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">
                                    Please give your valuable rating :
                                </p>
                                <Box
                                    sx={{
                                        width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Rating
                                        name="hover-feedback"
                                        value={value}
                                        precision={0.5}
                                        getLabelText={getLabelText}
                                        onChange={(_event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        onChangeActive={(_event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={
                                            <StarsIcon
                                                style={{ opacity: 0.55 }}
                                                fontSize="inherit"
                                            />
                                        }
                                    />
                                    {value !== null && (
                                        <Box
                                            className="rating-stars my-rating-9 rating-9"
                                            sx={{ ml: 2 }}
                                        >
                                            <span className="live-rating badge bg-success-transparent ms-3">
                                                {
                                                    labels[
                                                        hover !== -1
                                                            ? hover
                                                            : value
                                                    ]
                                                }
                                            </span>
                                        </Box>
                                    )}
                                </Box>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Clear/reset rater</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <p className="fs-14 mb-0 fw-semibold">
                                    Thank You so much for your support :
                                </p>
                                <div className="d-flex flex-wrap align-items-center">
                                    <Rating
                                        name="clickable-rating"
                                        value={ratingValue}
                                        onChange={handleRatingChange} // Handle rating change when the user clicks
                                    />
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip>Reset</Tooltip>}
                                    >
                                        <Button
                                            variant="danger-light"
                                            className="btn btn-icon btn-sm ms-3"
                                            id="rater-reset-button"
                                            onClick={handleResetRating}
                                        >
                                            <i className="ri-restart-line"></i>
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Row1 Closed --> */}
        </Fragment>
    );
};
Ratings.layout = 'Contentlayout';
export default Ratings;
