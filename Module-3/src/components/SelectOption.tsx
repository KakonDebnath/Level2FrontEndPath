import { createContext, useContext, useState } from "react";

const selectContext = createContext(null);

const Select = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <selectContext.Provider value={{ selectedOption, setSelectedOption }}>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {children}
      </select>
    </selectContext.Provider>
  );
};

const SelectOption = ({ value, children }) => {
  const { selectedOption, setSelectedOption } = useSelectContext;
  const isActive = selectedOption === value;
  return (
    <option className={`${isActive ? "bg-red-500" : "bg-white"}`} value={value}>
      {children}
    </option>
  );
};

Select.SelectOption = SelectOption;

export default Select;

const useSelectContext = () => {
  const context = useContext(selectContext);
  if (!context) {
    throw new Error("Context out of bounds");
  }
  return context;
};
