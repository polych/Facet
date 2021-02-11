import React from "react";
import "./index.scss";
import ProjBtn from "../UiComponents/ProjBtn";
import Scene2 from "../Scene/index2";

const Projects = () => {
  var pr = [];
  for (var i = 0; i < 19; i++) {
    pr = [...pr, <ProjBtn />];
  }
  return (
    <div className="projects_list">
      <Scene2 />
    </div>
  );
};

export default Projects;
