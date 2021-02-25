import {
  CHANGE_LP_PAGE,
  SET_WINDOW_WIDTH,
  MENU_STATE,
  SHOW_PROJECTS,
} from "../constans";

export const changeLpPage = (page) => ({
  type: CHANGE_LP_PAGE,
  payload: page,
});

export const setWindowWidth = (width) => ({
  type: SET_WINDOW_WIDTH,
  payload: width,
});

export const menuAction = (val) => ({
  type: MENU_STATE,
  payload: val,
});
export const showProjects = (val) => ({
  type: SHOW_PROJECTS,
  payload: val,
});
