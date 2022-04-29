import React, { useReducer, useContext } from "react";
import { productsData } from "../Db/productsData";
import _ from "lodash";
const ProductsContext = React.createContext(); //state
const ProductsContextDispatcher = React.createContext(); //setState

const initialState = productsData;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      const indexIncrement = state.findIndex((p) => p.id === action.id);
      const productIncrement = { ...state[indexIncrement] };
      productIncrement.quantity++;
      const productUpdatedIncrement = [...state];
      productUpdatedIncrement[indexIncrement] = productIncrement;
      return productUpdatedIncrement;
    case "decrement":
      const index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        product.quantity--;
        const productUpdated = [...state];
        productUpdated[index] = product;
        return productUpdated;
      }
    case "change":
      const indexChange = state.findIndex((p) => p.id === action.id);
      const productChange = { ...state[indexChange] };
      productChange.title = action.event.target.value;
      const productUpdatedChange = [...state];
      productUpdatedChange[indexChange] = productChange;
      return productUpdatedChange;
    case "remove":
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    case "filter": {
      if (action.SelectedOption.value == "") {
        return productsData;
      } else {
        const updatedProduct = productsData.filter(
          (p) => p.availableSizes.indexOf(action.SelectedOption.value) >= 0
        );
        return updatedProduct;
      }
    }

    case "sort": {
      const value = action.SelectedOption.value;
      // alert(value);
      const product = [...state];
      if (value == "Lowest") {
        return _.orderBy(product, ["price"], ["asc"]);
      } else {
        return _.orderBy(product, ["price"], ["desc"]);
      }
    }

    case "search": {
      if (action.event.target.value == "") {
        return productsData;
      } else {
        const updatedProduct = productsData.filter(
          (p) => p.title.toLowerCase().includes(action.event.target.value.toLowerCase())
        );
        return updatedProduct;
      }
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <ProductsContext.Provider value={products}>
        <ProductsContextDispatcher.Provider value={dispatch}>
          {children}
        </ProductsContextDispatcher.Provider>
      </ProductsContext.Provider>
    </div>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsAction = () => useContext(ProductsContextDispatcher);
