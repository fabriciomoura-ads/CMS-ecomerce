import { useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';

//filepond
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { FilePond, registerPlugin } from 'react-filepond';
import { fileupload1 } from '../../../../shared/data/prismdata/formsdata';
import Pageheader from '../../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../../shared/layout-components/seo/seo';
import ShowCode from '../../../../shared/showcode/showcode';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Fileuploads = () => {
    const [files, setFiles] = useState([]);
    const [files1, setFiles1] = useState([]);
    const [files2, setFiles2] = useState([]);
    return (
        <>
            <Seo title={'Fileuploads'} />
            <Pageheader
                title="FILE UPLOADS"
                heading="Form Elements"
                active="FILE UPLOADS"
            />
            <Row>
                <Col xl={6}>
                    <ShowCode
                        title="Bootstrap File Input"
                        customCardClass="custom-card"
                        customCardBodyClass=""
                        code={fileupload1}
                    >
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group
                            controlId="formFileMultiple"
                            className="mb-3"
                        >
                            <Form.Label>
                                Multiple files input example
                            </Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                        <Form.Group
                            controlId="formFileDisabled"
                            className="mb-3"
                        >
                            <Form.Label>Disabled file input example</Form.Label>
                            <Form.Control type="file" disabled />
                        </Form.Group>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Small file input example</Form.Label>
                            <Form.Control type="file" size="sm" />
                        </Form.Group>
                        <Form.Group controlId="formFileLg" className="mb-3">
                            <Form.Label>Large file input example</Form.Label>
                            <Form.Control type="file" size="lg" />
                        </Form.Group>
                    </ShowCode>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Multiple Upload
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond
                                        className="multiple-filepond"
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle="Drag & Drop your file here or click "
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <div className="card-title">
                                        Single Upload
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond
                                        className="multiple-filepond single-fileupload"
                                        files={files1}
                                        onupdatefiles={setFiles1}
                                        allowMultiple={true}
                                        maxFiles={1}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle="Drag & Drop your file here or click "
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Dropzone</div>
                        </Card.Header>
                        <Card.Body>
                            <FilePond
                                className="multiple-filepond"
                                files={files2}
                                onupdatefiles={setFiles2}
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files" /* sets the file input name, it's filepond by default */
                                labelIdle="Drag & Drop your file here or click "
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};
Fileuploads.layout = 'Contentlayout';

export default Fileuploads;
