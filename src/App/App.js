import React, { useEffect } from "react";
import LandingPage from "../pages/LandingPage";
import Logo from "../components/UiComponents/Logo";
import { useDispatch } from "react-redux";
import { setWindowWidth } from "../store/actions/generalAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setWindowWidth(window.innerWidth));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="app">
      <Logo />
      <LandingPage />
    </div>
  );
}

export default App;
