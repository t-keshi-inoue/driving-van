(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";n(10);var a=n(12),r=c(n(0)),l=c(n(1)),u=c(n(5));n(18);var o=c(n(19));function c(e){return e&&e.__esModule?e:{default:e}}n(33),n(34),u.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var i=document.getElementById("app");l.default.render(r.default.createElement(a.AppContainer,null,r.default.createElement(o.default,null)),i)},,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=s(n(0)),l=(s(n(1)),n(2)),u=s(n(23)),o=s(n(25)),c=s(n(26)),i=s(n(28)),f=s(n(30));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"renderTabs",value:function(){return[{content:r.default.createElement(u.default,null),tab:r.default.createElement(l.Tab,{label:"Home",icon:"md-home"})},{content:r.default.createElement(o.default,null),tab:r.default.createElement(l.Tab,{label:"Settings",icon:"md-settings"})},{content:r.default.createElement(c.default,null),tab:r.default.createElement(l.Tab,{label:"Quiz",icon:"md-settings"})},{content:r.default.createElement(i.default,null),tab:r.default.createElement(l.Tab,{label:"Simulator",icon:"md-settings"})},{content:r.default.createElement(f.default,null),tab:r.default.createElement(l.Tab,{label:"DrivingScore",icon:"md-settings"})}]}},{key:"render",value:function(){return r.default.createElement(l.Tabbar,{initialIndex:0,renderTabs:this.renderTabs.bind(this)})}}]),t}(r.default.Component);t.default=d},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=o(n(0)),l=(o(n(1)),n(2)),u=o(n(24));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return r.default.createElement(l.Page,{renderToolbar:function(){return r.default.createElement(l.Toolbar,null,r.default.createElement("div",{className:"center"},"優良運転者チェッカー"))}},r.default.createElement("div",{className:"container"},r.default.createElement(l.Card,null,r.default.createElement("h1",{className:"title"},"優良運転者チェッカー"),r.default.createElement("p",{className:"lead"},"運転優良者チェッカーは、 ",r.default.createElement("br",null),"あなたの運転を見守ります。 ",r.default.createElement("br",null),"大切な家族のために、 ",r.default.createElement("br",null),"そして、あなた自身のために、 ",r.default.createElement("br",null),"安全な運転を心がけましょう。"),r.default.createElement("div",null,r.default.createElement("img",{src:u.default,className:"card-media"})),r.default.createElement(l.Button,{page:"checker1.html",modifier:"large--cta",onclick:"omikuji()"},"START"))))}}]),t}(r.default.Component);t.default=c},function(e,t,n){e.exports=n.p+"assets/logo.833435fcb6e66ecfbcddc494ab61a15d.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=u(n(0)),l=(u(n(1)),n(2));function u(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return r.default.createElement(l.Page,{renderToolbar:function(){return r.default.createElement(l.Toolbar,null,r.default.createElement("div",{className:"center"},"Title"))}},r.default.createElement("div",null,"Settings Page"))}}]),t}(r.default.Component);t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=o(n(0)),l=(o(n(1)),n(2)),u=o(n(27));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return r.default.createElement(l.Page,{renderToolbar:function(){return r.default.createElement(l.Toolbar,null,r.default.createElement("div",{className:"center"},"クイズ"))}},r.default.createElement("img",{src:u.default,alt:"topimg"}),r.default.createElement("div",{className:"container"},r.default.createElement("h3",{className:"outlined-secondary"},r.default.createElement("span",{id:"qa_num"},"3/10問目")),r.default.createElement("span",{id:"swing-long-result",className:"quiz_description"},"右左折などをしようとするときの合図は、その行為をしようとする約３秒前に出す。"),r.default.createElement(l.Row,null,r.default.createElement(l.Col,null,r.default.createElement("div",{className:"choice"},r.default.createElement(l.Button,{className:"button button--large--cta"},"○"))),r.default.createElement(l.Col,null,r.default.createElement("div",{className:"choice"},r.default.createElement(l.Button,{className:"button button--large--cta"},"×"))))),r.default.createElement("div",{className:"container"},r.default.createElement("h3",{className:"result_title"},r.default.createElement("span",{id:"qa_num"},"正解は「×」")),r.default.createElement("span",{id:"swing-long-result",className:"quiz_description"},"右左折しようとする３０メートル手前の地点で合図を出します。")))}}]),t}(r.default.Component);t.default=c},function(e,t,n){e.exports=n.p+"assets/topimg_quiz1.d5535bcff298cd71654a6dfa03234c88.jpg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=o(n(0)),l=(o(n(1)),n(2)),u=o(n(29));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return r.default.createElement(l.Page,{id:"check-setting",renderToolbar:function(){return r.default.createElement(l.Toolbar,null,r.default.createElement("div",{className:"center"},"シュミレーター"))}},r.default.createElement("img",{src:u.default,alt:"check"}),r.default.createElement("section",{id:"simulator"},r.default.createElement("h3",null,"SDL Simulator ",r.default.createElement("br",null),r.default.createElement("small",null,"SDL Bootcamp に送信")),r.default.createElement("fieldset",null,r.default.createElement("legend",null,"RPM"),r.default.createElement("input",{type:"range",value:"0",min:"0",max:"20000",step:"1",onInput:"document.getElementsByName('rpm')[0].value=this.value;changeRpm();"}),r.default.createElement("output",{name:"rpm"},"0")," rpm"),r.default.createElement("fieldset",null,r.default.createElement("legend",null,"Speed"),r.default.createElement("input",{type:"range",value:"0",min:"0",max:"700",step:"0.01",onInput:"document.getElementsByName('speed')[0].value=this.value;changeSpeed();"}),r.default.createElement("output",{name:"speed"},"0")," km/h"),r.default.createElement("fieldset",null,r.default.createElement("legend",null,"Acc Pedal Position"),r.default.createElement("input",{type:"range",value:"0",min:"0",max:"100",step:"0.01",onInput:"document.getElementsByName('accPedalPosition')[0].value=this.value;changeAccPedalPosition();"}),r.default.createElement("output",{name:"accPedalPosition"},"0")," %"),r.default.createElement("fieldset",null,r.default.createElement("legend",null,"Electronic Park Brake Status"),r.default.createElement("input",{type:"Radio",name:"electronicParkBrakeStatus",onChange:"changeElectronicParkBrakeStatus()",value:"CLOSE",checked:!0}),"close",r.default.createElement("input",{type:"Radio",name:"electronicParkBrakeStatus",onChange:"changeElectronicParkBrakeStatus()",value:"OPEN"}),"open"),r.default.createElement("fieldset",null,r.default.createElement("legend",null,"PRNDL"),r.default.createElement("input",{type:"Radio",name:"prndl",onChange:"changePrndl()",value:"PARK",checked:!0}),"Park",r.default.createElement("input",{Type:"Radio",name:"prndl",onChange:"changePrndl()",value:"REVERSE"}),"Reverse",r.default.createElement("input",{type:"Radio",name:"prndl",onChange:"changePrndl()",value:"NEUTRAL"}),"Neutral",r.default.createElement("input",{type:"Radio",name:"prndl",onChange:"changePrndl()",value:"DRIVE"}),"Drive"),r.default.createElement(l.Button,{className:"btn_primary"},"登録")))}}]),t}(r.default.Component);t.default=c},function(e,t,n){e.exports=n.p+"assets/topimg_check.c7ca44b82c64841a571b53c3f963fe4f.jpg"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=c(n(0)),l=(c(n(1)),n(2)),u=c(n(31)),o=c(n(32));function c(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){return r.default.createElement(l.Page,{renderToolbar:function(){return r.default.createElement(l.Toolbar,null,r.default.createElement("div",{className:"center"},"優良運転者チェッカー"))}},r.default.createElement("img",{src:u.default,alt:"driving-score"}),r.default.createElement("div",{className:"container"},r.default.createElement("h3",{className:"result_title"},"本日のドライバー総合結果"),r.default.createElement("p",null,r.default.createElement("span",null,"73"),"/100点"),r.default.createElement("p",{className:"result_title"},"反省ポイント３：左折対応"),r.default.createElement("img",{src:o.default}),r.default.createElement("p",{className:"quiz_description"},"右左折の合図は、右左折しようとする交差点の３０メートル手前の地点でウインカー合図を出す。",r.default.createElement("br",null),"次にサイドミラー、左後方を確認後、交差点の５m前には左に寄せつつ左折します。"),r.default.createElement("h2",null,r.default.createElement("span",{className:"result-d"},"D"),"判定(83箇所対象)"),r.default.createElement(l.Button,{onclick:"kako()"},"問題箇所リスト"),r.default.createElement(l.Button,{modifier:"quiet",onclick:"kako()"},"過去の診断結果を見る")))}}]),t}(r.default.Component);t.default=i},function(e,t,n){e.exports=n.p+"assets/topimg_Score.28395817c698ad6a5b363bdea0f6aba4.jpg"},function(e,t,n){e.exports=n.p+"assets/img_road.3a1a2a3d0fc11b171da5c450827e4cc5.jpg"}],[[8,1,2]]]);