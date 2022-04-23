import React, { Fragment, Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
  renderProducts = () => {
    if (this.props.products.length === 0)
      return <div>در سبد خرید چیزی نیست</div>;
    return this.props.products.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          onDelete={() => this.props.onDelete(product.id)}
          onIncrement={() => this.props.onIncrement(product.id)}
          onDecrement={() => this.props.onDecrement(product.id)}
          onChange={(e) => this.props.onChange(e, product.id)}
        />
      );
    });
  };

  render() {
    return (
      <Fragment>
        {!this.props.products.length && <p> چیزی را اضافه کنید </p>}
        {this.renderProducts()};
      </Fragment>
    );
  }
}

export default ProductList;
