import { useEffect, useState } from "react";

export function RickMorty(){
    const [characters, setCharacter] = useState([]) 
    //En este caso "([])" porque traemos un array (una lista de letras)
    //valor inicial-> los [] (puedo poner lo que sea) -> Se guarda en la variable character -> Se actualiza con la funcion setCharacter()

    useEffect(()=>{
        //Ejecuta el código que se encuentra dentro, tantas veces como se actualicen sus dependencias
        //Si no hay dependencias se ejcuta solo antes del primer renderizado
    
        fetch("https://rickandmortyapi.com/api/character")
          .then((data) => data.json())
          .then((response) => setCharacter(response.results)); //La funcion toma el valor
    },[] // Si estan vacios los corchetes se ejecuta solo una vez
    )
    return (
    <> 
      {characters ? ( //?: Sí...
        characters.map( (item, index) => <p>{item.name}</p>)
      ):
      (<> Cargando...</>) }
      Hola mundo 
      <button>Hola soy un botón</button> 
    </> );
}