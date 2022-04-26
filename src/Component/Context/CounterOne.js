import React from "react";
import { CounterContext, CounterContextDispatcher } from "./CounterProvider";
import { useContext } from "react";

const CounterOne = () => {
  const count = useContext(CounterContext);
  const setCount = useContext(CounterContextDispatcher);
  return (
    <div>
      count is : {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default CounterOne;
