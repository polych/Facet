import React from "react";
import Facebook from "../icons/Facebook";
import Inst from "../icons/Inst";
import Twitter from "../icons/Twitter";
import RoundBtn from "../UiComponents/RoundBtn";
const FixedFooter = ({ invested, needToInvest }) => {
  const InwestedProgress = (invested * 100) / needToInvest;
  // let width = 0;
  // const InwestedProgress = () => {
  //   setTimeout(() => {
  //     width = (invested * 100) / needToInvest;
  //   }, 1000);
  // };
  return (
    <div className="fixed_footer">
      <div className="invested">
        <div className="invested_bar">
          <span style={{ width: `${InwestedProgress}%` }}></span>
          <span style={{ left: `calc(${InwestedProgress}% - 12px)` }}></span>
        </div>
        <div className="invested_now">
          <span>${invested} invested</span>
        </div>
        <span className="invested_sum">
          <span>${needToInvest} needed</span>
        </span>
      </div>
      <div className="align_center">
        <div className="fixed_footer_soc">
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <Inst />
          </a>
        </div>
        <RoundBtn value="invest" className="sm_btn" />
      </div>
    </div>
  );
};

export default FixedFooter;
