(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[310],{81262:function(){},16993:function(q,U,e){"use strict";e.d(U,{b:function(){return V}});var D=e(57663),I=e(71577),K=e(20310),s=e(67294),F=e(47416),M=e(85893),m,c=(0,F.ZP)(I.Z)(m||(m=(0,K.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(u){var x=u.disabled;return x&&.5}),V=function(x){var R=x.text,P=x.block,E=P===void 0?!0:P,_=x.onClick,k=x.disabled,v=k===void 0?!1:k;return(0,M.jsx)(c,{type:"default",shape:"round",disabled:v,onClick:function(){v||_&&_()},size:"large",block:E,children:R})}},36371:function(q,U,e){"use strict";e.r(U),e.d(U,{default:function(){return b}});var D=e(13062),I=e(71230),K=e(89032),s=e(15746),F=e(36017),M=e(35247),m=e(20310),c=e(47416),V=e(16924),u=e(67294),x=e(16993),R=e(39916),P=e(34792),E=e(55026),_=e(3182),k=e(94043),v=e.n(k),$=e(53776),C=e(67329),T=e(93874),B=e(83832),d=e(53190),sn=e(21010),n=e(85893),un,fn=c.ZP.div(un||(un=(0,m.Z)([`
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
`]))),i=function(f){var l,A,O=f.card,N=f.request,Y=(0,$.t)("@@initialState"),p=Y.initialState,h=(0,sn.YB)(),an=(0,u.useContext)(R.tC),z=an.onDismiss,J=(0,C.f)(T.w.nftCancelSell),vn=J.request,ln=J.status,cn=J.data,xn=(0,C.f)(T.w.nftBuy),bn=xn.request,gn=xn.status,Q=(0,u.useCallback)((0,_.Z)(v().mark(function jn(){var L;return v().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,vn(O.id);case 2:if(L=j.sent,z(),!L.err){j.next=7;break}return E.default.error(L.err),j.abrupt("return");case 7:N(),E.default.success(L.info);case 9:case"end":return j.stop()}},jn)})),[ln,cn]),En=(0,u.useCallback)((0,_.Z)(v().mark(function jn(){var L;return v().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,bn(O.id);case 2:if(L=j.sent,z(),!L.err){j.next=7;break}return E.default.error(L.err),j.abrupt("return");case 7:N(),E.default.success(L.info);case 9:case"end":return j.stop()}},jn)})),[]),W=parseFloat(O.market_price);return(0,n.jsxs)(fn,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:(0,n.jsx)(d._H,{id:"component.nft_car.confirm_purchase"})})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)("h3",{children:W}),(0,n.jsxs)("h4",{children:[(0,n.jsx)(d._H,{id:"component.nft_car.price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",W*1.5]})]})]}),ln==C.o.wait||gn==C.o.wait?(0,n.jsx)(B.Z,{}):(0,n.jsx)("div",{className:"button",children:(p==null||(l=p.currentUser)===null||l===void 0?void 0:l.id)==O.u_id?(0,n.jsx)(x.b,{text:h.formatMessage({id:"component.nft_car.withdraw_the_sale"}),onClick:Q}):(0,n.jsx)(x.b,{text:h.formatMessage({id:"component.nft_car.buy",defaultMessage:"\u8D2D\u4E70"}),onClick:En})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsxs)("a",{href:"",children:[(0,n.jsx)(d._H,{id:"component.nft_car.buy"}),"CCP"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(d._H,{id:"pages.myaccount.balance"}),"\uFF1A ",p==null||(A=p.currentUser)===null||A===void 0?void 0:A.ccp_dog_coin," CCP"]})]})]})},r=(0,u.createContext)({props:{addtime:"",block_address:"",daughters_json:"",dog_attr:[],dog_breed:0,dog_name:"",dog_sex:0,dog_skill:[],father_id:0,id:0,img_url:"",is_selling:0,market_price:"",mother_id:0,reproduce_count:0,sons_json:"",u_id:0,updatetime:""}}),o=e(47673),t=e(1011),a=e(2824),g=e(46677),nn=e.n(g),Z,H=c.ZP.div(Z||(Z=(0,m.Z)([`
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
`]))),en=function(f){var l=f.card,A=f.request,O=parseFloat(l.market_price),N=(0,u.useContext)(R.tC),Y=N.onDismiss,p=(0,sn.YB)(),h=(0,C.f)(T.w.nftSell),an=h.request,z=h.status,J=h.data,vn=(0,u.useState)(),ln=(0,a.Z)(vn,2),cn=ln[0],xn=ln[1],bn=(0,u.useCallback)((0,_.Z)(v().mark(function gn(){var Q;return v().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,an(l.id,cn);case 2:if(Q=W.sent,console.log(Q),Y(),!Q.err){W.next=8;break}return E.default.error(Q.err),W.abrupt("return");case 8:E.default.success(Q.info),A();case 10:case"end":return W.stop()}},gn)})),[J,z,cn,A]);return(0,n.jsxs)(H,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:(0,n.jsx)(d._H,{id:"component.nft_car.confirm_sale"})})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)(t.Z,{prefix:(0,n.jsx)("img",{className:"logo",src:nn(),alt:""}),suffix:"CCP",onInput:function(Q){xn(Q.target.value)},style:{width:"60%",borderRadius:"10px",height:"45px",margin:"20px"}}),(0,n.jsxs)("h4",{children:[(0,n.jsx)(d._H,{id:"component.nft_car.price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",(cn||0)*1.5]})]})]}),(0,n.jsx)("div",{className:"button",children:z==C.o.wait?(0,n.jsx)(B.Z,{}):(0,n.jsx)(x.b,{text:p.formatMessage({id:"component.nft_car.sell"}),onClick:bn})})]})},X,w=c.ZP.div(X||(X=(0,m.Z)([`
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
        span {
          font-size: 22px;
          color: #7cd770;
        }
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
`]))),G=function(f){var l,A=f.request,O=(0,u.useContext)(R.tC),N=O.onPresent,Y=(0,u.useContext)(r),p=Y.props,h=(0,d.YB)(),an=(0,$.t)("@@initialState"),z=an.initialState;return p?(0,n.jsxs)(w,{children:[(0,n.jsxs)("h3",{className:"title",children:[p.dog_name,(0,n.jsx)("div",{className:"images"})]}),(0,n.jsx)("div",{className:"center",children:p.is_selling==1&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:(0,n.jsx)(d._H,{id:"component.nft_car.sell_price"})}),(0,n.jsxs)("h4",{children:[parseFloat(p.market_price).toFixed(2)," (CCP)",(0,n.jsxs)("span",{children:[" \u2248 $",parseFloat(p.market_price)*1.5]})]})]})}),p.is_selling==1?(0,n.jsx)("div",{className:"button",onClick:function(){return N((0,n.jsx)(i,{request:A,card:p}),390)},children:(0,n.jsx)(x.b,{text:h.formatMessage({id:(z==null||(l=z.currentUser)===null||l===void 0?void 0:l.id)==p.u_id?"component.nft_car.withdraw_the_sale":"component.nft_car.confirm_purchase"})})}):(0,n.jsx)("div",{className:"button",onClick:function(){return N((0,n.jsx)(en,{request:A,card:p}),390)},children:(0,n.jsx)(x.b,{text:h.formatMessage({id:"component.nft_car.confirm_sale"})})})]}):(0,n.jsx)(B.Z,{})},S,on=c.ZP.div(S||(S=(0,m.Z)([`
  //margin-top: 40px;
  //padding: px 12px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px 0 rgb(117 219 141 / 24%);

  .title {
    margin-bottom: 5px;
    padding-left: 20px;
    padding-bottom: 14px;
    color: #333;
    font: 16px/1.4 Noto Sans, sans-serif;
    font-weight: bold;
    font-size: 20px;
    border-bottom: 1px solid #f5f8fb;
  }

  .item {
    text-align: center;

    h4 {
      margin-bottom: 5px;
    }

    h5 {
      display: flex;
      justify-content: center;

      img {
        display: block;
        width: 33px;
      }
    }
  }
`]))),rn=function(){return(0,n.jsxs)(on,{children:[(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(d._H,{id:"pages.market.Stats"})}),(0,n.jsxs)(I.Z,{gutter:8,children:[(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("h4",{children:(0,n.jsx)(d._H,{id:"pages.market.SPEED"})}),(0,n.jsx)("h5",{children:(0,n.jsx)("span",{children:"167"})})]})}),(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("h4",{children:(0,n.jsx)(d._H,{id:"pages.market.ENDURANCE"})}),(0,n.jsx)("h5",{children:(0,n.jsx)("span",{children:"167"})})]})}),(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("h4",{children:(0,n.jsx)(d._H,{id:"pages.market.BALANCE"})}),(0,n.jsx)("h5",{children:(0,n.jsx)("span",{children:"167"})})]})}),(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("h4",{children:(0,n.jsx)(d._H,{id:"pages.market.BURST"})}),(0,n.jsx)("h5",{children:(0,n.jsx)("span",{children:"167"})})]})})]})]})},pn,dn=c.ZP.div(pn||(pn=(0,m.Z)([`
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
`]))),mn=function(){var f=(0,u.useContext)(r),l=f.props;return l?(0,n.jsxs)(dn,{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(d._H,{id:"pages.market.owner"})}),(0,n.jsx)("span",{children:l.u_id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"Token ID"}),(0,n.jsx)("span",{children:l.id})]}),(0,n.jsx)(rn,{})]}):(0,n.jsx)(B.Z,{})},tn,hn=c.ZP.div(tn||(tn=(0,m.Z)([`
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
        padding: 0 10px;
        right: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        //width: 50px;
        height: 40px;
        color: #fff;
        font-weight: 600;
        font-size: 13px;
        background: linear-gradient(270deg, #89d143, #75db8d);
        border-radius: 10px;
      }

      img {
        display: block;
        width: 100%;
      }
    }

    .right {
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

  @media (max-width: 576px) {
    padding: 10px;
    .top{
      padding: 15px;
      border-radius: 20px;

      .right{
        margin-top: 20px;
      }
    }

  }
`]))),b=function(y){var f=y.location.query,l=f.name,A=f.id,O=f.path;O||(O="Market");var N=(0,C.f)(T.w.nftDetail),Y=N.request,p=N.status,h=N.data;return(0,u.useEffect)(function(){Y(A)},[A]),(0,n.jsxs)(hn,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(r.Provider,{value:{props:h==null?void 0:h.data},children:[(0,n.jsxs)(M.Z,{children:[(0,n.jsx)(M.Z.Item,{children:(0,n.jsx)(V.Link,{style:{textTransform:"capitalize"},to:"/"+O,children:O})}),(0,n.jsx)(M.Z.Item,{children:(0,n.jsx)("a",{href:"",children:l})})]}),(0,n.jsx)("div",{className:"top",children:p===C.o.start?(0,n.jsx)(B.Z,{}):(0,n.jsxs)(I.Z,{gutter:24,children:[(0,n.jsx)(s.Z,{md:12,sm:24,lg:12,xs:24,children:(0,n.jsx)("div",{className:"left",children:(0,n.jsx)("img",{src:h==null?void 0:h.data.img_url,alt:""})})}),(0,n.jsx)(s.Z,{md:12,sm:24,lg:12,xs:24,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsx)(G,{request:function(){return Y(A)}}),(0,n.jsx)("div",{style:{height:"20px"}}),(0,n.jsx)(mn,{})]})})]})})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(d._H,{id:"pages.market.market_rules"})}),(0,n.jsx)("p",{children:(0,n.jsx)(d._H,{id:"pages.market.market_rules_tis1"})}),(0,n.jsx)("p",{children:(0,n.jsx)(d._H,{id:"pages.market.market_rules_tis2"})}),(0,n.jsx)("p",{})]})]})}},67329:function(q,U,e){"use strict";e.d(U,{f:function(){return M},o:function(){return m}});var D=e(3182),I=e(2824),K=e(94043),s=e.n(K),F=e(67294),M=function(V){var u=(0,F.useState)(m.start),x=(0,I.Z)(u,2),R=x[0],P=x[1],E=(0,F.useState)(),_=(0,I.Z)(E,2),k=_[0],v=_[1],$=(0,F.useCallback)((0,D.Z)(s().mark(function C(){var T,B,d=arguments;return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,P(m.wait),n.next=4,V.apply(void 0,d);case 4:return T=n.sent,v(T),P(m.success),n.abrupt("return",T);case 10:return n.prev=10,n.t0=n.catch(0),B={err:n.t0.info},v(B),P(m.failure),n.abrupt("return",B);case 16:case"end":return n.stop()}},C,null,[[0,10]])})),[P,v]);return{status:R,request:$,data:k}},m;(function(c){c[c.start=0]="start",c[c.wait=1]="wait",c[c.success=2]="success",c[c.failure=3]="failure"})(m||(m={}))},46677:function(q){q.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},35247:function(q,U,e){"use strict";e.d(U,{Z:function(){return fn}});var D=e(22122),I=e(96156),K=e(85061),s=e(67294),F=e(94184),M=e.n(F),m=e(50344),c=e(57254),V=e(81555),u=e(86032),x=function(i,r){var o={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&r.indexOf(t)<0&&(o[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(o[t[a]]=i[t[a]]);return o},R=function(r){var o=r.prefixCls,t=r.separator,a=t===void 0?"/":t,g=r.children,nn=r.overlay,Z=r.dropdownProps,H=x(r,["prefixCls","separator","children","overlay","dropdownProps"]),en=s.useContext(u.E_),X=en.getPrefixCls,w=X("breadcrumb",o),G=function(rn){return nn?s.createElement(V.Z,(0,D.Z)({overlay:nn,placement:"bottomCenter"},Z),s.createElement("span",{className:"".concat(w,"-overlay-link")},rn,s.createElement(c.Z,null))):rn},S;return"href"in H?S=s.createElement("a",(0,D.Z)({className:"".concat(w,"-link")},H),g):S=s.createElement("span",(0,D.Z)({className:"".concat(w,"-link")},H),g),S=G(S),g?s.createElement("span",null,S,a&&s.createElement("span",{className:"".concat(w,"-separator")},a)):null};R.__ANT_BREADCRUMB_ITEM=!0;var P=R,E=function(r){var o=r.children,t=s.useContext(u.E_),a=t.getPrefixCls,g=a("breadcrumb");return s.createElement("span",{className:"".concat(g,"-separator")},o||"/")};E.__ANT_BREADCRUMB_SEPARATOR=!0;var _=E,k=e(99210),v=e(21687),$=e(96159),C=function(i,r){var o={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&r.indexOf(t)<0&&(o[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(o[t[a]]=i[t[a]]);return o};function T(i,r){if(!i.breadcrumbName)return null;var o=Object.keys(r).join("|"),t=i.breadcrumbName.replace(new RegExp(":(".concat(o,")"),"g"),function(a,g){return r[g]||a});return t}function B(i,r,o,t){var a=o.indexOf(i)===o.length-1,g=T(i,r);return a?s.createElement("span",null,g):s.createElement("a",{href:"#/".concat(t.join("/"))},g)}var d=function(r,o){return r=(r||"").replace(/^\//,""),Object.keys(o).forEach(function(t){r=r.replace(":".concat(t),o[t])}),r},sn=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=(0,K.Z)(r),g=d(o,t);return g&&a.push(g),a},n=function(r){var o=r.prefixCls,t=r.separator,a=t===void 0?"/":t,g=r.style,nn=r.className,Z=r.routes,H=r.children,en=r.itemRender,X=en===void 0?B:en,w=r.params,G=w===void 0?{}:w,S=C(r,["prefixCls","separator","style","className","routes","children","itemRender","params"]),on=s.useContext(u.E_),rn=on.getPrefixCls,pn=on.direction,dn,mn=rn("breadcrumb",o);if(Z&&Z.length>0){var tn=[];dn=Z.map(function(b){var y=d(b.path,G);y&&tn.push(y);var f;return b.children&&b.children.length&&(f=s.createElement(k.Z,null,b.children.map(function(l){return s.createElement(k.Z.Item,{key:l.path||l.breadcrumbName},X(l,G,Z,sn(tn,l.path,G)))}))),s.createElement(P,{overlay:f,separator:a,key:y||b.breadcrumbName},X(b,G,Z,tn))})}else H&&(dn=(0,m.Z)(H).map(function(b,y){return b&&((0,v.Z)(b.type&&(b.type.__ANT_BREADCRUMB_ITEM===!0||b.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,$.Tm)(b,{separator:a,key:y}))}));var hn=M()(mn,(0,I.Z)({},"".concat(mn,"-rtl"),pn==="rtl"),nn);return s.createElement("div",(0,D.Z)({className:hn,style:g},S),dn)};n.Item=P,n.Separator=_;var un=n,fn=un},36017:function(q,U,e){"use strict";var D=e(65056),I=e.n(D),K=e(81262),s=e.n(K),F=e(30887),M=e(59250)}}]);
