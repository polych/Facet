import * as Yup from "yup";

const nameValid = (value) => /^[a-z ,.'-]+$/i.test(value);
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SchemaConfig = {
  firstName: Yup.string()
    .test("Name format", "Name format is not valid", nameValid)
    .required("Name required"),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number required"),
  email: Yup.string().required("Email required").email("Wrong email format"),
  //
  lastName: Yup.string()
    .test("Name format", "Last name format is not valid", nameValid)
    .required("Fill this field"),
  password: Yup.string()
    .required("Fill this field")
    .min(8, "Password must be at least 8 characters"),
  passwordConfirmation: Yup.string()
    .required("Fill this field")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
};

const ValidationRules = (initValues) => {
  const filtered = Object.keys(SchemaConfig)
    .filter((key) => Object.keys(initValues).includes(key))
    .reduce((obj, key) => {
      obj[key] = SchemaConfig[key];
      return obj;
    }, {});
  return Yup.object().shape(filtered);
};
export default ValidationRules;
