import { PROJECT_PREV } from "../constans";
import { initValues as ProjectInit } from "../../helpers/projectObjects";

const pr = localStorage.getItem("project");
const initState = {
  token: null,
  project: pr ? pr : ProjectInit,
};
const AdminReducer = (state = initState, action) => {
  switch (action.type) {
    case PROJECT_PREV:
      return {
        ...state,
        project: {
          ...initState.project,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
export default AdminReducer;
