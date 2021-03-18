import React from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "../pages/LandingPage";
import Logo from "../components/UiComponents/Logo";
import ContactUs from "../pages/ContactUs";
import Project from "../pages/Project";
import SignIn from "../pages/admin/SignIn";
import LogOut from "../components/UiComponents/LogOut";
import Admin from "../pages/admin";
import Error from "../components/UiComponents/Error";

const App = () => {
  const {
    firebase: { auth },
    general: { error },
  } = useSelector((state) => state);
  return (
    <div className="app">
      <Logo />
      {error && <Error error={error} />}
      {!auth.isEmpty && <LogOut />}
      <Switch>
        <Route path="/contact" component={ContactUs} />
        <Route path="/project/:id" component={Project} />
        <Route exact={true} path="/" component={LandingPage} />
        <Route path="/admin" component={Admin} />
        <Route exact={false} path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
};

export default App;
