import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Button, Page, Toolbar, Card, Dialog } from 'react-onsenui';
import logo from '../assets/images/logo.png';

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Page
      renderToolbar={() => (
        <Toolbar>
          <div className="center">優良運転者チェッカー</div>
        </Toolbar>
      )}>
      <div className="container">
        <Card>
          <h3 className="title">Happy Driving!</h3>
          <p className="lead">
            大切な家族のために、 <br />
            そして、あなた自身のために、 <br />
            安全な運転を心がけましょう。
          </p>
          <div>
            <img src={logo} className="card-media" />
          </div>
          <div className="btn-container">
            <Button
              page="checker1.html"
              modifier="large--cta"
              onClick={() => setOpen(true)}>
              START
            </Button>
          </div>
        </Card>
      </div>

      {/* 計測中の画面 */}
      <Dialog isOpen={open}>
        <Page></Page>
      </Dialog>
    </Page>
  );
};

export default HomePage;
