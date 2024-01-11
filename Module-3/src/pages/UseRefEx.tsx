import React, { useRef } from "react";
import CustomInput from "../components/CustomInput";

const UseRefEx = () => {
  const myRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(myRef?.current?.value);
  };
  return (
    <div>
      <h1 className="text-center text-3xl">useRef Example</h1>
      <form onSubmit={handleSubmit}>
        <CustomInput className="border-2 border-red-500" ref={myRef} />
        {/* <input
          ref={myRef}
          className="border-2 border-red-500"
          type="text"
          name="name"
          id="name"
        /> */}
        <input className="btn btn-blue" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UseRefEx;
