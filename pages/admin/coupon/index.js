import { getAllCoupons } from '@/pages/api/server/db/coupon/getAllCoupons';
import { Switch } from '@mui/material';
import { nanoid } from 'nanoid';
import { getServerSession } from 'next-auth';
import { Fragment, useState } from 'react';
import { Button, Card, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Savetable } from '../../../shared/data/tables/dataTableCoupon';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import styles from './styles.module.scss';

const Datatables = ({ coupons }) => {
    const [contacts, setContacts] = useState(
        coupons.map((coupon) => ({
            id: coupon.id,
            code: coupon.code,
            discount: coupon.discount,
            createdAt: new Date(coupon.createdAt).toLocaleDateString(),
            discountType: coupon.discountType,
            isActive: coupon.isActive,
            totalQuantitySold: coupon.totalQuantitySold,
            totalSalesAmount: coupon.totalSalesAmount,
        }))
    );

    const [modalShow, setModalShow] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const [formData, setFormData] = useState({
        id: '',
        code: '',
        discount: '',
        createdAt: '',
        isActive: true,
        discountType: 'PERCENTAGE',
        totalQuantitySold: 0,
        totalSalesAmount: 0,
    });

    const validateFields = () => {
        const { code, discount } = formData;
        if (!code) return 'Código do Cupom';
        if (!discount) return 'Desconto';
        return null;
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAdd = () => {
        setFormData({
            id: nanoid(),
            code: '',
            discount: '',
            createdAt: '',
            isActive: true,
            discountType: 'PERCENTAGE',
            totalQuantitySold: 0,
            totalSalesAmount: 0,
        });
        setEditMode(false);
        setModalShow(true);
    };

    const handleEdit = (contact) => {
        setFormData(contact);
        setEditMode(true);
        setModalShow(true);
    };

    const handleSaveChanges = async (event) => {
        event.preventDefault();

        const missingField = validateFields();
        if (missingField) {
            toast.error(`Campo obrigatório: ${missingField}`);
            return;
        }

        setIsLoading(true);

        if (editMode) {
            try {
                const response = await fetch(`/api/coupon/updateCoupon`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    toast.success('Cupom atualizado com sucesso!🚀');
                    setContacts((prevContacts) =>
                        prevContacts.map((c) =>
                            c.id === formData.id ? formData : c
                        )
                    );
                }
            } catch (error) {
                toast.error('Erro ao atualizar o cupom!');
                console.error('Error updating coupon:', error);
            }
        } else {
            try {
                const response = await fetch('/api/coupon/createCoupon', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                if (response.ok) {
                    toast.success('Cupom criado com sucesso!🚀');
                    const newCoupon = await response.json();
                    setContacts((prevContacts) => [...prevContacts, newCoupon]);
                }
            } catch (error) {
                toast.error('Erro ao criar o cupom! Tente novamente!❌');
                console.error('Error creating coupon:', error);
            }
        }

        setModalShow(false);
        setEditMode(false);
        setIsLoading(false);
    };

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            const response = await fetch(`/api/coupon/deleteCoupon?id=${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                toast.success('Cupom excluído com sucesso!🚀');
                setContacts((prevContacts) =>
                    prevContacts.filter((c) => c.id !== id)
                );
            } else {
                toast.error('Falha ao excluir o cupom. Tente novamente!');
            }
        } catch (error) {
            console.error('Error deleting coupon:', error);
            toast.error('Erro ao excluir o cupom!');
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <Fragment>
            <Seo title={'Cupons'} />
            <Pageheader title="Cupons" heading="Cupons" active="Cupons" />

            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">CUPONS CADASTRADOS</div>
                            <div className={styles.blockButton}>
                                <Button variant="primary" onClick={handleAdd}>
                                    Adicionar novo cupom
                                </Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Savetable
                                coupons={contacts}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                                deletingId={deletingId}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {editMode ? 'Editar Cupom' : 'Adicionar Novo Cupom'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSaveChanges}>
                        <Form.Control
                            type="text"
                            name="code"
                            placeholder="Código do Cupom"
                            onChange={handleFormChange}
                            value={formData.code}
                            className="mb-2"
                            required
                        />
                        <Form.Control
                            type="number"
                            name="discount"
                            placeholder="Desconto"
                            onChange={handleFormChange}
                            value={formData.discount}
                            className="mb-2"
                            required
                        />

                        {/* Switch para tipo de desconto */}
                        <Form.Group className="d-flex align-items-center mb-2">
                            <Form.Label className="me-2">
                                Tipo de Desconto:
                            </Form.Label>
                            <Switch
                                checked={formData.discountType === 'PERCENTAGE'}
                                onChange={() =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        discountType:
                                            prevData.discountType ===
                                            'PERCENTAGE'
                                                ? 'FIXED'
                                                : 'PERCENTAGE',
                                    }))
                                }
                            />
                            <Form.Text className="ms-2">
                                {formData.discountType === 'PERCENTAGE'
                                    ? 'Porcentagem'
                                    : 'Fixo'}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="d-flex align-items-center mb-2">
                            <Form.Label className="me-2">Ativo:</Form.Label>
                            <Switch
                                checked={formData.isActive}
                                onChange={() =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        isActive: !prevData.isActive,
                                    }))
                                }
                            />
                            <Form.Text className="ms-2">
                                {formData.isActive ? 'Sim' : 'Não'}
                            </Form.Text>
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="mt-3"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />{' '}
                                    {editMode
                                        ? 'Salvando...'
                                        : 'Adicionando...'}
                                </>
                            ) : editMode ? (
                                'Salvar Alterações'
                            ) : (
                                'Adicionar'
                            )}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
};

export const getServerSideProps = async (context) => {
    const session = await getServerSession(context.req, context.res);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    const coupons = await getAllCoupons();

    console.log(coupons);

    return {
        props: {
            coupons,
        },
    };
};

Datatables.layout = 'Contentlayout';
export default Datatables;
