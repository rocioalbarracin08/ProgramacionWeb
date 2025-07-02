/*
Objetivo:
Practicar useState y el evento onChange.
Requerimiento:
- Mostrar un input de texto.
- Capturar lo que el usuario escribe.
- Mostrarlo debajo del input en tiempo real.
 */

import { useState } from "react"

export function Practica() {
    
    const [letra, setPalabra] = useState("")

    //Funcion flecha que se ejecuta al realizarse un evento
    const handleInputChange = (event) => {
        //console.log(event)
        setPalabra(event.target.value) //Le pasamos ese valor por parámetro a la función "setPalabra"
    }
    //"event" tiene un objeto muy extenso. 
    // Accedemos a la propiedad que enecesitamos de ese objeto, a travez del "."
    // por eso tenemos "(event.target.value)"

    //NO hace falta poner un boton
    //const handleClick = () => {return letra};
    //<button onChange = {handleClick} >Mostrar</button>

    return(
        <>
        <input type="text" 
        onChange = {handleInputChange}
        value = {letra}
        />
        {letra && <h2>{letra}</h2>}
        </>
    )
}
