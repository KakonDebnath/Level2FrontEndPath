console.log("react", React);
console.log("react-dom", ReactDOM);

const App = React.createElement(
  "h1",
  { style: { color: "red" } },
  "Hello React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App);
