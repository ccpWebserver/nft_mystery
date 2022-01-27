(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[464],{16993:function(p,x,e){"use strict";e.d(x,{b:function(){return M}});var F=e(57663),f=e(71577),I=e(20310),b=e(67294),c=e(47416),m=e(85893),r,t=(0,c.ZP)(f.Z)(r||(r=(0,I.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(O){var i=O.disabled;return i&&.5}),M=function(i){var D=i.text,g=i.block,C=g===void 0?!0:g,l=i.onClick,v=i.disabled,u=v===void 0?!1:v;return(0,m.jsx)(t,{type:"default",shape:"round",disabled:u,onClick:function(){!u||l&&l()},size:"large",block:C,children:D})}},25799:function(p,x,e){"use strict";e.r(x),e.d(x,{default:function(){return dn}});var F=e(13062),f=e(71230),I=e(89032),b=e(15746),c=e(20310),m=e(47416),r=e(20228),t=e(11382),M=e(34792),O=e(55026),i=e(3182),D=e(2824),g=e(94043),C=e.n(g),l=e(67294),v=e(16993),u=e(63757),P=e.n(u),B=e(93874),h=e(67329),s=e(53190),T=e(98130),z=e(46677),a=e.n(z),V=e(39916),X=e(21010),J=e(9684),n=e(85893),S,$=m.ZP.div(S||(S=(0,c.Z)([`
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
`]))),q=function(d){var A=d.onDismiss,j=(0,X.YB)();return(0,n.jsx)($,{children:(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("h2",{children:(0,n.jsx)(s._H,{id:"pages.market.congratulations"})}),(0,n.jsx)("img",{src:P(),alt:"",className:"images"}),(0,n.jsx)("div",{className:"button",children:(0,n.jsx)(v.b,{text:j.formatMessage({id:"pages.market.open_box"}),onClick:function(){A(),J.m.push("/wallets/wallets")}})})]})})},Z,nn=m.ZP.div(Z||(Z=(0,c.Z)([`
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


`]))),en=function(){var d,A,j,y,W=(0,l.useState)(!1),N=(0,D.Z)(W,2),on=N[0],G=N[1],ln=(0,l.useContext)(V.tC),cn=ln.onPresent,_=(0,h.f)(B.w.nftBlindBox),U=_.request,gn=_.status,o=_.data,pn=(0,h.f)(B.w.nftBuy),H=pn.request,K=(0,h.f)(B.w.price),xn=K.request,Q=K.data,un=(0,s.YB)(),hn=(0,l.useCallback)((0,i.Z)(C().mark(function Y(){var w,R;return C().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return w=Math.floor(Math.random()*10),G(!0),E.next=4,H(o.data[w].id);case 4:if(R=E.sent,G(!1),!R.err){E.next=9;break}return U(),E.abrupt("return",O.default.error(R.err));case 9:cn((0,n.jsx)(q,{}));case 10:case"end":return E.stop()}},Y)})),[o,H,U]);return(0,l.useEffect)(function(){U(),xn()},[]),(0,n.jsxs)(nn,{children:[(0,n.jsx)("img",{src:P(),alt:"",className:"top"}),(0,n.jsx)("h2",{children:"CCP DOG NFT"}),(0,n.jsxs)("h3",{children:[(0,n.jsx)(s._H,{id:"pages.market.total_number"}),": ",o==null||(d=o.data)===null||d===void 0?void 0:d.box_count]}),(0,n.jsx)("div",{className:"inner",children:(o==null||(A=o.data)===null||A===void 0?void 0:A.begin_time)&&(0,n.jsx)("h4",{children:(0,n.jsx)(T.ZP,{date:(o==null||(j=o.data)===null||j===void 0?void 0:j.begin_time)*1e3,renderer:sn})})}),(0,n.jsx)("div",{className:"price",children:(0,n.jsxs)("h5",{children:[(0,n.jsx)("img",{src:a(),alt:""}),"299 CCP ",(0,n.jsxs)("span",{children:[" \u2248 $ ",(299*(1/(Q==null||(y=Q.data)===null||y===void 0?void 0:y[2].usdt_price))).toFixed()]})]})}),(0,n.jsx)("div",{children:on||gn==h.o.wait?(0,n.jsx)(t.Z,{}):(0,n.jsx)(v.b,{onClick:function(){return hn()},text:un.formatMessage({id:"component.nft_car.confirm_purchase"})})})]})},sn=function(d){var A=d.days,j=d.hours,y=d.minutes,W=d.seconds,N=d.completed;return N?(0,n.jsx)("span",{}):(0,n.jsxs)("span",{children:[A,"D:",j,"h:",y,"m:",W,"s"]})},an=e(18572),tn=e.n(an),k,rn=m.ZP.div(k||(k=(0,c.Z)([`
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
`]))),dn=function(){return(0,n.jsxs)(rn,{children:[(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("img",{src:tn(),alt:""}),(0,n.jsx)("h3",{children:(0,n.jsx)(s._H,{id:"pages.market.top_msg"})})]}),(0,n.jsx)("div",{className:"box",children:(0,n.jsxs)(f.Z,{gutter:48,children:[(0,n.jsx)(b.Z,{span:6,xs:24,sm:24,md:12,lg:10,children:(0,n.jsx)(en,{})}),(0,n.jsx)(b.Z,{span:6,xs:24,sm:24,md:12,lg:14,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.class"})}),(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.rarity"})}),(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.proportion"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.greyhound"})}),(0,n.jsx)("p",{children:"SSR"}),(0,n.jsx)("p",{children:"2%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.belgian_malinois"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"4%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.saluki"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"8%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.hungarian_vizsla"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"7%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.afghan_hound"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"9%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.whippet"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"10%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.jack_russell_terrier"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"13%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.dalmatian"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"17%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(s._H,{id:"pages.market.russian_wolfhound"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"20%"})]})]})})]})})]})}},67329:function(p,x,e){"use strict";e.d(x,{f:function(){return m},o:function(){return r}});var F=e(3182),f=e(2824),I=e(94043),b=e.n(I),c=e(67294),m=function(M){var O=(0,c.useState)(r.start),i=(0,f.Z)(O,2),D=i[0],g=i[1],C=(0,c.useState)(),l=(0,f.Z)(C,2),v=l[0],u=l[1],P=(0,c.useCallback)((0,F.Z)(b().mark(function B(){var h,s,T=arguments;return b().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,g(r.wait),a.next=4,M.apply(void 0,T);case 4:return h=a.sent,u(h),g(r.success),a.abrupt("return",h);case 10:return a.prev=10,a.t0=a.catch(0),s={err:a.t0.info},u(s),g(r.failure),a.abrupt("return",s);case 16:case"end":return a.stop()}},B,null,[[0,10]])})),[g,u]);return{status:D,request:P,data:v}},r;(function(t){t[t.start=0]="start",t[t.wait=1]="wait",t[t.success=2]="success",t[t.failure=3]="failure"})(r||(r={}))},46677:function(p){p.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},18572:function(p,x,e){p.exports=e.p+"static/mysterious.98c98ffc.png"},63757:function(p,x,e){p.exports=e.p+"static/mystery_header.ab029946.png"}}]);
