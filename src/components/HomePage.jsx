import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Button, Page, Toolbar, Card, Dialog } from 'react-onsenui';
import logo from '../assets/images/logo.png';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Click happened');
    this.setState({ isOpen: true });
  }

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
              <Button page="checker1.html" modifier="large--cta" START></Button>
              <button onClick={this.handleClick}>aaaa</button>
            </div>
          </Card>
        </div>

        {/* 計測中の画面 */}
        <Dialog isOpen={this.state.isOpen}>
          <Page></Page>
        </Dialog>
      </Page>
    );
  }
}
