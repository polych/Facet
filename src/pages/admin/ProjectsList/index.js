import React from "react";
import "./index.scss";
import ProjectItem from "../ProjectItem";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProjectsList = () => {
  useFirestoreConnect([{ collection: "projects" }]);
  const { projects } = useSelector((state) => state.firestore.data);
  const arr = [];
  for (let key in projects) {
    arr.push({ ...projects[key], id: key });
  }
  return (
    <div className="ad_poj_list">
      <div className="ad_proj_item ad_proj_item_new">
        <h4>Add New Project</h4>
        <div className="ad_proj_item_btns">
          <Link to="/admin/project/new">ADD</Link>
        </div>
      </div>
      {arr.map((el) => (
        <ProjectItem
          key={el.id}
          id={el.id}
          name={el.name}
          img={el.images.mainImg}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
