import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
    };
  }
  render() {
    return (
      <div>
        <h1>
          Hola {this.props.name} tu edad es : {this.state.age}{" "}
        </h1>
        <button className="btn" onClick={this.birthday} > Sumar AÑO</button>
        <button className="btn" onClick={this.noBirthday} > Restar AÑO</button>
      </div>
    );
  }

  birthday = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };
  noBirthday = () => {
    this.setState((prevState) => ({
      age: prevState.age - 1,
    }));
  };
}

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
