import { useRouter } from "next/router";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import LandingDrawerLinks from "../components/LandingDrawerLinks";
import LandingFooter from "../components/LandingFooter";
import PreNavFeatures from "../components/PreNavFeatures";
import Link from "next/link";

const GenericLayout = ({ children }) => {
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
        <div className="drawer-content relative flex h-full flex-col">
          <PreNavFeatures />
          <div className="navbar w-full border-b-2 border-gray-700 border-opacity-10 lg:mx-auto lg:max-w-5xl lg:border-0">
            <div className="mx-2 flex-1 px-2">
              <Link href={`/`} passHref>
                <a>
                  <h1 className="text-2xl font-bold tracking-wider text-[#5F54E2]">
                    Comandee
                  </h1>
                </a>
              </Link>
            </div>

            <div className="lg:hidden">
              <label
                htmlFor="drawer"
                className="btn-ghost drawer-button mt-4 mr-2 mb-2 text-4xl lg:hidden"
              >
                <MdMenu />
              </label>
            </div>

            <div className="hidden flex-none lg:block">
              <ul className="menu horizontal space-x-6 uppercase">
                <LandingDrawerLinks />
              </ul>
            </div>
          </div>

          <div className="lg:mx-auto lg:max-w-5xl">{children}</div>

          <LandingFooter />
        </div>

        <div className="drawer-side">
          <label htmlFor="drawer" className="drawer-overlay" />
          <ul className="menu bg-base-100 w-80 space-y-4 overflow-y-auto p-4 text-xl">
            <div className="flex w-full justify-end">
              <button onClick={() => setChecked(false)}>
                <div className="flex items-center">
                  chiudi <MdClose className="ml-1 text-lg" />
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

export default GenericLayout;
