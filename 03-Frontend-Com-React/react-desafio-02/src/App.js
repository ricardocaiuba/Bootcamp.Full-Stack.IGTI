import React, { Component } from "react";
import Countries from "./components/countries/Countries";
import Header from "./components/headers/header";

const INITIAL_STATE = {
  allCountries: [],
  filteredCountries: [],
  filteredPopulation: 0,
  filter: "",
};

class App extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population,
      };
    });

    const filteredPopulation = this.calculateTotalPopulationFrom(allCountries);

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
      filteredPopulation,
    });
  }

  calculateTotalPopulationFrom = (countries) => {
    return countries.reduce((accu, curr) => {
      return accu + curr.population;
    }, 0);
  };

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter((country) => {
      return country.filterName.includes(filterLowerCase);
    });

    const totalPopulation = this.calculateTotalPopulationFrom(
      filteredCountries
    );
    this.setState({
      filteredCountries,
      filteredPopulation: totalPopulation,
    });
  };

  render() {
    const { filteredCountries, filteredPopulation, filter } = this.state;
    return (
      <div className="container">
        <h4>React Countries</h4>
        <hr />
        <Header
          filter={filter}
          onChangeFilter={this.handleChangeFilter}
          countryCount={filteredCountries.length}
          totalPopulation={filteredPopulation}
        />
        <Countries countries={filteredCountries} />
        <hr />
        <button className="btn">Clique aqui</button>
      </div>
    );
  }
}

export default App;
