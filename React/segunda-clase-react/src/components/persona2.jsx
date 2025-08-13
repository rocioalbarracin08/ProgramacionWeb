import { useContext } from "react";
import { NombreContext } from "../main";

export function Persona2({ nombre }) {
  const nombreContexto = useContext(NombreContext);//Dentro de useContext el nombre de como declare el nombre del contexto, sin embargo a la variable se le puede poner cualquier nombre, el valor va ser el mismpo que el contexto 
  return (
    <>
      <h2>Este es el componente 2</h2>
      <div>Hola {nombreContexto}</div>
    </>
  );
}
