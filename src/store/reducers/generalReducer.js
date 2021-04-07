import {
  CHANGE_LP_PAGE,
  MENU_STATE,
  MESSAGE,
  SHOW_PROJECTS,
} from "../constans";
const initState = {
  lpPage: 0,
  menu: false,
  projectSection: false,
  message: {
    type: null,
    text: null,
  },
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
    case MESSAGE:
      return {
        ...state,
        message: {
          type: action.payload.type,
          text: action.payload.text,
        },
      };
    default:
      return state;
  }
};
export default generalReducer;
