/*
Objetivo:
Practicar useEffect con [].
Requerimiento:
- Mostrar un mensaje en consola o en pantalla al montar el componente.
*/
import { useEffect } from "react";

// NO  PONER SOLO: useEffect(()=> { console.log("Componente montado")}, [/*Dependencia vacía*/])
//EJEMPLO CORRECTO
export function CompMontado(){
    useEffect(()=>{ console.log("Componente montado")}, [/*Dependencias*/])
    //previo al renderizado. Si hay un dato de adentro (de los "[]") actualizable
    return(
    <>componente montado</>
    )}
