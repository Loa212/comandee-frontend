import Link from "next/link";

const LandingDrawerLinks = () => {
  return (
    <>
      <li>
        <Link href={`/examples/gcr`} passHref>
          <a className="btn-ghost bg-gray-200 font-bold rounded-xl max-w-[150px]">
            GCR example
          </a>
        </Link>
      </li>
      <li>
        <a>Item 2</a>
      </li>
    </>
  );
};

export default LandingDrawerLinks;
