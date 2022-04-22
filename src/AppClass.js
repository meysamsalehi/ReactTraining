import React, { Component } from "react";
import ProductList from "./Component/ProductList/ProductList";

class AppClass extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="container" id="title">
        <h1>shopping App</h1>
        <ProductList />
      </div>
    );
  }
}

export default AppClass;

export const userName = "meysam";
export const lastName = "salehi";
