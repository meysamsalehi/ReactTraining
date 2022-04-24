import { useEffect } from "react";
import { useState } from "react";

const FunctionalCounterLife = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("updating count");
  }, [count]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>+1 {count}</button>
    </div>
  );
};

export default FunctionalCounterLife;
