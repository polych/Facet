import React from "react";
import photo from "../../static/images/photo.png";
const LeftContent = () => {
  return (
    <pre className="wrap_mob">
      “At Facet, we believe investors should have a transparent way of investing
      into film and TV content. We also believe creators should have access to
      alternative ways of raising funds. We are excited we can deliver what
      investors want while simultaneously directing capital to ambitious
      creatives committed to their stories.” – Kanira, Founder of Facet.
      <br />
      <br />
      Kanira has built a successful career in Venture Capital working with funds
      such as DN Capital and backing & growing European leaders, including
      IoTech. Prior to that, she spent three years as a creative entrepreneur.
      She met hundreds of founders with great businesses but with a need for a
      better funding model. She also noticed that this phenomena was apparent in
      the entertainment industry: from the time it takes for a producer to raise
      funds to the lack of transparency in the process, often meaning that great
      projects that need a voice get abandoned.
      <br />
      <br />
      She holds an MBA from INSEAD and an MSc and MEng from Imperial College
      London.
    </pre>
  );
};
const AboutRight = () => (
  <div className="about_right_img">
    <img src={photo} alt="" />
  </div>
);

const about2 = {
  pageTitle: "ABOUT US",
  leftContent: <LeftContent />,
  rightContent: <AboutRight />,
  pageClass: "about_us_2",
};
export default about2;
