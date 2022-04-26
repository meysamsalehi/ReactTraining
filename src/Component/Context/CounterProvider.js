import React, { useState, useContext } from "react";
const CounterContext = React.createContext(); //state
const CounterContextDispatcher = React.createContext(); //setState

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <CounterContext.Provider value={count}>
        <CounterContextDispatcher.Provider value={setCount}>
          {children}
        </CounterContextDispatcher.Provider>
      </CounterContext.Provider>
    </div>
  );
};

export default CounterProvider;

export const useCount = () => useContext(CounterContext);
export const useCountAction = () => {
  const setCount = useContext(CounterContextDispatcher);

  const addOneHandler = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const addFiveHandler = () => {
    setCount((prevValue) => prevValue + 5);
  };

  const incrementHandler = () => {
    setCount((prevValue) => prevValue - 1);
  };

  return { addOneHandler, addFiveHandler, incrementHandler };
};