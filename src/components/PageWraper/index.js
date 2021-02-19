import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Menu from "../Menu";
import Projects from "../Projects";
import PageTitle from "../UiComponents/PageTitle";
import RoundBtn from "../UiComponents/RoundBtn";
import "./index.scss";

const PageWraper = ({ leftContent, rightContent, pageTitle }) => {
  return (
    <div className="p_20">
      <div className="page_wraper">
        <div className="page_wraper_content">
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
            <RoundBtn value="get in touch" className="big_btn" />
          </div>
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
