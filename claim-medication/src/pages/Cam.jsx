import React, { Component } from "react";
import QrReader from "react-qr-scanner";

export default function App() {
  return <Test />;
}

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result"
    };
  }

  saludo = () => {
    console.log(this.state.result);
    window.open(this.state.result, "_blank");
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data
      });
      this.saludo();
    }
  };

  handleError(err) {
    console.error(err);
  }

  render() {
    const previewStyle = {
      height: 240,
      width: 320
    };

    return (
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
