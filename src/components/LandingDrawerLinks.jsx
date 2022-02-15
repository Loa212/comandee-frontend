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
        <Link href={`/examples/gcr`} passHref>
          <a className="btn-ghost bg-gray-200 font-bold rounded-xl max-w-[200px] lg:max-w-max ">
            GCR example
            <MdOpenInNew className="ml-2 text-lg"/>
          </a>
        </Link>
      </li>
    </>
  );
};

export default LandingDrawerLinks;
