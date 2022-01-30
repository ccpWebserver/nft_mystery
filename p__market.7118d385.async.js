(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[374],{99219:function(W,j,n){"use strict";n.d(j,{e:function(){return I}});var B=n(2824),C=n(20310),p=n(67294),b=n(17857),v=n(47416),E=n(85893),l,a=v.ZP.div(l||(l=(0,C.Z)([`
  padding: `,`;
`])),function(e){return e.padding||"0"}),I=function(u){var g=u.value,s=g===void 0?"":g,m=u.decimals,D=u.padding,x=(0,p.useState)(0),_=(0,B.Z)(x,2),T=_[0],t=_[1],i=(0,p.useState)(0),c=(0,B.Z)(i,2),h=c[0],M=c[1];return(0,p.useEffect)(function(){typeof s=="number"&&(t(h),M(s))},[s]),(0,E.jsx)(a,{padding:D,children:typeof s=="string"?s:(0,E.jsx)(b.ZP,{start:T,end:h,decimals:m!==void 0?m:0,duration:1,separator:","})})}},57289:function(W,j,n){"use strict";n.r(j),n.d(j,{default:function(){return z}});var B=n(14781),C=n(40308),p=n(20228),b=n(11382),v=n(13062),E=n(71230),l=n(89032),a=n(15746),I=n(2824),e=n(57663),u=n(71577),g=n(20310),s=n(67294),m=n(47416),D=n(99219),x=n(67329),_=n(93874),T=n(53190),t=n(85893),i,c,h=m.ZP.div(i||(i=(0,g.Z)([`
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
`]))),M=function(o){var A=o.text,r=o.value,f=o.coun,O=f===void 0?"$":f;return(0,t.jsxs)(h,{children:[(0,t.jsxs)("h3",{children:[O," ",r?(0,t.jsx)(D.e,{value:r}):"--"]}),(0,t.jsx)("p",{children:A})]})},d=m.ZP.div(c||(c=(0,g.Z)([`
  border-radius: 15px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`]))),R=function(){var o=(0,x.f)(_.w.nftHome),A=o.request,r=o.data,f=o.status,O=(0,T.YB)();return(0,s.useEffect)(function(){A("")},[]),(0,t.jsx)(d,{children:(0,t.jsxs)(E.Z,{children:[(0,t.jsx)(a.Z,{xs:24,sm:12,lg:8,children:(0,t.jsx)(M,{text:O.formatMessage({id:"pages.market.new_price"}),value:r==null?void 0:r.data.last_price})}),(0,t.jsx)(a.Z,{xs:24,sm:12,lg:8,children:(0,t.jsx)(M,{coun:"",text:O.formatMessage({id:"pages.market.total_sale"}),value:r==null?void 0:r.data.total_transaction_times})}),(0,t.jsx)(a.Z,{xs:24,sm:12,lg:8,children:(0,t.jsx)(M,{text:O.formatMessage({id:"pages.market.total_volume"}),value:r==null?void 0:r.data.total_auction_commission})})]})})},L=n(64731),N,F,S=m.ZP.div(N||(N=(0,g.Z)([`
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
`]))),Z=function(o){var A=o.text,r=o.name,f=o.onClick;return(0,t.jsx)(u.Z,{className:r===A?"ac":"",onClick:function(){return f(A)},type:"default",shape:"round",size:"large",children:A})},V=[{id:689072,u_id:0,dog_name:"CCP Big Dog(129)",dog_sex:1,dog_breed:8,dog_attr:[{attr:1,grade:852,name:"\u901F\u5EA6"},{attr:2,grade:550,name:"\u8010\u529B"},{attr:3,grade:361,name:"\u7206\u53D1"},{attr:4,grade:254,name:"\u5E73\u8861"}],dog_skill:[{skill:4,grade:5,name:"Lucky \u5E78\u8FD0\u7684"},{skill:14,grade:8,name:"Faith Sprint \u4FE1\u4EF0\u51B2\u523A"},{skill:4,grade:1,name:"Lucky \u5E78\u8FD0\u7684"},{skill:10,grade:4,name:"Phantom Transcendence \u5E7B\u5F71\u8D85\u8D8A"}],father_id:0,mother_id:0,sons_json:"",daughters_json:"",reproduce_count:0,block_address:"",market_price:"599.00000000000000000000",is_selling:1,img_url:"https://ccp.dog/img/dogs/dog.jpeg",addtime:"2021-12-30 21:05:09",updatetime:"2021-12-30 21:05:09"}],Q=m.ZP.div(F||(F=(0,g.Z)([`
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
  .products {
    padding: 20px;
  }



  @media (max-width: 576px) {
    padding: 12px;
    .products {
      padding: 10px;
    }

  }
`]))),K=function(){var y=(0,s.useState)("All NFT"),o=(0,I.Z)(y,2),A=o[0],r=o[1],f=(0,x.f)(_.w.market),O=f.request,G=f.status,P=f.data;return(0,s.useEffect)(function(){O(1)},[]),(0,t.jsxs)(Q,{style:{},children:[(0,t.jsx)(R,{}),(0,t.jsxs)(S,{children:[(0,t.jsx)(Z,{onClick:r,name:A,text:"All NFT"}),(0,t.jsx)(Z,{onClick:r,name:A,text:"CCP NFT DOG"})]}),(0,t.jsx)("div",{className:"products",children:(0,t.jsx)(E.Z,{gutter:28,children:P==null?void 0:P.data.data.map(function(U){return(0,t.jsx)(a.Z,{span:6,xs:24,sm:12,md:12,style:{marginBottom:"20px"},lg:6,children:(0,t.jsx)(L.b,{props:U})},U.id)})})}),(0,t.jsx)("div",{className:"loading",children:G==x.o.wait&&(0,t.jsx)(b.Z,{size:"large"})}),(0,t.jsx)("div",{className:"bottom_pagination",children:(P==null?void 0:P.data.count)&&(0,t.jsx)(C.Z,{defaultCurrent:1,onChange:function(k){O(k)},total:P==null?void 0:P.data.count})})]})},z=function(){return(0,t.jsx)("div",{children:(0,t.jsx)(K,{})})}},64731:function(W,j,n){"use strict";n.d(j,{b:function(){return _}});var B=n(58024),C=n(39144),p=n(20310),b=n(67294),v=n(47416),E=n(16924),l=n(46677),a=n.n(l),I=n(53190),e=n(85893),u,g,s,m=v.ZP.div(u||(u=(0,p.Z)([`
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
`]))),D=v.ZP.div(g||(g=(0,p.Z)([`
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
`]))),x=(0,v.ZP)(C.Z)(s||(s=(0,p.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),_=function(t){var i=t.props,c=t.path,h=c===void 0?"market":c;return(0,e.jsx)(E.Link,{to:{pathname:"".concat(h,"/").concat(i.id),search:"id=".concat(i.id,"&name=").concat(i.dog_name,"&path=").concat(h)},children:(0,e.jsx)(x,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,e.jsxs)(m,{children:[(0,e.jsx)("div",{className:"images",children:(0,e.jsx)("img",{alt:"example",src:i.img_url})}),(0,e.jsx)("div",{className:"bottom",children:(0,e.jsx)("h4",{children:i.dog_name})})]}),children:i.is_selling==1&&(0,e.jsxs)(D,{children:[(0,e.jsxs)("span",{children:[" ",(0,e.jsx)(I._H,{id:"component.nft_car.sell_price"})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("img",{src:a(),alt:"",className:"icon"}),parseInt(i.market_price).toFixed(2)]})]})})})}},67329:function(W,j,n){"use strict";n.d(j,{f:function(){return E},o:function(){return l}});var B=n(3182),C=n(2824),p=n(94043),b=n.n(p),v=n(67294),E=function(I){var e=(0,v.useState)(l.start),u=(0,C.Z)(e,2),g=u[0],s=u[1],m=(0,v.useState)(),D=(0,C.Z)(m,2),x=D[0],_=D[1],T=(0,v.useCallback)((0,B.Z)(b().mark(function t(){var i,c,h=arguments;return b().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,s(l.wait),d.next=4,I.apply(void 0,h);case 4:return i=d.sent,_(i),s(l.success),d.abrupt("return",i);case 10:return d.prev=10,d.t0=d.catch(0),c={err:d.t0.info},_(c),s(l.failure),d.abrupt("return",c);case 16:case"end":return d.stop()}},t,null,[[0,10]])})),[s,_]);return{status:g,request:T,data:x}},l;(function(a){a[a.start=0]="start",a[a.wait=1]="wait",a[a.success=2]="success",a[a.failure=3]="failure"})(l||(l={}))},46677:function(W){W.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="}}]);
