(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[464],{79508:function(j,h,a){"use strict";a.d(h,{Z:function(){return E}});var y=a(28991),O=a(67294),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},R=w,b=a(27029),D=function(U,B){return O.createElement(b.Z,(0,y.Z)((0,y.Z)({},U),{},{ref:B,icon:R}))};D.displayName="CheckOutlined";var E=O.forwardRef(D)},16993:function(j,h,a){"use strict";a.d(h,{b:function(){return U}});var y=a(57663),O=a(71577),w=a(20310),R=a(67294),b=a(47416),D=a(85893),E,_=(0,b.ZP)(O.Z)(E||(E=(0,w.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(B){var P=B.disabled;return P&&.5}),U=function(P){var Z=P.text,M=P.block,z=M===void 0?!0:M,f=P.onClick,W=P.disabled,N=W===void 0?!1:W;return(0,D.jsx)(_,{type:"default",shape:"round",disabled:N,onClick:function(){N||f&&f()},size:"large",block:z,children:Z})}},16425:function(j,h,a){"use strict";a.r(h),a.d(h,{default:function(){return Qe}});var y=a(13062),O=a(71230),w=a(89032),R=a(15746),b=a(20310),D=a(47416),E=a(20228),_=a(11382),U=a(34792),B=a(55026),P=a(3182),Z=a(2824),M=a(94043),z=a.n(M),f=a(67294),W=a(16993),N=a(63757),H=a.n(N),F=a(93874),S=a(67329),m=a(28219),c=a(45697);function G(s,r){if(!(s instanceof r))throw new TypeError("Cannot call a class as a function")}function x(s,r){for(var i=0;i<r.length;i++){var n=r[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function se(s,r,i){return r&&x(s.prototype,r),i&&x(s,i),s}function ie(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(r&&r.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),r&&Y(s,r)}function $(s){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)},$(s)}function Y(s,r){return Y=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},Y(s,r)}function ve(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(s){return!1}}function xe(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function ye(s,r){return r&&(typeof r=="object"||typeof r=="function")?r:xe(s)}function oe(s){var r=ve();return function(){var n=$(s),e;if(r){var d=$(this).constructor;e=Reflect.construct(n,arguments,d)}else e=n.apply(this,arguments);return ye(this,e)}}function _e(s){return je(s)||Ee(s)||be(s)||Ae()}function je(s){if(Array.isArray(s))return V(s)}function Ee(s){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(s))return Array.from(s)}function be(s,r){if(!!s){if(typeof s=="string")return V(s,r);var i=Object.prototype.toString.call(s).slice(8,-1);if(i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set")return Array.from(s);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return V(s,r)}}function V(s,r){(r==null||r>s.length)&&(r=s.length);for(var i=0,n=new Array(r);i<r;i++)n[i]=s[i];return n}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,i=String(s);if(r===0)return i;var n=i.match(/(.*?)([0-9]+)(.*)/),e=n?n[1]:"",d=n?n[3]:"",o=n?n[2]:i,u=o.length>=r?o:(_e(Array(r)).map(function(){return"0"}).join("")+o).slice(r*-1);return"".concat(e).concat(u).concat(d)}var le={daysInHours:!1,zeroPadTime:2};function Te(s){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.now,n=i===void 0?Date.now:i,e=r.precision,d=e===void 0?0:e,o=r.controlled,u=r.offsetTime,p=u===void 0?0:u,A=r.overtime,g;typeof s=="string"?g=new Date(s).getTime():s instanceof Date?g=s.getTime():g=s,o||(g+=p);var v=o?g:g-n(),I=Math.min(20,Math.max(0,d)),C=Math.round(parseFloat(((A?v:Math.max(0,v))/1e3).toFixed(I))*1e3),T=Math.abs(C)/1e3;return{total:C,days:Math.floor(T/(3600*24)),hours:Math.floor(T/3600%24),minutes:Math.floor(T/60%60),seconds:Math.floor(T%60),milliseconds:Number((T%1*1e3).toFixed()),completed:C<=0}}function Oe(s,r){var i=s.days,n=s.hours,e=s.minutes,d=s.seconds,o=Object.assign(Object.assign({},le),r),u=o.daysInHours,p=o.zeroPadTime,A=o.zeroPadDays,g=A===void 0?p:A,v=Math.min(2,p),I=u?Q(n+i*24,p):Q(n,v);return{days:u?"":Q(i,g),hours:I,minutes:Q(e,v),seconds:Q(d,v)}}var de=function(s){ie(i,s);var r=oe(i);function i(){var n;return G(this,i),n=r.apply(this,arguments),n.state={count:n.props.count||3},n.startCountdown=function(){n.interval=window.setInterval(function(){var e=n.state.count-1;e===0?(n.stopCountdown(),n.props.onComplete&&n.props.onComplete()):n.setState(function(d){return{count:d.count-1}})},1e3)},n.stopCountdown=function(){clearInterval(n.interval)},n.addTime=function(e){n.stopCountdown(),n.setState(function(d){return{count:d.count+e}},n.startCountdown)},n}return se(i,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,f.cloneElement)(this.props.children,{count:this.state.count}):null}}]),i}(f.Component);de.propTypes={count:c.number,children:c.element,onComplete:c.func};var X=function(s){ie(i,s);var r=oe(i);function i(n){var e;if(G(this,i),e=r.call(this,n),e.mounted=!1,e.initialTimestamp=e.calcOffsetStartTimestamp(),e.offsetStartTimestamp=e.props.autoStart?0:e.initialTimestamp,e.offsetTime=0,e.legacyMode=!1,e.legacyCountdownRef=(0,f.createRef)(),e.tick=function(){var o=e.calcTimeDelta(),u=o.completed&&!e.props.overtime?void 0:e.props.onTick;e.setTimeDeltaState(o,void 0,u)},e.start=function(){if(!e.isStarted()){var o=e.offsetStartTimestamp;e.offsetStartTimestamp=0,e.offsetTime+=o?e.calcOffsetStartTimestamp()-o:0;var u=e.calcTimeDelta();e.setTimeDeltaState(u,"STARTED",e.props.onStart),!e.props.controlled&&(!u.completed||e.props.overtime)&&(e.clearTimer(),e.interval=window.setInterval(e.tick,e.props.intervalDelay))}},e.pause=function(){e.isPaused()||(e.clearTimer(),e.offsetStartTimestamp=e.calcOffsetStartTimestamp(),e.setTimeDeltaState(e.state.timeDelta,"PAUSED",e.props.onPause))},e.stop=function(){e.isStopped()||(e.clearTimer(),e.offsetStartTimestamp=e.calcOffsetStartTimestamp(),e.offsetTime=e.offsetStartTimestamp-e.initialTimestamp,e.setTimeDeltaState(e.calcTimeDelta(),"STOPPED",e.props.onStop))},e.isStarted=function(){return e.isStatus("STARTED")},e.isPaused=function(){return e.isStatus("PAUSED")},e.isStopped=function(){return e.isStatus("STOPPED")},e.isCompleted=function(){return e.isStatus("COMPLETED")},e.handleOnComplete=function(o){e.props.onComplete&&e.props.onComplete(o)},n.date){var d=e.calcTimeDelta();e.state={timeDelta:d,status:d.completed?"COMPLETED":"STOPPED"}}else e.legacyMode=!0;return e}return se(i,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,d=e.date,o=e.now,u=e.precision,p=e.controlled,A=e.overtime;return Te(d,{now:o,precision:u,controlled:p,offsetTime:this.offsetTime,overtime:A})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,d,o){var u=this;if(!!this.mounted){var p;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),p=this.handleOnComplete);var A=function(){o&&o(u.state.timeDelta),p&&p(u.state.timeDelta)};return this.setState(function(g){var v=d||g.status;return e.completed&&!u.props.overtime?v="COMPLETED":!d&&v==="COMPLETED"&&(v="STOPPED"),{timeDelta:e,status:v}},A)}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,d=e.daysInHours,o=e.zeroPadTime,u=e.zeroPadDays,p=this.state.timeDelta;return Object.assign(Object.assign({},p),{api:this.getApi(),props:this.props,formatted:Oe(p,{daysInHours:d,zeroPadTime:o,zeroPadDays:u})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,d=e.count,o=e.children,u=e.onComplete;return(0,f.createElement)(de,{ref:this.legacyCountdownRef,count:d,onComplete:u},o)}var p=this.props,A=p.className,g=p.overtime,v=p.children,I=p.renderer,C=this.getRenderProps();if(I)return I(C);if(v&&this.state.timeDelta.completed&&!g)return(0,f.cloneElement)(v,{countdown:C});var T=C.formatted,L=T.days,K=T.hours,q=T.minutes,l=T.seconds;return(0,f.createElement)("span",{className:A},C.total<0?"-":"",L,L?":":"",K,":",q,":",l)}}]),i}(f.Component);X.defaultProps=Object.assign(Object.assign({},le),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),X.propTypes={date:(0,c.oneOfType)([(0,c.instanceOf)(Date),c.string,c.number]),daysInHours:c.bool,zeroPadTime:c.number,zeroPadDays:c.number,controlled:c.bool,intervalDelay:c.number,precision:c.number,autoStart:c.bool,overtime:c.bool,className:c.string,children:c.element,renderer:c.func,now:c.func,onMount:c.func,onStart:c.func,onPause:c.func,onStop:c.func,onTick:c.func,onComplete:c.func};var De=X,Pe=a(46677),Ce=a.n(Pe),Me=a(31894),Se=a(43581),Ie=a(9684),t=a(85893),ce,we=D.ZP.div(ce||(ce=(0,b.Z)([`
  .top {
    margin-bottom: 30px;

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
    display: block;
    width: 70%;
    margin: 0 auto;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    a {
    }
  }
`]))),Re=function(r){var i=r.onDismiss,n=(0,Se.YB)();return(0,t.jsx)(we,{children:(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)("h2",{children:(0,t.jsx)(m._H,{id:"pages.market.congratulations"})}),(0,t.jsx)("img",{src:H(),alt:"",className:"images"}),(0,t.jsx)("div",{className:"button",children:(0,t.jsx)(W.b,{text:n.formatMessage({id:"pages.market.open_box"}),onClick:function(){i(),Ie.m.push("/wallets/wallets")}})})]})})},Ve=a(34669),J=a(32074),ue,Be=D.ZP.div(ue||(ue=(0,b.Z)([`
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

`]))),Ne=function(){var r=(0,S.f)(F.w.nft_blindBox_progress),i=r.request,n=r.data;return(0,f.useEffect)(function(){i("")},[]),n?(n=n.data,(0,t.jsxs)(Be,{children:[(0,t.jsxs)("div",{className:"text_msg layput",children:[(0,t.jsxs)("p",{children:[n[0].price," ",n[0].name]}),(0,t.jsxs)("p",{className:"two",children:[n[1].price,"  ",n[1].name]}),(0,t.jsxs)("p",{children:[n[2].price,"  ",n[2].name]})]}),(0,t.jsxs)("div",{className:"bar",children:[(0,t.jsxs)("div",{className:"progres layput",children:[(0,t.jsx)(J.Z,{percent:n[0].scale*100}),(0,t.jsx)(J.Z,{className:"two",percent:n[1].scale*100}),(0,t.jsx)(J.Z,{percent:n[2].scale*100})]}),(0,t.jsxs)("div",{className:"text_msg layput",children:[(0,t.jsx)("p",{children:(0,t.jsxs)("span",{children:[n[0].scale*100,"%"]})}),(0,t.jsxs)("p",{className:"two",children:[n[1].scale*100,"%"]}),(0,t.jsxs)("p",{children:[n[2].scale*100,"%"]})]})]})]})):(0,t.jsx)("span",{})},ke=a(82788),pe,We=D.ZP.div(pe||(pe=(0,b.Z)([`
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
`]))),Ue=function(r,i){var n={"M+":r.getMonth()+1,"d+":r.getDate(),"h+":r.getHours(),"m+":r.getMinutes(),"s+":r.getSeconds(),"q+":Math.floor((r.getMonth()+3)/3),S:r.getMilliseconds()};/(y+)/.test(i)&&(i=i.replace(RegExp.$1,(r.getFullYear()+"").substr(4-RegExp.$1.length)));for(var e in n)new RegExp("("+e+")").test(i)&&(i=i.replace(RegExp.$1,RegExp.$1.length==1?n[e]:("00"+n[e]).substr((""+n[e]).length)));return i},ze=function(){var r,i,n,e,d,o,u,p,A=(0,f.useState)(!1),g=(0,Z.Z)(A,2),v=g[0],I=g[1],C=(0,f.useContext)(Me.tC),T=C.onPresent,L=(0,S.f)(F.w.nftBlindBox),K=L.request,q=L.status,l=L.data,Ke=(0,S.f)(F.w.nftBuy),fe=Ke.request,he=(0,S.f)(F.w.price),$e=he.request,ee=he.data,Ge=(0,m.YB)(),Ye=(0,f.useCallback)((0,P.Z)(z().mark(function ge(){var te,ne,re,ae;return z().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return ne=Math.floor(Math.random()*10),(l==null||(te=l.data)===null||te===void 0?void 0:te.box_count)<10&&(ne=Math.floor(Math.random()*(l==null||(re=l.data)===null||re===void 0?void 0:re.box_count))),I(!0),k.next=5,fe(l.data[ne].id,"yes");case 5:if(ae=k.sent,I(!1),!ae.err){k.next=10;break}return K(),k.abrupt("return",B.default.error(ae.err));case 10:return T((0,t.jsx)(Re,{})),k.next=13,(0,ke.getInitialState)();case 13:case"end":return k.stop()}},ge)})),[l,fe,K,l==null||(r=l.data)===null||r===void 0?void 0:r.box_count]);return(0,f.useEffect)(function(){K(),$e()},[]),(0,t.jsxs)(We,{children:[(0,t.jsx)("img",{src:H(),alt:"",className:"top"}),(0,t.jsx)("h2",{children:"CCP DOG NFT"}),(0,t.jsxs)("h3",{children:[(0,t.jsx)(m._H,{id:"pages.market.total_number"}),": ",l==null||(i=l.data)===null||i===void 0?void 0:i.box_count]}),(0,t.jsxs)("div",{className:"inner",children:[(l==null||(n=l.data)===null||n===void 0?void 0:n.begin_time)&&(0,t.jsx)("h4",{children:(0,t.jsx)(De,{date:(l==null||(e=l.data)===null||e===void 0?void 0:e.begin_time)*1e3,renderer:Fe})}),(0,t.jsxs)("h5",{className:"bottom",children:[(0,t.jsx)(m._H,{id:"pages.market.rush_time"}),": ",(l==null||(d=l.data)===null||d===void 0?void 0:d.begin_time)&&Ue(new Date((l==null||(o=l.data)===null||o===void 0?void 0:o.begin_time)*1e3),"yyyy-MM-dd hh:mm:ss")]})]}),(0,t.jsx)("div",{className:"price",children:(0,t.jsxs)("h5",{children:[(0,t.jsx)("img",{src:Ce(),alt:""}),"299 CCP ",(0,t.jsxs)("span",{children:[" \u2248 $ ",(299*(1/(ee==null||(u=ee.data)===null||u===void 0?void 0:u[2].usdt_price))).toFixed()]})]})}),(0,t.jsx)("div",{children:(0,t.jsx)(Ne,{})}),(0,t.jsx)("div",{children:v||q==S.o.wait?(0,t.jsx)(_.Z,{}):(0,t.jsx)(W.b,{disabled:(l==null||(p=l.data)===null||p===void 0?void 0:p.box_count)==0,onClick:function(){return Ye()},text:Ge.formatMessage({id:"component.nft_car.confirm_purchase"})})})]})},Fe=function(r){var i=r.days,n=r.hours,e=r.minutes,d=r.seconds,o=r.completed;return(0,t.jsxs)("span",{children:[i,"D:",n,"h:",e,"m:",d,"s"]})},Le=a(18572),Ze=a.n(Le),me,He=D.ZP.div(me||(me=(0,b.Z)([`
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
`]))),Qe=function(){return(0,t.jsxs)(He,{children:[(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)("img",{src:Ze(),alt:""}),(0,t.jsx)("h3",{children:(0,t.jsx)(m._H,{id:"pages.market.top_msg"})})]}),(0,t.jsx)("div",{className:"box",children:(0,t.jsxs)(O.Z,{gutter:48,children:[(0,t.jsx)(R.Z,{span:6,xs:24,sm:24,md:12,lg:10,children:(0,t.jsx)(ze,{})}),(0,t.jsx)(R.Z,{span:6,xs:24,sm:24,md:12,lg:14,children:(0,t.jsxs)("div",{className:"right",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.class"})}),(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.rarity"})}),(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.proportion"})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.greyhound"})}),(0,t.jsx)("p",{children:"SSR"}),(0,t.jsx)("p",{children:"2%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.belgian_malinois"})}),(0,t.jsx)("p",{children:"SR"}),(0,t.jsx)("p",{children:"4%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.saluki"})}),(0,t.jsx)("p",{children:"SR"}),(0,t.jsx)("p",{children:"8%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.hungarian_vizsla"})}),(0,t.jsx)("p",{children:"SR"}),(0,t.jsx)("p",{children:"7%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.afghan_hound"})}),(0,t.jsx)("p",{children:"R"}),(0,t.jsx)("p",{children:"9%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.whippet"})}),(0,t.jsx)("p",{children:"R"}),(0,t.jsx)("p",{children:"10%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.jack_russell_terrier"})}),(0,t.jsx)("p",{children:"N"}),(0,t.jsx)("p",{children:"13%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.dalmatian"})}),(0,t.jsx)("p",{children:"N"}),(0,t.jsx)("p",{children:"22%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(m._H,{id:"pages.market.russian_wolfhound"})}),(0,t.jsx)("p",{children:"N"}),(0,t.jsx)("p",{children:"25%"})]})]})})]})})]})}},67329:function(j,h,a){"use strict";a.d(h,{f:function(){return D},o:function(){return E}});var y=a(3182),O=a(2824),w=a(94043),R=a.n(w),b=a(67294),D=function(U){var B=(0,b.useState)(E.start),P=(0,O.Z)(B,2),Z=P[0],M=P[1],z=(0,b.useState)(),f=(0,O.Z)(z,2),W=f[0],N=f[1],H=(0,b.useCallback)((0,y.Z)(R().mark(function F(){var S,m,c=arguments;return R().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,M(E.wait),x.next=4,U.apply(void 0,c);case 4:return S=x.sent,N(S),M(E.success),x.abrupt("return",S);case 10:return x.prev=10,x.t0=x.catch(0),m={err:x.t0.info},N(m),M(E.failure),x.abrupt("return",m);case 16:case"end":return x.stop()}},F,null,[[0,10]])})),[M,N]);return{status:Z,request:H,data:W}},E;(function(_){_[_.start=0]="start",_[_.wait=1]="wait",_[_.success=2]="success",_[_.failure=3]="failure"})(E||(E={}))},46677:function(j){j.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},18572:function(j,h,a){j.exports=a.p+"static/mysterious.98c98ffc.png"},63757:function(j,h,a){j.exports=a.p+"static/mystery_header.ab029946.png"},15746:function(j,h,a){"use strict";var y=a(21584);h.Z=y.Z},89032:function(j,h,a){"use strict";var y=a(65056),O=a.n(y),w=a(6999)},71230:function(j,h,a){"use strict";var y=a(92820);h.Z=y.Z},13062:function(j,h,a){"use strict";var y=a(65056),O=a.n(y),w=a(6999)}}]);
