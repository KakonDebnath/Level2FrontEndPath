// rollup main.js --file bundle.js --format esm
import React from "react";
import ReactDOM from "react-dom/client";

import { HelloTest, HelloTest2 } from "./another";
import { Test, Test2 } from "./test";
// const App = () => {
//   return React.createElement(
//     "div",
//     { style: { border: "1px solid black" } },
//     "",
//     HelloTest(),
//     HelloTest2(),
//     Test(),
//     Test2()
//   );
// };

const App = ()=>{
  return (
    <div>
      <HelloTest />
      <HelloTest2 />
      <Test />
      <Test2 />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
