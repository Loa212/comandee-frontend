import Image from 'next/image'
import whassup from '../../public/assets/whassup.png'

const Section2 = () => {
  return (
    <div className="my-12 py-9 w-full fifty text-slate-700">
        <div className="max-w-5xl mx-auto">
            <div className="mx-4" >

                <div className="grid lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-2">
                        <div className='mb-12'>
                            <h4 className="font-light text-2xl">Come funziona <span className="text-[#5F54E2] ">Comandee</span></h4>
                            <h3 className="font-black text-4xl opacity-80">in 3 semplici passi</h3>
                        </div>

                        <div className='max-w-[75%] lg:max-w-max'>
                            <Image src={whassup} alt='phone on counter'/>
                        </div>
                        


                    </div>
                    <div className="lg:col-span-3  ">
                        <div className='flex flex-col h-full'>
                            <div className="grow px-20 py-12 bg-[#5F54E2] text-white">
                                <div className="flex justify-around items-center">
                                    <div className='hidden lg:block h-[96px] w-[96px] rounded-full bg-white'></div>
                                    <div className='lg:max-w-[70%]'>
                                        <h4>STEP 1</h4>
                                        <p>
                                            Download and install the app from play store or app store. The app will guide you through the configuration process. Live support is available to help you.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grow px-20 py-12 bg-[#F1E4FF]">
                                <div className="flex justify-around items-center text-gray-700">
                                    <div className='hidden lg:block h-[96px] w-[96px] rounded-full bg-white'></div>
                                    <div className='lg:max-w-[70%]'>
                                        <h4>STEP 2</h4>
                                        <p className='opacity-60'>
                                        Connect the device anywhere your home and turn it on. Then follow the guide given by the app to configure. Make sure your home WiFi is working well.                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grow px-20 py-12 bg-[#F1E4FF]">
                                <div className="flex justify-around   items-center text-gray-700">
                                    <div className='hidden lg:block h-[96px] w-[96px] rounded-full bg-white'></div>
                                    <div className='lg:max-w-[70%]'>
                                        <h4>STEP 3</h4>
                                        <p className='opacity-60'>
                                        After the configuration process is completed as per the app guide, you will be able to control your home applicance from anywhere remotely.                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    </div>

    )
}

export default Section2