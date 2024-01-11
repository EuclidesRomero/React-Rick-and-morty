import { useContext } from "react";
import PersonajeContext from "../context/PersonajeProvider";

const usePersonaje = () =>{
    return (
        useContext(PersonajeContext)
    )
}
export default usePersonaje