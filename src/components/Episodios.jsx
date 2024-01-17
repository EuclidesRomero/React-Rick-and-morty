import usePersonaje from "../hooks/UsePersonaje"
import { useEffect, useState } from "react";
import axios from "axios";


//TODO: Hacer destructuring a resultado, sacar los campos necesarios y mostrarlos
  const Episodios = () => {
    const [resultado, setResultado] = useState([]);
    const { episodios } = usePersonaje();
    
    useEffect(() => {
      console.log("Resultado actualizado:", resultado);
    }, [resultado]);

    useEffect(() => {
      const obtenerInfo = async () => {
        try {
          const episodiosPromise = episodios.map(async (episodioUrl) => {
            const respuesta = await axios.get(episodioUrl);
            return respuesta.data;
          });
          const episodiosData =  await Promise.all(episodiosPromise );
          if(episodiosData.length !==0) setResultado(episodiosData);
        } catch (error) { 
          console.error("Error al obtener datos de episodios:", error);
        }
      };
      obtenerInfo();  
    }, [episodios]);


  return (
    <div className="h-full">
      <h2>Desde episodios</h2>
    </div>
  )
}

export default Episodios
