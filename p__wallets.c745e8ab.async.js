(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{70347:function(){},99219:function(w,T,i){"use strict";i.d(T,{e:function(){return _}});var p=i(2824),f=i(20310),s=i(67294),d=i(17857),c=i(47416),A=i(85893),t,E=c.ZP.div(t||(t=(0,f.Z)([`
  padding: `,`;
`])),function(v){return v.padding||"0"}),_=function(b){var D=b.value,g=D===void 0?"":D,m=b.decimals,O=b.padding,x=(0,s.useState)(0),M=(0,p.Z)(x,2),N=M[0],Z=M[1],l=(0,s.useState)(0),a=(0,p.Z)(l,2),e=a[0],n=a[1];return(0,s.useEffect)(function(){typeof g=="number"&&(Z(e),n(g))},[g]),(0,A.jsx)(E,{padding:O,children:typeof g=="string"?g:(0,A.jsx)(d.ZP,{start:N,end:e,decimals:m!==void 0?m:0,duration:1,separator:","})})}},64731:function(w,T,i){"use strict";i.d(T,{b:function(){return M}});var p=i(58024),f=i(39144),s=i(20310),d=i(67294),c=i(47416),A=i(16924),t=i(46677),E=i.n(t),_=i(53190),v=i(85893),b,D,g,m=c.ZP.div(b||(b=(0,s.Z)([`
  .images {
    padding: 20px;

    img {
      display: block;
      width: 100%;
    }
  }

  background: linear-gradient(rgb(237, 237, 255) 0%, rgb(215, 215, 255) 100%);
  border-radius: 0 0 20px 20px;
  position: relative;

  .bottom {
    border-radius: 0 0 20px 20px;
    padding: 5px;

    h4 {
      color: rgb(47, 46, 65);
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0;
    }
  }

  .price {
    position: absolute;
    right: 10px;
    top: 10px;
    background: linear-gradient(270deg, #89d143, #75db8d);
    width: 36px;
    height: 36px;
    border-radius: 32px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    line-height: 36px;
  }
`]))),O=c.ZP.div(D||(D=(0,s.Z)([`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #505f79;
    font-size: 14px;
  }

  p {
    color: #2f2e41;
    font: 16px/1.4 Noto Sans, sans-serif;
    margin-bottom: 0;
    font-weight: 700;
    align-items: center;
    display: flex;

    .icon {
      display: block;
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }
  }
`]))),x=(0,c.ZP)(f.Z)(g||(g=(0,s.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),M=function(Z){var l=Z.props,a=Z.path,e=a===void 0?"market":a;return(0,v.jsx)(A.Link,{to:{pathname:"".concat(e,"/").concat(l.id),search:"id=".concat(l.id,"&name=").concat(l.dog_name,"&path=").concat(e)},children:(0,v.jsx)(x,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,v.jsxs)(m,{children:[(0,v.jsx)("div",{className:"images",children:(0,v.jsx)("img",{alt:"example",src:l.img_url})}),(0,v.jsx)("div",{className:"bottom",children:(0,v.jsx)("h4",{children:l.dog_name})})]}),children:l.is_selling==1&&(0,v.jsxs)(O,{children:[(0,v.jsxs)("span",{children:[" ",(0,v.jsx)(_._H,{id:"component.nft_car.sell_price"})]}),(0,v.jsxs)("p",{children:[(0,v.jsx)("img",{src:E(),alt:"",className:"icon"}),parseInt(l.market_price).toFixed(2)]})]})})})}},14164:function(w,T,i){"use strict";i.r(T),i.d(T,{default:function(){return n}});var p=i(13062),f=i(71230),s=i(89032),d=i(15746),c=i(20310),A=i(47416),t=i(64731),E=i(67294),_=i(67329),v=i(93874),b=i(53776),D=i(83832),g=i(99219),m=i(85893),O,x,M=A.ZP.div(O||(O=(0,c.Z)([`
  h3{
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    div{
      font-size: 24px;

    }
  }
  p{
    font-size: 16px;
    color: hsla(0,0%,100%,.8);
    margin-bottom: 0;
  }
`]))),N=function(r){var u=r.text,P=r.value;return(0,m.jsxs)(M,{children:[(0,m.jsxs)("h3",{children:[" ",(0,m.jsx)(g.e,{value:P!=null?P:0})]}),(0,m.jsx)("p",{children:u})]})},Z=A.ZP.div(x||(x=(0,c.Z)([`
  border-radius: 100px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`]))),l=function(){return _jsx(Z,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(N,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(N,{text:"USDT",value:0})})]})})},a,e=A.ZP.div(a||(a=(0,c.Z)([`

  padding: 20px;
  box-sizing: border-box;

  .balances {
    > div {
      margin-bottom: 30px;


      > div {
        padding: 10px 0;
        box-sizing: border-box;
        display: flex;
        align-items: end;
      }

      div {

        font-size: 18px;


        img {
          display: block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    padding: 10px;

  }
`]))),n=function(){var o,r,u,P,C,V=(0,b.t)("@@initialState"),h=V.initialState,j=(0,_.f)(v.w.nftPacket),y=j.data,S=j.request,R=j.status;return(0,E.useEffect)(function(){S("")},[]),(0,m.jsxs)(e,{children:[(0,m.jsx)(Z,{children:(0,m.jsxs)(f.Z,{gutter:20,children:[(0,m.jsx)(d.Z,{xs:8,sm:8,children:(0,m.jsx)(N,{text:"CCP.Dog",value:h==null||(o=h.currentUser)===null||o===void 0?void 0:o.ccp_dog_coin})}),(0,m.jsx)(d.Z,{xs:8,sm:8,children:(0,m.jsx)(N,{text:"USDT",value:h==null||(r=h.currentUser)===null||r===void 0?void 0:r.usdt_coin})}),(0,m.jsx)(d.Z,{xs:8,sm:8,children:(0,m.jsx)(N,{text:"GUT",value:h==null||(u=h.currentUser)===null||u===void 0?void 0:u.gut_coin})})]})}),(0,m.jsx)(f.Z,{className:"balances",gutter:48}),(0,m.jsx)("div",{style:{padding:"20px"},children:R==_.o.wait?(0,m.jsx)(D.Z,{}):(0,m.jsx)(f.Z,{gutter:48,children:(y==null||(P=y.data)===null||P===void 0?void 0:P.goods.data.length)>0?y==null||(C=y.data)===null||C===void 0?void 0:C.goods.data.map(function(I){return(0,m.jsx)(d.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:(0,m.jsx)(t.b,{props:I,path:"wallets"})},I.id)}):(0,m.jsx)("div",{style:{textAlign:"center"},children:"N/A"})})})]})}},67329:function(w,T,i){"use strict";i.d(T,{f:function(){return A},o:function(){return t}});var p=i(3182),f=i(2824),s=i(94043),d=i.n(s),c=i(67294),A=function(_){var v=(0,c.useState)(t.start),b=(0,f.Z)(v,2),D=b[0],g=b[1],m=(0,c.useState)(),O=(0,f.Z)(m,2),x=O[0],M=O[1],N=(0,c.useCallback)((0,p.Z)(d().mark(function Z(){var l,a,e=arguments;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,g(t.wait),o.next=4,_.apply(void 0,e);case 4:return l=o.sent,M(l),g(t.success),o.abrupt("return",l);case 10:return o.prev=10,o.t0=o.catch(0),a={err:o.t0.info},M(a),g(t.failure),o.abrupt("return",a);case 16:case"end":return o.stop()}},Z,null,[[0,10]])})),[g,M]);return{status:D,request:N,data:x}},t;(function(E){E[E.start=0]="start",E[E.wait=1]="wait",E[E.success=2]="success",E[E.failure=3]="failure"})(t||(t={}))},46677:function(w){w.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},39144:function(w,T,i){"use strict";i.d(T,{Z:function(){return a}});var p=i(96156),f=i(22122),s=i(67294),d=i(94184),c=i.n(d),A=i(98423),t=i(86032),E=function(e,n){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(e);u<r.length;u++)n.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(e,r[u])&&(o[r[u]]=e[r[u]]);return o},_=function(n){var o=n.prefixCls,r=n.className,u=n.hoverable,P=u===void 0?!0:u,C=E(n,["prefixCls","className","hoverable"]);return s.createElement(t.C,null,function(V){var h=V.getPrefixCls,j=h("card",o),y=c()("".concat(j,"-grid"),r,(0,p.Z)({},"".concat(j,"-grid-hoverable"),P));return s.createElement("div",(0,f.Z)({},C,{className:y}))})},v=_,b=function(e,n){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(e);u<r.length;u++)n.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(e,r[u])&&(o[r[u]]=e[r[u]]);return o},D=function(n){return s.createElement(t.C,null,function(o){var r=o.getPrefixCls,u=n.prefixCls,P=n.className,C=n.avatar,V=n.title,h=n.description,j=b(n,["prefixCls","className","avatar","title","description"]),y=r("card",u),S=c()("".concat(y,"-meta"),P),R=C?s.createElement("div",{className:"".concat(y,"-meta-avatar")},C):null,I=V?s.createElement("div",{className:"".concat(y,"-meta-title")},V):null,W=h?s.createElement("div",{className:"".concat(y,"-meta-description")},h):null,B=I||W?s.createElement("div",{className:"".concat(y,"-meta-detail")},I,W):null;return s.createElement("div",(0,f.Z)({},j,{className:S}),R,B)})},g=D,m=i(47428),O=i(71230),x=i(15746),M=i(97647),N=function(e,n){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(e);u<r.length;u++)n.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(e,r[u])&&(o[r[u]]=e[r[u]]);return o};function Z(e){var n=e.map(function(o,r){return s.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(r)},s.createElement("span",null,o))});return n}var l=function(n){var o,r,u=s.useContext(t.E_),P=u.getPrefixCls,C=u.direction,V=s.useContext(M.Z),h=function(tt){var H;(H=n.onTabChange)===null||H===void 0||H.call(n,tt)},j=function(){var tt;return s.Children.forEach(n.children,function(H){H&&H.type&&H.type===v&&(tt=!0)}),tt},y=n.prefixCls,S=n.className,R=n.extra,I=n.headStyle,W=I===void 0?{}:I,B=n.bodyStyle,Q=B===void 0?{}:B,L=n.title,F=n.loading,G=n.bordered,Y=G===void 0?!0:G,J=n.size,K=n.type,$=n.cover,X=n.actions,k=n.tabList,ot=n.children,et=n.activeTabKey,lt=n.defaultActiveTabKey,ut=n.tabBarExtraContent,dt=n.hoverable,nt=n.tabProps,ct=nt===void 0?{}:nt,ft=N(n,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),U=P("card",y),mt=Q.padding===0||Q.padding==="0px"?{padding:24}:void 0,z=s.createElement("div",{className:"".concat(U,"-loading-block")}),vt=s.createElement("div",{className:"".concat(U,"-loading-content"),style:mt},s.createElement(O.Z,{gutter:8},s.createElement(x.Z,{span:22},z)),s.createElement(O.Z,{gutter:8},s.createElement(x.Z,{span:8},z),s.createElement(x.Z,{span:15},z)),s.createElement(O.Z,{gutter:8},s.createElement(x.Z,{span:6},z),s.createElement(x.Z,{span:18},z)),s.createElement(O.Z,{gutter:8},s.createElement(x.Z,{span:13},z),s.createElement(x.Z,{span:9},z)),s.createElement(O.Z,{gutter:8},s.createElement(x.Z,{span:4},z),s.createElement(x.Z,{span:3},z),s.createElement(x.Z,{span:16},z))),at=et!==void 0,gt=(0,f.Z)((0,f.Z)({},ct),(o={},(0,p.Z)(o,at?"activeKey":"defaultActiveKey",at?et:lt),(0,p.Z)(o,"tabBarExtraContent",ut),o)),rt,it=k&&k.length?s.createElement(m.Z,(0,f.Z)({size:"large"},gt,{className:"".concat(U,"-head-tabs"),onChange:h}),k.map(function(q){return s.createElement(m.Z.TabPane,{tab:q.tab,disabled:q.disabled,key:q.key})})):null;(L||R||it)&&(rt=s.createElement("div",{className:"".concat(U,"-head"),style:W},s.createElement("div",{className:"".concat(U,"-head-wrapper")},L&&s.createElement("div",{className:"".concat(U,"-head-title")},L),R&&s.createElement("div",{className:"".concat(U,"-extra")},R)),it));var ht=$?s.createElement("div",{className:"".concat(U,"-cover")},$):null,pt=s.createElement("div",{className:"".concat(U,"-body"),style:Q},F?vt:ot),Et=X&&X.length?s.createElement("ul",{className:"".concat(U,"-actions")},Z(X)):null,_t=(0,A.Z)(ft,["onTabChange"]),st=J||V,xt=c()(U,(r={},(0,p.Z)(r,"".concat(U,"-loading"),F),(0,p.Z)(r,"".concat(U,"-bordered"),Y),(0,p.Z)(r,"".concat(U,"-hoverable"),dt),(0,p.Z)(r,"".concat(U,"-contain-grid"),j()),(0,p.Z)(r,"".concat(U,"-contain-tabs"),k&&k.length),(0,p.Z)(r,"".concat(U,"-").concat(st),st),(0,p.Z)(r,"".concat(U,"-type-").concat(K),!!K),(0,p.Z)(r,"".concat(U,"-rtl"),C==="rtl"),r),S);return s.createElement("div",(0,f.Z)({},_t,{className:xt}),rt,ht,pt,Et)};l.Grid=v,l.Meta=g;var a=l},58024:function(w,T,i){"use strict";var p=i(65056),f=i.n(p),s=i(70347),d=i.n(s),c=i(18106),A=i(13062),t=i(89032)},8273:function(w,T,i){"use strict";i.r(T),i.d(T,{CountUp:function(){return f}});var p=function(){return(p=Object.assign||function(s){for(var d,c=1,A=arguments.length;c<A;c++)for(var t in d=arguments[c])Object.prototype.hasOwnProperty.call(d,t)&&(s[t]=d[t]);return s}).apply(this,arguments)},f=function(){function s(d,c,A){var t=this;this.target=d,this.endVal=c,this.options=A,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(E){t.startTime||(t.startTime=E);var _=E-t.startTime;t.remaining=t.duration-_,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(_,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(_,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(_/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(_/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),_<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(E){var _,v,b,D,g=E<0?"-":"";_=Math.abs(E).toFixed(t.options.decimalPlaces);var m=(_+="").split(".");if(v=m[0],b=m.length>1?t.options.decimal+m[1]:"",t.options.useGrouping){D="";for(var O=0,x=v.length;O<x;++O)O!==0&&O%3==0&&(D=t.options.separator+D),D=v[x-O-1]+D;v=D}return t.options.numerals&&t.options.numerals.length&&(v=v.replace(/[0-9]/g,function(M){return t.options.numerals[+M]}),b=b.replace(/[0-9]/g,function(M){return t.options.numerals[+M]})),g+t.options.prefix+v+b+t.options.suffix},this.easeOutExpo=function(E,_,v,b){return v*(1-Math.pow(2,-10*E/b))*1024/1023+_},this.options=p(p({},this.defaults),A),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(c),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof d=="string"?document.getElementById(d):d,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return s.prototype.determineDirectionAndSmartEasing=function(){var d=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>d;var c=d-this.startVal;if(Math.abs(c)>this.options.smartEasingThreshold){this.finalEndVal=d;var A=this.countDown?1:-1;this.endVal=d+A*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=d,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},s.prototype.start=function(d){this.error||(this.callback=d,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},s.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},s.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},s.prototype.update=function(d){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(d),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},s.prototype.printValue=function(d){var c=this.formattingFn(d);this.el.tagName==="INPUT"?this.el.value=c:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=c:this.el.innerHTML=c},s.prototype.ensureNumber=function(d){return typeof d=="number"&&!isNaN(d)},s.prototype.validateValue=function(d){var c=Number(d);return this.ensureNumber(c)?c:(this.error="[CountUp] invalid start or end value: "+d,null)},s.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},s}()},17857:function(w,T,i){"use strict";var p;p={value:!0};var f=i(67294),s=i(8273);function d(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var c=d(f);function A(l,a){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(l,o).enumerable})),e.push.apply(e,n)}return e}function t(l){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?A(Object(e),!0).forEach(function(n){E(l,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach(function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(e,n))})}return l}function E(l,a,e){return a in l?Object.defineProperty(l,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[a]=e,l}function _(){return _=Object.assign||function(l){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l},_.apply(this,arguments)}function v(l,a){if(l==null)return{};var e={},n=Object.keys(l),o,r;for(r=0;r<n.length;r++)o=n[r],!(a.indexOf(o)>=0)&&(e[o]=l[o]);return e}function b(l,a){if(l==null)return{};var e=v(l,a),n,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(l);for(o=0;o<r.length;o++)n=r[o],!(a.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,n)||(e[n]=l[n]))}return e}var D=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?f.useLayoutEffect:f.useEffect;function g(l){var a=f.useRef(l);return D(function(){a.current=l}),f.useCallback(function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return a.current.apply(void 0,n)},[])}var m=function(a,e){var n=e.decimal,o=e.decimals,r=e.duration,u=e.easingFn,P=e.end,C=e.formattingFn,V=e.numerals,h=e.prefix,j=e.separator,y=e.start,S=e.suffix,R=e.useEasing;return new s.CountUp(a,P,{startVal:y,duration:r,decimal:n,decimalPlaces:o,easingFn:u,formattingFn:C,numerals:V,separator:j,prefix:h,suffix:S,useEasing:R,useGrouping:!!j})},O=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],x={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},M=function(a){var e=f.useMemo(function(){return t(t({},x),a)},[a]),n=e.ref,o=e.startOnMount,r=e.enableReinitialize,u=e.delay,P=e.onEnd,C=e.onStart,V=e.onPauseResume,h=e.onReset,j=e.onUpdate,y=b(e,O),S=f.useRef(),R=f.useRef(),I=f.useRef(!1),W=g(function(){return m(typeof n=="string"?n:n.current,y)}),B=g(function(K){var $=S.current;if($&&!K)return $;var X=W();return S.current=X,X}),Q=g(function(){var K=function(){return B(!0).start(function(){P==null||P({pauseResume:L,reset:F,start:Y,update:G})})};u&&u>0?R.current=setTimeout(K,u*1e3):K(),C==null||C({pauseResume:L,reset:F,update:G})}),L=g(function(){B().pauseResume(),V==null||V({reset:F,start:Y,update:G})}),F=g(function(){R.current&&clearTimeout(R.current),B().reset(),h==null||h({pauseResume:L,start:Y,update:G})}),G=g(function(K){B().update(K),j==null||j({pauseResume:L,reset:F,start:Y})}),Y=g(function(){F(),Q()}),J=g(function(K){o&&(K&&F(),Q())});return f.useEffect(function(){I.current?r&&J(!0):(I.current=!0,J())},[r,I,J,u,a.start,a.suffix,a.prefix,a.duration,a.separator,a.decimals,a.decimal,a.formattingFn]),f.useEffect(function(){return function(){F()}},[F]),{start:Y,pauseResume:L,reset:F,update:G,getCountUp:B}},N=["className","redraw","containerProps","children","style"],Z=function(a){var e=a.className,n=a.redraw,o=a.containerProps,r=a.children,u=a.style,P=b(a,N),C=c.default.useRef(null),V=c.default.useRef(!1),h=M(t(t({},P),{},{ref:C,startOnMount:typeof r!="function"||a.delay===0,enableReinitialize:!1})),j=h.start,y=h.reset,S=h.update,R=h.pauseResume,I=h.getCountUp,W=g(function(){j()}),B=g(function(F){a.preserveValue||y(),S(F)}),Q=g(function(){if(typeof a.children=="function"&&!(C.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}I()});f.useEffect(function(){Q()},[Q]),f.useEffect(function(){V.current&&B(a.end)},[a.end,B]);var L=n&&a;return f.useEffect(function(){n&&V.current&&W()},[W,n,L]),f.useEffect(function(){!n&&V.current&&W()},[W,n,a.start,a.suffix,a.prefix,a.duration,a.separator,a.decimals,a.decimal,a.className,a.formattingFn]),f.useEffect(function(){V.current=!0},[]),typeof r=="function"?r({countUpRef:C,start:j,reset:y,update:S,pauseResume:R,getCountUp:I}):c.default.createElement("span",_({className:e,ref:C,style:u},o),a.start?I().formattingFn(a.start):"")};T.ZP=Z,p=M}}]);
