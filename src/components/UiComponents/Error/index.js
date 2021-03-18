import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { errorAction } from "../../../store/actions/generalAction";
import "./index.scss";

const Error = ({ error }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(errorAction(null));
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div className="error">{error}</div>;
};

export default Error;
