import { NavLink, Outlet } from "react-router-dom";

const Layaout = () => {
  return (
    <>
      <div className="min-h-screen bg-white font-sans font-semibold">
        <nav className=" fixed top-0 w-full bg-[#043c6e] text-white">
          <div className="flex justify-between items-center px-5 py-3">
            <h1 className=" text-[#a6cccc]"> Rick and Morty </h1>
            <div className="flex justify-center items-center gap-3">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-green-400 font-extrabold underline" : "text-white")}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/personajes"
                className={({ isActive }) => (isActive ? "text-green-400 font-extrabold underline" : "text-white")}
              >
                Personajes
              </NavLink>
            </div>
          </div>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Layaout;
