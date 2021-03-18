import { call, put } from "redux-saga/effects";
import { PROJECTS_SUCCES, ERROR } from "../constans";
import API from "../Api";

export function* fetchProjects(action) {
  try {
    const response = yield call(API.getProjects);
    yield put({
      type: PROJECTS_SUCCES,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: ERROR,
      payload: error.message,
    });
  }
}
