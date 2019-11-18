import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Toolbar, Page } from 'react-onsenui';
import left from '../assets/images/left.jpeg';
import right from '../assets/images/right.jpeg';

const OnDrivingPage = () => {
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
};

export default OnDrivingPage;
