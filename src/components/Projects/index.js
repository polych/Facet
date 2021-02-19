import React from "react";
import "./index.scss";
import ProjBtn from "../UiComponents/ProjBtn";
import Scene from "../Scene";

const Projects = () => {
  var pr = [];
  for (var i = 0; i < 19; i++) {
    pr = [...pr, <ProjBtn />];
  }
  return (
    <div className="projects_list">
      <Scene />
    </div>
  );
};

export default Projects;
