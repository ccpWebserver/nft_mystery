(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{70347:function(){},99219:function(w,U,r){"use strict";r.d(U,{e:function(){return x}});var _=r(2824),m=r(20310),s=r(67294),c=r(17857),g=r(47416),D=r(85893),t,E=g.ZP.div(t||(t=(0,m.Z)([`
  padding: `,`;
`])),function(f){return f.padding||"0"}),x=function(A){var O=A.value,v=O===void 0?"":O,I=A.decimals,P=A.padding,l=(0,s.useState)(0),j=(0,_.Z)(l,2),L=j[0],S=j[1],o=(0,s.useState)(0),i=(0,_.Z)(o,2),e=i[0],n=i[1];return(0,s.useEffect)(function(){typeof v=="number"&&(S(e),n(v))},[v]),(0,D.jsx)(E,{padding:P,children:typeof v=="string"?v:(0,D.jsx)(c.ZP,{start:L,end:e,decimals:I!==void 0?I:0,duration:1,separator:","})})}},57289:function(w,U,r){"use strict";r.r(U),r.d(U,{default:function(){return T}});var _=r(13062),m=r(71230),s=r(89032),c=r(15746),g=r(2824),D=r(57663),t=r(71577),E=r(20310),x=r(67294),f=r(47416),A=r(99219),O=r(67329),v=r(93874),I=r(83832),P=r(53190),l=r(85893),j,L,S=f.ZP.div(j||(j=(0,E.Z)([`
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
`]))),o=function(h){var b=h.text,p=h.value;return(0,l.jsxs)(S,{children:[(0,l.jsxs)("h3",{children:["$ ",(0,l.jsx)(A.e,{value:p!=null?p:0})]}),(0,l.jsx)("p",{children:b})]})},i=f.ZP.div(L||(L=(0,E.Z)([`
  border-radius: 15px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`]))),e=function(){var h=(0,O.f)(v.w.nftHome),b=h.request,p=h.data,C=h.status,M=(0,P.YB)();return(0,x.useEffect)(function(){b("")},[]),C==O.o.wait?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(I.Z,{})}):(0,l.jsx)(i,{children:(0,l.jsxs)(m.Z,{children:[(0,l.jsx)(c.Z,{xs:24,sm:12,lg:8,children:(0,l.jsx)(o,{text:M.formatMessage({id:"pages.market.dog_sold"}),value:p==null?void 0:p.total_turnover})}),(0,l.jsx)(c.Z,{xs:24,sm:12,lg:8,children:(0,l.jsx)(o,{text:M.formatMessage({id:"pages.market.total_sale"}),value:p==null?void 0:p.total_transaction_times})}),(0,l.jsx)(c.Z,{xs:24,sm:12,lg:8,children:(0,l.jsx)(o,{text:M.formatMessage({id:"pages.market.total_volume"}),value:p==null?void 0:p.total_auction_commission})})]})})},n=r(64731),u,a=f.ZP.div(u||(u=(0,E.Z)([`
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
`]))),d=function(h){var b=h.text,p=h.name,C=h.onClick;return(0,l.jsx)(t.Z,{className:p===b?"ac":"",onClick:function(){return C(b)},type:"default",shape:"round",size:"large",children:b})},F=[{id:689072,u_id:0,dog_name:"CCP Big Dog(129)",dog_sex:1,dog_breed:8,dog_attr:[{attr:1,grade:852,name:"\u901F\u5EA6"},{attr:2,grade:550,name:"\u8010\u529B"},{attr:3,grade:361,name:"\u7206\u53D1"},{attr:4,grade:254,name:"\u5E73\u8861"}],dog_skill:[{skill:4,grade:5,name:"Lucky \u5E78\u8FD0\u7684"},{skill:14,grade:8,name:"Faith Sprint \u4FE1\u4EF0\u51B2\u523A"},{skill:4,grade:1,name:"Lucky \u5E78\u8FD0\u7684"},{skill:10,grade:4,name:"Phantom Transcendence \u5E7B\u5F71\u8D85\u8D8A"}],father_id:0,mother_id:0,sons_json:"",daughters_json:"",reproduce_count:0,block_address:"",market_price:"599.00000000000000000000",is_selling:1,img_url:"https://ccp.dog/img/dogs/dog.jpeg",addtime:"2021-12-30 21:05:09",updatetime:"2021-12-30 21:05:09"}],V=function(){var y=(0,x.useState)("All NFT"),h=(0,g.Z)(y,2),b=h[0],p=h[1],C=(0,O.f)(v.w.market),M=C.request,B=C.status,R=C.data;return(0,x.useEffect)(function(){M("")},[]),(0,l.jsxs)("div",{style:{padding:"20px",boxSizing:"border-box"},children:[(0,l.jsx)(e,{}),(0,l.jsxs)(a,{children:[(0,l.jsx)(d,{onClick:p,name:b,text:"All NFT"}),(0,l.jsx)(d,{onClick:p,name:b,text:"CCP NFT DOG"})]}),(0,l.jsx)("div",{style:{padding:"20px"},children:B==O.o.wait?(0,l.jsx)(I.Z,{}):(0,l.jsx)(m.Z,{gutter:28,children:R==null?void 0:R.data.map(function(W){return(0,l.jsx)(c.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,l.jsx)(n.b,{props:W})},W.id)})})})]})},T=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(V,{})})}},64731:function(w,U,r){"use strict";r.d(U,{b:function(){return j}});var _=r(58024),m=r(39144),s=r(20310),c=r(67294),g=r(47416),D=r(16924),t=r(46677),E=r.n(t),x=r(53190),f=r(85893),A,O,v,I=g.ZP.div(A||(A=(0,s.Z)([`
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
`]))),P=g.ZP.div(O||(O=(0,s.Z)([`
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
`]))),l=(0,g.ZP)(m.Z)(v||(v=(0,s.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),j=function(S){var o=S.props,i=S.path,e=i===void 0?"market":i;return(0,f.jsx)(D.Link,{to:{pathname:"".concat(e,"/").concat(o.id),search:"id=".concat(o.id,"&name=").concat(o.dog_name,"&path=").concat(e)},children:(0,f.jsx)(l,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,f.jsxs)(I,{children:[(0,f.jsx)("div",{className:"images",children:(0,f.jsx)("img",{alt:"example",src:o.img_url})}),(0,f.jsx)("div",{className:"bottom",children:(0,f.jsx)("h4",{children:o.dog_name})}),(0,f.jsx)("div",{className:"price",children:"600x"})]}),children:(0,f.jsxs)(P,{children:[(0,f.jsxs)("span",{children:[" ",(0,f.jsx)(x._H,{id:"component.nft_car.sell_price"})]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("img",{src:E(),alt:"",className:"icon"}),parseInt(o.market_price).toFixed(2)]})]})})})}},67329:function(w,U,r){"use strict";r.d(U,{f:function(){return D},o:function(){return t}});var _=r(3182),m=r(2824),s=r(94043),c=r.n(s),g=r(67294),D=function(x){var f=(0,g.useState)(t.start),A=(0,m.Z)(f,2),O=A[0],v=A[1],I=(0,g.useState)(),P=(0,m.Z)(I,2),l=P[0],j=P[1],L=(0,g.useCallback)(function(){var S=(0,_.Z)(c().mark(function o(i){var e,n;return c().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,v(t.wait),a.next=4,x(i);case 4:e=a.sent,j(e),v(t.success),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(0),n={err:a.t0},j(n),v(t.failure);case 14:case"end":return a.stop()}},o,null,[[0,9]])}));return function(o){return S.apply(this,arguments)}}(),[v,j]);return{status:O,request:L,data:l}},t;(function(E){E[E.start=0]="start",E[E.wait=1]="wait",E[E.success=2]="success",E[E.failure=3]="failure"})(t||(t={}))},46677:function(w){w.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},39144:function(w,U,r){"use strict";r.d(U,{Z:function(){return i}});var _=r(96156),m=r(22122),s=r(67294),c=r(94184),g=r.n(c),D=r(98423),t=r(86032),E=function(e,n){var u={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(u[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(e);d<a.length;d++)n.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(e,a[d])&&(u[a[d]]=e[a[d]]);return u},x=function(n){var u=n.prefixCls,a=n.className,d=n.hoverable,F=d===void 0?!0:d,V=E(n,["prefixCls","className","hoverable"]);return s.createElement(t.C,null,function(T){var y=T.getPrefixCls,h=y("card",u),b=g()("".concat(h,"-grid"),a,(0,_.Z)({},"".concat(h,"-grid-hoverable"),F));return s.createElement("div",(0,m.Z)({},V,{className:b}))})},f=x,A=function(e,n){var u={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(u[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(e);d<a.length;d++)n.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(e,a[d])&&(u[a[d]]=e[a[d]]);return u},O=function(n){return s.createElement(t.C,null,function(u){var a=u.getPrefixCls,d=n.prefixCls,F=n.className,V=n.avatar,T=n.title,y=n.description,h=A(n,["prefixCls","className","avatar","title","description"]),b=a("card",d),p=g()("".concat(b,"-meta"),F),C=V?s.createElement("div",{className:"".concat(b,"-meta-avatar")},V):null,M=T?s.createElement("div",{className:"".concat(b,"-meta-title")},T):null,B=y?s.createElement("div",{className:"".concat(b,"-meta-description")},y):null,R=M||B?s.createElement("div",{className:"".concat(b,"-meta-detail")},M,B):null;return s.createElement("div",(0,m.Z)({},h,{className:p}),C,R)})},v=O,I=r(47428),P=r(71230),l=r(15746),j=r(97647),L=function(e,n){var u={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(u[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(e);d<a.length;d++)n.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(e,a[d])&&(u[a[d]]=e[a[d]]);return u};function S(e){var n=e.map(function(u,a){return s.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},s.createElement("span",null,u))});return n}var o=function(n){var u,a,d=s.useContext(t.E_),F=d.getPrefixCls,V=d.direction,T=s.useContext(j.Z),y=function(tt){var Y;(Y=n.onTabChange)===null||Y===void 0||Y.call(n,tt)},h=function(){var tt;return s.Children.forEach(n.children,function(Y){Y&&Y.type&&Y.type===f&&(tt=!0)}),tt},b=n.prefixCls,p=n.className,C=n.extra,M=n.headStyle,B=M===void 0?{}:M,R=n.bodyStyle,W=R===void 0?{}:R,K=n.title,Z=n.loading,G=n.bordered,k=G===void 0?!0:G,J=n.size,z=n.type,H=n.cover,X=n.actions,$=n.tabList,ot=n.children,et=n.activeTabKey,lt=n.defaultActiveTabKey,ut=n.tabBarExtraContent,ct=n.hoverable,nt=n.tabProps,dt=nt===void 0?{}:nt,ft=L(n,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),N=F("card",b),mt=W.padding===0||W.padding==="0px"?{padding:24}:void 0,Q=s.createElement("div",{className:"".concat(N,"-loading-block")}),gt=s.createElement("div",{className:"".concat(N,"-loading-content"),style:mt},s.createElement(P.Z,{gutter:8},s.createElement(l.Z,{span:22},Q)),s.createElement(P.Z,{gutter:8},s.createElement(l.Z,{span:8},Q),s.createElement(l.Z,{span:15},Q)),s.createElement(P.Z,{gutter:8},s.createElement(l.Z,{span:6},Q),s.createElement(l.Z,{span:18},Q)),s.createElement(P.Z,{gutter:8},s.createElement(l.Z,{span:13},Q),s.createElement(l.Z,{span:9},Q)),s.createElement(P.Z,{gutter:8},s.createElement(l.Z,{span:4},Q),s.createElement(l.Z,{span:3},Q),s.createElement(l.Z,{span:16},Q))),at=et!==void 0,vt=(0,m.Z)((0,m.Z)({},dt),(u={},(0,_.Z)(u,at?"activeKey":"defaultActiveKey",at?et:lt),(0,_.Z)(u,"tabBarExtraContent",ut),u)),rt,it=$&&$.length?s.createElement(I.Z,(0,m.Z)({size:"large"},vt,{className:"".concat(N,"-head-tabs"),onChange:y}),$.map(function(q){return s.createElement(I.Z.TabPane,{tab:q.tab,disabled:q.disabled,key:q.key})})):null;(K||C||it)&&(rt=s.createElement("div",{className:"".concat(N,"-head"),style:B},s.createElement("div",{className:"".concat(N,"-head-wrapper")},K&&s.createElement("div",{className:"".concat(N,"-head-title")},K),C&&s.createElement("div",{className:"".concat(N,"-extra")},C)),it));var ht=H?s.createElement("div",{className:"".concat(N,"-cover")},H):null,pt=s.createElement("div",{className:"".concat(N,"-body"),style:W},Z?gt:ot),Et=X&&X.length?s.createElement("ul",{className:"".concat(N,"-actions")},S(X)):null,_t=(0,D.Z)(ft,["onTabChange"]),st=J||T,xt=g()(N,(a={},(0,_.Z)(a,"".concat(N,"-loading"),Z),(0,_.Z)(a,"".concat(N,"-bordered"),k),(0,_.Z)(a,"".concat(N,"-hoverable"),ct),(0,_.Z)(a,"".concat(N,"-contain-grid"),h()),(0,_.Z)(a,"".concat(N,"-contain-tabs"),$&&$.length),(0,_.Z)(a,"".concat(N,"-").concat(st),st),(0,_.Z)(a,"".concat(N,"-type-").concat(z),!!z),(0,_.Z)(a,"".concat(N,"-rtl"),V==="rtl"),a),p);return s.createElement("div",(0,m.Z)({},_t,{className:xt}),rt,ht,pt,Et)};o.Grid=f,o.Meta=v;var i=o},58024:function(w,U,r){"use strict";var _=r(65056),m=r.n(_),s=r(70347),c=r.n(s),g=r(18106),D=r(13062),t=r(89032)},8273:function(w,U,r){"use strict";r.r(U),r.d(U,{CountUp:function(){return m}});var _=function(){return(_=Object.assign||function(s){for(var c,g=1,D=arguments.length;g<D;g++)for(var t in c=arguments[g])Object.prototype.hasOwnProperty.call(c,t)&&(s[t]=c[t]);return s}).apply(this,arguments)},m=function(){function s(c,g,D){var t=this;this.target=c,this.endVal=g,this.options=D,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(E){t.startTime||(t.startTime=E);var x=E-t.startTime;t.remaining=t.duration-x,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(x,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(x,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(x/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(x/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),x<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(E){var x,f,A,O,v=E<0?"-":"";x=Math.abs(E).toFixed(t.options.decimalPlaces);var I=(x+="").split(".");if(f=I[0],A=I.length>1?t.options.decimal+I[1]:"",t.options.useGrouping){O="";for(var P=0,l=f.length;P<l;++P)P!==0&&P%3==0&&(O=t.options.separator+O),O=f[l-P-1]+O;f=O}return t.options.numerals&&t.options.numerals.length&&(f=f.replace(/[0-9]/g,function(j){return t.options.numerals[+j]}),A=A.replace(/[0-9]/g,function(j){return t.options.numerals[+j]})),v+t.options.prefix+f+A+t.options.suffix},this.easeOutExpo=function(E,x,f,A){return f*(1-Math.pow(2,-10*E/A))*1024/1023+x},this.options=_(_({},this.defaults),D),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(g),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof c=="string"?document.getElementById(c):c,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return s.prototype.determineDirectionAndSmartEasing=function(){var c=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>c;var g=c-this.startVal;if(Math.abs(g)>this.options.smartEasingThreshold){this.finalEndVal=c;var D=this.countDown?1:-1;this.endVal=c+D*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=c,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},s.prototype.start=function(c){this.error||(this.callback=c,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},s.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},s.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},s.prototype.update=function(c){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(c),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},s.prototype.printValue=function(c){var g=this.formattingFn(c);this.el.tagName==="INPUT"?this.el.value=g:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=g:this.el.innerHTML=g},s.prototype.ensureNumber=function(c){return typeof c=="number"&&!isNaN(c)},s.prototype.validateValue=function(c){var g=Number(c);return this.ensureNumber(g)?g:(this.error="[CountUp] invalid start or end value: "+c,null)},s.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},s}()},17857:function(w,U,r){"use strict";var _;_={value:!0};var m=r(67294),s=r(8273);function c(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var g=c(m);function D(o,i){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);i&&(n=n.filter(function(u){return Object.getOwnPropertyDescriptor(o,u).enumerable})),e.push.apply(e,n)}return e}function t(o){for(var i=1;i<arguments.length;i++){var e=arguments[i]!=null?arguments[i]:{};i%2?D(Object(e),!0).forEach(function(n){E(o,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):D(Object(e)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(e,n))})}return o}function E(o,i,e){return i in o?Object.defineProperty(o,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[i]=e,o}function x(){return x=Object.assign||function(o){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},x.apply(this,arguments)}function f(o,i){if(o==null)return{};var e={},n=Object.keys(o),u,a;for(a=0;a<n.length;a++)u=n[a],!(i.indexOf(u)>=0)&&(e[u]=o[u]);return e}function A(o,i){if(o==null)return{};var e=f(o,i),n,u;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);for(u=0;u<a.length;u++)n=a[u],!(i.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,n)||(e[n]=o[n]))}return e}var O=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?m.useLayoutEffect:m.useEffect;function v(o){var i=m.useRef(o);return O(function(){i.current=o}),m.useCallback(function(){for(var e=arguments.length,n=new Array(e),u=0;u<e;u++)n[u]=arguments[u];return i.current.apply(void 0,n)},[])}var I=function(i,e){var n=e.decimal,u=e.decimals,a=e.duration,d=e.easingFn,F=e.end,V=e.formattingFn,T=e.numerals,y=e.prefix,h=e.separator,b=e.start,p=e.suffix,C=e.useEasing;return new s.CountUp(i,F,{startVal:b,duration:a,decimal:n,decimalPlaces:u,easingFn:d,formattingFn:V,numerals:T,separator:h,prefix:y,suffix:p,useEasing:C,useGrouping:!!h})},P=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],l={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},j=function(i){var e=m.useMemo(function(){return t(t({},l),i)},[i]),n=e.ref,u=e.startOnMount,a=e.enableReinitialize,d=e.delay,F=e.onEnd,V=e.onStart,T=e.onPauseResume,y=e.onReset,h=e.onUpdate,b=A(e,P),p=m.useRef(),C=m.useRef(),M=m.useRef(!1),B=v(function(){return I(typeof n=="string"?n:n.current,b)}),R=v(function(z){var H=p.current;if(H&&!z)return H;var X=B();return p.current=X,X}),W=v(function(){var z=function(){return R(!0).start(function(){F==null||F({pauseResume:K,reset:Z,start:k,update:G})})};d&&d>0?C.current=setTimeout(z,d*1e3):z(),V==null||V({pauseResume:K,reset:Z,update:G})}),K=v(function(){R().pauseResume(),T==null||T({reset:Z,start:k,update:G})}),Z=v(function(){C.current&&clearTimeout(C.current),R().reset(),y==null||y({pauseResume:K,start:k,update:G})}),G=v(function(z){R().update(z),h==null||h({pauseResume:K,reset:Z,start:k})}),k=v(function(){Z(),W()}),J=v(function(z){u&&(z&&Z(),W())});return m.useEffect(function(){M.current?a&&J(!0):(M.current=!0,J())},[a,M,J,d,i.start,i.suffix,i.prefix,i.duration,i.separator,i.decimals,i.decimal,i.formattingFn]),m.useEffect(function(){return function(){Z()}},[Z]),{start:k,pauseResume:K,reset:Z,update:G,getCountUp:R}},L=["className","redraw","containerProps","children","style"],S=function(i){var e=i.className,n=i.redraw,u=i.containerProps,a=i.children,d=i.style,F=A(i,L),V=g.default.useRef(null),T=g.default.useRef(!1),y=j(t(t({},F),{},{ref:V,startOnMount:typeof a!="function"||i.delay===0,enableReinitialize:!1})),h=y.start,b=y.reset,p=y.update,C=y.pauseResume,M=y.getCountUp,B=v(function(){h()}),R=v(function(Z){i.preserveValue||b(),p(Z)}),W=v(function(){if(typeof i.children=="function"&&!(V.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}M()});m.useEffect(function(){W()},[W]),m.useEffect(function(){T.current&&R(i.end)},[i.end,R]);var K=n&&i;return m.useEffect(function(){n&&T.current&&B()},[B,n,K]),m.useEffect(function(){!n&&T.current&&B()},[B,n,i.start,i.suffix,i.prefix,i.duration,i.separator,i.decimals,i.decimal,i.className,i.formattingFn]),m.useEffect(function(){T.current=!0},[]),typeof a=="function"?a({countUpRef:V,start:h,reset:b,update:p,pauseResume:C,getCountUp:M}):g.default.createElement("span",x({className:e,ref:V,style:d},u),i.start?M().formattingFn(i.start):"")};U.ZP=S,_=j}}]);
