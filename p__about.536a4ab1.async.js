(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[29],{80638:function(){},99219:function(w,O,n){"use strict";n.d(O,{e:function(){return v}});var c=n(2824),l=n(20310),d=n(67294),o=n(17857),_=n(47416),x=n(85893),t,A=_.ZP.div(t||(t=(0,l.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(P){return P.padding||"0"}),v=function(f){var E=f.value,a=E===void 0?"":E,M=f.decimals,p=f.padding,m=(0,d.useState)(0),i=(0,c.Z)(m,2),W=i[0],D=i[1],r=(0,d.useState)(0),e=(0,c.Z)(r,2),s=e[0],u=e[1];return(0,d.useEffect)(function(){typeof a=="number"&&(D(s),u(a))},[a]),(0,x.jsx)(A,{padding:p,children:typeof a=="string"?a:(0,x.jsx)(o.ZP,{start:W,end:s,decimals:M!==void 0?M:0,duration:1,separator:","})})}},7289:function(w,O,n){"use strict";n.r(O);var c=n(13062),l=n(71230),d=n(89032),o=n(15746),_=n(20310),x=n(47416),t=n(67294),A=n(99219),v=n(28219),P=n(32544),f=n(85893),E,a,M,p=x.ZP.div(E||(E=(0,_.Z)([`
  //padding-top: 40px;

  .top {
    padding: 50px 20px;
    left: 0;
    width: 100%;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top;
    background-image: url("https://yooshi.io/img/bg-top.ab4f7003.svg");
    box-sizing: border-box;

    .title {
      font-size: 54px;
      line-height: 66px;
      color: rgb(124, 215, 112);
      white-space: nowrap;
      font-weight: 700;
      margin-bottom: 0;
    }

    .subTitle {
      color: rgb(47, 46, 65);
      font-size: 17px;
      margin-top: 25px;
      font-weight: 400;
      line-height: 2;
    }

    .buttons {
      button {
        margin-right: 20px;
      }
    }

    .right {
      img {
        display: block;
        width: 290px;
      }
    }
  }
  .already{
    text-align: center;
    margin-top: 10px;

  }
  @media (max-width: 576px) {
    .top .title {
      font-size: 32px;
    }
  }
`]))),m=x.ZP.div(a||(a=(0,_.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    color: #7cd770;
  }

  p {
    font-size: 16px;
    margin-bottom: 0;
    margin-top: -6px;
    color: #2f2e41;
    opacity: .8;
  }
`]))),i=function(){return _jsxs(m,{children:[_jsx("h3",{children:_jsx(ValueWidget,{value:123.2})}),_jsx("p",{children:"Total Turnover"})]})},W=x.ZP.div(M||(M=(0,_.Z)([`
  border-radius: 15px;
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #000c17;
  text-align: center;


`]))),D=function(){return _jsx(W,{children:_jsxs(_Row,{children:[_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(i,{})}),_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(i,{})}),_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(i,{})}),_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(i,{})})]})})};O.default=function(){var r=(0,P.m9)();return(0,f.jsxs)(p,{children:[(0,f.jsx)(l.Z,{className:"top",children:(0,f.jsxs)(o.Z,{md:24,children:[(0,f.jsx)("h3",{className:"title",children:"Welcome To CCP NFT"}),(0,f.jsx)("h3",{className:"subTitle",children:(0,f.jsx)(v._H,{id:"pages.about.about_msg"})})]})}),(0,f.jsxs)("p",{className:"already",onClick:function(){r("CryptoCoinPay.net@Gmail.com")},children:[(0,f.jsx)(v._H,{id:"pages.market.feedback"})," \uFF1ACryptoCoinPay.net@Gmail.com"]})]})}},32544:function(w,O,n){"use strict";n.d(O,{m9:function(){return t},XP:function(){return A},TW:function(){return v}});var c=n(34792),l=n(55026),d=n(67294),o=n(43581),_=n(29306),x=n.n(_),t=function(){var f=(0,o.YB)();return(0,d.useCallback)(function(E){var a=document.createElement("textarea");a.innerText=E,document.body.appendChild(a),a.select(),document.execCommand("copy"),l.default.success(f.formatMessage({id:"component.nft_car.copy_successfully"})),a.remove()},[])},A=function(){var f=(0,o.YB)();return(0,d.useCallback)(function(E){var a=new XMLHttpRequest;console.log(E),a.open("GET",E,!0),a.responseType="blob",a.onload=function(M){var p=new FileReader;p.onload=function(i){var W=i.target.result,D=document.createElement("a");D.download="\u9080\u8BF7\u7801.png",D.href=W,D.click()};var m=this.response;p.readAsDataURL(m)},a.send(),l.default.success(f.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},v=function(){return(0,d.useCallback)(function(f,E,a){var M=document.getElementById(f);x().toPng(M).then(function(p){x().toPng(M,{width:600,height:600,style:{".right":{display:"none"}}}).then(function(m){if(m){var i=document.createElement("a");i.download=E+".png",i.href=m,i.click()}a(!0)}).catch(function(m){a(!1),console.error("oops, something went wrong!",m)})})},[])}},15746:function(w,O,n){"use strict";var c=n(21584);O.Z=c.Z},89032:function(w,O,n){"use strict";var c=n(38663),l=n.n(c),d=n(6999)},99134:function(w,O,n){"use strict";var c=n(67294),l=(0,c.createContext)({});O.Z=l},21584:function(w,O,n){"use strict";var c=n(96156),l=n(22122),d=n(90484),o=n(67294),_=n(94184),x=n.n(_),t=n(99134),A=n(86032),v=function(a,M){var p={};for(var m in a)Object.prototype.hasOwnProperty.call(a,m)&&M.indexOf(m)<0&&(p[m]=a[m]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,m=Object.getOwnPropertySymbols(a);i<m.length;i++)M.indexOf(m[i])<0&&Object.prototype.propertyIsEnumerable.call(a,m[i])&&(p[m[i]]=a[m[i]]);return p};function P(a){return typeof a=="number"?"".concat(a," ").concat(a," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(a)?"0 0 ".concat(a):a}var f=["xs","sm","md","lg","xl","xxl"],E=o.forwardRef(function(a,M){var p,m=o.useContext(A.E_),i=m.getPrefixCls,W=m.direction,D=o.useContext(t.Z),r=D.gutter,e=D.wrap,s=D.supportFlexGap,u=a.prefixCls,h=a.span,R=a.order,L=a.offset,I=a.push,U=a.pull,B=a.className,V=a.children,K=a.flex,z=a.style,F=v(a,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),C=i("col",u),Z={};f.forEach(function(g){var T,y={},j=a[g];typeof j=="number"?y.span=j:(0,d.Z)(j)==="object"&&(y=j||{}),delete F[g],Z=(0,l.Z)((0,l.Z)({},Z),(T={},(0,c.Z)(T,"".concat(C,"-").concat(g,"-").concat(y.span),y.span!==void 0),(0,c.Z)(T,"".concat(C,"-").concat(g,"-order-").concat(y.order),y.order||y.order===0),(0,c.Z)(T,"".concat(C,"-").concat(g,"-offset-").concat(y.offset),y.offset||y.offset===0),(0,c.Z)(T,"".concat(C,"-").concat(g,"-push-").concat(y.push),y.push||y.push===0),(0,c.Z)(T,"".concat(C,"-").concat(g,"-pull-").concat(y.pull),y.pull||y.pull===0),(0,c.Z)(T,"".concat(C,"-rtl"),W==="rtl"),T))});var G=x()(C,(p={},(0,c.Z)(p,"".concat(C,"-").concat(h),h!==void 0),(0,c.Z)(p,"".concat(C,"-order-").concat(R),R),(0,c.Z)(p,"".concat(C,"-offset-").concat(L),L),(0,c.Z)(p,"".concat(C,"-push-").concat(I),I),(0,c.Z)(p,"".concat(C,"-pull-").concat(U),U),p),B,Z),b={};if(r&&r[0]>0){var $=r[0]/2;b.paddingLeft=$,b.paddingRight=$}if(r&&r[1]>0&&!s){var S=r[1]/2;b.paddingTop=S,b.paddingBottom=S}return K&&(b.flex=P(K),e===!1&&!b.minWidth&&(b.minWidth=0)),o.createElement("div",(0,l.Z)({},F,{style:(0,l.Z)((0,l.Z)({},b),z),className:G,ref:M}),V)});E.displayName="Col",O.Z=E},92820:function(w,O,n){"use strict";var c=n(22122),l=n(96156),d=n(90484),o=n(28481),_=n(67294),x=n(94184),t=n.n(x),A=n(86032),v=n(99134),P=n(93355),f=n(24308),E=n(98082),a=function(i,W){var D={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&W.indexOf(r)<0&&(D[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,r=Object.getOwnPropertySymbols(i);e<r.length;e++)W.indexOf(r[e])<0&&Object.prototype.propertyIsEnumerable.call(i,r[e])&&(D[r[e]]=i[r[e]]);return D},M=(0,P.b)("top","middle","bottom","stretch"),p=(0,P.b)("start","end","center","space-around","space-between"),m=_.forwardRef(function(i,W){var D,r=i.prefixCls,e=i.justify,s=i.align,u=i.className,h=i.style,R=i.children,L=i.gutter,I=L===void 0?0:L,U=i.wrap,B=a(i,["prefixCls","justify","align","className","style","children","gutter","wrap"]),V=_.useContext(A.E_),K=V.getPrefixCls,z=V.direction,F=_.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),C=(0,o.Z)(F,2),Z=C[0],G=C[1],b=(0,E.Z)(),$=_.useRef(I);_.useEffect(function(){var at=f.ZP.subscribe(function(Y){var X=$.current||0;(!Array.isArray(X)&&(0,d.Z)(X)==="object"||Array.isArray(X)&&((0,d.Z)(X[0])==="object"||(0,d.Z)(X[1])==="object"))&&G(Y)});return function(){return f.ZP.unsubscribe(at)}},[]);var S=function(){var Y=[0,0],X=Array.isArray(I)?I:[I,0];return X.forEach(function(Q,rt){if((0,d.Z)(Q)==="object")for(var k=0;k<f.c4.length;k++){var q=f.c4[k];if(Z[q]&&Q[q]!==void 0){Y[rt]=Q[q];break}}else Y[rt]=Q||0}),Y},g=K("row",r),T=S(),y=t()(g,(D={},(0,l.Z)(D,"".concat(g,"-no-wrap"),U===!1),(0,l.Z)(D,"".concat(g,"-").concat(e),e),(0,l.Z)(D,"".concat(g,"-").concat(s),s),(0,l.Z)(D,"".concat(g,"-rtl"),z==="rtl"),D),u),j={},N=T[0]>0?T[0]/-2:void 0,H=T[1]>0?T[1]/-2:void 0;if(N&&(j.marginLeft=N,j.marginRight=N),b){var J=(0,o.Z)(T,2);j.rowGap=J[1]}else H&&(j.marginTop=H,j.marginBottom=H);var tt=(0,o.Z)(T,2),et=tt[0],nt=tt[1],st=_.useMemo(function(){return{gutter:[et,nt],wrap:U,supportFlexGap:b}},[et,nt,U,b]);return _.createElement(v.Z.Provider,{value:st},_.createElement("div",(0,c.Z)({},B,{className:y,style:(0,c.Z)((0,c.Z)({},j),h),ref:W}),R))});m.displayName="Row",O.Z=m},6999:function(w,O,n){"use strict";var c=n(38663),l=n.n(c),d=n(80638),o=n.n(d)},71230:function(w,O,n){"use strict";var c=n(92820);O.Z=c.Z},13062:function(w,O,n){"use strict";var c=n(38663),l=n.n(c),d=n(6999)},8273:function(w,O,n){"use strict";n.r(O),n.d(O,{CountUp:function(){return l}});var c=function(){return(c=Object.assign||function(d){for(var o,_=1,x=arguments.length;_<x;_++)for(var t in o=arguments[_])Object.prototype.hasOwnProperty.call(o,t)&&(d[t]=o[t]);return d}).apply(this,arguments)},l=function(){function d(o,_,x){var t=this;this.target=o,this.endVal=_,this.options=x,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(A){t.startTime||(t.startTime=A);var v=A-t.startTime;t.remaining=t.duration-v,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(v,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(v,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(v/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(v/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),v<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(A){var v,P,f,E,a=A<0?"-":"";v=Math.abs(A).toFixed(t.options.decimalPlaces);var M=(v+="").split(".");if(P=M[0],f=M.length>1?t.options.decimal+M[1]:"",t.options.useGrouping){E="";for(var p=0,m=P.length;p<m;++p)p!==0&&p%3==0&&(E=t.options.separator+E),E=P[m-p-1]+E;P=E}return t.options.numerals&&t.options.numerals.length&&(P=P.replace(/[0-9]/g,function(i){return t.options.numerals[+i]}),f=f.replace(/[0-9]/g,function(i){return t.options.numerals[+i]})),a+t.options.prefix+P+f+t.options.suffix},this.easeOutExpo=function(A,v,P,f){return P*(1-Math.pow(2,-10*A/f))*1024/1023+v},this.options=c(c({},this.defaults),x),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(_),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof o=="string"?document.getElementById(o):o,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return d.prototype.determineDirectionAndSmartEasing=function(){var o=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>o;var _=o-this.startVal;if(Math.abs(_)>this.options.smartEasingThreshold){this.finalEndVal=o;var x=this.countDown?1:-1;this.endVal=o+x*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=o,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},d.prototype.start=function(o){this.error||(this.callback=o,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},d.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},d.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},d.prototype.update=function(o){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(o),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},d.prototype.printValue=function(o){var _=this.formattingFn(o);this.el.tagName==="INPUT"?this.el.value=_:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=_:this.el.innerHTML=_},d.prototype.ensureNumber=function(o){return typeof o=="number"&&!isNaN(o)},d.prototype.validateValue=function(o){var _=Number(o);return this.ensureNumber(_)?_:(this.error="[CountUp] invalid start or end value: "+o,null)},d.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},d}()},17857:function(w,O,n){"use strict";var c;c={value:!0};var l=n(67294),d=n(8273);function o(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var _=o(l);function x(r,e){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);e&&(u=u.filter(function(h){return Object.getOwnPropertyDescriptor(r,h).enumerable})),s.push.apply(s,u)}return s}function t(r){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?x(Object(s),!0).forEach(function(u){A(r,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(s,u))})}return r}function A(r,e,s){return e in r?Object.defineProperty(r,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[e]=s,r}function v(){return v=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(r[u]=s[u])}return r},v.apply(this,arguments)}function P(r,e){if(r==null)return{};var s={},u=Object.keys(r),h,R;for(R=0;R<u.length;R++)h=u[R],!(e.indexOf(h)>=0)&&(s[h]=r[h]);return s}function f(r,e){if(r==null)return{};var s=P(r,e),u,h;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(r);for(h=0;h<R.length;h++)u=R[h],!(e.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,u)||(s[u]=r[u]))}return s}var E=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?l.useLayoutEffect:l.useEffect;function a(r){var e=l.useRef(r);return E(function(){e.current=r}),l.useCallback(function(){for(var s=arguments.length,u=new Array(s),h=0;h<s;h++)u[h]=arguments[h];return e.current.apply(void 0,u)},[])}var M=function(e,s){var u=s.decimal,h=s.decimals,R=s.duration,L=s.easingFn,I=s.end,U=s.formattingFn,B=s.numerals,V=s.prefix,K=s.separator,z=s.start,F=s.suffix,C=s.useEasing;return new d.CountUp(e,I,{startVal:z,duration:R,decimal:u,decimalPlaces:h,easingFn:L,formattingFn:U,numerals:B,separator:K,prefix:V,suffix:F,useEasing:C,useGrouping:!!K})},p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},i=function(e){var s=l.useMemo(function(){return t(t({},m),e)},[e]),u=s.ref,h=s.startOnMount,R=s.enableReinitialize,L=s.delay,I=s.onEnd,U=s.onStart,B=s.onPauseResume,V=s.onReset,K=s.onUpdate,z=f(s,p),F=l.useRef(),C=l.useRef(),Z=l.useRef(!1),G=a(function(){return M(typeof u=="string"?u:u.current,z)}),b=a(function(N){var H=F.current;if(H&&!N)return H;var J=G();return F.current=J,J}),$=a(function(){var N=function(){return b(!0).start(function(){I==null||I({pauseResume:S,reset:g,start:y,update:T})})};L&&L>0?C.current=setTimeout(N,L*1e3):N(),U==null||U({pauseResume:S,reset:g,update:T})}),S=a(function(){b().pauseResume(),B==null||B({reset:g,start:y,update:T})}),g=a(function(){C.current&&clearTimeout(C.current),b().reset(),V==null||V({pauseResume:S,start:y,update:T})}),T=a(function(N){b().update(N),K==null||K({pauseResume:S,reset:g,start:y})}),y=a(function(){g(),$()}),j=a(function(N){h&&(N&&g(),$())});return l.useEffect(function(){Z.current?R&&j(!0):(Z.current=!0,j())},[R,Z,j,L,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),l.useEffect(function(){return function(){g()}},[g]),{start:y,pauseResume:S,reset:g,update:T,getCountUp:b}},W=["className","redraw","containerProps","children","style"],D=function(e){var s=e.className,u=e.redraw,h=e.containerProps,R=e.children,L=e.style,I=f(e,W),U=_.default.useRef(null),B=_.default.useRef(!1),V=i(t(t({},I),{},{ref:U,startOnMount:typeof R!="function"||e.delay===0,enableReinitialize:!1})),K=V.start,z=V.reset,F=V.update,C=V.pauseResume,Z=V.getCountUp,G=a(function(){K()}),b=a(function(g){e.preserveValue||z(),F(g)}),$=a(function(){if(typeof e.children=="function"&&!(U.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}Z()});l.useEffect(function(){$()},[$]),l.useEffect(function(){B.current&&b(e.end)},[e.end,b]);var S=u&&e;return l.useEffect(function(){u&&B.current&&G()},[G,u,S]),l.useEffect(function(){!u&&B.current&&G()},[G,u,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),l.useEffect(function(){B.current=!0},[]),typeof R=="function"?R({countUpRef:U,start:K,reset:z,update:F,pauseResume:C,getCountUp:Z}):_.default.createElement("span",v({className:s,ref:U,style:L},h),e.start?Z().formattingFn(e.start):"")};O.ZP=D,c=i}}]);
