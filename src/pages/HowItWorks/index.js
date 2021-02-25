import React, { useState } from "react";
import "./index.scss";
import HowItWorksItem from "../../components/UiComponents/HowItWorksItem";
import Dot from "../../components/UiComponents/Dot";
import Arrow from "../../components/icons/Arrow";
const text = [
  <p>
    Accredited <span>producers</span> upload their projects to Facet.
  </p>,
  <p>
    Accredited <span>investors</span> can invest to support a project.
  </p>,
  <p>
    The <span>community</span> can contribute via rewards and voice their
    opinion.
  </p>,
];
const outPut = [
  "Producers tap into funding, an early fanbase/audience and free marketing.",
  "Facet curates which projects get on the platform.",
  "Investors gain a new pipeline of high-quality projects and diversify their investment portfolio.",
  "Facet helps to identify the projects most likely to strike a chord with audiences",
  "Community benefits from early access, rewards and a chance to shape what content is brought to our screens.",
  "Producers, Facet and investors all share in the upside.",
];
const HowItWorks = () => {
  const [state, setState] = useState(null);
  const handleHover = (index) => () => {
    setState(index);
  };
  const handleLeave = () => {
    setState(null);
  };
  return (
    <div className="how_works">
      <div className="how_works_info">{outPut[state]}</div>
      <div className="how_works_rows">
        <div className="how_works_block">
          <div
            className="info_1 info_block"
            onMouseOver={handleHover(0)}
            onMouseLeave={handleLeave}
          >
            <Dot />
            <HowItWorksItem text={text[0]} />
          </div>
          <div
            className="info_2 info_block"
            onMouseOver={handleHover(1)}
            onMouseLeave={handleLeave}
          >
            <Dot />
            <Arrow />
          </div>
          <div
            className="info_3 info_block"
            onMouseOver={handleHover(2)}
            onMouseLeave={handleLeave}
          >
            <HowItWorksItem text={text[1]} />
            <Dot />
          </div>
        </div>
        <div className="how_works_block">
          <div
            className="info_4 info_block"
            onMouseOver={handleHover(3)}
            onMouseLeave={handleLeave}
          >
            <Dot />
            <Arrow />
          </div>
          <div
            className="info_5 info_block"
            onMouseOver={handleHover(4)}
            onMouseLeave={handleLeave}
          >
            <HowItWorksItem text={text[2]} />
            <Dot />
          </div>
          <div
            className="info_6 info_block"
            onMouseOver={handleHover(5)}
            onMouseLeave={handleLeave}
          >
            <Dot />
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
};

const index = {
  leftContent: <HowItWorks />,
  pageTitle: "HOW IT WORKS",
  pageClass: "how_works_page",
};

export default index;
