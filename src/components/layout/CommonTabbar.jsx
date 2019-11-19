/* eslint-disable react/display-name */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Tabbar, Tab } from 'react-onsenui';
import HomePage from '../HomePage';
import QuizPage from '../QuizPage';
// import SimulatorPage from '../SimulatorPage';
// import DrivingScorePage from '../toolbarLinks/DrivingScorePage';
// import OnDrivingPage from '../OnDrivingPage';
// import JinsMemePage from '../JinsMemePage';
// import PanelLeftPage from '../toolbarLinks/PanelLeftPage';
const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);
<Navigator
  renderPage={renderPage}
  initialRoute={{ component: JinsMemePage, key: 'JINSMEME_PAGE' }}
/>;

const CommonTabs = () => {
  return [
    {
      content: <HomePage />,
      tab: <Tab label="Home" icon="md-home" />,
    },
    {
      content: <QuizPage />,
      tab: <Tab label="Quiz" icon="md-book" />,
    },
    // {
    //   content: <PanelLeftPage />,
    //   tab: <Tab label="PanelLeft" icon="md-book" />,
    // },
    // {
    //   content: <SimulatorPage />,
    //   tab: <Tab label="Simulator" icon="md-equalizer" />,
    // },
    // {
    //   content: <DrivingScorePage />,
    //   tab: <Tab label="DrivingScore" icon="md-car" />,
    // },
    // {
    //   content: <OnDrivingPage />,
    //   tab: <Tab label="OnDriving" icon="md-car" />,
    // },
    // {
    //   content: <JinsMemePage />,
    //   tab: <Tab label="JinsMeme" icon="md-car" />,
    // },
  ];
};

export default CommonTabs;
