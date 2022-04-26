import React from "react";
import {
  useProducts,
  useProductsAction,
} from "../ProductsProvider/ProductsProvider";
import Product from "./../Product/Product";

const ProductList = (props) => {
  const products = useProducts();
  const dispatch = useProductsAction();

  const renderProducts = () => {
    if (products.length === 0) return <div>در سبد خرید چیزی هست؟</div>;
    return products.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          onDelete={() => dispatch({ type: "remove", id: product.id })}
          onIncrement={() => dispatch({ type: "increment", id: product.id })}
          onDecrement={() => dispatch({ type: "decrement", id: product.id })}
          onChange={(e) =>
            dispatch({ type: "change", id: product.id, event: e })
          }
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
