import { IconContext } from "react-icons";
import "../../styles/globals.css";
import MenuContextWrapper from "../state/MenuContextWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <MenuContextWrapper>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <Component {...pageProps} />
      </IconContext.Provider>
    </MenuContextWrapper>
  );
}

export default MyApp;
