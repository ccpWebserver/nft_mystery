(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[464],{80638:function(){},16993:function(y,d,n){"use strict";n.d(d,{b:function(){return A}});var a=n(57663),o=n(71577),E=n(20310),g=n(67294),u=n(47416),b=n(85893),O,x=(0,u.ZP)(o.Z)(O||(O=(0,E.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
`]))),A=function(P){var C=P.text,t=P.block,M=t===void 0?!0:t,l=P.onClick;return(0,b.jsx)(x,{type:"default",shape:"round",onClick:function(){return l&&l()},size:"large",block:M,children:C})}},24404:function(y,d,n){"use strict";n.r(d),n.d(d,{default:function(){return Q}});var a=n(13062),o=n(71230),E=n(89032),g=n(15746),u=n(20310),b=n(47416),O=n(20228),x=n(11382),A=n(34792),j=n(55026),P=n(3182),C=n(2824),t=n(94043),M=n.n(t),l=n(67294),c=n(16993),r=n(63757),R=n.n(r),f=n(93874),s=n(67329),e=n(85893),Z,w=b.ZP.div(Z||(Z=(0,u.Z)([`
  background: linear-gradient(rgb(242, 255, 247), rgb(224, 255, 237));
  width: 100%;
  border-radius: 15px;
  padding: 32px;
  text-align: center;

  .top {
    display: block;
    margin: 0 auto;
    width: 72px;
  }

  h2 {
    margin-top: 24px;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, .85);
    font-weight: bold;
  }

  h3 {
    color: #7cd770;
    margin-top: 24px;
    font-size: 24px;
    font-weight: 700;
  }

  .inner {
    padding: 16px 12px 18px;
    border-radius: 5px;
    text-align: center;
    background-color: white;
    margin-bottom: 40px;
    border: 1px solid #f0f0f0;

    h4 {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
    }

    h5 {
      font-size: 16px;
      margin-top: 5px;
      color: #505f79;
    }
  }

  h6 {
    color: #44df84;
    margin-top: 20px;
  }


`]))),v=function(){var W,I,$=(0,l.useState)(!1),p=(0,C.Z)($,2),K=p[0],z=p[1],h=(0,s.f)(f.w.nftBlindBox),F=h.request,J=h.status,i=h.data,m=(0,s.f)(f.w.nftBuy),_=m.request,D=(0,l.useCallback)((0,P.Z)(M().mark(function V(){var Y,S;return M().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return Y=Math.floor(Math.random()*10),z(!0),T.next=4,_(i.data[Y].id);case 4:if(S=T.sent,z(!1),console.log(S),!S.err){T.next=9;break}return T.abrupt("return",j.default.error(S.err));case 9:j.default.success(S.info);case 10:case"end":return T.stop()}},V)})),[i,_]);return(0,l.useEffect)(function(){F()},[]),(0,e.jsxs)(w,{children:[(0,e.jsx)("img",{src:R(),alt:"",className:"top"}),(0,e.jsx)("h2",{children:"CCP DOG NFT"}),(0,e.jsxs)("h3",{children:["Total Number: ",i==null||(W=i.data)===null||W===void 0?void 0:W.box_count]}),(0,e.jsxs)("div",{className:"inner",children:[(0,e.jsx)("h4",{children:"Time to market"}),(0,e.jsxs)("h5",{children:[new Date((i==null||(I=i.data)===null||I===void 0?void 0:I.begin_time)*1e3).toDateString()," "]})]}),K||J==s.o.wait?(0,e.jsx)(x.Z,{}):(0,e.jsx)(c.b,{onClick:function(){return D()},text:"Buy Now"})]})},G=n(18572),U=n.n(G),B,L=b.ZP.div(B||(B=(0,u.Z)([`
  padding: 30px;
  box-sizing: border-box;

  .top {

    margin-top: 40px;
    margin-bottom: 40px;

    img {
      max-width: 100%;
      max-height: 200px;
      margin: 0 auto;
      display: block;
    }

    h3 {
      color: rgb(80, 95, 121);
      font-size: 16px;
      margin-top: 6px;
      text-align: center;
    }

  }

  .box {
    box-shadow: 0 8px 30px 0 rgb(117 219 141 / 24%);
    padding: 32px;
    border-radius: 32px;

    .right {
      //width: 500px;

      > div:first-child {
        background: #f8f9fc;
        border-bottom: none;
        p {
          color: #666d7f;
        }
      }

      >div:last-child {
        border-bottom: none;
      }

      > div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e6ebf5;
        p {
          flex: 1;
          margin-bottom: 0;
          padding: 10px 0;
          text-align: center;
          font-size: 14px;
          color: #111e36;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .box{
      .right {
        margin-top: 20px;

      }
    }
  }
`]))),Q=function(){return(0,e.jsxs)(L,{children:[(0,e.jsxs)("div",{className:"top",children:[(0,e.jsx)("img",{src:U(),alt:""}),(0,e.jsx)("h3",{children:"To play CCP DOG NFT game, you need to obtain at least one dog from the market. Purchase a dog container, and open it, then you will receive an amazing dog. You can check this dog in your inventory, or you can open the container later. Each dog has different appearance, attributes and skills. See if you can obtain a wonderful one. Let's open the container!"})]}),(0,e.jsx)("div",{className:"box",children:(0,e.jsxs)(o.Z,{gutter:48,children:[(0,e.jsx)(g.Z,{span:6,xs:24,sm:12,md:12,lg:10,children:(0,e.jsx)(v,{})}),(0,e.jsx)(g.Z,{span:6,xs:24,sm:12,md:12,lg:14,children:(0,e.jsxs)("div",{className:"right",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Class"}),(0,e.jsx)("p",{children:"Rarity"}),(0,e.jsx)("p",{children:"Proportion"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Greyhound"}),(0,e.jsx)("p",{children:"SSR"}),(0,e.jsx)("p",{children:"2%"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Belgian Malinois"}),(0,e.jsx)("p",{children:"SR"}),(0,e.jsx)("p",{children:"4%"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Saluki"}),(0,e.jsx)("p",{children:"SR"}),(0,e.jsx)("p",{children:"8%"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Hungarian Vizsla"}),(0,e.jsx)("p",{children:"SR"}),(0,e.jsx)("p",{children:"7%"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Afghan Hound"}),(0,e.jsx)("p",{children:"R"}),(0,e.jsx)("p",{children:"9%"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Whippet"}),(0,e.jsx)("p",{children:"R"}),(0,e.jsx)("p",{children:"10%"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Jack russell terrier"}),(0,e.jsx)("p",{children:"N"}),(0,e.jsx)("p",{children:"13%"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Dalmatian"}),(0,e.jsx)("p",{children:"N"}),(0,e.jsx)("p",{children:"17%"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:"Russian wolfhound"}),(0,e.jsx)("p",{children:"N"}),(0,e.jsx)("p",{children:"20%"})]})]})})]})})]})}},67329:function(y,d,n){"use strict";n.d(d,{f:function(){return b},o:function(){return O}});var a=n(3182),o=n(2824),E=n(94043),g=n.n(E),u=n(67294),b=function(A){var j=(0,u.useState)(O.start),P=(0,o.Z)(j,2),C=P[0],t=P[1],M=(0,u.useState)(),l=(0,o.Z)(M,2),c=l[0],r=l[1],R=(0,u.useCallback)((0,a.Z)(g().mark(function f(){var s,e,Z=arguments;return g().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,t(O.wait),v.next=4,A.apply(void 0,Z);case 4:return s=v.sent,r(s),t(O.success),v.abrupt("return",s);case 10:return v.prev=10,v.t0=v.catch(0),e={err:v.t0.info},r(e),t(O.failure),v.abrupt("return",e);case 16:case"end":return v.stop()}},f,null,[[0,10]])})),[t,r]);return{status:C,request:R,data:c}},O;(function(x){x[x.start=0]="start",x[x.wait=1]="wait",x[x.success=2]="success",x[x.failure=3]="failure"})(O||(O={}))},18572:function(y,d,n){y.exports=n.p+"static/mysterious.98c98ffc.png"},63757:function(y,d,n){y.exports=n.p+"static/mystery_header.ab029946.png"},15746:function(y,d,n){"use strict";var a=n(21584);d.Z=a.Z},89032:function(y,d,n){"use strict";var a=n(65056),o=n.n(a),E=n(6999)},99134:function(y,d,n){"use strict";var a=n(67294),o=(0,a.createContext)({});d.Z=o},21584:function(y,d,n){"use strict";var a=n(96156),o=n(22122),E=n(90484),g=n(67294),u=n(94184),b=n.n(u),O=n(99134),x=n(86032),A=function(t,M){var l={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&M.indexOf(c)<0&&(l[c]=t[c]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,c=Object.getOwnPropertySymbols(t);r<c.length;r++)M.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(t,c[r])&&(l[c[r]]=t[c[r]]);return l};function j(t){return typeof t=="number"?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}var P=["xs","sm","md","lg","xl","xxl"],C=g.forwardRef(function(t,M){var l,c=g.useContext(x.E_),r=c.getPrefixCls,R=c.direction,f=g.useContext(O.Z),s=f.gutter,e=f.wrap,Z=f.supportFlexGap,w=t.prefixCls,v=t.span,G=t.order,U=t.offset,B=t.push,L=t.pull,Q=t.className,X=t.children,W=t.flex,I=t.style,$=A(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),p=r("col",w),K={};P.forEach(function(i){var m,_={},D=t[i];typeof D=="number"?_.span=D:(0,E.Z)(D)==="object"&&(_=D||{}),delete $[i],K=(0,o.Z)((0,o.Z)({},K),(m={},(0,a.Z)(m,"".concat(p,"-").concat(i,"-").concat(_.span),_.span!==void 0),(0,a.Z)(m,"".concat(p,"-").concat(i,"-order-").concat(_.order),_.order||_.order===0),(0,a.Z)(m,"".concat(p,"-").concat(i,"-offset-").concat(_.offset),_.offset||_.offset===0),(0,a.Z)(m,"".concat(p,"-").concat(i,"-push-").concat(_.push),_.push||_.push===0),(0,a.Z)(m,"".concat(p,"-").concat(i,"-pull-").concat(_.pull),_.pull||_.pull===0),(0,a.Z)(m,"".concat(p,"-rtl"),R==="rtl"),m))});var z=b()(p,(l={},(0,a.Z)(l,"".concat(p,"-").concat(v),v!==void 0),(0,a.Z)(l,"".concat(p,"-order-").concat(G),G),(0,a.Z)(l,"".concat(p,"-offset-").concat(U),U),(0,a.Z)(l,"".concat(p,"-push-").concat(B),B),(0,a.Z)(l,"".concat(p,"-pull-").concat(L),L),l),Q,K),h={};if(s&&s[0]>0){var F=s[0]/2;h.paddingLeft=F,h.paddingRight=F}if(s&&s[1]>0&&!Z){var J=s[1]/2;h.paddingTop=J,h.paddingBottom=J}return W&&(h.flex=j(W),W==="auto"&&e===!1&&!h.minWidth&&(h.minWidth=0)),g.createElement("div",(0,o.Z)({},$,{style:(0,o.Z)((0,o.Z)({},h),I),className:z,ref:M}),X)});C.displayName="Col",d.Z=C},92820:function(y,d,n){"use strict";var a=n(22122),o=n(96156),E=n(90484),g=n(28481),u=n(67294),b=n(94184),O=n.n(b),x=n(86032),A=n(99134),j=n(93355),P=n(24308),C=n(98082),t=function(r,R){var f={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&R.indexOf(s)<0&&(f[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,s=Object.getOwnPropertySymbols(r);e<s.length;e++)R.indexOf(s[e])<0&&Object.prototype.propertyIsEnumerable.call(r,s[e])&&(f[s[e]]=r[s[e]]);return f},M=(0,j.b)("top","middle","bottom","stretch"),l=(0,j.b)("start","end","center","space-around","space-between"),c=u.forwardRef(function(r,R){var f,s=r.prefixCls,e=r.justify,Z=r.align,w=r.className,v=r.style,G=r.children,U=r.gutter,B=U===void 0?0:U,L=r.wrap,Q=t(r,["prefixCls","justify","align","className","style","children","gutter","wrap"]),X=u.useContext(x.E_),W=X.getPrefixCls,I=X.direction,$=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),p=(0,g.Z)($,2),K=p[0],z=p[1],h=(0,C.Z)(),F=u.useRef(B);u.useEffect(function(){var T=P.ZP.subscribe(function(H){var N=F.current||0;(!Array.isArray(N)&&(0,E.Z)(N)==="object"||Array.isArray(N)&&((0,E.Z)(N[0])==="object"||(0,E.Z)(N[1])==="object"))&&z(H)});return function(){return P.ZP.unsubscribe(T)}},[]);var J=function(){var H=[0,0],N=Array.isArray(B)?B:[B,0];return N.forEach(function(k,tn){if((0,E.Z)(k)==="object")for(var q=0;q<P.c4.length;q++){var nn=P.c4[q];if(K[nn]&&k[nn]!==void 0){H[tn]=k[nn];break}}else H[tn]=k||0}),H},i=W("row",s),m=J(),_=O()(i,(f={},(0,o.Z)(f,"".concat(i,"-no-wrap"),L===!1),(0,o.Z)(f,"".concat(i,"-").concat(e),e),(0,o.Z)(f,"".concat(i,"-").concat(Z),Z),(0,o.Z)(f,"".concat(i,"-rtl"),I==="rtl"),f),w),D={},V=m[0]>0?m[0]/-2:void 0,Y=m[1]>0?m[1]/-2:void 0;if(V&&(D.marginLeft=V,D.marginRight=V),h){var S=(0,g.Z)(m,2);D.rowGap=S[1]}else Y&&(D.marginTop=Y,D.marginBottom=Y);var en=u.useMemo(function(){return{gutter:m,wrap:L,supportFlexGap:h}},[m,L,h]);return u.createElement(A.Z.Provider,{value:en},u.createElement("div",(0,a.Z)({},Q,{className:_,style:(0,a.Z)((0,a.Z)({},D),v),ref:R}),G))});c.displayName="Row",d.Z=c},6999:function(y,d,n){"use strict";var a=n(65056),o=n.n(a),E=n(80638),g=n.n(E)},71230:function(y,d,n){"use strict";var a=n(92820);d.Z=a.Z},13062:function(y,d,n){"use strict";var a=n(65056),o=n.n(a),E=n(6999)}}]);
