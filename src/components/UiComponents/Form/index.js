import React from "react";
import { useFormik } from "formik";
import InputField from "../InputField";
import ValidationRules from "../../../helpers/ValidationRules";
import Radio from "../Radio";

const Form = ({
  fields,
  initValues,
  submitValue,
  radioBtns,
  submitFunc,
  textAreas,
}) => {
  const formik = useFormik({
    initialValues: initValues,
    validationSchema: ValidationRules(initValues),
    onSubmit: (values) => {
      submitFunc(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {radioBtns && radioBtns.length > 0 && (
        <div className="radio_btns">
          {radioBtns.map((el) => (
            <Radio
              label={el.label}
              value={el.value}
              name={el.name}
              key={el.key}
              change={formik.handleChange}
              checked={formik.values.status === el.value}
            />
          ))}
        </div>
      )}
      {fields &&
        fields.map((el) => (
          <InputField
            key={el.key}
            type={el.type}
            name={el.name}
            label={el.label}
            placeholder={el.placeholder}
            onChange={formik.handleChange}
            value={formik.values[el.name]}
            erorr={formik.errors[el.name]}
            touched={formik.touched[el.name]}
          />
        ))}
      {textAreas &&
        textAreas.map((el) => (
          <textarea
            key={el.key}
            name={el.name}
            label={el.label}
            placeholder={el.placeholder}
            onChange={formik.handleChange}
            value={formik.values[el.name]}
          />
        ))}
      <button type="submit">{submitValue}</button>
    </form>
  );
};
export default Form;
