//import { useState } from 'react'   -> Se va porque

import './App.css'
import Pepito from './components/usuario/Usuario';
import { Proveedor } from './components/proveedor/proveedor'; //Se pueden encapsular funciones (SI SON DE LA MISMA DIRECCIÓN)
import { useEffect, useState } from 'react'; //IMPORTANTE: Importarlo

function App() {
  //const [count, setCount] = useState(0) -> Vuela porque

  const [characters, setCharacter] = useState([]) //En este caso "()" y "[]" porque traemos un array
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
      ): (
        <> Cargando...</>
      )}
      Hola mundo 
      <button>Hola soy un botón</button> 
      <br />
      <Pepito />
      <br />
      <Proveedor name = {"Federico"} />
    </>
  ); //Tipo de organización recomendada: envolver en "()"
}

export default App
