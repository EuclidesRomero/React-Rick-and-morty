import Badge from "./Badge";
import usePersonaje from "../hooks/UsePersonaje";
import { Link } from "react-router-dom";

const Personaje = () => {
  // eslint-disable-next-line no-unused-vars

  const { personajes, Episodios } = usePersonaje();
  const capturarId = (id) => {
    Episodios(id);
  };

  return (
    <div className=" w-full flex flex-wrap gap-x-10 justify-center dark:bg-neutral-900">
      {personajes.map((personaje) => (
        <div
          key={personaje.id}
          className="bg-slate-400 w-[350px] h-96 mb-10 mt-10 rounded-lg"
        >
          <p className="text-white dark:text-black text-center text-pretty pt-5 text-2xl">
            {personaje.name}
          </p>
          <div className=" w-full flex justify-center items-center">
            <img
              className="size-52 object-cover bg-center py-4 rounded-full"
              src={personaje.image}
              alt={personaje.name}
            />
          </div>
          <h3 className="text-xl text-center font-bold">
            Información del personaje
          </h3>
          <div className="h-32 w-auto flex flex-row justify-between items-center">
            <Badge>
              <p> Genero: {personaje.gender}</p>
            </Badge>
            <Badge>
              <p> Especie: {personaje.species}</p>
            </Badge>
            <div>
            <Link to={"/Episodios"}>
              <button
                className="border rounded-lg bg-white/100 font-bold mr-2 h-[20PX] text-xs"
                onClick={() => capturarId(personaje.id)} 
                >
                Episodios 
              </button>
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personaje;
