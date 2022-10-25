(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[464],{16993:function(A,b,e){"use strict";e.d(b,{b:function(){return S}});var z=e(57663),T=e(71577),Z=e(20310),M=e(67294),E=e(47416),l=e(85893),g,P=(0,E.ZP)(T.Z)(g||(g=(0,Z.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(m){var u=m.disabled;return u&&.5}),S=function(u){var I=u.text,N=u.block,B=N===void 0?!0:N,D=u.onClick,r=u.disabled,y=r===void 0?!1:r;return(0,l.jsx)(P,{type:"default",shape:"round",disabled:y,onClick:function(){y||D&&D()},size:"large",block:B,children:I})}},31853:function(A,b,e){"use strict";e.r(b),e.d(b,{default:function(){return In}});var z=e(13062),T=e(71230),Z=e(89032),M=e(15746),E=e(20310),l=e(47416),g=e(20228),P=e(11382),S=e(34669),m=e(54458),u=e(39428),I=e(34792),N=e(55026),B=e(3182),D=e(2824),r=e(67294),y=e(16993),w=e(63757),W=e.n(w),C=e(93874),F=e(67329),i=e(10908),c=e(98130),on=e(46677),ln=e.n(on),cn=e(31894),$=e(11849),gn=e(43581),pn=e(9684),un=e(49155),xn=e.n(un),n=e(85893),X,hn=l.ZP.div(X||(X=(0,E.Z)([`
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
`]))),mn=function(a){var d=a.onDismiss,s=a.img_url,p=(0,gn.YB)(),f=(0,r.useRef)(null),R=(0,r.useCallback)(function(o){f.current=o},[]),v=(0,r.useCallback)(function(o,x,k){f.current&&f.current((0,$.Z)((0,$.Z)({},x),{},{origin:{y:k.y,x:k.x},particleCount:Math.floor(200*o)}))},[]),U=(0,r.useCallback)(function(o,x){v(.25,{spread:26,startVelocity:55},{x:o,y:x}),v(.2,{spread:60},{x:o,y:x}),v(.35,{spread:100,decay:.91,scalar:.8},{x:o,y:x}),v(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2},{x:o,y:x}),v(.1,{spread:120,startVelocity:45},{x:o,y:x})},[v]);return(0,r.useEffect)(function(){setTimeout(function(){return U(Math.random(),Math.random())},600);var o=setInterval(function(){U(Math.random(),Math.random())},2e3);return function(){return clearTimeout(o)}},[]),(0,n.jsx)(hn,{children:(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)(xn(),{style:{width:"calc(100% + 40px)",height:"calc(100% + 40px)",position:"absolute",left:"-20px",top:"-20px",zIndex:"100"},className:"yourClassName",refConfetti:function(x){return R(x)}}),(0,n.jsx)("h2",{children:(0,n.jsx)(i._H,{id:"pages.market.congratulations"})}),(0,n.jsx)("div",{className:"images",children:(0,n.jsx)("img",{src:s,alt:""})}),(0,n.jsx)("div",{className:"button",children:(0,n.jsx)(y.b,{text:p.formatMessage({id:"pages.market.open_box"}),onClick:function(){d(),pn.m.push("/wallets/wallets")}})})]})})},J,vn=l.ZP.div(J||(J=(0,E.Z)([`
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
      //margin-right: 1%;
      flex: 3;

      &:first-child {
        //width: 22%;
        flex: 2;
        display: block;
        //margin-right: 1%;

      }

      &:last-child {
        flex: 5;
        margin-right: 0;
        //width: 47%;
      }
    }
  }

`]))),fn=function(){var a=(0,F.f)(C.w.nft_blindBox_progress),d=a.request,s=a.data;return(0,r.useEffect)(function(){d("")},[]),s?(s=s.data,(0,n.jsxs)(vn,{children:[(0,n.jsxs)("div",{className:"text_msg layput",children:[(0,n.jsxs)("p",{children:[s[0].price," ",s[0].name]}),(0,n.jsxs)("p",{className:"two",children:[s[1].price," ",s[1].name]}),(0,n.jsxs)("p",{children:[s[2].price," ",s[2].name]})]}),(0,n.jsxs)("div",{className:"bar",children:[(0,n.jsxs)("div",{className:"progres layput",children:[(0,n.jsx)(m.Z,{percent:(s[0].scale*100).toFixed(2)}),(0,n.jsx)(m.Z,{className:"two",percent:(s[1].scale*100).toFixed(2)}),(0,n.jsx)(m.Z,{percent:(s[2].scale*100).toFixed(2)})]}),(0,n.jsxs)("div",{className:"text_msg layput",children:[(0,n.jsx)("p",{children:(0,n.jsxs)("span",{children:[(s[0].scale*100).toFixed(2),"%"]})}),(0,n.jsxs)("p",{className:"two",children:[(s[1].scale*100).toFixed(2),"%"]}),(0,n.jsxs)("p",{children:[(s[2].scale*100).toFixed(2),"%"]})]})]})]})):(0,n.jsx)("span",{})},jn=e(82788),q,An=l.ZP.div(q||(q=(0,E.Z)([`
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
    h6{
      font-size: 14px;
      color: #7cd770;
      text-align: center;
      margin-top: 2px;
      font-weight: bold;
    }
  }

  .price {
    display: inline-block;
    margin: 0 auto 10px auto;
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
`]))),bn=function(a,d){var s={"M+":a.getMonth()+1,"d+":a.getDate(),"h+":a.getHours(),"m+":a.getMinutes(),"s+":a.getSeconds(),"q+":Math.floor((a.getMonth()+3)/3),S:a.getMilliseconds()};/(y+)/.test(d)&&(d=d.replace(RegExp.$1,(a.getFullYear()+"").substr(4-RegExp.$1.length)));for(var p in s)new RegExp("("+p+")").test(d)&&(d=d.replace(RegExp.$1,RegExp.$1.length==1?s[p]:("00"+s[p]).substr((""+s[p]).length)));return d},En=function(){var a,d,s,p,f,R,v,U=(0,r.useState)(!1),o=(0,D.Z)(U,2),x=o[0],k=o[1],Dn=(0,r.useState)(!1),en=(0,D.Z)(Dn,2),Pn=en[0],tn=en[1],Nn=(0,r.useContext)(cn.tC),Bn=Nn.onPresent,L=(0,F.f)(C.w.nftBlindBox),G=L.request,Zn=L.status,t=L.data,Fn=(0,F.f)(C.w.nftBuy),sn=Fn.request,an=(0,F.f)(C.w.price),Rn=an.request,Wn=an.data,Tn=(0,i.YB)(),rn=(0,r.useCallback)(function(){var h=(0,B.Z)((0,u.Z)().mark(function dn(K){var _,H,Y,V;return(0,u.Z)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return H=Math.floor(Math.random()*10),(t==null||(_=t.data)===null||_===void 0?void 0:_.box_count)<10&&(H=Math.floor(Math.random()*(t==null||(Y=t.data)===null||Y===void 0?void 0:Y.box_count))),K=="yes"?tn(!0):k(!0),O.next=5,sn(t.data[H].id,"yes",K);case 5:if(V=O.sent,K=="yes"?tn(!1):k(!1),!V.err){O.next=10;break}return G(),O.abrupt("return",N.default.error(V.err));case 10:return Bn((0,n.jsx)(mn,{img_url:t.data[H].img_url})),O.next=13,(0,jn.getInitialState)();case 13:case"end":return O.stop()}},dn)}));return function(dn){return h.apply(this,arguments)}}(),[t,sn,G,t==null||(a=t.data)===null||a===void 0?void 0:a.box_count]),kn=(0,r.useMemo)(function(){var h;return(t==null||(h=t.data)===null||h===void 0?void 0:h.begin_time)*1e3<Date.now()},[t]),j=(0,r.useMemo)(function(){var h;return(t==null||(h=t.data)===null||h===void 0?void 0:h.snapup_progress)||{}},[t]);return(0,r.useEffect)(function(){G(),Rn()},[]),(0,n.jsxs)(An,{children:[(0,n.jsx)("img",{src:W(),alt:"",className:"top"}),(0,n.jsx)("h2",{children:"CCP DOG NFT"}),(0,n.jsxs)("h3",{children:[(0,n.jsx)(i._H,{id:"pages.market.total_number"}),": ",j==null?void 0:j.number]}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"inner",children:[(t==null||(d=t.data)===null||d===void 0?void 0:d.begin_time)&&(0,n.jsx)("h4",{children:(0,n.jsx)(c.ZP,{date:(t==null||(s=t.data)===null||s===void 0?void 0:s.begin_time)*1e3,renderer:yn})}),(0,n.jsxs)("h5",{className:"bottom",children:[(0,n.jsx)(i._H,{id:"pages.market.rush_time"}),": ",(t==null||(p=t.data)===null||p===void 0?void 0:p.begin_time)&&bn(new Date((t==null||(f=t.data)===null||f===void 0?void 0:f.begin_time)*1e3),"yyyy-MM-dd hh:mm:ss")]}),(0,n.jsx)("h6",{children:t==null||(R=t.data)===null||R===void 0?void 0:R.synopsis})]}),(0,n.jsx)("div",{className:"price",children:(0,n.jsxs)("h5",{children:[(0,n.jsx)("img",{src:ln(),alt:""}),(j==null?void 0:j.price)||"--"]})}),(0,n.jsx)(m.Z,{percent:((j==null?void 0:j.scale)*100).toFixed(2)}),(0,n.jsx)("div",{children:Pn?(0,n.jsx)(P.Z,{}):(0,n.jsx)(y.b,{disabled:(t==null||(v=t.data)===null||v===void 0?void 0:v.box_count)==0,onClick:function(){return rn("yes")},text:"\u6436\u8CFC\u76F2\u76D2"})}),(0,n.jsx)("div",{style:{height:"3px",width:"100%",margin:"20px 0",background:"#fff"}})]}),(0,n.jsx)("div",{children:(0,n.jsx)(fn,{})}),(0,n.jsx)("div",{children:x?(0,n.jsx)(P.Z,{}):(0,n.jsx)(y.b,{onClick:function(){return rn("no")},text:Tn.formatMessage({id:"component.nft_car.buy_blind"})})})]})},yn=function(a){var d=a.days,s=a.hours,p=a.minutes,f=a.seconds,R=a.completed;return(0,n.jsxs)("span",{children:[d,"D:",s,"h:",p,"m:",f,"s"]})},Cn=e(18572),On=e.n(Cn),nn,Mn=l.ZP.div(nn||(nn=(0,E.Z)([`
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
`]))),In=function(){return(0,n.jsxs)(Mn,{children:[(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("img",{src:On(),alt:""}),(0,n.jsx)("h3",{children:(0,n.jsx)(i._H,{id:"pages.market.top_msg"})})]}),(0,n.jsx)("div",{className:"box",children:(0,n.jsxs)(T.Z,{gutter:48,children:[(0,n.jsx)(M.Z,{span:6,xs:24,sm:24,md:12,lg:10,children:(0,n.jsx)(En,{})}),(0,n.jsx)(M.Z,{span:6,xs:24,sm:24,md:12,lg:14,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.class"})}),(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.rarity"})}),(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.proportion"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.greyhound"})}),(0,n.jsx)("p",{children:"SSR"}),(0,n.jsx)("p",{children:"2%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.belgian_malinois"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"4%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.saluki"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"8%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.hungarian_vizsla"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"7%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.russian_wolfhound"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"9%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.whippet"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"10%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.jack_russell_terrier"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"13%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.dalmatian"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"22%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(i._H,{id:"pages.market.afghan_hound"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"25%"})]})]})})]})})]})}},67329:function(A,b,e){"use strict";e.d(b,{f:function(){return E},o:function(){return l}});var z=e(39428),T=e(3182),Z=e(2824),M=e(67294),E=function(P){var S=(0,M.useState)(l.start),m=(0,Z.Z)(S,2),u=m[0],I=m[1],N=(0,M.useState)(),B=(0,Z.Z)(N,2),D=B[0],r=B[1],y=(0,M.useCallback)((0,T.Z)((0,z.Z)().mark(function w(){var W,C,F=arguments;return(0,z.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,I(l.wait),c.next=4,P.apply(void 0,F);case 4:return W=c.sent,r(W),I(l.success),c.abrupt("return",W);case 10:return c.prev=10,c.t0=c.catch(0),C={err:c.t0.info},r(C),I(l.failure),c.abrupt("return",C);case 16:case"end":return c.stop()}},w,null,[[0,10]])})),[I,r]);return{status:u,request:y,data:D}},l;(function(g){g[g.start=0]="start",g[g.wait=1]="wait",g[g.success=2]="success",g[g.failure=3]="failure"})(l||(l={}))},46677:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},18572:function(A,b,e){A.exports=e.p+"static/mysterious.98c98ffc.png"},63757:function(A,b,e){A.exports=e.p+"static/mystery_header.ab029946.png"}}]);
