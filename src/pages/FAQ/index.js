import React from "react";
import "./index.scss";
import Collapase from "../../components/UiComponents/Collapse";
import { v4 as uuidv4 } from "uuid";
import chart from "../../static/images/chart.svg";
import chart2 from "../../static/images/chart2.svg";
import table from "../../static/images/table.svg";
const content1 = (
  <div>
    <p>
      As new over-the-top (OTT) services challenge the global dominance of
      streaming giants, consumer viewing habits will shift as global spending on
      TV content climbs throughout the forecast period. Historically,
      entertainment asset performance had no relationship to the macro-economic
      trends and with Covid-19, OTT video has been a natural beneficiary of
      changed circumstances, with revenues jumping 18.6% in 2020 to £1.6bn and
      predicted to rise to £2.3bn by 2024*. Local production will be bolstered
      over the forecast period as many territories demand streamers show a
      certain amount of local content.
    </p>
    <br />
    <p>New OTT services drive global revenue growth</p>
    <p>
      OTT video revenue growth vs TV subscription revenue, 2019-2014 (US$bn)
    </p>
    <br />
    <img src={chart} alt="" />
    <ul className="chart_info">
      <li>
        <div className="circle_1"></div>
        <span>Total global OTT video revenues</span>
      </li>
      <li>
        <div className="circle_2"></div>
        <span>Total Global TV subscription revenues</span>
      </li>
      <li>
        <div className="circle_3"></div>
        <span>Total global traditional TV revenue</span>
      </li>
      <li>
        <div className="circle_4"></div>
        <span>US TV subscription revenue</span>
      </li>
    </ul>
    <p>Source: Global Entertainment & Media Outlook 2020-2024, PwC, Omdia</p>
  </div>
);
const content2 = (
  <p className="">
    Becoming a member is free. If you are an accredited investor you will have
    access to receiving early notification of upcoming investment opportunities
    and when they will ‘go-live’. You will have your own dedicated login for the
    platform where all your details and transactions will be held - your SPACE.
    If you are an individual or non-accredited investor, you will have access to
    invest in the rewards that projects offer, for example a gala ticket to the
    premiere or a zoom call with the director. You will also have access to your
    own SPACE.
  </p>
);
const content3 = (
  <p>
    Investors make payments directly to the creators and do not pay any fees to
    Facet. Creators pay a portion of the capital raised to Facet for advisory
    services and access to Facet. This can range from 5-10% of funds raised.
  </p>
);
const content4 = (
  <div className="">
    <p>
      European content benefits from smaller budgets, however as funding amounts
      are on a downward trajectory but consumer appetite for content is on an
      upward trajectory, there is a need for new mechanisms to support the
      sector.
    </p>
    <br />
    <p>
      Financing of European original content (excl. sport and news) 2021 vs.
      2019
    </p>
    <p>Estimated values in EUR billion. Refers to EU 27.</p>
    <br />
    <img src={chart2} alt="" />
    <ul className="chart_info">
      <li>
        <div className="circle_1"></div>
        <span>2019</span>
      </li>
      <li>
        <div className="circle_4"></div>
        <span>2021</span>
      </li>
    </ul>
    <p className="grey">Source: European Audiovisual Observatory</p>
    <br />
    <br />
    <p>Average, median and highest maximum awarded amount by type of scheme</p>
    <p className="grey">2018 - In EUR</p>
    <br />
    <br />
    <img src={table} alt="" />
    <br />
    <br />
    <p className="grey">
      Source: Mapping of film and audiovisual public funding criteria in the EU,{" "}
      <br /> European Audiovisual Observatory
    </p>
  </div>
);
const faqsItems = [
  {
    title: "Why content investing?",
    content: content1,
  },
  {
    title: "What fees are charged to Facet members?",
    content: content2,
  },
  {
    title: "What fees are charged on individual investments?",
    content: content3,
  },
  {
    title: "Why European content?",
    content: content4,
  },
];

const LeftContent = () => {
  return (
    <div className="faq">
      {faqsItems.map(({ title, content }) => (
        <Collapase title={title} content={content} key={uuidv4()} />
      ))}
    </div>
  );
};
const faqs = {
  pageTitle: "FAQs",
  leftContent: <LeftContent />,
};
export default faqs;
