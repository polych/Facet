import React from "react";
import "./index.scss";
import ProjBtn from "../UiComponents/ProjBtn";
import Scene from "../Scene";
import { useSelector } from "react-redux";

const Projects = () => {
  const { projectSection } = useSelector((state) => state.general);
  var pr = [];
  for (var i = 0; i < 19; i++) {
    pr = [...pr, <ProjBtn />];
  }
  return (
    <div
      className={`projects_list ${
        projectSection ? "projects_list_active" : ""
      }`}
    >
      <Scene />
    </div>
  );
};

export default Projects;
