import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState([1,2,3,4])
  const [persona, setPersona] = useState({nombre: "Pepito", valor: 30})//useState es asincrónico
  
  //Spread Operator
  function myFunction() {
    setNum([...num, num.length +1]); //num es el nombre del arreglo | Los "..." son el contenido anterior (de la lista) | El 5 es agregado a lo ultimo de la lista
  }
  function agregarPropiedad() {
    const prop = {...persona, edad:17}
    setPersona(prop) //Ponemos "{}" por ser un objeto
    console.log(prop) //De forma SINCRÓNICA
  }
  function cambiarNombre(){
    setPersona({...persona, nombre:"Luis"}); //Segunda forma sin usar variable a parte
    console.log(persona) //De forma asincrónica
  }

  //TAREA: Hacer que el setNum agregue números consecutivos
  //Agregar una propiedad(clave/valor) al objeto persona usando spread operator

  //Partiendo del nombre pepito edad 30 cambiar solo nombre a Luis usando Spread

  //CONCEPTUALMENTE: un arreglo no es lo mismo que un objeto. En este ejemplo el objeto no se mapea

  return (
    <>
      <div>
        {num.map((item)=> ( 
          <p>{item}</p>
        ))}

        <button onClick= {myFunction} >Agregar número</button>
        <button onClick= {agregarPropiedad} >Agregar persona</button>
        <button onClick= {cambiarNombre}>Cambiar nombre</button>

        <p>Nombre: {persona.nombre}</p>
      </div>
    </>
  )
}

export default App
