import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Toolbar, Page } from "react-onsenui";
import "../style.css";
import topimg from "../assets/images/topimg_check.jpg";

export default class SimulatorPage extends React.Component {
  render() {
    return (
      <Page
        id="check-setting"
        renderToolbar={() => (
          <Toolbar>
            <div className="center">シュミレーター</div>
          </Toolbar>
        )}>
        <img src={topimg} alt="check" />
        <section id="simulator">
          <h3>
            SDL Simulator <br />
            <small>SDL Bootcamp に送信</small>
          </h3>
          <fieldset>
            <legend>RPM</legend>
            <input
              type="range"
              value="0"
              min="0"
              max="20000"
              step="1"
              onInput="document.getElementsByName('rpm')[0].value=this.value;changeRpm();"
            />
            <output name="rpm">0</output> rpm
          </fieldset>
          <fieldset>
            <legend>Speed</legend>
            <input
              type="range"
              value="0"
              min="0"
              max="700"
              step="0.01"
              onInput="document.getElementsByName('speed')[0].value=this.value;changeSpeed();"
            />
            <output name="speed">0</output> km/h
          </fieldset>

          <fieldset>
            <legend>Acc Pedal Position</legend>
            <input
              type="range"
              value="0"
              min="0"
              max="100"
              step="0.01"
              onInput="document.getElementsByName('accPedalPosition')[0].value=this.value;changeAccPedalPosition();"
            />
            <output name="accPedalPosition">0</output> %
          </fieldset>

          <fieldset>
            <legend>Electronic Park Brake Status</legend>
            <input
              type="Radio"
              name="electronicParkBrakeStatus"
              onChange="changeElectronicParkBrakeStatus()"
              value="CLOSE"
              checked
            />
            close
            <input
              type="Radio"
              name="electronicParkBrakeStatus"
              onChange="changeElectronicParkBrakeStatus()"
              value="OPEN"
            />
            open
          </fieldset>

          <fieldset>
            <legend>PRNDL</legend>
            <input
              type="Radio"
              name="prndl"
              onChange="changePrndl()"
              value="PARK"
              checked
            />
            Park
            <input
              Type="Radio"
              name="prndl"
              onChange="changePrndl()"
              value="REVERSE"
            />
            Reverse
            <input
              type="Radio"
              name="prndl"
              onChange="changePrndl()"
              value="NEUTRAL"
            />
            Neutral
            <input
              type="Radio"
              name="prndl"
              onChange="changePrndl()"
              value="DRIVE"
            />
            Drive
          </fieldset>
          <button className="btn_darkblue">登録</button>
        </section>
      </Page>
    );
  }
}
