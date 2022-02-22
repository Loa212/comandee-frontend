export default function Drawer({ children, DrawerOpen, setDrawerOpen }) {
  return (
    <main
      className={
        " fixed inset-0 z-50 transform overflow-hidden bg-gray-900 bg-opacity-25 ease-in-out " +
        (DrawerOpen
          ? " translate-x-0 opacity-100 transition-opacity duration-500  "
          : " translate-x-full opacity-0 transition-all delay-500  ")
      }
    >
      <section
        className={
          " delay-400 absolute right-0 h-full w-[85vw] max-w-lg transform bg-white shadow-xl transition-all duration-500 ease-in-out  " +
          (DrawerOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative flex h-full w-screen max-w-lg flex-col space-y-6 overflow-y-scroll pb-10">
          {children}
        </article>
      </section>

      <section
        className=" h-full w-screen cursor-pointer "
        onClick={() => {
          setDrawerOpen(false);
        }}
      ></section>
    </main>
  );
}
