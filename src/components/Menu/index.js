import React from "react";
import "./index.scss";

const Menu = () => {
  return (
    <ul className="menu">
      <li>
        <button type="button">about us</button>
      </li>
      <li>
        <button type="button">for investors</button>
      </li>
      <li>
        <button type="button">for creators</button>
      </li>
      <li>
        <button type="button">FQA</button>
      </li>
    </ul>
  );
};

export default Menu;
