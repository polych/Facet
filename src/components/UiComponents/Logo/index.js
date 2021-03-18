import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeLpPage } from "../../../store/actions/generalAction";

import "./index.scss";
const Logo = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(changeLpPage(0));
  };
  return (
    <Link className="logo" to="/" onClick={handleClick}>
      <span>Home</span>
    </Link>
  );
};

export default Logo;
