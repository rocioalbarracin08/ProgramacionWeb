let actividades_usuario = {};    

let boton = document.getElementById("boton")

boton.addEventListener("click", function(){
    const actividad = document.getElementById("ingresar").value;
    
    let container = document.getElementById("contenedor")
    
    const lista = document.createElement("li"); // lo que esta dentro del paréntesis puede ser un párrafo, una lista u otro elemento (cambiar la etiqueta en el html según el que ponga)
    lista.textContent = actividad;
    container.append(lista);
});

//captura con id 
//Crear elementos "createElement"