(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[464],{79508:function(F,D,r){"use strict";r.d(D,{Z:function(){return c}});var u=r(28991),R=r(67294),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},C=W,A=r(27029),N=function(a,s){return R.createElement(A.Z,(0,u.Z)((0,u.Z)({},a),{},{ref:s,icon:C}))};N.displayName="CheckOutlined";var c=R.forwardRef(N)},80638:function(){},16993:function(F,D,r){"use strict";r.d(D,{b:function(){return a}});var u=r(57663),R=r(71577),W=r(20310),C=r(67294),A=r(47416),N=r(85893),c,d=(0,A.ZP)(R.Z)(c||(c=(0,W.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(s){var o=s.disabled;return o&&.5}),a=function(o){var B=o.text,l=o.block,L=l===void 0?!0:l,E=o.onClick,i=o.disabled,g=i===void 0?!1:i;return(0,N.jsx)(d,{type:"default",shape:"round",disabled:g,onClick:function(){g||E&&E()},size:"large",block:L,children:B})}},31853:function(F,D,r){"use strict";r.r(D),r.d(D,{default:function(){return X}});var u=r(13062),R=r(71230),W=r(89032),C=r(15746),A=r(20310),N=r(47416),c=r(20228),d=r(11382),a=r(34792),s=r(55026),o=r(3182),B=r(2824),l=r(94043),L=r.n(l),E=r(67294),i=r(16993),g=r(63757),G=r.n(g),I=r(93874),O=r(67329),v=r(28219),ee=r(46677),ie=r.n(ee),Z=r(31894),te=r(8870),re=r(43581),V=r(9684),ne=r(49155),de=r.n(ne),t=r(85893),Y,oe=N.ZP.div(Y||(Y=(0,A.Z)([`
  position: relative;

  .top {

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
    z-index: 10;
    display: block;
    width: 300px;
    height: 300px;
    margin: 0 auto;

    img {
      display: block;
      width: 100%;
      height: 100%;
      filter: drop-shadow(0px 0px 20px yellow);
      animation: change .5s;
    }

    @keyframes change {
      from {
        transform: scale(0);
        opacity: 0
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  .button {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    z-index: 110;
    position: relative;

    a {
    }
  }
`]))),n=function(j){var P=j.onDismiss,m=j.img_url,S=(0,re.YB)(),H=(0,E.useRef)(null),q=(0,E.useCallback)(function(K){H.current=K},[]),Q=(0,E.useCallback)(function(K,z,se){H.current&&H.current((0,te.Z)((0,te.Z)({},z),{},{origin:{y:se.y,x:se.x},particleCount:Math.floor(200*K)}))},[]),ue=(0,E.useCallback)(function(K,z){Q(.25,{spread:26,startVelocity:55},{x:K,y:z}),Q(.2,{spread:60},{x:K,y:z}),Q(.35,{spread:100,decay:.91,scalar:.8},{x:K,y:z}),Q(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2},{x:K,y:z}),Q(.1,{spread:120,startVelocity:45},{x:K,y:z})},[Q]);return(0,E.useEffect)(function(){setTimeout(function(){return ue(Math.random(),Math.random())},600);var K=setInterval(function(){ue(Math.random(),Math.random())},2e3);return function(){return clearTimeout(K)}},[]),(0,t.jsx)(oe,{children:(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)(de(),{style:{width:"calc(100% + 40px)",height:"calc(100% + 40px)",position:"absolute",left:"-20px",top:"-20px",zIndex:"100"},className:"yourClassName",refConfetti:function(z){return q(z)}}),(0,t.jsx)("h2",{children:(0,t.jsx)(v._H,{id:"pages.market.congratulations"})}),(0,t.jsx)("div",{className:"images",children:(0,t.jsx)("img",{src:m,alt:""})}),(0,t.jsx)("div",{className:"button",children:(0,t.jsx)(i.b,{text:S.formatMessage({id:"pages.market.open_box"}),onClick:function(){P(),V.m.push("/wallets/wallets")}})})]})})},e=r(34669),h=r(54458),_,p=N.ZP.div(_||(_=(0,A.Z)([`
  margin-bottom: 20px;

  .ant-progress-show-info .ant-progress-outer {
    padding-right: 0;
    margin-right: 0;
    line-height: 1;
    font-size: 12px;
  }


  .ant-progress-inner, .ant-progress-success-bg, .ant-progress-bg {
    border-radius: 0;
    height: 20px !important;
    opacity: .8;
  }

  .ant-progress-bg {
    background-color: #1890ff;
  }

  .ant-progress-line {
    line-height: 1;
    font-size: 0;
  }

  .ant-progress-text {
    display: none;
  }

  .text_msg {
    p {
      font-size: 10px;
      color: rgb(80, 95, 121);
      display: flex;
      justify-content: center;
      margin-bottom: 0;

      span {
        font-size: 10px;
      }
    }

    p:first-child {
      display: block;
    }


  }

  .bar {
    position: relative;
    margin: 5px 0;

    .progres {
      display: flex;
    }

    .text_msg {
      width: 100%;
      position: absolute;
      top: 0;
      bottom: 0;

      > p {
        justify-content: center;
        padding-right: 10px;
        align-items: center;

        &:first-child {
          display: block;
        }
      }

    }
  }

  .layput {
    display: flex;
    //justify-content: space-between;


    > div, > p {

      width: 29%;
      margin-right: 1%;
      flex: 3;

      &:first-child {
        //width: 22%;
        flex: 2;
        display: block;
        margin-right: 1%;

      }

      &:last-child {
        flex: 5;
        margin-right: 0;
        //width: 47%;
      }
    }
  }

`]))),b=function(){var j=(0,O.f)(I.w.nft_blindBox_progress),P=j.request,m=j.data;return(0,E.useEffect)(function(){P("")},[]),m?(m=m.data,(0,t.jsxs)(p,{children:[(0,t.jsxs)("div",{className:"text_msg layput",children:[(0,t.jsxs)("p",{children:[m[0].price," ",m[0].name]}),(0,t.jsxs)("p",{className:"two",children:[m[1].price," ",m[1].name]}),(0,t.jsxs)("p",{children:[m[2].price," ",m[2].name]})]}),(0,t.jsxs)("div",{className:"bar",children:[(0,t.jsxs)("div",{className:"progres layput",children:[(0,t.jsx)(h.Z,{percent:m[0].scale*100}),(0,t.jsx)(h.Z,{className:"two",percent:m[1].scale*100}),(0,t.jsx)(h.Z,{percent:m[2].scale*100})]}),(0,t.jsxs)("div",{className:"text_msg layput",children:[(0,t.jsx)("p",{children:(0,t.jsxs)("span",{children:[m[0].scale*100,"%"]})}),(0,t.jsxs)("p",{className:"two",children:[m[1].scale*100,"%"]}),(0,t.jsxs)("p",{children:[m[2].scale*100,"%"]})]})]})]})):(0,t.jsx)("span",{})},x=r(82788),f,y=N.ZP.div(f||(f=(0,A.Z)([`
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
      font-size: 12px;
      margin-top: 5px;
      color: #505f79;
    }
  }

  .price {
    display: inline-block;
    margin: 0 auto 20px auto;
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
`]))),T=function(j,P){var m={"M+":j.getMonth()+1,"d+":j.getDate(),"h+":j.getHours(),"m+":j.getMinutes(),"s+":j.getSeconds(),"q+":Math.floor((j.getMonth()+3)/3),S:j.getMilliseconds()};/(y+)/.test(P)&&(P=P.replace(RegExp.$1,(j.getFullYear()+"").substr(4-RegExp.$1.length)));for(var S in m)new RegExp("("+S+")").test(P)&&(P=P.replace(RegExp.$1,RegExp.$1.length==1?m[S]:("00"+m[S]).substr((""+m[S]).length)));return P},M=function(){var j,P,m,S=(0,E.useState)(!1),H=(0,B.Z)(S,2),q=H[0],Q=H[1],ue=(0,E.useContext)(Z.tC),K=ue.onPresent,z=(0,O.f)(I.w.nftBlindBox),se=z.request,fe=z.status,U=z.data,pe=(0,O.f)(I.w.nftBuy),_e=pe.request,xe=(0,O.f)(I.w.price),Ee=xe.request,Oe=xe.data,be=(0,v.YB)(),Ce=(0,E.useCallback)((0,o.Z)(L().mark(function ye(){var ge,he,me,ve;return L().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:return he=Math.floor(Math.random()*10),(U==null||(ge=U.data)===null||ge===void 0?void 0:ge.box_count)<10&&(he=Math.floor(Math.random()*(U==null||(me=U.data)===null||me===void 0?void 0:me.box_count))),Q(!0),ce.next=5,_e(U.data[he].id,"yes");case 5:if(ve=ce.sent,Q(!1),!ve.err){ce.next=10;break}return se(),ce.abrupt("return",s.default.error(ve.err));case 10:return K((0,t.jsx)(n,{img_url:U.data[he].img_url})),ce.next=13,(0,x.getInitialState)();case 13:case"end":return ce.stop()}},ye)})),[U,_e,se,U==null||(j=U.data)===null||j===void 0?void 0:j.box_count]);return(0,E.useEffect)(function(){se(),Ee()},[]),(0,t.jsxs)(y,{children:[(0,t.jsx)("img",{src:G(),alt:"",className:"top"}),(0,t.jsx)("h2",{children:"CCP DOG NFT"}),(0,t.jsxs)("h3",{children:[(0,t.jsx)(v._H,{id:"pages.market.total_number"}),": ",U==null||(P=U.data)===null||P===void 0?void 0:P.box_count]}),(0,t.jsx)("div",{className:"price",children:(0,t.jsxs)("h5",{children:[(0,t.jsx)("img",{src:ie(),alt:""}),"699 CCP"]})}),(0,t.jsx)("div",{children:(0,t.jsx)(b,{})}),(0,t.jsx)("div",{children:q||fe==O.o.wait?(0,t.jsx)(d.Z,{}):(0,t.jsx)(i.b,{disabled:(U==null||(m=U.data)===null||m===void 0?void 0:m.box_count)==0,onClick:function(){return Ce()},text:be.formatMessage({id:"component.nft_car.confirm_purchase"})})})]})},$=function(j){var P=j.days,m=j.hours,S=j.minutes,H=j.seconds,q=j.completed;return _jsxs("span",{children:[P,"D:",m,"h:",S,"m:",H,"s"]})},k=r(18572),w=r.n(k),ae,le=N.ZP.div(ae||(ae=(0,A.Z)([`
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
`]))),X=function(){return(0,t.jsxs)(le,{children:[(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)("img",{src:w(),alt:""}),(0,t.jsx)("h3",{children:(0,t.jsx)(v._H,{id:"pages.market.top_msg"})})]}),(0,t.jsx)("div",{className:"box",children:(0,t.jsxs)(R.Z,{gutter:48,children:[(0,t.jsx)(C.Z,{span:6,xs:24,sm:24,md:12,lg:10,children:(0,t.jsx)(M,{})}),(0,t.jsx)(C.Z,{span:6,xs:24,sm:24,md:12,lg:14,children:(0,t.jsxs)("div",{className:"right",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.class"})}),(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.rarity"})}),(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.proportion"})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.greyhound"})}),(0,t.jsx)("p",{children:"SSR"}),(0,t.jsx)("p",{children:"2%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.belgian_malinois"})}),(0,t.jsx)("p",{children:"SR"}),(0,t.jsx)("p",{children:"4%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.saluki"})}),(0,t.jsx)("p",{children:"SR"}),(0,t.jsx)("p",{children:"8%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.hungarian_vizsla"})}),(0,t.jsx)("p",{children:"SR"}),(0,t.jsx)("p",{children:"7%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.afghan_hound"})}),(0,t.jsx)("p",{children:"R"}),(0,t.jsx)("p",{children:"9%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.whippet"})}),(0,t.jsx)("p",{children:"R"}),(0,t.jsx)("p",{children:"10%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.jack_russell_terrier"})}),(0,t.jsx)("p",{children:"N"}),(0,t.jsx)("p",{children:"13%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.dalmatian"})}),(0,t.jsx)("p",{children:"N"}),(0,t.jsx)("p",{children:"22%"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(0,t.jsx)(v._H,{id:"pages.market.russian_wolfhound"})}),(0,t.jsx)("p",{children:"N"}),(0,t.jsx)("p",{children:"25%"})]})]})})]})})]})}},67329:function(F,D,r){"use strict";r.d(D,{f:function(){return N},o:function(){return c}});var u=r(3182),R=r(2824),W=r(94043),C=r.n(W),A=r(67294),N=function(a){var s=(0,A.useState)(c.start),o=(0,R.Z)(s,2),B=o[0],l=o[1],L=(0,A.useState)(),E=(0,R.Z)(L,2),i=E[0],g=E[1],G=(0,A.useCallback)((0,u.Z)(C().mark(function I(){var O,v,ee=arguments;return C().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.prev=0,l(c.wait),Z.next=4,a.apply(void 0,ee);case 4:return O=Z.sent,g(O),l(c.success),Z.abrupt("return",O);case 10:return Z.prev=10,Z.t0=Z.catch(0),v={err:Z.t0.info},g(v),l(c.failure),Z.abrupt("return",v);case 16:case"end":return Z.stop()}},I,null,[[0,10]])})),[l,g]);return{status:B,request:G,data:i}},c;(function(d){d[d.start=0]="start",d[d.wait=1]="wait",d[d.success=2]="success",d[d.failure=3]="failure"})(c||(c={}))},46677:function(F){F.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},18572:function(F,D,r){F.exports=r.p+"static/mysterious.98c98ffc.png"},63757:function(F,D,r){F.exports=r.p+"static/mystery_header.ab029946.png"},15746:function(F,D,r){"use strict";var u=r(21584);D.Z=u.Z},89032:function(F,D,r){"use strict";var u=r(38663),R=r.n(u),W=r(6999)},99134:function(F,D,r){"use strict";var u=r(67294),R=(0,u.createContext)({});D.Z=R},21584:function(F,D,r){"use strict";var u=r(96156),R=r(22122),W=r(90484),C=r(67294),A=r(94184),N=r.n(A),c=r(99134),d=r(86032),a=function(l,L){var E={};for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&L.indexOf(i)<0&&(E[i]=l[i]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var g=0,i=Object.getOwnPropertySymbols(l);g<i.length;g++)L.indexOf(i[g])<0&&Object.prototype.propertyIsEnumerable.call(l,i[g])&&(E[i[g]]=l[i[g]]);return E};function s(l){return typeof l=="number"?"".concat(l," ").concat(l," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(l)?"0 0 ".concat(l):l}var o=["xs","sm","md","lg","xl","xxl"],B=C.forwardRef(function(l,L){var E,i=C.useContext(d.E_),g=i.getPrefixCls,G=i.direction,I=C.useContext(c.Z),O=I.gutter,v=I.wrap,ee=I.supportFlexGap,ie=l.prefixCls,Z=l.span,te=l.order,re=l.offset,V=l.push,ne=l.pull,de=l.className,t=l.children,Y=l.flex,oe=l.style,n=a(l,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),e=g("col",ie),h={};o.forEach(function(f){var y,T={},M=l[f];typeof M=="number"?T.span=M:(0,W.Z)(M)==="object"&&(T=M||{}),delete n[f],h=(0,R.Z)((0,R.Z)({},h),(y={},(0,u.Z)(y,"".concat(e,"-").concat(f,"-").concat(T.span),T.span!==void 0),(0,u.Z)(y,"".concat(e,"-").concat(f,"-order-").concat(T.order),T.order||T.order===0),(0,u.Z)(y,"".concat(e,"-").concat(f,"-offset-").concat(T.offset),T.offset||T.offset===0),(0,u.Z)(y,"".concat(e,"-").concat(f,"-push-").concat(T.push),T.push||T.push===0),(0,u.Z)(y,"".concat(e,"-").concat(f,"-pull-").concat(T.pull),T.pull||T.pull===0),(0,u.Z)(y,"".concat(e,"-rtl"),G==="rtl"),y))});var _=N()(e,(E={},(0,u.Z)(E,"".concat(e,"-").concat(Z),Z!==void 0),(0,u.Z)(E,"".concat(e,"-order-").concat(te),te),(0,u.Z)(E,"".concat(e,"-offset-").concat(re),re),(0,u.Z)(E,"".concat(e,"-push-").concat(V),V),(0,u.Z)(E,"".concat(e,"-pull-").concat(ne),ne),E),de,h),p={};if(O&&O[0]>0){var b=O[0]/2;p.paddingLeft=b,p.paddingRight=b}if(O&&O[1]>0&&!ee){var x=O[1]/2;p.paddingTop=x,p.paddingBottom=x}return Y&&(p.flex=s(Y),v===!1&&!p.minWidth&&(p.minWidth=0)),C.createElement("div",(0,R.Z)({},n,{style:(0,R.Z)((0,R.Z)({},p),oe),className:_,ref:L}),t)});B.displayName="Col",D.Z=B},92820:function(F,D,r){"use strict";var u=r(22122),R=r(96156),W=r(90484),C=r(28481),A=r(67294),N=r(94184),c=r.n(N),d=r(86032),a=r(99134),s=r(93355),o=r(24308),B=r(98082),l=function(g,G){var I={};for(var O in g)Object.prototype.hasOwnProperty.call(g,O)&&G.indexOf(O)<0&&(I[O]=g[O]);if(g!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,O=Object.getOwnPropertySymbols(g);v<O.length;v++)G.indexOf(O[v])<0&&Object.prototype.propertyIsEnumerable.call(g,O[v])&&(I[O[v]]=g[O[v]]);return I},L=(0,s.b)("top","middle","bottom","stretch"),E=(0,s.b)("start","end","center","space-around","space-between"),i=A.forwardRef(function(g,G){var I,O=g.prefixCls,v=g.justify,ee=g.align,ie=g.className,Z=g.style,te=g.children,re=g.gutter,V=re===void 0?0:re,ne=g.wrap,de=l(g,["prefixCls","justify","align","className","style","children","gutter","wrap"]),t=A.useContext(d.E_),Y=t.getPrefixCls,oe=t.direction,n=A.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),e=(0,C.Z)(n,2),h=e[0],_=e[1],p=(0,B.Z)(),b=A.useRef(V);A.useEffect(function(){var j=o.ZP.subscribe(function(P){var m=b.current||0;(!Array.isArray(m)&&(0,W.Z)(m)==="object"||Array.isArray(m)&&((0,W.Z)(m[0])==="object"||(0,W.Z)(m[1])==="object"))&&_(P)});return function(){return o.ZP.unsubscribe(j)}},[]);var x=function(){var P=[0,0],m=Array.isArray(V)?V:[V,0];return m.forEach(function(S,H){if((0,W.Z)(S)==="object")for(var q=0;q<o.c4.length;q++){var Q=o.c4[q];if(h[Q]&&S[Q]!==void 0){P[H]=S[Q];break}}else P[H]=S||0}),P},f=Y("row",O),y=x(),T=c()(f,(I={},(0,R.Z)(I,"".concat(f,"-no-wrap"),ne===!1),(0,R.Z)(I,"".concat(f,"-").concat(v),v),(0,R.Z)(I,"".concat(f,"-").concat(ee),ee),(0,R.Z)(I,"".concat(f,"-rtl"),oe==="rtl"),I),ie),M={},$=y[0]>0?y[0]/-2:void 0,k=y[1]>0?y[1]/-2:void 0;if($&&(M.marginLeft=$,M.marginRight=$),p){var w=(0,C.Z)(y,2);M.rowGap=w[1]}else k&&(M.marginTop=k,M.marginBottom=k);var ae=(0,C.Z)(y,2),le=ae[0],X=ae[1],J=A.useMemo(function(){return{gutter:[le,X],wrap:ne,supportFlexGap:p}},[le,X,ne,p]);return A.createElement(a.Z.Provider,{value:J},A.createElement("div",(0,u.Z)({},de,{className:T,style:(0,u.Z)((0,u.Z)({},M),Z),ref:G}),te))});i.displayName="Row",D.Z=i},6999:function(F,D,r){"use strict";var u=r(38663),R=r.n(u),W=r(80638),C=r.n(W)},71230:function(F,D,r){"use strict";var u=r(92820);D.Z=u.Z},13062:function(F,D,r){"use strict";var u=r(38663),R=r.n(u),W=r(6999)},22439:function(F,D,r){"use strict";r.r(D),r.d(D,{create:function(){return R}});var u={};(function W(C,A,N,c){var d=!!(C.Worker&&C.Blob&&C.Promise&&C.OffscreenCanvas&&C.OffscreenCanvasRenderingContext2D&&C.HTMLCanvasElement&&C.HTMLCanvasElement.prototype.transferControlToOffscreen&&C.URL&&C.URL.createObjectURL);function a(){}function s(n){var e=A.exports.Promise,h=e!==void 0?e:C.Promise;return typeof h=="function"?new h(n):(n(a,a),null)}var o=function(){var n=Math.floor(1e3/60),e,h,_={},p=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(b){var x=Math.random();return _[x]=requestAnimationFrame(function f(y){p===y||p+n-1<y?(p=y,delete _[x],b()):_[x]=requestAnimationFrame(f)}),x},h=function(b){_[b]&&cancelAnimationFrame(_[b])}):(e=function(b){return setTimeout(b,n)},h=function(b){return clearTimeout(b)}),{frame:e,cancel:h}}(),B=function(){var n,e,h={};function _(p){function b(x,f){p.postMessage({options:x||{},callback:f})}p.init=function(f){var y=f.transferControlToOffscreen();p.postMessage({canvas:y},[y])},p.fire=function(f,y,T){if(e)return b(f,null),e;var M=Math.random().toString(36).slice(2);return e=s(function($){function k(w){w.data.callback===M&&(delete h[M],p.removeEventListener("message",k),e=null,T(),$())}p.addEventListener("message",k),b(f,M),h[M]=k.bind(null,{data:{callback:M}})}),e},p.reset=function(){p.postMessage({reset:!0});for(var f in h)h[f](),delete h[f]}}return function(){if(n)return n;if(!N&&d){var p=["var CONFETTI, SIZE = {}, module = {};","("+W.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{n=new Worker(URL.createObjectURL(new Blob([p])))}catch(b){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",b),null}_(n)}return n}}(),l={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function L(n,e){return e?e(n):n}function E(n){return n!=null}function i(n,e,h){return L(n&&E(n[e])?n[e]:l[e],h)}function g(n){return n<0?0:Math.floor(n)}function G(n,e){return Math.floor(Math.random()*(e-n))+n}function I(n){return parseInt(n,16)}function O(n){return n.map(v)}function v(n){var e=String(n).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:I(e.substring(0,2)),g:I(e.substring(2,4)),b:I(e.substring(4,6))}}function ee(n){var e=i(n,"origin",Object);return e.x=i(e,"x",Number),e.y=i(e,"y",Number),e}function ie(n){n.width=document.documentElement.clientWidth,n.height=document.documentElement.clientHeight}function Z(n){var e=n.getBoundingClientRect();n.width=e.width,n.height=e.height}function te(n){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=n,e}function re(n,e,h,_,p,b,x,f,y){n.save(),n.translate(e,h),n.rotate(b),n.scale(_,p),n.arc(0,0,1,x,f,y),n.restore()}function V(n){var e=n.angle*(Math.PI/180),h=n.spread*(Math.PI/180);return{x:n.x,y:n.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:n.startVelocity*.5+Math.random()*n.startVelocity,angle2D:-e+(.5*h-Math.random()*h),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:n.color,shape:n.shape,tick:0,totalTicks:n.ticks,decay:n.decay,drift:n.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:n.gravity*3,ovalScalar:.6,scalar:n.scalar}}function ne(n,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var h=e.tick++/e.totalTicks,_=e.x+e.random*e.tiltCos,p=e.y+e.random*e.tiltSin,b=e.wobbleX+e.random*e.tiltCos,x=e.wobbleY+e.random*e.tiltSin;return n.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-h)+")",n.beginPath(),e.shape==="circle"?n.ellipse?n.ellipse(e.x,e.y,Math.abs(b-_)*e.ovalScalar,Math.abs(x-p)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):re(n,e.x,e.y,Math.abs(b-_)*e.ovalScalar,Math.abs(x-p)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(n.moveTo(Math.floor(e.x),Math.floor(e.y)),n.lineTo(Math.floor(e.wobbleX),Math.floor(p)),n.lineTo(Math.floor(b),Math.floor(x)),n.lineTo(Math.floor(_),Math.floor(e.wobbleY))),n.closePath(),n.fill(),e.tick<e.totalTicks}function de(n,e,h,_,p){var b=e.slice(),x=n.getContext("2d"),f,y,T=s(function(M){function $(){f=y=null,x.clearRect(0,0,_.width,_.height),p(),M()}function k(){N&&!(_.width===c.width&&_.height===c.height)&&(_.width=n.width=c.width,_.height=n.height=c.height),!_.width&&!_.height&&(h(n),_.width=n.width,_.height=n.height),x.clearRect(0,0,_.width,_.height),b=b.filter(function(w){return ne(x,w)}),b.length?f=o.frame(k):$()}f=o.frame(k),y=$});return{addFettis:function(M){return b=b.concat(M),T},canvas:n,promise:T,reset:function(){f&&o.cancel(f),y&&y()}}}function t(n,e){var h=!n,_=!!i(e||{},"resize"),p=i(e,"disableForReducedMotion",Boolean),b=d&&!!i(e||{},"useWorker"),x=b?B():null,f=h?ie:Z,y=n&&x?!!n.__confetti_initialized:!1,T=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,M;function $(w,ae,le){for(var X=i(w,"particleCount",g),J=i(w,"angle",Number),j=i(w,"spread",Number),P=i(w,"startVelocity",Number),m=i(w,"decay",Number),S=i(w,"gravity",Number),H=i(w,"drift",Number),q=i(w,"colors",O),Q=i(w,"ticks",Number),ue=i(w,"shapes"),K=i(w,"scalar"),z=ee(w),se=X,fe=[],U=n.width*z.x,pe=n.height*z.y;se--;)fe.push(V({x:U,y:pe,angle:J,spread:j,startVelocity:P,color:q[se%q.length],shape:ue[G(0,ue.length)],ticks:Q,decay:m,gravity:S,drift:H,scalar:K}));return M?M.addFettis(fe):(M=de(n,fe,f,ae,le),M.promise)}function k(w){var ae=p||i(w,"disableForReducedMotion",Boolean),le=i(w,"zIndex",Number);if(ae&&T)return s(function(P){P()});h&&M?n=M.canvas:h&&!n&&(n=te(le),document.body.appendChild(n)),_&&!y&&f(n);var X={width:n.width,height:n.height};x&&!y&&x.init(n),y=!0,x&&(n.__confetti_initialized=!0);function J(){if(x){var P={getBoundingClientRect:function(){if(!h)return n.getBoundingClientRect()}};f(P),x.postMessage({resize:{width:P.width,height:P.height}});return}X.width=X.height=null}function j(){M=null,_&&C.removeEventListener("resize",J),h&&n&&(document.body.removeChild(n),n=null,y=!1)}return _&&C.addEventListener("resize",J,!1),x?x.fire(w,X,j):$(w,X,j)}return k.reset=function(){x&&x.reset(),M&&M.reset()},k}var Y;function oe(){return Y||(Y=t(null,{useWorker:!0,resize:!0})),Y}A.exports=function(){return oe().apply(this,arguments)},A.exports.reset=function(){oe().reset()},A.exports.create=t})(function(){return typeof window!="undefined"?window:typeof self!="undefined"?self:this||{}}(),u,!1),D.default=u.exports;var R=u.exports.create},49155:function(F,D,r){"use strict";var u=this&&this.__extends||function(){var c=function(d,a){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,o){s.__proto__=o}||function(s,o){for(var B in o)Object.prototype.hasOwnProperty.call(o,B)&&(s[B]=o[B])},c(d,a)};return function(d,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");c(d,a);function s(){this.constructor=d}d.prototype=a===null?Object.create(a):(s.prototype=a.prototype,new s)}}(),R=this&&this.__rest||function(c,d){var a={};for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&d.indexOf(s)<0&&(a[s]=c[s]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(c);o<s.length;o++)d.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(c,s[o])&&(a[s[o]]=c[s[o]]);return a},W=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(D,"__esModule",{value:!0});var C=W(r(22439)),A=W(r(67294)),N=function(c){u(d,c);function d(a){var s=c.call(this,a)||this;return s.refCanvas=A.default.createRef(),s.confetti=null,s}return d.prototype.componentDidMount=function(){if(!!this.refCanvas.current){var a=this.props,s=a.resize,o=a.useWorker,B={resize:typeof s=="undefined"?!0:s,useWorker:typeof o=="undefined"?!0:o};this.confetti=C.default.create(this.refCanvas.current,B),this.setRefConfetti()}},d.prototype.componentDidUpdate=function(a){var s=this.props,o=s.fire,B=s.reset,l=!!o,L=o!==a.fire;l&&L&&this.fireConfetti();var E=!!B,i=B!==a.reset;E&&i&&this.resetConfetti()},d.prototype.componentWillUnmount=function(){this.unsetRefConfetti()},d.prototype.setRefConfetti=function(){var a=this.props.refConfetti;a&&a(this.confetti)},d.prototype.unsetRefConfetti=function(){var a=this.props.refConfetti;a&&a(null)},d.prototype.fireConfetti=function(){if(!!this.confetti){var a=this.props,s=a.onFire,o=a.onDecay,B=a.onReset,l=a.className,L=a.style,E=a.width,i=a.height,g=a.refConfetti,G=a.fire,I=a.reset,O=R(a,["onFire","onDecay","onReset","className","style","width","height","refConfetti","fire","reset"]);s&&s();var v=this.confetti(O);v&&v.then(function(){o&&o()})}},d.prototype.resetConfetti=function(){if(!!this.confetti){this.confetti.reset();var a=this.props.onReset;a&&a()}},d.prototype.render=function(){var a=this.props,s=a.style,o=a.className,B=a.width,l=a.height;return A.default.createElement("canvas",{ref:this.refCanvas,style:s,className:o,width:B,height:l})},d}(A.default.Component);D.default=N}}]);
