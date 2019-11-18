/* eslint-disable no-undef */
document.addEventListener('deviceready', () => {
  // 必要な権限の確認 for Android
  cordova.plugins.diagnostic.requestLocationAuthorization(
    status => {
      switch (status) {
        case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
          console.log('Permission not requested');
          break;
        case cordova.plugins.diagnostic.permissionStatus.GRANTED:
          console.log('Permission granted');
          break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED_ONCE:
          console.log('Permission denied');
          break;
        case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
          console.log('Permission permanently denied');
          break;
      }
    },
    error => {
      console.error(error);
    }
  );

  // アプリの初期化処理
  cordova.plugins.JinsMemePlugin.setAppClientID(
    '', //client id
    '', //secret
    () => {
      restartScan();
    },
    () => {
      console.log('Error: setAppClientID');
    }
  );
});

// iPhoneX 対応
ons.ready(() => {
  if (ons.platform.isIPhoneX) {
    document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  }
});

//首ふり（横）のイベントリスナ
document.addEventListener('jmctrllib_swing_lat', e => {
  document.getElementById('swing_lat_dtl_msg').innerHTML =
    'lat directoin:' + e.detail.direction + ' times:' + e.detail.count;
});
//首ふり（縦）のイベントリスナ
document.addEventListener('jmctrllib_swing_long', e => {
  document.getElementById('swing_long_dtl_msg').innerHTML =
    'long directoin:' + e.detail.direction + ' times:' + e.detail.count;
});
//視線移動（横）のイベントリスナ
document.addEventListener('jmctrllib_eyemove_lat', e => {
  document.getElementById('em_lat_dtl_msg').innerHTML =
    'lat directoin:' + e.detail.direction + ' times:' + e.detail.count;
});
//視線移動（縦）のイベントリスナ
document.addEventListener('jmctrllib_eyemove_long', e => {
  document.getElementById('em_long_dtl_msg').innerHTML =
    'long directoin:' + e.detail.direction + ' times:' + e.detail.count;
});

// デバイスのスキャン開始
export const startScan = () => {
  // デバイス選択ダイアログを表示
  const deviceList = document.getElementById('deviceList');
  deviceList.innerHTML = '<ons-list-header>デバイスを選択</ons-list-header>';
  document.getElementById('selectDeviceDialog').show();

  cordova.plugins.JinsMemePlugin.startScan(
    device => {
      // ダイアログにデバイスを追加
      deviceList.innerHTML +=
        "<ons-list-item tappable onclick=\"connect('" +
        device +
        "')\">" +
        device +
        '</ons-list-item>';
    },
    () => {
      console.log('Error: startScan');
    }
  );
};

// デバイスのスキャン停止
export const stopScan = successCallback => {
  cordova.plugins.JinsMemePlugin.stopScan(
    () => {
      if (successCallback) successCallback();
    },
    () => {
      console.log('Error: stopScan');
    }
  );
};

// デバイスのスキャン再開
export const restartScan = () => {
  stopDataReport();
  disconnect();
  stopScan(startScan);
};

// アプリとデバイスの接続
export const connect = device => {
  // スキャン停止
  stopScan();
  // ダイアログを閉じてモーダルを表示
  document.getElementById('selectDeviceDialog').hide();
  document.getElementById('modal').show();

  // 選択されたデバイスに接続
  cordova.plugins.JinsMemePlugin.connect(
    device,
    () => {
      //端末依存で不安定な場合があるのでウェイトをかける処理
      setTimeout(stopDataReport, 500);
      setTimeout(startDataReport, 1000);
    },
    () => {
      console.log('Disconnect');
    },
    () => {
      console.log('Error: connect');
      document.getElementById('modal').hide();
    }
  );
};

// アプリとデバイスの切断
export const disconnect = () => {
  cordova.plugins.JinsMemePlugin.disconnect(
    () => {
      //do nothing now
    },
    () => {
      console.log('Error: disconnect');
    }
  );
};

// 計測開始
export const startDataReport = () => {
  document.getElementById('modal').hide();
  cordova.plugins.JinsMemePlugin.startDataReport(
    data => {
      //首振りカウント判定＆イベント発火用
      jmctrllib.getSequentialSwing(data);
      //視線移動カウント判定＆イベント発火用
      jmctrllib.getSequentialEyeMove(data);
      //前傾角の取得と表示
      const tilt = jmctrllib.calcTilt(data);
      document.getElementById('tilt_msg').innerHTML =
        'tilt:' + Math.round(tilt) + 'deg';
      document.getElementById('yaw_seq_msg').innerHTML =
        'yaw:' + Math.round(jmctrllib.getSequentialYaw(data));
    },
    () => {
      console.log('Error: startDataReport');
    }
  );
};
// 計測停止
export const stopDataReport = () => {
  cordova.plugins.JinsMemePlugin.stopDataReport(
    () => {
      //do nothing now
    },
    () => {
      console.log('Error: stopDataReport');
    }
  );
};
