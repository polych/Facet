import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { editProject } from "../../../store/actions/admin";
import Project from "../Project";

const ProjEdit = ({ match, history }) => {
  useFirestoreConnect([{ collection: "projects", doc: match.params.id }]);
  const proj = useSelector(
    ({ firestore: { data } }) => data.projects && data.projects[match.params.id]
  );
  return (
    <Project
      project={proj}
      actionProps={editProject}
      projId={match.params.id}
      history={history}
    />
  );
};

export default ProjEdit;
