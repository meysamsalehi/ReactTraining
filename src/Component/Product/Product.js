import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";
const Product = ({ product, onDelete, onChange, onIncrement, onDecrement }) => {
  // CWM , CWU + CWUM
  // useEffect(() => {
  //   console.log("CWM , CWU + CWUM");
  // });

  //Component Will Mount
  // useEffect(() => {
  //   console.log("Component will mount");
  // }, []);

  // Component will update example quantity
  // useEffect(() => {
  //   console.log("Component will Update example quantity");
  // }, [product.quantity]);

  // Component will unmount
  useEffect(() => {
    console.log("All Mount");
    return () => {
      return console.log("CWU");
    };
  }, []);

  return (
    <div className={styles.product}>
      <input
        className={styles.input}
        onChange={onChange}
        value={product.title}
      />
      <p>product name : {product.title}</p>
      <p>product name : {product.price}</p>
      <p> discount is {product.children}</p>
      <button onClick={onDelete}>delete</button>
      <span className={styles.value}>{product.quantity}</span>
      <button
        onClick={onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
    </div>
  );
};

export default Product;
