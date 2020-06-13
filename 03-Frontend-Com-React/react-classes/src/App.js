import React, { Component } from "react";
import { getNewTimestamp } from "./helpers/dateTimeHelpers";

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickArray: [],
    };
  }

  componentDidUpdate() {
    const { clickArray } = this.state;
    document.title = `React-classes [${clickArray.length.toString()}]`;
  }
  handleClick = () => {
    const newClickArray = Object.assign([], this.state.clickArray);
    newClickArray.push(getNewTimestamp());
    this.setState({ clickArray: newClickArray });
  };

  render() {
    const { clickArray } = this.state;
    return (
      <div className="container">
        <h1>
          React e <code>Class Components</code>
        </h1>
        <hr />
        <button className="btn btn-primary" onClick={this.handleClick}>
          Clique aqui
        </button>
        <hr />
        <ul>
          {clickArray.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
