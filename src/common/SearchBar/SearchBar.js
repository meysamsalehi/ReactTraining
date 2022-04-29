import { useState } from "react";
import styles from "./styles.module.css";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    console.log(e.target.value);
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
