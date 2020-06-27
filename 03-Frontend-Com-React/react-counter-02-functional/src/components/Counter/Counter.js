import React, { Component } from "react";
import css from "./counter.module.css";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import Value from "./Value";
import Steps from "./Steps";

const INITIAL_STATE = {
  currentCounter: 2,
  steps: 0,
};
class Counter extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  handleButtonClick = (clickType) => {
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
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick} value="-" />
        <Value className={css.counterValue} value={currentCounter} />
        <IncrementButton onIncrement={this.handleButtonClick} value="+" />
        <Steps className={css.counterValue} currentStep={steps} />
      </div>
    );
  }
}

export default Counter;
