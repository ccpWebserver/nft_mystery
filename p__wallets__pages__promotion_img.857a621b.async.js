(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[507],{16993:function(D,u,n){"use strict";n.d(u,{b:function(){return m}});var M=n(57663),s=n(71577),l=n(20310),E=n(67294),v=n(47416),c=n(85893),g,r=(0,v.ZP)(s.Z)(g||(g=(0,l.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(d){var e=d.disabled;return e&&.5}),m=function(e){var a=e.text,t=e.block,_=t===void 0?!0:t,o=e.onClick,f=e.disabled,i=f===void 0?!1:f;return(0,c.jsx)(r,{type:"default",shape:"round",disabled:i,onClick:function(){i||o&&o()},size:"large",block:_,children:a})}},84247:function(D,u,n){"use strict";n.r(u);var M=n(20310),s=n(53776),l=n(47416),E=n(16993),v=n(32544),c=n(43581),g=n(67294),r=n(85893),m,d=l.ZP.div(m||(m=(0,M.Z)([`

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
`])));u.default=function(){var e,a=(0,s.t)("@@initialState"),t=a.initialState,_=(0,v.m9)(),o=(0,c.YB)();return(0,r.jsxs)(d,{children:[(0,r.jsx)("img",{src:t==null||(e=t.currentUser)===null||e===void 0?void 0:e.referee_img_url,alt:""}),(0,r.jsx)("div",{className:"bottom",children:(0,r.jsx)(E.b,{text:o.formatMessage({id:"component.nft_car.copy_link"}),disabled:!1,onClick:function(){var i;_((t==null||(i=t.currentUser)===null||i===void 0?void 0:i.reg_url)||"")}})})]})}},32544:function(D,u,n){"use strict";n.d(u,{m9:function(){return g},XP:function(){return r},TW:function(){return m}});var M=n(34792),s=n(55026),l=n(67294),E=n(43581),v=n(29306),c=n.n(v),g=function(){var e=(0,E.YB)();return(0,l.useCallback)(function(a){navigator.clipboard.writeText(a).then(function(){s.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"}))}).catch(function(t){s.default.error("\u672A\u77E5\u9519\u8BEF\u8BF7\u622A\u5C4F\u4FDD\u5B58\u5206\u4EAB\u56FE\u7247"),console.log("Something went wrong",t)})},[])},r=function(){var e=(0,E.YB)();return(0,l.useCallback)(function(a){var t=new XMLHttpRequest;console.log(a),t.open("GET",a,!0),t.responseType="blob",t.onload=function(_){var o=new FileReader;o.onload=function(i){var O=i.target.result,P=document.createElement("a");P.download="\u9080\u8BF7\u7801.png",P.href=O,P.click()};var f=this.response;o.readAsDataURL(f)},t.send(),s.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},m=function(){return(0,l.useCallback)(function(e,a,t){c().toPng(e).then(function(){c().toPng(e,{width:300,height:300,quality:1,style:{}}).then(function(_){if(_){var o=document.createElement("a");o.download=a+".png",o.href=_,o.click()}t(!0)}).catch(function(_){t(!1),console.error("oops, something went wrong!",_)})})},[])}}}]);
