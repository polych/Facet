import React, { useEffect } from "react";
import "./index.scss";
import ProjBtn from "../UiComponents/ProjBtn";
import Scene from "../Scene";
import { useSelector } from "react-redux";
import { viewHeight } from "../../helpers/general";
import { useFirestoreConnect } from "react-redux-firebase";

const Projects = () => {
  useFirestoreConnect([{ collection: "projects" }]);
  const {
    general: { projectSection },
    firestore: { data },
  } = useSelector((state) => state);
  var pr = [];
  for (var i = 0; i < 19; i++) {
    pr = [...pr, <ProjBtn />];
  }
  useEffect(() => {
    viewHeight();
  }, [projectSection]);
  return (
    <div
      className={`projects_list ${
        projectSection ? "projects_list_active" : ""
      }`}
    >
      <Scene projects={data.projects} />
    </div>
  );
};

export default Projects;
