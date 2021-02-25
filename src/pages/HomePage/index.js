import React from "react";
import "./index.scss";
const LeftContent = () => {
  return (
    <div className="home_left">
      <h1>FACET</h1>
      <h3>FINANCING EMOTIONS</h3>
      <p>Supporting investors and creators to finance impactful content.</p>
    </div>
  );
};
const RightContent = () => (
  <pre>
    Entertainment sits at the center of our daily lives. Become part of the
    story and help decide what is shown on our screens, big or small.
    <br />
    <br />
    How? Invest and support our impactful content creators.
    <br />
    <br />
    Are you a creative? Get in touch.
  </pre>
);

const homePage = {
  pageTitle: "PLATFORM",
  leftContent: <LeftContent />,
  rightContent: <RightContent />,
  pageClass: "home_page",
};

export default homePage;
