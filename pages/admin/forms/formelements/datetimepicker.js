import { Fragment, useState } from 'react';
import { Card, Col, InputGroup, Row } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';

// Registrar o locale português brasileiro
registerLocale('pt-BR', ptBR);

const Datetimepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [startDate1, setStartDate1] = useState(new Date());
    const handleDateChange1 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };
    const [startDate2, setStartDate2] = useState(new Date());
    const handleDateChange2 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate2(date);
        }
    };
    const [startDate3, setStartDate3] = useState(new Date());
    const handleDateChange3 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate3(date);
        }
    };
    const [startDate4, setStartDate4] = useState(new Date());
    const handleDateChange4 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate4(date);
        }
    };
    const [startDate5, setStartDate5] = useState(new Date());
    const handleDateChange5 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate5(date);
        }
    };
    const [startDate6, setStartDate6] = useState(new Date());
    const handleDateChange6 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate6(date);
        }
    };
    const [startDate7, setStartDate7] = useState(new Date());
    const handleDateChange7 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate7(date);
        }
    };

    return (
        <Fragment>
            <Seo title={'Datetimepicker'} />
            <Pageheader
                title="DATE & TIME PICKERS"
                heading="Form Elements"
                active="DATE & TIME PICKERS"
            />

            <Row>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Date picker</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        {' '}
                                        <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleDateChange}
                                    />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Date picker With Time
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        {' '}
                                        <i className="ri-calendar-line"></i>{' '}
                                    </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate1}
                                        onChange={handleDateChange1}
                                        timeInputLabel="Time:"
                                        dateFormat="yy/MM/dd h:mm aa"
                                        placeholderText="Choose date with time"
                                        showTimeInput
                                    />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Human Friendly dates
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        {' '}
                                        <i className="ri-calendar-line"></i>{' '}
                                    </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate2}
                                        onChange={handleDateChange2}
                                    />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Date range picker</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        {' '}
                                        <i className="ri-calendar-line"></i>
                                    </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate3}
                                        onChange={handleDateChange3}
                                    />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Time picker</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="input-group">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        {' '}
                                        <i className="ri-time-line"></i>{' '}
                                    </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate4}
                                        onChange={handleDateChange4}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Locale with time</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="input-group">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        {' '}
                                        <i className="ri-time-line"></i>{' '}
                                    </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate5}
                                        onChange={handleDateChange5}
                                        locale="pt-BR"
                                        showTimeSelect
                                        timeFormat="p"
                                        timeIntervals={15}
                                        dateFormat="Pp"
                                    />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Time Picker with Limits
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="input-group">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        {' '}
                                        <i className="ri-time-line"></i>{' '}
                                    </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate6}
                                        onChange={handleDateChange6}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Month Picker</div>
                        </Card.Header>
                        <Card.Body>
                            <div className="form-group">
                                <InputGroup className="input-group">
                                    <InputGroup.Text className="input-group-text text-muted">
                                        {' '}
                                        <i className="ri-time-line"></i>{' '}
                                    </InputGroup.Text>
                                    <DatePicker
                                        selected={startDate7}
                                        onChange={handleDateChange7}
                                        dateFormat="MM/yyyy"
                                        showMonthYearPicker
                                    />
                                </InputGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Datetimepicker.layout = 'Contentlayout';
export default Datetimepicker;
