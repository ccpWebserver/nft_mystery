(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(N,C,t){"use strict";t.d(C,{e:function(){return y}});var B=t(2824),h=t(20310),v=t(67294),b=t(17857),x=t(47416),D=t(85893),d,s=x.ZP.div(d||(d=(0,h.Z)([`
  padding: `,`;
`])),function(a){return a.padding||"0"}),y=function(c){var _=c.value,o=_===void 0?"":_,f=c.decimals,u=c.padding,M=(0,v.useState)(0),m=(0,B.Z)(M,2),j=m[0],p=m[1],r=(0,v.useState)(0),l=(0,B.Z)(r,2),A=l[0],Z=l[1];return(0,v.useEffect)(function(){typeof o=="number"&&(p(A),Z(o))},[o]),(0,D.jsx)(s,{padding:u,children:typeof o=="string"?o:(0,D.jsx)(b.ZP,{start:j,end:A,decimals:f!==void 0?f:0,duration:1,separator:","})})}},57289:function(N,C,t){"use strict";t.r(C),t.d(C,{default:function(){return dn}});var B=t(54421),h=t(38272),v=t(14781),b=t(40308),x=t(20228),D=t(11382),d=t(13062),s=t(71230),y=t(89032),a=t(15746),c=t(3182),_=t(2824),o=t(57663),f=t(71577),u=t(20310),M=t(94043),m=t.n(M),j=t(67294),p=t(47416),r=t(99219),l=t(67329),A=t(93874),Z=t(53190),n=t(85893),G,V,an=p.ZP.div(G||(G=(0,u.Z)([`
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
`]))),Q=function(i){var g=i.text,e=i.value,O=i.coun,E=O===void 0?"$":O;return(0,n.jsxs)(an,{children:[(0,n.jsxs)("h3",{children:[E," ",e?(0,n.jsx)(r.e,{value:e}):"--"]}),(0,n.jsx)("p",{children:g})]})},en=p.ZP.div(V||(V=(0,u.Z)([`
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
`]))),Y=function(){var i=(0,l.f)(A.w.nftHome),g=i.request,e=i.data,O=i.status,E=(0,Z.YB)();return(0,j.useEffect)(function(){g("")},[]),(0,n.jsx)(en,{children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(a.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Q,{text:E.formatMessage({id:"pages.market.new_price"}),value:e==null?void 0:e.data.last_price})}),(0,n.jsx)(a.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Q,{coun:"",text:E.formatMessage({id:"pages.market.total_sale"}),value:e==null?void 0:e.data.total_transaction_times})}),(0,n.jsx)(a.Z,{xs:24,sm:12,lg:8,children:(0,n.jsx)(Q,{text:E.formatMessage({id:"pages.market.total_volume"}),value:e==null?void 0:e.data.total_auction_commission})})]})})},K=t(64731),sn=t(77624),k,H,w=p.ZP.div(k||(k=(0,u.Z)([`
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
`]))),R=function(i){var g=i.text,e=i.name,O=i.onClick;return(0,n.jsx)(f.Z,{className:e===g?"ac":"",onClick:function(){return O(g)},type:"default",shape:"round",size:"large",children:g})},rn=p.ZP.div(H||(H=(0,u.Z)([`
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
`]))),on=function(){var S=(0,j.useState)("All NFT"),i=(0,_.Z)(S,2),g=i[0],e=i[1],O=(0,l.f)(A.w.market),E=O.request,ln=O.status,P=O.data,X=(0,j.useRef)(null),J=window.screen.width>500;(0,j.useEffect)(function(){J&&E(1)},[]);var gn=function(T){var W=T.pageSize,nn=T.offset;return new Promise(function(){var pn=(0,c.Z)(m().mark(function tn(vn){var z;return m().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,E((nn/5+1).toFixed());case 2:z=U.sent,console.log("------",nn),vn({total:z.data.count,data:z.data.data});case 5:case"end":return U.stop()}},tn)}));return function(tn){return pn.apply(this,arguments)}}())},I=(0,sn.BR)(gn,{ref:X,initPageSize:5,incrementSize:5}),L=I.data,$=I.loading,q=I.loadingMore,xn=I.reload,cn=I.loadMore,An=I.total,un=I.noMore,mn=function(){return(0,n.jsx)(n.Fragment,{children:!un&&(0,n.jsx)(f.Z,{onClick:cn,loading:q,children:q?"Loading more":"Click to load more"})})};return(0,n.jsx)(rn,{style:{},children:J?(0,n.jsxs)("div",{className:"pc",children:[(0,n.jsx)(Y,{}),(0,n.jsxs)(w,{children:[(0,n.jsx)(R,{onClick:e,name:g,text:"All NFT"}),(0,n.jsx)(R,{onClick:e,name:g,text:"CCP NFT DOG"})]}),(0,n.jsx)("div",{className:"products",children:(0,n.jsx)(s.Z,{gutter:28,children:P==null?void 0:P.data.data.map(function(F){return(0,n.jsx)(a.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,n.jsx)(K.b,{props:F})},F.id)})})}),(0,n.jsx)("div",{className:"loading",children:ln==l.o.wait&&(0,n.jsx)(D.Z,{size:"large"})}),(0,n.jsx)("div",{className:"bottom_pagination",children:(P==null?void 0:P.data.count)&&(0,n.jsx)(b.Z,{defaultCurrent:1,onChange:function(T){E(T)},total:P==null?void 0:P.data.count})})]}):(0,n.jsx)("div",{ref:X,style:{height:"90vh",overflowY:"auto"},children:(0,n.jsx)(h.ZP,{header:(0,n.jsxs)("div",{children:[(0,n.jsx)(Y,{}),(0,n.jsxs)(w,{children:[(0,n.jsx)(R,{onClick:e,name:g,text:"All NFT"}),(0,n.jsx)(R,{onClick:e,name:g,text:"CCP NFT DOG"})]})]}),footer:!$&&mn(),loading:$,bordered:!0,dataSource:L,renderItem:function(T,W){return(0,n.jsx)(h.ZP.Item,{style:{padding:W%2==0?12:0},children:W%2==0?(0,n.jsxs)(s.Z,{gutter:12,children:[(0,n.jsx)(a.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(K.b,{props:L[W]})},T.id),L[W+1]&&(0,n.jsx)(a.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(K.b,{props:L[W+1]})},T.id+1)]}):(0,n.jsx)("div",{})})}})})})},dn=function(){return(0,n.jsx)("div",{children:(0,n.jsx)(on,{})})}},64731:function(N,C,t){"use strict";t.d(C,{b:function(){return m}});var B=t(58024),h=t(39144),v=t(20310),b=t(67294),x=t(47416),D=t(16924),d=t(46677),s=t.n(d),y=t(53190),a=t(85893),c,_,o,f=x.ZP.div(c||(c=(0,v.Z)([`
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
`]))),u=x.ZP.div(_||(_=(0,v.Z)([`
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
`]))),M=(0,x.ZP)(h.Z)(o||(o=(0,v.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),m=function(p){var r=p.props,l=p.path,A=l===void 0?"market":l;return(0,a.jsx)(D.Link,{to:{pathname:"".concat(A,"/").concat(r.id),search:"id=".concat(r.id,"&name=").concat(r.dog_name,"&path=").concat(A)},children:(0,a.jsx)(M,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,a.jsxs)(f,{children:[(0,a.jsx)("div",{className:"images",children:(0,a.jsx)("img",{alt:"example",src:r.img_url})}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsx)("h4",{children:r.dog_name})})]}),children:r.is_selling==1&&(0,a.jsxs)(u,{children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(y._H,{id:"component.nft_car.sell_price"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{src:s(),alt:"",className:"icon"}),parseInt(r.market_price).toFixed(2)]})]})})})}},67329:function(N,C,t){"use strict";t.d(C,{f:function(){return D},o:function(){return d}});var B=t(3182),h=t(2824),v=t(94043),b=t.n(v),x=t(67294),D=function(y){var a=(0,x.useState)(d.start),c=(0,h.Z)(a,2),_=c[0],o=c[1],f=(0,x.useState)(),u=(0,h.Z)(f,2),M=u[0],m=u[1],j=(0,x.useCallback)((0,B.Z)(b().mark(function p(){var r,l,A=arguments;return b().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(d.wait),n.next=4,y.apply(void 0,A);case 4:return r=n.sent,m(r),o(d.success),n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(0),l={err:n.t0.info},m(l),o(d.failure),n.abrupt("return",l);case 16:case"end":return n.stop()}},p,null,[[0,10]])})),[o,m]);return{status:_,request:j,data:M}},d;(function(s){s[s.start=0]="start",s[s.wait=1]="wait",s[s.success=2]="success",s[s.failure=3]="failure"})(d||(d={}))},46677:function(N){N.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="}}]);
