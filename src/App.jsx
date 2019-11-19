import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Tabbar, Tab } from 'react-onsenui';

import HomePage from './components/HomePage';
//import QuizPage from './components/QuizPage';
import SimulatorPage from './components/SimulatorPage';
import DrivingScorePage from './components/DrivingScorePage';
import OnDrivingPage from './components/OnDrivingPage';
//import JinsMemePage from './components/JinsMemePage';

import './app.css';

const App = () => {
  const renderTabs = () => {
    return [
      {
        content: <HomePage />,
        tab: <Tab label="Home" icon="md-home" key="HOME_PAGE" />,
      },
      // {
      //   content: <QuizPage />,
      //   tab: <Tab label="Quiz" icon="md-book" key="QUIZ_PAGE" />,
      // },
      {
        content: <SimulatorPage />,
        tab: <Tab label="Simulator" icon="md-equalizer" key="SIMULATOR_PAGE" />,
      },
      {
        content: <DrivingScorePage />,
        tab: <Tab label="DrivingScore" icon="md-car" key="DRIVINGSCORE_PAGE" />,
      },
      {
        content: <OnDrivingPage />,
        tab: <Tab label="OnDriving" icon="md-car" key="ONDRIVING_PAGE" />,
      },
      // {
      //   content: <JinsMemePage />,
      //   tab: <Tab label="JinsMeme" icon="md-car" key="JINSMEME_PAGE" />,
      // },
    ];
  };

  return (
    <Tabbar
      className="tabbar--material"
      initialIndex={0}
      renderTabs={renderTabs}
    />
  );
};

export default App;
