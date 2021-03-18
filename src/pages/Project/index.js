import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import TextBlock from "../../components/UiComponents/TextBlock";
import RoundBtn from "../../components/UiComponents/RoundBtn";
import "./index.scss";
import { Link } from "react-router-dom";
import ArrowLine from "../../components/icons/ArrowLine";
import FixedFooter from "../../components/FixedFooter";
import arrow from "../../static/images/arr.svg";
import { initValues } from "../../helpers/projectObjects";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Project = ({ history, match }) => {
  useFirestoreConnect([{ collection: "projects" }]);
  const [project, setProject] = useState(initValues);
  const proj = useSelector(
    ({ firestore: { data } }) => data.projects && data.projects[match.params.id]
  );
  const arr = useSelector((state) => state.firestore.data.projects);
  const [links, setLinks] = useState();
  const [index, setIndex] = useState();
  useEffect(() => {
    setProject({ ...initValues, ...proj });
    if (arr) {
      let a = Object.keys(arr);
      setLinks(a);
      setIndex(a.indexOf(match.params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [proj, match.params.id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [match.params.id]);

  const handleClick = () => {
    return history.goBack();
  };
  const {
    name,
    titleDescr,
    invested,
    need,
    images: { img1, img2, img3, img4, img5, img6, img7 },
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
    text9,
    text10,
    text11,
    text12,
    text13,
    text14,
    text15,
    text16,
    text17,
    text18,
    text19,
    text20,
    text21,
    text22,
    text23,
    text24,
    text25,
    text26,
    text27,
    text28,
    text29,
    text30,
    text31,
    text32,
    text33,
  } = project;

  const textFlow = [
    { title: text10, text: text11, key: v4() },
    { title: text12, text: text13, key: v4() },
    { title: text14, text: text15, key: v4() },
    { title: text16, text: text17, key: v4() },
  ];
  const textFlow2 = [
    { title: text21, text: text22, key: v4() },
    { title: text23, text: text24, key: v4() },
    { title: text25, text: text26, key: v4() },
    { title: text27, text: text28, key: v4() },
    { title: text29, text: text30, key: v4() },
  ];
  return (
    <div className="project_open">
      <div className="project_open_header">
        <button type="button" onClick={handleClick}>
          <img src={arrow} alt="" />
          Back
        </button>
      </div>
      <FixedFooter invested={invested} needToInvest={need} />
      <div className="container">
        <div className="project_title">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="max_600 container">
        <TextBlock text={titleDescr} />
      </div>
      <div className="container_2">
        <div className="image_left_capt">
          <h4>
            <pre>{text1}</pre>
          </h4>
          {img1 && (
            <div className="image_left_capt_img">
              <img src={`${img1}`} alt="" />
            </div>
          )}
        </div>
        {text2 || text3 ? (
          <div className="circle_info">
            <h3>
              <pre>{text2}</pre>
            </h3>
            <pre>{text3}</pre>
          </div>
        ) : (
          <></>
        )}
        <div className="just_btwn block_2">
          <div className="max_500">
            <h5>
              <pre>{text4}</pre>
            </h5>
          </div>
          <div className="block_2_right">
            <div className="lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>
              <pre>{text5}</pre>
            </h3>
            <TextBlock text={text6} />
          </div>
        </div>
      </div>
      <div className=" block_3">
        <div className="container">
          <div className="text_flow">
            <h4>
              <pre>{text7}</pre>
            </h4>
            <div className="just_btwn">
              <TextBlock text={text8} cols={6} />
              <TextBlock text={text9} cols={6} />
            </div>
          </div>
          {textFlow.map((el) =>
            el.title || el.text ? (
              <div className="text_flow" key={el.key}>
                <TextBlock text={el.text} title={el.title} />
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="block_imgs">
        <div className="just_btwn">
          <div className="two_sm_img">
            {img2 && (
              <div>
                <img src={img2} alt="" />
              </div>
            )}
            {img3 && (
              <div>
                <img src={img3} alt="" />
              </div>
            )}
          </div>

          <div className="sm_img_cations">
            {img4 && (
              <div className="sm_img_right">
                <img src={img4} alt="" />
              </div>
            )}
            <h3>
              <pre>{text18}</pre>
            </h3>
          </div>
        </div>
        {img5 && (
          <div className="block_imgs_big">
            <img src={img5} alt="" />
          </div>
        )}
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
            <TextBlock text={text20} title={text19} />
          </div>
        </div>
      </div>
      <div className="block_imgs_2">
        {img6 ? (
          <div>
            <img src={img6} alt="" />
          </div>
        ) : (
          <></>
        )}
        {img7 && (
          <div>
            <img src={img7} alt="" />
          </div>
        )}
      </div>

      <div className="container">
        {textFlow2.length > 0 && (
          <div className="text_flow_2">
            {textFlow2.map((el) => (
              <TextBlock title={el.title} text={el.text} key={el.key} />
            ))}
            {text31 && (
              <div
                className={`text_flow_2_add_info ${
                  textFlow2.length % 2 === 0 ? "text_flow_2_add_info_stat" : ""
                }`}
              >
                <pre>{text31}</pre>
              </div>
            )}
          </div>
        )}
      </div>
      <footer>
        <div className="container_2">
          <div className="just_btwn">
            <div className="footer_text max_600">
              <h3>
                <pre>{text32}</pre>
              </h3>
              <pre>{text33}</pre>
            </div>
            <div className="get_in_touch_wrap">
              <RoundBtn value="get in touch" className="big_btn get_touch" />
            </div>
          </div>
          <div className="footer_btns">
            {links && links[index - 1] && (
              <Link to={`/project/${links[index - 1]}`} className="proj_link">
                <ArrowLine />
                <h3>PREVIOUS PROJECT</h3>
              </Link>
            )}
            {links && links[index + 1] && (
              <Link to={`/project/${links[index + 1]}`} className="proj_link">
                <h3>NEXT PROJECT</h3>
                <ArrowLine next={true} />
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Project;
