(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[29],{80638:function(){},99219:function(w,P,n){"use strict";n.d(P,{e:function(){return g}});var c=n(2824),l=n(20310),f=n(67294),o=n(17857),_=n(47416),x=n(85893),t,A=_.ZP.div(t||(t=(0,l.Z)([`
  font-size: 38px;
  font-weight: 700;
  color: #fff;
  padding: `,`;
`])),function(C){return C.padding||"0"}),g=function(d){var p=d.value,r=p===void 0?"":p,m=d.decimals,v=d.padding,h=(0,f.useState)(0),i=(0,c.Z)(h,2),U=i[0],M=i[1],a=(0,f.useState)(0),e=(0,c.Z)(a,2),s=e[0],u=e[1];return(0,f.useEffect)(function(){typeof r=="number"&&(M(s),u(r))},[r]),(0,x.jsx)(A,{padding:v,children:typeof r=="string"?r:(0,x.jsx)(o.ZP,{start:U,end:s,decimals:m!==void 0?m:0,duration:1,separator:","})})}},7289:function(w,P,n){"use strict";n.r(P);var c=n(13062),l=n(71230),f=n(89032),o=n(15746),_=n(20310),x=n(47416),t=n(67294),A=n(99219),g=n(28219),C=n(32544),d=n(85893),p,r,m,v=x.ZP.div(p||(p=(0,_.Z)([`
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
`]))),h=x.ZP.div(r||(r=(0,_.Z)([`
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
`]))),i=function(){return _jsxs(h,{children:[_jsx("h3",{children:_jsx(ValueWidget,{value:123.2})}),_jsx("p",{children:"Total Turnover"})]})},U=x.ZP.div(m||(m=(0,_.Z)([`
  border-radius: 15px;
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #000c17;
  text-align: center;


`]))),M=function(){return _jsx(U,{children:_jsxs(_Row,{children:[_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(i,{})}),_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(i,{})}),_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(i,{})}),_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(i,{})})]})})};P.default=function(){var a=(0,C.m9)();return(0,d.jsxs)(v,{children:[(0,d.jsx)(l.Z,{className:"top",children:(0,d.jsxs)(o.Z,{md:24,children:[(0,d.jsx)("h3",{className:"title",children:"Welcome To CCP NFT"}),(0,d.jsx)("h3",{className:"subTitle",children:(0,d.jsx)(g._H,{id:"pages.about.about_msg"})})]})}),(0,d.jsxs)("p",{className:"already",onClick:function(){a("CryptoCoinPay.net@Gmail.com")},children:[(0,d.jsx)(g._H,{id:"pages.market.feedback"})," \uFF1ACryptoCoinPay.net@Gmail.com"]})]})}},32544:function(w,P,n){"use strict";n.d(P,{m9:function(){return t},XP:function(){return A},TW:function(){return g}});var c=n(34792),l=n(55026),f=n(67294),o=n(43581),_=n(29306),x=n.n(_),t=function(){var p=(0,o.YB)();return(0,f.useCallback)(function(r){var m=document.createElement("textarea");m.innerText=r,document.body.appendChild(m),m.select(),document.execCommand("copy"),l.default.success(p.formatMessage({id:"component.nft_car.copy_successfully"})),m.remove()},[])},A=function(){var p=(0,o.YB)();return(0,f.useCallback)(function(r){var m=new XMLHttpRequest;console.log(r),m.open("GET",r,!0),m.responseType="blob",m.onload=function(v){var h=new FileReader;h.onload=function(U){var M=U.target.result,a=document.createElement("a");a.download="\u9080\u8BF7\u7801.png",a.href=M,a.click()};var i=this.response;h.readAsDataURL(i)},m.send(),l.default.success(p.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},g=function(){return(0,f.useCallback)(function(p,r,m){var v=document.getElementById(p);x().toPng(v).then(function(h){x().toPng(v).then(function(i){if(i){var U=document.createElement("a");U.download=r+".png",U.href=i,U.click()}m(!0)}).catch(function(i){m(!1),console.error("oops, something went wrong!",i)})})},[])};function C(d){var p=document.createElement("canvas");p.width=d.width,p.height=d.height;var r=p.getContext("2d");r.drawImage(d,0,0);var m=p.toDataURL("image/png");return m.replace(/^data:image\/(png|jpg);base64,/,"")}},15746:function(w,P,n){"use strict";var c=n(21584);P.Z=c.Z},89032:function(w,P,n){"use strict";var c=n(38663),l=n.n(c),f=n(6999)},99134:function(w,P,n){"use strict";var c=n(67294),l=(0,c.createContext)({});P.Z=l},21584:function(w,P,n){"use strict";var c=n(96156),l=n(22122),f=n(90484),o=n(67294),_=n(94184),x=n.n(_),t=n(99134),A=n(86032),g=function(r,m){var v={};for(var h in r)Object.prototype.hasOwnProperty.call(r,h)&&m.indexOf(h)<0&&(v[h]=r[h]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,h=Object.getOwnPropertySymbols(r);i<h.length;i++)m.indexOf(h[i])<0&&Object.prototype.propertyIsEnumerable.call(r,h[i])&&(v[h[i]]=r[h[i]]);return v};function C(r){return typeof r=="number"?"".concat(r," ").concat(r," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(r)?"0 0 ".concat(r):r}var d=["xs","sm","md","lg","xl","xxl"],p=o.forwardRef(function(r,m){var v,h=o.useContext(A.E_),i=h.getPrefixCls,U=h.direction,M=o.useContext(t.Z),a=M.gutter,e=M.wrap,s=M.supportFlexGap,u=r.prefixCls,E=r.span,R=r.order,W=r.offset,j=r.push,V=r.pull,B=r.className,I=r.children,K=r.flex,z=r.style,F=g(r,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),D=i("col",u),Z={};d.forEach(function(O){var T,y={},L=r[O];typeof L=="number"?y.span=L:(0,f.Z)(L)==="object"&&(y=L||{}),delete F[O],Z=(0,l.Z)((0,l.Z)({},Z),(T={},(0,c.Z)(T,"".concat(D,"-").concat(O,"-").concat(y.span),y.span!==void 0),(0,c.Z)(T,"".concat(D,"-").concat(O,"-order-").concat(y.order),y.order||y.order===0),(0,c.Z)(T,"".concat(D,"-").concat(O,"-offset-").concat(y.offset),y.offset||y.offset===0),(0,c.Z)(T,"".concat(D,"-").concat(O,"-push-").concat(y.push),y.push||y.push===0),(0,c.Z)(T,"".concat(D,"-").concat(O,"-pull-").concat(y.pull),y.pull||y.pull===0),(0,c.Z)(T,"".concat(D,"-rtl"),U==="rtl"),T))});var G=x()(D,(v={},(0,c.Z)(v,"".concat(D,"-").concat(E),E!==void 0),(0,c.Z)(v,"".concat(D,"-order-").concat(R),R),(0,c.Z)(v,"".concat(D,"-offset-").concat(W),W),(0,c.Z)(v,"".concat(D,"-push-").concat(j),j),(0,c.Z)(v,"".concat(D,"-pull-").concat(V),V),v),B,Z),b={};if(a&&a[0]>0){var $=a[0]/2;b.paddingLeft=$,b.paddingRight=$}if(a&&a[1]>0&&!s){var S=a[1]/2;b.paddingTop=S,b.paddingBottom=S}return K&&(b.flex=C(K),e===!1&&!b.minWidth&&(b.minWidth=0)),o.createElement("div",(0,l.Z)({},F,{style:(0,l.Z)((0,l.Z)({},b),z),className:G,ref:m}),I)});p.displayName="Col",P.Z=p},92820:function(w,P,n){"use strict";var c=n(22122),l=n(96156),f=n(90484),o=n(28481),_=n(67294),x=n(94184),t=n.n(x),A=n(86032),g=n(99134),C=n(93355),d=n(24308),p=n(98082),r=function(i,U){var M={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&U.indexOf(a)<0&&(M[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,a=Object.getOwnPropertySymbols(i);e<a.length;e++)U.indexOf(a[e])<0&&Object.prototype.propertyIsEnumerable.call(i,a[e])&&(M[a[e]]=i[a[e]]);return M},m=(0,C.b)("top","middle","bottom","stretch"),v=(0,C.b)("start","end","center","space-around","space-between"),h=_.forwardRef(function(i,U){var M,a=i.prefixCls,e=i.justify,s=i.align,u=i.className,E=i.style,R=i.children,W=i.gutter,j=W===void 0?0:W,V=i.wrap,B=r(i,["prefixCls","justify","align","className","style","children","gutter","wrap"]),I=_.useContext(A.E_),K=I.getPrefixCls,z=I.direction,F=_.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),D=(0,o.Z)(F,2),Z=D[0],G=D[1],b=(0,p.Z)(),$=_.useRef(j);_.useEffect(function(){var at=d.ZP.subscribe(function(Y){var X=$.current||0;(!Array.isArray(X)&&(0,f.Z)(X)==="object"||Array.isArray(X)&&((0,f.Z)(X[0])==="object"||(0,f.Z)(X[1])==="object"))&&G(Y)});return function(){return d.ZP.unsubscribe(at)}},[]);var S=function(){var Y=[0,0],X=Array.isArray(j)?j:[j,0];return X.forEach(function(Q,rt){if((0,f.Z)(Q)==="object")for(var k=0;k<d.c4.length;k++){var q=d.c4[k];if(Z[q]&&Q[q]!==void 0){Y[rt]=Q[q];break}}else Y[rt]=Q||0}),Y},O=K("row",a),T=S(),y=t()(O,(M={},(0,l.Z)(M,"".concat(O,"-no-wrap"),V===!1),(0,l.Z)(M,"".concat(O,"-").concat(e),e),(0,l.Z)(M,"".concat(O,"-").concat(s),s),(0,l.Z)(M,"".concat(O,"-rtl"),z==="rtl"),M),u),L={},N=T[0]>0?T[0]/-2:void 0,H=T[1]>0?T[1]/-2:void 0;if(N&&(L.marginLeft=N,L.marginRight=N),b){var J=(0,o.Z)(T,2);L.rowGap=J[1]}else H&&(L.marginTop=H,L.marginBottom=H);var tt=(0,o.Z)(T,2),et=tt[0],nt=tt[1],st=_.useMemo(function(){return{gutter:[et,nt],wrap:V,supportFlexGap:b}},[et,nt,V,b]);return _.createElement(g.Z.Provider,{value:st},_.createElement("div",(0,c.Z)({},B,{className:y,style:(0,c.Z)((0,c.Z)({},L),E),ref:U}),R))});h.displayName="Row",P.Z=h},6999:function(w,P,n){"use strict";var c=n(38663),l=n.n(c),f=n(80638),o=n.n(f)},71230:function(w,P,n){"use strict";var c=n(92820);P.Z=c.Z},13062:function(w,P,n){"use strict";var c=n(38663),l=n.n(c),f=n(6999)},8273:function(w,P,n){"use strict";n.r(P),n.d(P,{CountUp:function(){return l}});var c=function(){return(c=Object.assign||function(f){for(var o,_=1,x=arguments.length;_<x;_++)for(var t in o=arguments[_])Object.prototype.hasOwnProperty.call(o,t)&&(f[t]=o[t]);return f}).apply(this,arguments)},l=function(){function f(o,_,x){var t=this;this.target=o,this.endVal=_,this.options=x,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(A){t.startTime||(t.startTime=A);var g=A-t.startTime;t.remaining=t.duration-g,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(g,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(g,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(g/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(g/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),g<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(A){var g,C,d,p,r=A<0?"-":"";g=Math.abs(A).toFixed(t.options.decimalPlaces);var m=(g+="").split(".");if(C=m[0],d=m.length>1?t.options.decimal+m[1]:"",t.options.useGrouping){p="";for(var v=0,h=C.length;v<h;++v)v!==0&&v%3==0&&(p=t.options.separator+p),p=C[h-v-1]+p;C=p}return t.options.numerals&&t.options.numerals.length&&(C=C.replace(/[0-9]/g,function(i){return t.options.numerals[+i]}),d=d.replace(/[0-9]/g,function(i){return t.options.numerals[+i]})),r+t.options.prefix+C+d+t.options.suffix},this.easeOutExpo=function(A,g,C,d){return C*(1-Math.pow(2,-10*A/d))*1024/1023+g},this.options=c(c({},this.defaults),x),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(_),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof o=="string"?document.getElementById(o):o,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return f.prototype.determineDirectionAndSmartEasing=function(){var o=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>o;var _=o-this.startVal;if(Math.abs(_)>this.options.smartEasingThreshold){this.finalEndVal=o;var x=this.countDown?1:-1;this.endVal=o+x*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=o,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},f.prototype.start=function(o){this.error||(this.callback=o,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},f.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},f.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},f.prototype.update=function(o){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(o),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},f.prototype.printValue=function(o){var _=this.formattingFn(o);this.el.tagName==="INPUT"?this.el.value=_:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=_:this.el.innerHTML=_},f.prototype.ensureNumber=function(o){return typeof o=="number"&&!isNaN(o)},f.prototype.validateValue=function(o){var _=Number(o);return this.ensureNumber(_)?_:(this.error="[CountUp] invalid start or end value: "+o,null)},f.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},f}()},17857:function(w,P,n){"use strict";var c;c={value:!0};var l=n(67294),f=n(8273);function o(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var _=o(l);function x(a,e){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);e&&(u=u.filter(function(E){return Object.getOwnPropertyDescriptor(a,E).enumerable})),s.push.apply(s,u)}return s}function t(a){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?x(Object(s),!0).forEach(function(u){A(a,u,s[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach(function(u){Object.defineProperty(a,u,Object.getOwnPropertyDescriptor(s,u))})}return a}function A(a,e,s){return e in a?Object.defineProperty(a,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[e]=s,a}function g(){return g=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(a[u]=s[u])}return a},g.apply(this,arguments)}function C(a,e){if(a==null)return{};var s={},u=Object.keys(a),E,R;for(R=0;R<u.length;R++)E=u[R],!(e.indexOf(E)>=0)&&(s[E]=a[E]);return s}function d(a,e){if(a==null)return{};var s=C(a,e),u,E;if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(a);for(E=0;E<R.length;E++)u=R[E],!(e.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,u)||(s[u]=a[u]))}return s}var p=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?l.useLayoutEffect:l.useEffect;function r(a){var e=l.useRef(a);return p(function(){e.current=a}),l.useCallback(function(){for(var s=arguments.length,u=new Array(s),E=0;E<s;E++)u[E]=arguments[E];return e.current.apply(void 0,u)},[])}var m=function(e,s){var u=s.decimal,E=s.decimals,R=s.duration,W=s.easingFn,j=s.end,V=s.formattingFn,B=s.numerals,I=s.prefix,K=s.separator,z=s.start,F=s.suffix,D=s.useEasing;return new f.CountUp(e,j,{startVal:z,duration:R,decimal:u,decimalPlaces:E,easingFn:W,formattingFn:V,numerals:B,separator:K,prefix:I,suffix:F,useEasing:D,useGrouping:!!K})},v=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},i=function(e){var s=l.useMemo(function(){return t(t({},h),e)},[e]),u=s.ref,E=s.startOnMount,R=s.enableReinitialize,W=s.delay,j=s.onEnd,V=s.onStart,B=s.onPauseResume,I=s.onReset,K=s.onUpdate,z=d(s,v),F=l.useRef(),D=l.useRef(),Z=l.useRef(!1),G=r(function(){return m(typeof u=="string"?u:u.current,z)}),b=r(function(N){var H=F.current;if(H&&!N)return H;var J=G();return F.current=J,J}),$=r(function(){var N=function(){return b(!0).start(function(){j==null||j({pauseResume:S,reset:O,start:y,update:T})})};W&&W>0?D.current=setTimeout(N,W*1e3):N(),V==null||V({pauseResume:S,reset:O,update:T})}),S=r(function(){b().pauseResume(),B==null||B({reset:O,start:y,update:T})}),O=r(function(){D.current&&clearTimeout(D.current),b().reset(),I==null||I({pauseResume:S,start:y,update:T})}),T=r(function(N){b().update(N),K==null||K({pauseResume:S,reset:O,start:y})}),y=r(function(){O(),$()}),L=r(function(N){E&&(N&&O(),$())});return l.useEffect(function(){Z.current?R&&L(!0):(Z.current=!0,L())},[R,Z,L,W,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),l.useEffect(function(){return function(){O()}},[O]),{start:y,pauseResume:S,reset:O,update:T,getCountUp:b}},U=["className","redraw","containerProps","children","style"],M=function(e){var s=e.className,u=e.redraw,E=e.containerProps,R=e.children,W=e.style,j=d(e,U),V=_.default.useRef(null),B=_.default.useRef(!1),I=i(t(t({},j),{},{ref:V,startOnMount:typeof R!="function"||e.delay===0,enableReinitialize:!1})),K=I.start,z=I.reset,F=I.update,D=I.pauseResume,Z=I.getCountUp,G=r(function(){K()}),b=r(function(O){e.preserveValue||z(),F(O)}),$=r(function(){if(typeof e.children=="function"&&!(V.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}Z()});l.useEffect(function(){$()},[$]),l.useEffect(function(){B.current&&b(e.end)},[e.end,b]);var S=u&&e;return l.useEffect(function(){u&&B.current&&G()},[G,u,S]),l.useEffect(function(){!u&&B.current&&G()},[G,u,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),l.useEffect(function(){B.current=!0},[]),typeof R=="function"?R({countUpRef:V,start:K,reset:z,update:F,pauseResume:D,getCountUp:Z}):_.default.createElement("span",g({className:s,ref:V,style:W},E),e.start?Z().formattingFn(e.start):"")};P.ZP=M,c=i}}]);
