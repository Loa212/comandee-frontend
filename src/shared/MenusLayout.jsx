import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import CategoryLink from "../components/CategoryLink.tsx";
import LanguagePicker from "../components/LanguagePicker.tsx";
import MenuContext from "../state/MenuContext";

const MenusLayout = ({ children }) => {
  const { MenuState } = useContext(MenuContext);
  const router = useRouter();

  const [SelectedLanguage, setSelectedLanguage] = useState(0);

  const Languages = [
    {
      text: "Italiano",
      countryCode: "IT",
    },
    {
      text: "English",
      countryCode: "GB",
    },
    {
      text: "Française",
      countryCode: "FR",
    },
  ];

  const handleClick = (slug) => {
    const path = router.asPath.split("#")[0];
    router.push(`${path}/#${slug}`);
    //close drawer
    setChecked(false);
  };

  const [Checked, setChecked] = useState(false);

  const handleDrawerChange = () => {
    if (Checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <div className="drawer drawer-end drawer-mobile h-full shadow">
      <input
        onChange={() => handleDrawerChange()}
        checked={!!Checked}
        id="drawer"
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content flex flex-col items-center justify-start">
        <div className="sticky top-0 z-50 mb-6 flex min-h-[64px] w-full justify-between border-b-2 border-gray-700 border-opacity-5 bg-white shadow">
          <LanguagePicker
            Langs={Languages}
            SelectedLanguage={SelectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />

          <label
            htmlFor="drawer"
            className="btn-ghost drawer-button mt-4 mr-2 mb-2 text-4xl lg:hidden"
          >
            <MdMenu />
          </label>
        </div>
        {children}
      </div>

      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay drawer-button" />

        <ul className="menu bg-base-100 text-base-content w-80 overflow-y-auto">
          <li className="px-4 pt-4">
            <div className="flex w-full justify-end">
              <button onClick={() => setChecked(false)}>
                <div className="flex items-center">
                  chiudi <MdClose className="ml-1 text-lg" />
                </div>
              </button>
            </div>
          </li>

          <h3 className="pt-8 pl-4 pb-4 text-sm">Cosa stai cercando?</h3>
          <div className="divide-y divide-gray-700 divide-opacity-10 border-y border-gray-700 border-opacity-10">
            <CategoryLink
              MenuCategories={MenuState.data}
              handleClick={handleClick}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MenusLayout;
