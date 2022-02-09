import { useState } from "react";
import MenuContext from "./MenuContext";

const MenuDefault = {
  Loaded: false,
  data: [
    { title: "Primo link", to: "/" },
    { title: "Secondo link", to: "/" },
  ],
};

const MenuContextWrapper = ({ children }) => {
  const [MenuState, setMenuState] = useState(MenuDefault);

  return (
    <MenuContext.Provider value={{ MenuState, setMenuState }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextWrapper;
