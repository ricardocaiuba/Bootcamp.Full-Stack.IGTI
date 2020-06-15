import React, { Component } from "react";

class Country extends Component {
  render() {
    const { country } = this.props;
    return <div>{country.name}</div>;
  }
}

export default Country;
