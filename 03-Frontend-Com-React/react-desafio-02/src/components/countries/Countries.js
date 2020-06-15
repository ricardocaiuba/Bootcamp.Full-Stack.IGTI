import React, { Component } from "react";
import Country from "./Country";

class Countries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <ul>
        {countries.map((country, index) => {
          return (
            <li key={index}>
              <Country country={country} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Countries;
