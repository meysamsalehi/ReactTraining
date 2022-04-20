import React, { Component } from "react";
import Product from "./Component/Product/Product";

class AppClass extends Component {
  state = {
    products: [
      { title: "react-js", price: "90$" },
      { title: "js", price: "80$" },
      { title: "node-js", price: "70$" },
    ],
  };

  render() {
    return (
      <div className="container" id="title">
        <h1>shopping App</h1>
        {this.state.products.map((product) => {
          return <Product name={product.title} price={product.price} />;
        })}
      </div>
    );
  }
}

export default AppClass;

export const userName = "meysam";
export const lastName = "salehi";
