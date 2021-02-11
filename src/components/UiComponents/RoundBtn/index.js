import React from "react";
import "./index.scss";

const RoundBtn = ({ value, className }) => {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
};

export default RoundBtn;
