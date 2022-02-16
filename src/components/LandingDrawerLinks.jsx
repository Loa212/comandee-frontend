import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

const LandingDrawerLinks = () => {
  return (
    <>
      <li>
        <a>Come funziona</a>
      </li>

      <li>
        <a>Blog</a>
      </li>

      <li>
        <a>Prezzi</a>
      </li>

      <li>
      <button className="btn-secondary bg-[#5F54E2] hover:bg-[#3b31ac] font-bold rounded-xl px-6 py-3 max-w-[200px] lg:max-w-max ">
        <Link href={`/examples/gcr`} passHref>
          <a className="flex items-center text-white">
            GCR example
            <MdOpenInNew className="ml-2 text-lg"/>
          </a>
        </Link>
      </button>
      </li>
    </>
  );
};

export default LandingDrawerLinks;
