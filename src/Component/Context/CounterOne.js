import React from "react";
import { useCount, useCountAction } from "./CounterProvider";
import { useContext } from "react";

const CounterOne = () => {
  const count = useCount();
  const setCount = useCountAction();

  const addOneHandler = () => {
    setCount(count + 2);
  };
  return (
    <div>
      count is : {count}
      <button onClick={addOneHandler}>+1</button>
    </div>
  );
};

export default CounterOne;
