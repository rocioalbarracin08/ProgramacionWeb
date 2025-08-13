import React from "react";
const NombreContext= React.createContext();

export function NombreProvider({children}){
    const name = "Fede";
    return(
        <NombreContext.Provider value = {name}>
            {children}
        </NombreContext.Provider>
    );
}