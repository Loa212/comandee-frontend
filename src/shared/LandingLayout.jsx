import { useRouter } from "next/router";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import Drawer from "../components/Drawer";
import LandingDrawerLinks from "../components/LandingDrawerLinks";

const MenusLayout = ({ children }) => {
  const router = useRouter();

  // const handleClick = (slug) => {
  //   const path = router.asPath.split("#")[0];
  //   router.push(`${path}/#${slug}`);
  //   //close drawer
  //   setChecked(false);
  // };

  const [DrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className={`border-b-2 border-gray-700 border-opacity-10 ${
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
          <LandingDrawerLinks />
        </ul>
      </Drawer>

      <div className="navbar w-full border-b-2 border-gray-700 border-opacity-10 lg:mx-auto lg:max-w-5xl lg:border-0">
        <div className="mx-2 flex-1 px-2">
          <h1 className="text-2xl font-bold tracking-wider text-[#5F54E2]">
            Comandee
          </h1>
        </div>

        <div className="lg:hidden">
          <button
            className="btn-ghost drawer-button mt-4 mr-2 mb-2 text-4xl lg:hidden"
            onClick={() => setDrawerOpen(true)}
          >
            <MdMenu />
          </button>
        </div>

        <div className="hidden flex-none lg:block">
          <ul className="flex items-center space-x-16 uppercase">
            <LandingDrawerLinks />
          </ul>
        </div>
      </div>

      {children}
    </div>
  );
};

export default MenusLayout;
