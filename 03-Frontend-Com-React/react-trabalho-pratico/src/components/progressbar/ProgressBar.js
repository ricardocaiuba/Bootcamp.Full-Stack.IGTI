import React, { Component } from "react";

class ProgressBar extends Component {
  render() {
    const {
      valueDiscontINSS,
      valueDiscountIRPF,
      valueLiquidSalary,
    } = this.props;
    return (
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          role="progressbar"
          style={{ width: `${valueDiscontINSS}%` }}
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
          role="progressbar"
          style={{ width: `${valueDiscountIRPF}%` }}
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-success"
          role="progressbar"
          style={{ width: `${valueLiquidSalary}%` }}
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    );
  }
}

export default ProgressBar;
