(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[850],{7104:function(){},16993:function(D,c,n){"use strict";n.d(c,{b:function(){return E}});var o=n(57663),r=n(71577),d=n(20310),m=n(67294),_=n(47416),v=n(85893),s,a=(0,_.ZP)(r.Z)(s||(s=(0,d.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),E=function(u){var e=u.text,i=u.block,f=i===void 0?!0:i,x=u.onClick;return(0,v.jsx)(a,{type:"default",shape:"round",onClick:function(){return x&&x()},size:"large",block:f,children:e})}},34503:function(D,c,n){"use strict";n.r(c),n.d(c,{default:function(){return R}});var o=n(20310),r=n(47416),d=n(67329),m=n(93874),_=n(67294),v=n(83832),s=n(39916),a=n(47673),E=n(34792),W=n(94043),u=n(16993),e=n(85893),i,f=r.ZP.div(i||(i=(0,o.Z)([`
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
`]))),x=function(){var p=useContext(ModalContext),j=p.onDismiss,h=useWait(HttpServer.nftSell),L=h.request,l=h.status,B=useCallback(_asyncToGenerator(_regeneratorRuntime.mark(function I(){return _regeneratorRuntime.wrap(function(U){for(;;)switch(U.prev=U.next){case 0:try{j(),_message.success("\u51FA\u552E\u6210\u529F")}catch(k){_message.error(k)}case 1:case"end":return U.stop()}},I)})),[]);return _jsxs(f,{children:[_jsx("div",{className:"top",children:_jsx("h2",{children:"CLAIM NFT"})}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Address"}),_jsx(_Input,{title:"Address",style:{borderRadius:"10px",height:"45px"}}),_jsx("span",{className:"tis",children:"please input the correct one."})]}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Network"}),_jsx(_Input,{disabled:!0,placeholder:"Tron(TRC20)",style:{borderRadius:"10px",height:"45px"}})]}),_jsxs("div",{className:"input",children:[_jsx("h2",{children:"Amount withdrawn"}),_jsx(_Input,{security:"GUT",suffix:"GUT",style:{borderRadius:"10px",height:"45px"}})]}),_jsx("p",{className:"tis_balance",children:"Available: 1208294 GUT"}),_jsxs("div",{className:"button",children:[_jsx("p",{className:"fee",children:"Fee: 1500GUT"}),l==HttpStatus.wait?_jsx(PageLoading,{}):_jsx(ButtonWidget,{text:"Next",onClick:B})]})]})},b,g,C,T=r.ZP.div(b||(b=(0,o.Z)([`
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
`]))),P=["\u5BA1\u6838\u4E2D","\u5B8C\u6210","\u5931\u8D25"],y=["#333333","#0483E0","#EC404D"],M=function(){var p=(0,d.f)(m.w.ccp_transactionLog),j=p.request,h=p.data,L=p.status;return(0,_.useEffect)(function(){j(0)},[]),L==d.o.wait?(0,e.jsx)(v.Z,{}):(0,e.jsxs)(T,{children:[(0,e.jsxs)("div",{className:"top cell",children:[(0,e.jsx)("p",{children:"Time"}),(0,e.jsx)("p",{children:"Amount"}),(0,e.jsx)("p",{children:"Currency type"}),(0,e.jsx)("p",{children:"Arrival account"}),(0,e.jsx)("p",{children:"Status"})]}),h==null?(0,e.jsx)("div",{}):h.map(function(l,B){return(0,e.jsxs)("div",{className:"cell",children:[(0,e.jsx)("p",{children:l.time}),(0,e.jsx)("p",{children:parseFloat(l.amount).toFixed(2)}),(0,e.jsx)("p",{children:l.trans_type}),(0,e.jsx)("p",{children:l.remarks}),(0,e.jsx)("p",{style:{color:y[l.state]},children:P[l.state]})]},l.id)})]})},O=r.ZP.div(g||(g=(0,o.Z)([`
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
      img{
        display: block;
        margin: 0 auto;
        width: 40px;
      }
      p{
        span{
          font-weight: bold;
        }
        color: white;
        margin-top: 20px;
      }
    }

    .button{
      background: url("https://market.winnfthorse.io/img/withdrawBtnBg.3d9916b4.png") no-repeat ;
      background-size: cover;

      cursor: pointer;
      p{
        height: 35px;
        line-height: 35px;
        color: #fff;
        margin-bottom: 0;
      };
    }
  }

  @media (max-width: 576px) {
    width: 100%;

    .card{
      .inner{
        padding: 30px;
      }
    }

  }
`]))),w=function(){var p=useContext(ModalContext),j=p.onPresent;return _jsx(O,{children:_jsxs("div",{className:"card",children:[_jsxs("div",{className:"inner",children:[_jsx("img",{src:"https://market.winnfthorse.io/img/apenft.9fd30769.png",alt:""}),_jsxs("p",{children:[_jsx("span",{children:"GUT"})," 1,208,294.00"]})]}),_jsx("div",{className:"button",onClick:function(){return j(_jsx(ClaimModelWidget,{}))},children:_jsx("p",{children:"Claim GUT"})})]})})},t=r.ZP.div(C||(C=(0,o.Z)([`
  padding: 20px;
  box-sizing: border-box;
`]))),R=function(){return(0,e.jsx)(t,{children:(0,e.jsx)(M,{})})}},67329:function(D,c,n){"use strict";n.d(c,{f:function(){return v},o:function(){return s}});var o=n(3182),r=n(2824),d=n(94043),m=n.n(d),_=n(67294),v=function(E){var W=(0,_.useState)(s.start),u=(0,r.Z)(W,2),e=u[0],i=u[1],f=(0,_.useState)(),x=(0,r.Z)(f,2),b=x[0],g=x[1],C=(0,_.useCallback)(function(){var T=(0,o.Z)(m().mark(function P(y){var M,O;return m().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(s.wait),t.next=4,E(y);case 4:M=t.sent,g(M),i(s.success),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),O={err:t.t0},g(O),i(s.failure);case 14:case"end":return t.stop()}},P,null,[[0,9]])}));return function(P){return T.apply(this,arguments)}}(),[i,g]);return{status:e,request:C,data:b}},s;(function(a){a[a.start=0]="start",a[a.wait=1]="wait",a[a.success=2]="success",a[a.failure=3]="failure"})(s||(s={}))},47673:function(D,c,n){"use strict";var o=n(65056),r=n.n(o),d=n(7104),m=n.n(d),_=n(57663)}}]);
