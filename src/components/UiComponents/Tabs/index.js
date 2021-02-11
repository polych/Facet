import React from "react";
import "./index.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabsComp = ({ nav, tabs }) => {
  return (
    <Tabs>
      <TabList>{nav && nav.map((el) => <Tab>{el}</Tab>)}</TabList>
      {tabs && tabs.map((el) => <TabPanel>{el}</TabPanel>)}
    </Tabs>
  );
};

export default TabsComp;
