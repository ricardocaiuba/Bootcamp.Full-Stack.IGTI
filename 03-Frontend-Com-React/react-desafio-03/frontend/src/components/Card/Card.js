import React from "react";
import css from "./card.module.css";

function Card({ children, title }) {
  return (
    <div className={`card ${css.card}`}>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;

// <div className="card-header" style={{ fontWeight: "bold" }}>
// {title}
// </div>
