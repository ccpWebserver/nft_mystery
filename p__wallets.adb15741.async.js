(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(y,h,n){"use strict";n.d(h,{e:function(){return I}});var b=n(2824),m=n(20310),g=n(67294),P=n(17857),c=n(47416),E=n(85893),d,s=c.ZP.div(d||(d=(0,m.Z)([`
  padding: `,`;
`])),function(e){return e.padding||"0"}),I=function(v){var x=v.value,i=x===void 0?"":x,p=v.decimals,f=v.padding,j=(0,g.useState)(0),o=(0,b.Z)(j,2),C=o[0],_=o[1],r=(0,g.useState)(0),u=(0,b.Z)(r,2),A=u[0],S=u[1];return(0,g.useEffect)(function(){typeof i=="number"&&(_(A),S(i))},[i]),(0,E.jsx)(s,{padding:f,children:typeof i=="string"?i:(0,E.jsx)(P.ZP,{start:C,end:A,decimals:p!==void 0?p:0,duration:1,separator:","})})}},64731:function(y,h,n){"use strict";n.d(h,{b:function(){return o}});var b=n(58024),m=n(39144),g=n(20310),P=n(67294),c=n(47416),E=n(16924),d=n(46677),s=n.n(d),I=n(53190),e=n(85893),v,x,i,p=c.ZP.div(v||(v=(0,g.Z)([`
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
`]))),f=c.ZP.div(x||(x=(0,g.Z)([`
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
`]))),j=(0,c.ZP)(m.Z)(i||(i=(0,g.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),o=function(_){var r=_.props,u=_.path,A=u===void 0?"market":u;return(0,e.jsx)(E.Link,{to:{pathname:"".concat(A,"/").concat(r.id),search:"id=".concat(r.id,"&name=").concat(r.dog_name,"&path=").concat(A)},children:(0,e.jsx)(j,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,e.jsxs)(p,{children:[(0,e.jsx)("div",{className:"images",children:(0,e.jsx)("img",{alt:"example",src:r.img_url})}),(0,e.jsx)("div",{className:"bottom",children:(0,e.jsx)("h4",{children:r.dog_name})})]}),children:r.is_selling==1&&(0,e.jsxs)(f,{children:[(0,e.jsxs)("span",{children:[" ",(0,e.jsx)(I._H,{id:"component.nft_car.sell_price"})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("img",{src:s(),alt:"",className:"icon"}),parseInt(r.market_price).toFixed(2)]})]})})})}},14164:function(y,h,n){"use strict";n.r(h),n.d(h,{default:function(){return an}});var b=n(54421),m=n(38272),g=n(14781),P=n(40308),c=n(20228),E=n(11382),d=n(13062),s=n(71230),I=n(89032),e=n(15746),v=n(57663),x=n(71577),i=n(3182),p=n(20310),f=n(94043),j=n.n(f),o=n(47416),C=n(64731),_=n(67294),r=n(67329),u=n(93874),A=n(53776),S=n(99219),t=n(85893),Y,w,nn=o.ZP.div(Y||(Y=(0,p.Z)([`
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
`]))),O=function(T){var F=T.text,D=T.value;return(0,t.jsxs)(nn,{children:[(0,t.jsxs)("h3",{children:[" ",(0,t.jsx)(S.e,{value:D!=null?D:0})]}),(0,t.jsx)("p",{children:F})]})},R=o.ZP.div(w||(w=(0,p.Z)([`
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
    margin-bottom: 15px;
    .ant-list-header{
      padding: 0;
    }
    .ant-list-bordered .ant-list-header{
      padding: 0;
    }
  }
`]))),mn=function(){return _jsx(R,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(O,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(O,{text:"USDT",value:0})})]})})},tn=n(77624),H,en=o.ZP.div(H||(H=(0,p.Z)([`

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
    .ant-list-bordered .ant-list-header{
      padding: 0 10px;
    }
    .ant-card-cover {
      img {
        width: 100%;
        min-width: 278px;
        min-height: 278px;
      }
    }
  }
`]))),an=function(){var W,T,F,D,N,L,Q,K,sn=(0,A.t)("@@initialState"),a=sn.initialState,z=(0,r.f)(u.w.nftPacket),l=z.data,G=z.request,rn=z.status,X=(0,_.useRef)(null),$=window.screen.width>500;(0,_.useEffect)(function(){$&&G(1)},[]);var dn=function(B){var An=B.pageSize,cn=B.offset;return new Promise(function(){var vn=(0,i.Z)(j().mark(function q(pn){var V;return j().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,G(cn/5+1);case 2:V=Z.sent,pn({total:V.data.goods.count,data:V.data.goods.data});case 4:case"end":return Z.stop()}},q)}));return function(q){return vn.apply(this,arguments)}}())},M=(0,tn.BR)(dn,{ref:X,initPageSize:5,incrementSize:5}),on=M.data,J=M.loading,k=M.loadingMore,xn=M.reload,ln=M.loadMore,_n=M.total,un=M.noMore,gn=function(){return(0,t.jsx)(t.Fragment,{children:!un&&(0,t.jsx)(x.Z,{onClick:ln,loading:k,children:k?"Loading more":"Click to load more"})})};return(0,t.jsx)(en,{children:$?(0,t.jsxs)("div",{children:[(0,t.jsx)(R,{children:(0,t.jsxs)(s.Z,{gutter:20,children:[(0,t.jsx)(e.Z,{xs:8,sm:8,children:(0,t.jsx)(O,{text:"CCP.Dog",value:a==null||(W=a.currentUser)===null||W===void 0?void 0:W.ccp_dog_coin})}),(0,t.jsx)(e.Z,{xs:8,sm:8,children:(0,t.jsx)(O,{text:"USDT",value:a==null||(T=a.currentUser)===null||T===void 0?void 0:T.usdt_coin})}),(0,t.jsx)(e.Z,{xs:8,sm:8,children:(0,t.jsx)(O,{text:"GUT",value:a==null||(F=a.currentUser)===null||F===void 0?void 0:F.gut_coin})})]})}),(0,t.jsxs)("div",{style:{padding:"20px"},children:[(0,t.jsx)(s.Z,{gutter:48,children:(l==null||(D=l.data)===null||D===void 0?void 0:D.goods.data.length)>0?l==null||(N=l.data)===null||N===void 0?void 0:N.goods.data.map(function(U){return(0,t.jsx)(e.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:(0,t.jsx)(C.b,{props:U,path:"wallets"})},U.id)}):(0,t.jsx)("div",{style:{textAlign:"center"}})}),(0,t.jsx)("div",{className:"loading",children:rn==r.o.wait&&(0,t.jsx)(E.Z,{size:"large"})}),(0,t.jsx)("div",{className:"bottom_pagination",children:(l==null?void 0:l.data.count)&&(0,t.jsx)(P.Z,{defaultCurrent:1,onChange:function(B){G(B)},total:l==null?void 0:l.data.count})})]})]}):(0,t.jsx)("div",{ref:X,style:{height:"90vh",overflowY:"auto"},children:(0,t.jsx)(m.ZP,{header:(0,t.jsx)("div",{children:(0,t.jsx)(R,{children:(0,t.jsxs)(s.Z,{gutter:20,children:[(0,t.jsx)(e.Z,{xs:8,sm:8,children:(0,t.jsx)(O,{text:"CCP.Dog",value:a==null||(L=a.currentUser)===null||L===void 0?void 0:L.ccp_dog_coin})}),(0,t.jsx)(e.Z,{xs:8,sm:8,children:(0,t.jsx)(O,{text:"USDT",value:a==null||(Q=a.currentUser)===null||Q===void 0?void 0:Q.usdt_coin})}),(0,t.jsx)(e.Z,{xs:8,sm:8,children:(0,t.jsx)(O,{text:"GUT",value:a==null||(K=a.currentUser)===null||K===void 0?void 0:K.gut_coin})})]})})}),footer:!J&&gn(),loading:J,bordered:!0,dataSource:on,renderItem:function(B){return(0,t.jsx)(m.ZP.Item,{children:(0,t.jsx)(C.b,{path:"wallets",props:B})})}})})})}},67329:function(y,h,n){"use strict";n.d(h,{f:function(){return E},o:function(){return d}});var b=n(3182),m=n(2824),g=n(94043),P=n.n(g),c=n(67294),E=function(I){var e=(0,c.useState)(d.start),v=(0,m.Z)(e,2),x=v[0],i=v[1],p=(0,c.useState)(),f=(0,m.Z)(p,2),j=f[0],o=f[1],C=(0,c.useCallback)((0,b.Z)(P().mark(function _(){var r,u,A=arguments;return P().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(d.wait),t.next=4,I.apply(void 0,A);case 4:return r=t.sent,o(r),i(d.success),t.abrupt("return",r);case 10:return t.prev=10,t.t0=t.catch(0),u={err:t.t0.info},o(u),i(d.failure),t.abrupt("return",u);case 16:case"end":return t.stop()}},_,null,[[0,10]])})),[i,o]);return{status:x,request:C,data:j}},d;(function(s){s[s.start=0]="start",s[s.wait=1]="wait",s[s.success=2]="success",s[s.failure=3]="failure"})(d||(d={}))},46677:function(y){y.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="}}]);
