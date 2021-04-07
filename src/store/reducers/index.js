import { combineReducers } from "redux";
import general from "./generalReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
const rootReducer = combineReducers({
  general,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
