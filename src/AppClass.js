import React, { Component } from "react";
import ClassTimer from "./Component/ClassTimer/ClassTimer";
import NavBar from "./Component/NavBar/Navbar";
import ProductList from "./Component/ProductList/ProductList";
import FunctionalTimer from "./Component/FunctionalTimer/FunctionalTimer";
import Wrapper from "./Component/Wrapper/Wrapper";

class AppClass extends Component {
  state = {
    products: [
      { title: "react-js", price: "90$", id: 1, quantity: 1 },
      { title: "js", price: "80$", id: 2, quantity: 1 },
      { title: "node-js", price: "70$", id: 3, quantity: 1 },
    ],
    isShow: true,
  };

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    const index = this.state.products.findIndex((p) => p.id === id);
    const product = { ...this.state.products[index] };
    product.quantity++;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((p) => p.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      const filteredProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
    } else {
      product.quantity--;
      const products = [...this.state.products];
      products[index] = product;
      this.setState({ products });
    }
  };

  changeHandler = (event, id) => {
    const index = this.state.products.findIndex((p) => p.id === id);
    const product = { ...this.state.products[index] };
    product.title = event.target.value;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  // componentDidMount() {
  //   console.log("mounting app");
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("updating app");
  //   console.log(prevState.products[0].quantity);
  // }

  // //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
  // componentWillUnmount() {
  //   console.log("unmounting app");
  // }

  render() {
    // console.log("rendering");
    return (
      <Wrapper class="container" id="title">
        <NavBar totalItems={this.state.products.length} />
        <h1>shopping App</h1>
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onChange={this.changeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
        />
        {/* <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
          {this.state.isShow ? "hide" : "true"}
        </button>
        {this.state.isShow && <FunctionalTimer />} */}
      </Wrapper>
    );
  }
}

export default AppClass;

export const userName = "meysam";
export const lastName = "salehi";
