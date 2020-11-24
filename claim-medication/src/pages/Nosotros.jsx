import React, { Component } from "react";
//import Carousel from "../components/Carousel";
import Card from "../components/Card";

const data = [
  {
    id: 1,
    img:
      "https://github.com/Juan-hub-a/equipo4_ha_ppi2020/blob/master/sergio.jpeg?raw=true",
    info:
      "SERGIO DAVID MOSQUERA MORENO. CORREO:sedamomo123@gmail.com. CELULAR:3104144655"
  },
  {
    id: 2,
    img:
      "https://github.com/Juan-hub-a/equipo4_ha_ppi2020/blob/master/melody.jpeg?raw=true",
    info:
      "VALENTINA MELODY PEÑA CORREDOR. CORREO:valentinamelodycorredor@gmail.com CELULAR:3003295894"
  },
  {
    id: 3,
    img:
      "https://github.com/Juan-hub-a/equipo4_ha_ppi2020/blob/master/juan.jpeg?raw=true",
    info:
      "JUAN MANUEL MONTOYA VILLEGAS. CORREO:juanmanuel16montoya@gmail.com CELULAR:310 3987178"
  }
];

export default class Nosotros extends Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <br />
          <br />
          <br />
          <h1>
            <center>
              <strong>CLAIM MEDICATION</strong>
            </center>
          </h1>
          <br />
          <h2>
            <center>
              <u>
                {" "}
                <strong>Nosotros</strong>
              </u>
            </center>
          </h2>
          <h2 align="left">
            <u>
              <strong>Visión</strong>
            </u>{" "}
          </h2>
          <p>
            Es un servicio para los usuarios de la EPS que tienen que reclamar
            los medicamentos y se tardan horas haciendo largas filas y muchas
            <br />
            veces no encuentran el medicamento, se llama claim medication y es
            una plataforma web que permite buscar y ver en qué momentos están
            disponibles <br /> los medicamentos a diferencia de hacer las largas
            filas sin éxito, nuestro producto le ahorra tiempo y esfuerzo a los
            usuarios para reclamar sus medicamentos.
          </p>
          <br />
          <br />
          <h2 align="left">
            <u>
              <strong>Objetivo</strong>
            </u>{" "}
          </h2>
          <p>
            Nuestro objetivo es facilitar a las personas en el momento de
            reclamar medicamentos, hacer que las personas ahorren tiempo y
            dinero al momento de ir a reclamar sus medicamentos y no les toque
            hacer una fila tan extensas y largas.{" "}
          </p>
          <br />
          <br />

          <h2 align="left">
            <u>
              <center>
                <strong>Contáctanos</strong>
              </center>
            </u>{" "}
          </h2>
        </div>
        <div className="container">
          <div className="row">
            <Card data={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}
