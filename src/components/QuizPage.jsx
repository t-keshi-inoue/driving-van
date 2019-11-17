import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Toolbar, Col, Page, Row, Button } from 'react-onsenui';
import topimg from '../assets/images/topimg_quiz1.jpg';

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
            <span>3</span>/10問目
          </h3>
          <p className="quiz_description">
            右左折などをしようとするときの合図は、その行為をしようとする約３秒前に出す。
          </p>
          <Row>
            <Col>
              <Button modifier="large">
                <span>○</span>
              </Button>
            </Col>
            <Col>
              <Button modifier="large--cta">
                <span>✖︎</span>
              </Button>
            </Col>
          </Row>
        </div>
        <div className="container">
          <h3 className="result_title">
            正解は<span>×</span>
          </h3>
          <p className="quiz_description">
            右左折しようとする３０メートル手前の地点で合図を出します。
          </p>
        </div>
      </Page>
    );
  }
}
