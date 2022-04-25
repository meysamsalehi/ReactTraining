import { useEffect, useState, useRef } from "react";

const FunctionalUseRefTest = () => {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(0);
  const prevValue = useRef();
  const prevCount = useRef();

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  console.log("pre render", inputValue);
  console.log("preve value", prevValue.current);

  useEffect(() => {
    prevValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={changeHandler} />

      <button onClick={() => setCount(Math.floor(Math.random() * 100))}>
        random
      </button>

      <h2>
        my inputvalue is {inputValue} and preve input value is{" "}
        {prevValue.current}
      </h2>

      <h2>
        my count is {count} and preve count value is {prevCount.current}
      </h2>
    </div>
  );
};

export default FunctionalUseRefTest;
