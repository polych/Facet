import React from "react";
import PageWraper from "../PageWraper";
import "./index.scss";
import landingPages from "../../pages";

const LandingPage = () => {
  return (
    <div>
      <PageWraper
        leftContent={landingPages[5].leftContent}
        pageTitle={landingPages[5].pageTitle}
        rightContent={landingPages[5].rightContent}
      />
    </div>
  );
};

export default LandingPage;
