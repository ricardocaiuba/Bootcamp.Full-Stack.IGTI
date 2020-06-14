import React, { Component } from "react";

import css from "./user.module.css";

class User extends Component {
  render() {
    const { picture, name } = this.props.user;

    return (
      <div className={css.flexRow}>
        <img className={css.avatar} src={picture.large} alt={name.first} />
        <span>{`${name.title} ${name.first} ${name.last}`}</span>
      </div>
    );
  }
}

export default User;
