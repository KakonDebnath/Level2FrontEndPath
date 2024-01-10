import { useEffect, useState } from "react";

const UseEffectEx = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    console.log("Render");

    return () => {
      console.log("Inside Cleanup");
    };
  }, [hidden]);
  return (
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-blue"
      >
        Click
      </button>
    </div>
  );
};

export default UseEffectEx;
