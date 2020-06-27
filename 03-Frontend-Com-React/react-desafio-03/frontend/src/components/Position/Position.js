import React from "react";

import css from "./position.module.css";

function Position({ children }) {
  return <div className={css.position}>{children}</div>;
}

export default Position;
