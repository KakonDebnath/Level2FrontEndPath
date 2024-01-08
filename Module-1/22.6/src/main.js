import React from "react";
import ReactDOM from "react-dom/client";

import { HelloTest, HelloTest2 } from "./another";
import { Test, Test2 } from "./test";
const App = () => {
  return React.createElement(
    "h1",
    {},
    "My Manual Bundler with rollUp",
    HelloTest(),
    HelloTest2(),
    Test(),
    Test2()
  );
};
// rollup main.js --file bundle.js --format esm

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));
