import Image from "next/image";
import whassup from "../../public/assets/whassup.png";

const Section2 = () => {
  return (
    <div className="fifty my-12 w-full py-9 text-slate-700">
      <div className="mx-auto max-w-5xl">
        <div className="mx-4">
          <div className="grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="mb-12">
                <h4 className="text-2xl font-light">
                  Come funziona{" "}
                  <span className="text-[#5F54E2] ">Comandee</span>
                </h4>
                <h3 className="text-4xl font-extrabold opacity-80">
                  in 3 semplici passi
                </h3>
              </div>

              <div className="max-w-[75%] lg:max-w-max">
                <Image src={whassup} alt="phone on counter" />
              </div>
            </div>
            <div className="lg:col-span-3  ">
              <div className="flex h-full flex-col">
                <div className="grow bg-[#5F54E2] px-20 py-12 text-white">
                  <div className="flex items-center justify-around">
                    <div className="hidden h-[96px] w-[96px] rounded-full bg-white lg:block"></div>
                    <div className="lg:max-w-[70%]">
                      <h4>STEP 1</h4>
                      <p>
                        Download and install the app from play store or app
                        store. The app will guide you through the configuration
                        process. Live support is available to help you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grow bg-[#e6d7f7] px-20 py-12">
                  <div className="flex items-center justify-around text-gray-700">
                    <div className="hidden h-[96px] w-[96px] rounded-full bg-white lg:block"></div>
                    <div className="lg:max-w-[70%]">
                      <h4>STEP 2</h4>
                      <p className="opacity-60">
                        Connect the device anywhere your home and turn it on.
                        Then follow the guide given by the app to configure.
                        Make sure your home WiFi is working well.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grow bg-[#F1E4FF] px-20 py-12">
                  <div className="flex items-center   justify-around text-gray-700">
                    <div className="hidden h-[96px] w-[96px] rounded-full bg-white lg:block"></div>
                    <div className="lg:max-w-[70%]">
                      <h4>STEP 3</h4>
                      <p className="opacity-60">
                        After the configuration process is completed as per the
                        app guide, you will be able to control your home
                        applicance from anywhere remotely.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
