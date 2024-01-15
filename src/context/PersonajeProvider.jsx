/* eslint-disable react/prop-types */
import { createContext } from "react";
import axios from 'axios'
import { useEffect, useState } from "react";

const PersonajeContext = createContext();

const PersonajeProvider = ({children}) =>{

    const [personajes, setPersonajes] = useState([]);
    const [episodios, setEpisodios] = useState([]);

    
    useEffect(() => {
      const obtenerPersonajes = async () => {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        const { results } = data;
        setPersonajes(results);
      };
      obtenerPersonajes();
    }, []);
    
    const Episodios = (id) =>{
      const personajeSeleccionado = personajes.find(personajes => personajes.id === id);
      if(personajeSeleccionado) {
        // eslint-disable-next-line no-unused-vars
        const episodios = personajeSeleccionado.episode
          setEpisodios(episodios)
      }
    }
   
    return (
        <PersonajeContext.Provider value={{personajes, Episodios, episodios}}>
            {children}
        </PersonajeContext.Provider>
    )
}

export {
    PersonajeProvider
}

export default PersonajeContext