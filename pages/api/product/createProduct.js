// pages/api/product/createProduct.ts
import { prisma } from "@/pages/api/server/db/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    // Aceitar tanto campos antigos quanto novos
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
    } = req.body;

    // Mapear campos antigos para novos
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
      return res.status(400).json({ error: "Missing required fields" });
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

    const product = await prisma.product.create({
      data: {
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
      },
    });

    // Se há categorias, criar relações na tabela ProductCategory
    if (finalCategoryIds && finalCategoryIds.length > 0) {
      console.log("Creating product categories:", finalCategoryIds);
      await prisma.productCategory.createMany({
        data: finalCategoryIds.map((categoryId) => ({
          productId: product.id,
          categoryId: categoryId,
        })),
      });
      console.log("Product categories created successfully");
    }

    res.status(201).json({ success: true, product });
  } catch (e) {
    console.error("Error creating product:", e);
    console.error("Error details:", {
      message: e.message,
      code: e.code,
      meta: e.meta,
    });
    res.status(500).json({ error: "Error creating product" });
  }
}
