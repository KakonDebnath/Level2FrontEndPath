import React from "react";

export const Test = () => {
  return React.createElement(
    "h3",
    { style: { background: "tomato" } },
    "Test File Test Component"
  );
};
// export const Test2 = () => {
//   return React.createElement(
//     "h4",
//     { style: { color: "red" } },
//     "Test File Test2 Component"
//   );
// };

const test2Style = {
  color: "red",
  fontSize: "30px",
}

export const Test2 = ()=>{
  return <h4 style={test2Style}>Test 2 jsx</h4>
}