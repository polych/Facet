import React from "react";
import "./index.scss";
const InputField = React.memo(
  ({ type, name, label, placeholder, onChange, value, erorr, touched }) => {
    const fieldClass = `input_field_wrap ${
      value || (touched && erorr) ? "input_field_wrap_active" : ""
    }`;
    return (
      <>
        <div className={fieldClass}>
          <label htmlFor={name + type}>
            {touched && erorr ? (
              <span className="field_error">{erorr}</span>
            ) : (
              <span>{label}</span>
            )}
          </label>
          <div className="input_field">
            <input
              id={name + type}
              name={name}
              type={type}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
            />
          </div>
        </div>
      </>
    );
  }
);
export default InputField;
