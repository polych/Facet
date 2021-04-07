import { put } from "redux-saga/effects";
import { MESSAGE } from "../constans";

export function* addMessage({ payload: { values, firestore } }) {
  try {
    yield firestore.collection("messages").add(values);
    yield put({
      type: MESSAGE,
      payload: {
        type: "",
        text: "Your request has been sent",
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: MESSAGE,
      payload: {
        type: "err",
        text: error.message,
      },
    });
  }
}
