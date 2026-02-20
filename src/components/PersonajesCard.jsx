import { Link } from "react-router-dom";

const PersonajesCard = ({ epi }) => {
  return (
    <>
      <Link to={`/personajes/${epi.id}`}>
        <div className="h-70 rounded-xl bg-white shadow-lg p-5 flex flex-col justify-center items-center gap-2 px-10">
          <img src={epi.image} alt={epi.name} className="w-40 h-40 object-contain" />
          <h3 className="text-center text-sm  font-black text-[#043c6e]">{epi.name}</h3>
          <p className="text-sm text-gray-600 font-bold">{epi.species}</p>
        </div>
      </Link>
    </>
  );
};
export default PersonajesCard;
