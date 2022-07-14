(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[142],{51385:function(X,k){"use strict";var y;Object.defineProperty(k,"__esModule",{value:!0});var G=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],Z=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},N=function(e){return G[e]},M=function(e){for(var t=0;e!==0;)t++,e>>>=1;return t},I=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');y=e},L=function(){return y!==void 0},D=function(e){return y(e)};function B(e,t){return e(t={exports:{}},t.exports),t.exports}var A=B(function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(n){return n&&n.bit!==void 0&&n.bit>=0&&n.bit<4},t.from=function(n,o){if(t.isValid(n))return n;try{return function(a){if(typeof a!="string")throw new Error("Param is not a string");switch(a.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+a)}}(n)}catch(a){return o}}});A.L,A.M,A.Q,A.H,A.isValid;function C(){this.buffer=[],this.length=0}C.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var R=C;function _(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}_.prototype.set=function(e,t,n,o){var a=e*this.size+t;this.data[a]=n,o&&(this.reservedBit[a]=!0)},_.prototype.get=function(e,t){return this.data[e*this.size+t]},_.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},_.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var x=_,S=B(function(e,t){var n=Z;t.getRowColCoords=function(o){if(o===1)return[];for(var a=Math.floor(o/7)+2,i=n(o),d=i===145?26:2*Math.ceil((i-13)/(2*a-2)),r=[i-7],u=1;u<a-1;u++)r[u]=r[u-1]-d;return r.push(6),r.reverse()},t.getPositions=function(o){for(var a=[],i=t.getRowColCoords(o),d=i.length,r=0;r<d;r++)for(var u=0;u<d;u++)r===0&&u===0||r===0&&u===d-1||r===d-1&&u===0||a.push([i[r],i[u]]);return a}}),K=(S.getRowColCoords,S.getPositions,Z),z=function(e){var t=K(e);return[[0,0],[t-7,0],[0,t-7]]},b=B(function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var n=3,o=3,a=40,i=10;function d(r,u,s){switch(r){case t.Patterns.PATTERN000:return(u+s)%2==0;case t.Patterns.PATTERN001:return u%2==0;case t.Patterns.PATTERN010:return s%3==0;case t.Patterns.PATTERN011:return(u+s)%3==0;case t.Patterns.PATTERN100:return(Math.floor(u/2)+Math.floor(s/3))%2==0;case t.Patterns.PATTERN101:return u*s%2+u*s%3==0;case t.Patterns.PATTERN110:return(u*s%2+u*s%3)%2==0;case t.Patterns.PATTERN111:return(u*s%3+(u+s)%2)%2==0;default:throw new Error("bad maskPattern:"+r)}}t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){for(var u=r.size,s=0,c=0,f=0,g=null,l=null,p=0;p<u;p++){c=f=0,g=l=null;for(var m=0;m<u;m++){var v=r.get(p,m);v===g?c++:(c>=5&&(s+=n+(c-5)),g=v,c=1),(v=r.get(m,p))===l?f++:(f>=5&&(s+=n+(f-5)),l=v,f=1)}c>=5&&(s+=n+(c-5)),f>=5&&(s+=n+(f-5))}return s},t.getPenaltyN2=function(r){for(var u=r.size,s=0,c=0;c<u-1;c++)for(var f=0;f<u-1;f++){var g=r.get(c,f)+r.get(c,f+1)+r.get(c+1,f)+r.get(c+1,f+1);g!==4&&g!==0||s++}return s*o},t.getPenaltyN3=function(r){for(var u=r.size,s=0,c=0,f=0,g=0;g<u;g++){c=f=0;for(var l=0;l<u;l++)c=c<<1&2047|r.get(g,l),l>=10&&(c===1488||c===93)&&s++,f=f<<1&2047|r.get(l,g),l>=10&&(f===1488||f===93)&&s++}return s*a},t.getPenaltyN4=function(r){for(var u=0,s=r.data.length,c=0;c<s;c++)u+=r.data[c];return Math.abs(Math.ceil(100*u/s/5)-10)*i},t.applyMask=function(r,u){for(var s=u.size,c=0;c<s;c++)for(var f=0;f<s;f++)u.isReserved(f,c)||u.xor(f,c,d(r,f,c))},t.getBestMask=function(r,u){for(var s=Object.keys(t.Patterns).length,c=0,f=1/0,g=0;g<s;g++){u(g),t.applyMask(g,r);var l=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(g,r),l<f&&(f=l,c=g)}return c}}),j=(b.Patterns,b.isValid,b.getPenaltyN1,b.getPenaltyN2,b.getPenaltyN3,b.getPenaltyN4,b.applyMask,b.getBestMask,[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81]),T=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],mt=function(e,t){switch(t){case A.L:return j[4*(e-1)+0];case A.M:return j[4*(e-1)+1];case A.Q:return j[4*(e-1)+2];case A.H:return j[4*(e-1)+3];default:return}},st=function(e,t){switch(t){case A.L:return T[4*(e-1)+0];case A.M:return T[4*(e-1)+1];case A.Q:return T[4*(e-1)+2];case A.H:return T[4*(e-1)+3];default:return}},F=new Uint8Array(512),ut=new Uint8Array(256);(function(){for(var e=1,t=0;t<255;t++)F[t]=e,ut[e]=t,256&(e<<=1)&&(e^=285);for(t=255;t<512;t++)F[t]=F[t-255]})();var lt=function(e){return F[e]},tt=function(e,t){return e===0||t===0?0:F[ut[e]+ut[t]]},J=B(function(e,t){t.mul=function(n,o){for(var a=new Uint8Array(n.length+o.length-1),i=0;i<n.length;i++)for(var d=0;d<o.length;d++)a[i+d]^=tt(n[i],o[d]);return a},t.mod=function(n,o){for(var a=new Uint8Array(n);a.length-o.length>=0;){for(var i=a[0],d=0;d<o.length;d++)a[d]^=tt(o[d],i);for(var r=0;r<a.length&&a[r]===0;)r++;a=a.slice(r)}return a},t.generateECPolynomial=function(n){for(var o=new Uint8Array([1]),a=0;a<n;a++)o=t.mul(o,new Uint8Array([1,lt(a)]));return o}});J.mul,J.mod,J.generateECPolynomial;function dt(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}dt.prototype.initialize=function(e){this.degree=e,this.genPoly=J.generateECPolynomial(this.degree)},dt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");var t=new Uint8Array(e.length+this.degree);t.set(e);var n=J.mod(t,this.genPoly),o=this.degree-n.length;if(o>0){var a=new Uint8Array(this.degree);return a.set(n,o),a}return n};var Ct=dt,ct=function(e){return!isNaN(e)&&e>=1&&e<=40},ft="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",Bt="(?:(?![A-Z0-9 $%*+\\-./:]|"+(ft=ft.replace(/u/g,"\\u"))+`)(?:.|[\r
]))+`,It=new RegExp(ft,"g"),Rt=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),xt=new RegExp(Bt,"g"),Tt=new RegExp("[0-9]+","g"),Nt=new RegExp("[A-Z $%*+\\-./:]+","g"),Lt=new RegExp("^"+ft+"$"),Ut=new RegExp("^[0-9]+$"),bt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),q={KANJI:It,BYTE_KANJI:Rt,BYTE:xt,NUMERIC:Tt,ALPHANUMERIC:Nt,testKanji:function(e){return Lt.test(e)},testNumeric:function(e){return Ut.test(e)},testAlphanumeric:function(e){return bt.test(e)}},h=B(function(e,t){t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,o){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!ct(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?n.ccBits[0]:o<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return q.testNumeric(n)?t.NUMERIC:q.testAlphanumeric(n)?t.ALPHANUMERIC:q.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits},t.from=function(n,o){if(t.isValid(n))return n;try{return function(a){if(typeof a!="string")throw new Error("Param is not a string");switch(a.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+a)}}(n)}catch(a){return o}}}),Dt=(h.NUMERIC,h.ALPHANUMERIC,h.BYTE,h.KANJI,h.MIXED,h.getCharCountIndicator,h.getBestModeForData,h.isValid,{}.toString),Et=Array.isArray||function(e){return Dt.call(e)=="[object Array]"},et=B(function(e,t){var n=M(7973);function o(i,d){return h.getCharCountIndicator(i,d)+4}function a(i,d){var r=0;return i.forEach(function(u){var s=o(u.mode,d);r+=s+u.getBitsLength()}),r}t.from=function(i,d){return ct(i)?parseInt(i,10):d},t.getCapacity=function(i,d,r){if(!ct(i))throw new Error("Invalid QR Code version");r===void 0&&(r=h.BYTE);var u=8*(N(i)-st(i,d));if(r===h.MIXED)return u;var s=u-o(r,i);switch(r){case h.NUMERIC:return Math.floor(s/10*3);case h.ALPHANUMERIC:return Math.floor(s/11*2);case h.KANJI:return Math.floor(s/13);case h.BYTE:default:return Math.floor(s/8)}},t.getBestVersionForData=function(i,d){var r,u=A.from(d,A.M);if(Et(i)){if(i.length>1)return function(s,c){for(var f=1;f<=40;f++)if(a(s,f)<=t.getCapacity(f,c,h.MIXED))return f}(i,u);if(i.length===0)return 1;r=i[0]}else r=i;return function(s,c,f){for(var g=1;g<=40;g++)if(c<=t.getCapacity(g,f,s))return g}(r.mode,r.getLength(),u)},t.getEncodedBits=function(i){if(!ct(i)||i<7)throw new Error("Invalid QR Code version");for(var d=i<<12;M(d)-n>=0;)d^=7973<<M(d)-n;return i<<12|d}}),_t=(et.getCapacity,et.getBestVersionForData,et.getEncodedBits,M(1335)),Ot=function(e,t){for(var n=e.bit<<3|t,o=n<<10;M(o)-_t>=0;)o^=1335<<M(o)-_t;return 21522^(n<<10|o)};function nt(e){this.mode=h.NUMERIC,this.data=e.toString()}nt.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},nt.prototype.getLength=function(){return this.data.length},nt.prototype.getBitsLength=function(){return nt.getBitsLength(this.data.length)},nt.prototype.write=function(e){var t,n,o;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),o=parseInt(n,10),e.put(o,10);var a=this.data.length-t;a>0&&(n=this.data.substr(t),o=parseInt(n,10),e.put(o,3*a+1))};var At=nt,ht=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function rt(e){this.mode=h.ALPHANUMERIC,this.data=e}rt.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},rt.prototype.getLength=function(){return this.data.length},rt.prototype.getBitsLength=function(){return rt.getBitsLength(this.data.length)},rt.prototype.write=function(e){var t;for(t=0;t+2<=this.data.length;t+=2){var n=45*ht.indexOf(this.data[t]);n+=ht.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(ht.indexOf(this.data[t]),6)};var yt=rt;function ot(e){this.mode=h.BYTE,this.data=new Uint8Array(function(t){for(var n=[],o=t.length,a=0;a<o;a++){var i=t.charCodeAt(a);if(i>=55296&&i<=56319&&o>a+1){var d=t.charCodeAt(a+1);d>=56320&&d<=57343&&(i=1024*(i-55296)+d-56320+65536,a+=1)}i<128?n.push(i):i<2048?(n.push(i>>6|192),n.push(63&i|128)):i<55296||i>=57344&&i<65536?(n.push(i>>12|224),n.push(i>>6&63|128),n.push(63&i|128)):i>=65536&&i<=1114111?(n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(63&i|128)):n.push(239,191,189)}return new Uint8Array(n).buffer}(e))}ot.getBitsLength=function(e){return 8*e},ot.prototype.getLength=function(){return this.data.length},ot.prototype.getBitsLength=function(){return ot.getBitsLength(this.data.length)},ot.prototype.write=function(e){for(var t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var wt=ot;function at(e){this.mode=h.KANJI,this.data=e}at.getBitsLength=function(e){return 13*e},at.prototype.getLength=function(){return this.data.length},at.prototype.getBitsLength=function(){return at.getBitsLength(this.data.length)},at.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var n=D(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n-=49472}n=192*(n>>>8&255)+(255&n),e.put(n,13)}};var Mt=at,Zt=B(function(e){var t={single_source_shortest_paths:function(n,o,a){var i={},d={};d[o]=0;var r,u,s,c,f,g,l,p=t.PriorityQueue.make();for(p.push(o,0);!p.empty();)for(s in u=(r=p.pop()).value,c=r.cost,f=n[u]||{})f.hasOwnProperty(s)&&(g=c+f[s],l=d[s],(d[s]===void 0||l>g)&&(d[s]=g,p.push(s,g),i[s]=u));if(a!==void 0&&d[a]===void 0){var m=["Could not find a path from ",o," to ",a,"."].join("");throw new Error(m)}return i},extract_shortest_path_from_predecessor_list:function(n,o){for(var a=[],i=o;i;)a.push(i),n[i],i=n[i];return a.reverse(),a},find_path:function(n,o,a){var i=t.single_source_shortest_paths(n,o,a);return t.extract_shortest_path_from_predecessor_list(i,a)},PriorityQueue:{make:function(n){var o,a=t.PriorityQueue,i={};for(o in n=n||{},a)a.hasOwnProperty(o)&&(i[o]=a[o]);return i.queue=[],i.sorter=n.sorter||a.default_sorter,i},default_sorter:function(n,o){return n.cost-o.cost},push:function(n,o){var a={value:n,cost:o};this.queue.push(a),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t}),it=B(function(e,t){function n(r){return unescape(encodeURIComponent(r)).length}function o(r,u,s){for(var c,f=[];(c=r.exec(s))!==null;)f.push({data:c[0],index:c.index,mode:u,length:c[0].length});return f}function a(r){var u,s,c=o(q.NUMERIC,h.NUMERIC,r),f=o(q.ALPHANUMERIC,h.ALPHANUMERIC,r);return L()?(u=o(q.BYTE,h.BYTE,r),s=o(q.KANJI,h.KANJI,r)):(u=o(q.BYTE_KANJI,h.BYTE,r),s=[]),c.concat(f,u,s).sort(function(g,l){return g.index-l.index}).map(function(g){return{data:g.data,mode:g.mode,length:g.length}})}function i(r,u){switch(u){case h.NUMERIC:return At.getBitsLength(r);case h.ALPHANUMERIC:return yt.getBitsLength(r);case h.KANJI:return Mt.getBitsLength(r);case h.BYTE:return wt.getBitsLength(r)}}function d(r,u){var s,c=h.getBestModeForData(r);if((s=h.from(u,c))!==h.BYTE&&s.bit<c.bit)throw new Error('"'+r+'" cannot be encoded with mode '+h.toString(s)+`.
 Suggested mode is: `+h.toString(c));switch(s!==h.KANJI||L()||(s=h.BYTE),s){case h.NUMERIC:return new At(r);case h.ALPHANUMERIC:return new yt(r);case h.KANJI:return new Mt(r);case h.BYTE:return new wt(r)}}t.fromArray=function(r){return r.reduce(function(u,s){return typeof s=="string"?u.push(d(s,null)):s.data&&u.push(d(s.data,s.mode)),u},[])},t.fromString=function(r,u){for(var s=function(l,p){for(var m={},v={start:{}},w=["start"],E=0;E<l.length;E++){for(var P=l[E],$=[],H=0;H<P.length;H++){var O=P[H],W=""+E+H;$.push(W),m[W]={node:O,lastCount:0},v[W]={};for(var Y=0;Y<w.length;Y++){var U=w[Y];m[U]&&m[U].node.mode===O.mode?(v[U][W]=i(m[U].lastCount+O.length,O.mode)-i(m[U].lastCount,O.mode),m[U].lastCount+=O.length):(m[U]&&(m[U].lastCount=O.length),v[U][W]=i(O.length,O.mode)+4+h.getCharCountIndicator(O.mode,p))}}w=$}for(Y=0;Y<w.length;Y++)v[w[Y]].end=0;return{map:v,table:m}}(function(l){for(var p=[],m=0;m<l.length;m++){var v=l[m];switch(v.mode){case h.NUMERIC:p.push([v,{data:v.data,mode:h.ALPHANUMERIC,length:v.length},{data:v.data,mode:h.BYTE,length:v.length}]);break;case h.ALPHANUMERIC:p.push([v,{data:v.data,mode:h.BYTE,length:v.length}]);break;case h.KANJI:p.push([v,{data:v.data,mode:h.BYTE,length:n(v.data)}]);break;case h.BYTE:p.push([{data:v.data,mode:h.BYTE,length:n(v.data)}])}}return p}(a(r,L())),u),c=Zt.find_path(s.map,"start","end"),f=[],g=1;g<c.length-1;g++)f.push(s.table[c[g]].node);return t.fromArray(function(l){return l.reduce(function(p,m){var v=p.length-1>=0?p[p.length-1]:null;return v&&v.mode===m.mode?(p[p.length-1].data+=m.data,p):(p.push(m),p)},[])}(f))},t.rawSplit=function(r){return t.fromArray(a(r,L()))}});it.fromArray,it.fromString,it.rawSplit;function gt(e,t,n){var o,a,i=e.size,d=Ot(t,n);for(o=0;o<15;o++)a=(d>>o&1)==1,o<6?e.set(o,8,a,!0):o<8?e.set(o+1,8,a,!0):e.set(i-15+o,8,a,!0),o<8?e.set(8,i-o-1,a,!0):o<9?e.set(8,15-o-1+1,a,!0):e.set(8,15-o-1,a,!0);e.set(i-8,8,1,!0)}function St(e,t,n){var o=new R;n.forEach(function(r){o.put(r.mode.bit,4),o.put(r.getLength(),h.getCharCountIndicator(r.mode,e)),r.write(o)});var a=8*(N(e)-st(e,t));for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);for(var i=(a-o.getLengthInBits())/8,d=0;d<i;d++)o.put(d%2?17:236,8);return function(r,u,s){for(var c=N(u),f=st(u,s),g=c-f,l=mt(u,s),p=l-c%l,m=Math.floor(c/l),v=Math.floor(g/l),w=v+1,E=m-v,P=new Ct(E),$=0,H=new Array(l),O=new Array(l),W=0,Y=new Uint8Array(r.buffer),U=0;U<l;U++){var pt=U<p?v:w;H[U]=Y.slice($,$+pt),O[U]=P.encode(H[U]),$+=pt,W=Math.max(W,pt)}var Q,V,vt=new Uint8Array(c),Pt=0;for(Q=0;Q<W;Q++)for(V=0;V<l;V++)Q<H[V].length&&(vt[Pt++]=H[V][Q]);for(Q=0;Q<E;Q++)for(V=0;V<l;V++)vt[Pt++]=O[V][Q];return vt}(o,e,t)}function Kt(e,t,n,o){var a;if(Et(e))a=it.fromArray(e);else{if(typeof e!="string")throw new Error("Invalid data");var i=t;if(!i){var d=it.rawSplit(e);i=et.getBestVersionForData(d,n)}a=it.fromString(e,i||40)}var r=et.getBestVersionForData(a,n);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`)}else t=r;var u=St(t,n,a),s=Z(t),c=new x(s);return function(f,g){for(var l=f.size,p=z(g),m=0;m<p.length;m++)for(var v=p[m][0],w=p[m][1],E=-1;E<=7;E++)if(!(v+E<=-1||l<=v+E))for(var P=-1;P<=7;P++)w+P<=-1||l<=w+P||(E>=0&&E<=6&&(P===0||P===6)||P>=0&&P<=6&&(E===0||E===6)||E>=2&&E<=4&&P>=2&&P<=4?f.set(v+E,w+P,!0,!0):f.set(v+E,w+P,!1,!0))}(c,t),function(f){for(var g=f.size,l=8;l<g-8;l++){var p=l%2==0;f.set(l,6,p,!0),f.set(6,l,p,!0)}}(c),function(f,g){for(var l=S.getPositions(g),p=0;p<l.length;p++)for(var m=l[p][0],v=l[p][1],w=-2;w<=2;w++)for(var E=-2;E<=2;E++)w===-2||w===2||E===-2||E===2||w===0&&E===0?f.set(m+w,v+E,!0,!0):f.set(m+w,v+E,!1,!0)}(c,t),gt(c,n,0),t>=7&&function(f,g){for(var l,p,m,v=f.size,w=et.getEncodedBits(g),E=0;E<18;E++)l=Math.floor(E/3),p=E%3+v-8-3,m=(w>>E&1)==1,f.set(l,p,m,!0),f.set(p,l,m,!0)}(c,t),function(f,g){for(var l=f.size,p=-1,m=l-1,v=7,w=0,E=l-1;E>0;E-=2)for(E===6&&E--;;){for(var P=0;P<2;P++)if(!f.isReserved(m,E-P)){var $=!1;w<g.length&&($=(g[w]>>>v&1)==1),f.set(m,E-P,$),--v==-1&&(w++,v=7)}if((m+=p)<0||l<=m){m-=p,p=-p;break}}}(c,u),isNaN(o)&&(o=b.getBestMask(c,gt.bind(null,c,n))),b.applyMask(o,c),gt(c,n,o),{modules:c,version:t,errorCorrectionLevel:n,maskPattern:o,segments:a}}k.create=function(e,t){if(e===void 0||e==="")throw new Error("No input text");var n,o,a=A.M;return t!==void 0&&(a=A.from(t.errorCorrectionLevel,A.M),n=et.from(t.version),o=b.from(t.maskPattern),t.toSJISFunc&&I(t.toSJISFunc)),Kt(e,n,a,o)}},37973:function(X,k,y){const G=y(67294),Z=y(42187);X.exports=function(M){const I=Z(M.value,{backgroundColor:M.backgroundColor,color:M.color,margin:M.margin,size:M.size});return G.createElement("img",{height:M.size,src:"data:image/svg+xml,"+encodeURIComponent(I),width:M.size})}},42187:function(X,k,y){const G=y(51385);function Z(N,M,I){let L="",D=0,B=!1,A=0;for(let C=0;C<N.length;C++){const R=Math.floor(C%M),_=Math.floor(C/M);if(R===0&&(B=!0),!N[C]){D++;continue}A++,C>0&&R>0&&N[C-1]||(L+=B?`M${I+R},${I+.5+_}`:`m${D},0`,D=0,B=!1),R+1<M&&N[C+1]||(L+=`h${A}`,A=0)}return L}X.exports=function(M,I={}){const{size:L,data:D}=G.create(M).modules,B=I.margin||0,A=L+B*2,C=`viewBox="0 0 ${A} ${A}"`,R=I.size?` width="${I.size}" height="${I.size}"`:"",_=I.backgroundColor==="transparent"?"":`<path fill="${I.backgroundColor||"white"}" d="M0,0h${A}v${A}H0z"/>`,x=`<path stroke="${I.color||"black"}" d="${Z(D,L,B)}"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" ${C}${R} shape-rendering="crispEdges">${_}${x}</svg>`}},28872:function(X,k,y){"use strict";y.r(k);var G=y(2824),Z=y(20310),N=y(47416),M=y(37973),I=y.n(M),L=y(53776),D=y(28219),B=y(39903),A=y.n(B),C=y(67294),R=y(32544),_=y(85893),x,S=N.ZP.div(x||(x=(0,Z.Z)([`
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
`])));k.default=function(){var K=(0,L.t)("@@initialState"),z=K.initialState,b=(0,C.useState)(!1),j=(0,G.Z)(b,2),T=j[0],mt=j[1],st=(0,R.m9)(),F=(0,C.useMemo)(function(){var tt,J;return(T?z==null||(tt=z.currentUser)===null||tt===void 0?void 0:tt.ccp_addr:z==null||(J=z.currentUser)===null||J===void 0?void 0:J.usdr_trx_addr)||""},[T]),ut=(0,C.useMemo)(function(){return T?"CCP":"USDT"},[T]),lt=(0,C.useMemo)(function(){return T?"ERC20":"TRC20"},[T]);return(0,_.jsxs)(S,{children:[(0,_.jsxs)("div",{className:"top",children:[(0,_.jsx)("span",{children:ut}),(0,_.jsxs)("h3",{style:{color:T?"rgba(4, 131, 224, 1)":"red"},children:[lt," ",(0,_.jsx)("img",{src:A(),alt:""})]})]}),(0,_.jsx)("div",{className:"qrcode",children:(0,_.jsx)(I(),{value:F,size:160})}),(0,_.jsx)("h4",{className:"recharge_text",children:(0,_.jsx)(D._H,{id:"pages.myaccount.deposit_address"})}),(0,_.jsx)("h4",{className:"recharge_address",children:F}),(0,_.jsx)("div",{className:"copy",onClick:function(){st(F)},children:(0,_.jsx)(D._H,{id:"pages.myaccount.copy_address"})}),(0,_.jsx)("div",{className:"tip",children:T?(0,_.jsx)(D._H,{id:"pages.myaccount.deposit_tis"}):(0,_.jsx)(D._H,{id:"pages.myaccount.deposit_trc_tis"})})]})}},32544:function(X,k,y){"use strict";y.d(k,{m9:function(){return D},XP:function(){return B},TW:function(){return A}});var G=y(34792),Z=y(55026),N=y(67294),M=y(43581),I=y(29306),L=y.n(I),D=function(){var R=(0,M.YB)();return(0,N.useCallback)(function(_){var x=document.createElement("textarea");x.innerText=_,x.select(),document.execCommand("copy"),Z.default.success(R.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},B=function(){var R=(0,M.YB)();return(0,N.useCallback)(function(_){var x=new XMLHttpRequest;console.log(_),x.open("GET",_,!0),x.responseType="blob",x.onload=function(S){var K=new FileReader;K.onload=function(b){var j=b.target.result,T=document.createElement("a");T.download="\u9080\u8BF7\u7801.png",T.href=j,T.click()};var z=this.response;K.readAsDataURL(z)},x.send(),Z.default.success(R.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},A=function(){return(0,N.useCallback)(function(R,_,x){L().toPng(R).then(function(){L().toPng(R,{width:300,height:300,quality:1,style:{}}).then(function(S){if(S){var K=document.createElement("a");K.download=_+".png",K.href=S,K.click()}x(!0)}).catch(function(S){x(!1),console.error("oops, something went wrong!",S)})})},[])}},39903:function(X){X.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAEhQTFRFAAAAAAAAZmZmZ2dnaGhoZWVlZWVlZmZmZ2dnZmZmZ2dnZmZmZWVlZ2dnZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmiu9o1wAAABd0Uk5TAAEoKiw1On+BhJCRnJydttXg5ufx8/jId3H6AAAAVUlEQVQ4y+3TSQ6AIBQE0Y/ijCNg3/+mXqEWJkRDrd+qkzarfaIpLw7BLG1IzoLSheJyxTJgOZCR2lvagWuilDrgLin1BVx819kBnZ3QmR99vflfewDcswZAk95gUQAAAABJRU5ErkJggg=="}}]);
