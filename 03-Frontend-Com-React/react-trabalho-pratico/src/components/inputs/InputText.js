import React, { Component } from "react";

class InputText extends Component {
  render() {
    const { label } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input type="text" className="form-control" id={label} />
      </div>
    );
  }
}

export default InputText;
