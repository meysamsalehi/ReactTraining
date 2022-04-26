import React from "react";
import { useCount, useCountAction } from "./CounterProvider";
import { useContext } from "react";

const CounterOne = () => {
  const count = useCount();
  const { incrementHandler, addOneHandler, addFiveHandler } = useCountAction();

  return (
    <div>
      count is : {count}
      <button onClick={addOneHandler}>+1</button>
      <button onClick={addFiveHandler}>+5</button>
      <button onClick={incrementHandler}>-1</button>
    </div>
  );
};

export default CounterOne;
