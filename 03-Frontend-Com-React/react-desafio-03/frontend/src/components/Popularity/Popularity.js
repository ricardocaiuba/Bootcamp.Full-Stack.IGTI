import React from "react";

const STARS = {
  empty: "☆",
  full: "★",
  max: 10,
};
function Popularity({ value }) {
  const fullStar = STARS.full.repeat(value);
  const emptyStar = STARS.empty.repeat(STARS.max - value);
  return (
    <div style={{ fontSize: "1.5rem", color: "#f39c12" }}>
      {fullStar}
      {emptyStar}
    </div>
  );
}

export default Popularity;
