import { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const addOneHandler = () => {
    setCount((preveCount) => preveCount + 1);
  };

  const addTwoHandler = () => {
    setCount((preveCount) => preveCount + 2);
  };

  const addFiveHandler = () => {
    for (let i = 0; i < 5; i++) setCount((preveCount) => preveCount + 1);
  };

  return (
    <div>
      <h2> count is: {count}</h2>
      <button onClick={addOneHandler}>+1</button>
      <button onClick={addTwoHandler}>+2</button>
      <button onClick={addFiveHandler}>+5</button>
    </div>
  );
};

export default HookCounter;
