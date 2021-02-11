import React from "react";
import "./index.scss";

const Dot = ({ hover }) => (
  <div className="dot_wrap">
    <div className={`dot ${hover ? "dot_hover" : ""}`}></div>
  </div>
);

export default Dot;
