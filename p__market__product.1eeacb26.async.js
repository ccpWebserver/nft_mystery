(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[310],{81262:function(){},16993:function(X,T,e){"use strict";e.d(T,{b:function(){return G}});var _=e(57663),Z=e(71577),Q=e(20310),i=e(67294),F=e(47416),N=e(85893),g,c=(0,F.ZP)(Z.Z)(g||(g=(0,Q.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),G=function(E){var I=E.text,y=E.block,A=y===void 0?!0:y,B=E.onClick;return(0,N.jsx)(c,{type:"default",shape:"round",onClick:function(){return B&&B()},size:"large",block:A,children:I})}},62210:function(X,T,e){"use strict";e.r(T),e.d(T,{default:function(){return en}});var _=e(13062),Z=e(71230),Q=e(89032),i=e(15746),F=e(36017),N=e(35247),g=e(20310),c=e(47416),G=e(16924),m=e(67294),E=e(16993),I=e(39916),y=e(34792),A=e(55026),B=e(3182),H=e(94043),C=e.n(H),q=e(53776),O=e(67329),M=e(93874),D=e(83832),v=e(53190),n=e(85893),u,dn=c.ZP.div(u||(u=(0,g.Z)([`
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

  .switch {
    display: flex;
    background: #e0ffed;
    border-radius: 100px;
    cursor: pointer;

    p {
      position: relative;
      flex: 1;
      height: 48px;
      margin-bottom: 0;
      color: #505f79;
      line-height: 48px;
      white-space: nowrap;
      text-align: center;
      border-radius: 100px;
      transition: color 0.2s ease;

      &.ac {
        color: #fff;
        font-weight: 600;
        background: linear-gradient(270deg, #89d143, #75db8d);
      }
    }
  }

  .price {
    margin-top: 24px;
    padding: 15px 10px 24px;
    text-align: center;
    background: rgba(224, 255, 237, 0.32);
    border-radius: 16px;

    h3 {
      margin-bottom: 0;
      color: #2f2e41;
      font-weight: 700;
      font-size: 36px;
    }

    h4 {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
      color: #909090;
      font-size: 14px;

      span {
        display: block;
        margin-left: 8px;
        color: #7cd770;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    a {
    }
  }
`]))),cn=function(h){var x,d,l=h.card,j=(0,q.t)("@@initialState"),p=j.initialState,rn=(0,m.useContext)(I.tC),P=rn.onDismiss,tn=(0,O.f)(M.w.nftCancelSell),pn=tn.request,an=tn.status,sn=tn.data,on=(0,O.f)(M.w.nftBuy),gn=on.request,ln=on.status,z=(0,m.useCallback)((0,B.Z)(C().mark(function mn(){var w;return C().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,pn(l.id);case 2:if(w=b.sent,P(),!w.err){b.next=7;break}return A.default.error(w.err),b.abrupt("return");case 7:A.default.success(w.info);case 8:case"end":return b.stop()}},mn)})),[an,sn]),xn=(0,m.useCallback)((0,B.Z)(C().mark(function mn(){var w;return C().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,gn(l.id);case 2:if(w=b.sent,P(),!w.err){b.next=7;break}return A.default.error(w.err),b.abrupt("return");case 7:A.default.success(w.info);case 8:case"end":return b.stop()}},mn)})),[]),R=parseFloat(l.market_price);return(0,n.jsxs)(dn,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:(0,n.jsx)(v._H,{id:"component.nft_car.confirm_purchase"})})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)("h3",{children:R}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",R*1.5]})]})]}),an==O.o.wait||ln==O.o.wait?(0,n.jsx)(D.Z,{}):(0,n.jsx)("div",{className:"button",children:(p==null||(x=p.currentUser)===null||x===void 0?void 0:x.id)==l.u_id?(0,n.jsx)(E.b,{text:"\u64A4\u9500\u51FA\u552E",onClick:z}):(0,n.jsx)(E.b,{text:"\u8D2D\u4E70",onClick:xn})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("a",{href:"",children:"\u8D2D\u4E70CCP"}),(0,n.jsxs)("p",{children:["\u4F59\u989D\uFF1A ",p==null||(d=p.currentUser)===null||d===void 0?void 0:d.ccp_dog_coin," CCP"]})]})]})},a=(0,m.createContext)({props:{addtime:"",block_address:"",daughters_json:"",dog_attr:[],dog_breed:0,dog_name:"",dog_sex:0,dog_skill:[],father_id:0,id:0,img_url:"",is_selling:0,market_price:"",mother_id:0,reproduce_count:0,sons_json:"",u_id:0,updatetime:""}}),t=e(47673),o=e(1011),r=e(2824),s=e(46677),f=e.n(s),Y,W=c.ZP.div(Y||(Y=(0,g.Z)([`
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

  .price {
    margin-top: 24px;
    padding: 15px 10px 24px;
    text-align: center;
    background: rgba(224, 255, 237, 0.32);
    border-radius: 16px;

    h3 {
      margin-bottom: 0;
      color: #2f2e41;
      font-weight: 700;
      font-size: 36px;
    }

    h4 {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
      color: #909090;
      font-size: 14px;

      span {
        display: block;
        margin-left: 8px;
        color: #7cd770;
      }
    }
  }

  .logo {
    display: block;
    width: 20px;
  }
`]))),L=function(h){var x=h.card,d=parseFloat(x.market_price),l=(0,m.useContext)(I.tC),j=l.onDismiss,p=(0,O.f)(M.w.nftSell),rn=p.request,P=p.status,tn=p.data,pn=(0,m.useState)(),an=(0,r.Z)(pn,2),sn=an[0],on=an[1],gn=(0,m.useCallback)((0,B.Z)(C().mark(function ln(){var z;return C().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,rn(x.id,sn);case 2:if(z=R.sent,console.log(z),j(),!z.err){R.next=8;break}return A.default.error(z.err),R.abrupt("return");case 8:A.default.success(z.info);case 9:case"end":return R.stop()}},ln)})),[tn,P,sn]);return(0,n.jsxs)(W,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"\u786E\u8BA4\u51FA\u552E"})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)(o.Z,{prefix:(0,n.jsx)("img",{className:"logo",src:f(),alt:""}),suffix:"CCP",onInput:function(z){on(z.target.value)},style:{width:"60%",borderRadius:"10px",height:"45px",margin:"20px"}}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",d*1.5]})]})]}),(0,n.jsx)("div",{className:"button",children:P==O.o.wait?(0,n.jsx)(D.Z,{}):(0,n.jsx)(E.b,{text:"\u51FA\u552E",onClick:gn})})]})},V,J=c.ZP.div(V||(V=(0,g.Z)([`
  padding: 20px;
  box-sizing: border-box;
  background: #f5fff9;
  border-radius: 32px;

  .title {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    color: #2f2e41;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.2;

    .images {
      display: flex;
    }

    a {
      display: block;
      box-sizing: border-box;
      width: 32px;
      height: 32px;
      margin-left: 12px;
      padding: 5px;
      background: linear-gradient(270deg, #89d143, #75db8d);
      border-radius: 100%;
    }

    img {
      display: block;
      width: 100%;
    }
  }

  .center {
    display: flex;
    margin: 20px 0;

    div {
      flex: 1;

      h3 {
        display: flex;
        color: #505f79;
        font-size: 16px;

        span {
          color: #7cd770;
        }
      }

      h4 {
        font-weight: 600;
        font-size: 30px;
      }
    }

    div:first-child {
      h4 {
        //color: #7cd770;
      }
    }
  }

  .button {
    > button {
      height: 50px;
    }
  }
`]))),U=function(){var h=(0,m.useContext)(I.tC),x=h.onPresent,d=(0,m.useContext)(a),l=d.props,j=(0,v.YB)();return l?(0,n.jsxs)(J,{children:[(0,n.jsxs)("h3",{className:"title",children:[l.dog_name,(0,n.jsx)("div",{className:"images"})]}),(0,n.jsx)("div",{className:"center",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)(v._H,{id:"component.nft_car.sell_price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",parseFloat(l.market_price)*1.5]})]}),(0,n.jsx)("h4",{children:parseFloat(l.market_price).toFixed(2)})]})}),l.is_selling==1?(0,n.jsx)("div",{className:"button",onClick:function(){return x((0,n.jsx)(cn,{card:l}),390)},children:(0,n.jsx)(E.b,{text:j.formatMessage({id:"component.nft_car.confirm_purchase"})})}):(0,n.jsx)("div",{className:"button",onClick:function(){return x((0,n.jsx)(L,{card:l}),390)},children:(0,n.jsx)(E.b,{text:j.formatMessage({id:"component.nft_car.confirm_sale"})})})]}):(0,n.jsx)(D.Z,{})},S,k=c.ZP.div(S||(S=(0,g.Z)([`
  padding: 20px;
  box-sizing: border-box;
  background: #f5fff9;
  border-radius: 32px;

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    span {
      color: #505f79;
      font-size: 14px;
    }
  }
`]))),nn=function(){var h=(0,m.useContext)(a),x=h.props;return x?(0,n.jsxs)(k,{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(v._H,{id:"pages.market.owner"})}),(0,n.jsx)("span",{children:x.u_id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(v._H,{id:"pages.market.contract_address"})}),(0,n.jsx)("span",{children:x.block_address})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"Token ID"}),(0,n.jsx)("span",{children:x.id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(v._H,{id:"pages.market.asset_agreement"})}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(v._H,{id:"pages.market.asset_public_chain"})}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]})]}):(0,n.jsx)(D.Z,{})},$,un=c.ZP.div($||($=(0,g.Z)([`
  padding: 20px;
  box-sizing: border-box;

  .top {
    width: 100%;
    margin-top: 20px;
    padding: 32px;
    background: rgb(224, 255, 237);
    border-radius: 32px;

    .left {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 20px;
      background-color: rgb(245, 255, 249);
      border-radius: 24px;
      box-shadow: rgba(117, 219, 141, 0.24) 0px 8px 30px 0px;
      -webkit-box-flex: 1;
      -webkit-box-align: center;
      -webkit-box-pack: center;

      .tis {
        position: absolute;
        top: 26px;
        right: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        color: #fff;
        font-weight: 600;
        font-size: 13px;
        background: linear-gradient(270deg, #89d143, #75db8d);
        border-radius: 100%;
      }

      img {
        display: block;
        width: 100%;
      }
    }

    .right {
      margin-top: 20px;
    }
  }

  .bottom {
    margin-top: 40px;
    padding: 28px 32px;
    background: #fff;
    border-radius: 32px;
    box-shadow: 0 4px 15px 0 rgb(117 219 141 / 24%);

    .title {
      margin-bottom: 16px;
      padding-bottom: 14px;
      color: #333;
      font: 16px/1.4 Noto Sans, sans-serif;
      font-weight: bold;
      font-size: 20px;
      border-bottom: 1px solid #f5f8fb;
    }

    p {
      margin: 15px 0;
      color: #505f79;
      font: 16px/1.4 Noto Sans, sans-ser;
      font-size: 14px;
      line-height: 1.2;
    }
  }
`]))),en=function(K){var h=K.location.query,x=h.name,d=h.id,l=h.path;l||(l="Market");var j=(0,O.f)(M.w.nftDetail),p=j.request,rn=j.status,P=j.data;return(0,m.useEffect)(function(){p(d)},[d]),(0,n.jsxs)(un,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.Provider,{value:{props:P==null?void 0:P.data},children:[(0,n.jsxs)(N.Z,{children:[(0,n.jsx)(N.Z.Item,{children:(0,n.jsx)(G.Link,{style:{textTransform:"capitalize"},to:"/"+l,children:l})}),(0,n.jsx)(N.Z.Item,{children:(0,n.jsx)("a",{href:"",children:x})})]}),(0,n.jsx)("div",{className:"top",children:rn===O.o.wait?(0,n.jsx)(D.Z,{}):(0,n.jsxs)(Z.Z,{gutter:24,children:[(0,n.jsx)(i.Z,{md:12,sm:24,lg:12,xs:24,children:(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)("img",{src:P==null?void 0:P.data.img_url,alt:""}),(0,n.jsx)("span",{className:"tis",children:"100x"})]})}),(0,n.jsx)(i.Z,{md:12,sm:24,lg:12,xs:24,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsx)(U,{}),(0,n.jsx)("div",{style:{height:"20px"}}),(0,n.jsx)(nn,{})]})})]})})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(v._H,{id:"pages.market.market_rules"})}),(0,n.jsx)("p",{children:(0,n.jsx)(v._H,{id:"pages.market.market_rules_tis1"})}),(0,n.jsx)("p",{children:(0,n.jsx)(v._H,{id:"pages.market.market_rules_tis2"})}),(0,n.jsx)("p",{})]})]})}},67329:function(X,T,e){"use strict";e.d(T,{f:function(){return N},o:function(){return g}});var _=e(3182),Z=e(2824),Q=e(94043),i=e.n(Q),F=e(67294),N=function(G){var m=(0,F.useState)(g.start),E=(0,Z.Z)(m,2),I=E[0],y=E[1],A=(0,F.useState)(),B=(0,Z.Z)(A,2),H=B[0],C=B[1],q=(0,F.useCallback)((0,_.Z)(i().mark(function O(){var M,D,v=arguments;return i().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,y(g.wait),u.next=4,G.apply(void 0,v);case 4:return M=u.sent,C(M),y(g.success),u.abrupt("return",M);case 10:return u.prev=10,u.t0=u.catch(0),D={err:u.t0.info},C(D),y(g.failure),u.abrupt("return",D);case 16:case"end":return u.stop()}},O,null,[[0,10]])})),[y,C]);return{status:I,request:q,data:H}},g;(function(c){c[c.start=0]="start",c[c.wait=1]="wait",c[c.success=2]="success",c[c.failure=3]="failure"})(g||(g={}))},46677:function(X){X.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},35247:function(X,T,e){"use strict";e.d(T,{Z:function(){return cn}});var _=e(22122),Z=e(96156),Q=e(85061),i=e(67294),F=e(94184),N=e.n(F),g=e(50344),c=e(57254),G=e(81555),m=e(86032),E=function(a,t){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&t.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(a);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(a,r[s])&&(o[r[s]]=a[r[s]]);return o},I=function(t){var o=t.prefixCls,r=t.separator,s=r===void 0?"/":r,f=t.children,Y=t.overlay,W=t.dropdownProps,L=E(t,["prefixCls","separator","children","overlay","dropdownProps"]),V=i.useContext(m.E_),J=V.getPrefixCls,U=J("breadcrumb",o),S=function($){return Y?i.createElement(G.Z,(0,_.Z)({overlay:Y,placement:"bottomCenter"},W),i.createElement("span",{className:"".concat(U,"-overlay-link")},$,i.createElement(c.Z,null))):$},k;return"href"in L?k=i.createElement("a",(0,_.Z)({className:"".concat(U,"-link")},L),f):k=i.createElement("span",(0,_.Z)({className:"".concat(U,"-link")},L),f),k=S(k),f?i.createElement("span",null,k,s&&i.createElement("span",{className:"".concat(U,"-separator")},s)):null};I.__ANT_BREADCRUMB_ITEM=!0;var y=I,A=function(t){var o=t.children,r=i.useContext(m.E_),s=r.getPrefixCls,f=s("breadcrumb");return i.createElement("span",{className:"".concat(f,"-separator")},o||"/")};A.__ANT_BREADCRUMB_SEPARATOR=!0;var B=A,H=e(99210),C=e(21687),q=e(96159),O=function(a,t){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&t.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(a);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(a,r[s])&&(o[r[s]]=a[r[s]]);return o};function M(a,t){if(!a.breadcrumbName)return null;var o=Object.keys(t).join("|"),r=a.breadcrumbName.replace(new RegExp(":(".concat(o,")"),"g"),function(s,f){return t[f]||s});return r}function D(a,t,o,r){var s=o.indexOf(a)===o.length-1,f=M(a,t);return s?i.createElement("span",null,f):i.createElement("a",{href:"#/".concat(r.join("/"))},f)}var v=function(t,o){return t=(t||"").replace(/^\//,""),Object.keys(o).forEach(function(r){t=t.replace(":".concat(r),o[r])}),t},n=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,s=(0,Q.Z)(t),f=v(o,r);return f&&s.push(f),s},u=function(t){var o=t.prefixCls,r=t.separator,s=r===void 0?"/":r,f=t.style,Y=t.className,W=t.routes,L=t.children,V=t.itemRender,J=V===void 0?D:V,U=t.params,S=U===void 0?{}:U,k=O(t,["prefixCls","separator","style","className","routes","children","itemRender","params"]),nn=i.useContext(m.E_),$=nn.getPrefixCls,un=nn.direction,en,K=$("breadcrumb",o);if(W&&W.length>0){var h=[];en=W.map(function(d){var l=v(d.path,S);l&&h.push(l);var j;return d.children&&d.children.length&&(j=i.createElement(H.Z,null,d.children.map(function(p){return i.createElement(H.Z.Item,{key:p.path||p.breadcrumbName},J(p,S,W,n(h,p.path,S)))}))),i.createElement(y,{overlay:j,separator:s,key:l||d.breadcrumbName},J(d,S,W,h))})}else L&&(en=(0,g.Z)(L).map(function(d,l){return d&&((0,C.Z)(d.type&&(d.type.__ANT_BREADCRUMB_ITEM===!0||d.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,q.Tm)(d,{separator:s,key:l}))}));var x=N()(K,(0,Z.Z)({},"".concat(K,"-rtl"),un==="rtl"),Y);return i.createElement("div",(0,_.Z)({className:x,style:f},k),en)};u.Item=y,u.Separator=B;var dn=u,cn=dn},36017:function(X,T,e){"use strict";var _=e(65056),Z=e.n(_),Q=e(81262),i=e.n(Q),F=e(30887),N=e(59250)}}]);
