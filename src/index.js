import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from "firebase";
import { firebaseConfig } from "./store/fb";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import App from "./App/App";
import "./static/styles/general.scss";
import store from "./store";

const routerBaseName = process.env.PUBLIC_URL;
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};
ReactDOM.render(
  <React.StrictMode>
    <Router basename={routerBaseName}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Provider store={store}>
          <App />
        </Provider>
      </ReactReduxFirebaseProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
