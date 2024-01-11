import React, { useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

const initialState = {
  name: "",
  email: "",
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };

    case "addEmail":
      return { ...currentState, email: action.payload };

    default:
      return currentState;
  }
};

const ReducerExWIthForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h2 className="text-center mt-10 uppercase text-3xl underline">
        Form With Reducer
      </h2>
      <h2>Name: {state.name}</h2>
      <h2>Email: {state.email}</h2>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 justify-center items-center mt-10"
      >
        <input
          onChange={(e) =>
            dispatch({ type: "addName", payload: e.target.value })
          }
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="border-2 p-3"
        />
        <input
          onChange={(e) =>
            dispatch({ type: "addEmail", payload: e.target.value })
          }
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          className="border-2 p-3"
        />
        <input type="submit" value="Submit" className="btn btn-blue" />
      </form>
    </div>
  );
};

export default ReducerExWIthForm;
