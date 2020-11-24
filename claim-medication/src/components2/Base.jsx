import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Base.css";
import swal from "sweetalert";

export default class Base extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    swal("Los datos han sido guardados con éxito..", values);
  };

  render() {
    const { medicamento, farmacia, Horario, Dirección } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Ingresar Nombre del medicamento</label>
          <br />
          <input
            type="medicamento"
            name="medicamento"
            value={medicamento}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ingresar Farmacia</label>
          <br />
          <input
            type="farmacia"
            name="farmacia"
            value={farmacia}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ingresar horario de la farmacia</label>
          <br />
          <input
            type="Horario"
            name="Horario"
            value={Horario}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ingresar dirección de la farmacia</label>
          <br />
          <input
            type="Dirección "
            name="Dirección"
            value={Dirección}
            onChange={this.handleChange}
          />
        </div>

        <input
          type="submit"
          value="Subir Información"
          className="btn btn-primary"
        />
      </form>
    );
  }
}
