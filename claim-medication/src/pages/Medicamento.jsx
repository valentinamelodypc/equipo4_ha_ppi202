import React, { Component } from "react";
import Medicamentos from "../components/Medicamentos";
import "./Style/MedicamentosStyles.css";

export default class Medicamento extends Component {
  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center preingreso-container">
            <div>
              <div className="border p-3">
                <Medicamentos />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
