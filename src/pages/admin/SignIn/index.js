import React from "react";
import { emailObj, passwordObj } from "../../../helpers/FormObjects";
import Form from "../../../components/UiComponents/Form";
import { useFirebase } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { loginRequest } from "../../../store/actions/admin";

const initValues = {
  email: "",
  password: "",
};
const fields = [emailObj, passwordObj];

const ContactUs = (props) => {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const { isEmpty } = useSelector((state) => state.firebase.auth);
  const handleClick = () => {
    return props.history.goBack();
  };
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(
      loginRequest({
        firebase,
        values,
      })
    );
  };
  if (!isEmpty) {
    return <Redirect to="/admin" />;
  }
  return (
    <div className="contact_page">
      <div className="contact_page_content">
        <button type="button" className="exit_form" onClick={handleClick}>
          Exit
        </button>
        <h3>Sign-in for admin access</h3>
        <Form
          fields={fields}
          initValues={initValues}
          submitValue="send"
          submitFunc={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ContactUs;
