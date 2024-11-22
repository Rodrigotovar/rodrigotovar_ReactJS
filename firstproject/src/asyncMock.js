const products = [
  {
    id: "1",
    name: "Camiseta Básica",
    price: 199.99,
    category: "tee-shirt",
    img: "https://example.com/camiseta-basica.jpg",
    stock: 50,
    description: "Camiseta básica 100% algodón, disponible en varios colores.",
  },
  {
    id: "2",
    name: "Camiseta Estampada",
    price: 299.99,
    category: "tee-shirt",
    img: "https://example.com/camiseta-estampada.jpg",
    stock: 40,
    description: "Camiseta con estampados modernos y materiales suaves.",
  },
  {
    id: "3",
    name: "Sudadera con Capucha",
    price: 599.99,
    category: "sudaderas",
    img: "https://example.com/sudadera-capucha.jpg",
    stock: 25,
    description: "Sudadera con capucha y bolsillo canguro, cómoda y abrigadora.",
  },
  {
    id: "4",
    name: "Sudadera Deportiva",
    price: 699.99,
    category: "sudaderas",
    img: "https://example.com/sudadera-deportiva.jpg",
    stock: 20,
    description: "Sudadera deportiva ligera, perfecta para entrenamientos.",
  },
  {
    id: "5",
    name: "Camiseta Oversize",
    price: 229.99,
    category: "tee-shirt",
    img: "https://example.com/camiseta-oversize.jpg",
    stock: 30,
    description: "Camiseta oversize para un estilo casual y relajado.",
  },
  {
    id: "6",
    name: "Sudadera Básica",
    price: 399.99,
    category: "sudaderas",
    img: "https://example.com/sudadera-basica.jpg",
    stock: 15,
    description: "Sudadera básica de algodón, disponible en colores neutros.",
  },
];

// Obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2500);
  });
};

// Obtener productos por categoría
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 2500);
  });
};

// Obtener un solo producto por ID
export const getProductByID = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 2500);
  });
};
