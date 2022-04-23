import React, { Component } from "react";
import NavBar from "./Component/NavBar/Navbar";
import ProductList from "./Component/ProductList/ProductList";

class AppClass extends Component {
  state = {
    products: [
      { title: "react-js", price: "90$", id: 1, quantity: 1 },
      { title: "js", price: "80$", id: 2, quantity: 1 },
      { title: "node-js", price: "70$", id: 3, quantity: 1 },
    ],
  };

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    const productsClone = [...this.state.products];
    const selectedItem = productsClone.find((p) => p.id === id);
    selectedItem.quantity++;
    this.setState({ products: productsClone });
  };

  decrementHandler = (id) => {
    const productsClone = [...this.state.products];
    const selectedItem = productsClone.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filteredProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
    } else {
      selectedItem.quantity--;
      this.setState({ products: productsClone });
    }
  };

  changeHandler = (event, id) => {
    const productsClone = [...this.state.products];
    const selectedItem = productsClone.find((p) => p.id === id);
    selectedItem.title = event.target.value;
    this.setState({ products: productsClone });
  };

  render() {
    return (
      <div className="container" id="title">
        <NavBar totalItems={this.state.products.length} />
        <h1>shopping App</h1>
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onChange={this.changeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
        />
      </div>
    );
  }
}

export default AppClass;

export const userName = "meysam";
export const lastName = "salehi";
