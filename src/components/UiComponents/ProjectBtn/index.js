import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProjects } from "../../../store/actions/generalAction";
import "./index.scss";
const ProjectBtn = () => {
  const { projectSection } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showProjects(!projectSection));
  };
  return (
    <button className="project_btn" onClick={handleClick}>
      projects
    </button>
  );
};

export default ProjectBtn;
