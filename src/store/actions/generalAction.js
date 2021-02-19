import { CHANGE_LP_PAGE } from "../constans";

export const changeLpPage = (page) => ({
  type: CHANGE_LP_PAGE,
  payload: page,
});

export const setWindowWidth = (width) => ({
  type: CHANGE_LP_PAGE,
  payload: width,
});
