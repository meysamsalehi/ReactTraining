import React from "react";
import { useProducts } from "../ProductsProvider/ProductsProvider";
import Product from "./../Product/Product";

const ProductListF = (props) => {
  let { onDelete, onChange, onIncrement, onDecrement } = props;
  const products = useProducts();

  const renderProducts = () => {
    if (products.length === 0) return <div>در سبد خرید چیزی نیست</div>;
    return products.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          onDelete={() => onDelete(product.id)}
          onIncrement={() => onIncrement(product.id)}
          onDecrement={() => onDecrement(product.id)}
          onChange={(e) => onChange(e, product.id)}
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

export default ProductListF;








// import React, { Fragment, Component  } from "react";
// import Product from "../Product/Product";

// class ProductList extends Component {
//   renderProducts = () => {
//     let { onDelete, onChange, onIncrement, onDecrement, products } = this.props;

//     if (products.length === 0) return <div>در سبد خرید چیزی نیست</div>;
//     return products.map((product) => {
//       return (
//         <Product
//           key={product.id}
//           product={product}
//           onDelete={() => onDelete(product.id)}
//           onIncrement={() => onIncrement(product.id)}
//           onDecrement={() => onDecrement(product.id)}
//           onChange={(e) => onChange(e, product.id)}
//         />
//       );
//     });
//   };

//   render() {
//     const { products } = this.props;
//     return (
//       <Fragment>
//         {products.length && <p> چیزی را اضافه کنید </p>}
//         {this.renderProducts()};
//       </Fragment>
//     );
//   }
// }

// export default ProductList;




