(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(tn,E,t){"use strict";t.d(E,{e:function(){return $}});var z=t(2824),S=t(20310),M=t(67294),B=t(17857),K=t(47416),W=t(85893),I,j=K.ZP.div(I||(I=(0,S.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(i){return i.padding||"0"}),$=function(y){var O=y.value,m=O===void 0?"":O,Z=y.decimals,g=y.padding,T=(0,M.useState)(0),P=(0,z.Z)(T,2),x=P[0],p=P[1],L=(0,M.useState)(0),f=(0,z.Z)(L,2),b=f[0],A=f[1];return(0,M.useEffect)(function(){typeof m=="number"&&(p(b),A(m))},[m]),(0,W.jsx)(j,{padding:g,children:typeof m=="string"?m:(0,W.jsx)(B.ZP,{start:x,end:b,decimals:Z!==void 0?Z:0,duration:1,separator:","})})}},57289:function(tn,E,t){"use strict";t.r(E),t.d(E,{default:function(){return dn}});var z=t(54421),S=t(38272),M=t(14781),B=t(40308),K=t(20228),W=t(11382),I=t(13062),j=t(71230),$=t(89032),i=t(15746),y=t(3182),O=t(2824),m=t(57663),Z=t(71577),g=t(20310),T=t(94043),P=t.n(T),x=t(67294),p=t(47416),L=t(99219),f=t(67329),b=t(93874),A=t(28219),n=t(85893),V,Y,an=p.ZP.div(V||(V=(0,g.Z)([`
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
`]))),R=function(e){var o=e.text,a=e.value,u=e.coun,s=u===void 0?"$":u;return(0,n.jsxs)(an,{children:[(0,n.jsxs)("h3",{children:[s," ",a?(0,n.jsx)(L.e,{value:a}):"--"]}),(0,n.jsx)("p",{children:o})]})},en=p.ZP.div(Y||(Y=(0,g.Z)([`
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
`]))),G=function(){var e=(0,f.f)(b.w.nftHome),o=e.request,a=e.data,u=e.status,s=(0,A.YB)();return(0,x.useEffect)(function(){o("")},[]),(0,n.jsx)(en,{children:(0,n.jsxs)(j.Z,{children:[(0,n.jsx)(i.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(R,{text:s.formatMessage({id:"pages.market.new_price"}),value:a==null?void 0:a.data.last_price})}),(0,n.jsx)(i.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(R,{coun:"",text:s.formatMessage({id:"pages.market.total_sale"}),value:a==null?void 0:a.data.total_transaction_times})}),(0,n.jsx)(i.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(R,{text:s.formatMessage({id:"pages.market.total_volume"}),value:a==null?void 0:a.data.total_auction_commission})})]})})},U=t(73227),rn=t(77624),H,J,Q=p.ZP.div(H||(H=(0,g.Z)([`
  margin-bottom: 20px;

  button {
    margin-top: 10px;
    margin-right: 30px;
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
`]))),X=function(e){var o=e.text,a=e.name,u=e.onClick;return(0,n.jsx)(Z.Z,{className:a===o?"ac":"",onClick:function(){return u(o)},type:"default",shape:"round",size:"large",children:o})},on=p.ZP.div(J||(J=(0,g.Z)([`
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
`]))),sn=function(){var h=[{text:"All NFT"},{text:"\u516C",value:1},{text:"\u6BCD",value:0}],e=(0,x.useState)(h[0]),o=(0,O.Z)(e,2),a=o[0],u=o[1],s=(0,f.f)(b.w.market),F=s.request,ln=s.status,d=s.data,k=(0,x.useRef)(null),w=window.screen.width>500,un=function(l){var c=l.pageSize,xn=l.offset;return new Promise(function(){var pn=(0,y.Z)(P().mark(function nn(fn){var N;return P().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,F((xn/5+1).toFixed(),a.value);case 2:N=C.sent,fn({total:N.data.count,data:N.data.data});case 4:case"end":return C.stop()}},nn)}));return function(nn){return pn.apply(this,arguments)}}())},v=(0,rn.BR)(un,{ref:k,initPageSize:5,incrementSize:5}),D=v.data,q=v.loading,_=v.loadingMore,cn=v.reload,vn=v.loadMore,hn=v.total,mn=v.noMore,gn=function(){return(0,n.jsx)(n.Fragment,{children:!mn&&(0,n.jsx)(Z.Z,{onClick:vn,loading:_,children:_?"Loading more":"Click to load more"})})};return(0,x.useEffect)(function(){w?F(1,a.value):cn()},[a]),(0,n.jsx)(on,{style:{},children:w?(0,n.jsxs)("div",{className:"pc",children:[(0,n.jsx)(G,{}),(0,n.jsx)(Q,{children:h.map(function(r){return(0,n.jsx)(X,{onClick:function(c){return u(r)},name:a.text,text:r.text})})}),(0,n.jsx)("div",{className:"products",children:(0,n.jsx)(j.Z,{gutter:28,children:d==null?void 0:d.data.data.map(function(r){return(0,n.jsx)(i.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,n.jsx)(U.b,{props:r})},r.id)})})}),(0,n.jsx)("div",{className:"loading",children:ln==f.o.wait&&(0,n.jsx)(W.Z,{size:"large"})}),(0,n.jsx)("div",{className:"bottom_pagination",children:(d==null?void 0:d.data.count)&&(0,n.jsx)(B.Z,{defaultCurrent:1,onChange:function(l){F(l)},total:d==null?void 0:d.data.count})})]}):(0,n.jsx)("div",{ref:k,style:{height:"90vh",overflowY:"auto"},children:(0,n.jsx)(S.ZP,{header:(0,n.jsxs)("div",{children:[(0,n.jsx)(G,{}),(0,n.jsx)(Q,{children:h.map(function(r){return(0,n.jsx)(X,{onClick:function(c){return u(r)},name:a.text,text:r.text})})})]}),footer:!q&&gn(),loading:q,bordered:!0,dataSource:D,renderItem:function(l,c){return(0,n.jsx)(S.ZP.Item,{style:{padding:c%2==0?12:0},children:c%2==0?(0,n.jsxs)(j.Z,{gutter:12,children:[(0,n.jsx)(i.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(U.b,{props:D[c]})},l.id),D[c+1]&&(0,n.jsx)(i.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(U.b,{props:D[c+1]})},l.id+1)]}):(0,n.jsx)("div",{})})}})})})},dn=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(sn,{})})}}}]);
