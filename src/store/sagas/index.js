import { takeLatest } from "redux-saga/effects";
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  CREATE_PROJECT,
  DELETE_REQUEST,
  EDIT_REQUEST,
  ADD_MESSAGE,
} from "../constans";
import { addMessage } from "./general";
import {
  createProject,
  deleteProject,
  editProject,
  login,
  logOut,
} from "./admin";

export default function* watchAll() {
  yield takeLatest(CREATE_PROJECT, createProject);
  yield takeLatest(DELETE_REQUEST, deleteProject);
  yield takeLatest(EDIT_REQUEST, editProject);
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT_REQUEST, logOut);
  yield takeLatest(ADD_MESSAGE, addMessage);
}
