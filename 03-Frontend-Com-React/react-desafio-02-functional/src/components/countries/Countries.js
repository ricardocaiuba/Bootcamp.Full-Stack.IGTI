import React from "react";
import Country from "./Country";
import css from "./countries.module.css";

const Countries = ({ countries }) => {
  return (
    <div className={`${css.border} ${css.flexRow}`}>
      {countries.map((country, index) => {
        return <Country key={index} country={country} />;
      })}
    </div>
  );
};

export default Countries;
