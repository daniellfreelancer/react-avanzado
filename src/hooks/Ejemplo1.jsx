
/**
 * Ejemplo de los useState
 * 
 * y acceder a traves de un hook y, ademas, poder modificarlo
 * 
 * 
 */
import React from 'react'
import { useState } from 'react'

export default function Ejemplo1() {

// valor inicial
const valorInicial = 0;

// valor inicial para una persona

const personaInicial = {
    nombre: "Daniel",
    email: "daniel.jlugo@gmail.com"
}

/**
 * El valorinicial y personainicial sean parte del estado del componente
 *
 * 
 *  
 */


const [contador, setContador] = useState(valorInicial);

const [persona, setPersona] = useState(personaInicial);

/**
 * Funcion para incrementar el contador del estado
 */
const incrementarContador = () =>{
    setContador(contador + 1)
}

/**
 * 
 */
const actualizarPersona = () => {
    setPersona(
        {
            nombre: "Sofia",
            email: "sofialugo@gmail.com"
        }
    )
}



  return (
    <div>
        <h1> useState </h1>
        <p>Contador: { contador } </p>
        <div>
            <h2>Datos de la persona</h2>
            <h2>{persona.nombre}</h2>
            <h2>{persona.email}</h2>
        </div>
        <div>
            <button onClick={incrementarContador} >incrementar Contador</button>
            <button onClick={actualizarPersona} >Actualizar Persona</button>

        </div>
        
    </div>
  )
}
