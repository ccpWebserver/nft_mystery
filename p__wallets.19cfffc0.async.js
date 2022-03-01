(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(E,v,n){"use strict";n.d(v,{e:function(){return R}});var Z=n(2824),C=n(20310),A=n(67294),I=n(17857),u=n(47416),y=n(85893),g,s=u.ZP.div(g||(g=(0,C.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(a){return a.padding||"0"}),R=function(D){var x=D.value,i=x===void 0?"":x,_=D.decimals,T=D.padding,b=(0,A.useState)(0),e=(0,Z.Z)(b,2),j=e[0],M=e[1],h=(0,A.useState)(0),m=(0,Z.Z)(h,2),f=m[0],p=m[1];return(0,A.useEffect)(function(){typeof i=="number"&&(M(f),p(i))},[i]),(0,y.jsx)(s,{padding:T,children:typeof i=="string"?i:(0,y.jsx)(I.ZP,{start:j,end:f,decimals:_!==void 0?_:0,duration:1,separator:","})})}},64731:function(E,v,n){"use strict";n.d(v,{b:function(){return t}});var Z=n(58024),C=n(39144),A=n(20310),I=n(67294),u=n(47416),y=n(16924),g=n(46677),s=n.n(g),R=n(28219),a=n(92908),D=n.n(a),x=n(37372),i=n.n(x),_=n(44559),T=n(27254),b=n.n(T),e=n(85893),j,M,h,m=u.ZP.div(j||(j=(0,A.Z)([`
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
`]))),f=u.ZP.div(M||(M=(0,A.Z)([`
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
`]))),p=(0,u.ZP)(C.Z)(h||(h=(0,A.Z)([`
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
`]))),t=function(O){var c=O.props,o=O.path,r=o===void 0?"market":o,G=O.addBase64,F=(0,_.X)(c.img_url,G);return(0,e.jsx)(y.Link,{to:{pathname:"".concat(r,"/").concat(c.id),search:"id=".concat(c.id,"&name=").concat(c.dog_name,"&path=").concat(r)},children:(0,e.jsx)(p,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,e.jsxs)(m,{children:[(0,e.jsx)("div",{className:"images",children:c.state===0?F?(0,e.jsx)("img",{src:F}):(0,e.jsx)("img",{src:b(),alt:""}):(0,e.jsx)("img",{src:b(),alt:""})}),(0,e.jsx)("div",{className:"bottom",children:(0,e.jsx)("h4",{children:c.dog_name})}),(0,e.jsx)("div",{className:"price",children:(0,e.jsx)("img",{src:c.dog_sex==1?D():i(),alt:""})})]}),children:c.is_selling==1&&(0,e.jsxs)(f,{children:[(0,e.jsxs)("span",{children:[" ",(0,e.jsx)(R._H,{id:"component.nft_car.sell_price"})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("img",{src:s(),alt:"",className:"icon"}),parseInt(c.market_price).toFixed(2)]})]})})})}},45377:function(E,v,n){"use strict";n.r(v),n.d(v,{default:function(){return An}});var Z=n(54421),C=n(38272),A=n(14781),I=n(40308),u=n(20228),y=n(11382),g=n(13062),s=n(71230),R=n(89032),a=n(15746),D=n(57663),x=n(71577),i=n(3182),_=n(20310),T=n(94043),b=n.n(T),e=n(47416),j=n(64731),M=n(67294),h=n(67329),m=n(93874),f=n(53776),p=n(99219),t=n(85893),d,O,c=e.ZP.div(d||(d=(0,_.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;

    div {
      font-size: 24px;
      span{
        font-size: 24px;
        font-weight: 700;
        color: #fff;
      }
    }
  }

  p {
    font-size: 16px;
    color: hsla(0, 0%, 100%, .8);
    margin-bottom: 0;
  }
`]))),o=function(W){var U=W.text,B=W.value;return(0,t.jsxs)(c,{children:[(0,t.jsx)("h3",{children:(0,t.jsx)(p.e,{value:B!=null?B:0})}),(0,t.jsx)("p",{children:U})]})},r=e.ZP.div(O||(O=(0,_.Z)([`
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
    border-radius: 20px;
    margin-bottom: 15px;
    padding: 10px;

    .ant-list-header {
      padding: 0;
    }

    .ant-list-bordered .ant-list-header {
      padding: 0;
    }
  }
`]))),G=function(){return _jsx(r,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(o,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(o,{text:"USDT",value:0})})]})})},F=n(77624),gn=n(58024),un=n(39144),_n=n(16924),pn=n(27254),mn=n.n(pn),q,nn,tn,vn=e.ZP.div(q||(q=(0,_.Z)([`
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
`]))),Tn=e.ZP.div(nn||(nn=(0,_.Z)([`
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
`]))),xn=(0,e.ZP)(un.Z)(tn||(tn=(0,_.Z)([`
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
`]))),hn=function(W){var U=W.props,B=W.path,z=B===void 0?"market":B;return(0,t.jsx)(_n.Link,{to:{pathname:"".concat(z,"/").concat(U.id),search:"id=".concat(U.id,"&name=").concat(U.dog_name,"&path=").concat(z)},children:(0,t.jsx)(xn,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,t.jsxs)(vn,{children:[(0,t.jsx)("div",{className:"images",children:(0,t.jsx)("img",{src:mn()})}),(0,t.jsx)("div",{className:"bottom",children:(0,t.jsx)("h4",{children:U.dog_name})})]})})})},fn=n(43581),en,En=e.ZP.div(en||(en=(0,_.Z)([`

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
    .ant-list-bordered .ant-list-header {
      padding: 0 10px;
    }

    .ant-card-cover {
      img {
        width: 100%;
      }
    }
  }
`]))),An=function(){var K,W,U,B,z,Y,V,H,bn=(0,f.t)("@@initialState"),l=bn.initialState,X=(0,h.f)(m.w.nftPacket),P=X.data,$=X.request,jn=X.status,an=(0,M.useRef)(null),sn=(0,fn.YB)(),rn=window.screen.width>500;(0,M.useEffect)(function(){rn&&$(1)},[]);var On=function(L){var Q=L.pageSize,Mn=L.offset;return new Promise(function(){var In=(0,i.Z)(b().mark(function cn(yn){var J;return b().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,$(Mn/5+1);case 2:J=w.sent,yn({total:J.data.goods.count,data:J.data.goods.data});case 4:case"end":return w.stop()}},cn)}));return function(cn){return In.apply(this,arguments)}}())},N=(0,F.BR)(On,{ref:an,initPageSize:5,incrementSize:5}),k=N.data,on=N.loading,dn=N.loadingMore,Un=N.reload,Pn=N.loadMore,ln=N.total,Cn=N.noMore,Dn=function(){return(0,t.jsx)(t.Fragment,{children:!Cn&&(0,t.jsx)(x.Z,{onClick:Pn,loading:dn,children:dn?"Loading more":"Click to load more"})})};return(0,t.jsx)(En,{children:rn?(0,t.jsxs)("div",{children:[(0,t.jsx)(r,{children:(0,t.jsxs)(s.Z,{gutter:20,children:[(0,t.jsx)(a.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"CCP.Dog",value:l==null||(K=l.currentUser)===null||K===void 0?void 0:K.ccp_dog_coin})}),(0,t.jsx)(a.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"USDT",value:l==null||(W=l.currentUser)===null||W===void 0?void 0:W.usdt_coin})}),(0,t.jsx)(a.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"GUT",value:l==null||(U=l.currentUser)===null||U===void 0?void 0:U.gut_coin})}),(0,t.jsx)(a.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:sn.formatMessage({id:"pages.myaccount.own_an_nft"}),value:ln})})]})}),(0,t.jsxs)("div",{style:{padding:"20px"},children:[(0,t.jsx)(s.Z,{gutter:48,children:(P==null||(B=P.data)===null||B===void 0?void 0:B.goods.data.length)>0?P==null||(z=P.data)===null||z===void 0?void 0:z.goods.data.map(function(S){return(0,t.jsx)(a.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:S.state==0?(0,t.jsx)(j.b,{props:S,path:"wallets"}):(0,t.jsx)(hn,{props:S,path:"wallets"})},S.id)}):(0,t.jsx)("div",{style:{textAlign:"center"}})}),(0,t.jsx)("div",{className:"loading",children:jn==h.o.wait&&(0,t.jsx)(y.Z,{size:"large"})}),(0,t.jsx)("div",{className:"bottom_pagination",children:(P==null?void 0:P.data.count)&&(0,t.jsx)(I.Z,{defaultCurrent:1,onChange:function(L){$(L)},total:P==null?void 0:P.data.count})})]})]}):(0,t.jsx)("div",{ref:an,style:{height:"90vh",overflowY:"auto"},children:(0,t.jsx)(C.ZP,{header:(0,t.jsx)("div",{children:(0,t.jsx)(r,{children:(0,t.jsxs)(s.Z,{gutter:20,children:[(0,t.jsx)(a.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"CCP.Dog",value:l==null||(Y=l.currentUser)===null||Y===void 0?void 0:Y.ccp_dog_coin})}),(0,t.jsx)(a.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"USDT",value:l==null||(V=l.currentUser)===null||V===void 0?void 0:V.usdt_coin})}),(0,t.jsx)(a.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"GUT",value:l==null||(H=l.currentUser)===null||H===void 0?void 0:H.gut_coin})}),(0,t.jsx)(a.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:sn.formatMessage({id:"pages.myaccount.own_an_nft"}),value:ln})})]})})}),footer:!on&&Dn(),loading:on,bordered:!0,dataSource:k,renderItem:function(L,Q){return(0,t.jsx)(C.ZP.Item,{style:{padding:Q%2==0?12:0},children:Q%2==0?(0,t.jsxs)(s.Z,{gutter:12,style:{minWidth:"100%"},children:[(0,t.jsx)(a.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,t.jsx)(j.b,{path:"wallets",props:L})},L.id),k[Q+1]&&(0,t.jsx)(a.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,t.jsx)(j.b,{path:"wallets",props:k[Q+1]})},L.id+1)]}):(0,t.jsx)("div",{})})}})})})}},44559:function(E,v,n){"use strict";n.d(v,{X:function(){return D}});var Z=n(3182),C=n(2824),A=n(94043),I=n.n(A),u=n(67294),y=n(93874),g={Blue:"3",Green:"4",Purple:"5",Red:"6",Yellow:"7"},s={Background:"BasicColor",butt:"butt",front_legs:"front_legs",hind_legs:"hind_legs",tail:"tail",jaw:"jaw",back:"back"};function R(x,i){return x=="Background"?"./trait-layers/".concat(s[x],"/").concat(g[i],".jpg"):"./trait-layers/".concat(s[x],"/").concat(g[i],".png")}var a=200,D=function(i,_){var T=(0,u.useState)(""),b=(0,C.Z)(T,2),e=b[0],j=b[1],M=(0,u.useCallback)(function(m,f){var p=document.createElement("canvas");p.width=a,p.height=a;var t=p.getContext("2d"),d={};m.map(function(O,c){var o=new Image;o.src=" https://nft.ccp.dog/nft/".concat(O),o.crossOrigin="Access-Control-Allow-Origin",o.onload=function(){if(d[c]=o,Object.keys(d).length==Object.keys(f).length){var r=Object.keys(d);r.map(function(F){t.drawImage(d[F],0,0,a,a),d[F]=null});var G=p.toDataURL("image/png");console.log("-----1"),j(G),p=null}}})},[_]),h=(0,u.useCallback)(function(){var m=(0,Z.Z)(I().mark(function f(p){var t,d,O,c;return I().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(p){r.next=2;break}return r.abrupt("return");case 2:if(t=p.replace(/[^\d]/g,""),t){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,y.w.read_trait_forTokenId(t);case 7:if(d=r.sent,d.status==1){r.next=10;break}return r.abrupt("return");case 10:d=d.data,delete d.tokenId,O=[];for(c in d)O.push(R(c,d[c]));M(O,d);case 15:case"end":return r.stop()}},f)}));return function(f){return m.apply(this,arguments)}}(),[]);return(0,u.useEffect)(function(){h(i)},[]),e}},67329:function(E,v,n){"use strict";n.d(v,{f:function(){return y},o:function(){return g}});var Z=n(3182),C=n(2824),A=n(94043),I=n.n(A),u=n(67294),y=function(R){var a=(0,u.useState)(g.start),D=(0,C.Z)(a,2),x=D[0],i=D[1],_=(0,u.useState)(),T=(0,C.Z)(_,2),b=T[0],e=T[1],j=(0,u.useCallback)((0,Z.Z)(I().mark(function M(){var h,m,f=arguments;return I().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(g.wait),t.next=4,R.apply(void 0,f);case 4:return h=t.sent,e(h),i(g.success),t.abrupt("return",h);case 10:return t.prev=10,t.t0=t.catch(0),m={err:t.t0.info},e(m),i(g.failure),t.abrupt("return",m);case 16:case"end":return t.stop()}},M,null,[[0,10]])})),[i,e]);return{status:x,request:j,data:b}},g;(function(s){s[s.start=0]="start",s[s.wait=1]="wait",s[s.success=2]="success",s[s.failure=3]="failure"})(g||(g={}))},27254:function(E,v,n){E.exports=n.p+"static/baby_dog.1fd8dbc6.jpg"},92908:function(E,v,n){E.exports=n.p+"static/gong.d3c6c27d.png"},46677:function(E){E.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},37372:function(E,v,n){E.exports=n.p+"static/mo.30ad1e1e.png"}}]);
