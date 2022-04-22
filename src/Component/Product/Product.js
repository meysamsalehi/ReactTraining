import styles from "./Product.module.css";
const Product = (props) => {
  return (
    <div className={styles.product}>
      <input
        className={styles.input}
        onChange={props.onChange}
        value={props.product.title}
      />
      <p>product name : {props.product.title}</p>
      <p>product name : {props.product.price}</p>
      <p> discount is {props.product.children}</p>
      <button onClick={props.onDelete}>delete</button>
      <span className={styles.value}>{props.product.quantity}</span>
      <button
        onClick={props.onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button onClick={props.onDecrement} className={styles.button}>
        -
      </button>
    </div>
  );
};

export default Product;
