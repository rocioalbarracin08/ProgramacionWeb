// Manipulación del dom
// Nos pemite interactuar con un documento, modificar su estructura, estilo y contenido

// MUCHAS formas de seleccionar elementos dom

/* ------- por ID ------ */
// Obteniendo por id la etiqueta título
// Me permite acceder a todas las propiedades
let titulo = document.getElementById("titulo");
console.log(titulo)
// Podemos traer más cosas junto a esta variable
console.log(/*titulo.value,*/ titulo.textContent, titulo.innerText) // ATRIBUTOS -> titulo.innerText: a diferencia de text.content este solo agarra string/texto (incompleto) - titulo.textContent: este agarra texto/string o valor null

titulo.textContentContent = "Este es el nuevo título";

/*----------Eventos (addEventListener, onClick , onChange)---------*/
let boton = document.getElementById("boton")
boton.addEventListener("click", function()
{
    alert('Este botón ha sido clickeado')
    /*-------- Crear elemento según el click--------*/
    let container = document.getElementById("container");
    const parrafo = document.createElement("p");
    parrafo.textContent = "Este es el párrafo creado";
    container.append(parrafo); //Agregar elementos (en este casp al contenedor div puesto en html)
}) 
//En el segundo parametro se ubica lo que queremos hacer (en el ejemplo se realiza una funcion)-> Depende el método que usemos
// P/ELEGIR MËTODO: ctrl + espacio


