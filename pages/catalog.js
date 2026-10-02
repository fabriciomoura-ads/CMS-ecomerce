import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";
import Seo from "../shared/layout-components/seo/seo";
import styles from "./catalog.module.scss";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory, products]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/public/products");
      if (response.ok) {
        const data = await response.json();
        setProducts(data.data || []);
      } else {
        throw new Error("Falha ao carregar produtos");
      }
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      setMessage("Erro ao carregar produtos");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/public/categories");
      if (response.ok) {
        const data = await response.json();
        setCategories(data.data || []);
      }
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((product) => {
        // Verificar se o produto tem a categoria selecionada
        // Pode estar em product.categoryId (compatibilidade) ou em product.categories
        return (
          product.categoryId === selectedCategory ||
          (product.categories &&
            product.categories.some((cat) => cat.id === selectedCategory))
        );
      });
    }

    setFilteredProducts(filtered);
  };

  const handleDownload = async (productId, fileType, fileUrl) => {
    if (!fileUrl) {
      setMessage(`Arquivo ${fileType} não disponível para este produto`);
      return;
    }

    try {
      // Log do download
      await fetch("/api/downloads/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          fileType,
          fileUrl,
        }),
      });

      // Iniciar download
      const link = document.createElement("a");
      link.href = fileUrl;

      // Determinar a extensão correta baseada no tipo de arquivo
      let extension = "png";
      if (fileType === "PSD") {
        extension = "psd";
      } else if (fileType === "PNG") {
        extension = "png";
      }

      link.download = `${productId}-${fileType}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setMessage(`Download do arquivo ${fileType} iniciado!`);
    } catch (error) {
      console.error("Erro ao fazer download:", error);
      setMessage("Erro ao iniciar download");
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "400px" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Carregando...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Seo title="Catálogo de Produtos" />

      <Container fluid className="py-4">
        <Row>
          <Col>
            <h1 className="mb-4">Catálogo de Produtos</h1>

            {/* Mensagens */}
            {message && (
              <Alert
                variant={message.includes("Erro") ? "danger" : "success"}
                onClose={() => setMessage("")}
                dismissible
                className="mb-4"
              >
                {message}
              </Alert>
            )}

            {/* Filtros */}
            <Row className="mb-4">
              <Col md={6}>
                <Form.Control
                  type="text"
                  placeholder="Pesquisar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Todas as categorias</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            {/* Resultados */}
            <Row>
              <Col>
                <p className="text-muted">
                  {filteredProducts.length} produtos encontrados
                </p>
              </Col>
            </Row>

            {/* Grid de Produtos */}
            <Row>
              {filteredProducts.map((product) => (
                <Col key={product.id} lg={4} md={6} className="mb-4">
                  <Card className="h-100">
                    {product.image && (
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    )}
                    <Card.Body className="d-flex flex-column">
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text className="flex-grow-1">
                        {product.description || "Sem descrição disponível"}
                      </Card.Text>

                      {/* Exibir categorias */}
                      <div className="mb-3">
                        {product.categories && product.categories.length > 0 ? (
                          product.categories.map((category, index) => (
                            <span
                              key={index}
                              className="badge bg-secondary me-1 mb-1"
                            >
                              {category.name}
                            </span>
                          ))
                        ) : product.category ? (
                          <span className="badge bg-secondary">
                            {product.category.name}
                          </span>
                        ) : (
                          <span className="badge bg-light text-dark">
                            Sem categoria
                          </span>
                        )}
                      </div>

                      {/* Botões de Download */}
                      <div className="mt-auto">
                        {product.arquivoPdf && (
                          <Button
                            variant="danger"
                            className="w-100 mb-2"
                            onClick={() =>
                              handleDownload(
                                product.id,
                                "PSD",
                                product.arquivoPdf
                              )
                            }
                          >
                            <i className="fas fa-download me-2"></i>
                            Download PSD
                          </Button>
                        )}

                        {!product.arquivoPdf && (
                          <Alert variant="info" className="mb-0">
                            Nenhum arquivo disponível para download
                          </Alert>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {filteredProducts.length === 0 && (
              <Row>
                <Col className="text-center">
                  <Alert variant="info">
                    Nenhum produto encontrado com os filtros aplicados.
                  </Alert>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Catalog;
