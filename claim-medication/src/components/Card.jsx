import React, { Component } from "react";
import "./Style/cardStyle.css";

export default class Card extends Component {
  render() {
    return (
      <>
        {this.props.data.map((element) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card" key={element.id}>
              <img src={element.img} alt="" className="card-img-top" />
              <div className="card-body">
                <p className="card-text">{element.info}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
