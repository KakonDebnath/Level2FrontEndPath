import { useState } from "react";
import UseStateEx from "./pages/UseStateEx";
import FormEx from "./pages/FormEx";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-center text-3xl">React App</h1>
      <UseStateEx counter={counter} setCounter={setCounter} />
      <FormEx />
    </div>
  );
}

export default App;
