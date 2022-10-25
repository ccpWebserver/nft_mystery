(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[248],{19675:function(l,d,n){"use strict";n.d(d,{Z:function(){return i}});var g=n(28991),c=n(67294),b={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},s=b,u=n(27029),a=function(C,f){return c.createElement(u.Z,(0,g.Z)((0,g.Z)({},C),{},{ref:f,icon:s}))};a.displayName="CaretDownOutlined";var i=c.forwardRef(a)},16993:function(l,d,n){"use strict";n.d(d,{b:function(){return C}});var g=n(57663),c=n(71577),b=n(20310),s=n(67294),u=n(47416),a=n(85893),i,x=(0,u.ZP)(c.Z)(i||(i=(0,b.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(f){var j=f.disabled;return j&&.5}),C=function(j){var O=j.text,Z=j.block,_=Z===void 0?!0:Z,w=j.onClick,r=j.disabled,D=r===void 0?!1:r;return(0,a.jsx)(x,{type:"default",shape:"round",disabled:D,onClick:function(){D||w&&w()},size:"large",block:_,children:O})}},87681:function(l,d,n){"use strict";n.r(d),n.d(d,{default:function(){return wn}});var g=n(20310),c=n(20228),b=n(11382),s=n(34792),u=n(55026),a=n(2824),i=n(39428),x=n(11849),C=n(3182),f=n(47416),j=n(16993),O=n(59250),Z=n(13013),_=n(30887),w=n(54689),r=n(67294),D=n(53776),z=n(46677),N=n.n(z),M=n(68314),k=n.n(M),J=n(51970),p=n.n(J),gn=n(14693),xn=n.n(gn),q={chain:"CCP",name:"ccp_coin",img:N(),amount_key:"ccp_dog_coin",color:"red",coin_type:"0",resAge:"ccp",exchangeKay:"CCP_USDT"},hn={chain:"GUT",name:"usdt_coin",color:"red",amount_key:"gut_coin",coin_type:"3",img:p(),resAge:"gut",exchangeKay:"GUT_CCP"},mn={chain:"Power(\u4F53\u529B)",name:"usdt_coin",color:"red",amount_key:"",coin_type:"4",img:xn(),resAge:"gut_power",exchangeKay:"Power_CCP"},fn={chain:"USDT",name:"usdt_coin",color:"rgba(4, 131, 224, 1)",amount_key:"usdt_coin",coin_type:"1",img:k(),resAge:"usdt"},t=n(85893),nn,tn,R=[(0,x.Z)((0,x.Z)({},fn),{},{children:[q]}),(0,x.Z)((0,x.Z)({},q),{},{children:[hn,mn]})],en=function(P){var B=P.onCb,W=P.children,o=P.list,K=(0,r.useState)(0),G=(0,a.Z)(K,2),L=G[0],Q=G[1],y=(0,D.t)("@@initialState"),U=y.initialState;return(0,t.jsx)(An,{overlay:(0,t.jsx)(vn,{children:o.map(function(I,T){var h;return(0,t.jsx)(w.Z.Item,{className:T==L?"ac":"",onClick:function(){Q(T),B(I)},children:(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)("p",{children:I.chain}),(0,t.jsx)("h3",{style:{color:I.color||"rgba(4, 131, 224, 1)"},children:(U==null||(h=U.currentUser)===null||h===void 0?void 0:h[I.amount_key])||0})]})},I.chain)})}),placement:"bottomCenter",arrow:!0,destroyPopupOnHide:!0,disabled:o.length===1,trigger:["click"],children:W})},vn=(0,f.ZP)(w.Z)(nn||(nn=(0,g.Z)([`
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
`]))),An=(0,f.ZP)(Z.Z)(tn||(tn=(0,g.Z)([`
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
`]))),an=n(67329),sn=n(93874),E=n(10908),bn=n(1171),En=n.n(bn),jn=n(59749),on=n(19675),rn,ln,yn=function(){var P,B,W=(0,D.t)("@@initialState"),o=W.initialState,K=W.setInitialState,G=function(){var v=(0,C.Z)((0,i.Z)().mark(function e(){var A,m;return(0,i.Z)().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,o==null||(A=o.fetchUserInfo)===null||A===void 0?void 0:A.call(o);case 2:if(m=S.sent,!m){S.next=6;break}return S.next=6,K(function(Mn){return(0,x.Z)((0,x.Z)({},Mn),{},{currentUser:m})});case 6:case"end":return S.stop()}},e)}));return function(){return v.apply(this,arguments)}}(),L=(0,r.useState)(R[0]),Q=(0,a.Z)(L,2),y=Q[0],U=Q[1],I=(0,r.useState)(R[0].children[0]),T=(0,a.Z)(I,2),h=T[0],H=T[1],Pn=(0,r.useState)(),dn=(0,a.Z)(Pn,2),F=dn[0],Y=dn[1],cn=(0,an.f)(sn.w.ccp_exchange_rate),In=cn.request,V=cn.data,Sn=(0,r.useState)(!1),un=(0,a.Z)(Sn,2),Zn=un[0],$=un[1],Fn=(0,E.YB)(),pn=(0,r.useMemo)(function(){var v;if(!V||!h.exchangeKay)return 1;var e=V.data,A={};return e.forEach(function(m){A=(0,x.Z)((0,x.Z)({},A),m)}),1/((v=A[h.exchangeKay])===null||v===void 0?void 0:v.price)},[V,h]),X=(0,an.f)(sn.w.ccp_dog_convert),_n=X.request,Bn=X.status,Un=X.data,Nn=(0,r.useCallback)((0,C.Z)((0,i.Z)().mark(function v(){var e;return(0,i.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return $(!0),m.next=3,_n(F,y.resAge,h.resAge);case 3:if(e=m.sent,console.log(e),!e.err){m.next=9;break}return u.default.error(e.err),$(!1),m.abrupt("return");case 9:$(!1),u.default.success(e.info),Y("");case 12:case"end":return m.stop()}},v)})),[F,h,y]);return(0,r.useEffect)(function(){In("")},[]),(0,t.jsxs)(On,{children:[(0,t.jsx)("h3",{className:"tis",children:(0,t.jsx)(E._H,{id:"pages.myaccount.usdt_sunder"})}),(0,t.jsxs)("div",{className:"box",children:[(0,t.jsxs)("div",{className:"box_top",children:[(0,t.jsxs)("div",{className:"show_box",children:[(0,t.jsx)(en,{list:R,onCb:function(e){U(e),H(e.children[0])},children:(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)("p",{children:(0,t.jsx)(E._H,{id:"pages.myaccount.ccpswapnumbder"})}),(0,t.jsxs)("p",{children:[(0,t.jsx)(E._H,{id:"pages.myaccount.available"}),"\uFF1A",o==null||(P=o.currentUser)===null||P===void 0?void 0:P[y.amount_key],(0,t.jsx)("img",{src:y.img,alt:""}),(0,t.jsx)(on.Z,{size:5,width:3,height:3})]})]})}),(0,t.jsxs)("div",{className:"bottom",children:[(0,t.jsx)("input",{value:F,onInput:function(e){var A;return Y((A=e.target)===null||A===void 0?void 0:A.value)},type:"text"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{onClick:function(){var e;Y((o==null||(e=o.currentUser)===null||e===void 0?void 0:e[y.amount_key])||"")},children:"Max"})," ",y.chain]})]})]}),(0,t.jsx)("div",{className:"arrow",children:(0,t.jsx)("img",{src:"https://sunswap.com/static/media/down-arrow.b31e68b4.svg",alt:""})}),(0,t.jsxs)("div",{className:"show_box",children:[(0,t.jsx)(en,{list:y.children,onCb:function(e){H(e)},children:(0,t.jsxs)("div",{className:"top",children:[(0,t.jsx)("p",{children:(0,t.jsx)(E._H,{id:"pages.myaccount.get_quantity"})}),(0,t.jsxs)("p",{children:[(0,t.jsx)(E._H,{id:"pages.myaccount.balance"}),"\uFF1A",(o==null||(B=o.currentUser)===null||B===void 0?void 0:B[h.amount_key])||0,(0,t.jsx)("img",{src:h.img,alt:""}),(0,t.jsx)(on.Z,{})]})]})}),(0,t.jsxs)("div",{className:"bottom",children:[(0,t.jsx)("input",{disabled:!0,value:((F||0)*pn).toFixed(2),type:"text"}),(0,t.jsx)("p",{children:h.chain})]})]}),(0,t.jsx)("div",{style:{height:"20px"}}),Zn?(0,t.jsx)(b.Z,{}):(0,t.jsx)(j.b,{disabled:F<=0||!F,onClick:function(){return Nn()},text:Fn.formatMessage({id:"pages.myaccount.redeem_now"})})]}),(0,t.jsxs)("div",{className:"box_bottom",children:[(0,t.jsx)("div",{className:"dash-line"}),(0,t.jsx)("div",{className:"half-circle c-right"}),(0,t.jsx)("div",{className:"half-circle c-left"}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(E._H,{id:"pages.myaccount.what_is_ccp"}),"\uFF1F"]}),(0,t.jsxs)("div",{children:["1 ",y.chain," = ",(0,jn.Z)(pn)," ",h.chain]}),(0,t.jsx)("li",{children:(0,t.jsx)(E._H,{id:"pages.myaccount.what_can_i_do"})}),(0,t.jsx)("div",{children:(0,t.jsx)(E._H,{id:"pages.myaccount.the_exchanged"})})]})]})]})]})},Cn=f.ZP.div(rn||(rn=(0,g.Z)([`
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
`])),En()),On=f.ZP.div(ln||(ln=(0,g.Z)([`
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
`]))),wn=function(){return(0,t.jsxs)(Cn,{children:[(0,t.jsxs)("div",{className:"title_box",children:[(0,t.jsx)("h3",{className:"title",children:(0,t.jsx)(E._H,{id:"pages.myaccount.ccpswap"})}),(0,t.jsx)("h3",{className:"title2",children:(0,t.jsx)(E._H,{id:"pages.myaccount.ccpswap"})})]}),(0,t.jsx)(yn,{})]})}},59749:function(l,d,n){"use strict";n.d(d,{Z:function(){return g}});function g(c){if(!c)return"0.00";c=c.toFixed(2).split(".");for(var b=c[0].split("").reverse(),s=[],u=0,a=b.length;u<a;u++)u%3==0&&u!==0&&s.push(","),s.push(b[u]);return s.reverse(),c[1]?s=s.join("").concat("."+c[1]):s=s.join(""),s}},67329:function(l,d,n){"use strict";n.d(d,{f:function(){return u},o:function(){return a}});var g=n(39428),c=n(3182),b=n(2824),s=n(67294),u=function(x){var C=(0,s.useState)(a.start),f=(0,b.Z)(C,2),j=f[0],O=f[1],Z=(0,s.useState)(),_=(0,b.Z)(Z,2),w=_[0],r=_[1],D=(0,s.useCallback)((0,c.Z)((0,g.Z)().mark(function z(){var N,M,k=arguments;return(0,g.Z)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,O(a.wait),p.next=4,x.apply(void 0,k);case 4:return N=p.sent,r(N),O(a.success),p.abrupt("return",N);case 10:return p.prev=10,p.t0=p.catch(0),M={err:p.t0.info},r(M),O(a.failure),p.abrupt("return",M);case 16:case"end":return p.stop()}},z,null,[[0,10]])})),[O,r]);return{status:j,request:D,data:w}},a;(function(i){i[i.start=0]="start",i[i.wait=1]="wait",i[i.success=2]="success",i[i.failure=3]="failure"})(a||(a={}))},51970:function(l,d,n){l.exports=n.p+"static/icon_gut.eb549782.png"},46677:function(l){l.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},14693:function(l,d,n){l.exports=n.p+"static/shandian.2a12e134.png"},1171:function(l,d,n){l.exports=n.p+"static/sun-bg.842d4713.608d9670.png"},68314:function(l,d,n){l.exports=n.p+"static/usdt.b1e4146b.png"}}]);
