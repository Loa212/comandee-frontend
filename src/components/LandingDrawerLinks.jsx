import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

const LandingDrawerLinks = () => {
  return (
    <>
      <li className="group">
        <a className="rounded-xl underline-offset-2 group-hover:underline">
          Funzionalità
        </a>

        <div
          className="invisible absolute left-0 top-16  z-50  h-52 
        w-full opacity-0  transition delay-150
        duration-150 ease-in-out 
        group-hover:translate-y-4 group-hover:opacity-100
        lg:group-hover:visible
        "
        >
          <div
            className=" 
            mx-auto mt-8 w-full max-w-5xl scale-0 rounded-xl
            border border-slate-700  border-opacity-20 bg-white px-6 py-8
            shadow-lg transition-transform  delay-150 duration-150
            ease-in-out	 group-hover:scale-100	 
            
            "
          >
            {/* dropdown menu content */}
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 flex flex-col space-y-4 font-medium text-slate-600">
                <h4 className="mb-2 font-extrabold opacity-80">
                  Menu personalizzato
                </h4>
                <a className="btn-link cursor-pointer normal-case text-slate-600">
                  Crea il tuo account
                </a>
                <a className="btn-link cursor-pointer normal-case text-slate-600">
                  Come creare un menu
                </a>
                <a className="btn-link cursor-pointer normal-case text-slate-600">
                  Codice QR per i clienti
                </a>
              </div>
              <div className="col-span-1 flex flex-col space-y-4 font-medium text-slate-600">
                <h4 className="mb-2 font-extrabold opacity-80">
                  Ordini al tavolo
                </h4>
                <a className="btn-link cursor-pointer normal-case text-slate-600">
                  Rivevere gli ordini
                </a>
                <a className="btn-link cursor-pointer normal-case text-slate-600">
                  Analisi vendite
                </a>
                <a className="btn-link cursor-pointer normal-case text-slate-600">
                  Gestione tavoli
                </a>
              </div>

              <div className="col-span-2 bg-gray-200"></div>
            </div>
          </div>
        </div>
      </li>

      <li>
        <Link href={`/Blog`} passHref>
          <a className="rounded-xl">Blog</a>
        </Link>
      </li>

      <li>
        <a className="rounded-xl">Team</a>
      </li>

      <li>
        <button className="btn-secondary  rounded-xl bg-[#5F54E2] px-6 py-3 font-bold hover:bg-[#3b31ac] lg:max-w-max ">
          <Link href={`/examples/gcr`} passHref>
            <a className="flex items-center text-white">
              Esempi menu
              <MdOpenInNew className="ml-2 text-lg" />
            </a>
          </Link>
        </button>
      </li>
    </>
  );
};

export default LandingDrawerLinks;
