import React from "react";
import "./index.scss";
import {
  emailObj,
  firstNameObj,
  phoneNumberObj,
  messageObj,
  statusCreatorObj,
  statusInvestorObj,
} from "../../helpers/FormObjects";
import Form from "../../components/UiComponents/Form";

const initValues = {
  firstName: "",
  password: "",
  email: "",
  phoneNumber: "",
  message: "",
  status: "",
};
const fields = [firstNameObj, emailObj, phoneNumberObj, messageObj];
const radioBtns = [statusCreatorObj, statusInvestorObj];

const ContactUs = (props) => {
  const handleClick = () => {
    return props.history.goBack();
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
        />
      </div>
    </div>
  );
};

export default ContactUs;
