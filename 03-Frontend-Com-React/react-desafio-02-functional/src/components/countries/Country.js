import React from "react";

import css from "./countries.module.css";

const Country = ({ country }) => {
  const { name, flag } = country;
  return (
    <div className={`${css.country} ${css.border}`}>
      <img className={css.flag} src={flag} alt={name} />
      <span className={css.countryName}>{name}</span>
    </div>
  );
};

export default Country;
