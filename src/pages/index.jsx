import Head from "next/head";
import AllProducts from "../components/AllProducts";
import Link from "next/link";
import QRCode from "qrcode.react";
import LandingLayout from '../shared/LandingLayout'
import Image from "next/image";
import mokup from '../../public/assets/mokup_v1.png'

export default function Home() {
  return (
    <div className="hoverflow-behavior-contain">
      <Head>
        <title>Comandee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingLayout>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mx-4 lg:mt-16">
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-center lg:text-left pt-4 text-gray-600 font-bold text-4xl lg:text-7xl">
              Tutti gli ordini al tavolo con un click
            </h1>
            <p className="max-w-sm mx-8 text-center lg:mx-0 lg:text-left text-lg text-gray-600">
              Rivoluziona il metodo di ricezione degli ordini eliminando la necessità di portare i menu direttamente al cliente o aspettare la sua scelta.
            </p>

            <div className="w-full flex justify-center lg:justify-start">
              <button className=" btn-secondary bg-[#5F54E2] hover:bg-[#3b31ac] font-bold rounded-xl px-6 py-3">
                <Link href={`/examples/gcr`} passHref>
                  <a>
                    Scopri come
                  </a>
                </Link>
              </button>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 ">
            <Image className="" src={mokup}  alt={'comandee mokup'}/>
          </div>
        </div>

       

      
       
      </LandingLayout>
    </div>
  );
}
