import {
  CHANGE_LP_PAGE,
  MENU_STATE,
  SHOW_PROJECTS,
  PROJECTS_REQUEST,
  ERROR,
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
export const fetchProjects = (val) => ({
  type: PROJECTS_REQUEST,
});

export const errorAction = () => ({
  type: ERROR,
  payload: null,
});
