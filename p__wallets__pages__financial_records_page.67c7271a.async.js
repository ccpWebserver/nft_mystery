(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[850],{7104:function(){},16993:function(D,m,n){"use strict";n.d(m,{b:function(){return M}});var c=n(57663),i=n(71577),u=n(20310),g=n(67294),_=n(47416),b=n(85893),s,a=(0,_.ZP)(i.Z)(s||(s=(0,u.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(j){var o=j.disabled;return o&&.5}),M=function(o){var e=o.text,l=o.block,E=l===void 0?!0:l,h=o.onClick,d=o.disabled,p=d===void 0?!1:d;return(0,b.jsx)(a,{type:"default",shape:"round",disabled:p,onClick:function(){p||h&&h()},size:"large",block:E,children:e})}},34503:function(D,m,n){"use strict";n.r(m),n.d(m,{default:function(){return R}});var c=n(20310),i=n(47416),u=n(67329),g=n(93874),_=n(67294),b=n(83832),s=n(31894),a=n(47673),M=n(34792),j=n(94043),o=n(16993),e=n(85893),l,E=i.ZP.div(l||(l=(0,c.Z)([`
  padding: 0 70px;

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


  .logo {
    display: block;
    width: 20px;
  }

  .input {
    margin-bottom: 20px;

    h2 {
      font-size: 28px;
      font-weight: bold;
      word-break: break-word;
    }

    .tis {
      font-size: 12px;
      word-break: break-all;
      color: #666;
    }
  }

  .tis_balance {
    font-size: 14px;
    word-break: break-all;
    color: #666;
    margin: 30px 0;
  }

  .button {
    width: 30%;
    margin: 0 auto;

    .fee {
      text-align: center;
      margin-bottom: 0;
      color: #666;
    }
  }


  @media (max-width: 576px) {
    padding: 0 5%;
    .button {
      width: 80%;
    }

    .input {
      h2 {
        font-size: 24px;
      }
    }

  }
`]))),h=function(){var x=useContext(ModalContext),P=x.onDismiss,v=useWait(HttpServer.update_nftname),w=v.request,r=v.status,A=useCallback(_asyncToGenerator(_regeneratorRuntime.mark(function I(){return _regeneratorRuntime.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:try{P(),_message.success("\u51FA\u552E\u6210\u529F")}catch(N){_message.error(N)}case 1:case"end":return T.stop()}},I)})),[]);return _jsxs(E,{children:[_jsx("div",{className:"top",children:_jsx("h2",{children:"CLAIM NFT"})}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Address"}),_jsx(_Input,{title:"Address",style:{borderRadius:"10px",height:"45px"}}),_jsx("span",{className:"tis",children:"please input the correct one."})]}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Network"}),_jsx(_Input,{disabled:!0,placeholder:"Tron(TRC20)",style:{borderRadius:"10px",height:"45px"}})]}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Amount withdrawn"}),_jsx(_Input,{security:"GUT",suffix:"GUT",style:{borderRadius:"10px",height:"45px"}})]}),_jsx("p",{className:"tis_balance",children:"Available: 1208294 GUT"}),_jsxs("div",{className:"button",children:[_jsx("p",{className:"fee",children:"Fee: 1500GUT"}),r==HttpStatus.wait?_jsx(PageLoading,{}):_jsx(ButtonWidget,{text:"Next",onClick:A})]})]})},d=n(28219),p=n(16924),C,O,f,y=i.ZP.div(C||(C=(0,c.Z)([`
  .cell {
    display: flex;
    border-bottom: 1px solid #e6ebf5;

    p {
      padding: 15px 0;
      box-sizing: border-box;
      flex: 1;
      text-align: center;
      color: #000;
      font-weight: 500;
      margin-bottom: 0;
    }
  }

  .top {
    background: #f8f9fc;
    border-bottom: none;

    p {
      color: #666d7f;
    }
  }
`]))),W=["\u5BA1\u6838\u4E2D","\u5B8C\u6210","\u5931\u8D25"],U=["#333333","#0483E0","#EC404D"],t=function(){var x=(0,u.f)(g.w.ccp_transactionLog),P=x.request,v=x.data,w=x.status;return(0,_.useEffect)(function(){P(0)},[]),w==u.o.wait?(0,e.jsx)(b.Z,{}):(0,e.jsxs)(y,{children:[(0,e.jsxs)("div",{className:"top cell",children:[(0,e.jsx)("p",{children:(0,e.jsx)(d._H,{id:"pages.myaccount.time"})}),(0,e.jsx)("p",{children:(0,e.jsx)(d._H,{id:"pages.myaccount.amount"})}),(0,e.jsx)("p",{children:(0,e.jsx)(d._H,{id:"pages.myaccount.currency_type"})}),(0,e.jsx)("p",{children:(0,e.jsx)(d._H,{id:"pages.myaccount.arrival_account"})}),(0,e.jsx)("p",{children:(0,e.jsx)(d._H,{id:"pages.myaccount.status"})})]}),v==null?(0,e.jsx)("div",{}):v.data.map(function(r,A){return(0,e.jsx)(p.Link,{to:{pathname:"./details/".concat(r.id),search:"data=".concat(JSON.stringify(r))},children:(0,e.jsxs)("div",{className:"cell",children:[(0,e.jsx)("p",{children:r.time}),(0,e.jsx)("p",{children:parseFloat(r.amount).toFixed(2)}),(0,e.jsx)("p",{children:r.coin_type}),(0,e.jsx)("p",{children:r.remarks}),(0,e.jsx)("p",{style:{color:U[r.state]},children:W[r.state]})]},r.id)})})]})},B=i.ZP.div(O||(O=(0,c.Z)([`
  margin-bottom: 20px;
  width: 40%;

  .card {
    background: url("https://market.winnfthorse.io/img/cardBg.ec8f8107.png") no-repeat;
    text-align: center;
    background-size: cover;

    .inner {
      padding: 60px;
      margin: 0 auto;
      display: inline-block;

      img {
        display: block;
        margin: 0 auto;
        width: 40px;
      }

      p {
        span {
          font-weight: bold;
        }

        color: white;
        margin-top: 20px;
      }
    }

    .button {
      background: url("https://market.winnfthorse.io/img/withdrawBtnBg.3d9916b4.png") no-repeat;
      background-size: cover;

      cursor: pointer;

      p {
        height: 35px;
        line-height: 35px;
        color: #fff;
        margin-bottom: 0;
      }
    ;
    }
  }

  @media (max-width: 576px) {
    width: 100%;

    .card {
      .inner {
        padding: 30px;
      }
    }

  }
`]))),K=function(){var x=useContext(ModalContext),P=x.onPresent;return _jsx(B,{children:_jsxs("div",{className:"card",children:[_jsxs("div",{className:"inner",children:[_jsx("img",{src:"https://market.winnfthorse.io/img/apenft.9fd30769.png",alt:""}),_jsxs("p",{children:[_jsx("span",{children:"GUT"})," 1,208,294.00"]})]}),_jsx("div",{className:"button",onClick:function(){return P(_jsx(ClaimModelWidget,{}))},children:_jsx("p",{children:"Claim GUT"})})]})})},k=i.ZP.div(f||(f=(0,c.Z)([`
  padding: 20px;
  box-sizing: border-box;
`]))),R=function(){return(0,e.jsx)(k,{children:(0,e.jsx)(t,{})})}},67329:function(D,m,n){"use strict";n.d(m,{f:function(){return b},o:function(){return s}});var c=n(3182),i=n(2824),u=n(94043),g=n.n(u),_=n(67294),b=function(M){var j=(0,_.useState)(s.start),o=(0,i.Z)(j,2),e=o[0],l=o[1],E=(0,_.useState)(),h=(0,i.Z)(E,2),d=h[0],p=h[1],C=(0,_.useCallback)((0,c.Z)(g().mark(function O(){var f,y,W=arguments;return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(s.wait),t.next=4,M.apply(void 0,W);case 4:return f=t.sent,p(f),l(s.success),t.abrupt("return",f);case 10:return t.prev=10,t.t0=t.catch(0),y={err:t.t0.info},p(y),l(s.failure),t.abrupt("return",y);case 16:case"end":return t.stop()}},O,null,[[0,10]])})),[l,p]);return{status:e,request:C,data:d}},s;(function(a){a[a.start=0]="start",a[a.wait=1]="wait",a[a.success=2]="success",a[a.failure=3]="failure"})(s||(s={}))},47673:function(D,m,n){"use strict";var c=n(38663),i=n.n(c),u=n(7104),g=n.n(u),_=n(57663)}}]);
