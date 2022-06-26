(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[507],{16993:function(D,d,n){"use strict";n.d(d,{b:function(){return m}});var M=n(57663),u=n(71577),l=n(20310),v=n(67294),E=n(47416),c=n(85893),g,i=(0,E.ZP)(u.Z)(g||(g=(0,l.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(f){var a=f.disabled;return a&&.5}),m=function(a){var o=a.text,t=a.block,e=t===void 0?!0:t,_=a.onClick,r=a.disabled,s=r===void 0?!1:r;return(0,c.jsx)(i,{type:"default",shape:"round",disabled:s,onClick:function(){s||_&&_()},size:"large",block:e,children:o})}},84247:function(D,d,n){"use strict";n.r(d);var M=n(20310),u=n(53776),l=n(47416),v=n(16993),E=n(32544),c=n(43581),g=n(67294),i=n(85893),m,f=l.ZP.div(m||(m=(0,M.Z)([`

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
`])));d.default=function(){var a,o=(0,u.t)("@@initialState"),t=o.initialState,e=(0,E.m9)(),_=(0,c.YB)();return(0,i.jsxs)(f,{children:[(0,i.jsx)("img",{src:t==null||(a=t.currentUser)===null||a===void 0?void 0:a.referee_img_url,alt:""}),(0,i.jsx)("div",{className:"bottom",children:(0,i.jsx)(v.b,{text:_.formatMessage({id:"component.nft_car.copy_link"}),disabled:!1,onClick:function(){var s;e((t==null||(s=t.currentUser)===null||s===void 0?void 0:s.reg_url)||"")}})})]})}},32544:function(D,d,n){"use strict";n.d(d,{m9:function(){return g},XP:function(){return i},TW:function(){return m}});var M=n(34792),u=n(55026),l=n(67294),v=n(43581),E=n(29306),c=n.n(E),g=function(){var o=(0,v.YB)();return(0,l.useCallback)(function(t){var e=document.createElement("textarea");e.innerText=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),u.default.success(o.formatMessage({id:"component.nft_car.copy_successfully"})),e.remove()},[])},i=function(){var o=(0,v.YB)();return(0,l.useCallback)(function(t){var e=new XMLHttpRequest;console.log(t),e.open("GET",t,!0),e.responseType="blob",e.onload=function(_){var r=new FileReader;r.onload=function(p){var O=p.target.result,P=document.createElement("a");P.download="\u9080\u8BF7\u7801.png",P.href=O,P.click()};var s=this.response;r.readAsDataURL(s)},e.send(),u.default.success(o.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},m=function(){return(0,l.useCallback)(function(o,t){var e=document.getElementById(o);c().toPng(e).then(function(){c().toPng(e).then(function(_){var r=document.createElement("a");r.download=t+".png",r.href=_,r.click()}).catch(function(_){console.error("oops, something went wrong!",_)})})},[])};function f(a){var o=document.createElement("canvas");o.width=a.width,o.height=a.height;var t=o.getContext("2d");t.drawImage(a,0,0);var e=o.toDataURL("image/png");return e.replace(/^data:image\/(png|jpg);base64,/,"")}}}]);
