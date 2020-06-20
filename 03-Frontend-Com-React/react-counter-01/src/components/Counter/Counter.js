import React, { Component } from "react";
import css from "./counter.module.css";

class Counter extends Component {
  constructor() {
    super();
    this.currentCounter = 2;
  }

  handleClick = () => {
    console.log("click");
  };

  render() {
    return (
      <div className={css.counterContainer}>
        <button
          className="waves-effect waves-light btn red darken-4"
          onClick={this.handleClick}
        >
          -
        </button>
        <span className={css.counterValue}>{this.currentCounter}</span>
        <button className="waves-effect waves-light btn green darken-4">
          +
        </button>
      </div>
    );
  }
}

export default Counter;
