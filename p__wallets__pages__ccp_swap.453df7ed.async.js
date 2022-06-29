(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[248],{19675:function(c,u,n){"use strict";n.d(u,{Z:function(){return e}});var f=n(28991),o=n(67294),y={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},r=y,i=n(27029),g=function(O,b){return o.createElement(i.Z,(0,f.Z)((0,f.Z)({},O),{},{ref:b,icon:r}))};g.displayName="CaretDownOutlined";var e=o.forwardRef(g)},16993:function(c,u,n){"use strict";n.d(u,{b:function(){return O}});var f=n(57663),o=n(71577),y=n(20310),r=n(67294),i=n(47416),g=n(85893),e,l=(0,i.ZP)(o.Z)(e||(e=(0,y.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(b){var p=b.disabled;return p&&.5}),O=function(p){var F=p.text,C=p.block,N=C===void 0?!0:C,_=p.onClick,w=p.disabled,d=w===void 0?!1:w;return(0,g.jsx)(l,{type:"default",shape:"round",disabled:d,onClick:function(){d||_&&_()},size:"large",block:N,children:F})}},87681:function(c,u,n){"use strict";n.r(u),n.d(u,{default:function(){return Dn}});var f=n(20310),o=n(20228),y=n(11382),r=n(34792),i=n(55026),g=n(2824),e=n(8870),l=n(3182),O=n(94043),b=n.n(O),p=n(47416),F=n(16993),C=n(59250),N=n(13013),_=n(30887),w=n(14289),d=n(67294),M=n(53776),k=n(46677),U=n.n(k),Z=n(68314),R=n.n(Z),q=n(51970),x=n.n(q),xn=n(14693),hn=n.n(xn),nn={chain:"CCP",name:"ccp_coin",img:U(),amount_key:"ccp_dog_coin",color:"red",coin_type:"0",resAge:"ccp",exchangeKay:"CCP_USDT"},mn={chain:"GUT",name:"usdt_coin",color:"red",amount_key:"gut_coin",coin_type:"3",img:x(),resAge:"gut",exchangeKay:"GUT_CCP"},fn={chain:"Power(\u4F53\u529B)",name:"usdt_coin",color:"red",amount_key:"",coin_type:"4",img:hn(),resAge:"gut_power",exchangeKay:"Power_CCP"},vn={chain:"USDT",name:"usdt_coin",color:"rgba(4, 131, 224, 1)",amount_key:"usdt_coin",coin_type:"1",img:R(),resAge:"usdt"},t=n(85893),tn,en,K=[(0,e.Z)((0,e.Z)({},vn),{},{children:[nn]}),(0,e.Z)((0,e.Z)({},nn),{},{children:[mn,fn]})],an=function(D){var B=D.onCb,W=D.children,s=D.list,G=(0,d.useState)(0),L=(0,g.Z)(G,2),H=L[0],Q=L[1],j=(0,M.t)("@@initialState"),T=j.initialState;return(0,t.jsx)(bn,{overlay:(0,t.jsx)(An,{children:s.map(function(P,z){var h;return(0,t.jsx)(w.Z.Item,{className:z==H?"ac":"",onClick:function(){Q(z),B(P)},children:(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)("p",{children:P.chain}),(0,t.jsx)("h3",{style:{color:P.color||"rgba(4, 131, 224, 1)"},children:(T==null||(h=T.currentUser)===null||h===void 0?void 0:h[P.amount_key])||0})]})},P.chain)})}),placement:"bottomCenter",arrow:!0,destroyPopupOnHide:!0,disabled:s.length===1,trigger:["click"],children:W})},An=(0,p.ZP)(w.Z)(tn||(tn=(0,f.Z)([`
  border-radius: 10px;

  p {
    margin-bottom: 0;
  }

  li {
    &:hover {

    }
  }

  .ac {
    .top {
      p {
        color: #44df84;
      }
    }
  }

  .top {
    display: flex;
    font-size: 15px;
    font-weight: 400;
    padding: 10px;
    box-sizing: border-box;
    color: #333333;
    line-height: 20px;
    background-color: rgba(246, 248, 250, 1);
    justify-content: space-between;

    span {

    }

    h3 {
      margin-bottom: 0;
      color: rgba(4, 131, 224, 1);
      font-size: 13px;
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 20px;
      }
    }
  }
`]))),bn=(0,p.ZP)(N.Z)(en||(en=(0,f.Z)([`
  color: #505f79;
  font-size: 12px;


  > span {
    font-size: 12px;
    transition: all 200ms;
  }

  &.ac {
    span {
      transform: rotate(180deg);
    }
  }
`]))),sn=n(67329),on=n(93874),E=n(28219),En=n(1171),yn=n.n(En),jn=n(59749),rn=n(19675),ln,dn,Cn=function(){var D,B,W=(0,M.t)("@@initialState"),s=W.initialState,G=W.setInitialState,L=function(){var v=(0,l.Z)(b().mark(function a(){var A,m;return b().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,s==null||(A=s.fetchUserInfo)===null||A===void 0?void 0:A.call(s);case 2:if(m=I.sent,!m){I.next=6;break}return I.next=6,G(function(Zn){return(0,e.Z)((0,e.Z)({},Zn),{},{currentUser:m})});case 6:case"end":return I.stop()}},a)}));return function(){return v.apply(this,arguments)}}(),H=(0,d.useState)(K[0]),Q=(0,g.Z)(H,2),j=Q[0],T=Q[1],P=(0,d.useState)(K[0].children[0]),z=(0,g.Z)(P,2),h=z[0],Y=z[1],In=(0,d.useState)(),cn=(0,g.Z)(In,2),S=cn[0],V=cn[1],un=(0,sn.f)(on.w.ccp_exchange_rate),_n=un.request,$=un.data,Sn=(0,d.useState)(!1),gn=(0,g.Z)(Sn,2),Fn=gn[0],X=gn[1],Nn=(0,E.YB)(),pn=(0,d.useMemo)(function(){var v;if(!$||!h.exchangeKay)return 1;var a=$.data,A={};return a.forEach(function(m){A=(0,e.Z)((0,e.Z)({},A),m)}),1/((v=A[h.exchangeKay])===null||v===void 0?void 0:v.price)},[$,h]),J=(0,sn.f)(on.w.ccp_dog_convert),Mn=J.request,Bn=J.status,Tn=J.data,Un=(0,d.useCallback)((0,l.Z)(b().mark(function v(){var a;return b().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return X(!0),m.next=3,Mn(S,j.resAge,h.resAge);case 3:if(a=m.sent,console.log(a),!a.err){m.next=9;break}return i.default.error(a.err),X(!1),m.abrupt("return");case 9:X(!1),i.default.success(a.info),V("");case 12:case"end":return m.stop()}},v)})),[S,h,j]);return(0,d.useEffect)(function(){_n("")},[]),(0,t.jsxs)(wn,{children:[(0,t.jsx)("h3",{className:"tis",children:(0,t.jsx)(E._H,{id:"pages.myaccount.usdt_sunder"})}),(0,t.jsxs)("div",{className:"box",children:[(0,t.jsxs)("div",{className:"box_top",children:[(0,t.jsxs)("div",{className:"show_box",children:[(0,t.jsx)(an,{list:K,onCb:function(a){T(a),Y(a.children[0])},children:(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)("p",{children:(0,t.jsx)(E._H,{id:"pages.myaccount.ccpswapnumbder"})}),(0,t.jsxs)("p",{children:[(0,t.jsx)(E._H,{id:"pages.myaccount.available"}),"\uFF1A",s==null||(D=s.currentUser)===null||D===void 0?void 0:D[j.amount_key],(0,t.jsx)("img",{src:j.img,alt:""}),(0,t.jsx)(rn.Z,{size:5,width:3,height:3})]})]})}),(0,t.jsxs)("div",{className:"bottom",children:[(0,t.jsx)("input",{value:S,onInput:function(a){var A;return V((A=a.target)===null||A===void 0?void 0:A.value)},type:"text"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{onClick:function(){var a;V((s==null||(a=s.currentUser)===null||a===void 0?void 0:a[j.amount_key])||"")},children:"Max"})," ",j.chain]})]})]}),(0,t.jsx)("div",{className:"arrow",children:(0,t.jsx)("img",{src:"https://sunswap.com/static/media/down-arrow.b31e68b4.svg",alt:""})}),(0,t.jsxs)("div",{className:"show_box",children:[(0,t.jsx)(an,{list:j.children,onCb:function(a){Y(a)},children:(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)("p",{children:(0,t.jsx)(E._H,{id:"pages.myaccount.get_quantity"})}),(0,t.jsxs)("p",{children:[(0,t.jsx)(E._H,{id:"pages.myaccount.balance"}),"\uFF1A",(s==null||(B=s.currentUser)===null||B===void 0?void 0:B[h.amount_key])||0,(0,t.jsx)("img",{src:h.img,alt:""}),(0,t.jsx)(rn.Z,{})]})]})}),(0,t.jsxs)("div",{className:"bottom",children:[(0,t.jsx)("input",{disabled:!0,value:((S||0)*pn).toFixed(2),type:"text"}),(0,t.jsx)("p",{children:h.chain})]})]}),(0,t.jsx)("div",{style:{height:"20px"}}),Fn?(0,t.jsx)(y.Z,{}):(0,t.jsx)(F.b,{disabled:S<=0||!S,onClick:function(){return Un()},text:Nn.formatMessage({id:"pages.myaccount.redeem_now"})})]}),(0,t.jsxs)("div",{className:"box_bottom",children:[(0,t.jsx)("div",{className:"dash-line"}),(0,t.jsx)("div",{className:"half-circle c-right"}),(0,t.jsx)("div",{className:"half-circle c-left"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(E._H,{id:"pages.myaccount.what_is_ccp"}),"\uFF1F"]}),(0,t.jsxs)("div",{children:["1 ",j.chain," = ",(0,jn.Z)(pn)," ",h.chain]}),(0,t.jsx)("li",{children:(0,t.jsx)(E._H,{id:"pages.myaccount.what_can_i_do"})}),(0,t.jsx)("div",{children:(0,t.jsx)(E._H,{id:"pages.myaccount.the_exchanged"})})]})]})]})]})},On=p.ZP.div(ln||(ln=(0,f.Z)([`
  padding: 70px 40px;
  background: url(`,`) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  position: relative;
  overflow: hidden;
  text-align: center;

  .left-coin {
    position: absolute;
    width: 25%;
    left: 1%;
    top: 30px;
  }

  .right-coin {
    position: absolute;
    right: -6%;
    top: 30px;
    width: 30%;
  }

  .title_box {
    position: relative;
    margin-bottom: 10px;

    .title {
      position: absolute;
      top: -2px;
      left: 0;
      right: 0;
      margin: auto auto auto -2px;
      background: none;
      font-style: normal;
      font-weight: 600;
      font-size: 4rem;
      line-height: 82px;
      text-align: center;
      color: white;

    }

    .title2 {
      font-style: normal;
      font-weight: 600;
      font-size: 4rem;
      line-height: 82px;
      text-align: center;
      z-index: 10;
      background: linear-gradient(90deg, #1e09a3 .94%, #08bac6 48.8%, #f86817 98.95%);
      -webkit-background-clip: text;
      margin-bottom: 10px;
      color: transparent;
      vertical-align: baseline;
    }
  }

  .sub_title {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
    color: hsla(0, 0%, 100%, .8);
  }

  @media (max-width: 576px) {
    padding: 50px 20px;
    .title_box {
      .title, .title2 {
        font-size: 28px;
        line-height: 52px;
      }
    }
  }
`])),yn()),wn=p.ZP.div(dn||(dn=(0,f.Z)([`
  .tis {
    font-family: PingFang SC;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 34px;
    text-align: center;
    margin-top: 40px;
    color: white;
  }

  .box {
    width: 504px;
    margin: 10px auto;
    padding: 40px;
    background: #fff;
    color: #111;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 30px;
    overflow: hidden;

    .box_top {
      .show_box {
        box-shadow: 0 10px 40px rgb(21 55 156 / 6%);
        border-radius: 20px;
        padding: 18px;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            display: flex;
            font-size: 14px;
            color: #111;
            margin-bottom: 0;
            align-items: center;

            img {
              display: block;
              width: 20px;
              height: 20px;
              margin: 0 3px 0 10px;
            }
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;

          input {
            background: transparent;
            font-family: PingFang SC;
            flex: 1;
            font-style: normal;
            font-size: 20px;
            line-height: 28px;
            color: #333;
            border: none;
            box-shadow: none;
            padding: 0;
            outline: none;
            touch-action: manipulation;
          }

          p {
            margin-left: 5px;
            font-family: Avenir Next;
            font-style: normal;
            font-weight: 500;
            font-size: 1.3rem;
            color: #333;
            padding-top: 2px;
            margin-bottom: 0;
            display: flex;
            align-items: center;

            span {
              cursor: pointer;
              background: #ff8e18;
              border-radius: 9px;
              color: #fff;
              padding: 2px 10px;
              font-size: 12px;
              margin-right: 10px;
            }
          }
        }
      }

      .arrow {
        text-align: center;
        margin: 20px 0;

        img {
          margin: 0 auto;
          display: block;
        }
      }

      .bottom_tis {
        margin-top: 10px;
        color: #666;
        font-size: 12px;
        text-align: start;
        display: block;
      }
    }

    .box_bottom {
      position: relative;
      margin-top: 30px;

      .dash-line {
        border-top: 1px dashed rgba(55, 111, 228, .4);
        position: absolute;
        top: 0;
        left: -45px;
        width: 506px;
        height: 1px;
      }

      .half-circle {
        position: absolute;
        top: -10px;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #3771e5;

        &.c-right {
          right: -50px;
          background: #3975ea;
        }

        &.c-left {
          left: -50px;
          background: #3975ea;
        }
      }

      ul {
        margin-top: 20px;
        list-style: disc;
        text-align: start;

        li::marker {
          unicode-bidi: isolate;
          font-variant-numeric: tabular-nums;
          text-transform: none;
          text-indent: 0px !important;
          text-align: start !important;
          text-align-last: start !important;
          color: #5915e1;
        }

        li {

          list-style: disc;
          margin-left: -10px;
          font-weight: 500;
          font-size: 1.1rem;
          padding-top: 30px;

        }

        div {
          margin-top: 5px;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #999;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .box {
      width: 350px;
      padding: 10px;

      .box_top .show_box .bottom {
        input {
          width: 150px;
        }
      }

      .box_bottom {
        padding: 0 10px;

        ul {
          li {
            font-size: 18px;
            padding-top: 20px;
          }
        }
      }
    }

    .tis {
      margin-top: 0;
    }

  }
`]))),Dn=function(){return(0,t.jsxs)(On,{children:[(0,t.jsxs)("div",{className:"title_box",children:[(0,t.jsx)("h3",{className:"title",children:(0,t.jsx)(E._H,{id:"pages.myaccount.ccpswap"})}),(0,t.jsx)("h3",{className:"title2",children:(0,t.jsx)(E._H,{id:"pages.myaccount.ccpswap"})})]}),(0,t.jsx)(Cn,{})]})}},59749:function(c,u,n){"use strict";n.d(u,{Z:function(){return f}});function f(o){if(!o)return"0.00";o=o.toFixed(2).split(".");for(var y=o[0].split("").reverse(),r=[],i=0,g=y.length;i<g;i++)i%3==0&&i!==0&&r.push(","),r.push(y[i]);return r.reverse(),o[1]?r=r.join("").concat("."+o[1]):r=r.join(""),r}},67329:function(c,u,n){"use strict";n.d(u,{f:function(){return g},o:function(){return e}});var f=n(3182),o=n(2824),y=n(94043),r=n.n(y),i=n(67294),g=function(O){var b=(0,i.useState)(e.start),p=(0,o.Z)(b,2),F=p[0],C=p[1],N=(0,i.useState)(),_=(0,o.Z)(N,2),w=_[0],d=_[1],M=(0,i.useCallback)((0,f.Z)(r().mark(function k(){var U,Z,R=arguments;return r().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,C(e.wait),x.next=4,O.apply(void 0,R);case 4:return U=x.sent,d(U),C(e.success),x.abrupt("return",U);case 10:return x.prev=10,x.t0=x.catch(0),Z={err:x.t0.info},d(Z),C(e.failure),x.abrupt("return",Z);case 16:case"end":return x.stop()}},k,null,[[0,10]])})),[C,d]);return{status:F,request:M,data:w}},e;(function(l){l[l.start=0]="start",l[l.wait=1]="wait",l[l.success=2]="success",l[l.failure=3]="failure"})(e||(e={}))},51970:function(c,u,n){c.exports=n.p+"static/icon_gut.eb549782.png"},46677:function(c){c.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},14693:function(c,u,n){c.exports=n.p+"static/shandian.2a12e134.png"},1171:function(c,u,n){c.exports=n.p+"static/sun-bg.842d4713.608d9670.png"},68314:function(c,u,n){c.exports=n.p+"static/usdt.b1e4146b.png"}}]);
