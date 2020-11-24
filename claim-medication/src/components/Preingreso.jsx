import React, { Component } from "react";
import "./Style/preingresoStyles.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

//import { Button } from "react-bootstrap";
export default class Preingreso extends Component {
  render() {
    return (
      <>
        <br />
        <Link to="/Login2" className="nav-link">
          <button className="button-5">USUARIO</button>
        </Link>
        <br />
        <br />
        <Link to="/Login3" className="nav-link">
          <button className="button-5" Activate>
            ADMINISTRADOR
          </button>
        </Link>
      </>
    );
  }
}
