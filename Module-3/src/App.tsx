import { useContext, useState } from "react";
import UseStateEx from "./pages/UseStateEx";
import FormEx from "./pages/FormEx";
import FormExObj from "./pages/FromExObj";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItems, MenuList } from "./components/Menu";

function App() {
  const [counter, setCounter] = useState(0);
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  console.log(dark);
  return (
    <div className={`${dark ? "bg-black" : "bg-white"}`}>
      <h1 className="text-center text-3xl">React App</h1>
      <button onClick={() => setDark(!dark)} className="btn btn-red">
        Toggle
      </button>
      <UseStateEx counter={counter} setCounter={setCounter} />
      <FormEx />
      <FormExObj />
      <MenuList>
        <MenuItems></MenuItems>
      </MenuList>
    </div>
  );
}

export default App;
