import React from "react";
import { useDispatch } from "react-redux";
import { useFirebase } from "react-redux-firebase";
import { logOutRequest } from "../../../store/actions/admin";

const LogOut = () => {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOutRequest(firebase));
  };
  return (
    <button type="button" className="sm_btn log_out " onClick={handleClick}>
      Log Out
    </button>
  );
};

export default LogOut;
