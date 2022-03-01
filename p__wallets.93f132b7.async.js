(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(E,h,n){"use strict";n.d(h,{e:function(){return Z}});var W=n(2824),O=n(20310),A=n(67294),D=n(17857),_=n(47416),M=n(85893),l,s=_.ZP.div(l||(l=(0,O.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(r){return r.padding||"0"}),Z=function(m){var v=m.value,c=v===void 0?"":v,g=m.decimals,I=m.padding,P=(0,A.useState)(0),e=(0,W.Z)(P,2),b=e[0],f=e[1],u=(0,A.useState)(0),o=(0,W.Z)(u,2),x=o[0],i=o[1];return(0,A.useEffect)(function(){typeof c=="number"&&(f(x),i(c))},[c]),(0,M.jsx)(s,{padding:I,children:typeof c=="string"?c:(0,M.jsx)(D.ZP,{start:b,end:x,decimals:g!==void 0?g:0,duration:1,separator:","})})}},64731:function(E,h,n){"use strict";n.d(h,{b:function(){return t}});var W=n(58024),O=n(39144),A=n(20310),D=n(67294),_=n(47416),M=n(16924),l=n(46677),s=n.n(l),Z=n(28219),r=n(92908),m=n.n(r),v=n(37372),c=n.n(v),g=n(44559),I=n(27254),P=n.n(I),e=n(85893),b,f,u,o=_.ZP.div(b||(b=(0,A.Z)([`
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
`]))),x=_.ZP.div(f||(f=(0,A.Z)([`
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
`]))),i=(0,_.ZP)(O.Z)(u||(u=(0,A.Z)([`
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
`]))),t=function(C){var a=C.props,p=C.path,R=p===void 0?"market":p,G=(0,g.X)(a.img_url);return(0,e.jsx)(M.Link,{to:{pathname:"".concat(R,"/").concat(a.id),search:"id=".concat(a.id,"&name=").concat(a.dog_name,"&path=").concat(R)},children:(0,e.jsx)(i,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,e.jsxs)(o,{children:[(0,e.jsx)("div",{className:"images",children:a.state===0?G?(0,e.jsx)("img",{src:G}):(0,e.jsx)("img",{src:P(),alt:""}):(0,e.jsx)("img",{src:P(),alt:""})}),(0,e.jsx)("div",{className:"bottom",children:(0,e.jsx)("h4",{children:a.dog_name})}),(0,e.jsx)("div",{className:"price",children:(0,e.jsx)("img",{src:a.dog_sex==1?m():c(),alt:""})})]}),children:a.is_selling==1&&(0,e.jsxs)(x,{children:[(0,e.jsxs)("span",{children:[" ",(0,e.jsx)(Z._H,{id:"component.nft_car.sell_price"})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("img",{src:s(),alt:"",className:"icon"}),parseInt(a.market_price).toFixed(2)]})]})})})}},45377:function(E,h,n){"use strict";n.r(h),n.d(h,{default:function(){return En}});var W=n(54421),O=n(38272),A=n(14781),D=n(40308),_=n(20228),M=n(11382),l=n(13062),s=n(71230),Z=n(89032),r=n(15746),m=n(57663),v=n(71577),c=n(3182),g=n(20310),I=n(94043),P=n.n(I),e=n(47416),b=n(64731),f=n(67294),u=n(67329),o=n(93874),x=n(53776),i=n(99219),t=n(85893),U,C,a=e.ZP.div(U||(U=(0,g.Z)([`
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
`]))),p=function(B){var y=B.text,T=B.value;return(0,t.jsxs)(a,{children:[(0,t.jsx)("h3",{children:(0,t.jsx)(i.e,{value:T!=null?T:0})}),(0,t.jsx)("p",{children:y})]})},R=e.ZP.div(C||(C=(0,g.Z)([`
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
`]))),G=function(){return _jsx(R,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(p,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(p,{text:"USDT",value:0})})]})})},J=n(77624),yn=n(58024),gn=n(39144),un=n(16924),_n=n(27254),pn=n.n(_n),q,nn,tn,mn=e.ZP.div(q||(q=(0,g.Z)([`
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
`]))),Tn=e.ZP.div(nn||(nn=(0,g.Z)([`
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
`]))),vn=(0,e.ZP)(gn.Z)(tn||(tn=(0,g.Z)([`
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
`]))),xn=function(B){var y=B.props,T=B.path,K=T===void 0?"market":T;return(0,t.jsx)(un.Link,{to:{pathname:"".concat(K,"/").concat(y.id),search:"id=".concat(y.id,"&name=").concat(y.dog_name,"&path=").concat(K)},children:(0,t.jsx)(vn,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,t.jsxs)(mn,{children:[(0,t.jsx)("div",{className:"images",children:(0,t.jsx)("img",{src:pn()})}),(0,t.jsx)("div",{className:"bottom",children:(0,t.jsx)("h4",{children:y.dog_name})})]})})})},hn=n(43581),en,fn=e.ZP.div(en||(en=(0,g.Z)([`

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
`]))),En=function(){var N,B,y,T,K,w,Y,V,An=(0,x.t)("@@initialState"),d=An.initialState,H=(0,u.f)(o.w.nftPacket),j=H.data,X=H.request,bn=H.status,an=(0,f.useRef)(null),sn=(0,hn.YB)(),rn=window.screen.width>500;(0,f.useEffect)(function(){rn&&X(1)},[]);var jn=function(L){var z=L.pageSize,Dn=L.offset;return new Promise(function(){var Mn=(0,c.Z)(P().mark(function cn(In){var k;return P().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,X(Dn/5+1);case 2:k=Q.sent,In({total:k.data.goods.count,data:k.data.goods.data});case 4:case"end":return Q.stop()}},cn)}));return function(cn){return Mn.apply(this,arguments)}}())},F=(0,J.BR)(jn,{ref:an,initPageSize:5,incrementSize:5}),$=F.data,on=F.loading,dn=F.loadingMore,Un=F.reload,On=F.loadMore,ln=F.total,Pn=F.noMore,Cn=function(){return(0,t.jsx)(t.Fragment,{children:!Pn&&(0,t.jsx)(v.Z,{onClick:On,loading:dn,children:dn?"Loading more":"Click to load more"})})};return(0,t.jsx)(fn,{children:rn?(0,t.jsxs)("div",{children:[(0,t.jsx)(R,{children:(0,t.jsxs)(s.Z,{gutter:20,children:[(0,t.jsx)(r.Z,{xs:12,sm:6,children:(0,t.jsx)(p,{text:"CCP.Dog",value:d==null||(N=d.currentUser)===null||N===void 0?void 0:N.ccp_dog_coin})}),(0,t.jsx)(r.Z,{xs:12,sm:6,children:(0,t.jsx)(p,{text:"USDT",value:d==null||(B=d.currentUser)===null||B===void 0?void 0:B.usdt_coin})}),(0,t.jsx)(r.Z,{xs:12,sm:6,children:(0,t.jsx)(p,{text:"GUT",value:d==null||(y=d.currentUser)===null||y===void 0?void 0:y.gut_coin})}),(0,t.jsx)(r.Z,{xs:12,sm:6,children:(0,t.jsx)(p,{text:sn.formatMessage({id:"pages.myaccount.own_an_nft"}),value:ln})})]})}),(0,t.jsxs)("div",{style:{padding:"20px"},children:[(0,t.jsx)(s.Z,{gutter:48,children:(j==null||(T=j.data)===null||T===void 0?void 0:T.goods.data.length)>0?j==null||(K=j.data)===null||K===void 0?void 0:K.goods.data.map(function(S){return(0,t.jsx)(r.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:S.state==0?(0,t.jsx)(b.b,{props:S,path:"wallets"}):(0,t.jsx)(xn,{props:S,path:"wallets"})},S.id)}):(0,t.jsx)("div",{style:{textAlign:"center"}})}),(0,t.jsx)("div",{className:"loading",children:bn==u.o.wait&&(0,t.jsx)(M.Z,{size:"large"})}),(0,t.jsx)("div",{className:"bottom_pagination",children:(j==null?void 0:j.data.count)&&(0,t.jsx)(D.Z,{defaultCurrent:1,onChange:function(L){X(L)},total:j==null?void 0:j.data.count})})]})]}):(0,t.jsx)("div",{ref:an,style:{height:"90vh",overflowY:"auto"},children:(0,t.jsx)(O.ZP,{header:(0,t.jsx)("div",{children:(0,t.jsx)(R,{children:(0,t.jsxs)(s.Z,{gutter:20,children:[(0,t.jsx)(r.Z,{xs:12,sm:6,children:(0,t.jsx)(p,{text:"CCP.Dog",value:d==null||(w=d.currentUser)===null||w===void 0?void 0:w.ccp_dog_coin})}),(0,t.jsx)(r.Z,{xs:12,sm:6,children:(0,t.jsx)(p,{text:"USDT",value:d==null||(Y=d.currentUser)===null||Y===void 0?void 0:Y.usdt_coin})}),(0,t.jsx)(r.Z,{xs:12,sm:6,children:(0,t.jsx)(p,{text:"GUT",value:d==null||(V=d.currentUser)===null||V===void 0?void 0:V.gut_coin})}),(0,t.jsx)(r.Z,{xs:12,sm:6,children:(0,t.jsx)(p,{text:sn.formatMessage({id:"pages.myaccount.own_an_nft"}),value:ln})})]})})}),footer:!on&&Cn(),loading:on,bordered:!0,dataSource:$,renderItem:function(L,z){return(0,t.jsx)(O.ZP.Item,{style:{padding:z%2==0?12:0},children:z%2==0?(0,t.jsxs)(s.Z,{gutter:12,style:{minWidth:"100%"},children:[(0,t.jsx)(r.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,t.jsx)(b.b,{path:"wallets",props:L})},L.id),$[z+1]&&(0,t.jsx)(r.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,t.jsx)(b.b,{path:"wallets",props:$[z+1]})},L.id+1)]}):(0,t.jsx)("div",{})})}})})})}},44559:function(E,h,n){"use strict";n.d(h,{X:function(){return r}});var W=n(3182),O=n(2824),A=n(94043),D=n.n(A),_=n(67294),M=n(93874),l={Blue:"3",Green:"4",Purple:"5",Red:"6",Yellow:"7"},s={Background:"BasicColor",butt:"butt",front_legs:"front_legs",hind_legs:"hind_legs",tail:"tail",jaw:"jaw",back:"back"};function Z(m,v){return m=="Background"?"./trait-layers/".concat(s[m],"/").concat(l[v],".jpg"):"./trait-layers/".concat(s[m],"/").concat(l[v],".png")}var r=function(v){var c=(0,_.useState)(""),g=(0,O.Z)(c,2),I=g[0],P=g[1],e=(0,_.useCallback)(function(f,u){var o=document.createElement("canvas");o.width=500,o.height=500;var x=o.getContext("2d"),i={};f.map(function(t,U){var C=new Image;C.src=" https://nft.ccp.dog/nft/".concat(t),C.crossOrigin="Access-Control-Allow-Origin",C.onload=function(){if(i[U]=C,Object.keys(i).length==Object.keys(u).length){var a=Object.keys(i);a.map(function(R){x.drawImage(i[R],0,0,500,500)});var p=o.toDataURL("image/png");P(p)}}})},[]),b=(0,_.useCallback)(function(){var f=(0,W.Z)(D().mark(function u(o){var x,i,t,U;return D().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(o){a.next=2;break}return a.abrupt("return");case 2:if(x=o.replace(/[^\d]/g,""),x){a.next=5;break}return a.abrupt("return");case 5:return a.next=7,M.w.read_trait_forTokenId(x);case 7:if(i=a.sent,i.status==1){a.next=10;break}return a.abrupt("return");case 10:i=i.data,delete i.tokenId,t=[];for(U in i)t.push(Z(U,i[U]));e(t,i);case 15:case"end":return a.stop()}},u)}));return function(u){return f.apply(this,arguments)}}(),[]);return(0,_.useEffect)(function(){b(v)},[v]),I}},67329:function(E,h,n){"use strict";n.d(h,{f:function(){return M},o:function(){return l}});var W=n(3182),O=n(2824),A=n(94043),D=n.n(A),_=n(67294),M=function(Z){var r=(0,_.useState)(l.start),m=(0,O.Z)(r,2),v=m[0],c=m[1],g=(0,_.useState)(),I=(0,O.Z)(g,2),P=I[0],e=I[1],b=(0,_.useCallback)((0,W.Z)(D().mark(function f(){var u,o,x=arguments;return D().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c(l.wait),t.next=4,Z.apply(void 0,x);case 4:return u=t.sent,e(u),c(l.success),t.abrupt("return",u);case 10:return t.prev=10,t.t0=t.catch(0),o={err:t.t0.info},e(o),c(l.failure),t.abrupt("return",o);case 16:case"end":return t.stop()}},f,null,[[0,10]])})),[c,e]);return{status:v,request:b,data:P}},l;(function(s){s[s.start=0]="start",s[s.wait=1]="wait",s[s.success=2]="success",s[s.failure=3]="failure"})(l||(l={}))},27254:function(E,h,n){E.exports=n.p+"static/baby_dog.1fd8dbc6.jpg"},92908:function(E,h,n){E.exports=n.p+"static/gong.d3c6c27d.png"},46677:function(E){E.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},37372:function(E,h,n){E.exports=n.p+"static/mo.30ad1e1e.png"}}]);
