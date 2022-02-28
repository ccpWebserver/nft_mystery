(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(yn,B,t){"use strict";t.d(B,{e:function(){return k}});var R=t(2824),w=t(20310),L=t(67294),U=t(17857),X=t(47416),V=t(85893),F,E=X.ZP.div(F||(F=(0,w.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(m){return m.padding||"0"}),k=function(W){var c=W.value,C=c===void 0?"":c,M=W.decimals,f=W.padding,K=(0,L.useState)(0),N=(0,R.Z)(K,2),s=N[0],h=N[1],H=(0,L.useState)(0),Z=(0,R.Z)(H,2),z=Z[0],$=Z[1];return(0,L.useEffect)(function(){typeof C=="number"&&(h(z),$(C))},[C]),(0,V.jsx)(E,{padding:f,children:typeof C=="string"?C:(0,V.jsx)(U.ZP,{start:s,end:z,decimals:M!==void 0?M:0,duration:1,separator:","})})}},14631:function(yn,B,t){"use strict";t.r(B),t.d(B,{default:function(){return Mn}});var R=t(54421),w=t(38272),L=t(14781),U=t(40308),X=t(20228),V=t(11382),F=t(13062),E=t(71230),k=t(89032),m=t(15746),W=t(3182),c=t(2824),C=t(57663),M=t(71577),f=t(20310),K=t(94043),N=t.n(K),s=t(67294),h=t(47416),H=t(99219),Z=t(67329),z=t(93874),$=t(28219),n=t(85893),q,_,Sn=h.ZP.div(q||(q=(0,f.Z)([`
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
`]))),Y=function(a){var r=a.text,e=a.value,i=a.coun,o=i===void 0?"$":i;return(0,n.jsxs)(Sn,{children:[(0,n.jsxs)("h3",{children:[o," ",e?(0,n.jsx)(H.e,{value:e}):"--"]}),(0,n.jsx)("p",{children:r})]})},Cn=h.ZP.div(_||(_=(0,f.Z)([`
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
`]))),nn=function(){var a=(0,Z.f)(z.w.nftHome),r=a.request,e=a.data,i=a.status,o=(0,$.YB)();return(0,s.useEffect)(function(){r("")},[]),(0,n.jsx)(Cn,{className:"Statistic",children:(0,n.jsxs)(E.Z,{children:[(0,n.jsx)(m.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Y,{text:o.formatMessage({id:"pages.market.new_price"}),value:e==null?void 0:e.data.last_price})}),(0,n.jsx)(m.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Y,{coun:"",text:o.formatMessage({id:"pages.market.total_sale"}),value:e==null?void 0:e.data.total_transaction_times})}),(0,n.jsx)(m.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Y,{text:o.formatMessage({id:"pages.market.total_volume"}),value:e==null?void 0:e.data.total_auction_commission})})]})})},G=t(73227),Zn=t(77624),Rn=t(59250),bn=t(13013),Un=t(30887),J=t(99210),tn=t(28991),On={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},Pn=On,Dn=t(27029),en=function(a,r){return s.createElement(Dn.Z,(0,tn.Z)((0,tn.Z)({},a),{},{ref:r,icon:Pn}))};en.displayName="CaretDownOutlined";var an=s.forwardRef(en),rn,sn,on=(0,h.ZP)(J.Z)(rn||(rn=(0,f.Z)([`
  border-radius: 10px;

  li {
    &:hover {

    }
  }

  .ac {
    color: #44df84;
  }
`]))),dn=(0,h.ZP)(bn.Z)(sn||(sn=(0,f.Z)([`
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
`]))),ln=function(a){var r=a.onCb,e=(0,s.useState)(0),i=(0,c.Z)(e,2),o=i[0],b=i[1],u=[{text:"\u6309\u54C1\u79CD",value:"breed"},{text:"\u6309\u4EF7\u683C",value:"price"}];(0,s.useEffect)(function(){r(u[o].value)},[]);var O=(0,s.useState)(!1),y=(0,c.Z)(O,2),P=y[0],S=y[1];return(0,n.jsx)(dn,{overlay:(0,n.jsx)(on,{children:u.map(function(v,d){return(0,n.jsx)(J.Z.Item,{className:d==o?"ac":"",onClick:function(){b(d),r(v.value)},children:v.text})})}),placement:"bottomCenter",arrow:!0,destroyPopupOnHide:!0,onVisibleChange:function(d){return S(d)},trigger:["click"],children:(0,n.jsxs)("p",{className:P?"ac":"",children:[u[o].text," ",(0,n.jsx)(an,{})]})})},un=function(a){var r=a.onCb,e=(0,s.useState)(0),i=(0,c.Z)(e,2),o=i[0],b=i[1],u=[{text:"\u964D\u5E8F",value:"desc"},{text:"\u5347\u5E8F",value:"asc"}];(0,s.useEffect)(function(){r(u[o].value)},[]);var O=(0,s.useState)(!1),y=(0,c.Z)(O,2),P=y[0],S=y[1];return(0,n.jsx)(dn,{overlay:(0,n.jsx)(on,{children:u.map(function(v,d){return(0,n.jsx)(J.Z.Item,{className:d==o?"ac":"",onClick:function(){b(d),r(v.value)},children:v.text})})}),placement:"bottomCenter",arrow:!0,destroyPopupOnHide:!0,onVisibleChange:function(d){return S(d)},trigger:["click"],children:(0,n.jsxs)("p",{className:P?"ac":"",children:[u[o].text," ",(0,n.jsx)(an,{})]})})},cn,vn,mn=h.ZP.div(cn||(cn=(0,f.Z)([`
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


`]))),pn=function(a){var r=a.text,e=a.name,i=a.onClick;return(0,n.jsx)(M.Z,{className:e===r?"ac":"",onClick:function(){return i(r)},type:"default",shape:"round",size:"large",children:r})},En=h.ZP.div(vn||(vn=(0,f.Z)([`
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
`]))),Wn=function(){var p=[{text:"All NFT"},{text:"\u516C",value:1},{text:"\u6BCD",value:0}],a=(0,s.useState)(p[0]),r=(0,c.Z)(a,2),e=r[0],i=r[1],o=(0,s.useState)(),b=(0,c.Z)(o,2),u=b[0],O=b[1],y=(0,s.useState)(),P=(0,c.Z)(y,2),S=P[0],v=P[1],d=(0,Z.f)(z.w.market),I=d.request,Nn=d.status,x=d.data,xn=(0,s.useRef)(null),gn=window.screen.width>500,zn=function(g){var j=g.pageSize,Ln=g.offset;return new Promise(function(){var Vn=(0,W.Z)(N().mark(function jn(An){var Q;return N().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,I((Ln/5+1).toFixed(),e.value,u,S);case 2:Q=T.sent,An({total:Q.data.count,data:Q.data.data});case 4:case"end":return T.stop()}},jn)}));return function(jn){return Vn.apply(this,arguments)}}())},D=(0,Zn.BR)(zn,{ref:xn,initPageSize:5,incrementSize:5}),A=D.data,fn=D.loading,hn=D.loadingMore,In=D.reload,Tn=D.loadMore,Bn=D.noMore,wn=function(){return(0,n.jsx)(n.Fragment,{children:!Bn&&(0,n.jsx)(M.Z,{onClick:Tn,loading:hn,children:hn?"Loading more":"Click to load more"})})};return(0,s.useEffect)(function(){gn?I(1,e.value,u,S):In()},[e,u,S]),(0,n.jsx)(En,{style:{},children:gn?(0,n.jsxs)("div",{className:"pc",children:[(0,n.jsx)("div",{className:"Statistic",children:(0,n.jsx)(nn,{})}),(0,n.jsxs)(mn,{children:[(0,n.jsx)("div",{className:"select",children:p.map(function(l){return(0,n.jsx)(pn,{onClick:function(j){return i(l)},name:e.text,text:l.text})})}),(0,n.jsxs)("div",{className:"drop",children:[(0,n.jsx)(ln,{onCb:O}),(0,n.jsx)(un,{onCb:v})]})]}),(0,n.jsx)("div",{className:"products",children:(0,n.jsx)(E.Z,{gutter:28,children:x==null?void 0:x.data.data.map(function(l){return(0,n.jsx)(m.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,n.jsx)(G.b,{props:l})},l.id)})})}),(0,n.jsx)("div",{className:"loading",children:Nn==Z.o.wait&&(0,n.jsx)(V.Z,{size:"large"})}),(0,n.jsx)("div",{className:"bottom_pagination",children:(x==null?void 0:x.data.count)&&(0,n.jsx)(U.Z,{defaultCurrent:1,onChange:function(g){I(g)},total:x==null?void 0:x.data.count})})]}):(0,n.jsx)("div",{ref:xn,style:{height:"90vh",overflowY:"auto"},children:(0,n.jsx)(w.ZP,{header:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"Statistic",children:(0,n.jsx)(nn,{})}),(0,n.jsxs)(mn,{children:[(0,n.jsx)("div",{className:"select",children:p.map(function(l){return(0,n.jsx)(pn,{onClick:function(j){return i(l)},name:e.text,text:l.text})})}),(0,n.jsxs)("div",{className:"drop",children:[(0,n.jsx)(ln,{onCb:O}),(0,n.jsx)(un,{onCb:v})]})]})]}),footer:!fn&&wn(),loading:fn,bordered:!0,dataSource:A,renderItem:function(g,j){return(0,n.jsx)(w.ZP.Item,{style:{padding:j%2==0?12:0},children:j%2==0?(0,n.jsxs)(E.Z,{gutter:12,style:{minWidth:"100%"},children:[(0,n.jsx)(m.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(G.b,{props:A[j]})},g.id),A[j+1]&&(0,n.jsx)(m.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(G.b,{props:A[j+1]})},g.id+1)]}):(0,n.jsx)("div",{})})}})})})},Mn=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(Wn,{})})}}}]);
