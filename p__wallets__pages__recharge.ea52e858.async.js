(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[142],{51385:function(H,O){"use strict";var A;Object.defineProperty(O,"__esModule",{value:!0});var Y=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],D=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},R=function(e){return Y[e]},C=function(e){for(var t=0;e!==0;)t++,e>>>=1;return t},B=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');A=e},T=function(){return A!==void 0},N=function(e){return A(e)};function P(e,t){return e(t={exports:{}},t.exports),t.exports}var _=P(function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(n){return n&&n.bit!==void 0&&n.bit>=0&&n.bit<4},t.from=function(n,o){if(t.isValid(n))return n;try{return function(a){if(typeof a!="string")throw new Error("Param is not a string");switch(a.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+a)}}(n)}catch(a){return o}}});_.L,_.M,_.Q,_.H,_.isValid;function I(){this.buffer=[],this.length=0}I.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Z=I;function w(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}w.prototype.set=function(e,t,n,o){var a=e*this.size+t;this.data[a]=n,o&&(this.reservedBit[a]=!0)},w.prototype.get=function(e,t){return this.data[e*this.size+t]},w.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},w.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var q=w,at=P(function(e,t){var n=D;t.getRowColCoords=function(o){if(o===1)return[];for(var a=Math.floor(o/7)+2,i=n(o),d=i===145?26:2*Math.ceil((i-13)/(2*a-2)),r=[i-7],u=1;u<a-1;u++)r[u]=r[u-1]-d;return r.push(6),r.reverse()},t.getPositions=function(o){for(var a=[],i=t.getRowColCoords(o),d=i.length,r=0;r<d;r++)for(var u=0;u<d;u++)r===0&&u===0||r===0&&u===d-1||r===d-1&&u===0||a.push([i[r],i[u]]);return a}}),ft=(at.getRowColCoords,at.getPositions,D),W=function(e){var t=ft(e);return[[0,0],[t-7,0],[0,t-7]]},U=P(function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var n=3,o=3,a=40,i=10;function d(r,u,s){switch(r){case t.Patterns.PATTERN000:return(u+s)%2==0;case t.Patterns.PATTERN001:return u%2==0;case t.Patterns.PATTERN010:return s%3==0;case t.Patterns.PATTERN011:return(u+s)%3==0;case t.Patterns.PATTERN100:return(Math.floor(u/2)+Math.floor(s/3))%2==0;case t.Patterns.PATTERN101:return u*s%2+u*s%3==0;case t.Patterns.PATTERN110:return(u*s%2+u*s%3)%2==0;case t.Patterns.PATTERN111:return(u*s%3+(u+s)%2)%2==0;default:throw new Error("bad maskPattern:"+r)}}t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){for(var u=r.size,s=0,c=0,f=0,g=null,l=null,p=0;p<u;p++){c=f=0,g=l=null;for(var m=0;m<u;m++){var v=r.get(p,m);v===g?c++:(c>=5&&(s+=n+(c-5)),g=v,c=1),(v=r.get(m,p))===l?f++:(f>=5&&(s+=n+(f-5)),l=v,f=1)}c>=5&&(s+=n+(c-5)),f>=5&&(s+=n+(f-5))}return s},t.getPenaltyN2=function(r){for(var u=r.size,s=0,c=0;c<u-1;c++)for(var f=0;f<u-1;f++){var g=r.get(c,f)+r.get(c,f+1)+r.get(c+1,f)+r.get(c+1,f+1);g!==4&&g!==0||s++}return s*o},t.getPenaltyN3=function(r){for(var u=r.size,s=0,c=0,f=0,g=0;g<u;g++){c=f=0;for(var l=0;l<u;l++)c=c<<1&2047|r.get(g,l),l>=10&&(c===1488||c===93)&&s++,f=f<<1&2047|r.get(l,g),l>=10&&(f===1488||f===93)&&s++}return s*a},t.getPenaltyN4=function(r){for(var u=0,s=r.data.length,c=0;c<s;c++)u+=r.data[c];return Math.abs(Math.ceil(100*u/s/5)-10)*i},t.applyMask=function(r,u){for(var s=u.size,c=0;c<s;c++)for(var f=0;f<s;f++)u.isReserved(f,c)||u.xor(f,c,d(r,f,c))},t.getBestMask=function(r,u){for(var s=Object.keys(t.Patterns).length,c=0,f=1/0,g=0;g<s;g++){u(g),t.applyMask(g,r);var l=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(g,r),l<f&&(f=l,c=g)}return c}}),X=(U.Patterns,U.isValid,U.getPenaltyN1,U.getPenaltyN2,U.getPenaltyN3,U.getPenaltyN4,U.applyMask,U.getBestMask,[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81]),L=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],lt=function(e,t){switch(t){case _.L:return X[4*(e-1)+0];case _.M:return X[4*(e-1)+1];case _.Q:return X[4*(e-1)+2];case _.H:return X[4*(e-1)+3];default:return}},it=function(e,t){switch(t){case _.L:return L[4*(e-1)+0];case _.M:return L[4*(e-1)+1];case _.Q:return L[4*(e-1)+2];case _.H:return L[4*(e-1)+3];default:return}},S=new Uint8Array(512),st=new Uint8Array(256);(function(){for(var e=1,t=0;t<255;t++)S[t]=e,st[e]=t,256&(e<<=1)&&(e^=285);for(t=255;t<512;t++)S[t]=S[t-255]})();var dt=function(e){return S[e]},Q=function(e,t){return e===0||t===0?0:S[st[e]+st[t]]},K=P(function(e,t){t.mul=function(n,o){for(var a=new Uint8Array(n.length+o.length-1),i=0;i<n.length;i++)for(var d=0;d<o.length;d++)a[i+d]^=Q(n[i],o[d]);return a},t.mod=function(n,o){for(var a=new Uint8Array(n);a.length-o.length>=0;){for(var i=a[0],d=0;d<o.length;d++)a[d]^=Q(o[d],i);for(var r=0;r<a.length&&a[r]===0;)r++;a=a.slice(r)}return a},t.generateECPolynomial=function(n){for(var o=new Uint8Array([1]),a=0;a<n;a++)o=t.mul(o,new Uint8Array([1,dt(a)]));return o}});K.mul,K.mod,K.generateECPolynomial;function ht(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ht.prototype.initialize=function(e){this.degree=e,this.genPoly=K.generateECPolynomial(this.degree)},ht.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");var t=new Uint8Array(e.length+this.degree);t.set(e);var n=K.mod(t,this.genPoly),o=this.degree-n.length;if(o>0){var a=new Uint8Array(this.degree);return a.set(n,o),a}return n};var Pt=ht,ut=function(e){return!isNaN(e)&&e>=1&&e<=40},ct="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",Bt="(?:(?![A-Z0-9 $%*+\\-./:]|"+(ct=ct.replace(/u/g,"\\u"))+`)(?:.|[\r
]))+`,It=new RegExp(ct,"g"),xt=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Rt=new RegExp(Bt,"g"),Tt=new RegExp("[0-9]+","g"),Nt=new RegExp("[A-Z $%*+\\-./:]+","g"),Lt=new RegExp("^"+ct+"$"),Ut=new RegExp("^[0-9]+$"),bt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),V={KANJI:It,BYTE_KANJI:xt,BYTE:Rt,NUMERIC:Tt,ALPHANUMERIC:Nt,testKanji:function(e){return Lt.test(e)},testNumeric:function(e){return Ut.test(e)},testAlphanumeric:function(e){return bt.test(e)}},h=P(function(e,t){t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,o){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!ut(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?n.ccBits[0]:o<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return V.testNumeric(n)?t.NUMERIC:V.testAlphanumeric(n)?t.ALPHANUMERIC:V.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits},t.from=function(n,o){if(t.isValid(n))return n;try{return function(a){if(typeof a!="string")throw new Error("Param is not a string");switch(a.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+a)}}(n)}catch(a){return o}}}),Dt=(h.NUMERIC,h.ALPHANUMERIC,h.BYTE,h.KANJI,h.MIXED,h.getCharCountIndicator,h.getBestModeForData,h.isValid,{}.toString),Et=Array.isArray||function(e){return Dt.call(e)=="[object Array]"},G=P(function(e,t){var n=C(7973);function o(i,d){return h.getCharCountIndicator(i,d)+4}function a(i,d){var r=0;return i.forEach(function(u){var s=o(u.mode,d);r+=s+u.getBitsLength()}),r}t.from=function(i,d){return ut(i)?parseInt(i,10):d},t.getCapacity=function(i,d,r){if(!ut(i))throw new Error("Invalid QR Code version");r===void 0&&(r=h.BYTE);var u=8*(R(i)-it(i,d));if(r===h.MIXED)return u;var s=u-o(r,i);switch(r){case h.NUMERIC:return Math.floor(s/10*3);case h.ALPHANUMERIC:return Math.floor(s/11*2);case h.KANJI:return Math.floor(s/13);case h.BYTE:default:return Math.floor(s/8)}},t.getBestVersionForData=function(i,d){var r,u=_.from(d,_.M);if(Et(i)){if(i.length>1)return function(s,c){for(var f=1;f<=40;f++)if(a(s,f)<=t.getCapacity(f,c,h.MIXED))return f}(i,u);if(i.length===0)return 1;r=i[0]}else r=i;return function(s,c,f){for(var g=1;g<=40;g++)if(c<=t.getCapacity(g,f,s))return g}(r.mode,r.getLength(),u)},t.getEncodedBits=function(i){if(!ut(i)||i<7)throw new Error("Invalid QR Code version");for(var d=i<<12;C(d)-n>=0;)d^=7973<<C(d)-n;return i<<12|d}}),_t=(G.getCapacity,G.getBestVersionForData,G.getEncodedBits,C(1335)),Zt=function(e,t){for(var n=e.bit<<3|t,o=n<<10;C(o)-_t>=0;)o^=1335<<C(o)-_t;return 21522^(n<<10|o)};function tt(e){this.mode=h.NUMERIC,this.data=e.toString()}tt.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},tt.prototype.getLength=function(){return this.data.length},tt.prototype.getBitsLength=function(){return tt.getBitsLength(this.data.length)},tt.prototype.write=function(e){var t,n,o;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),o=parseInt(n,10),e.put(o,10);var a=this.data.length-t;a>0&&(n=this.data.substr(t),o=parseInt(n,10),e.put(o,3*a+1))};var At=tt,gt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function et(e){this.mode=h.ALPHANUMERIC,this.data=e}et.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},et.prototype.getLength=function(){return this.data.length},et.prototype.getBitsLength=function(){return et.getBitsLength(this.data.length)},et.prototype.write=function(e){var t;for(t=0;t+2<=this.data.length;t+=2){var n=45*gt.indexOf(this.data[t]);n+=gt.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(gt.indexOf(this.data[t]),6)};var yt=et;function nt(e){this.mode=h.BYTE,this.data=new Uint8Array(function(t){for(var n=[],o=t.length,a=0;a<o;a++){var i=t.charCodeAt(a);if(i>=55296&&i<=56319&&o>a+1){var d=t.charCodeAt(a+1);d>=56320&&d<=57343&&(i=1024*(i-55296)+d-56320+65536,a+=1)}i<128?n.push(i):i<2048?(n.push(i>>6|192),n.push(63&i|128)):i<55296||i>=57344&&i<65536?(n.push(i>>12|224),n.push(i>>6&63|128),n.push(63&i|128)):i>=65536&&i<=1114111?(n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(63&i|128)):n.push(239,191,189)}return new Uint8Array(n).buffer}(e))}nt.getBitsLength=function(e){return 8*e},nt.prototype.getLength=function(){return this.data.length},nt.prototype.getBitsLength=function(){return nt.getBitsLength(this.data.length)},nt.prototype.write=function(e){for(var t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var wt=nt;function rt(e){this.mode=h.KANJI,this.data=e}rt.getBitsLength=function(e){return 13*e},rt.prototype.getLength=function(){return this.data.length},rt.prototype.getBitsLength=function(){return rt.getBitsLength(this.data.length)},rt.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var n=N(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n-=49472}n=192*(n>>>8&255)+(255&n),e.put(n,13)}};var Ct=rt,Ot=P(function(e){var t={single_source_shortest_paths:function(n,o,a){var i={},d={};d[o]=0;var r,u,s,c,f,g,l,p=t.PriorityQueue.make();for(p.push(o,0);!p.empty();)for(s in u=(r=p.pop()).value,c=r.cost,f=n[u]||{})f.hasOwnProperty(s)&&(g=c+f[s],l=d[s],(d[s]===void 0||l>g)&&(d[s]=g,p.push(s,g),i[s]=u));if(a!==void 0&&d[a]===void 0){var m=["Could not find a path from ",o," to ",a,"."].join("");throw new Error(m)}return i},extract_shortest_path_from_predecessor_list:function(n,o){for(var a=[],i=o;i;)a.push(i),n[i],i=n[i];return a.reverse(),a},find_path:function(n,o,a){var i=t.single_source_shortest_paths(n,o,a);return t.extract_shortest_path_from_predecessor_list(i,a)},PriorityQueue:{make:function(n){var o,a=t.PriorityQueue,i={};for(o in n=n||{},a)a.hasOwnProperty(o)&&(i[o]=a[o]);return i.queue=[],i.sorter=n.sorter||a.default_sorter,i},default_sorter:function(n,o){return n.cost-o.cost},push:function(n,o){var a={value:n,cost:o};this.queue.push(a),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t}),ot=P(function(e,t){function n(r){return unescape(encodeURIComponent(r)).length}function o(r,u,s){for(var c,f=[];(c=r.exec(s))!==null;)f.push({data:c[0],index:c.index,mode:u,length:c[0].length});return f}function a(r){var u,s,c=o(V.NUMERIC,h.NUMERIC,r),f=o(V.ALPHANUMERIC,h.ALPHANUMERIC,r);return T()?(u=o(V.BYTE,h.BYTE,r),s=o(V.KANJI,h.KANJI,r)):(u=o(V.BYTE_KANJI,h.BYTE,r),s=[]),c.concat(f,u,s).sort(function(g,l){return g.index-l.index}).map(function(g){return{data:g.data,mode:g.mode,length:g.length}})}function i(r,u){switch(u){case h.NUMERIC:return At.getBitsLength(r);case h.ALPHANUMERIC:return yt.getBitsLength(r);case h.KANJI:return Ct.getBitsLength(r);case h.BYTE:return wt.getBitsLength(r)}}function d(r,u){var s,c=h.getBestModeForData(r);if((s=h.from(u,c))!==h.BYTE&&s.bit<c.bit)throw new Error('"'+r+'" cannot be encoded with mode '+h.toString(s)+`.
 Suggested mode is: `+h.toString(c));switch(s!==h.KANJI||T()||(s=h.BYTE),s){case h.NUMERIC:return new At(r);case h.ALPHANUMERIC:return new yt(r);case h.KANJI:return new Ct(r);case h.BYTE:return new wt(r)}}t.fromArray=function(r){return r.reduce(function(u,s){return typeof s=="string"?u.push(d(s,null)):s.data&&u.push(d(s.data,s.mode)),u},[])},t.fromString=function(r,u){for(var s=function(l,p){for(var m={},v={start:{}},y=["start"],E=0;E<l.length;E++){for(var M=l[E],z=[],k=0;k<M.length;k++){var b=M[k],j=""+E+k;z.push(j),m[j]={node:b,lastCount:0},v[j]={};for(var F=0;F<y.length;F++){var x=y[F];m[x]&&m[x].node.mode===b.mode?(v[x][j]=i(m[x].lastCount+b.length,b.mode)-i(m[x].lastCount,b.mode),m[x].lastCount+=b.length):(m[x]&&(m[x].lastCount=b.length),v[x][j]=i(b.length,b.mode)+4+h.getCharCountIndicator(b.mode,p))}}y=z}for(F=0;F<y.length;F++)v[y[F]].end=0;return{map:v,table:m}}(function(l){for(var p=[],m=0;m<l.length;m++){var v=l[m];switch(v.mode){case h.NUMERIC:p.push([v,{data:v.data,mode:h.ALPHANUMERIC,length:v.length},{data:v.data,mode:h.BYTE,length:v.length}]);break;case h.ALPHANUMERIC:p.push([v,{data:v.data,mode:h.BYTE,length:v.length}]);break;case h.KANJI:p.push([v,{data:v.data,mode:h.BYTE,length:n(v.data)}]);break;case h.BYTE:p.push([{data:v.data,mode:h.BYTE,length:n(v.data)}])}}return p}(a(r,T())),u),c=Ot.find_path(s.map,"start","end"),f=[],g=1;g<c.length-1;g++)f.push(s.table[c[g]].node);return t.fromArray(function(l){return l.reduce(function(p,m){var v=p.length-1>=0?p[p.length-1]:null;return v&&v.mode===m.mode?(p[p.length-1].data+=m.data,p):(p.push(m),p)},[])}(f))},t.rawSplit=function(r){return t.fromArray(a(r,T()))}});ot.fromArray,ot.fromString,ot.rawSplit;function pt(e,t,n){var o,a,i=e.size,d=Zt(t,n);for(o=0;o<15;o++)a=(d>>o&1)==1,o<6?e.set(o,8,a,!0):o<8?e.set(o+1,8,a,!0):e.set(i-15+o,8,a,!0),o<8?e.set(8,i-o-1,a,!0):o<9?e.set(8,15-o-1+1,a,!0):e.set(8,15-o-1,a,!0);e.set(i-8,8,1,!0)}function St(e,t,n){var o=new Z;n.forEach(function(r){o.put(r.mode.bit,4),o.put(r.getLength(),h.getCharCountIndicator(r.mode,e)),r.write(o)});var a=8*(R(e)-it(e,t));for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);for(var i=(a-o.getLengthInBits())/8,d=0;d<i;d++)o.put(d%2?17:236,8);return function(r,u,s){for(var c=R(u),f=it(u,s),g=c-f,l=lt(u,s),p=l-c%l,m=Math.floor(c/l),v=Math.floor(g/l),y=v+1,E=m-v,M=new Pt(E),z=0,k=new Array(l),b=new Array(l),j=0,F=new Uint8Array(r.buffer),x=0;x<l;x++){var vt=x<p?v:y;k[x]=F.slice(z,z+vt),b[x]=M.encode(k[x]),z+=vt,j=Math.max(j,vt)}var J,$,mt=new Uint8Array(c),Mt=0;for(J=0;J<j;J++)for($=0;$<l;$++)J<k[$].length&&(mt[Mt++]=k[$][J]);for(J=0;J<E;J++)for($=0;$<l;$++)mt[Mt++]=b[$][J];return mt}(o,e,t)}function Kt(e,t,n,o){var a;if(Et(e))a=ot.fromArray(e);else{if(typeof e!="string")throw new Error("Invalid data");var i=t;if(!i){var d=ot.rawSplit(e);i=G.getBestVersionForData(d,n)}a=ot.fromString(e,i||40)}var r=G.getBestVersionForData(a,n);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`)}else t=r;var u=St(t,n,a),s=D(t),c=new q(s);return function(f,g){for(var l=f.size,p=W(g),m=0;m<p.length;m++)for(var v=p[m][0],y=p[m][1],E=-1;E<=7;E++)if(!(v+E<=-1||l<=v+E))for(var M=-1;M<=7;M++)y+M<=-1||l<=y+M||(E>=0&&E<=6&&(M===0||M===6)||M>=0&&M<=6&&(E===0||E===6)||E>=2&&E<=4&&M>=2&&M<=4?f.set(v+E,y+M,!0,!0):f.set(v+E,y+M,!1,!0))}(c,t),function(f){for(var g=f.size,l=8;l<g-8;l++){var p=l%2==0;f.set(l,6,p,!0),f.set(6,l,p,!0)}}(c),function(f,g){for(var l=at.getPositions(g),p=0;p<l.length;p++)for(var m=l[p][0],v=l[p][1],y=-2;y<=2;y++)for(var E=-2;E<=2;E++)y===-2||y===2||E===-2||E===2||y===0&&E===0?f.set(m+y,v+E,!0,!0):f.set(m+y,v+E,!1,!0)}(c,t),pt(c,n,0),t>=7&&function(f,g){for(var l,p,m,v=f.size,y=G.getEncodedBits(g),E=0;E<18;E++)l=Math.floor(E/3),p=E%3+v-8-3,m=(y>>E&1)==1,f.set(l,p,m,!0),f.set(p,l,m,!0)}(c,t),function(f,g){for(var l=f.size,p=-1,m=l-1,v=7,y=0,E=l-1;E>0;E-=2)for(E===6&&E--;;){for(var M=0;M<2;M++)if(!f.isReserved(m,E-M)){var z=!1;y<g.length&&(z=(g[y]>>>v&1)==1),f.set(m,E-M,z),--v==-1&&(y++,v=7)}if((m+=p)<0||l<=m){m-=p,p=-p;break}}}(c,u),isNaN(o)&&(o=U.getBestMask(c,pt.bind(null,c,n))),U.applyMask(o,c),pt(c,n,o),{modules:c,version:t,errorCorrectionLevel:n,maskPattern:o,segments:a}}O.create=function(e,t){if(e===void 0||e==="")throw new Error("No input text");var n,o,a=_.M;return t!==void 0&&(a=_.from(t.errorCorrectionLevel,_.M),n=G.from(t.version),o=U.from(t.maskPattern),t.toSJISFunc&&B(t.toSJISFunc)),Kt(e,n,a,o)}},37973:function(H,O,A){const Y=A(67294),D=A(42187);H.exports=function(C){const B=D(C.value,{backgroundColor:C.backgroundColor,color:C.color,margin:C.margin,size:C.size});return Y.createElement("img",{height:C.size,src:"data:image/svg+xml,"+encodeURIComponent(B),width:C.size})}},42187:function(H,O,A){const Y=A(51385);function D(R,C,B){let T="",N=0,P=!1,_=0;for(let I=0;I<R.length;I++){const Z=Math.floor(I%C),w=Math.floor(I/C);if(Z===0&&(P=!0),!R[I]){N++;continue}_++,I>0&&Z>0&&R[I-1]||(T+=P?`M${B+Z},${B+.5+w}`:`m${N},0`,N=0,P=!1),Z+1<C&&R[I+1]||(T+=`h${_}`,_=0)}return T}H.exports=function(C,B={}){const{size:T,data:N}=Y.create(C).modules,P=B.margin||0,_=T+P*2,I=`viewBox="0 0 ${_} ${_}"`,Z=B.size?` width="${B.size}" height="${B.size}"`:"",w=B.backgroundColor==="transparent"?"":`<path fill="${B.backgroundColor||"white"}" d="M0,0h${_}v${_}H0z"/>`,q=`<path stroke="${B.color||"black"}" d="${D(N,T,P)}"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" ${I}${Z} shape-rendering="crispEdges">${w}${q}</svg>`}},28872:function(H,O,A){"use strict";A.r(O);var Y=A(2824),D=A(20310),R=A(47416),C=A(37973),B=A.n(C),T=A(53776),N=A(53190),P=A(39903),_=A.n(P),I=A(67294),Z=A(32544),w=A(85893),q,at=R.ZP.div(q||(q=(0,D.Z)([`
  padding: 3%;
  text-align: center;

  .top {
    display: flex;
    font-size: 15px;
    font-weight: 400;
    padding: 10px;
    box-sizing: border-box;
    color: #333333;
    line-height: 20px;
    background-color: rgba(246, 248, 250, 1);
    justify-content: space-between;

    span {

    }

    h3 {
      margin-bottom: 0;
      color: rgba(4, 131, 224, 1);
      font-size: 13px;
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 20px;
      }
    }
  }

  .qrcode {
    display: flex;
    justify-content: center;
    padding: 30px 0;
  }

  .recharge_text {
    font-size: 12px;
    font-weight: 500;
    color: #B4B4B4;
    line-height: 20px;
    text-align: center;
  }

  .recharge_address {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 20px;
    margin: 20px 0;
  }

  .copy {
    background-color: rgba(244, 245, 251, 1);
    padding: 5px 20px;
    display: inline-block;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }

  .tip {
    text-align: start;
    font-size: 12px;
    margin-top: 20px;
    font-weight: 400;
    padding-top: 20px;
    border-top: 1px solid rgba(241, 239, 247, 1);
    color: #999999;
    line-height: 22px;
  }
`])));O.default=function(){var ft=(0,T.t)("@@initialState"),W=ft.initialState,U=(0,I.useState)(!1),X=(0,Y.Z)(U,2),L=X[0],lt=X[1],it=(0,Z.m)(),S=(0,I.useMemo)(function(){var Q,K;return(L?W==null||(Q=W.currentUser)===null||Q===void 0?void 0:Q.ccp_addr:W==null||(K=W.currentUser)===null||K===void 0?void 0:K.usdr_trx_addr)||""},[L]),st=(0,I.useMemo)(function(){return L?"CCP":"USDT"},[L]),dt=(0,I.useMemo)(function(){return L?"ERC20":"TRC20"},[L]);return(0,w.jsxs)(at,{children:[(0,w.jsxs)("div",{className:"top",onClick:function(){return lt(!L)},children:[(0,w.jsx)("span",{children:st}),(0,w.jsxs)("h3",{style:{color:L?"rgba(4, 131, 224, 1)":"red"},children:[dt," ",(0,w.jsx)("img",{src:_(),alt:""})]})]}),(0,w.jsx)("div",{className:"qrcode",children:(0,w.jsx)(B(),{value:S,size:160})}),(0,w.jsx)("h4",{className:"recharge_text",children:(0,w.jsx)(N._H,{id:"pages.myaccount.deposit_address"})}),(0,w.jsx)("h4",{className:"recharge_address",children:S}),(0,w.jsx)("div",{className:"copy",onClick:function(){it(S)},children:(0,w.jsx)(N._H,{id:"pages.myaccount.copy_address"})}),(0,w.jsx)("div",{className:"tip",children:L?(0,w.jsx)(N._H,{id:"pages.myaccount.deposit_tis"}):(0,w.jsx)(N._H,{id:"pages.myaccount.deposit_trc_tis"})})]})}},32544:function(H,O,A){"use strict";A.d(O,{m:function(){return B}});var Y=A(34792),D=A(55026),R=A(67294),C=A(43581),B=function(){var N=(0,C.YB)();return(0,R.useCallback)(function(P){var _=document.createElement("textarea");_.innerText=P,document.body.appendChild(_),_.select(),document.execCommand("copy"),D.default.success(N.formatMessage({id:"component.nft_car.copy_successfully"})),_.remove()},[])}},39903:function(H){H.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAEhQTFRFAAAAAAAAZmZmZ2dnaGhoZWVlZWVlZmZmZ2dnZmZmZ2dnZmZmZWVlZ2dnZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmiu9o1wAAABd0Uk5TAAEoKiw1On+BhJCRnJydttXg5ufx8/jId3H6AAAAVUlEQVQ4y+3TSQ6AIBQE0Y/ijCNg3/+mXqEWJkRDrd+qkzarfaIpLw7BLG1IzoLSheJyxTJgOZCR2lvagWuilDrgLin1BVx819kBnZ3QmR99vflfewDcswZAk95gUQAAAABJRU5ErkJggg=="}}]);
