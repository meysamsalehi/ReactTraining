import { useProducts } from "../ProductsProvider/ProductsProvider";
import styles from "./NavBar.module.css";
const NavBar = () => {
  const products = useProducts();
  const totalItems = products.length;

  return (
    <header className={styles.navBar}>
      <h2>Shopping Count</h2>
      <span>{totalItems}</span>
    </header>
  );
};

export default NavBar;
