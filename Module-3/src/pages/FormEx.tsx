import React, { useState } from "react";

const FormEx = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ name, email });
  };
  return (
    <div>
      <h2 className="text-center mt-10 uppercase text-3xl underline">
        Fokira form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 justify-center items-center mt-10"
      >
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="text"
          id="name"
          placeholder="Name"
          className="border-2 p-3"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
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

export default FormEx;
