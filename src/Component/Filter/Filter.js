import { useProductsAction } from "../ProductsProvider/ProductsProvider";
import { useState, useEffect } from "react";
import Select from "react-select";
import Styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("Lowest");

  useEffect(() => {
    dispatch({
      type: "sort",
      SelectedOption: { value: "Lowest" },
    });
  }, []);

  const changeHandler = (SelectedOption) => {
    console.log(SelectedOption);
    dispatch({ type: "filter", SelectedOption: SelectedOption });
    dispatch({ type: "sort", SelectedOption: { value: sort } });
    setValue(SelectedOption);
  };

  const sortHandler = (SelectedOption) => {
    console.log(SelectedOption);
    dispatch({ type: "sort", SelectedOption: SelectedOption });
    setSort(SelectedOption);
  };

  const options = [
    { value: "", label: "All" },
    { value: "Xs", label: "Xs" },
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
  ];

  const sortOptions = [
    { value: "Highest", label: "Highest" },
    { value: "Lowest", label: "Lowest" },
  ];

  return (
    <div className={Styles.filter}>
      <p> filter product by:</p>
      <div className={Styles.selectContainer}>
        <span> orderby:</span>
        <Select
          value={value}
          onChange={changeHandler}
          options={options}
          className={Styles.select}
        />
      </div>
      <p> filter sort by:</p>
      <div className={Styles.selectContainer}>
        <span> orderby:</span>
        <Select
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
          className={Styles.select}
        />
      </div>
    </div>
  );
};

export default Filter;
