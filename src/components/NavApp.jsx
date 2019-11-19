import React from 'react';
import { Toolbar, Page, ToolbarButton } from 'react-onsenui';
import Hamburger from './layout/Hamburger';

const NavApp = ({ title }) => {
  return (
    <Page>
      <div className="left">
        <Hamburger />
      </div>
      <div className="center">title</div>
      Hello
    </Page>
  );
};

export default NavApp;
