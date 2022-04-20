import React, { Component } from "react";
import Product from "./Component/Product/Product";

class AppClass extends Component {
  render() {
    return (
      <div className="container" id="title">
        <h1>shopping App</h1>
        <Product name="react js" price="90$" />
        <Product name="node js" price="70$" />
        <Product name="java script" price="80$">
          {" "}
          15%{" "}
        </Product>
      </div>
    );
  }
}

export default AppClass;

export const userName = "meysam";
export const lastName = "salehi";
