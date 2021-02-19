import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { changeLpPage } from "../../store/actions/generalAction";
import "./index.scss";
const menuItems = [
  {
    label: "about us",
    value: 1,
  },
  {
    label: "for investors",
    value: 4,
  },
  {
    label: "for creators",
    value: 5,
  },
  {
    label: "FAQ",
    value: 6,
  },
];

const Menu = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.general.lpPage);
  const handleClick = (value) => () => {
    dispatch(changeLpPage(value));
  };
  const activeState = (value) =>
    page === value || (page === 2 && value === 1) ? "active_link" : "";
  return (
    <ul className="menu">
      {menuItems.map(({ label, value }) => (
        <li key={v4()}>
          <button
            type="button"
            onClick={handleClick(value)}
            className={activeState(value)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
