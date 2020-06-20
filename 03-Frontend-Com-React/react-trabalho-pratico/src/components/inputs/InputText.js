import React, { Component } from "react";

class InputText extends Component {
  handleChange = (event) => {
    const { value } = event.target;
    this.props.handleChangeSalarioBrtuto(value);
  };

  render() {
    const {
      label,
      isDisabled,
      formatNumber,
      typeInput,
      className,
      step,
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input
          type={typeInput}
          className={`${"form-control form-control-sm"} ${className}`}
          id={label}
          value={formatNumber}
          onChange={this.handleChange}
          disabled={isDisabled}
          step={step}
        />
      </div>
    );
  }
}

export default InputText;
