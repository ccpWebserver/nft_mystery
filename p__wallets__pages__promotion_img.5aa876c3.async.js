(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[507],{16993:function(D,d,t){"use strict";t.d(d,{b:function(){return m}});var P=t(57663),u=t(71577),i=t(20310),E=t(67294),g=t(47416),c=t(85893),f,_=(0,g.ZP)(u.Z)(f||(f=(0,i.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(M){var a=M.disabled;return a&&.5}),m=function(a){var o=a.text,n=a.block,e=n===void 0?!0:n,s=a.onClick,l=a.disabled,r=l===void 0?!1:l;return(0,c.jsx)(_,{type:"default",shape:"round",disabled:r,onClick:function(){r||s&&s()},size:"large",block:e,children:o})}},84247:function(D,d,t){"use strict";t.r(d);var P=t(20310),u=t(53776),i=t(47416),E=t(16993),g=t(32544),c=t(43581),f=t(67294),_=t(85893),m,M=i.ZP.div(m||(m=(0,P.Z)([`

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
`])));d.default=function(){var a,o=(0,u.t)("@@initialState"),n=o.initialState,e=(0,g.m9)(),s=(0,c.YB)();return(0,_.jsxs)(M,{children:[(0,_.jsx)("img",{src:n==null||(a=n.currentUser)===null||a===void 0?void 0:a.referee_img_url,alt:""}),(0,_.jsx)("div",{className:"bottom",children:(0,_.jsx)(E.b,{text:s.formatMessage({id:"component.nft_car.copy_link"}),disabled:!1,onClick:function(){var r;e((n==null||(r=n.currentUser)===null||r===void 0?void 0:r.reg_url)||"")}})})]})}},32544:function(D,d,t){"use strict";t.d(d,{m9:function(){return f},XP:function(){return _},TW:function(){return m}});var P=t(34792),u=t(55026),i=t(67294),E=t(43581),g=t(29306),c=t.n(g),f=function(){var o=(0,E.YB)();return(0,i.useCallback)(function(n){var e=document.createElement("textarea");e.innerText=n,document.body.appendChild(e),e.select(),document.execCommand("copy"),u.default.success(o.formatMessage({id:"component.nft_car.copy_successfully"})),e.remove()},[])},_=function(){var o=(0,E.YB)();return(0,i.useCallback)(function(n){var e=new XMLHttpRequest;console.log(n),e.open("GET",n,!0),e.responseType="blob",e.onload=function(s){var l=new FileReader;l.onload=function(v){var O=v.target.result,p=document.createElement("a");p.download="\u9080\u8BF7\u7801.png",p.href=O,p.click()};var r=this.response;l.readAsDataURL(r)},e.send(),u.default.success(o.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},m=function(){return(0,i.useCallback)(function(o,n,e){var s=document.getElementById(o);c().toPng(s).then(function(l){c().toPng(s,{width:600,height:600,style:{".right":{display:"none"}}}).then(function(r){if(r){var v=document.createElement("a");v.download=n+".png",v.href=r,v.click()}e(!0)}).catch(function(r){e(!1),console.error("oops, something went wrong!",r)})})},[])};function M(a){var o=document.createElement("canvas");o.width=a.width,o.height=a.height;var n=o.getContext("2d");n.drawImage(a,0,0);var e=o.toDataURL("image/png");return e.replace(/^data:image\/(png|jpg);base64,/,"")}}}]);
