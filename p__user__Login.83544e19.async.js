(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{34687:function(L){L.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",tap:"tap___I2PW7",icon:"icon___rzGKO"}},8498:function(L,w,a){"use strict";a.r(w),a.d(w,{default:function(){return ee}});var W=a(20310),ae=a(18106),I=a(47428),O=a(2824),D=a(67294),o=a(43581),R=a(34687),p=a.n(R),re=a(57663),P=a(71577),se=a(34792),v=a(55026),B=a(8870),h=a(3182),Y=a(94043),d=a.n(Y),z=a(5550),y=a(53669),G=a(16434),V=a(29985),K=a(64302),b=a(2603),C=a(93874),T=a(88793),F=a(9684),U=a(53776),H=a(78489),e=a(85893),k=function(){var j=(0,H.D)("fr"),c=(0,o.YB)(),Z=(0,U.t)("@@initialState"),f=Z.initialState,S=Z.setInitialState,x=function(){var u=(0,h.Z)(d().mark(function n(){var s,t;return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f==null||(s=f.fetchUserInfo)===null||s===void 0?void 0:s.call(f);case 2:if(t=r.sent,!t){r.next=6;break}return r.next=6,S(function(M){return(0,B.Z)((0,B.Z)({},M),{},{currentUser:t})});case 6:case"end":return r.stop()}},n)}));return function(){return u.apply(this,arguments)}}(),m=function(){var u=(0,h.Z)(d().mark(function n(s){var t,i,r,M;return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,C.w.register(s.mobile,s.password,s.captcha,j);case 3:return t=l.sent,t=t.data,localStorage.setItem(T.o,t.token),v.default.success(t.info),l.next=9,x();case 9:if(F.m){l.next=11;break}return l.abrupt("return");case 11:i=F.m.location.query,r=i,M=r.redirect,F.m.push(M||"/"),l.next=20;break;case 16:l.prev=16,l.t0=l.catch(0),console.log(l.t0),v.default.error(l.t0.info);case 20:case"end":return l.stop()}},n,null,[[0,16]])}));return function(s){return u.apply(this,arguments)}}();return(0,e.jsxs)(z.Z,{initialValues:{autoLogin:!0},submitter:{render:function(n,s){return[(0,e.jsx)(P.Z,{block:!0,type:"primary",onClick:n.submit,children:(0,e.jsx)(o._H,{id:"pages.login.registerAccount"})})]}},onFinish:function(){var u=(0,h.Z)(d().mark(function n(s){return d().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(console.log(s),s.password==s.repeated){i.next=4;break}return v.default.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4"),i.abrupt("return");case 4:return i.next=6,m(s);case 6:case"end":return i.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),children:[(0,e.jsx)(y.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(V.Z,{className:p().prefixIcon})},name:"mobile",placeholder:c.formatMessage({id:"pages.register.username"}),rules:[{required:!0,message:(0,e.jsx)(o._H,{id:"pages.register.username"})}]}),(0,e.jsx)(G.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(K.Z,{className:p().prefixIcon})},captchaProps:{size:"large"},placeholder:c.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(n,s){return n?"".concat(s," ").concat(c.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):c.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},phoneName:"mobile",name:"captcha",rules:[{required:!0,message:(0,e.jsx)(o._H,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var u=(0,h.Z)(d().mark(function n(s){var t;return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,C.w.sendSms(s);case 3:if(t=r.sent,t!==!1){r.next=6;break}return r.abrupt("return");case 6:v.default.success(t.info),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),v.default.error(r.t0.info);case 12:case"end":return r.stop()}},n,null,[[0,9]])}));return function(n){return u.apply(this,arguments)}}()}),(0,e.jsx)(y.Z.Password,{fieldProps:{size:"large",prefix:(0,e.jsx)(b.Z,{className:p().prefixIcon})},name:"password",placeholder:c.formatMessage({id:"pages.register.password",defaultMessage:"\u8BBE\u7F6E\u5BC6\u7801"}),rules:[{required:!0,message:(0,e.jsx)(o._H,{id:"pages.register.password",defaultMessage:"\u8BF7\u8F93\u8BBE\u7F6E\u5BC6\u7801\uFF01"})},{pattern:/^(?![0-9]+\$)(?![a-zA-Z]+\$)[0-9A-Za-z\\W]{6,18}$/,message:(0,e.jsx)(o._H,{id:"pages.register.password.invalid",defaultMessage:"\u5BC6\u7801\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),(0,e.jsx)(y.Z.Password,{fieldProps:{size:"large",prefix:(0,e.jsx)(b.Z,{className:p().prefixIcon})},name:"repeated",placeholder:c.formatMessage({id:"pages.register.password",defaultMessage:"\u8BBE\u7F6E\u5BC6\u7801"}),rules:[{required:!0,message:(0,e.jsx)(o._H,{id:"pages.register.password",defaultMessage:"\u8BF7\u8F93\u8BBE\u7F6E\u5BC6\u7801\uFF01"})},{pattern:/^(?![0-9]+\$)(?![a-zA-Z]+\$)[0-9A-Za-z\\W]{6,18}$/,message:(0,e.jsx)(o._H,{id:"pages.register.password.invalid",defaultMessage:"\u5BC6\u7801\u683C\u5F0F\u9519\u8BEF\uFF01"})}]})]})},J=a(89366),Q=function(){var j=(0,U.t)("@@initialState"),c=j.initialState,Z=j.setInitialState,f=(0,o.YB)(),S=function(){var m=(0,h.Z)(d().mark(function u(){var n,s;return d().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,c==null||(n=c.fetchUserInfo)===null||n===void 0?void 0:n.call(c);case 2:if(s=i.sent,!s){i.next=6;break}return i.next=6,Z(function(r){return(0,B.Z)((0,B.Z)({},r),{},{currentUser:s})});case 6:case"end":return i.stop()}},u)}));return function(){return m.apply(this,arguments)}}(),x=function(){var m=(0,h.Z)(d().mark(function u(n){var s,t,i,r,M,$,l,E;return d().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.prev=0,g.next=3,C.w.login((s=n.username)!==null&&s!==void 0?s:"",(t=n.password)!==null&&t!==void 0?t:"");case 3:return i=g.sent,i=i.data,r=f.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),localStorage.setItem(T.o,i.token),v.default.success(r),g.next=10,S();case 10:if(F.m){g.next=12;break}return g.abrupt("return");case 12:M=F.m.location.query,$=M,l=$.redirect,F.m.push(l||"/"),g.next=22;break;case 17:g.prev=17,g.t0=g.catch(0),console.log(g.t0),E=f.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),v.default.error(E);case 22:case"end":return g.stop()}},u,null,[[0,17]])}));return function(n){return m.apply(this,arguments)}}();return(0,e.jsxs)(z.Z,{initialValues:{autoLogin:!0},onFinish:function(){var m=(0,h.Z)(d().mark(function u(n){return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(n);case 2:case"end":return t.stop()}},u)}));return function(u){return m.apply(this,arguments)}}(),submitter:{render:function(u,n){return[(0,e.jsx)(P.Z,{block:!0,type:"primary",onClick:u.submit,children:(0,e.jsx)(o._H,{id:"pages.login.submit"})})]}},children:[(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(y.Z,{name:"username",fieldProps:{size:"large",prefix:(0,e.jsx)(J.Z,{className:p().prefixIcon})},placeholder:f.formatMessage({id:"pages.login.username.required",defaultMessage:"\u7528\u6237\u540D"}),rules:[{required:!0,message:(0,e.jsx)(o._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,e.jsx)(y.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,e.jsx)(b.Z,{className:p().prefixIcon})},placeholder:f.formatMessage({id:"pages.login.password.required",defaultMessage:"\u5BC6\u7801"}),rules:[{required:!0,message:(0,e.jsx)(o._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),(0,e.jsx)("div",{style:{marginBottom:24},children:(0,e.jsx)("a",{style:{display:"block",textAlign:"end"}})})]})},X=a(47416),N,q=function(){var j=(0,H.D)("path"),c=(0,D.useState)(j||"account"),Z=(0,O.Z)(c,2),f=Z[0],S=Z[1],x=(0,o.YB)();return(0,e.jsxs)("div",{className:p().container,children:[(0,e.jsx)("div",{className:p().lang,"data-lang":!0,children:o.pD&&(0,e.jsx)(o.pD,{})}),(0,e.jsxs)("div",{className:p().content,children:[(0,e.jsx)(_,{children:(0,e.jsxs)(I.Z,{activeKey:f,onChange:S,children:[(0,e.jsx)(I.Z.TabPane,{tab:x.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},"account"),(0,e.jsx)(I.Z.TabPane,{tab:x.formatMessage({id:"pages.login.registerAccount"})},"mobile")]})}),f==="account"&&(0,e.jsx)(Q,{}),f==="mobile"&&(0,e.jsx)(k,{})]})]})},_=X.ZP.div(N||(N=(0,W.Z)([`
  display: block;
  margin: 0 auto;
  text-align: center;

  > div {
    display: inline-block;
  }

  .ant-tabs-nav {
    margin: 0 auto;
  }

  .ant-tabs-nav-wrap {
    display: none;
  }
`]))),ee=q}}]);
