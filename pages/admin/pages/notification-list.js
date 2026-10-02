import Link from 'next/link';
import { Badge, Button } from 'react-bootstrap';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
const Notificationslist = () => (
    <div>
        <Seo title={'Notifications List'} />
        <Pageheader
            title="NOTIFICATIONS LIST"
            heading="Pages"
            active="Notifications List"
        />
        {/* <!-- row --> */}
        <div className="container">
            <ul className="notification">
                <li>
                    <div className="notification-time">
                        <span className="date">Friday</span>
                        <span className="time">02:31</span>
                    </div>
                    <div className="notification-icon">
                        <Link href="#!"></Link>
                    </div>
                    <div className="notification-body">
                        <div className="media mt-0">
                            <div className="avatar avatar-md avatar-rounded main-avatar online me-3 shadow">
                                <Link
                                    className=""
                                    href={'/admin/pages/profile/'}
                                >
                                    <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={
                                            '../../../assets/images/faces/6.jpg'
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="media-body">
                                <div className="d-flex align-items-center">
                                    <div className="mt-0">
                                        <h5 className="mb-1 fs-15 fw-semibold text-dark">
                                            Emperio
                                        </h5>
                                        <p className="mb-0 tx-13 mb-0 text-muted">
                                            Project assigned by the manager all{' '}
                                            <Badge
                                                bg=""
                                                className=" bg-primary-transparent tx-12 font-weight-semibold text-primiary ms-1 me-1"
                                            >
                                                files
                                            </Badge>{' '}
                                            and{' '}
                                            <Badge
                                                bg=""
                                                className=" bg-primary-transparent text-primary tx-12 font-weight-semibold ms-1 me-1"
                                            >
                                                folders
                                            </Badge>
                                            were included
                                        </p>
                                    </div>
                                    <div className="ms-auto">
                                        <Badge
                                            bg=""
                                            className="float-end badge notification-badge"
                                        >
                                            <span className="tx-11 font-weight-semibold">
                                                24, oct 2021
                                            </span>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="notification-time">
                        <span className="date">Monday</span>
                        <span className="time">08:47</span>
                    </div>
                    <div className="notification-icon">
                        <Link href="#!"></Link>
                    </div>
                    <div className="notification-body">
                        <div className="media mt-0">
                            <div className="avatar avatar-md avatar-rounded main-avatar  me-3 shadow">
                                <Link
                                    className=""
                                    href={'/admin/pages/profile/'}
                                >
                                    <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={
                                            '../../../assets/images/faces/1.jpg'
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="media-body">
                                <div className="d-flex align-items-center">
                                    <div className="mt-0">
                                        <h5 className="mb-1 fs-15 fw-semibold text-dark">
                                            Anesthesia
                                        </h5>
                                        <p className="mb-0 tx-13 mb-0 text-muted">
                                            Admin and other team accepted your
                                            work request
                                        </p>
                                    </div>
                                    <div className="ms-auto">
                                        <Badge
                                            bg=""
                                            className="float-end badge notification-badge"
                                        >
                                            <span className="tx-11 font-weight-semibold">
                                                30,sep 2021
                                            </span>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="notification-time">
                        <span className="date">Yesterday</span>
                        <span className="time">18:43</span>
                    </div>
                    <div className="notification-icon">
                        <Link href="#!"></Link>
                    </div>
                    <div className="notification-body">
                        <div className="media mt-0">
                            <div className="avatar avatar-md avatar-rounded main-avatar online me-3 shadow">
                                <Link
                                    className=""
                                    href={'/admin/pages/profile/'}
                                >
                                    <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={
                                            '../../../assets/images/faces/15.jpg'
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="media-body">
                                <div className="d-flex align-items-center">
                                    <div className="mt-0">
                                        <h5 className="mb-1 fs-15 fw-semibold text-dark">
                                            Hughes
                                        </h5>
                                        <p className="mb-0 tx-13 mb-0 text-muted">
                                            Temporary data will be{' '}
                                            <Badge
                                                bg=""
                                                className=" bg-danger-transparent tx-12 font-weight-semibold me-1 ms-1"
                                            >
                                                deleted
                                            </Badge>{' '}
                                            once dedicated time complated
                                        </p>
                                    </div>
                                    <div className="ms-auto">
                                        <Badge
                                            bg=""
                                            className="float-end badge notification-badge"
                                        >
                                            <span className="tx-11 font-weight-semibold">
                                                11,sep 2021
                                            </span>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="notification-time">
                        <span className="date">Today</span>
                        <span className="time">03:18</span>
                    </div>
                    <div className="notification-icon">
                        <Link href="#!"></Link>
                    </div>
                    <div className="notification-body">
                        <div className="media mt-0">
                            <div className="avatar avatar-md avatar-rounded main-avatar online me-3 shadow">
                                <Link
                                    className=""
                                    href={'/admin/pages/profile/'}
                                >
                                    <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={
                                            '../../../assets/images/faces/2.jpg'
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="media-body">
                                <div className="d-flex align-items-center">
                                    <div className="mt-0">
                                        <h5 className="mb-1 fs-15 fw-semibold text-dark">
                                            Samantha Melon
                                        </h5>
                                        <p className="mb-0 tx-12 mb-0 text-muted">
                                            Approved date for sanction of loan
                                            is verified{' '}
                                            <i className="fe fe-check text-success"></i>
                                        </p>
                                    </div>
                                    <div className="ms-auto">
                                        <Badge
                                            bg=""
                                            className="float-end badge notification-badge"
                                        >
                                            <span className="tx-11 font-weight-semibold">
                                                18, sep 2021
                                            </span>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="notification-time">
                        <span className="date">Today</span>
                        <span className="time">12:24</span>
                    </div>
                    <div className="notification-icon">
                        <Link href="#!"></Link>
                    </div>
                    <div className="notification-body">
                        <div className="media mt-0">
                            <div className="avatar avatar-md avatar-rounded main-avatar  me-3 shadow">
                                <Link
                                    className=""
                                    href={'/admin/pages/profile/'}
                                >
                                    <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={
                                            '../../../assets/images/faces/11.jpg'
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="media-body">
                                <div className="d-flex align-items-center">
                                    <div className="mt-0">
                                        <h5 className="mb-1 fs-15 fw-semibold text-dark">
                                            Nexus Ronaldo
                                        </h5>
                                        <p className="mb-0 tx-13 mb-0 text-muted">
                                            Social network accounts are at risk
                                            check your{' '}
                                            <Badge
                                                bg=""
                                                className=" bg-success-transparent font-weight-semibold tx-12 ms-1 me-1"
                                            >
                                                login
                                            </Badge>{' '}
                                            details
                                        </p>
                                    </div>
                                    <div className="ms-auto">
                                        <Badge
                                            bg=""
                                            className="float-end badge notification-badge"
                                        >
                                            <span className="tx-11 font-weight-semibold">
                                                18,sep 2021
                                            </span>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="notification-time">
                        <span className="date">Today</span>
                        <span className="time">04:11</span>
                    </div>
                    <div className="notification-icon">
                        <Link href="#!"></Link>
                    </div>
                    <div className="notification-body">
                        <div className="media mt-0">
                            <div className="avatar avatar-md avatar-rounded main-avatar online me-3 shadow">
                                <Link
                                    className=""
                                    href={'/admin/pages/profile/'}
                                >
                                    <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={
                                            '../../../assets/images/faces/13.jpg'
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="media-body">
                                <div className="d-flex align-items-center">
                                    <div className="mt-0">
                                        <h5 className="mb-1 fs-15 fw-semibold text-dark">
                                            Hercules
                                        </h5>
                                        <p className="mb-0 tx-13 mb-0 text-muted">
                                            Changed the password of gmail 4 hrs
                                            ago.{' '}
                                            <Badge
                                                bg=""
                                                className=" bg-secondary"
                                            >
                                                Update
                                            </Badge>
                                        </p>
                                    </div>
                                    <div className="ms-auto">
                                        <Badge
                                            bg=""
                                            className="float-end badge notification-badge"
                                        >
                                            <span className="tx-11 font-weight-semibold">
                                                18,sep 2021
                                            </span>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="notification-time">
                        <span className="date">today</span>
                        <span className="time">02:52</span>
                    </div>
                    <div className="notification-icon">
                        <Link href="#!"></Link>
                    </div>
                    <div className="notification-body">
                        <div className="media mt-0">
                            <div className="avatar avatar-md avatar-rounded main-avatar online me-3 shadow">
                                <Link
                                    className=""
                                    href={'/admin/pages/profile/'}
                                >
                                    <img
                                        alt="avatar"
                                        className="rounded-circle"
                                        src={
                                            '../../../assets/images/faces/4.jpg'
                                        }
                                    />
                                </Link>
                            </div>
                            <div className="media-body">
                                <div className="d-flex align-items-center">
                                    <div className="mt-0">
                                        <h5 className="mb-1 fs-15 fw-semibold text-dark">
                                            Milinda
                                        </h5>
                                        <p className="mb-0 tx-13 mb-0 text-muted">
                                            Completed target date to change data
                                            heirarchy
                                        </p>
                                    </div>
                                    <div className="ms-auto">
                                        <Badge
                                            bg=""
                                            className="float-end badge notification-badge"
                                        >
                                            <span className="tx-11 font-weight-semibold">
                                                18,sep 2021
                                            </span>
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="text-center mb-4">
                <Button className="btn btn-primary">Load more</Button>
            </div>
        </div>
        {/* <!-- row closed --> */}
    </div>
);

Notificationslist.layout = 'Contentlayout';

export default Notificationslist;
