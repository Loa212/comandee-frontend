import { useRouter } from "next/router";
import { useContext, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { MdArrowForward, MdClose, MdExpandMore, MdMenu } from "react-icons/md";
import MenuContext from "../state/MenuContext";

const MenusLayout = ({ children }) => {
  const { MenuState } = useContext(MenuContext);
  const router = useRouter();


  const handleClick = (slug) => {
    const path = router.asPath.split("#")[0];
    router.push(`${path}/#${slug}`);
    //close drawer
    setChecked(false);
  };

  const clickedOutsideDrawer = ()=>{    
    console.log('shesh')
    setChecked(false);
  }
  const [Checked, setChecked] = useState(false);

  return (
    <div className="shadow drawer drawer-end drawer-mobile h-full">
      <input
        onChange={() => setChecked(true)}
        checked={Checked}
        id="drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="flex flex-col items-center justify-start drawer-content" >
        <div className="w-full flex justify-between sticky bg-white z-50 border-b-2 border-gray-700 border-opacity-5 top-0">

          <button className="ml-2 btn btn-sm btn-ghost bg-gray-200 border-0 mt-5">
          <ReactCountryFlag className="text-2xl mr-4" countryCode="IT" svg/>
            italiano
            <MdExpandMore className="ml-2"/>
          </button>

          <label
            htmlFor="drawer"
            className="mt-4 mr-2 mb-2 text-4xl btn-ghost drawer-button lg:hidden"
          >
            <MdMenu />
          </label>
        </div>
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay"  onClick={clickedOutsideDrawer}  />
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content" >
          <li>
          <div className="w-full flex justify-end">
            <button onClick={() => setChecked(false)}>
              <div className="flex items-center">
                chiudi <MdClose className="text-lg ml-1" />
              </div>
            </button>
          </div>
          </li>
          <h3 className="text-sm pt-8 pl-4 pb-4">Cosa stai cercando?</h3>
          {MenuState.data.map((el) => {
            return (
              <li key={el.title}>
                <button className="btn-ghost" onClick={() => handleClick(el.to)}>
                  <div className="flex items-center space-x-2">
                  <p className="text-rose-700 font-medium tracking-wide">
                    {el.title.split(" ")[0]}
                  </p>
                  <MdArrowForward className="text-xl text-rose-700"/>
                  </div>
                  </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenusLayout;
