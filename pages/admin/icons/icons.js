import Link from 'next/link';
import { Fragment } from 'react';
import { Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import {
    Bootstrapicons,
    Boxicons,
    Feathericons,
    Fontawesome,
    Ionicicons,
    LineAwesomeicons,
    Materialdesign,
    Pe7icons,
    Remixicons,
    Simplelineicons,
    Tablericons,
    Themifyicons,
    Typicons,
    Weathericons,
} from '../../../shared/data/icons/icondata';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';

const Icons = () => {
    return (
        <Fragment>
            <Seo title={'Icons'} />
            <Pageheader title="Icons" heading="Icons" active="Icons" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Bootstrap Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <a
                                    href="https://icons.getbootstrap.com/"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </a>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="bi
                                    bi-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Bootstrapicons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    bi bi-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={`bi bi-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Remix Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <a
                                    href="https://remixicon.com/"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </a>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="ri-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Remixicons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>ri-{idx.text}</Tooltip>
                                            }
                                        >
                                            <i className={`ri-${idx.text}`}></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Feather Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <a
                                    href="https://feathericons.com/"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </a>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="fe
                                    fe-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Feathericons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    fe fe-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={`fe fe-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Tabler Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <a
                                    href="https://tabler-icons.io/"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </a>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="ti
                                    ti-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Tablericons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    ti ti-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={`ti ti-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Line Awesome Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <a
                                    href="https://icons8.com/line-awesome"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </a>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="las
                                    la-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {LineAwesomeicons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    las la-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={`las la-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Boxicons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <Link
                                    href="https://boxicons.com/"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="bx
                                    bx-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Boxicons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    bx bx-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={`bx bx-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">Fontawesome Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <Link
                                    href="http://fontawesome.io"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="fa
                                    fa-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Fontawesome.map((icon) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    {icon.className}
                                                </Tooltip>
                                            }
                                        >
                                            <i className={icon.className}></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Materialdesign Icons
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <Link
                                    href="https://materialdesignicons.com"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="mdi
                                    mdi-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Materialdesign.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    mdi mdi-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={` mdi mdi-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">Simpleline Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <Link
                                    href="https://simplelineicons.github.io/"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="si
                                    si-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Simplelineicons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    si si-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={` si si-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <div className="card-title">Ionic Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <Link
                                    href="https://ionicons.com"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="ion
                                    ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Ionicicons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    icon ion-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={` icon ion-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">Pe7 Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <Link
                                    href="https://themes-pixeden.com/font-demos/7-stroke/"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="pe-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Pe7icons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    pe-7s-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={` pe-7s-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">Themify Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <Link
                                    href="https://themify.me/themify-icons"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="ti-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Themifyicons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>ti-{idx.text}</Tooltip>
                                            }
                                        >
                                            <i
                                                className={` ti-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">Typicons Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <Link
                                    href="https://www.s-ings.com/typicons/"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="typcn
                                    typcn-ICON_NAME"&gt;&lt;/i&gt;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Typicons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    typcn typcn-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={`typcn typcn-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <div className="card-title">Weather Icons</div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">
                                Simply beautiful open source icons. For more
                                info{' '}
                                <Link
                                    href="https://erikflowers.github.io/weather-icons/"
                                    target="_blank"
                                    className="text-primary"
                                    rel="noreferrer"
                                >
                                    click here
                                </Link>
                                .
                            </p>
                            <p className="mb-4">
                                <code>
                                    &lt;i className="wi
                                    wi-ICON_NAME"&gt;&lt;/i&gtI;
                                </code>
                            </p>
                            <ul className="icons-list list-unstyled">
                                {Weathericons.map((idx) => (
                                    <li
                                        className="icons-list-item"
                                        key={Math.random()}
                                    >
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={
                                                <Tooltip>
                                                    wi wi-{idx.text}
                                                </Tooltip>
                                            }
                                        >
                                            <i
                                                className={`wi wi-${idx.text}`}
                                            ></i>
                                        </OverlayTrigger>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Icons.layout = 'Contentlayout';
export default Icons;
