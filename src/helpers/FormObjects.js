import { v4 } from "uuid";
export const emailObj = {
  type: "email",
  name: "email",
  label: "Email",
  key: v4(),
};
export const passwordObj = {
  type: "password",
  name: "password",
  label: "Password",
  key: v4(),
};

export const nameObj = {
  type: "text",
  name: "name",
  label: "Name",
  key: v4(),
};

export const phoneNumberObj = {
  type: "tel",
  name: "phoneNumber",
  label: "Phone Number",
  key: v4(),
};
export const messageObj = {
  type: "text",
  name: "message",
  label: "Your message",
  placeholder: "Your message",
  key: v4(),
};

export const statusCreatorObj = {
  type: "radio",
  name: "status",
  value: "creator",
  label: "I’m a creator",
  key: v4(),
};
export const statusInvestorObj = {
  type: "radio",
  name: "status",
  value: "investor",
  label: "I’m an investor",
  key: v4(),
};
