import React from "react";

const UserList = ({ data, error, isLoading }) => {
  if (isLoading && !error) {
    return <p>Loading.........</p>;
  }
  if (error) {
    return <p>Something Went Wrong!</p>;
  }
  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item?.name}</p>
      ))}
    </div>
  );
};

export default UserList;
