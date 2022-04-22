import styles from "./Product.module.css";
const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>product name : {props.product.name}</p>
      <p>product name : {props.product.price}</p>
      <p> discount is {props.product.children}</p>
      <button onClick={props.onDelete}>delete</button>
      <span className={styles.value}>{props.product.quantity}</span>
      <button className={`${styles.button} ${styles.inc}`}>increment</button>
    </div>
  );
};

export default Product;
