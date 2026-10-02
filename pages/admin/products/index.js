import { getAllCategories } from "@/pages/api/server/db/categories/getAllCategories";
import { getAllProducts } from "@/pages/api/server/db/products/getAllProducts";
import { getServerSession } from "next-auth";
import { useEffect, useState, Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Modal,
  OverlayTrigger,
  Pagination,
  Row,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Pageheader from "../../../shared/layout-components/pageheader/pageheader";
import Seo from "../../../shared/layout-components/seo/seo";
import ProtectedRoute from "../../../shared/components/ProtectedRoute";
import {
  addToCart,
  addToWishlist,
  setSelectedItem,
} from "../../../shared/redux/action";
import styles from "./styles.module.scss";

import { uploadImageAndGetUrl } from "../../../shared/firebase/uploadClient";

const DESCRIPTION_LIMIT = 150;
const ITEMS_PER_PAGE = 8;

const formatCurrency = (value) => {
  // Tratar valores undefined, null ou NaN
  if (value == null || isNaN(value)) {
    return "R$ 0,00";
  }
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value));
};

const formatCurrencyInput = (value) => {
  value = value.replace(/\D/g, "");
  const options = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(value) / 100
  );
  return `R$ ${result}`;
};

const ProductCard = ({
  item,
  handleItemClick,
  handleAddToWishlist,
  handleAddToCart,
  handleEditProduct,
  handleDeleteProduct,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateDescription = (text) => {
    if (isExpanded || text.length <= DESCRIPTION_LIMIT) {
      return text;
    }
    return text.slice(0, DESCRIPTION_LIMIT) + "...";
  };

  return (
    <Col sm={6} xl={4} xxl={3} lg={6} md={6}>
      <Card>
        <Card.Body className="h-100 product-grid6">
          <div className="pro-img-box product-image">
            <div>
              <div onClick={() => handleItemClick(item)}>
                <img
                  className={styles.img}
                  src={
                    item.img || item.image || "/assets/images/ecommerce/1.jpg"
                  }
                  alt={item.title || item.name}
                  onError={(e) => {
                    e.target.src = "/assets/images/ecommerce/1.jpg";
                  }}
                />
              </div>
            </div>
            <ul className="icons">
              <li style={{ cursor: "pointer" }}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Editar Produto</Tooltip>}
                >
                  <div
                    className="info-gradient"
                    onClick={() => handleEditProduct(item)}
                  >
                    <i className="fas fa-edit"></i>
                  </div>
                </OverlayTrigger>
              </li>
              <li style={{ cursor: "pointer", marginLeft: "8px" }}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Deletar produto</Tooltip>}
                >
                  <div
                    className="secondary-gradient me-2"
                    onClick={() => handleDeleteProduct(item)}
                  >
                    <i className="fa fa-trash"></i>
                  </div>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
          <div className="text-center pt-2">
            <h3 className="h6 mb-2 mt-4 fw-bold text-uppercase">
              {item.title || item.name}
            </h3>
            <span className="fs-15 ms-auto">
              <i className="ion ion-md-star text-warning"></i>
              <i className="ion ion-md-star text-warning"></i>
              <i className="ion ion-md-star text-warning"></i>
              <i className="ion ion-md-star text-warning"></i>
              <i className="ion ion-md-star text-warning"></i>
            </span>
            <h4 className="h5 mb-0 mt-1 text-center fw-bold fs-22">
              {formatCurrency(item.price || item.basePrice)}
              <del className="text-secondary font-weight-normal fs-13 d-inline-block ms-1 prev-price"></del>
            </h4>
            <p style={{ marginTop: "10px", minHeight: "70px" }}>
              {truncateDescription(item.description)}
              {item.description.length > DESCRIPTION_LIMIT && (
                <span
                  className="text-primary cursor-pointer"
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{ cursor: "pointer" }}
                >
                  {isExpanded ? " Ver menos" : " Ver mais..."}
                </span>
              )}
            </p>
            <p>
              Categorias:{" "}
              {item.categories && item.categories.length > 0
                ? item.categories.map((cat) => cat.name).join(", ")
                : item.category?.name || item.category || "Nenhuma"}
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Shop = ({ initialProducts, categories }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const productsInStore = useSelector((state) => state.products);

  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newProduct, setNewProduct] = useState({
    // Campos básicos
    title: "",
    description: "",
    price: "",
    categories: [], // Array para múltiplas categorias selecionadas
    quantity: 0,

    // Campos específicos para imóveis
    location: "", // Endereço completo
    beds: "", // Número de quartos
    baths: "", // Número de banheiros
    sqft: "", // Área em metros quadrados
    garage: "", // Número de garagens
    yearBuilt: "", // Ano de construção
    propertyType: "", // Tipo: Casa, Apartamento, etc.
    propertyStatus: "", // Status: À venda, Para alugar, etc.
    amenities: [], // Comodidades selecionadas
    phone: "", // Telefone de contato
    ownerName: "", // Nome do proprietário

    // Campos para vídeos
    videos: [], // Array de vídeos
    videoUrls: [], // URLs do YouTube/Vimeo
    propertyPhotos: [], // Fotos do imóvel
  });

  const [isEditing, setIsEditing] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const resetForm = () => {
    setNewProduct({
      // Campos básicos
      title: "",
      description: "",
      price: "",
      categories: [], // Array para múltiplas categorias selecionadas
      quantity: 0,

      // Campos específicos para imóveis
      location: "", // Endereço completo
      beds: "", // Número de quartos
      baths: "", // Número de banheiros
      sqft: "", // Área em metros quadrados
      garage: "", // Número de garagens
      yearBuilt: "", // Ano de construção
      propertyType: "", // Tipo: Casa, Apartamento, etc.
      propertyStatus: "", // Status: À venda, Para alugar, etc.
      amenities: [], // Comodidades selecionadas
      phone: "", // Telefone de contato
      ownerName: "", // Nome do proprietário

      // Campos para vídeos
      videos: [], // Array de vídeos
      videoUrls: [], // URLs do YouTube/Vimeo
      propertyPhotos: [], // Fotos do imóvel
    });
    setIsEditing(false);
    setProductToEdit(null);
  };

  const refreshProductList = async () => {
    try {
      const response = await fetch("/api/products/getAllProducts");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
        setSearchResults(data);
      }
    } catch (error) {
      console.error("Erro ao recarregar produtos:", error);
    }
  };

  const validateFields = () => {
    const {
      title,
      description,
      price,
      categories,
      location,
      phone,
      ownerName,
      beds,
      baths,
      sqft,
      propertyType,
      propertyStatus,
    } = newProduct;

    // Campos básicos obrigatórios
    if (!title || title.trim() === "") return "Nome do Produto";
    if (!description || description.trim() === "") return "Descrição";
    if (!price || price.trim() === "") return "Preço";
    if (!categories || categories.length === 0) return "Categoria";

    // Campos específicos para imóveis obrigatórios
    if (!location || location.trim() === "") return "Endereço Completo";
    if (!phone || phone.trim() === "") return "Telefone de Contato";
    if (!ownerName || ownerName.trim() === "") return "Nome do Proprietário";
    if (!beds || beds === "") return "Número de Quartos";
    if (!baths || baths === "") return "Número de Banheiros";
    if (!sqft || sqft === "") return "Área em m²";
    if (!propertyType || propertyType === "") return "Tipo do Imóvel";
    if (!propertyStatus || propertyStatus === "") return "Status do Imóvel";

    return null;
  };

  const handleDeleteProduct = async (product) => {
    try {
      const response = await fetch(
        `/api/product/deleteProduct?id=${product.id}`,
        { method: "DELETE" }
      );

      const responseData = await response.json();

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.filter((p) => p.id !== product.id)
        );
        toast.success(responseData.message || "Produto deletado com sucesso!");
      } else {
        toast.error(responseData.error || "Falha ao deletar o produto");
      }
    } catch (error) {
      toast.error("Erro ao deletar o produto");
    }
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setNewProduct({
      // Campos básicos
      title: product.title || product.name || "",
      description: product.description || "",
      price: product.price ? formatCurrency(product.price) : "",
      categories: product.categories || [], // Array para múltiplas categorias selecionadas
      quantity: product.quantity || 0,

      // Campos específicos para imóveis
      location: product.location || "",
      beds: product.beds || "",
      baths: product.baths || "",
      sqft: product.sqft || "",
      garage: product.garage || "",
      yearBuilt: product.yearBuilt || "",
      propertyType: product.propertyType || "",
      propertyStatus: product.propertyStatus || "",
      amenities: product.amenities || [],
      phone: product.phone || "",
      ownerName: product.ownerName || "",

      // Campos para vídeos
      videos: product.videos || [],
      videoUrls: product.videoUrls || [],
      propertyPhotos: product.propertyPhotos || [],
    });
    setIsEditing(true);
    setShowModal(true);
  };

  const handleCategoryChange = (categoryId) => {
    setNewProduct((prev) => {
      const currentCategories = prev.categories || [];
      const category = categories.find(
        (cat) => cat.id.toString() === categoryId
      );

      if (!category) return prev;

      const isSelected = currentCategories.some(
        (cat) => cat.id === category.id
      );

      if (isSelected) {
        // Remove a categoria se já estiver selecionada
        return {
          ...prev,
          categories: currentCategories.filter((cat) => cat.id !== category.id),
        };
      } else {
        // Adiciona a categoria se não estiver selecionada
        return {
          ...prev,
          categories: [...currentCategories, category],
        };
      }
    });
  };

  const handleAmenityChange = (amenity) => {
    setNewProduct((prev) => {
      const currentAmenities = prev.amenities || [];
      if (currentAmenities.includes(amenity)) {
        return {
          ...prev,
          amenities: currentAmenities.filter((a) => a !== amenity),
        };
      } else {
        return {
          ...prev,
          amenities: [...currentAmenities, amenity],
        };
      }
    });
  };

  const handleVideoFileChange = (e) => {
    const files = Array.from(e.target.files);
    setNewProduct((prev) => ({
      ...prev,
      videos: [...(prev.videos || []), ...files],
    }));
  };

  const handleVideoUrlAdd = (url) => {
    if (url.trim()) {
      setNewProduct((prev) => ({
        ...prev,
        videoUrls: [...(prev.videoUrls || []), url.trim()],
      }));
    }
  };

  const removeVideo = (index, type) => {
    if (type === "file") {
      setNewProduct((prev) => ({
        ...prev,
        videos: prev.videos.filter((_, i) => i !== index),
      }));
    } else {
      setNewProduct((prev) => ({
        ...prev,
        videoUrls: prev.videoUrls.filter((_, i) => i !== index),
      }));
    }
  };

  const handleSaveProduct = async () => {
    const missingField = validateFields();
    if (missingField) {
      toast.error(`Campo obrigatório: ${missingField}`);
      return;
    }
    if (!isEditing || !productToEdit) return;
    setLoading(true);
    try {
      const payload = await buildPayload(newProduct);
      const response = await fetch(
        `/api/product/updateProduct?id=${productToEdit.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!response.ok) throw new Error("Falha ao atualizar");
      const data = await response.json();

      // Recarregar lista de produtos para obter dados completos
      await refreshProductList();

      toast.success("Produto atualizado com sucesso!");
      handleCloseModal();
    } catch (e) {
      toast.error("Falha ao atualizar o produto");
    } finally {
      setLoading(false);
    }
  };

  const handleItemClick = (item) => {
    dispatch(setSelectedItem(item));
  };
  const handleAddToWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const allIds = [
    ...cart.map((item) => item.id),
    ...productsInStore.map((item) => item.id),
  ];
  const nextId = allIds.length ? Math.max(...allIds) + 1 : 1;

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, id: nextId }));
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      (product.title || product.name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setCurrentPage(1);
  }, [searchTerm, products]);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    resetForm();
    setShowModal(false);
  };

  const parseBRLToNumber = (s) => {
    // "R$ 1.234,56" -> 1234.56
    return Number(
      s
        .replace(/\s/g, "")
        .replace("R$", "")
        .replace(/\./g, "")
        .replace(",", ".")
    );
  };

  const buildPayload = async (state) => {
    // Processar fotos do imóvel
    const propertyImages = [];
    if (state.propertyPhotos && state.propertyPhotos.length > 0) {
      for (const photo of state.propertyPhotos) {
        try {
          const photoUrl = await uploadImageAndGetUrl(photo);
          propertyImages.push({
            url: photoUrl,
            label: photo.name,
          });
        } catch (error) {
          console.error("Erro ao fazer upload da foto:", error);
        }
      }
    }

    // Processar vídeos
    const videoData = [];

    // Adicionar vídeos de arquivo
    if (state.videos && state.videos.length > 0) {
      for (const video of state.videos) {
        try {
          const videoUrl = await uploadImageAndGetUrl(video);
          videoData.push({
            url: videoUrl,
            label: video.name,
            type: "upload",
          });
        } catch (error) {
          console.error("Erro ao fazer upload do vídeo:", error);
        }
      }
    }

    // Adicionar URLs de vídeo
    if (state.videoUrls && state.videoUrls.length > 0) {
      state.videoUrls.forEach((url) => {
        videoData.push({
          url: url,
          label: url,
          type: url.includes("youtube") ? "youtube" : "vimeo",
        });
      });
    }

    const payload = {
      // Campos básicos
      title: state.title || "",
      description: state.description || "",
      price: state.price ? Number(state.price.replace(/\D/g, "")) : 0,
      categoryIds: state.categories?.map((cat) => cat.id) || [],

      // Campos específicos para imóveis
      location: state.location || "",
      beds: state.beds ? parseInt(state.beds) : null,
      baths: state.baths ? parseInt(state.baths) : null,
      sqft: state.sqft ? parseInt(state.sqft) : null,
      garage: state.garage ? parseInt(state.garage) : null,
      yearBuilt: state.yearBuilt ? parseInt(state.yearBuilt) : null,
      propertyType: state.propertyType || "",
      propertyStatus: state.propertyStatus || "",
      amenities: state.amenities || [],
      phone: state.phone || "",
      ownerName: state.ownerName || "",
      videos: videoData,
      images: propertyImages, // Fotos do imóvel
    };

    console.log("Building payload with categories:", {
      categories: state.categories,
      categoryIds: payload.categoryIds,
    });

    return payload;
  };

  const handleCreateProduct = async () => {
    const missingField = validateFields();
    if (missingField) {
      toast.error(`Campo obrigatório: ${missingField}`);
      return;
    }
    setLoading(true);
    try {
      const payload = await buildPayload(newProduct);
      const response = await fetch("/api/product/createProduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Falha ao criar");
      const data = await response.json();

      // Recarregar lista de produtos para obter dados completos (com imagens e categorias)
      await refreshProductList();

      toast.success("Produto criado com Sucesso! 🚀");
      handleCloseModal();
    } catch (e) {
      toast.error("Falha na criação do produto");
    } finally {
      setLoading(false);
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value || "";
    const formattedPrice = value ? formatCurrencyInput(value) : "";
    setNewProduct({
      ...newProduct,
      price: formattedPrice,
    });
  };

  return (
    <ProtectedRoute allowedRoles={["ADMIN", "DESIGNER"]}>
      <Fragment>
        <Seo title="Produtos" />
        <Pageheader title="Produtos" item="Produtos" />

        <Row className="row-sm">
          <Col xl={12} lg={12} md={12} style={{ width: "100%" }}>
            <Card.Body className="p-2">
              <InputGroup className={styles.inputGroup}>
                <div className={styles.formGroup}>
                  <Form.Control
                    type="text"
                    placeholder="Pesquisar ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <InputGroup.Text className="btn btn-primary">
                    Pesquisar
                  </InputGroup.Text>
                </div>
                <div>
                  <Button
                    variant=""
                    type="button"
                    className="btn btn-primary ms-2"
                    onClick={handleShowModal}
                  >
                    <i className="fe fe-plus me-1"></i>{" "}
                    {isEditing ? "Editar Produto" : "Criar Produto"}
                  </Button>
                </div>
              </InputGroup>
            </Card.Body>

            <Row className="row-sm">
              {currentItems.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    Sem produtos
                  </td>
                </tr>
              ) : (
                currentItems.map((item, index) => (
                  <ProductCard
                    key={index}
                    item={item}
                    handleItemClick={handleItemClick}
                    handleDeleteProduct={handleDeleteProduct}
                    handleAddToCart={handleAddToCart}
                    handleEditProduct={handleEditProduct}
                  />
                ))
              )}

              <Pagination className="pagination product-pagination justify-content-end list-unstyled">
                <Pagination.Item
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Anterior
                </Pagination.Item>
                {[...Array(totalPages)].map((_, pageIndex) => (
                  <Pagination.Item
                    key={pageIndex + 1}
                    active={currentPage === pageIndex + 1}
                    onClick={() => handlePageChange(pageIndex + 1)}
                  >
                    {pageIndex + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Item
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Próximo
                </Pagination.Item>
              </Pagination>
            </Row>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {isEditing ? "Editar Produto" : "Criar Novo Produto"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <Form>
              <Form.Group controlId="productTitle">
                <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                  Nome do produto
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o título do produto"
                  value={newProduct.title || ""}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      title: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group
                controlId="productDescription"
                style={{ marginTop: "10px" }}
              >
                <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                  Descrição
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Insira a descrição do produto"
                  value={newProduct.description || ""}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group
                controlId="productPrice"
                style={{ marginTop: "10px" }}
              >
                <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                  Preço
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="R$0,00"
                  value={newProduct.price || ""}
                  onChange={handlePriceChange}
                />
              </Form.Group>
              <Form.Group
                controlId="productQuantity"
                style={{ marginTop: "10px" }}
              >
                <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                  Estoque
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Quantidade em estoque"
                  value={newProduct.quantity || ""}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      quantity: e.target.value,
                    })
                  }
                />
              </Form.Group>

              {/* Seção de Informações Básicas do Imóvel */}
              <div style={{ marginTop: "25px" }}>
                <h6
                  style={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderBottom: "2px solid #007bff",
                    paddingBottom: "8px",
                  }}
                >
                  Informações Básicas do Imóvel
                </h6>

                <Form.Group
                  controlId="propertyLocation"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                    Endereço Completo *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ex: Rua das Flores, 123 - Vila Madalena, São Paulo - SP"
                    value={newProduct.location || ""}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        location: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group
                  controlId="propertyPhone"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                    Telefone de Contato *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="(11) 99999-9999"
                    value={newProduct.phone || ""}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        phone: e.target.value,
                      })
                    }
                  />
                </Form.Group>

                <Form.Group
                  controlId="propertyOwner"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                    Nome do Proprietário *
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Seu nome completo"
                    value={newProduct.ownerName || ""}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        ownerName: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </div>

              {/* Seção de Características do Imóvel */}
              <div style={{ marginTop: "25px" }}>
                <h6
                  style={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderBottom: "2px solid #007bff",
                    paddingBottom: "8px",
                  }}
                >
                  Características do Imóvel
                </h6>

                <Row>
                  <Col md={6}>
                    <Form.Group
                      controlId="propertyBeds"
                      style={{ marginTop: "10px" }}
                    >
                      <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                        Quartos *
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Número de quartos"
                        value={newProduct.beds || ""}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            beds: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      controlId="propertyBaths"
                      style={{ marginTop: "10px" }}
                    >
                      <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                        Banheiros *
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Número de banheiros"
                        value={newProduct.baths || ""}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            baths: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group
                      controlId="propertySqft"
                      style={{ marginTop: "10px" }}
                    >
                      <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                        Área (m²) *
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Área em metros quadrados"
                        value={newProduct.sqft || ""}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            sqft: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      controlId="propertyGarage"
                      style={{ marginTop: "10px" }}
                    >
                      <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                        Garagens
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Número de garagens"
                        value={newProduct.garage || ""}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            garage: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group
                      controlId="propertyYearBuilt"
                      style={{ marginTop: "10px" }}
                    >
                      <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                        Ano de Construção
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Ano de construção"
                        value={newProduct.yearBuilt || ""}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            yearBuilt: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group
                      controlId="propertyType"
                      style={{ marginTop: "10px" }}
                    >
                      <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                        Tipo do Imóvel *
                      </Form.Label>
                      <Form.Select
                        value={newProduct.propertyType || ""}
                        onChange={(e) =>
                          setNewProduct({
                            ...newProduct,
                            propertyType: e.target.value,
                          })
                        }
                      >
                        <option value="">Selecione o tipo</option>
                        <option value="Casa">Casa</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Sobrado">Sobrado</option>
                        <option value="Kitnet">Kitnet</option>
                        <option value="Studio">Studio</option>
                        <option value="Loft">Loft</option>
                        <option value="Cobertura">Cobertura</option>
                        <option value="Terreno">Terreno</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group
                  controlId="propertyStatus"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                    Status *
                  </Form.Label>
                  <Form.Select
                    value={newProduct.propertyStatus || ""}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        propertyStatus: e.target.value,
                      })
                    }
                  >
                    <option value="">Selecione o status</option>
                    <option value="À venda">À venda</option>
                    <option value="Para alugar">Para alugar</option>
                    <option value="Vendido">Vendido</option>
                    <option value="Alugado">Alugado</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <Form.Group
                controlId="productCategories"
                style={{ marginTop: "10px" }}
              >
                <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                  Categorias
                </Form.Label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    maxHeight: "200px",
                    overflowY: "auto",
                    border: "1px solid #495057",
                    borderRadius: "8px",
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {categories.map((category) => (
                    <Form.Check
                      key={category.id}
                      type="checkbox"
                      id={`category-${category.id}`}
                      label={category.name}
                      checked={
                        newProduct.categories?.some(
                          (cat) => cat.id === category.id
                        ) || false
                      }
                      onChange={() =>
                        handleCategoryChange(category.id.toString())
                      }
                      style={{
                        color: "#fff",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    />
                  ))}
                </div>
                {newProduct.categories && newProduct.categories.length > 0 && (
                  <div style={{ marginTop: "8px" }}>
                    <small className="text-muted">
                      Categorias selecionadas:{" "}
                      {newProduct.categories.map((cat) => cat.name).join(", ")}
                    </small>
                  </div>
                )}
              </Form.Group>

              {/* Seção de Comodidades */}
              <div style={{ marginTop: "25px" }}>
                <h6
                  style={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderBottom: "2px solid #007bff",
                    paddingBottom: "8px",
                  }}
                >
                  Comodidades
                </h6>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "12px",
                    maxHeight: "200px",
                    overflowY: "auto",
                    border: "1px solid #495057",
                    borderRadius: "8px",
                    padding: "15px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {[
                    "Piscina",
                    "Churrasqueira",
                    "Varanda",
                    "Garagem",
                    "Academia",
                    "Lavanderia",
                    "Ar Condicionado",
                    "Portaria 24h",
                    "Jardim",
                    "Elevador",
                  ].map((amenity) => (
                    <Form.Check
                      key={amenity}
                      type="checkbox"
                      id={`amenity-${amenity}`}
                      label={amenity}
                      checked={newProduct.amenities?.includes(amenity) || false}
                      onChange={() => handleAmenityChange(amenity)}
                      style={{
                        color: "#fff",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    />
                  ))}
                </div>
                {newProduct.amenities && newProduct.amenities.length > 0 && (
                  <div style={{ marginTop: "8px" }}>
                    <small className="text-muted">
                      Comodidades selecionadas:{" "}
                      {newProduct.amenities.join(", ")}
                    </small>
                  </div>
                )}
              </div>

              {/* Seção de Fotos do Imóvel */}
              <div style={{ marginTop: "25px" }}>
                <h6
                  style={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderBottom: "2px solid #007bff",
                    paddingBottom: "8px",
                  }}
                >
                  Fotos do Imóvel
                </h6>
                <Form.Group
                  controlId="propertyPhotos"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                    Selecionar Fotos *
                  </Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      setNewProduct((prev) => ({
                        ...prev,
                        propertyPhotos: [
                          ...(prev.propertyPhotos || []),
                          ...files,
                        ],
                      }));
                    }}
                  />
                  <div style={{ marginTop: "8px" }}>
                    <small className="text-muted">
                      {newProduct.propertyPhotos?.length || 0} arquivo(s)
                      selecionado(s)
                    </small>
                  </div>
                </Form.Group>
              </div>

              {/* Seção de Vídeos do Imóvel */}
              <div style={{ marginTop: "25px" }}>
                <h6
                  style={{
                    color: "#fff",
                    marginBottom: "20px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    borderBottom: "2px solid #007bff",
                    paddingBottom: "8px",
                  }}
                >
                  Vídeos do Imóvel (Opcional)
                </h6>

                <Form.Group
                  controlId="propertyVideos"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                    Selecionar Vídeos
                  </Form.Label>
                  <Form.Control
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={handleVideoFileChange}
                  />
                  <div style={{ marginTop: "8px" }}>
                    <small className="text-muted">
                      {newProduct.videos?.length || 0} arquivo(s) de vídeo
                      selecionado(s)
                    </small>
                  </div>
                </Form.Group>

                <Form.Group controlId="videoUrls" style={{ marginTop: "15px" }}>
                  <Form.Label style={{ color: "#fff", fontWeight: "500" }}>
                    Adicionar URL do YouTube/Vimeo
                  </Form.Label>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Form.Control
                      type="url"
                      placeholder="https://youtube.com/watch?v=..."
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleVideoUrlAdd(e.target.value);
                          e.target.value = "";
                        }
                      }}
                    />
                    <Button
                      variant="primary"
                      onClick={(e) => {
                        const input = e.target.previousElementSibling;
                        handleVideoUrlAdd(input.value);
                        input.value = "";
                      }}
                    >
                      Adicionar URL
                    </Button>
                  </div>
                  {newProduct.videoUrls && newProduct.videoUrls.length > 0 && (
                    <div style={{ marginTop: "10px" }}>
                      <small className="text-muted">URLs adicionadas:</small>
                      {newProduct.videoUrls.map((url, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "5px",
                          }}
                        >
                          <small>{url}</small>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => removeVideo(index, "url")}
                          >
                            ×
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </Form.Group>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={isEditing ? handleSaveProduct : handleCreateProduct}
              disabled={loading}
            >
              {loading ? (
                <Spinner as="span" animation="border" size="sm" />
              ) : isEditing ? (
                "Salvar Alterações"
              ) : (
                "Criar Produto"
              )}
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    </ProtectedRoute>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const products = await getAllProducts();
  const categories = await getAllCategories();

  return {
    props: {
      initialProducts: products,
      categories,
    },
  };
};

Shop.layout = "Contentlayout";
export default Shop;
