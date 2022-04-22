import React, { fragment, Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
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

  renderProducts = () => {
    if (this.state.products.length === 0)
      return <div>در سبد خرید چیزی نیست</div>;
    return this.state.products.map((product) => {
      return (
        <Product
          // name={product.title}
          // price={product.price}
          // quantity={product.quantity}
          product={product}
          onDelete={() => this.removeHandler(product.id)}
          onIncrement={() => this.incrementHandler(product.id)}
          onDecrement={() => this.decrementHandler(product.id)}
          onChange={(e) => this.changeHandler(e, product.id)}
        />
      );
    });
  };

  render() {
    return (
      <fragment>
        {!this.state.products.length && <p> چیزی را اضافه کنید </p>}
        {this.renderProducts()};
      </fragment>
    );
  }
}

export default ProductList;
