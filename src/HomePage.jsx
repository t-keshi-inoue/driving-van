import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Page, Toolbar } from "react-onsenui";

export default class HomePage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() => (
          <Toolbar>
            <div className="center">優良運転者チェッカー</div>
          </Toolbar>
        )}>
        <div className="red">Home Page</div>
      </Page>
    );
  }
}
