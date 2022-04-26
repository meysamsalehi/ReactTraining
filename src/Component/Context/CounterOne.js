import React from "react";
import { useCount, useCountAction } from "./CounterProvider";
import { useContext } from "react";

const CounterOne = () => {
  const count = useCount();
  const dispatch = useCountAction();

  // const { incrementHandler, addOneHandler, addFiveHandler } = useCountAction();

  return (
    <div>
      count is : {count}
      <button onClick={() => dispatch({type:"add" , value: 1})}>+1</button>
      <button onClick={() => dispatch({type:"add" , value: 5})}>+5</button>
      <button onClick={() => dispatch({type:"decrement" , value: 1})}>-1</button>
    </div>
  );
};

export default CounterOne;
