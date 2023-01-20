import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

function GreetingF(props) {

const [age, setAge] = useState(29)

const handleAge = () => {
    setAge(age + 1)
}



  return (
    <div>
        <h2>Componente funcional</h2>
    <h1>
      Hola {props.name} tu edad es : {age} {" "}
    </h1>
     <button className="btn" onClick={handleAge} > Sumar AÑO</button>
    {/* <button className="btn" onClick={this.noBirthday} > Restar AÑO</button> */}
  </div>
  )
}

GreetingF.propTypes = {
    name : PropTypes.string
}

export default GreetingF
