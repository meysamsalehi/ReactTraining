import React, { fragment, Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
  state = {
    products: [
      { title: "react-js", price: "90$" },
      { title: "js", price: "80$" },
      { title: "node-js", price: "70$" },
    ],
  };
  render() {
    return (
      <fragment>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              click={() => this.clickHandlerBind()}
            />
          );
        })}
      </fragment>
    );
  }
}

export default ProductList;
