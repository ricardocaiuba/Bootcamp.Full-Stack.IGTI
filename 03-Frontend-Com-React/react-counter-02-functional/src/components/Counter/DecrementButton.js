import React from "react";

import Button from "../Button/Button";

function DecrementButton(props) {
  const { onDecrement, value } = props;
  const handleButtonClick = () => {
    onDecrement("-");
  };

  return (
    <Button
      className="waves-effect waves-light btn red darken-4"
      onClick={handleButtonClick}
      value={value}
    />
  );
}

export default DecrementButton;
