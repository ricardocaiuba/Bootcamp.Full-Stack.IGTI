import React from "react";

import Button from "../Button/Button";

function IncrementButton(props) {
  const { onIncrement, value } = props;
  const handleButtonClick = () => {
    onIncrement("+");
  };

  return (
    <Button
      className="waves-effect waves-light btn green darken-4"
      onClick={handleButtonClick}
      value={value}
    />
  );
}

export default IncrementButton;
