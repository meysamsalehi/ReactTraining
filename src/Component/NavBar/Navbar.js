import styles from "./NavBar.module.css";
const NavBar = (props) => {
  return (
    <header className={styles.navBar}>
      <h2>Shopping Count</h2>
      <span>{props.totalItems}</span>
    </header>
  );
};

export default NavBar;
