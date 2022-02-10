(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(B,E,t){"use strict";t.d(E,{e:function(){return y}});var I=t(2824),p=t(20310),u=t(67294),D=t(17857),c=t(47416),_=t(85893),d,a=c.ZP.div(d||(d=(0,p.Z)([`
  padding: `,`;
`])),function(e){return e.padding||"0"}),y=function(v){var x=v.value,i=x===void 0?"":x,m=v.decimals,f=v.padding,j=(0,u.useState)(0),o=(0,I.Z)(j,2),O=o[0],h=o[1],r=(0,u.useState)(0),g=(0,I.Z)(r,2),A=g[0],Z=g[1];return(0,u.useEffect)(function(){typeof i=="number"&&(h(A),Z(i))},[i]),(0,_.jsx)(a,{padding:f,children:typeof i=="string"?i:(0,_.jsx)(D.ZP,{start:O,end:A,decimals:m!==void 0?m:0,duration:1,separator:","})})}},64731:function(B,E,t){"use strict";t.d(E,{b:function(){return o}});var I=t(58024),p=t(39144),u=t(20310),D=t(67294),c=t(47416),_=t(16924),d=t(46677),a=t.n(d),y=t(53190),e=t(85893),v,x,i,m=c.ZP.div(v||(v=(0,u.Z)([`
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
`]))),f=c.ZP.div(x||(x=(0,u.Z)([`
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
`]))),j=(0,c.ZP)(p.Z)(i||(i=(0,u.Z)([`
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
`]))),o=function(h){var r=h.props,g=h.path,A=g===void 0?"market":g;return(0,e.jsx)(_.Link,{to:{pathname:"".concat(A,"/").concat(r.id),search:"id=".concat(r.id,"&name=").concat(r.dog_name,"&path=").concat(A)},children:(0,e.jsx)(j,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,e.jsxs)(m,{children:[(0,e.jsx)("div",{className:"images",children:(0,e.jsx)("img",{alt:"example",src:r.img_url})}),(0,e.jsx)("div",{className:"bottom",children:(0,e.jsx)("h4",{children:r.dog_name})})]}),children:r.is_selling==1&&(0,e.jsxs)(f,{children:[(0,e.jsxs)("span",{children:[" ",(0,e.jsx)(y._H,{id:"component.nft_car.sell_price"})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("img",{src:a(),alt:"",className:"icon"}),parseInt(r.market_price).toFixed(2)]})]})})})}},14164:function(B,E,t){"use strict";t.r(E),t.d(E,{default:function(){return rn}});var I=t(54421),p=t(38272),u=t(14781),D=t(40308),c=t(20228),_=t(11382),d=t(13062),a=t(71230),y=t(89032),e=t(15746),v=t(57663),x=t(71577),i=t(3182),m=t(20310),f=t(94043),j=t.n(f),o=t(47416),O=t(64731),h=t(67294),r=t(67329),g=t(93874),A=t(53776),Z=t(99219),n=t(85893),H,X,en=o.ZP.div(H||(H=(0,m.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;

    div {
      font-size: 24px;

    }
  }

  p {
    font-size: 16px;
    color: hsla(0, 0%, 100%, .8);
    margin-bottom: 0;
  }
`]))),P=function(T){var W=T.text,b=T.value;return(0,n.jsxs)(en,{children:[(0,n.jsx)("h3",{children:(0,n.jsx)(Z.e,{value:b!=null?b:0})}),(0,n.jsx)("p",{children:W})]})},N=o.ZP.div(X||(X=(0,m.Z)([`
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
    .ant-list-header {
      padding: 0;
    }

    .ant-list-bordered .ant-list-header {
      padding: 0;
    }
  }
`]))),xn=function(){return _jsx(N,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(P,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(P,{text:"USDT",value:0})})]})})},an=t(77624),$,sn=o.ZP.div($||($=(0,m.Z)([`

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
      }
    }
  }
`]))),rn=function(){var S,T,W,b,L,Q,K,z,dn=(0,A.t)("@@initialState"),s=dn.initialState,G=(0,r.f)(g.w.nftPacket),l=G.data,w=G.request,on=G.status,J=(0,h.useRef)(null),k=window.screen.width>500;(0,h.useEffect)(function(){k&&w(1)},[]);var ln=function(C){var F=C.pageSize,vn=C.offset;return new Promise(function(){var mn=(0,i.Z)(j().mark(function tn(pn){var Y;return j().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,w(vn/5+1);case 2:Y=R.sent,pn({total:Y.data.goods.count,data:Y.data.goods.data});case 4:case"end":return R.stop()}},tn)}));return function(tn){return mn.apply(this,arguments)}}())},M=(0,an.BR)(ln,{ref:J,initPageSize:5,incrementSize:5}),V=M.data,q=M.loading,nn=M.loadingMore,hn=M.reload,gn=M.loadMore,An=M.total,un=M.noMore,cn=function(){return(0,n.jsx)(n.Fragment,{children:!un&&(0,n.jsx)(x.Z,{onClick:gn,loading:nn,children:nn?"Loading more":"Click to load more"})})};return(0,n.jsx)(sn,{children:k?(0,n.jsxs)("div",{children:[(0,n.jsx)(N,{children:(0,n.jsxs)(a.Z,{gutter:20,children:[(0,n.jsx)(e.Z,{xs:8,sm:8,children:(0,n.jsx)(P,{text:"CCP.Dog",value:s==null||(S=s.currentUser)===null||S===void 0?void 0:S.ccp_dog_coin})}),(0,n.jsx)(e.Z,{xs:8,sm:8,children:(0,n.jsx)(P,{text:"USDT",value:s==null||(T=s.currentUser)===null||T===void 0?void 0:T.usdt_coin})}),(0,n.jsx)(e.Z,{xs:8,sm:8,children:(0,n.jsx)(P,{text:"GUT",value:s==null||(W=s.currentUser)===null||W===void 0?void 0:W.gut_coin})})]})}),(0,n.jsxs)("div",{style:{padding:"20px"},children:[(0,n.jsx)(a.Z,{gutter:48,children:(l==null||(b=l.data)===null||b===void 0?void 0:b.goods.data.length)>0?l==null||(L=l.data)===null||L===void 0?void 0:L.goods.data.map(function(U){return(0,n.jsx)(e.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:(0,n.jsx)(O.b,{props:U,path:"wallets"})},U.id)}):(0,n.jsx)("div",{style:{textAlign:"center"}})}),(0,n.jsx)("div",{className:"loading",children:on==r.o.wait&&(0,n.jsx)(_.Z,{size:"large"})}),(0,n.jsx)("div",{className:"bottom_pagination",children:(l==null?void 0:l.data.count)&&(0,n.jsx)(D.Z,{defaultCurrent:1,onChange:function(C){w(C)},total:l==null?void 0:l.data.count})})]})]}):(0,n.jsx)("div",{ref:J,style:{height:"90vh",overflowY:"auto"},children:(0,n.jsx)(p.ZP,{header:(0,n.jsx)("div",{children:(0,n.jsx)(N,{children:(0,n.jsxs)(a.Z,{gutter:20,children:[(0,n.jsx)(e.Z,{xs:8,sm:8,children:(0,n.jsx)(P,{text:"CCP.Dog",value:s==null||(Q=s.currentUser)===null||Q===void 0?void 0:Q.ccp_dog_coin})}),(0,n.jsx)(e.Z,{xs:8,sm:8,children:(0,n.jsx)(P,{text:"USDT",value:s==null||(K=s.currentUser)===null||K===void 0?void 0:K.usdt_coin})}),(0,n.jsx)(e.Z,{xs:8,sm:8,children:(0,n.jsx)(P,{text:"GUT",value:s==null||(z=s.currentUser)===null||z===void 0?void 0:z.gut_coin})})]})})}),footer:!q&&cn(),loading:q,bordered:!0,dataSource:V,renderItem:function(C,F){return(0,n.jsx)(p.ZP.Item,{style:{padding:F%2==0?12:0},children:F%2==0?(0,n.jsxs)(a.Z,{gutter:12,children:[(0,n.jsx)(e.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(O.b,{path:"wallets",props:C})},C.id),V[F+1]&&(0,n.jsx)(e.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,n.jsx)(O.b,{path:"wallets",props:V[F+1]})},C.id+1)]}):(0,n.jsx)("div",{})})}})})})}},67329:function(B,E,t){"use strict";t.d(E,{f:function(){return _},o:function(){return d}});var I=t(3182),p=t(2824),u=t(94043),D=t.n(u),c=t(67294),_=function(y){var e=(0,c.useState)(d.start),v=(0,p.Z)(e,2),x=v[0],i=v[1],m=(0,c.useState)(),f=(0,p.Z)(m,2),j=f[0],o=f[1],O=(0,c.useCallback)((0,I.Z)(D().mark(function h(){var r,g,A=arguments;return D().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i(d.wait),n.next=4,y.apply(void 0,A);case 4:return r=n.sent,o(r),i(d.success),n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(0),g={err:n.t0.info},o(g),i(d.failure),n.abrupt("return",g);case 16:case"end":return n.stop()}},h,null,[[0,10]])})),[i,o]);return{status:x,request:O,data:j}},d;(function(a){a[a.start=0]="start",a[a.wait=1]="wait",a[a.success=2]="success",a[a.failure=3]="failure"})(d||(d={}))},46677:function(B){B.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="}}]);
