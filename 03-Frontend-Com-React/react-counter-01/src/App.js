import React, { Component } from "react";
import Counter from "./components/Counter/Counter";

class App extends Component {
  render() {
    return (
      <div className="container">
        <p>React Counter - 01</p>
        <hr />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default App;
