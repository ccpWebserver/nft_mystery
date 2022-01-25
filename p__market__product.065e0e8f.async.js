(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[310],{81262:function(){},16993:function(Y,R,e){"use strict";e.d(R,{b:function(){return L}});var D=e(57663),T=e(71577),z=e(20310),l=e(67294),F=e(47416),N=e(85893),p,u=(0,F.ZP)(T.Z)(p||(p=(0,z.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),L=function(b){var I=b.text,y=b.block,A=y===void 0?!0:y,B=b.onClick;return(0,N.jsx)(u,{type:"default",shape:"round",onClick:function(){return B&&B()},size:"large",block:A,children:I})}},62210:function(Y,R,e){"use strict";e.r(R),e.d(R,{default:function(){return tn}});var D=e(13062),T=e(71230),z=e(89032),l=e(15746),F=e(36017),N=e(35247),p=e(20310),u=e(47416),L=e(16924),g=e(67294),b=e(16993),I=e(39916),y=e(34792),A=e(55026),B=e(3182),K=e(94043),C=e.n(K),nn=e(53776),O=e(67329),Z=e(93874),W=e(83832),n=e(85893),G,H=u.ZP.div(G||(G=(0,p.Z)([`
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
`]))),v=function(E){var c,P,a=E.card,f=(0,nn.t)("@@initialState"),h=f.initialState,M=(0,g.useContext)(I.tC),w=M.onDismiss,rn=(0,O.f)(Z.w.nftCancelSell),an=rn.request,ln=rn.status,j=(0,O.f)(Z.w.nftBuy),dn=j.request,cn=j.status,un=(0,g.useCallback)((0,B.Z)(C().mark(function sn(){return C().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,an(a.id);case 3:w(),A.default.success("\u64CD\u4F5C\u6210\u529F"),d.next=10;break;case 7:d.prev=7,d.t0=d.catch(0),A.default.error(d.t0);case 10:case"end":return d.stop()}},sn,null,[[0,7]])})),[]),pn=(0,g.useCallback)((0,B.Z)(C().mark(function sn(){return C().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,dn(a.id);case 3:w(),A.default.success("\u64CD\u4F5C\u6210\u529F"),d.next=10;break;case 7:d.prev=7,d.t0=d.catch(0),A.default.error(d.t0);case 10:case"end":return d.stop()}},sn,null,[[0,7]])})),[]),on=parseFloat(a.market_price);return(0,n.jsxs)(H,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"\u786E\u8BA4\u8D2D\u4E70"})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)("h3",{children:on}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",on*1.5]})]})]}),ln==O.o.wait||cn==O.o.wait?(0,n.jsx)(W.Z,{}):(0,n.jsx)("div",{className:"button",children:(h==null||(c=h.currentUser)===null||c===void 0?void 0:c.id)==a.u_id?(0,n.jsx)(b.b,{text:"\u64A4\u9500\u51FA\u552E",onClick:un}):(0,n.jsx)(b.b,{text:"\u8D2D\u4E70",onClick:pn})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("a",{href:"",children:"\u8D2D\u4E70CCP"}),(0,n.jsxs)("p",{children:["\u4F59\u989D\uFF1A ",h==null||(P=h.currentUser)===null||P===void 0?void 0:P.ccp_coin," CCP"]})]})]})},en=(0,g.createContext)({props:{addtime:"",block_address:"",daughters_json:"",dog_attr:[],dog_breed:0,dog_name:"",dog_sex:0,dog_skill:[],father_id:0,id:0,img_url:"",is_selling:0,market_price:"",mother_id:0,reproduce_count:0,sons_json:"",u_id:0,updatetime:""}}),i=e(47673),t=e(1011),o=e(46677),r=e.n(o),s,m=u.ZP.div(s||(s=(0,p.Z)([`
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
`]))),V=function(E){var c=E.card,P=parseFloat(c.market_price),a=(0,g.useContext)(I.tC),f=a.onDismiss,h=(0,O.f)(Z.w.nftSell),M=h.request,w=h.status,rn=(0,g.useCallback)((0,B.Z)(C().mark(function an(){return C().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.prev=0,j.next=3,M(c.id);case 3:f(),A.default.success("\u51FA\u552E\u6210\u529F"),j.next=10;break;case 7:j.prev=7,j.t0=j.catch(0),A.default.error(j.t0);case 10:case"end":return j.stop()}},an,null,[[0,7]])})),[]);return(0,n.jsxs)(m,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"\u786E\u8BA4\u51FA\u552E"})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)(t.Z,{prefix:(0,n.jsx)("img",{className:"logo",src:r(),alt:""}),suffix:"CCP",style:{width:"60%",borderRadius:"10px",height:"45px",margin:"20px"}}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",P*1.5]})]})]}),(0,n.jsx)("div",{className:"button",children:w==O.o.wait?(0,n.jsx)(W.Z,{}):(0,n.jsx)(b.b,{text:"\u51FA\u552E",onClick:rn})})]})},x=e(53190),k,$=u.ZP.div(k||(k=(0,p.Z)([`
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
`]))),X=function(){var E=(0,g.useContext)(I.tC),c=E.onPresent,P=(0,g.useContext)(en),a=P.props,f=(0,x.YB)();return a?(0,n.jsxs)($,{children:[(0,n.jsxs)("h3",{className:"title",children:[a.dog_name,(0,n.jsx)("div",{className:"images"})]}),(0,n.jsx)("div",{className:"center",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)(x._H,{id:"component.nft_car.sell_price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",parseFloat(a.market_price)*1.5]})]}),(0,n.jsx)("h4",{children:parseFloat(a.market_price).toFixed(2)})]})}),a.is_selling==1?(0,n.jsx)("div",{className:"button",onClick:function(){return c((0,n.jsx)(v,{card:a}),390)},children:(0,n.jsx)(b.b,{text:f.formatMessage({id:"component.nft_car.confirm_purchase"})})}):(0,n.jsx)("div",{className:"button",onClick:function(){return c((0,n.jsx)(V,{card:a}),390)},children:(0,n.jsx)(b.b,{text:f.formatMessage({id:"component.nft_car.confirm_sale"})})})]}):(0,n.jsx)(W.Z,{})},_,Q=u.ZP.div(_||(_=(0,p.Z)([`
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
`]))),U=function(){var E=(0,g.useContext)(en),c=E.props;return c?(0,n.jsxs)(Q,{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(x._H,{id:"pages.market.owner"})}),(0,n.jsx)("span",{children:c.u_id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(x._H,{id:"pages.market.contract_address"})}),(0,n.jsx)("span",{children:c.block_address})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"Token ID"}),(0,n.jsx)("span",{children:c.id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(x._H,{id:"pages.market.asset_agreement"})}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(x._H,{id:"pages.market.asset_public_chain"})}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]})]}):(0,n.jsx)(W.Z,{})},J,q=u.ZP.div(J||(J=(0,p.Z)([`
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
`]))),tn=function(S){var E=S.location.query,c=E.name,P=E.id,a=E.path;a||(a="Market");var f=(0,O.f)(Z.w.nftDetail),h=f.request,M=f.status,w=f.data;return(0,g.useEffect)(function(){h(P)},[P]),(0,n.jsxs)(q,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(en.Provider,{value:{props:w},children:[(0,n.jsxs)(N.Z,{children:[(0,n.jsx)(N.Z.Item,{children:(0,n.jsx)(L.Link,{style:{textTransform:"capitalize"},to:"/"+a,children:a})}),(0,n.jsx)(N.Z.Item,{children:(0,n.jsx)("a",{href:"",children:c})})]}),(0,n.jsx)("div",{className:"top",children:M===O.o.wait?(0,n.jsx)(W.Z,{}):(0,n.jsxs)(T.Z,{gutter:24,children:[(0,n.jsx)(l.Z,{md:12,sm:12,lg:12,children:(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)("img",{src:w==null?void 0:w.img_url,alt:""}),(0,n.jsx)("span",{className:"tis",children:"100x"})]})}),(0,n.jsx)(l.Z,{md:12,sm:12,lg:12,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsx)(X,{}),(0,n.jsx)("div",{style:{height:"20px"}}),(0,n.jsx)(U,{})]})})]})})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(x._H,{id:"pages.market.market_rules"})}),(0,n.jsx)("p",{children:(0,n.jsx)(x._H,{id:"pages.market.market_rules_tis1"})}),(0,n.jsx)("p",{children:(0,n.jsx)(x._H,{id:"pages.market.market_rules_tis2"})}),(0,n.jsx)("p",{})]})]})}},67329:function(Y,R,e){"use strict";e.d(R,{f:function(){return N},o:function(){return p}});var D=e(3182),T=e(2824),z=e(94043),l=e.n(z),F=e(67294),N=function(L){var g=(0,F.useState)(p.start),b=(0,T.Z)(g,2),I=b[0],y=b[1],A=(0,F.useState)(),B=(0,T.Z)(A,2),K=B[0],C=B[1],nn=(0,F.useCallback)(function(){var O=(0,D.Z)(l().mark(function Z(W){var n,G;return l().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,y(p.wait),v.next=4,L(W);case 4:n=v.sent,C(n),y(p.success),v.next=14;break;case 9:v.prev=9,v.t0=v.catch(0),G={err:v.t0},C(G),y(p.failure);case 14:case"end":return v.stop()}},Z,null,[[0,9]])}));return function(Z){return O.apply(this,arguments)}}(),[y,C]);return{status:I,request:nn,data:K}},p;(function(u){u[u.start=0]="start",u[u.wait=1]="wait",u[u.success=2]="success",u[u.failure=3]="failure"})(p||(p={}))},46677:function(Y){Y.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},35247:function(Y,R,e){"use strict";e.d(R,{Z:function(){return en}});var D=e(22122),T=e(96156),z=e(85061),l=e(67294),F=e(94184),N=e.n(F),p=e(50344),u=e(57254),L=e(81555),g=e(86032),b=function(i,t){var o={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&t.indexOf(r)<0&&(o[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(i);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(i,r[s])&&(o[r[s]]=i[r[s]]);return o},I=function(t){var o=t.prefixCls,r=t.separator,s=r===void 0?"/":r,m=t.children,V=t.overlay,x=t.dropdownProps,k=b(t,["prefixCls","separator","children","overlay","dropdownProps"]),$=l.useContext(g.E_),X=$.getPrefixCls,_=X("breadcrumb",o),Q=function(q){return V?l.createElement(L.Z,(0,D.Z)({overlay:V,placement:"bottomCenter"},x),l.createElement("span",{className:"".concat(_,"-overlay-link")},q,l.createElement(u.Z,null))):q},U;return"href"in k?U=l.createElement("a",(0,D.Z)({className:"".concat(_,"-link")},k),m):U=l.createElement("span",(0,D.Z)({className:"".concat(_,"-link")},k),m),U=Q(U),m?l.createElement("span",null,U,s&&l.createElement("span",{className:"".concat(_,"-separator")},s)):null};I.__ANT_BREADCRUMB_ITEM=!0;var y=I,A=function(t){var o=t.children,r=l.useContext(g.E_),s=r.getPrefixCls,m=s("breadcrumb");return l.createElement("span",{className:"".concat(m,"-separator")},o||"/")};A.__ANT_BREADCRUMB_SEPARATOR=!0;var B=A,K=e(99210),C=e(21687),nn=e(96159),O=function(i,t){var o={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&t.indexOf(r)<0&&(o[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(i);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(i,r[s])&&(o[r[s]]=i[r[s]]);return o};function Z(i,t){if(!i.breadcrumbName)return null;var o=Object.keys(t).join("|"),r=i.breadcrumbName.replace(new RegExp(":(".concat(o,")"),"g"),function(s,m){return t[m]||s});return r}function W(i,t,o,r){var s=o.indexOf(i)===o.length-1,m=Z(i,t);return s?l.createElement("span",null,m):l.createElement("a",{href:"#/".concat(r.join("/"))},m)}var n=function(t,o){return t=(t||"").replace(/^\//,""),Object.keys(o).forEach(function(r){t=t.replace(":".concat(r),o[r])}),t},G=function(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,s=(0,z.Z)(t),m=n(o,r);return m&&s.push(m),s},H=function(t){var o=t.prefixCls,r=t.separator,s=r===void 0?"/":r,m=t.style,V=t.className,x=t.routes,k=t.children,$=t.itemRender,X=$===void 0?W:$,_=t.params,Q=_===void 0?{}:_,U=O(t,["prefixCls","separator","style","className","routes","children","itemRender","params"]),J=l.useContext(g.E_),q=J.getPrefixCls,tn=J.direction,S,E=q("breadcrumb",o);if(x&&x.length>0){var c=[];S=x.map(function(a){var f=n(a.path,Q);f&&c.push(f);var h;return a.children&&a.children.length&&(h=l.createElement(K.Z,null,a.children.map(function(M){return l.createElement(K.Z.Item,{key:M.path||M.breadcrumbName},X(M,Q,x,G(c,M.path,Q)))}))),l.createElement(y,{overlay:h,separator:s,key:f||a.breadcrumbName},X(a,Q,x,c))})}else k&&(S=(0,p.Z)(k).map(function(a,f){return a&&((0,C.Z)(a.type&&(a.type.__ANT_BREADCRUMB_ITEM===!0||a.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,nn.Tm)(a,{separator:s,key:f}))}));var P=N()(E,(0,T.Z)({},"".concat(E,"-rtl"),tn==="rtl"),V);return l.createElement("div",(0,D.Z)({className:P,style:m},U),S)};H.Item=y,H.Separator=B;var v=H,en=v},36017:function(Y,R,e){"use strict";var D=e(65056),T=e.n(D),z=e(81262),l=e.n(z),F=e(30887),N=e(59250)}}]);
