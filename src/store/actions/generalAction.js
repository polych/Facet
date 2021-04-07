import {
  CHANGE_LP_PAGE,
  MENU_STATE,
  SHOW_PROJECTS,
  MESSAGE,
  ADD_MESSAGE,
} from "../constans";

export const changeLpPage = (page) => ({
  type: CHANGE_LP_PAGE,
  payload: page,
});

export const menuAction = (val) => ({
  type: MENU_STATE,
  payload: val,
});
export const showProjects = (val) => ({
  type: SHOW_PROJECTS,
  payload: val,
});

export const messageAction = (payload) => ({
  type: MESSAGE,
  payload: payload,
});

export const addMessage = (values, firestore) => ({
  type: ADD_MESSAGE,
  payload: {
    values,
    firestore,
  },
});
