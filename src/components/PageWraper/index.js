import React from "react";
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
          <div className="left_content">{leftContent}</div>
          <div className="right_content_wrap">
            <div className="right_content">{rightContent}</div>
            <RoundBtn value="get in touch" className="big_btn" />
          </div>
          <PageTitle title={pageTitle} />
          <Projects />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default PageWraper;
