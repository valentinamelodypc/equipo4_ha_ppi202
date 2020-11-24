import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./Style/FormulasStyles.css";
import { Link } from "react-router-dom";

export default class Formulas extends Component {
  render() {
    return (
      <>
        <div className="container">
          <Link to="/Disponibles" className="nav-link">
            <Button
              className="container-Button"
              variant="primary"
              size="lg"
              block
            >
              <h4>Formula 1</h4>
              <strong>Fecha:</strong> 26/10/2020
            </Button>
          </Link>
          <Link to="/Disponibles2" className="nav-link">
            <Button
              className="container-Button"
              variant="primary"
              size="lg"
              block
            >
              <h4>Formula 2</h4>
              <strong>Fecha:</strong> 24/09/2020
            </Button>
          </Link>
          <Link to="/Disponibles3" className="nav-link">
            <Button
              className="container-Button"
              variant="primary"
              size="lg"
              block
            >
              <h4>Formula 3</h4>
              <strong>Fecha:</strong> 16/08/2020
            </Button>
          </Link>
        </div>
      </>
    );
  }
}
