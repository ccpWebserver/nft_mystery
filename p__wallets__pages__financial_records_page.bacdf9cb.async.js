(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[850],{7104:function(){},16993:function(D,m,n){"use strict";n.d(m,{b:function(){return y}});var d=n(57663),r=n(71577),u=n(20310),g=n(67294),p=n(47416),f=n(85893),s,a=(0,p.ZP)(r.Z)(s||(s=(0,u.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(b){var i=b.disabled;return i&&.5}),y=function(i){var e=i.text,o=i.block,j=o===void 0?!0:o,h=i.onClick,l=i.disabled,_=l===void 0?!1:l;return(0,f.jsx)(a,{type:"default",shape:"round",disabled:_,onClick:function(){_||h&&h()},size:"large",block:j,children:e})}},34503:function(D,m,n){"use strict";n.r(m),n.d(m,{default:function(){return w}});var d=n(20310),r=n(47416),u=n(67329),g=n(93874),p=n(67294),f=n(83832),s=n(31894),a=n(47673),y=n(34792),b=n(94043),i=n(16993),e=n(85893),o,j=r.ZP.div(o||(o=(0,d.Z)([`
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
`]))),h=function(){var x=useContext(ModalContext),M=x.onDismiss,v=useWait(HttpServer.update_nftname),A=v.request,c=v.status,B=useCallback(_asyncToGenerator(_regeneratorRuntime.mark(function I(){return _regeneratorRuntime.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:try{M(),_message.success("\u51FA\u552E\u6210\u529F")}catch(k){_message.error(k)}case 1:case"end":return T.stop()}},I)})),[]);return _jsxs(j,{children:[_jsx("div",{className:"top",children:_jsx("h2",{children:"CLAIM NFT"})}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Address"}),_jsx(_Input,{title:"Address",style:{borderRadius:"10px",height:"45px"}}),_jsx("span",{className:"tis",children:"please input the correct one."})]}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Network"}),_jsx(_Input,{disabled:!0,placeholder:"Tron(TRC20)",style:{borderRadius:"10px",height:"45px"}})]}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Amount withdrawn"}),_jsx(_Input,{security:"GUT",suffix:"GUT",style:{borderRadius:"10px",height:"45px"}})]}),_jsx("p",{className:"tis_balance",children:"Available: 1208294 GUT"}),_jsxs("div",{className:"button",children:[_jsx("p",{className:"fee",children:"Fee: 1500GUT"}),c==HttpStatus.wait?_jsx(PageLoading,{}):_jsx(ButtonWidget,{text:"Next",onClick:B})]})]})},l=n(28219),_,E,O,C=r.ZP.div(_||(_=(0,d.Z)([`
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
`]))),P=["\u5BA1\u6838\u4E2D","\u5B8C\u6210","\u5931\u8D25"],W=["#333333","#0483E0","#EC404D"],U=function(){var x=(0,u.f)(g.w.ccp_transactionLog),M=x.request,v=x.data,A=x.status;return(0,p.useEffect)(function(){M(0)},[]),A==u.o.wait?(0,e.jsx)(f.Z,{}):(0,e.jsxs)(C,{children:[(0,e.jsxs)("div",{className:"top cell",children:[(0,e.jsx)("p",{children:(0,e.jsx)(l._H,{id:"pages.myaccount.time"})}),(0,e.jsx)("p",{children:(0,e.jsx)(l._H,{id:"pages.myaccount.amount"})}),(0,e.jsx)("p",{children:(0,e.jsx)(l._H,{id:"pages.myaccount.currency_type"})}),(0,e.jsx)("p",{children:(0,e.jsx)(l._H,{id:"pages.myaccount.arrival_account"})}),(0,e.jsx)("p",{children:(0,e.jsx)(l._H,{id:"pages.myaccount.status"})})]}),v==null?(0,e.jsx)("div",{}):v.data.map(function(c,B){return(0,e.jsxs)("div",{className:"cell",children:[(0,e.jsx)("p",{children:c.time}),(0,e.jsx)("p",{children:parseFloat(c.amount).toFixed(2)}),(0,e.jsx)("p",{children:c.trans_type}),(0,e.jsx)("p",{children:c.remarks}),(0,e.jsx)("p",{style:{color:W[c.state]},children:P[c.state]})]},c.id)})]})},t=r.ZP.div(E||(E=(0,d.Z)([`
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
`]))),K=function(){var x=useContext(ModalContext),M=x.onPresent;return _jsx(t,{children:_jsxs("div",{className:"card",children:[_jsxs("div",{className:"inner",children:[_jsx("img",{src:"https://market.winnfthorse.io/img/apenft.9fd30769.png",alt:""}),_jsxs("p",{children:[_jsx("span",{children:"GUT"})," 1,208,294.00"]})]}),_jsx("div",{className:"button",onClick:function(){return M(_jsx(ClaimModelWidget,{}))},children:_jsx("p",{children:"Claim GUT"})})]})})},R=r.ZP.div(O||(O=(0,d.Z)([`
  padding: 20px;
  box-sizing: border-box;
`]))),w=function(){return(0,e.jsx)(R,{children:(0,e.jsx)(U,{})})}},67329:function(D,m,n){"use strict";n.d(m,{f:function(){return f},o:function(){return s}});var d=n(3182),r=n(2824),u=n(94043),g=n.n(u),p=n(67294),f=function(y){var b=(0,p.useState)(s.start),i=(0,r.Z)(b,2),e=i[0],o=i[1],j=(0,p.useState)(),h=(0,r.Z)(j,2),l=h[0],_=h[1],E=(0,p.useCallback)((0,d.Z)(g().mark(function O(){var C,P,W=arguments;return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(s.wait),t.next=4,y.apply(void 0,W);case 4:return C=t.sent,_(C),o(s.success),t.abrupt("return",C);case 10:return t.prev=10,t.t0=t.catch(0),P={err:t.t0.info},_(P),o(s.failure),t.abrupt("return",P);case 16:case"end":return t.stop()}},O,null,[[0,10]])})),[o,_]);return{status:e,request:E,data:l}},s;(function(a){a[a.start=0]="start",a[a.wait=1]="wait",a[a.success=2]="success",a[a.failure=3]="failure"})(s||(s={}))},47673:function(D,m,n){"use strict";var d=n(38663),r=n.n(d),u=n(7104),g=n.n(u),p=n(57663)}}]);
