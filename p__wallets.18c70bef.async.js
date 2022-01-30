(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(M,x,n){"use strict";n.d(x,{e:function(){return p}});var b=n(2824),h=n(20310),u=n(67294),P=n(17857),c=n(47416),_=n(85893),o,a=c.ZP.div(o||(o=(0,h.Z)([`
  padding: `,`;
`])),function(e){return e.padding||"0"}),p=function(g){var A=g.value,s=A===void 0?"":A,f=g.decimals,O=g.padding,j=(0,u.useState)(0),t=(0,b.Z)(j,2),C=t[0],m=t[1],i=(0,u.useState)(0),r=(0,b.Z)(i,2),v=r[0],B=r[1];return(0,u.useEffect)(function(){typeof s=="number"&&(m(v),B(s))},[s]),(0,_.jsx)(a,{padding:O,children:typeof s=="string"?s:(0,_.jsx)(P.ZP,{start:C,end:v,decimals:f!==void 0?f:0,duration:1,separator:","})})}},64731:function(M,x,n){"use strict";n.d(x,{b:function(){return t}});var b=n(58024),h=n(39144),u=n(20310),P=n(67294),c=n(47416),_=n(16924),o=n(46677),a=n.n(o),p=n(53190),e=n(85893),g,A,s,f=c.ZP.div(g||(g=(0,u.Z)([`
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
`]))),O=c.ZP.div(A||(A=(0,u.Z)([`
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
`]))),j=(0,c.ZP)(h.Z)(s||(s=(0,u.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),t=function(m){var i=m.props,r=m.path,v=r===void 0?"market":r;return(0,e.jsx)(_.Link,{to:{pathname:"".concat(v,"/").concat(i.id),search:"id=".concat(i.id,"&name=").concat(i.dog_name,"&path=").concat(v)},children:(0,e.jsx)(j,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,e.jsxs)(f,{children:[(0,e.jsx)("div",{className:"images",children:(0,e.jsx)("img",{alt:"example",src:i.img_url})}),(0,e.jsx)("div",{className:"bottom",children:(0,e.jsx)("h4",{children:i.dog_name})})]}),children:i.is_selling==1&&(0,e.jsxs)(O,{children:[(0,e.jsxs)("span",{children:[" ",(0,e.jsx)(p._H,{id:"component.nft_car.sell_price"})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("img",{src:a(),alt:"",className:"icon"}),parseInt(i.market_price).toFixed(2)]})]})})})}},14164:function(M,x,n){"use strict";n.r(x),n.d(x,{default:function(){return S}});var b=n(14781),h=n(40308),u=n(20228),P=n(11382),c=n(13062),_=n(71230),o=n(89032),a=n(15746),p=n(20310),e=n(47416),g=n(64731),A=n(67294),s=n(67329),f=n(93874),O=n(53776),j=n(99219),t=n(85893),C,m,i=e.ZP.div(C||(C=(0,p.Z)([`
  h3{
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    div{
      font-size: 24px;

    }
  }
  p{
    font-size: 16px;
    color: hsla(0,0%,100%,.8);
    margin-bottom: 0;
  }
`]))),r=function(I){var U=I.text,D=I.value;return(0,t.jsxs)(i,{children:[(0,t.jsxs)("h3",{children:[" ",(0,t.jsx)(j.e,{value:D!=null?D:0})]}),(0,t.jsx)("p",{children:U})]})},v=e.ZP.div(m||(m=(0,p.Z)([`
  border-radius: 100px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`]))),B=function(){return _jsx(v,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(r,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(r,{text:"USDT",value:0})})]})})},d,R=e.ZP.div(d||(d=(0,p.Z)([`

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

  }
`]))),S=function(){var T,I,U,D,W,Z=(0,O.t)("@@initialState"),E=Z.initialState,y=(0,s.f)(f.w.nftPacket),l=y.data,N=y.request,L=y.status;return(0,A.useEffect)(function(){N("")},[]),(0,t.jsxs)(R,{children:[(0,t.jsx)(v,{children:(0,t.jsxs)(_.Z,{gutter:20,children:[(0,t.jsx)(a.Z,{xs:8,sm:8,children:(0,t.jsx)(r,{text:"CCP.Dog",value:E==null||(T=E.currentUser)===null||T===void 0?void 0:T.ccp_dog_coin})}),(0,t.jsx)(a.Z,{xs:8,sm:8,children:(0,t.jsx)(r,{text:"USDT",value:E==null||(I=E.currentUser)===null||I===void 0?void 0:I.usdt_coin})}),(0,t.jsx)(a.Z,{xs:8,sm:8,children:(0,t.jsx)(r,{text:"GUT",value:E==null||(U=E.currentUser)===null||U===void 0?void 0:U.gut_coin})})]})}),(0,t.jsx)(_.Z,{className:"balances",gutter:48}),(0,t.jsxs)("div",{style:{padding:"20px"},children:[(0,t.jsx)(_.Z,{gutter:48,children:(l==null||(D=l.data)===null||D===void 0?void 0:D.goods.data.length)>0?l==null||(W=l.data)===null||W===void 0?void 0:W.goods.data.map(function(F){return(0,t.jsx)(a.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:(0,t.jsx)(g.b,{props:F,path:"wallets"})},F.id)}):(0,t.jsx)("div",{style:{textAlign:"center"}})}),(0,t.jsx)("div",{className:"loading",children:L==s.o.wait&&(0,t.jsx)(P.Z,{size:"large"})}),(0,t.jsx)("div",{className:"bottom_pagination",children:(l==null?void 0:l.data.count)&&(0,t.jsx)(h.Z,{defaultCurrent:1,onChange:function(Q){N(Q)},total:l==null?void 0:l.data.count})})]})]})}},67329:function(M,x,n){"use strict";n.d(x,{f:function(){return _},o:function(){return o}});var b=n(3182),h=n(2824),u=n(94043),P=n.n(u),c=n(67294),_=function(p){var e=(0,c.useState)(o.start),g=(0,h.Z)(e,2),A=g[0],s=g[1],f=(0,c.useState)(),O=(0,h.Z)(f,2),j=O[0],t=O[1],C=(0,c.useCallback)((0,b.Z)(P().mark(function m(){var i,r,v=arguments;return P().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,s(o.wait),d.next=4,p.apply(void 0,v);case 4:return i=d.sent,t(i),s(o.success),d.abrupt("return",i);case 10:return d.prev=10,d.t0=d.catch(0),r={err:d.t0.info},t(r),s(o.failure),d.abrupt("return",r);case 16:case"end":return d.stop()}},m,null,[[0,10]])})),[s,t]);return{status:A,request:C,data:j}},o;(function(a){a[a.start=0]="start",a[a.wait=1]="wait",a[a.success=2]="success",a[a.failure=3]="failure"})(o||(o={}))},46677:function(M){M.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="}}]);
