import { MdArrowForward } from "react-icons/md";

const FeaturesSection = () => {
  return (
    <div className="mb-8 lg:mb-24 mt-0 lg:mt-12 w-full text-slate-700">
      <div className="max-w-5xl mx-auto space-y-12 lg:space-y-24">
          
            <div className="px-4 lg:px-0 grid lg:grid-cols-2 gap-x-16">
                <div className="space-y-4">
                    <h3 className="font-medium text-4xl tracking-wider">Per offrire un servizio al tavolo più completo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                    <button className="btn btn-lg btn-secondary btn-link normal-case pl-0">
                        Scopri di più
                        <MdArrowForward className="text-xl ml-1 mt-1"/>
                    </button>
                </div>
                <div className="bg-[#5F54E2] rounded-xl"></div>
            </div>

            <div className="px-4 lg:px-0 grid lg:grid-cols-2 gap-x-16">
                <div className="bg-[#F1E4FF] rounded-xl"></div>
                <div className="space-y-4">
                    <h3 className="font-medium text-4xl tracking-wider">Per chi preferisce il servizio d’asporto</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.</p>
                    <button className="btn btn-lg btn-secondary btn-link normal-case pl-0">
                        Scopri di più
                        <MdArrowForward className="text-xl ml-1 mt-1"/>
                    </button>
                </div>
            </div>

      </div>
    </div>
  );
};

export default FeaturesSection;
