import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Button, Page, Toolbar, Card } from "react-onsenui";
import topimg from "../assets/images/bg_topimg.jpg";
import "../style.css";

export default class HomePage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() => (
          <Toolbar>
            <div className="center">優良運転者チェッカー</div>
          </Toolbar>
        )}>
        <section>
          <div>
            <div>
              <Card>
                <p className="red">
                  運転優良者チェッカーは、 <br />
                  あなたの運転を見守ります。 <br />
                  大切な家族のために、 <br />
                  そして、あなた自身のために、 <br />
                  安全な運転を心がけましょう。
                </p>
              </Card>
              <Button
                page="checker1.html"
                modifier="large--cta"
                onclick="omikuji()">
                START
              </Button>
              <img src={topimg} />
            </div>
          </div>
        </section>
      </Page>
    );
  }
}
