(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[310],{81262:function(){},16993:function(J,U,e){"use strict";e.d(U,{b:function(){return Y}});var D=e(57663),I=e(71577),L=e(20310),s=e(67294),F=e(47416),M=e(85893),u,d=(0,F.ZP)(I.Z)(u||(u=(0,L.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),Y=function(b){var R=b.text,P=b.block,j=P===void 0?!0:P,_=b.onClick;return(0,M.jsx)(d,{type:"default",shape:"round",onClick:function(){return _&&_()},size:"large",block:j,children:R})}},36371:function(J,U,e){"use strict";e.r(U),e.d(U,{default:function(){return h}});var D=e(13062),I=e(71230),L=e(89032),s=e(15746),F=e(36017),M=e(35247),u=e(20310),d=e(47416),Y=e(16924),p=e(67294),b=e(16993),R=e(39916),P=e(34792),j=e(55026),_=e(3182),V=e(94043),C=e.n(V),q=e(53776),y=e(67329),T=e(93874),N=e(83832),m=e(53190),sn=e(21010),n=e(85893),cn,fn=d.ZP.div(cn||(cn=(0,u.Z)([`
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
`]))),i=function(g){var l,E,A=g.card,B=g.request,H=(0,q.t)("@@initialState"),c=H.initialState,f=(0,sn.YB)(),an=(0,p.useContext)(R.tC),w=an.onDismiss,X=(0,y.f)(T.w.nftCancelSell),vn=X.request,dn=X.status,mn=X.data,xn=(0,y.f)(T.w.nftBuy),bn=xn.request,gn=xn.status,z=(0,p.useCallback)((0,_.Z)(C().mark(function jn(){var Q;return C().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,vn(A.id);case 2:if(Q=v.sent,w(),!Q.err){v.next=7;break}return j.default.error(Q.err),v.abrupt("return");case 7:B(),j.default.success(Q.info);case 9:case"end":return v.stop()}},jn)})),[dn,mn]),En=(0,p.useCallback)((0,_.Z)(C().mark(function jn(){var Q;return C().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,bn(A.id);case 2:if(Q=v.sent,w(),!Q.err){v.next=7;break}return j.default.error(Q.err),v.abrupt("return");case 7:B(),j.default.success(Q.info);case 9:case"end":return v.stop()}},jn)})),[]),W=parseFloat(A.market_price);return(0,n.jsxs)(fn,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:(0,n.jsx)(m._H,{id:"component.nft_car.confirm_purchase"})})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)("h3",{children:W}),(0,n.jsxs)("h4",{children:[(0,n.jsx)(m._H,{id:"component.nft_car.price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",W*1.5]})]})]}),dn==y.o.wait||gn==y.o.wait?(0,n.jsx)(N.Z,{}):(0,n.jsx)("div",{className:"button",children:(c==null||(l=c.currentUser)===null||l===void 0?void 0:l.id)==A.u_id?(0,n.jsx)(b.b,{text:f.formatMessage({id:"component.nft_car.withdraw_the_sale"}),onClick:z}):(0,n.jsx)(b.b,{text:f.formatMessage({id:"component.nft_car.buy",defaultMessage:"\u8D2D\u4E70"}),onClick:En})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsxs)("a",{href:"",children:[(0,n.jsx)(m._H,{id:"component.nft_car.buy"}),"CCP"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(m._H,{id:"pages.myaccount.balance"}),"\uFF1A ",c==null||(E=c.currentUser)===null||E===void 0?void 0:E.ccp_dog_coin," CCP"]})]})]})},r=(0,p.createContext)({props:{addtime:"",block_address:"",daughters_json:"",dog_attr:[],dog_breed:0,dog_name:"",dog_sex:0,dog_skill:[],father_id:0,id:0,img_url:"",is_selling:0,market_price:"",mother_id:0,reproduce_count:0,sons_json:"",u_id:0,updatetime:""}}),o=e(47673),t=e(1011),a=e(2824),x=e(46677),nn=e.n(x),Z,K=d.ZP.div(Z||(Z=(0,u.Z)([`
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
`]))),en=function(g){var l=g.card,E=g.request,A=parseFloat(l.market_price),B=(0,p.useContext)(R.tC),H=B.onDismiss,c=(0,sn.YB)(),f=(0,y.f)(T.w.nftSell),an=f.request,w=f.status,X=f.data,vn=(0,p.useState)(),dn=(0,a.Z)(vn,2),mn=dn[0],xn=dn[1],bn=(0,p.useCallback)((0,_.Z)(C().mark(function gn(){var z;return C().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,an(l.id,mn);case 2:if(z=W.sent,console.log(z),H(),!z.err){W.next=8;break}return j.default.error(z.err),W.abrupt("return");case 8:j.default.success(z.info),E();case 10:case"end":return W.stop()}},gn)})),[X,w,mn,E]);return(0,n.jsxs)(K,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:(0,n.jsx)(m._H,{id:"component.nft_car.confirm_sale"})})}),(0,n.jsxs)("div",{className:"price",children:[(0,n.jsx)(t.Z,{prefix:(0,n.jsx)("img",{className:"logo",src:nn(),alt:""}),suffix:"CCP",onInput:function(z){xn(z.target.value)},style:{width:"60%",borderRadius:"10px",height:"45px",margin:"20px"}}),(0,n.jsxs)("h4",{children:[(0,n.jsx)(m._H,{id:"component.nft_car.price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",A*1.5]})]})]}),(0,n.jsx)("div",{className:"button",children:w==y.o.wait?(0,n.jsx)(N.Z,{}):(0,n.jsx)(b.b,{text:c.formatMessage({id:"component.nft_car.sell"}),onClick:bn})})]})},$,k=d.ZP.div($||($=(0,u.Z)([`
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
`]))),G=function(g){var l,E=g.request,A=(0,p.useContext)(R.tC),B=A.onPresent,H=(0,p.useContext)(r),c=H.props,f=(0,m.YB)(),an=(0,q.t)("@@initialState"),w=an.initialState;return c?(0,n.jsxs)(k,{children:[(0,n.jsxs)("h3",{className:"title",children:[c.dog_name,(0,n.jsx)("div",{className:"images"})]}),(0,n.jsx)("div",{className:"center",children:c.is_selling==1&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)(m._H,{id:"component.nft_car.sell_price"})," (CCP) ",(0,n.jsxs)("span",{children:["\u2248 $",parseFloat(c.market_price)*1.5]})]}),(0,n.jsx)("h4",{children:parseFloat(c.market_price).toFixed(2)})]})}),c.is_selling==1?(0,n.jsx)("div",{className:"button",onClick:function(){return B((0,n.jsx)(i,{request:E,card:c}),390)},children:(0,n.jsx)(b.b,{text:f.formatMessage({id:(w==null||(l=w.currentUser)===null||l===void 0?void 0:l.id)==c.u_id?"component.nft_car.withdraw_the_sale":"component.nft_car.confirm_purchase"})})}):(0,n.jsx)("div",{className:"button",onClick:function(){return B((0,n.jsx)(en,{request:E,card:c}),390)},children:(0,n.jsx)(b.b,{text:f.formatMessage({id:"component.nft_car.confirm_sale"})})})]}):(0,n.jsx)(N.Z,{})},S,on=d.ZP.div(S||(S=(0,u.Z)([`
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
`]))),rn=function(){return(0,n.jsxs)(on,{children:[(0,n.jsx)("h3",{className:"title",children:"Stats"}),(0,n.jsxs)(I.Z,{gutter:8,children:[(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("h4",{children:"SPEED"}),(0,n.jsx)("h5",{children:(0,n.jsx)("span",{children:"167"})})]})}),(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("h4",{children:"ENDURANCE"}),(0,n.jsx)("h5",{children:(0,n.jsx)("span",{children:"167"})})]})}),(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("h4",{children:"BALANCE"}),(0,n.jsx)("h5",{children:(0,n.jsx)("span",{children:"167"})})]})}),(0,n.jsx)(s.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsxs)("div",{className:"item",children:[(0,n.jsx)("h4",{children:"BURST"}),(0,n.jsx)("h5",{children:(0,n.jsx)("span",{children:"167"})})]})})]})]})},un,ln=d.ZP.div(un||(un=(0,u.Z)([`
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
`]))),pn=function(){var g=(0,p.useContext)(r),l=g.props;return l?(0,n.jsxs)(ln,{children:[(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:(0,n.jsx)(m._H,{id:"pages.market.owner"})}),(0,n.jsx)("span",{children:l.u_id})]}),(0,n.jsxs)("h3",{children:[(0,n.jsx)("span",{children:"Token ID"}),(0,n.jsx)("span",{children:l.id})]}),(0,n.jsx)(rn,{})]}):(0,n.jsx)(N.Z,{})},tn,hn=d.ZP.div(tn||(tn=(0,u.Z)([`
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
`]))),h=function(O){var g=O.location.query,l=g.name,E=g.id,A=g.path;A||(A="Market");var B=(0,y.f)(T.w.nftDetail),H=B.request,c=B.status,f=B.data;return(0,p.useEffect)(function(){H(E)},[E]),(0,n.jsxs)(hn,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(r.Provider,{value:{props:f==null?void 0:f.data},children:[(0,n.jsxs)(M.Z,{children:[(0,n.jsx)(M.Z.Item,{children:(0,n.jsx)(Y.Link,{style:{textTransform:"capitalize"},to:"/"+A,children:A})}),(0,n.jsx)(M.Z.Item,{children:(0,n.jsx)("a",{href:"",children:l})})]}),(0,n.jsx)("div",{className:"top",children:c===y.o.start?(0,n.jsx)(N.Z,{}):(0,n.jsxs)(I.Z,{gutter:24,children:[(0,n.jsx)(s.Z,{md:12,sm:24,lg:12,xs:24,children:(0,n.jsxs)("div",{className:"left",children:[(0,n.jsx)("img",{src:f==null?void 0:f.data.img_url,alt:""}),(0,n.jsx)("span",{className:"tis",children:"\u5438\u996D\u5927\u6CD5 +9"})]})}),(0,n.jsx)(s.Z,{md:12,sm:24,lg:12,xs:24,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsx)(G,{request:function(){return H(E)}}),(0,n.jsx)("div",{style:{height:"20px"}}),(0,n.jsx)(pn,{})]})})]})})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(m._H,{id:"pages.market.market_rules"})}),(0,n.jsx)("p",{children:(0,n.jsx)(m._H,{id:"pages.market.market_rules_tis1"})}),(0,n.jsx)("p",{children:(0,n.jsx)(m._H,{id:"pages.market.market_rules_tis2"})}),(0,n.jsx)("p",{})]})]})}},67329:function(J,U,e){"use strict";e.d(U,{f:function(){return M},o:function(){return u}});var D=e(3182),I=e(2824),L=e(94043),s=e.n(L),F=e(67294),M=function(Y){var p=(0,F.useState)(u.start),b=(0,I.Z)(p,2),R=b[0],P=b[1],j=(0,F.useState)(),_=(0,I.Z)(j,2),V=_[0],C=_[1],q=(0,F.useCallback)((0,D.Z)(s().mark(function y(){var T,N,m=arguments;return s().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,P(u.wait),n.next=4,Y.apply(void 0,m);case 4:return T=n.sent,C(T),P(u.success),n.abrupt("return",T);case 10:return n.prev=10,n.t0=n.catch(0),N={err:n.t0.info},C(N),P(u.failure),n.abrupt("return",N);case 16:case"end":return n.stop()}},y,null,[[0,10]])})),[P,C]);return{status:R,request:q,data:V}},u;(function(d){d[d.start=0]="start",d[d.wait=1]="wait",d[d.success=2]="success",d[d.failure=3]="failure"})(u||(u={}))},46677:function(J){J.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},35247:function(J,U,e){"use strict";e.d(U,{Z:function(){return fn}});var D=e(22122),I=e(96156),L=e(85061),s=e(67294),F=e(94184),M=e.n(F),u=e(50344),d=e(57254),Y=e(81555),p=e(86032),b=function(i,r){var o={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&r.indexOf(t)<0&&(o[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(o[t[a]]=i[t[a]]);return o},R=function(r){var o=r.prefixCls,t=r.separator,a=t===void 0?"/":t,x=r.children,nn=r.overlay,Z=r.dropdownProps,K=b(r,["prefixCls","separator","children","overlay","dropdownProps"]),en=s.useContext(p.E_),$=en.getPrefixCls,k=$("breadcrumb",o),G=function(rn){return nn?s.createElement(Y.Z,(0,D.Z)({overlay:nn,placement:"bottomCenter"},Z),s.createElement("span",{className:"".concat(k,"-overlay-link")},rn,s.createElement(d.Z,null))):rn},S;return"href"in K?S=s.createElement("a",(0,D.Z)({className:"".concat(k,"-link")},K),x):S=s.createElement("span",(0,D.Z)({className:"".concat(k,"-link")},K),x),S=G(S),x?s.createElement("span",null,S,a&&s.createElement("span",{className:"".concat(k,"-separator")},a)):null};R.__ANT_BREADCRUMB_ITEM=!0;var P=R,j=function(r){var o=r.children,t=s.useContext(p.E_),a=t.getPrefixCls,x=a("breadcrumb");return s.createElement("span",{className:"".concat(x,"-separator")},o||"/")};j.__ANT_BREADCRUMB_SEPARATOR=!0;var _=j,V=e(99210),C=e(21687),q=e(96159),y=function(i,r){var o={};for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&r.indexOf(t)<0&&(o[t]=i[t]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(i);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(i,t[a])&&(o[t[a]]=i[t[a]]);return o};function T(i,r){if(!i.breadcrumbName)return null;var o=Object.keys(r).join("|"),t=i.breadcrumbName.replace(new RegExp(":(".concat(o,")"),"g"),function(a,x){return r[x]||a});return t}function N(i,r,o,t){var a=o.indexOf(i)===o.length-1,x=T(i,r);return a?s.createElement("span",null,x):s.createElement("a",{href:"#/".concat(t.join("/"))},x)}var m=function(r,o){return r=(r||"").replace(/^\//,""),Object.keys(o).forEach(function(t){r=r.replace(":".concat(t),o[t])}),r},sn=function(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,a=(0,L.Z)(r),x=m(o,t);return x&&a.push(x),a},n=function(r){var o=r.prefixCls,t=r.separator,a=t===void 0?"/":t,x=r.style,nn=r.className,Z=r.routes,K=r.children,en=r.itemRender,$=en===void 0?N:en,k=r.params,G=k===void 0?{}:k,S=y(r,["prefixCls","separator","style","className","routes","children","itemRender","params"]),on=s.useContext(p.E_),rn=on.getPrefixCls,un=on.direction,ln,pn=rn("breadcrumb",o);if(Z&&Z.length>0){var tn=[];ln=Z.map(function(h){var O=m(h.path,G);O&&tn.push(O);var g;return h.children&&h.children.length&&(g=s.createElement(V.Z,null,h.children.map(function(l){return s.createElement(V.Z.Item,{key:l.path||l.breadcrumbName},$(l,G,Z,sn(tn,l.path,G)))}))),s.createElement(P,{overlay:g,separator:a,key:O||h.breadcrumbName},$(h,G,Z,tn))})}else K&&(ln=(0,u.Z)(K).map(function(h,O){return h&&((0,C.Z)(h.type&&(h.type.__ANT_BREADCRUMB_ITEM===!0||h.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,q.Tm)(h,{separator:a,key:O}))}));var hn=M()(pn,(0,I.Z)({},"".concat(pn,"-rtl"),un==="rtl"),nn);return s.createElement("div",(0,D.Z)({className:hn,style:x},S),ln)};n.Item=P,n.Separator=_;var cn=n,fn=cn},36017:function(J,U,e){"use strict";var D=e(65056),I=e.n(D),L=e(81262),s=e.n(L),F=e(30887),M=e(59250)}}]);
