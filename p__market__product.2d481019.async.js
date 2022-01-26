(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[310],{81262:function(){},16993:function(V,Z,e){"use strict";e.d(Z,{b:function(){return G}});var _=e(57663),W=e(71577),z=e(20310),o=e(67294),U=e(47416),B=e(85893),p,u=(0,U.ZP)(W.Z)(p||(p=(0,z.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),G=function(h){var D=h.text,y=h.block,b=y===void 0?!0:y,O=h.onClick;return(0,B.jsx)(u,{type:"default",shape:"round",onClick:function(){return O&&O()},size:"large",block:b,children:D})}},62210:function(V,Z,e){"use strict";e.r(Z),e.d(Z,{default:function(){return dn}});var _=e(13062),W=e(71230),z=e(89032),o=e(15746),U=e(36017),B=e(35247),p=e(20310),u=e(47416),G=e(16924),m=e(67294),h=e(16993),D=e(39916),y=e(34792),b=e(55026),O=e(3182),H=e(94043),A=e.n(H),q=e(53776),j=e(67329),N=e(93874),P=e(83832),c=e(53190),nn=e(21010),n=e(85893),on,mn=u.ZP.div(on||(on=(0,p.Z)([`
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
`]))),i=function(E){var s,f,d=E.card,x=(0,q.t)("@@initialState"),C=x.initialState,K=(0,nn.YB)(),R=(0,m.useContext)(D.tC),tn=R.onDismiss,an=(0,j.f)(N.w.nftCancelSell),gn=an.request,sn=an.status,cn=an.data,un=(0,j.f)(N.w.nftBuy),fn=un.request,pn=un.status,k=(0,m.useCallback)((0,O.Z)(A().mark(function xn(){var w;return A().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,gn(d.id);case 2:if(w=v.sent,tn(),!w.err){v.next=7;break}return b.default.error(w.err),v.abrupt("return");case 7:b.default.success(w.info);case 8:case"end":return v.stop()}},xn)})),[sn,cn]),vn=(0,m.useCallback)((0,O.Z)(A().mark(function xn(){var w;return A().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,fn(d.id);case 2:if(w=v.sent,tn(),!w.err){v.next=7;break}return b.default.error(w.err),v.abrupt("return");case 7:b.default.success(w.info);case 8:case"end":return v.stop()}},xn)})),[]),T=parseFloat(d.market_price);return(0,n.jsxs)(mn,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:(0,n.jsx)(c._H,{id:"component.nft_car.confirm_purchase"})})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)("h3",{children:T}),(0,n.jsxs)("h4",{children:[(0,n.jsx)(c._H,{id:"component.nft_car.price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",T*1.5]})]})]}),sn==j.o.wait||pn==j.o.wait?(0,n.jsx)(P.Z,{}):(0,n.jsx)("div",{className:"button",children:(C==null||(s=C.currentUser)===null||s===void 0?void 0:s.id)==d.u_id?(0,n.jsx)(h.b,{text:K.formatMessage({id:"component.nft_car.withdraw_the_sale"}),onClick:k}):(0,n.jsx)(h.b,{text:K.formatMessage({id:"component.nft_car.buy",defaultMessage:"\u8D2D\u4E70"}),onClick:vn})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsxs)("a",{href:"",children:[(0,n.jsx)(c._H,{id:"component.nft_car.buy"}),"CCP"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(c._H,{id:"pages.myaccount.balance"}),"\uFF1A ",C==null||(f=C.currentUser)===null||f===void 0?void 0:f.ccp_dog_coin," CCP"]})]})]})},r=(0,m.createContext)({props:{addtime:"",block_address:"",daughters_json:"",dog_attr:[],dog_breed:0,dog_name:"",dog_sex:0,dog_skill:[],father_id:0,id:0,img_url:"",is_selling:0,market_price:"",mother_id:0,reproduce_count:0,sons_json:"",u_id:0,updatetime:""}}),l=e(47673),t=e(1011),a=e(2824),g=e(46677),$=e.n(g),I,Q=u.ZP.div(I||(I=(0,p.Z)([`
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
`]))),X=function(E){var s=E.card,f=parseFloat(s.market_price),d=(0,m.useContext)(D.tC),x=d.onDismiss,C=(0,nn.YB)(),K=(0,j.f)(N.w.nftSell),R=K.request,tn=K.status,an=K.data,gn=(0,m.useState)(),sn=(0,a.Z)(gn,2),cn=sn[0],un=sn[1],fn=(0,m.useCallback)((0,O.Z)(A().mark(function pn(){var k;return A().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,R(s.id,cn);case 2:if(k=T.sent,console.log(k),x(),!k.err){T.next=8;break}return b.default.error(k.err),T.abrupt("return");case 8:b.default.success(k.info);case 9:case"end":return T.stop()}},pn)})),[an,tn,cn]);return(0,n.jsxs)(Q,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:(0,n.jsx)(c._H,{id:"component.nft_car.confirm_sale"})})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)(t.Z,{prefix:(0,n.jsx)("img",{className:"logo",src:$(),alt:""}),suffix:"CCP",onInput:function(k){un(k.target.value)},style:{width:"60%",borderRadius:"10px",height:"45px",margin:"20px"}}),(0,n.jsxs)("h4",{children:[(0,n.jsx)(c._H,{id:"component.nft_car.price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",f*1.5]})]})]}),(0,n.jsx)("div",{className:"button",children:tn==j.o.wait?(0,n.jsx)(P.Z,{}):(0,n.jsx)(h.b,{text:C.formatMessage({id:"component.nft_car.sell"}),onClick:fn})})]})},Y,F=u.ZP.div(Y||(Y=(0,p.Z)([`
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
`]))),L=function(){var E=(0,m.useContext)(D.tC),s=E.onPresent,f=(0,m.useContext)(r),d=f.props,x=(0,c.YB)();return d?(0,n.jsxs)(F,{children:[(0,n.jsxs)("h3",{className:"title",children:[d.dog_name,(0,n.jsx)("div",{className:"images"})]}),(0,n.jsx)("div",{className:"center",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)(c._H,{id:"component.nft_car.sell_price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",parseFloat(d.market_price)*1.5]})]}),(0,n.jsx)("h4",{children:parseFloat(d.market_price).toFixed(2)})]})}),d.is_selling==1?(0,n.jsx)("div",{className:"button",onClick:function(){return s((0,n.jsx)(i,{card:d}),390)},children:(0,n.jsx)(h.b,{text:x.formatMessage({id:"component.nft_car.confirm_purchase"})})}):(0,n.jsx)("div",{className:"button",onClick:function(){return s((0,n.jsx)(X,{card:d}),390)},children:(0,n.jsx)(h.b,{text:x.formatMessage({id:"component.nft_car.confirm_sale"})})})]}):(0,n.jsx)(P.Z,{})},M,en=u.ZP.div(M||(M=(0,p.Z)([`
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
`]))),J=function(){var E=(0,m.useContext)(r),s=E.props;return s?(0,n.jsxs)(en,{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(c._H,{id:"pages.market.owner"})}),(0,n.jsx)("span",{children:s.u_id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(c._H,{id:"pages.market.contract_address"})}),(0,n.jsx)("span",{children:s.block_address})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"Token ID"}),(0,n.jsx)("span",{children:s.id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(c._H,{id:"pages.market.asset_agreement"})}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(c._H,{id:"pages.market.asset_public_chain"})}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]})]}):(0,n.jsx)(P.Z,{})},ln,rn=u.ZP.div(ln||(ln=(0,p.Z)([`
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
`]))),dn=function(S){var E=S.location.query,s=E.name,f=E.id,d=E.path;d||(d="Market");var x=(0,j.f)(N.w.nftDetail),C=x.request,K=x.status,R=x.data;return(0,m.useEffect)(function(){C(f)},[f]),(0,n.jsxs)(rn,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(r.Provider,{value:{props:R==null?void 0:R.data},children:[(0,n.jsxs)(B.Z,{children:[(0,n.jsx)(B.Z.Item,{children:(0,n.jsx)(G.Link,{style:{textTransform:"capitalize"},to:"/"+d,children:d})}),(0,n.jsx)(B.Z.Item,{children:(0,n.jsx)("a",{href:"",children:s})})]}),(0,n.jsx)("div",{className:"top",children:K===j.o.wait?(0,n.jsx)(P.Z,{}):(0,n.jsxs)(W.Z,{gutter:24,children:[(0,n.jsx)(o.Z,{md:12,sm:24,lg:12,xs:24,children:(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)("img",{src:R==null?void 0:R.data.img_url,alt:""}),(0,n.jsx)("span",{className:"tis",children:"100x"})]})}),(0,n.jsx)(o.Z,{md:12,sm:24,lg:12,xs:24,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsx)(L,{}),(0,n.jsx)("div",{style:{height:"20px"}}),(0,n.jsx)(J,{})]})})]})})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(c._H,{id:"pages.market.market_rules"})}),(0,n.jsx)("p",{children:(0,n.jsx)(c._H,{id:"pages.market.market_rules_tis1"})}),(0,n.jsx)("p",{children:(0,n.jsx)(c._H,{id:"pages.market.market_rules_tis2"})}),(0,n.jsx)("p",{})]})]})}},67329:function(V,Z,e){"use strict";e.d(Z,{f:function(){return B},o:function(){return p}});var _=e(3182),W=e(2824),z=e(94043),o=e.n(z),U=e(67294),B=function(G){var m=(0,U.useState)(p.start),h=(0,W.Z)(m,2),D=h[0],y=h[1],b=(0,U.useState)(),O=(0,W.Z)(b,2),H=O[0],A=O[1],q=(0,U.useCallback)((0,_.Z)(o().mark(function j(){var N,P,c=arguments;return o().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(p.wait),n.next=4,G.apply(void 0,c);case 4:return N=n.sent,A(N),y(p.success),n.abrupt("return",N);case 10:return n.prev=10,n.t0=n.catch(0),P={err:n.t0.info},A(P),y(p.failure),n.abrupt("return",P);case 16:case"end":return n.stop()}},j,null,[[0,10]])})),[y,A]);return{status:D,request:q,data:H}},p;(function(u){u[u.start=0]="start",u[u.wait=1]="wait",u[u.success=2]="success",u[u.failure=3]="failure"})(p||(p={}))},46677:function(V){V.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},35247:function(V,Z,e){"use strict";e.d(Z,{Z:function(){return mn}});var _=e(22122),W=e(96156),z=e(85061),o=e(67294),U=e(94184),B=e.n(U),p=e(50344),u=e(57254),G=e(81555),m=e(86032),h=function(i,r){var l={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&r.indexOf(t)<0&&(l[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(l[t[a]]=i[t[a]]);return l},D=function(r){var l=r.prefixCls,t=r.separator,a=t===void 0?"/":t,g=r.children,$=r.overlay,I=r.dropdownProps,Q=h(r,["prefixCls","separator","children","overlay","dropdownProps"]),X=o.useContext(m.E_),Y=X.getPrefixCls,F=Y("breadcrumb",l),L=function(J){return $?o.createElement(G.Z,(0,_.Z)({overlay:$,placement:"bottomCenter"},I),o.createElement("span",{className:"".concat(F,"-overlay-link")},J,o.createElement(u.Z,null))):J},M;return"href"in Q?M=o.createElement("a",(0,_.Z)({className:"".concat(F,"-link")},Q),g):M=o.createElement("span",(0,_.Z)({className:"".concat(F,"-link")},Q),g),M=L(M),g?o.createElement("span",null,M,a&&o.createElement("span",{className:"".concat(F,"-separator")},a)):null};D.__ANT_BREADCRUMB_ITEM=!0;var y=D,b=function(r){var l=r.children,t=o.useContext(m.E_),a=t.getPrefixCls,g=a("breadcrumb");return o.createElement("span",{className:"".concat(g,"-separator")},l||"/")};b.__ANT_BREADCRUMB_SEPARATOR=!0;var O=b,H=e(99210),A=e(21687),q=e(96159),j=function(i,r){var l={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&r.indexOf(t)<0&&(l[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(l[t[a]]=i[t[a]]);return l};function N(i,r){if(!i.breadcrumbName)return null;var l=Object.keys(r).join("|"),t=i.breadcrumbName.replace(new RegExp(":(".concat(l,")"),"g"),function(a,g){return r[g]||a});return t}function P(i,r,l,t){var a=l.indexOf(i)===l.length-1,g=N(i,r);return a?o.createElement("span",null,g):o.createElement("a",{href:"#/".concat(t.join("/"))},g)}var c=function(r,l){return r=(r||"").replace(/^\//,""),Object.keys(l).forEach(function(t){r=r.replace(":".concat(t),l[t])}),r},nn=function(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=(0,z.Z)(r),g=c(l,t);return g&&a.push(g),a},n=function(r){var l=r.prefixCls,t=r.separator,a=t===void 0?"/":t,g=r.style,$=r.className,I=r.routes,Q=r.children,X=r.itemRender,Y=X===void 0?P:X,F=r.params,L=F===void 0?{}:F,M=j(r,["prefixCls","separator","style","className","routes","children","itemRender","params"]),en=o.useContext(m.E_),J=en.getPrefixCls,ln=en.direction,rn,dn=J("breadcrumb",l);if(I&&I.length>0){var S=[];rn=I.map(function(s){var f=c(s.path,L);f&&S.push(f);var d;return s.children&&s.children.length&&(d=o.createElement(H.Z,null,s.children.map(function(x){return o.createElement(H.Z.Item,{key:x.path||x.breadcrumbName},Y(x,L,I,nn(S,x.path,L)))}))),o.createElement(y,{overlay:d,separator:a,key:f||s.breadcrumbName},Y(s,L,I,S))})}else Q&&(rn=(0,p.Z)(Q).map(function(s,f){return s&&((0,A.Z)(s.type&&(s.type.__ANT_BREADCRUMB_ITEM===!0||s.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,q.Tm)(s,{separator:a,key:f}))}));var E=B()(dn,(0,W.Z)({},"".concat(dn,"-rtl"),ln==="rtl"),$);return o.createElement("div",(0,_.Z)({className:E,style:g},M),rn)};n.Item=y,n.Separator=O;var on=n,mn=on},36017:function(V,Z,e){"use strict";var _=e(65056),W=e.n(_),z=e(81262),o=e.n(z),U=e(30887),B=e(59250)}}]);
