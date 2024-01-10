
type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const UseStateEx = ({ counter, setCounter }: TCounter) => {
  console.log("click");

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const handleDecrement = () => {
    setCounter((prevCounter) => {
      if (prevCounter === 0) {
        prevCounter === 0;
      } else {
        prevCounter -= 1;
      }
      return prevCounter;
    });
  };

  return (
    <div>
      <h1 className="text-red-500 font-bold text-2xl text-center mt-5">
        Counter: {counter}
      </h1>
      <div className="flex justify-center items-center gap-4 mt-5 disabled:">
        <button className="btn btn-blue" onClick={handleIncrement}>
          Increment
        </button>
        <button
          className={`btn btn-red ${
            counter === 0 ? "disabled:opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleDecrement}
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
