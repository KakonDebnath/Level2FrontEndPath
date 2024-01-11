import { createContext, useContext } from "react";

const MenuContext = createContext(null);

export const MenuList = ({ children }) => {
  return (
    <MenuContext.Provider value={{ theme: "dark" }}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};
export const MenuItems = () => {
  const { theme } = useContext(MenuContext);
  console.log(theme);
  return <div>Menu Items</div>;
};
