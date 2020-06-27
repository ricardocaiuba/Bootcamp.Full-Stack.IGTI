import React from "react";

import css from "./user.module.css";

const User = ({ user }) => {
  const { picture, name } = user;

  return (
    <div className={css.flexRow}>
      <img className={css.avatar} src={picture.large} alt={name.first} />
      <span>{`${name.title} ${name.first} ${name.last}`}</span>
    </div>
  );
};

export default User;
