import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import { Toolbar, Button, Page } from 'react-onsenui';
import topimg from '../assets/images/topimg_Score.jpg';
import road from '../assets/images/img_road.jpg';

export default class DrivingScorePage extends React.Component {
  render() {
    return (
      <Page
        renderToolbar={() => (
          <Toolbar>
            <div className="center">優良運転者チェッカー</div>
          </Toolbar>
        )}>
        <img src={topimg} alt="driving-score" />
        <div className="container">
          <h3 className="result_title">本日のドライバー総合結果</h3>
          <p>
            <span>73</span>/100点
          </p>
          <p className="result_title">反省ポイント３：左折対応</p>
          <img src={road} />
          <p className="quiz_description">
            右左折の合図は、右左折しようとする交差点の３０メートル手前の地点でウインカー合図を出す。
            <br />
            次にサイドミラー、左後方を確認後、交差点の５m前には左に寄せつつ左折します。
          </p>
          <h2>
            <span className="result-d">D</span>判定(83箇所対象)
          </h2>
          <div className="btn-container">
            <Button onclick="kako()">問題箇所リスト</Button>
            <Button modifier="quiet" onclick="kako()">
              過去の診断結果を見る
            </Button>
          </div>
        </div>
      </Page>
    );
  }
}
