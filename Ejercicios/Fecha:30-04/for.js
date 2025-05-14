
/*
Usar un for para recorrer los números del 1 al 10.
- Sumar solamente los números pares (2, 4, 6, 8, 10).
- Mostrar la suma final.
*/

let resultado = 0 /*Usamos let para definir la variable que va ir cambiando su valor conforme a lo que se va ir sumando*/
for (let n = 0; n <= 10; n++)
{
    if (n % 2 === 0)
    {
        resultado = resultado + n ;
    }
}
console.log(`El resultado de la suma de números pares del 1 al 10 es ${resultado}`)

/*
FOR (versión intermedia)
- Usar un for para recorrer los números del 1 al 20.
- Sumar los números que sean múltiplos de 3.
- Pero si el número también es múltiplo de 5, no lo sumes.
- Mostrar la suma final.
 */
let suma = 0
for (let x = 0; x <= 20; x++)
{
    if (x % 3 === 0 &&  x % 5 !== 0)
    {
        suma = suma + x
        console.log(`Agregamos a la suma ${x}`)
        console.log(`Resultado de la suma: ${suma}`)
    }
}
console.log(suma)
