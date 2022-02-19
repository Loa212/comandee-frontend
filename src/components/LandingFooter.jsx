const LandingFooter = () => {
  return (
    <footer className="body-font mt-16 cursor-pointer bg-[#322C7E] text-gray-300 lg:mt-24">
      <div className="container mx-auto max-w-5xl px-5 pt-16 pb-16 lg:pb-6">
        <div className="order-first flex flex-wrap text-center md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-xs font-medium tracking-widest text-white">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-xs font-medium tracking-widest text-white">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-xs font-medium tracking-widest text-white">
              CATEGORIES
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  First Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  Second Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  Third Link
                </a>
              </li>
              <li>
                <a className="cursor-pointer text-gray-300 hover:text-white">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-xs font-medium tracking-widest text-white">
              ISCRIVITI ALLA NEWSLETTER
            </h2>
            <div className="flex flex-wrap items-end justify-center md:flex-nowrap md:justify-start lg:flex-wrap xl:flex-nowrap">
              <div className="relative mr-2 w-40 sm:mr-4 sm:w-auto lg:mr-0 xl:mr-4">
                <label
                  htmlFor="footer-field"
                  className=" cursor-pointer text-sm text-gray-300"
                >
                  La tua e-mail
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  label="la tua mail"
                  className="w-full cursor-pointer cursor-pointer rounded border border-gray-300 bg-gray-100 py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-300 ease-in-out focus:border-purple-500 focus:bg-transparent focus:text-white focus:ring-2 focus:ring-purple-300"
                />
              </div>
              <button className="inline-flex flex-shrink-0 rounded border-0 bg-purple-500 py-2 px-6 text-white hover:bg-purple-600 focus:outline-none lg:mt-2 xl:mt-0">
                Iscriviti
              </button>
            </div>
            <p className="mt-2 text-center text-sm text-gray-300 opacity-60 md:text-left">
              Cliccando il tasto &quot;iscriviti&quot; accetti i termini e le
              condizioni di contatto
            </p>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className="border-t border-gray-300 border-opacity-10 bg-[#322C7E] ">
        <div className="container mx-auto flex max-w-7xl flex-col items-center px-5 py-6 sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-white md:justify-start">
            <span className="ml-3 text-xl">Comandee</span>
          </a>
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            © 2022 Comandee —
            <a
              href="https://instagram.com/loa212"
              rel="noopener noreferrer"
              className="ml-1 cursor-pointer text-gray-300"
              target="_blank"
            >
              @loa212
            </a>
          </p>
          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
