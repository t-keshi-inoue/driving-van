import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Button, Page, Row, Col } from "react-onsenui";
import topimg from "../assets/images/topimg_Score.jpg";
import road from "../assets/images/img_road.jpg";
import "../style.css";

export default class DrivingScorePage extends React.Component {
  render() {
    return (
      <Page>
        <img src={topimg} alt="driving-score" />
        <div className="container">
          <h3 className="result_title">本日のドライバー総合結果</h3>
          <div className="swing_lat_dtl_dir">
            <h3>73</h3>
            <h4>/100点</h4>
          </div>
          <p className="result_title">反省ポイント３：左折対応</p>
          <img src={road} />
          <span className="quiz_description">
            右左折の合図は、右左折しようとする交差点の３０メートル手前の地点でウインカー合図を出す。
            <br />
            次にサイドミラー、左後方を確認後、交差点の５m前には左に寄せつつ左折します。
          </span>
          <h2 id="swing_lat_dtl_dir" className="big-font">
            D<small>判定(83箇所対象)</small>
          </h2>
          <Button name="kyoukan" className="btn_primary" onclick="kako()">
            問題箇所リスト
          </Button>
          <Row>
            <Col width="40%" align="center">
              <div className="choice">
                <Button className="button button--large--cta">戻る</Button>
              </div>
            </Col>
            <Col width="40%" align="center">
              <div className="choice">
                <Button className="button button--large--cta">次へ</Button>
              </div>
            </Col>
          </Row>
        </div>
        <Button name="kyoukan" className="btn_darkblue" onclick="kako()">
          過去の診断結果を見る
        </Button>
      </Page>
    );
  }
}
