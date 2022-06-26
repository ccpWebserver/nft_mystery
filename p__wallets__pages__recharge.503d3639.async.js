(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[142],{51385:function(V,k){"use strict";var y;Object.defineProperty(k,"__esModule",{value:!0});var X=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],K=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},N=function(e){return X[e]},M=function(e){for(var t=0;e!==0;)t++,e>>>=1;return t},x=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');y=e},L=function(){return y!==void 0},O=function(e){return y(e)};function I(e,t){return e(t={exports:{}},t.exports),t.exports}var A=I(function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(n){return n&&n.bit!==void 0&&n.bit>=0&&n.bit<4},t.from=function(n,a){if(t.isValid(n))return n;try{return function(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+o)}}(n)}catch(o){return a}}});A.L,A.M,A.Q,A.H,A.isValid;function R(){this.buffer=[],this.length=0}R.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var n=0;n<t;n++)this.putBit((e>>>t-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var T=R;function _(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}_.prototype.set=function(e,t,n,a){var o=e*this.size+t;this.data[o]=n,a&&(this.reservedBit[o]=!0)},_.prototype.get=function(e,t){return this.data[e*this.size+t]},_.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},_.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var b=_,P=I(function(e,t){var n=K;t.getRowColCoords=function(a){if(a===1)return[];for(var o=Math.floor(a/7)+2,i=n(a),d=i===145?26:2*Math.ceil((i-13)/(2*o-2)),r=[i-7],u=1;u<o-1;u++)r[u]=r[u-1]-d;return r.push(6),r.reverse()},t.getPositions=function(a){for(var o=[],i=t.getRowColCoords(a),d=i.length,r=0;r<d;r++)for(var u=0;u<d;u++)r===0&&u===0||r===0&&u===d-1||r===d-1&&u===0||o.push([i[r],i[u]]);return o}}),q=(P.getRowColCoords,P.getPositions,K),z=function(e){var t=q(e);return[[0,0],[t-7,0],[0,t-7]]},B=I(function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var n=3,a=3,o=40,i=10;function d(r,u,s){switch(r){case t.Patterns.PATTERN000:return(u+s)%2==0;case t.Patterns.PATTERN001:return u%2==0;case t.Patterns.PATTERN010:return s%3==0;case t.Patterns.PATTERN011:return(u+s)%3==0;case t.Patterns.PATTERN100:return(Math.floor(u/2)+Math.floor(s/3))%2==0;case t.Patterns.PATTERN101:return u*s%2+u*s%3==0;case t.Patterns.PATTERN110:return(u*s%2+u*s%3)%2==0;case t.Patterns.PATTERN111:return(u*s%3+(u+s)%2)%2==0;default:throw new Error("bad maskPattern:"+r)}}t.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},t.from=function(r){return t.isValid(r)?parseInt(r,10):void 0},t.getPenaltyN1=function(r){for(var u=r.size,s=0,c=0,f=0,g=null,l=null,p=0;p<u;p++){c=f=0,g=l=null;for(var m=0;m<u;m++){var v=r.get(p,m);v===g?c++:(c>=5&&(s+=n+(c-5)),g=v,c=1),(v=r.get(m,p))===l?f++:(f>=5&&(s+=n+(f-5)),l=v,f=1)}c>=5&&(s+=n+(c-5)),f>=5&&(s+=n+(f-5))}return s},t.getPenaltyN2=function(r){for(var u=r.size,s=0,c=0;c<u-1;c++)for(var f=0;f<u-1;f++){var g=r.get(c,f)+r.get(c,f+1)+r.get(c+1,f)+r.get(c+1,f+1);g!==4&&g!==0||s++}return s*a},t.getPenaltyN3=function(r){for(var u=r.size,s=0,c=0,f=0,g=0;g<u;g++){c=f=0;for(var l=0;l<u;l++)c=c<<1&2047|r.get(g,l),l>=10&&(c===1488||c===93)&&s++,f=f<<1&2047|r.get(l,g),l>=10&&(f===1488||f===93)&&s++}return s*o},t.getPenaltyN4=function(r){for(var u=0,s=r.data.length,c=0;c<s;c++)u+=r.data[c];return Math.abs(Math.ceil(100*u/s/5)-10)*i},t.applyMask=function(r,u){for(var s=u.size,c=0;c<s;c++)for(var f=0;f<s;f++)u.isReserved(f,c)||u.xor(f,c,d(r,f,c))},t.getBestMask=function(r,u){for(var s=Object.keys(t.Patterns).length,c=0,f=1/0,g=0;g<s;g++){u(g),t.applyMask(g,r);var l=t.getPenaltyN1(r)+t.getPenaltyN2(r)+t.getPenaltyN3(r)+t.getPenaltyN4(r);t.applyMask(g,r),l<f&&(f=l,c=g)}return c}}),Z=(B.Patterns,B.isValid,B.getPenaltyN1,B.getPenaltyN2,B.getPenaltyN3,B.getPenaltyN4,B.applyMask,B.getBestMask,[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81]),D=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430],nt=function(e,t){switch(t){case A.L:return Z[4*(e-1)+0];case A.M:return Z[4*(e-1)+1];case A.Q:return Z[4*(e-1)+2];case A.H:return Z[4*(e-1)+3];default:return}},ut=function(e,t){switch(t){case A.L:return D[4*(e-1)+0];case A.M:return D[4*(e-1)+1];case A.Q:return D[4*(e-1)+2];case A.H:return D[4*(e-1)+3];default:return}},j=new Uint8Array(512),ct=new Uint8Array(256);(function(){for(var e=1,t=0;t<255;t++)j[t]=e,ct[e]=t,256&(e<<=1)&&(e^=285);for(t=255;t<512;t++)j[t]=j[t-255]})();var dt=function(e){return j[e]},tt=function(e,t){return e===0||t===0?0:j[ct[e]+ct[t]]},F=I(function(e,t){t.mul=function(n,a){for(var o=new Uint8Array(n.length+a.length-1),i=0;i<n.length;i++)for(var d=0;d<a.length;d++)o[i+d]^=tt(n[i],a[d]);return o},t.mod=function(n,a){for(var o=new Uint8Array(n);o.length-a.length>=0;){for(var i=o[0],d=0;d<a.length;d++)o[d]^=tt(a[d],i);for(var r=0;r<o.length&&o[r]===0;)r++;o=o.slice(r)}return o},t.generateECPolynomial=function(n){for(var a=new Uint8Array([1]),o=0;o<n;o++)a=t.mul(a,new Uint8Array([1,dt(o)]));return a}});F.mul,F.mod,F.generateECPolynomial;function ht(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ht.prototype.initialize=function(e){this.degree=e,this.genPoly=F.generateECPolynomial(this.degree)},ht.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");var t=new Uint8Array(e.length+this.degree);t.set(e);var n=F.mod(t,this.genPoly),a=this.degree-n.length;if(a>0){var o=new Uint8Array(this.degree);return o.set(n,a),o}return n};var Pt=ht,ft=function(e){return!isNaN(e)&&e>=1&&e<=40},lt="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",Bt="(?:(?![A-Z0-9 $%*+\\-./:]|"+(lt=lt.replace(/u/g,"\\u"))+`)(?:.|[\r
]))+`,It=new RegExp(lt,"g"),Rt=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),xt=new RegExp(Bt,"g"),Tt=new RegExp("[0-9]+","g"),Nt=new RegExp("[A-Z $%*+\\-./:]+","g"),Lt=new RegExp("^"+lt+"$"),Ut=new RegExp("^[0-9]+$"),bt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$"),G={KANJI:It,BYTE_KANJI:Rt,BYTE:xt,NUMERIC:Tt,ALPHANUMERIC:Nt,testKanji:function(e){return Lt.test(e)},testNumeric:function(e){return Ut.test(e)},testAlphanumeric:function(e){return bt.test(e)}},h=I(function(e,t){t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,a){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!ft(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?n.ccBits[0]:a<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return G.testNumeric(n)?t.NUMERIC:G.testAlphanumeric(n)?t.ALPHANUMERIC:G.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits},t.from=function(n,a){if(t.isValid(n))return n;try{return function(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}(n)}catch(o){return a}}}),Dt=(h.NUMERIC,h.ALPHANUMERIC,h.BYTE,h.KANJI,h.MIXED,h.getCharCountIndicator,h.getBestModeForData,h.isValid,{}.toString),Et=Array.isArray||function(e){return Dt.call(e)=="[object Array]"},et=I(function(e,t){var n=M(7973);function a(i,d){return h.getCharCountIndicator(i,d)+4}function o(i,d){var r=0;return i.forEach(function(u){var s=a(u.mode,d);r+=s+u.getBitsLength()}),r}t.from=function(i,d){return ft(i)?parseInt(i,10):d},t.getCapacity=function(i,d,r){if(!ft(i))throw new Error("Invalid QR Code version");r===void 0&&(r=h.BYTE);var u=8*(N(i)-ut(i,d));if(r===h.MIXED)return u;var s=u-a(r,i);switch(r){case h.NUMERIC:return Math.floor(s/10*3);case h.ALPHANUMERIC:return Math.floor(s/11*2);case h.KANJI:return Math.floor(s/13);case h.BYTE:default:return Math.floor(s/8)}},t.getBestVersionForData=function(i,d){var r,u=A.from(d,A.M);if(Et(i)){if(i.length>1)return function(s,c){for(var f=1;f<=40;f++)if(o(s,f)<=t.getCapacity(f,c,h.MIXED))return f}(i,u);if(i.length===0)return 1;r=i[0]}else r=i;return function(s,c,f){for(var g=1;g<=40;g++)if(c<=t.getCapacity(g,f,s))return g}(r.mode,r.getLength(),u)},t.getEncodedBits=function(i){if(!ft(i)||i<7)throw new Error("Invalid QR Code version");for(var d=i<<12;M(d)-n>=0;)d^=7973<<M(d)-n;return i<<12|d}}),_t=(et.getCapacity,et.getBestVersionForData,et.getEncodedBits,M(1335)),Ot=function(e,t){for(var n=e.bit<<3|t,a=n<<10;M(a)-_t>=0;)a^=1335<<M(a)-_t;return 21522^(n<<10|a)};function rt(e){this.mode=h.NUMERIC,this.data=e.toString()}rt.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},rt.prototype.getLength=function(){return this.data.length},rt.prototype.getBitsLength=function(){return rt.getBitsLength(this.data.length)},rt.prototype.write=function(e){var t,n,a;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),a=parseInt(n,10),e.put(a,10);var o=this.data.length-t;o>0&&(n=this.data.substr(t),a=parseInt(n,10),e.put(a,3*o+1))};var At=rt,gt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function at(e){this.mode=h.ALPHANUMERIC,this.data=e}at.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},at.prototype.getLength=function(){return this.data.length},at.prototype.getBitsLength=function(){return at.getBitsLength(this.data.length)},at.prototype.write=function(e){var t;for(t=0;t+2<=this.data.length;t+=2){var n=45*gt.indexOf(this.data[t]);n+=gt.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(gt.indexOf(this.data[t]),6)};var yt=at;function ot(e){this.mode=h.BYTE,this.data=new Uint8Array(function(t){for(var n=[],a=t.length,o=0;o<a;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&a>o+1){var d=t.charCodeAt(o+1);d>=56320&&d<=57343&&(i=1024*(i-55296)+d-56320+65536,o+=1)}i<128?n.push(i):i<2048?(n.push(i>>6|192),n.push(63&i|128)):i<55296||i>=57344&&i<65536?(n.push(i>>12|224),n.push(i>>6&63|128),n.push(63&i|128)):i>=65536&&i<=1114111?(n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(63&i|128)):n.push(239,191,189)}return new Uint8Array(n).buffer}(e))}ot.getBitsLength=function(e){return 8*e},ot.prototype.getLength=function(){return this.data.length},ot.prototype.getBitsLength=function(){return ot.getBitsLength(this.data.length)},ot.prototype.write=function(e){for(var t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var wt=ot;function it(e){this.mode=h.KANJI,this.data=e}it.getBitsLength=function(e){return 13*e},it.prototype.getLength=function(){return this.data.length},it.prototype.getBitsLength=function(){return it.getBitsLength(this.data.length)},it.prototype.write=function(e){var t;for(t=0;t<this.data.length;t++){var n=O(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n-=49472}n=192*(n>>>8&255)+(255&n),e.put(n,13)}};var Mt=it,Zt=I(function(e){var t={single_source_shortest_paths:function(n,a,o){var i={},d={};d[a]=0;var r,u,s,c,f,g,l,p=t.PriorityQueue.make();for(p.push(a,0);!p.empty();)for(s in u=(r=p.pop()).value,c=r.cost,f=n[u]||{})f.hasOwnProperty(s)&&(g=c+f[s],l=d[s],(d[s]===void 0||l>g)&&(d[s]=g,p.push(s,g),i[s]=u));if(o!==void 0&&d[o]===void 0){var m=["Could not find a path from ",a," to ",o,"."].join("");throw new Error(m)}return i},extract_shortest_path_from_predecessor_list:function(n,a){for(var o=[],i=a;i;)o.push(i),n[i],i=n[i];return o.reverse(),o},find_path:function(n,a,o){var i=t.single_source_shortest_paths(n,a,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(n){var a,o=t.PriorityQueue,i={};for(a in n=n||{},o)o.hasOwnProperty(a)&&(i[a]=o[a]);return i.queue=[],i.sorter=n.sorter||o.default_sorter,i},default_sorter:function(n,a){return n.cost-a.cost},push:function(n,a){var o={value:n,cost:a};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t}),st=I(function(e,t){function n(r){return unescape(encodeURIComponent(r)).length}function a(r,u,s){for(var c,f=[];(c=r.exec(s))!==null;)f.push({data:c[0],index:c.index,mode:u,length:c[0].length});return f}function o(r){var u,s,c=a(G.NUMERIC,h.NUMERIC,r),f=a(G.ALPHANUMERIC,h.ALPHANUMERIC,r);return L()?(u=a(G.BYTE,h.BYTE,r),s=a(G.KANJI,h.KANJI,r)):(u=a(G.BYTE_KANJI,h.BYTE,r),s=[]),c.concat(f,u,s).sort(function(g,l){return g.index-l.index}).map(function(g){return{data:g.data,mode:g.mode,length:g.length}})}function i(r,u){switch(u){case h.NUMERIC:return At.getBitsLength(r);case h.ALPHANUMERIC:return yt.getBitsLength(r);case h.KANJI:return Mt.getBitsLength(r);case h.BYTE:return wt.getBitsLength(r)}}function d(r,u){var s,c=h.getBestModeForData(r);if((s=h.from(u,c))!==h.BYTE&&s.bit<c.bit)throw new Error('"'+r+'" cannot be encoded with mode '+h.toString(s)+`.
 Suggested mode is: `+h.toString(c));switch(s!==h.KANJI||L()||(s=h.BYTE),s){case h.NUMERIC:return new At(r);case h.ALPHANUMERIC:return new yt(r);case h.KANJI:return new Mt(r);case h.BYTE:return new wt(r)}}t.fromArray=function(r){return r.reduce(function(u,s){return typeof s=="string"?u.push(d(s,null)):s.data&&u.push(d(s.data,s.mode)),u},[])},t.fromString=function(r,u){for(var s=function(l,p){for(var m={},v={start:{}},w=["start"],E=0;E<l.length;E++){for(var C=l[E],J=[],$=0;$<C.length;$++){var S=C[$],H=""+E+$;J.push(H),m[H]={node:S,lastCount:0},v[H]={};for(var W=0;W<w.length;W++){var U=w[W];m[U]&&m[U].node.mode===S.mode?(v[U][H]=i(m[U].lastCount+S.length,S.mode)-i(m[U].lastCount,S.mode),m[U].lastCount+=S.length):(m[U]&&(m[U].lastCount=S.length),v[U][H]=i(S.length,S.mode)+4+h.getCharCountIndicator(S.mode,p))}}w=J}for(W=0;W<w.length;W++)v[w[W]].end=0;return{map:v,table:m}}(function(l){for(var p=[],m=0;m<l.length;m++){var v=l[m];switch(v.mode){case h.NUMERIC:p.push([v,{data:v.data,mode:h.ALPHANUMERIC,length:v.length},{data:v.data,mode:h.BYTE,length:v.length}]);break;case h.ALPHANUMERIC:p.push([v,{data:v.data,mode:h.BYTE,length:v.length}]);break;case h.KANJI:p.push([v,{data:v.data,mode:h.BYTE,length:n(v.data)}]);break;case h.BYTE:p.push([{data:v.data,mode:h.BYTE,length:n(v.data)}])}}return p}(o(r,L())),u),c=Zt.find_path(s.map,"start","end"),f=[],g=1;g<c.length-1;g++)f.push(s.table[c[g]].node);return t.fromArray(function(l){return l.reduce(function(p,m){var v=p.length-1>=0?p[p.length-1]:null;return v&&v.mode===m.mode?(p[p.length-1].data+=m.data,p):(p.push(m),p)},[])}(f))},t.rawSplit=function(r){return t.fromArray(o(r,L()))}});st.fromArray,st.fromString,st.rawSplit;function pt(e,t,n){var a,o,i=e.size,d=Ot(t,n);for(a=0;a<15;a++)o=(d>>a&1)==1,a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(i-15+a,8,o,!0),a<8?e.set(8,i-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(i-8,8,1,!0)}function St(e,t,n){var a=new T;n.forEach(function(r){a.put(r.mode.bit,4),a.put(r.getLength(),h.getCharCountIndicator(r.mode,e)),r.write(a)});var o=8*(N(e)-ut(e,t));for(a.getLengthInBits()+4<=o&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(0);for(var i=(o-a.getLengthInBits())/8,d=0;d<i;d++)a.put(d%2?17:236,8);return function(r,u,s){for(var c=N(u),f=ut(u,s),g=c-f,l=nt(u,s),p=l-c%l,m=Math.floor(c/l),v=Math.floor(g/l),w=v+1,E=m-v,C=new Pt(E),J=0,$=new Array(l),S=new Array(l),H=0,W=new Uint8Array(r.buffer),U=0;U<l;U++){var vt=U<p?v:w;$[U]=W.slice(J,J+vt),S[U]=C.encode($[U]),J+=vt,H=Math.max(H,vt)}var Y,Q,mt=new Uint8Array(c),Ct=0;for(Y=0;Y<H;Y++)for(Q=0;Q<l;Q++)Y<$[Q].length&&(mt[Ct++]=$[Q][Y]);for(Y=0;Y<E;Y++)for(Q=0;Q<l;Q++)mt[Ct++]=S[Q][Y];return mt}(a,e,t)}function Kt(e,t,n,a){var o;if(Et(e))o=st.fromArray(e);else{if(typeof e!="string")throw new Error("Invalid data");var i=t;if(!i){var d=st.rawSplit(e);i=et.getBestVersionForData(d,n)}o=st.fromString(e,i||40)}var r=et.getBestVersionForData(o,n);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`)}else t=r;var u=St(t,n,o),s=K(t),c=new b(s);return function(f,g){for(var l=f.size,p=z(g),m=0;m<p.length;m++)for(var v=p[m][0],w=p[m][1],E=-1;E<=7;E++)if(!(v+E<=-1||l<=v+E))for(var C=-1;C<=7;C++)w+C<=-1||l<=w+C||(E>=0&&E<=6&&(C===0||C===6)||C>=0&&C<=6&&(E===0||E===6)||E>=2&&E<=4&&C>=2&&C<=4?f.set(v+E,w+C,!0,!0):f.set(v+E,w+C,!1,!0))}(c,t),function(f){for(var g=f.size,l=8;l<g-8;l++){var p=l%2==0;f.set(l,6,p,!0),f.set(6,l,p,!0)}}(c),function(f,g){for(var l=P.getPositions(g),p=0;p<l.length;p++)for(var m=l[p][0],v=l[p][1],w=-2;w<=2;w++)for(var E=-2;E<=2;E++)w===-2||w===2||E===-2||E===2||w===0&&E===0?f.set(m+w,v+E,!0,!0):f.set(m+w,v+E,!1,!0)}(c,t),pt(c,n,0),t>=7&&function(f,g){for(var l,p,m,v=f.size,w=et.getEncodedBits(g),E=0;E<18;E++)l=Math.floor(E/3),p=E%3+v-8-3,m=(w>>E&1)==1,f.set(l,p,m,!0),f.set(p,l,m,!0)}(c,t),function(f,g){for(var l=f.size,p=-1,m=l-1,v=7,w=0,E=l-1;E>0;E-=2)for(E===6&&E--;;){for(var C=0;C<2;C++)if(!f.isReserved(m,E-C)){var J=!1;w<g.length&&(J=(g[w]>>>v&1)==1),f.set(m,E-C,J),--v==-1&&(w++,v=7)}if((m+=p)<0||l<=m){m-=p,p=-p;break}}}(c,u),isNaN(a)&&(a=B.getBestMask(c,pt.bind(null,c,n))),B.applyMask(a,c),pt(c,n,a),{modules:c,version:t,errorCorrectionLevel:n,maskPattern:a,segments:o}}k.create=function(e,t){if(e===void 0||e==="")throw new Error("No input text");var n,a,o=A.M;return t!==void 0&&(o=A.from(t.errorCorrectionLevel,A.M),n=et.from(t.version),a=B.from(t.maskPattern),t.toSJISFunc&&x(t.toSJISFunc)),Kt(e,n,o,a)}},37973:function(V,k,y){const X=y(67294),K=y(42187);V.exports=function(M){const x=K(M.value,{backgroundColor:M.backgroundColor,color:M.color,margin:M.margin,size:M.size});return X.createElement("img",{height:M.size,src:"data:image/svg+xml,"+encodeURIComponent(x),width:M.size})}},42187:function(V,k,y){const X=y(51385);function K(N,M,x){let L="",O=0,I=!1,A=0;for(let R=0;R<N.length;R++){const T=Math.floor(R%M),_=Math.floor(R/M);if(T===0&&(I=!0),!N[R]){O++;continue}A++,R>0&&T>0&&N[R-1]||(L+=I?`M${x+T},${x+.5+_}`:`m${O},0`,O=0,I=!1),T+1<M&&N[R+1]||(L+=`h${A}`,A=0)}return L}V.exports=function(M,x={}){const{size:L,data:O}=X.create(M).modules,I=x.margin||0,A=L+I*2,R=`viewBox="0 0 ${A} ${A}"`,T=x.size?` width="${x.size}" height="${x.size}"`:"",_=x.backgroundColor==="transparent"?"":`<path fill="${x.backgroundColor||"white"}" d="M0,0h${A}v${A}H0z"/>`,b=`<path stroke="${x.color||"black"}" d="${K(O,L,I)}"/>`;return`<svg xmlns="http://www.w3.org/2000/svg" ${R}${T} shape-rendering="crispEdges">${_}${b}</svg>`}},28872:function(V,k,y){"use strict";y.r(k);var X=y(2824),K=y(20310),N=y(47416),M=y(37973),x=y.n(M),L=y(53776),O=y(28219),I=y(39903),A=y.n(I),R=y(67294),T=y(32544),_=y(85893),b,P=N.ZP.div(b||(b=(0,K.Z)([`
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
`])));k.default=function(){var q=(0,L.t)("@@initialState"),z=q.initialState,B=(0,R.useState)(!1),Z=(0,X.Z)(B,2),D=Z[0],nt=Z[1],ut=(0,T.m9)(),j=(0,R.useMemo)(function(){var tt,F;return(D?z==null||(tt=z.currentUser)===null||tt===void 0?void 0:tt.ccp_addr:z==null||(F=z.currentUser)===null||F===void 0?void 0:F.usdr_trx_addr)||""},[D]),ct=(0,R.useMemo)(function(){return D?"CCP":"USDT"},[D]),dt=(0,R.useMemo)(function(){return D?"ERC20":"TRC20"},[D]);return(0,_.jsxs)(P,{children:[(0,_.jsxs)("div",{className:"top",children:[(0,_.jsx)("span",{children:ct}),(0,_.jsxs)("h3",{style:{color:D?"rgba(4, 131, 224, 1)":"red"},children:[dt," ",(0,_.jsx)("img",{src:A(),alt:""})]})]}),(0,_.jsx)("div",{className:"qrcode",children:(0,_.jsx)(x(),{value:j,size:160})}),(0,_.jsx)("h4",{className:"recharge_text",children:(0,_.jsx)(O._H,{id:"pages.myaccount.deposit_address"})}),(0,_.jsx)("h4",{className:"recharge_address",children:j}),(0,_.jsx)("div",{className:"copy",onClick:function(){ut(j)},children:(0,_.jsx)(O._H,{id:"pages.myaccount.copy_address"})}),(0,_.jsx)("div",{className:"tip",children:D?(0,_.jsx)(O._H,{id:"pages.myaccount.deposit_tis"}):(0,_.jsx)(O._H,{id:"pages.myaccount.deposit_trc_tis"})})]})}},32544:function(V,k,y){"use strict";y.d(k,{m9:function(){return O},XP:function(){return I},TW:function(){return A}});var X=y(34792),K=y(55026),N=y(67294),M=y(43581),x=y(29306),L=y.n(x),O=function(){var _=(0,M.YB)();return(0,N.useCallback)(function(b){var P=document.createElement("textarea");P.innerText=b,document.body.appendChild(P),P.select(),document.execCommand("copy"),K.default.success(_.formatMessage({id:"component.nft_car.copy_successfully"})),P.remove()},[])},I=function(){var _=(0,M.YB)();return(0,N.useCallback)(function(b){var P=new XMLHttpRequest;console.log(b),P.open("GET",b,!0),P.responseType="blob",P.onload=function(q){var z=new FileReader;z.onload=function(Z){var D=Z.target.result,nt=document.createElement("a");nt.download="\u9080\u8BF7\u7801.png",nt.href=D,nt.click()};var B=this.response;z.readAsDataURL(B)},P.send(),K.default.success(_.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},A=function(){return(0,N.useCallback)(function(_,b,P){var q=document.getElementById(_);L().toPng(q).then(function(z){L().toPng(q).then(function(B){if(B){var Z=document.createElement("a");Z.download=b+".png",Z.href=B,Z.click()}P(!0)}).catch(function(B){P(!1),console.error("oops, something went wrong!",B)})})},[])};function R(T){var _=document.createElement("canvas");_.width=T.width,_.height=T.height;var b=_.getContext("2d");b.drawImage(T,0,0);var P=_.toDataURL("image/png");return P.replace(/^data:image\/(png|jpg);base64,/,"")}},39903:function(V){V.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IArs4c6QAAAEhQTFRFAAAAAAAAZmZmZ2dnaGhoZWVlZWVlZmZmZ2dnZmZmZ2dnZmZmZWVlZ2dnZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmiu9o1wAAABd0Uk5TAAEoKiw1On+BhJCRnJydttXg5ufx8/jId3H6AAAAVUlEQVQ4y+3TSQ6AIBQE0Y/ijCNg3/+mXqEWJkRDrd+qkzarfaIpLw7BLG1IzoLSheJyxTJgOZCR2lvagWuilDrgLin1BVx819kBnZ3QmR99vflfewDcswZAk95gUQAAAABJRU5ErkJggg=="}}]);
