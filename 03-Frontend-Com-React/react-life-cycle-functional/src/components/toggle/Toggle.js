import React from "react";

const Toggle = (props) => {
  const { onToggle, enabled, labelOff, labelOn } = props;
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    onToggle(isChecked);
  };

  return (
    <div className="switch">
      <label>
        {labelOff}
        <input type="checkbox" checked={enabled} onChange={handleChange} />
        <span className="lever"></span>
        {labelOn}
      </label>
    </div>
  );
};
export default Toggle;
