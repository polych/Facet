import { CHANGE_LP_PAGE, MENU_STATE, SHOW_PROJECTS } from "../constans";
const initState = {
  lpPage: 4,
  menu: false,
  projectSection: false,
};
const generalReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LP_PAGE:
      return {
        ...state,
        lpPage: action.payload,
      };
    case MENU_STATE:
      return {
        ...state,
        menu: action.payload,
        projectSection: false,
      };
    case SHOW_PROJECTS:
      return {
        ...state,
        projectSection: action.payload,
      };
    default:
      return state;
  }
};
export default generalReducer;
