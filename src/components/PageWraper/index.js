import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Menu from "../Menu";
import Projects from "../Projects";
import MenuBtn from "../UiComponents/MenuBtn";
import PageTitle from "../UiComponents/PageTitle";
import ProjectBtn from "../UiComponents/ProjectBtn";
import RoundBtn from "../UiComponents/RoundBtn";
import "./index.scss";

const PageWraper = ({ leftContent, rightContent, pageTitle, pageClass }) => {
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
          <RoundBtn value="get in touch" className="big_btn get_touch" />
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              key={pageTitle}
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
