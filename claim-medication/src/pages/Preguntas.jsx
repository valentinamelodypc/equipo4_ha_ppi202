import React, { Component } from "react";
//import Carousel from "../components/Carousel";
import "./Style/preguntasStyle.css";
import Carousel from "react-bootstrap/Carousel";

export default class Preguntas extends Component {
  render() {
    return (
      <>
        <br />
        <br />

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://biotechmagazineandnews.com/wp-content/uploads/2020/07/farmacos.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="data:image/jpeg;base64,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"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s3.amazonaws.com/elcomun/imagenes/1548970451.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <h1>
          {" "}
          <center>
            {" "}
            <strong>
              <br />
              Preguntas Frecuentes
            </strong>
          </center>
        </h1>
        <br />
        <table>
          <ul class="list-group">
            <li>
              <strong>¿Quiénes manejan la app?</strong>
              <br />
              La app la manejan los administradores y los creadores de la app,
              también la manejan los asociados de ella.
            </li>
            <br />
            <li>
              <strong>¿Cada cuánto actualizan la app?</strong>
              <br />
              La app se actualizara cada que hay información nueva o
              medicamentos nuevos para ingresar, se puede decir que se
              actualizara cada noche.
            </li>
            <br />
            <li>
              <strong>¿Dónde puedo raclamar los medicamentos?</strong>
              <br />
              Los medicamentos los podrás reclamar en la farmacia que se te
              muestre donde esta disponible y cual te queda cercana.
            </li>
            <br />
            <li>
              <strong>¿Cuales son los asociados?</strong>
              <br />
              Los asociados son los hospitales, farmacias y las EPS.
            </li>
          </ul>
        </table>
      </>
    );
  }
}
