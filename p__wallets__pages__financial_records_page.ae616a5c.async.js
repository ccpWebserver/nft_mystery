(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[850],{7104:function(){},16993:function(y,u,n){"use strict";n.d(u,{b:function(){return P}});var o=n(57663),r=n(71577),d=n(20310),x=n(67294),_=n(47416),f=n(85893),s,a=(0,_.ZP)(r.Z)(s||(s=(0,d.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),P=function(p){var e=p.text,i=p.block,b=i===void 0?!0:i,g=p.onClick;return(0,f.jsx)(a,{type:"default",shape:"round",onClick:function(){return g&&g()},size:"large",block:b,children:e})}},34503:function(y,u,n){"use strict";n.r(u),n.d(u,{default:function(){return w}});var o=n(20310),r=n(47416),d=n(67329),x=n(93874),_=n(67294),f=n(83832),s=n(39916),a=n(47673),P=n(34792),D=n(94043),p=n(16993),e=n(85893),i,b=r.ZP.div(i||(i=(0,o.Z)([`
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

  .input{
    margin-bottom: 20px;

    h2{
      font-size: 28px;
      font-weight: bold;
      word-break: break-word;
    }
    .tis{
      font-size: 12px;
      word-break: break-all;
      color: #666;
    }
  }

  .tis_balance{
    font-size: 14px;
    word-break: break-all;
    color: #666;
    margin: 30px 0;
  }

  .button{
    width: 30%;
    margin: 0 auto;
    .fee{
      text-align: center;
      margin-bottom: 0;
      color: #666;
    }
  }


  @media (max-width: 576px) {
    padding: 0 5%;
    .button{
      width: 80%;
    }

    .input{
      h2{
        font-size: 24px;
      }
    }

  }
`]))),g=function(){var m=useContext(ModalContext),C=m.onDismiss,v=useWait(HttpServer.nftSell),A=v.request,l=v.status,B=useCallback(_asyncToGenerator(_regeneratorRuntime.mark(function I(){return _regeneratorRuntime.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:try{C(),_message.success("\u51FA\u552E\u6210\u529F")}catch(k){_message.error(k)}case 1:case"end":return T.stop()}},I)})),[]);return _jsxs(b,{children:[_jsx("div",{className:"top",children:_jsx("h2",{children:"CLAIM NFT"})}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Address"}),_jsx(_Input,{title:"Address",style:{borderRadius:"10px",height:"45px"}}),_jsx("span",{className:"tis",children:"please input the correct one."})]}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Network"}),_jsx(_Input,{disabled:!0,placeholder:"Tron(TRC20)",style:{borderRadius:"10px",height:"45px"}})]}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Amount withdrawn"}),_jsx(_Input,{security:"GUT",suffix:"GUT",style:{borderRadius:"10px",height:"45px"}})]}),_jsx("p",{className:"tis_balance",children:"Available: 1208294 GUT"}),_jsxs("div",{className:"button",children:[_jsx("p",{className:"fee",children:"Fee: 1500GUT"}),l==HttpStatus.wait?_jsx(PageLoading,{}):_jsx(ButtonWidget,{text:"Next",onClick:B})]})]})},c=n(53190),h,M,O,j=r.ZP.div(h||(h=(0,o.Z)([`
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
`]))),E=["\u5BA1\u6838\u4E2D","\u5B8C\u6210","\u5931\u8D25"],W=["#333333","#0483E0","#EC404D"],U=function(){var m=(0,d.f)(x.w.ccp_transactionLog),C=m.request,v=m.data,A=m.status;return(0,_.useEffect)(function(){C(0)},[]),A==d.o.wait?(0,e.jsx)(f.Z,{}):(0,e.jsxs)(j,{children:[(0,e.jsxs)("div",{className:"top cell",children:[(0,e.jsx)("p",{children:(0,e.jsx)(c._H,{id:"pages.myaccount.time"})}),(0,e.jsx)("p",{children:(0,e.jsx)(c._H,{id:"pages.myaccount.amount"})}),(0,e.jsx)("p",{children:(0,e.jsx)(c._H,{id:"pages.myaccount.currency_type"})}),(0,e.jsx)("p",{children:(0,e.jsx)(c._H,{id:"pages.myaccount.arrival_account"})}),(0,e.jsx)("p",{children:(0,e.jsx)(c._H,{id:"pages.myaccount.status"})})]}),v==null?(0,e.jsx)("div",{}):v.data.map(function(l,B){return(0,e.jsxs)("div",{className:"cell",children:[(0,e.jsx)("p",{children:l.time}),(0,e.jsx)("p",{children:parseFloat(l.amount).toFixed(2)}),(0,e.jsx)("p",{children:l.trans_type}),(0,e.jsx)("p",{children:l.remarks}),(0,e.jsx)("p",{style:{color:W[l.state]},children:E[l.state]})]},l.id)})]})},t=r.ZP.div(M||(M=(0,o.Z)([`
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
`]))),K=function(){var m=useContext(ModalContext),C=m.onPresent;return _jsx(t,{children:_jsxs("div",{className:"card",children:[_jsxs("div",{className:"inner",children:[_jsx("img",{src:"https://market.winnfthorse.io/img/apenft.9fd30769.png",alt:""}),_jsxs("p",{children:[_jsx("span",{children:"GUT"})," 1,208,294.00"]})]}),_jsx("div",{className:"button",onClick:function(){return C(_jsx(ClaimModelWidget,{}))},children:_jsx("p",{children:"Claim GUT"})})]})})},R=r.ZP.div(O||(O=(0,o.Z)([`
  padding: 20px;
  box-sizing: border-box;
`]))),w=function(){return(0,e.jsx)(R,{children:(0,e.jsx)(U,{})})}},67329:function(y,u,n){"use strict";n.d(u,{f:function(){return f},o:function(){return s}});var o=n(3182),r=n(2824),d=n(94043),x=n.n(d),_=n(67294),f=function(P){var D=(0,_.useState)(s.start),p=(0,r.Z)(D,2),e=p[0],i=p[1],b=(0,_.useState)(),g=(0,r.Z)(b,2),c=g[0],h=g[1],M=(0,_.useCallback)((0,o.Z)(x().mark(function O(){var j,E,W=arguments;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(s.wait),t.next=4,P.apply(void 0,W);case 4:return j=t.sent,h(j),i(s.success),t.abrupt("return",j);case 10:return t.prev=10,t.t0=t.catch(0),E={err:t.t0.info},h(E),i(s.failure),t.abrupt("return",E);case 16:case"end":return t.stop()}},O,null,[[0,10]])})),[i,h]);return{status:e,request:M,data:c}},s;(function(a){a[a.start=0]="start",a[a.wait=1]="wait",a[a.success=2]="success",a[a.failure=3]="failure"})(s||(s={}))},47673:function(y,u,n){"use strict";var o=n(65056),r=n.n(o),d=n(7104),x=n.n(d),_=n(57663)}}]);
