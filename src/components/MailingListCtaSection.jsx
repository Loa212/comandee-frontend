import Image from "next/image";
import Illustration from "../../public/assets/Email_Illustration.png";

const MailingListCtaSection = () => {
  return (
    <div className="my-6 py-0 w-full max-w-5xl mx-auto ">
      <div className="mx-4 lg:mx-16 px-4 text-center lg:text-justify lg:px-32 py-10 rounded-2xl shadow-lg text-white  bg-[#8C30F5] grid lg:grid-cols-5 items-center">
        <div className="lg:col-span-2">
          <Image src={Illustration} alt="mailing-list-illustration" />
        </div>

        <div className="lg:col-span-3 space-y-6">
          <h1 className="lg:text-left tracking-wide text-2xl lg:text-4xl font-medium">Iscriviti alla Newsletter e resta aggiornato su tutte novità di Comandee</h1>
          <div className="form-control">
            <div className="space-y-6 lg:space-y-0 lg:input-group">
              <input
                type="text"
                placeholder="la tua e-mail di lavoro"
                className="input input-bordered"
              />
              <button className="btn tracking-wider text-xs">
                Tienimi aggiornato!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailingListCtaSection;
