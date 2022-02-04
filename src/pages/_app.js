import { IconContext } from "react-icons";
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <Component {...pageProps} />
    </IconContext.Provider>
  )
}

export default MyApp
