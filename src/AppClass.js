import React, { Component } from "react";
import Product from "./Component/Product/Product";

class AppClass extends Component {
  state = {
    products: [
      { title: "react-js", price: "90$" },
      { title: "js", price: "80$" },
      { title: "node-js", price: "70$" },
    ],
    count: 0,
  };

  countHandler(id) {
    console.log("clicked", id);
    this.setState({ count: this.state.count + id });
  }
  // clickHandler = () => {
  //   this.setState({
  //     products: [
  //       { title: "react-js", price: "100$" },
  //       { title: "js", price: "180$" },
  //       { title: "node-js", price: "170$" },
  //     ],
  //   });
  //   console.log("clicked");
  // };

  // solve1
  clickHandlerBind() {
    this.setState({
      products: [
        { title: "react-js", price: "100$" },
        { title: "js", price: "180$" },
        { title: "node-js", price: "170$" },
      ],
    });
    console.log("clicked");
  }

  constructor(props) {
    super(props);
    this.clickHandlerBind = this.clickHandlerBind.bind(this);
    this.countHandler = this.countHandler.bind(this);
    this.setState({
      products: [
        { title: "react-js", price: "100$" },
        { title: "js", price: "180$" },
        { title: "node-js", price: "170$" },
      ],
    });
  }

  render() {
    return (
      <div className="container" id="title">
        <h1>shopping App</h1>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              click={() => this.clickHandlerBind()}
            />
          );
        })}
        {/* <button onClick={this.clickHandlerBind}>change Price</button>

        <button onClick={() => this.countHandler(1)}>
          add counter {this.state.count}
        </button> */}
      </div>
    );
  }
}

export default AppClass;

export const userName = "meysam";
export const lastName = "salehi";
