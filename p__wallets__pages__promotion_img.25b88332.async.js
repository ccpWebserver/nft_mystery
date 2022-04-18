(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[507],{16993:function(O,l,t){"use strict";t.d(l,{b:function(){return _}});var f=t(57663),r=t(71577),d=t(20310),m=t(67294),u=t(47416),v=t(85893),c,o=(0,u.ZP)(r.Z)(c||(c=(0,d.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(a){var n=a.disabled;return n&&.5}),_=function(n){var s=n.text,e=n.block,M=e===void 0?!0:e,E=n.onClick,g=n.disabled,i=g===void 0?!1:g;return(0,v.jsx)(o,{type:"default",shape:"round",disabled:i,onClick:function(){i||E&&E()},size:"large",block:M,children:s})}},84247:function(O,l,t){"use strict";t.r(l);var f=t(20310),r=t(53776),d=t(47416),m=t(16993),u=t(32544),v=t(43581),c=t(67294),o=t(85893),_,a=d.ZP.div(_||(_=(0,f.Z)([`

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
`])));l.default=function(){var n,s=(0,r.t)("@@initialState"),e=s.initialState,M=(0,u.m)(),E=(0,v.YB)();return(0,o.jsxs)(a,{children:[(0,o.jsx)("img",{src:e==null||(n=e.currentUser)===null||n===void 0?void 0:n.referee_img_url,alt:""}),(0,o.jsx)("div",{className:"bottom",children:(0,o.jsx)(m.b,{text:E.formatMessage({id:"component.nft_car.copy_link"}),disabled:!1,onClick:function(){var i;M((e==null||(i=e.currentUser)===null||i===void 0?void 0:i.reg_url)||"")}})})]})}},32544:function(O,l,t){"use strict";t.d(l,{m:function(){return u}});var f=t(34792),r=t(55026),d=t(67294),m=t(43581),u=function(){var o=(0,m.YB)();return(0,d.useCallback)(function(_){var a=document.createElement("textarea");a.innerText=_,document.body.appendChild(a),a.select(),document.execCommand("copy"),r.default.success(o.formatMessage({id:"component.nft_car.copy_successfully"})),a.remove()},[])},v=function(){var o=useIntl();return useCallback(function(_){var a=new Blob([""],{type:"application/octet-stream"}),n=URL.createObjectURL(a),s=document.createElement("a");s.href=_,s.download=_.replace(/(.*\/)*([^.]+.*)/ig,"$2").split("?")[0];var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),s.dispatchEvent(e),URL.revokeObjectURL(n),_message.success(o.formatMessage({id:"component.nft_car.copy_successfully"}))},[])}}}]);
