import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import asporto from "../../public/assets/asporto.jpg";
import servizio_al_tavolo from "../../public/assets/servizio_al_tavolo.png";

const FeaturesSection = () => {
  return (
    <div className="mb-8 mt-0 w-full text-slate-700 lg:mb-24 lg:mt-12">
      <div className="mx-auto max-w-5xl space-y-12 lg:space-y-24">
        <div className="grid items-center gap-y-6 gap-x-16 px-4 lg:grid-cols-2 lg:gap-y-0 lg:px-0">
          <div className="space-y-4">
            <h3 className="text-4xl font-medium tracking-wider">
              Per offrire un servizio al tavolo più completo
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </p>
            <button className="btn btn-lg btn-secondary btn-link pl-0 normal-case">
              Scopri di più
              <MdArrowForward className="ml-1 mt-1 text-xl" />
            </button>
          </div>
          <Image
            className=" rounded-xl"
            src={servizio_al_tavolo}
            alt="servizio al tavolo"
          />
        </div>

        <div className="grid items-center gap-y-6 gap-x-16 px-4 lg:grid-cols-2 lg:gap-y-0 lg:px-0">
          <div className="hidden lg:block">
            <Image
              className="rounded-xl"
              src={asporto}
              alt="servizio da asporto"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-4xl font-medium tracking-wider">
              Per chi preferisce il servizio d’asporto
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </p>
            <button className="btn btn-lg btn-secondary btn-link pl-0 normal-case">
              Scopri di più
              <MdArrowForward className="ml-1 mt-1 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
