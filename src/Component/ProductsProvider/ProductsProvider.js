import React, { useReducer, useContext } from "react";
const ProductsContext = React.createContext(); //state
const ProductsContextDispatcher = React.createContext(); //setState

const initialState = [
  { title: "react-js", price: "90$", id: 1, quantity: 1 },
  { title: "js", price: "80$", id: 2, quantity: 1 },
  { title: "node-js", price: "70$", id: 3, quantity: 1 },
];

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
