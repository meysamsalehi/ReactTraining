import { useState } from "react";
import "./App.css";
import ProductList from "./Component/ProductList/ProductList";
import NavBar from "./Component/NavBar/Navbar";

const App = () => {
  const [products, setProducts] = useState([
    { title: "react-js", price: "90$", id: 1, quantity: 1 },
    { title: "js", price: "80$", id: 2, quantity: 1 },
    { title: "node-js", price: "70$", id: 3, quantity: 1 },
  ]);

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

  return (
    <div className="container">
      <NavBar totalItems={products.length} />
      <h1>shopping App</h1>
      <ProductList
        products={products}
        onDelete={removeHandler}
        onChange={changeHandler}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
    </div>
  );
};

export default App;
