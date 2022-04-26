import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    default:
      return state;
  }
};

const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h2> count first is: {count} </h2>
        <button onClick={() => dispatch({ type: "add", value: 1 })}>
          +1 One
        </button>
        <button onClick={() => dispatch({ type: "add", value: 5 })}>
          +5 One
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          -1 One
        </button>
      </div>

      <div>
        <h2> count first is: {countTwo} </h2>
        <button onClick={() => dispatchTwo({ type: "add", value: 1 })}>
          +1 One
        </button>
        <button onClick={() => dispatchTwo({ type: "add", value: 5 })}>
          +5 One
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          -1 One
        </button>
      </div>
    </>
  );
};

export default CountReducer;
