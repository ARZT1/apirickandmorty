import axios from "axios";
import { useEffect, useRef, useState } from "react";
import PersonajesCard from "../components/PersonajesCard";

const PersonajesRM = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        console.log(response.data);
        setPersonajes(response.data.results);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPersonajes();
  }, []);

  useEffect(() => {
    console.log(search);
  }, [search]);

  const filteredPersonajes = personajes?.filter((epi) => epi.name.toLowerCase().includes(search.toLowerCase()));

  const visiblePersonajes = filteredPersonajes.slice(0, page * itemsPerPage);
  const visorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (visiblePersonajes.length < filteredPersonajes.length) {
            setPage((prevPage) => prevPage + 1);
          }
        }
      },
      { threshold: 1.0 },
    );
    if (visorRef.current) observer.observe(visorRef.current);

    return () => observer.disconnect();
  }, [visiblePersonajes.length, filteredPersonajes.length]);

  return (
    <>
      <div className=" mt-15 px-10 max-w-5xl flex justify-center items-center mx-auto ">
        <input
          // value={search}
          type="text"
          placeholder="Buscar Personajes..."
          className="w-full rounded-lg border-2 border-gray-400 px-6 py-3 text-gray-700"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-5 px-10 max-w-5xl mx-auto">
        {loading ? (
          <div className="flex text-center justify-center items-center text-5xl text-blue-500 col-span-2 md:col-span-4 animate-bounce">
            <div>Cargando Personajes...</div>
          </div>
        ) : (
          visiblePersonajes?.map((epi) => {
            return <PersonajesCard epi={epi} key={epi.id} />;
          })
        )}
        <div ref={visorRef} className="h-10 col-span-2 md:col-span-4"></div>
      </div>
    </>
  );
};
export default PersonajesRM;
