import React from "react";
import "./index.scss";
import {
  emailObj,
  nameObj,
  phoneNumberObj,
  messageObj,
  statusCreatorObj,
  statusInvestorObj,
} from "../../helpers/FormObjects";
import Form from "../../components/UiComponents/Form";
import { useDispatch } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { addMessage } from "../../store/actions/generalAction";

const initValues = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
  status: "",
};
const fields = [nameObj, emailObj, phoneNumberObj];
const radioBtns = [statusCreatorObj, statusInvestorObj];
const textAreas = [messageObj];
const ContactUs = (props) => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const handleClick = () => {
    return props.history.goBack();
  };
  const handleSubmit = (values) => {
    dispatch(addMessage(values, firestore));
  };
  return (
    <div className="contact_page">
      <div className="contact_page_content">
        <button type="button" className="exit_form" onClick={handleClick}>
          Exit
        </button>
        <h3>Sign-up for early access</h3>
        <Form
          fields={fields}
          initValues={initValues}
          submitValue="send"
          radioBtns={radioBtns}
          textAreas={textAreas}
          submitFunc={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ContactUs;
