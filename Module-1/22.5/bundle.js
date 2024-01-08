const HelloTest = () => {
  return React.createElement("h2", {}, "Hello h2");
};
const HelloTest2 = () => {
  return React.createElement("h2", {}, "Another Hello h2");
};

const Test = () => {
  return React.createElement("h3", {}, "Test File Test Component");
};

const App = () => {
  return React.createElement(
    "h1",
    {},
    "My Manual Bundler with rollUp",
    HelloTest(),
    HelloTest2(),
    Test()
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));
