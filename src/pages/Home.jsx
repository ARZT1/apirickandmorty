import { Link } from "react-router-dom";
import rickMortyImg from "../assets/rickmorty.png";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="text-3xl md:text-6xl font-extrabold mb-8 mt-8  text-[#00ff9f] drop-shadow-[0_0_15px_#00ff9f]">
        Rick and Morty
      </h1>

      <img src={rickMortyImg} alt="Rick and Morty" className="w-[20%] max-w-md md:max-w-lg mb-2" />

      <h1 className="text-2xl md:text-6xl font-extrabold text-green-400 mb-2 tracking-wide">Explora el Multiverso</h1>
      <p className="max-w-2xl text-lg md:text-base text-gray-300 mb-10 leading-relaxed text-center">
        Viaja entre dimensiones infinitas, descubre personajes del universo de Rick & Morty y analiza sus estadísticas
        intergalácticas.
      </p>
      <Link
        to="/personajes"
        className="bg-[#043c6e] hover:bg-green-400 hover:scale-105 text-white px-6 py-4 rounded-full cursor-pointer transition duration-300"
      >
        🛸 Explorar Personajes
      </Link>
    </div>
  );
};

export default Home;
