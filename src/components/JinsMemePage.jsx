import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import {
  Tab,
  Tabbar,
  Page,
  Toolbar,
  ToolbarButton,
  Template,
  Dialog,
  Modal,
  Icon,
  List,
} from 'react-onsenui';

const JinsMemePage = () => {
  return (
    <div>
      <Page>
        {/* ツールバー */}
        <Toolbar>
          <div className="center">JINS MEME Controller Sample</div>
          <div className="right">
            <ToolbarButton>
              <Icon icon="plug" size="24px"></Icon>
            </ToolbarButton>
          </div>
        </Toolbar>
        <div>
          <p>Swing</p>
          <h4 id="swing_lat_dtl_msg"></h4>
          <h4 id="swing_long_dtl_msg"></h4>
          <br />
          <p>Eye movement</p>
          <h4 id="em_lat_dtl_msg"></h4>
          <h4 id="em_long_dtl_msg"></h4>
          <br />
          <p>Tilt</p>
          <h4 id="tilt_msg"></h4>
          <br />
          <p>Yaw(Sequential)</p>
          <h4 id="yaw_seq_msg"></h4>
        </div>
      </Page>
      <Dialog id="selectDeviceDialog" cancelable>
        <List id="deviceList"></List>
      </Dialog>
      {/* <!-- モーダルウィンドウ -->  */}
      <Modal id="modal">
        <p>接続中...</p>
        <Icon icon="spinner" size="28px" spin></Icon>
      </Modal>
    </div>
  );
};

export default JinsMemePage;
