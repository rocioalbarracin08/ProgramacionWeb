import { Persona2 } from "./persona2";

export function Persona1({ nombre }) {
  return (
    <>
      <h3>Este es el componente persona1</h3>
      <div>Hola {nombre}</div>
      <Persona2 nombre={nombre} />
    </>
  );
}
