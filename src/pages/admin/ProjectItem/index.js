import React from "react";
import { useDispatch } from "react-redux";
import { useFirebase, useFirestore } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { deleteProject } from "../../../store/actions/admin";

const ProjectItem = ({ img, id, name }) => {
  const firestore = useFirestore();
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const handleCLick = () => {
    dispatch(deleteProject({ id, firebase, firestore }));
  };
  return (
    <div className="ad_proj_item">
      <div className="just_center">
        <img src={img} alt="" />
        <h5>{name}</h5>
      </div>
      <div className="ad_proj_item_btns">
        <Link to={`/admin/project/${id}`}>Open</Link>
        <button type="button" className="del_btn" onClick={handleCLick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
