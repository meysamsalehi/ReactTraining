import { useState } from "react";
import ClassCounter from "./Component/ClassCounter.js/ClassCounter";
import HookCounter from "./Component/HookCounter/HookCounter";
import HookObject from "./Component/HookObject/HookObject";
import Product from "./Component/Product/Product";
import HookArray from "./Component/HookArray/HookArray";

const App = () => {
  const [products, setProducts] = useState([
    { title: "react-js", price: "90$", id: 1 },
    { title: "js", price: "80$", id: 2 },
    { title: "node-js", price: "70$", id: 3 },
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

      {/* solve1 */}
      {products.map((product) => {
        return (
          <Product
            name={product.title}
            price={product.price}
            key={product.id}
          />
        );
      })}

      {/* solve2 */}
      {/* {products.map((product, index) => {
        return (
          <Product name={product.title} price={product.price} key={index} />
        );
      })} */}

      <button onClick={clickHandler}>change Price</button>

      {/* <HookCounter />
      <ClassCounter /> */}
      {/* <HookObject /> */}
      {/* <HookArray /> */}
    </div>
  );
};

export default App;
export const userName = "meysam";
export const lastName = "salehi";
