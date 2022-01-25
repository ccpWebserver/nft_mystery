(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[310],{57254:function(K,N,e){"use strict";e.d(N,{Z:function(){return c}});var A=e(28991),y=e(67294),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},i=_,I=e(27029),j=function(W,g){return y.createElement(I.Z,(0,A.Z)((0,A.Z)({},W),{},{ref:g,icon:i}))};j.displayName="DownOutlined";var c=y.forwardRef(j)},81262:function(){},16993:function(K,N,e){"use strict";e.d(N,{b:function(){return W}});var A=e(57663),y=e(71577),_=e(20310),i=e(67294),I=e(47416),j=e(85893),c,u=(0,I.ZP)(y.Z)(c||(c=(0,_.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),W=function(b){var T=b.text,M=b.block,C=M===void 0?!0:M,R=b.onClick;return(0,j.jsx)(u,{type:"default",shape:"round",onClick:function(){return R&&R()},size:"large",block:C,children:T})}},62210:function(K,N,e){"use strict";e.r(N),e.d(N,{default:function(){return tn}});var A=e(13062),y=e(71230),_=e(89032),i=e(15746),I=e(36017),j=e(35247),c=e(20310),u=e(47416),W=e(16924),g=e(67294),b=e(16993),T=e(39916),M=e(34792),C=e(55026),R=e(3182),G=e(94043),P=e.n(G),nn=e(53776),D=e(67329),U=e(93874),k=e(83832),n=e(85893),Y,H=u.ZP.div(Y||(Y=(0,c.Z)([`
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
`]))),v=function(E){var p,B,a=E.card,x=(0,nn.t)("@@initialState"),h=x.initialState,F=(0,g.useContext)(T.tC),Q=F.onDismiss,rn=(0,D.f)(U.w.nftCancelSell),an=rn.request,on=rn.status,O=(0,D.f)(U.w.nftBuy),dn=O.request,cn=O.status,un=(0,g.useCallback)((0,R.Z)(P().mark(function sn(){return P().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,an(a.id);case 3:Q(),C.default.success("\u64CD\u4F5C\u6210\u529F"),d.next=10;break;case 7:d.prev=7,d.t0=d.catch(0),C.default.error(d.t0);case 10:case"end":return d.stop()}},sn,null,[[0,7]])})),[]),pn=(0,g.useCallback)((0,R.Z)(P().mark(function sn(){return P().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,dn(a.id);case 3:Q(),C.default.success("\u64CD\u4F5C\u6210\u529F"),d.next=10;break;case 7:d.prev=7,d.t0=d.catch(0),C.default.error(d.t0);case 10:case"end":return d.stop()}},sn,null,[[0,7]])})),[]),ln=parseFloat(a.market_price);return(0,n.jsxs)(H,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"\u786E\u8BA4\u8D2D\u4E70"})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)("h3",{children:ln}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",ln*1.5]})]})]}),on==D.o.wait||cn==D.o.wait?(0,n.jsx)(k.Z,{}):(0,n.jsx)("div",{className:"button",children:(h==null||(p=h.currentUser)===null||p===void 0?void 0:p.id)==a.u_id?(0,n.jsx)(b.b,{text:"\u64A4\u9500\u51FA\u552E",onClick:un}):(0,n.jsx)(b.b,{text:"\u8D2D\u4E70",onClick:pn})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("a",{href:"",children:"\u8D2D\u4E70CCP"}),(0,n.jsxs)("p",{children:["\u4F59\u989D\uFF1A ",h==null||(B=h.currentUser)===null||B===void 0?void 0:B.ccp_coin," CCP"]})]})]})},en=(0,g.createContext)({props:{addtime:"",block_address:"",daughters_json:"",dog_attr:[],dog_breed:0,dog_name:"",dog_sex:0,dog_skill:[],father_id:0,id:0,img_url:"",is_selling:0,market_price:"",mother_id:0,reproduce_count:0,sons_json:"",u_id:0,updatetime:""}}),o=e(47673),t=e(1011),l=e(46677),r=e.n(l),s,m=u.ZP.div(s||(s=(0,c.Z)([`
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
`]))),V=function(E){var p=E.card,B=parseFloat(p.market_price),a=(0,g.useContext)(T.tC),x=a.onDismiss,h=(0,D.f)(U.w.nftSell),F=h.request,Q=h.status,rn=(0,g.useCallback)((0,R.Z)(P().mark(function an(){return P().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.prev=0,O.next=3,F(p.id);case 3:x(),C.default.success("\u51FA\u552E\u6210\u529F"),O.next=10;break;case 7:O.prev=7,O.t0=O.catch(0),C.default.error(O.t0);case 10:case"end":return O.stop()}},an,null,[[0,7]])})),[]);return(0,n.jsxs)(m,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"\u786E\u8BA4\u51FA\u552E"})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)(t.Z,{prefix:(0,n.jsx)("img",{className:"logo",src:r(),alt:""}),suffix:"CCP",style:{width:"60%",borderRadius:"10px",height:"45px",margin:"20px"}}),(0,n.jsxs)("h4",{children:["\u50F9\u683C (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",B*1.5]})]})]}),(0,n.jsx)("div",{className:"button",children:Q==D.o.wait?(0,n.jsx)(k.Z,{}):(0,n.jsx)(b.b,{text:"\u51FA\u552E",onClick:rn})})]})},f=e(53190),S,$=u.ZP.div(S||(S=(0,c.Z)([`
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
`]))),X=function(){var E=(0,g.useContext)(T.tC),p=E.onPresent,B=(0,g.useContext)(en),a=B.props,x=(0,f.YB)();return a?(0,n.jsxs)($,{children:[(0,n.jsxs)("h3",{className:"title",children:[a.dog_name,(0,n.jsxs)("div",{className:"images",children:[(0,n.jsx)("a",{href:"",children:(0,n.jsx)("img",{src:"https://yooshi.io/img/icon-share.a52e5237.svg",alt:""})}),(0,n.jsx)("a",{href:"",children:(0,n.jsx)("img",{src:"https://yooshi.io/img/icon-info.1fdf5ee4.svg",alt:""})})]})]}),(0,n.jsx)("div",{className:"center",children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)(f._H,{id:"component.nft_car.sell_price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",parseFloat(a.market_price)*1.5]})]}),(0,n.jsx)("h4",{children:parseFloat(a.market_price).toFixed(2)})]})}),a.is_selling==1?(0,n.jsx)("div",{className:"button",onClick:function(){return p((0,n.jsx)(v,{card:a}),390)},children:(0,n.jsx)(b.b,{text:x.formatMessage({id:"component.nft_car.confirm_purchase"})})}):(0,n.jsx)("div",{className:"button",onClick:function(){return p((0,n.jsx)(V,{card:a}),390)},children:(0,n.jsx)(b.b,{text:x.formatMessage({id:"component.nft_car.confirm_sale"})})})]}):(0,n.jsx)(k.Z,{})},Z,L=u.ZP.div(Z||(Z=(0,c.Z)([`
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
`]))),w=function(){var E=(0,g.useContext)(en),p=E.props;return p?(0,n.jsxs)(L,{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(f._H,{id:"pages.market.owner"})}),(0,n.jsx)("span",{children:p.u_id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(f._H,{id:"pages.market.contract_address"})}),(0,n.jsx)("span",{children:p.block_address})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"Token ID"}),(0,n.jsx)("span",{children:p.id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(f._H,{id:"pages.market.asset_agreement"})}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(f._H,{id:"pages.market.asset_public_chain"})}),(0,n.jsx)("span",{children:"\u5408\u7D04\u5730\u5740"})]})]}):(0,n.jsx)(k.Z,{})},J,q=u.ZP.div(J||(J=(0,c.Z)([`
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
`]))),tn=function(z){var E=z.location.query,p=E.name,B=E.id,a=E.path;a||(a="Market");var x=(0,D.f)(U.w.nftDetail),h=x.request,F=x.status,Q=x.data;return(0,g.useEffect)(function(){h(B)},[B]),(0,n.jsxs)(q,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(en.Provider,{value:{props:Q},children:[(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(j.Z.Item,{children:(0,n.jsx)(W.Link,{style:{textTransform:"capitalize"},to:"/"+a,children:a})}),(0,n.jsx)(j.Z.Item,{children:(0,n.jsx)("a",{href:"",children:p})})]}),(0,n.jsx)("div",{className:"top",children:F===D.o.wait?(0,n.jsx)(k.Z,{}):(0,n.jsxs)(y.Z,{gutter:24,children:[(0,n.jsx)(i.Z,{md:12,sm:12,lg:12,children:(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)("img",{src:Q==null?void 0:Q.img_url,alt:""}),(0,n.jsx)("span",{className:"tis",children:"100x"})]})}),(0,n.jsx)(i.Z,{md:12,sm:12,lg:12,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsx)(X,{}),(0,n.jsx)("div",{style:{height:"20px"}}),(0,n.jsx)(w,{})]})})]})})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(f._H,{id:"pages.market.market_rules"})}),(0,n.jsx)("p",{children:(0,n.jsx)(f._H,{id:"pages.market.market_rules_tis1"})}),(0,n.jsx)("p",{children:(0,n.jsx)(f._H,{id:"pages.market.market_rules_tis2"})}),(0,n.jsx)("p",{})]})]})}},67329:function(K,N,e){"use strict";e.d(N,{f:function(){return j},o:function(){return c}});var A=e(3182),y=e(2824),_=e(94043),i=e.n(_),I=e(67294),j=function(W){var g=(0,I.useState)(c.start),b=(0,y.Z)(g,2),T=b[0],M=b[1],C=(0,I.useState)(),R=(0,y.Z)(C,2),G=R[0],P=R[1],nn=(0,I.useCallback)(function(){var D=(0,A.Z)(i().mark(function U(k){var n,Y;return i().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,M(c.wait),v.next=4,W(k);case 4:n=v.sent,P(n),M(c.success),v.next=14;break;case 9:v.prev=9,v.t0=v.catch(0),Y={err:v.t0},P(Y),M(c.failure);case 14:case"end":return v.stop()}},U,null,[[0,9]])}));return function(U){return D.apply(this,arguments)}}(),[M,P]);return{status:T,request:nn,data:G}},c;(function(u){u[u.start=0]="start",u[u.wait=1]="wait",u[u.success=2]="success",u[u.failure=3]="failure"})(c||(c={}))},46677:function(K){K.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},35247:function(K,N,e){"use strict";e.d(N,{Z:function(){return en}});var A=e(22122),y=e(96156),_=e(85061),i=e(67294),I=e(94184),j=e.n(I),c=e(50344),u=e(57254),W=e(81555),g=e(86032),b=function(o,t){var l={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(l[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(o);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(o,r[s])&&(l[r[s]]=o[r[s]]);return l},T=function(t){var l=t.prefixCls,r=t.separator,s=r===void 0?"/":r,m=t.children,V=t.overlay,f=t.dropdownProps,S=b(t,["prefixCls","separator","children","overlay","dropdownProps"]),$=i.useContext(g.E_),X=$.getPrefixCls,Z=X("breadcrumb",l),L=function(q){return V?i.createElement(W.Z,(0,A.Z)({overlay:V,placement:"bottomCenter"},f),i.createElement("span",{className:"".concat(Z,"-overlay-link")},q,i.createElement(u.Z,null))):q},w;return"href"in S?w=i.createElement("a",(0,A.Z)({className:"".concat(Z,"-link")},S),m):w=i.createElement("span",(0,A.Z)({className:"".concat(Z,"-link")},S),m),w=L(w),m?i.createElement("span",null,w,s&&i.createElement("span",{className:"".concat(Z,"-separator")},s)):null};T.__ANT_BREADCRUMB_ITEM=!0;var M=T,C=function(t){var l=t.children,r=i.useContext(g.E_),s=r.getPrefixCls,m=s("breadcrumb");return i.createElement("span",{className:"".concat(m,"-separator")},l||"/")};C.__ANT_BREADCRUMB_SEPARATOR=!0;var R=C,G=e(99210),P=e(21687),nn=e(96159),D=function(o,t){var l={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&t.indexOf(r)<0&&(l[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(o);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(o,r[s])&&(l[r[s]]=o[r[s]]);return l};function U(o,t){if(!o.breadcrumbName)return null;var l=Object.keys(t).join("|"),r=o.breadcrumbName.replace(new RegExp(":(".concat(l,")"),"g"),function(s,m){return t[m]||s});return r}function k(o,t,l,r){var s=l.indexOf(o)===l.length-1,m=U(o,t);return s?i.createElement("span",null,m):i.createElement("a",{href:"#/".concat(r.join("/"))},m)}var n=function(t,l){return t=(t||"").replace(/^\//,""),Object.keys(l).forEach(function(r){t=t.replace(":".concat(r),l[r])}),t},Y=function(t){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,s=(0,_.Z)(t),m=n(l,r);return m&&s.push(m),s},H=function(t){var l=t.prefixCls,r=t.separator,s=r===void 0?"/":r,m=t.style,V=t.className,f=t.routes,S=t.children,$=t.itemRender,X=$===void 0?k:$,Z=t.params,L=Z===void 0?{}:Z,w=D(t,["prefixCls","separator","style","className","routes","children","itemRender","params"]),J=i.useContext(g.E_),q=J.getPrefixCls,tn=J.direction,z,E=q("breadcrumb",l);if(f&&f.length>0){var p=[];z=f.map(function(a){var x=n(a.path,L);x&&p.push(x);var h;return a.children&&a.children.length&&(h=i.createElement(G.Z,null,a.children.map(function(F){return i.createElement(G.Z.Item,{key:F.path||F.breadcrumbName},X(F,L,f,Y(p,F.path,L)))}))),i.createElement(M,{overlay:h,separator:s,key:x||a.breadcrumbName},X(a,L,f,p))})}else S&&(z=(0,c.Z)(S).map(function(a,x){return a&&((0,P.Z)(a.type&&(a.type.__ANT_BREADCRUMB_ITEM===!0||a.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,nn.Tm)(a,{separator:s,key:x}))}));var B=j()(E,(0,y.Z)({},"".concat(E,"-rtl"),tn==="rtl"),V);return i.createElement("div",(0,A.Z)({className:B,style:m},w),z)};H.Item=M,H.Separator=R;var v=H,en=v},36017:function(K,N,e){"use strict";var A=e(65056),y=e.n(A),_=e(81262),i=e.n(_),I=e(30887),j=e(59250)}}]);
