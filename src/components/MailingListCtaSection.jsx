import Image from "next/image";
import Illustration from "../../public/assets/Email_Illustration.png";

const MailingListCtaSection = () => {
  return (
    <div className="my-6 mx-auto w-full max-w-5xl py-0 ">
      <div className="mx-4 grid items-center rounded-2xl bg-[#8C30F5] px-4 py-10 text-center text-white shadow-lg  lg:mx-16 lg:grid-cols-5 lg:px-32 lg:text-justify">
        <div className="lg:col-span-2">
          <Image src={Illustration} alt="mailing-list-illustration" />
        </div>

        <div className="space-y-6 lg:col-span-3">
          <h1 className="text-2xl font-medium tracking-wide lg:text-left lg:text-4xl">
            Iscriviti alla Newsletter e resta aggiornato su tutte novità di
            Comandee
          </h1>
          <div className="form-control">
            <div className="lg:input-group space-y-6 lg:space-y-0">
              <input
                type="text"
                placeholder="la tua e-mail di lavoro"
                className="input input-bordered w-full px-4 lg:w-auto lg:px-4"
              />
              <button className="btn w-full px-4 text-xs tracking-wider lg:w-auto lg:px-4">
                Iscriviti
              </button>
            </div>
            <p className="mt-2 px-8 text-center text-sm text-gray-300 opacity-60 md:text-left lg:px-2 lg:pr-10">
              Cliccando il tasto &quot;iscriviti&quot; accetti i termini e le
              condizioni di contatto
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailingListCtaSection;
