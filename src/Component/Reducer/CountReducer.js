import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "add2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    default:
      return state;
  }
};

const CountReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2> count first is: {count.firstCounter} </h2>
      <h2> count second is: {count.secondCounter} </h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        +1 One
      </button>
      <button onClick={() => dispatch({ type: "add", value: 5 })}>
        +5 One
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -1 One
      </button>
      <button onClick={() => dispatch({ type: "add2", value: 1 })}>
        +1 Two
      </button>
      <button onClick={() => dispatch({ type: "add2", value: 5 })}>
        +5 Two
      </button>

      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        -1 Two
      </button>
    </div>
  );
};

export default CountReducer;
