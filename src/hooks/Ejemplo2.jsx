import React from 'react'

import { useState, useRef, useEffect } from 'react'
export default function Ejemplo2() {

    // 2 contadores distintos

    const [contador1, setContador1] = useState(0);

    const [contador2, setContador2] = useState(0);

    // crear una referencia con useRef()

    const miRef = useRef();


    const incrementarContador1 = () =>{
        setContador1(contador1 + 1)
    }

    const incrementarContador2 = () =>{
        setContador2(contador2 + 1)

    }

    /**
     * ejecutar un snippet de codigo
     */
//     useEffect(() => {

//         console.log("Cambio en el estado del componente")
//         console.log("Mostrando referencia a elemento del dom")
//         console.log(miRef)
// ;



//     })

/**
 * ejecutar en unos casos
 * 
 */

useEffect(() => {

    console.log("Cambio el contador")
    console.log(miRef.current)

}, [contador1, contador2])

    


  return (
    <div>

        <h1>Ejemplo diferentes Hooks</h1>

        <h2> Contador 1: {contador1} </h2>
        <h2> Contador 2: {contador2} </h2>
        <h4 ref={miRef} >Ejemplo de useREF</h4>


        <div>
            <button onClick={incrementarContador1} >incrementarContador 1</button>
            <button onClick={incrementarContador2} >incrementarContador 2</button>
        </div>



    </div>
  )
}
