import React, { Component } from "react";

import Button from "../Button/Button";

class DecrementButton extends Component {
  handleButtonClick = () => {
    this.props.onDecrement("-");
  };

  render() {
    const { value } = this.props;
    return (
      <Button
        className="waves-effect waves-light btn red darken-4"
        onClick={this.handleButtonClick}
        value={value}
      />
    );
  }
}

export default DecrementButton;
