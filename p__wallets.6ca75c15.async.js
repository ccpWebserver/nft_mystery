(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(Q,E,n){"use strict";n.d(E,{e:function(){return N}});var K=n(2824),P=n(20310),p=n(67294),z=n(17857),y=n(47416),M=n(85893),S,m=y.ZP.div(S||(S=(0,P.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(i){return i.padding||"0"}),N=function(O){var D=O.value,x=D===void 0?"":D,o=O.decimals,A=O.padding,f=(0,p.useState)(0),a=(0,K.Z)(f,2),v=a[0],j=a[1],_=(0,p.useState)(0),C=(0,K.Z)(_,2),Z=C[0],I=C[1];return(0,p.useEffect)(function(){typeof x=="number"&&(j(Z),I(x))},[x]),(0,M.jsx)(m,{padding:A,children:typeof x=="string"?x:(0,M.jsx)(z.ZP,{start:v,end:Z,decimals:o!==void 0?o:0,duration:1,separator:","})})}},64731:function(Q,E,n){"use strict";n.d(E,{b:function(){return t}});var K=n(58024),P=n(39144),p=n(20310),z=n(67294),y=n(47416),M=n(16924),S=n(46677),m=n.n(S),N=n(28219),i=n(92908),O=n.n(i),D=n(37372),x=n.n(D),o=n(78403),A=n(27254),f=n.n(A),a=n(85893),v,j,_,C=y.ZP.div(v||(v=(0,p.Z)([`
  .images {
    padding: 20px;

    img {
      display: block;
      width: 100%;
    }
  }

  background: linear-gradient(rgb(237, 237, 255) 0%, rgb(215, 215, 255) 100%);
  border-radius: 0 0 20px 20px;
  position: relative;

  .bottom {
    border-radius: 0 0 20px 20px;
    padding: 5px;

    h4 {
      color: rgb(47, 46, 65);
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0;
    }
  }

  .price {
    position: absolute;
    left: 10px;
    top: 10px;

    img {
      display: block;
      width: 24px !important;
    }
  }

  @media (max-width: 576px) {
    .images {

      img {
        display: block;
        height: 137px;
        width: 137px;
        //width: 100%;
      }
    }

  }
`]))),Z=y.ZP.div(j||(j=(0,p.Z)([`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #505f79;
    font-size: 14px;
  }

  p {
    color: #2f2e41;
    font: 16px/1.4 Noto Sans, sans-serif;
    margin-bottom: 0;
    font-weight: 700;
    align-items: center;
    display: flex;

    .icon {
      display: block;
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }
  }

  @media (max-width: 576px) {
    font-size: 12px;

  }
`]))),I=(0,y.ZP)(P.Z)(_||(_=(0,p.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;
  width: 100%;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;
  }

  @media (max-width: 576px) {
    .ant-card-body {
      padding: 10px;
    }
  }
`]))),t=function(L){var r=L.props,s=L.path,T=s===void 0?"market":s,w=(0,o.X)(r.img_url);return(0,a.jsx)(M.Link,{to:{pathname:"".concat(T,"/").concat(r.id),search:"id=".concat(r.id,"&name=").concat(r.dog_name,"&path=").concat(T)},children:(0,a.jsx)(I,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,a.jsxs)(C,{children:[(0,a.jsx)("div",{className:"images",children:r.state===0?w?(0,a.jsx)("img",{src:w}):(0,a.jsx)("img",{src:f(),alt:""}):(0,a.jsx)("img",{src:f(),alt:""})}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsx)("h4",{children:r.dog_name})}),(0,a.jsx)("div",{className:"price",children:(0,a.jsx)("img",{src:r.dog_sex==1?O():x(),alt:""})})]}),children:r.is_selling==1&&(0,a.jsxs)(Z,{children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(N._H,{id:"component.nft_car.sell_price"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{src:m(),alt:"",className:"icon"}),parseInt(r.market_price).toFixed(2)]})]})})})}},45377:function(Q,E,n){"use strict";n.r(E),n.d(E,{default:function(){return _n}});var K=n(54421),P=n(38272),p=n(14781),z=n(40308),y=n(20228),M=n(11382),S=n(13062),m=n(71230),N=n(89032),i=n(15746),O=n(57663),D=n(71577),x=n(3182),o=n(20310),A=n(94043),f=n.n(A),a=n(47416),v=n(64731),j=n(67294),_=n(67329),C=n(93874),Z=n(53776),I=n(99219),t=n(85893),F,L,r=a.ZP.div(F||(F=(0,o.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;

    div {
      font-size: 24px;
      span{
        font-size: 24px;
        font-weight: 700;
        color: #fff;
      }
    }
  }

  p {
    font-size: 16px;
    color: hsla(0, 0%, 100%, .8);
    margin-bottom: 0;
  }
`]))),s=function(g){var l=g.text,c=g.value;return(0,t.jsxs)(r,{children:[(0,t.jsx)("h3",{children:(0,t.jsx)(I.e,{value:c!=null?c:0})}),(0,t.jsx)("p",{children:l})]})},T=a.ZP.div(L||(L=(0,o.Z)([`
  border-radius: 100px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;

  @media (max-width: 576px) {
    margin-top: 15px;
    border-radius: 20px;
    margin-bottom: 15px;
    padding: 10px;

    .ant-list-header {
      padding: 0;
    }

    .ant-list-bordered .ant-list-header {
      padding: 0;
    }
  }
`]))),w=function(){return _jsx(T,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(s,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(s,{text:"USDT",value:0})})]})})},k=n(77624),Tn=n(58024),xn=n(39144),gn=n(16924),pn=n(27254),mn=n.n(pn),q,nn,tn,vn=a.ZP.div(q||(q=(0,o.Z)([`
  .images {
    padding: 20px;

    img {
      display: block;
      width: 100%;
    }
  }

  background: linear-gradient(rgb(237, 237, 255) 0%, rgb(215, 215, 255) 100%);
  border-radius: 0 0 20px 20px;
  position: relative;

  .bottom {
    border-radius: 0 0 20px 20px;
    padding: 5px;

    h4 {
      color: rgb(47, 46, 65);
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0;
    }
  }

  .price {
    position: absolute;
    right: 10px;
    top: 10px;
    background: linear-gradient(270deg, #89d143, #75db8d);
    width: 36px;
    height: 36px;
    border-radius: 32px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    line-height: 36px;
  }
`]))),Un=a.ZP.div(nn||(nn=(0,o.Z)([`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #505f79;
    font-size: 14px;
  }

  p {
    color: #2f2e41;
    font: 16px/1.4 Noto Sans, sans-serif;
    margin-bottom: 0;
    font-weight: 700;
    align-items: center;
    display: flex;

    .icon {
      display: block;
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }
  }

  @media (max-width: 576px) {
    font-size: 12px;

  }
`]))),un=(0,a.ZP)(xn.Z)(tn||(tn=(0,o.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;
  }
  @media (max-width: 576px) {
    .ant-card-body {
      padding: 10px;
    }
  }
`]))),hn=function(g){var l=g.props,c=g.path,W=c===void 0?"market":c;return(0,t.jsx)(gn.Link,{to:{pathname:"".concat(W,"/").concat(l.id),search:"id=".concat(l.id,"&name=").concat(l.dog_name,"&path=").concat(W)},children:(0,t.jsx)(un,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,t.jsxs)(vn,{children:[(0,t.jsx)("div",{className:"images",children:(0,t.jsx)("img",{src:mn()})}),(0,t.jsx)("div",{className:"bottom",children:(0,t.jsx)("h4",{children:l.dog_name})})]})})})},fn=n(43581),an,jn=a.ZP.div(an||(an=(0,o.Z)([`

  padding: 20px;
  box-sizing: border-box;


  .bottom_pagination {
    display: flex;
    justify-content: center;

    .ant-pagination-options {
      display: none;
    }

    .ant-pagination-item {


      a {
        display: inline-block;
      }
    }
  }

  .loading {
    display: flex;
    margin: 10px 0;
    height: 40px;
    justify-content: center;
  }

  .ant-list-split .ant-list-header {
    border: none;
  }

  .ant-list-split .ant-list-item {
    border: none;
  }

  .ant-list-bordered {
    border: none;
  }

  .balances {
    > div {
      margin-bottom: 30px;


      > div {
        padding: 10px 0;
        box-sizing: border-box;
        display: flex;
        align-items: end;
      }

      div {

        font-size: 18px;


        img {
          display: block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    padding: 10px;
    .ant-list-bordered .ant-list-header {
      padding: 0 10px;
    }

    .ant-card-cover {
      img {
        width: 100%;
      }
    }
  }
`]))),_n=function(){var U,g,l,c,W,$,G,V,bn=(0,Z.t)("@@initialState"),e=bn.initialState,Y=(0,_.f)(C.w.nftPacket),d=Y.data,H=Y.request,En=Y.status,en=(0,j.useRef)(null),sn=(0,fn.YB)(),dn=window.screen.width>500;(0,j.useEffect)(function(){dn&&H(1)},[]);var Pn=function(h){var B=h.pageSize,Dn=h.offset;return new Promise(function(){var Cn=(0,x.Z)(f().mark(function cn(Zn){var J;return f().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,H(Dn/5+1);case 2:J=R.sent,Zn({total:J.data.goods.count,data:J.data.goods.data});case 4:case"end":return R.stop()}},cn)}));return function(cn){return Cn.apply(this,arguments)}}())},b=(0,k.BR)(Pn,{ref:en,initPageSize:5,incrementSize:5}),X=b.data,on=b.loading,rn=b.loadingMore,Wn=b.reload,yn=b.loadMore,ln=b.total,Mn=b.noMore,On=function(){return(0,t.jsx)(t.Fragment,{children:!Mn&&(0,t.jsx)(D.Z,{onClick:yn,loading:rn,children:rn?"Loading more":"Click to load more"})})};return(0,t.jsx)(jn,{children:dn?(0,t.jsxs)("div",{children:[(0,t.jsx)(T,{children:(0,t.jsxs)(m.Z,{gutter:20,children:[(0,t.jsx)(i.Z,{xs:12,sm:6,children:(0,t.jsx)(s,{text:"CCP.Dog",value:e==null||(U=e.currentUser)===null||U===void 0?void 0:U.ccp_dog_coin})}),(0,t.jsx)(i.Z,{xs:12,sm:6,children:(0,t.jsx)(s,{text:"USDT",value:e==null||(g=e.currentUser)===null||g===void 0?void 0:g.usdt_coin})}),(0,t.jsx)(i.Z,{xs:12,sm:6,children:(0,t.jsx)(s,{text:"GUT",value:e==null||(l=e.currentUser)===null||l===void 0?void 0:l.gut_coin})}),(0,t.jsx)(i.Z,{xs:12,sm:6,children:(0,t.jsx)(s,{text:sn.formatMessage({id:"pages.myaccount.own_an_nft"}),value:ln})})]})}),(0,t.jsxs)("div",{style:{padding:"20px"},children:[(0,t.jsx)(m.Z,{gutter:48,children:(d==null||(c=d.data)===null||c===void 0?void 0:c.goods.data.length)>0?d==null||(W=d.data)===null||W===void 0?void 0:W.goods.data.map(function(u){return(0,t.jsx)(i.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:u.state==0?(0,t.jsx)(v.b,{props:u,path:"wallets"}):(0,t.jsx)(hn,{props:u,path:"wallets"})},u.id)}):(0,t.jsx)("div",{style:{textAlign:"center"}})}),(0,t.jsx)("div",{className:"loading",children:En==_.o.wait&&(0,t.jsx)(M.Z,{size:"large"})}),(0,t.jsx)("div",{className:"bottom_pagination",children:(d==null?void 0:d.data.count)&&(0,t.jsx)(z.Z,{defaultCurrent:1,onChange:function(h){H(h)},total:d==null?void 0:d.data.count})})]})]}):(0,t.jsx)("div",{ref:en,style:{height:"90vh",overflowY:"auto"},children:(0,t.jsx)(P.ZP,{header:(0,t.jsx)("div",{children:(0,t.jsx)(T,{children:(0,t.jsxs)(m.Z,{gutter:20,children:[(0,t.jsx)(i.Z,{xs:12,sm:6,children:(0,t.jsx)(s,{text:"CCP.Dog",value:e==null||($=e.currentUser)===null||$===void 0?void 0:$.ccp_dog_coin})}),(0,t.jsx)(i.Z,{xs:12,sm:6,children:(0,t.jsx)(s,{text:"USDT",value:e==null||(G=e.currentUser)===null||G===void 0?void 0:G.usdt_coin})}),(0,t.jsx)(i.Z,{xs:12,sm:6,children:(0,t.jsx)(s,{text:"GUT",value:e==null||(V=e.currentUser)===null||V===void 0?void 0:V.gut_coin})}),(0,t.jsx)(i.Z,{xs:12,sm:6,children:(0,t.jsx)(s,{text:sn.formatMessage({id:"pages.myaccount.own_an_nft"}),value:ln})})]})})}),footer:!on&&On(),loading:on,bordered:!0,dataSource:X,renderItem:function(h,B){return(0,t.jsx)(P.ZP.Item,{style:{padding:B%2==0?12:0},children:B%2==0?(0,t.jsxs)(m.Z,{gutter:12,style:{minWidth:"100%"},children:[(0,t.jsx)(i.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,t.jsx)(v.b,{path:"wallets",props:h})},h.id),X[B+1]&&(0,t.jsx)(i.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,t.jsx)(v.b,{path:"wallets",props:X[B+1]})},h.id+1)]}):(0,t.jsx)("div",{})})}})})})}}}]);
