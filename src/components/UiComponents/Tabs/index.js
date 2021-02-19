import React from "react";
import "./index.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { v4 as uuidv4 } from 'uuid';

const TabsComp = ({ nav, tabs }) => {
  return (
    <Tabs>
      <TabList>{nav && nav.map((el) => <Tab key={uuidv4()}>{el}</Tab>)}</TabList>
      {tabs && tabs.map((el) => <TabPanel key={uuidv4()}>{el}</TabPanel>)}
    </Tabs>
  );
};

export default TabsComp;
