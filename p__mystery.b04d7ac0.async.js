(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[464],{16993:function(A,E,e){"use strict";e.d(E,{b:function(){return W}});var Z=e(57663),M=e(71577),T=e(20310),D=e(67294),h=e(47416),b=e(85893),u,c=(0,h.ZP)(M.Z)(u||(u=(0,T.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(I){var x=I.disabled;return x&&.5}),W=function(x){var R=x.text,v=x.block,P=v===void 0?!0:v,d=x.onClick,O=x.disabled,y=O===void 0?!1:O;return(0,b.jsx)(c,{type:"default",shape:"round",disabled:y,onClick:function(){y||d&&d()},size:"large",block:P,children:R})}},31853:function(A,E,e){"use strict";e.r(E),e.d(E,{default:function(){return yn}});var Z=e(13062),M=e(71230),T=e(89032),D=e(15746),h=e(20310),b=e(47416),u=e(20228),c=e(11382),W=e(34792),I=e(55026),x=e(3182),R=e(2824),v=e(94043),P=e.n(v),d=e(67294),O=e(16993),y=e(63757),z=e.n(y),N=e(93874),f=e(67329),r=e(28219),S=e(98130),V=e(46677),l=e.n(V),rn=e(31894),$=e(8870),dn=e(43581),on=e(9684),ln=e(49155),cn=e.n(ln),n=e(85893),X,gn=b.ZP.div(X||(X=(0,h.Z)([`
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
`]))),pn=function(s){var i=s.onDismiss,a=s.img_url,g=(0,dn.YB)(),j=(0,d.useRef)(null),B=(0,d.useCallback)(function(o){j.current=o},[]),m=(0,d.useCallback)(function(o,p,_){j.current&&j.current((0,$.Z)((0,$.Z)({},p),{},{origin:{y:_.y,x:_.x},particleCount:Math.floor(200*o)}))},[]),F=(0,d.useCallback)(function(o,p){m(.25,{spread:26,startVelocity:55},{x:o,y:p}),m(.2,{spread:60},{x:o,y:p}),m(.35,{spread:100,decay:.91,scalar:.8},{x:o,y:p}),m(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2},{x:o,y:p}),m(.1,{spread:120,startVelocity:45},{x:o,y:p})},[m]);return(0,d.useEffect)(function(){setTimeout(function(){return F(Math.random(),Math.random())},600);var o=setInterval(function(){F(Math.random(),Math.random())},2e3);return function(){return clearTimeout(o)}},[]),(0,n.jsx)(gn,{children:(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)(cn(),{style:{width:"calc(100% + 40px)",height:"calc(100% + 40px)",position:"absolute",left:"-20px",top:"-20px",zIndex:"100"},className:"yourClassName",refConfetti:function(p){return B(p)}}),(0,n.jsx)("h2",{children:(0,n.jsx)(r._H,{id:"pages.market.congratulations"})}),(0,n.jsx)("div",{className:"images",children:(0,n.jsx)("img",{src:a,alt:""})}),(0,n.jsx)("div",{className:"button",children:(0,n.jsx)(O.b,{text:g.formatMessage({id:"pages.market.open_box"}),onClick:function(){i(),on.m.push("/wallets/wallets")}})})]})})},Bn=e(34669),k=e(54458),J,un=b.ZP.div(J||(J=(0,h.Z)([`
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

`]))),xn=function(){var s=(0,f.f)(N.w.nft_blindBox_progress),i=s.request,a=s.data;return(0,d.useEffect)(function(){i("")},[]),a?(a=a.data,(0,n.jsxs)(un,{children:[(0,n.jsxs)("div",{className:"text_msg layput",children:[(0,n.jsxs)("p",{children:[a[0].price," ",a[0].name]}),(0,n.jsxs)("p",{className:"two",children:[a[1].price," ",a[1].name]}),(0,n.jsxs)("p",{children:[a[2].price," ",a[2].name]})]}),(0,n.jsxs)("div",{className:"bar",children:[(0,n.jsxs)("div",{className:"progres layput",children:[(0,n.jsx)(k.Z,{percent:a[0].scale*100}),(0,n.jsx)(k.Z,{className:"two",percent:a[1].scale*100}),(0,n.jsx)(k.Z,{percent:a[2].scale*100})]}),(0,n.jsxs)("div",{className:"text_msg layput",children:[(0,n.jsx)("p",{children:(0,n.jsxs)("span",{children:[a[0].scale*100,"%"]})}),(0,n.jsxs)("p",{className:"two",children:[a[1].scale*100,"%"]}),(0,n.jsxs)("p",{children:[a[2].scale*100,"%"]})]})]})]})):(0,n.jsx)("span",{})},hn=e(82788),q,mn=b.ZP.div(q||(q=(0,h.Z)([`
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
`]))),vn=function(s,i){var a={"M+":s.getMonth()+1,"d+":s.getDate(),"h+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(i)&&(i=i.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(var g in a)new RegExp("("+g+")").test(i)&&(i=i.replace(RegExp.$1,RegExp.$1.length==1?a[g]:("00"+a[g]).substr((""+a[g]).length)));return i},fn=function(){var s,i,a,g,j,B,m,F,o=(0,d.useState)(!1),p=(0,R.Z)(o,2),_=p[0],en=p[1],Cn=(0,d.useContext)(rn.tC),On=Cn.onPresent,w=(0,f.f)(N.w.nftBlindBox),L=w.request,Mn=w.status,t=w.data,Dn=(0,f.f)(N.w.nftBuy),tn=Dn.request,an=(0,f.f)(N.w.price),In=an.request,H=an.data,Pn=(0,r.YB)(),Nn=(0,d.useCallback)((0,x.Z)(P().mark(function sn(){var G,Q,K,Y;return P().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return Q=Math.floor(Math.random()*10),(t==null||(G=t.data)===null||G===void 0?void 0:G.box_count)<10&&(Q=Math.floor(Math.random()*(t==null||(K=t.data)===null||K===void 0?void 0:K.box_count))),en(!0),C.next=5,tn(t.data[Q].id,"yes");case 5:if(Y=C.sent,en(!1),!Y.err){C.next=10;break}return L(),C.abrupt("return",I.default.error(Y.err));case 10:return On((0,n.jsx)(pn,{img_url:t.data[Q].img_url})),C.next=13,(0,hn.getInitialState)();case 13:case"end":return C.stop()}},sn)})),[t,tn,L,t==null||(s=t.data)===null||s===void 0?void 0:s.box_count]);return(0,d.useEffect)(function(){L(),In()},[]),(0,n.jsxs)(mn,{children:[(0,n.jsx)("img",{src:z(),alt:"",className:"top"}),(0,n.jsx)("h2",{children:"CCP DOG NFT"}),(0,n.jsxs)("h3",{children:[(0,n.jsx)(r._H,{id:"pages.market.total_number"}),": ",t==null||(i=t.data)===null||i===void 0?void 0:i.box_count]}),(0,n.jsxs)("div",{className:"inner",children:[(t==null||(a=t.data)===null||a===void 0?void 0:a.begin_time)&&(0,n.jsx)("h4",{children:(0,n.jsx)(S.ZP,{date:(t==null||(g=t.data)===null||g===void 0?void 0:g.begin_time)*1e3,renderer:jn})}),(0,n.jsxs)("h5",{className:"bottom",children:[(0,n.jsx)(r._H,{id:"pages.market.rush_time"}),": ",(t==null||(j=t.data)===null||j===void 0?void 0:j.begin_time)&&vn(new Date((t==null||(B=t.data)===null||B===void 0?void 0:B.begin_time)*1e3),"yyyy-MM-dd hh:mm:ss")]})]}),(0,n.jsx)("div",{className:"price",children:(0,n.jsxs)("h5",{children:[(0,n.jsx)("img",{src:l(),alt:""}),"699 CCP ",(0,n.jsxs)("span",{children:[" \u2248 $ ",(699*(1/(H==null||(m=H.data)===null||m===void 0?void 0:m[2].usdt_price))).toFixed()]})]})}),(0,n.jsx)("div",{children:(0,n.jsx)(xn,{})}),(0,n.jsx)("div",{children:_||Mn==f.o.wait?(0,n.jsx)(c.Z,{}):(0,n.jsx)(O.b,{disabled:(t==null||(F=t.data)===null||F===void 0?void 0:F.box_count)==0,onClick:function(){return Nn()},text:Pn.formatMessage({id:"component.nft_car.confirm_purchase"})})})]})},jn=function(s){var i=s.days,a=s.hours,g=s.minutes,j=s.seconds,B=s.completed;return(0,n.jsxs)("span",{children:[i,"D:",a,"h:",g,"m:",j,"s"]})},An=e(18572),En=e.n(An),nn,bn=b.ZP.div(nn||(nn=(0,h.Z)([`
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
`]))),yn=function(){return(0,n.jsxs)(bn,{children:[(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("img",{src:En(),alt:""}),(0,n.jsx)("h3",{children:(0,n.jsx)(r._H,{id:"pages.market.top_msg"})})]}),(0,n.jsx)("div",{className:"box",children:(0,n.jsxs)(M.Z,{gutter:48,children:[(0,n.jsx)(D.Z,{span:6,xs:24,sm:24,md:12,lg:10,children:(0,n.jsx)(fn,{})}),(0,n.jsx)(D.Z,{span:6,xs:24,sm:24,md:12,lg:14,children:(0,n.jsxs)("div",{className:"right",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.class"})}),(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.rarity"})}),(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.proportion"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.greyhound"})}),(0,n.jsx)("p",{children:"SSR"}),(0,n.jsx)("p",{children:"2%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.belgian_malinois"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"4%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.saluki"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"8%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.hungarian_vizsla"})}),(0,n.jsx)("p",{children:"SR"}),(0,n.jsx)("p",{children:"7%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.afghan_hound"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"9%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.whippet"})}),(0,n.jsx)("p",{children:"R"}),(0,n.jsx)("p",{children:"10%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.jack_russell_terrier"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"13%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.dalmatian"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"22%"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:(0,n.jsx)(r._H,{id:"pages.market.russian_wolfhound"})}),(0,n.jsx)("p",{children:"N"}),(0,n.jsx)("p",{children:"25%"})]})]})})]})})]})}},67329:function(A,E,e){"use strict";e.d(E,{f:function(){return b},o:function(){return u}});var Z=e(3182),M=e(2824),T=e(94043),D=e.n(T),h=e(67294),b=function(W){var I=(0,h.useState)(u.start),x=(0,M.Z)(I,2),R=x[0],v=x[1],P=(0,h.useState)(),d=(0,M.Z)(P,2),O=d[0],y=d[1],z=(0,h.useCallback)((0,Z.Z)(D().mark(function N(){var f,r,S=arguments;return D().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,v(u.wait),l.next=4,W.apply(void 0,S);case 4:return f=l.sent,y(f),v(u.success),l.abrupt("return",f);case 10:return l.prev=10,l.t0=l.catch(0),r={err:l.t0.info},y(r),v(u.failure),l.abrupt("return",r);case 16:case"end":return l.stop()}},N,null,[[0,10]])})),[v,y]);return{status:R,request:z,data:O}},u;(function(c){c[c.start=0]="start",c[c.wait=1]="wait",c[c.success=2]="success",c[c.failure=3]="failure"})(u||(u={}))},46677:function(A){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},18572:function(A,E,e){A.exports=e.p+"static/mysterious.98c98ffc.png"},63757:function(A,E,e){A.exports=e.p+"static/mystery_header.ab029946.png"}}]);
