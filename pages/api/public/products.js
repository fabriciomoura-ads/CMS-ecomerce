import { getAllProducts } from "@/pages/api/server/db/products/getAllProducts";

export default async function handler(req, res) {
  // Adicionar headers CORS para permitir acesso cross-origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const products = await getAllProducts();

    // Filtrar apenas produtos ativos para o site público
    const activeProducts = products.filter(
      (product) => product.isPublic === true
    );

    // Retornar produtos com estrutura otimizada para o site de vendas
    const publicProducts = activeProducts.map((product) => ({
      id: product.id,
      name: product.name,
      title: product.name,
      description: product.description,
      price: product.price,
      basePrice: product.price,
      image: product.image,
      img: product.image,
      img2: product.img2, // Segunda imagem
      linkCanvas: product.linkCanvas, // Link do Canvas
      imageTypes: product.imageTypes, // Tipos de imagem selecionados
      // Manter compatibilidade com código antigo
      category: product.category,
      categoryId: product.categoryId,
      // Novos campos para múltiplas categorias
      categories: product.categories || [],
      isActive: product.status,
      // Campos de arquivo para download
      arquivoPdf: product.arquivoPdf, // Arquivo PSD (PDF)
      // Campos adicionais que podem ser úteis para o site
      slug: product.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, ""),
      available: true,
      stock: 99, // Por enquanto, assumindo estoque disponível
    }));

    res.status(200).json({
      success: true,
      data: publicProducts,
      total: publicProducts.length,
    });
  } catch (error) {
    console.error("Error fetching public products:", error);
    res.status(500).json({
      success: false,
      error: "Error fetching products",
      message: "Erro interno do servidor",
    });
  }
}
