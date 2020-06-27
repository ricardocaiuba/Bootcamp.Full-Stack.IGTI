import React, { Component, Fragment } from "react";

const INITIAL_STATE = {
  bandName: "Rush",
  bandMenbers: [
    {
      id: 1,
      name: "Neil Peart",
      instrument: "Bateria",
    },
    {
      id: 2,
      name: "Alex Lifeson",
      instrument: "Guitarra",
    },
    {
      id: 3,
      name: "Geddy Lee",
      instrument: "Baixo",
    },
  ],
};
class Band extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }
  render() {
    const { bandName, bandMenbers } = this.state;
    return (
      <Fragment>
        <h6>{bandName}</h6>
        <ul>
          {bandMenbers.map(({ name, instrument }, index) => {
            return (
              <li key={index}>
                {name} - {instrument}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}
export default Band;
