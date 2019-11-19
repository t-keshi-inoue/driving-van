import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Button, Icon, Popover } from 'react-onsenui';

const PopHamburger = () => {
  const [state, setState] = useState({ isOpen: false });

  return (
    <div>
      <Button onClick={() => setState({ isOpen: true })}>
        <Icon icon="md-menu" />
      </Button>
      <Popover isOpen={true} onCancel={() => setState({ isOpen: true })}>
        <div style={{ textAlign: 'center', opacity: 0.5 }}>
          <p>This is a popover!</p>
          <p>
            <small>Click the background to remove the popover.</small>
          </p>
        </div>
      </Popover>
    </div>
  );
};

export default PopHamburger;
