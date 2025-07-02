/*
Practicar useState y el evento onClick.

Requerimiento:
- Mostrar un número en pantalla.
- Tener dos botones: “Sumar” y “Restar”.
- Al hacer clic, el número cambia.
 */

import  {useEffect, useState} from "react";

function Boton() {

    const [contador, setContador] = useState(0) //Nuestro contador empieza en 0

    //Creamos las funciones flechas
    const sumaContador = () => setContador(contador +1);
    const restaContador = () => setContador(contador -1)

    return(
        <>
        <h3>Contador: {contador}</h3>
        <button onClick ={sumaContador} >Suma</button>
        <button onClick ={restaContador} >Resta</button>
        </>
    )
}
export default Boton