(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{34687:function(L){L.exports={container:"container___1sYa-",lang:"lang___l6cji",content:"content___2zk1-",tap:"tap___I2PW7",icon:"icon___rzGKO"}},8498:function(L,b,r){"use strict";r.r(b),r.d(b,{default:function(){return _}});var E=r(20310),ee=r(18106),S=r(47428),H=r(2824),W=r(67294),g=r(21010),O=r(34687),m=r.n(O),ae=r(57663),R=r(71577),re=r(34792),j=r(55026),x=r(8870),M=r(3182),Y=r(94043),o=r.n(Y),w=r(5550),y=r(99725),D=r(16434),G=r(29985),V=r(64302),B=r(2603),I=r(93874),P=r(88793),Z=r(9684),z=r(53776),e=r(85893),K=function(){var c=(0,g.YB)(),f=(0,z.t)("@@initialState"),p=f.initialState,h=f.setInitialState,F=function(){var l=(0,M.Z)(o().mark(function n(){var s,t;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p==null||(s=p.fetchUserInfo)===null||s===void 0?void 0:s.call(p);case 2:if(t=a.sent,!t){a.next=6;break}return a.next=6,h(function(v){return(0,x.Z)((0,x.Z)({},v),{},{currentUser:t})});case 6:case"end":return a.stop()}},n)}));return function(){return l.apply(this,arguments)}}(),C=function(){var l=(0,M.Z)(o().mark(function n(s){var t,i,a,v;return o().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,I.w.register(s.mobile,s.password,s.captcha);case 3:return t=u.sent,t=t.data,localStorage.setItem(P.o,t.token),j.default.success(t.info),u.next=9,F();case 9:if(Z.m){u.next=11;break}return u.abrupt("return");case 11:i=Z.m.location.query,a=i,v=a.redirect,Z.m.push(v||"/"),u.next=20;break;case 16:u.prev=16,u.t0=u.catch(0),console.log(u.t0),j.default.error(u.t0.info);case 20:case"end":return u.stop()}},n,null,[[0,16]])}));return function(s){return l.apply(this,arguments)}}();return(0,e.jsxs)(w.Z,{initialValues:{autoLogin:!0},submitter:{render:function(n,s){return[(0,e.jsx)(R.Z,{block:!0,type:"primary",onClick:n.submit,children:"\u6CE8\u518C"})]}},onFinish:function(){var l=(0,M.Z)(o().mark(function n(s){return o().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(console.log(s),s.password==s.repeated){i.next=4;break}return j.default.error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4"),i.abrupt("return");case 4:return i.next=6,C(s);case 6:case"end":return i.stop()}},n)}));return function(n){return l.apply(this,arguments)}}(),children:[(0,e.jsx)(y.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(G.Z,{className:m().prefixIcon})},name:"mobile",placeholder:c.formatMessage({id:"pages.register.username"}),rules:[{required:!0,message:(0,e.jsx)(g._H,{id:"pages.register.username"})}]}),(0,e.jsx)(D.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(V.Z,{className:m().prefixIcon})},captchaProps:{size:"large"},placeholder:c.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(n,s){return n?"".concat(s," ").concat(c.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):c.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},phoneName:"mobile",name:"captcha",rules:[{required:!0,message:(0,e.jsx)(g._H,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var l=(0,M.Z)(o().mark(function n(s){var t;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,I.w.sendSms(s);case 3:if(t=a.sent,t!==!1){a.next=6;break}return a.abrupt("return");case 6:j.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F!"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),j.default.error(a.t0.info);case 12:case"end":return a.stop()}},n,null,[[0,9]])}));return function(n){return l.apply(this,arguments)}}()}),(0,e.jsx)(y.Z.Password,{fieldProps:{size:"large",prefix:(0,e.jsx)(B.Z,{className:m().prefixIcon})},name:"password",placeholder:c.formatMessage({id:"pages.register.password",defaultMessage:"\u8BBE\u7F6E\u5BC6\u7801"}),rules:[{required:!0,message:(0,e.jsx)(g._H,{id:"pages.register.password",defaultMessage:"\u8BF7\u8F93\u8BBE\u7F6E\u5BC6\u7801\uFF01"})},{pattern:/^(?![0-9]+\$)(?![a-zA-Z]+\$)[0-9A-Za-z\\W]{6,18}$/,message:(0,e.jsx)(g._H,{id:"pages.register.password.invalid",defaultMessage:"\u5BC6\u7801\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),(0,e.jsx)(y.Z.Password,{fieldProps:{size:"large",prefix:(0,e.jsx)(B.Z,{className:m().prefixIcon})},name:"repeated",placeholder:c.formatMessage({id:"pages.register.password",defaultMessage:"\u8BBE\u7F6E\u5BC6\u7801"}),rules:[{required:!0,message:(0,e.jsx)(g._H,{id:"pages.register.password",defaultMessage:"\u8BF7\u8F93\u8BBE\u7F6E\u5BC6\u7801\uFF01"})},{pattern:/^(?![0-9]+\$)(?![a-zA-Z]+\$)[0-9A-Za-z\\W]{6,18}$/,message:(0,e.jsx)(g._H,{id:"pages.register.password.invalid",defaultMessage:"\u5BC6\u7801\u683C\u5F0F\u9519\u8BEF\uFF01"})}]})]})},J=r(89366),Q=function(){var c=(0,z.t)("@@initialState"),f=c.initialState,p=c.setInitialState,h=(0,g.YB)(),F=function(){var l=(0,M.Z)(o().mark(function n(){var s,t;return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f==null||(s=f.fetchUserInfo)===null||s===void 0?void 0:s.call(f);case 2:if(t=a.sent,!t){a.next=6;break}return a.next=6,p(function(v){return(0,x.Z)((0,x.Z)({},v),{},{currentUser:t})});case 6:case"end":return a.stop()}},n)}));return function(){return l.apply(this,arguments)}}(),C=function(){var l=(0,M.Z)(o().mark(function n(s){var t,i,a,v,$,u,N,A;return o().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,d.next=3,I.w.login((t=s.username)!==null&&t!==void 0?t:"",(i=s.password)!==null&&i!==void 0?i:"");case 3:return a=d.sent,a=a.data,v=h.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),localStorage.setItem(P.o,a.token),j.default.success(v),d.next=10,F();case 10:if(Z.m){d.next=12;break}return d.abrupt("return");case 12:$=Z.m.location.query,u=$,N=u.redirect,Z.m.push(N||"/"),d.next=22;break;case 17:d.prev=17,d.t0=d.catch(0),console.log(d.t0),A=h.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),j.default.error(A);case 22:case"end":return d.stop()}},n,null,[[0,17]])}));return function(s){return l.apply(this,arguments)}}();return(0,e.jsxs)(w.Z,{initialValues:{autoLogin:!0},onFinish:function(){var l=(0,M.Z)(o().mark(function n(s){return o().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,C(s);case 2:case"end":return i.stop()}},n)}));return function(n){return l.apply(this,arguments)}}(),children:[(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(y.Z,{name:"username",fieldProps:{size:"large",prefix:(0,e.jsx)(J.Z,{className:m().prefixIcon})},placeholder:h.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:(0,e.jsx)(g._H,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,e.jsx)(y.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,e.jsx)(B.Z,{className:m().prefixIcon})},placeholder:h.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:(0,e.jsx)(g._H,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),(0,e.jsx)("div",{style:{marginBottom:24},children:(0,e.jsx)("a",{style:{display:"block",textAlign:"end"}})})]})},X=r(47416),T,k=function(){var c=(0,W.useState)("account"),f=(0,H.Z)(c,2),p=f[0],h=f[1],F=(0,g.YB)();return(0,e.jsxs)("div",{className:m().container,children:[(0,e.jsx)("div",{className:m().lang,"data-lang":!0,children:g.pD&&(0,e.jsx)(g.pD,{})}),(0,e.jsxs)("div",{className:m().content,children:[(0,e.jsx)(q,{children:(0,e.jsxs)(S.Z,{activeKey:p,onChange:h,children:[(0,e.jsx)(S.Z.TabPane,{tab:F.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})},"account"),(0,e.jsx)(S.Z.TabPane,{tab:F.formatMessage({id:"pages.login.registerAccount"})},"mobile")]})}),p==="account"&&(0,e.jsx)(Q,{}),p==="mobile"&&(0,e.jsx)(K,{})]})]})},q=X.ZP.div(T||(T=(0,E.Z)([`
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
`]))),_=k}}]);