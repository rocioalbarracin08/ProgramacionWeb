import {useState} from "react"

function Componente(){
    const [nombre, setNombre] = useState("")  
  // IDENTIFICAMOS: setNombre -> función que cambiará el valor de la variable - nombre -> es el nombre de la variable a ser modificada

    const handleClick = () => {
    //Estamos dentro de una funcion flecha
        console.log(nombre); //Cuando se haga click en el botón, se va ejecutar esta función
    };
  //El evento nunca va cambiar

    const handleInputChange = (event) => {
        setNombre(event.target.value); // Va setear lo que se ingresa en el input
    };

//En el caso de usarlo en un boton, podemos ver se ejecuta la funcion cuando presionamos el boton
    return (
    <>
        <input 
        type="text" 
        placeholder='Escribi tu nombre' 
        onChange={handleInputChange}
        value={nombre}
        />
        <button onClick={handleClick} >Mostrar</button> 
        {nombre && <h2>{nombre}</h2>}
        {nombre === "" ? <>hola</>: <>chau</>}
    </>)
}
export default Componente