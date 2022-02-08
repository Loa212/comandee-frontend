import { MdClose, MdMenu } from "react-icons/md";

const MenusLayout = ({ children }) => {
  return (
    <div className="shadow bg-base-200 drawer drawer-end drawer-mobile h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center justify-start drawer-content">
        <label
          htmlFor="my-drawer-2"
          className="my-4 mr-2 text-4xl btn-ghost place-self-end drawer-button lg:hidden"
        >
          <MdMenu />
        </label>

        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <label
              htmlFor="my-drawer-2"
              className=" text-base btn-ghost place-self-end drawer-button lg:hidden"
            >
                <div className="flex items-center">

                chiudi <MdClose className="text-lg ml-1" /> 
                </div>
            </label>
          </li>
          <h3>Cosa stai cecando?</h3>
          <li>
            <a>Menu Item</a>
          </li>
          <li>
            <a>Menu Item</a>
          </li>
          <li>
            <a>Menu Item</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenusLayout;
