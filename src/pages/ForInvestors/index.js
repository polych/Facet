import React from "react";
import TabsComp from "../../components/UiComponents/Tabs";

const nav = [
  "How we select",
  "Why invest with us?",
  "For Champions",
  "Benefits",
  "Pricing",
  "Risks",
  "My Profile",
];
const tabs = [
  <div>
    <p>
      Our goal is to identify the best projects which can deliver impact and
      impressive financial returns to Facet investors. We only offer short-term
      loans.
    </p>
    <br />
    <br />
    <ul className="list_style">
      <li>
        Phase 1: Facet identifies suitable projects via its broad network.
      </li>
      <li>
        Phase 2: Shortlisted projects are analysed for their financial, legal,
        business and impact potential.
      </li>
      <li>
        Phase 3: Once the projects go through initial due diligence, they are
        presented to the Facet selection committee.
      </li>
      <li>
        Phase 4: Successful projects go through final due diligence and if
        approved, go ‘live’ on the Facet platform.
      </li>
    </ul>
  </div>,
  <p>
    Successful investing hinges on two considerations: upside potential versus
    downside risk. With content investing, there is also social impact to
    consider.
    <br />
    <br />
    Facet lets you select impactful investments individually so the return
    profile matches your financial and impact objectives: - For accredited
    investors, we offer projects requiring short-term loans or tax incentive
    financing. This means faster liquidity and quicker returns. - For
    non-accredited investors, we offer rewards-based funding opportunities so
    you can be part of the story.
    <br />
    <br />
    We will also build out a dedicated SPACE on the platform– where each
    investor will have access to all relevant project information and legal
    documentation in one place. This is to enable transparency and help due
    diligence with ease and confidence.
  </p>,
  <p>
    Be part of the story!
    <br />
    <br />
    If you are an individual or non-accredited investor, you will have the
    opportunity to invest in any rewards that projects may offer, for example a
    gala ticket to the premiere, a producer credit or a zoom call with the
    director. You will also have to chance to share and provide feedback to
    creators.
    <br />
    <br />
    You will also have access to your own SPACE (coming soon), where you can
    keep track of all the projects you have supported.
  </p>,
  <p>
    Facet makes the entire process of investing into content hassle free with
    high quality, fully verified projects on the platform, letting you focus on
    your investment decision. <br />
    We offer: <br />
    - Carefully curated projects with real impact and viable returns. <br />
    - Consistent legal documentation and clear presentations. <br />
    - An ‘Ask the creator’ forum (coming soon). <br />
    - All your documentation and communication in one place (coming soon).
    <br />
  </p>,
  <p>
    Facet membership is free for qualifying individuals. Facet does not charge
    investors any fees for making investments on Facet. Only payment processing
    fees are taken, if applicable.
  </p>,
  <p>
    We want to ensure that investors understand the risks involved when
    investing on our platform. We strive to include a balance of both risk and
    reward concepts in all of our messages and conversations about investment
    opportunities. Most of our materials include a warning, such as, “Investing
    carries serious risks, including partial or total loss of capital. Please
    read the Information Note and the risk factors before investing.”
    <br />
    <br />
    A different asset class Investing is always risky.
    <br />
    It is important to remember that we offer access to a new and different type
    of asset class. Never invest more than you can afford to lose.
    <br />
    <br />
    Loss of investment <br />
    The majority of content projects fail or do not sell or fill seats as
    planned. It is possible that you may lose all or part of your investment. If
    a project you have invested in declares bankruptcy, it does not usually have
    funds available to repay debts or shareholders. If that happens, Facet is
    not responsible to pay you back for your investment.
    <br />
    <br />
    Risk Mitigation.
    <br />
    We aim to mitigate some of the risks by our offering: short-term loans as
    the investment opportunity. The time-frame means that you will get paid back
    from 3-6 months. The loans will usually be secured against subsidies, tax
    credits or distribution rights. Rewards to investors are only offered that
    can be provided within a similar time frame. We do not want to lock you into
    a project that has a longer term.
  </p>,

  <p>
    Direct investing into content can be a nightmare! Confusing investment
    presentations. Different legal documents for every deal. Searching e-mails
    to finish filings. Chasing creatives for updates.
    <br />
    <br />
    SPACE changes all that: find all deal documents in one place and prepared
    consistently and to the same high standards. Access your personal hub
    account to track your investments and stay up-to-date on posts. Build your
    personally selected portfolio of exciting content and keep everything in one
    place. SPACE facilitates communication, the cornerstone for strong
    relationships.
    <br />
    <br />
    Engaged investors go beyond funding, sharing experience and connections.
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
  <button className="btn_1">Send us your application</button>
);
const forInvestors = {
  pageTitle: "FOR investors",
  leftContent: <LeftContent />,
  rightContent: <RightContent />,
};
export default forInvestors;
