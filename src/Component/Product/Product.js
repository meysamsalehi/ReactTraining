import styles from "./Product.module.css";
const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>product name : {props.name}</p>
      <p>product name : {props.price}</p>
      <p> discount is {props.children}</p>
      <button onClick={props.onDelete}>delete</button>
    </div>
  );
};

export default Product;
