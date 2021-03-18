import React from "react";
import "./index.scss";

const Radio = React.memo(({ label, value, name }) => {
  return (
    <label className="radio">
      <span>{label}</span>
      <input type="radio" value={value} name={name} />
      <span className="checkmark"></span>
    </label>
  );
});

export default Radio;
