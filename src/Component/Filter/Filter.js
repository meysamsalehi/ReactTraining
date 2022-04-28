import { useProductsAction } from "../ProductsProvider/ProductsProvider";

const Filter = () => {
  const dispatch = useProductsAction();

  return (
    <div>
      <select onChange={(e) => dispatch({ type: "filter", event: e })}>
        <option value="">All</option>
        <option value="XXL">XXL</option>
        <option value="XL">XL</option>
        <option value="LG">LG</option>
        <option value="MD">MD</option>
        <option value="XS">XS</option>
      </select>
    </div>
  );
};

export default Filter;
