/*-----------------ASINCRONÏA-----------------
Pedir un dato a algo
*/
const button = document.getElementById("boton")
let contador = 0 //Su valor puede ser reasignado donde fue creada o en hijos -> No se puede decir "No es una constante"

// setTimeout()---------------------------
// Función que recibe por parámetro dos valores, recibe una función y recibe el tiempo que va a tardar en ejecutarse
button.addEventListener("click", () => {
    setTimeout ( function() {
    alert("Hola fuí clikeado 2 segundos")
    }, 2000 );

})
// Milisegundos

// setInterval()----------------------------
// Ejecutar el código cada n cantidad de tiempo
/*
setInterval(() => {
    contador++;
    console.log(contador);

}, 1000) -> En este caso n = 1000
*/

//-----------------------------Asincronia------------------------
//Petición a una api
//Métodos: get, post, put, delete

//Fetch-----------------------------
fetch("https://rickandmortyapi.com/api/character") //Le pide los datos al api
 .then((data) => data.json())
 .then((response)=>console.log("response", response.results)); //Verificamos que los datos sean recibidos bien con console.log - con "." accedemos a la propiedad de un objeto

 //Async await-----------------------
 const asyncfunction = async () => {
    //try catch: Intentar
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/2")
        const data = await response.json();
        console.log("data", data);
    }catch (error) {
        console.log("error", error);
    }
 };
 //función regular asincrona
 async function asyncFunc(){} //Otra forma de escribir lo de arriba                                                                                                 

 //-------EJECUTAR FUNCIONES-------
 //Para ejecutar una función debemos llamarla poniendo PARËNTESIS y ";" al final
 asyncfunction();


 /* ---------------Practicas con variables--------------------------------
 function suma(){
    var variableVar = 0;
    let variableLet = "Fede";
    console.log(varableVar, variableLet); 
 }
console.log(varableVar, variableLet);
  - El ejemplo va decir error (si ejecutamos por consola en la página). Esto pasaría por usar la variable "let" fuera de donde se creó
 -------------------------------------------------------------------------*/