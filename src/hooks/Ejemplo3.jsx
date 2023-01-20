/**
 * useState()
 * useContext()
 */

import React, { useContext, useEffect, useState } from "react";

/**
 *
 * @returns componente 1 dispone de un contexto
 * que va a tener un valor que recibe desde el padre
 */

const miContexto = React.createContext(null);
const Componente1 = () => {
  //va a rellenarse con los datos del padre

  const state = useContext(miContexto);
  return (
    <div>
      <h1>el token es: {state.token}</h1>
      <Componente2 />
    </div>
  );
};

const Componente2 = () => {
  const state = useContext(miContexto);

  return (
    <div>
      <h2> La sesion es: {state.sesion} </h2>
    </div>
  );
};

export default function MiComponenteConContexto() {


    const [myToken, setMyToken] = useState(Math.floor(Math.random() * 16777215).toString(16) );

    const estadoInicial = {
        token: myToken,
        sesion: 1,
      };
  // creamos el estado del componente
  const [sesionData, setSesionData] = useState(estadoInicial);
  


  

  function actualizarSesion() {
    
    setSesionData({
        token: sesionData.token.split('').sort(() => 0.5 - Math.random()).join(''),
        sesion: sesionData.sesion + 1,
    });
    
  }


  return (
    <miContexto.Provider value={sesionData}>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar</button>
    </miContexto.Provider>
  );
}
