(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[507],{16993:function(M,s,t){"use strict";t.d(s,{b:function(){return e}});var p=t(57663),i=t(71577),l=t(20310),u=t(67294),c=t(47416),m=t(85893),g,a=(0,c.ZP)(i.Z)(g||(g=(0,l.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(r){var n=r.disabled;return n&&.5}),e=function(n){var f=n.text,o=n.block,v=o===void 0?!0:o,d=n.onClick,E=n.disabled,_=E===void 0?!1:E;return(0,m.jsx)(a,{type:"default",shape:"round",disabled:_,onClick:function(){_||d&&d()},size:"large",block:v,children:f})}},84247:function(M,s,t){"use strict";t.r(s);var p=t(20310),i=t(53776),l=t(47416),u=t(16993),c=t(32544),m=t(43581),g=t(67294),a=t(85893),e,r=l.ZP.div(e||(e=(0,p.Z)([`

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
`])));s.default=function(){var n,f=(0,i.t)("@@initialState"),o=f.initialState,v=(0,c.m)(),d=(0,m.YB)();return(0,a.jsxs)(r,{children:[(0,a.jsx)("img",{src:o==null||(n=o.currentUser)===null||n===void 0?void 0:n.referee_img_url,alt:""}),(0,a.jsx)("div",{className:"bottom",children:(0,a.jsx)(u.b,{text:d.formatMessage({id:"component.nft_car.copy_link"}),disabled:!1,onClick:function(){var _;v((o==null||(_=o.currentUser)===null||_===void 0?void 0:_.reg_url)||"")}})})]})}},32544:function(M,s,t){"use strict";t.d(s,{m:function(){return c},X:function(){return m}});var p=t(34792),i=t(55026),l=t(67294),u=t(43581),c=function(){var e=(0,u.YB)();return(0,l.useCallback)(function(r){var n=document.createElement("textarea");n.innerText=r,document.body.appendChild(n),n.select(),document.execCommand("copy"),i.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"})),n.remove()},[])},m=function(){var e=(0,u.YB)();return(0,l.useCallback)(function(r){var n=new XMLHttpRequest;console.log(r),n.open("GET",r,!0),n.responseType="blob",n.onload=function(f){var o=new FileReader;o.onload=function(d){var E=d.target.result,_=document.createElement("a");_.download="\u9080\u8BF7\u7801.png",_.href=E,_.click()};var v=this.response;o.readAsDataURL(v)},n.send(),i.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"}))},[])};function g(a){var e=document.createElement("canvas");e.width=a.width,e.height=a.height;var r=e.getContext("2d");r.drawImage(a,0,0);var n=e.toDataURL("image/png");return n.replace(/^data:image\/(png|jpg);base64,/,"")}}}]);
