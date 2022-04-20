import "./Product.css";
const Product = (props) => {
  return (
    <div className="product">
      <p>product name : {props.name}</p>
      <p>product name : {props.price}</p>
      <p> discount is {props.children}</p>
    </div>
  );
};

export default Product;
