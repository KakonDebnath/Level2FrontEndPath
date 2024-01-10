import { useState } from "react";

const UseStateEx = () => {
  console.log("click");
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-red-500 font-bold text-2xl text-center mt-5">
        Counter: {counter}
      </h1>
      <div className="flex justify-center items-center gap-4 mt-5">
        <button
          className="btn btn-blue"
          onClick={() => setCounter((prevCounter) => prevCounter + 1)}
        >
          Increment
        </button>
        <button
          className="btn btn-red"
          onClick={() => setCounter((prevCounter) => prevCounter - 1)}
        >
          Decrement
        </button>
        <button className="btn btn-reset" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseStateEx;
