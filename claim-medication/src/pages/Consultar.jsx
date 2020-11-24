import React, { Component } from "react";
import "./Style/preguntasStyle.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default class Consultar extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <strong>
          <h1>
            <center>
              <strong> </strong>
            </center>
          </h1>
        </strong>
        <center>
          <table>
            <center>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSa7yspcGNKnU7JcwXvFylxvnxzFtM9sYqjZw&usqp=CAU"
                alt="Medicamento"
                fluid
              />
            </center>
          </table>
        </center>
        <br />
        <center>
          <Link to="/Medicamento" className="nav-link">
            {" "}
            <form action="">
              <input type="submit" value="Ingresar nombre del medicamento" />
            </form>
          </Link>
          <br />
          <Link to="/Cam" className="nav-link">
            <form action="">
              <input type="submit" value="Leer fórmula de los medicamentos" />
            </form>
          </Link>
        </center>
      </>
    );
  }
}
