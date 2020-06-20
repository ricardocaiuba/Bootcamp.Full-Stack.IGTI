import React, { Component } from "react";

class Toggle extends Component {
  handleChange = (event) => {
    const { onToggle } = this.props;
    const isChecked = event.target.checked;
    onToggle(isChecked);
  };

  render() {
    const { enabled, labelOff, labelOn } = this.props;
    return (
      <div className="switch">
        <label>
          {labelOff}
          <input
            type="checkbox"
            checked={enabled}
            onChange={this.handleChange}
          />
          <span className="lever"></span>
          {labelOn}
        </label>
      </div>
    );
  }
}
export default Toggle;
