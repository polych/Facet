import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Menu from "../Menu";
import Projects from "../Projects";
import MenuBtn from "../UiComponents/MenuBtn";
import PageTitle from "../UiComponents/PageTitle";
import ProjectBtn from "../UiComponents/ProjectBtn";
import RoundBtn from "../UiComponents/RoundBtn";
import "./index.scss";

const PageWraper = ({ leftContent, rightContent, pageTitle, pageClass }) => {
  const { isEmpty } = useSelector((state) => state.firebase.auth);
  return (
    <div className="p_20">
      <div className={`page_wraper ${pageClass ? pageClass : ""}`}>
        <div className="page_wraper_content">
          {window.innerWidth < 768 ? (
            <>
              <ProjectBtn />
              <MenuBtn />
            </>
          ) : null}

          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              key={pageTitle + rightContent}
            >
              <div className="left_content">
                <div className="overflow_wrap">{leftContent}</div>
              </div>
            </CSSTransition>
          </SwitchTransition>
          <div className="right_content_wrap">
            <div className="right_content">
              <SwitchTransition>
                <CSSTransition
                  classNames="fade"
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                  key={pageTitle}
                >
                  <>{rightContent}</>
                </CSSTransition>
              </SwitchTransition>
            </div>
          </div>
          {isEmpty ? (
            <RoundBtn value="get in touch" className="big_btn get_touch" />
          ) : (
            <Link to="/admin" className="big_btn get_touch">
              Admin
            </Link>
          )}
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              key={pageTitle + rightContent}
            >
              <PageTitle title={pageTitle} />
            </CSSTransition>
          </SwitchTransition>
          <Projects />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default PageWraper;
