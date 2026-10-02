import { getAllCategories } from '@/pages/api/server/db/categories/getAllCategories';
import { CategoriesTable } from '@/shared/data/tables/datatablesdatacategories';
import { getServerSession } from 'next-auth';
import { Fragment, useState } from 'react';
import { Button, Card, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Pageheader from '../../../shared/layout-components/pageheader/pageheader';
import Seo from '../../../shared/layout-components/seo/seo';
import styles from './styles.module.scss';

const CategoryTable = ({ categories }) => {
    const [modalShow, setModalShow] = useState(false);
    const [categoriesData, setCategoriesData] = useState(categories);
    const [isLoading, setIsLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const [addFormData, setAddFormData] = useState({
        name: '',
        description: '',
    });
    const [editFormData, setEditFormData] = useState({
        name: '',
        description: '',
    });
    const [editCategoryId, setEditCategoryId] = useState(null);

    const handleAddFormChange = (event) => {
        const { name, value } = event.target;
        setAddFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditFormChange = (event) => {
        const { name, value } = event.target;
        setEditFormData((prev) => ({ ...prev, [name]: value }));
    };

    const addCategory = async (categoryData) => {
        try {
            const response = await fetch('/api/categories/addCategory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(categoryData),
            });
            if (!response.ok) {
                toast.error('Erro ao criar a categorua! Tente novamente!❌');
                throw new Error('Erro ao adicionar categoria');
            }

            toast.success('Categoria criada com sucesso!🚀');
            return await response.json();
        } catch (error) {
            setIsLoading(false);
            console.error('Erro ao adicionar categoria:', error);
        }
    };

    const editCategory = async (categoryId, categoryData) => {
        try {
            const response = await fetch(
                `/api/categories/updateCategory?id=${categoryId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(categoryData),
                }
            );
            if (!response.ok) throw new Error('Erro ao editar categoria');
            toast.success('Categoria atualizada com sucesso!🚀');
            return await response.json();
        } catch (error) {
            setIsLoading(false);
            toast.error('Erro ao atualizar a categoria!');
            console.error('Erro ao editar categoria:', error);
        }
    };

    const handleAddFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const newCategory = {
            name: addFormData.name,
            description: addFormData.description,
        };

        const addedCategory = await addCategory(newCategory);
        if (addedCategory) {
            // Extrair os dados da categoria da resposta
            const categoryData = addedCategory.category || addedCategory;
            
            setCategoriesData((prev) => [...prev, {
                id: categoryData.id,
                name: categoryData.name,
                description: categoryData.description,
                slug: categoryData.slug
            }]);
            setModalShow(false);
            setIsLoading(false);
            // Resetar formulário de adicionar
            setAddFormData({
                name: '',
                description: '',
            });
        }
    };

    const handleEditFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const updatedCategory = {
            name: editFormData.name,
            description: editFormData.description,
        };

        const editedCategory = await editCategory(
            editCategoryId,
            updatedCategory
        );
        if (editedCategory) {
            // Extrair os dados da categoria da resposta
            const categoryData = editedCategory.category || editedCategory;
            
            setCategoriesData((prev) =>
                prev.map((category) =>
                    category.id === editCategoryId ? {
                        id: categoryData.id,
                        name: categoryData.name,
                        description: categoryData.description,
                        slug: categoryData.slug
                    } : category
                )
            );
            setEditCategoryId(null);
            setModalShow(false);
            setIsLoading(false);
            // Resetar formulário de editar
            setEditFormData({
                name: '',
                description: '',
            });
        }
    };

    const handleEditClick = (category) => {
        setEditCategoryId(category.id);
        setEditFormData({
            name: category.name,
            description: category.description,
        });
        setModalShow(true);
    };

    const handleDeleteClick = async (categoryId) => {
        setDeletingId(categoryId);
        
        try {
            // Encontrar a categoria para obter o nome
            const categoryToDelete = categoriesData.find(cat => cat.id === categoryId);
            
            if (!categoryToDelete) {
                toast.error('Categoria não encontrada!');
                setDeletingId(null);
                return;
            }
            
            const deletedCategory = await deleteCategory(categoryId, categoryToDelete.name);
            
            if (deletedCategory && deletedCategory.success) {
                setCategoriesData((prev) =>
                    prev.filter((category) => category.id !== categoryId)
                );
            }
        } catch (error) {
            console.error('Erro ao deletar categoria:', error);
            toast.error('Erro inesperado ao deletar categoria!');
        } finally {
            setDeletingId(null);
        }
    };

    const handleCancelClick = () => {
        setEditCategoryId(null);
        setModalShow(false);
    };

    const deleteCategory = async (categoryId, categoryName) => {
        try {
            const url = categoryName 
                ? `/api/categories/deleteCategory?id=${categoryId}&name=${encodeURIComponent(categoryName)}`
                : `/api/categories/deleteCategory?id=${categoryId}`;
                
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            const result = await response.json();
            
            if (!response.ok) {
                toast.error(result.error || 'Erro ao excluir a categoria! Tente novamente!❌');
                throw new Error(result.error || 'Erro ao excluir categoria');
            }
            
            toast.success(result.message || 'Categoria excluída com sucesso!🚀');
            return result;
        } catch (error) {
            console.error('Erro ao excluir categoria:', error);
            // Toast de erro já foi mostrado acima
            return null;
        }
    };

    return (
        <Fragment>
            <Seo title="Categorias" />
            <Pageheader
                title="Categorias"
                heading="Categorias"
                active="Categorias"
            />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className={styles.container}>
                                <div className="card-title">
                                    CATEGORIAS CADASTRADAS
                                </div>
                                <Button
                                    variant="primary"
                                    onClick={() => setModalShow(true)}
                                >
                                    Adicionar Categoria
                                </Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <CategoriesTable
                                categoriesProps={categoriesData}
                                handleEditClick={handleEditClick}
                                handleDeleteClick={handleDeleteClick}
                                deletingId={deletingId}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal
                show={modalShow}
                onHide={handleCancelClick}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {editCategoryId
                            ? 'Editar Categoria'
                            : 'Adicionar Nova Categoria'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={
                            editCategoryId
                                ? handleEditFormSubmit
                                : handleAddFormSubmit
                        }
                    >
                        <Modal.Body>
                            <Form.Control
                                type="text"
                                name="name"
                                required
                                placeholder="Nome da categoria..."
                                onChange={
                                    editCategoryId
                                        ? handleEditFormChange
                                        : handleAddFormChange
                                }
                                value={
                                    editCategoryId
                                        ? editFormData.name
                                        : addFormData.name
                                }
                                className="form-control mb-2"
                            />
                            <Form.Control
                                as="textarea"
                                name="description"
                                required
                                placeholder="Descrição da categoria..."
                                onChange={
                                    editCategoryId
                                        ? handleEditFormChange
                                        : handleAddFormChange
                                }
                                value={
                                    editCategoryId
                                        ? editFormData.description
                                        : addFormData.description
                                }
                                className="form-control mb-2"
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">
                                {isLoading ? (
                                    <>
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />{' '}
                                        {editCategoryId
                                            ? 'Salvando...'
                                            : 'Adicionando...'}
                                    </>
                                ) : editCategoryId ? (
                                    'Salvar Alterações'
                                ) : (
                                    'Adicionar'
                                )}
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
};

CategoryTable.layout = 'Contentlayout';
export default CategoryTable;

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
    const categories = await getAllCategories();
    return {
        props: {
            categories,
        },
    };
};
