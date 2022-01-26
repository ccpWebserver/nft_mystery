(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[464],{80638:function(){},16993:function(M,E,t){"use strict";t.d(E,{b:function(){return Y}});var u=t(57663),g=t(71577),I=t(20310),R=t(67294),A=t(47416),z=t(85893),B,T=(0,A.ZP)(g.Z)(B||(B=(0,I.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),Y=function(U){var Q=U.text,i=U.block,L=i===void 0?!0:i,f=U.onClick;return(0,z.jsx)(T,{type:"default",shape:"round",onClick:function(){return f&&f()},size:"large",block:L,children:Q})}},63451:function(M,E,t){"use strict";t.r(E),t.d(E,{default:function(){return Ce}});var u=t(13062),g=t(71230),I=t(89032),R=t(15746),A=t(20310),z=t(47416),B=t(20228),T=t(11382),Y=t(34792),G=t(55026),U=t(3182),Q=t(2824),i=t(94043),L=t.n(i),f=t(67294),y=t(16993),l=t(63757),k=t.n(l),x=t(93874),p=t(67329),C=t(53190),c=t(45697);function ee(a,s){if(!(a instanceof s))throw new TypeError("Cannot call a class as a function")}function O(a,s){for(var o=0;o<s.length;o++){var n=s[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function te(a,s,o){return s&&O(a.prototype,s),o&&O(a,o),a}function J(a,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(s&&s.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),s&&H(a,s)}function N(a){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},N(a)}function H(a,s){return H=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},H(a,s)}function de(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function oe(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function ne(a,s){return s&&(typeof s=="object"||typeof s=="function")?s:oe(a)}function ie(a){var s=de();return function(){var n=N(a),e;if(s){var m=N(this).constructor;e=Reflect.construct(n,arguments,m)}else e=n.apply(this,arguments);return ne(this,e)}}function le(a){return b(a)||re(a)||fe(a)||ce()}function b(a){if(Array.isArray(a))return j(a)}function re(a){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(a))return Array.from(a)}function fe(a,s){if(!!a){if(typeof a=="string")return j(a,s);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(a,s)}}function j(a,s){(s==null||s>a.length)&&(s=a.length);for(var o=0,n=new Array(s);o<s;o++)n[o]=a[o];return n}function ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,o=String(a);if(s===0)return o;var n=o.match(/(.*?)([0-9]+)(.*)/),e=n?n[1]:"",m=n?n[3]:"",d=n?n[2]:o,v=d.length>=s?d:(le(Array(s)).map(function(){return"0"}).join("")+d).slice(s*-1);return"".concat(e).concat(v).concat(m)}var S={daysInHours:!1,zeroPadTime:2};function D(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=s.now,n=o===void 0?Date.now:o,e=s.precision,m=e===void 0?0:e,d=s.controlled,v=s.offsetTime,h=v===void 0?0:v,K=s.overtime,W;typeof a=="string"?W=new Date(a).getTime():a instanceof Date?W=a.getTime():W=a,d||(W+=h);var _=d?W:W-n(),q=Math.min(20,Math.max(0,m)),F=Math.round(parseFloat(((K?_:Math.max(0,_))/1e3).toFixed(q))*1e3),Z=Math.abs(F)/1e3;return{total:F,days:Math.floor(Z/(3600*24)),hours:Math.floor(Z/3600%24),minutes:Math.floor(Z/60%60),seconds:Math.floor(Z%60),milliseconds:Number((Z%1*1e3).toFixed()),completed:F<=0}}function P(a,s){var o=a.days,n=a.hours,e=a.minutes,m=a.seconds,d=Object.assign(Object.assign({},S),s),v=d.daysInHours,h=d.zeroPadTime,K=d.zeroPadDays,W=K===void 0?h:K,_=Math.min(2,h),q=v?$(n+o*24,h):$(n,_);return{days:v?"":$(o,W),hours:q,minutes:$(e,_),seconds:$(m,_)}}var w=function(a){J(o,a);var s=ie(o);function o(){var n;return ee(this,o),n=s.apply(this,arguments),n.state={count:n.props.count||3},n.startCountdown=function(){n.interval=window.setInterval(function(){var e=n.state.count-1;e===0?(n.stopCountdown(),n.props.onComplete&&n.props.onComplete()):n.setState(function(m){return{count:m.count-1}})},1e3)},n.stopCountdown=function(){clearInterval(n.interval)},n.addTime=function(e){n.stopCountdown(),n.setState(function(m){return{count:m.count+e}},n.startCountdown)},n}return te(o,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,f.cloneElement)(this.props.children,{count:this.state.count}):null}}]),o}(f.Component);w.propTypes={count:c.number,children:c.element,onComplete:c.func};var ae=function(a){J(o,a);var s=ie(o);function o(n){var e;if(ee(this,o),e=s.call(this,n),e.mounted=!1,e.initialTimestamp=e.calcOffsetStartTimestamp(),e.offsetStartTimestamp=e.props.autoStart?0:e.initialTimestamp,e.offsetTime=0,e.legacyMode=!1,e.legacyCountdownRef=(0,f.createRef)(),e.tick=function(){var d=e.calcTimeDelta(),v=d.completed&&!e.props.overtime?void 0:e.props.onTick;e.setTimeDeltaState(d,void 0,v)},e.start=function(){if(!e.isStarted()){var d=e.offsetStartTimestamp;e.offsetStartTimestamp=0,e.offsetTime+=d?e.calcOffsetStartTimestamp()-d:0;var v=e.calcTimeDelta();e.setTimeDeltaState(v,"STARTED",e.props.onStart),!e.props.controlled&&(!v.completed||e.props.overtime)&&(e.clearTimer(),e.interval=window.setInterval(e.tick,e.props.intervalDelay))}},e.pause=function(){e.isPaused()||(e.clearTimer(),e.offsetStartTimestamp=e.calcOffsetStartTimestamp(),e.setTimeDeltaState(e.state.timeDelta,"PAUSED",e.props.onPause))},e.stop=function(){e.isStopped()||(e.clearTimer(),e.offsetStartTimestamp=e.calcOffsetStartTimestamp(),e.offsetTime=e.offsetStartTimestamp-e.initialTimestamp,e.setTimeDeltaState(e.calcTimeDelta(),"STOPPED",e.props.onStop))},e.isStarted=function(){return e.isStatus("STARTED")},e.isPaused=function(){return e.isStatus("PAUSED")},e.isStopped=function(){return e.isStatus("STOPPED")},e.isCompleted=function(){return e.isStatus("COMPLETED")},e.handleOnComplete=function(d){e.props.onComplete&&e.props.onComplete(d)},n.date){var m=e.calcTimeDelta();e.state={timeDelta:m,status:m.completed?"COMPLETED":"STOPPED"}}else e.legacyMode=!0;return e}return te(o,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,m=e.date,d=e.now,v=e.precision,h=e.controlled,K=e.overtime;return D(m,{now:d,precision:v,controlled:h,offsetTime:this.offsetTime,overtime:K})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,m,d){var v=this;if(!!this.mounted){var h;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),h=this.handleOnComplete);var K=function(){d&&d(v.state.timeDelta),h&&h(v.state.timeDelta)};return this.setState(function(W){var _=m||W.status;return e.completed&&!v.props.overtime?_="COMPLETED":!m&&_==="COMPLETED"&&(_="STOPPED"),{timeDelta:e,status:_}},K)}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,m=e.daysInHours,d=e.zeroPadTime,v=e.zeroPadDays,h=this.state.timeDelta;return Object.assign(Object.assign({},h),{api:this.getApi(),props:this.props,formatted:P(h,{daysInHours:m,zeroPadTime:d,zeroPadDays:v})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,m=e.count,d=e.children,v=e.onComplete;return(0,f.createElement)(w,{ref:this.legacyCountdownRef,count:m,onComplete:v},d)}var h=this.props,K=h.className,W=h.overtime,_=h.children,q=h.renderer,F=this.getRenderProps();if(q)return q(F);if(_&&this.state.timeDelta.completed&&!W)return(0,f.cloneElement)(_,{countdown:F});var Z=F.formatted,Ee=Z.days,ve=Z.hours,Pe=Z.minutes,ye=Z.seconds;return(0,f.createElement)("span",{className:K},F.total<0?"-":"",Ee,Ee?":":"",ve,":",Pe,":",ye)}}]),o}(f.Component);ae.defaultProps=Object.assign(Object.assign({},S),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),ae.propTypes={date:(0,c.oneOfType)([(0,c.instanceOf)(Date),c.string,c.number]),daysInHours:c.bool,zeroPadTime:c.number,zeroPadDays:c.number,controlled:c.bool,intervalDelay:c.number,precision:c.number,autoStart:c.bool,overtime:c.bool,className:c.string,children:c.element,renderer:c.func,now:c.func,onMount:c.func,onStart:c.func,onPause:c.func,onStop:c.func,onTick:c.func,onComplete:c.func};var pe=ae,xe=t(46677),Oe=t.n(xe),r=t(85893),X,V=z.ZP.div(X||(X=(0,A.Z)([`
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
      font-size: 16px;
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
    .inner{
      h4{
        span{
          font-size: 28px;
        }
      }
    }

  }


`]))),ue=function(){var s,o,n,e=(0,f.useState)(!1),m=(0,Q.Z)(e,2),d=m[0],v=m[1],h=(0,p.f)(x.w.nftBlindBox),K=h.request,W=h.status,_=h.data,q=(0,p.f)(x.w.nftBuy),F=q.request,Z=(0,p.f)(x.w.price),Ee=Z.request,ve=Z.data,Pe=(0,f.useCallback)((0,U.Z)(L().mark(function ye(){var De,he;return L().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return De=Math.floor(Math.random()*10),v(!0),se.next=4,F(_.data[De].id);case 4:if(he=se.sent,v(!1),console.log(he),!he.err){se.next=9;break}return se.abrupt("return",G.default.error(he.err));case 9:G.default.success(he.info);case 10:case"end":return se.stop()}},ye)})),[_,F]);return(0,f.useEffect)(function(){K(),Ee()},[]),(0,r.jsxs)(V,{children:[(0,r.jsx)("img",{src:k(),alt:"",className:"top"}),(0,r.jsx)("h2",{children:"CCP DOG NFT"}),(0,r.jsxs)("h3",{children:[(0,r.jsx)(C._H,{id:"pages.market.total_number"}),": ",_==null||(s=_.data)===null||s===void 0?void 0:s.box_count]}),(0,r.jsx)("div",{className:"inner",children:(_==null||(o=_.data)===null||o===void 0?void 0:o.begin_time)&&(0,r.jsx)("h4",{children:(0,r.jsx)(pe,{date:(_==null||(n=_.data)===null||n===void 0?void 0:n.begin_time)*1e3,renderer:ge})})}),(0,r.jsx)("div",{className:"price",children:(0,r.jsxs)("h5",{children:[(0,r.jsx)("img",{src:Oe(),alt:""}),"299 CCP ",(0,r.jsxs)("span",{children:[" \u2248 $ ",(299*(1/(ve==null?void 0:ve.data[2].usdt_price))).toFixed()]})]})}),d||W==p.o.wait?(0,r.jsx)(T.Z,{}):(0,r.jsx)(y.b,{onClick:function(){return Pe()},text:"Buy Now"})]})},ge=function(s){var o=s.days,n=s.hours,e=s.minutes,m=s.seconds,d=s.completed;return d?(0,r.jsx)("span",{}):(0,r.jsxs)("span",{children:[o,"D:",n,"h:",e,"m:",m,"s"]})},me=t(18572),_e=t.n(me),Ae,Te=z.ZP.div(Ae||(Ae=(0,A.Z)([`
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

  @media (max-width: 576px) {
    padding: 12px;
    .box{
      padding: 12px;
      .right {
        margin-top: 20px;

      }
    }
  }
`]))),Ce=function(){return(0,r.jsxs)(Te,{children:[(0,r.jsxs)("div",{className:"top",children:[(0,r.jsx)("img",{src:_e(),alt:""}),(0,r.jsx)("h3",{children:"To play CCP DOG NFT game, you need to obtain at least one dog from the market. Purchase a dog container, and open it, then you will receive an amazing dog. You can check this dog in your inventory, or you can open the container later. Each dog has different appearance, attributes and skills. See if you can obtain a wonderful one. Let's open the container!"})]}),(0,r.jsx)("div",{className:"box",children:(0,r.jsxs)(g.Z,{gutter:48,children:[(0,r.jsx)(R.Z,{span:6,xs:24,sm:12,md:12,lg:10,children:(0,r.jsx)(ue,{})}),(0,r.jsx)(R.Z,{span:6,xs:24,sm:12,md:12,lg:14,children:(0,r.jsxs)("div",{className:"right",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Class"}),(0,r.jsx)("p",{children:"Rarity"}),(0,r.jsx)("p",{children:"Proportion"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Greyhound"}),(0,r.jsx)("p",{children:"SSR"}),(0,r.jsx)("p",{children:"2%"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Belgian Malinois"}),(0,r.jsx)("p",{children:"SR"}),(0,r.jsx)("p",{children:"4%"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Saluki"}),(0,r.jsx)("p",{children:"SR"}),(0,r.jsx)("p",{children:"8%"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Hungarian Vizsla"}),(0,r.jsx)("p",{children:"SR"}),(0,r.jsx)("p",{children:"7%"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Afghan Hound"}),(0,r.jsx)("p",{children:"R"}),(0,r.jsx)("p",{children:"9%"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Whippet"}),(0,r.jsx)("p",{children:"R"}),(0,r.jsx)("p",{children:"10%"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Jack russell terrier"}),(0,r.jsx)("p",{children:"N"}),(0,r.jsx)("p",{children:"13%"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Dalmatian"}),(0,r.jsx)("p",{children:"N"}),(0,r.jsx)("p",{children:"17%"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Russian wolfhound"}),(0,r.jsx)("p",{children:"N"}),(0,r.jsx)("p",{children:"20%"})]})]})})]})})]})}},67329:function(M,E,t){"use strict";t.d(E,{f:function(){return z},o:function(){return B}});var u=t(3182),g=t(2824),I=t(94043),R=t.n(I),A=t(67294),z=function(Y){var G=(0,A.useState)(B.start),U=(0,g.Z)(G,2),Q=U[0],i=U[1],L=(0,A.useState)(),f=(0,g.Z)(L,2),y=f[0],l=f[1],k=(0,A.useCallback)((0,u.Z)(R().mark(function x(){var p,C,c=arguments;return R().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.prev=0,i(B.wait),O.next=4,Y.apply(void 0,c);case 4:return p=O.sent,l(p),i(B.success),O.abrupt("return",p);case 10:return O.prev=10,O.t0=O.catch(0),C={err:O.t0.info},l(C),i(B.failure),O.abrupt("return",C);case 16:case"end":return O.stop()}},x,null,[[0,10]])})),[i,l]);return{status:Q,request:k,data:y}},B;(function(T){T[T.start=0]="start",T[T.wait=1]="wait",T[T.success=2]="success",T[T.failure=3]="failure"})(B||(B={}))},46677:function(M){M.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},18572:function(M,E,t){M.exports=t.p+"static/mysterious.98c98ffc.png"},63757:function(M,E,t){M.exports=t.p+"static/mystery_header.ab029946.png"},15746:function(M,E,t){"use strict";var u=t(21584);E.Z=u.Z},89032:function(M,E,t){"use strict";var u=t(65056),g=t.n(u),I=t(6999)},99134:function(M,E,t){"use strict";var u=t(67294),g=(0,u.createContext)({});E.Z=g},21584:function(M,E,t){"use strict";var u=t(96156),g=t(22122),I=t(90484),R=t(67294),A=t(94184),z=t.n(A),B=t(99134),T=t(86032),Y=function(i,L){var f={};for(var y in i)Object.prototype.hasOwnProperty.call(i,y)&&L.indexOf(y)<0&&(f[y]=i[y]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,y=Object.getOwnPropertySymbols(i);l<y.length;l++)L.indexOf(y[l])<0&&Object.prototype.propertyIsEnumerable.call(i,y[l])&&(f[y[l]]=i[y[l]]);return f};function G(i){return typeof i=="number"?"".concat(i," ").concat(i," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(i)?"0 0 ".concat(i):i}var U=["xs","sm","md","lg","xl","xxl"],Q=R.forwardRef(function(i,L){var f,y=R.useContext(T.E_),l=y.getPrefixCls,k=y.direction,x=R.useContext(B.Z),p=x.gutter,C=x.wrap,c=x.supportFlexGap,ee=i.prefixCls,O=i.span,te=i.order,J=i.offset,N=i.push,H=i.pull,de=i.className,oe=i.children,ne=i.flex,ie=i.style,le=Y(i,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),b=l("col",ee),re={};U.forEach(function(S){var D,P={},w=i[S];typeof w=="number"?P.span=w:(0,I.Z)(w)==="object"&&(P=w||{}),delete le[S],re=(0,g.Z)((0,g.Z)({},re),(D={},(0,u.Z)(D,"".concat(b,"-").concat(S,"-").concat(P.span),P.span!==void 0),(0,u.Z)(D,"".concat(b,"-").concat(S,"-order-").concat(P.order),P.order||P.order===0),(0,u.Z)(D,"".concat(b,"-").concat(S,"-offset-").concat(P.offset),P.offset||P.offset===0),(0,u.Z)(D,"".concat(b,"-").concat(S,"-push-").concat(P.push),P.push||P.push===0),(0,u.Z)(D,"".concat(b,"-").concat(S,"-pull-").concat(P.pull),P.pull||P.pull===0),(0,u.Z)(D,"".concat(b,"-rtl"),k==="rtl"),D))});var fe=z()(b,(f={},(0,u.Z)(f,"".concat(b,"-").concat(O),O!==void 0),(0,u.Z)(f,"".concat(b,"-order-").concat(te),te),(0,u.Z)(f,"".concat(b,"-offset-").concat(J),J),(0,u.Z)(f,"".concat(b,"-push-").concat(N),N),(0,u.Z)(f,"".concat(b,"-pull-").concat(H),H),f),de,re),j={};if(p&&p[0]>0){var ce=p[0]/2;j.paddingLeft=ce,j.paddingRight=ce}if(p&&p[1]>0&&!c){var $=p[1]/2;j.paddingTop=$,j.paddingBottom=$}return ne&&(j.flex=G(ne),ne==="auto"&&C===!1&&!j.minWidth&&(j.minWidth=0)),R.createElement("div",(0,g.Z)({},le,{style:(0,g.Z)((0,g.Z)({},j),ie),className:fe,ref:L}),oe)});Q.displayName="Col",E.Z=Q},92820:function(M,E,t){"use strict";var u=t(22122),g=t(96156),I=t(90484),R=t(28481),A=t(67294),z=t(94184),B=t.n(z),T=t(86032),Y=t(99134),G=t(93355),U=t(24308),Q=t(98082),i=function(l,k){var x={};for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&k.indexOf(p)<0&&(x[p]=l[p]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,p=Object.getOwnPropertySymbols(l);C<p.length;C++)k.indexOf(p[C])<0&&Object.prototype.propertyIsEnumerable.call(l,p[C])&&(x[p[C]]=l[p[C]]);return x},L=(0,G.b)("top","middle","bottom","stretch"),f=(0,G.b)("start","end","center","space-around","space-between"),y=A.forwardRef(function(l,k){var x,p=l.prefixCls,C=l.justify,c=l.align,ee=l.className,O=l.style,te=l.children,J=l.gutter,N=J===void 0?0:J,H=l.wrap,de=i(l,["prefixCls","justify","align","className","style","children","gutter","wrap"]),oe=A.useContext(T.E_),ne=oe.getPrefixCls,ie=oe.direction,le=A.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),b=(0,R.Z)(le,2),re=b[0],fe=b[1],j=(0,Q.Z)(),ce=A.useRef(N);A.useEffect(function(){var r=U.ZP.subscribe(function(X){var V=ce.current||0;(!Array.isArray(V)&&(0,I.Z)(V)==="object"||Array.isArray(V)&&((0,I.Z)(V[0])==="object"||(0,I.Z)(V[1])==="object"))&&fe(X)});return function(){return U.ZP.unsubscribe(r)}},[]);var $=function(){var X=[0,0],V=Array.isArray(N)?N:[N,0];return V.forEach(function(ue,ge){if((0,I.Z)(ue)==="object")for(var me=0;me<U.c4.length;me++){var _e=U.c4[me];if(re[_e]&&ue[_e]!==void 0){X[ge]=ue[_e];break}}else X[ge]=ue||0}),X},S=ne("row",p),D=$(),P=B()(S,(x={},(0,g.Z)(x,"".concat(S,"-no-wrap"),H===!1),(0,g.Z)(x,"".concat(S,"-").concat(C),C),(0,g.Z)(x,"".concat(S,"-").concat(c),c),(0,g.Z)(x,"".concat(S,"-rtl"),ie==="rtl"),x),ee),w={},ae=D[0]>0?D[0]/-2:void 0,pe=D[1]>0?D[1]/-2:void 0;if(ae&&(w.marginLeft=ae,w.marginRight=ae),j){var xe=(0,R.Z)(D,2);w.rowGap=xe[1]}else pe&&(w.marginTop=pe,w.marginBottom=pe);var Oe=A.useMemo(function(){return{gutter:D,wrap:H,supportFlexGap:j}},[D,H,j]);return A.createElement(Y.Z.Provider,{value:Oe},A.createElement("div",(0,u.Z)({},de,{className:P,style:(0,u.Z)((0,u.Z)({},w),O),ref:k}),te))});y.displayName="Row",E.Z=y},6999:function(M,E,t){"use strict";var u=t(65056),g=t.n(u),I=t(80638),R=t.n(I)},71230:function(M,E,t){"use strict";var u=t(92820);E.Z=u.Z},13062:function(M,E,t){"use strict";var u=t(65056),g=t.n(u),I=t(6999)}}]);
