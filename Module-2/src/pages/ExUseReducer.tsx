import { useReducer } from "react";

const initialState = { count: 0 };
const reducer = (
  currentState: typeof initialState,
  action: {
    type: string;
    payload: number;
  }
) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "incrementByAmount":
      return {
        count: currentState.count + action.payload,
      };

    case "decrement":
      return { count: currentState.count - 1 };

    default:
      return currentState;
  }
};

const ExUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="text-center mt-10 uppercase text-3xl underline">
        Use Reducer Example
      </h1>
      <h2 className="text-center text-3xl mt-10">{state.count}</h2>
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => dispatch({ type: "increment", payload: null || 0 })}
          className="btn btn-blue"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "incrementByAmount", payload: 5 })}
          className="btn btn-blue"
        >
          Increment By 5
        </button>
        <button
          onClick={() => dispatch({ type: "decrement", payload: null || 0 })}
          className="btn btn-red"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default ExUseReducer;
