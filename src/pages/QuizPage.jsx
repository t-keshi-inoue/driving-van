import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Toolbar, Col, Page, Row, Button } from "react-onsenui";
import topimg from "../assets/images/topimg_quiz1.jpg";

export default class QuizPage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() => (
          <Toolbar>
            <div className="center">クイズ</div>
          </Toolbar>
        )}>
        <img src={topimg} alt="topimg" />
        <div className="container">
          <h3 className="outlined-secondary">
            <span id="qa_num">3/10問目</span>
          </h3>
          <span id="swing-long-result" className="quiz_description">
            右左折などをしようとするときの合図は、その行為をしようとする約３秒前に出す。
          </span>
          <Row>
            <Col>
              <div className="choice">
                <Button className="button button--large--cta">○</Button>
              </div>
            </Col>
            <Col>
              <div className="choice">
                <Button className="button button--large--cta">×</Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container">
          <h3 className="result_title">
            <span id="qa_num">正解は「×」</span>
          </h3>
          <span id="swing-long-result" className="quiz_description">
            右左折しようとする３０メートル手前の地点で合図を出します。
          </span>
        </div>
      </Page>
    );
  }
}
