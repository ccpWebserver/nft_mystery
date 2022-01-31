(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[464],{16993:function(p,u,a){"use strict";a.d(u,{b:function(){return _}});var F=a(57663),f=a(71577),M=a(20310),b=a(67294),c=a(47416),m=a(85893),i,r=(0,c.ZP)(f.Z)(i||(i=(0,M.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(O){var d=O.disabled;return d&&.5}),_=function(d){var D=d.text,g=d.block,C=g===void 0?!0:g,l=d.onClick,v=d.disabled,x=v===void 0?!1:v;return(0,m.jsx)(r,{type:"default",shape:"round",disabled:x,onClick:function(){x||l&&l()},size:"large",block:C,children:D})}},25799:function(p,u,a){"use strict";a.r(u),a.d(u,{default:function(){return cn}});var F=a(13062),f=a(71230),M=a(89032),b=a(15746),c=a(20310),m=a(47416),i=a(20228),r=a(11382),_=a(34792),O=a(55026),d=a(3182),D=a(2824),g=a(94043),C=a.n(g),l=a(67294),v=a(16993),x=a(63757),P=a.n(x),B=a(93874),h=a(67329),t=a(53190),T=a(98130),k=a(46677),s=a.n(k),J=a(39916),q=a(43581),nn=a(9684),n=a(85893),L,an=m.ZP.div(L||(L=(0,c.Z)([`
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

  .images {
    display: block;
    width: 70%;
    margin: 0 auto;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    a {
    }
  }
`]))),en=function(o){var A=o.onDismiss,j=(0,q.YB)();return(0,n.jsx)(an,{children:(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("h2",{children:(0,n.jsx)(t._H,{id:"pages.market.congratulations"})}),(0,n.jsx)("img",{src:P(),alt:"",className:"images"}),(0,n.jsx)("div",{className:"button",children:(0,n.jsx)(v.b,{text:j.formatMessage({id:"pages.market.open_box"}),onClick:function(){A(),nn.m.push("/wallets/wallets")}})})]})})},G,tn=m.ZP.div(G||(G=(0,c.Z)([`
  background: linear-gradient(rgb(242, 255, 247), rgb(224, 255, 237));
  width: 100%;
  border-radius: 15px;
  padding: 32px;
  text-align: center;

  .top {
    display: block;
    margin: 0 auto;
    width: 72px;
  }

  h2 {
    margin-top: 24px;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, .85);
    font-weight: bold;
  }

  h3 {
    color: #7cd770;
    margin-top: 24px;
    font-size: 24px;
    font-weight: 700;
  }

  .inner {
    padding: 16px 12px 18px;
    border-radius: 5px;
    text-align: center;
    background-color: white;
    margin-bottom: 20px;
    border: 1px solid #f0f0f0;

    h4 {

      text-align: center;
      margin-bottom: 0;

      span {
        font-size: 36px;
        font-weight: 600;
      }
    }

    h5 {
      font-size: 16px;
      margin-top: 5px;
      color: #505f79;
    }
  }

  .price {
    display: inline-block;
    margin: 0 auto;
    text-align: end;

    h5 {
      display: flex;
      align-items: end;
      justify-content: center;
      font-size: 22px;

      img {
        width: 30px;
        display: block;
        margin-right: 10px;
      }

      span {
        font-size: 16px;
        color: #666;
      }
    }
  }

  h6 {
    color: #44df84;
    margin-top: 20px;
  }

  @media (max-width: 576px) {
    padding: 12px;
    .inner {
      h4 {
        span {
          font-size: 28px;
        }
      }
    }

  }


`]))),sn=function(){var o,A,j,y,I,N,gn=(0,l.useState)(!1),Y=(0,D.Z)(gn,2),pn=Y[0],w=Y[1],un=(0,l.useContext)(J.tC),xn=un.onPresent,W=(0,h.f)(B.w.nftBlindBox),U=W.request,hn=W.status,e=W.data,mn=(0,h.f)(B.w.nftBuy),V=mn.request,$=(0,h.f)(B.w.price),vn=$.request,Q=$.data,An=(0,t.YB)(),jn=(0,l.useCallback)((0,d.Z)(C().mark(function X(){var R,z,S,Z;return C().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return z=Math.floor(Math.random()*10),(e==null||(R=e.data)===null||R===void 0?void 0:R.box_count.length)<10&&(z=Math.floor(Math.random()*(e==null||(S=e.data)===null||S===void 0?void 0:S.box_count.length))),w(!0),E.next=5,V(e.data[z].id,"yes");case 5:if(Z=E.sent,w(!1),!Z.err){E.next=10;break}return U(),E.abrupt("return",O.default.error(Z.err));case 10:xn((0,n.jsx)(en,{}));case 11:case"end":return E.stop()}},X)})),[e,V,U,e==null||(o=e.data)===null||o===void 0?void 0:o.box_count]);return(0,l.useEffect)(function(){U(),vn()},[]),(0,n.jsxs)(tn,{children:[(0,n.jsx)("img",{src:P(),alt:"",className:"top"}),(0,n.jsx)("h2",{children:"CCP DOG NFT"}),(0,n.jsxs)("h3",{children:[(0,n.jsx)(t._H,{id:"pages.market.total_number"}),": ",e==null||(A=e.data)===null||A===void 0?void 0:A.box_count]}),(0,n.jsx)("div",{className:"inner",children:(e==null||(j=e.data)===null||j===void 0?void 0:j.begin_time)&&(0,n.jsx)("h4",{children:(0,n.jsx)(T.ZP,{date:(e==null||(y=e.data)===null||y===void 0?void 0:y.begin_time)*1e3,renderer:rn})})}),(0,n.jsx)("div",{className:"price",children:(0,n.jsxs)("h5",{children:[(0,n.jsx)("img",{src:s(),alt:""}),"299 CCP ",(0,n.jsxs)("span",{children:[" \u2248 $ ",(299*(1/(Q==null||(I=Q.data)===null||I===void 0?void 0:I[2].usdt_price))).toFixed()]})]})}),(0,n.jsx)("div",{children:pn||hn==h.o.wait?(0,n.jsx)(r.Z,{}):(0,n.jsx)(v.b,{disabled:(e==null||(N=e.data)===null||N===void 0?void 0:N.box_count)==0,onClick:function(){return jn()},text:An.formatMessage({id:"component.nft_car.confirm_purchase"})})})]})},rn=function(o){var A=o.days,j=o.hours,y=o.minutes,I=o.seconds,N=o.completed;return(0,n.jsxs)("span",{children:[A,"D:",j,"h:",y,"m:",I,"s"]})},dn=a(18572),on=a.n(dn),H,ln=m.ZP.div(H||(H=(0,c.Z)([`
  padding: 30px;
  box-sizing: border-box;

  .top {

    margin-top: 40px;
    margin-bottom: 40px;

    img {
      max-width: 100%;
      max-height: 200px;
      margin: 0 auto;
      display: block;
    }

    h3 {
      color: rgb(80, 95, 121);
      font-size: 16px;
      margin-top: 6px;
      text-align: center;
    }

  }

  .box {
    box-shadow: 0 8px 30px 0 rgb(117 219 141 / 24%);
    padding: 32px;
    border-radius: 32px;

    .right {
      //width: 500px;

      > div:first-child {
        background: #f8f9fc;
        border-bottom: none;
        p {
          color: #666d7f;
        }
      }

      >div:last-child {
        border-bottom: none;
      }

      > div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e6ebf5;
        p {
          flex: 1;
          margin-bottom: 0;
          padding: 10px 0;
          text-align: center;
          font-size: 14px;
          color: #111e36;
        }
      }
    }
  }

  @media (max-width: 976px) {
    .box{
      .right {
        margin-top: 20px;

      }
    }
  }
  @media (max-width: 576px) {
    padding: 12px;
    .box{
      padding: 12px;
      .right {
        margin-top: 20px;

      }
    }
  }
`]))),cn=function(){return(0,n.jsxs)(ln,{children:[(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("img",{src:on(),alt:""}),(0,n.jsx)("h3",{children:(0,n.jsx)(t._H,{id:"pages.market.top_msg"})})]}),(0,n.jsx)("div",{className:"box",children:(0,n.jsxs)(f.Z,{gutter:48,children:[(0,n.jsx)(b.Z,{span:6,xs:24,sm:24,md:12,lg:10,children:(0,n.jsx)(sn,{})}),(0,n.jsx)(b.Z,{span:6,xs:24,sm:24,md:12,lg:14,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.class"})}),(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.rarity"})}),(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.proportion"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.greyhound"})}),(0,n.jsx)("p",{children:"SSR"}),(0,n.jsx)("p",{children:"2%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.belgian_malinois"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"4%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.saluki"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"8%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.hungarian_vizsla"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"7%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.afghan_hound"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"9%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.whippet"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"10%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.jack_russell_terrier"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"13%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.dalmatian"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"17%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(t._H,{id:"pages.market.russian_wolfhound"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"20%"})]})]})})]})})]})}},67329:function(p,u,a){"use strict";a.d(u,{f:function(){return m},o:function(){return i}});var F=a(3182),f=a(2824),M=a(94043),b=a.n(M),c=a(67294),m=function(_){var O=(0,c.useState)(i.start),d=(0,f.Z)(O,2),D=d[0],g=d[1],C=(0,c.useState)(),l=(0,f.Z)(C,2),v=l[0],x=l[1],P=(0,c.useCallback)((0,F.Z)(b().mark(function B(){var h,t,T=arguments;return b().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,g(i.wait),s.next=4,_.apply(void 0,T);case 4:return h=s.sent,x(h),g(i.success),s.abrupt("return",h);case 10:return s.prev=10,s.t0=s.catch(0),t={err:s.t0.info},x(t),g(i.failure),s.abrupt("return",t);case 16:case"end":return s.stop()}},B,null,[[0,10]])})),[g,x]);return{status:D,request:P,data:v}},i;(function(r){r[r.start=0]="start",r[r.wait=1]="wait",r[r.success=2]="success",r[r.failure=3]="failure"})(i||(i={}))},46677:function(p){p.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},18572:function(p,u,a){p.exports=a.p+"static/mysterious.98c98ffc.png"},63757:function(p,u,a){p.exports=a.p+"static/mystery_header.ab029946.png"}}]);
