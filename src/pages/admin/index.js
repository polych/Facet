import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import ProjAdd from "./ProjAdd";
import ProjectsList from "./ProjectsList";
import ProjEdit from "./ProjEdit";

const Admin = () => {
  const {
    firebase: { auth },
  } = useSelector((state) => state);
  if (auth.isEmpty) {
    return <Redirect to="/signin" />;
  }
  return (
    <Switch>
      <Route exact={true} path="/admin" component={ProjectsList} />
      <Route path="/admin/project/new" component={ProjAdd} />
      <Route path="/admin/project/:id" component={ProjEdit} />
    </Switch>
  );
};

export default Admin;
