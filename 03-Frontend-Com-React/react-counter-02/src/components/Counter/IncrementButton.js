import React, { Component } from "react";

import Button from "../Button/Button";

class IncrementButton extends Component {
  handleButtonClick = () => {
    this.props.onIncrement("+");
  };

  render() {
    const { value } = this.props;
    return (
      <Button
        className="waves-effect waves-light btn green darken-4"
        onClick={this.handleButtonClick}
        value={value}
      />
    );
  }
}

export default IncrementButton;
