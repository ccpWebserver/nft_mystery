(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[850],{16993:function(U,h,e){"use strict";e.d(h,{b:function(){return p}});var u=e(57663),i=e(71577),c=e(20310),g=e(67294),s=e(47416),f=e(85893),t,r=(0,s.ZP)(i.Z)(t||(t=(0,c.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),p=function(o){var j=o.text,l=o.block,v=l===void 0?!0:l,m=o.onClick;return(0,f.jsx)(r,{type:"default",shape:"round",onClick:function(){return m&&m()},size:"large",block:v,children:j})}},34503:function(U,h,e){"use strict";e.r(h),e.d(h,{default:function(){return I}});var u=e(20310),i=e(47416),c=e(67329),g=e(93874),s=e(67294),f=e(83832),t=e(39916),r=e(47673),p=e(1011),T=e(34792),o=e(55026),j=e(3182),l=e(94043),v=e.n(l),m=e(16993),n=e(85893),_,D=i.ZP.div(_||(_=(0,u.Z)([`
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
`]))),W=function(){var x=(0,s.useContext)(t.tC),P=x.onDismiss,b=(0,c.f)(g.w.nftSell),w=b.request,d=b.status,L=(0,s.useCallback)((0,j.Z)(v().mark(function z(){return v().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:try{P(),o.default.success("\u51FA\u552E\u6210\u529F")}catch(K){o.default.error(K)}case 1:case"end":return M.stop()}},z)})),[]);return(0,n.jsxs)(D,{children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("h2",{children:"CLAIM NFT"})}),(0,n.jsxs)("div",{className:"input",children:[(0,n.jsx)("h2",{children:"Address"}),(0,n.jsx)(p.Z,{title:"Address",style:{borderRadius:"10px",height:"45px"}}),(0,n.jsx)("span",{className:"tis",children:"please input the correct one."})]}),(0,n.jsxs)("div",{className:"input",children:[(0,n.jsx)("h2",{children:"Network"}),(0,n.jsx)(p.Z,{disabled:!0,placeholder:"Tron(TRC20)",style:{borderRadius:"10px",height:"45px"}})]}),(0,n.jsxs)("div",{className:"input",children:[(0,n.jsx)("h2",{children:"Amount withdrawn"}),(0,n.jsx)(p.Z,{security:"GUT",suffix:"GUT",style:{borderRadius:"10px",height:"45px"}})]}),(0,n.jsx)("p",{className:"tis_balance",children:"Available: 1208294 GUT"}),(0,n.jsxs)("div",{className:"button",children:[(0,n.jsx)("p",{className:"fee",children:"Fee: 1500GUT"}),d==c.o.wait?(0,n.jsx)(f.Z,{}):(0,n.jsx)(m.b,{text:"Next",onClick:L})]})]})},C,y,E,O=i.ZP.div(C||(C=(0,u.Z)([`
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
`]))),A=["\u5BA1\u6838\u4E2D","\u5B8C\u6210","\u5931\u8D25"],a=["#333333","#0483E0","#EC404D"],B=function(){var x=(0,c.f)(g.w.ccp_transactionLog),P=x.request,b=x.data,w=x.status;return(0,s.useEffect)(function(){P(0)},[]),w==c.o.wait?(0,n.jsx)(f.Z,{}):(0,n.jsxs)(O,{children:[(0,n.jsxs)("div",{className:"top cell",children:[(0,n.jsx)("p",{children:"Time"}),(0,n.jsx)("p",{children:"Amount"}),(0,n.jsx)("p",{children:"Currency type"}),(0,n.jsx)("p",{children:"Arrival account"}),(0,n.jsx)("p",{children:"Status"})]}),b==null?(0,n.jsx)("div",{}):b.map(function(d,L){return(0,n.jsxs)("div",{className:"cell",children:[(0,n.jsx)("p",{children:d.time}),(0,n.jsx)("p",{children:parseFloat(d.amount).toFixed(2)}),(0,n.jsx)("p",{children:d.trans_type}),(0,n.jsx)("p",{children:d.remarks}),(0,n.jsx)("p",{style:{color:a[d.state]},children:A[d.state]})]},d.id)})]})},k=i.ZP.div(y||(y=(0,u.Z)([`
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
`]))),N=function(){var x=(0,s.useContext)(t.tC),P=x.onPresent;return(0,n.jsx)(k,{children:(0,n.jsxs)("div",{className:"card",children:[(0,n.jsxs)("div",{className:"inner",children:[(0,n.jsx)("img",{src:"https://market.winnfthorse.io/img/apenft.9fd30769.png",alt:""}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{children:"GUT"})," 1,208,294.00"]})]}),(0,n.jsx)("div",{className:"button",onClick:function(){return P((0,n.jsx)(W,{}))},children:(0,n.jsx)("p",{children:"Claim GUT"})})]})})},R=i.ZP.div(E||(E=(0,u.Z)([`
  padding: 20px;
  box-sizing: border-box;
`]))),I=function(){return(0,n.jsxs)(R,{children:[(0,n.jsx)(N,{}),(0,n.jsx)(B,{})]})}},67329:function(U,h,e){"use strict";e.d(h,{f:function(){return f},o:function(){return t}});var u=e(3182),i=e(2824),c=e(94043),g=e.n(c),s=e(67294),f=function(p){var T=(0,s.useState)(t.start),o=(0,i.Z)(T,2),j=o[0],l=o[1],v=(0,s.useState)(),m=(0,i.Z)(v,2),n=m[0],_=m[1],D=(0,s.useCallback)(function(){var W=(0,u.Z)(g().mark(function C(y){var E,O;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,l(t.wait),a.next=4,p(y);case 4:E=a.sent,_(E),l(t.success),a.next=14;break;case 9:a.prev=9,a.t0=a.catch(0),O={err:a.t0},_(O),l(t.failure);case 14:case"end":return a.stop()}},C,null,[[0,9]])}));return function(C){return W.apply(this,arguments)}}(),[l,_]);return{status:j,request:D,data:n}},t;(function(r){r[r.start=0]="start",r[r.wait=1]="wait",r[r.success=2]="success",r[r.failure=3]="failure"})(t||(t={}))}}]);
