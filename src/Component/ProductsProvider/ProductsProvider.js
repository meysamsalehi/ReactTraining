import React, { useState, useContext } from "react";
const ProductsContext = React.createContext(); //state
const ProductsContextDispatcher = React.createContext(); //setState

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { title: "react-js", price: "90$", id: 1, quantity: 1 },
    { title: "js", price: "80$", id: 2, quantity: 1 },
    { title: "node-js", price: "70$", id: 3, quantity: 1 },
  ]);
  return (
    <div>
      <ProductsContext.Provider value={products}>
        <ProductsContextDispatcher.Provider value={setProducts}>
          {children}
        </ProductsContextDispatcher.Provider>
      </ProductsContext.Provider>
    </div>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsAction = () => {
  const setProducts = useContext(ProductsContextDispatcher);
  const products = useContext(ProductsContext);

  const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((p) => p.id === id);
    const product = { ...products[index] };
    product.quantity++;
    const productUpdated = [...products];
    productUpdated[index] = product;
    setProducts(productUpdated);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((p) => p.id === id);
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts);
    } else {
      product.quantity--;
      const productUpdated = [...products];
      productUpdated[index] = product;
      setProducts(productUpdated);
    }
  };

  const changeHandler = (event, id) => {
    const index = products.findIndex((p) => p.id === id);
    const product = { ...products[index] };
    product.title = event.target.value;
    const productUpdated = [...products];
    productUpdated[index] = product;
    setProducts(productUpdated);
  };

  return { removeHandler, incrementHandler, decrementHandler, changeHandler };
};
