import { useRouter } from "next/router";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import FeaturesSection from "../components/FeaturesSection";
import LandingDrawerLinks from "../components/LandingDrawerLinks";
import LandingFooter from "../components/LandingFooter";
import MailingListCtaSection from "../components/MailingListCtaSection";
import PreNavFeatures from "../components/PreNavFeatures";
import Section2 from "../components/Section2";

const MenusLayout = ({ children }) => {
  const router = useRouter();

  const handleClick = (slug) => {
    const path = router.asPath.split("#")[0];
    router.push(`${path}/#${slug}`);
    //close drawer
    setChecked(false);
  };

  const [Checked, setChecked] = useState(false);

  const handleDrawerChange = () => {
    console.log("menuclick");
    if (Checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  return (
    <>
      <div className="drawer drawer-end border-b-2 border-gray-700 border-opacity-10">
        <input
          id="drawer"
          type="checkbox"
          className="drawer-toggle"
          onChange={() => handleDrawerChange()}
          checked={!!Checked}
        />
        <div className="flex flex-col drawer-content h-full relative">
          <PreNavFeatures />
          <div className="lg:max-w-5xl lg:mx-auto w-full navbar border-b-2 lg:border-0 border-gray-700 border-opacity-10">
            <div className="flex-1 px-2 mx-2">
              <h1 className="text-[#5F54E2] font-bold text-2xl tracking-wider">
                Comandee
              </h1>
            </div>

            <div className="lg:hidden">
              <label
                htmlFor="drawer"
                className="mt-4 mr-2 mb-2 text-4xl btn-ghost drawer-button lg:hidden"
              >
                <MdMenu />
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu horizontal uppercase space-x-6">
                <LandingDrawerLinks />
              </ul>
            </div>
          </div>

          <div className="lg:max-w-5xl lg:mx-auto">{children}</div>

          <Section2 />

          <FeaturesSection/>

          <MailingListCtaSection/>

          <LandingFooter />
        </div>

        <div className="drawer-side">
          <label htmlFor="drawer" className="drawer-overlay" />
          <ul className="p-4 overflow-y-auto menu w-80 bg-base-100 space-y-4 text-xl">
            <div className="w-full flex justify-end">
              <button onClick={() => setChecked(false)}>
                <div className="flex items-center">
                  chiudi <MdClose className="text-lg ml-1" />
                </div>
              </button>
            </div>

            <LandingDrawerLinks />
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenusLayout;
