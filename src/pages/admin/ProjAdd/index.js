import React from "react";
import Project from "../Project";
import { createProject } from "../../../store/actions/admin";

const ProjAdd = ({ history }) => {
  return <Project actionProps={createProject} history={history} />;
};

export default ProjAdd;
