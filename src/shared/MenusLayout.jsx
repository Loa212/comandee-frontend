import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MdArrowForward, MdClose, MdMenu } from "react-icons/md";
import LanguagePicker from "../components/LanguagePicker.tsx";
import MenuContext from "../state/MenuContext";

const MenusLayout = ({ children }) => {
  const { MenuState } = useContext(MenuContext);
  const router = useRouter();

  const [SelectedLanguage, setSelectedLanguage] = useState(0)

  const Languages = [
    {
      text: 'Italiano',
      countryCode: 'IT'
    },
    {
      text: 'English',
      countryCode: 'GB'
    },
    {
      text: 'Française',
      countryCode: 'FR'
    },
  ]

  const handleClick = (slug) => {
    const path = router.asPath.split("#")[0];
    router.push(`${path}/#${slug}`);
    //close drawer
    setChecked(false);
  };

  const [Checked, setChecked] = useState(false);

  const handleDrawerChange = () =>{
    if(Checked) {setChecked(false)} else {setChecked(true)}
  }

  return (
    <div className="shadow drawer drawer-end drawer-mobile h-full">
      <input
        onChange={() => handleDrawerChange()}
        checked={!!Checked}
        id="drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="flex flex-col items-center justify-start drawer-content">
        <div className="w-full flex justify-between sticky min-h-[64px] bg-white z-50 border-b-2 border-gray-700 border-opacity-5 top-0">
         <LanguagePicker Langs={Languages} SelectedLanguage={SelectedLanguage} setSelectedLanguage={setSelectedLanguage} />

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
        <label
          htmlFor="drawer"
          className="drawer-overlay drawer-button"
        />

        <ul className="menu overflow-y-auto w-80 bg-base-100 text-base-content">
          <li className="pt-4 px-4">
            <div className="w-full flex justify-end">
              <button onClick={() => setChecked(false)}>
                <div className="flex items-center">
                  chiudi <MdClose className="text-lg ml-1" />
                </div>
              </button>
            </div>
          </li>
        
          <h3 className="text-sm pt-8 pl-4 pb-4">Cosa stai cercando?</h3>
          <div className="border-b">
            {MenuState.data.map((el) => {
              return (
                <li key={el.title} className="w-full border-t">
                  <button
                    className="btn-ghost"
                    onClick={() => handleClick(el.to)}
                  >
                    <div className="flex items-center space-x-2">
                      <p className="text-rose-700 font-medium tracking-wide min-w-[140px] text-justify">
                        {el.title.split(" ")[0]}
                      </p>
                      <MdArrowForward className="text-xl text-rose-700" />
                    </div>
                  </button>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MenusLayout;
