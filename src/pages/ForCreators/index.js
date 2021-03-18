import React from "react";
import { Link } from "react-router-dom";
import TabsComp from "../../components/UiComponents/Tabs";

const nav = [
  "What we look for",
  "What’s in it for you",
  "Pricing",
  "Types of campaignes",
];
const tabs = [
  <ul className="list_style">
    <li>Clear impact mission</li>
    <li>Compelling financial returns</li>
    <li>Resilient and committed team</li>
    <li>Resilient and committed team</li>
  </ul>,
  <ul className="list_style">
    <li>Partner with investors who share your vision – big or small</li>
    <li>Expert support from the Facet team</li>
    <li>Full transparency and updates throughout the fundraising process</li>
  </ul>,
  <p>
    Creatives pay 5-10% of capital raised to cover the costs associated with
    marketing, compliance and company on-boarding.
    <br />
    <br />
    Charges only occur if a project raises their full funding.
  </p>,
  <p>
    Short-term loans with a duration of 3-6 months, secured against subsidies,
    tax credits or distribution rights. Rewards-based funding on a
    project-by-project basis.
  </p>,
];

const LeftContent = () => {
  return (
    <div>
      <TabsComp nav={nav} tabs={tabs} />
    </div>
  );
};
const RightContent = () => (
  <Link to="/contact" className="btn_1">
    Send us your application
  </Link>
);
const forCreatorsPage = {
  pageTitle: "FOR CREATORS",
  leftContent: <LeftContent />,
  rightContent: <RightContent />,
  pageClass: "for_creators_page",
};
export default forCreatorsPage;
