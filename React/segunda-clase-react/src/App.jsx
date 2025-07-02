import './App.css'
import { useState } from "react"
import Boton from './components/Ejercicio1/controlBoton';
import Componente from './components/primerClase/componente'
import { Practica } from './components/Ejercicio1/capturarInput';
import { CompMontado } from './components/Ejercicio1/efectoAlMontar';

//<Componente/>
function App() {
  return (
    <>
      <CompMontado/>
      <Boton/>
      <Practica/>
    </>
  ) //Si existe el nombre lo mostras - SE PONE DE ESA FORMA POR SI NO SE ESPERA UNA REPUESTA
  
  //un if no necesita OBLIGATORIAMENTE una condicion para ejecutarse, evitamos el ternario
}
export default App
