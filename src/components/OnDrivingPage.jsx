import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Toolbar, Page } from 'react-onsenui';
import left from '../assets/images/left.png';
import right from '../assets/images/right.png';

export default class OnDrivingPage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() => (
          <Toolbar>
            <div className="center">運転計測中...</div>
          </Toolbar>
        )}>
        <button>
          <img src={left} />
        </button>
        <button>
          <img src={right} />
        </button>
      </Page>
    );
  }
}
