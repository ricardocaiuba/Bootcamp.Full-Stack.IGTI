import React from "react";
import { formatNumber } from "../../helpers/formatHelpers";
import css from "./header.module.css";

const Header = (props) => {
  const { onChangeFilter, filter, countryCount, totalPopulation } = props;
  const handleInputChange = (event) => {
    const { value } = event.target;
    onChangeFilter(value);
  };
  return (
    <div className={css.flexRow}>
      <input
        placeholder="Filtro"
        type="text"
        value={filter}
        onChange={handleInputChange}
      />{" "}
      |
      <span className={css.countries}>
        Países: <strong>[{countryCount}]</strong>
      </span>
      |
      <span className={css.population}>
        População: <strong>[{formatNumber(totalPopulation)}]</strong>
      </span>
    </div>
  );
};

export default Header;
