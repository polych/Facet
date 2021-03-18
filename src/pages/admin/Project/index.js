import React, { useEffect } from "react";
import { useFormik } from "formik";
import "./index.scss";
import {
  initValues,
  textFlow,
  textFlow2,
} from "../../../helpers/projectObjects";
import { useDispatch } from "react-redux";
import { useFirebase, useFirestore } from "react-redux-firebase";

const placeholder = "Write some text";

const Project = ({ project, actionProps, projId, history }) => {
  const dispatch = useDispatch();
  const firestore = useFirestore();
  const firebase = useFirebase();
  useEffect(() => {
    document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);
  const formik = useFormik({
    initialValues: { ...initValues, ...project },
    onSubmit: (values) => {
      const payload = { values, firestore, firebase, projId, history };
      dispatch(actionProps(payload));
    },
  });
  const fileChange = (event) => {
    formik.setFieldValue(`tempImages`, {
      ...formik.values.tempImages,
      [event.target.name]: event.target.files[0],
    });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="project_open project_admin">
        <label className="ad_main_img">
          <input
            type="file"
            name="mainImg"
            accept="image/png, image/jpeg"
            onChange={fileChange}
            required={!projId}
          />
          Image for ball
        </label>
        <div className="container">
          <div className="project_title">
            <h1>
              <input
                type="text"
                name="name"
                placeholder="Title"
                onChange={formik.handleChange}
                value={formik.values["name"]}
              />
            </h1>
          </div>
        </div>
        <div className="max_600 container">
          <textarea
            type="text"
            name="titleDescr"
            placeholder={placeholder}
            onChange={formik.handleChange}
            value={formik.values["titleDescr"]}
          />
        </div>
        <div className="container_2">
          <div className="image_left_capt">
            <h4>
              <textarea
                type="text"
                name="text1"
                placeholder={placeholder}
                onChange={formik.handleChange}
                value={formik.values["text1"]}
              />
            </h4>
            <div className="image_left_capt_img image_input">
              <input
                type="file"
                name="img1"
                accept="image/png, image/jpeg"
                onChange={fileChange}
              />
            </div>
          </div>
          <div className="circle_info">
            <h3>
              <input
                type="text"
                name="text2"
                placeholder={placeholder}
                onChange={formik.handleChange}
                value={formik.values["text2"]}
              />
            </h3>
            <p>
              <textarea
                name="text3"
                placeholder={placeholder}
                onChange={formik.handleChange}
                value={formik.values["text3"]}
              />
            </p>
          </div>
          <div className="just_btwn block_2">
            <div className="max_500">
              <h5>
                <textarea
                  type="text"
                  name="text4"
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  value={formik.values["text4"]}
                />
              </h5>
            </div>
            <div>
              <h3>
                <input
                  type="text"
                  name="text5"
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  value={formik.values["text5"]}
                />
              </h3>
              <textarea
                type="text"
                name="text6"
                placeholder={placeholder}
                onChange={formik.handleChange}
                value={formik.values["text6"]}
              />
            </div>
          </div>
        </div>
        <div className=" block_3">
          <div className="container">
            <div className="text_flow">
              <h4>
                <input
                  type="text"
                  name="text7"
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  value={formik.values["text7"]}
                />
              </h4>
              <div className="just_btwn">
                <p className="width_50">
                  <textarea
                    type="text"
                    name="text8"
                    placeholder={placeholder}
                    onChange={formik.handleChange}
                    value={formik.values["text8"]}
                  />
                </p>
                <p className="width_50">
                  <textarea
                    type="text"
                    name="text9"
                    placeholder={placeholder}
                    onChange={formik.handleChange}
                    value={formik.values["text9"]}
                  />
                </p>
              </div>
            </div>
            {textFlow.map(({ title, text }) => (
              <div className="text_flow" key={text + title}>
                <h4>
                  <input
                    type="text"
                    name={title}
                    placeholder={placeholder}
                    onChange={formik.handleChange}
                    value={formik.values[title]}
                  />
                </h4>
                <p>
                  <textarea
                    type="text"
                    name={text}
                    placeholder={placeholder}
                    onChange={formik.handleChange}
                    value={formik.values[text]}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="block_imgs">
          <div className="just_btwn">
            <div className="two_sm_img">
              <div>
                <div className=" image_input">
                  <input
                    type="file"
                    name="img2"
                    accept="image/png, image/jpeg"
                    onChange={fileChange}
                  />
                </div>
              </div>
              <div>
                <div className="image_input">
                  <input
                    type="file"
                    name="img3"
                    accept="image/png, image/jpeg"
                    onChange={fileChange}
                  />
                </div>
              </div>
            </div>
            <div className="sm_img_cations">
              <div className="sm_img_right">
                <div className="image_input">
                  <input
                    type="file"
                    name="img4"
                    accept="image/png, image/jpeg"
                    onChange={fileChange}
                  />
                </div>
              </div>
              <h3>
                <input
                  type="text"
                  name="text18"
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  value={formik.values["text18"]}
                />
              </h3>
            </div>
          </div>
          <div className="block_imgs_big">
            <div className="image_input">
              <input
                type="file"
                name="img5"
                accept="image/png, image/jpeg"
                onChange={fileChange}
              />
            </div>
          </div>
        </div>
        <div className="block_4">
          <div className="container">
            <div className="circle_bg"></div>
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="max_600">
              <h4>
                <input
                  type="text"
                  name="text19"
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  value={formik.values["text19"]}
                />
              </h4>
              <p>
                <textarea
                  type="text"
                  name="text20"
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  value={formik.values["text20"]}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="block_imgs_2">
          <div>
            <div className="image_input">
              <input
                type="file"
                name="img6"
                accept="image/png, image/jpeg"
                onChange={fileChange}
              />
            </div>
          </div>
          <div>
            <div className="image_input">
              <input
                type="file"
                name="img7"
                accept="image/png, image/jpeg"
                onChange={fileChange}
              />
            </div>
          </div>
        </div>
        <div className="container">
          {textFlow2.length > 0 && (
            <div className="text_flow_2">
              {textFlow2.map(({ title, text }) => (
                <div key={text + title}>
                  <h4>
                    <input
                      type="text"
                      name={title}
                      placeholder={placeholder}
                      onChange={formik.handleChange}
                      value={formik.values[title]}
                    />
                  </h4>
                  <p>
                    <textarea
                      type="text"
                      name={text}
                      placeholder={placeholder}
                      onChange={formik.handleChange}
                      value={formik.values[text]}
                    />
                  </p>
                </div>
              ))}
              <div className={`text_flow_2_add_info`}>
                <p>
                  <textarea
                    type="text"
                    name="text31"
                    placeholder={placeholder}
                    onChange={formik.handleChange}
                    value={formik.values["text31"]}
                  />
                </p>
              </div>
            </div>
          )}
        </div>
        <footer>
          <div className="container_2">
            <div className="just_btwn">
              <div className="footer_text max_600">
                <h3>
                  <input
                    type="text"
                    name="text32"
                    placeholder={placeholder}
                    onChange={formik.handleChange}
                    value={formik.values["text32"]}
                  />
                </h3>
                <p>
                  <textarea
                    type="text"
                    name="text33"
                    placeholder={placeholder}
                    onChange={formik.handleChange}
                    value={formik.values["text33"]}
                  />
                </p>
                <div className="iveste_form">
                  <p>
                    <input
                      type="number"
                      name="invested"
                      placeholder="Invested"
                      onChange={formik.handleChange}
                      value={formik.values["ivested"]}
                    />
                  </p>
                  <p>
                    <input
                      type="number"
                      name="need"
                      placeholder="Required funds"
                      onChange={formik.handleChange}
                      value={formik.values["need"]}
                    />
                  </p>
                </div>
              </div>
              <div className="get_in_touch_wrap">
                <button type="submit" className="big_btn get_touch">
                  Save Project
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </form>
  );
};

export default Project;
