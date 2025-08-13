import { Hijo2 } from "./hijo2";

export function Hijo1({nombre}){
    return(
        <>
        <h2>Hijo 1</h2>
        <p>{nombre}</p>
        <Hijo2 nombre={nombre}/>
        </>
    );
}