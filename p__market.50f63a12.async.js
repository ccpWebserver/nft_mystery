(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(an,W,t){"use strict";t.d(W,{e:function(){return J}});var G=t(2824),T=t(20310),E=t(67294),X=t(17857),I=t(47416),B=t(85893),V,P=I.ZP.div(V||(V=(0,T.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(u){return u.padding||"0"}),J=function(b){var c=b.value,O=c===void 0?"":c,D=b.decimals,x=b.padding,L=(0,E.useState)(0),a=(0,G.Z)(L,2),s=a[0],p=a[1],A=(0,E.useState)(0),C=(0,G.Z)(A,2),M=C[0],F=C[1];return(0,E.useEffect)(function(){typeof O=="number"&&(p(M),F(O))},[O]),(0,B.jsx)(P,{padding:x,children:typeof O=="string"?O:(0,B.jsx)(X.ZP,{start:s,end:M,decimals:D!==void 0?D:0,duration:1,separator:","})})}},14631:function(an,W,t){"use strict";t.r(W),t.d(W,{default:function(){return Zn}});var G=t(54421),T=t(38272),E=t(14781),X=t(40308),I=t(20228),B=t(11382),V=t(13062),P=t(71230),J=t(89032),u=t(15746),b=t(3182),c=t(2824),O=t(57663),D=t(71577),x=t(20310),L=t(94043),a=t.n(L),s=t(67294),p=t(47416),A=t(99219),C=t(67329),M=t(93874),F=t(28219),n=t(85893),nn,w,g=p.ZP.div(nn||(nn=(0,x.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;

    span {
      font-size: 38px;
    }
  }

  p {
    font-size: 16px;
    color: hsla(0, 0%, 100%, .8);
    margin-bottom: 0;
  }
`]))),R=function(r){var o=r.text,e=r.value,d=r.coun,i=d===void 0?"$":d;return(0,n.jsxs)(g,{children:[(0,n.jsxs)("h3",{children:[i," ",e?(0,n.jsx)(A.e,{value:e}):"--"]}),(0,n.jsx)("p",{children:o})]})},Q=p.ZP.div(w||(w=(0,x.Z)([`
  border-radius: 15px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;

  @media (max-width: 576px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`]))),H=function(){var r=(0,C.f)(M.w.nftHome),o=r.request,e=r.data,d=r.status,i=(0,F.YB)();return(0,s.useEffect)(function(){o("")},[]),(0,n.jsx)(Q,{className:"Statistic",children:(0,n.jsxs)(P.Z,{children:[(0,n.jsx)(u.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(R,{text:i.formatMessage({id:"pages.market.new_price"}),value:e==null?void 0:e.data.last_price})}),(0,n.jsx)(u.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(R,{coun:"",text:i.formatMessage({id:"pages.market.total_sale"}),value:e==null?void 0:e.data.total_transaction_times})}),(0,n.jsx)(u.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(R,{text:i.formatMessage({id:"pages.market.total_volume"}),value:e==null?void 0:e.data.total_auction_commission})})]})})},k=t(64731),Cn=t(77624),Kn=t(59250),yn=t(13013),zn=t(30887),tn=t(99210),sn=t(28991),Pn={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},bn=Pn,Dn=t(27029),rn=function(r,o){return s.createElement(Dn.Z,(0,sn.Z)((0,sn.Z)({},r),{},{ref:o,icon:bn}))};rn.displayName="CaretDownOutlined";var on=s.forwardRef(rn),dn,ln,cn=(0,p.ZP)(tn.Z)(dn||(dn=(0,x.Z)([`
  border-radius: 10px;

  li {
    &:hover {

    }
  }

  .ac {
    color: #44df84;
  }
`]))),mn=(0,p.ZP)(yn.Z)(ln||(ln=(0,x.Z)([`
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
`]))),un=function(r){var o=r.onCb,e=(0,s.useState)(0),d=(0,c.Z)(e,2),i=d[0],N=d[1],v=[{text:"\u6309\u54C1\u79CD",value:"breed"},{text:"\u6309\u4EF7\u683C",value:"price"}];(0,s.useEffect)(function(){o(v[i].value)},[]);var U=(0,s.useState)(!1),S=(0,c.Z)(U,2),K=S[0],Z=S[1];return(0,n.jsx)(mn,{overlay:(0,n.jsx)(cn,{children:v.map(function(f,l){return(0,n.jsx)(tn.Z.Item,{className:l==i?"ac":"",onClick:function(){N(l),o(f.value)},children:f.text})})}),placement:"bottomCenter",arrow:!0,destroyPopupOnHide:!0,onVisibleChange:function(l){return Z(l)},trigger:["click"],children:(0,n.jsxs)("p",{className:K?"ac":"",children:[v[i].text," ",(0,n.jsx)(on,{})]})})},pn=function(r){var o=r.onCb,e=(0,s.useState)(0),d=(0,c.Z)(e,2),i=d[0],N=d[1],v=[{text:"\u964D\u5E8F",value:"desc"},{text:"\u5347\u5E8F",value:"asc"}];(0,s.useEffect)(function(){o(v[i].value)},[]);var U=(0,s.useState)(!1),S=(0,c.Z)(U,2),K=S[0],Z=S[1];return(0,n.jsx)(mn,{overlay:(0,n.jsx)(cn,{children:v.map(function(f,l){return(0,n.jsx)(tn.Z.Item,{className:l==i?"ac":"",onClick:function(){N(l),o(f.value)},children:f.text})})}),placement:"bottomCenter",arrow:!0,destroyPopupOnHide:!0,onVisibleChange:function(l){return Z(l)},trigger:["click"],children:(0,n.jsxs)("p",{className:K?"ac":"",children:[v[i].text," ",(0,n.jsx)(on,{})]})})},gn,vn,xn=p.ZP.div(gn||(gn=(0,x.Z)([`
  margin-bottom: 20px;
  padding: 0 2%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .select {
    flex: 1;
  }

  button {
    padding: 6.4px 15px;
    margin-top: 0;
    margin-right: 10px;
    color: rgb(124, 215, 112);
    font-weight: bold;
    font-size: 14px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(68, 223, 132);

    &.ac {
      color: rgb(255, 255, 255);
      background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
    }
  }

  .drop {
    a {
      color: #505f79;
    }
  }

  @media (max-width: 576px) {
    display: flex;
    margin-bottom: 0;
    .drop {
      margin-top: 10px;
      display: flex;
      justify-content: end;

      p:last-child {
        margin-left: 10px;
      }
    }
  }


`]))),fn=function(r){var o=r.text,e=r.name,d=r.onClick;return(0,n.jsx)(D.Z,{className:e===o?"ac":"",onClick:function(){return d(o)},type:"default",shape:"round",size:"large",children:o})},Mn=p.ZP.div(vn||(vn=(0,x.Z)([`
  padding: 20px;
  box-sizing: border-box;


  .bottom_pagination {
    padding-bottom: 20px;
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
    padding: 0;
    .Statistic{
      padding: 10px 3%;
    }
  }

  .ant-list-split .ant-list-item {
    border: none;
  }

  .ant-list-bordered {
    border: none;
  }

  .products {
    padding: 20px;
  }

  a {
    display: block;
    width: 100%;
  }


  @media (max-width: 576px) {
    padding: 0;

    .products {
      padding: 10px;
    }

    .ant-card-cover {
      img {
        width: 100%;
        //min-width: 278px;
        //min-height: 278px;
      }
    }
  }
`]))),Sn=function(){var h=[{text:"All NFT"},{text:"\u516C",value:1},{text:"\u6BCD",value:0}],r=(0,s.useState)(h[0]),o=(0,c.Z)(r,2),e=o[0],d=o[1],i=(0,s.useState)(),N=(0,c.Z)(i,2),v=N[0],U=N[1],S=(0,s.useState)(),K=(0,c.Z)(S,2),Z=K[0],f=K[1],l=(0,C.f)(M.w.market),$=l.request,Wn=l.status,j=l.data,hn=(0,s.useRef)(null),jn=window.screen.width>500,Tn=function(_){var y=_.pageSize,Rn=_.offset;return new Promise(function(){var Nn=(0,b.Z)(a().mark(function On(Un){var en;return a().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,$((Rn/5+1).toFixed(),e.value,v,Z);case 2:en=Y.sent,Un({total:en.data.count,data:en.data.data});case 4:case"end":return Y.stop()}},On)}));return function(On){return Nn.apply(this,arguments)}}())},z=(0,Cn.BR)(Tn,{ref:hn,initPageSize:5,incrementSize:5}),q=z.data,_n=z.loading,En=z.loadingMore,In=z.reload,Bn=z.loadMore,Ln=z.noMore,An=function(){return(0,n.jsx)(n.Fragment,{children:!Ln&&(0,n.jsx)(D.Z,{onClick:Bn,loading:En,children:En?"Loading more":"Click to load more"})})};return(0,s.useEffect)(function(){jn?$(1,e.value,v,Z):In()},[e,v,Z]),(0,n.jsx)(Mn,{style:{},children:jn?(0,n.jsxs)("div",{className:"pc",children:[(0,n.jsx)("div",{className:"Statistic",children:(0,n.jsx)(H,{})}),(0,n.jsxs)(xn,{children:[(0,n.jsx)("div",{className:"select",children:h.map(function(m){return(0,n.jsx)(fn,{onClick:function(y){return d(m)},name:e.text,text:m.text})})}),(0,n.jsxs)("div",{className:"drop",children:[(0,n.jsx)(un,{onCb:U}),(0,n.jsx)(pn,{onCb:f})]})]}),(0,n.jsx)("div",{className:"products",children:(0,n.jsx)(P.Z,{gutter:28,children:j==null?void 0:j.data.data.map(function(m){return(0,n.jsx)(u.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,n.jsx)(k.b,{props:m})},m.id)})})}),(0,n.jsx)("div",{className:"loading",children:Wn==C.o.wait&&(0,n.jsx)(B.Z,{size:"large"})}),(0,n.jsx)("div",{className:"bottom_pagination",children:(j==null?void 0:j.data.count)&&(0,n.jsx)(X.Z,{defaultCurrent:1,onChange:function(_){$(_)},total:j==null?void 0:j.data.count})})]}):(0,n.jsx)("div",{ref:hn,style:{height:"90vh",overflowY:"auto"},children:(0,n.jsx)(T.ZP,{header:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"Statistic",children:(0,n.jsx)(H,{})}),(0,n.jsxs)(xn,{children:[(0,n.jsx)("div",{className:"select",children:h.map(function(m){return(0,n.jsx)(fn,{onClick:function(y){return d(m)},name:e.text,text:m.text})})}),(0,n.jsxs)("div",{className:"drop",children:[(0,n.jsx)(un,{onCb:U}),(0,n.jsx)(pn,{onCb:f})]})]})]}),footer:!_n&&An(),loading:_n,bordered:!0,dataSource:q,renderItem:function(_,y){return(0,n.jsx)(T.ZP.Item,{style:{padding:y%2==0?12:0},children:y%2==0?(0,n.jsxs)(P.Z,{gutter:12,style:{minWidth:"100%"},children:[(0,n.jsx)(u.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(k.b,{props:q[y]})},_.id),q[y+1]&&(0,n.jsx)(u.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(k.b,{props:q[y+1]})},_.id+1)]}):(0,n.jsx)("div",{})})}})})})},Zn=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(Sn,{})})}},64731:function(an,W,t){"use strict";t.d(W,{b:function(){return n}});var G=t(58024),T=t(39144),E=t(20310),X=t(67294),I=t(47416),B=t(16924),V=t(46677),P=t.n(V),J=t(28219),u=t(92908),b=t.n(u),c=t(37372),O=t.n(c),D=t(78403),x=t(27254),L=t.n(x),a=t(85893),s,p,A,C=I.ZP.div(s||(s=(0,E.Z)([`
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
`]))),M=I.ZP.div(p||(p=(0,E.Z)([`
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
`]))),F=(0,I.ZP)(T.Z)(A||(A=(0,E.Z)([`
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
`]))),n=function(w){var g=w.props,R=w.path,Q=R===void 0?"market":R,H=(0,D.X)(g.img_url);return(0,a.jsx)(B.Link,{to:{pathname:"".concat(Q,"/").concat(g.id),search:"id=".concat(g.id,"&name=").concat(g.dog_name,"&path=").concat(Q)},children:(0,a.jsx)(F,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,a.jsxs)(C,{children:[(0,a.jsx)("div",{className:"images",children:g.state===0?H?(0,a.jsx)("img",{src:H}):(0,a.jsx)("img",{src:L(),alt:""}):(0,a.jsx)("img",{src:L(),alt:""})}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsx)("h4",{children:g.dog_name})}),(0,a.jsx)("div",{className:"price",children:(0,a.jsx)("img",{src:g.dog_sex==1?b():O(),alt:""})})]}),children:g.is_selling==1&&(0,a.jsxs)(M,{children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(J._H,{id:"component.nft_car.sell_price"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{src:P(),alt:"",className:"icon"}),parseInt(g.market_price).toFixed(2)]})]})})})}}}]);
