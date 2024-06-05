var YT=Object.defineProperty;var QT=(i,n,t)=>n in i?YT(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var _e=(i,n,t)=>(QT(i,typeof n!="symbol"?n+"":n,t),t),zT=(i,n,t)=>{if(!n.has(i))throw TypeError("Cannot "+t)};var la=(i,n,t)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,t)};var ls=(i,n,t)=>(zT(i,n,"access private method"),t);import{S as xe,i as Le,t as ee,b as oe,g as wt,e as St,c as qt,a as ui,m as jt,d as Wt}from"./index.BLFDKRva.js";import{s as Se,q as en,l as Ee,d as H,E as Zn,v as of,e as Ne,f as Oe,g as Ge,ad as Es,F as et,G as nt,H as tt,a2 as ur,I as Ic,t as ba,j as wa,o as Sa,n as Je,k as dn,m as bt,b as Ca,c as Fa,ah as JT,ai as HT,ak as Dc,K as XT}from"./scheduler.BZkyrStM.js";import{b as KT}from"./control.BRKpRpTx.js";function ut(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function af(i,n){const t={},s={},o={$$scope:1};let u=i.length;for(;u--;){const l=i[u],f=n[u];if(f){for(const d in l)d in f||(s[d]=1);for(const d in f)o[d]||(t[d]=f[d],o[d]=1);i[u]=f}else for(const d in l)o[d]=1}for(const l in s)l in t||(t[l]=void 0);return t}function AA(i){return typeof i=="object"&&i!==null?i:{}}function lr(...i){return"/"+i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}function cr(i){return i.startsWith("/")||i.startsWith("#")}function uf(i,n){return n.slug(i).replace(/--+/g,"-")}function ca(i){let n,t;const s=i[5].default,o=Zn(s,i,i[4],null);let u=[{id:i[1]}],l={};for(let f=0;f<u.length;f+=1)l=of(l,u[f]);return{c(){n=Ne(`h${i[0].depth}`),o&&o.c(),this.h()},l(f){n=Oe(f,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var d=Ge(n);o&&o.l(d),d.forEach(H),this.h()},h(){Es(`h${i[0].depth}`)(n,l)},m(f,d){Ee(f,n,d),o&&o.m(n,null),t=!0},p(f,d){o&&o.p&&(!t||d&16)&&et(o,s,f,f[4],t?tt(s,f[4],d,null):nt(f[4]),null),Es(`h${f[0].depth}`)(n,l=af(u,[(!t||d&2)&&{id:f[1]}]))},i(f){t||(ee(o,f),t=!0)},o(f){oe(o,f),t=!1},d(f){f&&H(n),o&&o.d(f)}}}function ZT(i){let n=`h${i[0].depth}`,t,s,o=`h${i[0].depth}`&&ca(i);return{c(){o&&o.c(),t=en()},l(u){o&&o.l(u),t=en()},m(u,l){o&&o.m(u,l),Ee(u,t,l),s=!0},p(u,[l]){`h${u[0].depth}`?n?Se(n,`h${u[0].depth}`)?(o.d(1),o=ca(u),n=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):o.p(u,l):(o=ca(u),n=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):n&&(o.d(1),o=null,n=`h${u[0].depth}`)},i(u){s||(ee(o,u),s=!0)},o(u){oe(o,u),s=!1},d(u){u&&H(t),o&&o.d(u)}}}function eE(i,n,t){let{$$slots:s={},$$scope:o}=n,{token:u}=n,{options:l}=n;const f=void 0;let d;return i.$$set=y=>{"token"in y&&t(0,u=y.token),"options"in y&&t(2,l=y.options),"$$scope"in y&&t(4,o=y.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,d=uf(u.text,l.slugger))},[u,d,l,f,o,s]}class nE extends xe{constructor(n){super(),Le(this,n,eE,ZT,Se,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function tE(i){let n,t;const s=i[4].default,o=Zn(s,i,i[3],null);return{c(){n=Ne("blockquote"),o&&o.c()},l(u){n=Oe(u,"BLOCKQUOTE",{});var l=Ge(n);o&&o.l(l),l.forEach(H)},m(u,l){Ee(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function iE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class rE extends xe{constructor(n){super(),Le(this,n,iE,tE,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function vc(i,n,t){const s=i.slice();return s[3]=n[t],s}function Ac(i){let n,t,s=ut(i[0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=_c(vc(i,s,l));const u=l=>oe(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();n=en()},l(l){for(let f=0;f<o.length;f+=1)o[f].l(l);n=en()},m(l,f){for(let d=0;d<o.length;d+=1)o[d]&&o[d].m(l,f);Ee(l,n,f),t=!0},p(l,f){if(f&7){s=ut(l[0]);let d;for(d=0;d<s.length;d+=1){const y=vc(l,s,d);o[d]?(o[d].p(y,f),ee(o[d],1)):(o[d]=_c(y),o[d].c(),ee(o[d],1),o[d].m(n.parentNode,n))}for(wt(),d=s.length;d<o.length;d+=1)u(d);St()}},i(l){if(!t){for(let f=0;f<s.length;f+=1)ee(o[f]);t=!0}},o(l){o=o.filter(Boolean);for(let f=0;f<o.length;f+=1)oe(o[f]);t=!1},d(l){l&&H(n),ur(o,l)}}}function _c(i){let n,t;return n=new lf({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){qt(n.$$.fragment)},l(s){ui(n.$$.fragment,s)},m(s,o){jt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.token=s[3]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){Wt(n,s)}}}function sE(i){let n,t,s=i[0]&&Ac(i);return{c(){s&&s.c(),n=en()},l(o){s&&s.l(o),n=en()},m(o,u){s&&s.m(o,u),Ee(o,n,u),t=!0},p(o,[u]){o[0]?s?(s.p(o,u),u&1&&ee(s,1)):(s=Ac(o),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(wt(),oe(s,1,1,()=>{s=null}),St())},i(o){t||(ee(s),t=!0)},o(o){oe(s),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function oE(i,n,t){let{tokens:s}=n,{renderers:o}=n,{options:u}=n;return i.$$set=l=>{"tokens"in l&&t(0,s=l.tokens),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class Cs extends xe{constructor(n){super(),Le(this,n,oE,sE,Se,{tokens:0,renderers:1,options:2})}}function bc(i){let n,t,s;var o=i[1][i[0].type];function u(l,f){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[lE]},$$scope:{ctx:l}}}}return o&&(n=Ic(o,u(i))),{c(){n&&qt(n.$$.fragment),t=en()},l(l){n&&ui(n.$$.fragment,l),t=en()},m(l,f){n&&jt(n,l,f),Ee(l,t,f),s=!0},p(l,f){if(f&3&&o!==(o=l[1][l[0].type])){if(n){wt();const d=n;oe(d.$$.fragment,1,0,()=>{Wt(d,1)}),St()}o?(n=Ic(o,u(l)),qt(n.$$.fragment),ee(n.$$.fragment,1),jt(n,t.parentNode,t)):n=null}else if(o){const d={};f&1&&(d.token=l[0]),f&4&&(d.options=l[2]),f&2&&(d.renderers=l[1]),f&15&&(d.$$scope={dirty:f,ctx:l}),n.$set(d)}},i(l){s||(n&&ee(n.$$.fragment,l),s=!0)},o(l){n&&oe(n.$$.fragment,l),s=!1},d(l){l&&H(t),n&&Wt(n,l)}}}function aE(i){let n=i[0].raw+"",t;return{c(){t=ba(n)},l(s){t=wa(s,n)},m(s,o){Ee(s,t,o)},p(s,o){o&1&&n!==(n=s[0].raw+"")&&Sa(t,n)},i:Je,o:Je,d(s){s&&H(t)}}}function uE(i){let n,t;return n=new Cs({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){qt(n.$$.fragment)},l(s){ui(n.$$.fragment,s)},m(s,o){jt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.tokens=s[0].tokens),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){Wt(n,s)}}}function lE(i){let n,t,s,o;const u=[uE,aE],l=[];function f(d,y){return"tokens"in d[0]&&d[0].tokens?0:1}return n=f(i),t=l[n]=u[n](i),{c(){t.c(),s=en()},l(d){t.l(d),s=en()},m(d,y){l[n].m(d,y),Ee(d,s,y),o=!0},p(d,y){let T=n;n=f(d),n===T?l[n].p(d,y):(wt(),oe(l[T],1,1,()=>{l[T]=null}),St(),t=l[n],t?t.p(d,y):(t=l[n]=u[n](d),t.c()),ee(t,1),t.m(s.parentNode,s))},i(d){o||(ee(t),o=!0)},o(d){oe(t),o=!1},d(d){d&&H(s),l[n].d(d)}}}function cE(i){let n,t,s=i[1][i[0].type]&&bc(i);return{c(){s&&s.c(),n=en()},l(o){s&&s.l(o),n=en()},m(o,u){s&&s.m(o,u),Ee(o,n,u),t=!0},p(o,[u]){o[1][o[0].type]?s?(s.p(o,u),u&3&&ee(s,1)):(s=bc(o),s.c(),ee(s,1),s.m(n.parentNode,n)):s&&(wt(),oe(s,1,1,()=>{s=null}),St())},i(o){t||(ee(s),t=!0)},o(o){oe(s),t=!1},d(o){o&&H(n),s&&s.d(o)}}}function fE(i,n,t){let{token:s}=n,{renderers:o}=n,{options:u}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class lf extends xe{constructor(n){super(),Le(this,n,fE,cE,Se,{token:0,renderers:1,options:2})}}function wc(i,n,t){const s=i.slice();return s[4]=n[t],s}function Sc(i){let n,t;return n=new lf({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){qt(n.$$.fragment)},l(s){ui(n.$$.fragment,s)},m(s,o){jt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.token={...s[4]}),o&2&&(u.options=s[1]),o&4&&(u.renderers=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){Wt(n,s)}}}function fa(i){let n,t,s,o=ut(i[0].items),u=[];for(let y=0;y<o.length;y+=1)u[y]=Sc(wc(i,o,y));const l=y=>oe(u[y],1,1,()=>{u[y]=null});let f=[{start:t=i[0].start||1}],d={};for(let y=0;y<f.length;y+=1)d=of(d,f[y]);return{c(){n=Ne(i[3]);for(let y=0;y<u.length;y+=1)u[y].c();this.h()},l(y){n=Oe(y,(i[3]||"null").toUpperCase(),{start:!0});var T=Ge(n);for(let D=0;D<u.length;D+=1)u[D].l(T);T.forEach(H),this.h()},h(){Es(i[3])(n,d)},m(y,T){Ee(y,n,T);for(let D=0;D<u.length;D+=1)u[D]&&u[D].m(n,null);s=!0},p(y,T){if(T&7){o=ut(y[0].items);let D;for(D=0;D<o.length;D+=1){const N=wc(y,o,D);u[D]?(u[D].p(N,T),ee(u[D],1)):(u[D]=Sc(N),u[D].c(),ee(u[D],1),u[D].m(n,null))}for(wt(),D=o.length;D<u.length;D+=1)l(D);St()}Es(y[3])(n,d=af(f,[(!s||T&1&&t!==(t=y[0].start||1))&&{start:t}]))},i(y){if(!s){for(let T=0;T<o.length;T+=1)ee(u[T]);s=!0}},o(y){u=u.filter(Boolean);for(let T=0;T<u.length;T+=1)oe(u[T]);s=!1},d(y){y&&H(n),ur(u,y)}}}function pE(i){let n=i[3],t,s=i[3]&&fa(i);return{c(){s&&s.c(),t=en()},l(o){s&&s.l(o),t=en()},m(o,u){s&&s.m(o,u),Ee(o,t,u)},p(o,[u]){o[3]?n?Se(n,o[3])?(s.d(1),s=fa(o),n=o[3],s.c(),s.m(t.parentNode,t)):s.p(o,u):(s=fa(o),n=o[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=o[3])},i:Je,o(o){oe(s,o)},d(o){o&&H(t),s&&s.d(o)}}}function dE(i,n,t){let{token:s}=n,{options:o}=n,{renderers:u}=n,l;return i.$$set=f=>{"token"in f&&t(0,s=f.token),"options"in f&&t(1,o=f.options),"renderers"in f&&t(2,u=f.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,l=s.ordered?"ol":"ul")},[s,o,u,l]}class hE extends xe{constructor(n){super(),Le(this,n,dE,pE,Se,{token:0,options:1,renderers:2})}}function mE(i){let n,t;const s=i[4].default,o=Zn(s,i,i[3],null);return{c(){n=Ne("li"),o&&o.c()},l(u){n=Oe(u,"LI",{});var l=Ge(n);o&&o.l(l),l.forEach(H)},m(u,l){Ee(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function gE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class yE extends xe{constructor(n){super(),Le(this,n,gE,mE,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function TE(i){let n;return{c(){n=Ne("br")},l(t){n=Oe(t,"BR",{})},m(t,s){Ee(t,n,s)},p:Je,i:Je,o:Je,d(t){t&&H(n)}}}function EE(i,n,t){return[void 0,void 0,void 0]}class IE extends xe{constructor(n){super(),Le(this,n,EE,TE,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function DE(i){let n,t,s=i[0].text+"",o,u;return{c(){n=Ne("pre"),t=Ne("code"),o=ba(s),this.h()},l(l){n=Oe(l,"PRE",{});var f=Ge(n);t=Oe(f,"CODE",{class:!0});var d=Ge(t);o=wa(d,s),d.forEach(H),f.forEach(H),this.h()},h(){dn(t,"class",u=`lang-${i[0].lang}`)},m(l,f){Ee(l,n,f),bt(n,t),bt(t,o)},p(l,[f]){f&1&&s!==(s=l[0].text+"")&&Sa(o,s),f&1&&u!==(u=`lang-${l[0].lang}`)&&dn(t,"class",u)},i:Je,o:Je,d(l){l&&H(n)}}}function vE(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class AE extends xe{constructor(n){super(),Le(this,n,vE,DE,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function _E(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",s;return{c(){n=Ne("code"),s=ba(t)},l(o){n=Oe(o,"CODE",{});var u=Ge(n);s=wa(u,t),u.forEach(H)},m(o,u){Ee(o,n,u),bt(n,s)},p(o,[u]){u&1&&t!==(t=o[0].raw.slice(1,o[0].raw.length-1)+"")&&Sa(s,t)},i:Je,o:Je,d(o){o&&H(n)}}}function bE(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class wE extends xe{constructor(n){super(),Le(this,n,bE,_E,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Cc(i,n,t){const s=i.slice();return s[3]=n[t],s}function Fc(i,n,t){const s=i.slice();return s[6]=n[t],s}function Nc(i,n,t){const s=i.slice();return s[9]=n[t],s}function Oc(i){let n,t,s,o;return t=new Cs({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=Ne("th"),qt(t.$$.fragment),s=Ca(),this.h()},l(u){n=Oe(u,"TH",{scope:!0});var l=Ge(n);ui(t.$$.fragment,l),s=Fa(l),l.forEach(H),this.h()},h(){dn(n,"scope","col")},m(u,l){Ee(u,n,l),jt(t,n,null),bt(n,s),o=!0},p(u,l){const f={};l&1&&(f.tokens=u[9].tokens),l&2&&(f.options=u[1]),l&4&&(f.renderers=u[2]),t.$set(f)},i(u){o||(ee(t.$$.fragment,u),o=!0)},o(u){oe(t.$$.fragment,u),o=!1},d(u){u&&H(n),Wt(t)}}}function Rc(i){let n,t,s;return t=new Cs({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=Ne("td"),qt(t.$$.fragment)},l(o){n=Oe(o,"TD",{});var u=Ge(n);ui(t.$$.fragment,u),u.forEach(H)},m(o,u){Ee(o,n,u),jt(t,n,null),s=!0},p(o,u){const l={};u&1&&(l.tokens=o[6].tokens),u&2&&(l.options=o[1]),u&4&&(l.renderers=o[2]),t.$set(l)},i(o){s||(ee(t.$$.fragment,o),s=!0)},o(o){oe(t.$$.fragment,o),s=!1},d(o){o&&H(n),Wt(t)}}}function kc(i){let n,t,s,o=ut(i[3]),u=[];for(let f=0;f<o.length;f+=1)u[f]=Rc(Fc(i,o,f));const l=f=>oe(u[f],1,1,()=>{u[f]=null});return{c(){n=Ne("tr");for(let f=0;f<u.length;f+=1)u[f].c();t=Ca()},l(f){n=Oe(f,"TR",{});var d=Ge(n);for(let y=0;y<u.length;y+=1)u[y].l(d);t=Fa(d),d.forEach(H)},m(f,d){Ee(f,n,d);for(let y=0;y<u.length;y+=1)u[y]&&u[y].m(n,null);bt(n,t),s=!0},p(f,d){if(d&7){o=ut(f[3]);let y;for(y=0;y<o.length;y+=1){const T=Fc(f,o,y);u[y]?(u[y].p(T,d),ee(u[y],1)):(u[y]=Rc(T),u[y].c(),ee(u[y],1),u[y].m(n,t))}for(wt(),y=o.length;y<u.length;y+=1)l(y);St()}},i(f){if(!s){for(let d=0;d<o.length;d+=1)ee(u[d]);s=!0}},o(f){u=u.filter(Boolean);for(let d=0;d<u.length;d+=1)oe(u[d]);s=!1},d(f){f&&H(n),ur(u,f)}}}function SE(i){let n,t,s,o,u,l,f=ut(i[0].header),d=[];for(let O=0;O<f.length;O+=1)d[O]=Oc(Nc(i,f,O));const y=O=>oe(d[O],1,1,()=>{d[O]=null});let T=ut(i[0].rows),D=[];for(let O=0;O<T.length;O+=1)D[O]=kc(Cc(i,T,O));const N=O=>oe(D[O],1,1,()=>{D[O]=null});return{c(){n=Ne("table"),t=Ne("thead"),s=Ne("tr");for(let O=0;O<d.length;O+=1)d[O].c();o=Ca(),u=Ne("tbody");for(let O=0;O<D.length;O+=1)D[O].c()},l(O){n=Oe(O,"TABLE",{});var x=Ge(n);t=Oe(x,"THEAD",{});var L=Ge(t);s=Oe(L,"TR",{});var J=Ge(s);for(let $e=0;$e<d.length;$e+=1)d[$e].l(J);J.forEach(H),L.forEach(H),o=Fa(x),u=Oe(x,"TBODY",{});var pe=Ge(u);for(let $e=0;$e<D.length;$e+=1)D[$e].l(pe);pe.forEach(H),x.forEach(H)},m(O,x){Ee(O,n,x),bt(n,t),bt(t,s);for(let L=0;L<d.length;L+=1)d[L]&&d[L].m(s,null);bt(n,o),bt(n,u);for(let L=0;L<D.length;L+=1)D[L]&&D[L].m(u,null);l=!0},p(O,[x]){if(x&7){f=ut(O[0].header);let L;for(L=0;L<f.length;L+=1){const J=Nc(O,f,L);d[L]?(d[L].p(J,x),ee(d[L],1)):(d[L]=Oc(J),d[L].c(),ee(d[L],1),d[L].m(s,null))}for(wt(),L=f.length;L<d.length;L+=1)y(L);St()}if(x&7){T=ut(O[0].rows);let L;for(L=0;L<T.length;L+=1){const J=Cc(O,T,L);D[L]?(D[L].p(J,x),ee(D[L],1)):(D[L]=kc(J),D[L].c(),ee(D[L],1),D[L].m(u,null))}for(wt(),L=T.length;L<D.length;L+=1)N(L);St()}},i(O){if(!l){for(let x=0;x<f.length;x+=1)ee(d[x]);for(let x=0;x<T.length;x+=1)ee(D[x]);l=!0}},o(O){d=d.filter(Boolean);for(let x=0;x<d.length;x+=1)oe(d[x]);D=D.filter(Boolean);for(let x=0;x<D.length;x+=1)oe(D[x]);l=!1},d(O){O&&H(n),ur(d,O),ur(D,O)}}}function CE(i,n,t){let{token:s}=n,{options:o}=n,{renderers:u}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options),"renderers"in l&&t(2,u=l.renderers)},[s,o,u]}class FE extends xe{constructor(n){super(),Le(this,n,CE,SE,Se,{token:0,options:1,renderers:2})}}function NE(i){let n,t=i[0].text+"",s;return{c(){n=new JT(!1),s=en(),this.h()},l(o){n=HT(o,!1),s=en(),this.h()},h(){n.a=s},m(o,u){n.m(t,o,u),Ee(o,s,u)},p(o,[u]){u&1&&t!==(t=o[0].text+"")&&n.p(t)},i:Je,o:Je,d(o){o&&(H(s),n.d())}}}function OE(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class RE extends xe{constructor(n){super(),Le(this,n,OE,NE,Se,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function kE(i){let n,t;const s=i[4].default,o=Zn(s,i,i[3],null);return{c(){n=Ne("p"),o&&o.c()},l(u){n=Oe(u,"P",{});var l=Ge(n);o&&o.l(l),l.forEach(H)},m(u,l){Ee(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function xE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class LE extends xe{constructor(n){super(),Le(this,n,xE,kE,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function BE(i){let n,t,s,o;const u=i[4].default,l=Zn(u,i,i[3],null);return{c(){n=Ne("a"),l&&l.c(),this.h()},l(f){n=Oe(f,"A",{href:!0,title:!0});var d=Ge(n);l&&l.l(d),d.forEach(H),this.h()},h(){dn(n,"href",t=cr(i[0].href)?lr(i[1].baseUrl,i[0].href):i[0].href),dn(n,"title",s=i[0].title)},m(f,d){Ee(f,n,d),l&&l.m(n,null),o=!0},p(f,[d]){l&&l.p&&(!o||d&8)&&et(l,u,f,f[3],o?tt(u,f[3],d,null):nt(f[3]),null),(!o||d&3&&t!==(t=cr(f[0].href)?lr(f[1].baseUrl,f[0].href):f[0].href))&&dn(n,"href",t),(!o||d&1&&s!==(s=f[0].title))&&dn(n,"title",s)},i(f){o||(ee(l,f),o=!0)},o(f){oe(l,f),o=!1},d(f){f&&H(n),l&&l.d(f)}}}function PE(i,n,t){let{$$slots:s={},$$scope:o}=n,{token:u}=n,{options:l}=n;const f=void 0;return i.$$set=d=>{"token"in d&&t(0,u=d.token),"options"in d&&t(1,l=d.options),"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class UE extends xe{constructor(n){super(),Le(this,n,PE,BE,Se,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function ME(i){let n;const t=i[4].default,s=Zn(t,i,i[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),n=!0},p(o,[u]){s&&s.p&&(!n||u&8)&&et(s,t,o,o[3],n?tt(t,o[3],u,null):nt(o[3]),null)},i(o){n||(ee(s,o),n=!0)},o(o){oe(s,o),n=!1},d(o){s&&s.d(o)}}}function $E(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class VE extends xe{constructor(n){super(),Le(this,n,$E,ME,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function GE(i){let n,t;const s=i[4].default,o=Zn(s,i,i[3],null);return{c(){n=Ne("dfn"),o&&o.c()},l(u){n=Oe(u,"DFN",{});var l=Ge(n);o&&o.l(l),l.forEach(H)},m(u,l){Ee(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function qE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class jE extends xe{constructor(n){super(),Le(this,n,qE,GE,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function WE(i){let n,t;const s=i[4].default,o=Zn(s,i,i[3],null);return{c(){n=Ne("del"),o&&o.c()},l(u){n=Oe(u,"DEL",{});var l=Ge(n);o&&o.l(l),l.forEach(H)},m(u,l){Ee(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function YE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class QE extends xe{constructor(n){super(),Le(this,n,YE,WE,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function zE(i){let n,t;const s=i[4].default,o=Zn(s,i,i[3],null);return{c(){n=Ne("em"),o&&o.c()},l(u){n=Oe(u,"EM",{});var l=Ge(n);o&&o.l(l),l.forEach(H)},m(u,l){Ee(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function JE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class HE extends xe{constructor(n){super(),Le(this,n,JE,zE,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function XE(i){let n;return{c(){n=Ne("hr")},l(t){n=Oe(t,"HR",{})},m(t,s){Ee(t,n,s)},p:Je,i:Je,o:Je,d(t){t&&H(n)}}}function KE(i,n,t){return[void 0,void 0,void 0]}class ZE extends xe{constructor(n){super(),Le(this,n,KE,XE,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function eI(i){let n,t;const s=i[4].default,o=Zn(s,i,i[3],null);return{c(){n=Ne("strong"),o&&o.c()},l(u){n=Oe(u,"STRONG",{});var l=Ge(n);o&&o.l(l),l.forEach(H)},m(u,l){Ee(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&et(o,s,u,u[3],t?tt(s,u[3],l,null):nt(u[3]),null)},i(u){t||(ee(o,u),t=!0)},o(u){oe(o,u),t=!1},d(u){u&&H(n),o&&o.d(u)}}}function nI(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class tI extends xe{constructor(n){super(),Le(this,n,nI,eI,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function iI(i){let n,t,s,o;return{c(){n=Ne("img"),this.h()},l(u){n=Oe(u,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){Dc(n.src,t=cr(i[0].href)?lr(i[1].baseUrl,i[0].href):i[0].href)||dn(n,"src",t),dn(n,"title",s=i[0].title),dn(n,"alt",o=i[0].text),dn(n,"class","markdown-image svelte-z38cge")},m(u,l){Ee(u,n,l)},p(u,[l]){l&3&&!Dc(n.src,t=cr(u[0].href)?lr(u[1].baseUrl,u[0].href):u[0].href)&&dn(n,"src",t),l&1&&s!==(s=u[0].title)&&dn(n,"title",s),l&1&&o!==(o=u[0].text)&&dn(n,"alt",o)},i:Je,o:Je,d(u){u&&H(n)}}}function rI(i,n,t){let{token:s}=n,{options:o}=n;const u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options)},[s,o,u]}class sI extends xe{constructor(n){super(),Le(this,n,rI,iI,Se,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function oI(i){let n;const t=i[4].default,s=Zn(t,i,i[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),n=!0},p(o,[u]){s&&s.p&&(!n||u&8)&&et(s,t,o,o[3],n?tt(t,o[3],u,null):nt(o[3]),null)},i(o){n||(ee(s,o),n=!0)},o(o){oe(s,o),n=!1},d(o){s&&s.d(o)}}}function aI(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,f=void 0;return i.$$set=d=>{"$$scope"in d&&t(3,o=d.$$scope)},[u,l,f,o,s]}class xc extends xe{constructor(n){super(),Le(this,n,aI,oI,Se,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Na(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let li=Na();function cf(i){li=i}const ff=/[&<>"']/,uI=new RegExp(ff.source,"g"),pf=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,lI=new RegExp(pf.source,"g"),cI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lc=i=>cI[i];function _n(i,n){if(n){if(ff.test(i))return i.replace(uI,Lc)}else if(pf.test(i))return i.replace(lI,Lc);return i}const fI=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function pI(i){return i.replace(fI,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const dI=/(^|[^\[])\^/g;function Te(i,n){let t=typeof i=="string"?i:i.source;n=n||"";const s={replace:(o,u)=>{let l=typeof u=="string"?u:u.source;return l=l.replace(dI,"$1"),t=t.replace(o,l),s},getRegex:()=>new RegExp(t,n)};return s}function Bc(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const sr={exec:()=>null};function Pc(i,n){const t=i.replace(/\|/g,(u,l,f)=>{let d=!1,y=l;for(;--y>=0&&f[y]==="\\";)d=!d;return d?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function cs(i,n,t){const s=i.length;if(s===0)return"";let o=0;for(;o<s;){const u=i.charAt(s-o-1);if(u===n&&!t)o++;else if(u!==n&&t)o++;else break}return i.slice(0,s-o)}function hI(i,n){if(i.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<i.length;s++)if(i[s]==="\\")s++;else if(i[s]===n[0])t++;else if(i[s]===n[1]&&(t--,t<0))return s;return-1}function Uc(i,n,t,s){const o=n.href,u=n.title?_n(n.title):null,l=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){s.state.inLink=!0;const f={type:"link",raw:t,href:o,title:u,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,f}return{type:"image",raw:t,href:o,title:u,text:_n(l)}}function mI(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(o=>{const u=o.match(/^\s+/);if(u===null)return o;const[l]=u;return l.length>=s.length?o.slice(s.length):o}).join(`
`)}class Is{constructor(n){_e(this,"options");_e(this,"rules");_e(this,"lexer");this.options=n||li}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:cs(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],o=mI(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:o}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=cs(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){let s=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);s=cs(s.replace(/^ *>[ \t]?/gm,""),`
`);const o=this.lexer.state.top;this.lexer.state.top=!0;const u=this.lexer.blockTokens(s);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:u,text:s}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const o=s.length>1,u={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");const l=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let f="",d="",y=!1;for(;n;){let T=!1;if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;f=t[0],n=n.substring(f.length);let D=t[2].split(`
`,1)[0].replace(/^\t+/,pe=>" ".repeat(3*pe.length)),N=n.split(`
`,1)[0],O=0;this.options.pedantic?(O=2,d=D.trimStart()):(O=t[2].search(/[^ ]/),O=O>4?1:O,d=D.slice(O),O+=t[1].length);let x=!1;if(!D&&/^ *$/.test(N)&&(f+=N+`
`,n=n.substring(N.length+1),T=!0),!T){const pe=new RegExp(`^ {0,${Math.min(3,O-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),$e=new RegExp(`^ {0,${Math.min(3,O-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ve=new RegExp(`^ {0,${Math.min(3,O-1)}}(?:\`\`\`|~~~)`),Ce=new RegExp(`^ {0,${Math.min(3,O-1)}}#`);for(;n;){const Re=n.split(`
`,1)[0];if(N=Re,this.options.pedantic&&(N=N.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),ve.test(N)||Ce.test(N)||pe.test(N)||$e.test(n))break;if(N.search(/[^ ]/)>=O||!N.trim())d+=`
`+N.slice(O);else{if(x||D.search(/[^ ]/)>=4||ve.test(D)||Ce.test(D)||$e.test(D))break;d+=`
`+N}!x&&!N.trim()&&(x=!0),f+=Re+`
`,n=n.substring(Re.length+1),D=N.slice(O)}}u.loose||(y?u.loose=!0:/\n *\n *$/.test(f)&&(y=!0));let L=null,J;this.options.gfm&&(L=/^\[[ xX]\] /.exec(d),L&&(J=L[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:f,task:!!L,checked:J,loose:!1,text:d,tokens:[]}),u.raw+=f}u.items[u.items.length-1].raw=f.trimEnd(),u.items[u.items.length-1].text=d.trimEnd(),u.raw=u.raw.trimEnd();for(let T=0;T<u.items.length;T++)if(this.lexer.state.top=!1,u.items[T].tokens=this.lexer.blockTokens(u.items[T].text,[]),!u.loose){const D=u.items[T].tokens.filter(O=>O.type==="space"),N=D.length>0&&D.some(O=>/\n.*\n/.test(O.raw));u.loose=N}if(u.loose)for(let T=0;T<u.items.length;T++)u.items[T].loose=!0;return u}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",u=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:u}}}table(n){const t=this.rules.block.table.exec(n);if(!t||!/[:|]/.test(t[2]))return;const s=Pc(t[1]),o=t[2].replace(/^\||\| *$/g,"").split("|"),u=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],l={type:"table",raw:t[0],header:[],align:[],rows:[]};if(s.length===o.length){for(const f of o)/^ *-+: *$/.test(f)?l.align.push("right"):/^ *:-+: *$/.test(f)?l.align.push("center"):/^ *:-+ *$/.test(f)?l.align.push("left"):l.align.push(null);for(const f of s)l.header.push({text:f,tokens:this.lexer.inline(f)});for(const f of u)l.rows.push(Pc(f,l.header.length).map(d=>({text:d,tokens:this.lexer.inline(d)})));return l}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:_n(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const l=cs(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{const l=hI(t[2],"()");if(l>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let o=t[2],u="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],u=l[3])}else u=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),Uc(t,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:u&&u.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){const o=(s[2]||s[1]).replace(/\s+/g," "),u=t[o.toLowerCase()];if(!u){const l=s[0].charAt(0);return{type:"text",raw:l,text:l}}return Uc(s,u,s[0],this.lexer)}}emStrong(n,t,s=""){let o=this.rules.inline.emStrongLDelim.exec(n);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const l=[...o[0]].length-1;let f,d,y=l,T=0;const D=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(D.lastIndex=0,t=t.slice(-1*n.length+l);(o=D.exec(t))!=null;){if(f=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!f)continue;if(d=[...f].length,o[3]||o[4]){y+=d;continue}else if((o[5]||o[6])&&l%3&&!((l+d)%3)){T+=d;continue}if(y-=d,y>0)continue;d=Math.min(d,d+y+T);const N=[...o[0]][0].length,O=n.slice(0,l+o.index+N+d);if(Math.min(l,d)%2){const L=O.slice(1,-1);return{type:"em",raw:O,text:L,tokens:this.lexer.inlineTokens(L)}}const x=O.slice(2,-2);return{type:"strong",raw:O,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),u=/^ /.test(s)&&/ $/.test(s);return o&&u&&(s=s.substring(1,s.length-1)),s=_n(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,o;return t[2]==="@"?(s=_n(t[1]),o="mailto:"+s):(s=_n(t[1]),o=s),{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(n){var s;let t;if(t=this.rules.inline.url.exec(n)){let o,u;if(t[2]==="@")o=_n(t[0]),u="mailto:"+o;else{let l;do l=t[0],t[0]=((s=this.rules.inline._backpedal.exec(t[0]))==null?void 0:s[0])??"";while(l!==t[0]);o=_n(t[0]),t[1]==="www."?u="http://"+t[0]:u=t[0]}return{type:"link",raw:t[0],text:o,href:u,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=_n(t[0]),{type:"text",raw:t[0],text:s}}}}const gI=/^(?: *(?:\n|$))+/,yI=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,TI=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,dr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,EI=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,df=/(?:[*+-]|\d{1,9}[.)])/,hf=Te(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,df).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Oa=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,II=/^[^\n]+/,Ra=/(?!\s*\])(?:\\.|[^\[\]\\])+/,DI=Te(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Ra).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),vI=Te(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,df).getRegex(),Fs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ka=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,AI=Te("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",ka).replace("tag",Fs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),mf=Te(Oa).replace("hr",dr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fs).getRegex(),_I=Te(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",mf).getRegex(),xa={blockquote:_I,code:yI,def:DI,fences:TI,heading:EI,hr:dr,html:AI,lheading:hf,list:vI,newline:gI,paragraph:mf,table:sr,text:II},Mc=Te("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",dr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fs).getRegex(),bI={...xa,table:Mc,paragraph:Te(Oa).replace("hr",dr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Mc).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fs).getRegex()},wI={...xa,html:Te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ka).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:sr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Te(Oa).replace("hr",dr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hf).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},gf=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,SI=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,yf=/^( {2,}|\\)\n(?!\s*$)/,CI=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,hr="\\p{P}\\p{S}",FI=Te(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,hr).getRegex(),NI=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,OI=Te(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,hr).getRegex(),RI=Te("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,hr).getRegex(),kI=Te("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,hr).getRegex(),xI=Te(/\\([punct])/,"gu").replace(/punct/g,hr).getRegex(),LI=Te(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),BI=Te(ka).replace("(?:-->|$)","-->").getRegex(),PI=Te("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",BI).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ds=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,UI=Te(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ds).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Tf=Te(/^!?\[(label)\]\[(ref)\]/).replace("label",Ds).replace("ref",Ra).getRegex(),Ef=Te(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ra).getRegex(),MI=Te("reflink|nolink(?!\\()","g").replace("reflink",Tf).replace("nolink",Ef).getRegex(),La={_backpedal:sr,anyPunctuation:xI,autolink:LI,blockSkip:NI,br:yf,code:SI,del:sr,emStrongLDelim:OI,emStrongRDelimAst:RI,emStrongRDelimUnd:kI,escape:gf,link:UI,nolink:Ef,punctuation:FI,reflink:Tf,reflinkSearch:MI,tag:PI,text:CI,url:sr},$I={...La,link:Te(/^!?\[(label)\]\((.*?)\)/).replace("label",Ds).getRegex(),reflink:Te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ds).getRegex()},ya={...La,escape:Te(gf).replace("])","~|])").getRegex(),url:Te(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},VI={...ya,br:Te(yf).replace("{2,}","*").getRegex(),text:Te(ya.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},fs={normal:xa,gfm:bI,pedantic:wI},er={normal:La,gfm:ya,breaks:VI,pedantic:$I};class Qn{constructor(n){_e(this,"tokens");_e(this,"options");_e(this,"state");_e(this,"tokenizer");_e(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||li,this.options.tokenizer=this.options.tokenizer||new Is,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:fs.normal,inline:er.normal};this.options.pedantic?(t.block=fs.pedantic,t.inline=er.pedantic):this.options.gfm&&(t.block=fs.gfm,this.options.breaks?t.inline=er.breaks:t.inline=er.gfm),this.tokenizer.rules=t}static get rules(){return{block:fs,inline:er}}static lex(n,t){return new Qn(t).lex(n)}static lexInline(n,t){return new Qn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const s=this.inlineQueue[t];this.inlineTokens(s.src,s.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(f,d,y)=>d+"    ".repeat(y.length));let s,o,u,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(f=>(s=f.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const d=n.slice(1);let y;this.options.extensions.startBlock.forEach(T=>{y=T.call({lexer:this},d),typeof y=="number"&&y>=0&&(f=Math.min(f,y))}),f<1/0&&f>=0&&(u=n.substring(0,f+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){o=t[t.length-1],l&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),l=u.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(n){const f="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(f);break}else throw new Error(f)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,o,u,l=n,f,d,y;if(this.tokens.links){const T=Object.keys(this.tokens.links);if(T.length>0)for(;(f=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)T.includes(f[0].slice(f[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(f=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,f.index)+"["+"a".repeat(f[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(f=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,f.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(d||(y=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(T=>(s=T.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,l,y)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startInline){let T=1/0;const D=n.slice(1);let N;this.options.extensions.startInline.forEach(O=>{N=O.call({lexer:this},D),typeof N=="number"&&N>=0&&(T=Math.min(T,N))}),T<1/0&&T>=0&&(u=n.substring(0,T+1))}if(s=this.tokenizer.inlineText(u)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(y=s.raw.slice(-1)),d=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(n){const T="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(T);break}else throw new Error(T)}}return t}}class vs{constructor(n){_e(this,"options");this.options=n||li}code(n,t,s){var u;const o=(u=(t||"").match(/^\S*/))==null?void 0:u[0];return n=n.replace(/\n$/,"")+`
`,o?'<pre><code class="language-'+_n(o)+'">'+(s?n:_n(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:_n(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,t){return n}heading(n,t,s){return`<h${t}>${n}</h${t}>
`}hr(){return`<hr>
`}list(n,t,s){const o=t?"ol":"ul",u=t&&s!==1?' start="'+s+'"':"";return"<"+o+u+`>
`+n+"</"+o+`>
`}listitem(n,t,s){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const s=t.header?"th":"td";return(t.align?`<${s} align="${t.align}">`:`<${s}>`)+n+`</${s}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,s){const o=Bc(n);if(o===null)return s;n=o;let u='<a href="'+n+'"';return t&&(u+=' title="'+t+'"'),u+=">"+s+"</a>",u}image(n,t,s){const o=Bc(n);if(o===null)return s;n=o;let u=`<img src="${n}" alt="${s}"`;return t&&(u+=` title="${t}"`),u+=">",u}text(n){return n}}class Ba{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,s){return""+s}image(n,t,s){return""+s}br(){return""}}class lt{constructor(n){_e(this,"options");_e(this,"renderer");_e(this,"textRenderer");this.options=n||li,this.options.renderer=this.options.renderer||new vs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ba}static parse(n,t){return new lt(t).parse(n)}static parseInline(n,t){return new lt(t).parseInline(n)}parse(n,t=!0){let s="";for(let o=0;o<n.length;o++){const u=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=u,f=this.options.extensions.renderers[l.type].call({parser:this},l);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){s+=f||"";continue}}switch(u.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{const l=u;s+=this.renderer.heading(this.parseInline(l.tokens),l.depth,pI(this.parseInline(l.tokens,this.textRenderer)));continue}case"code":{const l=u;s+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{const l=u;let f="",d="";for(let T=0;T<l.header.length;T++)d+=this.renderer.tablecell(this.parseInline(l.header[T].tokens),{header:!0,align:l.align[T]});f+=this.renderer.tablerow(d);let y="";for(let T=0;T<l.rows.length;T++){const D=l.rows[T];d="";for(let N=0;N<D.length;N++)d+=this.renderer.tablecell(this.parseInline(D[N].tokens),{header:!1,align:l.align[N]});y+=this.renderer.tablerow(d)}s+=this.renderer.table(f,y);continue}case"blockquote":{const l=u,f=this.parse(l.tokens);s+=this.renderer.blockquote(f);continue}case"list":{const l=u,f=l.ordered,d=l.start,y=l.loose;let T="";for(let D=0;D<l.items.length;D++){const N=l.items[D],O=N.checked,x=N.task;let L="";if(N.task){const J=this.renderer.checkbox(!!O);y?N.tokens.length>0&&N.tokens[0].type==="paragraph"?(N.tokens[0].text=J+" "+N.tokens[0].text,N.tokens[0].tokens&&N.tokens[0].tokens.length>0&&N.tokens[0].tokens[0].type==="text"&&(N.tokens[0].tokens[0].text=J+" "+N.tokens[0].tokens[0].text)):N.tokens.unshift({type:"text",text:J+" "}):L+=J+" "}L+=this.parse(N.tokens,y),T+=this.renderer.listitem(L,x,!!O)}s+=this.renderer.list(T,f,d);continue}case"html":{const l=u;s+=this.renderer.html(l.text,l.block);continue}case"paragraph":{const l=u;s+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{let l=u,f=l.tokens?this.parseInline(l.tokens):l.text;for(;o+1<n.length&&n[o+1].type==="text";)l=n[++o],f+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);s+=t?this.renderer.paragraph(f):f;continue}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let o=0;o<n.length;o++){const u=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=this.options.extensions.renderers[u.type].call({parser:this},u);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=l||"";continue}}switch(u.type){case"escape":{const l=u;s+=t.text(l.text);break}case"html":{const l=u;s+=t.html(l.text);break}case"link":{const l=u;s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{const l=u;s+=t.image(l.href,l.title,l.text);break}case"strong":{const l=u;s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{const l=u;s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{const l=u;s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{const l=u;s+=t.del(this.parseInline(l.tokens,t));break}case"text":{const l=u;s+=t.text(l.text);break}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}}class or{constructor(n){_e(this,"options");this.options=n||li}preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}}_e(or,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var pr,Ta,Ss,If;class GI{constructor(...n){la(this,pr);la(this,Ss);_e(this,"defaults",Na());_e(this,"options",this.setOptions);_e(this,"parse",ls(this,pr,Ta).call(this,Qn.lex,lt.parse));_e(this,"parseInline",ls(this,pr,Ta).call(this,Qn.lexInline,lt.parseInline));_e(this,"Parser",lt);_e(this,"Renderer",vs);_e(this,"TextRenderer",Ba);_e(this,"Lexer",Qn);_e(this,"Tokenizer",Is);_e(this,"Hooks",or);this.use(...n)}walkTokens(n,t){var o,u;let s=[];for(const l of n)switch(s=s.concat(t.call(this,l)),l.type){case"table":{const f=l;for(const d of f.header)s=s.concat(this.walkTokens(d.tokens,t));for(const d of f.rows)for(const y of d)s=s.concat(this.walkTokens(y.tokens,t));break}case"list":{const f=l;s=s.concat(this.walkTokens(f.items,t));break}default:{const f=l;(u=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&u[f.type]?this.defaults.extensions.childTokens[f.type].forEach(d=>{const y=f[d].flat(1/0);s=s.concat(this.walkTokens(y,t))}):f.tokens&&(s=s.concat(this.walkTokens(f.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const o={...s};if(o.async=this.defaults.async||o.async||!1,s.extensions&&(s.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const l=t.renderers[u.name];l?t.renderers[u.name]=function(...f){let d=u.renderer.apply(this,f);return d===!1&&(d=l.apply(this,f)),d}:t.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[u.level];l?l.unshift(u.tokenizer):t[u.level]=[u.tokenizer],u.start&&(u.level==="block"?t.startBlock?t.startBlock.push(u.start):t.startBlock=[u.start]:u.level==="inline"&&(t.startInline?t.startInline.push(u.start):t.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(t.childTokens[u.name]=u.childTokens)}),o.extensions=t),s.renderer){const u=this.defaults.renderer||new vs(this.defaults);for(const l in s.renderer){if(!(l in u))throw new Error(`renderer '${l}' does not exist`);if(l==="options")continue;const f=l,d=s.renderer[f],y=u[f];u[f]=(...T)=>{let D=d.apply(u,T);return D===!1&&(D=y.apply(u,T)),D||""}}o.renderer=u}if(s.tokenizer){const u=this.defaults.tokenizer||new Is(this.defaults);for(const l in s.tokenizer){if(!(l in u))throw new Error(`tokenizer '${l}' does not exist`);if(["options","rules","lexer"].includes(l))continue;const f=l,d=s.tokenizer[f],y=u[f];u[f]=(...T)=>{let D=d.apply(u,T);return D===!1&&(D=y.apply(u,T)),D}}o.tokenizer=u}if(s.hooks){const u=this.defaults.hooks||new or;for(const l in s.hooks){if(!(l in u))throw new Error(`hook '${l}' does not exist`);if(l==="options")continue;const f=l,d=s.hooks[f],y=u[f];or.passThroughHooks.has(l)?u[f]=T=>{if(this.defaults.async)return Promise.resolve(d.call(u,T)).then(N=>y.call(u,N));const D=d.call(u,T);return y.call(u,D)}:u[f]=(...T)=>{let D=d.apply(u,T);return D===!1&&(D=y.apply(u,T)),D}}o.hooks=u}if(s.walkTokens){const u=this.defaults.walkTokens,l=s.walkTokens;o.walkTokens=function(f){let d=[];return d.push(l.call(this,f)),u&&(d=d.concat(u.call(this,f))),d}}this.defaults={...this.defaults,...o}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,t){return Qn.lex(n,t??this.defaults)}parser(n,t){return lt.parse(n,t??this.defaults)}}pr=new WeakSet,Ta=function(n,t){return(s,o)=>{const u={...o},l={...this.defaults,...u};this.defaults.async===!0&&u.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const f=ls(this,Ss,If).call(this,!!l.silent,!!l.async);if(typeof s>"u"||s===null)return f(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return f(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(s):s).then(d=>n(d,l)).then(d=>l.hooks?l.hooks.processAllTokens(d):d).then(d=>l.walkTokens?Promise.all(this.walkTokens(d,l.walkTokens)).then(()=>d):d).then(d=>t(d,l)).then(d=>l.hooks?l.hooks.postprocess(d):d).catch(f);try{l.hooks&&(s=l.hooks.preprocess(s));let d=n(s,l);l.hooks&&(d=l.hooks.processAllTokens(d)),l.walkTokens&&this.walkTokens(d,l.walkTokens);let y=t(d,l);return l.hooks&&(y=l.hooks.postprocess(y)),y}catch(d){return f(d)}}},Ss=new WeakSet,If=function(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const o="<p>An error occurred:</p><pre>"+_n(s.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(s);throw s}};const oi=new GI;function ye(i,n){return oi.parse(i,n)}ye.options=ye.setOptions=function(i){return oi.setOptions(i),ye.defaults=oi.defaults,cf(ye.defaults),ye};ye.getDefaults=Na;ye.defaults=li;ye.use=function(...i){return oi.use(...i),ye.defaults=oi.defaults,cf(ye.defaults),ye};ye.walkTokens=function(i,n){return oi.walkTokens(i,n)};ye.parseInline=oi.parseInline;ye.Parser=lt;ye.parser=lt.parse;ye.Renderer=vs;ye.TextRenderer=Ba;ye.Lexer=Qn;ye.lexer=Qn.lex;ye.Tokenizer=Is;ye.Hooks=or;ye.parse=ye;ye.options;ye.setOptions;ye.use;ye.walkTokens;ye.parseInline;lt.parse;Qn.lex;const qI=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,jI=Object.hasOwnProperty;class Df{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let o=WI(n,t===!0);const u=o;for(;jI.call(s.occurrences,o);)s.occurrences[u]++,o=u+"-"+s.occurrences[u];return s.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function WI(i,n){return typeof i!="string"?"":(n||(i=i.toLowerCase()),i.replace(qI,"").replace(/ /g,"-"))}function YI(i){return new Qn().lex(i)}const QI=()=>({heading:nE,blockquote:rE,list:hE,list_item:yE,br:IE,code:AE,codespan:wE,table:FE,html:RE,paragraph:LE,link:UE,text:VE,def:jE,del:QE,em:HE,hr:ZE,strong:tI,image:sI,space:xc,escape:xc}),zI=()=>({baseUrl:"/",slugger:new Df});function JI(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},XT(()=>{console.warn=i})}function HI(i){let n,t;return n=new Cs({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){qt(n.$$.fragment)},l(s){ui(n.$$.fragment,s)},m(s,o){jt(n,s,o),t=!0},p(s,[o]){const u={};o&1&&(u.tokens=s[0]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(ee(n.$$.fragment,s),t=!0)},o(s){oe(n.$$.fragment,s),t=!1},d(s){Wt(n,s)}}}function XI(i,n,t){JI();let{source:s}=n,{options:o={}}=n,{renderers:u={}}=n,l,f,d;return i.$$set=y=>{"source"in y&&t(3,s=y.source),"options"in y&&t(4,o=y.options),"renderers"in y&&t(5,u=y.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,l=YI(s)),t(1,f={...QI(),...u}),t(2,d={...zI(),...o}))},[l,f,d,s,o,u]}class _A extends xe{constructor(n){super(),Le(this,n,XI,HI,Se,{source:3,options:4,renderers:5})}}const mr={joinUrlPaths:lr,isRelative:cr,generatePathSegment:uf};var nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function KI(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ps(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function $c(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function ds(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function Vc(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}function An(i,n){const t=s=>n.convert(s[i]);return{name:ZI(i),key:i,asEnv:s=>({[i]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,o)=>t(s)??o}}function ZI(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}var Ns={APP_LOGO:An("APP_LOGO",ps()),APP_TITLE:An("APP_TITLE",ps()),APP_FAVICON:An("APP_FAVICON",ps()),SITE_ROOT:An("SITE_ROOT",ps()),SITE_META:An("SITE_META",$c(i=>i.string())),CUSTOM_STYLES:An("CUSTOM_STYLES",ds(i=>i.string())),FIELDS_SORTING:An("FIELDS_SORTING",Vc(["default","alphabetical"])),ARGUMENTS_SORTING:An("ARGUMENTS_SORTING",Vc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:An("QUERY_GENERATION_FACTORIES",$c(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:An("PAGES",ds(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:An("EXTERNAL_LINKS",ds(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:An("DIRECTIVES",ds(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};function eD(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1";case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}An("MAGIDOC_GENERATE",eD());var As={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */As.exports;(function(i,n){(function(){var t,s="4.17.21",o=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",f="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",y=500,T="__lodash_placeholder__",D=1,N=2,O=4,x=1,L=2,J=1,pe=2,$e=4,ve=8,Ce=16,Re=32,nn=64,He=128,dt=256,R=512,X=30,tn="...",Ot=800,zt=16,Tr=1,fi=2,Er=3,rt=1/0,Un=9007199254740991,pi=17976931348623157e292,Jt=NaN,bn=4294967295,w=bn-1,$=bn>>>1,P=[["ary",He],["bind",J],["bindKey",pe],["curry",ve],["curryRight",Ce],["flip",R],["partial",Re],["partialRight",nn],["rearg",dt]],U="[object Arguments]",de="[object Array]",Be="[object AsyncFunction]",he="[object Boolean]",wn="[object Date]",ki="[object DOMException]",Rt="[object Error]",Xe="[object Function]",qa="[object GeneratorFunction]",Mn="[object Map]",xi="[object Number]",lp="[object Null]",ht="[object Object]",ja="[object Promise]",cp="[object Proxy]",Li="[object RegExp]",$n="[object Set]",Bi="[object String]",Ir="[object Symbol]",fp="[object Undefined]",Pi="[object WeakMap]",pp="[object WeakSet]",Ui="[object ArrayBuffer]",di="[object DataView]",Vs="[object Float32Array]",Gs="[object Float64Array]",qs="[object Int8Array]",js="[object Int16Array]",Ws="[object Int32Array]",Ys="[object Uint8Array]",Qs="[object Uint8ClampedArray]",zs="[object Uint16Array]",Js="[object Uint32Array]",dp=/\b__p \+= '';/g,hp=/\b(__p \+=) '' \+/g,mp=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Wa=/&(?:amp|lt|gt|quot|#39);/g,Ya=/[&<>"']/g,gp=RegExp(Wa.source),yp=RegExp(Ya.source),Tp=/<%-([\s\S]+?)%>/g,Ep=/<%([\s\S]+?)%>/g,Qa=/<%=([\s\S]+?)%>/g,Ip=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dp=/^\w*$/,vp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hs=/[\\^$.*+?()[\]{}|]/g,Ap=RegExp(Hs.source),Xs=/^\s+/,_p=/\s/,bp=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,wp=/\{\n\/\* \[wrapped with (.+)\] \*/,Sp=/,? & /,Cp=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Fp=/[()=,{}\[\]\/\s]/,Np=/\\(\\)?/g,Op=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,za=/\w*$/,Rp=/^[-+]0x[0-9a-f]+$/i,kp=/^0b[01]+$/i,xp=/^\[object .+?Constructor\]$/,Lp=/^0o[0-7]+$/i,Bp=/^(?:0|[1-9]\d*)$/,Pp=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Dr=/($^)/,Up=/['\n\r\u2028\u2029\\]/g,vr="\\ud800-\\udfff",Mp="\\u0300-\\u036f",$p="\\ufe20-\\ufe2f",Vp="\\u20d0-\\u20ff",Ja=Mp+$p+Vp,Ha="\\u2700-\\u27bf",Xa="a-z\\xdf-\\xf6\\xf8-\\xff",Gp="\\xac\\xb1\\xd7\\xf7",qp="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",jp="\\u2000-\\u206f",Wp=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ka="A-Z\\xc0-\\xd6\\xd8-\\xde",Za="\\ufe0e\\ufe0f",eu=Gp+qp+jp+Wp,Ks="['’]",Yp="["+vr+"]",nu="["+eu+"]",Ar="["+Ja+"]",tu="\\d+",Qp="["+Ha+"]",iu="["+Xa+"]",ru="[^"+vr+eu+tu+Ha+Xa+Ka+"]",Zs="\\ud83c[\\udffb-\\udfff]",zp="(?:"+Ar+"|"+Zs+")",su="[^"+vr+"]",eo="(?:\\ud83c[\\udde6-\\uddff]){2}",no="[\\ud800-\\udbff][\\udc00-\\udfff]",hi="["+Ka+"]",ou="\\u200d",au="(?:"+iu+"|"+ru+")",Jp="(?:"+hi+"|"+ru+")",uu="(?:"+Ks+"(?:d|ll|m|re|s|t|ve))?",lu="(?:"+Ks+"(?:D|LL|M|RE|S|T|VE))?",cu=zp+"?",fu="["+Za+"]?",Hp="(?:"+ou+"(?:"+[su,eo,no].join("|")+")"+fu+cu+")*",Xp="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Kp="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",pu=fu+cu+Hp,Zp="(?:"+[Qp,eo,no].join("|")+")"+pu,ed="(?:"+[su+Ar+"?",Ar,eo,no,Yp].join("|")+")",nd=RegExp(Ks,"g"),td=RegExp(Ar,"g"),to=RegExp(Zs+"(?="+Zs+")|"+ed+pu,"g"),id=RegExp([hi+"?"+iu+"+"+uu+"(?="+[nu,hi,"$"].join("|")+")",Jp+"+"+lu+"(?="+[nu,hi+au,"$"].join("|")+")",hi+"?"+au+"+"+uu,hi+"+"+lu,Kp,Xp,tu,Zp].join("|"),"g"),rd=RegExp("["+ou+vr+Ja+Za+"]"),sd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,od=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ad=-1,be={};be[Vs]=be[Gs]=be[qs]=be[js]=be[Ws]=be[Ys]=be[Qs]=be[zs]=be[Js]=!0,be[U]=be[de]=be[Ui]=be[he]=be[di]=be[wn]=be[Rt]=be[Xe]=be[Mn]=be[xi]=be[ht]=be[Li]=be[$n]=be[Bi]=be[Pi]=!1;var Ae={};Ae[U]=Ae[de]=Ae[Ui]=Ae[di]=Ae[he]=Ae[wn]=Ae[Vs]=Ae[Gs]=Ae[qs]=Ae[js]=Ae[Ws]=Ae[Mn]=Ae[xi]=Ae[ht]=Ae[Li]=Ae[$n]=Ae[Bi]=Ae[Ir]=Ae[Ys]=Ae[Qs]=Ae[zs]=Ae[Js]=!0,Ae[Rt]=Ae[Xe]=Ae[Pi]=!1;var ud={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},ld={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},cd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},fd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},pd=parseFloat,dd=parseInt,du=typeof nr=="object"&&nr&&nr.Object===Object&&nr,hd=typeof self=="object"&&self&&self.Object===Object&&self,Qe=du||hd||Function("return this")(),io=n&&!n.nodeType&&n,Ht=io&&!0&&i&&!i.nodeType&&i,hu=Ht&&Ht.exports===io,ro=hu&&du.process,Sn=function(){try{var I=Ht&&Ht.require&&Ht.require("util").types;return I||ro&&ro.binding&&ro.binding("util")}catch{}}(),mu=Sn&&Sn.isArrayBuffer,gu=Sn&&Sn.isDate,yu=Sn&&Sn.isMap,Tu=Sn&&Sn.isRegExp,Eu=Sn&&Sn.isSet,Iu=Sn&&Sn.isTypedArray;function yn(I,b,_){switch(_.length){case 0:return I.call(b);case 1:return I.call(b,_[0]);case 2:return I.call(b,_[0],_[1]);case 3:return I.call(b,_[0],_[1],_[2])}return I.apply(b,_)}function md(I,b,_,M){for(var K=-1,fe=I==null?0:I.length;++K<fe;){var qe=I[K];b(M,qe,_(qe),I)}return M}function Cn(I,b){for(var _=-1,M=I==null?0:I.length;++_<M&&b(I[_],_,I)!==!1;);return I}function gd(I,b){for(var _=I==null?0:I.length;_--&&b(I[_],_,I)!==!1;);return I}function Du(I,b){for(var _=-1,M=I==null?0:I.length;++_<M;)if(!b(I[_],_,I))return!1;return!0}function kt(I,b){for(var _=-1,M=I==null?0:I.length,K=0,fe=[];++_<M;){var qe=I[_];b(qe,_,I)&&(fe[K++]=qe)}return fe}function _r(I,b){var _=I==null?0:I.length;return!!_&&mi(I,b,0)>-1}function so(I,b,_){for(var M=-1,K=I==null?0:I.length;++M<K;)if(_(b,I[M]))return!0;return!1}function we(I,b){for(var _=-1,M=I==null?0:I.length,K=Array(M);++_<M;)K[_]=b(I[_],_,I);return K}function xt(I,b){for(var _=-1,M=b.length,K=I.length;++_<M;)I[K+_]=b[_];return I}function oo(I,b,_,M){var K=-1,fe=I==null?0:I.length;for(M&&fe&&(_=I[++K]);++K<fe;)_=b(_,I[K],K,I);return _}function yd(I,b,_,M){var K=I==null?0:I.length;for(M&&K&&(_=I[--K]);K--;)_=b(_,I[K],K,I);return _}function ao(I,b){for(var _=-1,M=I==null?0:I.length;++_<M;)if(b(I[_],_,I))return!0;return!1}var Td=uo("length");function Ed(I){return I.split("")}function Id(I){return I.match(Cp)||[]}function vu(I,b,_){var M;return _(I,function(K,fe,qe){if(b(K,fe,qe))return M=fe,!1}),M}function br(I,b,_,M){for(var K=I.length,fe=_+(M?1:-1);M?fe--:++fe<K;)if(b(I[fe],fe,I))return fe;return-1}function mi(I,b,_){return b===b?Rd(I,b,_):br(I,Au,_)}function Dd(I,b,_,M){for(var K=_-1,fe=I.length;++K<fe;)if(M(I[K],b))return K;return-1}function Au(I){return I!==I}function _u(I,b){var _=I==null?0:I.length;return _?co(I,b)/_:Jt}function uo(I){return function(b){return b==null?t:b[I]}}function lo(I){return function(b){return I==null?t:I[b]}}function bu(I,b,_,M,K){return K(I,function(fe,qe,Ie){_=M?(M=!1,fe):b(_,fe,qe,Ie)}),_}function vd(I,b){var _=I.length;for(I.sort(b);_--;)I[_]=I[_].value;return I}function co(I,b){for(var _,M=-1,K=I.length;++M<K;){var fe=b(I[M]);fe!==t&&(_=_===t?fe:_+fe)}return _}function fo(I,b){for(var _=-1,M=Array(I);++_<I;)M[_]=b(_);return M}function Ad(I,b){return we(b,function(_){return[_,I[_]]})}function wu(I){return I&&I.slice(0,Nu(I)+1).replace(Xs,"")}function Tn(I){return function(b){return I(b)}}function po(I,b){return we(b,function(_){return I[_]})}function Mi(I,b){return I.has(b)}function Su(I,b){for(var _=-1,M=I.length;++_<M&&mi(b,I[_],0)>-1;);return _}function Cu(I,b){for(var _=I.length;_--&&mi(b,I[_],0)>-1;);return _}function _d(I,b){for(var _=I.length,M=0;_--;)I[_]===b&&++M;return M}var bd=lo(ud),wd=lo(ld);function Sd(I){return"\\"+fd[I]}function Cd(I,b){return I==null?t:I[b]}function gi(I){return rd.test(I)}function Fd(I){return sd.test(I)}function Nd(I){for(var b,_=[];!(b=I.next()).done;)_.push(b.value);return _}function ho(I){var b=-1,_=Array(I.size);return I.forEach(function(M,K){_[++b]=[K,M]}),_}function Fu(I,b){return function(_){return I(b(_))}}function Lt(I,b){for(var _=-1,M=I.length,K=0,fe=[];++_<M;){var qe=I[_];(qe===b||qe===T)&&(I[_]=T,fe[K++]=_)}return fe}function wr(I){var b=-1,_=Array(I.size);return I.forEach(function(M){_[++b]=M}),_}function Od(I){var b=-1,_=Array(I.size);return I.forEach(function(M){_[++b]=[M,M]}),_}function Rd(I,b,_){for(var M=_-1,K=I.length;++M<K;)if(I[M]===b)return M;return-1}function kd(I,b,_){for(var M=_+1;M--;)if(I[M]===b)return M;return M}function yi(I){return gi(I)?Ld(I):Td(I)}function Vn(I){return gi(I)?Bd(I):Ed(I)}function Nu(I){for(var b=I.length;b--&&_p.test(I.charAt(b)););return b}var xd=lo(cd);function Ld(I){for(var b=to.lastIndex=0;to.test(I);)++b;return b}function Bd(I){return I.match(to)||[]}function Pd(I){return I.match(id)||[]}var Ud=function I(b){b=b==null?Qe:Ti.defaults(Qe.Object(),b,Ti.pick(Qe,od));var _=b.Array,M=b.Date,K=b.Error,fe=b.Function,qe=b.Math,Ie=b.Object,mo=b.RegExp,Md=b.String,Fn=b.TypeError,Sr=_.prototype,$d=fe.prototype,Ei=Ie.prototype,Cr=b["__core-js_shared__"],Fr=$d.toString,ge=Ei.hasOwnProperty,Vd=0,Ou=function(){var e=/[^.]+$/.exec(Cr&&Cr.keys&&Cr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Nr=Ei.toString,Gd=Fr.call(Ie),qd=Qe._,jd=mo("^"+Fr.call(ge).replace(Hs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Or=hu?b.Buffer:t,Bt=b.Symbol,Rr=b.Uint8Array,Ru=Or?Or.allocUnsafe:t,kr=Fu(Ie.getPrototypeOf,Ie),ku=Ie.create,xu=Ei.propertyIsEnumerable,xr=Sr.splice,Lu=Bt?Bt.isConcatSpreadable:t,$i=Bt?Bt.iterator:t,Xt=Bt?Bt.toStringTag:t,Lr=function(){try{var e=ti(Ie,"defineProperty");return e({},"",{}),e}catch{}}(),Wd=b.clearTimeout!==Qe.clearTimeout&&b.clearTimeout,Yd=M&&M.now!==Qe.Date.now&&M.now,Qd=b.setTimeout!==Qe.setTimeout&&b.setTimeout,Br=qe.ceil,Pr=qe.floor,go=Ie.getOwnPropertySymbols,zd=Or?Or.isBuffer:t,Bu=b.isFinite,Jd=Sr.join,Hd=Fu(Ie.keys,Ie),je=qe.max,Ke=qe.min,Xd=M.now,Kd=b.parseInt,Pu=qe.random,Zd=Sr.reverse,yo=ti(b,"DataView"),Vi=ti(b,"Map"),To=ti(b,"Promise"),Ii=ti(b,"Set"),Gi=ti(b,"WeakMap"),qi=ti(Ie,"create"),Ur=Gi&&new Gi,Di={},eh=ii(yo),nh=ii(Vi),th=ii(To),ih=ii(Ii),rh=ii(Gi),Mr=Bt?Bt.prototype:t,ji=Mr?Mr.valueOf:t,Uu=Mr?Mr.toString:t;function h(e){if(ke(e)&&!Z(e)&&!(e instanceof ae)){if(e instanceof Nn)return e;if(ge.call(e,"__wrapped__"))return Ml(e)}return new Nn(e)}var vi=function(){function e(){}return function(r){if(!Fe(r))return{};if(ku)return ku(r);e.prototype=r;var a=new e;return e.prototype=t,a}}();function $r(){}function Nn(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}h.templateSettings={escape:Tp,evaluate:Ep,interpolate:Qa,variable:"",imports:{_:h}},h.prototype=$r.prototype,h.prototype.constructor=h,Nn.prototype=vi($r.prototype),Nn.prototype.constructor=Nn;function ae(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=bn,this.__views__=[]}function sh(){var e=new ae(this.__wrapped__);return e.__actions__=ln(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ln(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ln(this.__views__),e}function oh(){if(this.__filtered__){var e=new ae(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function ah(){var e=this.__wrapped__.value(),r=this.__dir__,a=Z(e),c=r<0,p=a?e.length:0,m=Em(0,p,this.__views__),g=m.start,E=m.end,v=E-g,S=c?E:g-1,C=this.__iteratees__,k=C.length,B=0,G=Ke(v,this.__takeCount__);if(!a||!c&&p==v&&G==v)return ul(e,this.__actions__);var Q=[];e:for(;v--&&B<G;){S+=r;for(var te=-1,z=e[S];++te<k;){var re=C[te],le=re.iteratee,Dn=re.type,on=le(z);if(Dn==fi)z=on;else if(!on){if(Dn==Tr)continue e;break e}}Q[B++]=z}return Q}ae.prototype=vi($r.prototype),ae.prototype.constructor=ae;function Kt(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var c=e[r];this.set(c[0],c[1])}}function uh(){this.__data__=qi?qi(null):{},this.size=0}function lh(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function ch(e){var r=this.__data__;if(qi){var a=r[e];return a===d?t:a}return ge.call(r,e)?r[e]:t}function fh(e){var r=this.__data__;return qi?r[e]!==t:ge.call(r,e)}function ph(e,r){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=qi&&r===t?d:r,this}Kt.prototype.clear=uh,Kt.prototype.delete=lh,Kt.prototype.get=ch,Kt.prototype.has=fh,Kt.prototype.set=ph;function mt(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var c=e[r];this.set(c[0],c[1])}}function dh(){this.__data__=[],this.size=0}function hh(e){var r=this.__data__,a=Vr(r,e);if(a<0)return!1;var c=r.length-1;return a==c?r.pop():xr.call(r,a,1),--this.size,!0}function mh(e){var r=this.__data__,a=Vr(r,e);return a<0?t:r[a][1]}function gh(e){return Vr(this.__data__,e)>-1}function yh(e,r){var a=this.__data__,c=Vr(a,e);return c<0?(++this.size,a.push([e,r])):a[c][1]=r,this}mt.prototype.clear=dh,mt.prototype.delete=hh,mt.prototype.get=mh,mt.prototype.has=gh,mt.prototype.set=yh;function gt(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var c=e[r];this.set(c[0],c[1])}}function Th(){this.size=0,this.__data__={hash:new Kt,map:new(Vi||mt),string:new Kt}}function Eh(e){var r=Zr(this,e).delete(e);return this.size-=r?1:0,r}function Ih(e){return Zr(this,e).get(e)}function Dh(e){return Zr(this,e).has(e)}function vh(e,r){var a=Zr(this,e),c=a.size;return a.set(e,r),this.size+=a.size==c?0:1,this}gt.prototype.clear=Th,gt.prototype.delete=Eh,gt.prototype.get=Ih,gt.prototype.has=Dh,gt.prototype.set=vh;function Zt(e){var r=-1,a=e==null?0:e.length;for(this.__data__=new gt;++r<a;)this.add(e[r])}function Ah(e){return this.__data__.set(e,d),this}function _h(e){return this.__data__.has(e)}Zt.prototype.add=Zt.prototype.push=Ah,Zt.prototype.has=_h;function Gn(e){var r=this.__data__=new mt(e);this.size=r.size}function bh(){this.__data__=new mt,this.size=0}function wh(e){var r=this.__data__,a=r.delete(e);return this.size=r.size,a}function Sh(e){return this.__data__.get(e)}function Ch(e){return this.__data__.has(e)}function Fh(e,r){var a=this.__data__;if(a instanceof mt){var c=a.__data__;if(!Vi||c.length<o-1)return c.push([e,r]),this.size=++a.size,this;a=this.__data__=new gt(c)}return a.set(e,r),this.size=a.size,this}Gn.prototype.clear=bh,Gn.prototype.delete=wh,Gn.prototype.get=Sh,Gn.prototype.has=Ch,Gn.prototype.set=Fh;function Mu(e,r){var a=Z(e),c=!a&&ri(e),p=!a&&!c&&Vt(e),m=!a&&!c&&!p&&wi(e),g=a||c||p||m,E=g?fo(e.length,Md):[],v=E.length;for(var S in e)(r||ge.call(e,S))&&!(g&&(S=="length"||p&&(S=="offset"||S=="parent")||m&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||It(S,v)))&&E.push(S);return E}function $u(e){var r=e.length;return r?e[Fo(0,r-1)]:t}function Nh(e,r){return es(ln(e),ei(r,0,e.length))}function Oh(e){return es(ln(e))}function Eo(e,r,a){(a!==t&&!qn(e[r],a)||a===t&&!(r in e))&&yt(e,r,a)}function Wi(e,r,a){var c=e[r];(!(ge.call(e,r)&&qn(c,a))||a===t&&!(r in e))&&yt(e,r,a)}function Vr(e,r){for(var a=e.length;a--;)if(qn(e[a][0],r))return a;return-1}function Rh(e,r,a,c){return Pt(e,function(p,m,g){r(c,p,a(p),g)}),c}function Vu(e,r){return e&&ot(r,We(r),e)}function kh(e,r){return e&&ot(r,fn(r),e)}function yt(e,r,a){r=="__proto__"&&Lr?Lr(e,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[r]=a}function Io(e,r){for(var a=-1,c=r.length,p=_(c),m=e==null;++a<c;)p[a]=m?t:ea(e,r[a]);return p}function ei(e,r,a){return e===e&&(a!==t&&(e=e<=a?e:a),r!==t&&(e=e>=r?e:r)),e}function On(e,r,a,c,p,m){var g,E=r&D,v=r&N,S=r&O;if(a&&(g=p?a(e,c,p,m):a(e)),g!==t)return g;if(!Fe(e))return e;var C=Z(e);if(C){if(g=Dm(e),!E)return ln(e,g)}else{var k=Ze(e),B=k==Xe||k==qa;if(Vt(e))return fl(e,E);if(k==ht||k==U||B&&!p){if(g=v||B?{}:Nl(e),!E)return v?cm(e,kh(g,e)):lm(e,Vu(g,e))}else{if(!Ae[k])return p?e:{};g=vm(e,k,E)}}m||(m=new Gn);var G=m.get(e);if(G)return G;m.set(e,g),sc(e)?e.forEach(function(z){g.add(On(z,r,a,z,e,m))}):ic(e)&&e.forEach(function(z,re){g.set(re,On(z,r,a,re,e,m))});var Q=S?v?$o:Mo:v?fn:We,te=C?t:Q(e);return Cn(te||e,function(z,re){te&&(re=z,z=e[re]),Wi(g,re,On(z,r,a,re,e,m))}),g}function xh(e){var r=We(e);return function(a){return Gu(a,e,r)}}function Gu(e,r,a){var c=a.length;if(e==null)return!c;for(e=Ie(e);c--;){var p=a[c],m=r[p],g=e[p];if(g===t&&!(p in e)||!m(g))return!1}return!0}function qu(e,r,a){if(typeof e!="function")throw new Fn(l);return Ki(function(){e.apply(t,a)},r)}function Yi(e,r,a,c){var p=-1,m=_r,g=!0,E=e.length,v=[],S=r.length;if(!E)return v;a&&(r=we(r,Tn(a))),c?(m=so,g=!1):r.length>=o&&(m=Mi,g=!1,r=new Zt(r));e:for(;++p<E;){var C=e[p],k=a==null?C:a(C);if(C=c||C!==0?C:0,g&&k===k){for(var B=S;B--;)if(r[B]===k)continue e;v.push(C)}else m(r,k,c)||v.push(C)}return v}var Pt=gl(st),ju=gl(vo,!0);function Lh(e,r){var a=!0;return Pt(e,function(c,p,m){return a=!!r(c,p,m),a}),a}function Gr(e,r,a){for(var c=-1,p=e.length;++c<p;){var m=e[c],g=r(m);if(g!=null&&(E===t?g===g&&!In(g):a(g,E)))var E=g,v=m}return v}function Bh(e,r,a,c){var p=e.length;for(a=ne(a),a<0&&(a=-a>p?0:p+a),c=c===t||c>p?p:ne(c),c<0&&(c+=p),c=a>c?0:ac(c);a<c;)e[a++]=r;return e}function Wu(e,r){var a=[];return Pt(e,function(c,p,m){r(c,p,m)&&a.push(c)}),a}function ze(e,r,a,c,p){var m=-1,g=e.length;for(a||(a=_m),p||(p=[]);++m<g;){var E=e[m];r>0&&a(E)?r>1?ze(E,r-1,a,c,p):xt(p,E):c||(p[p.length]=E)}return p}var Do=yl(),Yu=yl(!0);function st(e,r){return e&&Do(e,r,We)}function vo(e,r){return e&&Yu(e,r,We)}function qr(e,r){return kt(r,function(a){return Dt(e[a])})}function ni(e,r){r=Mt(r,e);for(var a=0,c=r.length;e!=null&&a<c;)e=e[at(r[a++])];return a&&a==c?e:t}function Qu(e,r,a){var c=r(e);return Z(e)?c:xt(c,a(e))}function rn(e){return e==null?e===t?fp:lp:Xt&&Xt in Ie(e)?Tm(e):Om(e)}function Ao(e,r){return e>r}function Ph(e,r){return e!=null&&ge.call(e,r)}function Uh(e,r){return e!=null&&r in Ie(e)}function Mh(e,r,a){return e>=Ke(r,a)&&e<je(r,a)}function _o(e,r,a){for(var c=a?so:_r,p=e[0].length,m=e.length,g=m,E=_(m),v=1/0,S=[];g--;){var C=e[g];g&&r&&(C=we(C,Tn(r))),v=Ke(C.length,v),E[g]=!a&&(r||p>=120&&C.length>=120)?new Zt(g&&C):t}C=e[0];var k=-1,B=E[0];e:for(;++k<p&&S.length<v;){var G=C[k],Q=r?r(G):G;if(G=a||G!==0?G:0,!(B?Mi(B,Q):c(S,Q,a))){for(g=m;--g;){var te=E[g];if(!(te?Mi(te,Q):c(e[g],Q,a)))continue e}B&&B.push(Q),S.push(G)}}return S}function $h(e,r,a,c){return st(e,function(p,m,g){r(c,a(p),m,g)}),c}function Qi(e,r,a){r=Mt(r,e),e=xl(e,r);var c=e==null?e:e[at(kn(r))];return c==null?t:yn(c,e,a)}function zu(e){return ke(e)&&rn(e)==U}function Vh(e){return ke(e)&&rn(e)==Ui}function Gh(e){return ke(e)&&rn(e)==wn}function zi(e,r,a,c,p){return e===r?!0:e==null||r==null||!ke(e)&&!ke(r)?e!==e&&r!==r:qh(e,r,a,c,zi,p)}function qh(e,r,a,c,p,m){var g=Z(e),E=Z(r),v=g?de:Ze(e),S=E?de:Ze(r);v=v==U?ht:v,S=S==U?ht:S;var C=v==ht,k=S==ht,B=v==S;if(B&&Vt(e)){if(!Vt(r))return!1;g=!0,C=!1}if(B&&!C)return m||(m=new Gn),g||wi(e)?Sl(e,r,a,c,p,m):gm(e,r,v,a,c,p,m);if(!(a&x)){var G=C&&ge.call(e,"__wrapped__"),Q=k&&ge.call(r,"__wrapped__");if(G||Q){var te=G?e.value():e,z=Q?r.value():r;return m||(m=new Gn),p(te,z,a,c,m)}}return B?(m||(m=new Gn),ym(e,r,a,c,p,m)):!1}function jh(e){return ke(e)&&Ze(e)==Mn}function bo(e,r,a,c){var p=a.length,m=p,g=!c;if(e==null)return!m;for(e=Ie(e);p--;){var E=a[p];if(g&&E[2]?E[1]!==e[E[0]]:!(E[0]in e))return!1}for(;++p<m;){E=a[p];var v=E[0],S=e[v],C=E[1];if(g&&E[2]){if(S===t&&!(v in e))return!1}else{var k=new Gn;if(c)var B=c(S,C,v,e,r,k);if(!(B===t?zi(C,S,x|L,c,k):B))return!1}}return!0}function Ju(e){if(!Fe(e)||wm(e))return!1;var r=Dt(e)?jd:xp;return r.test(ii(e))}function Wh(e){return ke(e)&&rn(e)==Li}function Yh(e){return ke(e)&&Ze(e)==$n}function Qh(e){return ke(e)&&os(e.length)&&!!be[rn(e)]}function Hu(e){return typeof e=="function"?e:e==null?pn:typeof e=="object"?Z(e)?Zu(e[0],e[1]):Ku(e):Tc(e)}function wo(e){if(!Xi(e))return Hd(e);var r=[];for(var a in Ie(e))ge.call(e,a)&&a!="constructor"&&r.push(a);return r}function zh(e){if(!Fe(e))return Nm(e);var r=Xi(e),a=[];for(var c in e)c=="constructor"&&(r||!ge.call(e,c))||a.push(c);return a}function So(e,r){return e<r}function Xu(e,r){var a=-1,c=cn(e)?_(e.length):[];return Pt(e,function(p,m,g){c[++a]=r(p,m,g)}),c}function Ku(e){var r=Go(e);return r.length==1&&r[0][2]?Rl(r[0][0],r[0][1]):function(a){return a===e||bo(a,e,r)}}function Zu(e,r){return jo(e)&&Ol(r)?Rl(at(e),r):function(a){var c=ea(a,e);return c===t&&c===r?na(a,e):zi(r,c,x|L)}}function jr(e,r,a,c,p){e!==r&&Do(r,function(m,g){if(p||(p=new Gn),Fe(m))Jh(e,r,g,a,jr,c,p);else{var E=c?c(Yo(e,g),m,g+"",e,r,p):t;E===t&&(E=m),Eo(e,g,E)}},fn)}function Jh(e,r,a,c,p,m,g){var E=Yo(e,a),v=Yo(r,a),S=g.get(v);if(S){Eo(e,a,S);return}var C=m?m(E,v,a+"",e,r,g):t,k=C===t;if(k){var B=Z(v),G=!B&&Vt(v),Q=!B&&!G&&wi(v);C=v,B||G||Q?Z(E)?C=E:Pe(E)?C=ln(E):G?(k=!1,C=fl(v,!0)):Q?(k=!1,C=pl(v,!0)):C=[]:Zi(v)||ri(v)?(C=E,ri(E)?C=uc(E):(!Fe(E)||Dt(E))&&(C=Nl(v))):k=!1}k&&(g.set(v,C),p(C,v,c,m,g),g.delete(v)),Eo(e,a,C)}function el(e,r){var a=e.length;if(a)return r+=r<0?a:0,It(r,a)?e[r]:t}function nl(e,r,a){r.length?r=we(r,function(m){return Z(m)?function(g){return ni(g,m.length===1?m[0]:m)}:m}):r=[pn];var c=-1;r=we(r,Tn(Y()));var p=Xu(e,function(m,g,E){var v=we(r,function(S){return S(m)});return{criteria:v,index:++c,value:m}});return vd(p,function(m,g){return um(m,g,a)})}function Hh(e,r){return tl(e,r,function(a,c){return na(e,c)})}function tl(e,r,a){for(var c=-1,p=r.length,m={};++c<p;){var g=r[c],E=ni(e,g);a(E,g)&&Ji(m,Mt(g,e),E)}return m}function Xh(e){return function(r){return ni(r,e)}}function Co(e,r,a,c){var p=c?Dd:mi,m=-1,g=r.length,E=e;for(e===r&&(r=ln(r)),a&&(E=we(e,Tn(a)));++m<g;)for(var v=0,S=r[m],C=a?a(S):S;(v=p(E,C,v,c))>-1;)E!==e&&xr.call(E,v,1),xr.call(e,v,1);return e}function il(e,r){for(var a=e?r.length:0,c=a-1;a--;){var p=r[a];if(a==c||p!==m){var m=p;It(p)?xr.call(e,p,1):Ro(e,p)}}return e}function Fo(e,r){return e+Pr(Pu()*(r-e+1))}function Kh(e,r,a,c){for(var p=-1,m=je(Br((r-e)/(a||1)),0),g=_(m);m--;)g[c?m:++p]=e,e+=a;return g}function No(e,r){var a="";if(!e||r<1||r>Un)return a;do r%2&&(a+=e),r=Pr(r/2),r&&(e+=e);while(r);return a}function ie(e,r){return Qo(kl(e,r,pn),e+"")}function Zh(e){return $u(Si(e))}function em(e,r){var a=Si(e);return es(a,ei(r,0,a.length))}function Ji(e,r,a,c){if(!Fe(e))return e;r=Mt(r,e);for(var p=-1,m=r.length,g=m-1,E=e;E!=null&&++p<m;){var v=at(r[p]),S=a;if(v==="__proto__"||v==="constructor"||v==="prototype")return e;if(p!=g){var C=E[v];S=c?c(C,v,E):t,S===t&&(S=Fe(C)?C:It(r[p+1])?[]:{})}Wi(E,v,S),E=E[v]}return e}var rl=Ur?function(e,r){return Ur.set(e,r),e}:pn,nm=Lr?function(e,r){return Lr(e,"toString",{configurable:!0,enumerable:!1,value:ia(r),writable:!0})}:pn;function tm(e){return es(Si(e))}function Rn(e,r,a){var c=-1,p=e.length;r<0&&(r=-r>p?0:p+r),a=a>p?p:a,a<0&&(a+=p),p=r>a?0:a-r>>>0,r>>>=0;for(var m=_(p);++c<p;)m[c]=e[c+r];return m}function im(e,r){var a;return Pt(e,function(c,p,m){return a=r(c,p,m),!a}),!!a}function Wr(e,r,a){var c=0,p=e==null?c:e.length;if(typeof r=="number"&&r===r&&p<=$){for(;c<p;){var m=c+p>>>1,g=e[m];g!==null&&!In(g)&&(a?g<=r:g<r)?c=m+1:p=m}return p}return Oo(e,r,pn,a)}function Oo(e,r,a,c){var p=0,m=e==null?0:e.length;if(m===0)return 0;r=a(r);for(var g=r!==r,E=r===null,v=In(r),S=r===t;p<m;){var C=Pr((p+m)/2),k=a(e[C]),B=k!==t,G=k===null,Q=k===k,te=In(k);if(g)var z=c||Q;else S?z=Q&&(c||B):E?z=Q&&B&&(c||!G):v?z=Q&&B&&!G&&(c||!te):G||te?z=!1:z=c?k<=r:k<r;z?p=C+1:m=C}return Ke(m,w)}function sl(e,r){for(var a=-1,c=e.length,p=0,m=[];++a<c;){var g=e[a],E=r?r(g):g;if(!a||!qn(E,v)){var v=E;m[p++]=g===0?0:g}}return m}function ol(e){return typeof e=="number"?e:In(e)?Jt:+e}function En(e){if(typeof e=="string")return e;if(Z(e))return we(e,En)+"";if(In(e))return Uu?Uu.call(e):"";var r=e+"";return r=="0"&&1/e==-rt?"-0":r}function Ut(e,r,a){var c=-1,p=_r,m=e.length,g=!0,E=[],v=E;if(a)g=!1,p=so;else if(m>=o){var S=r?null:hm(e);if(S)return wr(S);g=!1,p=Mi,v=new Zt}else v=r?[]:E;e:for(;++c<m;){var C=e[c],k=r?r(C):C;if(C=a||C!==0?C:0,g&&k===k){for(var B=v.length;B--;)if(v[B]===k)continue e;r&&v.push(k),E.push(C)}else p(v,k,a)||(v!==E&&v.push(k),E.push(C))}return E}function Ro(e,r){return r=Mt(r,e),e=xl(e,r),e==null||delete e[at(kn(r))]}function al(e,r,a,c){return Ji(e,r,a(ni(e,r)),c)}function Yr(e,r,a,c){for(var p=e.length,m=c?p:-1;(c?m--:++m<p)&&r(e[m],m,e););return a?Rn(e,c?0:m,c?m+1:p):Rn(e,c?m+1:0,c?p:m)}function ul(e,r){var a=e;return a instanceof ae&&(a=a.value()),oo(r,function(c,p){return p.func.apply(p.thisArg,xt([c],p.args))},a)}function ko(e,r,a){var c=e.length;if(c<2)return c?Ut(e[0]):[];for(var p=-1,m=_(c);++p<c;)for(var g=e[p],E=-1;++E<c;)E!=p&&(m[p]=Yi(m[p]||g,e[E],r,a));return Ut(ze(m,1),r,a)}function ll(e,r,a){for(var c=-1,p=e.length,m=r.length,g={};++c<p;){var E=c<m?r[c]:t;a(g,e[c],E)}return g}function xo(e){return Pe(e)?e:[]}function Lo(e){return typeof e=="function"?e:pn}function Mt(e,r){return Z(e)?e:jo(e,r)?[e]:Ul(me(e))}var rm=ie;function $t(e,r,a){var c=e.length;return a=a===t?c:a,!r&&a>=c?e:Rn(e,r,a)}var cl=Wd||function(e){return Qe.clearTimeout(e)};function fl(e,r){if(r)return e.slice();var a=e.length,c=Ru?Ru(a):new e.constructor(a);return e.copy(c),c}function Bo(e){var r=new e.constructor(e.byteLength);return new Rr(r).set(new Rr(e)),r}function sm(e,r){var a=r?Bo(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function om(e){var r=new e.constructor(e.source,za.exec(e));return r.lastIndex=e.lastIndex,r}function am(e){return ji?Ie(ji.call(e)):{}}function pl(e,r){var a=r?Bo(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function dl(e,r){if(e!==r){var a=e!==t,c=e===null,p=e===e,m=In(e),g=r!==t,E=r===null,v=r===r,S=In(r);if(!E&&!S&&!m&&e>r||m&&g&&v&&!E&&!S||c&&g&&v||!a&&v||!p)return 1;if(!c&&!m&&!S&&e<r||S&&a&&p&&!c&&!m||E&&a&&p||!g&&p||!v)return-1}return 0}function um(e,r,a){for(var c=-1,p=e.criteria,m=r.criteria,g=p.length,E=a.length;++c<g;){var v=dl(p[c],m[c]);if(v){if(c>=E)return v;var S=a[c];return v*(S=="desc"?-1:1)}}return e.index-r.index}function hl(e,r,a,c){for(var p=-1,m=e.length,g=a.length,E=-1,v=r.length,S=je(m-g,0),C=_(v+S),k=!c;++E<v;)C[E]=r[E];for(;++p<g;)(k||p<m)&&(C[a[p]]=e[p]);for(;S--;)C[E++]=e[p++];return C}function ml(e,r,a,c){for(var p=-1,m=e.length,g=-1,E=a.length,v=-1,S=r.length,C=je(m-E,0),k=_(C+S),B=!c;++p<C;)k[p]=e[p];for(var G=p;++v<S;)k[G+v]=r[v];for(;++g<E;)(B||p<m)&&(k[G+a[g]]=e[p++]);return k}function ln(e,r){var a=-1,c=e.length;for(r||(r=_(c));++a<c;)r[a]=e[a];return r}function ot(e,r,a,c){var p=!a;a||(a={});for(var m=-1,g=r.length;++m<g;){var E=r[m],v=c?c(a[E],e[E],E,a,e):t;v===t&&(v=e[E]),p?yt(a,E,v):Wi(a,E,v)}return a}function lm(e,r){return ot(e,qo(e),r)}function cm(e,r){return ot(e,Cl(e),r)}function Qr(e,r){return function(a,c){var p=Z(a)?md:Rh,m=r?r():{};return p(a,e,Y(c,2),m)}}function Ai(e){return ie(function(r,a){var c=-1,p=a.length,m=p>1?a[p-1]:t,g=p>2?a[2]:t;for(m=e.length>3&&typeof m=="function"?(p--,m):t,g&&sn(a[0],a[1],g)&&(m=p<3?t:m,p=1),r=Ie(r);++c<p;){var E=a[c];E&&e(r,E,c,m)}return r})}function gl(e,r){return function(a,c){if(a==null)return a;if(!cn(a))return e(a,c);for(var p=a.length,m=r?p:-1,g=Ie(a);(r?m--:++m<p)&&c(g[m],m,g)!==!1;);return a}}function yl(e){return function(r,a,c){for(var p=-1,m=Ie(r),g=c(r),E=g.length;E--;){var v=g[e?E:++p];if(a(m[v],v,m)===!1)break}return r}}function fm(e,r,a){var c=r&J,p=Hi(e);function m(){var g=this&&this!==Qe&&this instanceof m?p:e;return g.apply(c?a:this,arguments)}return m}function Tl(e){return function(r){r=me(r);var a=gi(r)?Vn(r):t,c=a?a[0]:r.charAt(0),p=a?$t(a,1).join(""):r.slice(1);return c[e]()+p}}function _i(e){return function(r){return oo(gc(mc(r).replace(nd,"")),e,"")}}function Hi(e){return function(){var r=arguments;switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3]);case 5:return new e(r[0],r[1],r[2],r[3],r[4]);case 6:return new e(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var a=vi(e.prototype),c=e.apply(a,r);return Fe(c)?c:a}}function pm(e,r,a){var c=Hi(e);function p(){for(var m=arguments.length,g=_(m),E=m,v=bi(p);E--;)g[E]=arguments[E];var S=m<3&&g[0]!==v&&g[m-1]!==v?[]:Lt(g,v);if(m-=S.length,m<a)return Al(e,r,zr,p.placeholder,t,g,S,t,t,a-m);var C=this&&this!==Qe&&this instanceof p?c:e;return yn(C,this,g)}return p}function El(e){return function(r,a,c){var p=Ie(r);if(!cn(r)){var m=Y(a,3);r=We(r),a=function(E){return m(p[E],E,p)}}var g=e(r,a,c);return g>-1?p[m?r[g]:g]:t}}function Il(e){return Et(function(r){var a=r.length,c=a,p=Nn.prototype.thru;for(e&&r.reverse();c--;){var m=r[c];if(typeof m!="function")throw new Fn(l);if(p&&!g&&Kr(m)=="wrapper")var g=new Nn([],!0)}for(c=g?c:a;++c<a;){m=r[c];var E=Kr(m),v=E=="wrapper"?Vo(m):t;v&&Wo(v[0])&&v[1]==(He|ve|Re|dt)&&!v[4].length&&v[9]==1?g=g[Kr(v[0])].apply(g,v[3]):g=m.length==1&&Wo(m)?g[E]():g.thru(m)}return function(){var S=arguments,C=S[0];if(g&&S.length==1&&Z(C))return g.plant(C).value();for(var k=0,B=a?r[k].apply(this,S):C;++k<a;)B=r[k].call(this,B);return B}})}function zr(e,r,a,c,p,m,g,E,v,S){var C=r&He,k=r&J,B=r&pe,G=r&(ve|Ce),Q=r&R,te=B?t:Hi(e);function z(){for(var re=arguments.length,le=_(re),Dn=re;Dn--;)le[Dn]=arguments[Dn];if(G)var on=bi(z),vn=_d(le,on);if(c&&(le=hl(le,c,p,G)),m&&(le=ml(le,m,g,G)),re-=vn,G&&re<S){var Ue=Lt(le,on);return Al(e,r,zr,z.placeholder,a,le,Ue,E,v,S-re)}var jn=k?a:this,At=B?jn[e]:e;return re=le.length,E?le=Rm(le,E):Q&&re>1&&le.reverse(),C&&v<re&&(le.length=v),this&&this!==Qe&&this instanceof z&&(At=te||Hi(At)),At.apply(jn,le)}return z}function Dl(e,r){return function(a,c){return $h(a,e,r(c),{})}}function Jr(e,r){return function(a,c){var p;if(a===t&&c===t)return r;if(a!==t&&(p=a),c!==t){if(p===t)return c;typeof a=="string"||typeof c=="string"?(a=En(a),c=En(c)):(a=ol(a),c=ol(c)),p=e(a,c)}return p}}function Po(e){return Et(function(r){return r=we(r,Tn(Y())),ie(function(a){var c=this;return e(r,function(p){return yn(p,c,a)})})})}function Hr(e,r){r=r===t?" ":En(r);var a=r.length;if(a<2)return a?No(r,e):r;var c=No(r,Br(e/yi(r)));return gi(r)?$t(Vn(c),0,e).join(""):c.slice(0,e)}function dm(e,r,a,c){var p=r&J,m=Hi(e);function g(){for(var E=-1,v=arguments.length,S=-1,C=c.length,k=_(C+v),B=this&&this!==Qe&&this instanceof g?m:e;++S<C;)k[S]=c[S];for(;v--;)k[S++]=arguments[++E];return yn(B,p?a:this,k)}return g}function vl(e){return function(r,a,c){return c&&typeof c!="number"&&sn(r,a,c)&&(a=c=t),r=vt(r),a===t?(a=r,r=0):a=vt(a),c=c===t?r<a?1:-1:vt(c),Kh(r,a,c,e)}}function Xr(e){return function(r,a){return typeof r=="string"&&typeof a=="string"||(r=xn(r),a=xn(a)),e(r,a)}}function Al(e,r,a,c,p,m,g,E,v,S){var C=r&ve,k=C?g:t,B=C?t:g,G=C?m:t,Q=C?t:m;r|=C?Re:nn,r&=~(C?nn:Re),r&$e||(r&=~(J|pe));var te=[e,r,p,G,k,Q,B,E,v,S],z=a.apply(t,te);return Wo(e)&&Ll(z,te),z.placeholder=c,Bl(z,e,r)}function Uo(e){var r=qe[e];return function(a,c){if(a=xn(a),c=c==null?0:Ke(ne(c),292),c&&Bu(a)){var p=(me(a)+"e").split("e"),m=r(p[0]+"e"+(+p[1]+c));return p=(me(m)+"e").split("e"),+(p[0]+"e"+(+p[1]-c))}return r(a)}}var hm=Ii&&1/wr(new Ii([,-0]))[1]==rt?function(e){return new Ii(e)}:oa;function _l(e){return function(r){var a=Ze(r);return a==Mn?ho(r):a==$n?Od(r):Ad(r,e(r))}}function Tt(e,r,a,c,p,m,g,E){var v=r&pe;if(!v&&typeof e!="function")throw new Fn(l);var S=c?c.length:0;if(S||(r&=~(Re|nn),c=p=t),g=g===t?g:je(ne(g),0),E=E===t?E:ne(E),S-=p?p.length:0,r&nn){var C=c,k=p;c=p=t}var B=v?t:Vo(e),G=[e,r,a,c,p,C,k,m,g,E];if(B&&Fm(G,B),e=G[0],r=G[1],a=G[2],c=G[3],p=G[4],E=G[9]=G[9]===t?v?0:e.length:je(G[9]-S,0),!E&&r&(ve|Ce)&&(r&=~(ve|Ce)),!r||r==J)var Q=fm(e,r,a);else r==ve||r==Ce?Q=pm(e,r,E):(r==Re||r==(J|Re))&&!p.length?Q=dm(e,r,a,c):Q=zr.apply(t,G);var te=B?rl:Ll;return Bl(te(Q,G),e,r)}function bl(e,r,a,c){return e===t||qn(e,Ei[a])&&!ge.call(c,a)?r:e}function wl(e,r,a,c,p,m){return Fe(e)&&Fe(r)&&(m.set(r,e),jr(e,r,t,wl,m),m.delete(r)),e}function mm(e){return Zi(e)?t:e}function Sl(e,r,a,c,p,m){var g=a&x,E=e.length,v=r.length;if(E!=v&&!(g&&v>E))return!1;var S=m.get(e),C=m.get(r);if(S&&C)return S==r&&C==e;var k=-1,B=!0,G=a&L?new Zt:t;for(m.set(e,r),m.set(r,e);++k<E;){var Q=e[k],te=r[k];if(c)var z=g?c(te,Q,k,r,e,m):c(Q,te,k,e,r,m);if(z!==t){if(z)continue;B=!1;break}if(G){if(!ao(r,function(re,le){if(!Mi(G,le)&&(Q===re||p(Q,re,a,c,m)))return G.push(le)})){B=!1;break}}else if(!(Q===te||p(Q,te,a,c,m))){B=!1;break}}return m.delete(e),m.delete(r),B}function gm(e,r,a,c,p,m,g){switch(a){case di:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Ui:return!(e.byteLength!=r.byteLength||!m(new Rr(e),new Rr(r)));case he:case wn:case xi:return qn(+e,+r);case Rt:return e.name==r.name&&e.message==r.message;case Li:case Bi:return e==r+"";case Mn:var E=ho;case $n:var v=c&x;if(E||(E=wr),e.size!=r.size&&!v)return!1;var S=g.get(e);if(S)return S==r;c|=L,g.set(e,r);var C=Sl(E(e),E(r),c,p,m,g);return g.delete(e),C;case Ir:if(ji)return ji.call(e)==ji.call(r)}return!1}function ym(e,r,a,c,p,m){var g=a&x,E=Mo(e),v=E.length,S=Mo(r),C=S.length;if(v!=C&&!g)return!1;for(var k=v;k--;){var B=E[k];if(!(g?B in r:ge.call(r,B)))return!1}var G=m.get(e),Q=m.get(r);if(G&&Q)return G==r&&Q==e;var te=!0;m.set(e,r),m.set(r,e);for(var z=g;++k<v;){B=E[k];var re=e[B],le=r[B];if(c)var Dn=g?c(le,re,B,r,e,m):c(re,le,B,e,r,m);if(!(Dn===t?re===le||p(re,le,a,c,m):Dn)){te=!1;break}z||(z=B=="constructor")}if(te&&!z){var on=e.constructor,vn=r.constructor;on!=vn&&"constructor"in e&&"constructor"in r&&!(typeof on=="function"&&on instanceof on&&typeof vn=="function"&&vn instanceof vn)&&(te=!1)}return m.delete(e),m.delete(r),te}function Et(e){return Qo(kl(e,t,Gl),e+"")}function Mo(e){return Qu(e,We,qo)}function $o(e){return Qu(e,fn,Cl)}var Vo=Ur?function(e){return Ur.get(e)}:oa;function Kr(e){for(var r=e.name+"",a=Di[r],c=ge.call(Di,r)?a.length:0;c--;){var p=a[c],m=p.func;if(m==null||m==e)return p.name}return r}function bi(e){var r=ge.call(h,"placeholder")?h:e;return r.placeholder}function Y(){var e=h.iteratee||ra;return e=e===ra?Hu:e,arguments.length?e(arguments[0],arguments[1]):e}function Zr(e,r){var a=e.__data__;return bm(r)?a[typeof r=="string"?"string":"hash"]:a.map}function Go(e){for(var r=We(e),a=r.length;a--;){var c=r[a],p=e[c];r[a]=[c,p,Ol(p)]}return r}function ti(e,r){var a=Cd(e,r);return Ju(a)?a:t}function Tm(e){var r=ge.call(e,Xt),a=e[Xt];try{e[Xt]=t;var c=!0}catch{}var p=Nr.call(e);return c&&(r?e[Xt]=a:delete e[Xt]),p}var qo=go?function(e){return e==null?[]:(e=Ie(e),kt(go(e),function(r){return xu.call(e,r)}))}:aa,Cl=go?function(e){for(var r=[];e;)xt(r,qo(e)),e=kr(e);return r}:aa,Ze=rn;(yo&&Ze(new yo(new ArrayBuffer(1)))!=di||Vi&&Ze(new Vi)!=Mn||To&&Ze(To.resolve())!=ja||Ii&&Ze(new Ii)!=$n||Gi&&Ze(new Gi)!=Pi)&&(Ze=function(e){var r=rn(e),a=r==ht?e.constructor:t,c=a?ii(a):"";if(c)switch(c){case eh:return di;case nh:return Mn;case th:return ja;case ih:return $n;case rh:return Pi}return r});function Em(e,r,a){for(var c=-1,p=a.length;++c<p;){var m=a[c],g=m.size;switch(m.type){case"drop":e+=g;break;case"dropRight":r-=g;break;case"take":r=Ke(r,e+g);break;case"takeRight":e=je(e,r-g);break}}return{start:e,end:r}}function Im(e){var r=e.match(wp);return r?r[1].split(Sp):[]}function Fl(e,r,a){r=Mt(r,e);for(var c=-1,p=r.length,m=!1;++c<p;){var g=at(r[c]);if(!(m=e!=null&&a(e,g)))break;e=e[g]}return m||++c!=p?m:(p=e==null?0:e.length,!!p&&os(p)&&It(g,p)&&(Z(e)||ri(e)))}function Dm(e){var r=e.length,a=new e.constructor(r);return r&&typeof e[0]=="string"&&ge.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function Nl(e){return typeof e.constructor=="function"&&!Xi(e)?vi(kr(e)):{}}function vm(e,r,a){var c=e.constructor;switch(r){case Ui:return Bo(e);case he:case wn:return new c(+e);case di:return sm(e,a);case Vs:case Gs:case qs:case js:case Ws:case Ys:case Qs:case zs:case Js:return pl(e,a);case Mn:return new c;case xi:case Bi:return new c(e);case Li:return om(e);case $n:return new c;case Ir:return am(e)}}function Am(e,r){var a=r.length;if(!a)return e;var c=a-1;return r[c]=(a>1?"& ":"")+r[c],r=r.join(a>2?", ":" "),e.replace(bp,`{
/* [wrapped with `+r+`] */
`)}function _m(e){return Z(e)||ri(e)||!!(Lu&&e&&e[Lu])}function It(e,r){var a=typeof e;return r=r??Un,!!r&&(a=="number"||a!="symbol"&&Bp.test(e))&&e>-1&&e%1==0&&e<r}function sn(e,r,a){if(!Fe(a))return!1;var c=typeof r;return(c=="number"?cn(a)&&It(r,a.length):c=="string"&&r in a)?qn(a[r],e):!1}function jo(e,r){if(Z(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||In(e)?!0:Dp.test(e)||!Ip.test(e)||r!=null&&e in Ie(r)}function bm(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Wo(e){var r=Kr(e),a=h[r];if(typeof a!="function"||!(r in ae.prototype))return!1;if(e===a)return!0;var c=Vo(a);return!!c&&e===c[0]}function wm(e){return!!Ou&&Ou in e}var Sm=Cr?Dt:ua;function Xi(e){var r=e&&e.constructor,a=typeof r=="function"&&r.prototype||Ei;return e===a}function Ol(e){return e===e&&!Fe(e)}function Rl(e,r){return function(a){return a==null?!1:a[e]===r&&(r!==t||e in Ie(a))}}function Cm(e){var r=rs(e,function(c){return a.size===y&&a.clear(),c}),a=r.cache;return r}function Fm(e,r){var a=e[1],c=r[1],p=a|c,m=p<(J|pe|He),g=c==He&&a==ve||c==He&&a==dt&&e[7].length<=r[8]||c==(He|dt)&&r[7].length<=r[8]&&a==ve;if(!(m||g))return e;c&J&&(e[2]=r[2],p|=a&J?0:$e);var E=r[3];if(E){var v=e[3];e[3]=v?hl(v,E,r[4]):E,e[4]=v?Lt(e[3],T):r[4]}return E=r[5],E&&(v=e[5],e[5]=v?ml(v,E,r[6]):E,e[6]=v?Lt(e[5],T):r[6]),E=r[7],E&&(e[7]=E),c&He&&(e[8]=e[8]==null?r[8]:Ke(e[8],r[8])),e[9]==null&&(e[9]=r[9]),e[0]=r[0],e[1]=p,e}function Nm(e){var r=[];if(e!=null)for(var a in Ie(e))r.push(a);return r}function Om(e){return Nr.call(e)}function kl(e,r,a){return r=je(r===t?e.length-1:r,0),function(){for(var c=arguments,p=-1,m=je(c.length-r,0),g=_(m);++p<m;)g[p]=c[r+p];p=-1;for(var E=_(r+1);++p<r;)E[p]=c[p];return E[r]=a(g),yn(e,this,E)}}function xl(e,r){return r.length<2?e:ni(e,Rn(r,0,-1))}function Rm(e,r){for(var a=e.length,c=Ke(r.length,a),p=ln(e);c--;){var m=r[c];e[c]=It(m,a)?p[m]:t}return e}function Yo(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var Ll=Pl(rl),Ki=Qd||function(e,r){return Qe.setTimeout(e,r)},Qo=Pl(nm);function Bl(e,r,a){var c=r+"";return Qo(e,Am(c,km(Im(c),a)))}function Pl(e){var r=0,a=0;return function(){var c=Xd(),p=zt-(c-a);if(a=c,p>0){if(++r>=Ot)return arguments[0]}else r=0;return e.apply(t,arguments)}}function es(e,r){var a=-1,c=e.length,p=c-1;for(r=r===t?c:r;++a<r;){var m=Fo(a,p),g=e[m];e[m]=e[a],e[a]=g}return e.length=r,e}var Ul=Cm(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(vp,function(a,c,p,m){r.push(p?m.replace(Np,"$1"):c||a)}),r});function at(e){if(typeof e=="string"||In(e))return e;var r=e+"";return r=="0"&&1/e==-rt?"-0":r}function ii(e){if(e!=null){try{return Fr.call(e)}catch{}try{return e+""}catch{}}return""}function km(e,r){return Cn(P,function(a){var c="_."+a[0];r&a[1]&&!_r(e,c)&&e.push(c)}),e.sort()}function Ml(e){if(e instanceof ae)return e.clone();var r=new Nn(e.__wrapped__,e.__chain__);return r.__actions__=ln(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}function xm(e,r,a){(a?sn(e,r,a):r===t)?r=1:r=je(ne(r),0);var c=e==null?0:e.length;if(!c||r<1)return[];for(var p=0,m=0,g=_(Br(c/r));p<c;)g[m++]=Rn(e,p,p+=r);return g}function Lm(e){for(var r=-1,a=e==null?0:e.length,c=0,p=[];++r<a;){var m=e[r];m&&(p[c++]=m)}return p}function Bm(){var e=arguments.length;if(!e)return[];for(var r=_(e-1),a=arguments[0],c=e;c--;)r[c-1]=arguments[c];return xt(Z(a)?ln(a):[a],ze(r,1))}var Pm=ie(function(e,r){return Pe(e)?Yi(e,ze(r,1,Pe,!0)):[]}),Um=ie(function(e,r){var a=kn(r);return Pe(a)&&(a=t),Pe(e)?Yi(e,ze(r,1,Pe,!0),Y(a,2)):[]}),Mm=ie(function(e,r){var a=kn(r);return Pe(a)&&(a=t),Pe(e)?Yi(e,ze(r,1,Pe,!0),t,a):[]});function $m(e,r,a){var c=e==null?0:e.length;return c?(r=a||r===t?1:ne(r),Rn(e,r<0?0:r,c)):[]}function Vm(e,r,a){var c=e==null?0:e.length;return c?(r=a||r===t?1:ne(r),r=c-r,Rn(e,0,r<0?0:r)):[]}function Gm(e,r){return e&&e.length?Yr(e,Y(r,3),!0,!0):[]}function qm(e,r){return e&&e.length?Yr(e,Y(r,3),!0):[]}function jm(e,r,a,c){var p=e==null?0:e.length;return p?(a&&typeof a!="number"&&sn(e,r,a)&&(a=0,c=p),Bh(e,r,a,c)):[]}function $l(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var p=a==null?0:ne(a);return p<0&&(p=je(c+p,0)),br(e,Y(r,3),p)}function Vl(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var p=c-1;return a!==t&&(p=ne(a),p=a<0?je(c+p,0):Ke(p,c-1)),br(e,Y(r,3),p,!0)}function Gl(e){var r=e==null?0:e.length;return r?ze(e,1):[]}function Wm(e){var r=e==null?0:e.length;return r?ze(e,rt):[]}function Ym(e,r){var a=e==null?0:e.length;return a?(r=r===t?1:ne(r),ze(e,r)):[]}function Qm(e){for(var r=-1,a=e==null?0:e.length,c={};++r<a;){var p=e[r];c[p[0]]=p[1]}return c}function ql(e){return e&&e.length?e[0]:t}function zm(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var p=a==null?0:ne(a);return p<0&&(p=je(c+p,0)),mi(e,r,p)}function Jm(e){var r=e==null?0:e.length;return r?Rn(e,0,-1):[]}var Hm=ie(function(e){var r=we(e,xo);return r.length&&r[0]===e[0]?_o(r):[]}),Xm=ie(function(e){var r=kn(e),a=we(e,xo);return r===kn(a)?r=t:a.pop(),a.length&&a[0]===e[0]?_o(a,Y(r,2)):[]}),Km=ie(function(e){var r=kn(e),a=we(e,xo);return r=typeof r=="function"?r:t,r&&a.pop(),a.length&&a[0]===e[0]?_o(a,t,r):[]});function Zm(e,r){return e==null?"":Jd.call(e,r)}function kn(e){var r=e==null?0:e.length;return r?e[r-1]:t}function eg(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var p=c;return a!==t&&(p=ne(a),p=p<0?je(c+p,0):Ke(p,c-1)),r===r?kd(e,r,p):br(e,Au,p,!0)}function ng(e,r){return e&&e.length?el(e,ne(r)):t}var tg=ie(jl);function jl(e,r){return e&&e.length&&r&&r.length?Co(e,r):e}function ig(e,r,a){return e&&e.length&&r&&r.length?Co(e,r,Y(a,2)):e}function rg(e,r,a){return e&&e.length&&r&&r.length?Co(e,r,t,a):e}var sg=Et(function(e,r){var a=e==null?0:e.length,c=Io(e,r);return il(e,we(r,function(p){return It(p,a)?+p:p}).sort(dl)),c});function og(e,r){var a=[];if(!(e&&e.length))return a;var c=-1,p=[],m=e.length;for(r=Y(r,3);++c<m;){var g=e[c];r(g,c,e)&&(a.push(g),p.push(c))}return il(e,p),a}function zo(e){return e==null?e:Zd.call(e)}function ag(e,r,a){var c=e==null?0:e.length;return c?(a&&typeof a!="number"&&sn(e,r,a)?(r=0,a=c):(r=r==null?0:ne(r),a=a===t?c:ne(a)),Rn(e,r,a)):[]}function ug(e,r){return Wr(e,r)}function lg(e,r,a){return Oo(e,r,Y(a,2))}function cg(e,r){var a=e==null?0:e.length;if(a){var c=Wr(e,r);if(c<a&&qn(e[c],r))return c}return-1}function fg(e,r){return Wr(e,r,!0)}function pg(e,r,a){return Oo(e,r,Y(a,2),!0)}function dg(e,r){var a=e==null?0:e.length;if(a){var c=Wr(e,r,!0)-1;if(qn(e[c],r))return c}return-1}function hg(e){return e&&e.length?sl(e):[]}function mg(e,r){return e&&e.length?sl(e,Y(r,2)):[]}function gg(e){var r=e==null?0:e.length;return r?Rn(e,1,r):[]}function yg(e,r,a){return e&&e.length?(r=a||r===t?1:ne(r),Rn(e,0,r<0?0:r)):[]}function Tg(e,r,a){var c=e==null?0:e.length;return c?(r=a||r===t?1:ne(r),r=c-r,Rn(e,r<0?0:r,c)):[]}function Eg(e,r){return e&&e.length?Yr(e,Y(r,3),!1,!0):[]}function Ig(e,r){return e&&e.length?Yr(e,Y(r,3)):[]}var Dg=ie(function(e){return Ut(ze(e,1,Pe,!0))}),vg=ie(function(e){var r=kn(e);return Pe(r)&&(r=t),Ut(ze(e,1,Pe,!0),Y(r,2))}),Ag=ie(function(e){var r=kn(e);return r=typeof r=="function"?r:t,Ut(ze(e,1,Pe,!0),t,r)});function _g(e){return e&&e.length?Ut(e):[]}function bg(e,r){return e&&e.length?Ut(e,Y(r,2)):[]}function wg(e,r){return r=typeof r=="function"?r:t,e&&e.length?Ut(e,t,r):[]}function Jo(e){if(!(e&&e.length))return[];var r=0;return e=kt(e,function(a){if(Pe(a))return r=je(a.length,r),!0}),fo(r,function(a){return we(e,uo(a))})}function Wl(e,r){if(!(e&&e.length))return[];var a=Jo(e);return r==null?a:we(a,function(c){return yn(r,t,c)})}var Sg=ie(function(e,r){return Pe(e)?Yi(e,r):[]}),Cg=ie(function(e){return ko(kt(e,Pe))}),Fg=ie(function(e){var r=kn(e);return Pe(r)&&(r=t),ko(kt(e,Pe),Y(r,2))}),Ng=ie(function(e){var r=kn(e);return r=typeof r=="function"?r:t,ko(kt(e,Pe),t,r)}),Og=ie(Jo);function Rg(e,r){return ll(e||[],r||[],Wi)}function kg(e,r){return ll(e||[],r||[],Ji)}var xg=ie(function(e){var r=e.length,a=r>1?e[r-1]:t;return a=typeof a=="function"?(e.pop(),a):t,Wl(e,a)});function Yl(e){var r=h(e);return r.__chain__=!0,r}function Lg(e,r){return r(e),e}function ns(e,r){return r(e)}var Bg=Et(function(e){var r=e.length,a=r?e[0]:0,c=this.__wrapped__,p=function(m){return Io(m,e)};return r>1||this.__actions__.length||!(c instanceof ae)||!It(a)?this.thru(p):(c=c.slice(a,+a+(r?1:0)),c.__actions__.push({func:ns,args:[p],thisArg:t}),new Nn(c,this.__chain__).thru(function(m){return r&&!m.length&&m.push(t),m}))});function Pg(){return Yl(this)}function Ug(){return new Nn(this.value(),this.__chain__)}function Mg(){this.__values__===t&&(this.__values__=oc(this.value()));var e=this.__index__>=this.__values__.length,r=e?t:this.__values__[this.__index__++];return{done:e,value:r}}function $g(){return this}function Vg(e){for(var r,a=this;a instanceof $r;){var c=Ml(a);c.__index__=0,c.__values__=t,r?p.__wrapped__=c:r=c;var p=c;a=a.__wrapped__}return p.__wrapped__=e,r}function Gg(){var e=this.__wrapped__;if(e instanceof ae){var r=e;return this.__actions__.length&&(r=new ae(this)),r=r.reverse(),r.__actions__.push({func:ns,args:[zo],thisArg:t}),new Nn(r,this.__chain__)}return this.thru(zo)}function qg(){return ul(this.__wrapped__,this.__actions__)}var jg=Qr(function(e,r,a){ge.call(e,a)?++e[a]:yt(e,a,1)});function Wg(e,r,a){var c=Z(e)?Du:Lh;return a&&sn(e,r,a)&&(r=t),c(e,Y(r,3))}function Yg(e,r){var a=Z(e)?kt:Wu;return a(e,Y(r,3))}var Qg=El($l),zg=El(Vl);function Jg(e,r){return ze(ts(e,r),1)}function Hg(e,r){return ze(ts(e,r),rt)}function Xg(e,r,a){return a=a===t?1:ne(a),ze(ts(e,r),a)}function Ql(e,r){var a=Z(e)?Cn:Pt;return a(e,Y(r,3))}function zl(e,r){var a=Z(e)?gd:ju;return a(e,Y(r,3))}var Kg=Qr(function(e,r,a){ge.call(e,a)?e[a].push(r):yt(e,a,[r])});function Zg(e,r,a,c){e=cn(e)?e:Si(e),a=a&&!c?ne(a):0;var p=e.length;return a<0&&(a=je(p+a,0)),as(e)?a<=p&&e.indexOf(r,a)>-1:!!p&&mi(e,r,a)>-1}var ey=ie(function(e,r,a){var c=-1,p=typeof r=="function",m=cn(e)?_(e.length):[];return Pt(e,function(g){m[++c]=p?yn(r,g,a):Qi(g,r,a)}),m}),ny=Qr(function(e,r,a){yt(e,a,r)});function ts(e,r){var a=Z(e)?we:Xu;return a(e,Y(r,3))}function ty(e,r,a,c){return e==null?[]:(Z(r)||(r=r==null?[]:[r]),a=c?t:a,Z(a)||(a=a==null?[]:[a]),nl(e,r,a))}var iy=Qr(function(e,r,a){e[a?0:1].push(r)},function(){return[[],[]]});function ry(e,r,a){var c=Z(e)?oo:bu,p=arguments.length<3;return c(e,Y(r,4),a,p,Pt)}function sy(e,r,a){var c=Z(e)?yd:bu,p=arguments.length<3;return c(e,Y(r,4),a,p,ju)}function oy(e,r){var a=Z(e)?kt:Wu;return a(e,ss(Y(r,3)))}function ay(e){var r=Z(e)?$u:Zh;return r(e)}function uy(e,r,a){(a?sn(e,r,a):r===t)?r=1:r=ne(r);var c=Z(e)?Nh:em;return c(e,r)}function ly(e){var r=Z(e)?Oh:tm;return r(e)}function cy(e){if(e==null)return 0;if(cn(e))return as(e)?yi(e):e.length;var r=Ze(e);return r==Mn||r==$n?e.size:wo(e).length}function fy(e,r,a){var c=Z(e)?ao:im;return a&&sn(e,r,a)&&(r=t),c(e,Y(r,3))}var py=ie(function(e,r){if(e==null)return[];var a=r.length;return a>1&&sn(e,r[0],r[1])?r=[]:a>2&&sn(r[0],r[1],r[2])&&(r=[r[0]]),nl(e,ze(r,1),[])}),is=Yd||function(){return Qe.Date.now()};function dy(e,r){if(typeof r!="function")throw new Fn(l);return e=ne(e),function(){if(--e<1)return r.apply(this,arguments)}}function Jl(e,r,a){return r=a?t:r,r=e&&r==null?e.length:r,Tt(e,He,t,t,t,t,r)}function Hl(e,r){var a;if(typeof r!="function")throw new Fn(l);return e=ne(e),function(){return--e>0&&(a=r.apply(this,arguments)),e<=1&&(r=t),a}}var Ho=ie(function(e,r,a){var c=J;if(a.length){var p=Lt(a,bi(Ho));c|=Re}return Tt(e,c,r,a,p)}),Xl=ie(function(e,r,a){var c=J|pe;if(a.length){var p=Lt(a,bi(Xl));c|=Re}return Tt(r,c,e,a,p)});function Kl(e,r,a){r=a?t:r;var c=Tt(e,ve,t,t,t,t,t,r);return c.placeholder=Kl.placeholder,c}function Zl(e,r,a){r=a?t:r;var c=Tt(e,Ce,t,t,t,t,t,r);return c.placeholder=Zl.placeholder,c}function ec(e,r,a){var c,p,m,g,E,v,S=0,C=!1,k=!1,B=!0;if(typeof e!="function")throw new Fn(l);r=xn(r)||0,Fe(a)&&(C=!!a.leading,k="maxWait"in a,m=k?je(xn(a.maxWait)||0,r):m,B="trailing"in a?!!a.trailing:B);function G(Ue){var jn=c,At=p;return c=p=t,S=Ue,g=e.apply(At,jn),g}function Q(Ue){return S=Ue,E=Ki(re,r),C?G(Ue):g}function te(Ue){var jn=Ue-v,At=Ue-S,Ec=r-jn;return k?Ke(Ec,m-At):Ec}function z(Ue){var jn=Ue-v,At=Ue-S;return v===t||jn>=r||jn<0||k&&At>=m}function re(){var Ue=is();if(z(Ue))return le(Ue);E=Ki(re,te(Ue))}function le(Ue){return E=t,B&&c?G(Ue):(c=p=t,g)}function Dn(){E!==t&&cl(E),S=0,c=v=p=E=t}function on(){return E===t?g:le(is())}function vn(){var Ue=is(),jn=z(Ue);if(c=arguments,p=this,v=Ue,jn){if(E===t)return Q(v);if(k)return cl(E),E=Ki(re,r),G(v)}return E===t&&(E=Ki(re,r)),g}return vn.cancel=Dn,vn.flush=on,vn}var hy=ie(function(e,r){return qu(e,1,r)}),my=ie(function(e,r,a){return qu(e,xn(r)||0,a)});function gy(e){return Tt(e,R)}function rs(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new Fn(l);var a=function(){var c=arguments,p=r?r.apply(this,c):c[0],m=a.cache;if(m.has(p))return m.get(p);var g=e.apply(this,c);return a.cache=m.set(p,g)||m,g};return a.cache=new(rs.Cache||gt),a}rs.Cache=gt;function ss(e){if(typeof e!="function")throw new Fn(l);return function(){var r=arguments;switch(r.length){case 0:return!e.call(this);case 1:return!e.call(this,r[0]);case 2:return!e.call(this,r[0],r[1]);case 3:return!e.call(this,r[0],r[1],r[2])}return!e.apply(this,r)}}function yy(e){return Hl(2,e)}var Ty=rm(function(e,r){r=r.length==1&&Z(r[0])?we(r[0],Tn(Y())):we(ze(r,1),Tn(Y()));var a=r.length;return ie(function(c){for(var p=-1,m=Ke(c.length,a);++p<m;)c[p]=r[p].call(this,c[p]);return yn(e,this,c)})}),Xo=ie(function(e,r){var a=Lt(r,bi(Xo));return Tt(e,Re,t,r,a)}),nc=ie(function(e,r){var a=Lt(r,bi(nc));return Tt(e,nn,t,r,a)}),Ey=Et(function(e,r){return Tt(e,dt,t,t,t,r)});function Iy(e,r){if(typeof e!="function")throw new Fn(l);return r=r===t?r:ne(r),ie(e,r)}function Dy(e,r){if(typeof e!="function")throw new Fn(l);return r=r==null?0:je(ne(r),0),ie(function(a){var c=a[r],p=$t(a,0,r);return c&&xt(p,c),yn(e,this,p)})}function vy(e,r,a){var c=!0,p=!0;if(typeof e!="function")throw new Fn(l);return Fe(a)&&(c="leading"in a?!!a.leading:c,p="trailing"in a?!!a.trailing:p),ec(e,r,{leading:c,maxWait:r,trailing:p})}function Ay(e){return Jl(e,1)}function _y(e,r){return Xo(Lo(r),e)}function by(){if(!arguments.length)return[];var e=arguments[0];return Z(e)?e:[e]}function wy(e){return On(e,O)}function Sy(e,r){return r=typeof r=="function"?r:t,On(e,O,r)}function Cy(e){return On(e,D|O)}function Fy(e,r){return r=typeof r=="function"?r:t,On(e,D|O,r)}function Ny(e,r){return r==null||Gu(e,r,We(r))}function qn(e,r){return e===r||e!==e&&r!==r}var Oy=Xr(Ao),Ry=Xr(function(e,r){return e>=r}),ri=zu(function(){return arguments}())?zu:function(e){return ke(e)&&ge.call(e,"callee")&&!xu.call(e,"callee")},Z=_.isArray,ky=mu?Tn(mu):Vh;function cn(e){return e!=null&&os(e.length)&&!Dt(e)}function Pe(e){return ke(e)&&cn(e)}function xy(e){return e===!0||e===!1||ke(e)&&rn(e)==he}var Vt=zd||ua,Ly=gu?Tn(gu):Gh;function By(e){return ke(e)&&e.nodeType===1&&!Zi(e)}function Py(e){if(e==null)return!0;if(cn(e)&&(Z(e)||typeof e=="string"||typeof e.splice=="function"||Vt(e)||wi(e)||ri(e)))return!e.length;var r=Ze(e);if(r==Mn||r==$n)return!e.size;if(Xi(e))return!wo(e).length;for(var a in e)if(ge.call(e,a))return!1;return!0}function Uy(e,r){return zi(e,r)}function My(e,r,a){a=typeof a=="function"?a:t;var c=a?a(e,r):t;return c===t?zi(e,r,t,a):!!c}function Ko(e){if(!ke(e))return!1;var r=rn(e);return r==Rt||r==ki||typeof e.message=="string"&&typeof e.name=="string"&&!Zi(e)}function $y(e){return typeof e=="number"&&Bu(e)}function Dt(e){if(!Fe(e))return!1;var r=rn(e);return r==Xe||r==qa||r==Be||r==cp}function tc(e){return typeof e=="number"&&e==ne(e)}function os(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Un}function Fe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}function ke(e){return e!=null&&typeof e=="object"}var ic=yu?Tn(yu):jh;function Vy(e,r){return e===r||bo(e,r,Go(r))}function Gy(e,r,a){return a=typeof a=="function"?a:t,bo(e,r,Go(r),a)}function qy(e){return rc(e)&&e!=+e}function jy(e){if(Sm(e))throw new K(u);return Ju(e)}function Wy(e){return e===null}function Yy(e){return e==null}function rc(e){return typeof e=="number"||ke(e)&&rn(e)==xi}function Zi(e){if(!ke(e)||rn(e)!=ht)return!1;var r=kr(e);if(r===null)return!0;var a=ge.call(r,"constructor")&&r.constructor;return typeof a=="function"&&a instanceof a&&Fr.call(a)==Gd}var Zo=Tu?Tn(Tu):Wh;function Qy(e){return tc(e)&&e>=-Un&&e<=Un}var sc=Eu?Tn(Eu):Yh;function as(e){return typeof e=="string"||!Z(e)&&ke(e)&&rn(e)==Bi}function In(e){return typeof e=="symbol"||ke(e)&&rn(e)==Ir}var wi=Iu?Tn(Iu):Qh;function zy(e){return e===t}function Jy(e){return ke(e)&&Ze(e)==Pi}function Hy(e){return ke(e)&&rn(e)==pp}var Xy=Xr(So),Ky=Xr(function(e,r){return e<=r});function oc(e){if(!e)return[];if(cn(e))return as(e)?Vn(e):ln(e);if($i&&e[$i])return Nd(e[$i]());var r=Ze(e),a=r==Mn?ho:r==$n?wr:Si;return a(e)}function vt(e){if(!e)return e===0?e:0;if(e=xn(e),e===rt||e===-rt){var r=e<0?-1:1;return r*pi}return e===e?e:0}function ne(e){var r=vt(e),a=r%1;return r===r?a?r-a:r:0}function ac(e){return e?ei(ne(e),0,bn):0}function xn(e){if(typeof e=="number")return e;if(In(e))return Jt;if(Fe(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Fe(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=wu(e);var a=kp.test(e);return a||Lp.test(e)?dd(e.slice(2),a?2:8):Rp.test(e)?Jt:+e}function uc(e){return ot(e,fn(e))}function Zy(e){return e?ei(ne(e),-Un,Un):e===0?e:0}function me(e){return e==null?"":En(e)}var e0=Ai(function(e,r){if(Xi(r)||cn(r)){ot(r,We(r),e);return}for(var a in r)ge.call(r,a)&&Wi(e,a,r[a])}),lc=Ai(function(e,r){ot(r,fn(r),e)}),us=Ai(function(e,r,a,c){ot(r,fn(r),e,c)}),n0=Ai(function(e,r,a,c){ot(r,We(r),e,c)}),t0=Et(Io);function i0(e,r){var a=vi(e);return r==null?a:Vu(a,r)}var r0=ie(function(e,r){e=Ie(e);var a=-1,c=r.length,p=c>2?r[2]:t;for(p&&sn(r[0],r[1],p)&&(c=1);++a<c;)for(var m=r[a],g=fn(m),E=-1,v=g.length;++E<v;){var S=g[E],C=e[S];(C===t||qn(C,Ei[S])&&!ge.call(e,S))&&(e[S]=m[S])}return e}),s0=ie(function(e){return e.push(t,wl),yn(cc,t,e)});function o0(e,r){return vu(e,Y(r,3),st)}function a0(e,r){return vu(e,Y(r,3),vo)}function u0(e,r){return e==null?e:Do(e,Y(r,3),fn)}function l0(e,r){return e==null?e:Yu(e,Y(r,3),fn)}function c0(e,r){return e&&st(e,Y(r,3))}function f0(e,r){return e&&vo(e,Y(r,3))}function p0(e){return e==null?[]:qr(e,We(e))}function d0(e){return e==null?[]:qr(e,fn(e))}function ea(e,r,a){var c=e==null?t:ni(e,r);return c===t?a:c}function h0(e,r){return e!=null&&Fl(e,r,Ph)}function na(e,r){return e!=null&&Fl(e,r,Uh)}var m0=Dl(function(e,r,a){r!=null&&typeof r.toString!="function"&&(r=Nr.call(r)),e[r]=a},ia(pn)),g0=Dl(function(e,r,a){r!=null&&typeof r.toString!="function"&&(r=Nr.call(r)),ge.call(e,r)?e[r].push(a):e[r]=[a]},Y),y0=ie(Qi);function We(e){return cn(e)?Mu(e):wo(e)}function fn(e){return cn(e)?Mu(e,!0):zh(e)}function T0(e,r){var a={};return r=Y(r,3),st(e,function(c,p,m){yt(a,r(c,p,m),c)}),a}function E0(e,r){var a={};return r=Y(r,3),st(e,function(c,p,m){yt(a,p,r(c,p,m))}),a}var I0=Ai(function(e,r,a){jr(e,r,a)}),cc=Ai(function(e,r,a,c){jr(e,r,a,c)}),D0=Et(function(e,r){var a={};if(e==null)return a;var c=!1;r=we(r,function(m){return m=Mt(m,e),c||(c=m.length>1),m}),ot(e,$o(e),a),c&&(a=On(a,D|N|O,mm));for(var p=r.length;p--;)Ro(a,r[p]);return a});function v0(e,r){return fc(e,ss(Y(r)))}var A0=Et(function(e,r){return e==null?{}:Hh(e,r)});function fc(e,r){if(e==null)return{};var a=we($o(e),function(c){return[c]});return r=Y(r),tl(e,a,function(c,p){return r(c,p[0])})}function _0(e,r,a){r=Mt(r,e);var c=-1,p=r.length;for(p||(p=1,e=t);++c<p;){var m=e==null?t:e[at(r[c])];m===t&&(c=p,m=a),e=Dt(m)?m.call(e):m}return e}function b0(e,r,a){return e==null?e:Ji(e,r,a)}function w0(e,r,a,c){return c=typeof c=="function"?c:t,e==null?e:Ji(e,r,a,c)}var pc=_l(We),dc=_l(fn);function S0(e,r,a){var c=Z(e),p=c||Vt(e)||wi(e);if(r=Y(r,4),a==null){var m=e&&e.constructor;p?a=c?new m:[]:Fe(e)?a=Dt(m)?vi(kr(e)):{}:a={}}return(p?Cn:st)(e,function(g,E,v){return r(a,g,E,v)}),a}function C0(e,r){return e==null?!0:Ro(e,r)}function F0(e,r,a){return e==null?e:al(e,r,Lo(a))}function N0(e,r,a,c){return c=typeof c=="function"?c:t,e==null?e:al(e,r,Lo(a),c)}function Si(e){return e==null?[]:po(e,We(e))}function O0(e){return e==null?[]:po(e,fn(e))}function R0(e,r,a){return a===t&&(a=r,r=t),a!==t&&(a=xn(a),a=a===a?a:0),r!==t&&(r=xn(r),r=r===r?r:0),ei(xn(e),r,a)}function k0(e,r,a){return r=vt(r),a===t?(a=r,r=0):a=vt(a),e=xn(e),Mh(e,r,a)}function x0(e,r,a){if(a&&typeof a!="boolean"&&sn(e,r,a)&&(r=a=t),a===t&&(typeof r=="boolean"?(a=r,r=t):typeof e=="boolean"&&(a=e,e=t)),e===t&&r===t?(e=0,r=1):(e=vt(e),r===t?(r=e,e=0):r=vt(r)),e>r){var c=e;e=r,r=c}if(a||e%1||r%1){var p=Pu();return Ke(e+p*(r-e+pd("1e-"+((p+"").length-1))),r)}return Fo(e,r)}var L0=_i(function(e,r,a){return r=r.toLowerCase(),e+(a?hc(r):r)});function hc(e){return ta(me(e).toLowerCase())}function mc(e){return e=me(e),e&&e.replace(Pp,bd).replace(td,"")}function B0(e,r,a){e=me(e),r=En(r);var c=e.length;a=a===t?c:ei(ne(a),0,c);var p=a;return a-=r.length,a>=0&&e.slice(a,p)==r}function P0(e){return e=me(e),e&&yp.test(e)?e.replace(Ya,wd):e}function U0(e){return e=me(e),e&&Ap.test(e)?e.replace(Hs,"\\$&"):e}var M0=_i(function(e,r,a){return e+(a?"-":"")+r.toLowerCase()}),$0=_i(function(e,r,a){return e+(a?" ":"")+r.toLowerCase()}),V0=Tl("toLowerCase");function G0(e,r,a){e=me(e),r=ne(r);var c=r?yi(e):0;if(!r||c>=r)return e;var p=(r-c)/2;return Hr(Pr(p),a)+e+Hr(Br(p),a)}function q0(e,r,a){e=me(e),r=ne(r);var c=r?yi(e):0;return r&&c<r?e+Hr(r-c,a):e}function j0(e,r,a){e=me(e),r=ne(r);var c=r?yi(e):0;return r&&c<r?Hr(r-c,a)+e:e}function W0(e,r,a){return a||r==null?r=0:r&&(r=+r),Kd(me(e).replace(Xs,""),r||0)}function Y0(e,r,a){return(a?sn(e,r,a):r===t)?r=1:r=ne(r),No(me(e),r)}function Q0(){var e=arguments,r=me(e[0]);return e.length<3?r:r.replace(e[1],e[2])}var z0=_i(function(e,r,a){return e+(a?"_":"")+r.toLowerCase()});function J0(e,r,a){return a&&typeof a!="number"&&sn(e,r,a)&&(r=a=t),a=a===t?bn:a>>>0,a?(e=me(e),e&&(typeof r=="string"||r!=null&&!Zo(r))&&(r=En(r),!r&&gi(e))?$t(Vn(e),0,a):e.split(r,a)):[]}var H0=_i(function(e,r,a){return e+(a?" ":"")+ta(r)});function X0(e,r,a){return e=me(e),a=a==null?0:ei(ne(a),0,e.length),r=En(r),e.slice(a,a+r.length)==r}function K0(e,r,a){var c=h.templateSettings;a&&sn(e,r,a)&&(r=t),e=me(e),r=us({},r,c,bl);var p=us({},r.imports,c.imports,bl),m=We(p),g=po(p,m),E,v,S=0,C=r.interpolate||Dr,k="__p += '",B=mo((r.escape||Dr).source+"|"+C.source+"|"+(C===Qa?Op:Dr).source+"|"+(r.evaluate||Dr).source+"|$","g"),G="//# sourceURL="+(ge.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ad+"]")+`
`;e.replace(B,function(z,re,le,Dn,on,vn){return le||(le=Dn),k+=e.slice(S,vn).replace(Up,Sd),re&&(E=!0,k+=`' +
__e(`+re+`) +
'`),on&&(v=!0,k+=`';
`+on+`;
__p += '`),le&&(k+=`' +
((__t = (`+le+`)) == null ? '' : __t) +
'`),S=vn+z.length,z}),k+=`';
`;var Q=ge.call(r,"variable")&&r.variable;if(!Q)k=`with (obj) {
`+k+`
}
`;else if(Fp.test(Q))throw new K(f);k=(v?k.replace(dp,""):k).replace(hp,"$1").replace(mp,"$1;"),k="function("+(Q||"obj")+`) {
`+(Q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(E?", __e = _.escape":"")+(v?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+k+`return __p
}`;var te=yc(function(){return fe(m,G+"return "+k).apply(t,g)});if(te.source=k,Ko(te))throw te;return te}function Z0(e){return me(e).toLowerCase()}function eT(e){return me(e).toUpperCase()}function nT(e,r,a){if(e=me(e),e&&(a||r===t))return wu(e);if(!e||!(r=En(r)))return e;var c=Vn(e),p=Vn(r),m=Su(c,p),g=Cu(c,p)+1;return $t(c,m,g).join("")}function tT(e,r,a){if(e=me(e),e&&(a||r===t))return e.slice(0,Nu(e)+1);if(!e||!(r=En(r)))return e;var c=Vn(e),p=Cu(c,Vn(r))+1;return $t(c,0,p).join("")}function iT(e,r,a){if(e=me(e),e&&(a||r===t))return e.replace(Xs,"");if(!e||!(r=En(r)))return e;var c=Vn(e),p=Su(c,Vn(r));return $t(c,p).join("")}function rT(e,r){var a=X,c=tn;if(Fe(r)){var p="separator"in r?r.separator:p;a="length"in r?ne(r.length):a,c="omission"in r?En(r.omission):c}e=me(e);var m=e.length;if(gi(e)){var g=Vn(e);m=g.length}if(a>=m)return e;var E=a-yi(c);if(E<1)return c;var v=g?$t(g,0,E).join(""):e.slice(0,E);if(p===t)return v+c;if(g&&(E+=v.length-E),Zo(p)){if(e.slice(E).search(p)){var S,C=v;for(p.global||(p=mo(p.source,me(za.exec(p))+"g")),p.lastIndex=0;S=p.exec(C);)var k=S.index;v=v.slice(0,k===t?E:k)}}else if(e.indexOf(En(p),E)!=E){var B=v.lastIndexOf(p);B>-1&&(v=v.slice(0,B))}return v+c}function sT(e){return e=me(e),e&&gp.test(e)?e.replace(Wa,xd):e}var oT=_i(function(e,r,a){return e+(a?" ":"")+r.toUpperCase()}),ta=Tl("toUpperCase");function gc(e,r,a){return e=me(e),r=a?t:r,r===t?Fd(e)?Pd(e):Id(e):e.match(r)||[]}var yc=ie(function(e,r){try{return yn(e,t,r)}catch(a){return Ko(a)?a:new K(a)}}),aT=Et(function(e,r){return Cn(r,function(a){a=at(a),yt(e,a,Ho(e[a],e))}),e});function uT(e){var r=e==null?0:e.length,a=Y();return e=r?we(e,function(c){if(typeof c[1]!="function")throw new Fn(l);return[a(c[0]),c[1]]}):[],ie(function(c){for(var p=-1;++p<r;){var m=e[p];if(yn(m[0],this,c))return yn(m[1],this,c)}})}function lT(e){return xh(On(e,D))}function ia(e){return function(){return e}}function cT(e,r){return e==null||e!==e?r:e}var fT=Il(),pT=Il(!0);function pn(e){return e}function ra(e){return Hu(typeof e=="function"?e:On(e,D))}function dT(e){return Ku(On(e,D))}function hT(e,r){return Zu(e,On(r,D))}var mT=ie(function(e,r){return function(a){return Qi(a,e,r)}}),gT=ie(function(e,r){return function(a){return Qi(e,a,r)}});function sa(e,r,a){var c=We(r),p=qr(r,c);a==null&&!(Fe(r)&&(p.length||!c.length))&&(a=r,r=e,e=this,p=qr(r,We(r)));var m=!(Fe(a)&&"chain"in a)||!!a.chain,g=Dt(e);return Cn(p,function(E){var v=r[E];e[E]=v,g&&(e.prototype[E]=function(){var S=this.__chain__;if(m||S){var C=e(this.__wrapped__),k=C.__actions__=ln(this.__actions__);return k.push({func:v,args:arguments,thisArg:e}),C.__chain__=S,C}return v.apply(e,xt([this.value()],arguments))})}),e}function yT(){return Qe._===this&&(Qe._=qd),this}function oa(){}function TT(e){return e=ne(e),ie(function(r){return el(r,e)})}var ET=Po(we),IT=Po(Du),DT=Po(ao);function Tc(e){return jo(e)?uo(at(e)):Xh(e)}function vT(e){return function(r){return e==null?t:ni(e,r)}}var AT=vl(),_T=vl(!0);function aa(){return[]}function ua(){return!1}function bT(){return{}}function wT(){return""}function ST(){return!0}function CT(e,r){if(e=ne(e),e<1||e>Un)return[];var a=bn,c=Ke(e,bn);r=Y(r),e-=bn;for(var p=fo(c,r);++a<e;)r(a);return p}function FT(e){return Z(e)?we(e,at):In(e)?[e]:ln(Ul(me(e)))}function NT(e){var r=++Vd;return me(e)+r}var OT=Jr(function(e,r){return e+r},0),RT=Uo("ceil"),kT=Jr(function(e,r){return e/r},1),xT=Uo("floor");function LT(e){return e&&e.length?Gr(e,pn,Ao):t}function BT(e,r){return e&&e.length?Gr(e,Y(r,2),Ao):t}function PT(e){return _u(e,pn)}function UT(e,r){return _u(e,Y(r,2))}function MT(e){return e&&e.length?Gr(e,pn,So):t}function $T(e,r){return e&&e.length?Gr(e,Y(r,2),So):t}var VT=Jr(function(e,r){return e*r},1),GT=Uo("round"),qT=Jr(function(e,r){return e-r},0);function jT(e){return e&&e.length?co(e,pn):0}function WT(e,r){return e&&e.length?co(e,Y(r,2)):0}return h.after=dy,h.ary=Jl,h.assign=e0,h.assignIn=lc,h.assignInWith=us,h.assignWith=n0,h.at=t0,h.before=Hl,h.bind=Ho,h.bindAll=aT,h.bindKey=Xl,h.castArray=by,h.chain=Yl,h.chunk=xm,h.compact=Lm,h.concat=Bm,h.cond=uT,h.conforms=lT,h.constant=ia,h.countBy=jg,h.create=i0,h.curry=Kl,h.curryRight=Zl,h.debounce=ec,h.defaults=r0,h.defaultsDeep=s0,h.defer=hy,h.delay=my,h.difference=Pm,h.differenceBy=Um,h.differenceWith=Mm,h.drop=$m,h.dropRight=Vm,h.dropRightWhile=Gm,h.dropWhile=qm,h.fill=jm,h.filter=Yg,h.flatMap=Jg,h.flatMapDeep=Hg,h.flatMapDepth=Xg,h.flatten=Gl,h.flattenDeep=Wm,h.flattenDepth=Ym,h.flip=gy,h.flow=fT,h.flowRight=pT,h.fromPairs=Qm,h.functions=p0,h.functionsIn=d0,h.groupBy=Kg,h.initial=Jm,h.intersection=Hm,h.intersectionBy=Xm,h.intersectionWith=Km,h.invert=m0,h.invertBy=g0,h.invokeMap=ey,h.iteratee=ra,h.keyBy=ny,h.keys=We,h.keysIn=fn,h.map=ts,h.mapKeys=T0,h.mapValues=E0,h.matches=dT,h.matchesProperty=hT,h.memoize=rs,h.merge=I0,h.mergeWith=cc,h.method=mT,h.methodOf=gT,h.mixin=sa,h.negate=ss,h.nthArg=TT,h.omit=D0,h.omitBy=v0,h.once=yy,h.orderBy=ty,h.over=ET,h.overArgs=Ty,h.overEvery=IT,h.overSome=DT,h.partial=Xo,h.partialRight=nc,h.partition=iy,h.pick=A0,h.pickBy=fc,h.property=Tc,h.propertyOf=vT,h.pull=tg,h.pullAll=jl,h.pullAllBy=ig,h.pullAllWith=rg,h.pullAt=sg,h.range=AT,h.rangeRight=_T,h.rearg=Ey,h.reject=oy,h.remove=og,h.rest=Iy,h.reverse=zo,h.sampleSize=uy,h.set=b0,h.setWith=w0,h.shuffle=ly,h.slice=ag,h.sortBy=py,h.sortedUniq=hg,h.sortedUniqBy=mg,h.split=J0,h.spread=Dy,h.tail=gg,h.take=yg,h.takeRight=Tg,h.takeRightWhile=Eg,h.takeWhile=Ig,h.tap=Lg,h.throttle=vy,h.thru=ns,h.toArray=oc,h.toPairs=pc,h.toPairsIn=dc,h.toPath=FT,h.toPlainObject=uc,h.transform=S0,h.unary=Ay,h.union=Dg,h.unionBy=vg,h.unionWith=Ag,h.uniq=_g,h.uniqBy=bg,h.uniqWith=wg,h.unset=C0,h.unzip=Jo,h.unzipWith=Wl,h.update=F0,h.updateWith=N0,h.values=Si,h.valuesIn=O0,h.without=Sg,h.words=gc,h.wrap=_y,h.xor=Cg,h.xorBy=Fg,h.xorWith=Ng,h.zip=Og,h.zipObject=Rg,h.zipObjectDeep=kg,h.zipWith=xg,h.entries=pc,h.entriesIn=dc,h.extend=lc,h.extendWith=us,sa(h,h),h.add=OT,h.attempt=yc,h.camelCase=L0,h.capitalize=hc,h.ceil=RT,h.clamp=R0,h.clone=wy,h.cloneDeep=Cy,h.cloneDeepWith=Fy,h.cloneWith=Sy,h.conformsTo=Ny,h.deburr=mc,h.defaultTo=cT,h.divide=kT,h.endsWith=B0,h.eq=qn,h.escape=P0,h.escapeRegExp=U0,h.every=Wg,h.find=Qg,h.findIndex=$l,h.findKey=o0,h.findLast=zg,h.findLastIndex=Vl,h.findLastKey=a0,h.floor=xT,h.forEach=Ql,h.forEachRight=zl,h.forIn=u0,h.forInRight=l0,h.forOwn=c0,h.forOwnRight=f0,h.get=ea,h.gt=Oy,h.gte=Ry,h.has=h0,h.hasIn=na,h.head=ql,h.identity=pn,h.includes=Zg,h.indexOf=zm,h.inRange=k0,h.invoke=y0,h.isArguments=ri,h.isArray=Z,h.isArrayBuffer=ky,h.isArrayLike=cn,h.isArrayLikeObject=Pe,h.isBoolean=xy,h.isBuffer=Vt,h.isDate=Ly,h.isElement=By,h.isEmpty=Py,h.isEqual=Uy,h.isEqualWith=My,h.isError=Ko,h.isFinite=$y,h.isFunction=Dt,h.isInteger=tc,h.isLength=os,h.isMap=ic,h.isMatch=Vy,h.isMatchWith=Gy,h.isNaN=qy,h.isNative=jy,h.isNil=Yy,h.isNull=Wy,h.isNumber=rc,h.isObject=Fe,h.isObjectLike=ke,h.isPlainObject=Zi,h.isRegExp=Zo,h.isSafeInteger=Qy,h.isSet=sc,h.isString=as,h.isSymbol=In,h.isTypedArray=wi,h.isUndefined=zy,h.isWeakMap=Jy,h.isWeakSet=Hy,h.join=Zm,h.kebabCase=M0,h.last=kn,h.lastIndexOf=eg,h.lowerCase=$0,h.lowerFirst=V0,h.lt=Xy,h.lte=Ky,h.max=LT,h.maxBy=BT,h.mean=PT,h.meanBy=UT,h.min=MT,h.minBy=$T,h.stubArray=aa,h.stubFalse=ua,h.stubObject=bT,h.stubString=wT,h.stubTrue=ST,h.multiply=VT,h.nth=ng,h.noConflict=yT,h.noop=oa,h.now=is,h.pad=G0,h.padEnd=q0,h.padStart=j0,h.parseInt=W0,h.random=x0,h.reduce=ry,h.reduceRight=sy,h.repeat=Y0,h.replace=Q0,h.result=_0,h.round=GT,h.runInContext=I,h.sample=ay,h.size=cy,h.snakeCase=z0,h.some=fy,h.sortedIndex=ug,h.sortedIndexBy=lg,h.sortedIndexOf=cg,h.sortedLastIndex=fg,h.sortedLastIndexBy=pg,h.sortedLastIndexOf=dg,h.startCase=H0,h.startsWith=X0,h.subtract=qT,h.sum=jT,h.sumBy=WT,h.template=K0,h.times=CT,h.toFinite=vt,h.toInteger=ne,h.toLength=ac,h.toLower=Z0,h.toNumber=xn,h.toSafeInteger=Zy,h.toString=me,h.toUpper=eT,h.trim=nT,h.trimEnd=tT,h.trimStart=iT,h.truncate=rT,h.unescape=sT,h.uniqueId=NT,h.upperCase=oT,h.upperFirst=ta,h.each=Ql,h.eachRight=zl,h.first=ql,sa(h,function(){var e={};return st(h,function(r,a){ge.call(h.prototype,a)||(e[a]=r)}),e}(),{chain:!1}),h.VERSION=s,Cn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),Cn(["drop","take"],function(e,r){ae.prototype[e]=function(a){a=a===t?1:je(ne(a),0);var c=this.__filtered__&&!r?new ae(this):this.clone();return c.__filtered__?c.__takeCount__=Ke(a,c.__takeCount__):c.__views__.push({size:Ke(a,bn),type:e+(c.__dir__<0?"Right":"")}),c},ae.prototype[e+"Right"]=function(a){return this.reverse()[e](a).reverse()}}),Cn(["filter","map","takeWhile"],function(e,r){var a=r+1,c=a==Tr||a==Er;ae.prototype[e]=function(p){var m=this.clone();return m.__iteratees__.push({iteratee:Y(p,3),type:a}),m.__filtered__=m.__filtered__||c,m}}),Cn(["head","last"],function(e,r){var a="take"+(r?"Right":"");ae.prototype[e]=function(){return this[a](1).value()[0]}}),Cn(["initial","tail"],function(e,r){var a="drop"+(r?"":"Right");ae.prototype[e]=function(){return this.__filtered__?new ae(this):this[a](1)}}),ae.prototype.compact=function(){return this.filter(pn)},ae.prototype.find=function(e){return this.filter(e).head()},ae.prototype.findLast=function(e){return this.reverse().find(e)},ae.prototype.invokeMap=ie(function(e,r){return typeof e=="function"?new ae(this):this.map(function(a){return Qi(a,e,r)})}),ae.prototype.reject=function(e){return this.filter(ss(Y(e)))},ae.prototype.slice=function(e,r){e=ne(e);var a=this;return a.__filtered__&&(e>0||r<0)?new ae(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),r!==t&&(r=ne(r),a=r<0?a.dropRight(-r):a.take(r-e)),a)},ae.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},ae.prototype.toArray=function(){return this.take(bn)},st(ae.prototype,function(e,r){var a=/^(?:filter|find|map|reject)|While$/.test(r),c=/^(?:head|last)$/.test(r),p=h[c?"take"+(r=="last"?"Right":""):r],m=c||/^find/.test(r);p&&(h.prototype[r]=function(){var g=this.__wrapped__,E=c?[1]:arguments,v=g instanceof ae,S=E[0],C=v||Z(g),k=function(re){var le=p.apply(h,xt([re],E));return c&&B?le[0]:le};C&&a&&typeof S=="function"&&S.length!=1&&(v=C=!1);var B=this.__chain__,G=!!this.__actions__.length,Q=m&&!B,te=v&&!G;if(!m&&C){g=te?g:new ae(this);var z=e.apply(g,E);return z.__actions__.push({func:ns,args:[k],thisArg:t}),new Nn(z,B)}return Q&&te?e.apply(this,E):(z=this.thru(k),Q?c?z.value()[0]:z.value():z)})}),Cn(["pop","push","shift","sort","splice","unshift"],function(e){var r=Sr[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var p=arguments;if(c&&!this.__chain__){var m=this.value();return r.apply(Z(m)?m:[],p)}return this[a](function(g){return r.apply(Z(g)?g:[],p)})}}),st(ae.prototype,function(e,r){var a=h[r];if(a){var c=a.name+"";ge.call(Di,c)||(Di[c]=[]),Di[c].push({name:r,func:a})}}),Di[zr(t,pe).name]=[{name:"wrapper",func:t}],ae.prototype.clone=sh,ae.prototype.reverse=oh,ae.prototype.value=ah,h.prototype.at=Bg,h.prototype.chain=Pg,h.prototype.commit=Ug,h.prototype.next=Mg,h.prototype.plant=Vg,h.prototype.reverse=Gg,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=qg,h.prototype.first=h.prototype.head,$i&&(h.prototype[$i]=$g),h},Ti=Ud();Ht?((Ht.exports=Ti)._=Ti,io._=Ti):Qe._=Ti}).call(nr)})(As,As.exports);var nD=As.exports;const Ct=KI(nD),tD="/Documentation",iD="Optimus GraphQL API",rD="https://assets-global.website-files.com/64df8a70cf65933420706bc3/6556500d92d40a9143ea0e81_Navbar_Logo.svg",sD='[{"name":"*","args":["*"]}]',oD='[{"title":"Optimus GraphQL API Documentation","content":"\\n# Optimus GraphQL API Documentation\\n\\nLast updated: 2024-05-23\\n\\nThis document introduces a preliminary version of the Optimus GraphQL API, outlining inputs, responses, and internal types. \\nThe majority of the types either come with descriptions or are inherently self-descriptive, aiming to enhance usability. \\n**Please note that the document is currently in development mode**, and both expected functionalities and modifications to existing elements are anticipated.\\nGraphQL revolutionizes API communication compared to traditional REST APIs.\\n\\nUnlike REST, which has fixed endpoints and pre-defined responses, GraphQL enables flexible data retrieval by allowing clients to specify the exact data they need. \\nWith a single endpoint, GraphQL consolidates requests, reducing the need for multiple endpoints. \\nIt eliminates over-fetching or under-fetching of data, ensuring optimal network resource utilization. \\nAdditionally, GraphQL supports real-time updates through subscriptions, providing a more dynamic experience. \\nThe strongly typed schema enhances clarity and reduces errors. Overall, GraphQL offers a more efficient and expressive approach to API interactions. \\n(For more details, visit [GraphQL](https://graphql.org) and [RESTful API Design](https://restfulapi.net))\\n\\nAll functions have a mandatory input parameter **identityValue** which presents PGR ID. To find the function you should use for each specific use case, \\nthis [mapping table](https://petco.sharepoint.com/:x:/s/ProjectOptimus/EVMxDvu0XrJJjkv75ITcqIwBxUp5jUXt_XTnIoEw2ixPqQ?e=riahea) can help.\\nThe Dev environment could be found in the [Dev GraphQL](https://staging-optimus.petc.com/graphql), for use it in the code - [GraphQL Endpoint](https://staging-optimus.petco.com) \\nand request secret key. To access the API, please, make sure you under PETCO VPN.\\nThe function description contains icons to show the state and development status.\\n\\n\\n<div>\\n<img src=\\"https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp\\" alt=\\"not verified\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>specification not verified</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://cdn-icons-png.flaticon.com/512/6928/6928921.png\\" alt=\\"verified\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>specification verified</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png\\" alt=\\"pending\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>development pending</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://cdn.icon-icons.com/icons2/3641/PNG/512/play_green_button_icon_227849.png\\" alt=\\"progress\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>development in progress</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png\\" alt=\\"developed\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>development finished</span>\\n</div><br/>\\n\\n<p><a href=\\"mailto:OptimusSupport@petco.com\\">Contact us</a></p>\\n  "}]',aD="{}",uD="true",vf={SITE_ROOT:tD,APP_TITLE:iD,APP_LOGO:rD,DIRECTIVES:sD,PAGES:oD,QUERY_GENERATION_FACTORIES:aD,MAGIDOC_GENERATE:uD};function bA(i){return i.get(vf)}function Os(i,n){return i.getOrDefault(vf,n)}function Rs(){return Os(Ns.SITE_ROOT,KT)}function ce(i,n){if(!!!i)throw new Error(n)}function Ft(i){return typeof i=="object"&&i!==null}function Jn(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const lD=/\r\n|[\n\r]/g;function Ea(i,n){let t=0,s=1;for(const o of i.body.matchAll(lD)){if(typeof o.index=="number"||Jn(!1),o.index>=n)break;t=o.index+o[0].length,s+=1}return{line:s,column:n+1-t}}function cD(i){return Af(i.source,Ea(i.source,i.start))}function Af(i,n){const t=i.locationOffset.column-1,s="".padStart(t)+i.body,o=n.line-1,u=i.locationOffset.line-1,l=n.line+u,f=n.line===1?t:0,d=n.column+f,y=`${i.name}:${l}:${d}
`,T=s.split(/\r\n|[\n\r]/g),D=T[o];if(D.length>120){const N=Math.floor(d/80),O=d%80,x=[];for(let L=0;L<D.length;L+=80)x.push(D.slice(L,L+80));return y+Gc([[`${l} |`,x[0]],...x.slice(1,N+1).map(L=>["|",L]),["|","^".padStart(O)],["|",x[N+1]]])}return y+Gc([[`${l-1} |`,T[o-1]],[`${l} |`,D],["|","^".padStart(d)],[`${l+1} |`,T[o+1]]])}function Gc(i){const n=i.filter(([s,o])=>o!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,o])=>s.padStart(t)+(o?" "+o:"")).join(`
`)}function fD(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class q extends Error{constructor(n,...t){var s,o,u;const{nodes:l,source:f,positions:d,path:y,originalError:T,extensions:D}=fD(t);super(n),this.name="GraphQLError",this.path=y??void 0,this.originalError=T??void 0,this.nodes=qc(Array.isArray(l)?l:l?[l]:void 0);const N=qc((s=this.nodes)===null||s===void 0?void 0:s.map(x=>x.loc).filter(x=>x!=null));this.source=f??(N==null||(o=N[0])===null||o===void 0?void 0:o.source),this.positions=d??(N==null?void 0:N.map(x=>x.start)),this.locations=d&&f?d.map(x=>Ea(f,x)):N==null?void 0:N.map(x=>Ea(x.source,x.start));const O=Ft(T==null?void 0:T.extensions)?T==null?void 0:T.extensions:void 0;this.extensions=(u=D??O)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),T!=null&&T.stack?Object.defineProperty(this,"stack",{value:T.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,q):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+cD(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+Af(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function qc(i){return i===void 0||i.length===0?void 0:i}function Ye(i,n,t){return new q(`Syntax Error: ${t}`,{source:i,positions:[n]})}class pD{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class _f{constructor(n,t,s,o,u,l){this.kind=n,this.start=t,this.end=s,this.line=o,this.column=u,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const bf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},dD=new Set(Object.keys(bf));function jc(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&dD.has(n)}var Ln;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Ln||(Ln={}));var W;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(W||(W={}));var A;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(A||(A={}));function Ia(i){return i===9||i===32}function fr(i){return i>=48&&i<=57}function wf(i){return i>=97&&i<=122||i>=65&&i<=90}function Pa(i){return wf(i)||i===95}function Sf(i){return wf(i)||fr(i)||i===95}function hD(i){var n;let t=Number.MAX_SAFE_INTEGER,s=null,o=-1;for(let l=0;l<i.length;++l){var u;const f=i[l],d=mD(f);d!==f.length&&(s=(u=s)!==null&&u!==void 0?u:l,o=l,l!==0&&d<t&&(t=d))}return i.map((l,f)=>f===0?l:l.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,o+1)}function mD(i){let n=0;for(;n<i.length&&Ia(i.charCodeAt(n));)++n;return n}function gD(i,n){const t=i.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),o=s.length===1,u=s.length>1&&s.slice(1).every(O=>O.length===0||Ia(O.charCodeAt(0))),l=t.endsWith('\\"""'),f=i.endsWith('"')&&!l,d=i.endsWith("\\"),y=f||d,T=!o||i.length>70||y||u||l;let D="";const N=o&&Ia(i.charCodeAt(0));return(T&&!N||u)&&(D+=`
`),D+=t,(T||y)&&(D+=`
`),'"""'+D+'"""'}var F;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(F||(F={}));class yD{constructor(n){const t=new _f(F.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==F.EOF)do if(n.next)n=n.next;else{const t=ED(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===F.COMMENT);return n}}function TD(i){return i===F.BANG||i===F.DOLLAR||i===F.AMP||i===F.PAREN_L||i===F.PAREN_R||i===F.SPREAD||i===F.COLON||i===F.EQUALS||i===F.AT||i===F.BRACKET_L||i===F.BRACKET_R||i===F.BRACE_L||i===F.PIPE||i===F.BRACE_R}function Oi(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function ks(i,n){return Cf(i.charCodeAt(n))&&Ff(i.charCodeAt(n+1))}function Cf(i){return i>=55296&&i<=56319}function Ff(i){return i>=56320&&i<=57343}function ai(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return F.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function Ve(i,n,t,s,o){const u=i.line,l=1+t-i.lineStart;return new _f(n,t,s,u,l,o)}function ED(i,n){const t=i.source.body,s=t.length;let o=n;for(;o<s;){const u=t.charCodeAt(o);switch(u){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++i.line,i.lineStart=o;continue;case 13:t.charCodeAt(o+1)===10?o+=2:++o,++i.line,i.lineStart=o;continue;case 35:return ID(i,o);case 33:return Ve(i,F.BANG,o,o+1);case 36:return Ve(i,F.DOLLAR,o,o+1);case 38:return Ve(i,F.AMP,o,o+1);case 40:return Ve(i,F.PAREN_L,o,o+1);case 41:return Ve(i,F.PAREN_R,o,o+1);case 46:if(t.charCodeAt(o+1)===46&&t.charCodeAt(o+2)===46)return Ve(i,F.SPREAD,o,o+3);break;case 58:return Ve(i,F.COLON,o,o+1);case 61:return Ve(i,F.EQUALS,o,o+1);case 64:return Ve(i,F.AT,o,o+1);case 91:return Ve(i,F.BRACKET_L,o,o+1);case 93:return Ve(i,F.BRACKET_R,o,o+1);case 123:return Ve(i,F.BRACE_L,o,o+1);case 124:return Ve(i,F.PIPE,o,o+1);case 125:return Ve(i,F.BRACE_R,o,o+1);case 34:return t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34?wD(i,o):vD(i,o)}if(fr(u)||u===45)return DD(i,o,u);if(Pa(u))return SD(i,o);throw Ye(i.source,o,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Oi(u)||ks(t,o)?`Unexpected character: ${ai(i,o)}.`:`Invalid character: ${ai(i,o)}.`)}return Ve(i,F.EOF,s,s)}function ID(i,n){const t=i.source.body,s=t.length;let o=n+1;for(;o<s;){const u=t.charCodeAt(o);if(u===10||u===13)break;if(Oi(u))++o;else if(ks(t,o))o+=2;else break}return Ve(i,F.COMMENT,n,o,t.slice(n+1,o))}function DD(i,n,t){const s=i.source.body;let o=n,u=t,l=!1;if(u===45&&(u=s.charCodeAt(++o)),u===48){if(u=s.charCodeAt(++o),fr(u))throw Ye(i.source,o,`Invalid number, unexpected digit after 0: ${ai(i,o)}.`)}else o=pa(i,o,u),u=s.charCodeAt(o);if(u===46&&(l=!0,u=s.charCodeAt(++o),o=pa(i,o,u),u=s.charCodeAt(o)),(u===69||u===101)&&(l=!0,u=s.charCodeAt(++o),(u===43||u===45)&&(u=s.charCodeAt(++o)),o=pa(i,o,u),u=s.charCodeAt(o)),u===46||Pa(u))throw Ye(i.source,o,`Invalid number, expected digit but got: ${ai(i,o)}.`);return Ve(i,l?F.FLOAT:F.INT,n,o,s.slice(n,o))}function pa(i,n,t){if(!fr(t))throw Ye(i.source,n,`Invalid number, expected digit but got: ${ai(i,n)}.`);const s=i.source.body;let o=n+1;for(;fr(s.charCodeAt(o));)++o;return o}function vD(i,n){const t=i.source.body,s=t.length;let o=n+1,u=o,l="";for(;o<s;){const f=t.charCodeAt(o);if(f===34)return l+=t.slice(u,o),Ve(i,F.STRING,n,o+1,l);if(f===92){l+=t.slice(u,o);const d=t.charCodeAt(o+1)===117?t.charCodeAt(o+2)===123?AD(i,o):_D(i,o):bD(i,o);l+=d.value,o+=d.size,u=o;continue}if(f===10||f===13)break;if(Oi(f))++o;else if(ks(t,o))o+=2;else throw Ye(i.source,o,`Invalid character within String: ${ai(i,o)}.`)}throw Ye(i.source,o,"Unterminated string.")}function AD(i,n){const t=i.source.body;let s=0,o=3;for(;o<12;){const u=t.charCodeAt(n+o++);if(u===125){if(o<5||!Oi(s))break;return{value:String.fromCodePoint(s),size:o}}if(s=s<<4|tr(u),s<0)break}throw Ye(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+o)}".`)}function _D(i,n){const t=i.source.body,s=Wc(t,n+2);if(Oi(s))return{value:String.fromCodePoint(s),size:6};if(Cf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const o=Wc(t,n+8);if(Ff(o))return{value:String.fromCodePoint(s,o),size:12}}throw Ye(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function Wc(i,n){return tr(i.charCodeAt(n))<<12|tr(i.charCodeAt(n+1))<<8|tr(i.charCodeAt(n+2))<<4|tr(i.charCodeAt(n+3))}function tr(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function bD(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw Ye(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function wD(i,n){const t=i.source.body,s=t.length;let o=i.lineStart,u=n+3,l=u,f="";const d=[];for(;u<s;){const y=t.charCodeAt(u);if(y===34&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34){f+=t.slice(l,u),d.push(f);const T=Ve(i,F.BLOCK_STRING,n,u+3,hD(d).join(`
`));return i.line+=d.length-1,i.lineStart=o,T}if(y===92&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34&&t.charCodeAt(u+3)===34){f+=t.slice(l,u),l=u+1,u+=4;continue}if(y===10||y===13){f+=t.slice(l,u),d.push(f),y===13&&t.charCodeAt(u+1)===10?u+=2:++u,f="",l=u,o=u;continue}if(Oi(y))++u;else if(ks(t,u))u+=2;else throw Ye(i.source,u,`Invalid character within String: ${ai(i,u)}.`)}throw Ye(i.source,u,"Unterminated string.")}function SD(i,n){const t=i.source.body,s=t.length;let o=n+1;for(;o<s;){const u=t.charCodeAt(o);if(Sf(u))++o;else break}return Ve(i,F.NAME,n,o,t.slice(n,o))}const CD=10,Nf=2;function j(i){return xs(i,[])}function xs(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return FD(i,n);default:return String(i)}}function FD(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if(ND(i)){const s=i.toJSON();if(s!==i)return typeof s=="string"?s:xs(s,t)}else if(Array.isArray(i))return RD(i,t);return OD(i,t)}function ND(i){return typeof i.toJSON=="function"}function OD(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>Nf?"["+kD(i)+"]":"{ "+t.map(([o,u])=>o+": "+xs(u,n)).join(", ")+" }"}function RD(i,n){if(i.length===0)return"[]";if(n.length>Nf)return"[Array]";const t=Math.min(CD,i.length),s=i.length-t,o=[];for(let u=0;u<t;++u)o.push(xs(i[u],n));return s===1?o.push("... 1 more item"):s>1&&o.push(`... ${s} more items`),"["+o.join(", ")+"]"}function kD(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const pt=globalThis.process?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const o=t.prototype[Symbol.toStringTag],u=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(o===u){const l=j(n);throw new Error(`Cannot use ${o} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Of{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||ce(!1,`Body must be a string. Received: ${j(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||ce(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||ce(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function xD(i){return pt(i,Of)}function LD(i,n){return new Rf(i,n).parseDocument()}function BD(i,n){const t=new Rf(i,n);t.expectToken(F.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(F.EOF),s}class Rf{constructor(n,t={}){const s=xD(n)?n:new Of(n);this._lexer=new yD(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(F.NAME);return this.node(n,{kind:A.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:A.DOCUMENT,definitions:this.many(F.SOF,this.parseDefinition,F.EOF)})}parseDefinition(){if(this.peek(F.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===F.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw Ye(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(F.BRACE_L))return this.node(n,{kind:A.OPERATION_DEFINITION,operation:Ln.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(F.NAME)&&(s=this.parseName()),this.node(n,{kind:A.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(F.NAME);switch(n.value){case"query":return Ln.QUERY;case"mutation":return Ln.MUTATION;case"subscription":return Ln.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(F.PAREN_L,this.parseVariableDefinition,F.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:A.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(F.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(F.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(F.DOLLAR),this.node(n,{kind:A.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:A.SELECTION_SET,selections:this.many(F.BRACE_L,this.parseSelection,F.BRACE_R)})}parseSelection(){return this.peek(F.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,o;return this.expectOptionalToken(F.COLON)?(s=t,o=this.parseName()):o=t,this.node(n,{kind:A.FIELD,alias:s,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(F.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(F.PAREN_L,t,F.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(F.COLON),this.node(t,{kind:A.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(F.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(F.NAME)?this.node(n,{kind:A.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:A.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:A.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:A.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case F.BRACKET_L:return this.parseList(n);case F.BRACE_L:return this.parseObject(n);case F.INT:return this.advanceLexer(),this.node(t,{kind:A.INT,value:t.value});case F.FLOAT:return this.advanceLexer(),this.node(t,{kind:A.FLOAT,value:t.value});case F.STRING:case F.BLOCK_STRING:return this.parseStringLiteral();case F.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:A.BOOLEAN,value:!0});case"false":return this.node(t,{kind:A.BOOLEAN,value:!1});case"null":return this.node(t,{kind:A.NULL});default:return this.node(t,{kind:A.ENUM,value:t.value})}case F.DOLLAR:if(n)if(this.expectToken(F.DOLLAR),this._lexer.token.kind===F.NAME){const s=this._lexer.token.value;throw Ye(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:A.STRING,value:n.value,block:n.kind===F.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:A.LIST,values:this.any(F.BRACKET_L,t,F.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:A.OBJECT,fields:this.any(F.BRACE_L,t,F.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(F.COLON),this.node(t,{kind:A.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(F.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(F.AT),this.node(t,{kind:A.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(F.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(F.BRACKET_R),t=this.node(n,{kind:A.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(F.BANG)?this.node(n,{kind:A.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:A.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(F.STRING)||this.peek(F.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),o=this.many(F.BRACE_L,this.parseOperationTypeDefinition,F.BRACE_R);return this.node(n,{kind:A.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:o})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(F.COLON);const s=this.parseNamedType();return this.node(n,{kind:A.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),o=this.parseConstDirectives();return this.node(n,{kind:A.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:o})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:A.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(F.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(F.BRACE_L,this.parseFieldDefinition,F.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),o=this.parseArgumentDefs();this.expectToken(F.COLON);const u=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:A.FIELD_DEFINITION,description:t,name:s,arguments:o,type:u,directives:l})}parseArgumentDefs(){return this.optionalMany(F.PAREN_L,this.parseInputValueDef,F.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(F.COLON);const o=this.parseTypeReference();let u;this.expectOptionalToken(F.EQUALS)&&(u=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:A.INPUT_VALUE_DEFINITION,description:t,name:s,type:o,defaultValue:u,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:A.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(n,{kind:A.UNION_TYPE_DEFINITION,description:t,name:s,directives:o,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(F.EQUALS)?this.delimitedMany(F.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(n,{kind:A.ENUM_TYPE_DEFINITION,description:t,name:s,directives:o,values:u})}parseEnumValuesDefinition(){return this.optionalMany(F.BRACE_L,this.parseEnumValueDefinition,F.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(n,{kind:A.ENUM_VALUE_DEFINITION,description:t,name:s,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw Ye(this._lexer.source,this._lexer.token.start,`${hs(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(n,{kind:A.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:o,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(F.BRACE_L,this.parseInputValueDef,F.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===F.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(F.BRACE_L,this.parseOperationTypeDefinition,F.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:A.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:A.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:A.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:A.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:A.UNION_TYPE_EXTENSION,name:t,directives:s,types:o})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:A.ENUM_TYPE_EXTENSION,name:t,directives:s,values:o})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:A.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:o})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(F.AT);const s=this.parseName(),o=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:A.DIRECTIVE_DEFINITION,description:t,name:s,arguments:o,repeatable:u,locations:l})}parseDirectiveLocations(){return this.delimitedMany(F.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(W,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new pD(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw Ye(this._lexer.source,t.start,`Expected ${kf(n)}, found ${hs(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===F.NAME&&t.value===n)this.advanceLexer();else throw Ye(this._lexer.source,t.start,`Expected "${n}", found ${hs(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===F.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return Ye(this._lexer.source,t.start,`Unexpected ${hs(t)}.`)}any(n,t,s){this.expectToken(n);const o=[];for(;!this.expectOptionalToken(s);)o.push(t.call(this));return o}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}return[]}many(n,t,s){this.expectToken(n);const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==F.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw Ye(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function hs(i){const n=i.value;return kf(i.kind)+(n!=null?` "${n}"`:"")}function kf(i){return TD(i)?`"${i}"`:i}const PD=5;function Ls(i,n){const[t,s]=n?[i,n]:[void 0,i];let o=" Did you mean ";t&&(o+=t+" ");const u=s.map(d=>`"${d}"`);switch(u.length){case 0:return"";case 1:return o+u[0]+"?";case 2:return o+u[0]+" or "+u[1]+"?"}const l=u.slice(0,PD),f=l.pop();return o+l.join(", ")+", or "+f+"?"}function Yc(i){return i}function Fi(i,n){const t=Object.create(null);for(const s of i)t[n(s)]=s;return t}function si(i,n,t){const s=Object.create(null);for(const o of i)s[n(o)]=t(o);return s}function _t(i,n){const t=Object.create(null);for(const s of Object.keys(i))t[s]=n(i[s],s);return t}function UD(i,n){let t=0,s=0;for(;t<i.length&&s<n.length;){let o=i.charCodeAt(t),u=n.charCodeAt(s);if(ms(o)&&ms(u)){let l=0;do++t,l=l*10+o-Da,o=i.charCodeAt(t);while(ms(o)&&l>0);let f=0;do++s,f=f*10+u-Da,u=n.charCodeAt(s);while(ms(u)&&f>0);if(l<f)return-1;if(l>f)return 1}else{if(o<u)return-1;if(o>u)return 1;++t,++s}}return i.length-n.length}const Da=48,MD=57;function ms(i){return!isNaN(i)&&Da<=i&&i<=MD}function Bs(i,n){const t=Object.create(null),s=new $D(i),o=Math.floor(i.length*.4)+1;for(const u of n){const l=s.measure(u,o);l!==void 0&&(t[u]=l)}return Object.keys(t).sort((u,l)=>{const f=t[u]-t[l];return f!==0?f:UD(u,l)})}class $D{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=Qc(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let o=Qc(s),u=this._inputArray;if(o.length<u.length){const T=o;o=u,u=T}const l=o.length,f=u.length;if(l-f>t)return;const d=this._rows;for(let T=0;T<=f;T++)d[0][T]=T;for(let T=1;T<=l;T++){const D=d[(T-1)%3],N=d[T%3];let O=N[0]=T;for(let x=1;x<=f;x++){const L=o[T-1]===u[x-1]?0:1;let J=Math.min(D[x]+1,N[x-1]+1,D[x-1]+L);if(T>1&&x>1&&o[T-1]===u[x-2]&&o[T-2]===u[x-1]){const pe=d[(T-2)%3][x-2];J=Math.min(J,pe+1)}J<O&&(O=J),N[x]=J}if(O>t)return}const y=d[l%3][f];return y<=t?y:void 0}}function Qc(i){const n=i.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=i.charCodeAt(s);return t}function Pn(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,s]of Object.entries(i))n[t]=s;return n}function VD(i){return`"${i.replace(GD,qD)}"`}const GD=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function qD(i){return jD[i.charCodeAt(0)]}const jD=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ir=Object.freeze({});function xf(i,n,t=bf){const s=new Map;for(const pe of Object.values(A))s.set(pe,Lf(n,pe));let o,u=Array.isArray(i),l=[i],f=-1,d=[],y=i,T,D;const N=[],O=[];do{f++;const pe=f===l.length,$e=pe&&d.length!==0;if(pe){if(T=O.length===0?void 0:N[N.length-1],y=D,D=O.pop(),$e)if(u){y=y.slice();let Ce=0;for(const[Re,nn]of d){const He=Re-Ce;nn===null?(y.splice(He,1),Ce++):y[He]=nn}}else{y=Object.defineProperties({},Object.getOwnPropertyDescriptors(y));for(const[Ce,Re]of d)y[Ce]=Re}f=o.index,l=o.keys,d=o.edits,u=o.inArray,o=o.prev}else if(D){if(T=u?f:l[f],y=D[T],y==null)continue;N.push(T)}let ve;if(!Array.isArray(y)){var x,L;jc(y)||ce(!1,`Invalid AST Node: ${j(y)}.`);const Ce=pe?(x=s.get(y.kind))===null||x===void 0?void 0:x.leave:(L=s.get(y.kind))===null||L===void 0?void 0:L.enter;if(ve=Ce==null?void 0:Ce.call(n,y,T,D,N,O),ve===ir)break;if(ve===!1){if(!pe){N.pop();continue}}else if(ve!==void 0&&(d.push([T,ve]),!pe))if(jc(ve))y=ve;else{N.pop();continue}}if(ve===void 0&&$e&&d.push([T,y]),pe)N.pop();else{var J;o={inArray:u,index:f,keys:l,edits:d,prev:o},u=Array.isArray(y),l=u?y:(J=t[y.kind])!==null&&J!==void 0?J:[],f=-1,d=[],D&&O.push(D),D=y}}while(o!==void 0);return d.length!==0?d[d.length-1][1]:i}function WD(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const s of Object.values(A)){let o=!1;const u=new Array(i.length).fill(void 0),l=new Array(i.length).fill(void 0);for(let d=0;d<i.length;++d){const{enter:y,leave:T}=Lf(i[d],s);o||(o=y!=null||T!=null),u[d]=y,l[d]=T}if(!o)continue;const f={enter(...d){const y=d[0];for(let D=0;D<i.length;D++)if(n[D]===null){var T;const N=(T=u[D])===null||T===void 0?void 0:T.apply(i[D],d);if(N===!1)n[D]=y;else if(N===ir)n[D]=ir;else if(N!==void 0)return N}},leave(...d){const y=d[0];for(let D=0;D<i.length;D++)if(n[D]===null){var T;const N=(T=l[D])===null||T===void 0?void 0:T.apply(i[D],d);if(N===ir)n[D]=ir;else if(N!==void 0&&N!==!1)return N}else n[D]===y&&(n[D]=null)}};t[s]=f}return t}function Lf(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function ct(i){return xf(i,QD)}const YD=80,QD={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>V(i.definitions,`

`)},OperationDefinition:{leave(i){const n=ue("(",V(i.variableDefinitions,", "),")"),t=V([i.operation,V([i.name,n]),V(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:s})=>i+": "+n+ue(" = ",t)+ue(" ",V(s," "))},SelectionSet:{leave:({selections:i})=>Wn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:s,selectionSet:o}){const u=ue("",i,": ")+n;let l=u+ue("(",V(t,", "),")");return l.length>YD&&(l=u+ue(`(
`,Ts(V(t,`
`)),`
)`)),V([l,V(s," "),o]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+ue(" ",V(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>V(["...",ue("on ",i),V(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:o})=>`fragment ${i}${ue("(",V(t,", "),")")} on ${n} ${ue("",V(s," ")," ")}`+o},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?gD(i):VD(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+V(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+V(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+ue("(",V(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>ue("",i,`
`)+V(["schema",V(n," "),Wn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>ue("",i,`
`)+V(["scalar",n,V(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:o})=>ue("",i,`
`)+V(["type",n,ue("implements ",V(t," & ")),V(s," "),Wn(o)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:s,directives:o})=>ue("",i,`
`)+n+(zc(t)?ue(`(
`,Ts(V(t,`
`)),`
)`):ue("(",V(t,", "),")"))+": "+s+ue(" ",V(o," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:s,directives:o})=>ue("",i,`
`)+V([n+": "+t,ue("= ",s),V(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:o})=>ue("",i,`
`)+V(["interface",n,ue("implements ",V(t," & ")),V(s," "),Wn(o)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:s})=>ue("",i,`
`)+V(["union",n,V(t," "),ue("= ",V(s," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:s})=>ue("",i,`
`)+V(["enum",n,V(t," "),Wn(s)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>ue("",i,`
`)+V([n,V(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:s})=>ue("",i,`
`)+V(["input",n,V(t," "),Wn(s)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:s,locations:o})=>ue("",i,`
`)+"directive @"+n+(zc(t)?ue(`(
`,Ts(V(t,`
`)),`
)`):ue("(",V(t,", "),")"))+(s?" repeatable":"")+" on "+V(o," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>V(["extend schema",V(i," "),Wn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>V(["extend scalar",i,V(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>V(["extend type",i,ue("implements ",V(n," & ")),V(t," "),Wn(s)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>V(["extend interface",i,ue("implements ",V(n," & ")),V(t," "),Wn(s)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>V(["extend union",i,V(n," "),ue("= ",V(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>V(["extend enum",i,V(n," "),Wn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>V(["extend input",i,V(n," "),Wn(t)]," ")}};function V(i,n=""){var t;return(t=i==null?void 0:i.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function Wn(i){return ue(`{
`,Ts(V(i,`
`)),`
}`)}function ue(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function Ts(i){return ue("  ",i.replace(/\n/g,`
  `))}function zc(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function va(i,n){switch(i.kind){case A.NULL:return null;case A.INT:return parseInt(i.value,10);case A.FLOAT:return parseFloat(i.value);case A.STRING:case A.ENUM:case A.BOOLEAN:return i.value;case A.LIST:return i.values.map(t=>va(t,n));case A.OBJECT:return si(i.fields,t=>t.name.value,t=>va(t.value,n));case A.VARIABLE:return n==null?void 0:n[i.name.value]}}function it(i){if(i!=null||ce(!1,"Must provide name."),typeof i=="string"||ce(!1,"Expected name to be a string."),i.length===0)throw new q("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!Sf(i.charCodeAt(n)))throw new q(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Pa(i.charCodeAt(0)))throw new q(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function zD(i){if(i==="true"||i==="false"||i==="null")throw new q(`Enum values cannot be named: ${i}`);return it(i)}function Ua(i){return Qt(i)||mn(i)||an(i)||Hn(i)||Xn(i)||Kn(i)||ci(i)||gn(i)}function Qt(i){return pt(i,Nt)}function mn(i){return pt(i,ft)}function JD(i){if(!mn(i))throw new Error(`Expected ${j(i)} to be a GraphQL Object type.`);return i}function an(i){return pt(i,_s)}function HD(i){if(!an(i))throw new Error(`Expected ${j(i)} to be a GraphQL Interface type.`);return i}function Hn(i){return pt(i,bs)}function Xn(i){return pt(i,Ni)}function Kn(i){return pt(i,ws)}function ci(i){return pt(i,hn)}function gn(i){return pt(i,se)}function Bf(i){return Qt(i)||Xn(i)||Kn(i)||Ma(i)&&Bf(i.ofType)}function Pf(i){return Qt(i)||mn(i)||an(i)||Hn(i)||Xn(i)||Ma(i)&&Pf(i.ofType)}function Uf(i){return Qt(i)||Xn(i)}function XD(i){return an(i)||Hn(i)}class hn{constructor(n){Ua(n)||ce(!1,`Expected ${j(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class se{constructor(n){Mf(n)||ce(!1,`Expected ${j(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Ma(i){return ci(i)||gn(i)}function Mf(i){return Ua(i)&&!gn(i)}function KD(i){if(!Mf(i))throw new Error(`Expected ${j(i)} to be a GraphQL nullable type.`);return i}function wA(i){return Qt(i)||mn(i)||an(i)||Hn(i)||Xn(i)||Kn(i)}function ZD(i){if(i){let n=i;for(;Ma(n);)n=n.ofType;return n}}function $f(i){return typeof i=="function"?i():i}function Vf(i){return typeof i=="function"?i():i}class Nt{constructor(n){var t,s,o,u;const l=(t=n.parseValue)!==null&&t!==void 0?t:Yc;this.name=it(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:Yc,this.parseValue=l,this.parseLiteral=(o=n.parseLiteral)!==null&&o!==void 0?o:(f,d)=>l(va(f,d)),this.extensions=Pn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(u=n.extensionASTNodes)!==null&&u!==void 0?u:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||ce(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${j(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||ce(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||ce(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class ft{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Pn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>qf(n),this._interfaces=()=>Gf(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||ce(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${j(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Wf(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Gf(i){var n;const t=$f((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||ce(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function qf(i){const n=Vf(i.fields);return Ci(n)||ce(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),_t(n,(t,s)=>{var o;Ci(t)||ce(!1,`${i.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||ce(!1,`${i.name}.${s} field resolver must be a function if provided, but got: ${j(t.resolve)}.`);const u=(o=t.args)!==null&&o!==void 0?o:{};return Ci(u)||ce(!1,`${i.name}.${s} args must be an object with argument names as keys.`),{name:it(s),description:t.description,type:t.type,args:jf(u),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Pn(t.extensions),astNode:t.astNode}})}function jf(i){return Object.entries(i).map(([n,t])=>({name:it(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Pn(t.extensions),astNode:t.astNode}))}function Ci(i){return Ft(i)&&!Array.isArray(i)}function Wf(i){return _t(i,n=>({description:n.description,type:n.type,args:Yf(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Yf(i){return si(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function ev(i){return gn(i.type)&&i.defaultValue===void 0}class _s{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Pn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=qf.bind(void 0,n),this._interfaces=Gf.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ce(!1,`${this.name} must provide "resolveType" as a function, but got: ${j(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Wf(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class bs{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Pn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=nv.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||ce(!1,`${this.name} must provide "resolveType" as a function, but got: ${j(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function nv(i){const n=$f(i.types);return Array.isArray(n)||ce(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class Ni{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.extensions=Pn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=tv(this.name,n.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=Fi(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new q(`Enum "${this.name}" cannot represent value: ${j(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=j(n);throw new q(`Enum "${this.name}" cannot represent non-string value: ${s}.`+gs(this,s))}const t=this.getValue(n);if(t==null)throw new q(`Value "${n}" does not exist in "${this.name}" enum.`+gs(this,n));return t.value}parseLiteral(n,t){if(n.kind!==A.ENUM){const o=ct(n);throw new q(`Enum "${this.name}" cannot represent non-enum value: ${o}.`+gs(this,o),{nodes:n})}const s=this.getValue(n.value);if(s==null){const o=ct(n);throw new q(`Value "${o}" does not exist in "${this.name}" enum.`+gs(this,o),{nodes:n})}return s.value}toConfig(){const n=si(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function gs(i,n){const t=i.getValues().map(o=>o.name),s=Bs(n,t);return Ls("the enum value",s)}function tv(i,n){return Ci(n)||ce(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(Ci(s)||ce(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${j(s)}.`),{name:zD(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Pn(s.extensions),astNode:s.astNode}))}class ws{constructor(n){var t;this.name=it(n.name),this.description=n.description,this.extensions=Pn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=iv.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=_t(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function iv(i){const n=Vf(i.fields);return Ci(n)||ce(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),_t(n,(t,s)=>(!("resolve"in t)||ce(!1,`${i.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:it(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Pn(t.extensions),astNode:t.astNode}))}const da=2147483647,ha=-2147483648,rv=new Nt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=gr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new q(`Int cannot represent non-integer value: ${j(n)}`);if(t>da||t<ha)throw new q("Int cannot represent non 32-bit signed integer value: "+j(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new q(`Int cannot represent non-integer value: ${j(i)}`);if(i>da||i<ha)throw new q(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==A.INT)throw new q(`Int cannot represent non-integer value: ${ct(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>da||n<ha)throw new q(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),sv=new Nt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=gr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new q(`Float cannot represent non numeric value: ${j(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new q(`Float cannot represent non numeric value: ${j(i)}`);return i},parseLiteral(i){if(i.kind!==A.FLOAT&&i.kind!==A.INT)throw new q(`Float cannot represent non numeric value: ${ct(i)}`,i);return parseFloat(i.value)}}),Me=new Nt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=gr(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new q(`String cannot represent value: ${j(i)}`)},parseValue(i){if(typeof i!="string")throw new q(`String cannot represent a non string value: ${j(i)}`);return i},parseLiteral(i){if(i.kind!==A.STRING)throw new q(`String cannot represent a non string value: ${ct(i)}`,{nodes:i});return i.value}}),Bn=new Nt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=gr(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new q(`Boolean cannot represent a non boolean value: ${j(n)}`)},parseValue(i){if(typeof i!="boolean")throw new q(`Boolean cannot represent a non boolean value: ${j(i)}`);return i},parseLiteral(i){if(i.kind!==A.BOOLEAN)throw new q(`Boolean cannot represent a non boolean value: ${ct(i)}`,{nodes:i});return i.value}}),Qf=new Nt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=gr(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new q(`ID cannot represent value: ${j(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new q(`ID cannot represent value: ${j(i)}`)},parseLiteral(i){if(i.kind!==A.STRING&&i.kind!==A.INT)throw new q("ID cannot represent a non-string and non-integer value: "+ct(i),{nodes:i});return i.value}}),Ps=Object.freeze([Me,rv,sv,Bn,Qf]);function ov(i){return Ps.some(({name:n})=>i.name===n)}function gr(i){if(Ft(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!Ft(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function av(i){return pt(i,Yt)}class Yt{constructor(n){var t,s;this.name=it(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Pn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||ce(!1,`@${n.name} locations must be an Array.`);const o=(s=n.args)!==null&&s!==void 0?s:{};Ft(o)&&!Array.isArray(o)||ce(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=jf(o)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Yf(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const uv=new Yt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new se(Bn),description:"Included when true."}}}),lv=new Yt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[W.FIELD,W.FRAGMENT_SPREAD,W.INLINE_FRAGMENT],args:{if:{type:new se(Bn),description:"Skipped when true."}}}),cv="No longer supported",zf=new Yt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[W.FIELD_DEFINITION,W.ARGUMENT_DEFINITION,W.INPUT_FIELD_DEFINITION,W.ENUM_VALUE],args:{reason:{type:Me,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:cv}}}),Jf=new Yt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[W.SCALAR],args:{url:{type:new se(Me),description:"The URL that specifies the behavior of this scalar."}}}),Ri=Object.freeze([uv,lv,zf,Jf]);function fv(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function rr(i,n){if(gn(n)){const t=rr(i,n.ofType);return(t==null?void 0:t.kind)===A.NULL?null:t}if(i===null)return{kind:A.NULL};if(i===void 0)return null;if(ci(n)){const t=n.ofType;if(fv(i)){const s=[];for(const o of i){const u=rr(o,t);u!=null&&s.push(u)}return{kind:A.LIST,values:s}}return rr(i,t)}if(Kn(n)){if(!Ft(i))return null;const t=[];for(const s of Object.values(n.getFields())){const o=rr(i[s.name],s.type);o&&t.push({kind:A.OBJECT_FIELD,name:{kind:A.NAME,value:s.name},value:o})}return{kind:A.OBJECT,fields:t}}if(Uf(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:A.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return Jc.test(s)?{kind:A.INT,value:s}:{kind:A.FLOAT,value:s}}if(typeof t=="string")return Xn(n)?{kind:A.ENUM,value:t}:n===Qf&&Jc.test(t)?{kind:A.INT,value:t}:{kind:A.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${j(t)}.`)}Jn(!1,"Unexpected input type: "+j(n))}const Jc=/^-?(?:0|[1-9][0-9]*)$/,$a=new ft({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Me,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new se(new hn(new se(zn))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new se(zn),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:zn,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:zn,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new se(new hn(new se(Hf))),resolve:i=>i.getDirectives()}})}),Hf=new ft({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new se(Me),resolve:i=>i.name},description:{type:Me,resolve:i=>i.description},isRepeatable:{type:new se(Bn),resolve:i=>i.isRepeatable},locations:{type:new se(new hn(new se(Xf))),resolve:i=>i.locations},args:{type:new se(new hn(new se(Us))),args:{includeDeprecated:{type:Bn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),Xf=new Ni({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:W.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:W.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:W.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:W.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:W.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:W.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:W.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:W.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:W.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:W.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:W.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:W.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:W.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:W.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:W.UNION,description:"Location adjacent to a union definition."},ENUM:{value:W.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:W.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:W.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:W.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),zn=new ft({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new se(ep),resolve(i){if(Qt(i))return De.SCALAR;if(mn(i))return De.OBJECT;if(an(i))return De.INTERFACE;if(Hn(i))return De.UNION;if(Xn(i))return De.ENUM;if(Kn(i))return De.INPUT_OBJECT;if(ci(i))return De.LIST;if(gn(i))return De.NON_NULL;Jn(!1,`Unexpected type: "${j(i)}".`)}},name:{type:Me,resolve:i=>"name"in i?i.name:void 0},description:{type:Me,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Me,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new hn(new se(Kf)),args:{includeDeprecated:{type:Bn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(mn(i)||an(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new hn(new se(zn)),resolve(i){if(mn(i)||an(i))return i.getInterfaces()}},possibleTypes:{type:new hn(new se(zn)),resolve(i,n,t,{schema:s}){if(XD(i))return s.getPossibleTypes(i)}},enumValues:{type:new hn(new se(Zf)),args:{includeDeprecated:{type:Bn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Xn(i)){const t=i.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new hn(new se(Us)),args:{includeDeprecated:{type:Bn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Kn(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:zn,resolve:i=>"ofType"in i?i.ofType:void 0}})}),Kf=new ft({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new se(Me),resolve:i=>i.name},description:{type:Me,resolve:i=>i.description},args:{type:new se(new hn(new se(Us))),args:{includeDeprecated:{type:Bn,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new se(zn),resolve:i=>i.type},isDeprecated:{type:new se(Bn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Me,resolve:i=>i.deprecationReason}})}),Us=new ft({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new se(Me),resolve:i=>i.name},description:{type:Me,resolve:i=>i.description},type:{type:new se(zn),resolve:i=>i.type},defaultValue:{type:Me,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,s=rr(t,n);return s?ct(s):null}},isDeprecated:{type:new se(Bn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Me,resolve:i=>i.deprecationReason}})}),Zf=new ft({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new se(Me),resolve:i=>i.name},description:{type:Me,resolve:i=>i.description},isDeprecated:{type:new se(Bn),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Me,resolve:i=>i.deprecationReason}})});var De;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(De||(De={}));const ep=new Ni({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:De.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:De.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:De.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:De.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:De.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:De.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:De.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:De.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new se($a);new se(Me);new se(Me);const Ms=Object.freeze([$a,Hf,Xf,zn,Kf,Us,Zf,ep]);function pv(i){return Ms.some(({name:n})=>i.name===n)}class np{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ft(n)||ce(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||ce(!1,`"types" must be Array if provided but got: ${j(n.types)}.`),!n.directives||Array.isArray(n.directives)||ce(!1,`"directives" must be Array if provided but got: ${j(n.directives)}.`),this.description=n.description,this.extensions=Pn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:Ri;const o=new Set(n.types);if(n.types!=null)for(const u of n.types)o.delete(u),Yn(u,o);this._queryType!=null&&Yn(this._queryType,o),this._mutationType!=null&&Yn(this._mutationType,o),this._subscriptionType!=null&&Yn(this._subscriptionType,o);for(const u of this._directives)if(av(u))for(const l of u.args)Yn(l.type,o);Yn($a,o),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of o){if(u==null)continue;const l=u.name;if(l||ce(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=u,an(u)){for(const f of u.getInterfaces())if(an(f)){let d=this._implementationsMap[f.name];d===void 0&&(d=this._implementationsMap[f.name]={objects:[],interfaces:[]}),d.interfaces.push(u)}}else if(mn(u)){for(const f of u.getInterfaces())if(an(f)){let d=this._implementationsMap[f.name];d===void 0&&(d=this._implementationsMap[f.name]={objects:[],interfaces:[]}),d.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Ln.QUERY:return this.getQueryType();case Ln.MUTATION:return this.getMutationType();case Ln.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Hn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Hn(n))for(const o of n.getTypes())s[o.name]=!0;else{const o=this.getImplementations(n);for(const u of o.objects)s[u.name]=!0;for(const u of o.interfaces)s[u.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function Yn(i,n){const t=ZD(i);if(!n.has(t)){if(n.add(t),Hn(t))for(const s of t.getTypes())Yn(s,n);else if(mn(t)||an(t)){for(const s of t.getInterfaces())Yn(s,n);for(const s of Object.values(t.getFields())){Yn(s.type,n);for(const o of s.args)Yn(o.type,n)}}else if(Kn(t))for(const s of Object.values(t.getFields()))Yn(s.type,n)}return n}function dv(i){return i.kind===A.SCHEMA_DEFINITION||yr(i)||i.kind===A.DIRECTIVE_DEFINITION}function yr(i){return i.kind===A.SCALAR_TYPE_DEFINITION||i.kind===A.OBJECT_TYPE_DEFINITION||i.kind===A.INTERFACE_TYPE_DEFINITION||i.kind===A.UNION_TYPE_DEFINITION||i.kind===A.ENUM_TYPE_DEFINITION||i.kind===A.INPUT_OBJECT_TYPE_DEFINITION}function hv(i){return i.kind===A.SCHEMA_EXTENSION||Va(i)}function Va(i){return i.kind===A.SCALAR_TYPE_EXTENSION||i.kind===A.OBJECT_TYPE_EXTENSION||i.kind===A.INTERFACE_TYPE_EXTENSION||i.kind===A.UNION_TYPE_EXTENSION||i.kind===A.ENUM_TYPE_EXTENSION||i.kind===A.INPUT_OBJECT_TYPE_EXTENSION}function mv(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ri;for(const l of s)n[l.name]=l.args.map(f=>f.name);const o=i.getDocument().definitions;for(const l of o)if(l.kind===A.DIRECTIVE_DEFINITION){var u;const f=(u=l.arguments)!==null&&u!==void 0?u:[];n[l.name.value]=f.map(d=>d.name.value)}return{Directive(l){const f=l.name.value,d=n[f];if(l.arguments&&d)for(const y of l.arguments){const T=y.name.value;if(!d.includes(T)){const D=Bs(T,d);i.reportError(new q(`Unknown argument "${T}" on directive "@${f}".`+Ls(D),{nodes:y}))}}return!1}}}function gv(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ri;for(const u of s)n[u.name]=u.locations;const o=i.getDocument().definitions;for(const u of o)u.kind===A.DIRECTIVE_DEFINITION&&(n[u.name.value]=u.locations.map(l=>l.value));return{Directive(u,l,f,d,y){const T=u.name.value,D=n[T];if(!D){i.reportError(new q(`Unknown directive "@${T}".`,{nodes:u}));return}const N=yv(y);N&&!D.includes(N)&&i.reportError(new q(`Directive "@${T}" may not be used on ${N}.`,{nodes:u}))}}}function yv(i){const n=i[i.length-1];switch("kind"in n||Jn(!1),n.kind){case A.OPERATION_DEFINITION:return Tv(n.operation);case A.FIELD:return W.FIELD;case A.FRAGMENT_SPREAD:return W.FRAGMENT_SPREAD;case A.INLINE_FRAGMENT:return W.INLINE_FRAGMENT;case A.FRAGMENT_DEFINITION:return W.FRAGMENT_DEFINITION;case A.VARIABLE_DEFINITION:return W.VARIABLE_DEFINITION;case A.SCHEMA_DEFINITION:case A.SCHEMA_EXTENSION:return W.SCHEMA;case A.SCALAR_TYPE_DEFINITION:case A.SCALAR_TYPE_EXTENSION:return W.SCALAR;case A.OBJECT_TYPE_DEFINITION:case A.OBJECT_TYPE_EXTENSION:return W.OBJECT;case A.FIELD_DEFINITION:return W.FIELD_DEFINITION;case A.INTERFACE_TYPE_DEFINITION:case A.INTERFACE_TYPE_EXTENSION:return W.INTERFACE;case A.UNION_TYPE_DEFINITION:case A.UNION_TYPE_EXTENSION:return W.UNION;case A.ENUM_TYPE_DEFINITION:case A.ENUM_TYPE_EXTENSION:return W.ENUM;case A.ENUM_VALUE_DEFINITION:return W.ENUM_VALUE;case A.INPUT_OBJECT_TYPE_DEFINITION:case A.INPUT_OBJECT_TYPE_EXTENSION:return W.INPUT_OBJECT;case A.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Jn(!1),t.kind===A.INPUT_OBJECT_TYPE_DEFINITION?W.INPUT_FIELD_DEFINITION:W.ARGUMENT_DEFINITION}default:Jn(!1,"Unexpected kind: "+j(n.kind))}}function Tv(i){switch(i){case Ln.QUERY:return W.QUERY;case Ln.MUTATION:return W.MUTATION;case Ln.SUBSCRIPTION:return W.SUBSCRIPTION}}function Ev(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const u of i.getDocument().definitions)yr(u)&&(s[u.name.value]=!0);const o=[...Object.keys(t),...Object.keys(s)];return{NamedType(u,l,f,d,y){const T=u.name.value;if(!t[T]&&!s[T]){var D;const N=(D=y[2])!==null&&D!==void 0?D:f,O=N!=null&&Iv(N);if(O&&Hc.includes(T))return;const x=Bs(T,O?Hc.concat(o):o);i.reportError(new q(`Unknown type "${T}".`+Ls(x),{nodes:u}))}}}}const Hc=[...Ps,...Ms].map(i=>i.name);function Iv(i){return"kind"in i&&(dv(i)||hv(i))}function Dv(i){var n,t,s;const o=i.getSchema(),u=(n=(t=(s=o==null?void 0:o.astNode)!==null&&s!==void 0?s:o==null?void 0:o.getQueryType())!==null&&t!==void 0?t:o==null?void 0:o.getMutationType())!==null&&n!==void 0?n:o==null?void 0:o.getSubscriptionType();let l=0;return{SchemaDefinition(f){if(u){i.reportError(new q("Cannot define a new schema within a schema extension.",{nodes:f}));return}l>0&&i.reportError(new q("Must provide only one schema definition.",{nodes:f})),++l}}}function vv(i){const n=i.getSchema(),t=Object.create(null);for(const o of i.getDocument().definitions)yr(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(o){const u=o.name.value,l=t[u],f=n==null?void 0:n.getType(u);let d;if(l?d=Av[l.kind]:f&&(d=_v(f)),d){if(d!==o.kind){const y=bv(o.kind);i.reportError(new q(`Cannot extend non-${y} type "${u}".`,{nodes:l?[l,o]:o}))}}else{const y=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),T=Bs(u,y);i.reportError(new q(`Cannot extend type "${u}" because it is not defined.`+Ls(T),{nodes:o.name}))}}}const Av={[A.SCALAR_TYPE_DEFINITION]:A.SCALAR_TYPE_EXTENSION,[A.OBJECT_TYPE_DEFINITION]:A.OBJECT_TYPE_EXTENSION,[A.INTERFACE_TYPE_DEFINITION]:A.INTERFACE_TYPE_EXTENSION,[A.UNION_TYPE_DEFINITION]:A.UNION_TYPE_EXTENSION,[A.ENUM_TYPE_DEFINITION]:A.ENUM_TYPE_EXTENSION,[A.INPUT_OBJECT_TYPE_DEFINITION]:A.INPUT_OBJECT_TYPE_EXTENSION};function _v(i){if(Qt(i))return A.SCALAR_TYPE_EXTENSION;if(mn(i))return A.OBJECT_TYPE_EXTENSION;if(an(i))return A.INTERFACE_TYPE_EXTENSION;if(Hn(i))return A.UNION_TYPE_EXTENSION;if(Xn(i))return A.ENUM_TYPE_EXTENSION;if(Kn(i))return A.INPUT_OBJECT_TYPE_EXTENSION;Jn(!1,"Unexpected type: "+j(i))}function bv(i){switch(i){case A.SCALAR_TYPE_EXTENSION:return"scalar";case A.OBJECT_TYPE_EXTENSION:return"object";case A.INTERFACE_TYPE_EXTENSION:return"interface";case A.UNION_TYPE_EXTENSION:return"union";case A.ENUM_TYPE_EXTENSION:return"enum";case A.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Jn(!1,"Unexpected kind: "+j(i))}}function wv(i){var n;const t=Object.create(null),s=i.getSchema(),o=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:Ri;for(const f of o)t[f.name]=Fi(f.args.filter(ev),d=>d.name);const u=i.getDocument().definitions;for(const f of u)if(f.kind===A.DIRECTIVE_DEFINITION){var l;const d=(l=f.arguments)!==null&&l!==void 0?l:[];t[f.name.value]=Fi(d.filter(Sv),y=>y.name.value)}return{Directive:{leave(f){const d=f.name.value,y=t[d];if(y){var T;const D=(T=f.arguments)!==null&&T!==void 0?T:[],N=new Set(D.map(O=>O.name.value));for(const[O,x]of Object.entries(y))if(!N.has(O)){const L=Ua(x.type)?j(x.type):ct(x.type);i.reportError(new q(`Directive "@${d}" argument "${O}" of type "${L}" is required, but it was not provided.`,{nodes:f}))}}}}}}function Sv(i){return i.type.kind===A.NON_NULL_TYPE&&i.defaultValue==null}function Gt(i,n,t){if(i){if(i.kind===A.VARIABLE){i.name.value;return}if(gn(n))return i.kind===A.NULL?void 0:Gt(i,n.ofType,t);if(i.kind===A.NULL)return null;if(ci(n)){const s=n.ofType;if(i.kind===A.LIST){const u=[];for(const l of i.values)if(Xc(l,t)){if(gn(s))return;u.push(null)}else{const f=Gt(l,s,t);if(f===void 0)return;u.push(f)}return u}const o=Gt(i,s,t);return o===void 0?void 0:[o]}if(Kn(n)){if(i.kind!==A.OBJECT)return;const s=Object.create(null),o=Fi(i.fields,u=>u.name.value);for(const u of Object.values(n.getFields())){const l=o[u.name];if(!l||Xc(l.value,t)){if(u.defaultValue!==void 0)s[u.name]=u.defaultValue;else if(gn(u.type))return;continue}const f=Gt(l.value,u.type,t);if(f===void 0)return;s[u.name]=f}return s}if(Uf(n)){let s;try{s=n.parseLiteral(i,t)}catch{return}return s===void 0?void 0:s}Jn(!1,"Unexpected input type: "+j(n))}}function Xc(i,n){return i.kind===A.VARIABLE&&n==null}function Cv(i,n,t){var s;const o={},u=(s=n.arguments)!==null&&s!==void 0?s:[],l=Fi(u,f=>f.name.value);for(const f of i.args){const d=f.name,y=f.type,T=l[d];if(!T){if(f.defaultValue!==void 0)o[d]=f.defaultValue;else if(gn(y))throw new q(`Argument "${d}" of required type "${j(y)}" was not provided.`,{nodes:n});continue}const D=T.value;let N=D.kind===A.NULL;if(D.kind===A.VARIABLE){const x=D.name.value;{if(f.defaultValue!==void 0)o[d]=f.defaultValue;else if(gn(y))throw new q(`Argument "${d}" of required type "${j(y)}" was provided the variable "$${x}" which was not provided a runtime value.`,{nodes:D});continue}}if(N&&gn(y))throw new q(`Argument "${d}" of non-null type "${j(y)}" must not be null.`,{nodes:D});const O=Gt(D,y,t);if(O===void 0)throw new q(`Argument "${d}" has invalid value ${ct(D)}.`,{nodes:D});o[d]=O}return o}function tp(i,n,t){var s;const o=(s=n.directives)===null||s===void 0?void 0:s.find(u=>u.name.value===i.name);if(o)return Cv(i,o,t)}function ip(i,n){const t=new Map;for(const s of i){const o=n(s),u=t.get(o);u===void 0?t.set(o,[s]):u.push(s)}return t}function Fv(i){return{DirectiveDefinition(s){var o;const u=(o=s.arguments)!==null&&o!==void 0?o:[];return t(`@${s.name.value}`,u)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var o;const u=s.name.value,l=(o=s.fields)!==null&&o!==void 0?o:[];for(const d of l){var f;const y=d.name.value,T=(f=d.arguments)!==null&&f!==void 0?f:[];t(`${u}.${y}`,T)}return!1}function t(s,o){const u=ip(o,l=>l.name.value);for(const[l,f]of u)f.length>1&&i.reportError(new q(`Argument "${s}(${l}:)" can only be defined once.`,{nodes:f.map(d=>d.name)}));return!1}}function Nv(i){return{Field:n,Directive:n};function n(t){var s;const o=(s=t.arguments)!==null&&s!==void 0?s:[],u=ip(o,l=>l.name.value);for(const[l,f]of u)f.length>1&&i.reportError(new q(`There can be only one argument named "${l}".`,{nodes:f.map(d=>d.name)}))}}function Ov(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(s){const o=s.name.value;if(t!=null&&t.getDirective(o)){i.reportError(new q(`Directive "@${o}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[o]?i.reportError(new q(`There can be only one directive named "@${o}".`,{nodes:[n[o],s.name]})):n[o]=s.name,!1}}}function Rv(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():Ri;for(const f of s)n[f.name]=!f.isRepeatable;const o=i.getDocument().definitions;for(const f of o)f.kind===A.DIRECTIVE_DEFINITION&&(n[f.name.value]=!f.repeatable);const u=Object.create(null),l=Object.create(null);return{enter(f){if(!("directives"in f)||!f.directives)return;let d;if(f.kind===A.SCHEMA_DEFINITION||f.kind===A.SCHEMA_EXTENSION)d=u;else if(yr(f)||Va(f)){const y=f.name.value;d=l[y],d===void 0&&(l[y]=d=Object.create(null))}else d=Object.create(null);for(const y of f.directives){const T=y.name.value;n[T]&&(d[T]?i.reportError(new q(`The directive "@${T}" can only be used once at this location.`,{nodes:[d[T],y]})):d[T]=y)}}}}function kv(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:o,EnumTypeExtension:o};function o(u){var l;const f=u.name.value;s[f]||(s[f]=Object.create(null));const d=(l=u.values)!==null&&l!==void 0?l:[],y=s[f];for(const T of d){const D=T.name.value,N=t[f];Xn(N)&&N.getValue(D)?i.reportError(new q(`Enum value "${f}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:T.name})):y[D]?i.reportError(new q(`Enum value "${f}.${D}" can only be defined once.`,{nodes:[y[D],T.name]})):y[D]=T.name}return!1}}function xv(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:o,InputObjectTypeExtension:o,InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(u){var l;const f=u.name.value;s[f]||(s[f]=Object.create(null));const d=(l=u.fields)!==null&&l!==void 0?l:[],y=s[f];for(const T of d){const D=T.name.value;Lv(t[f],D)?i.reportError(new q(`Field "${f}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:T.name})):y[D]?i.reportError(new q(`Field "${f}.${D}" can only be defined once.`,{nodes:[y[D],T.name]})):y[D]=T.name}return!1}}function Lv(i,n){return mn(i)||an(i)||Kn(i)?i.getFields()[n]!=null:!1}function Bv(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Jn(!1),t=s}},ObjectField(s){const o=s.name.value;t[o]?i.reportError(new q(`There can be only one input field named "${o}".`,{nodes:[t[o],s.name]})):t[o]=s.name}}}function Pv(i){const n=i.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:o,SchemaExtension:o};function o(u){var l;const f=(l=u.operationTypes)!==null&&l!==void 0?l:[];for(const d of f){const y=d.operation,T=t[y];s[y]?i.reportError(new q(`Type for ${y} already defined in the schema. It cannot be redefined.`,{nodes:d})):T?i.reportError(new q(`There can be only one ${y} type in schema.`,{nodes:[T,d]})):t[y]=d}return!1}}function Uv(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(o){const u=o.name.value;if(t!=null&&t.getType(u)){i.reportError(new q(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:o.name}));return}return n[u]?i.reportError(new q(`There can be only one type named "${u}".`,{nodes:[n[u],o.name]})):n[u]=o.name,!1}}const Mv=Object.freeze([Dv,Pv,Uv,kv,xv,Fv,Ov,Ev,gv,Rv,vv,mv,Nv,Bv,wv]);class $v{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===A.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let o;for(;o=s.pop();)for(const u of o.selections)u.kind===A.FRAGMENT_SPREAD?t.push(u):u.selectionSet&&s.push(u.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),o=[n.selectionSet];let u;for(;u=o.pop();)for(const l of this.getFragmentSpreads(u)){const f=l.name.value;if(s[f]!==!0){s[f]=!0;const d=this.getFragment(f);d&&(t.push(d),o.push(d.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class Vv extends $v{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function Gv(i,n,t=Mv){const s=[],o=new Vv(i,n,l=>{s.push(l)}),u=t.map(l=>l(o));return xf(i,WD(u)),s}function qv(i){const n=Gv(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function jv(i,n){Ft(i)&&Ft(i.__schema)||ce(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${j(i)}.`);const t=i.__schema,s=si(t.types,R=>R.name,R=>N(R));for(const R of[...Ps,...Ms])s[R.name]&&(s[R.name]=R);const o=t.queryType?T(t.queryType):null,u=t.mutationType?T(t.mutationType):null,l=t.subscriptionType?T(t.subscriptionType):null,f=t.directives?t.directives.map(dt):[];return new np({description:t.description,query:o,mutation:u,subscription:l,types:Object.values(s),directives:f,assumeValid:void 0});function d(R){if(R.kind===De.LIST){const X=R.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");return new hn(d(X))}if(R.kind===De.NON_NULL){const X=R.ofType;if(!X)throw new Error("Decorated type deeper than introspection query.");const tn=d(X);return new se(KD(tn))}return y(R)}function y(R){const X=R.name;if(!X)throw new Error(`Unknown type reference: ${j(R)}.`);const tn=s[X];if(!tn)throw new Error(`Invalid or incomplete schema, unknown type: ${X}. Ensure that a full introspection query is used in order to build a client schema.`);return tn}function T(R){return JD(y(R))}function D(R){return HD(y(R))}function N(R){if(R!=null&&R.name!=null&&R.kind!=null)switch(R.kind){case De.SCALAR:return O(R);case De.OBJECT:return L(R);case De.INTERFACE:return J(R);case De.UNION:return pe(R);case De.ENUM:return $e(R);case De.INPUT_OBJECT:return ve(R)}const X=j(R);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${X}.`)}function O(R){return new Nt({name:R.name,description:R.description,specifiedByURL:R.specifiedByURL})}function x(R){if(R.interfaces===null&&R.kind===De.INTERFACE)return[];if(!R.interfaces){const X=j(R);throw new Error(`Introspection result missing interfaces: ${X}.`)}return R.interfaces.map(D)}function L(R){return new ft({name:R.name,description:R.description,interfaces:()=>x(R),fields:()=>Ce(R)})}function J(R){return new _s({name:R.name,description:R.description,interfaces:()=>x(R),fields:()=>Ce(R)})}function pe(R){if(!R.possibleTypes){const X=j(R);throw new Error(`Introspection result missing possibleTypes: ${X}.`)}return new bs({name:R.name,description:R.description,types:()=>R.possibleTypes.map(T)})}function $e(R){if(!R.enumValues){const X=j(R);throw new Error(`Introspection result missing enumValues: ${X}.`)}return new Ni({name:R.name,description:R.description,values:si(R.enumValues,X=>X.name,X=>({description:X.description,deprecationReason:X.deprecationReason}))})}function ve(R){if(!R.inputFields){const X=j(R);throw new Error(`Introspection result missing inputFields: ${X}.`)}return new ws({name:R.name,description:R.description,fields:()=>nn(R.inputFields)})}function Ce(R){if(!R.fields)throw new Error(`Introspection result missing fields: ${j(R)}.`);return si(R.fields,X=>X.name,Re)}function Re(R){const X=d(R.type);if(!Pf(X)){const tn=j(X);throw new Error(`Introspection must provide output type for fields, but received: ${tn}.`)}if(!R.args){const tn=j(R);throw new Error(`Introspection result missing field args: ${tn}.`)}return{description:R.description,deprecationReason:R.deprecationReason,type:X,args:nn(R.args)}}function nn(R){return si(R,X=>X.name,He)}function He(R){const X=d(R.type);if(!Bf(X)){const Ot=j(X);throw new Error(`Introspection must provide input type for arguments, but received: ${Ot}.`)}const tn=R.defaultValue!=null?Gt(BD(R.defaultValue),X):void 0;return{description:R.description,type:X,defaultValue:tn,deprecationReason:R.deprecationReason}}function dt(R){if(!R.args){const X=j(R);throw new Error(`Introspection result missing directive args: ${X}.`)}if(!R.locations){const X=j(R);throw new Error(`Introspection result missing directive locations: ${X}.`)}return new Yt({name:R.name,description:R.description,isRepeatable:R.isRepeatable,locations:R.locations.slice(),args:nn(R.args)})}}function Wv(i,n,t){var s,o,u,l;const f=[],d=Object.create(null),y=[];let T;const D=[];for(const w of n.definitions)if(w.kind===A.SCHEMA_DEFINITION)T=w;else if(w.kind===A.SCHEMA_EXTENSION)D.push(w);else if(yr(w))f.push(w);else if(Va(w)){const $=w.name.value,P=d[$];d[$]=P?P.concat([w]):[w]}else w.kind===A.DIRECTIVE_DEFINITION&&y.push(w);if(Object.keys(d).length===0&&f.length===0&&y.length===0&&D.length===0&&T==null)return i;const N=Object.create(null);for(const w of i.types)N[w.name]=$e(w);for(const w of f){var O;const $=w.name.value;N[$]=(O=Kc[$])!==null&&O!==void 0?O:bn(w)}const x={query:i.query&&J(i.query),mutation:i.mutation&&J(i.mutation),subscription:i.subscription&&J(i.subscription),...T&&tn([T]),...tn(D)};return{description:(s=T)===null||s===void 0||(o=s.description)===null||o===void 0?void 0:o.value,...x,types:Object.values(N),directives:[...i.directives.map(pe),...y.map(Tr)],extensions:Object.create(null),astNode:(u=T)!==null&&u!==void 0?u:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(D),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function L(w){return ci(w)?new hn(L(w.ofType)):gn(w)?new se(L(w.ofType)):J(w)}function J(w){return N[w.name]}function pe(w){const $=w.toConfig();return new Yt({...$,args:_t($.args,X)})}function $e(w){if(pv(w)||ov(w))return w;if(Qt(w))return Re(w);if(mn(w))return nn(w);if(an(w))return He(w);if(Hn(w))return dt(w);if(Xn(w))return Ce(w);if(Kn(w))return ve(w);Jn(!1,"Unexpected type: "+j(w))}function ve(w){var $;const P=w.toConfig(),U=($=d[P.name])!==null&&$!==void 0?$:[];return new ws({...P,fields:()=>({..._t(P.fields,de=>({...de,type:L(de.type)})),...rt(U)}),extensionASTNodes:P.extensionASTNodes.concat(U)})}function Ce(w){var $;const P=w.toConfig(),U=($=d[w.name])!==null&&$!==void 0?$:[];return new Ni({...P,values:{...P.values,...Un(U)},extensionASTNodes:P.extensionASTNodes.concat(U)})}function Re(w){var $;const P=w.toConfig(),U=($=d[P.name])!==null&&$!==void 0?$:[];let de=P.specifiedByURL;for(const he of U){var Be;de=(Be=Zc(he))!==null&&Be!==void 0?Be:de}return new Nt({...P,specifiedByURL:de,extensionASTNodes:P.extensionASTNodes.concat(U)})}function nn(w){var $;const P=w.toConfig(),U=($=d[P.name])!==null&&$!==void 0?$:[];return new ft({...P,interfaces:()=>[...w.getInterfaces().map(J),...pi(U)],fields:()=>({..._t(P.fields,R),...fi(U)}),extensionASTNodes:P.extensionASTNodes.concat(U)})}function He(w){var $;const P=w.toConfig(),U=($=d[P.name])!==null&&$!==void 0?$:[];return new _s({...P,interfaces:()=>[...w.getInterfaces().map(J),...pi(U)],fields:()=>({..._t(P.fields,R),...fi(U)}),extensionASTNodes:P.extensionASTNodes.concat(U)})}function dt(w){var $;const P=w.toConfig(),U=($=d[P.name])!==null&&$!==void 0?$:[];return new bs({...P,types:()=>[...w.getTypes().map(J),...Jt(U)],extensionASTNodes:P.extensionASTNodes.concat(U)})}function R(w){return{...w,type:L(w.type),args:w.args&&_t(w.args,X)}}function X(w){return{...w,type:L(w.type)}}function tn(w){const $={};for(const U of w){var P;const de=(P=U.operationTypes)!==null&&P!==void 0?P:[];for(const Be of de)$[Be.operation]=Ot(Be.type)}return $}function Ot(w){var $;const P=w.name.value,U=($=Kc[P])!==null&&$!==void 0?$:N[P];if(U===void 0)throw new Error(`Unknown type: "${P}".`);return U}function zt(w){return w.kind===A.LIST_TYPE?new hn(zt(w.type)):w.kind===A.NON_NULL_TYPE?new se(zt(w.type)):Ot(w)}function Tr(w){var $;return new Yt({name:w.name.value,description:($=w.description)===null||$===void 0?void 0:$.value,locations:w.locations.map(({value:P})=>P),isRepeatable:w.repeatable,args:Er(w.arguments),astNode:w})}function fi(w){const $=Object.create(null);for(const de of w){var P;const Be=(P=de.fields)!==null&&P!==void 0?P:[];for(const he of Be){var U;$[he.name.value]={type:zt(he.type),description:(U=he.description)===null||U===void 0?void 0:U.value,args:Er(he.arguments),deprecationReason:ys(he),astNode:he}}}return $}function Er(w){const $=w??[],P=Object.create(null);for(const de of $){var U;const Be=zt(de.type);P[de.name.value]={type:Be,description:(U=de.description)===null||U===void 0?void 0:U.value,defaultValue:Gt(de.defaultValue,Be),deprecationReason:ys(de),astNode:de}}return P}function rt(w){const $=Object.create(null);for(const de of w){var P;const Be=(P=de.fields)!==null&&P!==void 0?P:[];for(const he of Be){var U;const wn=zt(he.type);$[he.name.value]={type:wn,description:(U=he.description)===null||U===void 0?void 0:U.value,defaultValue:Gt(he.defaultValue,wn),deprecationReason:ys(he),astNode:he}}}return $}function Un(w){const $=Object.create(null);for(const de of w){var P;const Be=(P=de.values)!==null&&P!==void 0?P:[];for(const he of Be){var U;$[he.name.value]={description:(U=he.description)===null||U===void 0?void 0:U.value,deprecationReason:ys(he),astNode:he}}}return $}function pi(w){return w.flatMap($=>{var P,U;return(P=(U=$.interfaces)===null||U===void 0?void 0:U.map(Ot))!==null&&P!==void 0?P:[]})}function Jt(w){return w.flatMap($=>{var P,U;return(P=(U=$.types)===null||U===void 0?void 0:U.map(Ot))!==null&&P!==void 0?P:[]})}function bn(w){var $;const P=w.name.value,U=($=d[P])!==null&&$!==void 0?$:[];switch(w.kind){case A.OBJECT_TYPE_DEFINITION:{var de;const Xe=[w,...U];return new ft({name:P,description:(de=w.description)===null||de===void 0?void 0:de.value,interfaces:()=>pi(Xe),fields:()=>fi(Xe),astNode:w,extensionASTNodes:U})}case A.INTERFACE_TYPE_DEFINITION:{var Be;const Xe=[w,...U];return new _s({name:P,description:(Be=w.description)===null||Be===void 0?void 0:Be.value,interfaces:()=>pi(Xe),fields:()=>fi(Xe),astNode:w,extensionASTNodes:U})}case A.ENUM_TYPE_DEFINITION:{var he;const Xe=[w,...U];return new Ni({name:P,description:(he=w.description)===null||he===void 0?void 0:he.value,values:Un(Xe),astNode:w,extensionASTNodes:U})}case A.UNION_TYPE_DEFINITION:{var wn;const Xe=[w,...U];return new bs({name:P,description:(wn=w.description)===null||wn===void 0?void 0:wn.value,types:()=>Jt(Xe),astNode:w,extensionASTNodes:U})}case A.SCALAR_TYPE_DEFINITION:{var ki;return new Nt({name:P,description:(ki=w.description)===null||ki===void 0?void 0:ki.value,specifiedByURL:Zc(w),astNode:w,extensionASTNodes:U})}case A.INPUT_OBJECT_TYPE_DEFINITION:{var Rt;const Xe=[w,...U];return new ws({name:P,description:(Rt=w.description)===null||Rt===void 0?void 0:Rt.value,fields:()=>rt(Xe),astNode:w,extensionASTNodes:U})}}}}const Kc=Fi([...Ps,...Ms],i=>i.name);function ys(i){const n=tp(zf,i);return n==null?void 0:n.reason}function Zc(i){const n=tp(Jf,i);return n==null?void 0:n.url}function Yv(i,n){i!=null&&i.kind===A.DOCUMENT||ce(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&qv(i);const s=Wv({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(s.astNode==null)for(const u of s.types)switch(u.name){case"Query":s.query=u;break;case"Mutation":s.mutation=u;break;case"Subscription":s.subscription=u;break}const o=[...s.directives,...Ri.filter(u=>s.directives.every(l=>l.name!==u.name))];return new np({...s,directives:o})}function Qv(i,n){const t=LD(i,{noLocation:void 0,allowLegacyFragmentVariables:void 0});return Yv(t,{assumeValidSDL:void 0,assumeValid:void 0})}const ef=`
"""
Wallet -> LoyaltyAccount or Empty string
Account -> Benefit
Consumer -> Customer
Campaign -> Offer (??? Campaign seems OK)
Points -> Points
Cashpot -> Rewards
"""
scalar JSON


type Query {
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  Retrieve Customer details by identityValue (PGR ID).
  </p>
  </div>
  """
  customerLoyaltyAccount(identityValue: String!): CustomerResponse @cacheControl(maxAge: 10, scope: PRIVATE)
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  Get filtered list of <s>perks</s>, limited time bonus, quest, cross-shop, and any other personalized offers that will provide points to the points account, or rewards to the cashpot account.
  </p>
  </div>
  """
  listCustomerOffers(identityValue: String!, input: BenefitInput, pagination: PaginationQuery): CustomerOffersResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to retrieve a paginated list of Transactions.
  </p>
  </div>
  """
  customerTransactions(identityValue: String!, input: CustomerTransactionsInput!, pagination: PaginationQuery): CustomerTransactionsResponse @cacheControl(maxAge: 10, scope: PRIVATE)
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This method allows the calling application to retrieve a Campaign by Campaign Id.
  </p>
  </div>
  """
  campaign(input: CampaignInput!): CampaignResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This method allows the calling application to retrieve list of the Campaigns.
  </p>
  </div>
  """
  listCampaigns(input: ListCampaignsInput!, pagination: PaginationQuery): ListCampaignsResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application 
  to retrieve a specific Transaction Details or list of Transaction Details
  </p>
  </div>
  """
  benefitTransactionHistory(identityValue: String!, input: BenefitTransactionHistoryInput!, pagination: PaginationQuery): BenefitTransactionHistoryResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This mutation returns historical info for Rewards
  </p>
  </div>
  """
  customerHistoryRewards(identityValue: String!, input: CustomerHistoryRewardsInput!): CustomerHistoryRewardsResponse
}


type Mutation {
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  Create a loyalty account for an identity along with accompanying rewards and connected segments.
  </p>
  </div>
  """
  createCustomerLoyaltyAccount(customerLoyaltyAccountCreateInput: CustomerLoyaltyAccountCreateInput!): CustomerResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  Allows for the update of the segmentation list attached to a customer.
  </p>
  </div>
  """
  updateCustomerSegmentationList(identityValue: String!, segmentation: [SegmentationListItemInput]!): CustomerSegmentationResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  Allows the status of a customer to be updated (suspend or active only).
  </p>
  </div>
  """
  updateCustomerLoyaltyAccount(identityValue: String!, input: UpdateCustomerLoyaltyAccountInput!): CustomerResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to credit or debit a customer’s points balance.
  </p>
  </div>
  """
  updateCustomerPoints(identityValue: String!, input: UpdateCustomerPointsInput!): UpdateCustomerPointsResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  Allows the calling application to check for available offers and rewards available based on contents of basket sent in the request.
  </p>
  </div>
  """
  validateOrder(identityValue: String!, validateOrderInput: ValidateOrderInput!): ValidateOrderResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows do return safely disregarding if submit order was already processed or not.
  In case return fails due to transaction is not found error, the methode will call submit firstly
  and then re-try return operation.
  </p>
  </div>
  """
  postVoidTransaction(identityValue: String!, postVoidTransactionInput: PostVoidTransactionInput!): PostVoidTransactionResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API endpoint allows the calling application to record a Consumer Transaction, by recording all operations (like reward Redemption,
  Loyalty Points Earn or Stamp received).
  </p>
  </div>
  """
  submitOrder(identityValue: String!, submitOrderInput: SubmitOrderInput!): SubmitOrderResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API endpoint allows the calling application to record a refund (return) transaction. Request attribute   'basket  '
  should contain only a list of returned items (please note each returned item should have the attribute   'salesKey=REFUND  ')
  to update the original transaction.
  Note: In order to perform an exchange 2 transactions needs to be sent (the first one to return, and the second one to purchase a replacement item)
  So, you first need to do an OrderReturn (return original item) and then do an OrderValidate (only contain the new item) and OrderSubmit (only contain the new item).
  </p>
  </div>
  """
  returnOrder(identityValue: String!, returnOrderInput: ReturnOrderInput!): ReturnOrderResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API endpoint allows the calling application to record within AIR a fulfil (Partial Settle) transaction.
  Request attribute   'basket  ' should contain list of items to be fulfilled with attribute   'salesKey  ' as   'FULFIL  '.
  A new wallet transaction will be created and linked to original transaction and the status of
  the original transaction will be updated. If Request attribute   'finalise  ' is set to   'true  ',
  any product level offers not yet fulfilled will be unlocked, qualifying basket level offers will be applied
  and the status of the original transaction will be updated. Any subsequent fulfil requests after this transaction will be errored.
  </p>
  </div>
  """
  fulfilItems(identityValue: String!, fulfilItemsInput: FulfilItemsInput!): FulfilItemsResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API endpoint initiate fulfil operation
  </p>
  </div>
  """
  initiateFulfil(identityValue: String!, initiateFulfilInput: InitiateFulfilInput!): InitiateFulfilResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API endpoint finalize fulfil operation and letting system the order is done
  </p>
  </div>
  """
  finalizeFulfil(identityValue: String!, finalizeFulfilInput: FinalizeFulfilInput!): FinalizeFulfilResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to cancel a Fulfil Transaction, identified by a Transaction Id.
  (if no items have been fulfilled yet)
  </p>
  </div>
  """
  cancelFulfilOrder(identityValue: String!, cancelFulfilOrderInput: CancelFulfilOrderInput!): CancelFulfilOrderResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to add an offer to a customer's account. (Used for sku level redemption coupons)
  </p>
  </div>
  """
  giveTargetedOfferToCustomer(identityValue: String!, giveTargetedOfferToCustomerInput: GiveTargetedOfferToCustomerInput!): GiveTargetedOfferToCustomerResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to cancel a specified offer. 
  Currently available for ECOUPON, CONTINUITY. 
  </p>
  </div>
  """
  cancelTargetedOffer(identityValue: String!, cancelTargetedOfferInput: CancelTargetedOfferInput!): CancelTargetedOfferResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  Set new state for customer offer usually from unloaded to loaded when customer wishes to unlock an offer.
  </p>
  </div>
  """
  setOfferState(identityValue: String!, setOfferStateInput: SetOfferStateInput!): SetOfferStateResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to create new Identity for a specific Loyalty account.
  </p>
  </div>
  """
  addIdentity(identityValue: String!, addIdentityInput: AddIdentityInput!): AddIdentityResponse
  """
  <div>
  <img src="https://cdn-icons-png.flaticon.com/512/6928/6928921.png" alt="verified" width="32" style="vertical-align:middle"/>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png" alt="developed" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to delete existing Identity from a specific Loyalty account by internal identity ID.
  </p>
  </div>
  """
  removeIdentity(identityValue: String!): RemoveIdentityResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to add redemption reward coupons to Customer’s account. (Used for transaction level redemption coupons)
  </p>
  </div>
  """
  addCustomerRewards(identityValue: String!, creditInput: CustomerRewardsInput!): CustomerRewardsResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to cancel a specified reward
  </p>
  </div>
  """
  cancelCustomerRewards(identityValue: String!, cancelInput: CancelCustomerRewardsInput!): CancelCustomerRewardsResponse
}


input CustomerTransactionsInput {
  "filter by transaction dates"
  startDate: String
  endDate: String
  """Optional Query parameter for result filtering by Transaction State(s)"""
  state: TransactionState
  """
  Optional Query parameter for result filtering by Transaction Status(es)
  """
  status: TransactionStatus
  """
  Query string for Result Filtering by a single store ID (outlet incoming identifier).
   This  cannot be used in combination with any other query parameters except for status.
  """
  storeId: String
  """Optional Query parameter for result filtering by Transaction Type(s)"""
  type: TransactionType
  """Optional Query parameter for result filtering by Transaction ID(s)"""
  transactionId: String
}


input GiveTargetedOfferToCustomerInput {
  "Campaign ID to load"
  campaignId: String!
  "State to set"
  rewardState: BenefitState!
}


input CustomerRewardsInput {
  "Campaign ID to load"
  campaignId: String!
  "Number rewards to issue base on the campaign"
  rewardAmount: Int
  "State to set"
  rewardState: BenefitState!
  "Expiry date for rewards (default based on tier settings)"
  expiryDate: String
}


input CancelTargetedOfferInput {
  benefitId: String
}


input CancelCustomerRewardsInput {
  benefitId: [String]
}


"Depricated (out of scope)"
input AddPerkPunchInput {
  benefitId: String
  """Stamp Amount"""
  amount: Int
  store: StoreInput
  """Optional Token' PIN"""
  pin: String
  """Token identifying an EES AIR Account"""
  token: String
  """
  Key-Value object, 
  please note key name length should be less then 255 characters 
  and key values should be less then 255 characters
  """
  details: JSON
}


input AddIdentityInput {
  """Identity friendly name"""
  friendlyName: String!
  """Addition info like 'moved from/primary/...'"""
  meta: JSON
  """Type of the Identity"""
  type: String!
  """Identity value """
  value: String!
}


input CreditInput {
  """The points amount to be credited."""
  amount: Int!
  "Reason for Credit"
  detailedReason: String
  """Unique transaction reference"""
  transactionId: String
}


input CancelCreditInput {
  "The reason for cancel credit"
  reason: String
  "Internal transaction ID to cancel"
  transactionId: String!
  "Benefit ID to void"
  benefitTransactionId: String!
}


input SetOfferStateInput {
  "TRUE equals LOADED state and FALSE equals UNLOADED state"
  setLoadedState: Boolean!
  "Offer ID to update"
  benefitId: String!
}


input TriggerBehaviouralBenefitInput {
  """Calling party's reference to this transaction"""
  transactionId: String!
  """An array of references for the Behavioural Action to be executed"""
  triggers: [String]
}


input DetailsEntityInput {
  """
  Details 1 property, up to 255 characters; up to 255 characters for Key 1 Value
  """
  key1: String
}


"Contains all items in the basket that are being returned"
input ReturnOrderInput {
  "Used for return items only"
  basket: StandardBasketInput!
  "Place where return was processed"
  store: StoreInput!
  "Reference to original transaction"
  originalTransactionID: String!
  """Refund Transaction Id generated by calling system"""
  transactionId: String!
}


input FulfilItemsInput {
  "Used for fulfill items only"
  basket: StandardBasketInput!
  "Place where fulfill happend"
  store: StoreInput!
  "Reference to original transaction"
  originalTransactionID: String!
  """Fullfill Transaction Id generated by calling system"""
  transactionId: String!
}


input InitiateFulfilInput {
  "Store where initialize was triggered"
  store: StoreInput!
  "Reference to original open transaction"
  originalTransactionID: String!
  """Initiate Fullfil Transaction Id generated by calling system"""
  transactionId: String!
}


input FinalizeFulfilInput {
  "Store for which the finalize was triggered"
  store: StoreInput!
  "Reference to original open transaction"
  originalTransactionID: String!
  """Finalize Fullfil Transaction Id generated by calling system"""
  transactionId: String!
  """Transaction reference of redeemRewardsForOrder"""
  redeemReference: String
  """Use to return used Rewards for not fully fulfiled order"""
  returnValue: Int
}


input CancelFulfilOrderInput {
  """Original Fullfil Transaction Id """
  transactionId: String!
}


input OriginalTransactionInput {
  """Order Submit Transaction ID"""
  transactionId: String!
}


input SubmitOrderInput {
  "Coming from validateOrder response"
  basket: JSON!
  "Location where order was placed"
  store: StoreInput!
  meta: JSON
  """Transaction Id generated by calling system"""
  transactionId: String!
  """
  This optional Request attribute allows the calling application to instruct Loyalty application
  to complete the stated operation against a previously created spend points transaction
  """
  redeemReference: String
}


input PostVoidTransactionInput {
  "Coming from validateOrder response"
  basketEnriched: JSON!
  "Used for return items only"
  basketStandard: StandardBasketInput!
  "Location where transaction happened"
  store: StoreInput!
  meta: JSON
  """Transaction Id generated by calling system"""
  transactionId: String!
  """Reference to original transaction (for return only)"""
  originalTransactionID: String!
  """
  This optional Request attribute allows the calling application to instruct Loyalty application
  to complete the stated operation against a previously created spend points transaction
  """
  redeemReference: String
}


input StoreInput {
  """Store Identifier where transaction is taking place"""
  id: String!
  """Specifying store type as either retail or online"""
  type: StoreType
}


input RedeemRewardsForOrderInput {
  """
  A unique transaction reference created by the source and stored in the created wallet transaction
  """
  reference: String
  "The response VerifyAvailableRewardsAsJson from VerifyAvailableRewards mutation"
  verifyAvailableRewardsResult: JSON
}


input VerifyAvailableRewardsInput {
  """The number of points for which to calculate the financial value."""
  pointsValue: Int!
}


"""
The details of the points scheme to find accounts in the target wallet. Either   'id  ' or   'reference  ' must be passed and not empty
"""
input SchemeInput {
  "The scheme reference to use to lookup a points account in the wallet associated to the identity passed"
  reference: String
}


input UpdateCustomerPointsInput {
  """
  Specifies the amount of points or rewards to give to the Customer (value can be negative)
  """
  pointsValue: Int!
  """Designates the start date of the transaction"""
  transactionDate: String
  """The description of the transaction"""
  transactionDescription: String
  """Reference to the transaction"""
  transactionID: String
  """Reviewer who approved the action (255 chars max)"""
  reviewer: String
}


input BenefitInput {
  campaignStatus: CampaignsStatus
  "Query for specific state"
  state: BenefitState
  "Query for specific status"
  status: BenefitStatus
  """Query list for Result filtering by Type(s)"""
  type: [BenefitType]
  """
  Query string for Result Filtering by Valid From explicit date-time value
  """
  validFrom: String
  """Query string for Result Filtering by Valid To explicit date-time value"""
  validTo: String
  """Filter Offers by qulified SKUs """
  sku: [String]
}


input CustomerPointsOrRewardsInput {
  "Filter by type"
  type: PointsType!
}


input CustomerLoyaltyAccountCreateInput {
  """List of identities (e.g: PGR_ID and LOYALTY_ID (a.k.a vc_id))"""
  identities: [IdentityInput!]!
  """Segmentation information"""
  segmentation: [SegmentationListItemInput]
  """This could be used to add campaigns during customer creation"""
  benefits: BenefitsInput
}


input MergeCustomersInput {
  """Identity of the Customer account which will be disabled"""
  victimIdenity: IdentityInput!
}


input IdentityInput {
  """PGR_ID or LOYALTY_ID"""
  type: String!
  """
  Value of the identity (value of PGR_ID or LOYALTY_ID)
  LoyaltyID should be numeric and 14 digits long
  """
  value: String!
}


input SegmentationListItemInput {
  """Customer defined name / category for the segment."""
  name: String!
  """It contains segment objects in the array."""
  segments: [SegmentsListItemInput]!
}


input SegmentsListItemInput {
  """
  A place to store arbitrary domain-specific data against the segmentation object.
  """
  data: JSON
  """
  List of segment labels that the entity belongs to for the given segmentation entry. The list can be used to denote hierarchy, lowest indexed items are higher in hierarchy terms. At least one item is required.
  """
  labels: [String]!
}


input UpdateCustomerLoyaltyAccountInput {
  "Sent new customer status (valid only ACTIVE or SUSPENDED)"
  status: CustomerLoyaltyAccountStatus
}


input StandardBasketInput {
  "Total items, total discount, and total value of basket"
  summary: BasketSummaryInput
  "All SKUs, promotional discounts, unit cost and cost after discount from the basket"
  contents: [StandardBasketContentsInput!]!
}


input BenefitsInput {
  campaignsById: [CampaignAdditionByIdInput]
  campaignsByTag: [CampaignAdditionByTagInput]
  schemes: [SchemeType]
}


input CampaignAdditionByIdInput {
  """Campaign ID"""
  campaignId: String
  """Benefits state. LOADED/UNLOADED"""
  state: BenefitState
}


input CampaignAdditionByTagInput {
  """Campaign Tag"""
  campaignTag: String
  """Benefits state. LOADED/UNLOADED"""
  state: BenefitState
}


input ValidateOrderInput {
  """Transaction Id generated by calling system"""
  transactionId: String!
  """Store Location information from where this call originates"""
  store: StoreInput
  """
  This optional flag should be set to true, for orders (like online), which needs to be shipped and fulfilled.
  For other orders (like pos) this flag can be false or can be chosen not to be passed.
  """
  isFulfilmentOrder: Boolean
  """
  Contains all items in the basket, a summary of the total items and total basket value
  """
  basket: StandardBasketInput!
}


input ProcessTransactionInput {
  """
  Transaction Id generated by calling system
  (used only for SALE items)
  """
  transactionId: String!
  """Store Location information from where this call originates"""
  store: StoreInput
  """
  This optional flag should be set to true, for orders (like online), which needs to be shipped and fulfilled.
  For other orders (like pos) this flag can be false or can be chosen not to be passed.
  """
  isFulfilmentOrder: Boolean
  """
  Contains all items in the basket, a summary of the total items and total basket value
  """
  basket: StandardBasketInput!
}


input StandardBasketContentsInput {
  """Sku of the product in the basket"""
  sku: String
  """
  Set the line number in the basket.
  This field will be saved in the meta object.
  """
  lineNumber: Int
  """SALE/REFUND/FULFIL Flag"""
  salesKey: SalesKey!
  """Product Name"""
  description: String!
  """
  Item Price per unit, denominated to a smaller currency unit ($5.00 sent in as 500)
  """
  itemUnitCost: Int!
  """The metric in which the item is measured (ie. pounds, ounces, each)"""
  itemUnitMetric: ItemUnitMetric
  """Item Quantity"""
  itemUnitCount: Int!
  """Discount per item"""
  itemUnitDiscount: Int
  """Total cost for this item"""
  totalUnitCost: Int!
  """Total cost for this item after discount"""
  totalUnitCostAfterDiscount: Int!
  """Tax Rate Percentage"""
  taxRate: Float
  """
  Tax Amount for this item, denominated to a smallest currency unit (ie. cents)
  """
  taxAmount: Int
  """
  Client generated new transaction reference in case the returning/fulfilling item
  """
  transactionID: String
  """Original transaction reference in case the returning/fulfilling item"""
  originalTransactionID: String
  """Redemption Amount used per Reward at line number"""
  proration: Proration
}


input Proration {
  rewards: [RewardIdAndAmount]
}


input RewardIdAndAmount {
  """Unique Id for Reward"""
  uid: Int!
  """Prorated amount in cents"""
  amount: Int!
}


input QualifiesInput {
  """
  Determines if the item is eligible for basket level discounting. If false this item will not
  qualify for basket level discounts but still qualify for product level discounts.
  """
  discount: Boolean!
  """
  Determines if the item is eligible for Base Earn points. If false this item will not qualify for
  Base Earn points but still qualify for basket and product level discounts.
  """
  points: Boolean!
}


input BasketSummaryInput {
  "Sum of discounts for all items"
  totalDiscountAmount: TotalDiscountAmountInput
  """Total number of items in the basket"""
  totalItems: Int!
  """
  Total Basket monetary value after discounts, denominated to a
  smallest currency unit (e.g. for USD this value should be provided in cents)
  """
  totalBasketValue: Int!
  """
  Total Tax Amount denominated to a smallest currency unit (e.g. for USD this value should be provided in cents)
  """
  totalTaxAmount: Int
}


input TotalQualifyingAmountInput {
  """Basket Monetary Value for Loyalty Points calculations"""
  points: Int
  """
  Basket Monetary Value used for calculating base earn, overriding totalBasketValue. Adheres to basket discounts
  """
  baseEarn: Int!
  """Basket Monetary Value for Promotion Offer selections"""
  promotions: Int
  """Basket Monetary Value for Discount calculations"""
  discount: Int
  """Basket Monetary Value for Staff Discount or Promotions"""
  staff: Int
}


input TotalDiscountAmountInput {
  """
  Promotions Discount Amount. If basket adjustment adds to discounts, this amount will be added to discounts
  """
  promotions: Int
}


input BasketOptionsInput {
  adjustBasket: AdjustBasketInput
  analyseBasket: AnalyzeBaskedInput
  basketAdjudication: BasketAdjudicationInput
  adjudicatePointsSpend: AdjudicatePointsSpendInput
}


input AdjustBasketInput {
  """Whether to carry out Adjust basket"""
  enabled: Boolean!
  includeOpenOffers: Boolean = false
}


input AnalyzeBaskedInput {
  """Whether to carry out basket analysis"""
  enabled: Boolean!
  includeOpenOffers: Boolean = false
}


input BasketAdjudicationInput {
  """
  Optional flag to instruct AIR on which side the Basket
  Adjudication should happen. Default value is   'CLIENT  '
  and for that scenario Basket Adjudications should be
  performed on Client side using data returned by AIR and
  possibly additional data available to a POS. For
    'SERVER  ' mode AIR will perform full Basket Analyse,
  for   'CUSTOM' the calling application could provide
  additional filtering criteria for which account types
  AIR should perform Basket Analyse
  Currently CUSTOM option is TBC (to be confirmed). Please do NOT use
  """
  mode: AdjudicationMode = CLIENT
}


input AdjudicatePointsSpendInput {
  """
  Determine if points spend adjudication should be completed in the open call
  """
  enabled: Boolean!
  """
  Determine if open Spend Rate Modifier coupons should be included in the analysis
  """
  includeOpenOffers: Boolean = false
}


input VoidRedemptionForOrderInput {
  """The reference of the Redeem transaction to be voided."""
  redeemTransactionId: String
}


input BalancesInput {
  """
  The value to credit or spend in the intended operation. This value is the number of points to be spent.
  """
  current: Int
  """
  The value to add to the lifetime spend balance of the points account. Required if the operationType is 'spend'. This value is the number of points to be spent.
  """
  lifetimeSpend: Int
  """
  The value to add to the lifetime spend value balance field of the points account. Required if the operationType is 'spend'. This value is the monetary value of the points to be spent.
  """
  lifetimeSpendValue: Int
}


input BenefitOverridesEntityInput {
  "Overrides affecting the offer  "
  campaign: CampaignExtInput
  "Overrides affecting the offer  "
  continuity: ContinuityInput
  "Overrides affecting the offer  "
  offer: OfferInput
  "Overrides affecting the reward  "
  reward: OverridesRewardInput
}


"Overrides affecting the offer  "
input CampaignInput {
  "Campaign ID to search"
  campaignId: String!
}


"Overrides affecting the offer  "
input CampaignExtInput {
  "The campaigns rules (used in calls to override)"
  rules: RulesInput
  "Campaign ID to search"
  campaignId: String!
}


input BenefitTransactionHistoryInput {
  """Internal Transaction ID to filter"""
  benefitTransactionId: String
  """Filter by detailed transaction types"""
  type: DetailType
}


input ListCampaignsInput {
  "Retrun only specified campaign"
  campaignId: String
  """The type of Campaign this is."""
  campaignType: String
  """When the campaign ends."""
  endDate: String
  """When the campaign starts."""
  startDate: String
  """This is a status of the Campaign."""
  status: CampaignStatus
  """This is a tag assigned to a Campaign."""
  tag: String
}


input CustomerPendingPointsRewardsInput {
  "Filter by dates range"
  dates: DatesEntity
  "Filter by Points or Rewars"
  type: PointsType
}


input CustomerHistoryPointsInput {
  "Filter by dates range"
  dates: DatesEntity
}


input CustomerHistoryRewardsInput {
  "Filter by dates range"
  dates: DatesEntity
}


"The campaigns rules  "
input RulesInput {
  "The amount of times a coupon can be redeemed, 0 is unlimited, 1 is default. If this is not set it will revert to what the campaigns couponLimit is set to  "
  couponLimit: Int
}


"Overrides affecting the offer  "
input ContinuityInput {
  "Continuity qualification area of the offer  "
  qualification: QualificationInput
}


"Continuity qualification area of the offer  "
input QualificationInput {
  """The number of transactions needed to qualify for the reward"""
  totalTransactionCount: Int
  """The transaction spend amount needed to qualify for the reward"""
  totalTransactionSpend: Int
  """
  The number of units that are needed in the transaction to qualify for the reward.
  """
  totalTransactionUnits: Int
}


"Overrides affecting the offer  "
input OfferInput {
  "Reward area of the offer  "
  reward: RewardInput
}


"Reward area of the offer  "
input RewardInput {
  "The amount of points this account should earn when redeemed  "
  creditAmount: Int
}


"Overrides affecting the reward  "
input OverridesRewardInput {
  "The discount amount to apply to the basket total.  "
  discountAmount: Int
  "The discount value to increase with every interval.  "
  discountValue: Int
  "The final amount to set the basket total to.  "
  finalAmount: Int
  "A percentage amount to be discounted. This must be an integer unless   'allowDecimal  ' is enabled in the Unit.  "
  percentageAmount: Float
}


type ValidateOrderResponse {
  """identity info of the customer"""
  identity: IdentityInfo
  """Returns customer’s points, rewards and targeted offers"""
  benefits: [BenefitListItem]!
  "Provides available offers and rewards based on basket content"
  analysedBasketResults: AnalysedBasketResults
}


type GiveTargetedOfferToCustomerResponse {
  """Offer state, managed per retailer base"""
  state: String!
  """Benefit Status"""
  status: BenefitStatus!
  """Benefit Type"""
  type: BenefitType!
  """Benefit ID"""
  benefitId: String!
}


type MergeCustomersResponse {
  "Survival account identity"
  identity: String!
}


type CustomerRewardsResponse {
  """List of Reward IDs given"""
  benefitId: [String!]
}


type CancelCustomerRewardsResponse {
  """List of Reward IDs cancelled"""
  benefitId: [String!]
}


type CancelTargetedOfferResponse {
  """Offer state, managed per retailer base"""
  state: String!
  """Benefit Status"""
  status: BenefitStatus!
  """Benefit Type"""
  type: BenefitType!
  """Benefit ID"""
  benefitId: String!
}


"Depricated (out of scope)"
type AddPerkPunchResponse {
  """Transaction(s) created as a result of this add perk puch"""
  transactions: [TransactionEntity]!
  message: JSON
}


type AddIdentityResponse {
  """Internal Identity ID"""
  identityId: String
}


type RemoveIdentityResponse {
  status: String
}


type CreditResponse {
  "Details of transaction created on customer loyalty account"
  transaction: TransactionEntity!
}


type CancelCreditResponse {
  "Details of the canceled credit"
  details: BenefitTransaction!
}


type SetOfferStateResponse {
  "Details of the benefit"
  benefit: BenefitListItem
}


type TriggerBehaviouralBenefitResponse {
  "Details of transaction created on customer loyalty account"
  transaction: TransactionEntity!
}


type SubmitOrderResponse {
  """Transaction(s) created as a result of this transaction"""
  transactions: [TransactionEntity]!
}


type ProcessTransactionResponse {
  """Returns customer’s points, rewards and targeted offers"""
  benefits: [BenefitListItem]
  "Provides available offers and rewards based on basket content"
  analysedBasketResults: AnalysedBasketResults
  """Return/Refund transaction details"""
  transactions: [TransactionEntity]
}


type ReturnOrderResponse {
  """Return transaction details"""
  transactions: [TransactionEntity]!
}


type PostVoidTransactionResponse {
  """Transaction details"""
  transactions: [TransactionEntity]!
}


type ListCampaignsResponse {
  "List of the campaigns"
  campaigns: [CampaignEntity]
  "Current page information"
  pagination: PaginationInfo
}


type FulfilItemsResponse {
  """Fulfill transaction details"""
  transactions: [TransactionEntity]!
}


type InitiateFulfilResponse {
  success: Boolean!
}


type FinalizeFulfilResponse {
  """Finalize Fulfill transaction details"""
  transactions: [TransactionEntity]!
}


type CancelFulfilOrderResponse {
  """Canceled Fulfill transaction details"""
  transaction: TransactionEntity
}


type UpdateCustomerPointsResponse {
  "Description of the created transaction"
  transactions: TransactionEntity!
}


type RedeemRewardsForOrderResponse {
  """Transaction(s) created as a result of this spend transaction"""
  transactions: [TransactionEntity]!
}


type VoidRedemptionForOrderResponse {
  """Transaction(s) created as a result of this void transaction"""
  transactions: [TransactionEntity]!
}


type VerifyAvailableRewardsResponse {
  verifyAvailableRewardsResultAsJson: JSON
  "Both Points and Rewards Account Information will be sent, but only the cents from the Rewards benefit type can be used for redemption."
  verifyAvailableRewardsResult: VerifyAvailableRewardsResult
}


type CustomerOffersResponse {
  "Current page information"
  pagination: PaginationInfo
  """List of the offers"""
  results: [BenefitListItem]
}


"Campaign details"
type CampaignResponse {
  campaign: CampaignEntity!
}


type BenefitTransactionHistoryResponse {
  details: [BenefitTransaction]
  "Current page information"
  pagination: PaginationInfo
}


type CustomerPendingPointsRewardsResponse {
  pendingItems: [PendingPointsRewardsItem]
}


type CustomerHistoryPointsResponse {
  historyItems: [HistoryPointsItem]
}


type CustomerHistoryRewardsResponse {
  historyItems: [RewardInfo]
}


type CustomerPointsOrRewardsResponse {
  "Current page information"
  pagination: PaginationInfo
  """
  Points/rewards balances with expiration dates and full Balance information
  """
  results: Balances
}


type CustomerSegmentationResponse {
  "Updated customer segmentations"
  segmentation: [SegmentationListItem]
}


type CustomerPointsOrRewardsAvailableResponse {
  "Total currently available points/rewards amount"
  totalPointsAvailable: Int!
}


type CustomerResponse {
  customer: Customer!
}


type CustomerTransactionsResponse {
  pagination: PaginationInfo
  """Array of transactions"""
  results: [TransactionEntity]
}


type TransactionEntity {
  basket: TransactionBasketEntity
  """Date this Wallet Transaction was created"""
  dateCreated: String!
  """Date this Wallet Transaction was last updated"""
  lastUpdated: String!
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON
  """Parent Wallet Transaction ID"""
  parentTransactionId: String
  """Calling party's reference to this transaction"""
  transactionId: String!
  """Transaction state (ORIGINAL or MODIFIED)"""
  state: String!
  """Transaction status"""
  status: TransactionStatus!
  """Transaction date-time in ATOM format"""
  transactionDateTime: String!
  """Transaction Type, defined per retailer"""
  type: TransactionType!
  "Transaction details"
  details: [TransactionDetail]
}


type TransactionDetail {
  transactionDetailId: String!
  "Date when transaction happened"
  date: String!
  "Event type"
  type: String!
  "Transaction value"
  value: Int
  "Balance after transaction"
  balanceAfter: Int
  "Transaction description"
  description: String
  """Which account is this transaction going to, Points or Rewards account."""
  pointsType: PointsType
}


type PendingPointsRewardsItem {
  created: String!
  transactionId: String!
  value: Int!
  campaignId: String
  campaignName: String
  type: PointsType!
  schemeId: String
  schemeName: String
}


type HistoryPointsItem {
  created: String!
  transactionId: String!
  parentTransactionId: String
  value: Int!
  expiry: String
  campaignId: String
  campaignName: String
  description: String!
  eventType: EventType!
}


type BenefitTransaction {
  """Benefit transaction Id"""
  benefitTransactionId: String!
  """Parent Benefit transaction Id"""
  parentBenefitTransactionId: String!
  """Benefit Id"""
  benefitId: String
  """
  The object of balances to show for either before or after the account transaction. 
  Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balancesAfter: BalancesEntity
  """
  The object of balances to show for either before or after the account transaction. 
  Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balancesBefore: BalancesEntity
  """
  List of Child Transactions - for operation on multiple and linked account this property will be populated.
  """
  children: [BenefitTransaction]
  """Date this account transaction was created"""
  dateCreated: String
  """The type of transaction."""
  event: Event
  """Date this account transaction was last updated"""
  lastUpdated: String
  """Properties related to the account transaction."""
  properties: JSON
  benefit: BenefitListItem
  """The source of this transaction e.g. from a client, or automated."""
  source: String
  """
  An simple object of key value pairs representing the transaction details. 
  For Points and Continuity, this can contain a JSON encoded object with the details of the amounts applied to each balance.
  """
  transactionDetails: JSON
  """
  The value related to this account transaction. 
  Typically, if an account transaction like credit was executed with a value, 
  then this value will be stored here. For Continuity, however, this value should always be 0, 
  and the same for Coupon (since there is no value for a coupon).
  """
  value: Int
}


"""Object representing an account transaction."""
type ChildTransactionDetails {
  """The account object."""
  account: AccountEntity
  """The account id related to this transaction."""
  accountId: String
  """The account transaction id."""
  accountTransactionId: String
  """
  The object of balances to show for either before or after the account transaction. 
  Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balancesAfter: BalancesEntity
  """
  The object of balances to show for either before or after the account transaction. 
  Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balancesBefore: BalancesEntity
  """
  List of Child Transactions - for operation on multiple and linked account this property will be populated.
  """
  children: [BenefitTransaction]
  """Date this account transaction was created"""
  dateCreated: String
  """The type of transaction."""
  event: Event
  """Date this account transaction was last updated"""
  lastUpdated: String
  """The parent account transaction."""
  parentAccountTransactionId: String
  """Properties related to the account transaction."""
  properties: JSON
  """
  List of Reward Account Transactions or Accounts - for operation on multiple and linked account this property will be populated.
  """
  rewardAccounts: [AccountEntity]
  """The source of this transaction e.g. from a client, or automated."""
  source: String
  """
  An simple object of key value pairs representing the transaction details. For Points and Continuity, this can contain a JSON encoded object with the details of the amounts applied to each balance.
  """
  transactionDetails: JSON
  """
  The value related to this account transaction. Typically, if an account transaction like credit was executed with a value, then this value will be stored here. For Continuity, however, this value should always be 0, and the same for Coupon (since there is no value for a coupon).
  """
  value: Int
}


type AccountEntity {
  """Account ID"""
  accountId: String!
  """
  The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balances: BalancesEntity!
  """The Campaign ID this account belongs to."""
  campaignId: String!
  """Account client type."""
  clientType: String!
  """Date this Account was created"""
  dateCreated: String!
  dates: DatesEntity!
  """Date this Account was last updated"""
  lastUpdated: String!
  meta: MetaEntity!
  """The URL that returns a digital platform wallet."""
  mobileWallet: String!
  """Accounts Relations"""
  relationships: Relationships
  """
  Account state, managed per retailer base, list of possible enum values could be set-up as part of the Onboarding process.
  """
  state: String!
  """Account Status"""
  status: CampaignStatus!
  """EES AIR Account Type."""
  type: BenefitType!
  """EES AIR Wallet ID"""
  walletId: String!
}


type PointsBasketEntity {
  summary: PointsBasketSummary
}


type PointsBasketSummary {
  pointsCredited: Int
  pointsRedeemed: Int
  pointsRefunded: Int
}


type StandardBasketEntity {
  contents: [StandardBasketContentsCollectionEntityListItem]
  payment: [StandardPaymentEntityListItem]
  summary: BasketSummary
  type: BasketType
}


type StandardBasketContentsCollectionEntityListItem {
  adjustmentRules: AdjustmentRulesEntity
  """Product Name"""
  description: String
  """Item Price per unit, denominated to a smaller currency unit"""
  itemUnitCost: Int
  """Item Quantity"""
  itemUnitCount: Float
  """Discount per Item"""
  itemUnitDiscount: Int
  """The metric in which the item is measure (nullable)"""
  itemUnitMetric: ItemUnitMetric
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON
  qualifies: Qualifies
  """
  Recursive list of contents related to the parent item with the same scheme as this object.
  """
  relatedContents: [RelatedContentsListItem]
  """'SALE  '/  'REFUND  '/  'FULFIL  ' Flag"""
  salesKey: SalesKey
  """Item SKU"""
  sku: String
  """Tax Amount for that item, denominated to a smallest currency unit"""
  taxAmount: Int
  """Tax Rate (Percentage)"""
  taxRate: Float
  """Total cost for this item"""
  totalUnitCost: Int
  """
  Total cost for this item after discount (please note this does not take into account whole basket discounts)
  """
  totalUnitCostAfterDiscount: Int
  """Item SKU"""
  upc: String
}


type RelatedContentsListItem {
  adjustmentRules: AdjustmentRulesEntity
  """Product Name"""
  description: String
  """Item Price per unit, denominated to a smaller currency unit"""
  itemUnitCost: Int
  """Item Quantity"""
  itemUnitCount: Float
  """Discount per Item"""
  itemUnitDiscount: Int
  """The metric in which the item is measure (nullable)"""
  itemUnitMetric: ItemUnitMetric
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON
  qualifies: Qualifies
  """
  Recursive list of contents related to the parent item with the same scheme as this object.
  """
  relatedContents: JSON
  """'SALE  '/  'REFUND  '/  'FULFIL  ' Flag"""
  salesKey: SalesKey
  """Item SKU"""
  sku: String
  """Tax Amount for that item, denominated to a smallest currency unit"""
  taxAmount: Int
  """Tax Rate (Percentage)"""
  taxRate: Float
  """Total cost for this item"""
  totalUnitCost: Int
  """
  Total cost for this item after discount (please note this does not take into account whole basket discounts)
  """
  totalUnitCostAfterDiscount: Int
  """Item SKU"""
  upc: String
}


type StandardPaymentEntityListItem {
  """Monetary amount of payment in lowest unit of currency"""
  amount: Int!
  """The bin for the tender"""
  bin: String
  """
  An identifying value of what was scanned, could be a token, barcode, gift-card
  """
  identifier: String
  """Tender type - predefined by Eagle Eye"""
  tenderType: String!
}


"""
Provides decisions on what customer can redeem from his cashpot rewards account.
This element should be preserved as is, and sent in its entirety in the Order redeem rewards call.
"""
type VerifyAvailableRewardsResult {
  """SpendAdjudicationResults Date-Time in ATOM format"""
  analysedDateTime: String
  "The Floor, Ceiling, Rate and Step Rules for the redemption"
  appliedTier: SpendTierEntity
  "The balance after spending"
  balanceAfter: SpendBalancesAfterEntity
  """
  The number of points or cents that cannot be spent due to the step rules.
  """
  pointsRemainder: Int
  """
  The number of points or cents that are allowed to be spent based on the number passed in.
  """
  pointsValue: Int
  "Contains information needed in Redeem rewards call"
  operations: [SpendOperationsEntity]
}


type SpendTierEntity {
  """Spend Tier upper limit"""
  ceiling: Int
  """Minimum number of points that must be used in order to redeem"""
  floor: Int
  """
  Spend Tier Exchange Rate (for example if   'rate=0.1  ' would indicate each point is worth 1/10 of smallest currency denomination, i.e. 1/10 of a penny or a cent)
  """
  rate: Float
  """
  Spend Tier increments that points can be spent in (e.g. if points can be exchanged at 5,000, 10,000, 15,000 and so on, the   'step  ' should be equal 5,000)
  """
  step: Int
}


"The object of balanceAfter.  "
type SpendBalancesAfterEntity {
  "The current balance.  "
  current: Int
  """The lifetime points earned."""
  lifetime: Int
  """
  The total amount that has been redeemed over the lifetime of this account
  """
  lifetimeSpend: Int
  """
  The monetary value of the points that have been redeemed over the lifetime of this account.
  """
  lifetimeSpendValue: Int
  "The usable balance."
  usable: Int
  "The pending balance."
  pending: Int
}


type SpendOperationsEntity {
  """The cashpot against which the determined operation is to be performed."""
  benefitId: String
  """
  The balances of the account to be adjusted. If the operation type is   'spend  ', the   'current  ',   'lifetime_spend  ', and   'lifetime_spend_value  ' are all required. If the operation is   'credit  ', the current value is  required, if the operation type is   'redeem  ' this key is not required.
  """
  balances: Balances
  """The type of operation to apply."""
  operationType: OperationType
  """The ID of the campaign or scheme related to this operation."""
  resourceId: String
  """The determination if this is a scheme or campaign based operation."""
  resourceType: ResourceType
  """The value of the operation to apply."""
  value: Int
}


type Scheme {
  schemeId: String!
  status: SchemeStatus
  state: SchemeState!
}


type CampaignEntity {
  """
  The Id of a Campaign automatically generated and unique within Eagle Eye AIR.
  """
  id: String
  """
  The type of Campaign this is. These types are configured as part of implementation with a client.
  """
  type: String
  """The status of the Campaign."""
  status: CampaignStatus
  """The class of this Campaign."""
  class: Class
  details: CampaignDetails
  "TODO if we need it (always empty)"
  settings: Settings
  """
  The issuance/redemption/creation partners for this Campaign. (online/retail)
  TODO No needs if both all time
  """
  partners: Partners
  rules: Rules
  """
  The date time windows that an Account can be created/issued/redeemed.
  TODO I see only empty results
  """
  windows: Windows
  """The exceptions to the Campaign usage windows."""
  dates: DatesEntity
  """The relationships between this Campaign and any others."""
  relationships: Relationships
  """An external reference for this Campaign, unique to each client."""
  reference: String
  offer: Offer
  """
  This timestamp shows the date-time in UTC when the Campaign was created. This cannot be edited.
  """
  dateCreated: String
  """
  The timestamp shows the date-time in UTC that the Campaign was last updated. This cannot be edited.
  """
  lastUpdated: String
  """The Campaigns that this is compatible with."""
  compatibility: Compatibility
  custom: JSON
  """The distribution channels for this Campaign."""
  distributionChannels: JSON
  """The Campaigns that this is incompatible with."""
  incompatibility: Incompatibility
  """An array of objects containing supplier funding information."""
  suppliers: [SuppliersListItem]
}


"""The date time windows that an Account can be created/issued/redeemed."""
type Windows {
  """The time frame(s) that an Account can be created."""
  creation: [DatesEntity]
  """The time windows that an Account can be redeemed."""
  redemption: [DatesEntity]
}


type SuppliersListItem {
  """The funding Account Id that the funds should be debited from."""
  fundingAccountId: String
  """
  The percentage of the reward that should be funded by this supplier. This value should be 100 where there is only 1 supplier.
  """
  fundingPercentage: Int
  """The suppliers reference to this Campaign."""
  supplierCampaignReference: String
  """
  The unit identifier of the supplier that is involved with the Campaign.
  """
  supplierUnitId: String
}


"""The issuance/redemption/creation partners for this Campaign."""
type Partners {
  """An array of objects, one for each creation partner defined."""
  creation: [String]
  """An array of objects, one for each issuance partner defined."""
  issuance: [IssuanceListItem]
  """An array of objects, one for each redemption partner defined."""
  redemption: [RedemptionListItem]
}


type RedemptionListItem {
  """The id of the redemption partner unit."""
  partner: String
  """
  The maximum number of Accounts that can be redeemed by this partner, Null or empty denotes this partner can redeem an unlimited number of Accounts.
  """
  redemptionLimit: Int
}


type IssuanceListItem {
  """
  The maximum number of Accounts that can be created by this partner. Null or empty denotes this partner can create unlimited Accounts against this Campaign.
  """
  issuanceLimit: Int
  """The unit id of the issuance partner."""
  partner: String
}


type Settings {
  """
  The default client type for an Account unless otherwise stated during individual Account creation. The list of available options for this field are defined during client onboarding.
  """
  accountClientType: String
  """
  The default client state for an Account unless otherwise stated during individual Account creation.
  """
  defaultAccountClientState: String
  """The type of issuance method for this Campaign."""
  issuanceMethod: IssuanceMethod
  """
  The pre-defined token format to use when generating Account tokens if one is required.
  """
  tokenFormat: String
  """
  The name of the token provider that is to be used when generating Account tokens if one is required.
  """
  tokenProvider: String
  """
  A flag to determine if a token should be generated for the Account. If true then no token will be generated and the 'tokenProvider' and 'tokenFormat' fields can be left empty or set to null.
  """
  walletEnabled: Boolean
}


type Rules {
  """Rules for Account creation."""
  creation: Creation
  """The expiry date of the Account."""
  expiry: Expiry
  """
  Specify a grace amount value that allows a customer to still qualify for an offer if they only miss out by a few pence/cents. The key of the object is the unit safe name.
  """
  graceAmount: JSON
  redemption: Redemption
  """Rules related to Refunds."""
  refund: Refund
  """The start date of the Account."""
  start: StartDay
  useLocalTime: Boolean
  verification: Verification
}


type Verification {
  """Should Accounts of this Campaign be locked on verification."""
  lock: Boolean
  """
  This allows users to override the POS restriction which locks a Token when you send a verify request.
  """
  lockOnVerify: Boolean
}


"""Rules related to Refunds."""
type Refund {
  """
  A flag to denote if a customer returns an item and is no longer eligible for the Account that was redeemed in the original purchase, then the points earnt from that transaction are debited from the customers points Account.
  """
  refundable: Boolean
  """
  A flag to denote if a Account that was used on the original purchase, then returned can be unredeemed and used in another transaction.
  """
  unredeemable: Boolean
}


type Redemption {
  """
  A flag to denote if the Account details of the Campaign can be overridden for personalisation.
  """
  allowAccountOverride: Boolean
  """
  A flag to denote if you generate multiple redeem events when maximumAccountUsage is > 1.
  """
  allowMultipleRedeem: Boolean
  """
  OBSOLETE - A flag to denote if the details of the Campaign can be overridden for personalisation.
  """
  allowOverride: Boolean
  """
  The maximum number of Accounts that can be redeemed. Null or empty means all created Accounts can be redeemed.
  """
  campaignLimit: Int
  """
  The maximum number of times a Account can be redeemed. Null or empty denotes unlimited.
  """
  couponLimit: Int
  """The dates that are excluded from the redemption window."""
  dates: DatesEntity
  """
  A boolean flag to enable/disable the mechanism for sharing an Account across a household.
  """
  isHiddenFromRelatedWallets: Boolean
  """
  The maximum number of times this Account can be redeemed within a period.
  """
  maxRedemptionsPerPeriod: MaxRedemptionsPerPeriod
  """
  The number of instances of this offer that can be completed in one transaction.
  """
  maximumAccountUsage: Int
  """
  Set the maximum number of Accounts from this Campaign that can be used per transaction.
  """
  maximumAccountsPerTransaction: Int
  """Set the number of related contents that can qualify for a discount."""
  maximumDiscountableRelatedContents: Int
  """
  A boolean flag to enable/disable whether a paper coupon can be used by a customer that is part of a loyalty scheme but does not have the digital counterpart in their wallet.
  """
  redeemableOutsideOwningWalletWithIdentity: Boolean
  """
  A boolean flag to enable/disable whether a paper coupon can be used by a customer that is not part of a loyalty scheme but does not have the digital counterpart in their wallet.
  """
  redeemableOutsideOwningWalletWithoutIdentity: Boolean
  """
  If an Account is not single use this specifies the minimum amount of time that must elapse between redemptions.
  """
  timeBetweenRedemptions: TimeBetween
  """Number of seconds before a stamp can redeemed since last redemption."""
  timeBetweenStamps: TimeBetween
  """Enable/disable redemption windows."""
  windows: Windows
}


type TimeBetween {
  """Flag denoting if rule is active or not."""
  active: Boolean
  """Number of seconds before an action."""
  value: Int
}


"""
The maximum number of times this Account can be redeemed within a period.
"""
type MaxRedemptionsPerPeriod {
  """A flag denoting if the rule is active or not."""
  active: Boolean
  """
  When period is ACCOUNT_REDEMPTION_X_DAYS this specifies what X is. Beginning from the creation of the Account.
  """
  days: Int
  """How many Accounts can be redeemed in each period."""
  limit: Int
  """What the period is."""
  period: RedepmtionPeriod
}


"""The expiry date of the Account."""
type Expiry {
  """The timestamp to apply to the rule if the type requires one."""
  date: String
  "* CAMPAIGN_END - Account will expire on Campaign end date. * DATE - Account will expire on a fixed date. * AFTER_CREATION - Account will have an expiry date set to X TIME_UNITS after creation. * EXPIRY_PERIOD - Account will expire at the end of the current EXPIRY_PERIOD after creation\\n"
  type: ExpiryType
  """The value to apply for the rule if the type requires a value."""
  value: String
  """The type of value being provided."""
  valueType: ValueType
}


"""Rules for Account creation."""
type Creation {
  """
  The maximum number of Accounts that can be created on this Campaign. Null or empty denotes unlimited.
  """
  campaignLimit: Int
  """
  The maximum number of Accounts that can be created on this Campaign within a time period.
  """
  campaignLimitPerPeriod: CampaignLimitPerPeriod
  """
  The maximum number of Accounts an individual consumer can have in their Wallet for this Campaign. Null or empty denotes unlimited.
  """
  consumerLimit: Int
  """
  The maximum number of Accounts in status active an individual consumer can have in their Wallet for this Campaign. Null or empty denotes unlimited.
  """
  consumerLimitActive: Int
  windows: Windows
}


"""
The maximum number of Accounts that can be created on this Campaign within a time period.
"""
type CampaignLimitPerPeriod {
  """How many Accounts can be created in each period."""
  limit: Int
  """On which day of the week the limit resets."""
  limitReset: EndDay
  "* FIXED - When the limit resets if you have not used your allocation of creations for this period then they are lost. * ROLLOVER - When the limit resets if you have not used your allocation of creations for this period then they are rolled over to the next period.\\n"
  type: LimitResetType
}


"""The relationships between this Campaign and any others."""
type Relationships {
  entitlement: [CampaignListItem]
  entitlementOf: [CampaignListItem]
  objective: [CampaignListItem]
  objectiveOf: [CampaignListItem]
  promotion: [CampaignListItem]
  promotionOf: [CampaignListItem]
}


type CampaignListItem {
  """It contains the campaignId of the Campaign."""
  campaignId: String
  """The type that is used to lookup the compatible Campaigns."""
  type: CampaignLookupType
  """
  The value of the specified type that is used to lookup the compatible Campaigns.
  """
  value: [JSON]
  """
  This timestamp shows the date-time in UTC when the Campaign was created. It is dynamically populated and cannot be edited.
  """
  dateCreated: String
}


"""The Campaigns that this is incompatible with."""
type Incompatibility {
  """It contains boolean value."""
  active: Boolean
  included: [CampaignListItem]
}


type CampaignDetails {
  """An alternative description of the Campaign."""
  alternativeDescription: String
  """An alternative name of the Campaign."""
  alternativeName: String
  """The description of the Campaign."""
  description: String
  """When the campaign ends."""
  endDate: String
  "The mode that the Campaign is operating in:\\n  * OPEN - this is a Campaign available to any consumers that qualify for it.\\n  * TARGETED - this is a Campaign that has been specifically targeted at a group of consumers.\\n"
  mode: CampaignMode
  """The name of the Campaign."""
  name: String
  """The message to print on the receipt."""
  printerMessage: String
  """The message to display on the screen."""
  screenMessage: String
  """When the campaign starts."""
  startDate: String
  """The tags to assign to a Campaign."""
  tags: [String]
}


"""The Campaigns that this is compatible with."""
type Compatibility {
  """Flag denoting if rule is active or not."""
  active: Boolean
  excluded: [CampaignListItem]
  included: [CampaignListItem]
  maxCouponsPerTransaction: MaxCouponsPerTransaction
}


type MaxCouponsPerTransaction {
  """Flag denoting if rule is active or not."""
  active: Boolean
  """
  How many Accounts from this Campaign can be used in a single transaction.
  """
  value: Int
}


"""The type holds all information related to Customer."""
type Customer {
  """Identity info: PGR Id, LoyaltyId"""
  identities: [IdentityInfo!]!
  "Current points amount"
  availablePoints: Int
  "Current reward amount"
  availableRewards: Int
  "Points account balance with expiration"
  points: Balances
  "List of rewards with experation dates"
  rewards: [RewardInfo]
  "Friendly name for the customer for visual identification"
  friendlyName: String
  "Customer segmentation list"
  segmentation: [SegmentationListItem]
  "Current Customer state"
  state: String
  "Current Customer status"
  status: CustomerLoyaltyAccountStatus
  "Type of the Customer"
  type: String
  "Tier to which Customer belongs to"
  tier: [Tier]
}


type RewardInfo {
  benefitId: Int
  "Reward description"
  description: String
  "The status of the REWARD (ACTIVE, INACTIVE..)"
  status: BenefitStatus
  "Reward state (LOADED, UNLOADED)"
  state: BenefitState
  "Reward is granted"
  startDate: String
  "The last date reward evaible"
  expiryDate: String
  "Reward balance"
  balance: Int
}


type IdentityInfo {
  """PGR_ID or LOYALTY_ID"""
  type: String!
  """
  Value of the identity (value of PGR_ID or LOYALTY_ID)
  LoyaltyID is numeric and 14 digits long
  """
  value: String!
}


type Balance {
  "The available balance"
  available: Int
  "The Refundable balance"
  refundable: Int
  transactionCount: Int
  objectivesMet: Int
  "The current balance"
  current: Int
  """
  The lifetime balance. Applicable only to accounts of types POINTS and CASHPOT
  """
  lifetime: Int
  "The total spend balance"
  lifetimeSpend: Int
  "The current pending balance"
  pending: Int
  """Total units bought (Continuity account)"""
  totalUnits: Int
  """Current units bought (Continuity account)"""
  currentUnits: Int
}


type ExpirationSchedule {
  "Point/Reward balance"
  amount: Int!
  "Expiration date for the balance"
  expiryDate: String!
}


type Balances {
  balance: Balance
  expirationScheduleList: [ExpirationSchedule]
}


type SpendAdjudicationResults {
  "Explain what loyalty account/scheme was used and what was redeemed"
  operations: [OperationsListItem]
  """
  Any points that are not able to be spent due to spend rules configured against the scheme
  """
  pointsRemainder: Int
  """
  The total number of points available to spend aggregated from all rewards in Cashpot
  """
  pointsValue: Int
}


type OperationsListItem {
  """The account ID to apply the operation against."""
  benefitId: String
  """Required if a operation type is spend or credit."""
  balances: Balances
  """Key-value pairs to apply to the account transaction."""
  details: JSON
  operationType: OperationType
  """The ID of the campaign or scheme related to this operation."""
  resourceId: String
  resourceType: ResourceType
  """The value for which the intended operation should be completed."""
  value: Int
}


"""
Outlines the allowed capabilities of the customer for loyalty based operations
"""
type Loyalty {
  """
  States if the customer is in a state of being able to earn points in a transaction
  """
  earn: Boolean
  """
  States if the customer is in a state of being able to spend points in the transaction
  """
  spend: Boolean
}


type AnalysedBasketResults {
  "Analized basket showing summary of adjudication and points that will be earned, and to which account (this basket element should be sent in the request in OrderSubmit)"
  basket: EnrichedBasketEntity
  """
  Exact replica of what EagleEye returns for enriched basket.
  Structure similar to basket: EnrichedBasketEntity.
  Since this JSON is directly passed to submitOrder basket, we have enabled this attribute.
  """
  enrichedBasketAsJson: JSON
  discount: [DiscountListItem]
  "Shows how many points will be earned and to which account"
  points: [PointsEntityListItem]
}


type PointsEntityListItem {
  benefitId: String
  """Operation Type"""
  operationType: OperationType
  """EES AIR Scheme ID"""
  resourceId: String
  """EES Resource Type (SCHEME)"""
  resourceType: ResourceType
  """Amount of points"""
  value: Int
}


type Offer {
  """The bonus reward if you transact with a particular tender type."""
  boltOn: [BoltOnListItem]
  """
  The promotion Account issued if a customer qualifies for a bounce back Campaign.
  resource ids list
  """
  bounceBack: [String]
  """The qualification criteria for a continuity Account."""
  continuity: Continuity
  """
  The qualification criteria that a transaction must meet in order to issue an Account from this Campaign.
  """
  issuanceQualification: IssuanceQualification
  "The following offer types can be used within the system:\\n  * FREE_PRODUCTS - An offer with one or more free products.\\n  * FIXED_AMOUNT_OFF_BASKET - An offer with a fixed amount-off from a basket.\\n  * VARIABLE_AMOUNT_OFF_BASKET - An offer with a variable amount-off from a basket.\\n  * FIXED_AMOUNT_OFF_PRODUCTS - An offer with a fixed amount-off from one or more products.\\n  * VARIABLE_AMOUNT_OFF_PRODUCTS - An offer with a variable amount-off from one or more products.\\n  * FIXED_PERCENTAGE_OFF_BASKET - An offer with a percentage-off from a basket.\\n  * VARIABLE_PERCENTAGE_OFF_BASKET - An offer with a variable percentage-off from a basket.\\n  * FIXED_PERCENTAGE_OFF_PRODUCTS - An offer with a percentage-off one or more products.\\n  * FIXED_PRICE_PRODUCTS - An offer with a fixed price for one or more products.\\n  * MEAL_DEAL - A meal deal style offer where more than one product is offered for a fixed discount.\\n  * FIXED_POINTS - A fixed points reward offer.\\n  * FIXED_POINTS_PRODUCTS - A fixed points reward offer based on products.\\n  * VARIABLE_POINTS_PRODUCTS - A variable points reward offer based on products.\\n  * VARIABLE_POINTS_BASKET - A variable points reward offer based on a basket.\\n  * FIXED_POINTS_BASKET - A fixed points reward offer based on a basket.\\n  * STAMP_CARD - A stamp card offer where a customer receives a reward once they reach milestones.\\n  * PROMO_CODE - An offer that is just triggered with an offer code being sent to the POS.\\n  * POINTS_SPEND_RATE - An offer that modifies the rate of points spent.\\n  * CONTINUITY - An offer where you repeat an action over time to be issued a points reward.\\n  * THIRD_PARTY_POINTS - An offer provided by a third party where the provider is the points master but Eagle Eye are the Campaign master. \\n  * BOUNCE_BACK - An offer that when you qualify a new Account from a different Campaign is added to your wallet to be used at a later date.\\n  * MULTI_PROMOTION_DISCOUNT - An offer that you have a single Account but it is linked to multiple different Campaigns and the customer receives all the offers that they qualify for in a single transaction.\\n  * QUEST_FIXED_POINTS -  An offer where you perform different actions over time to be issued a points reward.\\n  * ZERO_REWARD - An offer which doesn't produce a points or discount reward.\\n  * POINTS_EXCHANGE_DISCOUNT_OFF_PRODUCTS - An offer to allow the exchange of points for a discount on products.\\n"
  offerType: OfferType
  """The offer code used by physical POS systems."""
  promoId: String
  """The required criteria for a customer to qualify for this offer."""
  qualification: OfferQualification
  reward: Reward
  """The configuration details of a stamp card Campaign."""
  stampCard: StampCard
}


"""The configuration details of a stamp card Campaign."""
type StampCard {
  configuration: Configuration
}


type Configuration {
  rotations: Rotations
  """How many stamps per rotation."""
  steps: Int
}


type Rotations {
  """A flag denoting if rotations is active or not."""
  active: Boolean
  """The number of rotations."""
  value: Int
}


"""The required criteria for a customer to qualify for this offer."""
type OfferQualification {
  """
  The minimum basket spend that must be reached before the reward qualifies.
  """
  minimumBasketSpend: Int
  """
  The minimum number of units that must be in the basket for the reward to trigger.
  """
  minimumUnits: Int
  """The groups that each consumer can be a part of. (segmentation)"""
  consumer: JSON
  """
  A flag to determine if global product restrictions should apply to this Campaign or not.
  """
  globalProductRestrictions: Boolean
  """
  Qualification criteria based on the type of identity defined in Wallet config. e.g email, membership Id.
  """
  identityTypes: IdentityTypes
  locations: JSON
  """The number of quest objectives that need to be completed."""
  minimumRequired: Int
  product: JSON
  """The redemptions channels that can qualify for this offer."""
  redemptionChannels: RedemptionChannels
  """Qualification criteria based on the method of payment."""
  tenders: [TendersCollectionEntityListItem]
}


"""The redemptions channels that can qualify for this offer."""
type RedemptionChannels {
  """A list of redemption channels that are excluded from the promotion."""
  excluded: [String]
  """A list of redemption channels that are included in the promotion."""
  included: [String]
}


type TendersCollectionEntityListItem {
  """The Bank Identification Number."""
  bin: String
  """The tender type name defined by Client."""
  tenderType: String
}


"""
Qualification criteria based on the type of identity defined in Wallet config. e.g email, membership Id.
"""
type IdentityTypes {
  """
  It contains excluded items of identity type to qualify for the promotion.
  """
  excluded: [String]
  """It contains identity type of items to qualify for the promotion."""
  included: [String]
}


"""
The qualification criteria that a transaction must meet in order to issue an Account from this Campaign.
"""
type IssuanceQualification {
  """The minimum basket spend that must be reached to qualify."""
  minimumBasketSpend: Int
  """The minimum number of units that must be in the basket to qualify."""
  minimumUnits: Int
  locations: JSON
  product: JSON
}


type BoltOnListItem {
  """It contains offer qualification rules."""
  qualification: [JSON]
  reward: BoltonReward
}


type BoltonReward {
  boltonPoints: BoltonPoints
  """The number of points to credit the points Account with."""
  creditAmount: Int
  """
  The multiplication value to apply to the base issuance of points that would normally be awarded for the transaction.
  """
  multiplierValue: Int
  """
  This is a scheme identifier and its points must be credited to the consumer.
  """
  schemeId: String
}


type BoltonPoints {
  """The number of points to credit the points Account with."""
  creditAmount: Int
  """
  The multiplication value to apply to the base issuance of points that would normally be awarded for the transaction.
  """
  multiplierValue: Int
  """
  This is a scheme identifier and its points must be credited to the consumer.
  """
  schemeId: String
}


type Details {
  """The offer type (list is examples more may be added)"""
  appliedAnalyseBasketType: AppliedAnalyseBasketType
}


type DiscountListItem {
  benefitId: String
  """EES AIR Campaign / Programme / Scheme ID"""
  campaignId: String
  """Campaign Name"""
  campaignName: String
  """Client defined account type"""
  clientType: String
  reward: Reward
  """Benefit Type"""
  type: BenefitType
}


type Reward {
  basket: JSON
  product: Product
  """Promo ID"""
  promoId: String
  standard: Standard
}


type Product {
  """Product"""
  product: String
  """Promo ID"""
  promoId: String
  standard: Standard
}


"""
The standard rewards where either a discount value or percentage is given or a number of points is credited.
"""
type Standard {
  boltonPoints: BoltonPoints
  points: BoltonPoints
  product: JSON
  """The rewards based on tax."""
  tax: Tax
  value: DiscountValue
}


"""The rewards based on tax."""
type Tax {
  """Denotes whether the tax amount will be rewarded for this offer."""
  taxSaver: Boolean
}


type DiscountValue {
  """The discount amount to be subtracted from the basket total amount."""
  discountAmount: Int
  """The discount percentage to be subtracted from the basket total amount."""
  percentageAmount: Int
}


"""
Provides decisions on what customer will earn to his points and/or rewards accounts for his overall spend,
as well as what will be earned to these loyalty accounts based on specific items in the basket.
This element should be preserved as is, and sent in its entirety in the OrderSubmit call.
"""
type EnrichedBasketEntity {
  type: BasketType
  summary: BasketSummary
  contents: [EnrichedBasketContentsCollectionEntityListItem]
  """
  Basket Analysis Date-Time in ATOM format. Example: 2023-12-04T08:57:04+00:00
  """
  analysedDateTime: String
}


type EnrichedPaymentEntityListItem {
  """The EE AIR Account ID (only populated when tender is owned by EE)"""
  accountId: String
  """Monetary amount of payment/tender in lowest unit of currency"""
  amount: Int!
  """The bin for the tender"""
  bin: String
  """
  An identifying value of what was scanned, could be a token, barcode, gift-card
  """
  identifier: String
  """
  Tender type - predefined by Eagle Eye, including a further type of _tenderCoupon_
  """
  tenderType: String!
}


type EnrichedBasketContentsCollectionEntityListItem {
  adjudicationResults: [AdjudicationResultsListItem]
  adjustmentResults: [AdjustmentResultsEntityListItem]
  adjustmentRules: AdjustmentRulesEntity
  bounceBackResults: [BounceBackResultsEntityListItem]
  """
  If an offer was spend £30 get £5 off, this entity would be against each of the products contributing to the £5 off, with their combined 'value's adding up to the £5.
  """
  contributionResults: [ContributionResultsEntityListItem]
  """Product Name"""
  description: String
  """Number Of Items Fulfilled"""
  itemFulfilmentCount: Float
  """Item Price per unit, denominated to a smaller currency unit"""
  itemUnitCost: Int
  """Item Quantity"""
  itemUnitCount: Float
  """Discount per Item"""
  itemUnitDiscount: Int
  """The metric in which the item is measure (nullable)"""
  itemUnitMetric: ItemUnitMetric
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON
  qualifies: Qualifies
  """
  If an offer was buy a pizza and get a free garlic bread, the pizza would have this entity against it
  """
  qualifiesResults: [QualifiesResultsEntityListItem]
  """
  Recursive list of contents related to the parent item with the same scheme as this object.
  """
  relatedContents: [EnrichedBasketContentsCollectionEntityListItem]
  """'SALE'/'REFUND'/'FULFIL' Flag"""
  salesKey: SalesKey
  """Item SKU"""
  sku: String
  """Tax Amount for that item, denominated to a smallest currency unit"""
  taxAmount: Int
  """The rate of tax being applied to this item (percentage)"""
  taxRate: Float
  tenderResults: [TenderResultsEntityListItem]
  """Total cost for this item"""
  totalUnitCost: Int
  """
  Total cost for this item after discount (please note this does not take into account whole basket discounts)
  """
  totalUnitCostAfterDiscount: Int
  """Item SKU"""
  upc: String
}


type Qualifies {
  """
  Determines if the item is eligible for basket level discounting. If false this item will not qualify for basket level discounts but still qualify for product level discounts.
  """
  discount: Boolean!
  """
  Determines if the item is eligible for Base Earn points. If false this item will not qualify for Base Earn points but still qualify for basket and product level discounts.
  """
  points: Boolean!
}


type ContributionResultsEntityListItem {
  """The reference back to the offer which these items contributed"""
  instanceId: String
  """The proportional contribution to the discount/points given"""
  value: Int
}


type BasketSummary {
  totalItems: Int
  """
  Total Basket monetary Value after discounts, denominated to a
  smallest currency unit (e.g. for   'USD  ' this value should be
  provided in   'cents  ')
  """
  totalBasketValue: Int
  totalQualifyingAmount: TotalQualifyingAmount
  """Total discount amount"""
  totalDiscountAmount: TotalDiscountAmount
  """
  Records the base earn points rewarded to customer during mid fulfil requests.
  """
  fulfilledBaseEarn: [FulfilledBaseEarnEntityListItem]
  adjustmentResults: [AdjustmentResultsEntityListItem]
  """
  If an offer was buy a pizza and get a free garlic bread, the pizza would have this entity against it
  """
  qualifiesResults: [QualifiesResultsEntityListItem]
  adjudicationResults: [AdjudicationResultsListItem]
  results: EnrichedBasketSummaryResultsEntity
}


type EnrichedBasketSummaryResultsEntity {
  points: Points
}


type Points {
  """Total value of points credited during transaction"""
  credit: Int
  """Total value of points debited during transaction"""
  debit: Int
  """Total value of points earned during transaction"""
  earn: Int
  """The redemption channel used for this request"""
  redemptionChannel: String
  """Total value of points clawed-back during refund transaction"""
  refund: Int
  """Total value of points spent during transaction"""
  spend: Int
  """Sum of all positive balance actions (earn + credit)"""
  totalPointsGiven: Int
  """Sum of all negative balance actions (spend + debit + refund)"""
  totalPointsTaken: Int
}


type AdjudicationResultsListItem {
  """
  The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balances: BalancesEntity
  """Boolean Flag indicating if this offer should be refundable"""
  isRefundable: Boolean
  """Boolean Flag indicating if this offer should be Unredeemable"""
  isUnredeemable: Boolean
  """The exact position the offer was triggered during analysis"""
  playOrderPosition: Int
  relatedAccountIds: [String]
  """EES AIR Resource ID (Campaign ID, Programme ID, Scheme ID)"""
  resourceId: String
  """EES Resource Type"""
  resourceType: ResourceType
  success: Boolean
  """EES AIR Account ID"""
  targetedAccountId: String
  """The minimum number of products required to trigger offer"""
  totalMatchingUnits: Int
  """The number of units the reward applies to within this item."""
  totalRewardUnits: Int
  """Operation Type"""
  type: OperationType
  """
  Operation Amount (please note: value and balances attributes are mutually exclusive)
  """
  value: Int
}


type QualifiesResultsEntityListItem {
  """The reference back to the offer reward which these qualifiers relate"""
  instanceId: String
  """
  The monetary value this product contributes towards the offer's qualification
  """
  totalMatchingSpend: Int
  """The number of products forming part of the offer's qualification"""
  totalMatchingUnits: Int
}


type BounceBackResultsEntityListItem {
  """
  The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.
  """
  balances: BalancesEntity
  """Boolean Flag indicating if this offer should be refundable"""
  isRefundable: Boolean
  """Boolean Flag indicating if this offer should be Unredeemable"""
  isUnredeemable: Boolean
  """The exact position the offer was triggered during analysis"""
  playOrderPosition: Int
  relatedAccountIds: [String]
  """EES AIR Campaign Id"""
  resourceId: String
  """EES Resource Type"""
  resourceType: ResourceType
  success: Boolean
  """EES AIR Account ID"""
  targetAccountId: String
  type: OperationType
  """Value of transaction"""
  value: Int
}


type AdjustmentResultsEntityListItem {
  """
  A mechanism to distinguish each individual reward that has been given for any account
  """
  instanceId: String
  """Boolean Flag indicating if this offer should be Unredeemable"""
  isUnredeemable: Boolean
  multiItem: [String]
  """The exact position the offer was triggered during analysis"""
  playOrderPosition: Int
  """EES AIR Resource ID (Campaign ID, Programme ID, Scheme ID)"""
  resourceId: String
  """EES Resource Type"""
  resourceType: ResourceType
  success: Boolean
  """EES AIR Account ID"""
  targetedAccountId: String
  """The monetary effect of the discount in the lowest unit of currency"""
  totalDiscountAmount: Int
  """The number of products the adjustment was applied to"""
  totalMatchingUnits: Int
  """The number of units the reward applies to within this item."""
  totalRewardUnits: Int
  """Operation Type"""
  type: OperationType
  """Operation Amount"""
  value: Int
}


type TenderResultsEntityListItem {
  """Boolean Flag indicating if this offer should be Unredeemable"""
  isUnredeemable: Boolean
  """
  Used for coupons that can span multiple SKU's in a basket, links basket items together based on SKU
  """
  multiItem: [String]
  """The exact position the offer was triggered during analysis"""
  playOrderPosition: Int
  relatedAccountIds: [String]
  """EES AIR Resource ID (Campaign ID, Programme ID, Scheme ID)"""
  resourceId: String
  """EES Resource Type"""
  resourceType: ResourceType
  success: Boolean
  """EES AIR Account ID"""
  targetedAccountId: String
  """EES AIR Wallet ID. Nullable"""
  targetedWalletId: String
  """The amount of tender value in the lowest unit of currency"""
  totalTenderAmount: Int
  """Operation Type"""
  type: OperationType
  """Operation Amount"""
  value: Int
}


type AdjustmentRulesEntity {
  """
  If the object (summary/basket item) has been modified by the POS at all with information we don't know about
  """
  externalAdjustment: Boolean
  """The reason for externalAdjustment"""
  externalAdjustmentReason: String
  """Ignore object as if not sent"""
  ignore: Boolean
}


type FulfilledBaseEarnEntityListItem {
  """EES AIR Account ID."""
  targetedAccountId: String!
  """Total value of base earn points rewarded."""
  points: Int!
}


type TotalDiscountAmount {
  """
  Promotions Discount Amount. If basket adjustment adds to discounts, this amount will be added to
  """
  promotions: Int
  """Staff Discount Amount"""
  staff: Int
  """General Discount Amount"""
  general: Int
}


type TotalQualifyingAmount {
  """Basket Monetary Value for Loyalty Points calculations"""
  points: Int
  """
  Basket Monetary Value used for calculating base earn, overriding totalBasketValue. Adheres to basket discounts
  """
  baseEarn: Int
  """Basket Monetary Value for Promotion Offer selections"""
  promotions: Int
  """Basket Monetary Value for Discount calculations"""
  discount: Int
  """Basket Monetary Value for Staff Discount or Promotions"""
  staff: Int
}


type MetaEntity {
  """
  Meta 1 property, up to 255 characters; up to 255 characters for Key 1 Value
  """
  key1: String
  """
  Meta 2 property, up to 255 characters; up to 255 characters for Key 2 Value
  """
  key2: String
}


type SegmentListItem {
  """Label for the segment"""
  labels: [String]!
  """A subgroup of the label"""
  data: JSON
}


type SegmentationListItem {
  """Customer defined name / category for the segment."""
  name: String!
  """It contains segment objects in the array."""
  segments: [SegmentListItem]!
}


"The object of balances. Some balances only apply to certain types of accounts. See notes below on balances.  "
type BalancesEntity {
  "The available balance. This is applicable for all account types, except POINTS and CONTINUITY, which uses its own balance keys. For ECOUPON account type this property will be returned and will be equal to zero.  "
  available: Int
  "The current balance. Applicable only to accounts of type POINTS and STAMP. If current is not provided on creation, this will be set to 0.  "
  current: Int
  """
  The lifetime balance. Applicable only to accounts of type POINTS and STAMP. If lifetime is not provided on creation, this will be set to 0.
  """
  lifetime: Int
  "The locked balance. Applicable only to accounts of type POINTS. If locked is not provided on creation, this will be set to 0.  "
  locked: Int
  "The refundable balance. This is applicable for all account types except POINTS and CONTINUITY, but is not used during account creation. For an Account Entity, the amount displayed here is the total refundable balance available. Please note for ECOUPON account type this property will be returned and equal to zero.  "
  refundable: Int
  "The total spend balance. Applicable only to accounts of type CONTINUITY.  "
  totalSpend: Int
  "The total units purchased balance. Applicable only to accounts of type CONTINUITY.  "
  totalUnits: Int
  "The transaction counter. Applicable only to accounts of type CONTINUITY.  "
  transactionCount: Int
  "The usable balance. Applicable only to accounts of type POINTS. If usable is not provided on creation, this will be set to 0.  "
  usable: Int
}


type DatesEntity {
  "Start date of Benefit"
  start: String
  "End date of Benefit"
  end: String
}


type Tier {
  id: String
}


type OrderBy {
  """Sort by column"""
  name: String!
  """Sorting order"""
  order: OrderDirection!
}


"The object of balanceAfter.  "
type SpendBalances {
  "The current balance.  "
  current: Int
  """The lifetime earned."""
  lifetime: Int
  """The amount that has been spent on this account it's lifetime."""
  lifetimeSpend: Int
  """
  The monetary value of the points that have been spent over the lifetime of this account.
  """
  lifetimeSpendValue: Int
  "The locked balance.  "
  locked: Int
  "The usable balance.  "
  usable: Int
}


"""The campaign payload. See campaign documentation for details."""
type Campaign {
  """The Campaign ID for this reward or for this loyalty account."""
  campaignId: String
  """Determines if the campaign operates in open or restricted mode."""
  campaignMode: CampaignMode
  """The name of the campaign."""
  campaignName: String
  """
  Campaign description
  (example: 'Spend $40 on Hills' or 'Book Wellness Exam')
  """
  campaignDescription: String
  """
  Need to be set during campaign creation time in Alternative Name field
  (example: $10 Reward or 150 Points)
  """
  campaignBenefit: String
  """Date that this campaign was created."""
  dateCreated: String
  """Start date of the campaign."""
  startDate: String
  """End date of the campaign."""
  endDate: String
  """Date that this campaign was last updated."""
  lastUpdated: String
  """The value of the barcode."""
  sequenceKey: String
  """The status of the Campaign (ie. ACTIVE, INACTIVE, EXPIRED)"""
  status: CampaignStatus
  """offer related SKUs"""
  product: JSON
  """Offer image if provided"""
  imageUrl: String
  """Field is only populated if its a continuity Campaign"""
  continityOfferInfo: ContinuityOfferInfo
}


type ContinuityOfferInfo {
  totalNumberToPurchaseToGetBenefit: Int
  numberOfPointsCreditedForCompleting: Int
}


type BenefitListItem {
  """Unique Points Account Id, Rewards Account Id or Offer account ID in EE"""
  benefitId: String
  """
  Key-Value object, please note key name length should be less then 255 characters and key values should be less then 255 characters
  """
  meta: JSON
  "Applied to loyalty accounts, this provides current balance, lifetime earn, and lifetime redeemed"
  balances: Balances
  "The campaign provides information about this benefit's specifics, like name, status, and start/end dates."
  campaign: Campaign
  """Benefit Creation Date-Time (Atom format)"""
  dateCreated: String
  "Start and End dates for this benefit being available"
  dates: DatesEntity
  """Benefit Last Update Date-Time (Atom format)"""
  lastUpdated: String
  """State shows whether reward is LOADED or UNLOADED"""
  state: BenefitState
  """Benefit Status such as ACTIVE or INACTIVE"""
  status: BenefitStatus
  """Valid values (~~Perks~~, Limited_Time_Bonus, Offer, Points, Rewards)"""
  benefitType: BenefitType
}


type ProgrammeBenefitEnrichment {
  enrichmentType: EnrichmentType!
  """Programme Name"""
  programmeName: String!
  """Programme Reference"""
  programmeReference: String!
  """Token"""
  token: String
}


type PointsBenefitEnrichment {
  "Type would be POINTS"
  enrichmentType: EnrichmentType!
  properties: Properties
  """
  Scheme Name created in EE to provide earn and redemption rules for different tiers
  """
  schemeName: String!
  """Scheme Id"""
  schemeReference: String!
}


type Properties {
  """Scheme Base Earn"""
  baseEarn: JSON
  """Scheme Redemption Rates"""
  credit: JSON
  """Scheme Debit"""
  debit: JSON
  """Scheme Details"""
  details: JSON
  """Scheme Earn Rates"""
  earnRates: JSON
  """Scheme Goodwill"""
  goodwill: JSON
  pointsExpiry: PointsExpiry
  """Scheme Redemption Rates"""
  redemptionRates: JSON
}


type PointsExpiry {
  """Number of points."""
  points: Int
  """Time at which the points expire."""
  validTo: String
}


type StampBenefitEnrichment {
  enrichmentType: EnrichmentType!
  properties: JSON
  """Scheme Name"""
  schemeName: String!
  """Scheme Reference"""
  schemeReference: String!
}


type CampaignBenefitEnrichment {
  """Campaign Name"""
  campaignName: String!
  """Campaign Reference"""
  campaignReference: String!
  """
  Configured custom form fields in key-value pair format, grouped by form
  """
  custom: JSON
  enrichmentType: EnrichmentType!
  qualifier: [JSON]!
  redemptionWindows: RedemptionWindows
  restrictions: Restrictions
  reward: RewardOffer!
  """Token"""
  token: String
}


type RedemptionWindows {
  exclusions: [ExclusionWindowEntity]
  rolling: [WindowEntity]
}


type ExclusionWindowEntity {
  """Exclusion Window End (ATOM format)"""
  end: String!
  """Exclusion Window Start (ATOM format)"""
  start: String!
}


type WindowEntity {
  """Window definition End Day (Weekday name)"""
  endDay: EndDay!
  """Window definition End Time (in 24h format)"""
  endTime: String!
  """Window definition Start Day (Weekday name)"""
  startDay: StartDay!
  """Window definition Start Time (in 24h format)"""
  startTime: String!
}


type Restrictions {
  limits: Limits
}


type Limits {
  period: [PeriodListItem]
}


type PeriodListItem {
  """Numeric limit for this Redemption Restriction Type"""
  limit: Int
  """Remaining Redemptions for that particular Restriction Type"""
  remaining: Int
  """
  Information when next restriction cycle would start in ATOM date-time format
  """
  start: String
  """Redemption Restriction Type"""
  threshold: Threshold
  """Amount of Redemptions for that particular Restriction Type"""
  used: Int
}


type RewardOffer {
  """Offer ID"""
  offerId: String!
  """Offer Name"""
  offerName: String!
  """Offer reference (Promo Id)"""
  posReference: String!
}


type ContinuityBenefitEnrichment {
  """Campaign Name."""
  campaignName: String!
  """Campaign Reference."""
  campaignReference: String!
  """
  Configured custom form fields in key-value pair format, grouped by form
  """
  custom: JSON
  enrichmentType: EnrichmentType!
  """The campaign's qualifications"""
  qualifier: Qualifier
  redemptionWindows: RedemptionWindows
  restrictions: Restrictions
  reward: RewardOffer
  """The account's token"""
  token: String
}


"""The campaign's qualifications"""
type Qualifier {
  continuity: Continuity
}


type Continuity {
  """The number of transactions required to qualify for this coupon."""
  totalTransactionCount: Int
  """The total spend amount required to qualify for this coupon."""
  totalTransactionSpend: Int
  """
  Benefit override for totalTransactionUnits - Only valid if campaign uses totalTransactionUnits.
  """
  totalTransactionUnits: Int
}


enum Class {
  COUPON
  CONTINUITY
  STAMP_CARD
}


enum Event {
  ACTIVATE
  AUTOTOPUP
  BALANCE
  BLOCK
  CANCEL
  CREATE
  CREDIT
  DEBIT
  INACTIVATE
  INVALIDATE
  LOAD
  REACTIVATE
  REDEEM
  REFUND
  REISSUE
  RESEND
  SPEND
  STAMP
  STOLEN
  TOPUP
  TRANSFER
  TRANSFER_IN
  UNBLOCK
  UNLOCK
  UNREDEEM
  VERIFY
  VOID
  EARN
  REFUND_DEBIT
}


enum OfferType {
  FREE_PRODUCTS
  FIXED_AMOUNT_OFF_BASKET
  VARIABLE_AMOUNT_OFF_BASKET
  FIXED_AMOUNT_OFF_PRODUCTS
  VARIABLE_AMOUNT_OFF_PRODUCTS
  FIXED_PERCENTAGE_OFF_BASKET
  VARIABLE_PERCENTAGE_OFF_BASKET
  FIXED_PERCENTAGE_OFF_PRODUCTS
  FIXED_PRICE_PRODUCTS
  MEAL_DEAL
  FIXED_POINTS
  FIXED_POINTS_PRODUCTS
  VARIABLE_POINTS_PRODUCTS
  VARIABLE_POINTS_BASKET
  FIXED_POINTS_BASKET
  STAMP_CARD
  PROMO_CODE
  POINTS_SPEND_RATE
  CONTINUITY
  THIRD_PARTY_POINTS
  BOUNCE_BACK
  MULTI_PROMOTION_DISCOUNT
  QUEST_FIXED_POINTS
  ZERO_REWARD
  POINTS_EXCHANGE_DISCOUNT_OFF_PRODUCTS
}


enum CampaignLookupType {
  CAMPAIGNIDS
  CAMPAIGNTAGS
}


enum LimitResetType {
  FIXED
  ROLLOVER
}


enum ValueType {
  HOUR
  DAY
  MONTH_END
}


enum RedepmtionPeriod {
  ACCOUNT_REDEMPTION_LIFETIME
  ACCOUNT_REDEMPTION_CALENDAR_DAY
  ACCOUNT_REDEMPTION_CALENDAR_WEEK
  ACCOUNT_REDEMPTION_CALENDAR_MONTH
  ACCOUNT_REDEMPTION_CALENDAR_YEAR
  ACCOUNT_REDEMPTION_NUM_OF_DAYS
}


enum ExpiryType {
  CAMPAIGN_END
  DATE
  AFTER_CREATION
  EXPIRY_PERIOD
}


enum IssuanceMethod {
  UNIQUE
  MULTIPLE
}


enum BenefitType {
  ECOUPON
  BEHAVIOURAL_ACTION
  COUPON_STAMP_CARD
  QUEST
  CONTINUITY
  POINTS
}


enum EndDay {
  MONDAY
  TUESDAY
  WEDNESDAY
  THURSDAY
  FRIDAY
  SATURDAY
  SUNDAY
}


enum StartDay {
  MONDAY
  TUESDAY
  WEDNESDAY
  THURSDAY
  FRIDAY
  SATURDAY
  SUNDAY
}


enum Threshold {
  LIFETIME
  DAY
  WEEK
  MONTH
  YEAR
}


enum TransactionType {
  ADJUSTMENT
  SETTLE
  REFUND
  CONTINUITY
  CAMPAIGN_STAMP_CARD
  BEHAVIOURAL_ACTION
  FULFIL
  SPEND
  CREDIT
}


enum EventType {
  DEBIT
  VOID
  SPEND
  CREDIT
}


enum EnrichmentType {
  PROGRAMME
  POINTS
  STAMP
  COUPON
  CONTINUITY
}


enum TransactionState {
  ORIGNAL
  """Changes to Modified after a return"""
  MODIFIED
}


enum BenefitState {
  """
  The account will be used in adjudication during the next transaction (Order operations)
  Benefit will be unlocked and available (Status update)
  """
  LOADED
  """
  The account will be excluded from adjudication (Order operations)
  Benefit will be locked and unavailable (Status update)
  """
  UNLOADED
  "The account could be applied now"
  CHARGED
  "A points account that can both earn and spend points"
  EARNBURN
}


enum BenefitStatus {
  ACTIVE
  BLOCKED
  CANCELLED
  EXPIRED
  INACTIVE
  INVALIDATED
  LOCKED
  STOLEN
  USED
}


enum CampaignMode {
  OPEN
  TARGETED
  RESTRICTED
}


enum CampaignStatus {
  ACTIVE
  INACTIVE
  EXPIRED
  DELETED
  PENDING
  DRAFT
  REJECTED
  READY
  STOPPED
  SUSPENDED
}


enum PointsType {
  POINTS
  REWARDS
}


enum SchemeStatus {
  ACTIVE
  INACTIVE
}


enum SchemeType {
  """Points scheme"""
  POINTS
  """Cashpot scheme"""
  CASHPOT
}


enum SchemeState {
  LOADED
  UNLOADED
}


enum CustomerLoyaltyAccountStatus {
  ACTIVE
  DELETED
  INACTIVE
  SUSPENDED
  TERMINATED
  MERGED
}


enum BasketType {
  STANDARD
  ENRICHED
}


enum AdjudicationMode {
  CLIENT
  SERVER
  CUSTOM
}


enum Base {
  DEM
}


enum SalesKey {
  SALE
  REFUND
  FULFIL
}


enum CacheControlScope {
  PUBLIC
  PRIVATE
}


enum OperationMode {
  ACTIVE
  PASSIVE
}


enum OperationType {
  redeem
  credit
  debit
  earn
  spend
  stamp
  createRedeem
}


enum ResourceType {
  SCHEME
  CAMPAIGN
}


enum CampaignsStatus {
  ACTIVE
  INACTIVE
  PENDING
  EXPIRED
  DELETED
  DRAFT
  REJECTED
  READY
}


enum ItemUnitMetric {
  LITRES
  GRAMS
  MILLILITERS
  KILOGRAMS
  POUNDS
  OUNCES
  PIECE
  EACH
}


enum TransactionStatus {
  ACTIVE
  SETTLED
  EXPIRED
  CANCELLED
  DELETED
  PURGED
  FULFILLING
  FULFILLED
  VOIDED
}


enum AppliedAnalyseBasketType {
  FIXED_POINTS
  FIXED_POINTS_BASKET
  FIXED_POINTS_PRODUCTS
  VARIABLE_POINTS_BASKET
  VARIABLE_POINTS_PRODUCTS
}


enum OrderDirection {
  ASC
  DESC
}


enum StoreType {
  retail
  online
}


enum DetailType {
  POINTS
  REWARDS
}


input PaginationQuery {
  """Query string Pagination Limit"""
  limit: Int!
  """Query string Pagination Offset"""
  offset: Int!
}


type PaginationInfo {
  """Query string Pagination Limit"""
  limit: Int
  """Query string Pagination Offset"""
  offset: Int
  """Query string Order By"""
  orderBy: [OrderBy]
  """Total Results"""
  total: Int
}


union TransactionBasketEntity = StandardBasketEntity | EnrichedBasketEntity | PointsBasketEntity


union BenefitEnrichmentEntity = PointsBenefitEnrichment | StampBenefitEnrichment | CampaignBenefitEnrichment | ContinuityBenefitEnrichment


union AccountsListItem = AccountEntity | ChildTransactionDetails


directive @cacheControl(maxAge: Int, scope: CacheControlScope, inheritMaxAge: Boolean) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`;class zv{constructor(n){_e(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var ar;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(ar||(ar={}));function Jv(i){const n=new Map;return Hv(i,t=>{mn(t)&&Xv(t,s=>{const o=Aa(s.type);ma(n,o).references.push({kind:ar.FIELD,parent:t,by:s}),Kv(s,l=>{const f=Aa(l.type);ma(n,f).references.push({kind:ar.ARGUMENT,field:s,type:t,by:l})})}),Hn(t)&&t.getTypes().forEach(s=>{ma(n,s).references.push({kind:ar.UNION,by:t})})}),new zv(n)}function Hv(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function Xv(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function Kv(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function ma(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function Aa(i){return gn(i)||ci(i)?Aa(i.ofType):i}const un=fA(),_a=Os(Ns.DIRECTIVES,[]);var tf;const Zv=$s((tf=un.getQueryType())==null?void 0:tf.getFields());var rf;const eA=$s((rf=un.getMutationType())==null?void 0:rf.getFields());var sf;const nA=$s((sf=un.getSubscriptionType())==null?void 0:sf.getFields()),Ga=Ct.keyBy(sp(),i=>i.name.toLocaleLowerCase()),tA=Ct.mapValues(Ga,i=>{const n=_a.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(s=>s.name===t)).filter(t=>!!t):[]}),iA=$s(un.getTypeMap()),rA=Jv(un);function $s(i){return Ct.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function sA(){return Ct.size(un.getTypeMap())<=10}function oA(){return[ga("Queries",un.getQueryType()),ga("Mutations",un.getMutationType()),ga("Subscriptions",un.getSubscriptionType()),pA(),lA()].filter(i=>!!i)}function ga(i,n){return uA(i,aA(n))}function aA(i){return Ct.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function uA(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:mr.joinUrlPaths(Rs(),i.toLocaleLowerCase(),t.name)}))}}function lA(){return sA()?null:{type:"menu",title:"Types",children:Ct.sortBy(Ct.map(un.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:mr.joinUrlPaths(Rs(),"types",n.name)}))}}function SA(){return!!un.getQueryType()}function CA(i){return Zv[i.toLocaleLowerCase()]}function FA(){return!!un.getMutationType()}function NA(i){return eA[i.toLocaleLowerCase()]}function OA(){return!!un.getSubscriptionType()}function RA(i){return nA[i.toLocaleLowerCase()]}function kA(i){return iA[i.toLocaleLowerCase()]}function cA(i){return Ga[i.toLocaleLowerCase()]}function xA(i){return cA(i.name)!==void 0}function LA(){return Ct.size(Ga)>0}function BA(i){return tA[i.name.toLocaleLowerCase()]||[]}function PA(i){if(i)return rA.getFor(i)}function UA(i){return Ct.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:rp(n,i)}))}function rp(i,n){return i?i.description?[{description:i.description,from:n}]:mn(n)?n.getInterfaces().flatMap(t=>rp(t.getFields()[i.name],t)):[]:[]}function sp(){return _a.some(i=>(i==null?void 0:i.name)==="*")?un.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):_a.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?un.getDirective(i):void 0).filter(i=>!!i)}function fA(){return ef.trim().length===0?jv(JSON.parse(JSON.stringify({__schema:{types:[]}}))):Qv(ef)}function pA(){const i=sp();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:mr.joinUrlPaths(Rs(),"directives",n.name),section:"Directives"}))}}const MA=Os(Ns.APP_TITLE,"GraphQL Documentation"),op=hA().concat(oA());gA(op);const dA=Object.freeze(op),$A=mA();function hA(){return Os(Ns.PAGES,TA()).filter(n=>!!n).map(n=>up([],n))}function mA(){const i=yA();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function gA(i){function n(s,o){for(const u of s){if(u.type==="page"){o(u);continue}u.type==="menu"&&n(u.children,o)}}let t;n(i,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function yA(){return ap(()=>!0)}function VA(i){return ap(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function ap(i){function n(t){for(const s of t){if(s.type==="page"&&i(s))return s;if(s.type==="menu"){const o=n(s.children);if(o)return o}}return null}return n(dA)}function up(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:mr.joinUrlPaths(Rs(),...i,nf(n.title))};const t=i.concat([nf(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...up(t,s),section:n.title}))}}function nf(i){return mr.generatePathSegment(i,new Df)}function TA(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{KI as A,sA as B,kA as C,PA as D,Qt as E,Xn as F,an as G,Hn as H,mn as I,Kn as J,A as K,UA as L,ZD as M,Uf as N,bA as O,Cs as P,lf as Q,ar as R,_A as S,Df as T,ye as U,Qn as V,MA as W,Ct as _,FA as a,SA as b,CA as c,OA as d,RA as e,VA as f,NA as g,$A as h,BA as i,Rs as j,xA as k,af as l,AA as m,LA as n,cA as o,dA as p,Mf as q,ci as r,un as s,gn as t,mr as u,wA as v,Os as w,Ns as x,ut as y,nr as z};
