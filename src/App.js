import { useState } from "react";
import Product from "./Component/Product/Product";

const App = () => {
  const [products, setProducts] = useState([
    { title: "react-js", price: "90$" },
    { title: "js", price: "80$" },
    { title: "node-js", price: "70$" },
  ]);

  const clickHandler = () => {
    setProducts([
      { title: "react-js", price: "80$" },
      { title: "js", price: "120$" },
      { title: "node-js", price: "74$" },
    ]);
    console.log("clicked");
  };

  return (
    <div className="container" id="title">
      <h1>shopping App</h1>
      {products.map((product) => {
        return <Product name={product.title} price={product.price} />;
      })}
      <button onClick={clickHandler}>change Price</button>
    </div>
  );
};

export default App;
export const userName = "meysam";
export const lastName = "salehi";
