import React from "react";
import {
  useProducts,
  useProductsAction,
} from "../ProductsProvider/ProductsProvider";
import Product from "./../Product/Product";

const ProductList = (props) => {
  const products = useProducts();
  let { removeHandler, incrementHandler, decrementHandler, changeHandler } =
    useProductsAction();

  const renderProducts = () => {
    if (products.length === 0) return <div>در سبد خرید چیزی نیست</div>;
    return products.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          onDelete={() => removeHandler(product.id)}
          onIncrement={() => incrementHandler(product.id)}
          onDecrement={() => decrementHandler(product.id)}
          onChange={(e) => changeHandler(e, product.id)}
        />
      );
    });
  };

  return (
    <>
      {products.length && <p> چیزی را اضافه کنید </p>}
      {renderProducts()};
    </>
  );
};

export default ProductList;
