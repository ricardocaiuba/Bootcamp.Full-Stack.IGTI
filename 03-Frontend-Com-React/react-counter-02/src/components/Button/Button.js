import React, { Component } from "react";

class Button extends Component {
  render() {
    const { className, onClick, value } = this.props;
    return (
      <button className={className} onClick={onClick}>
        {value}
      </button>
    );
  }
}

export default Button;
