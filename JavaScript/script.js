var variable = "contenido de la variable" /*Ya no se usa*/
let variable2 = "pueden ser reescritos sus valores"
variable2 = 9  //Reasignacion del valor

//const -> variable constante, no son reasignables sus valores
const variable3 = 10

/* Tipos de datos */
const text = "palabras" 
const numero = 10
const booleanos = true
//undefined -> valor no definido
//null -> vacio (si definido)

//Operadores: 
//Son todos los operadores de matem,atica + - 

//Comparación:
// == -> compara el valor de dato
// === -> compara el valor y el tipo de dato
// !=  -> Distinto el valor y !== -> Distinto el valor y tipo (El que vamos a usar)
// > < >= <= mayor, menor, menor igual o mayor igual 

const edad = 20;
if (edad > 10)
{
    console.log("Sos mayor de edad")
}
else {
    console.log("No sos mayor de edad")
}

//switch
const dia = 1
switch(dia)
{
    case 1: console.log('día lunes'); break
    case 2: console.log('dia martes'); break
    default: console.log("Día no registrado");
}

//Funciones
function saludar (nombre)
{
    return `Hola ${nombre}`;
}
console.log(saludar("Ro"));


/* ----- ARROW function ----- */
//return explicito
const saludarExpli = (nombre)=> {
    return `hola ${nombre}`;
};

//return implicito
const saludo = (nombre) =>`hola ${nombre}`; //return implicito
//Si el return implicito tiene más de una linea va estar envuelto en parentesis


/* ----- Arreglos o arrays ----- (no todas las listas son arrays) --------------*/
const miArreglo = [1,2,"pepito",true];
console.log(miArreglo[2])

const miObjeto = {
    clave: "valor",
    nombre: "Fede ",
    edad: 29
}
for (let i = 0; i < miArreglo.length; i++)
{
    console.log(miArreglo[i]) //
}

/*LOS OBJETOS TIENEN clave y valor*/ 