import React from "react";
import "./index.scss";

const Radio = React.memo(({ label, value, name, change }) => {
  return (
    <label className="radio">
      <span>{label}</span>
      <input type="radio" value={value} name={name} onChange={change} />
      <span className="checkmark"></span>
    </label>
  );
});

export default Radio;
