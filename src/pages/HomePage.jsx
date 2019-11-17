import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Button, Page, Toolbar, Card } from "react-onsenui";
import logo from "../assets/images/logo.png";

export default class HomePage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() => (
          <Toolbar>
            <div className="center">優良運転者チェッカー</div>
          </Toolbar>
        )}>
        <div className="container">
          <Card>
            <h1 className="title">優良運転者チェッカー</h1>
            <p className="lead">
              運転優良者チェッカーは、 <br />
              あなたの運転を見守ります。 <br />
              大切な家族のために、 <br />
              そして、あなた自身のために、 <br />
              安全な運転を心がけましょう。
            </p>
            <div>
              <img src={logo} className="card-media" />
            </div>
            <Button
              page="checker1.html"
              modifier="large--cta"
              onclick="omikuji()">
              START
            </Button>
          </Card>
        </div>
      </Page>
    );
  }
}
