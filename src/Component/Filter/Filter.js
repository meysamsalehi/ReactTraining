import { useProductsAction } from "../ProductsProvider/ProductsProvider";
import { useState } from 'react';

const Filter = () => {
  const dispatch = useProductsAction();
  const [value,setValue] = useState("");
  const filterHandler = (e) => {


    dispatch({ type: "filter", event: e });
    setValue(e.target.value)
  }

  return (
    <div>
      <select
        onChange={}
        value={value}
      >
        <option value="">All</option>
        <option value="XXL">XXL</option>
        <option value="XL">XL</option>
        <option value="L">LG</option>
        <option value="M">MD</option>
        <option value="S">XS</option>
      </select>
    </div>
  );
};

export default Filter;
