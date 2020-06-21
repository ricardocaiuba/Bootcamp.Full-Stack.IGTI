import React, { Component, StrictMode } from "react";

class Button extends Component {
  render() {
    const { className, children, toggle, target, showModal } = this.props;

    return (
      <StrictMode>
        <button
          type="button"
          className={className}
          data-toggle={toggle}
          data-target={target}
        >
          {children}
        </button>
        {showModal()}
      </StrictMode>
    );
  }
}

export default Button;
