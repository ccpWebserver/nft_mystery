(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[507],{16993:function(D,d,n){"use strict";n.d(d,{b:function(){return m}});var M=n(57663),u=n(71577),s=n(20310),E=n(67294),v=n(47416),c=n(85893),g,i=(0,v.ZP)(u.Z)(g||(g=(0,s.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(l){var e=l.disabled;return e&&.5}),m=function(e){var a=e.text,t=e.block,_=t===void 0?!0:t,o=e.onClick,f=e.disabled,r=f===void 0?!1:f;return(0,c.jsx)(i,{type:"default",shape:"round",disabled:r,onClick:function(){r||o&&o()},size:"large",block:_,children:a})}},84247:function(D,d,n){"use strict";n.r(d);var M=n(20310),u=n(53776),s=n(47416),E=n(16993),v=n(32544),c=n(43581),g=n(67294),i=n(85893),m,l=s.ZP.div(m||(m=(0,M.Z)([`

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
`])));d.default=function(){var e,a=(0,u.t)("@@initialState"),t=a.initialState,_=(0,v.m9)(),o=(0,c.YB)();return(0,i.jsxs)(l,{children:[(0,i.jsx)("img",{src:t==null||(e=t.currentUser)===null||e===void 0?void 0:e.referee_img_url,alt:""}),(0,i.jsx)("div",{className:"bottom",children:(0,i.jsx)(E.b,{text:o.formatMessage({id:"component.nft_car.copy_link"}),disabled:!1,onClick:function(){var r;_((t==null||(r=t.currentUser)===null||r===void 0?void 0:r.reg_url)||"")}})})]})}},32544:function(D,d,n){"use strict";n.d(d,{m9:function(){return g},XP:function(){return i},TW:function(){return m}});var M=n(34792),u=n(55026),s=n(67294),E=n(43581),v=n(29306),c=n.n(v),g=function(){var e=(0,E.YB)();return(0,s.useCallback)(function(a){navigator.clipboard.writeText(a).then(function(){console.log("Text copied to clipboard...")}).catch(function(t){console.log("Something went wrong",t)}),u.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},i=function(){var e=(0,E.YB)();return(0,s.useCallback)(function(a){var t=new XMLHttpRequest;console.log(a),t.open("GET",a,!0),t.responseType="blob",t.onload=function(_){var o=new FileReader;o.onload=function(r){var O=r.target.result,P=document.createElement("a");P.download="\u9080\u8BF7\u7801.png",P.href=O,P.click()};var f=this.response;o.readAsDataURL(f)},t.send(),u.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},m=function(){return(0,s.useCallback)(function(e,a,t){c().toPng(e).then(function(){c().toPng(e,{width:300,height:300,quality:1,style:{}}).then(function(_){if(_){var o=document.createElement("a");o.download=a+".png",o.href=_,o.click()}t(!0)}).catch(function(_){t(!1),console.error("oops, something went wrong!",_)})})},[])}}}]);
