(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{70347:function(){},99219:function(w,U,r){"use strict";r.d(U,{e:function(){return x}});var _=r(2824),f=r(20310),i=r(67294),d=r(17857),m=r(47416),D=r(85893),t,E=m.ZP.div(t||(t=(0,f.Z)([`
  padding: `,`;
`])),function(g){return g.padding||"0"}),x=function(A){var O=A.value,v=O===void 0?"":O,I=A.decimals,P=A.padding,u=(0,i.useState)(0),j=(0,_.Z)(u,2),L=j[0],S=j[1],l=(0,i.useState)(0),a=(0,_.Z)(l,2),e=a[0],n=a[1];return(0,i.useEffect)(function(){typeof v=="number"&&(S(e),n(v))},[v]),(0,D.jsx)(E,{padding:P,children:typeof v=="string"?v:(0,D.jsx)(d.ZP,{start:L,end:e,decimals:I!==void 0?I:0,duration:1,separator:","})})}},57289:function(w,U,r){"use strict";r.r(U),r.d(U,{default:function(){return T}});var _=r(13062),f=r(71230),i=r(89032),d=r(15746),m=r(2824),D=r(57663),t=r(71577),E=r(20310),x=r(67294),g=r(47416),A=r(99219),O=r(67329),v=r(93874),I=r(83832),P=r(53190),u=r(85893),j,L,S=g.ZP.div(j||(j=(0,E.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    span{
      font-size: 38px;
    }
  }

  p {
    font-size: 16px;
    color: hsla(0, 0%, 100%, .8);
    margin-bottom: 0;
  }
`]))),l=function(h){var b=h.text,p=h.value;return(0,u.jsxs)(S,{children:[(0,u.jsxs)("h3",{children:["$ ",(0,u.jsx)(A.e,{value:p!=null?p:0})]}),(0,u.jsx)("p",{children:b})]})},a=g.ZP.div(L||(L=(0,E.Z)([`
  border-radius: 15px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`]))),e=function(){var h=(0,O.f)(v.w.nftHome),b=h.request,p=h.data,C=h.status,M=(0,P.YB)();return(0,x.useEffect)(function(){b("")},[]),C==O.o.wait?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(I.Z,{})}):(0,u.jsx)(a,{children:(0,u.jsxs)(f.Z,{children:[(0,u.jsx)(d.Z,{xs:24,sm:12,lg:8,children:(0,u.jsx)(l,{text:M.formatMessage({id:"pages.market.dog_sold"}),value:p==null?void 0:p.data.total_turnover})}),(0,u.jsx)(d.Z,{xs:24,sm:12,lg:8,children:(0,u.jsx)(l,{text:M.formatMessage({id:"pages.market.total_sale"}),value:p==null?void 0:p.data.total_transaction_times})}),(0,u.jsx)(d.Z,{xs:24,sm:12,lg:8,children:(0,u.jsx)(l,{text:M.formatMessage({id:"pages.market.total_volume"}),value:p==null?void 0:p.data.total_auction_commission})})]})})},n=r(64731),o,s=g.ZP.div(o||(o=(0,E.Z)([`
  margin-bottom: 20px;

  button {
    margin-top: 10px;
    margin-right: 30px;
    color: rgb(124, 215, 112);
    font-weight: bold;
    font-size: 14px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(68, 223, 132);

    &.ac {
      color: rgb(255, 255, 255);
      background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
    }
  }
`]))),c=function(h){var b=h.text,p=h.name,C=h.onClick;return(0,u.jsx)(t.Z,{className:p===b?"ac":"",onClick:function(){return C(b)},type:"default",shape:"round",size:"large",children:b})},F=[{id:689072,u_id:0,dog_name:"CCP Big Dog(129)",dog_sex:1,dog_breed:8,dog_attr:[{attr:1,grade:852,name:"\u901F\u5EA6"},{attr:2,grade:550,name:"\u8010\u529B"},{attr:3,grade:361,name:"\u7206\u53D1"},{attr:4,grade:254,name:"\u5E73\u8861"}],dog_skill:[{skill:4,grade:5,name:"Lucky \u5E78\u8FD0\u7684"},{skill:14,grade:8,name:"Faith Sprint \u4FE1\u4EF0\u51B2\u523A"},{skill:4,grade:1,name:"Lucky \u5E78\u8FD0\u7684"},{skill:10,grade:4,name:"Phantom Transcendence \u5E7B\u5F71\u8D85\u8D8A"}],father_id:0,mother_id:0,sons_json:"",daughters_json:"",reproduce_count:0,block_address:"",market_price:"599.00000000000000000000",is_selling:1,img_url:"https://ccp.dog/img/dogs/dog.jpeg",addtime:"2021-12-30 21:05:09",updatetime:"2021-12-30 21:05:09"}],V=function(){var y=(0,x.useState)("All NFT"),h=(0,m.Z)(y,2),b=h[0],p=h[1],C=(0,O.f)(v.w.market),M=C.request,B=C.status,R=C.data;return(0,x.useEffect)(function(){M("")},[]),(0,u.jsxs)("div",{style:{padding:"20px",boxSizing:"border-box"},children:[(0,u.jsx)(e,{}),(0,u.jsxs)(s,{children:[(0,u.jsx)(c,{onClick:p,name:b,text:"All NFT"}),(0,u.jsx)(c,{onClick:p,name:b,text:"CCP NFT DOG"})]}),(0,u.jsx)("div",{style:{padding:"20px"},children:B==O.o.wait?(0,u.jsx)(I.Z,{}):(0,u.jsx)(f.Z,{gutter:28,children:R==null?void 0:R.data.data.map(function(W){return(0,u.jsx)(d.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,u.jsx)(n.b,{props:W})},W.id)})})})]})},T=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(V,{})})}},64731:function(w,U,r){"use strict";r.d(U,{b:function(){return j}});var _=r(58024),f=r(39144),i=r(20310),d=r(67294),m=r(47416),D=r(16924),t=r(46677),E=r.n(t),x=r(53190),g=r(85893),A,O,v,I=m.ZP.div(A||(A=(0,i.Z)([`
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
`]))),P=m.ZP.div(O||(O=(0,i.Z)([`
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
`]))),u=(0,m.ZP)(f.Z)(v||(v=(0,i.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),j=function(S){var l=S.props,a=S.path,e=a===void 0?"market":a;return(0,g.jsx)(D.Link,{to:{pathname:"".concat(e,"/").concat(l.id),search:"id=".concat(l.id,"&name=").concat(l.dog_name,"&path=").concat(e)},children:(0,g.jsx)(u,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,g.jsxs)(I,{children:[(0,g.jsx)("div",{className:"images",children:(0,g.jsx)("img",{alt:"example",src:l.img_url})}),(0,g.jsx)("div",{className:"bottom",children:(0,g.jsx)("h4",{children:l.dog_name})})]}),children:(0,g.jsxs)(P,{children:[(0,g.jsxs)("span",{children:[" ",(0,g.jsx)(x._H,{id:"component.nft_car.sell_price"})]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("img",{src:E(),alt:"",className:"icon"}),parseInt(l.market_price).toFixed(2)]})]})})})}},67329:function(w,U,r){"use strict";r.d(U,{f:function(){return D},o:function(){return t}});var _=r(3182),f=r(2824),i=r(94043),d=r.n(i),m=r(67294),D=function(x){var g=(0,m.useState)(t.start),A=(0,f.Z)(g,2),O=A[0],v=A[1],I=(0,m.useState)(),P=(0,f.Z)(I,2),u=P[0],j=P[1],L=(0,m.useCallback)((0,_.Z)(d().mark(function S(){var l,a,e=arguments;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,v(t.wait),o.next=4,x.apply(void 0,e);case 4:return l=o.sent,j(l),v(t.success),o.abrupt("return",l);case 10:return o.prev=10,o.t0=o.catch(0),a={err:o.t0.info},j(a),v(t.failure),o.abrupt("return",a);case 16:case"end":return o.stop()}},S,null,[[0,10]])})),[v,j]);return{status:O,request:L,data:u}},t;(function(E){E[E.start=0]="start",E[E.wait=1]="wait",E[E.success=2]="success",E[E.failure=3]="failure"})(t||(t={}))},46677:function(w){w.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},39144:function(w,U,r){"use strict";r.d(U,{Z:function(){return a}});var _=r(96156),f=r(22122),i=r(67294),d=r(94184),m=r.n(d),D=r(98423),t=r(86032),E=function(e,n){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(e);c<s.length;c++)n.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(o[s[c]]=e[s[c]]);return o},x=function(n){var o=n.prefixCls,s=n.className,c=n.hoverable,F=c===void 0?!0:c,V=E(n,["prefixCls","className","hoverable"]);return i.createElement(t.C,null,function(T){var y=T.getPrefixCls,h=y("card",o),b=m()("".concat(h,"-grid"),s,(0,_.Z)({},"".concat(h,"-grid-hoverable"),F));return i.createElement("div",(0,f.Z)({},V,{className:b}))})},g=x,A=function(e,n){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(e);c<s.length;c++)n.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(o[s[c]]=e[s[c]]);return o},O=function(n){return i.createElement(t.C,null,function(o){var s=o.getPrefixCls,c=n.prefixCls,F=n.className,V=n.avatar,T=n.title,y=n.description,h=A(n,["prefixCls","className","avatar","title","description"]),b=s("card",c),p=m()("".concat(b,"-meta"),F),C=V?i.createElement("div",{className:"".concat(b,"-meta-avatar")},V):null,M=T?i.createElement("div",{className:"".concat(b,"-meta-title")},T):null,B=y?i.createElement("div",{className:"".concat(b,"-meta-description")},y):null,R=M||B?i.createElement("div",{className:"".concat(b,"-meta-detail")},M,B):null;return i.createElement("div",(0,f.Z)({},h,{className:p}),C,R)})},v=O,I=r(47428),P=r(71230),u=r(15746),j=r(97647),L=function(e,n){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(e);c<s.length;c++)n.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(o[s[c]]=e[s[c]]);return o};function S(e){var n=e.map(function(o,s){return i.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(s)},i.createElement("span",null,o))});return n}var l=function(n){var o,s,c=i.useContext(t.E_),F=c.getPrefixCls,V=c.direction,T=i.useContext(j.Z),y=function(tt){var k;(k=n.onTabChange)===null||k===void 0||k.call(n,tt)},h=function(){var tt;return i.Children.forEach(n.children,function(k){k&&k.type&&k.type===g&&(tt=!0)}),tt},b=n.prefixCls,p=n.className,C=n.extra,M=n.headStyle,B=M===void 0?{}:M,R=n.bodyStyle,W=R===void 0?{}:R,K=n.title,Z=n.loading,G=n.bordered,Y=G===void 0?!0:G,J=n.size,z=n.type,H=n.cover,X=n.actions,$=n.tabList,ot=n.children,et=n.activeTabKey,lt=n.defaultActiveTabKey,ut=n.tabBarExtraContent,dt=n.hoverable,nt=n.tabProps,ct=nt===void 0?{}:nt,ft=L(n,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),N=F("card",b),mt=W.padding===0||W.padding==="0px"?{padding:24}:void 0,Q=i.createElement("div",{className:"".concat(N,"-loading-block")}),gt=i.createElement("div",{className:"".concat(N,"-loading-content"),style:mt},i.createElement(P.Z,{gutter:8},i.createElement(u.Z,{span:22},Q)),i.createElement(P.Z,{gutter:8},i.createElement(u.Z,{span:8},Q),i.createElement(u.Z,{span:15},Q)),i.createElement(P.Z,{gutter:8},i.createElement(u.Z,{span:6},Q),i.createElement(u.Z,{span:18},Q)),i.createElement(P.Z,{gutter:8},i.createElement(u.Z,{span:13},Q),i.createElement(u.Z,{span:9},Q)),i.createElement(P.Z,{gutter:8},i.createElement(u.Z,{span:4},Q),i.createElement(u.Z,{span:3},Q),i.createElement(u.Z,{span:16},Q))),at=et!==void 0,vt=(0,f.Z)((0,f.Z)({},ct),(o={},(0,_.Z)(o,at?"activeKey":"defaultActiveKey",at?et:lt),(0,_.Z)(o,"tabBarExtraContent",ut),o)),rt,it=$&&$.length?i.createElement(I.Z,(0,f.Z)({size:"large"},vt,{className:"".concat(N,"-head-tabs"),onChange:y}),$.map(function(q){return i.createElement(I.Z.TabPane,{tab:q.tab,disabled:q.disabled,key:q.key})})):null;(K||C||it)&&(rt=i.createElement("div",{className:"".concat(N,"-head"),style:B},i.createElement("div",{className:"".concat(N,"-head-wrapper")},K&&i.createElement("div",{className:"".concat(N,"-head-title")},K),C&&i.createElement("div",{className:"".concat(N,"-extra")},C)),it));var ht=H?i.createElement("div",{className:"".concat(N,"-cover")},H):null,pt=i.createElement("div",{className:"".concat(N,"-body"),style:W},Z?gt:ot),Et=X&&X.length?i.createElement("ul",{className:"".concat(N,"-actions")},S(X)):null,_t=(0,D.Z)(ft,["onTabChange"]),st=J||T,xt=m()(N,(s={},(0,_.Z)(s,"".concat(N,"-loading"),Z),(0,_.Z)(s,"".concat(N,"-bordered"),Y),(0,_.Z)(s,"".concat(N,"-hoverable"),dt),(0,_.Z)(s,"".concat(N,"-contain-grid"),h()),(0,_.Z)(s,"".concat(N,"-contain-tabs"),$&&$.length),(0,_.Z)(s,"".concat(N,"-").concat(st),st),(0,_.Z)(s,"".concat(N,"-type-").concat(z),!!z),(0,_.Z)(s,"".concat(N,"-rtl"),V==="rtl"),s),p);return i.createElement("div",(0,f.Z)({},_t,{className:xt}),rt,ht,pt,Et)};l.Grid=g,l.Meta=v;var a=l},58024:function(w,U,r){"use strict";var _=r(65056),f=r.n(_),i=r(70347),d=r.n(i),m=r(18106),D=r(13062),t=r(89032)},8273:function(w,U,r){"use strict";r.r(U),r.d(U,{CountUp:function(){return f}});var _=function(){return(_=Object.assign||function(i){for(var d,m=1,D=arguments.length;m<D;m++)for(var t in d=arguments[m])Object.prototype.hasOwnProperty.call(d,t)&&(i[t]=d[t]);return i}).apply(this,arguments)},f=function(){function i(d,m,D){var t=this;this.target=d,this.endVal=m,this.options=D,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(E){t.startTime||(t.startTime=E);var x=E-t.startTime;t.remaining=t.duration-x,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(x,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(x,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(x/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(x/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),x<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(E){var x,g,A,O,v=E<0?"-":"";x=Math.abs(E).toFixed(t.options.decimalPlaces);var I=(x+="").split(".");if(g=I[0],A=I.length>1?t.options.decimal+I[1]:"",t.options.useGrouping){O="";for(var P=0,u=g.length;P<u;++P)P!==0&&P%3==0&&(O=t.options.separator+O),O=g[u-P-1]+O;g=O}return t.options.numerals&&t.options.numerals.length&&(g=g.replace(/[0-9]/g,function(j){return t.options.numerals[+j]}),A=A.replace(/[0-9]/g,function(j){return t.options.numerals[+j]})),v+t.options.prefix+g+A+t.options.suffix},this.easeOutExpo=function(E,x,g,A){return g*(1-Math.pow(2,-10*E/A))*1024/1023+x},this.options=_(_({},this.defaults),D),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(m),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof d=="string"?document.getElementById(d):d,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return i.prototype.determineDirectionAndSmartEasing=function(){var d=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>d;var m=d-this.startVal;if(Math.abs(m)>this.options.smartEasingThreshold){this.finalEndVal=d;var D=this.countDown?1:-1;this.endVal=d+D*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=d,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(d){this.error||(this.callback=d,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(d){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(d),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(d){var m=this.formattingFn(d);this.el.tagName==="INPUT"?this.el.value=m:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=m:this.el.innerHTML=m},i.prototype.ensureNumber=function(d){return typeof d=="number"&&!isNaN(d)},i.prototype.validateValue=function(d){var m=Number(d);return this.ensureNumber(m)?m:(this.error="[CountUp] invalid start or end value: "+d,null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}()},17857:function(w,U,r){"use strict";var _;_={value:!0};var f=r(67294),i=r(8273);function d(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var m=d(f);function D(l,a){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(l,o).enumerable})),e.push.apply(e,n)}return e}function t(l){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?D(Object(e),!0).forEach(function(n){E(l,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach(function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(e,n))})}return l}function E(l,a,e){return a in l?Object.defineProperty(l,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[a]=e,l}function x(){return x=Object.assign||function(l){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l},x.apply(this,arguments)}function g(l,a){if(l==null)return{};var e={},n=Object.keys(l),o,s;for(s=0;s<n.length;s++)o=n[s],!(a.indexOf(o)>=0)&&(e[o]=l[o]);return e}function A(l,a){if(l==null)return{};var e=g(l,a),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,n)||(e[n]=l[n]))}return e}var O=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?f.useLayoutEffect:f.useEffect;function v(l){var a=f.useRef(l);return O(function(){a.current=l}),f.useCallback(function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return a.current.apply(void 0,n)},[])}var I=function(a,e){var n=e.decimal,o=e.decimals,s=e.duration,c=e.easingFn,F=e.end,V=e.formattingFn,T=e.numerals,y=e.prefix,h=e.separator,b=e.start,p=e.suffix,C=e.useEasing;return new i.CountUp(a,F,{startVal:b,duration:s,decimal:n,decimalPlaces:o,easingFn:c,formattingFn:V,numerals:T,separator:h,prefix:y,suffix:p,useEasing:C,useGrouping:!!h})},P=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],u={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},j=function(a){var e=f.useMemo(function(){return t(t({},u),a)},[a]),n=e.ref,o=e.startOnMount,s=e.enableReinitialize,c=e.delay,F=e.onEnd,V=e.onStart,T=e.onPauseResume,y=e.onReset,h=e.onUpdate,b=A(e,P),p=f.useRef(),C=f.useRef(),M=f.useRef(!1),B=v(function(){return I(typeof n=="string"?n:n.current,b)}),R=v(function(z){var H=p.current;if(H&&!z)return H;var X=B();return p.current=X,X}),W=v(function(){var z=function(){return R(!0).start(function(){F==null||F({pauseResume:K,reset:Z,start:Y,update:G})})};c&&c>0?C.current=setTimeout(z,c*1e3):z(),V==null||V({pauseResume:K,reset:Z,update:G})}),K=v(function(){R().pauseResume(),T==null||T({reset:Z,start:Y,update:G})}),Z=v(function(){C.current&&clearTimeout(C.current),R().reset(),y==null||y({pauseResume:K,start:Y,update:G})}),G=v(function(z){R().update(z),h==null||h({pauseResume:K,reset:Z,start:Y})}),Y=v(function(){Z(),W()}),J=v(function(z){o&&(z&&Z(),W())});return f.useEffect(function(){M.current?s&&J(!0):(M.current=!0,J())},[s,M,J,c,a.start,a.suffix,a.prefix,a.duration,a.separator,a.decimals,a.decimal,a.formattingFn]),f.useEffect(function(){return function(){Z()}},[Z]),{start:Y,pauseResume:K,reset:Z,update:G,getCountUp:R}},L=["className","redraw","containerProps","children","style"],S=function(a){var e=a.className,n=a.redraw,o=a.containerProps,s=a.children,c=a.style,F=A(a,L),V=m.default.useRef(null),T=m.default.useRef(!1),y=j(t(t({},F),{},{ref:V,startOnMount:typeof s!="function"||a.delay===0,enableReinitialize:!1})),h=y.start,b=y.reset,p=y.update,C=y.pauseResume,M=y.getCountUp,B=v(function(){h()}),R=v(function(Z){a.preserveValue||b(),p(Z)}),W=v(function(){if(typeof a.children=="function"&&!(V.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}M()});f.useEffect(function(){W()},[W]),f.useEffect(function(){T.current&&R(a.end)},[a.end,R]);var K=n&&a;return f.useEffect(function(){n&&T.current&&B()},[B,n,K]),f.useEffect(function(){!n&&T.current&&B()},[B,n,a.start,a.suffix,a.prefix,a.duration,a.separator,a.decimals,a.decimal,a.className,a.formattingFn]),f.useEffect(function(){T.current=!0},[]),typeof s=="function"?s({countUpRef:V,start:h,reset:b,update:p,pauseResume:C,getCountUp:M}):m.default.createElement("span",x({className:e,ref:V,style:c},o),a.start?M().formattingFn(a.start):"")};U.ZP=S,_=j}}]);
