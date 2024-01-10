import React, { useState } from "react";

const FormExObj = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleNameEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUser({ ...user, [inputName]: inputValue });
  };
  return (
    <div>
      <h2 className="text-center mt-10 uppercase text-3xl underline">
        Fokira form Set all field for one state
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 justify-center items-center mt-10"
      >
        <input
          onChange={handleNameEmailChange}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="border-2 p-3"
        />
        <input
          onChange={handleNameEmailChange}
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

export default FormExObj;
