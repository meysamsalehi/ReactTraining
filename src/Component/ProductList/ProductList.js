import React, { fragment, Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
  state = {
    products: [
      { title: "react-js", price: "90$", id: 1 },
      { title: "js", price: "80$", id: 2 },
      { title: "node-js", price: "70$", id: 3 },
    ],
  };

  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  render() {
    return (
      <fragment>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              onDelete={() => this.removeHandler(product.id)}
            />
          );
        })}
      </fragment>
    );
  }
}

export default ProductList;
