import React, { Component } from "react";

class header extends Component {
  handleInputChange = (event) => {
    const { value } = event.target;
    this.props.onChangeFilter(value);
  };
  render() {
    const { filter, countryCount, totalPopulation } = this.props;
    return (
      <div>
        <input type="text" value={filter} onChange={this.handleInputChange} /> |
        <span>Países: [{countryCount}]</span>|
        <span>População: [{totalPopulation}]</span>|
      </div>
    );
  }
}

export default header;
