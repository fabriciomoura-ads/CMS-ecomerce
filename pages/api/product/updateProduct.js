import { prisma } from "@/pages/api/server/db/prisma";

export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();

  try {
    const { id } = req.query;
    if (!id) return res.status(400).json({ error: "Missing id" });

    console.log("Updating product with ID:", id);
    console.log("Request body:", req.body);

    // Aceitar tanto os campos antigos quanto os novos para compatibilidade
    const {
      title,
      description,
      price,
      categoryId,
      categoryIds,
      img,
      img2,
      name,
      basePrice,
      category,
      isActive,
      arquivoPdf,
      linkCanvas,
      imageTypes,
      // Campos específicos para imóveis
      location,
      beds,
      baths,
      sqft,
      garage,
      yearBuilt,
      propertyType,
      propertyStatus,
      amenities,
      phone,
      ownerName,
      videos,
      images,
    } = req.body || {};

    // Mapear campos antigos para novos se necessário
    const finalName = name || title;
    const finalDescription = description;
    const finalCategoryIds =
      categoryIds ||
      (categoryId ? [categoryId] : []) ||
      (category?.id ? [category.id] : []);
    const finalImg = img;
    const finalImg2 = img2;
    const finalArquivoPdf = arquivoPdf;
    const finalLinkCanvas = linkCanvas;
    const finalImageTypes = imageTypes;

    if (!finalName || !finalDescription) {
      console.log("Missing required fields:", {
        name: finalName,
        description: finalDescription,
      });
      return res.status(400).json({
        error: "Missing required fields",
        received: {
          name: finalName,
          description: finalDescription,
        },
      });
    }

    // Gerar slug baseado no nome
    const slug =
      finalName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais
        .replace(/\s+/g, "-") // Substitui espaços por hífens
        .replace(/-+/g, "-") // Remove hífens duplicados
        .replace(/^-+|-+$/g, "") // Remove hífens das extremidades
        .trim() || "produto-" + Date.now(); // Fallback se slug ficar vazio

    const data = {
      name: finalName,
      slug: slug,
      description: finalDescription,
      mainImage: finalImg,
      img: finalImg,
      img2: finalImg2,
      arquivoPdf: finalArquivoPdf,
      linkCanvas: finalLinkCanvas,
      imageTypes: finalImageTypes,
      status: "ACTIVE", // Usar o enum ProductStatus correto
      isPublic: true, // Usar o campo isPublic correto

      // Campos específicos para imóveis
      price: price ? parseFloat(price) : null,
      location: location || null,
      beds: beds ? parseInt(beds) : null,
      baths: baths ? parseInt(baths) : null,
      sqft: sqft ? parseInt(sqft) : null,
      garage: garage ? parseInt(garage) : null,
      yearBuilt: yearBuilt ? parseInt(yearBuilt) : null,
      propertyType: propertyType || null,
      propertyStatus: propertyStatus || null,
      amenities: amenities ? JSON.stringify(amenities) : null,
      phone: phone || null,
      ownerName: ownerName || null,
      videos: videos ? JSON.stringify(videos) : null,
      images: images ? JSON.stringify(images) : null,
    };

    console.log("Update data:", data);

    // Verificar se o produto existe antes de atualizar
    const existingProduct = await prisma.product.findUnique({
      where: { id: id },
    });

    if (!existingProduct) {
      console.log("Product not found with ID:", id);
      return res.status(404).json({ error: "Product not found" });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: id },
      data,
    });

    // Se há categorias, atualizar relações na tabela ProductCategory
    if (finalCategoryIds && finalCategoryIds.length > 0) {
      // Primeiro, remover categorias existentes
      await prisma.productCategory.deleteMany({
        where: { productId: id },
      });

      // Criar novas relações
      await prisma.productCategory.createMany({
        data: finalCategoryIds.map((categoryId) => ({
          productId: id,
          categoryId: categoryId,
        })),
      });
    }

    console.log("Product updated successfully:", updatedProduct);
    return res.status(200).json({ success: true, product: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      meta: error.meta,
    });

    return res.status(500).json({
      error: "Error updating product",
      details: error.message,
      code: error.code,
    });
  }
}
