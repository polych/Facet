import { put } from "redux-saga/effects";
import { LOGIN_SUCCESS, ERROR } from "../constans";

export function* login({ payload }) {
  try {
    const response = yield payload.firebase.login(payload.values);
    yield put({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: ERROR,
      payload: error.message,
    });
  }
}
export function* logOut({ payload }) {
  try {
    const response = yield payload.logout();
  } catch (error) {
    console.log(error);
    yield put({
      type: ERROR,
      payload: error.message,
    });
  }
}

export function* createProject({
  payload: { values, firestore, firebase, history },
}) {
  try {
    const tempObj = { ...values };
    const tempImg = { ...values.tempImages };
    let globalId;
    let urls = {};
    delete tempObj.tempImages;
    const { id } = yield firestore.collection("projects").add(tempObj);
    globalId = id;
    for (const key in tempImg) {
      if (tempImg[key]) {
        const imgRef = firebase.storage().ref(`images/${globalId}/${key}`);
        yield imgRef.put(tempImg[key]);
        const url = yield imgRef.getDownloadURL();
        urls = {
          ...urls,
          [key]: url,
        };
      }
    }
    firestore
      .collection("projects")
      .doc(globalId)
      .update({ ...tempObj, images: urls });
    yield history.push("/admin");
  } catch (error) {
    console.log(error);
    yield put({
      type: ERROR,
      payload: error.message,
    });
  }
}
export function* editProject({
  payload: { values, firestore, firebase, projId, history },
}) {
  try {
    const tempObj = { ...values };
    const tempImg = { ...values.tempImages };
    let urls = {};
    delete tempObj.tempImages;
    for (const key in tempImg) {
      if (tempImg[key]) {
        const imgRef = firebase.storage().ref(`images/${projId}/${key}`);
        yield imgRef.put(tempImg[key]);
        const url = yield imgRef.getDownloadURL();
        urls = {
          ...urls,
          [key]: url,
        };
      }
    }
    firestore
      .collection("projects")
      .doc(projId)
      .update({ ...tempObj, images: { ...values.images, ...urls } });
    yield history.push("/admin");
  } catch (error) {
    console.log(error);
    yield put({
      type: ERROR,
      payload: error.message,
    });
  }
}
export function* deleteProject({ payload: { id, firestore, firebase } }) {
  try {
    const responce = yield firestore.collection("projects").doc(id).delete();
    const stor = firebase.storage().ref();
    const folder = stor.child(`/images/`).child(id);
    folder.listAll().then((result) => {
      result.items.forEach((file) => {
        file.delete();
      });
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: ERROR,
      payload: error.message,
    });
  }
}
