import { useState } from "react";
import styles from "./styles.module.css";
import { useProductsAction } from "../../Component/ProductsProvider/ProductsProvider";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useProductsAction();
  const changeHandler = (e) => {
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };
  return (
    <div className={styles.formControl}>
      <label>search for:</label>
      <input
        type="text"
        onChange={changeHandler}
        value={value}
        placeholder="Search input"
      />
    </div>
  );
};

export default SearchBar;
