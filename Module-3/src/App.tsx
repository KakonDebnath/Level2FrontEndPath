import { useContext, useState } from "react";
import UseStateEx from "./pages/UseStateEx";
import FormEx from "./pages/FormEx";
import FormExObj from "./pages/FromExObj";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import { MenuItems, MenuList } from "./components/Menu";
import UserContainer from "./components/UserContainer";
import Select from "./components/SelectOption";

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
      <UserContainer />

      <Select>
        <Select.SelectOption value={"option1"}>Option1</Select.SelectOption>
        <Select.SelectOption value={"option2"}>Option2</Select.SelectOption>
        <Select.SelectOption value={"option3"}>Option3</Select.SelectOption>
        <Select.SelectOption value={"option4"}>Option4</Select.SelectOption>
      </Select>
    </div>
  );
}

export default App;
