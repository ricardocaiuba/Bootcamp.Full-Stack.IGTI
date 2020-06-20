import React, { Component } from "react";

class Value extends Component {
  render() {
    const { value, className } = this.props;
    return <span className={className}>{value}</span>;
  }
}

export default Value;
