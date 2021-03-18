import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  CREATE_PROJECT,
  DELETE_REQUEST,
  EDIT_REQUEST,
} from "../constans";

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload: payload,
});
export const logOutRequest = (payload) => ({
  type: LOGOUT_REQUEST,
  payload: payload,
});
export const createProject = (payload) => ({
  type: CREATE_PROJECT,
  payload: payload,
});

export const deleteProject = (payload) => ({
  type: DELETE_REQUEST,
  payload: payload,
});
export const editProject = (payload) => ({
  type: EDIT_REQUEST,
  payload: payload,
});
