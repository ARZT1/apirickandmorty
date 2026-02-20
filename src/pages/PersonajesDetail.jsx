import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PersonajesDetail = () => {
  const { id } = useParams();
  const [personajeUnique, setPersonajeUnique] = useState(null);

  useEffect(() => {
    const fetchPersonajeUnique = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        console.log("Response personaje unique:", response?.data);
        setPersonajeUnique(response?.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchPersonajeUnique();
  }, [id]);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen ">
        <div className=" rounded-lg bg-white shadow-lg p-5 flex flex-col justify-center items-center gap-2 px-10">
          <div className=" flex flex-col w-full justify-start items-start gap-5">
            <Link
              to="/personajes"
              className="w-full flex items-center justify-center gap-2 bg-[#88e23b] hover:bg-[#ebe480] hover:scale-105 text-white px-6 py-2 rounded-full cursor-pointer transition duration-300"
            >
              <FaArrowLeft className="text-sm" />
              <span>Volver</span>
            </Link>
          </div>
          <img src={personajeUnique?.image} alt={personajeUnique?.name} className="w-40 h-40 object-contain" />
          <p className=" font-black text-[#88e23b]">{personajeUnique?.name}</p>
          <p className=" font-black text-[#043c6e]">
            {personajeUnique?.gender} - {personajeUnique?.status}
          </p>
          <span className="text-[#043c6e] font-black">{personajeUnique?.species}</span>
          <p className=" font-black text-blue-300">{personajeUnique?.origin?.name}</p>
        </div>
      </div>
    </>
  );
};

export default PersonajesDetail;
