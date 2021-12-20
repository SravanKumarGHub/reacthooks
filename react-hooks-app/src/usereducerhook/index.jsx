import React, { useState, useReducer } from "react";
import { Route, Switch } from "react-router-dom";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function UseReducerHook() {
  const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
    // setCounter((counter) => counter + 1);
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
    // setCounter((counter) => counter + 1);
  }
  return (
    <div>
      <h1>React - useReducer Hook </h1>
      <button onClick={increment}>+</button>

      <span>{state.count}</span>

      <button onClick={decrement}>-</button>
    </div>
  );
}

export { UseReducerHook };
