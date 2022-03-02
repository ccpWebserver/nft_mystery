(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(j,h,n){"use strict";n.d(h,{e:function(){return L}});var S=n(2824),I=n(20310),O=n(67294),U=n(17857),g=n(47416),W=n(85893),c,s=g.ZP.div(c||(c=(0,I.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(e){return e.padding||"0"}),L=function(y){var f=y.value,r=f===void 0?"":f,u=y.decimals,Z=y.padding,P=(0,O.useState)(0),a=(0,S.Z)(P,2),E=a[0],C=a[1],A=(0,O.useState)(0),_=(0,S.Z)(A,2),m=_[0],p=_[1];return(0,O.useEffect)(function(){typeof r=="number"&&(C(m),p(r))},[r]),(0,W.jsx)(s,{padding:Z,children:typeof r=="string"?r:(0,W.jsx)(U.ZP,{start:E,end:m,decimals:u!==void 0?u:0,duration:1,separator:","})})}},64731:function(j,h,n){"use strict";n.d(h,{b:function(){return t}});var S=n(58024),I=n(39144),O=n(20310),U=n(67294),g=n(47416),W=n(16924),c=n(46677),s=n.n(c),L=n(28219),e=n(92908),y=n.n(e),f=n(37372),r=n.n(f),u=n(44559),Z=n(27254),P=n.n(Z),a=n(85893),E,C,A,_=g.ZP.div(E||(E=(0,O.Z)([`
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
`]))),m=g.ZP.div(C||(C=(0,O.Z)([`
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
`]))),p=(0,g.ZP)(I.Z)(A||(A=(0,O.Z)([`
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
`]))),t=function(D){var l=D.props,o=D.path,i=o===void 0?"market":o,V=D.addBase64,K=(0,u.X)(l.img_url,V);return(0,a.jsx)(W.Link,{to:{pathname:"".concat(i,"/").concat(l.id),search:"id=".concat(l.id,"&name=").concat(l.dog_name,"&path=").concat(i)},children:(0,a.jsx)(p,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,a.jsxs)(_,{children:[(0,a.jsx)("div",{className:"images",children:l.state===0?K?(0,a.jsx)("img",{src:K}):(0,a.jsx)("img",{src:P(),alt:""}):(0,a.jsx)("img",{src:P(),alt:""})}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsx)("h4",{children:l.dog_name})}),(0,a.jsx)("div",{className:"price",children:(0,a.jsx)("img",{src:l.dog_sex==1?y():r(),alt:""})})]}),children:l.is_selling==1&&(0,a.jsxs)(m,{children:[(0,a.jsxs)("span",{children:[" ",(0,a.jsx)(L._H,{id:"component.nft_car.sell_price"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("img",{src:s(),alt:"",className:"icon"}),parseInt(l.market_price).toFixed(2)]})]})})})}},7627:function(j,h,n){"use strict";n.r(h),n.d(h,{default:function(){return bn}});var S=n(54421),I=n(38272),O=n(14781),U=n(40308),g=n(20228),W=n(11382),c=n(13062),s=n(71230),L=n(89032),e=n(15746),y=n(57663),f=n(71577),r=n(3182),u=n(20310),Z=n(94043),P=n.n(Z),a=n(47416),E=n(64731),C=n(67294),A=n(67329),_=n(93874),m=n(53776),p=n(99219),t=n(85893),d,D,l=a.ZP.div(d||(d=(0,u.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;

    div {
      font-size: 24px;

      span {
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
`]))),o=function(B){var v=B.text,b=B.value;return(0,t.jsxs)(l,{children:[(0,t.jsx)("h3",{children:(0,t.jsx)(p.e,{value:b?parseFloat(b).toFixed(2):0})}),(0,t.jsx)("p",{children:v})]})},i=a.ZP.div(D||(D=(0,u.Z)([`
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
`]))),V=function(){return _jsx(i,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(o,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(o,{text:"USDT",value:0})})]})})},K=n(77624),cn=n(58024),gn=n(39144),un=n(16924),_n=n(27254),pn=n.n(_n),q,nn,tn,mn=a.ZP.div(q||(q=(0,u.Z)([`
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
`]))),yn=a.ZP.div(nn||(nn=(0,u.Z)([`
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
`]))),vn=(0,a.ZP)(gn.Z)(tn||(tn=(0,u.Z)([`
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
`]))),xn=function(B){var v=B.props,b=B.path,R=b===void 0?"market":b;return(0,t.jsx)(un.Link,{to:{pathname:"".concat(R,"/").concat(v.id),search:"id=".concat(v.id,"&name=").concat(v.dog_name,"&path=").concat(R)},children:(0,t.jsx)(vn,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,t.jsxs)(mn,{children:[(0,t.jsx)("div",{className:"images",children:(0,t.jsx)("img",{src:pn()})}),(0,t.jsx)("div",{className:"bottom",children:(0,t.jsx)("h4",{children:v.dog_name})})]})})})},hn=n(43581),fn=n(28219),En=function(B){var v,b,R,H=B.total,T=(0,m.t)("@@initialState"),X=T.initialState,x=(0,fn.YB)(),Q=(0,A.f)(_.w.show_user),M=Q.data,$=Q.request,en=Q.status;return(0,C.useEffect)(function(){$("")},[]),console.log(M),(0,t.jsx)(i,{children:(0,t.jsxs)(s.Z,{gutter:20,children:[(0,t.jsx)(e.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"CCP.Dog",value:M==null||(v=M.data)===null||v===void 0?void 0:v.ccp_dog_coin})}),(0,t.jsx)(e.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"USDT",value:M==null||(b=M.data)===null||b===void 0?void 0:b.usdt_coin})}),(0,t.jsx)(e.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"GUT",value:M==null||(R=M.data)===null||R===void 0?void 0:R.gut_coin})}),(0,t.jsx)(e.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:x.formatMessage({id:"pages.myaccount.own_an_nft"}),value:H})})]})})},an,An=a.ZP.div(an||(an=(0,u.Z)([`

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
`]))),bn=function(){var z,B,v,b,R,H=(0,m.t)("@@initialState"),T=H.initialState,X=(0,A.f)(_.w.nftPacket),x=X.data,Q=X.request,M=X.status,$=(0,C.useRef)(null),en=(0,hn.YB)(),sn=window.screen.width>500;(0,C.useEffect)(function(){sn&&Q(1)},[]);var jn=function(N){var G=N.pageSize,Dn=N.offset;return new Promise(function(){var Mn=(0,r.Z)(P().mark(function ln(In){var J;return P().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,Q(Dn/5+1);case 2:J=Y.sent,In({total:J.data.goods.count,data:J.data.goods.data});case 4:case"end":return Y.stop()}},ln)}));return function(ln){return Mn.apply(this,arguments)}}())},w=(0,K.BR)(jn,{ref:$,initPageSize:5,incrementSize:5}),k=w.data,rn=w.loading,on=w.loadingMore,Bn=w.reload,On=w.loadMore,dn=w.total,Pn=w.noMore,Cn=function(){return(0,t.jsx)(t.Fragment,{children:!Pn&&(0,t.jsx)(f.Z,{onClick:On,loading:on,children:on?"Loading more":"Click to load more"})})};return(0,t.jsx)(An,{children:sn?(0,t.jsxs)("div",{children:[(0,t.jsx)(i,{children:(0,t.jsxs)(s.Z,{gutter:20,children:[(0,t.jsx)(e.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"CCP.Dog",value:T==null||(z=T.currentUser)===null||z===void 0?void 0:z.ccp_dog_coin})}),(0,t.jsx)(e.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"USDT",value:T==null||(B=T.currentUser)===null||B===void 0?void 0:B.usdt_coin})}),(0,t.jsx)(e.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:"GUT",value:T==null||(v=T.currentUser)===null||v===void 0?void 0:v.gut_coin})}),(0,t.jsx)(e.Z,{xs:12,sm:6,children:(0,t.jsx)(o,{text:en.formatMessage({id:"pages.myaccount.own_an_nft"}),value:dn})})]})}),(0,t.jsxs)("div",{style:{padding:"20px"},children:[(0,t.jsx)(s.Z,{gutter:48,children:(x==null||(b=x.data)===null||b===void 0?void 0:b.goods.data.length)>0?x==null||(R=x.data)===null||R===void 0?void 0:R.goods.data.map(function(F){return(0,t.jsx)(e.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:F.state==0?(0,t.jsx)(E.b,{props:F,path:"wallets"}):(0,t.jsx)(xn,{props:F,path:"wallets"})},F.id)}):(0,t.jsx)("div",{style:{textAlign:"center"}})}),(0,t.jsx)("div",{className:"loading",children:M==A.o.wait&&(0,t.jsx)(W.Z,{size:"large"})}),(0,t.jsx)("div",{className:"bottom_pagination",children:(x==null?void 0:x.data.count)&&(0,t.jsx)(U.Z,{defaultCurrent:1,onChange:function(N){Q(N)},total:x==null?void 0:x.data.count})})]})]}):(0,t.jsx)("div",{ref:$,style:{height:"90vh",overflowY:"auto"},children:(0,t.jsx)(I.ZP,{header:(0,t.jsx)("div",{children:(0,t.jsx)(En,{total:dn})}),footer:!rn&&Cn(),loading:rn,bordered:!0,dataSource:k,renderItem:function(N,G){return(0,t.jsx)(I.ZP.Item,{style:{padding:G%2==0?12:0},children:G%2==0?(0,t.jsxs)(s.Z,{gutter:12,style:{minWidth:"100%"},children:[(0,t.jsx)(e.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,t.jsx)(E.b,{path:"wallets",props:N})},N.id),k[G+1]&&(0,t.jsx)(e.Z,{span:6,xs:12,sm:12,md:12,lg:6,children:(0,t.jsx)(E.b,{path:"wallets",props:k[G+1]})},N.id+1)]}):(0,t.jsx)("div",{})})}})})})}},44559:function(j,h,n){"use strict";n.d(h,{X:function(){return y}});var S=n(3182),I=n(2824),O=n(94043),U=n.n(O),g=n(67294),W=n(93874),c={Blue:"3",Green:"4",Purple:"5",Red:"6",Yellow:"7"},s={Background:"BasicColor",butt:"butt",front_legs:"front_legs",hind_legs:"hind_legs",tail:"tail",jaw:"jaw",back:"back"};function L(f,r){return f=="Background"?"./trait-layers/".concat(s[f],"/").concat(c[r],".jpg"):"./trait-layers/".concat(s[f],"/").concat(c[r],".png")}var e=200,y=function(r,u){var Z=(0,g.useState)(""),P=(0,I.Z)(Z,2),a=P[0],E=P[1],C=(0,g.useCallback)(function(_,m){var p=document.createElement("canvas");p.width=e,p.height=e;var t=p.getContext("2d"),d={};_.map(function(D,l){var o=new Image;o.src=" https://nft.ccp.dog/nft/".concat(D),o.crossOrigin="Access-Control-Allow-Origin",o.onload=function(){if(d[l]=o,Object.keys(d).length==Object.keys(m).length){var i=Object.keys(d);i.map(function(K){t.drawImage(d[K],0,0,e,e),d[K]=null});var V=p.toDataURL("image/png");E(V),p=null}}})},[u]),A=(0,g.useCallback)(function(){var _=(0,S.Z)(U().mark(function m(p){var t,d,D,l;return U().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(p){i.next=2;break}return i.abrupt("return");case 2:if(t=p.replace(/[^\d]/g,""),t){i.next=5;break}return i.abrupt("return");case 5:return i.next=7,W.w.read_trait_forTokenId(t);case 7:if(d=i.sent,d.status==1){i.next=10;break}return i.abrupt("return");case 10:d=d.data,delete d.tokenId,D=[];for(l in d)D.push(L(l,d[l]));C(D,d);case 15:case"end":return i.stop()}},m)}));return function(m){return _.apply(this,arguments)}}(),[]);return(0,g.useEffect)(function(){E(r||"")},[r]),a}},67329:function(j,h,n){"use strict";n.d(h,{f:function(){return W},o:function(){return c}});var S=n(3182),I=n(2824),O=n(94043),U=n.n(O),g=n(67294),W=function(L){var e=(0,g.useState)(c.start),y=(0,I.Z)(e,2),f=y[0],r=y[1],u=(0,g.useState)(),Z=(0,I.Z)(u,2),P=Z[0],a=Z[1],E=(0,g.useCallback)((0,S.Z)(U().mark(function C(){var A,_,m=arguments;return U().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(c.wait),t.next=4,L.apply(void 0,m);case 4:return A=t.sent,a(A),r(c.success),t.abrupt("return",A);case 10:return t.prev=10,t.t0=t.catch(0),_={err:t.t0.info},a(_),r(c.failure),t.abrupt("return",_);case 16:case"end":return t.stop()}},C,null,[[0,10]])})),[r,a]);return{status:f,request:E,data:P}},c;(function(s){s[s.start=0]="start",s[s.wait=1]="wait",s[s.success=2]="success",s[s.failure=3]="failure"})(c||(c={}))},27254:function(j,h,n){j.exports=n.p+"static/baby_dog.1fd8dbc6.jpg"},92908:function(j,h,n){j.exports=n.p+"static/gong.d3c6c27d.png"},46677:function(j){j.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},37372:function(j,h,n){j.exports=n.p+"static/mo.30ad1e1e.png"}}]);
