(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{70347:function(){},99219:function(Q,Z,r){"use strict";r.d(Z,{e:function(){return _}});var E=r(2824),m=r(20310),i=r(67294),d=r(17857),g=r(47416),C=r(85893),t,p=g.ZP.div(t||(t=(0,m.Z)([`
  padding: `,`;
`])),function(f){return f.padding||"0"}),_=function(A){var O=A.value,v=O===void 0?"":O,I=A.decimals,y=A.padding,u=(0,i.useState)(0),D=(0,E.Z)(u,2),L=D[0],W=D[1],l=(0,i.useState)(0),a=(0,E.Z)(l,2),e=a[0],n=a[1];return(0,i.useEffect)(function(){typeof v=="number"&&(W(e),n(v))},[v]),(0,C.jsx)(p,{padding:y,children:typeof v=="string"?v:(0,C.jsx)(d.ZP,{start:L,end:e,decimals:I!==void 0?I:0,duration:1,separator:","})})}},57289:function(Q,Z,r){"use strict";r.r(Z),r.d(Z,{default:function(){return U}});var E=r(13062),m=r(71230),i=r(89032),d=r(15746),g=r(2824),C=r(57663),t=r(71577),p=r(20310),_=r(67294),f=r(47416),A=r(99219),O=r(67329),v=r(93874),I=r(83832),y=r(53190),u=r(85893),D,L,W=f.ZP.div(D||(D=(0,p.Z)([`
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
`]))),l=function(x){var b=x.text,h=x.value;return(0,u.jsxs)(W,{children:[(0,u.jsxs)("h3",{children:["$ ",(0,u.jsx)(A.e,{value:h!=null?h:0})]}),(0,u.jsx)("p",{children:b})]})},a=f.ZP.div(L||(L=(0,p.Z)([`
  border-radius: 15px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`]))),e=function(){var x=(0,O.f)(v.w.nftHome),b=x.request,h=x.data,T=x.status,M=(0,y.YB)();return(0,_.useEffect)(function(){b("")},[]),T==O.o.wait?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(I.Z,{})}):(0,u.jsx)(a,{children:(0,u.jsxs)(m.Z,{children:[(0,u.jsx)(d.Z,{xs:24,sm:12,lg:8,children:(0,u.jsx)(l,{text:M.formatMessage({id:"pages.market.dog_sold"}),value:h==null?void 0:h.data.total_turnover})}),(0,u.jsx)(d.Z,{xs:24,sm:12,lg:8,children:(0,u.jsx)(l,{text:M.formatMessage({id:"pages.market.total_sale"}),value:h==null?void 0:h.data.total_transaction_times})}),(0,u.jsx)(d.Z,{xs:24,sm:12,lg:8,children:(0,u.jsx)(l,{text:M.formatMessage({id:"pages.market.total_volume"}),value:h==null?void 0:h.data.total_auction_commission})})]})})},n=r(64731),o,s,c=f.ZP.div(o||(o=(0,p.Z)([`
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
`]))),B=function(x){var b=x.text,h=x.name,T=x.onClick;return(0,u.jsx)(t.Z,{className:h===b?"ac":"",onClick:function(){return T(b)},type:"default",shape:"round",size:"large",children:b})},R=[{id:689072,u_id:0,dog_name:"CCP Big Dog(129)",dog_sex:1,dog_breed:8,dog_attr:[{attr:1,grade:852,name:"\u901F\u5EA6"},{attr:2,grade:550,name:"\u8010\u529B"},{attr:3,grade:361,name:"\u7206\u53D1"},{attr:4,grade:254,name:"\u5E73\u8861"}],dog_skill:[{skill:4,grade:5,name:"Lucky \u5E78\u8FD0\u7684"},{skill:14,grade:8,name:"Faith Sprint \u4FE1\u4EF0\u51B2\u523A"},{skill:4,grade:1,name:"Lucky \u5E78\u8FD0\u7684"},{skill:10,grade:4,name:"Phantom Transcendence \u5E7B\u5F71\u8D85\u8D8A"}],father_id:0,mother_id:0,sons_json:"",daughters_json:"",reproduce_count:0,block_address:"",market_price:"599.00000000000000000000",is_selling:1,img_url:"https://ccp.dog/img/dogs/dog.jpeg",addtime:"2021-12-30 21:05:09",updatetime:"2021-12-30 21:05:09"}],V=f.ZP.div(s||(s=(0,p.Z)([`
  padding: 20px;
  box-sizing: border-box;

  .products{
    padding: 20px;
  }
  @media (max-width: 576px) {
    padding: 12px;
    .products{
      padding: 10px;
    }

  }
`]))),j=function(){var P=(0,_.useState)("All NFT"),x=(0,g.Z)(P,2),b=x[0],h=x[1],T=(0,O.f)(v.w.market),M=T.request,K=T.status,S=T.data;return(0,_.useEffect)(function(){M("")},[]),(0,u.jsxs)(V,{style:{},children:[(0,u.jsx)(e,{}),(0,u.jsxs)(c,{children:[(0,u.jsx)(B,{onClick:h,name:b,text:"All NFT"}),(0,u.jsx)(B,{onClick:h,name:b,text:"CCP NFT DOG"})]}),(0,u.jsx)("div",{className:"products",children:K==O.o.wait?(0,u.jsx)(I.Z,{}):(0,u.jsx)(m.Z,{gutter:28,children:S==null?void 0:S.data.data.map(function(F){return(0,u.jsx)(d.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,u.jsx)(n.b,{props:F})},F.id)})})})]})},U=function(){return(0,u.jsx)("div",{children:(0,u.jsx)(j,{})})}},64731:function(Q,Z,r){"use strict";r.d(Z,{b:function(){return D}});var E=r(58024),m=r(39144),i=r(20310),d=r(67294),g=r(47416),C=r(16924),t=r(46677),p=r.n(t),_=r(53190),f=r(85893),A,O,v,I=g.ZP.div(A||(A=(0,i.Z)([`
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
`]))),y=g.ZP.div(O||(O=(0,i.Z)([`
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
`]))),u=(0,g.ZP)(m.Z)(v||(v=(0,i.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),D=function(W){var l=W.props,a=W.path,e=a===void 0?"market":a;return(0,f.jsx)(C.Link,{to:{pathname:"".concat(e,"/").concat(l.id),search:"id=".concat(l.id,"&name=").concat(l.dog_name,"&path=").concat(e)},children:(0,f.jsx)(u,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,f.jsxs)(I,{children:[(0,f.jsx)("div",{className:"images",children:(0,f.jsx)("img",{alt:"example",src:l.img_url})}),(0,f.jsx)("div",{className:"bottom",children:(0,f.jsx)("h4",{children:l.dog_name})})]}),children:(0,f.jsxs)(y,{children:[(0,f.jsxs)("span",{children:[" ",(0,f.jsx)(_._H,{id:"component.nft_car.sell_price"})]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("img",{src:p(),alt:"",className:"icon"}),l.is_selling==1?parseInt(l.market_price).toFixed(2):"---"]})]})})})}},67329:function(Q,Z,r){"use strict";r.d(Z,{f:function(){return C},o:function(){return t}});var E=r(3182),m=r(2824),i=r(94043),d=r.n(i),g=r(67294),C=function(_){var f=(0,g.useState)(t.start),A=(0,m.Z)(f,2),O=A[0],v=A[1],I=(0,g.useState)(),y=(0,m.Z)(I,2),u=y[0],D=y[1],L=(0,g.useCallback)((0,E.Z)(d().mark(function W(){var l,a,e=arguments;return d().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,v(t.wait),o.next=4,_.apply(void 0,e);case 4:return l=o.sent,D(l),v(t.success),o.abrupt("return",l);case 10:return o.prev=10,o.t0=o.catch(0),a={err:o.t0.info},D(a),v(t.failure),o.abrupt("return",a);case 16:case"end":return o.stop()}},W,null,[[0,10]])})),[v,D]);return{status:O,request:L,data:u}},t;(function(p){p[p.start=0]="start",p[p.wait=1]="wait",p[p.success=2]="success",p[p.failure=3]="failure"})(t||(t={}))},46677:function(Q){Q.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},39144:function(Q,Z,r){"use strict";r.d(Z,{Z:function(){return a}});var E=r(96156),m=r(22122),i=r(67294),d=r(94184),g=r.n(d),C=r(98423),t=r(86032),p=function(e,n){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(e);c<s.length;c++)n.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(o[s[c]]=e[s[c]]);return o},_=function(n){var o=n.prefixCls,s=n.className,c=n.hoverable,B=c===void 0?!0:c,R=p(n,["prefixCls","className","hoverable"]);return i.createElement(t.C,null,function(V){var j=V.getPrefixCls,U=j("card",o),P=g()("".concat(U,"-grid"),s,(0,E.Z)({},"".concat(U,"-grid-hoverable"),B));return i.createElement("div",(0,m.Z)({},R,{className:P}))})},f=_,A=function(e,n){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(e);c<s.length;c++)n.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(o[s[c]]=e[s[c]]);return o},O=function(n){return i.createElement(t.C,null,function(o){var s=o.getPrefixCls,c=n.prefixCls,B=n.className,R=n.avatar,V=n.title,j=n.description,U=A(n,["prefixCls","className","avatar","title","description"]),P=s("card",c),x=g()("".concat(P,"-meta"),B),b=R?i.createElement("div",{className:"".concat(P,"-meta-avatar")},R):null,h=V?i.createElement("div",{className:"".concat(P,"-meta-title")},V):null,T=j?i.createElement("div",{className:"".concat(P,"-meta-description")},j):null,M=h||T?i.createElement("div",{className:"".concat(P,"-meta-detail")},h,T):null;return i.createElement("div",(0,m.Z)({},U,{className:x}),b,M)})},v=O,I=r(47428),y=r(71230),u=r(15746),D=r(97647),L=function(e,n){var o={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&n.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,s=Object.getOwnPropertySymbols(e);c<s.length;c++)n.indexOf(s[c])<0&&Object.prototype.propertyIsEnumerable.call(e,s[c])&&(o[s[c]]=e[s[c]]);return o};function W(e){var n=e.map(function(o,s){return i.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(s)},i.createElement("span",null,o))});return n}var l=function(n){var o,s,c=i.useContext(t.E_),B=c.getPrefixCls,R=c.direction,V=i.useContext(D.Z),j=function(tt){var Y;(Y=n.onTabChange)===null||Y===void 0||Y.call(n,tt)},U=function(){var tt;return i.Children.forEach(n.children,function(Y){Y&&Y.type&&Y.type===f&&(tt=!0)}),tt},P=n.prefixCls,x=n.className,b=n.extra,h=n.headStyle,T=h===void 0?{}:h,M=n.bodyStyle,K=M===void 0?{}:M,S=n.title,F=n.loading,G=n.bordered,k=G===void 0?!0:G,J=n.size,z=n.type,H=n.cover,X=n.actions,$=n.tabList,ot=n.children,et=n.activeTabKey,lt=n.defaultActiveTabKey,ut=n.tabBarExtraContent,dt=n.hoverable,nt=n.tabProps,ct=nt===void 0?{}:nt,ft=L(n,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),N=B("card",P),mt=K.padding===0||K.padding==="0px"?{padding:24}:void 0,w=i.createElement("div",{className:"".concat(N,"-loading-block")}),gt=i.createElement("div",{className:"".concat(N,"-loading-content"),style:mt},i.createElement(y.Z,{gutter:8},i.createElement(u.Z,{span:22},w)),i.createElement(y.Z,{gutter:8},i.createElement(u.Z,{span:8},w),i.createElement(u.Z,{span:15},w)),i.createElement(y.Z,{gutter:8},i.createElement(u.Z,{span:6},w),i.createElement(u.Z,{span:18},w)),i.createElement(y.Z,{gutter:8},i.createElement(u.Z,{span:13},w),i.createElement(u.Z,{span:9},w)),i.createElement(y.Z,{gutter:8},i.createElement(u.Z,{span:4},w),i.createElement(u.Z,{span:3},w),i.createElement(u.Z,{span:16},w))),at=et!==void 0,vt=(0,m.Z)((0,m.Z)({},ct),(o={},(0,E.Z)(o,at?"activeKey":"defaultActiveKey",at?et:lt),(0,E.Z)(o,"tabBarExtraContent",ut),o)),rt,it=$&&$.length?i.createElement(I.Z,(0,m.Z)({size:"large"},vt,{className:"".concat(N,"-head-tabs"),onChange:j}),$.map(function(q){return i.createElement(I.Z.TabPane,{tab:q.tab,disabled:q.disabled,key:q.key})})):null;(S||b||it)&&(rt=i.createElement("div",{className:"".concat(N,"-head"),style:T},i.createElement("div",{className:"".concat(N,"-head-wrapper")},S&&i.createElement("div",{className:"".concat(N,"-head-title")},S),b&&i.createElement("div",{className:"".concat(N,"-extra")},b)),it));var ht=H?i.createElement("div",{className:"".concat(N,"-cover")},H):null,pt=i.createElement("div",{className:"".concat(N,"-body"),style:K},F?gt:ot),Et=X&&X.length?i.createElement("ul",{className:"".concat(N,"-actions")},W(X)):null,_t=(0,C.Z)(ft,["onTabChange"]),st=J||V,xt=g()(N,(s={},(0,E.Z)(s,"".concat(N,"-loading"),F),(0,E.Z)(s,"".concat(N,"-bordered"),k),(0,E.Z)(s,"".concat(N,"-hoverable"),dt),(0,E.Z)(s,"".concat(N,"-contain-grid"),U()),(0,E.Z)(s,"".concat(N,"-contain-tabs"),$&&$.length),(0,E.Z)(s,"".concat(N,"-").concat(st),st),(0,E.Z)(s,"".concat(N,"-type-").concat(z),!!z),(0,E.Z)(s,"".concat(N,"-rtl"),R==="rtl"),s),x);return i.createElement("div",(0,m.Z)({},_t,{className:xt}),rt,ht,pt,Et)};l.Grid=f,l.Meta=v;var a=l},58024:function(Q,Z,r){"use strict";var E=r(65056),m=r.n(E),i=r(70347),d=r.n(i),g=r(18106),C=r(13062),t=r(89032)},8273:function(Q,Z,r){"use strict";r.r(Z),r.d(Z,{CountUp:function(){return m}});var E=function(){return(E=Object.assign||function(i){for(var d,g=1,C=arguments.length;g<C;g++)for(var t in d=arguments[g])Object.prototype.hasOwnProperty.call(d,t)&&(i[t]=d[t]);return i}).apply(this,arguments)},m=function(){function i(d,g,C){var t=this;this.target=d,this.endVal=g,this.options=C,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(p){t.startTime||(t.startTime=p);var _=p-t.startTime;t.remaining=t.duration-_,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(_,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(_,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(_/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(_/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),_<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(p){var _,f,A,O,v=p<0?"-":"";_=Math.abs(p).toFixed(t.options.decimalPlaces);var I=(_+="").split(".");if(f=I[0],A=I.length>1?t.options.decimal+I[1]:"",t.options.useGrouping){O="";for(var y=0,u=f.length;y<u;++y)y!==0&&y%3==0&&(O=t.options.separator+O),O=f[u-y-1]+O;f=O}return t.options.numerals&&t.options.numerals.length&&(f=f.replace(/[0-9]/g,function(D){return t.options.numerals[+D]}),A=A.replace(/[0-9]/g,function(D){return t.options.numerals[+D]})),v+t.options.prefix+f+A+t.options.suffix},this.easeOutExpo=function(p,_,f,A){return f*(1-Math.pow(2,-10*p/A))*1024/1023+_},this.options=E(E({},this.defaults),C),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(g),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof d=="string"?document.getElementById(d):d,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return i.prototype.determineDirectionAndSmartEasing=function(){var d=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>d;var g=d-this.startVal;if(Math.abs(g)>this.options.smartEasingThreshold){this.finalEndVal=d;var C=this.countDown?1:-1;this.endVal=d+C*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=d,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(d){this.error||(this.callback=d,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(d){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(d),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(d){var g=this.formattingFn(d);this.el.tagName==="INPUT"?this.el.value=g:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=g:this.el.innerHTML=g},i.prototype.ensureNumber=function(d){return typeof d=="number"&&!isNaN(d)},i.prototype.validateValue=function(d){var g=Number(d);return this.ensureNumber(g)?g:(this.error="[CountUp] invalid start or end value: "+d,null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}()},17857:function(Q,Z,r){"use strict";var E;E={value:!0};var m=r(67294),i=r(8273);function d(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var g=d(m);function C(l,a){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(l,o).enumerable})),e.push.apply(e,n)}return e}function t(l){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?C(Object(e),!0).forEach(function(n){p(l,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):C(Object(e)).forEach(function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(e,n))})}return l}function p(l,a,e){return a in l?Object.defineProperty(l,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[a]=e,l}function _(){return _=Object.assign||function(l){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(l[n]=e[n])}return l},_.apply(this,arguments)}function f(l,a){if(l==null)return{};var e={},n=Object.keys(l),o,s;for(s=0;s<n.length;s++)o=n[s],!(a.indexOf(o)>=0)&&(e[o]=l[o]);return e}function A(l,a){if(l==null)return{};var e=f(l,a),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);for(o=0;o<s.length;o++)n=s[o],!(a.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,n)||(e[n]=l[n]))}return e}var O=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?m.useLayoutEffect:m.useEffect;function v(l){var a=m.useRef(l);return O(function(){a.current=l}),m.useCallback(function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return a.current.apply(void 0,n)},[])}var I=function(a,e){var n=e.decimal,o=e.decimals,s=e.duration,c=e.easingFn,B=e.end,R=e.formattingFn,V=e.numerals,j=e.prefix,U=e.separator,P=e.start,x=e.suffix,b=e.useEasing;return new i.CountUp(a,B,{startVal:P,duration:s,decimal:n,decimalPlaces:o,easingFn:c,formattingFn:R,numerals:V,separator:U,prefix:j,suffix:x,useEasing:b,useGrouping:!!U})},y=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],u={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},D=function(a){var e=m.useMemo(function(){return t(t({},u),a)},[a]),n=e.ref,o=e.startOnMount,s=e.enableReinitialize,c=e.delay,B=e.onEnd,R=e.onStart,V=e.onPauseResume,j=e.onReset,U=e.onUpdate,P=A(e,y),x=m.useRef(),b=m.useRef(),h=m.useRef(!1),T=v(function(){return I(typeof n=="string"?n:n.current,P)}),M=v(function(z){var H=x.current;if(H&&!z)return H;var X=T();return x.current=X,X}),K=v(function(){var z=function(){return M(!0).start(function(){B==null||B({pauseResume:S,reset:F,start:k,update:G})})};c&&c>0?b.current=setTimeout(z,c*1e3):z(),R==null||R({pauseResume:S,reset:F,update:G})}),S=v(function(){M().pauseResume(),V==null||V({reset:F,start:k,update:G})}),F=v(function(){b.current&&clearTimeout(b.current),M().reset(),j==null||j({pauseResume:S,start:k,update:G})}),G=v(function(z){M().update(z),U==null||U({pauseResume:S,reset:F,start:k})}),k=v(function(){F(),K()}),J=v(function(z){o&&(z&&F(),K())});return m.useEffect(function(){h.current?s&&J(!0):(h.current=!0,J())},[s,h,J,c,a.start,a.suffix,a.prefix,a.duration,a.separator,a.decimals,a.decimal,a.formattingFn]),m.useEffect(function(){return function(){F()}},[F]),{start:k,pauseResume:S,reset:F,update:G,getCountUp:M}},L=["className","redraw","containerProps","children","style"],W=function(a){var e=a.className,n=a.redraw,o=a.containerProps,s=a.children,c=a.style,B=A(a,L),R=g.default.useRef(null),V=g.default.useRef(!1),j=D(t(t({},B),{},{ref:R,startOnMount:typeof s!="function"||a.delay===0,enableReinitialize:!1})),U=j.start,P=j.reset,x=j.update,b=j.pauseResume,h=j.getCountUp,T=v(function(){U()}),M=v(function(F){a.preserveValue||P(),x(F)}),K=v(function(){if(typeof a.children=="function"&&!(R.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}h()});m.useEffect(function(){K()},[K]),m.useEffect(function(){V.current&&M(a.end)},[a.end,M]);var S=n&&a;return m.useEffect(function(){n&&V.current&&T()},[T,n,S]),m.useEffect(function(){!n&&V.current&&T()},[T,n,a.start,a.suffix,a.prefix,a.duration,a.separator,a.decimals,a.decimal,a.className,a.formattingFn]),m.useEffect(function(){V.current=!0},[]),typeof s=="function"?s({countUpRef:R,start:U,reset:P,update:x,pauseResume:b,getCountUp:h}):g.default.createElement("span",_({className:e,ref:R,style:c},o),a.start?h().formattingFn(a.start):"")};Z.ZP=W,E=D}}]);
