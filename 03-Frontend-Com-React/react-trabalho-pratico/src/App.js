import React, { Component } from "react";
import SalarioBrutoContainer from "./components/container/SalarioBrutoContainer";
import ButtonGroup from "./components/buttonGroup/ButtonGroup";

class App extends Component {
  render() {
    return (
      <div className="container">
        <SalarioBrutoContainer />
        <ButtonGroup />
      </div>
    );
  }
}

export default App;
