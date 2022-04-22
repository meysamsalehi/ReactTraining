import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";
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
        {props.product.quantity > 1 ? "-" : <BiTrash />}
      </button>
    </div>
  );
};

export default Product;
