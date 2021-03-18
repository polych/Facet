import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const RoundBtn = ({ value, className }) => {
  return (
    <Link className={className} to="/contact">
      {value}
    </Link>
  );
};

export default RoundBtn;
