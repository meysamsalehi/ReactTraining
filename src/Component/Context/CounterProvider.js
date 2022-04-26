import React, { useState, useContext, useReducer } from "react";
const CounterContext = React.createContext(); //state
const CounterContextDispatcher = React.createContext(); //setState

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state + action.value;
    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <CounterContext.Provider value={count}>
        <CounterContextDispatcher.Provider value={dispatch}>
          {children}
        </CounterContextDispatcher.Provider>
      </CounterContext.Provider>
    </div>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => useContext(CounterContextDispatcher);

// export const useCountAction = () => {
//   const dispatch = useContext(CounterContextDispatcher);

// const addOneHandler = () => {
//   setCount((prevValue) => prevValue + 1);
// };

// const addFiveHandler = () => {
//   setCount((prevValue) => prevValue + 5);
// };

// const incrementHandler = () => {
//   setCount((prevValue) => prevValue - 1);
// };

// return { addOneHandler, addFiveHandler, incrementHandler };
// };
