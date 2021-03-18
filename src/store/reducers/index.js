import { combineReducers } from "redux";
import general from "./generalReducer";
import admin from "./AdminReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
const rootReducer = combineReducers({
  general,
  admin,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
