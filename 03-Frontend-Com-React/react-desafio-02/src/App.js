import React, { Component } from 'react';

const INITIAL_STATE = {
  allCountries: []
};

class App extends Component {
  constructor() {
    super()
    this.state = INITIAL_STATE;
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        flag,
        population
      };
    });

    this.setState({ allCountries });
  }

  render() {
    const { allCountries } = this.state;
    return (
      <div className="container">
        <h1>React Countries</h1>
        <hr />

        <hr />
        <button className="btn">Clique aqui</button>
      </div>
    );
  }

}

export default App;
