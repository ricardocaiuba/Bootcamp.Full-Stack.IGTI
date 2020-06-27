import React, { Component } from "react";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter/Counter2";
import Band from "./components/Band/Band";

const INITIAL_STATE = {
  currentCounter: 3,
  steps: 0,
};
class App extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleCount = (clickType) => {
    const { currentCounter, steps } = this.state;
    this.setState({
      currentCounter:
        clickType === "+" ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;
    return (
      <div className="container">
        <h4>React Counter - 02</h4>
        <hr />
        <h5>Band</h5>
        <Band />
        <hr />
        <h5>Counter</h5>
        <Counter />
        <Counter />
        <Counter />
        <hr />
        <h5>Counter 2</h5>
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
      </div>
    );
  }
}

export default App;
