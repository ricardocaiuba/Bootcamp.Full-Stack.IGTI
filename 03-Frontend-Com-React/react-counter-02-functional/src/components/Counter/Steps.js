import React from "react";

function Steps(props) {
  const { className, currentStep } = props;
  return <span className={className}>({currentStep})</span>;
}
export default Steps;
