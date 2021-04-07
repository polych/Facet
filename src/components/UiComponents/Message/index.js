import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { messageAction } from "../../../store/actions/generalAction";
import "./index.scss";

const Message = ({ message: { type, text } }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(messageAction({ text: null, type: null }));
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const messageType = type === "error" ? "message_error" : "message_succes";
  return <div className={`message ${messageType}`}>{text}</div>;
};

export default Message;
