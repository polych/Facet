import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { menuAction } from "../../../store/actions/generalAction";
const MenuBtn = () => {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.general);
  const handleClick = () => {
    dispatch(menuAction(!menu));
  };
  return (
    <button
      className={`menu_btn ${menu ? "close_btn" : ""}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuBtn;
