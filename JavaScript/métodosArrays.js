const arreglo = [26,"pepito",true];
const miObjeto = {
    clave: "valor",
    nombre: "Fede ",
    edad: 29
}
console.log(arreglo[0]);

console.log("edad", miObjeto.edad); // Mostramos por consola la palabra "edad" y al lado el VALOR del objeto "miObjeto" 

//Métodos de arreglos
//length -> longitud del arreglo
const longitud = arreglo.length;
console.log(longitud)

//push(valor) -> Agrega un elemento al final
// equivalente al append en python / Funciona SOLO EN ARREGLOS
console.log('Primer cadena', arreglo)
arreglo.push('Nicolas')
console.log('Cadena c/push', arreglo)

//pop() elimina el último elemnto de un arreglo
//si queremos lo podemos guardar en una variable
const ultimo = arreglo.pop();
console.log("ultimo", ultimo);

// forEACH
// SOLO RECORRE, no guarda los valores en ningun lado
// Parámetros que recibe forEach:
// 1ro -> (nombre del elemento)
// 2do -> (posicion de elemento, desde 0)
// 3ro -> (muestra array completo)
arreglo.forEach ( (item, index, arregloEntero) => {
    console.log( //Imprimir
    'index', 
    index,
    'elmento', 
    item, 
    'mi arreglo entero', 
    arregloEntero)
})

//map() recorre el arreglo, lo modifica con una función
// y nos devuelve uno nuevo
const nuevoArreglo =arreglo.map((item, index) => {
    const num = 2;
    return (item += num)
});
console.log("Nuevo arreglo", nuevoArreglo);

//filter() Crea un nuevo array a partir de los elementos que cumplan la condicion
const miArregloNum = [2, 4, 5, 6]
const pares = miArregloNum.filter((items) => items % 2 === 0);

console.log(pares);