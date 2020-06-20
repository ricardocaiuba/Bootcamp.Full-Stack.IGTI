import React, { Component } from "react";

class Steps extends Component {
  render() {
    const { className, currentStep } = this.props;
    return <span className={className}>({currentStep})</span>;
  }
}
export default Steps;
