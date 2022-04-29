import { useProductsAction } from "../ProductsProvider/ProductsProvider";
import { useState } from "react";
import SelectComponent from "../../common/SelectComponent/SelectComponent";
import Styles from "./Filter.module.css";

const Filter = () => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");

  const sortHandler = (SelectedOption) => {
    console.log("ghabl", sort);
    dispatch({ type: "sort", SelectedOption: SelectedOption });
    setSort(SelectedOption);
  };

  const changeHandler = (SelectedOption) => {
    dispatch({ type: "filterChangeHandler", SelectedOption: SelectedOption });
    dispatch({ type: "sort", SelectedOption: sort });
    setValue(SelectedOption);
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
      <SelectComponent
        value={value}
        onChange={changeHandler}
        options={options}
        title="filter"
      />
      <SelectComponent
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
        title="sort"
      />
      <h2>salam {sort.value}</h2>
    </div>
  );
};

export default Filter;
