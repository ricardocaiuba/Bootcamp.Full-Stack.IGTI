import React from "react";
import css from "./counter.module.css";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import Value from "./Value";
import Steps from "./Steps";

function Counter2(props) {
  const handleButtonClick = (clickType) => {
    props.onCount(clickType);
  };
  const { countValue, currentStep } = props;
  return (
    <div className={css.counterContainer}>
      <DecrementButton onDecrement={handleButtonClick} value="-" />
      <Value className={css.counterValue} value={countValue} />
      <IncrementButton onIncrement={handleButtonClick} value="+" />
      <Steps className={css.counterValue} currentStep={currentStep} />
    </div>
  );
}

export default Counter2;
