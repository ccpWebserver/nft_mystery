(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(P,b,e){"use strict";e.d(b,{e:function(){return K}});var F=e(2824),B=e(20310),D=e(67294),S=e(17857),_=e(47416),W=e(85893),g,o=_.ZP.div(g||(g=(0,B.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(p){return p.padding||"0"}),K=function(v){var i=v.value,f=i===void 0?"":i,M=v.decimals,x=v.padding,Z=(0,D.useState)(0),t=(0,F.Z)(Z,2),s=t[0],u=t[1],E=(0,D.useState)(0),d=(0,F.Z)(E,2),h=d[0],l=d[1];return(0,D.useEffect)(function(){typeof f=="number"&&(u(h),l(f))},[f]),(0,W.jsx)(o,{padding:x,children:typeof f=="string"?f:(0,W.jsx)(S.ZP,{start:s,end:h,decimals:M!==void 0?M:0,duration:1,separator:","})})}},14631:function(P,b,e){"use strict";e.r(b),e.d(b,{default:function(){return yn}});var F=e(54421),B=e(38272),D=e(14781),S=e(40308),_=e(20228),W=e(11382),g=e(13062),o=e(71230),K=e(89032),p=e(15746),v=e(3182),i=e(2824),f=e(57663),M=e(71577),x=e(20310),Z=e(94043),t=e.n(Z),s=e(67294),u=e(47416),E=e(99219),d=e(67329),h=e(93874),l=e(28219),n=e(85893),U,T,a=u.ZP.div(U||(U=(0,x.Z)([`
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
`]))),Q=function(c){var m=c.text,r=c.value,A=c.coun,O=A===void 0?"$":A;return(0,n.jsxs)(a,{children:[(0,n.jsxs)("h3",{children:[O," ",r?(0,n.jsx)(E.e,{value:r}):"--"]}),(0,n.jsx)("p",{children:m})]})},V=u.ZP.div(T||(T=(0,x.Z)([`
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
`]))),J=function(){var c=(0,d.f)(h.w.nftHome),m=c.request,r=c.data,A=c.status,O=(0,l.YB)();return(0,s.useEffect)(function(){m("")},[]),(0,n.jsx)(V,{className:"Statistic",children:(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(p.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Q,{text:O.formatMessage({id:"pages.market.new_price"}),value:r==null?void 0:r.data.last_price})}),(0,n.jsx)(p.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Q,{coun:"",text:O.formatMessage({id:"pages.market.total_sale"}),value:r==null?void 0:r.data.total_transaction_times})}),(0,n.jsx)(p.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Q,{text:O.formatMessage({id:"pages.market.total_volume"}),value:r==null?void 0:r.data.total_auction_commission})})]})})},q=e(64731),jn=e(77624),Ln=e(59250),bn=e(13013),Fn=e(30887),tn=e(99210),sn=e(28991),Cn={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]},name:"caret-down",theme:"outlined"},Pn=Cn,Dn=e(27029),rn=function(c,m){return s.createElement(Dn.Z,(0,sn.Z)((0,sn.Z)({},c),{},{ref:m,icon:Pn}))};rn.displayName="CaretDownOutlined";var on=s.forwardRef(rn),dn,ln,cn=(0,u.ZP)(tn.Z)(dn||(dn=(0,x.Z)([`
  border-radius: 10px;

  li {
    &:hover {

    }
  }

  .ac {
    color: #44df84;
  }
`]))),un=(0,u.ZP)(bn.Z)(ln||(ln=(0,x.Z)([`
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
`]))),gn=function(c){var m=c.onCb,r=(0,s.useState)(0),A=(0,i.Z)(r,2),O=A[0],G=A[1],z=[{text:"\u6309\u54C1\u79CD",value:"breed"},{text:"\u6309\u4EF7\u683C",value:"price"}];(0,s.useEffect)(function(){},[]);var k=(0,s.useState)(!1),w=(0,i.Z)(k,2),Y=w[0],H=w[1];return(0,n.jsx)(un,{overlay:(0,n.jsx)(cn,{children:z.map(function(I,C){return(0,n.jsx)(tn.Z.Item,{className:C==O?"ac":"",onClick:function(){G(C),m(I.value)},children:I.text},I.value)})}),placement:"bottomCenter",arrow:!0,destroyPopupOnHide:!0,onVisibleChange:function(C){return H(C)},trigger:["click"],children:(0,n.jsxs)("p",{className:Y?"ac":"",children:[z[O].text," ",(0,n.jsx)(on,{})]})})},mn=function(c){var m=c.onCb,r=(0,s.useState)(0),A=(0,i.Z)(r,2),O=A[0],G=A[1],z=[{text:"\u964D\u5E8F",value:"desc"},{text:"\u5347\u5E8F",value:"asc"}];(0,s.useEffect)(function(){},[]);var k=(0,s.useState)(!1),w=(0,i.Z)(k,2),Y=w[0],H=w[1];return(0,n.jsx)(un,{overlay:(0,n.jsx)(cn,{children:z.map(function(I,C){return(0,n.jsx)(tn.Z.Item,{className:C==O?"ac":"",onClick:function(){G(C),m(I.value)},children:I.text},I.value)})}),placement:"bottomCenter",arrow:!0,destroyPopupOnHide:!0,onVisibleChange:function(C){return H(C)},trigger:["click"],children:(0,n.jsxs)("p",{className:Y?"ac":"",children:[z[O].text," ",(0,n.jsx)(on,{})]})})},_n,pn,vn=u.ZP.div(_n||(_n=(0,x.Z)([`
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


`]))),fn=function(c){var m=c.text,r=c.name,A=c.onClick;return(0,n.jsx)(M.Z,{className:r===m?"ac":"",onClick:function(){return A(m)},type:"default",shape:"round",size:"large",children:m})},Mn=u.ZP.div(pn||(pn=(0,x.Z)([`
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

    .Statistic {
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
`]))),In=function(){var N=[{text:"All NFT"},{text:"\u516C",value:1},{text:"\u6BCD",value:0}],c=(0,s.useState)(N[0]),m=(0,i.Z)(c,2),r=m[0],A=m[1],O=(0,s.useState)("breed"),G=(0,i.Z)(O,2),z=G[0],k=G[1],w=(0,s.useState)("desc"),Y=(0,i.Z)(w,2),H=Y[0],I=Y[1],C=(0,d.f)(h.w.market),nn=C.request,Bn=C.status,R=C.data,xn=(0,s.useRef)(null),En=window.screen.width>500,Tn=function(y){var L=y.pageSize,Un=y.offset;return new Promise(function(){var Nn=(0,v.Z)(t().mark(function On(Rn){var an;return t().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,nn((Un/5+1).toFixed(),r.value,z,H);case 2:an=$.sent,Rn({total:an.data.count,data:an.data.data});case 4:case"end":return $.stop()}},On)}));return function(On){return Nn.apply(this,arguments)}}())},X=(0,jn.BR)(Tn,{ref:xn,initPageSize:5,incrementSize:5}),en=X.data,hn=X.loading,An=X.loadingMore,Kn=X.reload,Sn=X.loadMore,Wn=X.noMore,Zn=function(){return(0,n.jsx)(n.Fragment,{children:!Wn&&(0,n.jsx)(M.Z,{onClick:Sn,loading:An,children:An?"Loading more":"Click to load more"})})};return(0,s.useEffect)(function(){},[r,z,H]),(0,n.jsx)(Mn,{style:{},children:En?(0,n.jsxs)("div",{className:"pc",children:[(0,n.jsx)("div",{className:"Statistic",children:(0,n.jsx)(J,{})}),(0,n.jsxs)(vn,{children:[(0,n.jsx)("div",{className:"select",children:N.map(function(j){return(0,n.jsx)(fn,{onClick:function(L){return A(j)},name:r.text,text:j.text},j.text)})}),(0,n.jsxs)("div",{className:"drop",children:[(0,n.jsx)(gn,{onCb:k}),(0,n.jsx)(mn,{onCb:I})]})]}),(0,n.jsx)("div",{className:"products",children:(0,n.jsx)(o.Z,{gutter:28,children:R==null?void 0:R.data.data.map(function(j,y){return(0,n.jsx)(p.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,n.jsx)(q.b,{props:j})},"".concat(j.id,"_").concat(y))})})}),(0,n.jsx)("div",{className:"loading",children:Bn==d.o.wait&&(0,n.jsx)(W.Z,{size:"large"})}),(0,n.jsx)("div",{className:"bottom_pagination",children:(R==null?void 0:R.data.count)&&(0,n.jsx)(S.Z,{defaultCurrent:1,onChange:function(y){nn(y)},total:R==null?void 0:R.data.count})})]}):(0,n.jsx)("div",{ref:xn,style:{height:"90vh",overflowY:"auto"},children:(0,n.jsx)(B.ZP,{header:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"Statistic",children:(0,n.jsx)(J,{})}),(0,n.jsxs)(vn,{children:[(0,n.jsx)("div",{className:"select",children:N.map(function(j){return(0,n.jsx)(fn,{onClick:function(L){return A(j)},name:r.text,text:j.text},j.text)})}),(0,n.jsxs)("div",{className:"drop",children:[(0,n.jsx)(gn,{onCb:k}),(0,n.jsx)(mn,{onCb:I})]})]})]}),footer:!hn&&Zn(),loading:hn,bordered:!0,dataSource:en,renderItem:function(y,L){return(0,n.jsx)(B.ZP.Item,{style:{padding:L%2==0?12:0},children:L%2==0?(0,n.jsxs)(o.Z,{gutter:12,style:{minWidth:"100%"},children:[(0,n.jsx)(p.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(q.b,{props:en[L]})},y.id),en[L+1]&&(0,n.jsx)(p.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(q.b,{props:en[L+1]})},y.id+1)]}):(0,n.jsx)("div",{})},"".concat(y.id,"_").concat(L))}})})})},yn=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(In,{})})}},64731:function(P,b,e){"use strict";e.d(b,{b:function(){return n}});var F=e(58024),B=e(39144),D=e(20310),S=e(67294),_=e(47416),W=e(16924),g=e(46677),o=e.n(g),K=e(28219),p=e(92908),v=e.n(p),i=e(37372),f=e.n(i),M=e(44559),x=e(27254),Z=e.n(x),t=e(85893),s,u,E,d=_.ZP.div(s||(s=(0,D.Z)([`
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
`]))),h=_.ZP.div(u||(u=(0,D.Z)([`
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
`]))),l=(0,_.ZP)(B.Z)(E||(E=(0,D.Z)([`
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
`]))),n=function(T){var a=T.props,Q=T.path,V=Q===void 0?"market":Q,J=(0,M.X)(a.img_url);return(0,t.jsx)(W.Link,{to:{pathname:"".concat(V,"/").concat(a.id),search:"id=".concat(a.id,"&name=").concat(a.dog_name,"&path=").concat(V)},children:(0,t.jsx)(l,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,t.jsxs)(d,{children:[(0,t.jsx)("div",{className:"images",children:a.state===0?J?(0,t.jsx)("img",{src:J}):(0,t.jsx)("img",{src:Z(),alt:""}):(0,t.jsx)("img",{src:Z(),alt:""})}),(0,t.jsx)("div",{className:"bottom",children:(0,t.jsx)("h4",{children:a.dog_name})}),(0,t.jsx)("div",{className:"price",children:(0,t.jsx)("img",{src:a.dog_sex==1?v():f(),alt:""})})]}),children:a.is_selling==1&&(0,t.jsxs)(h,{children:[(0,t.jsxs)("span",{children:[" ",(0,t.jsx)(K._H,{id:"component.nft_car.sell_price"})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("img",{src:o(),alt:"",className:"icon"}),parseInt(a.market_price).toFixed(2)]})]})})})}},44559:function(P,b,e){"use strict";e.d(b,{X:function(){return p}});var F=e(3182),B=e(2824),D=e(94043),S=e.n(D),_=e(67294),W=e(93874),g={Blue:"3",Green:"4",Purple:"5",Red:"6",Yellow:"7"},o={Background:"BasicColor",butt:"butt",front_legs:"front_legs",hind_legs:"hind_legs",tail:"tail",jaw:"jaw",back:"back"};function K(v,i){return v=="Background"?"./trait-layers/".concat(o[v],"/").concat(g[i],".jpg"):"./trait-layers/".concat(o[v],"/").concat(g[i],".png")}var p=function(i){var f=(0,_.useState)(""),M=(0,B.Z)(f,2),x=M[0],Z=M[1],t=(0,_.useCallback)(function(u,E){var d=document.createElement("canvas");d.width=500,d.height=500;var h=d.getContext("2d"),l={};u.map(function(n,U){var T=new Image;T.src=" https://nft.ccp.dog/nft/".concat(n),T.crossOrigin="Access-Control-Allow-Origin",T.onload=function(){if(l[U]=T,Object.keys(l).length==Object.keys(E).length){var a=Object.keys(l);a.map(function(V){h.drawImage(l[V],0,0,500,500)});var Q=d.toDataURL("image/png");Z(Q)}}})},[]),s=(0,_.useCallback)(function(){var u=(0,F.Z)(S().mark(function E(d){var h,l,n,U;return S().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(d){a.next=2;break}return a.abrupt("return");case 2:if(h=d.replace(/[^\d]/g,""),h){a.next=5;break}return a.abrupt("return");case 5:return a.next=7,W.w.read_trait_forTokenId(h);case 7:if(l=a.sent,l.status==1){a.next=10;break}return a.abrupt("return");case 10:l=l.data,delete l.tokenId,n=[];for(U in l)n.push(K(U,l[U]));t(n,l);case 15:case"end":return a.stop()}},E)}));return function(E){return u.apply(this,arguments)}}(),[]);return(0,_.useEffect)(function(){s(i)},[i]),x}},67329:function(P,b,e){"use strict";e.d(b,{f:function(){return W},o:function(){return g}});var F=e(3182),B=e(2824),D=e(94043),S=e.n(D),_=e(67294),W=function(K){var p=(0,_.useState)(g.start),v=(0,B.Z)(p,2),i=v[0],f=v[1],M=(0,_.useState)(),x=(0,B.Z)(M,2),Z=x[0],t=x[1],s=(0,_.useCallback)((0,F.Z)(S().mark(function u(){var E,d,h=arguments;return S().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,f(g.wait),n.next=4,K.apply(void 0,h);case 4:return E=n.sent,t(E),f(g.success),n.abrupt("return",E);case 10:return n.prev=10,n.t0=n.catch(0),d={err:n.t0.info},t(d),f(g.failure),n.abrupt("return",d);case 16:case"end":return n.stop()}},u,null,[[0,10]])})),[f,t]);return{status:i,request:s,data:Z}},g;(function(o){o[o.start=0]="start",o[o.wait=1]="wait",o[o.success=2]="success",o[o.failure=3]="failure"})(g||(g={}))},27254:function(P,b,e){P.exports=e.p+"static/baby_dog.1fd8dbc6.jpg"},92908:function(P,b,e){P.exports=e.p+"static/gong.d3c6c27d.png"},46677:function(P){P.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},37372:function(P,b,e){P.exports=e.p+"static/mo.30ad1e1e.png"}}]);
