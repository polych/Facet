import { CHANGE_LP_PAGE } from "../constans";
const initState = {
  lpPage: 0,
};
const generalReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LP_PAGE:
      return {
        ...state,
        lpPage: action.payload,
      };
    default:
      return state;
  }
};
export default generalReducer;
