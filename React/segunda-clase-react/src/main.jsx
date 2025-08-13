import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export const NombreContext = React.createContext(); //Creamos el contexto y lo asignamos al componente NombreContext

createRoot(document.getElementById("root")).render(
  <NombreContext.Provider value={"Ro"}>
    <StrictMode>
      <App />
    </StrictMode>
  </NombreContext.Provider>
);
