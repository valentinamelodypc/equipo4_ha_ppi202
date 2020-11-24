import React, { Component } from "react";
import "./Style/inicio1Style.css";
import CntNavbar2 from "../components2/CntNavbar2";

export default class Inicio1 extends Component {
  render() {
    return (
      <div className="container">
        <p align="left">
          <br />
          <br />
          <br />
          <center>
            <h1>
              <strong>CLAIM MEDICATION</strong>
            </h1>
          </center>
          <br />
          <h2>
            <strong>
              <u> Objetivo Especifico</u>
            </strong>
          </h2>
          <p>
            Es un servicio para los usuarios de la EPS que tienen que reclamar
            los medicamentos y se tardan horas haciendo largas filas y muchas
            veces no encuentran el medicamento, se llama clain medication y es
            una plataforma web que permite buscar y ver en qué momentos están
            disponibles los medicamentos a diferencia de hacer las largas filas
            sin éxito, nuestro producto le ahorra tiempo y esfuerzo a los
            usuarios para reclamar sus medicamentos.
          </p>
          <br />
          <br />
          <h2>
            <strong>
              <u> Sura eps</u>
            </strong>
          </h2>
          <p>
            EPS Sura se determina en Colombia como una entidad promotora de
            Salud suministrada por el Grupo Sura, se debe resaltar que además de
            seguridad social, SURA presta los siguientes servicios: Seguros,
            alimentos procesados, pensiones, ahorros, inversión y hasta banca
            universal.El 31 de enero de 1990 nació la Compañía Suramericana de
            Servicios de Salud, SUSALUD, como una empresa de Medicina Prepagada.
            Más adelante, el 16 de marzo de 1995 recibió su aprobación como
            Entidad Promotora de Salud (EPS) y comenzó su participación dentro
            del Sistema General de Seguridad Social en Salud colombiano, a raíz
            del surgimiento de la Ley 100 de 1993. A partir de 2009 Susalud
            cambia de marca y se convierte en EPS SURA. EPS SURA como Entidad
            Promotora de Salud ofrece los servicios de POS y Planes
            Complementarios de Salud. A través de la Compañía de Servicio de
            Salud IPS Suramericana S.A., la EPS cuenta con divisiones
            asistenciales para apoyar su gestión con entidades como: IPS Punto
            de Salud, Dinámica IPS, Salud en Casa, Punto de Vista y Consultoría
            en riesgos profesionales.
            <br />
            <br />
            <br />
            <h5>
              <u>Alerta sobre el COVID-19</u>
            </h5>
            Quédate en casa si te sientes mal. Si tienes fiebre, tos y
            dificultad para respirar, busca atención médica lo antes posible.
            <br /> Sigue las instrucciones de la autoridad de salud local.
            Fuente: Organización Mundial de la Salud.
            <br />
            <br />
          </p>
          <center>
            <form action="https://lyhiu.csb.app/Consultar">
              <input type="submit" value="Consultar medicamentos" />
            </form>
          </center>
          <br />
          <br />
          <center>
            <form action="https://www.epssura.com/">
              <input type="submit" value="Ir a sura" />
            </form>
          </center>
          <CntNavbar2 />
        </p>
      </div>
    );
  }
}
