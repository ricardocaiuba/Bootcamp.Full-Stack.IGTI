import React from "react";

function Spinner({ description }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info" role="status"></div>
      <div className="text-center text-info" style={{ padding: "5px" }}>
        {description}
      </div>
    </div>
  );
}

export default Spinner;
