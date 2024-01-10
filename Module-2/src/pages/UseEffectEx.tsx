import { useEffect, useState } from "react";

const UseEffectEx = () => {
  const [hidden, setHidden] = useState(true);
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     // console.log("Render");
  //     // return () => {
  //     //   console.log("Inside Cleanup");
  //     // };
  //     const intervalId = setInterval(() => {
  //       setCount((prev) => prev + 1);
  //       console.log(count);
  //     }, 1000);

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, []);
  return (
    // <div>
    //   <h1>{count}</h1>
    //   {/* <button
    //     onClick={() => setHidden((prev) => !prev)}
    //     className="btn btn-blue"
    //   >
    //     Click
    //   </button> */}
    // </div>
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-red"
      >
        {hidden ? "Show" : "Hide"}
      </button>
      {!hidden && <Todo />}
    </div>
  );
};

const Todo = () => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.name));

    return () => {
      abortController.abort();
    };
  }, []);

  return <div className="border border-red-600 p-10">Todo</div>;
};

export default UseEffectEx;
