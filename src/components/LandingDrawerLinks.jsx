import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

const LandingDrawerLinks = () => {
  return (
    <>
      <li className="group">
        <a className="rounded-xl group-hover:underline underline-offset-2">
          Funzionalità
        </a>

        <div
          className="invisible lg:group-hover:visible z-50 absolute  left-0  h-52 
        transition duration-150  ease-in-out delay-150
        opacity-0 group-hover:opacity-100 
        top-16 group-hover:translate-y-4
        w-full
        "
        >
          <div
            className=" 
            max-w-5xl mt-8 bg-white border border-slate-700 border-opacity-20
            shadow-lg rounded-xl  mx-auto px-6 py-8 w-full
            transition-transform duration-150  ease-in-out delay-150
            scale-0	 group-hover:scale-100	 
            
            "
          >
            {/* dropdown menu content */}
            <div className="grid grid-cols-4 gap-4">  
              <div className="col-span-1 font-medium flex flex-col space-y-4 text-slate-600">
                <h4 className="font-extrabold mb-2 opacity-80">Menu personalizzato</h4>
                <a className="btn-link cursor-pointer text-slate-600 normal-case">Crea il tuo account</a>
                <a className="btn-link cursor-pointer text-slate-600 normal-case">Come creare un menu</a>
                <a className="btn-link cursor-pointer text-slate-600 normal-case">Codice QR per i clienti</a>
              </div>
              <div className="col-span-1 font-medium flex flex-col space-y-4 text-slate-600">
                <h4 className="font-extrabold mb-2 opacity-80">Ordini al tavolo</h4>
                <a className="btn-link cursor-pointer text-slate-600 normal-case">Rivevere gli ordini</a>
                <a className="btn-link cursor-pointer text-slate-600 normal-case">Analisi vendite</a>
                <a className="btn-link cursor-pointer text-slate-600 normal-case">Gestione tavoli</a>
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
        <button className="btn-secondary bg-[#5F54E2] hover:bg-[#3b31ac] font-bold rounded-xl px-6 py-3 max-w-[200px] lg:max-w-max ">
          <Link href={`/examples/gcr`} passHref>
            <a className="flex items-center text-white">
              GCR example
              <MdOpenInNew className="ml-2 text-lg" />
            </a>
          </Link>
        </button>
      </li>
    </>
  );
};

export default LandingDrawerLinks;
