(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[507],{16993:function(D,u,n){"use strict";n.d(u,{b:function(){return E}});var M=n(57663),c=n(71577),i=n(20310),v=n(67294),g=n(47416),m=n(85893),f,r=(0,g.ZP)(c.Z)(f||(f=(0,i.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(l){var e=l.disabled;return e&&.5}),E=function(e){var a=e.text,t=e.block,d=t===void 0?!0:t,s=e.onClick,_=e.disabled,o=_===void 0?!1:_;return(0,m.jsx)(r,{type:"default",shape:"round",disabled:o,onClick:function(){o||s&&s()},size:"large",block:d,children:a})}},84247:function(D,u,n){"use strict";n.r(u);var M=n(20310),c=n(53776),i=n(47416),v=n(16993),g=n(32544),m=n(43581),f=n(67294),r=n(85893),E,l=i.ZP.div(E||(E=(0,M.Z)([`

  img {
    display: block;
    width: 100%;

  }

  @media (max-width: 576px) {
    //transform: rotate(90deg);
    img {
      width: 100%;
      //height: 100vh;
      //transform: rotate(90deg);
      img {
        width: 100%;
        //height: 100vw;
      }
    }

    .bottom {
      max-width: 260px;
      margin: 20px auto 0 auto;
    }
`])));u.default=function(){var e,a=(0,c.t)("@@initialState"),t=a.initialState,d=(0,g.m9)(),s=(0,m.YB)();return(0,r.jsxs)(l,{children:[(0,r.jsx)("img",{src:t==null||(e=t.currentUser)===null||e===void 0?void 0:e.referee_img_url,alt:""}),(0,r.jsx)("div",{className:"bottom",children:(0,r.jsx)(v.b,{text:s.formatMessage({id:"component.nft_car.copy_link"}),disabled:!1,onClick:function(){var o;d((t==null||(o=t.currentUser)===null||o===void 0?void 0:o.reg_url)||"")}})})]})}},32544:function(D,u,n){"use strict";n.d(u,{m9:function(){return f},XP:function(){return r},TW:function(){return E}});var M=n(34792),c=n(55026),i=n(67294),v=n(43581),g=n(29306),m=n.n(g),f=function(){var e=(0,v.YB)();return(0,i.useCallback)(function(a){var t=document.createElement("textarea");t.innerText=a,document.body.appendChild(t),t.select(),document.execCommand("copy"),c.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"})),t.remove()},[])},r=function(){var e=(0,v.YB)();return(0,i.useCallback)(function(a){var t=new XMLHttpRequest;console.log(a),t.open("GET",a,!0),t.responseType="blob",t.onload=function(d){var s=new FileReader;s.onload=function(o){var O=o.target.result,P=document.createElement("a");P.download="\u9080\u8BF7\u7801.png",P.href=O,P.click()};var _=this.response;s.readAsDataURL(_)},t.send(),c.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},E=function(){return(0,i.useCallback)(function(e,a,t){var d=document.getElementById(e);m().toPng(d).then(function(s){m().toPng(d,{width:900,height:900,style:{".right":{display:"none"}}}).then(function(_){if(_){var o=document.createElement("a");o.download=a+".png",o.href=_,o.click()}t(!0)}).catch(function(_){t(!1),console.error("oops, something went wrong!",_)})})},[])}}}]);
