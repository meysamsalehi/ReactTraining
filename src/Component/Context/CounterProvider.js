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
export const useCountAction = () => useContext(CounterContextDispatcher);
