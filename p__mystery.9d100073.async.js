(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[464],{79508:function(Z,w,i){"use strict";i.d(w,{Z:function(){return f}});var F=i(28991),H=i(67294),Q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},S=Q,k=i(27029),U=function(c,d){return H.createElement(k.Z,(0,F.Z)((0,F.Z)({},c),{},{ref:d,icon:S}))};U.displayName="CheckOutlined";var f=H.forwardRef(U)},16993:function(Z,w,i){"use strict";i.d(w,{b:function(){return c}});var F=i(57663),H=i(71577),Q=i(20310),S=i(67294),k=i(47416),U=i(85893),f,p=(0,k.ZP)(H.Z)(f||(f=(0,Q.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(d){var u=d.disabled;return u&&.5}),c=function(u){var B=u.text,L=u.block,$=L===void 0?!0:L,j=u.onClick,_=u.disabled,Y=_===void 0?!1:_;return(0,U.jsx)(p,{type:"default",shape:"round",disabled:Y,onClick:function(){Y||j&&j()},size:"large",block:$,children:B})}},16425:function(Z,w,i){"use strict";i.r(w),i.d(w,{default:function(){return Ye}});var F=i(13062),H=i(71230),Q=i(89032),S=i(15746),k=i(20310),U=i(47416),f=i(20228),p=i(11382),c=i(34792),d=i(55026),u=i(3182),B=i(2824),L=i(94043),$=i.n(L),j=i(67294),_=i(16993),Y=i(63757),ie=i.n(Y),G=i(93874),K=i(67329),O=i(28219),E=i(45697);function de(s,o){if(!(s instanceof o))throw new TypeError("Cannot call a class as a function")}function z(s,o){for(var l=0;l<o.length;l++){var a=o[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(s,a.key,a)}}function be(s,o,l){return o&&z(s.prototype,o),l&&z(s,l),s}function _e(s,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(o&&o.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),o&&ue(s,o)}function oe(s){return oe=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)},oe(s)}function ue(s,o){return ue=Object.setPrototypeOf||function(a,t){return a.__proto__=t,a},ue(s,o)}function Me(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(s){return!1}}function Ee(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function fe(s,o){return o&&(typeof o=="object"||typeof o=="function")?o:Ee(s)}function pe(s){var o=Me();return function(){var a=oe(s),t;if(o){var g=oe(this).constructor;t=Reflect.construct(a,arguments,g)}else t=a.apply(this,arguments);return fe(this,t)}}function r(s){return e(s)||x(s)||y(s)||C()}function e(s){if(Array.isArray(s))return T(s)}function x(s){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(s))return Array.from(s)}function y(s,o){if(!!s){if(typeof s=="string")return T(s,o);var l=Object.prototype.toString.call(s).slice(8,-1);if(l==="Object"&&s.constructor&&(l=s.constructor.name),l==="Map"||l==="Set")return Array.from(s);if(l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return T(s,o)}}function T(s,o){(o==null||o>s.length)&&(o=s.length);for(var l=0,a=new Array(o);l<o;l++)a[l]=s[l];return a}function C(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,l=String(s);if(o===0)return l;var a=l.match(/(.*?)([0-9]+)(.*)/),t=a?a[1]:"",g=a?a[3]:"",m=a?a[2]:l,v=m.length>=o?m:(r(Array(o)).map(function(){return"0"}).join("")+m).slice(o*-1);return"".concat(t).concat(v).concat(g)}var M={daysInHours:!1,zeroPadTime:2};function N(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=o.now,a=l===void 0?Date.now:l,t=o.precision,g=t===void 0?0:t,m=o.controlled,v=o.offsetTime,A=v===void 0?0:v,D=o.overtime,P;typeof s=="string"?P=new Date(s).getTime():s instanceof Date?P=s.getTime():P=s,m||(P+=A);var W=m?P:P-a(),ne=Math.min(20,Math.max(0,g)),q=Math.round(parseFloat(((D?W:Math.max(0,W))/1e3).toFixed(ne))*1e3),V=Math.abs(q)/1e3;return{total:q,days:Math.floor(V/(3600*24)),hours:Math.floor(V/3600%24),minutes:Math.floor(V/60%60),seconds:Math.floor(V%60),milliseconds:Number((V%1*1e3).toFixed()),completed:q<=0}}function re(s,o){var l=s.days,a=s.hours,t=s.minutes,g=s.seconds,m=Object.assign(Object.assign({},M),o),v=m.daysInHours,A=m.zeroPadTime,D=m.zeroPadDays,P=D===void 0?A:D,W=Math.min(2,A),ne=v?h(a+l*24,A):h(a,W);return{days:v?"":h(l,P),hours:ne,minutes:h(t,W),seconds:h(g,W)}}var R=function(s){_e(l,s);var o=pe(l);function l(){var a;return de(this,l),a=o.apply(this,arguments),a.state={count:a.props.count||3},a.startCountdown=function(){a.interval=window.setInterval(function(){var t=a.state.count-1;t===0?(a.stopCountdown(),a.props.onComplete&&a.props.onComplete()):a.setState(function(g){return{count:g.count-1}})},1e3)},a.stopCountdown=function(){clearInterval(a.interval)},a.addTime=function(t){a.stopCountdown(),a.setState(function(g){return{count:g.count+t}},a.startCountdown)},a}return be(l,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,j.cloneElement)(this.props.children,{count:this.state.count}):null}}]),l}(j.Component);R.propTypes={count:E.number,children:E.element,onComplete:E.func};var J=function(s){_e(l,s);var o=pe(l);function l(a){var t;if(de(this,l),t=o.call(this,a),t.mounted=!1,t.initialTimestamp=t.calcOffsetStartTimestamp(),t.offsetStartTimestamp=t.props.autoStart?0:t.initialTimestamp,t.offsetTime=0,t.legacyMode=!1,t.legacyCountdownRef=(0,j.createRef)(),t.tick=function(){var m=t.calcTimeDelta(),v=m.completed&&!t.props.overtime?void 0:t.props.onTick;t.setTimeDeltaState(m,void 0,v)},t.start=function(){if(!t.isStarted()){var m=t.offsetStartTimestamp;t.offsetStartTimestamp=0,t.offsetTime+=m?t.calcOffsetStartTimestamp()-m:0;var v=t.calcTimeDelta();t.setTimeDeltaState(v,"STARTED",t.props.onStart),!t.props.controlled&&(!v.completed||t.props.overtime)&&(t.clearTimer(),t.interval=window.setInterval(t.tick,t.props.intervalDelay))}},t.pause=function(){t.isPaused()||(t.clearTimer(),t.offsetStartTimestamp=t.calcOffsetStartTimestamp(),t.setTimeDeltaState(t.state.timeDelta,"PAUSED",t.props.onPause))},t.stop=function(){t.isStopped()||(t.clearTimer(),t.offsetStartTimestamp=t.calcOffsetStartTimestamp(),t.offsetTime=t.offsetStartTimestamp-t.initialTimestamp,t.setTimeDeltaState(t.calcTimeDelta(),"STOPPED",t.props.onStop))},t.isStarted=function(){return t.isStatus("STARTED")},t.isPaused=function(){return t.isStatus("PAUSED")},t.isStopped=function(){return t.isStatus("STOPPED")},t.isCompleted=function(){return t.isStatus("COMPLETED")},t.handleOnComplete=function(m){t.props.onComplete&&t.props.onComplete(m)},a.date){var g=t.calcTimeDelta();t.state={timeDelta:g,status:g.completed?"COMPLETED":"STOPPED"}}else t.legacyMode=!0;return t}return be(l,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,g=t.date,m=t.now,v=t.precision,A=t.controlled,D=t.overtime;return N(g,{now:m,precision:v,controlled:A,offsetTime:this.offsetTime,overtime:D})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,g,m){var v=this;if(!!this.mounted){var A;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),A=this.handleOnComplete);var D=function(){m&&m(v.state.timeDelta),A&&A(v.state.timeDelta)};return this.setState(function(P){var W=g||P.status;return t.completed&&!v.props.overtime?W="COMPLETED":!g&&W==="COMPLETED"&&(W="STOPPED"),{timeDelta:t,status:W}},D)}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,g=t.daysInHours,m=t.zeroPadTime,v=t.zeroPadDays,A=this.state.timeDelta;return Object.assign(Object.assign({},A),{api:this.getApi(),props:this.props,formatted:re(A,{daysInHours:g,zeroPadTime:m,zeroPadDays:v})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,g=t.count,m=t.children,v=t.onComplete;return(0,j.createElement)(R,{ref:this.legacyCountdownRef,count:g,onComplete:v},m)}var A=this.props,D=A.className,P=A.overtime,W=A.children,ne=A.renderer,q=this.getRenderProps();if(ne)return ne(q);if(W&&this.state.timeDelta.completed&&!P)return(0,j.cloneElement)(W,{countdown:q});var V=q.formatted,ce=V.days,xe=V.hours,Se=V.minutes,b=V.seconds;return(0,j.createElement)("span",{className:D},q.total<0?"-":"",ce,ce?":":"",xe,":",Se,":",b)}}]),l}(j.Component);J.defaultProps=Object.assign(Object.assign({},M),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),J.propTypes={date:(0,E.oneOfType)([(0,E.instanceOf)(Date),E.string,E.number]),daysInHours:E.bool,zeroPadTime:E.number,zeroPadDays:E.number,controlled:E.bool,intervalDelay:E.number,precision:E.number,autoStart:E.bool,overtime:E.bool,className:E.string,children:E.element,renderer:E.func,now:E.func,onMount:E.func,onStart:E.func,onPause:E.func,onStop:E.func,onTick:E.func,onComplete:E.func};var X=J,I=i(46677),he=i.n(I),me=i(31894),ee=i(8870),se=i(43581),le=i(9684),te=i(49155),Ae=i.n(te),n=i(85893),Ce,je=U.ZP.div(Ce||(Ce=(0,k.Z)([`
  position: relative;

  .top {

    h2 {
      position: relative;
      padding: 0 48px;
      color: #2f2e41;
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      word-break: break-word;
    }
  }

  .images {
    z-index: 10;
    display: block;
    width: 300px;
    height: 300px;
    margin: 0 auto;

    img {
      display: block;
      width: 100%;
      height: 100%;
      filter: drop-shadow(0px 0px 20px yellow);
      animation: change .5s;
    }

    @keyframes change {
      from {
        transform: scale(0);
        opacity: 0
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  .button {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    z-index: 110;
    position: relative;

    a {
    }
  }
`]))),De=function(o){var l=o.onDismiss,a=(0,se.YB)(),t="https://nft.ccp.dog/nft/images/312.png",g=(0,j.useRef)(null),m=(0,j.useCallback)(function(D){g.current=D},[]),v=(0,j.useCallback)(function(D,P,W){g.current&&g.current((0,ee.Z)((0,ee.Z)({},P),{},{origin:{y:W.y,x:W.x},particleCount:Math.floor(200*D)}))},[]),A=(0,j.useCallback)(function(D,P){v(.25,{spread:26,startVelocity:55},{x:D,y:P}),v(.2,{spread:60},{x:D,y:P}),v(.35,{spread:100,decay:.91,scalar:.8},{x:D,y:P}),v(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2},{x:D,y:P}),v(.1,{spread:120,startVelocity:45},{x:D,y:P})},[v]);return(0,j.useEffect)(function(){setTimeout(function(){return A(Math.random(),Math.random())},600);var D=setInterval(function(){A(Math.random(),Math.random())},2e3);return function(){return clearTimeout(D)}},[]),(0,n.jsx)(je,{children:(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)(Ae(),{style:{width:"calc(100% + 40px)",height:"calc(100% + 40px)",position:"absolute",left:"-20px",top:"-20px",zIndex:"100"},className:"yourClassName",refConfetti:function(P){return m(P)}}),(0,n.jsx)("h2",{children:(0,n.jsx)(O._H,{id:"pages.market.congratulations"})}),(0,n.jsx)("div",{className:"images",children:(0,n.jsx)("img",{src:t,alt:""})}),(0,n.jsx)("div",{className:"button",children:(0,n.jsx)(_.b,{text:a.formatMessage({id:"pages.market.open_box"}),onClick:function(){l(),le.m.push("/wallets/wallets")}})})]})})},Pe=i(34669),ge=i(54458),ve,Te=U.ZP.div(ve||(ve=(0,k.Z)([`
  margin-bottom: 20px;

  .ant-progress-show-info .ant-progress-outer {
    padding-right: 0;
    margin-right: 0;
    line-height: 1;
    font-size: 12px;
  }


  .ant-progress-inner, .ant-progress-success-bg, .ant-progress-bg {
    border-radius: 0;
    height: 20px !important;
    opacity: .8;
  }

  .ant-progress-bg {
    background-color: #1890ff;
  }

  .ant-progress-line {
    line-height: 1;
    font-size: 0;
  }

  .ant-progress-text {
    display: none;
  }

  .text_msg {
    p {
      font-size: 10px;
      color: rgb(80, 95, 121);
      display: flex;
      justify-content: center;
      margin-bottom: 0;

      span {
        font-size: 10px;
      }
    }

    p:first-child {
      display: block;
    }


  }

  .bar {
    position: relative;
    margin: 5px 0;

    .progres {
      display: flex;
    }

    .text_msg {
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;

      > p {
        justify-content: center;
        padding-right: 10px;
        align-items: center;

        &:first-child {
          display: block;
        }
      }

    }
  }

  .layput {
    display: flex;
    //justify-content: space-between;


    > div, > p {

      width: 29%;
      margin-right: 1%;
      flex: 3;

      &:first-child {
        //width: 22%;
        flex: 2;
        display: block;
        margin-right: 1%;

      }

      &:last-child {
        flex: 5;
        margin-right: 0;
        //width: 47%;
      }
    }
  }

`]))),ye=function(){var o=(0,K.f)(G.w.nft_blindBox_progress),l=o.request,a=o.data;return(0,j.useEffect)(function(){l("")},[]),a?(a=a.data,(0,n.jsxs)(Te,{children:[(0,n.jsxs)("div",{className:"text_msg layput",children:[(0,n.jsxs)("p",{children:[a[0].price," ",a[0].name]}),(0,n.jsxs)("p",{className:"two",children:[a[1].price," ",a[1].name]}),(0,n.jsxs)("p",{children:[a[2].price," ",a[2].name]})]}),(0,n.jsxs)("div",{className:"bar",children:[(0,n.jsxs)("div",{className:"progres layput",children:[(0,n.jsx)(ge.Z,{percent:a[0].scale*100}),(0,n.jsx)(ge.Z,{className:"two",percent:a[1].scale*100}),(0,n.jsx)(ge.Z,{percent:a[2].scale*100})]}),(0,n.jsxs)("div",{className:"text_msg layput",children:[(0,n.jsx)("p",{children:(0,n.jsxs)("span",{children:[a[0].scale*100,"%"]})}),(0,n.jsxs)("p",{className:"two",children:[a[1].scale*100,"%"]}),(0,n.jsxs)("p",{children:[a[2].scale*100,"%"]})]})]})]})):(0,n.jsx)("span",{})},we=i(82788),Oe,Le=U.ZP.div(Oe||(Oe=(0,k.Z)([`
  background: linear-gradient(rgb(242, 255, 247), rgb(224, 255, 237));
  width: 100%;
  border-radius: 15px;
  padding: 32px;
  text-align: center;

  .top {
    display: block;
    margin: 0 auto;
    width: 72px;
  }

  h2 {
    margin-top: 24px;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, .85);
    font-weight: bold;
  }

  h3 {
    color: #7cd770;
    margin-top: 24px;
    font-size: 24px;
    font-weight: 700;
  }

  .inner {
    padding: 16px 12px 18px;
    border-radius: 5px;
    text-align: center;
    background-color: white;
    margin-bottom: 20px;
    border: 1px solid #f0f0f0;

    h4 {

      text-align: center;
      margin-bottom: 0;

      span {
        font-size: 36px;
        font-weight: 600;
      }
    }

    h5 {
      font-size: 12px;
      margin-top: 5px;
      color: #505f79;
    }
  }

  .price {
    display: inline-block;
    margin: 0 auto;
    text-align: end;

    h5 {
      display: flex;
      align-items: end;
      justify-content: center;
      font-size: 22px;

      img {
        width: 30px;
        display: block;
        margin-right: 10px;
      }

      span {
        font-size: 16px;
        color: #666;
      }
    }
  }

  h6 {
    color: #44df84;
    margin-top: 20px;
  }

  @media (max-width: 576px) {
    padding: 12px;
    .inner {
      h4 {
        span {
          font-size: 28px;
        }
      }


    }

  }
`]))),Ze=function(o,l){var a={"M+":o.getMonth()+1,"d+":o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds(),"q+":Math.floor((o.getMonth()+3)/3),S:o.getMilliseconds()};/(y+)/.test(l)&&(l=l.replace(RegExp.$1,(o.getFullYear()+"").substr(4-RegExp.$1.length)));for(var t in a)new RegExp("("+t+")").test(l)&&(l=l.replace(RegExp.$1,RegExp.$1.length==1?a[t]:("00"+a[t]).substr((""+a[t]).length)));return l},He=function(){var o,l,a,t,g,m,v,A,D=(0,j.useState)(!1),P=(0,B.Z)(D,2),W=P[0],ne=P[1],q=(0,j.useContext)(me.tC),V=q.onPresent,ce=(0,K.f)(G.w.nftBlindBox),xe=ce.request,Se=ce.status,b=ce.data,Ge=(0,K.f)(G.w.nftBuy),We=Ge.request,ze=(0,K.f)(G.w.price),Xe=ze.request,Ie=ze.data,Je=(0,O.YB)(),qe=(0,j.useCallback)((0,u.Z)($().mark(function Ue(){var Re,ke,Ne,Fe;return $().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:return ke=Math.floor(Math.random()*10),(b==null||(Re=b.data)===null||Re===void 0?void 0:Re.box_count)<10&&(ke=Math.floor(Math.random()*(b==null||(Ne=b.data)===null||Ne===void 0?void 0:Ne.box_count))),ne(!0),ae.next=5,We(b.data[ke].id,"yes");case 5:if(Fe=ae.sent,ne(!1),!Fe.err){ae.next=10;break}return xe(),ae.abrupt("return",d.default.error(Fe.err));case 10:return V((0,n.jsx)(De,{})),ae.next=13,(0,we.getInitialState)();case 13:case"end":return ae.stop()}},Ue)})),[b,We,xe,b==null||(o=b.data)===null||o===void 0?void 0:o.box_count]);return(0,j.useEffect)(function(){xe(),Xe()},[]),(0,n.jsxs)(Le,{children:[(0,n.jsx)("img",{src:ie(),alt:"",className:"top"}),(0,n.jsx)("h2",{children:"CCP DOG NFT"}),(0,n.jsxs)("h3",{children:[(0,n.jsx)(O._H,{id:"pages.market.total_number"}),": ",b==null||(l=b.data)===null||l===void 0?void 0:l.box_count]}),(0,n.jsxs)("div",{className:"inner",children:[(b==null||(a=b.data)===null||a===void 0?void 0:a.begin_time)&&(0,n.jsx)("h4",{children:(0,n.jsx)(X,{date:(b==null||(t=b.data)===null||t===void 0?void 0:t.begin_time)*1e3,renderer:Qe})}),(0,n.jsxs)("h5",{className:"bottom",children:[(0,n.jsx)(O._H,{id:"pages.market.rush_time"}),": ",(b==null||(g=b.data)===null||g===void 0?void 0:g.begin_time)&&Ze(new Date((b==null||(m=b.data)===null||m===void 0?void 0:m.begin_time)*1e3),"yyyy-MM-dd hh:mm:ss")]})]}),(0,n.jsx)("div",{className:"price",children:(0,n.jsxs)("h5",{children:[(0,n.jsx)("img",{src:he(),alt:""}),"699 CCP ",(0,n.jsxs)("span",{children:[" \u2248 $ ",(699*(1/(Ie==null||(v=Ie.data)===null||v===void 0?void 0:v[2].usdt_price))).toFixed()]})]})}),(0,n.jsx)("div",{children:(0,n.jsx)(ye,{})}),(0,n.jsx)("div",{children:W||Se==K.o.wait?(0,n.jsx)(p.Z,{}):(0,n.jsx)(_.b,{disabled:(b==null||(A=b.data)===null||A===void 0?void 0:A.box_count)==0,onClick:function(){return qe()},text:Je.formatMessage({id:"component.nft_car.confirm_purchase"})})})]})},Qe=function(o){var l=o.days,a=o.hours,t=o.minutes,g=o.seconds,m=o.completed;return(0,n.jsxs)("span",{children:[l,"D:",a,"h:",t,"m:",g,"s"]})},Ke=i(18572),Ve=i.n(Ke),Be,$e=U.ZP.div(Be||(Be=(0,k.Z)([`
  padding: 30px;
  box-sizing: border-box;

  .top {

    margin-top: 40px;
    margin-bottom: 40px;

    img {
      max-width: 100%;
      max-height: 200px;
      margin: 0 auto;
      display: block;
    }

    h3 {
      color: rgb(80, 95, 121);
      font-size: 16px;
      margin-top: 6px;
      text-align: center;
    }

  }

  .box {
    box-shadow: 0 8px 30px 0 rgb(117 219 141 / 24%);
    padding: 32px;
    border-radius: 32px;

    .right {
      //width: 500px;

      > div:first-child {
        background: #f8f9fc;
        border-bottom: none;
        p {
          color: #666d7f;
        }
      }

      >div:last-child {
        border-bottom: none;
      }

      > div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e6ebf5;
        p {
          flex: 1;
          margin-bottom: 0;
          padding: 10px 0;
          text-align: center;
          font-size: 14px;
          color: #111e36;
        }
      }
    }
  }

  @media (max-width: 976px) {
    .box{
      .right {
        margin-top: 20px;

      }
    }
  }
  @media (max-width: 576px) {
    padding: 12px;
    .box{
      padding: 12px;
      .right {
        margin-top: 20px;

      }
    }
  }
`]))),Ye=function(){return(0,n.jsxs)($e,{children:[(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("img",{src:Ve(),alt:""}),(0,n.jsx)("h3",{children:(0,n.jsx)(O._H,{id:"pages.market.top_msg"})})]}),(0,n.jsx)("div",{className:"box",children:(0,n.jsxs)(H.Z,{gutter:48,children:[(0,n.jsx)(S.Z,{span:6,xs:24,sm:24,md:12,lg:10,children:(0,n.jsx)(He,{})}),(0,n.jsx)(S.Z,{span:6,xs:24,sm:24,md:12,lg:14,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.class"})}),(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.rarity"})}),(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.proportion"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.greyhound"})}),(0,n.jsx)("p",{children:"SSR"}),(0,n.jsx)("p",{children:"2%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.belgian_malinois"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"4%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.saluki"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"8%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.hungarian_vizsla"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"7%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.afghan_hound"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"9%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.whippet"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"10%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.jack_russell_terrier"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"13%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.dalmatian"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"22%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(O._H,{id:"pages.market.russian_wolfhound"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"25%"})]})]})})]})})]})}},67329:function(Z,w,i){"use strict";i.d(w,{f:function(){return U},o:function(){return f}});var F=i(3182),H=i(2824),Q=i(94043),S=i.n(Q),k=i(67294),U=function(c){var d=(0,k.useState)(f.start),u=(0,H.Z)(d,2),B=u[0],L=u[1],$=(0,k.useState)(),j=(0,H.Z)($,2),_=j[0],Y=j[1],ie=(0,k.useCallback)((0,F.Z)(S().mark(function G(){var K,O,E=arguments;return S().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.prev=0,L(f.wait),z.next=4,c.apply(void 0,E);case 4:return K=z.sent,Y(K),L(f.success),z.abrupt("return",K);case 10:return z.prev=10,z.t0=z.catch(0),O={err:z.t0.info},Y(O),L(f.failure),z.abrupt("return",O);case 16:case"end":return z.stop()}},G,null,[[0,10]])})),[L,Y]);return{status:B,request:ie,data:_}},f;(function(p){p[p.start=0]="start",p[p.wait=1]="wait",p[p.success=2]="success",p[p.failure=3]="failure"})(f||(f={}))},46677:function(Z){Z.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},18572:function(Z,w,i){Z.exports=i.p+"static/mysterious.98c98ffc.png"},63757:function(Z,w,i){Z.exports=i.p+"static/mystery_header.ab029946.png"},15746:function(Z,w,i){"use strict";var F=i(21584);w.Z=F.Z},89032:function(Z,w,i){"use strict";var F=i(38663),H=i.n(F),Q=i(6999)},71230:function(Z,w,i){"use strict";var F=i(92820);w.Z=F.Z},13062:function(Z,w,i){"use strict";var F=i(38663),H=i.n(F),Q=i(6999)},22439:function(Z,w,i){"use strict";i.r(w),i.d(w,{create:function(){return H}});var F={};(function Q(S,k,U,f){var p=!!(S.Worker&&S.Blob&&S.Promise&&S.OffscreenCanvas&&S.OffscreenCanvasRenderingContext2D&&S.HTMLCanvasElement&&S.HTMLCanvasElement.prototype.transferControlToOffscreen&&S.URL&&S.URL.createObjectURL);function c(){}function d(r){var e=k.exports.Promise,x=e!==void 0?e:S.Promise;return typeof x=="function"?new x(r):(r(c,c),null)}var u=function(){var r=Math.floor(1e3/60),e,x,y={},T=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(C){var h=Math.random();return y[h]=requestAnimationFrame(function M(N){T===N||T+r-1<N?(T=N,delete y[h],C()):y[h]=requestAnimationFrame(M)}),h},x=function(C){y[C]&&cancelAnimationFrame(y[C])}):(e=function(C){return setTimeout(C,r)},x=function(C){return clearTimeout(C)}),{frame:e,cancel:x}}(),B=function(){var r,e,x={};function y(T){function C(h,M){T.postMessage({options:h||{},callback:M})}T.init=function(M){var N=M.transferControlToOffscreen();T.postMessage({canvas:N},[N])},T.fire=function(M,N,re){if(e)return C(M,null),e;var R=Math.random().toString(36).slice(2);return e=d(function(J){function X(I){I.data.callback===R&&(delete x[R],T.removeEventListener("message",X),e=null,re(),J())}T.addEventListener("message",X),C(M,R),x[R]=X.bind(null,{data:{callback:R}})}),e},T.reset=function(){T.postMessage({reset:!0});for(var M in x)x[M](),delete x[M]}}return function(){if(r)return r;if(!U&&p){var T=["var CONFETTI, SIZE = {}, module = {};","("+Q.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([T])))}catch(C){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",C),null}y(r)}return r}}(),L={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function $(r,e){return e?e(r):r}function j(r){return r!=null}function _(r,e,x){return $(r&&j(r[e])?r[e]:L[e],x)}function Y(r){return r<0?0:Math.floor(r)}function ie(r,e){return Math.floor(Math.random()*(e-r))+r}function G(r){return parseInt(r,16)}function K(r){return r.map(O)}function O(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:G(e.substring(0,2)),g:G(e.substring(2,4)),b:G(e.substring(4,6))}}function E(r){var e=_(r,"origin",Object);return e.x=_(e,"x",Number),e.y=_(e,"y",Number),e}function de(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function z(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function be(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function _e(r,e,x,y,T,C,h,M,N){r.save(),r.translate(e,x),r.rotate(C),r.scale(y,T),r.arc(0,0,1,h,M,N),r.restore()}function oe(r){var e=r.angle*(Math.PI/180),x=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*x-Math.random()*x),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar}}function ue(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var x=e.tick++/e.totalTicks,y=e.x+e.random*e.tiltCos,T=e.y+e.random*e.tiltSin,C=e.wobbleX+e.random*e.tiltCos,h=e.wobbleY+e.random*e.tiltSin;return r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-x)+")",r.beginPath(),e.shape==="circle"?r.ellipse?r.ellipse(e.x,e.y,Math.abs(C-y)*e.ovalScalar,Math.abs(h-T)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):_e(r,e.x,e.y,Math.abs(C-y)*e.ovalScalar,Math.abs(h-T)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(T)),r.lineTo(Math.floor(C),Math.floor(h)),r.lineTo(Math.floor(y),Math.floor(e.wobbleY))),r.closePath(),r.fill(),e.tick<e.totalTicks}function Me(r,e,x,y,T){var C=e.slice(),h=r.getContext("2d"),M,N,re=d(function(R){function J(){M=N=null,h.clearRect(0,0,y.width,y.height),T(),R()}function X(){U&&!(y.width===f.width&&y.height===f.height)&&(y.width=r.width=f.width,y.height=r.height=f.height),!y.width&&!y.height&&(x(r),y.width=r.width,y.height=r.height),h.clearRect(0,0,y.width,y.height),C=C.filter(function(I){return ue(h,I)}),C.length?M=u.frame(X):J()}M=u.frame(X),N=J});return{addFettis:function(R){return C=C.concat(R),re},canvas:r,promise:re,reset:function(){M&&u.cancel(M),N&&N()}}}function Ee(r,e){var x=!r,y=!!_(e||{},"resize"),T=_(e,"disableForReducedMotion",Boolean),C=p&&!!_(e||{},"useWorker"),h=C?B():null,M=x?de:z,N=r&&h?!!r.__confetti_initialized:!1,re=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,R;function J(I,he,me){for(var ee=_(I,"particleCount",Y),se=_(I,"angle",Number),le=_(I,"spread",Number),te=_(I,"startVelocity",Number),Ae=_(I,"decay",Number),n=_(I,"gravity",Number),Ce=_(I,"drift",Number),je=_(I,"colors",K),De=_(I,"ticks",Number),Pe=_(I,"shapes"),ge=_(I,"scalar"),ve=E(I),Te=ee,ye=[],we=r.width*ve.x,Oe=r.height*ve.y;Te--;)ye.push(oe({x:we,y:Oe,angle:se,spread:le,startVelocity:te,color:je[Te%je.length],shape:Pe[ie(0,Pe.length)],ticks:De,decay:Ae,gravity:n,drift:Ce,scalar:ge}));return R?R.addFettis(ye):(R=Me(r,ye,M,he,me),R.promise)}function X(I){var he=T||_(I,"disableForReducedMotion",Boolean),me=_(I,"zIndex",Number);if(he&&re)return d(function(te){te()});x&&R?r=R.canvas:x&&!r&&(r=be(me),document.body.appendChild(r)),y&&!N&&M(r);var ee={width:r.width,height:r.height};h&&!N&&h.init(r),N=!0,h&&(r.__confetti_initialized=!0);function se(){if(h){var te={getBoundingClientRect:function(){if(!x)return r.getBoundingClientRect()}};M(te),h.postMessage({resize:{width:te.width,height:te.height}});return}ee.width=ee.height=null}function le(){R=null,y&&S.removeEventListener("resize",se),x&&r&&(document.body.removeChild(r),r=null,N=!1)}return y&&S.addEventListener("resize",se,!1),h?h.fire(I,ee,le):J(I,ee,le)}return X.reset=function(){h&&h.reset(),R&&R.reset()},X}var fe;function pe(){return fe||(fe=Ee(null,{useWorker:!0,resize:!0})),fe}k.exports=function(){return pe().apply(this,arguments)},k.exports.reset=function(){pe().reset()},k.exports.create=Ee})(function(){return typeof window!="undefined"?window:typeof self!="undefined"?self:this||{}}(),F,!1),w.default=F.exports;var H=F.exports.create},49155:function(Z,w,i){"use strict";var F=this&&this.__extends||function(){var f=function(p,c){return f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,u){d.__proto__=u}||function(d,u){for(var B in u)Object.prototype.hasOwnProperty.call(u,B)&&(d[B]=u[B])},f(p,c)};return function(p,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");f(p,c);function d(){this.constructor=p}p.prototype=c===null?Object.create(c):(d.prototype=c.prototype,new d)}}(),H=this&&this.__rest||function(f,p){var c={};for(var d in f)Object.prototype.hasOwnProperty.call(f,d)&&p.indexOf(d)<0&&(c[d]=f[d]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,d=Object.getOwnPropertySymbols(f);u<d.length;u++)p.indexOf(d[u])<0&&Object.prototype.propertyIsEnumerable.call(f,d[u])&&(c[d[u]]=f[d[u]]);return c},Q=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(w,"__esModule",{value:!0});var S=Q(i(22439)),k=Q(i(67294)),U=function(f){F(p,f);function p(c){var d=f.call(this,c)||this;return d.refCanvas=k.default.createRef(),d.confetti=null,d}return p.prototype.componentDidMount=function(){if(!!this.refCanvas.current){var c=this.props,d=c.resize,u=c.useWorker,B={resize:typeof d=="undefined"?!0:d,useWorker:typeof u=="undefined"?!0:u};this.confetti=S.default.create(this.refCanvas.current,B),this.setRefConfetti()}},p.prototype.componentDidUpdate=function(c){var d=this.props,u=d.fire,B=d.reset,L=!!u,$=u!==c.fire;L&&$&&this.fireConfetti();var j=!!B,_=B!==c.reset;j&&_&&this.resetConfetti()},p.prototype.componentWillUnmount=function(){this.unsetRefConfetti()},p.prototype.setRefConfetti=function(){var c=this.props.refConfetti;c&&c(this.confetti)},p.prototype.unsetRefConfetti=function(){var c=this.props.refConfetti;c&&c(null)},p.prototype.fireConfetti=function(){if(!!this.confetti){var c=this.props,d=c.onFire,u=c.onDecay,B=c.onReset,L=c.className,$=c.style,j=c.width,_=c.height,Y=c.refConfetti,ie=c.fire,G=c.reset,K=H(c,["onFire","onDecay","onReset","className","style","width","height","refConfetti","fire","reset"]);d&&d();var O=this.confetti(K);O&&O.then(function(){u&&u()})}},p.prototype.resetConfetti=function(){if(!!this.confetti){this.confetti.reset();var c=this.props.onReset;c&&c()}},p.prototype.render=function(){var c=this.props,d=c.style,u=c.className,B=c.width,L=c.height;return k.default.createElement("canvas",{ref:this.refCanvas,style:d,className:u,width:B,height:L})},p}(k.default.Component);w.default=U}}]);
