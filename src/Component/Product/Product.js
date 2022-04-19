const Product = (props) => {
  return (
    <div>
      <p>product name : {props.name}</p>
      <p>product name : {props.price}</p>
      <p> discount is {props.children}</p>
    </div>
  );
};

export default Product;
