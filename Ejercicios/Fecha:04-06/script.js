const user = "name"
const password = "clave123"
let sesion = false //Donde ubicar la sesión

localStorage.setItem("user", user);

async function obtenerDatos() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        data.forEach(empleado => {   
            let li = document.createElement("li");
            li.textContent = empleado.name;
            const lista = document.getElementById("lista")
            lista.append(li)
            console.log(empleado.name);  
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

const botonClikeado = document.getElementById("boton") //o más breve ".addEventLister"
botonClikeado.addEventListener("click", () => {

    let usuario = document.getElementById("user").value
    let contraseña = document.getElementById("pssw").value //Capturamos el valor de la etiqueta con ".value"

    if (usuario === user && contraseña === password) {
        console.log(`Sesión iniciada con el usuario ${user}`)
        sesion = true
    } //Pudo entrar en los 2 "if"
    if (usuario === user && contraseña === password && sesion === true) {
        obtenerDatos()
    }
    else {
        setTimeout ( function() {
        alert("Error con los datos ingresados")
        }, 1000 );
        sesion = false
    }
})
/*----------Actividad---------
Guardar sesión en localStorage
Si hay sesión activa, mostrar directamente la lista de empleados 
(https://jsonplaceholder.typicode.com/users)
*/