import React, { useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };

    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>{state.count}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
