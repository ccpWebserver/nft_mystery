(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(W,C,n){"use strict";n.d(C,{e:function(){return B}});var T=n(2824),h=n(20310),v=n(67294),b=n(17857),A=n(47416),D=n(85893),d,r=A.ZP.div(d||(d=(0,h.Z)([`
  padding: `,`;
`])),function(a){return a.padding||"0"}),B=function(c){var _=c.value,o=_===void 0?"":_,f=c.decimals,u=c.padding,M=(0,v.useState)(0),m=(0,T.Z)(M,2),O=m[0],p=m[1],s=(0,v.useState)(0),l=(0,T.Z)(s,2),x=l[0],N=l[1];return(0,v.useEffect)(function(){typeof o=="number"&&(p(x),N(o))},[o]),(0,D.jsx)(r,{padding:u,children:typeof o=="string"?o:(0,D.jsx)(b.ZP,{start:O,end:x,decimals:f!==void 0?f:0,duration:1,separator:","})})}},57289:function(W,C,n){"use strict";n.r(C),n.d(C,{default:function(){return sn}});var T=n(54421),h=n(38272),v=n(14781),b=n(40308),A=n(20228),D=n(11382),d=n(13062),r=n(71230),B=n(89032),a=n(15746),c=n(3182),_=n(2824),o=n(57663),f=n(71577),u=n(20310),M=n(94043),m=n.n(M),O=n(67294),p=n(47416),s=n(99219),l=n(67329),x=n(93874),N=n(53190),t=n(85893),Q,K,nn=p.ZP.div(Q||(Q=(0,u.Z)([`
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
`]))),S=function(i){var g=i.text,e=i.value,j=i.coun,E=j===void 0?"$":j;return(0,t.jsxs)(nn,{children:[(0,t.jsxs)("h3",{children:[E," ",e?(0,t.jsx)(s.e,{value:e}):"--"]}),(0,t.jsx)("p",{children:g})]})},tn=p.ZP.div(K||(K=(0,u.Z)([`
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
`]))),z=function(){var i=(0,l.f)(x.w.nftHome),g=i.request,e=i.data,j=i.status,E=(0,N.YB)();return(0,O.useEffect)(function(){g("")},[]),(0,t.jsx)(tn,{children:(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(a.Z,{xs:24,sm:12,lg:8,children:(0,t.jsx)(S,{text:E.formatMessage({id:"pages.market.new_price"}),value:e==null?void 0:e.data.last_price})}),(0,t.jsx)(a.Z,{xs:24,sm:12,lg:8,children:(0,t.jsx)(S,{coun:"",text:E.formatMessage({id:"pages.market.total_sale"}),value:e==null?void 0:e.data.total_transaction_times})}),(0,t.jsx)(a.Z,{xs:24,sm:12,lg:8,children:(0,t.jsx)(S,{text:E.formatMessage({id:"pages.market.total_volume"}),value:e==null?void 0:e.data.total_auction_commission})})]})})},G=n(64731),an=n(77624),V,Y,k=p.ZP.div(V||(V=(0,u.Z)([`
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
`]))),Z=function(i){var g=i.text,e=i.name,j=i.onClick;return(0,t.jsx)(f.Z,{className:e===g?"ac":"",onClick:function(){return j(g)},type:"default",shape:"round",size:"large",children:g})},en=p.ZP.div(Y||(Y=(0,u.Z)([`
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
        min-width: 278px;
        min-height: 278px;
      }
    }
  }
`]))),rn=function(){var R=(0,O.useState)("All NFT"),i=(0,_.Z)(R,2),g=i[0],e=i[1],j=(0,l.f)(x.w.market),E=j.request,on=j.status,P=j.data,H=(0,O.useRef)(null),w=window.screen.width>500;(0,O.useEffect)(function(){w&&E(1)},[]);var dn=function(F){var xn=F.pageSize,$=F.offset;return new Promise(function(){var mn=(0,c.Z)(m().mark(function q(pn){var L;return m().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,E(($/5+1).toFixed());case 2:L=U.sent,console.log("------",$),pn({total:L.data.count,data:L.data.data});case 5:case"end":return U.stop()}},q)}));return function(q){return mn.apply(this,arguments)}}())},I=(0,an.BR)(dn,{ref:H,initPageSize:5,incrementSize:5}),ln=I.data,X=I.loading,J=I.loadingMore,vn=I.reload,gn=I.loadMore,An=I.total,cn=I.noMore,un=function(){return(0,t.jsx)(t.Fragment,{children:!cn&&(0,t.jsx)(f.Z,{onClick:gn,loading:J,children:J?"Loading more":"Click to load more"})})};return(0,t.jsx)(en,{style:{},children:w?(0,t.jsxs)("div",{className:"pc",children:[(0,t.jsx)(z,{}),(0,t.jsxs)(k,{children:[(0,t.jsx)(Z,{onClick:e,name:g,text:"All NFT"}),(0,t.jsx)(Z,{onClick:e,name:g,text:"CCP NFT DOG"})]}),(0,t.jsx)("div",{className:"products",children:(0,t.jsx)(r.Z,{gutter:28,children:P==null?void 0:P.data.data.map(function(y){return(0,t.jsx)(a.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,t.jsx)(G.b,{props:y})},y.id)})})}),(0,t.jsx)("div",{className:"loading",children:on==l.o.wait&&(0,t.jsx)(D.Z,{size:"large"})}),(0,t.jsx)("div",{className:"bottom_pagination",children:(P==null?void 0:P.data.count)&&(0,t.jsx)(b.Z,{defaultCurrent:1,onChange:function(F){E(F)},total:P==null?void 0:P.data.count})})]}):(0,t.jsx)("div",{ref:H,style:{height:"90vh",overflowY:"auto"},children:(0,t.jsx)(h.ZP,{header:(0,t.jsxs)("div",{children:[(0,t.jsx)(z,{}),(0,t.jsxs)(k,{children:[(0,t.jsx)(Z,{onClick:e,name:g,text:"All NFT"}),(0,t.jsx)(Z,{onClick:e,name:g,text:"CCP NFT DOG"})]})]}),footer:!X&&un(),loading:X,bordered:!0,dataSource:ln,renderItem:function(F){return(0,t.jsx)(h.ZP.Item,{children:(0,t.jsx)(G.b,{props:F})})}})})})},sn=function(){return(0,t.jsx)("div",{children:(0,t.jsx)(rn,{})})}},64731:function(W,C,n){"use strict";n.d(C,{b:function(){return m}});var T=n(58024),h=n(39144),v=n(20310),b=n(67294),A=n(47416),D=n(16924),d=n(46677),r=n.n(d),B=n(53190),a=n(85893),c,_,o,f=A.ZP.div(c||(c=(0,v.Z)([`
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
`]))),u=A.ZP.div(_||(_=(0,v.Z)([`
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
`]))),M=(0,A.ZP)(h.Z)(o||(o=(0,v.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),m=function(p){var s=p.props,l=p.path,x=l===void 0?"market":l;return(0,a.jsx)(D.Link,{to:{pathname:"".concat(x,"/").concat(s.id),search:"id=".concat(s.id,"&name=").concat(s.dog_name,"&path=").concat(x)},children:(0,a.jsx)(M,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,a.jsxs)(f,{children:[(0,a.jsx)("div",{className:"images",children:(0,a.jsx)("img",{alt:"example",src:s.img_url})}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsx)("h4",{children:s.dog_name})})]}),children:s.is_selling==1&&(0,a.jsxs)(u,{children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(B._H,{id:"component.nft_car.sell_price"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{src:r(),alt:"",className:"icon"}),parseInt(s.market_price).toFixed(2)]})]})})})}},67329:function(W,C,n){"use strict";n.d(C,{f:function(){return D},o:function(){return d}});var T=n(3182),h=n(2824),v=n(94043),b=n.n(v),A=n(67294),D=function(B){var a=(0,A.useState)(d.start),c=(0,h.Z)(a,2),_=c[0],o=c[1],f=(0,A.useState)(),u=(0,h.Z)(f,2),M=u[0],m=u[1],O=(0,A.useCallback)((0,T.Z)(b().mark(function p(){var s,l,x=arguments;return b().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o(d.wait),t.next=4,B.apply(void 0,x);case 4:return s=t.sent,m(s),o(d.success),t.abrupt("return",s);case 10:return t.prev=10,t.t0=t.catch(0),l={err:t.t0.info},m(l),o(d.failure),t.abrupt("return",l);case 16:case"end":return t.stop()}},p,null,[[0,10]])})),[o,m]);return{status:_,request:O,data:M}},d;(function(r){r[r.start=0]="start",r[r.wait=1]="wait",r[r.success=2]="success",r[r.failure=3]="failure"})(d||(d={}))},46677:function(W){W.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="}}]);
