(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[271],{53432:function(C,y,g){"use strict";function v(s){return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},v(s)}Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var A=P(g(67294)),S=g(99222),O=T(g(93096));function T(s){return s&&s.__esModule?s:{default:s}}function E(s){if(typeof WeakMap!="function")return null;var c=new WeakMap,f=new WeakMap;return(E=function(b){return b?f:c})(s)}function P(s,c){if(!c&&s&&s.__esModule)return s;if(s===null||v(s)!=="object"&&typeof s!="function")return{default:s};var f=E(c);if(f&&f.has(s))return f.get(s);var _={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in s)if(M!=="default"&&Object.prototype.hasOwnProperty.call(s,M)){var k=b?Object.getOwnPropertyDescriptor(s,M):null;k&&(k.get||k.set)?Object.defineProperty(_,M,k):_[M]=s[M]}return _.default=s,f&&f.set(s,_),_}function w(){return w=Object.assign?Object.assign.bind():function(s){for(var c=1;c<arguments.length;c++){var f=arguments[c];for(var _ in f)Object.prototype.hasOwnProperty.call(f,_)&&(s[_]=f[_])}return s},w.apply(this,arguments)}function d(s,c){return n(s)||a(s,c)||i(s,c)||l()}function l(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function i(s,c){if(!!s){if(typeof s=="string")return r(s,c);var f=Object.prototype.toString.call(s).slice(8,-1);if(f==="Object"&&s.constructor&&(f=s.constructor.name),f==="Map"||f==="Set")return Array.from(s);if(f==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f))return r(s,c)}}function r(s,c){(c==null||c>s.length)&&(c=s.length);for(var f=0,_=new Array(c);f<c;f++)_[f]=s[f];return _}function a(s,c){var f=s==null?null:typeof Symbol!="undefined"&&s[Symbol.iterator]||s["@@iterator"];if(f!=null){var _=[],b=!0,M=!1,k,j;try{for(f=f.call(s);!(b=(k=f.next()).done)&&(_.push(k.value),!(c&&_.length===c));b=!0);}catch(I){M=!0,j=I}finally{try{!b&&f.return!=null&&f.return()}finally{if(M)throw j}}return _}}function n(s){if(Array.isArray(s))return s}function t(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")}function e(s,c){for(var f=0;f<c.length;f++){var _=c[f];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(s,_.key,_)}}function u(s,c,f){return c&&e(s.prototype,c),f&&e(s,f),Object.defineProperty(s,"prototype",{writable:!1}),s}var o=new(function(){function s(){t(this,s),this.anchors=[],this.listeners=[],this.listener=void 0,this.listener=(0,O.default)(this._matchActiveAnchor.bind(this),200)}return u(s,[{key:"_matchActiveAnchor",value:function(){var f=this,_=this.anchors.findIndex(function(k,j){return k.getBoundingClientRect().top>128||j===f.anchors.length-1}),b=this.anchors[Math.max(0,_-1)],M=b.parentElement.id;this.listeners.forEach(function(k){return k(M)})}},{key:"watch",value:function(f){this.anchors.length===0&&typeof window!="undefined"&&window.addEventListener("scroll",this.listener),this.anchors.push(f),this.listener()}},{key:"unwatch",value:function(f){this.anchors.splice(this.anchors.findIndex(function(_){return _===f}),1),this.anchors.length===0&&typeof window!="undefined"&&window.removeEventListener("scroll",this.listener)}},{key:"listen",value:function(f){this.listeners.push(f)}},{key:"unlisten",value:function(f){this.listeners.splice(this.listeners.findIndex(function(_){return _===f}),1)}}]),s}());function p(s){return s.offsetTop+(s.offsetParent?p(s.offsetParent):0)}var h=function s(c){var f,_=((f=c.to.match(/(#[^&?]*)/))===null||f===void 0?void 0:f[1])||"",b=(0,A.useRef)(null),M=(0,A.useState)(!1),k=d(M,2),j=k[0],I=k[1];return(0,A.useEffect)(function(){var R,D;if(["H1","H2","H3"].includes((R=b.current)===null||R===void 0||(D=R.parentElement)===null||D===void 0?void 0:D.tagName)&&b.current.parentElement.id){var $=b.current;return o.watch($),function(){o.unwatch($)}}var L=function(U){I(_==="#".concat(U))};return o.listen(L),function(){return o.unlisten(L)}},[]),A.default.createElement(S.NavLink,w({},c,{ref:b,onClick:function(){return s.scrollToAnchor(_.substring(1))},isActive:function(){return j}}))};h.scrollToAnchor=function(s){window.requestAnimationFrame(function(){var c=document.getElementById(decodeURIComponent(s));c&&window.scrollTo(0,p(c)-100)})};var m=h;y.default=m},91290:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=y.LinkWrapper=void 0;var v=O(g(67294)),A=g(99222),S=["to"];function O(l){return l&&l.__esModule?l:{default:l}}function T(){return T=Object.assign?Object.assign.bind():function(l){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(l[a]=r[a])}return l},T.apply(this,arguments)}function E(l,i){if(l==null)return{};var r=P(l,i),a,n;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);for(n=0;n<t.length;n++)a=t[n],!(i.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(l,a)||(r[a]=l[a]))}return r}function P(l,i){if(l==null)return{};var r={},a=Object.keys(l),n,t;for(t=0;t<a.length;t++)n=a[t],!(i.indexOf(n)>=0)&&(r[n]=l[n]);return r}var w=function(i){return function(r){var a=r.to,n=E(r,S),t=/^(\w+:)?\/\/|^(mailto|tel):/.test(a)||!a,e=v.default.isValidElement(n.children);return v.default.createElement(i,T({to:a||"",component:t?function(){return v.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a},n.children,a&&!e&&v.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},v.default.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),v.default.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))}:void 0},n,t?{}:{onClick:function(){var o;window.scrollTo({top:0});for(var p=arguments.length,h=new Array(p),m=0;m<p;m++)h[m]=arguments[m];(o=n.onClick)===null||o===void 0||o.apply(this,h)}}))}};y.LinkWrapper=w;var d=w(A.Link);y.default=d},20045:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var v=g(99222),A=g(91290),S=(0,A.LinkWrapper)(v.NavLink);y.default=S},20052:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const O=A(g(67294));return v=function(){return O},O}function A(O){return O&&O.__esModule?O:{default:O}}var S=v().default.createContext({config:{mode:"doc",title:"",navs:{},menus:{},locales:[],repository:{branch:"master"},theme:{}},meta:{title:""},menu:[],nav:[],base:"",routes:[],apis:{},demos:{}});y.default=S},73918:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const r=g(67294);return v=function(){return r},r}var A=S(g(20052));function S(r){return r&&r.__esModule?r:{default:r}}function O(r,a){return d(r)||w(r,a)||E(r,a)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(r,a){if(!!r){if(typeof r=="string")return P(r,a);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(r,a)}}function P(r,a){(a==null||a>r.length)&&(a=r.length);for(var n=0,t=new Array(a);n<a;n++)t[n]=r[n];return t}function w(r,a){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var t=[],e=!0,u=!1,o,p;try{for(n=n.call(r);!(e=(o=n.next()).done)&&(t.push(o.value),!(a&&t.length===a));e=!0);}catch(h){u=!0,p=h}finally{try{!e&&n.return!=null&&n.return()}finally{if(u)throw p}}return t}}function d(r){if(Array.isArray(r))return r}function l(r,a,n){return Object.entries(r[a]).reduce((t,[e,u])=>(t[e]=u.map(o=>{const p={description:o.description};return Object.keys(o).forEach(h=>{if(h.startsWith("description.")){const m=h.match(/^description\.(.*)$/),s=O(m,2),c=s[1];c&&c===n&&(p.description=o[h])}else p[h]=o[h]}),p}),t),{})}var i=r=>{const a=(0,v().useContext)(A.default),n=a.locale,t=a.apis,e=(0,v().useState)(l(t,r,n)),u=O(e,2),o=u[0],p=u[1];return(0,v().useEffect)(()=>{p(l(t,r,n))},[t,r,n]),o};y.default=i},18178:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const t=g(67294);return v=function(){return t},t}function A(){const t=g(12662);return A=function(){return t},t}function S(t,e){return w(t)||P(t,e)||T(t,e)||O()}function O(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(t,e){if(!!t){if(typeof t=="string")return E(t,e);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return E(t,e)}}function E(t,e){(e==null||e>t.length)&&(e=t.length);for(var u=0,o=new Array(e);u<e;u++)o[u]=t[u];return o}function P(t,e){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var o=[],p=!0,h=!1,m,s;try{for(u=u.call(t);!(p=(m=u.next()).done)&&(o.push(m.value),!(e&&o.length===e));p=!0);}catch(c){h=!0,s=c}finally{try{!p&&u.return!=null&&u.return()}finally{if(h)throw s}}return o}}function w(t){if(Array.isArray(t))return t}const d="https://codesandbox.io/api/v1/sandboxes/define",l=(t,e)=>{if(t==="react-dom")return`/**
* This is an auto-generated demo by dumi
* if you think it is not working as expected,
* please report the issue at
* https://github.com/umijs/dumi/issues
**/
    
import React from 'react';
import ReactDOM from 'react-dom';
${e}
import App from './App';
    
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);`;if(t==="react-dom/client")return`/**
* This is an auto-generated demo by dumi
* if you think it is not working as expected,
* please report the issue at
* https://github.com/umijs/dumi/issues
**/
import React from 'react';
import { createRoot } from "react-dom/client";
${e}
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);`},i=t=>t.includes("import React from 'react';")?t:`import React from 'react';
${t}`;function r(t){const e=document.createElement("span");e.innerHTML=t;const u=e.textContent;return e.remove(),u}function a(t){var e;const u=Boolean(t.sources._.tsx),o=u?".tsx":".jsx",p={},h={},m=Object.values(t.dependencies).filter(f=>f.css),s=`App${o}`,c=`index${o}`;return Object.entries(t.dependencies).forEach(([f,{version:_}])=>{h[f]=_}),h["react-dom"]||(h["react-dom"]=h.react||"latest"),p["sandbox.config.json"]={content:JSON.stringify({template:u?"create-react-app-typescript":"create-react-app"},null,2),isBinary:!1},p["package.json"]={content:JSON.stringify({name:t.title,description:r(t.description)||"An auto-generated demo by dumi",main:c,dependencies:h,devDependencies:u?{typescript:"^3"}:{}},null,2),isBinary:!1},p["index.html"]={content:'<div style="margin: 16px;" id="root"></div>',isBinary:!1},p[c]={content:l((h==null||(e=h["react-dom"])===null||e===void 0?void 0:e.startsWith("18."))||h.react==="latest"?"react-dom/client":"react-dom",m.map(({css:f})=>`import '${f}';`).join(`
`)),isBinary:!1},Object.entries(t.sources).forEach(([f,{tsx:_,jsx:b,content:M}])=>{p[f==="_"?s:f]={content:i(_||b||M),isBinary:!1}}),(0,A().getParameters)({files:p})}var n=(t,e=d)=>{const u=(0,v().useState)(),o=S(u,2),p=o[0],h=o[1];return(0,v().useEffect)(()=>{if(t){const m=document.createElement("form"),s=document.createElement("input"),c=a(t);return m.method="POST",m.target="_blank",m.style.display="none",m.action=e,m.appendChild(s),m.setAttribute("data-demo",t.title||""),s.name="parameters",s.value=c,document.body.appendChild(m),h(()=>()=>m.submit()),()=>m.remove()}},[t]),p};y.default=n},90295:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const i=g(67294);return v=function(){return i},i}function A(){const i=S(g(735));return A=function(){return i},i}function S(i){return i&&i.__esModule?i:{default:i}}function O(i,r){return d(i)||w(i,r)||E(i,r)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(i,r){if(!!i){if(typeof i=="string")return P(i,r);var a=Object.prototype.toString.call(i).slice(8,-1);if(a==="Object"&&i.constructor&&(a=i.constructor.name),a==="Map"||a==="Set")return Array.from(i);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return P(i,r)}}function P(i,r){(r==null||r>i.length)&&(r=i.length);for(var a=0,n=new Array(r);a<r;a++)n[a]=i[a];return n}function w(i,r){var a=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(a!=null){var n=[],t=!0,e=!1,u,o;try{for(a=a.call(i);!(t=(u=a.next()).done)&&(n.push(u.value),!(r&&n.length===r));t=!0);}catch(p){e=!0,o=p}finally{try{!t&&a.return!=null&&a.return()}finally{if(e)throw o}}return n}}function d(i){if(Array.isArray(i))return i}var l=()=>{const i=(0,v().useState)(),r=O(i,2),a=r[0],n=r[1],t=(0,v().useState)("ready"),e=O(t,2),u=e[0],o=e[1];return[(0,v().useCallback)(h=>{(0,A().default)(h),o("copied"),clearTimeout(a),n(setTimeout(()=>{o("ready")},2e3))},[]),u]};y.default=l},86579:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.getDemoUrl=y.getDemoRouteName=y.default=void 0;function v(){const n=g(67294);return v=function(){return n},n}var A=S(g(20052));function S(n){return n&&n.__esModule?n:{default:n}}function O(n,t){return d(n)||w(n,t)||E(n,t)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(n,t){if(!!n){if(typeof n=="string")return P(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return P(n,t)}}function P(n,t){(t==null||t>n.length)&&(t=n.length);for(var e=0,u=new Array(t);e<t;e++)u[e]=n[e];return u}function w(n,t){var e=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var u=[],o=!0,p=!1,h,m;try{for(e=e.call(n);!(o=(h=e.next()).done)&&(u.push(h.value),!(t&&u.length===t));o=!0);}catch(s){p=!0,m=s}finally{try{!o&&e.return!=null&&e.return()}finally{if(p)throw m}}return u}}function d(n){if(Array.isArray(n))return n}function l(){return{NODE_ENV:"production"}.PLATFORM_TYPE==="BASEMENT"}const i=()=>l()?"_demos":"~demos";y.getDemoRouteName=i;const r=(n,t)=>{var e;const u=window,o=u.location,p=o.href,h=o.origin,m=p.split(/#\//),s=O(m,2),c=s[0];return[typeof s[1]=="string"?`${c}#`:h,`${((e=window)===null||e===void 0?void 0:e.routerBase)||""}/`.replace(/\/\/$/,"/"),i(),"/",n,`${t?".html":""}`].join("")};y.getDemoUrl=r;var a=n=>{const t=(0,v().useContext)(A.default),e=t.config,u=(0,v().useState)(""),o=O(u,2),p=o[0],h=o[1];return(0,v().useEffect)(()=>{h(n?r(n,e.exportStatic&&e.exportStatic.htmlSuffix):null)},[n,e]),p};y.default=a},86660:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const d=g(67294);return v=function(){return d},d}function A(d,l){return P(d)||E(d,l)||O(d,l)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(d,l){if(!!d){if(typeof d=="string")return T(d,l);var i=Object.prototype.toString.call(d).slice(8,-1);if(i==="Object"&&d.constructor&&(i=d.constructor.name),i==="Map"||i==="Set")return Array.from(d);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return T(d,l)}}function T(d,l){(l==null||l>d.length)&&(l=d.length);for(var i=0,r=new Array(l);i<l;i++)r[i]=d[i];return r}function E(d,l){var i=d==null?null:typeof Symbol!="undefined"&&d[Symbol.iterator]||d["@@iterator"];if(i!=null){var r=[],a=!0,n=!1,t,e;try{for(i=i.call(d);!(a=(t=i.next()).done)&&(r.push(t.value),!(l&&r.length===l));a=!0);}catch(u){n=!0,e=u}finally{try{!a&&i.return!=null&&i.return()}finally{if(n)throw e}}return r}}function P(d){if(Array.isArray(d))return d}var w=(d,l)=>{const i=(...e)=>{const u={};return Object.keys(e[1]).forEach(o=>{const p=(o.match(/^(.+)\.([^_]+)$/)||[]).slice(1),h=A(p,2),m=h[0],s=h[1];(!s||s===e[0])&&(u[m||o]=e[1][o])}),u},r=(0,v().useState)(i(d,l)),a=A(r,2),n=a[0],t=a[1];return(0,v().useEffect)(()=>{t(i(d,l))},[d,l]),n};y.default=w},49167:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const l=g(67294);return v=function(){return l},l}function A(l,i){return P(l)||E(l,i)||O(l,i)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(l,i){if(!!l){if(typeof l=="string")return T(l,i);var r=Object.prototype.toString.call(l).slice(8,-1);if(r==="Object"&&l.constructor&&(r=l.constructor.name),r==="Map"||r==="Set")return Array.from(l);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(l,i)}}function T(l,i){(i==null||i>l.length)&&(i=l.length);for(var r=0,a=new Array(i);r<i;r++)a[r]=l[r];return a}function E(l,i){var r=l==null?null:typeof Symbol!="undefined"&&l[Symbol.iterator]||l["@@iterator"];if(r!=null){var a=[],n=!0,t=!1,e,u;try{for(r=r.call(l);!(n=(e=r.next()).done)&&(a.push(e.value),!(i&&a.length===i));n=!0);}catch(o){t=!0,u=o}finally{try{!n&&r.return!=null&&r.return()}finally{if(t)throw u}}return a}}function P(l){if(Array.isArray(l))return l}function w(l,i,r,a=0){var n;if(a<i.length){const t=i[a],e=()=>w(l,i,r,a+1),u=t.match(/^([^:]+):?(.*)$/)||[],o=A(u,3),p=o[1],h=o[2];switch(p){case"autoplay":e();break;case"click":const m=h.match(/^(global\()?(.+?)\)?$/)||[],s=A(m,3),c=s[1],f=s[2];(n=(c?document:l).querySelector(f))===null||n===void 0||n.click(),e();break;case"timeout":setTimeout(e,Number(h));break;case"capture":window.postMessage({type:"dumi:capture-element",value:h},"*"),e();break;default:console.warn(`[dumi: motion] unknown motion '${t}', skip.`),e()}}else r()}var d=(l,i)=>{const r=(0,v().useState)(!1),a=A(r,2),n=a[0],t=a[1],e=(0,v().useCallback)(()=>{n||(w(i,l,()=>{t(!1)}),t(!0))},[l,i,n]);return(0,v().useEffect)(()=>{l[0]==="autoplay"&&i&&e()},[l,i]),[e,n]};y.default=d},14045:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const a=g(67294);return v=function(){return a},a}function A(a,n){return P(a)||E(a,n)||O(a,n)||S()}function S(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(a,n){if(!!a){if(typeof a=="string")return T(a,n);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(a,n)}}function T(a,n){(n==null||n>a.length)&&(n=a.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=a[t];return e}function E(a,n){var t=a==null?null:typeof Symbol!="undefined"&&a[Symbol.iterator]||a["@@iterator"];if(t!=null){var e=[],u=!0,o=!1,p,h;try{for(t=t.call(a);!(u=(p=t.next()).done)&&(e.push(p.value),!(n&&e.length===n));u=!0);}catch(m){o=!0,h=m}finally{try{!u&&t.return!=null&&t.return()}finally{if(o)throw h}}return e}}function P(a){if(Array.isArray(a))return a}const w="data-prefers-color",d="dumi:prefers-color";let l;class i{constructor(){this.color=void 0,this.callbacks=[],this.color=localStorage.getItem(d)||document.documentElement.getAttribute(w),["light","dark"].forEach(n=>{const t=this.getColorMedia(n),e=u=>{u.matches&&this.color==="auto"&&(document.documentElement.setAttribute(w,n),this.applyCallbacks())};t.addEventListener?t.addEventListener("change",e):t.addListener&&t.addListener(e)})}getColorMedia(n){return window.matchMedia(`(prefers-color-scheme: ${n})`)}isColorMode(n){return this.getColorMedia(n).matches}applyCallbacks(){this.callbacks.forEach(n=>n(this.color))}listen(n){this.callbacks.push(n)}unlisten(n){this.callbacks.splice(this.callbacks.indexOf(n),1)}set(n){return this.color=n,localStorage.setItem(d,n),this.applyCallbacks(),n==="auto"?document.documentElement.setAttribute(w,this.isColorMode("dark")?"dark":"light"):document.documentElement.setAttribute(w,n),n}}var r=()=>{const a=(0,v().useState)(),n=A(a,2),t=n[0],e=n[1],u=(0,v().useCallback)(o=>{l.set(o)},[]);return(0,v().useEffect)(()=>(l=l||new i,l.listen(e),e(l.color),()=>l.unlisten(e)),[]),[t,u]};y.default=r},6928:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const e=g(67294);return v=function(){return e},e}function A(e,u){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);u&&(p=p.filter(function(h){return Object.getOwnPropertyDescriptor(e,h).enumerable})),o.push.apply(o,p)}return o}function S(e){for(var u=1;u<arguments.length;u++){var o=arguments[u]!=null?arguments[u]:{};u%2?A(Object(o),!0).forEach(function(p){O(e,p,o[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach(function(p){Object.defineProperty(e,p,Object.getOwnPropertyDescriptor(o,p))})}return e}function O(e,u,o){return u in e?Object.defineProperty(e,u,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[u]=o,e}function T(e,u){return l(e)||d(e,u)||P(e,u)||E()}function E(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P(e,u){if(!!e){if(typeof e=="string")return w(e,u);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return w(e,u)}}function w(e,u){(u==null||u>e.length)&&(u=e.length);for(var o=0,p=new Array(u);o<u;o++)p[o]=e[o];return p}function d(e,u){var o=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var p=[],h=!0,m=!1,s,c;try{for(o=o.call(e);!(h=(s=o.next()).done)&&(p.push(s.value),!(u&&p.length===u));h=!0);}catch(f){m=!0,c=f}finally{try{!h&&o.return!=null&&o.return()}finally{if(m)throw c}}return p}}function l(e){if(Array.isArray(e))return e}const i="https://riddle.alibaba-inc.com/riddles/define";let r;const a=()=>{const e=(0,v().useState)(Boolean(r)),u=T(e,2),o=u[0],p=u[1];return(0,v().useEffect)(()=>{if(r===void 0){const h=document.createElement("img");setTimeout(()=>{h.src="",h.remove()},200),h.onload=()=>{r=!0,p(!0),h.remove()},h.src="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png"}},[]),o};function n(e){let u=e.sources._.tsx||e.sources._.jsx;return u=u.replace(/^/,`import ReactDOM from 'react-dom';
`).replace("export default","const DumiDemo =").concat(`
ReactDOM.render(<DumiDemo />, mountNode);`),u}var t=e=>{const u=(0,v().useState)(),o=T(u,2),p=o[0],h=o[1],m=a();return(0,v().useEffect)(()=>{if(e&&m&&Object.keys(e.sources).length===1){var s;const c=document.createElement("form"),f=document.createElement("input");return c.method="POST",c.target="_blank",c.style.display="none",c.action=i,c.appendChild(f),c.setAttribute("data-demo",e.title||""),f.name="data",f.value=JSON.stringify({title:e.titlle,js:n(e),css:Object.entries(e.dependencies).filter(([,_])=>_.css).map(([_,{version:b,css:M}])=>`@import '~${M.replace(new RegExp(`^(${_})`),`$1@${b}`)}';`).concat(e.background?`body {
  background: ${e.background};
}`:"").join(`
`),json:JSON.stringify({description:e.description,dependencies:Object.entries(e.dependencies).reduce((_,[b,{version:M}])=>S(S({},_),{},{[b]:M}),{"react-dom":((s=e.dependencies.react)===null||s===void 0?void 0:s.version)||"latest"})},null,2)}),document.body.appendChild(c),h(()=>()=>c.submit()),()=>c.remove()}},[e,m]),p};y.default=t},42949:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const t=g(67294);return v=function(){return t},t}var A=g(16924);function S(t,e){var u=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(p){return Object.getOwnPropertyDescriptor(t,p).enumerable})),u.push.apply(u,o)}return u}function O(t){for(var e=1;e<arguments.length;e++){var u=arguments[e]!=null?arguments[e]:{};e%2?S(Object(u),!0).forEach(function(o){T(t,o,u[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(u)):S(Object(u)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(u,o))})}return t}function T(t,e,u){return e in t?Object.defineProperty(t,e,{value:u,enumerable:!0,configurable:!0,writable:!0}):t[e]=u,t}function E(t,e){return i(t)||l(t,e)||w(t,e)||P()}function P(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function w(t,e){if(!!t){if(typeof t=="string")return d(t,e);var u=Object.prototype.toString.call(t).slice(8,-1);if(u==="Object"&&t.constructor&&(u=t.constructor.name),u==="Map"||u==="Set")return Array.from(t);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return d(t,e)}}function d(t,e){(e==null||e>t.length)&&(e=t.length);for(var u=0,o=new Array(e);u<e;u++)o[u]=t[u];return o}function l(t,e){var u=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(u!=null){var o=[],p=!0,h=!1,m,s;try{for(u=u.call(t);!(p=(m=u.next()).done)&&(o.push(m.value),!(e&&o.length===e));p=!0);}catch(c){h=!0,s=c}finally{try{!p&&u.return!=null&&u.return()}finally{if(h)throw s}}return o}}function i(t){if(Array.isArray(t))return t}const r=t=>{const e=(0,v().useContext)(A.context),u=e.locale,o=e.routes,p=e.config.locales,h=(0,v().useState)([]),m=E(h,2),s=m[0],c=m[1],f=(0,v().useState)([]),_=E(f,2),b=_[0],M=_[1];return(0,v().useEffect)(()=>{c(o.filter(({title:k,meta:j})=>{const I=(j==null?void 0:j.locale)===u,R=!(j==null?void 0:j.locale)&&(!p.length||u===p[0].name);return k&&(R||I)}).reduce((k,j)=>{var I,R,D;const $={title:((I=j.meta)===null||I===void 0?void 0:I.title)||j.title,path:j.path};return((R=j.meta)===null||R===void 0?void 0:R.group)&&($.parent=j.meta.group),k.push($),k.push(...(((D=j.meta)===null||D===void 0?void 0:D.slugs)||[]).filter(({value:L})=>{var x;return L!==(((x=j.meta)===null||x===void 0?void 0:x.title)||j.title)}).map(L=>({title:L.value,path:`${j.path}#${L.heading}`,parent:$}))),k},[]))},[o.length,u]),(0,v().useEffect)(()=>{const k=t==null?void 0:t.trim().toUpperCase();if(k){const j=[];for(let I=0;I<s.length;I+=1)s[I].title.toUpperCase().indexOf(k)>-1&&j.push(s[I]);M(j)}else M([])},[t,s.length]),b},a=()=>{const t=(0,v().useContext)(A.context),e=t.config.algolia;return(0,v().useCallback)(o=>{window.docsearch(O({inputSelector:o},e))},[e])};var n=t=>{const e=(0,v().useContext)(A.context),u=e.config,o=r(t),p=a();return u.algolia?p:o};y.default=n},65594:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;function v(){const r=g(67294);return v=function(){return r},r}function A(){const r=S(g(26961));return A=function(){return r},r}function S(r){return r&&r.__esModule?r:{default:r}}function O(r,a){return d(r)||w(r,a)||E(r,a)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(r,a){if(!!r){if(typeof r=="string")return P(r,a);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(r,a)}}function P(r,a){(a==null||a>r.length)&&(a=r.length);for(var n=0,t=new Array(a);n<a;n++)t[n]=r[n];return t}function w(r,a){var n=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var t=[],e=!0,u=!1,o,p;try{for(n=n.call(r);!(e=(o=n.next()).done)&&(t.push(o.value),!(a&&t.length===a));e=!0);}catch(h){u=!0,p=h}finally{try{!e&&n.return!=null&&n.return()}finally{if(u)throw p}}return t}}function d(r){if(Array.isArray(r))return r}const l={"zh-CN":"https://www.typescriptlang.org/zh/play","en-US":"https://www.typescriptlang.org/play"};var i=(r,a)=>{const n=(...p)=>`${/^zh|cn$/.test(p[0])?l["zh-CN"]:l["en-US"]}?skipLibCheck=true&jsx=1#code/${A().default.compressToEncodedURIComponent(p[1])}`,t=(0,v().useState)(n(r,a)),e=O(t,2),u=e[0],o=e[1];return(0,v().useEffect)(()=>{o(n(r,a))},[r,a]),u};y.default=i},16924:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),Object.defineProperty(y,"AnchorLink",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(y,"Link",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(y,"NavLink",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(y,"context",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(y,"getDemoUrl",{enumerable:!0,get:function(){return i.getDemoUrl}}),Object.defineProperty(y,"useApiData",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(y,"useCodeSandbox",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(y,"useCopy",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(y,"useDemoUrl",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(y,"useLocaleProps",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(y,"useMotions",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(y,"usePrefersColor",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(y,"useRiddle",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(y,"useSearch",{enumerable:!0,get:function(){return T.default}}),Object.defineProperty(y,"useTSPlaygroundUrl",{enumerable:!0,get:function(){return a.default}});var v=u(g(20052)),A=u(g(91290)),S=u(g(20045)),O=u(g(53432)),T=u(g(42949)),E=u(g(90295)),P=u(g(6928)),w=u(g(49167)),d=u(g(18178)),l=u(g(86660)),i=e(g(86579)),r=u(g(73918)),a=u(g(65594)),n=u(g(14045));function t(o){if(typeof WeakMap!="function")return null;var p=new WeakMap,h=new WeakMap;return(t=function(s){return s?h:p})(o)}function e(o,p){if(!p&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var h=t(p);if(h&&h.has(o))return h.get(o);var m={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in o)if(c!=="default"&&Object.prototype.hasOwnProperty.call(o,c)){var f=s?Object.getOwnPropertyDescriptor(o,c):null;f&&(f.get||f.set)?Object.defineProperty(m,c,f):m[c]=o[c]}return m.default=o,h&&h.set(o,m),m}function u(o){return o&&o.__esModule?o:{default:o}}},19661:function(C,y,g){"use strict";Object.defineProperty(y,"__esModule",{value:!0}),y.getParameters=void 0;var v=g(26961);function A(O){return v.compressToBase64(O).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function S(O){return A(JSON.stringify(O))}y.getParameters=S},12662:function(C,y,g){"use strict";y.__esModule=!0,y.getParameters=void 0;var v=g(19661);y.getParameters=v.getParameters},735:function(C){"use strict";const y=(g,{target:v=document.body}={})=>{const A=document.createElement("textarea"),S=document.activeElement;A.value=g,A.setAttribute("readonly",""),A.style.contain="strict",A.style.position="absolute",A.style.left="-9999px",A.style.fontSize="12pt";const O=document.getSelection();let T=!1;O.rangeCount>0&&(T=O.getRangeAt(0)),v.append(A),A.select(),A.selectionStart=0,A.selectionEnd=g.length;let E=!1;try{E=document.execCommand("copy")}catch(P){}return A.remove(),T&&(O.removeAllRanges(),O.addRange(T)),S&&S.focus(),E};C.exports=y,C.exports.default=y},26961:function(C,y,g){var v,A=function(){var S=String.fromCharCode,O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",E={};function P(d,l){if(!E[d]){E[d]={};for(var i=0;i<d.length;i++)E[d][d.charAt(i)]=i}return E[d][l]}var w={compressToBase64:function(d){if(d==null)return"";var l=w._compress(d,6,function(i){return O.charAt(i)});switch(l.length%4){default:case 0:return l;case 1:return l+"===";case 2:return l+"==";case 3:return l+"="}},decompressFromBase64:function(d){return d==null?"":d==""?null:w._decompress(d.length,32,function(l){return P(O,d.charAt(l))})},compressToUTF16:function(d){return d==null?"":w._compress(d,15,function(l){return S(l+32)})+" "},decompressFromUTF16:function(d){return d==null?"":d==""?null:w._decompress(d.length,16384,function(l){return d.charCodeAt(l)-32})},compressToUint8Array:function(d){for(var l=w.compress(d),i=new Uint8Array(l.length*2),r=0,a=l.length;r<a;r++){var n=l.charCodeAt(r);i[r*2]=n>>>8,i[r*2+1]=n%256}return i},decompressFromUint8Array:function(d){if(d==null)return w.decompress(d);for(var l=new Array(d.length/2),i=0,r=l.length;i<r;i++)l[i]=d[i*2]*256+d[i*2+1];var a=[];return l.forEach(function(n){a.push(S(n))}),w.decompress(a.join(""))},compressToEncodedURIComponent:function(d){return d==null?"":w._compress(d,6,function(l){return T.charAt(l)})},decompressFromEncodedURIComponent:function(d){return d==null?"":d==""?null:(d=d.replace(/ /g,"+"),w._decompress(d.length,32,function(l){return P(T,d.charAt(l))}))},compress:function(d){return w._compress(d,16,function(l){return S(l)})},_compress:function(d,l,i){if(d==null)return"";var r,a,n={},t={},e="",u="",o="",p=2,h=3,m=2,s=[],c=0,f=0,_;for(_=0;_<d.length;_+=1)if(e=d.charAt(_),Object.prototype.hasOwnProperty.call(n,e)||(n[e]=h++,t[e]=!0),u=o+e,Object.prototype.hasOwnProperty.call(n,u))o=u;else{if(Object.prototype.hasOwnProperty.call(t,o)){if(o.charCodeAt(0)<256){for(r=0;r<m;r++)c=c<<1,f==l-1?(f=0,s.push(i(c)),c=0):f++;for(a=o.charCodeAt(0),r=0;r<8;r++)c=c<<1|a&1,f==l-1?(f=0,s.push(i(c)),c=0):f++,a=a>>1}else{for(a=1,r=0;r<m;r++)c=c<<1|a,f==l-1?(f=0,s.push(i(c)),c=0):f++,a=0;for(a=o.charCodeAt(0),r=0;r<16;r++)c=c<<1|a&1,f==l-1?(f=0,s.push(i(c)),c=0):f++,a=a>>1}p--,p==0&&(p=Math.pow(2,m),m++),delete t[o]}else for(a=n[o],r=0;r<m;r++)c=c<<1|a&1,f==l-1?(f=0,s.push(i(c)),c=0):f++,a=a>>1;p--,p==0&&(p=Math.pow(2,m),m++),n[u]=h++,o=String(e)}if(o!==""){if(Object.prototype.hasOwnProperty.call(t,o)){if(o.charCodeAt(0)<256){for(r=0;r<m;r++)c=c<<1,f==l-1?(f=0,s.push(i(c)),c=0):f++;for(a=o.charCodeAt(0),r=0;r<8;r++)c=c<<1|a&1,f==l-1?(f=0,s.push(i(c)),c=0):f++,a=a>>1}else{for(a=1,r=0;r<m;r++)c=c<<1|a,f==l-1?(f=0,s.push(i(c)),c=0):f++,a=0;for(a=o.charCodeAt(0),r=0;r<16;r++)c=c<<1|a&1,f==l-1?(f=0,s.push(i(c)),c=0):f++,a=a>>1}p--,p==0&&(p=Math.pow(2,m),m++),delete t[o]}else for(a=n[o],r=0;r<m;r++)c=c<<1|a&1,f==l-1?(f=0,s.push(i(c)),c=0):f++,a=a>>1;p--,p==0&&(p=Math.pow(2,m),m++)}for(a=2,r=0;r<m;r++)c=c<<1|a&1,f==l-1?(f=0,s.push(i(c)),c=0):f++,a=a>>1;for(;;)if(c=c<<1,f==l-1){s.push(i(c));break}else f++;return s.join("")},decompress:function(d){return d==null?"":d==""?null:w._decompress(d.length,32768,function(l){return d.charCodeAt(l)})},_decompress:function(d,l,i){var r=[],a,n=4,t=4,e=3,u="",o=[],p,h,m,s,c,f,_,b={val:i(0),position:l,index:1};for(p=0;p<3;p+=1)r[p]=p;for(m=0,c=Math.pow(2,2),f=1;f!=c;)s=b.val&b.position,b.position>>=1,b.position==0&&(b.position=l,b.val=i(b.index++)),m|=(s>0?1:0)*f,f<<=1;switch(a=m){case 0:for(m=0,c=Math.pow(2,8),f=1;f!=c;)s=b.val&b.position,b.position>>=1,b.position==0&&(b.position=l,b.val=i(b.index++)),m|=(s>0?1:0)*f,f<<=1;_=S(m);break;case 1:for(m=0,c=Math.pow(2,16),f=1;f!=c;)s=b.val&b.position,b.position>>=1,b.position==0&&(b.position=l,b.val=i(b.index++)),m|=(s>0?1:0)*f,f<<=1;_=S(m);break;case 2:return""}for(r[3]=_,h=_,o.push(_);;){if(b.index>d)return"";for(m=0,c=Math.pow(2,e),f=1;f!=c;)s=b.val&b.position,b.position>>=1,b.position==0&&(b.position=l,b.val=i(b.index++)),m|=(s>0?1:0)*f,f<<=1;switch(_=m){case 0:for(m=0,c=Math.pow(2,8),f=1;f!=c;)s=b.val&b.position,b.position>>=1,b.position==0&&(b.position=l,b.val=i(b.index++)),m|=(s>0?1:0)*f,f<<=1;r[t++]=S(m),_=t-1,n--;break;case 1:for(m=0,c=Math.pow(2,16),f=1;f!=c;)s=b.val&b.position,b.position>>=1,b.position==0&&(b.position=l,b.val=i(b.index++)),m|=(s>0?1:0)*f,f<<=1;r[t++]=S(m),_=t-1,n--;break;case 2:return o.join("")}if(n==0&&(n=Math.pow(2,e),e++),r[_])u=r[_];else if(_===t)u=h+h.charAt(0);else return null;o.push(u),r[t++]=h+u.charAt(0),n--,h=u,n==0&&(n=Math.pow(2,e),e++)}}};return w}();v=function(){return A}.call(y,g,y,C),v!==void 0&&(C.exports=v)}}]);
