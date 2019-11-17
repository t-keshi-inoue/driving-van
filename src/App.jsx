import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Tabbar, Tab } from "react-onsenui";

import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import QuizPage from "./pages/QuizPage";
import SimulatorPage from "./pages/SimulatorPage";
import DrivingScorePage from "./pages/DrivingScorePage";

export default class App extends React.Component {
  renderTabs() {
    return [
      {
        content: <HomePage />,
        tab: <Tab label="Home" icon="md-home" />,
      },
      {
        content: <SettingsPage />,
        tab: <Tab label="Settings" icon="md-settings" />,
      },
      {
        content: <QuizPage />,
        tab: <Tab label="Quiz" icon="md-settings" />,
      },
      {
        content: <SimulatorPage />,
        tab: <Tab label="Simulator" icon="md-settings" />,
      },
      {
        content: <DrivingScorePage />,
        tab: <Tab label="DrivingScore" icon="md-settings" />,
      },
    ];
  }

  render() {
    return <Tabbar initialIndex={0} renderTabs={this.renderTabs.bind(this)} />;
  }
}
