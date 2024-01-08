const App = () => {
  return (
    <div>
      <h1>My Manual React App</h1>
      <p>Hello React</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
