import React from "react";

function Value(props) {
  const { value, className } = props;
  return <span className={className}>{value}</span>;
}

export default Value;
