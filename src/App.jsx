import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Tabbar, Tab } from 'react-onsenui';

import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import SimulatorPage from './components/SimulatorPage';
import DrivingScorePage from './components/DrivingScorePage';
import OnDrivingPage from './components/OnDrivingPage';

import './app.css';

export default class App extends React.Component {
  renderTabs() {
    return [
      {
        content: <HomePage />,
        tab: <Tab label="Home" icon="md-home" />,
      },
      {
        content: <QuizPage />,
        tab: <Tab label="Quiz" icon="md-book" />,
      },
      {
        content: <SimulatorPage />,
        tab: <Tab label="Simulator" icon="md-equalizer" />,
      },
      {
        content: <DrivingScorePage />,
        tab: <Tab label="DrivingScore" icon="md-car" />,
      },
      {
        content: <OnDrivingPage />,
        tab: <Tab label="OnDriving" icon="md-car" />,
      },
    ];
  }

  render() {
    return (
      <div>
        <Tabbar
          className="tabbar--material"
          initialIndex={0}
          renderTabs={this.renderTabs.bind(this)}
        />
      </div>
    );
  }
}
