(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[507],{16993:function(O,d,n){"use strict";n.d(d,{b:function(){return M}});var P=n(57663),u=n(71577),s=n(20310),E=n(67294),g=n(47416),c=n(85893),f,r=(0,g.ZP)(u.Z)(f||(f=(0,s.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(m){var o=m.disabled;return o&&.5}),M=function(o){var _=o.text,t=o.block,e=t===void 0?!0:t,i=o.onClick,l=o.disabled,a=l===void 0?!1:l;return(0,c.jsx)(r,{type:"default",shape:"round",disabled:a,onClick:function(){a||i&&i()},size:"large",block:e,children:_})}},84247:function(O,d,n){"use strict";n.r(d);var P=n(20310),u=n(53776),s=n(47416),E=n(16993),g=n(32544),c=n(43581),f=n(67294),r=n(85893),M,m=s.ZP.div(M||(M=(0,P.Z)([`

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
`])));d.default=function(){var o,_=(0,u.t)("@@initialState"),t=_.initialState,e=(0,g.m9)(),i=(0,c.YB)();return(0,r.jsxs)(m,{children:[(0,r.jsx)("img",{src:t==null||(o=t.currentUser)===null||o===void 0?void 0:o.referee_img_url,alt:""}),(0,r.jsx)("div",{className:"bottom",children:(0,r.jsx)(E.b,{text:i.formatMessage({id:"component.nft_car.copy_link"}),disabled:!1,onClick:function(){var a;e((t==null||(a=t.currentUser)===null||a===void 0?void 0:a.reg_url)||"")}})})]})}},32544:function(O,d,n){"use strict";n.d(d,{m9:function(){return f},XP:function(){return r},TW:function(){return m}});var P=n(34792),u=n(55026),s=n(67294),E=n(43581),g=n(29306),c=n.n(g),f=function(){var _=(0,E.YB)();return(0,s.useCallback)(function(t){var e=document.createElement("textarea");e.innerText=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),u.default.success(_.formatMessage({id:"component.nft_car.copy_successfully"})),e.remove()},[])},r=function(){var _=(0,E.YB)();return(0,s.useCallback)(function(t){var e=new XMLHttpRequest;console.log(t),e.open("GET",t,!0),e.responseType="blob",e.onload=function(i){var l=new FileReader;l.onload=function(v){var p=v.target.result,D=document.createElement("a");D.download="\u9080\u8BF7\u7801.png",D.href=p,D.click()};var a=this.response;l.readAsDataURL(a)},e.send(),u.default.success(_.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},M={quality:100,width:900,height:900},m=function(){return(0,s.useCallback)(function(_,t,e){var i=document.getElementById(_);c().toPng(i).then(function(l){c().toPng(i,{width:900,height:900,style:{".right":{display:"none"}}}).then(function(a){if(a){var v=document.createElement("a");v.download=t+".png",v.href=a,v.click()}e(!0)}).catch(function(a){e(!1),console.error("oops, something went wrong!",a)})})},[])}}}]);
