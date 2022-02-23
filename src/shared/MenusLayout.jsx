import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { MdArrowForward, MdClose, MdMenu, MdSearch } from "react-icons/md";
import CategoryLink from "../components/CategoryLink.tsx";
import Drawer from "../components/Drawer";
import LanguagePicker from "../components/LanguagePicker.tsx";
import MenuContext from "../state/MenuContext";

const MenusLayout = ({ children }) => {
  const { MenuState } = useContext(MenuContext);
  const router = useRouter();

  const [SelectedLanguage, setSelectedLanguage] = useState(0);
  const [DrawerOpen, setDrawerOpen] = useState(false);

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
    setDrawerOpen(false);
  };

  return (
    <div
      className={`border-b-2 border-gray-700 border-opacity-10 lg:mx-auto lg:max-w-sm lg:ring-2 lg:ring-gray-800 ${
        DrawerOpen ? "fixed " : ""
      } `}
    >
      <Drawer DrawerOpen={DrawerOpen} setDrawerOpen={setDrawerOpen}>
        <ul className="bg-base-100 w-[85vw] space-y-6 py-4 px-6 text-xl">
          <div className="mb-10 flex w-full justify-end">
            <button onClick={() => setDrawerOpen(false)}>
              <div className="flex items-center">
                chiudi <MdClose className="ml-1 text-lg" />
              </div>
            </button>
          </div>

          <h3 className="pt-8 pl-4 pb-4 text-sm">Cosa stai cercando?</h3>

          <CategoryLink
            MenuCategories={MenuState.data}
            handleClick={handleClick}
          />
        </ul>
      </Drawer>
      <div className="fixed z-10 flex w-full border-b-2 border-gray-700 border-opacity-10 bg-white shadow-md  lg:mx-auto lg:max-w-sm  lg:border-0">
        <div className="mx-2 flex-1 px-2">
          <LanguagePicker
            Langs={Languages}
            SelectedLanguage={SelectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
          />
        </div>

        <div className="">
          <button
            className=" px-4 pt-4 pb-2 text-4xl "
            onClick={() => setDrawerOpen(true)}
          >
            <MdSearch />
          </button>
        </div>
      </div>

      <div className="w-screen py-20 lg:mx-auto lg:max-w-sm">{children}</div>
    </div>
  );
};

export default MenusLayout;
