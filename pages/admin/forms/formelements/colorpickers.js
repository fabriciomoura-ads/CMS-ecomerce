import { Fragment, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { colorpicker1 } from '../../../../shared/data/prismdata/formsdata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
import ShowCode from '../../../../shared/showcode/showcode';

import { ColorPicker, useColor } from 'react-color-palette';
const Colorpicker = () => {
    //color picker
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    //color picker
    const [color, setColor] = useColor('#561ecb');

    return (
        <Fragment>
            <Seo title={'Colorpicker'} />
            <Pageheader
                title="COLOR PICKERS"
                heading="Form Elements"
                active="COLOR PICKERS"
            />

            <Row>
                <Col xl={3}>
                    <ShowCode
                        title="Bootstrap Color Picker"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={colorpicker1}
                    >
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#136ad0"
                            title="Choose your color"
                        />
                    </ShowCode>
                </Col>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Classic</div>
                        </Card.Header>
                        <Card.Body className="pickr-container example-picker">
                            <div className="pickr">
                                <div className="d-flex justify-content-between">
                                    <div className="pickr-container1 example-picker">
                                        <Button
                                            variant="primary"
                                            className="pcr-button btn-md "
                                            onClick={toggleVisibility}
                                        >
                                            {' '}
                                            <i className="ri-palette-line fs-20"></i>
                                        </Button>
                                        {isVisible && (
                                            <ColorPicker
                                                color={color}
                                                onChange={setColor}
                                                hideInput={['hex', 'hsv']}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
Colorpicker.layout = 'Contentlayout';

export default Colorpicker;
