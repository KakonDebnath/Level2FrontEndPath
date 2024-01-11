import React, { useRef } from "react";

const UseRefEx = () => {
  const myRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(myRef.current?.value);
  };
  return (
    <div>
      <h1 className="text-center text-3xl">useRef Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          ref={myRef}
          className="btn border-2 border-red-400"
          type="text"
          name="name"
          id="name"
        />
        <input className="btn btn-blue" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UseRefEx;
