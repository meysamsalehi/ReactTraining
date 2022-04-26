import React, { useState } from "react";
export const CounterContext = React.createContext(); //state
export const CounterContextDispatcher = React.createContext(); //setState

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
