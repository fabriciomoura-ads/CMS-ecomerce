// pages/api/server/db/products/getAllProducts.js
import { prisma } from "../prisma";

export const getAllProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      // pega todas as categorias via tabela pivô
      categories: {
        include: { category: true },
      },
      // opcional: tenta pegar um asset de imagem vinculado ao produto
      assets: {
        where: {
          OR: [{ type: "IMAGE" }, { type: "PNG" }, { type: "SVG" }],
        },
        orderBy: { createdAt: "desc" },
        take: 1,
      },
    },
    orderBy: { name: "asc" },
  });

  return products.map((p) => {
    // Escolha da imagem:
    // 1) mainImage
    // 2) images (JSON) -> procura isPrimary/isMain, senão a primeira
    // 3) assets (previewUri ou uri)
    let img = p.mainImage || p.img || null;

    if (!img && p.images) {
      let arr = [];
      if (Array.isArray(p.images)) {
        arr = p.images;
      } else if (typeof p.images === "string") {
        try {
          arr = JSON.parse(p.images);
        } catch {}
      } else if (typeof p.images === "object") {
        // Se é um objeto com gallery, usar a gallery
        if (p.images.gallery && Array.isArray(p.images.gallery)) {
          arr = p.images.gallery;
        } else {
          arr = p.images;
        }
      }

      if (Array.isArray(arr) && arr.length) {
        // Procurar por isPrimary ou isMain, senão usar a primeira
        const primary = arr.find((it) => it?.isPrimary || it?.isMain) || arr[0];
        img = primary?.url || primary?.uri || null;
      }
    }

    if (!img && p.assets?.length) {
      img = p.assets[0]?.previewUri || p.assets[0]?.uri || null;
    }

    const cats = p.categories?.map((pc) => pc.category) || [];
    const primaryCat = cats[0] || null;

    return {
      id: p.id,
      title: p.name,
      name: p.name,
      description: p.description || null,

      price: 0,
      basePrice: 0,
      status: p.status === "ACTIVE",
      isPublic: p.isPublic,

      category: primaryCat
        ? { id: primaryCat.id, name: primaryCat.name }
        : null,
      categoryId: primaryCat?.id || null,

      categories: cats.map((cat) => ({ id: cat.id, name: cat.name })),

      img,
      image: img,
      img2: p.img2,
      linkCanvas: p.linkCanvas,

      arquivoPdf: p.arquivoPdf,
    };
  });
};
