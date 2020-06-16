import React, { Component } from "react";

import css from "./countries.module.css";

class Country extends Component {
  render() {
    const { country } = this.props;
    const { name, flag } = country;
    return (
      <div className={`${css.country} ${css.border}`}>
        <img className={css.flag} src={flag} alt={name} />
        <span className={css.countryName}>{name}</span>
      </div>
    );
  }
}

export default Country;
