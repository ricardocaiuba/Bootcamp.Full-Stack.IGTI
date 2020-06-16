import React, { Component } from "react";
import InputText from "./components/inputs/InputText";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Projeto prático - ReactJS</h1>
        <hr />
        <InputText label="Salário Bruto" />
        <div className="row">
          <div className="col">
            <InputText label="Base INSS:" />
          </div>
          <div className="col">
            <InputText label="Desconto INSS:" />
          </div>
          <div className="col">
            <InputText label="Base IRPF:" />
          </div>
          <div className="col">
            <InputText label="Desconto IRPF:" />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <InputText label="Salário Líquido:" />
          </div>
        </div>
        <hr />

        <button type="button" className="btn btn-outline-info">
          Clique aqui
        </button>
      </div>
    );
  }
}

export default App;
