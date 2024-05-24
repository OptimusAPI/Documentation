var CT=Object.defineProperty;var FT=(i,n,t)=>n in i?CT(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t;var Ie=(i,n,t)=>(FT(i,typeof n!="symbol"?n+"":n,t),t),NT=(i,n,t)=>{if(!n.has(i))throw TypeError("Cannot "+t)};var ea=(i,n,t)=>{if(n.has(i))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(i):n.set(i,t)};var ss=(i,n,t)=>(NT(i,n,"access private method"),t);import{b as vs}from"./paths.0cf4fb2b.js";import{S as Be,i as Pe,a as te,t as ue,g as Ct,c as Ft,b as Wt,d as ci,m as Yt,e as Qt}from"./index.012ade26.js";import{s as Fe,e as tn,i as ve,d as K,r as nt,u as zc,f as Re,g as ke,h as je,a4 as ps,x as tt,y as it,z as rt,R as ur,q as cc,l as Ta,m as Ea,n as Ia,H as Xe,j as gn,G as St,a as Da,c as va,U as OT,V as RT,a7 as fc,o as kT}from"./scheduler.88297443.js";function ct(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Jc(i,n){const t={},s={},o={$$scope:1};let u=i.length;for(;u--;){const l=i[u],d=n[u];if(d){for(const p in l)p in d||(s[p]=1);for(const p in d)o[p]||(t[p]=d[p],o[p]=1);i[u]=d}else for(const p in l)o[p]=1}for(const l in s)l in t||(t[l]=void 0);return t}function kv(i){return typeof i=="object"&&i!==null?i:{}}function la(...i){return"/"+i.flatMap(n=>n.split("/")).filter(n=>!!n).join("/")}function ca(i){return i.startsWith("/")||i.startsWith("#")}function Hc(i,n){return n.slug(i).replace(/--+/g,"-")}function na(i){let n,t;const s=i[5].default,o=nt(s,i,i[4],null);let u=[{id:i[1]}],l={};for(let d=0;d<u.length;d+=1)l=zc(l,u[d]);return{c(){n=Re(`h${i[0].depth}`),o&&o.c(),this.h()},l(d){n=ke(d,(`h${i[0].depth}`||"null").toUpperCase(),{id:!0});var p=je(n);o&&o.l(p),p.forEach(K),this.h()},h(){ps(`h${i[0].depth}`)(n,l)},m(d,p){ve(d,n,p),o&&o.m(n,null),t=!0},p(d,p){o&&o.p&&(!t||p&16)&&tt(o,s,d,d[4],t?rt(s,d[4],p,null):it(d[4]),null),ps(`h${d[0].depth}`)(n,l=Jc(u,[(!t||p&2)&&{id:d[1]}]))},i(d){t||(te(o,d),t=!0)},o(d){ue(o,d),t=!1},d(d){d&&K(n),o&&o.d(d)}}}function xT(i){let n=`h${i[0].depth}`,t,s,o=`h${i[0].depth}`&&na(i);return{c(){o&&o.c(),t=tn()},l(u){o&&o.l(u),t=tn()},m(u,l){o&&o.m(u,l),ve(u,t,l),s=!0},p(u,[l]){`h${u[0].depth}`?n?Fe(n,`h${u[0].depth}`)?(o.d(1),o=na(u),n=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):o.p(u,l):(o=na(u),n=`h${u[0].depth}`,o.c(),o.m(t.parentNode,t)):n&&(o.d(1),o=null,n=`h${u[0].depth}`)},i(u){s||(te(o,u),s=!0)},o(u){ue(o,u),s=!1},d(u){u&&K(t),o&&o.d(u)}}}function LT(i,n,t){let{$$slots:s={},$$scope:o}=n,{token:u}=n,{options:l}=n;const d=void 0;let p;return i.$$set=y=>{"token"in y&&t(0,u=y.token),"options"in y&&t(2,l=y.options),"$$scope"in y&&t(4,o=y.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&t(1,p=Hc(u.text,l.slugger))},[u,p,l,d,o,s]}class BT extends Be{constructor(n){super(),Pe(this,n,LT,xT,Fe,{token:0,options:2,renderers:3})}get renderers(){return this.$$.ctx[3]}}function PT(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Re("blockquote"),o&&o.c()},l(u){n=ke(u,"BLOCKQUOTE",{});var l=je(n);o&&o.l(l),l.forEach(K)},m(u,l){ve(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function UT(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,d=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class MT extends Be{constructor(n){super(),Pe(this,n,UT,PT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function dc(i,n,t){const s=i.slice();return s[3]=n[t],s}function pc(i){let n,t,s=ct(i[0]),o=[];for(let l=0;l<s.length;l+=1)o[l]=hc(dc(i,s,l));const u=l=>ue(o[l],1,1,()=>{o[l]=null});return{c(){for(let l=0;l<o.length;l+=1)o[l].c();n=tn()},l(l){for(let d=0;d<o.length;d+=1)o[d].l(l);n=tn()},m(l,d){for(let p=0;p<o.length;p+=1)o[p]&&o[p].m(l,d);ve(l,n,d),t=!0},p(l,d){if(d&7){s=ct(l[0]);let p;for(p=0;p<s.length;p+=1){const y=dc(l,s,p);o[p]?(o[p].p(y,d),te(o[p],1)):(o[p]=hc(y),o[p].c(),te(o[p],1),o[p].m(n.parentNode,n))}for(Ct(),p=s.length;p<o.length;p+=1)u(p);Ft()}},i(l){if(!t){for(let d=0;d<s.length;d+=1)te(o[d]);t=!0}},o(l){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)ue(o[d]);t=!1},d(l){l&&K(n),ur(o,l)}}}function hc(i){let n,t;return n=new Xc({props:{token:i[3],renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,o){Yt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.token=s[3]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){Qt(n,s)}}}function $T(i){let n,t,s=i[0]&&pc(i);return{c(){s&&s.c(),n=tn()},l(o){s&&s.l(o),n=tn()},m(o,u){s&&s.m(o,u),ve(o,n,u),t=!0},p(o,[u]){o[0]?s?(s.p(o,u),u&1&&te(s,1)):(s=pc(o),s.c(),te(s,1),s.m(n.parentNode,n)):s&&(Ct(),ue(s,1,1,()=>{s=null}),Ft())},i(o){t||(te(s),t=!0)},o(o){ue(s),t=!1},d(o){o&&K(n),s&&s.d(o)}}}function VT(i,n,t){let{tokens:s}=n,{renderers:o}=n,{options:u}=n;return i.$$set=l=>{"tokens"in l&&t(0,s=l.tokens),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class _s extends Be{constructor(n){super(),Pe(this,n,VT,$T,Fe,{tokens:0,renderers:1,options:2})}}function mc(i){let n,t,s;var o=i[1][i[0].type];function u(l,d){return{props:{token:l[0],options:l[2],renderers:l[1],$$slots:{default:[jT]},$$scope:{ctx:l}}}}return o&&(n=cc(o,u(i))),{c(){n&&Wt(n.$$.fragment),t=tn()},l(l){n&&ci(n.$$.fragment,l),t=tn()},m(l,d){n&&Yt(n,l,d),ve(l,t,d),s=!0},p(l,d){if(d&3&&o!==(o=l[1][l[0].type])){if(n){Ct();const p=n;ue(p.$$.fragment,1,0,()=>{Qt(p,1)}),Ft()}o?(n=cc(o,u(l)),Wt(n.$$.fragment),te(n.$$.fragment,1),Yt(n,t.parentNode,t)):n=null}else if(o){const p={};d&1&&(p.token=l[0]),d&4&&(p.options=l[2]),d&2&&(p.renderers=l[1]),d&15&&(p.$$scope={dirty:d,ctx:l}),n.$set(p)}},i(l){s||(n&&te(n.$$.fragment,l),s=!0)},o(l){n&&ue(n.$$.fragment,l),s=!1},d(l){l&&K(t),n&&Qt(n,l)}}}function GT(i){let n=i[0].raw+"",t;return{c(){t=Ta(n)},l(s){t=Ea(s,n)},m(s,o){ve(s,t,o)},p(s,o){o&1&&n!==(n=s[0].raw+"")&&Ia(t,n)},i:Xe,o:Xe,d(s){s&&K(t)}}}function qT(i){let n,t;return n=new _s({props:{tokens:i[0].tokens,renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,o){Yt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.tokens=s[0].tokens),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){Qt(n,s)}}}function jT(i){let n,t,s,o;const u=[qT,GT],l=[];function d(p,y){return"tokens"in p[0]&&p[0].tokens?0:1}return n=d(i),t=l[n]=u[n](i),{c(){t.c(),s=tn()},l(p){t.l(p),s=tn()},m(p,y){l[n].m(p,y),ve(p,s,y),o=!0},p(p,y){let T=n;n=d(p),n===T?l[n].p(p,y):(Ct(),ue(l[T],1,1,()=>{l[T]=null}),Ft(),t=l[n],t?t.p(p,y):(t=l[n]=u[n](p),t.c()),te(t,1),t.m(s.parentNode,s))},i(p){o||(te(t),o=!0)},o(p){ue(t),o=!1},d(p){p&&K(s),l[n].d(p)}}}function WT(i){let n,t,s=i[1][i[0].type]&&mc(i);return{c(){s&&s.c(),n=tn()},l(o){s&&s.l(o),n=tn()},m(o,u){s&&s.m(o,u),ve(o,n,u),t=!0},p(o,[u]){o[1][o[0].type]?s?(s.p(o,u),u&3&&te(s,1)):(s=mc(o),s.c(),te(s,1),s.m(n.parentNode,n)):s&&(Ct(),ue(s,1,1,()=>{s=null}),Ft())},i(o){t||(te(s),t=!0)},o(o){ue(s),t=!1},d(o){o&&K(n),s&&s.d(o)}}}function YT(i,n,t){let{token:s}=n,{renderers:o}=n,{options:u}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"renderers"in l&&t(1,o=l.renderers),"options"in l&&t(2,u=l.options)},[s,o,u]}class Xc extends Be{constructor(n){super(),Pe(this,n,YT,WT,Fe,{token:0,renderers:1,options:2})}}function gc(i,n,t){const s=i.slice();return s[4]=n[t],s}function yc(i){let n,t;return n=new Xc({props:{token:{...i[4]},options:i[1],renderers:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,o){Yt(n,s,o),t=!0},p(s,o){const u={};o&1&&(u.token={...s[4]}),o&2&&(u.options=s[1]),o&4&&(u.renderers=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){Qt(n,s)}}}function ta(i){let n,t,s,o=ct(i[0].items),u=[];for(let y=0;y<o.length;y+=1)u[y]=yc(gc(i,o,y));const l=y=>ue(u[y],1,1,()=>{u[y]=null});let d=[{start:t=i[0].start||1}],p={};for(let y=0;y<d.length;y+=1)p=zc(p,d[y]);return{c(){n=Re(i[3]);for(let y=0;y<u.length;y+=1)u[y].c();this.h()},l(y){n=ke(y,(i[3]||"null").toUpperCase(),{start:!0});var T=je(n);for(let D=0;D<u.length;D+=1)u[D].l(T);T.forEach(K),this.h()},h(){ps(i[3])(n,p)},m(y,T){ve(y,n,T);for(let D=0;D<u.length;D+=1)u[D]&&u[D].m(n,null);s=!0},p(y,T){if(T&7){o=ct(y[0].items);let D;for(D=0;D<o.length;D+=1){const S=gc(y,o,D);u[D]?(u[D].p(S,T),te(u[D],1)):(u[D]=yc(S),u[D].c(),te(u[D],1),u[D].m(n,null))}for(Ct(),D=o.length;D<u.length;D+=1)l(D);Ft()}ps(y[3])(n,p=Jc(d,[(!s||T&1&&t!==(t=y[0].start||1))&&{start:t}]))},i(y){if(!s){for(let T=0;T<o.length;T+=1)te(u[T]);s=!0}},o(y){u=u.filter(Boolean);for(let T=0;T<u.length;T+=1)ue(u[T]);s=!1},d(y){y&&K(n),ur(u,y)}}}function QT(i){let n=i[3],t,s=i[3]&&ta(i);return{c(){s&&s.c(),t=tn()},l(o){s&&s.l(o),t=tn()},m(o,u){s&&s.m(o,u),ve(o,t,u)},p(o,[u]){o[3]?n?Fe(n,o[3])?(s.d(1),s=ta(o),n=o[3],s.c(),s.m(t.parentNode,t)):s.p(o,u):(s=ta(o),n=o[3],s.c(),s.m(t.parentNode,t)):n&&(s.d(1),s=null,n=o[3])},i:Xe,o(o){ue(s,o)},d(o){o&&K(t),s&&s.d(o)}}}function zT(i,n,t){let{token:s}=n,{options:o}=n,{renderers:u}=n,l;return i.$$set=d=>{"token"in d&&t(0,s=d.token),"options"in d&&t(1,o=d.options),"renderers"in d&&t(2,u=d.renderers)},i.$$.update=()=>{i.$$.dirty&1&&t(3,l=s.ordered?"ol":"ul")},[s,o,u,l]}class JT extends Be{constructor(n){super(),Pe(this,n,zT,QT,Fe,{token:0,options:1,renderers:2})}}function HT(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Re("li"),o&&o.c()},l(u){n=ke(u,"LI",{});var l=je(n);o&&o.l(l),l.forEach(K)},m(u,l){ve(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function XT(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,d=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class KT extends Be{constructor(n){super(),Pe(this,n,XT,HT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function ZT(i){let n;return{c(){n=Re("br")},l(t){n=ke(t,"BR",{})},m(t,s){ve(t,n,s)},p:Xe,i:Xe,o:Xe,d(t){t&&K(n)}}}function eE(i,n,t){return[void 0,void 0,void 0]}class nE extends Be{constructor(n){super(),Pe(this,n,eE,ZT,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function tE(i){let n,t,s=i[0].text+"",o,u;return{c(){n=Re("pre"),t=Re("code"),o=Ta(s),this.h()},l(l){n=ke(l,"PRE",{});var d=je(n);t=ke(d,"CODE",{class:!0});var p=je(t);o=Ea(p,s),p.forEach(K),d.forEach(K),this.h()},h(){gn(t,"class",u=`lang-${i[0].lang}`)},m(l,d){ve(l,n,d),St(n,t),St(t,o)},p(l,[d]){d&1&&s!==(s=l[0].text+"")&&Ia(o,s),d&1&&u!==(u=`lang-${l[0].lang}`)&&gn(t,"class",u)},i:Xe,o:Xe,d(l){l&&K(n)}}}function iE(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class rE extends Be{constructor(n){super(),Pe(this,n,iE,tE,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function sE(i){let n,t=i[0].raw.slice(1,i[0].raw.length-1)+"",s;return{c(){n=Re("code"),s=Ta(t)},l(o){n=ke(o,"CODE",{});var u=je(n);s=Ea(u,t),u.forEach(K)},m(o,u){ve(o,n,u),St(n,s)},p(o,[u]){u&1&&t!==(t=o[0].raw.slice(1,o[0].raw.length-1)+"")&&Ia(s,t)},i:Xe,o:Xe,d(o){o&&K(n)}}}function oE(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class aE extends Be{constructor(n){super(),Pe(this,n,oE,sE,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function Tc(i,n,t){const s=i.slice();return s[3]=n[t],s}function Ec(i,n,t){const s=i.slice();return s[6]=n[t],s}function Ic(i,n,t){const s=i.slice();return s[9]=n[t],s}function Dc(i){let n,t,s,o;return t=new _s({props:{tokens:i[9].tokens,options:i[1],renderers:i[2]}}),{c(){n=Re("th"),Wt(t.$$.fragment),s=Da(),this.h()},l(u){n=ke(u,"TH",{scope:!0});var l=je(n);ci(t.$$.fragment,l),s=va(l),l.forEach(K),this.h()},h(){gn(n,"scope","col")},m(u,l){ve(u,n,l),Yt(t,n,null),St(n,s),o=!0},p(u,l){const d={};l&1&&(d.tokens=u[9].tokens),l&2&&(d.options=u[1]),l&4&&(d.renderers=u[2]),t.$set(d)},i(u){o||(te(t.$$.fragment,u),o=!0)},o(u){ue(t.$$.fragment,u),o=!1},d(u){u&&K(n),Qt(t)}}}function vc(i){let n,t,s;return t=new _s({props:{tokens:i[6].tokens,options:i[1],renderers:i[2]}}),{c(){n=Re("td"),Wt(t.$$.fragment)},l(o){n=ke(o,"TD",{});var u=je(n);ci(t.$$.fragment,u),u.forEach(K)},m(o,u){ve(o,n,u),Yt(t,n,null),s=!0},p(o,u){const l={};u&1&&(l.tokens=o[6].tokens),u&2&&(l.options=o[1]),u&4&&(l.renderers=o[2]),t.$set(l)},i(o){s||(te(t.$$.fragment,o),s=!0)},o(o){ue(t.$$.fragment,o),s=!1},d(o){o&&K(n),Qt(t)}}}function _c(i){let n,t,s,o=ct(i[3]),u=[];for(let d=0;d<o.length;d+=1)u[d]=vc(Ec(i,o,d));const l=d=>ue(u[d],1,1,()=>{u[d]=null});return{c(){n=Re("tr");for(let d=0;d<u.length;d+=1)u[d].c();t=Da()},l(d){n=ke(d,"TR",{});var p=je(n);for(let y=0;y<u.length;y+=1)u[y].l(p);t=va(p),p.forEach(K)},m(d,p){ve(d,n,p);for(let y=0;y<u.length;y+=1)u[y]&&u[y].m(n,null);St(n,t),s=!0},p(d,p){if(p&7){o=ct(d[3]);let y;for(y=0;y<o.length;y+=1){const T=Ec(d,o,y);u[y]?(u[y].p(T,p),te(u[y],1)):(u[y]=vc(T),u[y].c(),te(u[y],1),u[y].m(n,t))}for(Ct(),y=o.length;y<u.length;y+=1)l(y);Ft()}},i(d){if(!s){for(let p=0;p<o.length;p+=1)te(u[p]);s=!0}},o(d){u=u.filter(Boolean);for(let p=0;p<u.length;p+=1)ue(u[p]);s=!1},d(d){d&&K(n),ur(u,d)}}}function uE(i){let n,t,s,o,u,l,d=ct(i[0].header),p=[];for(let R=0;R<d.length;R+=1)p[R]=Dc(Ic(i,d,R));const y=R=>ue(p[R],1,1,()=>{p[R]=null});let T=ct(i[0].rows),D=[];for(let R=0;R<T.length;R+=1)D[R]=_c(Tc(i,T,R));const S=R=>ue(D[R],1,1,()=>{D[R]=null});return{c(){n=Re("table"),t=Re("thead"),s=Re("tr");for(let R=0;R<p.length;R+=1)p[R].c();o=Da(),u=Re("tbody");for(let R=0;R<D.length;R+=1)D[R].c()},l(R){n=ke(R,"TABLE",{});var x=je(n);t=ke(x,"THEAD",{});var L=je(t);s=ke(L,"TR",{});var X=je(s);for(let Ge=0;Ge<p.length;Ge+=1)p[Ge].l(X);X.forEach(K),L.forEach(K),o=va(x),u=ke(x,"TBODY",{});var he=je(u);for(let Ge=0;Ge<D.length;Ge+=1)D[Ge].l(he);he.forEach(K),x.forEach(K)},m(R,x){ve(R,n,x),St(n,t),St(t,s);for(let L=0;L<p.length;L+=1)p[L]&&p[L].m(s,null);St(n,o),St(n,u);for(let L=0;L<D.length;L+=1)D[L]&&D[L].m(u,null);l=!0},p(R,[x]){if(x&7){d=ct(R[0].header);let L;for(L=0;L<d.length;L+=1){const X=Ic(R,d,L);p[L]?(p[L].p(X,x),te(p[L],1)):(p[L]=Dc(X),p[L].c(),te(p[L],1),p[L].m(s,null))}for(Ct(),L=d.length;L<p.length;L+=1)y(L);Ft()}if(x&7){T=ct(R[0].rows);let L;for(L=0;L<T.length;L+=1){const X=Tc(R,T,L);D[L]?(D[L].p(X,x),te(D[L],1)):(D[L]=_c(X),D[L].c(),te(D[L],1),D[L].m(u,null))}for(Ct(),L=T.length;L<D.length;L+=1)S(L);Ft()}},i(R){if(!l){for(let x=0;x<d.length;x+=1)te(p[x]);for(let x=0;x<T.length;x+=1)te(D[x]);l=!0}},o(R){p=p.filter(Boolean);for(let x=0;x<p.length;x+=1)ue(p[x]);D=D.filter(Boolean);for(let x=0;x<D.length;x+=1)ue(D[x]);l=!1},d(R){R&&K(n),ur(p,R),ur(D,R)}}}function lE(i,n,t){let{token:s}=n,{options:o}=n,{renderers:u}=n;return i.$$set=l=>{"token"in l&&t(0,s=l.token),"options"in l&&t(1,o=l.options),"renderers"in l&&t(2,u=l.renderers)},[s,o,u]}class cE extends Be{constructor(n){super(),Pe(this,n,lE,uE,Fe,{token:0,options:1,renderers:2})}}function fE(i){let n,t=i[0].text+"",s;return{c(){n=new OT(!1),s=tn(),this.h()},l(o){n=RT(o,!1),s=tn(),this.h()},h(){n.a=s},m(o,u){n.m(t,o,u),ve(o,s,u)},p(o,[u]){u&1&&t!==(t=o[0].text+"")&&n.p(t)},i:Xe,o:Xe,d(o){o&&(K(s),n.d())}}}function dE(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class pE extends Be{constructor(n){super(),Pe(this,n,dE,fE,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function hE(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Re("p"),o&&o.c()},l(u){n=ke(u,"P",{});var l=je(n);o&&o.l(l),l.forEach(K)},m(u,l){ve(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function mE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,d=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class gE extends Be{constructor(n){super(),Pe(this,n,mE,hE,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function yE(i){let n,t,s,o;const u=i[4].default,l=nt(u,i,i[3],null);return{c(){n=Re("a"),l&&l.c(),this.h()},l(d){n=ke(d,"A",{href:!0,title:!0});var p=je(n);l&&l.l(p),p.forEach(K),this.h()},h(){gn(n,"href",t=ca(i[0].href)?la(i[1].baseUrl,i[0].href):i[0].href),gn(n,"title",s=i[0].title)},m(d,p){ve(d,n,p),l&&l.m(n,null),o=!0},p(d,[p]){l&&l.p&&(!o||p&8)&&tt(l,u,d,d[3],o?rt(u,d[3],p,null):it(d[3]),null),(!o||p&3&&t!==(t=ca(d[0].href)?la(d[1].baseUrl,d[0].href):d[0].href))&&gn(n,"href",t),(!o||p&1&&s!==(s=d[0].title))&&gn(n,"title",s)},i(d){o||(te(l,d),o=!0)},o(d){ue(l,d),o=!1},d(d){d&&K(n),l&&l.d(d)}}}function TE(i,n,t){let{$$slots:s={},$$scope:o}=n,{token:u}=n,{options:l}=n;const d=void 0;return i.$$set=p=>{"token"in p&&t(0,u=p.token),"options"in p&&t(1,l=p.options),"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class EE extends Be{constructor(n){super(),Pe(this,n,TE,yE,Fe,{token:0,options:1,renderers:2})}get renderers(){return this.$$.ctx[2]}}function IE(i){let n;const t=i[4].default,s=nt(t,i,i[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),n=!0},p(o,[u]){s&&s.p&&(!n||u&8)&&tt(s,t,o,o[3],n?rt(t,o[3],u,null):it(o[3]),null)},i(o){n||(te(s,o),n=!0)},o(o){ue(s,o),n=!1},d(o){s&&s.d(o)}}}function DE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,d=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class vE extends Be{constructor(n){super(),Pe(this,n,DE,IE,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function _E(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Re("dfn"),o&&o.c()},l(u){n=ke(u,"DFN",{});var l=je(n);o&&o.l(l),l.forEach(K)},m(u,l){ve(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function AE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,d=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class bE extends Be{constructor(n){super(),Pe(this,n,AE,_E,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function wE(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Re("del"),o&&o.c()},l(u){n=ke(u,"DEL",{});var l=je(n);o&&o.l(l),l.forEach(K)},m(u,l){ve(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function SE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,d=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class CE extends Be{constructor(n){super(),Pe(this,n,SE,wE,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function FE(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Re("em"),o&&o.c()},l(u){n=ke(u,"EM",{});var l=je(n);o&&o.l(l),l.forEach(K)},m(u,l){ve(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function NE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,d=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class OE extends Be{constructor(n){super(),Pe(this,n,NE,FE,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function RE(i){let n;return{c(){n=Re("hr")},l(t){n=ke(t,"HR",{})},m(t,s){ve(t,n,s)},p:Xe,i:Xe,o:Xe,d(t){t&&K(n)}}}function kE(i,n,t){return[void 0,void 0,void 0]}class xE extends Be{constructor(n){super(),Pe(this,n,kE,RE,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function LE(i){let n,t;const s=i[4].default,o=nt(s,i,i[3],null);return{c(){n=Re("strong"),o&&o.c()},l(u){n=ke(u,"STRONG",{});var l=je(n);o&&o.l(l),l.forEach(K)},m(u,l){ve(u,n,l),o&&o.m(n,null),t=!0},p(u,[l]){o&&o.p&&(!t||l&8)&&tt(o,s,u,u[3],t?rt(s,u[3],l,null):it(u[3]),null)},i(u){t||(te(o,u),t=!0)},o(u){ue(o,u),t=!1},d(u){u&&K(n),o&&o.d(u)}}}function BE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,d=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class PE extends Be{constructor(n){super(),Pe(this,n,BE,LE,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function UE(i){let n,t,s,o;return{c(){n=Re("img"),this.h()},l(u){n=ke(u,"IMG",{src:!0,title:!0,alt:!0,class:!0}),this.h()},h(){fc(n.src,t=i[0].href)||gn(n,"src",t),gn(n,"title",s=i[0].title),gn(n,"alt",o=i[0].text),gn(n,"class","markdown-image svelte-z38cge")},m(u,l){ve(u,n,l)},p(u,[l]){l&1&&!fc(n.src,t=u[0].href)&&gn(n,"src",t),l&1&&s!==(s=u[0].title)&&gn(n,"title",s),l&1&&o!==(o=u[0].text)&&gn(n,"alt",o)},i:Xe,o:Xe,d(u){u&&K(n)}}}function ME(i,n,t){let{token:s}=n;const o=void 0,u=void 0;return i.$$set=l=>{"token"in l&&t(0,s=l.token)},[s,o,u]}class $E extends Be{constructor(n){super(),Pe(this,n,ME,UE,Fe,{token:0,options:1,renderers:2})}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function VE(i){let n;const t=i[4].default,s=nt(t,i,i[3],null);return{c(){s&&s.c()},l(o){s&&s.l(o)},m(o,u){s&&s.m(o,u),n=!0},p(o,[u]){s&&s.p&&(!n||u&8)&&tt(s,t,o,o[3],n?rt(t,o[3],u,null):it(o[3]),null)},i(o){n||(te(s,o),n=!0)},o(o){ue(s,o),n=!1},d(o){s&&s.d(o)}}}function GE(i,n,t){let{$$slots:s={},$$scope:o}=n;const u=void 0,l=void 0,d=void 0;return i.$$set=p=>{"$$scope"in p&&t(3,o=p.$$scope)},[u,l,d,o,s]}class Ac extends Be{constructor(n){super(),Pe(this,n,GE,VE,Fe,{token:0,options:1,renderers:2})}get token(){return this.$$.ctx[0]}get options(){return this.$$.ctx[1]}get renderers(){return this.$$.ctx[2]}}function _a(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let fi=_a();function Kc(i){fi=i}const Zc=/[&<>"']/,qE=new RegExp(Zc.source,"g"),ef=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,jE=new RegExp(ef.source,"g"),WE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},bc=i=>WE[i];function wn(i,n){if(n){if(Zc.test(i))return i.replace(qE,bc)}else if(ef.test(i))return i.replace(jE,bc);return i}const YE=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function QE(i){return i.replace(YE,(n,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const zE=/(^|[^\[])\^/g;function Te(i,n){i=typeof i=="string"?i:i.source,n=n||"";const t={replace:(s,o)=>(o=typeof o=="object"&&"source"in o?o.source:o,o=o.replace(zE,"$1"),i=i.replace(s,o),t),getRegex:()=>new RegExp(i,n)};return t}function wc(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const hs={exec:()=>null};function Sc(i,n){const t=i.replace(/\|/g,(u,l,d)=>{let p=!1,y=l;for(;--y>=0&&d[y]==="\\";)p=!p;return p?"|":" |"}),s=t.split(/ \|/);let o=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),n)if(s.length>n)s.splice(n);else for(;s.length<n;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(/\\\|/g,"|");return s}function ia(i,n,t){const s=i.length;if(s===0)return"";let o=0;for(;o<s;){const u=i.charAt(s-o-1);if(u===n&&!t)o++;else if(u!==n&&t)o++;else break}return i.slice(0,s-o)}function JE(i,n){if(i.indexOf(n[1])===-1)return-1;let t=0;for(let s=0;s<i.length;s++)if(i[s]==="\\")s++;else if(i[s]===n[0])t++;else if(i[s]===n[1]&&(t--,t<0))return s;return-1}function Cc(i,n,t,s){const o=n.href,u=n.title?wn(n.title):null,l=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){s.state.inLink=!0;const d={type:"link",raw:t,href:o,title:u,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,d}return{type:"image",raw:t,href:o,title:u,text:wn(l)}}function HE(i,n){const t=i.match(/^(\s+)(?:```)/);if(t===null)return n;const s=t[1];return n.split(`
`).map(o=>{const u=o.match(/^\s+/);if(u===null)return o;const[l]=u;return l.length>=s.length?o.slice(s.length):o}).join(`
`)}class ms{constructor(n){Ie(this,"options");Ie(this,"rules");Ie(this,"lexer");this.options=n||fi}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const s=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?s:ia(s,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const s=t[0],o=HE(s,t[3]||"");return{type:"code",raw:s,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:o}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let s=t[2].trim();if(/#$/.test(s)){const o=ia(s,"#");(this.options.pedantic||!o||/ $/.test(o))&&(s=o.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const s=t[0].replace(/^ *>[ \t]?/gm,""),o=this.lexer.state.top;this.lexer.state.top=!0;const u=this.lexer.blockTokens(s);return this.lexer.state.top=o,{type:"blockquote",raw:t[0],tokens:u,text:s}}}list(n){let t=this.rules.block.list.exec(n);if(t){let s=t[1].trim();const o=s.length>1,u={type:"list",raw:"",ordered:o,start:o?+s.slice(0,-1):"",loose:!1,items:[]};s=o?`\\d{1,9}\\${s.slice(-1)}`:`\\${s}`,this.options.pedantic&&(s=o?s:"[*+-]");const l=new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`);let d="",p="",y=!1;for(;n;){let T=!1;if(!(t=l.exec(n))||this.rules.block.hr.test(n))break;d=t[0],n=n.substring(d.length);let D=t[2].split(`
`,1)[0].replace(/^\t+/,he=>" ".repeat(3*he.length)),S=n.split(`
`,1)[0],R=0;this.options.pedantic?(R=2,p=D.trimStart()):(R=t[2].search(/[^ ]/),R=R>4?1:R,p=D.slice(R),R+=t[1].length);let x=!1;if(!D&&/^ *$/.test(S)&&(d+=S+`
`,n=n.substring(S.length+1),T=!0),!T){const he=new RegExp(`^ {0,${Math.min(3,R-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Ge=new RegExp(`^ {0,${Math.min(3,R-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),be=new RegExp(`^ {0,${Math.min(3,R-1)}}(?:\`\`\`|~~~)`),Ne=new RegExp(`^ {0,${Math.min(3,R-1)}}#`);for(;n;){const xe=n.split(`
`,1)[0];if(S=xe,this.options.pedantic&&(S=S.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),be.test(S)||Ne.test(S)||he.test(S)||Ge.test(n))break;if(S.search(/[^ ]/)>=R||!S.trim())p+=`
`+S.slice(R);else{if(x||D.search(/[^ ]/)>=4||be.test(D)||Ne.test(D)||Ge.test(D))break;p+=`
`+S}!x&&!S.trim()&&(x=!0),d+=xe+`
`,n=n.substring(xe.length+1),D=S.slice(R)}}u.loose||(y?u.loose=!0:/\n *\n *$/.test(d)&&(y=!0));let L=null,X;this.options.gfm&&(L=/^\[[ xX]\] /.exec(p),L&&(X=L[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),u.items.push({type:"list_item",raw:d,task:!!L,checked:X,loose:!1,text:p,tokens:[]}),u.raw+=d}u.items[u.items.length-1].raw=d.trimEnd(),u.items[u.items.length-1].text=p.trimEnd(),u.raw=u.raw.trimEnd();for(let T=0;T<u.items.length;T++)if(this.lexer.state.top=!1,u.items[T].tokens=this.lexer.blockTokens(u.items[T].text,[]),!u.loose){const D=u.items[T].tokens.filter(R=>R.type==="space"),S=D.length>0&&D.some(R=>/\n.*\n/.test(R.raw));u.loose=S}if(u.loose)for(let T=0;T<u.items.length;T++)u.items[T].loose=!0;return u}}html(n){const t=this.rules.block.html.exec(n);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(n){const t=this.rules.block.def.exec(n);if(t){const s=t[1].toLowerCase().replace(/\s+/g," "),o=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",u=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:s,raw:t[0],href:o,title:u}}}table(n){const t=this.rules.block.table.exec(n);if(t){if(!/[:|]/.test(t[2]))return;const s={type:"table",raw:t[0],header:Sc(t[1]).map(o=>({text:o,tokens:[]})),align:t[2].replace(/^\||\| *$/g,"").split("|"),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){let o=s.align.length,u,l,d,p;for(u=0;u<o;u++){const y=s.align[u];y&&(/^ *-+: *$/.test(y)?s.align[u]="right":/^ *:-+: *$/.test(y)?s.align[u]="center":/^ *:-+ *$/.test(y)?s.align[u]="left":s.align[u]=null)}for(o=s.rows.length,u=0;u<o;u++)s.rows[u]=Sc(s.rows[u],s.header.length).map(y=>({text:y,tokens:[]}));for(o=s.header.length,l=0;l<o;l++)s.header[l].tokens=this.lexer.inline(s.header[l].text);for(o=s.rows.length,l=0;l<o;l++)for(p=s.rows[l],d=0;d<p.length;d++)p[d].tokens=this.lexer.inline(p[d].text);return s}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const s=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:s,tokens:this.lexer.inline(s)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:wn(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const s=t[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const l=ia(s.slice(0,-1),"\\");if((s.length-l.length)%2===0)return}else{const l=JE(t[2],"()");if(l>-1){const p=(t[0].indexOf("!")===0?5:4)+t[1].length+l;t[2]=t[2].substring(0,l),t[0]=t[0].substring(0,p).trim(),t[3]=""}}let o=t[2],u="";if(this.options.pedantic){const l=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);l&&(o=l[1],u=l[3])}else u=t[3]?t[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(this.options.pedantic&&!/>$/.test(s)?o=o.slice(1):o=o.slice(1,-1)),Cc(t,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:u&&u.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let s;if((s=this.rules.inline.reflink.exec(n))||(s=this.rules.inline.nolink.exec(n))){let o=(s[2]||s[1]).replace(/\s+/g," ");if(o=t[o.toLowerCase()],!o){const u=s[0].charAt(0);return{type:"text",raw:u,text:u}}return Cc(s,o,s[0],this.lexer)}}emStrong(n,t,s=""){let o=this.rules.inline.emStrong.lDelim.exec(n);if(!o||o[3]&&s.match(/[\p{L}\p{N}]/u))return;if(!(o[1]||o[2]||"")||!s||this.rules.inline.punctuation.exec(s)){const l=[...o[0]].length-1;let d,p,y=l,T=0;const D=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(D.lastIndex=0,t=t.slice(-1*n.length+o[0].length-1);(o=D.exec(t))!=null;){if(d=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!d)continue;if(p=[...d].length,o[3]||o[4]){y+=p;continue}else if((o[5]||o[6])&&l%3&&!((l+p)%3)){T+=p;continue}if(y-=p,y>0)continue;p=Math.min(p,p+y+T);const S=[...n].slice(0,l+o.index+p+1).join("");if(Math.min(l,p)%2){const x=S.slice(1,-1);return{type:"em",raw:S,text:x,tokens:this.lexer.inlineTokens(x)}}const R=S.slice(2,-2);return{type:"strong",raw:S,text:R,tokens:this.lexer.inlineTokens(R)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let s=t[2].replace(/\n/g," ");const o=/[^ ]/.test(s),u=/^ /.test(s)&&/ $/.test(s);return o&&u&&(s=s.substring(1,s.length-1)),s=wn(s,!0),{type:"codespan",raw:t[0],text:s}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n){const t=this.rules.inline.autolink.exec(n);if(t){let s,o;return t[2]==="@"?(s=wn(t[1]),o="mailto:"+s):(s=wn(t[1]),o=s),{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}url(n){let t;if(t=this.rules.inline.url.exec(n)){let s,o;if(t[2]==="@")s=wn(t[0]),o="mailto:"+s;else{let u;do u=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(u!==t[0]);s=wn(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(n){const t=this.rules.inline.text.exec(n);if(t){let s;return this.lexer.state.inRawBlock?s=t[0]:s=wn(t[0]),{type:"text",raw:t[0],text:s}}}}const W={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:hs,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};W._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;W._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;W.def=Te(W.def).replace("label",W._label).replace("title",W._title).getRegex();W.bullet=/(?:[*+-]|\d{1,9}[.)])/;W.listItemStart=Te(/^( *)(bull) */).replace("bull",W.bullet).getRegex();W.list=Te(W.list).replace(/bull/g,W.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+W.def.source+")").getRegex();W._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";W._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;W.html=Te(W.html,"i").replace("comment",W._comment).replace("tag",W._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();W.lheading=Te(W.lheading).replace(/bull/g,W.bullet).getRegex();W.paragraph=Te(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.blockquote=Te(W.blockquote).replace("paragraph",W.paragraph).getRegex();W.normal={...W};W.gfm={...W.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};W.gfm.table=Te(W.gfm.table).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.gfm.paragraph=Te(W._paragraph).replace("hr",W.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",W.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",W._tag).getRegex();W.pedantic={...W.normal,html:Te(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",W._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:hs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Te(W.normal._paragraph).replace("hr",W.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",W.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const U={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:hs,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:hs,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};U._punctuation="\\p{P}$+<=>`^|~";U.punctuation=Te(U.punctuation,"u").replace(/punctuation/g,U._punctuation).getRegex();U.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;U.anyPunctuation=/\\[punct]/g;U._escapes=/\\([punct])/g;U._comment=Te(W._comment).replace("(?:-->|$)","-->").getRegex();U.emStrong.lDelim=Te(U.emStrong.lDelim,"u").replace(/punct/g,U._punctuation).getRegex();U.emStrong.rDelimAst=Te(U.emStrong.rDelimAst,"gu").replace(/punct/g,U._punctuation).getRegex();U.emStrong.rDelimUnd=Te(U.emStrong.rDelimUnd,"gu").replace(/punct/g,U._punctuation).getRegex();U.anyPunctuation=Te(U.anyPunctuation,"gu").replace(/punct/g,U._punctuation).getRegex();U._escapes=Te(U._escapes,"gu").replace(/punct/g,U._punctuation).getRegex();U._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;U._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;U.autolink=Te(U.autolink).replace("scheme",U._scheme).replace("email",U._email).getRegex();U._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;U.tag=Te(U.tag).replace("comment",U._comment).replace("attribute",U._attribute).getRegex();U._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;U._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;U._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;U.link=Te(U.link).replace("label",U._label).replace("href",U._href).replace("title",U._title).getRegex();U.reflink=Te(U.reflink).replace("label",U._label).replace("ref",W._label).getRegex();U.nolink=Te(U.nolink).replace("ref",W._label).getRegex();U.reflinkSearch=Te(U.reflinkSearch,"g").replace("reflink",U.reflink).replace("nolink",U.nolink).getRegex();U.normal={...U};U.pedantic={...U.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:Te(/^!?\[(label)\]\((.*?)\)/).replace("label",U._label).getRegex(),reflink:Te(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",U._label).getRegex()};U.gfm={...U.normal,escape:Te(U.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};U.gfm.url=Te(U.gfm.url,"i").replace("email",U.gfm._extended_email).getRegex();U.breaks={...U.gfm,br:Te(U.br).replace("{2,}","*").getRegex(),text:Te(U.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class Jn{constructor(n){Ie(this,"tokens");Ie(this,"options");Ie(this,"state");Ie(this,"tokenizer");Ie(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||fi,this.options.tokenizer=this.options.tokenizer||new ms,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:W.normal,inline:U.normal};this.options.pedantic?(t.block=W.pedantic,t.inline=U.pedantic):this.options.gfm&&(t.block=W.gfm,this.options.breaks?t.inline=U.breaks:t.inline=U.gfm),this.tokenizer.rules=t}static get rules(){return{block:W,inline:U}}static lex(n,t){return new Jn(t).lex(n)}static lexInline(n,t){return new Jn(t).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(d,p,y)=>p+"    ".repeat(y.length));let s,o,u,l;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>(s=d.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.space(n)){n=n.substring(s.raw.length),s.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(s);continue}if(s=this.tokenizer.code(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(s=this.tokenizer.fences(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&(o.type==="paragraph"||o.type==="text")?(o.raw+=`
`+s.raw,o.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(n)){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const p=n.slice(1);let y;this.options.extensions.startBlock.forEach(T=>{y=T.call({lexer:this},p),typeof y=="number"&&y>=0&&(d=Math.min(d,y))}),d<1/0&&d>=0&&(u=n.substring(0,d+1))}if(this.state.top&&(s=this.tokenizer.paragraph(u))){o=t[t.length-1],l&&o.type==="paragraph"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s),l=u.length!==n.length,n=n.substring(s.raw.length);continue}if(s=this.tokenizer.text(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&o.type==="text"?(o.raw+=`
`+s.raw,o.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):t.push(s);continue}if(n){const d="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let s,o,u,l=n,d,p,y;if(this.tokens.links){const T=Object.keys(this.tokens.links);if(T.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(l))!=null;)T.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.blockSkip.exec(l))!=null;)l=l.slice(0,d.index)+"["+"a".repeat(d[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(d=this.tokenizer.rules.inline.anyPunctuation.exec(l))!=null;)l=l.slice(0,d.index)+"++"+l.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(p||(y=""),p=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(T=>(s=T.call({lexer:this},n,t))?(n=n.substring(s.raw.length),t.push(s),!0):!1))){if(s=this.tokenizer.escape(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(n)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.link(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(s.raw.length),o=t[t.length-1],o&&s.type==="text"&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(n,l,y)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(n)){n=n.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(n)){n=n.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(n))){n=n.substring(s.raw.length),t.push(s);continue}if(u=n,this.options.extensions&&this.options.extensions.startInline){let T=1/0;const D=n.slice(1);let S;this.options.extensions.startInline.forEach(R=>{S=R.call({lexer:this},D),typeof S=="number"&&S>=0&&(T=Math.min(T,S))}),T<1/0&&T>=0&&(u=n.substring(0,T+1))}if(s=this.tokenizer.inlineText(u)){n=n.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(y=s.raw.slice(-1)),p=!0,o=t[t.length-1],o&&o.type==="text"?(o.raw+=s.raw,o.text+=s.text):t.push(s);continue}if(n){const T="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(T);break}else throw new Error(T)}}return t}}class gs{constructor(n){Ie(this,"options");this.options=n||fi}code(n,t,s){var u;const o=(u=(t||"").match(/^\S*/))==null?void 0:u[0];return n=n.replace(/\n$/,"")+`
`,o?'<pre><code class="language-'+wn(o)+'">'+(s?n:wn(n,!0))+`</code></pre>
`:"<pre><code>"+(s?n:wn(n,!0))+`</code></pre>
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
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,t,s){const o=wc(n);if(o===null)return s;n=o;let u='<a href="'+n+'"';return t&&(u+=' title="'+t+'"'),u+=">"+s+"</a>",u}image(n,t,s){const o=wc(n);if(o===null)return s;n=o;let u=`<img src="${n}" alt="${s}"`;return t&&(u+=` title="${t}"`),u+=">",u}text(n){return n}}class Aa{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,s){return""+s}image(n,t,s){return""+s}br(){return""}}class ft{constructor(n){Ie(this,"options");Ie(this,"renderer");Ie(this,"textRenderer");this.options=n||fi,this.options.renderer=this.options.renderer||new gs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Aa}static parse(n,t){return new ft(t).parse(n)}static parseInline(n,t){return new ft(t).parseInline(n)}parse(n,t=!0){let s="";for(let o=0;o<n.length;o++){const u=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=u,d=this.options.extensions.renderers[l.type].call({parser:this},l);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type)){s+=d||"";continue}}switch(u.type){case"space":continue;case"hr":{s+=this.renderer.hr();continue}case"heading":{const l=u;s+=this.renderer.heading(this.parseInline(l.tokens),l.depth,QE(this.parseInline(l.tokens,this.textRenderer)));continue}case"code":{const l=u;s+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{const l=u;let d="",p="";for(let T=0;T<l.header.length;T++)p+=this.renderer.tablecell(this.parseInline(l.header[T].tokens),{header:!0,align:l.align[T]});d+=this.renderer.tablerow(p);let y="";for(let T=0;T<l.rows.length;T++){const D=l.rows[T];p="";for(let S=0;S<D.length;S++)p+=this.renderer.tablecell(this.parseInline(D[S].tokens),{header:!1,align:l.align[S]});y+=this.renderer.tablerow(p)}s+=this.renderer.table(d,y);continue}case"blockquote":{const l=u,d=this.parse(l.tokens);s+=this.renderer.blockquote(d);continue}case"list":{const l=u,d=l.ordered,p=l.start,y=l.loose;let T="";for(let D=0;D<l.items.length;D++){const S=l.items[D],R=S.checked,x=S.task;let L="";if(S.task){const X=this.renderer.checkbox(!!R);y?S.tokens.length>0&&S.tokens[0].type==="paragraph"?(S.tokens[0].text=X+" "+S.tokens[0].text,S.tokens[0].tokens&&S.tokens[0].tokens.length>0&&S.tokens[0].tokens[0].type==="text"&&(S.tokens[0].tokens[0].text=X+" "+S.tokens[0].tokens[0].text)):S.tokens.unshift({type:"text",text:X+" "}):L+=X+" "}L+=this.parse(S.tokens,y),T+=this.renderer.listitem(L,x,!!R)}s+=this.renderer.list(T,d,p);continue}case"html":{const l=u;s+=this.renderer.html(l.text,l.block);continue}case"paragraph":{const l=u;s+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{let l=u,d=l.tokens?this.parseInline(l.tokens):l.text;for(;o+1<n.length&&n[o+1].type==="text";)l=n[++o],d+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);s+=t?this.renderer.paragraph(d):d;continue}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}parseInline(n,t){t=t||this.renderer;let s="";for(let o=0;o<n.length;o++){const u=n[o];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]){const l=this.options.extensions.renderers[u.type].call({parser:this},u);if(l!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(u.type)){s+=l||"";continue}}switch(u.type){case"escape":{const l=u;s+=t.text(l.text);break}case"html":{const l=u;s+=t.html(l.text);break}case"link":{const l=u;s+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break}case"image":{const l=u;s+=t.image(l.href,l.title,l.text);break}case"strong":{const l=u;s+=t.strong(this.parseInline(l.tokens,t));break}case"em":{const l=u;s+=t.em(this.parseInline(l.tokens,t));break}case"codespan":{const l=u;s+=t.codespan(l.text);break}case"br":{s+=t.br();break}case"del":{const l=u;s+=t.del(this.parseInline(l.tokens,t));break}case"text":{const l=u;s+=t.text(l.text);break}default:{const l='Token with "'+u.type+'" type was not found.';if(this.options.silent)return console.error(l),"";throw new Error(l)}}}return s}}class or{constructor(n){Ie(this,"options");this.options=n||fi}preprocess(n){return n}postprocess(n){return n}}Ie(or,"passThroughHooks",new Set(["preprocess","postprocess"]));var cr,fa,Ds,nf;class XE{constructor(...n){ea(this,cr);ea(this,Ds);Ie(this,"defaults",_a());Ie(this,"options",this.setOptions);Ie(this,"parse",ss(this,cr,fa).call(this,Jn.lex,ft.parse));Ie(this,"parseInline",ss(this,cr,fa).call(this,Jn.lexInline,ft.parseInline));Ie(this,"Parser",ft);Ie(this,"parser",ft.parse);Ie(this,"Renderer",gs);Ie(this,"TextRenderer",Aa);Ie(this,"Lexer",Jn);Ie(this,"lexer",Jn.lex);Ie(this,"Tokenizer",ms);Ie(this,"Hooks",or);this.use(...n)}walkTokens(n,t){var o,u;let s=[];for(const l of n)switch(s=s.concat(t.call(this,l)),l.type){case"table":{const d=l;for(const p of d.header)s=s.concat(this.walkTokens(p.tokens,t));for(const p of d.rows)for(const y of p)s=s.concat(this.walkTokens(y.tokens,t));break}case"list":{const d=l;s=s.concat(this.walkTokens(d.items,t));break}default:{const d=l;(u=(o=this.defaults.extensions)==null?void 0:o.childTokens)!=null&&u[d.type]?this.defaults.extensions.childTokens[d.type].forEach(p=>{s=s.concat(this.walkTokens(d[p],t))}):d.tokens&&(s=s.concat(this.walkTokens(d.tokens,t)))}}return s}use(...n){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(s=>{const o={...s};if(o.async=this.defaults.async||o.async||!1,s.extensions&&(s.extensions.forEach(u=>{if(!u.name)throw new Error("extension name required");if("renderer"in u){const l=t.renderers[u.name];l?t.renderers[u.name]=function(...d){let p=u.renderer.apply(this,d);return p===!1&&(p=l.apply(this,d)),p}:t.renderers[u.name]=u.renderer}if("tokenizer"in u){if(!u.level||u.level!=="block"&&u.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const l=t[u.level];l?l.unshift(u.tokenizer):t[u.level]=[u.tokenizer],u.start&&(u.level==="block"?t.startBlock?t.startBlock.push(u.start):t.startBlock=[u.start]:u.level==="inline"&&(t.startInline?t.startInline.push(u.start):t.startInline=[u.start]))}"childTokens"in u&&u.childTokens&&(t.childTokens[u.name]=u.childTokens)}),o.extensions=t),s.renderer){const u=this.defaults.renderer||new gs(this.defaults);for(const l in s.renderer){const d=s.renderer[l],p=l,y=u[p];u[p]=(...T)=>{let D=d.apply(u,T);return D===!1&&(D=y.apply(u,T)),D||""}}o.renderer=u}if(s.tokenizer){const u=this.defaults.tokenizer||new ms(this.defaults);for(const l in s.tokenizer){const d=s.tokenizer[l],p=l,y=u[p];u[p]=(...T)=>{let D=d.apply(u,T);return D===!1&&(D=y.apply(u,T)),D}}o.tokenizer=u}if(s.hooks){const u=this.defaults.hooks||new or;for(const l in s.hooks){const d=s.hooks[l],p=l,y=u[p];or.passThroughHooks.has(l)?u[p]=T=>{if(this.defaults.async)return Promise.resolve(d.call(u,T)).then(S=>y.call(u,S));const D=d.call(u,T);return y.call(u,D)}:u[p]=(...T)=>{let D=d.apply(u,T);return D===!1&&(D=y.apply(u,T)),D}}o.hooks=u}if(s.walkTokens){const u=this.defaults.walkTokens,l=s.walkTokens;o.walkTokens=function(d){let p=[];return p.push(l.call(this,d)),u&&(p=p.concat(u.call(this,d))),p}}this.defaults={...this.defaults,...o}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}}cr=new WeakSet,fa=function(n,t){return(s,o)=>{const u={...o},l={...this.defaults,...u};this.defaults.async===!0&&u.async===!1&&(l.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),l.async=!0);const d=ss(this,Ds,nf).call(this,!!l.silent,!!l.async);if(typeof s>"u"||s===null)return d(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return d(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(l.hooks&&(l.hooks.options=l),l.async)return Promise.resolve(l.hooks?l.hooks.preprocess(s):s).then(p=>n(p,l)).then(p=>l.walkTokens?Promise.all(this.walkTokens(p,l.walkTokens)).then(()=>p):p).then(p=>t(p,l)).then(p=>l.hooks?l.hooks.postprocess(p):p).catch(d);try{l.hooks&&(s=l.hooks.preprocess(s));const p=n(s,l);l.walkTokens&&this.walkTokens(p,l.walkTokens);let y=t(p,l);return l.hooks&&(y=l.hooks.postprocess(y)),y}catch(p){return d(p)}}},Ds=new WeakSet,nf=function(n,t){return s=>{if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const o="<p>An error occurred:</p><pre>"+wn(s.message+"",!0)+"</pre>";return t?Promise.resolve(o):o}if(t)return Promise.reject(s);throw s}};const ui=new XE;function De(i,n){return ui.parse(i,n)}De.options=De.setOptions=function(i){return ui.setOptions(i),De.defaults=ui.defaults,Kc(De.defaults),De};De.getDefaults=_a;De.defaults=fi;De.use=function(...i){return ui.use(...i),De.defaults=ui.defaults,Kc(De.defaults),De};De.walkTokens=function(i,n){return ui.walkTokens(i,n)};De.parseInline=ui.parseInline;De.Parser=ft;De.parser=ft.parse;De.Renderer=gs;De.TextRenderer=Aa;De.Lexer=Jn;De.lexer=Jn.lex;De.Tokenizer=ms;De.Hooks=or;De.parse=De;De.options;De.setOptions;De.use;De.walkTokens;De.parseInline;ft.parse;Jn.lex;const KE=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,ZE=Object.hasOwnProperty;class tf{constructor(){this.occurrences,this.reset()}slug(n,t){const s=this;let o=eI(n,t===!0);const u=o;for(;ZE.call(s.occurrences,o);)s.occurrences[u]++,o=u+"-"+s.occurrences[u];return s.occurrences[o]=0,o}reset(){this.occurrences=Object.create(null)}}function eI(i,n){return typeof i!="string"?"":(n||(i=i.toLowerCase()),i.replace(KE,"").replace(/ /g,"-"))}function nI(i){return new Jn().lex(i)}const tI=()=>({heading:BT,blockquote:MT,list:JT,list_item:KT,br:nE,code:rE,codespan:aE,table:cE,html:pE,paragraph:gE,link:EE,text:vE,def:bE,del:CE,em:OE,hr:xE,strong:PE,image:$E,space:Ac,escape:Ac}),iI=()=>({baseUrl:"/",slugger:new tf});function rI(){const i=console.warn;console.warn=n=>{n.includes("unknown prop")||n.includes("unexpected slot")||i(n)},kT(()=>{console.warn=i})}function sI(i){let n,t;return n=new _s({props:{tokens:i[0],renderers:i[1],options:i[2]}}),{c(){Wt(n.$$.fragment)},l(s){ci(n.$$.fragment,s)},m(s,o){Yt(n,s,o),t=!0},p(s,[o]){const u={};o&1&&(u.tokens=s[0]),o&2&&(u.renderers=s[1]),o&4&&(u.options=s[2]),n.$set(u)},i(s){t||(te(n.$$.fragment,s),t=!0)},o(s){ue(n.$$.fragment,s),t=!1},d(s){Qt(n,s)}}}function oI(i,n,t){rI();let{source:s}=n,{options:o={}}=n,{renderers:u={}}=n,l,d,p;return i.$$set=y=>{"source"in y&&t(3,s=y.source),"options"in y&&t(4,o=y.options),"renderers"in y&&t(5,u=y.renderers)},i.$$.update=()=>{i.$$.dirty&56&&(t(0,l=nI(s)),t(1,d={...tI(),...u}),t(2,p={...iI(),...o}))},[l,d,p,s,o,u]}class xv extends Be{constructor(n){super(),Pe(this,n,oI,sI,Fe,{source:3,options:4,renderers:5})}}const fr={joinUrlPaths:la,isRelative:ca,generatePathSegment:Hc};var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function aI(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function os(){return{convert:i=>i==null||i===""?null:String(i),asString:i=>String(i),type:i=>i.string().optional()}}function Fc(i){return{convert:n=>{if(typeof n=="object")return n;if(typeof n=="string"){const t=JSON.parse(n);return typeof t!="object"?null:t}return null},asString:n=>JSON.stringify(n),type:n=>n.record(i(n).optional()).optional()}}function as(i){return{convert:n=>{if(Array.isArray(n))return n;if(typeof n=="string"){const t=JSON.parse(n);return Array.isArray(t)?t:null}return null},asString:n=>JSON.stringify(n),type:n=>n.array(i(n)).optional()}}function Nc(i){return{convert:n=>n==null||!i.find(t=>t===n)?null:n,asString:n=>String(n),type:n=>n.enum(i).optional()}}function bn(i,n){const t=s=>n.convert(s[i]);return{name:uI(i),key:i,asEnv:s=>({[i]:n.asString(s)}),zod:{type:n.type},get:t,getOrDefault:(s,o)=>t(s)??o}}function uI(i){return i.toLowerCase().replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace("-","").replace("_",""))}var ba={APP_LOGO:bn("APP_LOGO",os()),APP_TITLE:bn("APP_TITLE",os()),APP_FAVICON:bn("APP_FAVICON",os()),SITE_ROOT:bn("SITE_ROOT",os()),SITE_META:bn("SITE_META",Fc(i=>i.string())),CUSTOM_STYLES:bn("CUSTOM_STYLES",as(i=>i.string())),FIELDS_SORTING:bn("FIELDS_SORTING",Nc(["default","alphabetical"])),ARGUMENTS_SORTING:bn("ARGUMENTS_SORTING",Nc(["default","alphabetical"])),QUERY_GENERATION_FACTORIES:bn("QUERY_GENERATION_FACTORIES",Fc(i=>i.union([i.string(),i.boolean(),i.number(),i.null(),i.record(i.unknown())]))),PAGES:bn("PAGES",as(i=>{const n=i.lazy(()=>i.object({title:i.string().min(1),content:i.union([i.array(n),i.string().min(1)])}));return n})),EXTERNAL_LINKS:bn("EXTERNAL_LINKS",as(i=>i.object({label:i.string().min(1),href:i.string().min(1),position:i.union([i.literal("header"),i.literal("navigation")]).optional(),kind:i.string().min(1).optional(),group:i.string().min(1).optional()}))),DIRECTIVES:bn("DIRECTIVES",as(i=>i.object({name:i.string().min(1),args:i.array(i.string())})))};function lI(){return{convert:i=>{if(i===null||i===void 0)return null;switch(typeof i){case"boolean":return i;case"string":const n=i.toLowerCase().trim();return n==="true"||n==="t"||n==="1";case"number":return i!==0;default:return null}},asString:i=>String(i),type:i=>i.boolean().optional()}}bn("MAGIDOC_GENERATE",lI());var ys={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ys.exports;(function(i,n){(function(){var t,s="4.17.21",o=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",d="Invalid `variable` option passed into `_.template`",p="__lodash_hash_undefined__",y=500,T="__lodash_placeholder__",D=1,S=2,R=4,x=1,L=2,X=1,he=2,Ge=4,be=8,Ne=16,xe=32,rn=64,Ke=128,mt=256,O=512,Z=30,sn="...",kt=800,Ht=16,hr=1,pi=2,mr=3,ot=1/0,$n=9007199254740991,hi=17976931348623157e292,Xt=0/0,Sn=4294967295,w=Sn-1,V=Sn>>>1,P=[["ary",Ke],["bind",X],["bindKey",he],["curry",be],["curryRight",Ne],["flip",O],["partial",xe],["partialRight",rn],["rearg",mt]],M="[object Arguments]",me="[object Array]",Ue="[object AsyncFunction]",ge="[object Boolean]",Cn="[object Date]",Li="[object DOMException]",xt="[object Error]",Ze="[object Function]",ka="[object GeneratorFunction]",Vn="[object Map]",Bi="[object Number]",Wf="[object Null]",gt="[object Object]",xa="[object Promise]",Yf="[object Proxy]",Pi="[object RegExp]",Gn="[object Set]",Ui="[object String]",gr="[object Symbol]",Qf="[object Undefined]",Mi="[object WeakMap]",zf="[object WeakSet]",$i="[object ArrayBuffer]",mi="[object DataView]",Rs="[object Float32Array]",ks="[object Float64Array]",xs="[object Int8Array]",Ls="[object Int16Array]",Bs="[object Int32Array]",Ps="[object Uint8Array]",Us="[object Uint8ClampedArray]",Ms="[object Uint16Array]",$s="[object Uint32Array]",Jf=/\b__p \+= '';/g,Hf=/\b(__p \+=) '' \+/g,Xf=/(__e\(.*?\)|\b__t\)) \+\n'';/g,La=/&(?:amp|lt|gt|quot|#39);/g,Ba=/[&<>"']/g,Kf=RegExp(La.source),Zf=RegExp(Ba.source),ed=/<%-([\s\S]+?)%>/g,nd=/<%([\s\S]+?)%>/g,Pa=/<%=([\s\S]+?)%>/g,td=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,id=/^\w*$/,rd=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Vs=/[\\^$.*+?()[\]{}|]/g,sd=RegExp(Vs.source),Gs=/^\s+/,od=/\s/,ad=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,ud=/\{\n\/\* \[wrapped with (.+)\] \*/,ld=/,? & /,cd=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,fd=/[()=,{}\[\]\/\s]/,dd=/\\(\\)?/g,pd=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ua=/\w*$/,hd=/^[-+]0x[0-9a-f]+$/i,md=/^0b[01]+$/i,gd=/^\[object .+?Constructor\]$/,yd=/^0o[0-7]+$/i,Td=/^(?:0|[1-9]\d*)$/,Ed=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,yr=/($^)/,Id=/['\n\r\u2028\u2029\\]/g,Tr="\\ud800-\\udfff",Dd="\\u0300-\\u036f",vd="\\ufe20-\\ufe2f",_d="\\u20d0-\\u20ff",Ma=Dd+vd+_d,$a="\\u2700-\\u27bf",Va="a-z\\xdf-\\xf6\\xf8-\\xff",Ad="\\xac\\xb1\\xd7\\xf7",bd="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wd="\\u2000-\\u206f",Sd=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ga="A-Z\\xc0-\\xd6\\xd8-\\xde",qa="\\ufe0e\\ufe0f",ja=Ad+bd+wd+Sd,qs="['’]",Cd="["+Tr+"]",Wa="["+ja+"]",Er="["+Ma+"]",Ya="\\d+",Fd="["+$a+"]",Qa="["+Va+"]",za="[^"+Tr+ja+Ya+$a+Va+Ga+"]",js="\\ud83c[\\udffb-\\udfff]",Nd="(?:"+Er+"|"+js+")",Ja="[^"+Tr+"]",Ws="(?:\\ud83c[\\udde6-\\uddff]){2}",Ys="[\\ud800-\\udbff][\\udc00-\\udfff]",gi="["+Ga+"]",Ha="\\u200d",Xa="(?:"+Qa+"|"+za+")",Od="(?:"+gi+"|"+za+")",Ka="(?:"+qs+"(?:d|ll|m|re|s|t|ve))?",Za="(?:"+qs+"(?:D|LL|M|RE|S|T|VE))?",eu=Nd+"?",nu="["+qa+"]?",Rd="(?:"+Ha+"(?:"+[Ja,Ws,Ys].join("|")+")"+nu+eu+")*",kd="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",xd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tu=nu+eu+Rd,Ld="(?:"+[Fd,Ws,Ys].join("|")+")"+tu,Bd="(?:"+[Ja+Er+"?",Er,Ws,Ys,Cd].join("|")+")",Pd=RegExp(qs,"g"),Ud=RegExp(Er,"g"),Qs=RegExp(js+"(?="+js+")|"+Bd+tu,"g"),Md=RegExp([gi+"?"+Qa+"+"+Ka+"(?="+[Wa,gi,"$"].join("|")+")",Od+"+"+Za+"(?="+[Wa,gi+Xa,"$"].join("|")+")",gi+"?"+Xa+"+"+Ka,gi+"+"+Za,xd,kd,Ya,Ld].join("|"),"g"),$d=RegExp("["+Ha+Tr+Ma+qa+"]"),Vd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Gd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],qd=-1,Se={};Se[Rs]=Se[ks]=Se[xs]=Se[Ls]=Se[Bs]=Se[Ps]=Se[Us]=Se[Ms]=Se[$s]=!0,Se[M]=Se[me]=Se[$i]=Se[ge]=Se[mi]=Se[Cn]=Se[xt]=Se[Ze]=Se[Vn]=Se[Bi]=Se[gt]=Se[Pi]=Se[Gn]=Se[Ui]=Se[Mi]=!1;var we={};we[M]=we[me]=we[$i]=we[mi]=we[ge]=we[Cn]=we[Rs]=we[ks]=we[xs]=we[Ls]=we[Bs]=we[Vn]=we[Bi]=we[gt]=we[Pi]=we[Gn]=we[Ui]=we[gr]=we[Ps]=we[Us]=we[Ms]=we[$s]=!0,we[xt]=we[Ze]=we[Mi]=!1;var jd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Wd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Yd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Qd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},zd=parseFloat,Jd=parseInt,iu=typeof tr=="object"&&tr&&tr.Object===Object&&tr,Hd=typeof self=="object"&&self&&self.Object===Object&&self,Je=iu||Hd||Function("return this")(),zs=n&&!n.nodeType&&n,Kt=zs&&!0&&i&&!i.nodeType&&i,ru=Kt&&Kt.exports===zs,Js=ru&&iu.process,Fn=function(){try{var I=Kt&&Kt.require&&Kt.require("util").types;return I||Js&&Js.binding&&Js.binding("util")}catch{}}(),su=Fn&&Fn.isArrayBuffer,ou=Fn&&Fn.isDate,au=Fn&&Fn.isMap,uu=Fn&&Fn.isRegExp,lu=Fn&&Fn.isSet,cu=Fn&&Fn.isTypedArray;function En(I,b,A){switch(A.length){case 0:return I.call(b);case 1:return I.call(b,A[0]);case 2:return I.call(b,A[0],A[1]);case 3:return I.call(b,A[0],A[1],A[2])}return I.apply(b,A)}function Xd(I,b,A,$){for(var ee=-1,pe=I==null?0:I.length;++ee<pe;){var We=I[ee];b($,We,A(We),I)}return $}function Nn(I,b){for(var A=-1,$=I==null?0:I.length;++A<$&&b(I[A],A,I)!==!1;);return I}function Kd(I,b){for(var A=I==null?0:I.length;A--&&b(I[A],A,I)!==!1;);return I}function fu(I,b){for(var A=-1,$=I==null?0:I.length;++A<$;)if(!b(I[A],A,I))return!1;return!0}function Lt(I,b){for(var A=-1,$=I==null?0:I.length,ee=0,pe=[];++A<$;){var We=I[A];b(We,A,I)&&(pe[ee++]=We)}return pe}function Ir(I,b){var A=I==null?0:I.length;return!!A&&yi(I,b,0)>-1}function Hs(I,b,A){for(var $=-1,ee=I==null?0:I.length;++$<ee;)if(A(b,I[$]))return!0;return!1}function Ce(I,b){for(var A=-1,$=I==null?0:I.length,ee=Array($);++A<$;)ee[A]=b(I[A],A,I);return ee}function Bt(I,b){for(var A=-1,$=b.length,ee=I.length;++A<$;)I[ee+A]=b[A];return I}function Xs(I,b,A,$){var ee=-1,pe=I==null?0:I.length;for($&&pe&&(A=I[++ee]);++ee<pe;)A=b(A,I[ee],ee,I);return A}function Zd(I,b,A,$){var ee=I==null?0:I.length;for($&&ee&&(A=I[--ee]);ee--;)A=b(A,I[ee],ee,I);return A}function Ks(I,b){for(var A=-1,$=I==null?0:I.length;++A<$;)if(b(I[A],A,I))return!0;return!1}var ep=Zs("length");function np(I){return I.split("")}function tp(I){return I.match(cd)||[]}function du(I,b,A){var $;return A(I,function(ee,pe,We){if(b(ee,pe,We))return $=pe,!1}),$}function Dr(I,b,A,$){for(var ee=I.length,pe=A+($?1:-1);$?pe--:++pe<ee;)if(b(I[pe],pe,I))return pe;return-1}function yi(I,b,A){return b===b?hp(I,b,A):Dr(I,pu,A)}function ip(I,b,A,$){for(var ee=A-1,pe=I.length;++ee<pe;)if($(I[ee],b))return ee;return-1}function pu(I){return I!==I}function hu(I,b){var A=I==null?0:I.length;return A?no(I,b)/A:Xt}function Zs(I){return function(b){return b==null?t:b[I]}}function eo(I){return function(b){return I==null?t:I[b]}}function mu(I,b,A,$,ee){return ee(I,function(pe,We,_e){A=$?($=!1,pe):b(A,pe,We,_e)}),A}function rp(I,b){var A=I.length;for(I.sort(b);A--;)I[A]=I[A].value;return I}function no(I,b){for(var A,$=-1,ee=I.length;++$<ee;){var pe=b(I[$]);pe!==t&&(A=A===t?pe:A+pe)}return A}function to(I,b){for(var A=-1,$=Array(I);++A<I;)$[A]=b(A);return $}function sp(I,b){return Ce(b,function(A){return[A,I[A]]})}function gu(I){return I&&I.slice(0,Iu(I)+1).replace(Gs,"")}function In(I){return function(b){return I(b)}}function io(I,b){return Ce(b,function(A){return I[A]})}function Vi(I,b){return I.has(b)}function yu(I,b){for(var A=-1,$=I.length;++A<$&&yi(b,I[A],0)>-1;);return A}function Tu(I,b){for(var A=I.length;A--&&yi(b,I[A],0)>-1;);return A}function op(I,b){for(var A=I.length,$=0;A--;)I[A]===b&&++$;return $}var ap=eo(jd),up=eo(Wd);function lp(I){return"\\"+Qd[I]}function cp(I,b){return I==null?t:I[b]}function Ti(I){return $d.test(I)}function fp(I){return Vd.test(I)}function dp(I){for(var b,A=[];!(b=I.next()).done;)A.push(b.value);return A}function ro(I){var b=-1,A=Array(I.size);return I.forEach(function($,ee){A[++b]=[ee,$]}),A}function Eu(I,b){return function(A){return I(b(A))}}function Pt(I,b){for(var A=-1,$=I.length,ee=0,pe=[];++A<$;){var We=I[A];(We===b||We===T)&&(I[A]=T,pe[ee++]=A)}return pe}function vr(I){var b=-1,A=Array(I.size);return I.forEach(function($){A[++b]=$}),A}function pp(I){var b=-1,A=Array(I.size);return I.forEach(function($){A[++b]=[$,$]}),A}function hp(I,b,A){for(var $=A-1,ee=I.length;++$<ee;)if(I[$]===b)return $;return-1}function mp(I,b,A){for(var $=A+1;$--;)if(I[$]===b)return $;return $}function Ei(I){return Ti(I)?yp(I):ep(I)}function qn(I){return Ti(I)?Tp(I):np(I)}function Iu(I){for(var b=I.length;b--&&od.test(I.charAt(b)););return b}var gp=eo(Yd);function yp(I){for(var b=Qs.lastIndex=0;Qs.test(I);)++b;return b}function Tp(I){return I.match(Qs)||[]}function Ep(I){return I.match(Md)||[]}var Ip=function I(b){b=b==null?Je:Ii.defaults(Je.Object(),b,Ii.pick(Je,Gd));var A=b.Array,$=b.Date,ee=b.Error,pe=b.Function,We=b.Math,_e=b.Object,so=b.RegExp,Dp=b.String,On=b.TypeError,_r=A.prototype,vp=pe.prototype,Di=_e.prototype,Ar=b["__core-js_shared__"],br=vp.toString,Ee=Di.hasOwnProperty,_p=0,Du=function(){var e=/[^.]+$/.exec(Ar&&Ar.keys&&Ar.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),wr=Di.toString,Ap=br.call(_e),bp=Je._,wp=so("^"+br.call(Ee).replace(Vs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Sr=ru?b.Buffer:t,Ut=b.Symbol,Cr=b.Uint8Array,vu=Sr?Sr.allocUnsafe:t,Fr=Eu(_e.getPrototypeOf,_e),_u=_e.create,Au=Di.propertyIsEnumerable,Nr=_r.splice,bu=Ut?Ut.isConcatSpreadable:t,Gi=Ut?Ut.iterator:t,Zt=Ut?Ut.toStringTag:t,Or=function(){try{var e=ri(_e,"defineProperty");return e({},"",{}),e}catch{}}(),Sp=b.clearTimeout!==Je.clearTimeout&&b.clearTimeout,Cp=$&&$.now!==Je.Date.now&&$.now,Fp=b.setTimeout!==Je.setTimeout&&b.setTimeout,Rr=We.ceil,kr=We.floor,oo=_e.getOwnPropertySymbols,Np=Sr?Sr.isBuffer:t,wu=b.isFinite,Op=_r.join,Rp=Eu(_e.keys,_e),Ye=We.max,en=We.min,kp=$.now,xp=b.parseInt,Su=We.random,Lp=_r.reverse,ao=ri(b,"DataView"),qi=ri(b,"Map"),uo=ri(b,"Promise"),vi=ri(b,"Set"),ji=ri(b,"WeakMap"),Wi=ri(_e,"create"),xr=ji&&new ji,_i={},Bp=si(ao),Pp=si(qi),Up=si(uo),Mp=si(vi),$p=si(ji),Lr=Ut?Ut.prototype:t,Yi=Lr?Lr.valueOf:t,Cu=Lr?Lr.toString:t;function h(e){if(Le(e)&&!ne(e)&&!(e instanceof le)){if(e instanceof Rn)return e;if(Ee.call(e,"__wrapped__"))return Fl(e)}return new Rn(e)}var Ai=function(){function e(){}return function(r){if(!Oe(r))return{};if(_u)return _u(r);e.prototype=r;var a=new e;return e.prototype=t,a}}();function Br(){}function Rn(e,r){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=t}h.templateSettings={escape:ed,evaluate:nd,interpolate:Pa,variable:"",imports:{_:h}},h.prototype=Br.prototype,h.prototype.constructor=h,Rn.prototype=Ai(Br.prototype),Rn.prototype.constructor=Rn;function le(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Sn,this.__views__=[]}function Vp(){var e=new le(this.__wrapped__);return e.__actions__=dn(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=dn(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=dn(this.__views__),e}function Gp(){if(this.__filtered__){var e=new le(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function qp(){var e=this.__wrapped__.value(),r=this.__dir__,a=ne(e),c=r<0,f=a?e.length:0,m=nm(0,f,this.__views__),g=m.start,E=m.end,v=E-g,C=c?E:g-1,F=this.__iteratees__,k=F.length,B=0,q=en(v,this.__takeCount__);if(!a||!c&&f==v&&q==v)return Ku(e,this.__actions__);var J=[];e:for(;v--&&B<q;){C+=r;for(var re=-1,H=e[C];++re<k;){var oe=F[re],fe=oe.iteratee,_n=oe.type,un=fe(H);if(_n==pi)H=un;else if(!un){if(_n==hr)continue e;break e}}J[B++]=H}return J}le.prototype=Ai(Br.prototype),le.prototype.constructor=le;function ei(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var c=e[r];this.set(c[0],c[1])}}function jp(){this.__data__=Wi?Wi(null):{},this.size=0}function Wp(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}function Yp(e){var r=this.__data__;if(Wi){var a=r[e];return a===p?t:a}return Ee.call(r,e)?r[e]:t}function Qp(e){var r=this.__data__;return Wi?r[e]!==t:Ee.call(r,e)}function zp(e,r){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=Wi&&r===t?p:r,this}ei.prototype.clear=jp,ei.prototype.delete=Wp,ei.prototype.get=Yp,ei.prototype.has=Qp,ei.prototype.set=zp;function yt(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var c=e[r];this.set(c[0],c[1])}}function Jp(){this.__data__=[],this.size=0}function Hp(e){var r=this.__data__,a=Pr(r,e);if(a<0)return!1;var c=r.length-1;return a==c?r.pop():Nr.call(r,a,1),--this.size,!0}function Xp(e){var r=this.__data__,a=Pr(r,e);return a<0?t:r[a][1]}function Kp(e){return Pr(this.__data__,e)>-1}function Zp(e,r){var a=this.__data__,c=Pr(a,e);return c<0?(++this.size,a.push([e,r])):a[c][1]=r,this}yt.prototype.clear=Jp,yt.prototype.delete=Hp,yt.prototype.get=Xp,yt.prototype.has=Kp,yt.prototype.set=Zp;function Tt(e){var r=-1,a=e==null?0:e.length;for(this.clear();++r<a;){var c=e[r];this.set(c[0],c[1])}}function eh(){this.size=0,this.__data__={hash:new ei,map:new(qi||yt),string:new ei}}function nh(e){var r=Jr(this,e).delete(e);return this.size-=r?1:0,r}function th(e){return Jr(this,e).get(e)}function ih(e){return Jr(this,e).has(e)}function rh(e,r){var a=Jr(this,e),c=a.size;return a.set(e,r),this.size+=a.size==c?0:1,this}Tt.prototype.clear=eh,Tt.prototype.delete=nh,Tt.prototype.get=th,Tt.prototype.has=ih,Tt.prototype.set=rh;function ni(e){var r=-1,a=e==null?0:e.length;for(this.__data__=new Tt;++r<a;)this.add(e[r])}function sh(e){return this.__data__.set(e,p),this}function oh(e){return this.__data__.has(e)}ni.prototype.add=ni.prototype.push=sh,ni.prototype.has=oh;function jn(e){var r=this.__data__=new yt(e);this.size=r.size}function ah(){this.__data__=new yt,this.size=0}function uh(e){var r=this.__data__,a=r.delete(e);return this.size=r.size,a}function lh(e){return this.__data__.get(e)}function ch(e){return this.__data__.has(e)}function fh(e,r){var a=this.__data__;if(a instanceof yt){var c=a.__data__;if(!qi||c.length<o-1)return c.push([e,r]),this.size=++a.size,this;a=this.__data__=new Tt(c)}return a.set(e,r),this.size=a.size,this}jn.prototype.clear=ah,jn.prototype.delete=uh,jn.prototype.get=lh,jn.prototype.has=ch,jn.prototype.set=fh;function Fu(e,r){var a=ne(e),c=!a&&oi(e),f=!a&&!c&&qt(e),m=!a&&!c&&!f&&Ci(e),g=a||c||f||m,E=g?to(e.length,Dp):[],v=E.length;for(var C in e)(r||Ee.call(e,C))&&!(g&&(C=="length"||f&&(C=="offset"||C=="parent")||m&&(C=="buffer"||C=="byteLength"||C=="byteOffset")||vt(C,v)))&&E.push(C);return E}function Nu(e){var r=e.length;return r?e[Io(0,r-1)]:t}function dh(e,r){return Hr(dn(e),ti(r,0,e.length))}function ph(e){return Hr(dn(e))}function lo(e,r,a){(a!==t&&!Wn(e[r],a)||a===t&&!(r in e))&&Et(e,r,a)}function Qi(e,r,a){var c=e[r];(!(Ee.call(e,r)&&Wn(c,a))||a===t&&!(r in e))&&Et(e,r,a)}function Pr(e,r){for(var a=e.length;a--;)if(Wn(e[a][0],r))return a;return-1}function hh(e,r,a,c){return Mt(e,function(f,m,g){r(c,f,a(f),g)}),c}function Ou(e,r){return e&&ut(r,Qe(r),e)}function mh(e,r){return e&&ut(r,hn(r),e)}function Et(e,r,a){r=="__proto__"&&Or?Or(e,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[r]=a}function co(e,r){for(var a=-1,c=r.length,f=A(c),m=e==null;++a<c;)f[a]=m?t:Wo(e,r[a]);return f}function ti(e,r,a){return e===e&&(a!==t&&(e=e<=a?e:a),r!==t&&(e=e>=r?e:r)),e}function kn(e,r,a,c,f,m){var g,E=r&D,v=r&S,C=r&R;if(a&&(g=f?a(e,c,f,m):a(e)),g!==t)return g;if(!Oe(e))return e;var F=ne(e);if(F){if(g=im(e),!E)return dn(e,g)}else{var k=nn(e),B=k==Ze||k==ka;if(qt(e))return nl(e,E);if(k==gt||k==M||B&&!f){if(g=v||B?{}:Il(e),!E)return v?Yh(e,mh(g,e)):Wh(e,Ou(g,e))}else{if(!we[k])return f?e:{};g=rm(e,k,E)}}m||(m=new jn);var q=m.get(e);if(q)return q;m.set(e,g),Jl(e)?e.forEach(function(H){g.add(kn(H,r,a,H,e,m))}):Ql(e)&&e.forEach(function(H,oe){g.set(oe,kn(H,r,a,oe,e,m))});var J=C?v?Oo:No:v?hn:Qe,re=F?t:J(e);return Nn(re||e,function(H,oe){re&&(oe=H,H=e[oe]),Qi(g,oe,kn(H,r,a,oe,e,m))}),g}function gh(e){var r=Qe(e);return function(a){return Ru(a,e,r)}}function Ru(e,r,a){var c=a.length;if(e==null)return!c;for(e=_e(e);c--;){var f=a[c],m=r[f],g=e[f];if(g===t&&!(f in e)||!m(g))return!1}return!0}function ku(e,r,a){if(typeof e!="function")throw new On(l);return er(function(){e.apply(t,a)},r)}function zi(e,r,a,c){var f=-1,m=Ir,g=!0,E=e.length,v=[],C=r.length;if(!E)return v;a&&(r=Ce(r,In(a))),c?(m=Hs,g=!1):r.length>=o&&(m=Vi,g=!1,r=new ni(r));e:for(;++f<E;){var F=e[f],k=a==null?F:a(F);if(F=c||F!==0?F:0,g&&k===k){for(var B=C;B--;)if(r[B]===k)continue e;v.push(F)}else m(r,k,c)||v.push(F)}return v}var Mt=ol(at),xu=ol(po,!0);function yh(e,r){var a=!0;return Mt(e,function(c,f,m){return a=!!r(c,f,m),a}),a}function Ur(e,r,a){for(var c=-1,f=e.length;++c<f;){var m=e[c],g=r(m);if(g!=null&&(E===t?g===g&&!vn(g):a(g,E)))var E=g,v=m}return v}function Th(e,r,a,c){var f=e.length;for(a=ie(a),a<0&&(a=-a>f?0:f+a),c=c===t||c>f?f:ie(c),c<0&&(c+=f),c=a>c?0:Xl(c);a<c;)e[a++]=r;return e}function Lu(e,r){var a=[];return Mt(e,function(c,f,m){r(c,f,m)&&a.push(c)}),a}function He(e,r,a,c,f){var m=-1,g=e.length;for(a||(a=om),f||(f=[]);++m<g;){var E=e[m];r>0&&a(E)?r>1?He(E,r-1,a,c,f):Bt(f,E):c||(f[f.length]=E)}return f}var fo=al(),Bu=al(!0);function at(e,r){return e&&fo(e,r,Qe)}function po(e,r){return e&&Bu(e,r,Qe)}function Mr(e,r){return Lt(r,function(a){return _t(e[a])})}function ii(e,r){r=Vt(r,e);for(var a=0,c=r.length;e!=null&&a<c;)e=e[lt(r[a++])];return a&&a==c?e:t}function Pu(e,r,a){var c=r(e);return ne(e)?c:Bt(c,a(e))}function on(e){return e==null?e===t?Qf:Wf:Zt&&Zt in _e(e)?em(e):pm(e)}function ho(e,r){return e>r}function Eh(e,r){return e!=null&&Ee.call(e,r)}function Ih(e,r){return e!=null&&r in _e(e)}function Dh(e,r,a){return e>=en(r,a)&&e<Ye(r,a)}function mo(e,r,a){for(var c=a?Hs:Ir,f=e[0].length,m=e.length,g=m,E=A(m),v=1/0,C=[];g--;){var F=e[g];g&&r&&(F=Ce(F,In(r))),v=en(F.length,v),E[g]=!a&&(r||f>=120&&F.length>=120)?new ni(g&&F):t}F=e[0];var k=-1,B=E[0];e:for(;++k<f&&C.length<v;){var q=F[k],J=r?r(q):q;if(q=a||q!==0?q:0,!(B?Vi(B,J):c(C,J,a))){for(g=m;--g;){var re=E[g];if(!(re?Vi(re,J):c(e[g],J,a)))continue e}B&&B.push(J),C.push(q)}}return C}function vh(e,r,a,c){return at(e,function(f,m,g){r(c,a(f),m,g)}),c}function Ji(e,r,a){r=Vt(r,e),e=Al(e,r);var c=e==null?e:e[lt(Ln(r))];return c==null?t:En(c,e,a)}function Uu(e){return Le(e)&&on(e)==M}function _h(e){return Le(e)&&on(e)==$i}function Ah(e){return Le(e)&&on(e)==Cn}function Hi(e,r,a,c,f){return e===r?!0:e==null||r==null||!Le(e)&&!Le(r)?e!==e&&r!==r:bh(e,r,a,c,Hi,f)}function bh(e,r,a,c,f,m){var g=ne(e),E=ne(r),v=g?me:nn(e),C=E?me:nn(r);v=v==M?gt:v,C=C==M?gt:C;var F=v==gt,k=C==gt,B=v==C;if(B&&qt(e)){if(!qt(r))return!1;g=!0,F=!1}if(B&&!F)return m||(m=new jn),g||Ci(e)?yl(e,r,a,c,f,m):Kh(e,r,v,a,c,f,m);if(!(a&x)){var q=F&&Ee.call(e,"__wrapped__"),J=k&&Ee.call(r,"__wrapped__");if(q||J){var re=q?e.value():e,H=J?r.value():r;return m||(m=new jn),f(re,H,a,c,m)}}return B?(m||(m=new jn),Zh(e,r,a,c,f,m)):!1}function wh(e){return Le(e)&&nn(e)==Vn}function go(e,r,a,c){var f=a.length,m=f,g=!c;if(e==null)return!m;for(e=_e(e);f--;){var E=a[f];if(g&&E[2]?E[1]!==e[E[0]]:!(E[0]in e))return!1}for(;++f<m;){E=a[f];var v=E[0],C=e[v],F=E[1];if(g&&E[2]){if(C===t&&!(v in e))return!1}else{var k=new jn;if(c)var B=c(C,F,v,e,r,k);if(!(B===t?Hi(F,C,x|L,c,k):B))return!1}}return!0}function Mu(e){if(!Oe(e)||um(e))return!1;var r=_t(e)?wp:gd;return r.test(si(e))}function Sh(e){return Le(e)&&on(e)==Pi}function Ch(e){return Le(e)&&nn(e)==Gn}function Fh(e){return Le(e)&&ts(e.length)&&!!Se[on(e)]}function $u(e){return typeof e=="function"?e:e==null?mn:typeof e=="object"?ne(e)?qu(e[0],e[1]):Gu(e):uc(e)}function yo(e){if(!Zi(e))return Rp(e);var r=[];for(var a in _e(e))Ee.call(e,a)&&a!="constructor"&&r.push(a);return r}function Nh(e){if(!Oe(e))return dm(e);var r=Zi(e),a=[];for(var c in e)c=="constructor"&&(r||!Ee.call(e,c))||a.push(c);return a}function To(e,r){return e<r}function Vu(e,r){var a=-1,c=pn(e)?A(e.length):[];return Mt(e,function(f,m,g){c[++a]=r(f,m,g)}),c}function Gu(e){var r=ko(e);return r.length==1&&r[0][2]?vl(r[0][0],r[0][1]):function(a){return a===e||go(a,e,r)}}function qu(e,r){return Lo(e)&&Dl(r)?vl(lt(e),r):function(a){var c=Wo(a,e);return c===t&&c===r?Yo(a,e):Hi(r,c,x|L)}}function $r(e,r,a,c,f){e!==r&&fo(r,function(m,g){if(f||(f=new jn),Oe(m))Oh(e,r,g,a,$r,c,f);else{var E=c?c(Po(e,g),m,g+"",e,r,f):t;E===t&&(E=m),lo(e,g,E)}},hn)}function Oh(e,r,a,c,f,m,g){var E=Po(e,a),v=Po(r,a),C=g.get(v);if(C){lo(e,a,C);return}var F=m?m(E,v,a+"",e,r,g):t,k=F===t;if(k){var B=ne(v),q=!B&&qt(v),J=!B&&!q&&Ci(v);F=v,B||q||J?ne(E)?F=E:Me(E)?F=dn(E):q?(k=!1,F=nl(v,!0)):J?(k=!1,F=tl(v,!0)):F=[]:nr(v)||oi(v)?(F=E,oi(E)?F=Kl(E):(!Oe(E)||_t(E))&&(F=Il(v))):k=!1}k&&(g.set(v,F),f(F,v,c,m,g),g.delete(v)),lo(e,a,F)}function ju(e,r){var a=e.length;if(a)return r+=r<0?a:0,vt(r,a)?e[r]:t}function Wu(e,r,a){r.length?r=Ce(r,function(m){return ne(m)?function(g){return ii(g,m.length===1?m[0]:m)}:m}):r=[mn];var c=-1;r=Ce(r,In(z()));var f=Vu(e,function(m,g,E){var v=Ce(r,function(C){return C(m)});return{criteria:v,index:++c,value:m}});return rp(f,function(m,g){return jh(m,g,a)})}function Rh(e,r){return Yu(e,r,function(a,c){return Yo(e,c)})}function Yu(e,r,a){for(var c=-1,f=r.length,m={};++c<f;){var g=r[c],E=ii(e,g);a(E,g)&&Xi(m,Vt(g,e),E)}return m}function kh(e){return function(r){return ii(r,e)}}function Eo(e,r,a,c){var f=c?ip:yi,m=-1,g=r.length,E=e;for(e===r&&(r=dn(r)),a&&(E=Ce(e,In(a)));++m<g;)for(var v=0,C=r[m],F=a?a(C):C;(v=f(E,F,v,c))>-1;)E!==e&&Nr.call(E,v,1),Nr.call(e,v,1);return e}function Qu(e,r){for(var a=e?r.length:0,c=a-1;a--;){var f=r[a];if(a==c||f!==m){var m=f;vt(f)?Nr.call(e,f,1):_o(e,f)}}return e}function Io(e,r){return e+kr(Su()*(r-e+1))}function xh(e,r,a,c){for(var f=-1,m=Ye(Rr((r-e)/(a||1)),0),g=A(m);m--;)g[c?m:++f]=e,e+=a;return g}function Do(e,r){var a="";if(!e||r<1||r>$n)return a;do r%2&&(a+=e),r=kr(r/2),r&&(e+=e);while(r);return a}function se(e,r){return Uo(_l(e,r,mn),e+"")}function Lh(e){return Nu(Fi(e))}function Bh(e,r){var a=Fi(e);return Hr(a,ti(r,0,a.length))}function Xi(e,r,a,c){if(!Oe(e))return e;r=Vt(r,e);for(var f=-1,m=r.length,g=m-1,E=e;E!=null&&++f<m;){var v=lt(r[f]),C=a;if(v==="__proto__"||v==="constructor"||v==="prototype")return e;if(f!=g){var F=E[v];C=c?c(F,v,E):t,C===t&&(C=Oe(F)?F:vt(r[f+1])?[]:{})}Qi(E,v,C),E=E[v]}return e}var zu=xr?function(e,r){return xr.set(e,r),e}:mn,Ph=Or?function(e,r){return Or(e,"toString",{configurable:!0,enumerable:!1,value:zo(r),writable:!0})}:mn;function Uh(e){return Hr(Fi(e))}function xn(e,r,a){var c=-1,f=e.length;r<0&&(r=-r>f?0:f+r),a=a>f?f:a,a<0&&(a+=f),f=r>a?0:a-r>>>0,r>>>=0;for(var m=A(f);++c<f;)m[c]=e[c+r];return m}function Mh(e,r){var a;return Mt(e,function(c,f,m){return a=r(c,f,m),!a}),!!a}function Vr(e,r,a){var c=0,f=e==null?c:e.length;if(typeof r=="number"&&r===r&&f<=V){for(;c<f;){var m=c+f>>>1,g=e[m];g!==null&&!vn(g)&&(a?g<=r:g<r)?c=m+1:f=m}return f}return vo(e,r,mn,a)}function vo(e,r,a,c){var f=0,m=e==null?0:e.length;if(m===0)return 0;r=a(r);for(var g=r!==r,E=r===null,v=vn(r),C=r===t;f<m;){var F=kr((f+m)/2),k=a(e[F]),B=k!==t,q=k===null,J=k===k,re=vn(k);if(g)var H=c||J;else C?H=J&&(c||B):E?H=J&&B&&(c||!q):v?H=J&&B&&!q&&(c||!re):q||re?H=!1:H=c?k<=r:k<r;H?f=F+1:m=F}return en(m,w)}function Ju(e,r){for(var a=-1,c=e.length,f=0,m=[];++a<c;){var g=e[a],E=r?r(g):g;if(!a||!Wn(E,v)){var v=E;m[f++]=g===0?0:g}}return m}function Hu(e){return typeof e=="number"?e:vn(e)?Xt:+e}function Dn(e){if(typeof e=="string")return e;if(ne(e))return Ce(e,Dn)+"";if(vn(e))return Cu?Cu.call(e):"";var r=e+"";return r=="0"&&1/e==-ot?"-0":r}function $t(e,r,a){var c=-1,f=Ir,m=e.length,g=!0,E=[],v=E;if(a)g=!1,f=Hs;else if(m>=o){var C=r?null:Hh(e);if(C)return vr(C);g=!1,f=Vi,v=new ni}else v=r?[]:E;e:for(;++c<m;){var F=e[c],k=r?r(F):F;if(F=a||F!==0?F:0,g&&k===k){for(var B=v.length;B--;)if(v[B]===k)continue e;r&&v.push(k),E.push(F)}else f(v,k,a)||(v!==E&&v.push(k),E.push(F))}return E}function _o(e,r){return r=Vt(r,e),e=Al(e,r),e==null||delete e[lt(Ln(r))]}function Xu(e,r,a,c){return Xi(e,r,a(ii(e,r)),c)}function Gr(e,r,a,c){for(var f=e.length,m=c?f:-1;(c?m--:++m<f)&&r(e[m],m,e););return a?xn(e,c?0:m,c?m+1:f):xn(e,c?m+1:0,c?f:m)}function Ku(e,r){var a=e;return a instanceof le&&(a=a.value()),Xs(r,function(c,f){return f.func.apply(f.thisArg,Bt([c],f.args))},a)}function Ao(e,r,a){var c=e.length;if(c<2)return c?$t(e[0]):[];for(var f=-1,m=A(c);++f<c;)for(var g=e[f],E=-1;++E<c;)E!=f&&(m[f]=zi(m[f]||g,e[E],r,a));return $t(He(m,1),r,a)}function Zu(e,r,a){for(var c=-1,f=e.length,m=r.length,g={};++c<f;){var E=c<m?r[c]:t;a(g,e[c],E)}return g}function bo(e){return Me(e)?e:[]}function wo(e){return typeof e=="function"?e:mn}function Vt(e,r){return ne(e)?e:Lo(e,r)?[e]:Cl(ye(e))}var $h=se;function Gt(e,r,a){var c=e.length;return a=a===t?c:a,!r&&a>=c?e:xn(e,r,a)}var el=Sp||function(e){return Je.clearTimeout(e)};function nl(e,r){if(r)return e.slice();var a=e.length,c=vu?vu(a):new e.constructor(a);return e.copy(c),c}function So(e){var r=new e.constructor(e.byteLength);return new Cr(r).set(new Cr(e)),r}function Vh(e,r){var a=r?So(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.byteLength)}function Gh(e){var r=new e.constructor(e.source,Ua.exec(e));return r.lastIndex=e.lastIndex,r}function qh(e){return Yi?_e(Yi.call(e)):{}}function tl(e,r){var a=r?So(e.buffer):e.buffer;return new e.constructor(a,e.byteOffset,e.length)}function il(e,r){if(e!==r){var a=e!==t,c=e===null,f=e===e,m=vn(e),g=r!==t,E=r===null,v=r===r,C=vn(r);if(!E&&!C&&!m&&e>r||m&&g&&v&&!E&&!C||c&&g&&v||!a&&v||!f)return 1;if(!c&&!m&&!C&&e<r||C&&a&&f&&!c&&!m||E&&a&&f||!g&&f||!v)return-1}return 0}function jh(e,r,a){for(var c=-1,f=e.criteria,m=r.criteria,g=f.length,E=a.length;++c<g;){var v=il(f[c],m[c]);if(v){if(c>=E)return v;var C=a[c];return v*(C=="desc"?-1:1)}}return e.index-r.index}function rl(e,r,a,c){for(var f=-1,m=e.length,g=a.length,E=-1,v=r.length,C=Ye(m-g,0),F=A(v+C),k=!c;++E<v;)F[E]=r[E];for(;++f<g;)(k||f<m)&&(F[a[f]]=e[f]);for(;C--;)F[E++]=e[f++];return F}function sl(e,r,a,c){for(var f=-1,m=e.length,g=-1,E=a.length,v=-1,C=r.length,F=Ye(m-E,0),k=A(F+C),B=!c;++f<F;)k[f]=e[f];for(var q=f;++v<C;)k[q+v]=r[v];for(;++g<E;)(B||f<m)&&(k[q+a[g]]=e[f++]);return k}function dn(e,r){var a=-1,c=e.length;for(r||(r=A(c));++a<c;)r[a]=e[a];return r}function ut(e,r,a,c){var f=!a;a||(a={});for(var m=-1,g=r.length;++m<g;){var E=r[m],v=c?c(a[E],e[E],E,a,e):t;v===t&&(v=e[E]),f?Et(a,E,v):Qi(a,E,v)}return a}function Wh(e,r){return ut(e,xo(e),r)}function Yh(e,r){return ut(e,Tl(e),r)}function qr(e,r){return function(a,c){var f=ne(a)?Xd:hh,m=r?r():{};return f(a,e,z(c,2),m)}}function bi(e){return se(function(r,a){var c=-1,f=a.length,m=f>1?a[f-1]:t,g=f>2?a[2]:t;for(m=e.length>3&&typeof m=="function"?(f--,m):t,g&&an(a[0],a[1],g)&&(m=f<3?t:m,f=1),r=_e(r);++c<f;){var E=a[c];E&&e(r,E,c,m)}return r})}function ol(e,r){return function(a,c){if(a==null)return a;if(!pn(a))return e(a,c);for(var f=a.length,m=r?f:-1,g=_e(a);(r?m--:++m<f)&&c(g[m],m,g)!==!1;);return a}}function al(e){return function(r,a,c){for(var f=-1,m=_e(r),g=c(r),E=g.length;E--;){var v=g[e?E:++f];if(a(m[v],v,m)===!1)break}return r}}function Qh(e,r,a){var c=r&X,f=Ki(e);function m(){var g=this&&this!==Je&&this instanceof m?f:e;return g.apply(c?a:this,arguments)}return m}function ul(e){return function(r){r=ye(r);var a=Ti(r)?qn(r):t,c=a?a[0]:r.charAt(0),f=a?Gt(a,1).join(""):r.slice(1);return c[e]()+f}}function wi(e){return function(r){return Xs(oc(sc(r).replace(Pd,"")),e,"")}}function Ki(e){return function(){var r=arguments;switch(r.length){case 0:return new e;case 1:return new e(r[0]);case 2:return new e(r[0],r[1]);case 3:return new e(r[0],r[1],r[2]);case 4:return new e(r[0],r[1],r[2],r[3]);case 5:return new e(r[0],r[1],r[2],r[3],r[4]);case 6:return new e(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new e(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var a=Ai(e.prototype),c=e.apply(a,r);return Oe(c)?c:a}}function zh(e,r,a){var c=Ki(e);function f(){for(var m=arguments.length,g=A(m),E=m,v=Si(f);E--;)g[E]=arguments[E];var C=m<3&&g[0]!==v&&g[m-1]!==v?[]:Pt(g,v);if(m-=C.length,m<a)return pl(e,r,jr,f.placeholder,t,g,C,t,t,a-m);var F=this&&this!==Je&&this instanceof f?c:e;return En(F,this,g)}return f}function ll(e){return function(r,a,c){var f=_e(r);if(!pn(r)){var m=z(a,3);r=Qe(r),a=function(E){return m(f[E],E,f)}}var g=e(r,a,c);return g>-1?f[m?r[g]:g]:t}}function cl(e){return Dt(function(r){var a=r.length,c=a,f=Rn.prototype.thru;for(e&&r.reverse();c--;){var m=r[c];if(typeof m!="function")throw new On(l);if(f&&!g&&zr(m)=="wrapper")var g=new Rn([],!0)}for(c=g?c:a;++c<a;){m=r[c];var E=zr(m),v=E=="wrapper"?Ro(m):t;v&&Bo(v[0])&&v[1]==(Ke|be|xe|mt)&&!v[4].length&&v[9]==1?g=g[zr(v[0])].apply(g,v[3]):g=m.length==1&&Bo(m)?g[E]():g.thru(m)}return function(){var C=arguments,F=C[0];if(g&&C.length==1&&ne(F))return g.plant(F).value();for(var k=0,B=a?r[k].apply(this,C):F;++k<a;)B=r[k].call(this,B);return B}})}function jr(e,r,a,c,f,m,g,E,v,C){var F=r&Ke,k=r&X,B=r&he,q=r&(be|Ne),J=r&O,re=B?t:Ki(e);function H(){for(var oe=arguments.length,fe=A(oe),_n=oe;_n--;)fe[_n]=arguments[_n];if(q)var un=Si(H),An=op(fe,un);if(c&&(fe=rl(fe,c,f,q)),m&&(fe=sl(fe,m,g,q)),oe-=An,q&&oe<C){var $e=Pt(fe,un);return pl(e,r,jr,H.placeholder,a,fe,$e,E,v,C-oe)}var Yn=k?a:this,bt=B?Yn[e]:e;return oe=fe.length,E?fe=hm(fe,E):J&&oe>1&&fe.reverse(),F&&v<oe&&(fe.length=v),this&&this!==Je&&this instanceof H&&(bt=re||Ki(bt)),bt.apply(Yn,fe)}return H}function fl(e,r){return function(a,c){return vh(a,e,r(c),{})}}function Wr(e,r){return function(a,c){var f;if(a===t&&c===t)return r;if(a!==t&&(f=a),c!==t){if(f===t)return c;typeof a=="string"||typeof c=="string"?(a=Dn(a),c=Dn(c)):(a=Hu(a),c=Hu(c)),f=e(a,c)}return f}}function Co(e){return Dt(function(r){return r=Ce(r,In(z())),se(function(a){var c=this;return e(r,function(f){return En(f,c,a)})})})}function Yr(e,r){r=r===t?" ":Dn(r);var a=r.length;if(a<2)return a?Do(r,e):r;var c=Do(r,Rr(e/Ei(r)));return Ti(r)?Gt(qn(c),0,e).join(""):c.slice(0,e)}function Jh(e,r,a,c){var f=r&X,m=Ki(e);function g(){for(var E=-1,v=arguments.length,C=-1,F=c.length,k=A(F+v),B=this&&this!==Je&&this instanceof g?m:e;++C<F;)k[C]=c[C];for(;v--;)k[C++]=arguments[++E];return En(B,f?a:this,k)}return g}function dl(e){return function(r,a,c){return c&&typeof c!="number"&&an(r,a,c)&&(a=c=t),r=At(r),a===t?(a=r,r=0):a=At(a),c=c===t?r<a?1:-1:At(c),xh(r,a,c,e)}}function Qr(e){return function(r,a){return typeof r=="string"&&typeof a=="string"||(r=Bn(r),a=Bn(a)),e(r,a)}}function pl(e,r,a,c,f,m,g,E,v,C){var F=r&be,k=F?g:t,B=F?t:g,q=F?m:t,J=F?t:m;r|=F?xe:rn,r&=~(F?rn:xe),r&Ge||(r&=~(X|he));var re=[e,r,f,q,k,J,B,E,v,C],H=a.apply(t,re);return Bo(e)&&bl(H,re),H.placeholder=c,wl(H,e,r)}function Fo(e){var r=We[e];return function(a,c){if(a=Bn(a),c=c==null?0:en(ie(c),292),c&&wu(a)){var f=(ye(a)+"e").split("e"),m=r(f[0]+"e"+(+f[1]+c));return f=(ye(m)+"e").split("e"),+(f[0]+"e"+(+f[1]-c))}return r(a)}}var Hh=vi&&1/vr(new vi([,-0]))[1]==ot?function(e){return new vi(e)}:Xo;function hl(e){return function(r){var a=nn(r);return a==Vn?ro(r):a==Gn?pp(r):sp(r,e(r))}}function It(e,r,a,c,f,m,g,E){var v=r&he;if(!v&&typeof e!="function")throw new On(l);var C=c?c.length:0;if(C||(r&=~(xe|rn),c=f=t),g=g===t?g:Ye(ie(g),0),E=E===t?E:ie(E),C-=f?f.length:0,r&rn){var F=c,k=f;c=f=t}var B=v?t:Ro(e),q=[e,r,a,c,f,F,k,m,g,E];if(B&&fm(q,B),e=q[0],r=q[1],a=q[2],c=q[3],f=q[4],E=q[9]=q[9]===t?v?0:e.length:Ye(q[9]-C,0),!E&&r&(be|Ne)&&(r&=~(be|Ne)),!r||r==X)var J=Qh(e,r,a);else r==be||r==Ne?J=zh(e,r,E):(r==xe||r==(X|xe))&&!f.length?J=Jh(e,r,a,c):J=jr.apply(t,q);var re=B?zu:bl;return wl(re(J,q),e,r)}function ml(e,r,a,c){return e===t||Wn(e,Di[a])&&!Ee.call(c,a)?r:e}function gl(e,r,a,c,f,m){return Oe(e)&&Oe(r)&&(m.set(r,e),$r(e,r,t,gl,m),m.delete(r)),e}function Xh(e){return nr(e)?t:e}function yl(e,r,a,c,f,m){var g=a&x,E=e.length,v=r.length;if(E!=v&&!(g&&v>E))return!1;var C=m.get(e),F=m.get(r);if(C&&F)return C==r&&F==e;var k=-1,B=!0,q=a&L?new ni:t;for(m.set(e,r),m.set(r,e);++k<E;){var J=e[k],re=r[k];if(c)var H=g?c(re,J,k,r,e,m):c(J,re,k,e,r,m);if(H!==t){if(H)continue;B=!1;break}if(q){if(!Ks(r,function(oe,fe){if(!Vi(q,fe)&&(J===oe||f(J,oe,a,c,m)))return q.push(fe)})){B=!1;break}}else if(!(J===re||f(J,re,a,c,m))){B=!1;break}}return m.delete(e),m.delete(r),B}function Kh(e,r,a,c,f,m,g){switch(a){case mi:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case $i:return!(e.byteLength!=r.byteLength||!m(new Cr(e),new Cr(r)));case ge:case Cn:case Bi:return Wn(+e,+r);case xt:return e.name==r.name&&e.message==r.message;case Pi:case Ui:return e==r+"";case Vn:var E=ro;case Gn:var v=c&x;if(E||(E=vr),e.size!=r.size&&!v)return!1;var C=g.get(e);if(C)return C==r;c|=L,g.set(e,r);var F=yl(E(e),E(r),c,f,m,g);return g.delete(e),F;case gr:if(Yi)return Yi.call(e)==Yi.call(r)}return!1}function Zh(e,r,a,c,f,m){var g=a&x,E=No(e),v=E.length,C=No(r),F=C.length;if(v!=F&&!g)return!1;for(var k=v;k--;){var B=E[k];if(!(g?B in r:Ee.call(r,B)))return!1}var q=m.get(e),J=m.get(r);if(q&&J)return q==r&&J==e;var re=!0;m.set(e,r),m.set(r,e);for(var H=g;++k<v;){B=E[k];var oe=e[B],fe=r[B];if(c)var _n=g?c(fe,oe,B,r,e,m):c(oe,fe,B,e,r,m);if(!(_n===t?oe===fe||f(oe,fe,a,c,m):_n)){re=!1;break}H||(H=B=="constructor")}if(re&&!H){var un=e.constructor,An=r.constructor;un!=An&&"constructor"in e&&"constructor"in r&&!(typeof un=="function"&&un instanceof un&&typeof An=="function"&&An instanceof An)&&(re=!1)}return m.delete(e),m.delete(r),re}function Dt(e){return Uo(_l(e,t,Rl),e+"")}function No(e){return Pu(e,Qe,xo)}function Oo(e){return Pu(e,hn,Tl)}var Ro=xr?function(e){return xr.get(e)}:Xo;function zr(e){for(var r=e.name+"",a=_i[r],c=Ee.call(_i,r)?a.length:0;c--;){var f=a[c],m=f.func;if(m==null||m==e)return f.name}return r}function Si(e){var r=Ee.call(h,"placeholder")?h:e;return r.placeholder}function z(){var e=h.iteratee||Jo;return e=e===Jo?$u:e,arguments.length?e(arguments[0],arguments[1]):e}function Jr(e,r){var a=e.__data__;return am(r)?a[typeof r=="string"?"string":"hash"]:a.map}function ko(e){for(var r=Qe(e),a=r.length;a--;){var c=r[a],f=e[c];r[a]=[c,f,Dl(f)]}return r}function ri(e,r){var a=cp(e,r);return Mu(a)?a:t}function em(e){var r=Ee.call(e,Zt),a=e[Zt];try{e[Zt]=t;var c=!0}catch{}var f=wr.call(e);return c&&(r?e[Zt]=a:delete e[Zt]),f}var xo=oo?function(e){return e==null?[]:(e=_e(e),Lt(oo(e),function(r){return Au.call(e,r)}))}:Ko,Tl=oo?function(e){for(var r=[];e;)Bt(r,xo(e)),e=Fr(e);return r}:Ko,nn=on;(ao&&nn(new ao(new ArrayBuffer(1)))!=mi||qi&&nn(new qi)!=Vn||uo&&nn(uo.resolve())!=xa||vi&&nn(new vi)!=Gn||ji&&nn(new ji)!=Mi)&&(nn=function(e){var r=on(e),a=r==gt?e.constructor:t,c=a?si(a):"";if(c)switch(c){case Bp:return mi;case Pp:return Vn;case Up:return xa;case Mp:return Gn;case $p:return Mi}return r});function nm(e,r,a){for(var c=-1,f=a.length;++c<f;){var m=a[c],g=m.size;switch(m.type){case"drop":e+=g;break;case"dropRight":r-=g;break;case"take":r=en(r,e+g);break;case"takeRight":e=Ye(e,r-g);break}}return{start:e,end:r}}function tm(e){var r=e.match(ud);return r?r[1].split(ld):[]}function El(e,r,a){r=Vt(r,e);for(var c=-1,f=r.length,m=!1;++c<f;){var g=lt(r[c]);if(!(m=e!=null&&a(e,g)))break;e=e[g]}return m||++c!=f?m:(f=e==null?0:e.length,!!f&&ts(f)&&vt(g,f)&&(ne(e)||oi(e)))}function im(e){var r=e.length,a=new e.constructor(r);return r&&typeof e[0]=="string"&&Ee.call(e,"index")&&(a.index=e.index,a.input=e.input),a}function Il(e){return typeof e.constructor=="function"&&!Zi(e)?Ai(Fr(e)):{}}function rm(e,r,a){var c=e.constructor;switch(r){case $i:return So(e);case ge:case Cn:return new c(+e);case mi:return Vh(e,a);case Rs:case ks:case xs:case Ls:case Bs:case Ps:case Us:case Ms:case $s:return tl(e,a);case Vn:return new c;case Bi:case Ui:return new c(e);case Pi:return Gh(e);case Gn:return new c;case gr:return qh(e)}}function sm(e,r){var a=r.length;if(!a)return e;var c=a-1;return r[c]=(a>1?"& ":"")+r[c],r=r.join(a>2?", ":" "),e.replace(ad,`{
/* [wrapped with `+r+`] */
`)}function om(e){return ne(e)||oi(e)||!!(bu&&e&&e[bu])}function vt(e,r){var a=typeof e;return r=r??$n,!!r&&(a=="number"||a!="symbol"&&Td.test(e))&&e>-1&&e%1==0&&e<r}function an(e,r,a){if(!Oe(a))return!1;var c=typeof r;return(c=="number"?pn(a)&&vt(r,a.length):c=="string"&&r in a)?Wn(a[r],e):!1}function Lo(e,r){if(ne(e))return!1;var a=typeof e;return a=="number"||a=="symbol"||a=="boolean"||e==null||vn(e)?!0:id.test(e)||!td.test(e)||r!=null&&e in _e(r)}function am(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function Bo(e){var r=zr(e),a=h[r];if(typeof a!="function"||!(r in le.prototype))return!1;if(e===a)return!0;var c=Ro(a);return!!c&&e===c[0]}function um(e){return!!Du&&Du in e}var lm=Ar?_t:Zo;function Zi(e){var r=e&&e.constructor,a=typeof r=="function"&&r.prototype||Di;return e===a}function Dl(e){return e===e&&!Oe(e)}function vl(e,r){return function(a){return a==null?!1:a[e]===r&&(r!==t||e in _e(a))}}function cm(e){var r=es(e,function(c){return a.size===y&&a.clear(),c}),a=r.cache;return r}function fm(e,r){var a=e[1],c=r[1],f=a|c,m=f<(X|he|Ke),g=c==Ke&&a==be||c==Ke&&a==mt&&e[7].length<=r[8]||c==(Ke|mt)&&r[7].length<=r[8]&&a==be;if(!(m||g))return e;c&X&&(e[2]=r[2],f|=a&X?0:Ge);var E=r[3];if(E){var v=e[3];e[3]=v?rl(v,E,r[4]):E,e[4]=v?Pt(e[3],T):r[4]}return E=r[5],E&&(v=e[5],e[5]=v?sl(v,E,r[6]):E,e[6]=v?Pt(e[5],T):r[6]),E=r[7],E&&(e[7]=E),c&Ke&&(e[8]=e[8]==null?r[8]:en(e[8],r[8])),e[9]==null&&(e[9]=r[9]),e[0]=r[0],e[1]=f,e}function dm(e){var r=[];if(e!=null)for(var a in _e(e))r.push(a);return r}function pm(e){return wr.call(e)}function _l(e,r,a){return r=Ye(r===t?e.length-1:r,0),function(){for(var c=arguments,f=-1,m=Ye(c.length-r,0),g=A(m);++f<m;)g[f]=c[r+f];f=-1;for(var E=A(r+1);++f<r;)E[f]=c[f];return E[r]=a(g),En(e,this,E)}}function Al(e,r){return r.length<2?e:ii(e,xn(r,0,-1))}function hm(e,r){for(var a=e.length,c=en(r.length,a),f=dn(e);c--;){var m=r[c];e[c]=vt(m,a)?f[m]:t}return e}function Po(e,r){if(!(r==="constructor"&&typeof e[r]=="function")&&r!="__proto__")return e[r]}var bl=Sl(zu),er=Fp||function(e,r){return Je.setTimeout(e,r)},Uo=Sl(Ph);function wl(e,r,a){var c=r+"";return Uo(e,sm(c,mm(tm(c),a)))}function Sl(e){var r=0,a=0;return function(){var c=kp(),f=Ht-(c-a);if(a=c,f>0){if(++r>=kt)return arguments[0]}else r=0;return e.apply(t,arguments)}}function Hr(e,r){var a=-1,c=e.length,f=c-1;for(r=r===t?c:r;++a<r;){var m=Io(a,f),g=e[m];e[m]=e[a],e[a]=g}return e.length=r,e}var Cl=cm(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(rd,function(a,c,f,m){r.push(f?m.replace(dd,"$1"):c||a)}),r});function lt(e){if(typeof e=="string"||vn(e))return e;var r=e+"";return r=="0"&&1/e==-ot?"-0":r}function si(e){if(e!=null){try{return br.call(e)}catch{}try{return e+""}catch{}}return""}function mm(e,r){return Nn(P,function(a){var c="_."+a[0];r&a[1]&&!Ir(e,c)&&e.push(c)}),e.sort()}function Fl(e){if(e instanceof le)return e.clone();var r=new Rn(e.__wrapped__,e.__chain__);return r.__actions__=dn(e.__actions__),r.__index__=e.__index__,r.__values__=e.__values__,r}function gm(e,r,a){(a?an(e,r,a):r===t)?r=1:r=Ye(ie(r),0);var c=e==null?0:e.length;if(!c||r<1)return[];for(var f=0,m=0,g=A(Rr(c/r));f<c;)g[m++]=xn(e,f,f+=r);return g}function ym(e){for(var r=-1,a=e==null?0:e.length,c=0,f=[];++r<a;){var m=e[r];m&&(f[c++]=m)}return f}function Tm(){var e=arguments.length;if(!e)return[];for(var r=A(e-1),a=arguments[0],c=e;c--;)r[c-1]=arguments[c];return Bt(ne(a)?dn(a):[a],He(r,1))}var Em=se(function(e,r){return Me(e)?zi(e,He(r,1,Me,!0)):[]}),Im=se(function(e,r){var a=Ln(r);return Me(a)&&(a=t),Me(e)?zi(e,He(r,1,Me,!0),z(a,2)):[]}),Dm=se(function(e,r){var a=Ln(r);return Me(a)&&(a=t),Me(e)?zi(e,He(r,1,Me,!0),t,a):[]});function vm(e,r,a){var c=e==null?0:e.length;return c?(r=a||r===t?1:ie(r),xn(e,r<0?0:r,c)):[]}function _m(e,r,a){var c=e==null?0:e.length;return c?(r=a||r===t?1:ie(r),r=c-r,xn(e,0,r<0?0:r)):[]}function Am(e,r){return e&&e.length?Gr(e,z(r,3),!0,!0):[]}function bm(e,r){return e&&e.length?Gr(e,z(r,3),!0):[]}function wm(e,r,a,c){var f=e==null?0:e.length;return f?(a&&typeof a!="number"&&an(e,r,a)&&(a=0,c=f),Th(e,r,a,c)):[]}function Nl(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var f=a==null?0:ie(a);return f<0&&(f=Ye(c+f,0)),Dr(e,z(r,3),f)}function Ol(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var f=c-1;return a!==t&&(f=ie(a),f=a<0?Ye(c+f,0):en(f,c-1)),Dr(e,z(r,3),f,!0)}function Rl(e){var r=e==null?0:e.length;return r?He(e,1):[]}function Sm(e){var r=e==null?0:e.length;return r?He(e,ot):[]}function Cm(e,r){var a=e==null?0:e.length;return a?(r=r===t?1:ie(r),He(e,r)):[]}function Fm(e){for(var r=-1,a=e==null?0:e.length,c={};++r<a;){var f=e[r];c[f[0]]=f[1]}return c}function kl(e){return e&&e.length?e[0]:t}function Nm(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var f=a==null?0:ie(a);return f<0&&(f=Ye(c+f,0)),yi(e,r,f)}function Om(e){var r=e==null?0:e.length;return r?xn(e,0,-1):[]}var Rm=se(function(e){var r=Ce(e,bo);return r.length&&r[0]===e[0]?mo(r):[]}),km=se(function(e){var r=Ln(e),a=Ce(e,bo);return r===Ln(a)?r=t:a.pop(),a.length&&a[0]===e[0]?mo(a,z(r,2)):[]}),xm=se(function(e){var r=Ln(e),a=Ce(e,bo);return r=typeof r=="function"?r:t,r&&a.pop(),a.length&&a[0]===e[0]?mo(a,t,r):[]});function Lm(e,r){return e==null?"":Op.call(e,r)}function Ln(e){var r=e==null?0:e.length;return r?e[r-1]:t}function Bm(e,r,a){var c=e==null?0:e.length;if(!c)return-1;var f=c;return a!==t&&(f=ie(a),f=f<0?Ye(c+f,0):en(f,c-1)),r===r?mp(e,r,f):Dr(e,pu,f,!0)}function Pm(e,r){return e&&e.length?ju(e,ie(r)):t}var Um=se(xl);function xl(e,r){return e&&e.length&&r&&r.length?Eo(e,r):e}function Mm(e,r,a){return e&&e.length&&r&&r.length?Eo(e,r,z(a,2)):e}function $m(e,r,a){return e&&e.length&&r&&r.length?Eo(e,r,t,a):e}var Vm=Dt(function(e,r){var a=e==null?0:e.length,c=co(e,r);return Qu(e,Ce(r,function(f){return vt(f,a)?+f:f}).sort(il)),c});function Gm(e,r){var a=[];if(!(e&&e.length))return a;var c=-1,f=[],m=e.length;for(r=z(r,3);++c<m;){var g=e[c];r(g,c,e)&&(a.push(g),f.push(c))}return Qu(e,f),a}function Mo(e){return e==null?e:Lp.call(e)}function qm(e,r,a){var c=e==null?0:e.length;return c?(a&&typeof a!="number"&&an(e,r,a)?(r=0,a=c):(r=r==null?0:ie(r),a=a===t?c:ie(a)),xn(e,r,a)):[]}function jm(e,r){return Vr(e,r)}function Wm(e,r,a){return vo(e,r,z(a,2))}function Ym(e,r){var a=e==null?0:e.length;if(a){var c=Vr(e,r);if(c<a&&Wn(e[c],r))return c}return-1}function Qm(e,r){return Vr(e,r,!0)}function zm(e,r,a){return vo(e,r,z(a,2),!0)}function Jm(e,r){var a=e==null?0:e.length;if(a){var c=Vr(e,r,!0)-1;if(Wn(e[c],r))return c}return-1}function Hm(e){return e&&e.length?Ju(e):[]}function Xm(e,r){return e&&e.length?Ju(e,z(r,2)):[]}function Km(e){var r=e==null?0:e.length;return r?xn(e,1,r):[]}function Zm(e,r,a){return e&&e.length?(r=a||r===t?1:ie(r),xn(e,0,r<0?0:r)):[]}function eg(e,r,a){var c=e==null?0:e.length;return c?(r=a||r===t?1:ie(r),r=c-r,xn(e,r<0?0:r,c)):[]}function ng(e,r){return e&&e.length?Gr(e,z(r,3),!1,!0):[]}function tg(e,r){return e&&e.length?Gr(e,z(r,3)):[]}var ig=se(function(e){return $t(He(e,1,Me,!0))}),rg=se(function(e){var r=Ln(e);return Me(r)&&(r=t),$t(He(e,1,Me,!0),z(r,2))}),sg=se(function(e){var r=Ln(e);return r=typeof r=="function"?r:t,$t(He(e,1,Me,!0),t,r)});function og(e){return e&&e.length?$t(e):[]}function ag(e,r){return e&&e.length?$t(e,z(r,2)):[]}function ug(e,r){return r=typeof r=="function"?r:t,e&&e.length?$t(e,t,r):[]}function $o(e){if(!(e&&e.length))return[];var r=0;return e=Lt(e,function(a){if(Me(a))return r=Ye(a.length,r),!0}),to(r,function(a){return Ce(e,Zs(a))})}function Ll(e,r){if(!(e&&e.length))return[];var a=$o(e);return r==null?a:Ce(a,function(c){return En(r,t,c)})}var lg=se(function(e,r){return Me(e)?zi(e,r):[]}),cg=se(function(e){return Ao(Lt(e,Me))}),fg=se(function(e){var r=Ln(e);return Me(r)&&(r=t),Ao(Lt(e,Me),z(r,2))}),dg=se(function(e){var r=Ln(e);return r=typeof r=="function"?r:t,Ao(Lt(e,Me),t,r)}),pg=se($o);function hg(e,r){return Zu(e||[],r||[],Qi)}function mg(e,r){return Zu(e||[],r||[],Xi)}var gg=se(function(e){var r=e.length,a=r>1?e[r-1]:t;return a=typeof a=="function"?(e.pop(),a):t,Ll(e,a)});function Bl(e){var r=h(e);return r.__chain__=!0,r}function yg(e,r){return r(e),e}function Xr(e,r){return r(e)}var Tg=Dt(function(e){var r=e.length,a=r?e[0]:0,c=this.__wrapped__,f=function(m){return co(m,e)};return r>1||this.__actions__.length||!(c instanceof le)||!vt(a)?this.thru(f):(c=c.slice(a,+a+(r?1:0)),c.__actions__.push({func:Xr,args:[f],thisArg:t}),new Rn(c,this.__chain__).thru(function(m){return r&&!m.length&&m.push(t),m}))});function Eg(){return Bl(this)}function Ig(){return new Rn(this.value(),this.__chain__)}function Dg(){this.__values__===t&&(this.__values__=Hl(this.value()));var e=this.__index__>=this.__values__.length,r=e?t:this.__values__[this.__index__++];return{done:e,value:r}}function vg(){return this}function _g(e){for(var r,a=this;a instanceof Br;){var c=Fl(a);c.__index__=0,c.__values__=t,r?f.__wrapped__=c:r=c;var f=c;a=a.__wrapped__}return f.__wrapped__=e,r}function Ag(){var e=this.__wrapped__;if(e instanceof le){var r=e;return this.__actions__.length&&(r=new le(this)),r=r.reverse(),r.__actions__.push({func:Xr,args:[Mo],thisArg:t}),new Rn(r,this.__chain__)}return this.thru(Mo)}function bg(){return Ku(this.__wrapped__,this.__actions__)}var wg=qr(function(e,r,a){Ee.call(e,a)?++e[a]:Et(e,a,1)});function Sg(e,r,a){var c=ne(e)?fu:yh;return a&&an(e,r,a)&&(r=t),c(e,z(r,3))}function Cg(e,r){var a=ne(e)?Lt:Lu;return a(e,z(r,3))}var Fg=ll(Nl),Ng=ll(Ol);function Og(e,r){return He(Kr(e,r),1)}function Rg(e,r){return He(Kr(e,r),ot)}function kg(e,r,a){return a=a===t?1:ie(a),He(Kr(e,r),a)}function Pl(e,r){var a=ne(e)?Nn:Mt;return a(e,z(r,3))}function Ul(e,r){var a=ne(e)?Kd:xu;return a(e,z(r,3))}var xg=qr(function(e,r,a){Ee.call(e,a)?e[a].push(r):Et(e,a,[r])});function Lg(e,r,a,c){e=pn(e)?e:Fi(e),a=a&&!c?ie(a):0;var f=e.length;return a<0&&(a=Ye(f+a,0)),is(e)?a<=f&&e.indexOf(r,a)>-1:!!f&&yi(e,r,a)>-1}var Bg=se(function(e,r,a){var c=-1,f=typeof r=="function",m=pn(e)?A(e.length):[];return Mt(e,function(g){m[++c]=f?En(r,g,a):Ji(g,r,a)}),m}),Pg=qr(function(e,r,a){Et(e,a,r)});function Kr(e,r){var a=ne(e)?Ce:Vu;return a(e,z(r,3))}function Ug(e,r,a,c){return e==null?[]:(ne(r)||(r=r==null?[]:[r]),a=c?t:a,ne(a)||(a=a==null?[]:[a]),Wu(e,r,a))}var Mg=qr(function(e,r,a){e[a?0:1].push(r)},function(){return[[],[]]});function $g(e,r,a){var c=ne(e)?Xs:mu,f=arguments.length<3;return c(e,z(r,4),a,f,Mt)}function Vg(e,r,a){var c=ne(e)?Zd:mu,f=arguments.length<3;return c(e,z(r,4),a,f,xu)}function Gg(e,r){var a=ne(e)?Lt:Lu;return a(e,ns(z(r,3)))}function qg(e){var r=ne(e)?Nu:Lh;return r(e)}function jg(e,r,a){(a?an(e,r,a):r===t)?r=1:r=ie(r);var c=ne(e)?dh:Bh;return c(e,r)}function Wg(e){var r=ne(e)?ph:Uh;return r(e)}function Yg(e){if(e==null)return 0;if(pn(e))return is(e)?Ei(e):e.length;var r=nn(e);return r==Vn||r==Gn?e.size:yo(e).length}function Qg(e,r,a){var c=ne(e)?Ks:Mh;return a&&an(e,r,a)&&(r=t),c(e,z(r,3))}var zg=se(function(e,r){if(e==null)return[];var a=r.length;return a>1&&an(e,r[0],r[1])?r=[]:a>2&&an(r[0],r[1],r[2])&&(r=[r[0]]),Wu(e,He(r,1),[])}),Zr=Cp||function(){return Je.Date.now()};function Jg(e,r){if(typeof r!="function")throw new On(l);return e=ie(e),function(){if(--e<1)return r.apply(this,arguments)}}function Ml(e,r,a){return r=a?t:r,r=e&&r==null?e.length:r,It(e,Ke,t,t,t,t,r)}function $l(e,r){var a;if(typeof r!="function")throw new On(l);return e=ie(e),function(){return--e>0&&(a=r.apply(this,arguments)),e<=1&&(r=t),a}}var Vo=se(function(e,r,a){var c=X;if(a.length){var f=Pt(a,Si(Vo));c|=xe}return It(e,c,r,a,f)}),Vl=se(function(e,r,a){var c=X|he;if(a.length){var f=Pt(a,Si(Vl));c|=xe}return It(r,c,e,a,f)});function Gl(e,r,a){r=a?t:r;var c=It(e,be,t,t,t,t,t,r);return c.placeholder=Gl.placeholder,c}function ql(e,r,a){r=a?t:r;var c=It(e,Ne,t,t,t,t,t,r);return c.placeholder=ql.placeholder,c}function jl(e,r,a){var c,f,m,g,E,v,C=0,F=!1,k=!1,B=!0;if(typeof e!="function")throw new On(l);r=Bn(r)||0,Oe(a)&&(F=!!a.leading,k="maxWait"in a,m=k?Ye(Bn(a.maxWait)||0,r):m,B="trailing"in a?!!a.trailing:B);function q($e){var Yn=c,bt=f;return c=f=t,C=$e,g=e.apply(bt,Yn),g}function J($e){return C=$e,E=er(oe,r),F?q($e):g}function re($e){var Yn=$e-v,bt=$e-C,lc=r-Yn;return k?en(lc,m-bt):lc}function H($e){var Yn=$e-v,bt=$e-C;return v===t||Yn>=r||Yn<0||k&&bt>=m}function oe(){var $e=Zr();if(H($e))return fe($e);E=er(oe,re($e))}function fe($e){return E=t,B&&c?q($e):(c=f=t,g)}function _n(){E!==t&&el(E),C=0,c=v=f=E=t}function un(){return E===t?g:fe(Zr())}function An(){var $e=Zr(),Yn=H($e);if(c=arguments,f=this,v=$e,Yn){if(E===t)return J(v);if(k)return el(E),E=er(oe,r),q(v)}return E===t&&(E=er(oe,r)),g}return An.cancel=_n,An.flush=un,An}var Hg=se(function(e,r){return ku(e,1,r)}),Xg=se(function(e,r,a){return ku(e,Bn(r)||0,a)});function Kg(e){return It(e,O)}function es(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new On(l);var a=function(){var c=arguments,f=r?r.apply(this,c):c[0],m=a.cache;if(m.has(f))return m.get(f);var g=e.apply(this,c);return a.cache=m.set(f,g)||m,g};return a.cache=new(es.Cache||Tt),a}es.Cache=Tt;function ns(e){if(typeof e!="function")throw new On(l);return function(){var r=arguments;switch(r.length){case 0:return!e.call(this);case 1:return!e.call(this,r[0]);case 2:return!e.call(this,r[0],r[1]);case 3:return!e.call(this,r[0],r[1],r[2])}return!e.apply(this,r)}}function Zg(e){return $l(2,e)}var ey=$h(function(e,r){r=r.length==1&&ne(r[0])?Ce(r[0],In(z())):Ce(He(r,1),In(z()));var a=r.length;return se(function(c){for(var f=-1,m=en(c.length,a);++f<m;)c[f]=r[f].call(this,c[f]);return En(e,this,c)})}),Go=se(function(e,r){var a=Pt(r,Si(Go));return It(e,xe,t,r,a)}),Wl=se(function(e,r){var a=Pt(r,Si(Wl));return It(e,rn,t,r,a)}),ny=Dt(function(e,r){return It(e,mt,t,t,t,r)});function ty(e,r){if(typeof e!="function")throw new On(l);return r=r===t?r:ie(r),se(e,r)}function iy(e,r){if(typeof e!="function")throw new On(l);return r=r==null?0:Ye(ie(r),0),se(function(a){var c=a[r],f=Gt(a,0,r);return c&&Bt(f,c),En(e,this,f)})}function ry(e,r,a){var c=!0,f=!0;if(typeof e!="function")throw new On(l);return Oe(a)&&(c="leading"in a?!!a.leading:c,f="trailing"in a?!!a.trailing:f),jl(e,r,{leading:c,maxWait:r,trailing:f})}function sy(e){return Ml(e,1)}function oy(e,r){return Go(wo(r),e)}function ay(){if(!arguments.length)return[];var e=arguments[0];return ne(e)?e:[e]}function uy(e){return kn(e,R)}function ly(e,r){return r=typeof r=="function"?r:t,kn(e,R,r)}function cy(e){return kn(e,D|R)}function fy(e,r){return r=typeof r=="function"?r:t,kn(e,D|R,r)}function dy(e,r){return r==null||Ru(e,r,Qe(r))}function Wn(e,r){return e===r||e!==e&&r!==r}var py=Qr(ho),hy=Qr(function(e,r){return e>=r}),oi=Uu(function(){return arguments}())?Uu:function(e){return Le(e)&&Ee.call(e,"callee")&&!Au.call(e,"callee")},ne=A.isArray,my=su?In(su):_h;function pn(e){return e!=null&&ts(e.length)&&!_t(e)}function Me(e){return Le(e)&&pn(e)}function gy(e){return e===!0||e===!1||Le(e)&&on(e)==ge}var qt=Np||Zo,yy=ou?In(ou):Ah;function Ty(e){return Le(e)&&e.nodeType===1&&!nr(e)}function Ey(e){if(e==null)return!0;if(pn(e)&&(ne(e)||typeof e=="string"||typeof e.splice=="function"||qt(e)||Ci(e)||oi(e)))return!e.length;var r=nn(e);if(r==Vn||r==Gn)return!e.size;if(Zi(e))return!yo(e).length;for(var a in e)if(Ee.call(e,a))return!1;return!0}function Iy(e,r){return Hi(e,r)}function Dy(e,r,a){a=typeof a=="function"?a:t;var c=a?a(e,r):t;return c===t?Hi(e,r,t,a):!!c}function qo(e){if(!Le(e))return!1;var r=on(e);return r==xt||r==Li||typeof e.message=="string"&&typeof e.name=="string"&&!nr(e)}function vy(e){return typeof e=="number"&&wu(e)}function _t(e){if(!Oe(e))return!1;var r=on(e);return r==Ze||r==ka||r==Ue||r==Yf}function Yl(e){return typeof e=="number"&&e==ie(e)}function ts(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$n}function Oe(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}function Le(e){return e!=null&&typeof e=="object"}var Ql=au?In(au):wh;function _y(e,r){return e===r||go(e,r,ko(r))}function Ay(e,r,a){return a=typeof a=="function"?a:t,go(e,r,ko(r),a)}function by(e){return zl(e)&&e!=+e}function wy(e){if(lm(e))throw new ee(u);return Mu(e)}function Sy(e){return e===null}function Cy(e){return e==null}function zl(e){return typeof e=="number"||Le(e)&&on(e)==Bi}function nr(e){if(!Le(e)||on(e)!=gt)return!1;var r=Fr(e);if(r===null)return!0;var a=Ee.call(r,"constructor")&&r.constructor;return typeof a=="function"&&a instanceof a&&br.call(a)==Ap}var jo=uu?In(uu):Sh;function Fy(e){return Yl(e)&&e>=-$n&&e<=$n}var Jl=lu?In(lu):Ch;function is(e){return typeof e=="string"||!ne(e)&&Le(e)&&on(e)==Ui}function vn(e){return typeof e=="symbol"||Le(e)&&on(e)==gr}var Ci=cu?In(cu):Fh;function Ny(e){return e===t}function Oy(e){return Le(e)&&nn(e)==Mi}function Ry(e){return Le(e)&&on(e)==zf}var ky=Qr(To),xy=Qr(function(e,r){return e<=r});function Hl(e){if(!e)return[];if(pn(e))return is(e)?qn(e):dn(e);if(Gi&&e[Gi])return dp(e[Gi]());var r=nn(e),a=r==Vn?ro:r==Gn?vr:Fi;return a(e)}function At(e){if(!e)return e===0?e:0;if(e=Bn(e),e===ot||e===-ot){var r=e<0?-1:1;return r*hi}return e===e?e:0}function ie(e){var r=At(e),a=r%1;return r===r?a?r-a:r:0}function Xl(e){return e?ti(ie(e),0,Sn):0}function Bn(e){if(typeof e=="number")return e;if(vn(e))return Xt;if(Oe(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=Oe(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=gu(e);var a=md.test(e);return a||yd.test(e)?Jd(e.slice(2),a?2:8):hd.test(e)?Xt:+e}function Kl(e){return ut(e,hn(e))}function Ly(e){return e?ti(ie(e),-$n,$n):e===0?e:0}function ye(e){return e==null?"":Dn(e)}var By=bi(function(e,r){if(Zi(r)||pn(r)){ut(r,Qe(r),e);return}for(var a in r)Ee.call(r,a)&&Qi(e,a,r[a])}),Zl=bi(function(e,r){ut(r,hn(r),e)}),rs=bi(function(e,r,a,c){ut(r,hn(r),e,c)}),Py=bi(function(e,r,a,c){ut(r,Qe(r),e,c)}),Uy=Dt(co);function My(e,r){var a=Ai(e);return r==null?a:Ou(a,r)}var $y=se(function(e,r){e=_e(e);var a=-1,c=r.length,f=c>2?r[2]:t;for(f&&an(r[0],r[1],f)&&(c=1);++a<c;)for(var m=r[a],g=hn(m),E=-1,v=g.length;++E<v;){var C=g[E],F=e[C];(F===t||Wn(F,Di[C])&&!Ee.call(e,C))&&(e[C]=m[C])}return e}),Vy=se(function(e){return e.push(t,gl),En(ec,t,e)});function Gy(e,r){return du(e,z(r,3),at)}function qy(e,r){return du(e,z(r,3),po)}function jy(e,r){return e==null?e:fo(e,z(r,3),hn)}function Wy(e,r){return e==null?e:Bu(e,z(r,3),hn)}function Yy(e,r){return e&&at(e,z(r,3))}function Qy(e,r){return e&&po(e,z(r,3))}function zy(e){return e==null?[]:Mr(e,Qe(e))}function Jy(e){return e==null?[]:Mr(e,hn(e))}function Wo(e,r,a){var c=e==null?t:ii(e,r);return c===t?a:c}function Hy(e,r){return e!=null&&El(e,r,Eh)}function Yo(e,r){return e!=null&&El(e,r,Ih)}var Xy=fl(function(e,r,a){r!=null&&typeof r.toString!="function"&&(r=wr.call(r)),e[r]=a},zo(mn)),Ky=fl(function(e,r,a){r!=null&&typeof r.toString!="function"&&(r=wr.call(r)),Ee.call(e,r)?e[r].push(a):e[r]=[a]},z),Zy=se(Ji);function Qe(e){return pn(e)?Fu(e):yo(e)}function hn(e){return pn(e)?Fu(e,!0):Nh(e)}function e0(e,r){var a={};return r=z(r,3),at(e,function(c,f,m){Et(a,r(c,f,m),c)}),a}function n0(e,r){var a={};return r=z(r,3),at(e,function(c,f,m){Et(a,f,r(c,f,m))}),a}var t0=bi(function(e,r,a){$r(e,r,a)}),ec=bi(function(e,r,a,c){$r(e,r,a,c)}),i0=Dt(function(e,r){var a={};if(e==null)return a;var c=!1;r=Ce(r,function(m){return m=Vt(m,e),c||(c=m.length>1),m}),ut(e,Oo(e),a),c&&(a=kn(a,D|S|R,Xh));for(var f=r.length;f--;)_o(a,r[f]);return a});function r0(e,r){return nc(e,ns(z(r)))}var s0=Dt(function(e,r){return e==null?{}:Rh(e,r)});function nc(e,r){if(e==null)return{};var a=Ce(Oo(e),function(c){return[c]});return r=z(r),Yu(e,a,function(c,f){return r(c,f[0])})}function o0(e,r,a){r=Vt(r,e);var c=-1,f=r.length;for(f||(f=1,e=t);++c<f;){var m=e==null?t:e[lt(r[c])];m===t&&(c=f,m=a),e=_t(m)?m.call(e):m}return e}function a0(e,r,a){return e==null?e:Xi(e,r,a)}function u0(e,r,a,c){return c=typeof c=="function"?c:t,e==null?e:Xi(e,r,a,c)}var tc=hl(Qe),ic=hl(hn);function l0(e,r,a){var c=ne(e),f=c||qt(e)||Ci(e);if(r=z(r,4),a==null){var m=e&&e.constructor;f?a=c?new m:[]:Oe(e)?a=_t(m)?Ai(Fr(e)):{}:a={}}return(f?Nn:at)(e,function(g,E,v){return r(a,g,E,v)}),a}function c0(e,r){return e==null?!0:_o(e,r)}function f0(e,r,a){return e==null?e:Xu(e,r,wo(a))}function d0(e,r,a,c){return c=typeof c=="function"?c:t,e==null?e:Xu(e,r,wo(a),c)}function Fi(e){return e==null?[]:io(e,Qe(e))}function p0(e){return e==null?[]:io(e,hn(e))}function h0(e,r,a){return a===t&&(a=r,r=t),a!==t&&(a=Bn(a),a=a===a?a:0),r!==t&&(r=Bn(r),r=r===r?r:0),ti(Bn(e),r,a)}function m0(e,r,a){return r=At(r),a===t?(a=r,r=0):a=At(a),e=Bn(e),Dh(e,r,a)}function g0(e,r,a){if(a&&typeof a!="boolean"&&an(e,r,a)&&(r=a=t),a===t&&(typeof r=="boolean"?(a=r,r=t):typeof e=="boolean"&&(a=e,e=t)),e===t&&r===t?(e=0,r=1):(e=At(e),r===t?(r=e,e=0):r=At(r)),e>r){var c=e;e=r,r=c}if(a||e%1||r%1){var f=Su();return en(e+f*(r-e+zd("1e-"+((f+"").length-1))),r)}return Io(e,r)}var y0=wi(function(e,r,a){return r=r.toLowerCase(),e+(a?rc(r):r)});function rc(e){return Qo(ye(e).toLowerCase())}function sc(e){return e=ye(e),e&&e.replace(Ed,ap).replace(Ud,"")}function T0(e,r,a){e=ye(e),r=Dn(r);var c=e.length;a=a===t?c:ti(ie(a),0,c);var f=a;return a-=r.length,a>=0&&e.slice(a,f)==r}function E0(e){return e=ye(e),e&&Zf.test(e)?e.replace(Ba,up):e}function I0(e){return e=ye(e),e&&sd.test(e)?e.replace(Vs,"\\$&"):e}var D0=wi(function(e,r,a){return e+(a?"-":"")+r.toLowerCase()}),v0=wi(function(e,r,a){return e+(a?" ":"")+r.toLowerCase()}),_0=ul("toLowerCase");function A0(e,r,a){e=ye(e),r=ie(r);var c=r?Ei(e):0;if(!r||c>=r)return e;var f=(r-c)/2;return Yr(kr(f),a)+e+Yr(Rr(f),a)}function b0(e,r,a){e=ye(e),r=ie(r);var c=r?Ei(e):0;return r&&c<r?e+Yr(r-c,a):e}function w0(e,r,a){e=ye(e),r=ie(r);var c=r?Ei(e):0;return r&&c<r?Yr(r-c,a)+e:e}function S0(e,r,a){return a||r==null?r=0:r&&(r=+r),xp(ye(e).replace(Gs,""),r||0)}function C0(e,r,a){return(a?an(e,r,a):r===t)?r=1:r=ie(r),Do(ye(e),r)}function F0(){var e=arguments,r=ye(e[0]);return e.length<3?r:r.replace(e[1],e[2])}var N0=wi(function(e,r,a){return e+(a?"_":"")+r.toLowerCase()});function O0(e,r,a){return a&&typeof a!="number"&&an(e,r,a)&&(r=a=t),a=a===t?Sn:a>>>0,a?(e=ye(e),e&&(typeof r=="string"||r!=null&&!jo(r))&&(r=Dn(r),!r&&Ti(e))?Gt(qn(e),0,a):e.split(r,a)):[]}var R0=wi(function(e,r,a){return e+(a?" ":"")+Qo(r)});function k0(e,r,a){return e=ye(e),a=a==null?0:ti(ie(a),0,e.length),r=Dn(r),e.slice(a,a+r.length)==r}function x0(e,r,a){var c=h.templateSettings;a&&an(e,r,a)&&(r=t),e=ye(e),r=rs({},r,c,ml);var f=rs({},r.imports,c.imports,ml),m=Qe(f),g=io(f,m),E,v,C=0,F=r.interpolate||yr,k="__p += '",B=so((r.escape||yr).source+"|"+F.source+"|"+(F===Pa?pd:yr).source+"|"+(r.evaluate||yr).source+"|$","g"),q="//# sourceURL="+(Ee.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++qd+"]")+`
`;e.replace(B,function(H,oe,fe,_n,un,An){return fe||(fe=_n),k+=e.slice(C,An).replace(Id,lp),oe&&(E=!0,k+=`' +
__e(`+oe+`) +
'`),un&&(v=!0,k+=`';
`+un+`;
__p += '`),fe&&(k+=`' +
((__t = (`+fe+`)) == null ? '' : __t) +
'`),C=An+H.length,H}),k+=`';
`;var J=Ee.call(r,"variable")&&r.variable;if(!J)k=`with (obj) {
`+k+`
}
`;else if(fd.test(J))throw new ee(d);k=(v?k.replace(Jf,""):k).replace(Hf,"$1").replace(Xf,"$1;"),k="function("+(J||"obj")+`) {
`+(J?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(E?", __e = _.escape":"")+(v?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+k+`return __p
}`;var re=ac(function(){return pe(m,q+"return "+k).apply(t,g)});if(re.source=k,qo(re))throw re;return re}function L0(e){return ye(e).toLowerCase()}function B0(e){return ye(e).toUpperCase()}function P0(e,r,a){if(e=ye(e),e&&(a||r===t))return gu(e);if(!e||!(r=Dn(r)))return e;var c=qn(e),f=qn(r),m=yu(c,f),g=Tu(c,f)+1;return Gt(c,m,g).join("")}function U0(e,r,a){if(e=ye(e),e&&(a||r===t))return e.slice(0,Iu(e)+1);if(!e||!(r=Dn(r)))return e;var c=qn(e),f=Tu(c,qn(r))+1;return Gt(c,0,f).join("")}function M0(e,r,a){if(e=ye(e),e&&(a||r===t))return e.replace(Gs,"");if(!e||!(r=Dn(r)))return e;var c=qn(e),f=yu(c,qn(r));return Gt(c,f).join("")}function $0(e,r){var a=Z,c=sn;if(Oe(r)){var f="separator"in r?r.separator:f;a="length"in r?ie(r.length):a,c="omission"in r?Dn(r.omission):c}e=ye(e);var m=e.length;if(Ti(e)){var g=qn(e);m=g.length}if(a>=m)return e;var E=a-Ei(c);if(E<1)return c;var v=g?Gt(g,0,E).join(""):e.slice(0,E);if(f===t)return v+c;if(g&&(E+=v.length-E),jo(f)){if(e.slice(E).search(f)){var C,F=v;for(f.global||(f=so(f.source,ye(Ua.exec(f))+"g")),f.lastIndex=0;C=f.exec(F);)var k=C.index;v=v.slice(0,k===t?E:k)}}else if(e.indexOf(Dn(f),E)!=E){var B=v.lastIndexOf(f);B>-1&&(v=v.slice(0,B))}return v+c}function V0(e){return e=ye(e),e&&Kf.test(e)?e.replace(La,gp):e}var G0=wi(function(e,r,a){return e+(a?" ":"")+r.toUpperCase()}),Qo=ul("toUpperCase");function oc(e,r,a){return e=ye(e),r=a?t:r,r===t?fp(e)?Ep(e):tp(e):e.match(r)||[]}var ac=se(function(e,r){try{return En(e,t,r)}catch(a){return qo(a)?a:new ee(a)}}),q0=Dt(function(e,r){return Nn(r,function(a){a=lt(a),Et(e,a,Vo(e[a],e))}),e});function j0(e){var r=e==null?0:e.length,a=z();return e=r?Ce(e,function(c){if(typeof c[1]!="function")throw new On(l);return[a(c[0]),c[1]]}):[],se(function(c){for(var f=-1;++f<r;){var m=e[f];if(En(m[0],this,c))return En(m[1],this,c)}})}function W0(e){return gh(kn(e,D))}function zo(e){return function(){return e}}function Y0(e,r){return e==null||e!==e?r:e}var Q0=cl(),z0=cl(!0);function mn(e){return e}function Jo(e){return $u(typeof e=="function"?e:kn(e,D))}function J0(e){return Gu(kn(e,D))}function H0(e,r){return qu(e,kn(r,D))}var X0=se(function(e,r){return function(a){return Ji(a,e,r)}}),K0=se(function(e,r){return function(a){return Ji(e,a,r)}});function Ho(e,r,a){var c=Qe(r),f=Mr(r,c);a==null&&!(Oe(r)&&(f.length||!c.length))&&(a=r,r=e,e=this,f=Mr(r,Qe(r)));var m=!(Oe(a)&&"chain"in a)||!!a.chain,g=_t(e);return Nn(f,function(E){var v=r[E];e[E]=v,g&&(e.prototype[E]=function(){var C=this.__chain__;if(m||C){var F=e(this.__wrapped__),k=F.__actions__=dn(this.__actions__);return k.push({func:v,args:arguments,thisArg:e}),F.__chain__=C,F}return v.apply(e,Bt([this.value()],arguments))})}),e}function Z0(){return Je._===this&&(Je._=bp),this}function Xo(){}function eT(e){return e=ie(e),se(function(r){return ju(r,e)})}var nT=Co(Ce),tT=Co(fu),iT=Co(Ks);function uc(e){return Lo(e)?Zs(lt(e)):kh(e)}function rT(e){return function(r){return e==null?t:ii(e,r)}}var sT=dl(),oT=dl(!0);function Ko(){return[]}function Zo(){return!1}function aT(){return{}}function uT(){return""}function lT(){return!0}function cT(e,r){if(e=ie(e),e<1||e>$n)return[];var a=Sn,c=en(e,Sn);r=z(r),e-=Sn;for(var f=to(c,r);++a<e;)r(a);return f}function fT(e){return ne(e)?Ce(e,lt):vn(e)?[e]:dn(Cl(ye(e)))}function dT(e){var r=++_p;return ye(e)+r}var pT=Wr(function(e,r){return e+r},0),hT=Fo("ceil"),mT=Wr(function(e,r){return e/r},1),gT=Fo("floor");function yT(e){return e&&e.length?Ur(e,mn,ho):t}function TT(e,r){return e&&e.length?Ur(e,z(r,2),ho):t}function ET(e){return hu(e,mn)}function IT(e,r){return hu(e,z(r,2))}function DT(e){return e&&e.length?Ur(e,mn,To):t}function vT(e,r){return e&&e.length?Ur(e,z(r,2),To):t}var _T=Wr(function(e,r){return e*r},1),AT=Fo("round"),bT=Wr(function(e,r){return e-r},0);function wT(e){return e&&e.length?no(e,mn):0}function ST(e,r){return e&&e.length?no(e,z(r,2)):0}return h.after=Jg,h.ary=Ml,h.assign=By,h.assignIn=Zl,h.assignInWith=rs,h.assignWith=Py,h.at=Uy,h.before=$l,h.bind=Vo,h.bindAll=q0,h.bindKey=Vl,h.castArray=ay,h.chain=Bl,h.chunk=gm,h.compact=ym,h.concat=Tm,h.cond=j0,h.conforms=W0,h.constant=zo,h.countBy=wg,h.create=My,h.curry=Gl,h.curryRight=ql,h.debounce=jl,h.defaults=$y,h.defaultsDeep=Vy,h.defer=Hg,h.delay=Xg,h.difference=Em,h.differenceBy=Im,h.differenceWith=Dm,h.drop=vm,h.dropRight=_m,h.dropRightWhile=Am,h.dropWhile=bm,h.fill=wm,h.filter=Cg,h.flatMap=Og,h.flatMapDeep=Rg,h.flatMapDepth=kg,h.flatten=Rl,h.flattenDeep=Sm,h.flattenDepth=Cm,h.flip=Kg,h.flow=Q0,h.flowRight=z0,h.fromPairs=Fm,h.functions=zy,h.functionsIn=Jy,h.groupBy=xg,h.initial=Om,h.intersection=Rm,h.intersectionBy=km,h.intersectionWith=xm,h.invert=Xy,h.invertBy=Ky,h.invokeMap=Bg,h.iteratee=Jo,h.keyBy=Pg,h.keys=Qe,h.keysIn=hn,h.map=Kr,h.mapKeys=e0,h.mapValues=n0,h.matches=J0,h.matchesProperty=H0,h.memoize=es,h.merge=t0,h.mergeWith=ec,h.method=X0,h.methodOf=K0,h.mixin=Ho,h.negate=ns,h.nthArg=eT,h.omit=i0,h.omitBy=r0,h.once=Zg,h.orderBy=Ug,h.over=nT,h.overArgs=ey,h.overEvery=tT,h.overSome=iT,h.partial=Go,h.partialRight=Wl,h.partition=Mg,h.pick=s0,h.pickBy=nc,h.property=uc,h.propertyOf=rT,h.pull=Um,h.pullAll=xl,h.pullAllBy=Mm,h.pullAllWith=$m,h.pullAt=Vm,h.range=sT,h.rangeRight=oT,h.rearg=ny,h.reject=Gg,h.remove=Gm,h.rest=ty,h.reverse=Mo,h.sampleSize=jg,h.set=a0,h.setWith=u0,h.shuffle=Wg,h.slice=qm,h.sortBy=zg,h.sortedUniq=Hm,h.sortedUniqBy=Xm,h.split=O0,h.spread=iy,h.tail=Km,h.take=Zm,h.takeRight=eg,h.takeRightWhile=ng,h.takeWhile=tg,h.tap=yg,h.throttle=ry,h.thru=Xr,h.toArray=Hl,h.toPairs=tc,h.toPairsIn=ic,h.toPath=fT,h.toPlainObject=Kl,h.transform=l0,h.unary=sy,h.union=ig,h.unionBy=rg,h.unionWith=sg,h.uniq=og,h.uniqBy=ag,h.uniqWith=ug,h.unset=c0,h.unzip=$o,h.unzipWith=Ll,h.update=f0,h.updateWith=d0,h.values=Fi,h.valuesIn=p0,h.without=lg,h.words=oc,h.wrap=oy,h.xor=cg,h.xorBy=fg,h.xorWith=dg,h.zip=pg,h.zipObject=hg,h.zipObjectDeep=mg,h.zipWith=gg,h.entries=tc,h.entriesIn=ic,h.extend=Zl,h.extendWith=rs,Ho(h,h),h.add=pT,h.attempt=ac,h.camelCase=y0,h.capitalize=rc,h.ceil=hT,h.clamp=h0,h.clone=uy,h.cloneDeep=cy,h.cloneDeepWith=fy,h.cloneWith=ly,h.conformsTo=dy,h.deburr=sc,h.defaultTo=Y0,h.divide=mT,h.endsWith=T0,h.eq=Wn,h.escape=E0,h.escapeRegExp=I0,h.every=Sg,h.find=Fg,h.findIndex=Nl,h.findKey=Gy,h.findLast=Ng,h.findLastIndex=Ol,h.findLastKey=qy,h.floor=gT,h.forEach=Pl,h.forEachRight=Ul,h.forIn=jy,h.forInRight=Wy,h.forOwn=Yy,h.forOwnRight=Qy,h.get=Wo,h.gt=py,h.gte=hy,h.has=Hy,h.hasIn=Yo,h.head=kl,h.identity=mn,h.includes=Lg,h.indexOf=Nm,h.inRange=m0,h.invoke=Zy,h.isArguments=oi,h.isArray=ne,h.isArrayBuffer=my,h.isArrayLike=pn,h.isArrayLikeObject=Me,h.isBoolean=gy,h.isBuffer=qt,h.isDate=yy,h.isElement=Ty,h.isEmpty=Ey,h.isEqual=Iy,h.isEqualWith=Dy,h.isError=qo,h.isFinite=vy,h.isFunction=_t,h.isInteger=Yl,h.isLength=ts,h.isMap=Ql,h.isMatch=_y,h.isMatchWith=Ay,h.isNaN=by,h.isNative=wy,h.isNil=Cy,h.isNull=Sy,h.isNumber=zl,h.isObject=Oe,h.isObjectLike=Le,h.isPlainObject=nr,h.isRegExp=jo,h.isSafeInteger=Fy,h.isSet=Jl,h.isString=is,h.isSymbol=vn,h.isTypedArray=Ci,h.isUndefined=Ny,h.isWeakMap=Oy,h.isWeakSet=Ry,h.join=Lm,h.kebabCase=D0,h.last=Ln,h.lastIndexOf=Bm,h.lowerCase=v0,h.lowerFirst=_0,h.lt=ky,h.lte=xy,h.max=yT,h.maxBy=TT,h.mean=ET,h.meanBy=IT,h.min=DT,h.minBy=vT,h.stubArray=Ko,h.stubFalse=Zo,h.stubObject=aT,h.stubString=uT,h.stubTrue=lT,h.multiply=_T,h.nth=Pm,h.noConflict=Z0,h.noop=Xo,h.now=Zr,h.pad=A0,h.padEnd=b0,h.padStart=w0,h.parseInt=S0,h.random=g0,h.reduce=$g,h.reduceRight=Vg,h.repeat=C0,h.replace=F0,h.result=o0,h.round=AT,h.runInContext=I,h.sample=qg,h.size=Yg,h.snakeCase=N0,h.some=Qg,h.sortedIndex=jm,h.sortedIndexBy=Wm,h.sortedIndexOf=Ym,h.sortedLastIndex=Qm,h.sortedLastIndexBy=zm,h.sortedLastIndexOf=Jm,h.startCase=R0,h.startsWith=k0,h.subtract=bT,h.sum=wT,h.sumBy=ST,h.template=x0,h.times=cT,h.toFinite=At,h.toInteger=ie,h.toLength=Xl,h.toLower=L0,h.toNumber=Bn,h.toSafeInteger=Ly,h.toString=ye,h.toUpper=B0,h.trim=P0,h.trimEnd=U0,h.trimStart=M0,h.truncate=$0,h.unescape=V0,h.uniqueId=dT,h.upperCase=G0,h.upperFirst=Qo,h.each=Pl,h.eachRight=Ul,h.first=kl,Ho(h,function(){var e={};return at(h,function(r,a){Ee.call(h.prototype,a)||(e[a]=r)}),e}(),{chain:!1}),h.VERSION=s,Nn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),Nn(["drop","take"],function(e,r){le.prototype[e]=function(a){a=a===t?1:Ye(ie(a),0);var c=this.__filtered__&&!r?new le(this):this.clone();return c.__filtered__?c.__takeCount__=en(a,c.__takeCount__):c.__views__.push({size:en(a,Sn),type:e+(c.__dir__<0?"Right":"")}),c},le.prototype[e+"Right"]=function(a){return this.reverse()[e](a).reverse()}}),Nn(["filter","map","takeWhile"],function(e,r){var a=r+1,c=a==hr||a==mr;le.prototype[e]=function(f){var m=this.clone();return m.__iteratees__.push({iteratee:z(f,3),type:a}),m.__filtered__=m.__filtered__||c,m}}),Nn(["head","last"],function(e,r){var a="take"+(r?"Right":"");le.prototype[e]=function(){return this[a](1).value()[0]}}),Nn(["initial","tail"],function(e,r){var a="drop"+(r?"":"Right");le.prototype[e]=function(){return this.__filtered__?new le(this):this[a](1)}}),le.prototype.compact=function(){return this.filter(mn)},le.prototype.find=function(e){return this.filter(e).head()},le.prototype.findLast=function(e){return this.reverse().find(e)},le.prototype.invokeMap=se(function(e,r){return typeof e=="function"?new le(this):this.map(function(a){return Ji(a,e,r)})}),le.prototype.reject=function(e){return this.filter(ns(z(e)))},le.prototype.slice=function(e,r){e=ie(e);var a=this;return a.__filtered__&&(e>0||r<0)?new le(a):(e<0?a=a.takeRight(-e):e&&(a=a.drop(e)),r!==t&&(r=ie(r),a=r<0?a.dropRight(-r):a.take(r-e)),a)},le.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},le.prototype.toArray=function(){return this.take(Sn)},at(le.prototype,function(e,r){var a=/^(?:filter|find|map|reject)|While$/.test(r),c=/^(?:head|last)$/.test(r),f=h[c?"take"+(r=="last"?"Right":""):r],m=c||/^find/.test(r);f&&(h.prototype[r]=function(){var g=this.__wrapped__,E=c?[1]:arguments,v=g instanceof le,C=E[0],F=v||ne(g),k=function(oe){var fe=f.apply(h,Bt([oe],E));return c&&B?fe[0]:fe};F&&a&&typeof C=="function"&&C.length!=1&&(v=F=!1);var B=this.__chain__,q=!!this.__actions__.length,J=m&&!B,re=v&&!q;if(!m&&F){g=re?g:new le(this);var H=e.apply(g,E);return H.__actions__.push({func:Xr,args:[k],thisArg:t}),new Rn(H,B)}return J&&re?e.apply(this,E):(H=this.thru(k),J?c?H.value()[0]:H.value():H)})}),Nn(["pop","push","shift","sort","splice","unshift"],function(e){var r=_r[e],a=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var f=arguments;if(c&&!this.__chain__){var m=this.value();return r.apply(ne(m)?m:[],f)}return this[a](function(g){return r.apply(ne(g)?g:[],f)})}}),at(le.prototype,function(e,r){var a=h[r];if(a){var c=a.name+"";Ee.call(_i,c)||(_i[c]=[]),_i[c].push({name:r,func:a})}}),_i[jr(t,he).name]=[{name:"wrapper",func:t}],le.prototype.clone=Vp,le.prototype.reverse=Gp,le.prototype.value=qp,h.prototype.at=Tg,h.prototype.chain=Eg,h.prototype.commit=Ig,h.prototype.next=Dg,h.prototype.plant=_g,h.prototype.reverse=Ag,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=bg,h.prototype.first=h.prototype.head,Gi&&(h.prototype[Gi]=vg),h},Ii=Ip();Kt?((Kt.exports=Ii)._=Ii,zs._=Ii):Je._=Ii}).call(tr)})(ys,ys.exports);var cI=ys.exports;const Nt=aI(cI),fI="/Documentation",dI="Optimus GraphQL API",pI="https://assets-global.website-files.com/64df8a70cf65933420706bc3/6556500d92d40a9143ea0e81_Navbar_Logo.svg",hI='[{"name":"*","args":["*"]}]',mI='[{"title":"Optimus GraphQL API Documentation","content":"\\n# Optimus GraphQL API Documentation\\n\\nLast updated: 2024-05-23\\n\\nThis document introduces a preliminary version of the Optimus GraphQL API, outlining inputs, responses, and internal types. \\nThe majority of the types either come with descriptions or are inherently self-descriptive, aiming to enhance usability. \\n**Please note that the document is currently in development mode**, and both expected functionalities and modifications to existing elements are anticipated.\\nGraphQL revolutionizes API communication compared to traditional REST APIs.\\n\\nUnlike REST, which has fixed endpoints and pre-defined responses, GraphQL enables flexible data retrieval by allowing clients to specify the exact data they need. \\nWith a single endpoint, GraphQL consolidates requests, reducing the need for multiple endpoints. \\nIt eliminates over-fetching or under-fetching of data, ensuring optimal network resource utilization. \\nAdditionally, GraphQL supports real-time updates through subscriptions, providing a more dynamic experience. \\nThe strongly typed schema enhances clarity and reduces errors. Overall, GraphQL offers a more efficient and expressive approach to API interactions. \\n(For more details, visit [GraphQL](https://graphql.org) and [RESTful API Design](https://restfulapi.net))\\n\\nAll functions have a mandatory input parameter **identityValue** which presents PGR ID. To find the function you should use for each specific use case, \\nthis [mapping table](https://petco.sharepoint.com/:x:/s/ProjectOptimus/EVMxDvu0XrJJjkv75ITcqIwBxUp5jUXt_XTnIoEw2ixPqQ?e=riahea) can help.\\nThe Dev environment could be found in the [Dev GraphQL](https://staging-optimus.petc.com/graphql), for use it in the code - [GraphQL Endpoint](https://staging-optimus.petco.com) \\nand request secret key. To access the API, please, make sure you under PETCO VPN.\\nThe function description contains icons to show the state and development status.\\n\\n\\n<div>\\n<img src=\\"https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp\\" alt=\\"not verified\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>specification not verified</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://cdn-icons-png.flaticon.com/512/6928/6928921.png\\" alt=\\"verified\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>specification verified</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png\\" alt=\\"pending\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>development pending</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://cdn.icon-icons.com/icons2/3641/PNG/512/play_green_button_icon_227849.png\\" alt=\\"progress\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>development in progress</span>\\n</div><br/>\\n\\n<div>\\n<img src=\\"https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/done-icon.png\\" alt=\\"developed\\" width=\\"32\\" style=\\"vertical-align:middle\\"/>\\n<span>development finished</span>\\n</div><br/>\\n\\n<p><a href=\\"mailto:OptimusSupport@petco.com\\">Contact us</a></p>\\n  "}]',gI="{}",yI="true",rf={SITE_ROOT:fI,APP_TITLE:dI,APP_LOGO:pI,DIRECTIVES:hI,PAGES:mI,QUERY_GENERATION_FACTORIES:gI,MAGIDOC_GENERATE:yI};function Lv(i){return i.get(rf)}function wa(i,n){return i.getOrDefault(rf,n)}function de(i,n){if(!!!i)throw new Error(n)}function Ot(i){return typeof i=="object"&&i!==null}function Xn(i,n){if(!!!i)throw new Error(n??"Unexpected invariant triggered.")}const TI=/\r\n|[\n\r]/g;function da(i,n){let t=0,s=1;for(const o of i.body.matchAll(TI)){if(typeof o.index=="number"||Xn(!1),o.index>=n)break;t=o.index+o[0].length,s+=1}return{line:s,column:n+1-t}}function EI(i){return sf(i.source,da(i.source,i.start))}function sf(i,n){const t=i.locationOffset.column-1,s="".padStart(t)+i.body,o=n.line-1,u=i.locationOffset.line-1,l=n.line+u,d=n.line===1?t:0,p=n.column+d,y=`${i.name}:${l}:${p}
`,T=s.split(/\r\n|[\n\r]/g),D=T[o];if(D.length>120){const S=Math.floor(p/80),R=p%80,x=[];for(let L=0;L<D.length;L+=80)x.push(D.slice(L,L+80));return y+Oc([[`${l} |`,x[0]],...x.slice(1,S+1).map(L=>["|",L]),["|","^".padStart(R)],["|",x[S+1]]])}return y+Oc([[`${l-1} |`,T[o-1]],[`${l} |`,D],["|","^".padStart(p)],[`${l+1} |`,T[o+1]]])}function Oc(i){const n=i.filter(([s,o])=>o!==void 0),t=Math.max(...n.map(([s])=>s.length));return n.map(([s,o])=>s.padStart(t)+(o?" "+o:"")).join(`
`)}function II(i){const n=i[0];return n==null||"kind"in n||"length"in n?{nodes:n,source:i[1],positions:i[2],path:i[3],originalError:i[4],extensions:i[5]}:n}class j extends Error{constructor(n,...t){var s,o,u;const{nodes:l,source:d,positions:p,path:y,originalError:T,extensions:D}=II(t);super(n),this.name="GraphQLError",this.path=y??void 0,this.originalError=T??void 0,this.nodes=Rc(Array.isArray(l)?l:l?[l]:void 0);const S=Rc((s=this.nodes)===null||s===void 0?void 0:s.map(x=>x.loc).filter(x=>x!=null));this.source=d??(S==null||(o=S[0])===null||o===void 0?void 0:o.source),this.positions=p??(S==null?void 0:S.map(x=>x.start)),this.locations=p&&d?p.map(x=>da(d,x)):S==null?void 0:S.map(x=>da(x.source,x.start));const R=Ot(T==null?void 0:T.extensions)?T==null?void 0:T.extensions:void 0;this.extensions=(u=D??R)!==null&&u!==void 0?u:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),T!=null&&T.stack?Object.defineProperty(this,"stack",{value:T.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,j):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let n=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(n+=`

`+EI(t.loc));else if(this.source&&this.locations)for(const t of this.locations)n+=`

`+sf(this.source,t);return n}toJSON(){const n={message:this.message};return this.locations!=null&&(n.locations=this.locations),this.path!=null&&(n.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(n.extensions=this.extensions),n}}function Rc(i){return i===void 0||i.length===0?void 0:i}function ze(i,n,t){return new j(`Syntax Error: ${t}`,{source:i,positions:[n]})}class DI{constructor(n,t,s){this.start=n.start,this.end=t.end,this.startToken=n,this.endToken=t,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class of{constructor(n,t,s,o,u,l){this.kind=n,this.start=t,this.end=s,this.line=o,this.column=u,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const af={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},vI=new Set(Object.keys(af));function kc(i){const n=i==null?void 0:i.kind;return typeof n=="string"&&vI.has(n)}var Pn;(function(i){i.QUERY="query",i.MUTATION="mutation",i.SUBSCRIPTION="subscription"})(Pn||(Pn={}));var Q;(function(i){i.QUERY="QUERY",i.MUTATION="MUTATION",i.SUBSCRIPTION="SUBSCRIPTION",i.FIELD="FIELD",i.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",i.FRAGMENT_SPREAD="FRAGMENT_SPREAD",i.INLINE_FRAGMENT="INLINE_FRAGMENT",i.VARIABLE_DEFINITION="VARIABLE_DEFINITION",i.SCHEMA="SCHEMA",i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.FIELD_DEFINITION="FIELD_DEFINITION",i.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.ENUM_VALUE="ENUM_VALUE",i.INPUT_OBJECT="INPUT_OBJECT",i.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Q||(Q={}));var _;(function(i){i.NAME="Name",i.DOCUMENT="Document",i.OPERATION_DEFINITION="OperationDefinition",i.VARIABLE_DEFINITION="VariableDefinition",i.SELECTION_SET="SelectionSet",i.FIELD="Field",i.ARGUMENT="Argument",i.FRAGMENT_SPREAD="FragmentSpread",i.INLINE_FRAGMENT="InlineFragment",i.FRAGMENT_DEFINITION="FragmentDefinition",i.VARIABLE="Variable",i.INT="IntValue",i.FLOAT="FloatValue",i.STRING="StringValue",i.BOOLEAN="BooleanValue",i.NULL="NullValue",i.ENUM="EnumValue",i.LIST="ListValue",i.OBJECT="ObjectValue",i.OBJECT_FIELD="ObjectField",i.DIRECTIVE="Directive",i.NAMED_TYPE="NamedType",i.LIST_TYPE="ListType",i.NON_NULL_TYPE="NonNullType",i.SCHEMA_DEFINITION="SchemaDefinition",i.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",i.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",i.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",i.FIELD_DEFINITION="FieldDefinition",i.INPUT_VALUE_DEFINITION="InputValueDefinition",i.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",i.UNION_TYPE_DEFINITION="UnionTypeDefinition",i.ENUM_TYPE_DEFINITION="EnumTypeDefinition",i.ENUM_VALUE_DEFINITION="EnumValueDefinition",i.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",i.DIRECTIVE_DEFINITION="DirectiveDefinition",i.SCHEMA_EXTENSION="SchemaExtension",i.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",i.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",i.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",i.UNION_TYPE_EXTENSION="UnionTypeExtension",i.ENUM_TYPE_EXTENSION="EnumTypeExtension",i.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(_||(_={}));function pa(i){return i===9||i===32}function lr(i){return i>=48&&i<=57}function uf(i){return i>=97&&i<=122||i>=65&&i<=90}function Sa(i){return uf(i)||i===95}function lf(i){return uf(i)||lr(i)||i===95}function _I(i){var n;let t=Number.MAX_SAFE_INTEGER,s=null,o=-1;for(let l=0;l<i.length;++l){var u;const d=i[l],p=AI(d);p!==d.length&&(s=(u=s)!==null&&u!==void 0?u:l,o=l,l!==0&&p<t&&(t=p))}return i.map((l,d)=>d===0?l:l.slice(t)).slice((n=s)!==null&&n!==void 0?n:0,o+1)}function AI(i){let n=0;for(;n<i.length&&pa(i.charCodeAt(n));)++n;return n}function bI(i,n){const t=i.replace(/"""/g,'\\"""'),s=t.split(/\r\n|[\n\r]/g),o=s.length===1,u=s.length>1&&s.slice(1).every(R=>R.length===0||pa(R.charCodeAt(0))),l=t.endsWith('\\"""'),d=i.endsWith('"')&&!l,p=i.endsWith("\\"),y=d||p,T=!(n!=null&&n.minimize)&&(!o||i.length>70||y||u||l);let D="";const S=o&&pa(i.charCodeAt(0));return(T&&!S||u)&&(D+=`
`),D+=t,(T||y)&&(D+=`
`),'"""'+D+'"""'}var N;(function(i){i.SOF="<SOF>",i.EOF="<EOF>",i.BANG="!",i.DOLLAR="$",i.AMP="&",i.PAREN_L="(",i.PAREN_R=")",i.SPREAD="...",i.COLON=":",i.EQUALS="=",i.AT="@",i.BRACKET_L="[",i.BRACKET_R="]",i.BRACE_L="{",i.PIPE="|",i.BRACE_R="}",i.NAME="Name",i.INT="Int",i.FLOAT="Float",i.STRING="String",i.BLOCK_STRING="BlockString",i.COMMENT="Comment"})(N||(N={}));class wI{constructor(n){const t=new of(N.SOF,0,0,0,0);this.source=n,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let n=this.token;if(n.kind!==N.EOF)do if(n.next)n=n.next;else{const t=CI(this,n.end);n.next=t,t.prev=n,n=t}while(n.kind===N.COMMENT);return n}}function SI(i){return i===N.BANG||i===N.DOLLAR||i===N.AMP||i===N.PAREN_L||i===N.PAREN_R||i===N.SPREAD||i===N.COLON||i===N.EQUALS||i===N.AT||i===N.BRACKET_L||i===N.BRACKET_R||i===N.BRACE_L||i===N.PIPE||i===N.BRACE_R}function ki(i){return i>=0&&i<=55295||i>=57344&&i<=1114111}function As(i,n){return cf(i.charCodeAt(n))&&ff(i.charCodeAt(n+1))}function cf(i){return i>=55296&&i<=56319}function ff(i){return i>=56320&&i<=57343}function li(i,n){const t=i.source.body.codePointAt(n);if(t===void 0)return N.EOF;if(t>=32&&t<=126){const s=String.fromCodePoint(t);return s==='"'?`'"'`:`"${s}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function qe(i,n,t,s,o){const u=i.line,l=1+t-i.lineStart;return new of(n,t,s,u,l,o)}function CI(i,n){const t=i.source.body,s=t.length;let o=n;for(;o<s;){const u=t.charCodeAt(o);switch(u){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++i.line,i.lineStart=o;continue;case 13:t.charCodeAt(o+1)===10?o+=2:++o,++i.line,i.lineStart=o;continue;case 35:return FI(i,o);case 33:return qe(i,N.BANG,o,o+1);case 36:return qe(i,N.DOLLAR,o,o+1);case 38:return qe(i,N.AMP,o,o+1);case 40:return qe(i,N.PAREN_L,o,o+1);case 41:return qe(i,N.PAREN_R,o,o+1);case 46:if(t.charCodeAt(o+1)===46&&t.charCodeAt(o+2)===46)return qe(i,N.SPREAD,o,o+3);break;case 58:return qe(i,N.COLON,o,o+1);case 61:return qe(i,N.EQUALS,o,o+1);case 64:return qe(i,N.AT,o,o+1);case 91:return qe(i,N.BRACKET_L,o,o+1);case 93:return qe(i,N.BRACKET_R,o,o+1);case 123:return qe(i,N.BRACE_L,o,o+1);case 124:return qe(i,N.PIPE,o,o+1);case 125:return qe(i,N.BRACE_R,o,o+1);case 34:return t.charCodeAt(o+1)===34&&t.charCodeAt(o+2)===34?LI(i,o):OI(i,o)}if(lr(u)||u===45)return NI(i,o,u);if(Sa(u))return BI(i,o);throw ze(i.source,o,u===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:ki(u)||As(t,o)?`Unexpected character: ${li(i,o)}.`:`Invalid character: ${li(i,o)}.`)}return qe(i,N.EOF,s,s)}function FI(i,n){const t=i.source.body,s=t.length;let o=n+1;for(;o<s;){const u=t.charCodeAt(o);if(u===10||u===13)break;if(ki(u))++o;else if(As(t,o))o+=2;else break}return qe(i,N.COMMENT,n,o,t.slice(n+1,o))}function NI(i,n,t){const s=i.source.body;let o=n,u=t,l=!1;if(u===45&&(u=s.charCodeAt(++o)),u===48){if(u=s.charCodeAt(++o),lr(u))throw ze(i.source,o,`Invalid number, unexpected digit after 0: ${li(i,o)}.`)}else o=ra(i,o,u),u=s.charCodeAt(o);if(u===46&&(l=!0,u=s.charCodeAt(++o),o=ra(i,o,u),u=s.charCodeAt(o)),(u===69||u===101)&&(l=!0,u=s.charCodeAt(++o),(u===43||u===45)&&(u=s.charCodeAt(++o)),o=ra(i,o,u),u=s.charCodeAt(o)),u===46||Sa(u))throw ze(i.source,o,`Invalid number, expected digit but got: ${li(i,o)}.`);return qe(i,l?N.FLOAT:N.INT,n,o,s.slice(n,o))}function ra(i,n,t){if(!lr(t))throw ze(i.source,n,`Invalid number, expected digit but got: ${li(i,n)}.`);const s=i.source.body;let o=n+1;for(;lr(s.charCodeAt(o));)++o;return o}function OI(i,n){const t=i.source.body,s=t.length;let o=n+1,u=o,l="";for(;o<s;){const d=t.charCodeAt(o);if(d===34)return l+=t.slice(u,o),qe(i,N.STRING,n,o+1,l);if(d===92){l+=t.slice(u,o);const p=t.charCodeAt(o+1)===117?t.charCodeAt(o+2)===123?RI(i,o):kI(i,o):xI(i,o);l+=p.value,o+=p.size,u=o;continue}if(d===10||d===13)break;if(ki(d))++o;else if(As(t,o))o+=2;else throw ze(i.source,o,`Invalid character within String: ${li(i,o)}.`)}throw ze(i.source,o,"Unterminated string.")}function RI(i,n){const t=i.source.body;let s=0,o=3;for(;o<12;){const u=t.charCodeAt(n+o++);if(u===125){if(o<5||!ki(s))break;return{value:String.fromCodePoint(s),size:o}}if(s=s<<4|ir(u),s<0)break}throw ze(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+o)}".`)}function kI(i,n){const t=i.source.body,s=xc(t,n+2);if(ki(s))return{value:String.fromCodePoint(s),size:6};if(cf(s)&&t.charCodeAt(n+6)===92&&t.charCodeAt(n+7)===117){const o=xc(t,n+8);if(ff(o))return{value:String.fromCodePoint(s,o),size:12}}throw ze(i.source,n,`Invalid Unicode escape sequence: "${t.slice(n,n+6)}".`)}function xc(i,n){return ir(i.charCodeAt(n))<<12|ir(i.charCodeAt(n+1))<<8|ir(i.charCodeAt(n+2))<<4|ir(i.charCodeAt(n+3))}function ir(i){return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:-1}function xI(i,n){const t=i.source.body;switch(t.charCodeAt(n+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw ze(i.source,n,`Invalid character escape sequence: "${t.slice(n,n+2)}".`)}function LI(i,n){const t=i.source.body,s=t.length;let o=i.lineStart,u=n+3,l=u,d="";const p=[];for(;u<s;){const y=t.charCodeAt(u);if(y===34&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34){d+=t.slice(l,u),p.push(d);const T=qe(i,N.BLOCK_STRING,n,u+3,_I(p).join(`
`));return i.line+=p.length-1,i.lineStart=o,T}if(y===92&&t.charCodeAt(u+1)===34&&t.charCodeAt(u+2)===34&&t.charCodeAt(u+3)===34){d+=t.slice(l,u),l=u+1,u+=4;continue}if(y===10||y===13){d+=t.slice(l,u),p.push(d),y===13&&t.charCodeAt(u+1)===10?u+=2:++u,d="",l=u,o=u;continue}if(ki(y))++u;else if(As(t,u))u+=2;else throw ze(i.source,u,`Invalid character within String: ${li(i,u)}.`)}throw ze(i.source,u,"Unterminated string.")}function BI(i,n){const t=i.source.body,s=t.length;let o=n+1;for(;o<s;){const u=t.charCodeAt(o);if(lf(u))++o;else break}return qe(i,N.NAME,n,o,t.slice(n,o))}const PI=10,df=2;function Y(i){return bs(i,[])}function bs(i,n){switch(typeof i){case"string":return JSON.stringify(i);case"function":return i.name?`[function ${i.name}]`:"[function]";case"object":return UI(i,n);default:return String(i)}}function UI(i,n){if(i===null)return"null";if(n.includes(i))return"[Circular]";const t=[...n,i];if(MI(i)){const s=i.toJSON();if(s!==i)return typeof s=="string"?s:bs(s,t)}else if(Array.isArray(i))return VI(i,t);return $I(i,t)}function MI(i){return typeof i.toJSON=="function"}function $I(i,n){const t=Object.entries(i);return t.length===0?"{}":n.length>df?"["+GI(i)+"]":"{ "+t.map(([o,u])=>o+": "+bs(u,n)).join(", ")+" }"}function VI(i,n){if(i.length===0)return"[]";if(n.length>df)return"[Array]";const t=Math.min(PI,i.length),s=i.length-t,o=[];for(let u=0;u<t;++u)o.push(bs(i[u],n));return s===1?o.push("... 1 more item"):s>1&&o.push(`... ${s} more items`),"["+o.join(", ")+"]"}function GI(i){const n=Object.prototype.toString.call(i).replace(/^\[object /,"").replace(/]$/,"");if(n==="Object"&&typeof i.constructor=="function"){const t=i.constructor.name;if(typeof t=="string"&&t!=="")return t}return n}const ht=globalThis.process?function(n,t){return n instanceof t}:function(n,t){if(n instanceof t)return!0;if(typeof n=="object"&&n!==null){var s;const o=t.prototype[Symbol.toStringTag],u=Symbol.toStringTag in n?n[Symbol.toStringTag]:(s=n.constructor)===null||s===void 0?void 0:s.name;if(o===u){const l=Y(n);throw new Error(`Cannot use ${o} "${l}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class pf{constructor(n,t="GraphQL request",s={line:1,column:1}){typeof n=="string"||de(!1,`Body must be a string. Received: ${Y(n)}.`),this.body=n,this.name=t,this.locationOffset=s,this.locationOffset.line>0||de(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||de(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function qI(i){return ht(i,pf)}function jI(i,n){return new hf(i,n).parseDocument()}function WI(i,n){const t=new hf(i,n);t.expectToken(N.SOF);const s=t.parseValueLiteral(!1);return t.expectToken(N.EOF),s}class hf{constructor(n,t={}){const s=qI(n)?n:new pf(n);this._lexer=new wI(s),this._options=t,this._tokenCounter=0}parseName(){const n=this.expectToken(N.NAME);return this.node(n,{kind:_.NAME,value:n.value})}parseDocument(){return this.node(this._lexer.token,{kind:_.DOCUMENT,definitions:this.many(N.SOF,this.parseDefinition,N.EOF)})}parseDefinition(){if(this.peek(N.BRACE_L))return this.parseOperationDefinition();const n=this.peekDescription(),t=n?this._lexer.lookahead():this._lexer.token;if(t.kind===N.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(n)throw ze(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const n=this._lexer.token;if(this.peek(N.BRACE_L))return this.node(n,{kind:_.OPERATION_DEFINITION,operation:Pn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let s;return this.peek(N.NAME)&&(s=this.parseName()),this.node(n,{kind:_.OPERATION_DEFINITION,operation:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const n=this.expectToken(N.NAME);switch(n.value){case"query":return Pn.QUERY;case"mutation":return Pn.MUTATION;case"subscription":return Pn.SUBSCRIPTION}throw this.unexpected(n)}parseVariableDefinitions(){return this.optionalMany(N.PAREN_L,this.parseVariableDefinition,N.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:_.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(N.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(N.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const n=this._lexer.token;return this.expectToken(N.DOLLAR),this.node(n,{kind:_.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:_.SELECTION_SET,selections:this.many(N.BRACE_L,this.parseSelection,N.BRACE_R)})}parseSelection(){return this.peek(N.SPREAD)?this.parseFragment():this.parseField()}parseField(){const n=this._lexer.token,t=this.parseName();let s,o;return this.expectOptionalToken(N.COLON)?(s=t,o=this.parseName()):o=t,this.node(n,{kind:_.FIELD,alias:s,name:o,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(N.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(n){const t=n?this.parseConstArgument:this.parseArgument;return this.optionalMany(N.PAREN_L,t,N.PAREN_R)}parseArgument(n=!1){const t=this._lexer.token,s=this.parseName();return this.expectToken(N.COLON),this.node(t,{kind:_.ARGUMENT,name:s,value:this.parseValueLiteral(n)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const n=this._lexer.token;this.expectToken(N.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(N.NAME)?this.node(n,{kind:_.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(n,{kind:_.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const n=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(n,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:_.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(n){const t=this._lexer.token;switch(t.kind){case N.BRACKET_L:return this.parseList(n);case N.BRACE_L:return this.parseObject(n);case N.INT:return this.advanceLexer(),this.node(t,{kind:_.INT,value:t.value});case N.FLOAT:return this.advanceLexer(),this.node(t,{kind:_.FLOAT,value:t.value});case N.STRING:case N.BLOCK_STRING:return this.parseStringLiteral();case N.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:_.BOOLEAN,value:!0});case"false":return this.node(t,{kind:_.BOOLEAN,value:!1});case"null":return this.node(t,{kind:_.NULL});default:return this.node(t,{kind:_.ENUM,value:t.value})}case N.DOLLAR:if(n)if(this.expectToken(N.DOLLAR),this._lexer.token.kind===N.NAME){const s=this._lexer.token.value;throw ze(this._lexer.source,t.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const n=this._lexer.token;return this.advanceLexer(),this.node(n,{kind:_.STRING,value:n.value,block:n.kind===N.BLOCK_STRING})}parseList(n){const t=()=>this.parseValueLiteral(n);return this.node(this._lexer.token,{kind:_.LIST,values:this.any(N.BRACKET_L,t,N.BRACKET_R)})}parseObject(n){const t=()=>this.parseObjectField(n);return this.node(this._lexer.token,{kind:_.OBJECT,fields:this.any(N.BRACE_L,t,N.BRACE_R)})}parseObjectField(n){const t=this._lexer.token,s=this.parseName();return this.expectToken(N.COLON),this.node(t,{kind:_.OBJECT_FIELD,name:s,value:this.parseValueLiteral(n)})}parseDirectives(n){const t=[];for(;this.peek(N.AT);)t.push(this.parseDirective(n));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(n){const t=this._lexer.token;return this.expectToken(N.AT),this.node(t,{kind:_.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(n)})}parseTypeReference(){const n=this._lexer.token;let t;if(this.expectOptionalToken(N.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(N.BRACKET_R),t=this.node(n,{kind:_.LIST_TYPE,type:s})}else t=this.parseNamedType();return this.expectOptionalToken(N.BANG)?this.node(n,{kind:_.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:_.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(N.STRING)||this.peek(N.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),o=this.many(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);return this.node(n,{kind:_.SCHEMA_DEFINITION,description:t,directives:s,operationTypes:o})}parseOperationTypeDefinition(){const n=this._lexer.token,t=this.parseOperationType();this.expectToken(N.COLON);const s=this.parseNamedType();return this.node(n,{kind:_.OPERATION_TYPE_DEFINITION,operation:t,type:s})}parseScalarTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),o=this.parseConstDirectives();return this.node(n,{kind:_.SCALAR_TYPE_DEFINITION,description:t,name:s,directives:o})}parseObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:_.OBJECT_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(N.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseFieldDefinition,N.BRACE_R)}parseFieldDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName(),o=this.parseArgumentDefs();this.expectToken(N.COLON);const u=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(n,{kind:_.FIELD_DEFINITION,description:t,name:s,arguments:o,type:u,directives:l})}parseArgumentDefs(){return this.optionalMany(N.PAREN_L,this.parseInputValueDef,N.PAREN_R)}parseInputValueDef(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseName();this.expectToken(N.COLON);const o=this.parseTypeReference();let u;this.expectOptionalToken(N.EQUALS)&&(u=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(n,{kind:_.INPUT_VALUE_DEFINITION,description:t,name:s,type:o,defaultValue:u,directives:l})}parseInterfaceTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),o=this.parseImplementsInterfaces(),u=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(n,{kind:_.INTERFACE_TYPE_DEFINITION,description:t,name:s,interfaces:o,directives:u,fields:l})}parseUnionTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseUnionMemberTypes();return this.node(n,{kind:_.UNION_TYPE_DEFINITION,description:t,name:s,directives:o,types:u})}parseUnionMemberTypes(){return this.expectOptionalToken(N.EQUALS)?this.delimitedMany(N.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseEnumValuesDefinition();return this.node(n,{kind:_.ENUM_TYPE_DEFINITION,description:t,name:s,directives:o,values:u})}parseEnumValuesDefinition(){return this.optionalMany(N.BRACE_L,this.parseEnumValueDefinition,N.BRACE_R)}parseEnumValueDefinition(){const n=this._lexer.token,t=this.parseDescription(),s=this.parseEnumValueName(),o=this.parseConstDirectives();return this.node(n,{kind:_.ENUM_VALUE_DEFINITION,description:t,name:s,directives:o})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw ze(this._lexer.source,this._lexer.token.start,`${us(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),o=this.parseConstDirectives(),u=this.parseInputFieldsDefinition();return this.node(n,{kind:_.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:s,directives:o,fields:u})}parseInputFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseInputValueDef,N.BRACE_R)}parseTypeSystemExtension(){const n=this._lexer.lookahead();if(n.kind===N.NAME)switch(n.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(n)}parseSchemaExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),s=this.optionalMany(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);if(t.length===0&&s.length===0)throw this.unexpected();return this.node(n,{kind:_.SCHEMA_EXTENSION,directives:t,operationTypes:s})}parseScalarTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(n,{kind:_.SCALAR_TYPE_EXTENSION,name:t,directives:s})}parseObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:_.OBJECT_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseInterfaceTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),s=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),u=this.parseFieldsDefinition();if(s.length===0&&o.length===0&&u.length===0)throw this.unexpected();return this.node(n,{kind:_.INTERFACE_TYPE_EXTENSION,name:t,interfaces:s,directives:o,fields:u})}parseUnionTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseUnionMemberTypes();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:_.UNION_TYPE_EXTENSION,name:t,directives:s,types:o})}parseEnumTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:_.ENUM_TYPE_EXTENSION,name:t,directives:s,values:o})}parseInputObjectTypeExtension(){const n=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),s=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();if(s.length===0&&o.length===0)throw this.unexpected();return this.node(n,{kind:_.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:s,fields:o})}parseDirectiveDefinition(){const n=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(N.AT);const s=this.parseName(),o=this.parseArgumentDefs(),u=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(n,{kind:_.DIRECTIVE_DEFINITION,description:t,name:s,arguments:o,repeatable:u,locations:l})}parseDirectiveLocations(){return this.delimitedMany(N.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const n=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(Q,t.value))return t;throw this.unexpected(n)}node(n,t){return this._options.noLocation!==!0&&(t.loc=new DI(n,this._lexer.lastToken,this._lexer.source)),t}peek(n){return this._lexer.token.kind===n}expectToken(n){const t=this._lexer.token;if(t.kind===n)return this.advanceLexer(),t;throw ze(this._lexer.source,t.start,`Expected ${mf(n)}, found ${us(t)}.`)}expectOptionalToken(n){return this._lexer.token.kind===n?(this.advanceLexer(),!0):!1}expectKeyword(n){const t=this._lexer.token;if(t.kind===N.NAME&&t.value===n)this.advanceLexer();else throw ze(this._lexer.source,t.start,`Expected "${n}", found ${us(t)}.`)}expectOptionalKeyword(n){const t=this._lexer.token;return t.kind===N.NAME&&t.value===n?(this.advanceLexer(),!0):!1}unexpected(n){const t=n??this._lexer.token;return ze(this._lexer.source,t.start,`Unexpected ${us(t)}.`)}any(n,t,s){this.expectToken(n);const o=[];for(;!this.expectOptionalToken(s);)o.push(t.call(this));return o}optionalMany(n,t,s){if(this.expectOptionalToken(n)){const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}return[]}many(n,t,s){this.expectToken(n);const o=[];do o.push(t.call(this));while(!this.expectOptionalToken(s));return o}delimitedMany(n,t){this.expectOptionalToken(n);const s=[];do s.push(t.call(this));while(this.expectOptionalToken(n));return s}advanceLexer(){const{maxTokens:n}=this._options,t=this._lexer.advance();if(n!==void 0&&t.kind!==N.EOF&&(++this._tokenCounter,this._tokenCounter>n))throw ze(this._lexer.source,t.start,`Document contains more that ${n} tokens. Parsing aborted.`)}}function us(i){const n=i.value;return mf(i.kind)+(n!=null?` "${n}"`:"")}function mf(i){return SI(i)?`"${i}"`:i}const YI=5;function ws(i,n){const[t,s]=n?[i,n]:[void 0,i];let o=" Did you mean ";t&&(o+=t+" ");const u=s.map(p=>`"${p}"`);switch(u.length){case 0:return"";case 1:return o+u[0]+"?";case 2:return o+u[0]+" or "+u[1]+"?"}const l=u.slice(0,YI),d=l.pop();return o+l.join(", ")+", or "+d+"?"}function Lc(i){return i}function Oi(i,n){const t=Object.create(null);for(const s of i)t[n(s)]=s;return t}function ai(i,n,t){const s=Object.create(null);for(const o of i)s[n(o)]=t(o);return s}function wt(i,n){const t=Object.create(null);for(const s of Object.keys(i))t[s]=n(i[s],s);return t}function QI(i,n){let t=0,s=0;for(;t<i.length&&s<n.length;){let o=i.charCodeAt(t),u=n.charCodeAt(s);if(ls(o)&&ls(u)){let l=0;do++t,l=l*10+o-ha,o=i.charCodeAt(t);while(ls(o)&&l>0);let d=0;do++s,d=d*10+u-ha,u=n.charCodeAt(s);while(ls(u)&&d>0);if(l<d)return-1;if(l>d)return 1}else{if(o<u)return-1;if(o>u)return 1;++t,++s}}return i.length-n.length}const ha=48,zI=57;function ls(i){return!isNaN(i)&&ha<=i&&i<=zI}function Ss(i,n){const t=Object.create(null),s=new JI(i),o=Math.floor(i.length*.4)+1;for(const u of n){const l=s.measure(u,o);l!==void 0&&(t[u]=l)}return Object.keys(t).sort((u,l)=>{const d=t[u]-t[l];return d!==0?d:QI(u,l)})}class JI{constructor(n){this._input=n,this._inputLowerCase=n.toLowerCase(),this._inputArray=Bc(this._inputLowerCase),this._rows=[new Array(n.length+1).fill(0),new Array(n.length+1).fill(0),new Array(n.length+1).fill(0)]}measure(n,t){if(this._input===n)return 0;const s=n.toLowerCase();if(this._inputLowerCase===s)return 1;let o=Bc(s),u=this._inputArray;if(o.length<u.length){const T=o;o=u,u=T}const l=o.length,d=u.length;if(l-d>t)return;const p=this._rows;for(let T=0;T<=d;T++)p[0][T]=T;for(let T=1;T<=l;T++){const D=p[(T-1)%3],S=p[T%3];let R=S[0]=T;for(let x=1;x<=d;x++){const L=o[T-1]===u[x-1]?0:1;let X=Math.min(D[x]+1,S[x-1]+1,D[x-1]+L);if(T>1&&x>1&&o[T-1]===u[x-2]&&o[T-2]===u[x-1]){const he=p[(T-2)%3][x-2];X=Math.min(X,he+1)}X<R&&(R=X),S[x]=X}if(R>t)return}const y=p[l%3][d];return y<=t?y:void 0}}function Bc(i){const n=i.length,t=new Array(n);for(let s=0;s<n;++s)t[s]=i.charCodeAt(s);return t}function Mn(i){if(i==null)return Object.create(null);if(Object.getPrototypeOf(i)===null)return i;const n=Object.create(null);for(const[t,s]of Object.entries(i))n[t]=s;return n}function HI(i){return`"${i.replace(XI,KI)}"`}const XI=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function KI(i){return ZI[i.charCodeAt(0)]}const ZI=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],rr=Object.freeze({});function gf(i,n,t=af){const s=new Map;for(const he of Object.values(_))s.set(he,yf(n,he));let o,u=Array.isArray(i),l=[i],d=-1,p=[],y=i,T,D;const S=[],R=[];do{d++;const he=d===l.length,Ge=he&&p.length!==0;if(he){if(T=R.length===0?void 0:S[S.length-1],y=D,D=R.pop(),Ge)if(u){y=y.slice();let Ne=0;for(const[xe,rn]of p){const Ke=xe-Ne;rn===null?(y.splice(Ke,1),Ne++):y[Ke]=rn}}else{y=Object.defineProperties({},Object.getOwnPropertyDescriptors(y));for(const[Ne,xe]of p)y[Ne]=xe}d=o.index,l=o.keys,p=o.edits,u=o.inArray,o=o.prev}else if(D){if(T=u?d:l[d],y=D[T],y==null)continue;S.push(T)}let be;if(!Array.isArray(y)){var x,L;kc(y)||de(!1,`Invalid AST Node: ${Y(y)}.`);const Ne=he?(x=s.get(y.kind))===null||x===void 0?void 0:x.leave:(L=s.get(y.kind))===null||L===void 0?void 0:L.enter;if(be=Ne==null?void 0:Ne.call(n,y,T,D,S,R),be===rr)break;if(be===!1){if(!he){S.pop();continue}}else if(be!==void 0&&(p.push([T,be]),!he))if(kc(be))y=be;else{S.pop();continue}}if(be===void 0&&Ge&&p.push([T,y]),he)S.pop();else{var X;o={inArray:u,index:d,keys:l,edits:p,prev:o},u=Array.isArray(y),l=u?y:(X=t[y.kind])!==null&&X!==void 0?X:[],d=-1,p=[],D&&R.push(D),D=y}}while(o!==void 0);return p.length!==0?p[p.length-1][1]:i}function eD(i){const n=new Array(i.length).fill(null),t=Object.create(null);for(const s of Object.values(_)){let o=!1;const u=new Array(i.length).fill(void 0),l=new Array(i.length).fill(void 0);for(let p=0;p<i.length;++p){const{enter:y,leave:T}=yf(i[p],s);o||(o=y!=null||T!=null),u[p]=y,l[p]=T}if(!o)continue;const d={enter(...p){const y=p[0];for(let D=0;D<i.length;D++)if(n[D]===null){var T;const S=(T=u[D])===null||T===void 0?void 0:T.apply(i[D],p);if(S===!1)n[D]=y;else if(S===rr)n[D]=rr;else if(S!==void 0)return S}},leave(...p){const y=p[0];for(let D=0;D<i.length;D++)if(n[D]===null){var T;const S=(T=l[D])===null||T===void 0?void 0:T.apply(i[D],p);if(S===rr)n[D]=rr;else if(S!==void 0&&S!==!1)return S}else n[D]===y&&(n[D]=null)}};t[s]=d}return t}function yf(i,n){const t=i[n];return typeof t=="object"?t:typeof t=="function"?{enter:t,leave:void 0}:{enter:i.enter,leave:i.leave}}function dt(i){return gf(i,tD)}const nD=80,tD={Name:{leave:i=>i.value},Variable:{leave:i=>"$"+i.name},Document:{leave:i=>G(i.definitions,`

`)},OperationDefinition:{leave(i){const n=ce("(",G(i.variableDefinitions,", "),")"),t=G([i.operation,G([i.name,n]),G(i.directives," ")]," ");return(t==="query"?"":t+" ")+i.selectionSet}},VariableDefinition:{leave:({variable:i,type:n,defaultValue:t,directives:s})=>i+": "+n+ce(" = ",t)+ce(" ",G(s," "))},SelectionSet:{leave:({selections:i})=>Qn(i)},Field:{leave({alias:i,name:n,arguments:t,directives:s,selectionSet:o}){const u=ce("",i,": ")+n;let l=u+ce("(",G(t,", "),")");return l.length>nD&&(l=u+ce(`(
`,ds(G(t,`
`)),`
)`)),G([l,G(s," "),o]," ")}},Argument:{leave:({name:i,value:n})=>i+": "+n},FragmentSpread:{leave:({name:i,directives:n})=>"..."+i+ce(" ",G(n," "))},InlineFragment:{leave:({typeCondition:i,directives:n,selectionSet:t})=>G(["...",ce("on ",i),G(n," "),t]," ")},FragmentDefinition:{leave:({name:i,typeCondition:n,variableDefinitions:t,directives:s,selectionSet:o})=>`fragment ${i}${ce("(",G(t,", "),")")} on ${n} ${ce("",G(s," ")," ")}`+o},IntValue:{leave:({value:i})=>i},FloatValue:{leave:({value:i})=>i},StringValue:{leave:({value:i,block:n})=>n?bI(i):HI(i)},BooleanValue:{leave:({value:i})=>i?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:i})=>i},ListValue:{leave:({values:i})=>"["+G(i,", ")+"]"},ObjectValue:{leave:({fields:i})=>"{"+G(i,", ")+"}"},ObjectField:{leave:({name:i,value:n})=>i+": "+n},Directive:{leave:({name:i,arguments:n})=>"@"+i+ce("(",G(n,", "),")")},NamedType:{leave:({name:i})=>i},ListType:{leave:({type:i})=>"["+i+"]"},NonNullType:{leave:({type:i})=>i+"!"},SchemaDefinition:{leave:({description:i,directives:n,operationTypes:t})=>ce("",i,`
`)+G(["schema",G(n," "),Qn(t)]," ")},OperationTypeDefinition:{leave:({operation:i,type:n})=>i+": "+n},ScalarTypeDefinition:{leave:({description:i,name:n,directives:t})=>ce("",i,`
`)+G(["scalar",n,G(t," ")]," ")},ObjectTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:o})=>ce("",i,`
`)+G(["type",n,ce("implements ",G(t," & ")),G(s," "),Qn(o)]," ")},FieldDefinition:{leave:({description:i,name:n,arguments:t,type:s,directives:o})=>ce("",i,`
`)+n+(Pc(t)?ce(`(
`,ds(G(t,`
`)),`
)`):ce("(",G(t,", "),")"))+": "+s+ce(" ",G(o," "))},InputValueDefinition:{leave:({description:i,name:n,type:t,defaultValue:s,directives:o})=>ce("",i,`
`)+G([n+": "+t,ce("= ",s),G(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:i,name:n,interfaces:t,directives:s,fields:o})=>ce("",i,`
`)+G(["interface",n,ce("implements ",G(t," & ")),G(s," "),Qn(o)]," ")},UnionTypeDefinition:{leave:({description:i,name:n,directives:t,types:s})=>ce("",i,`
`)+G(["union",n,G(t," "),ce("= ",G(s," | "))]," ")},EnumTypeDefinition:{leave:({description:i,name:n,directives:t,values:s})=>ce("",i,`
`)+G(["enum",n,G(t," "),Qn(s)]," ")},EnumValueDefinition:{leave:({description:i,name:n,directives:t})=>ce("",i,`
`)+G([n,G(t," ")]," ")},InputObjectTypeDefinition:{leave:({description:i,name:n,directives:t,fields:s})=>ce("",i,`
`)+G(["input",n,G(t," "),Qn(s)]," ")},DirectiveDefinition:{leave:({description:i,name:n,arguments:t,repeatable:s,locations:o})=>ce("",i,`
`)+"directive @"+n+(Pc(t)?ce(`(
`,ds(G(t,`
`)),`
)`):ce("(",G(t,", "),")"))+(s?" repeatable":"")+" on "+G(o," | ")},SchemaExtension:{leave:({directives:i,operationTypes:n})=>G(["extend schema",G(i," "),Qn(n)]," ")},ScalarTypeExtension:{leave:({name:i,directives:n})=>G(["extend scalar",i,G(n," ")]," ")},ObjectTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>G(["extend type",i,ce("implements ",G(n," & ")),G(t," "),Qn(s)]," ")},InterfaceTypeExtension:{leave:({name:i,interfaces:n,directives:t,fields:s})=>G(["extend interface",i,ce("implements ",G(n," & ")),G(t," "),Qn(s)]," ")},UnionTypeExtension:{leave:({name:i,directives:n,types:t})=>G(["extend union",i,G(n," "),ce("= ",G(t," | "))]," ")},EnumTypeExtension:{leave:({name:i,directives:n,values:t})=>G(["extend enum",i,G(n," "),Qn(t)]," ")},InputObjectTypeExtension:{leave:({name:i,directives:n,fields:t})=>G(["extend input",i,G(n," "),Qn(t)]," ")}};function G(i,n=""){var t;return(t=i==null?void 0:i.filter(s=>s).join(n))!==null&&t!==void 0?t:""}function Qn(i){return ce(`{
`,ds(G(i,`
`)),`
}`)}function ce(i,n,t=""){return n!=null&&n!==""?i+n+t:""}function ds(i){return ce("  ",i.replace(/\n/g,`
  `))}function Pc(i){var n;return(n=i==null?void 0:i.some(t=>t.includes(`
`)))!==null&&n!==void 0?n:!1}function ma(i,n){switch(i.kind){case _.NULL:return null;case _.INT:return parseInt(i.value,10);case _.FLOAT:return parseFloat(i.value);case _.STRING:case _.ENUM:case _.BOOLEAN:return i.value;case _.LIST:return i.values.map(t=>ma(t,n));case _.OBJECT:return ai(i.fields,t=>t.name.value,t=>ma(t.value,n));case _.VARIABLE:return n==null?void 0:n[i.name.value]}}function st(i){if(i!=null||de(!1,"Must provide name."),typeof i=="string"||de(!1,"Expected name to be a string."),i.length===0)throw new j("Expected name to be a non-empty string.");for(let n=1;n<i.length;++n)if(!lf(i.charCodeAt(n)))throw new j(`Names must only contain [_a-zA-Z0-9] but "${i}" does not.`);if(!Sa(i.charCodeAt(0)))throw new j(`Names must start with [_a-zA-Z] but "${i}" does not.`);return i}function iD(i){if(i==="true"||i==="false"||i==="null")throw new j(`Enum values cannot be named: ${i}`);return st(i)}function Ca(i){return Jt(i)||Tn(i)||cn(i)||Kn(i)||Zn(i)||et(i)||di(i)||ln(i)}function Jt(i){return ht(i,Rt)}function Tn(i){return ht(i,pt)}function rD(i){if(!Tn(i))throw new Error(`Expected ${Y(i)} to be a GraphQL Object type.`);return i}function cn(i){return ht(i,Ts)}function sD(i){if(!cn(i))throw new Error(`Expected ${Y(i)} to be a GraphQL Interface type.`);return i}function Kn(i){return ht(i,Es)}function Zn(i){return ht(i,Ri)}function et(i){return ht(i,Is)}function di(i){return ht(i,yn)}function ln(i){return ht(i,ae)}function Tf(i){return Jt(i)||Zn(i)||et(i)||Fa(i)&&Tf(i.ofType)}function Ef(i){return Jt(i)||Tn(i)||cn(i)||Kn(i)||Zn(i)||Fa(i)&&Ef(i.ofType)}function If(i){return Jt(i)||Zn(i)}function oD(i){return cn(i)||Kn(i)}class yn{constructor(n){Ca(n)||de(!1,`Expected ${Y(n)} to be a GraphQL type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLList"}toString(){return"["+String(this.ofType)+"]"}toJSON(){return this.toString()}}class ae{constructor(n){Df(n)||de(!1,`Expected ${Y(n)} to be a GraphQL nullable type.`),this.ofType=n}get[Symbol.toStringTag](){return"GraphQLNonNull"}toString(){return String(this.ofType)+"!"}toJSON(){return this.toString()}}function Fa(i){return di(i)||ln(i)}function Df(i){return Ca(i)&&!ln(i)}function aD(i){if(!Df(i))throw new Error(`Expected ${Y(i)} to be a GraphQL nullable type.`);return i}function Bv(i){return Jt(i)||Tn(i)||cn(i)||Kn(i)||Zn(i)||et(i)}function uD(i){if(i){let n=i;for(;Fa(n);)n=n.ofType;return n}}function vf(i){return typeof i=="function"?i():i}function _f(i){return typeof i=="function"?i():i}class Rt{constructor(n){var t,s,o,u;const l=(t=n.parseValue)!==null&&t!==void 0?t:Lc;this.name=st(n.name),this.description=n.description,this.specifiedByURL=n.specifiedByURL,this.serialize=(s=n.serialize)!==null&&s!==void 0?s:Lc,this.parseValue=l,this.parseLiteral=(o=n.parseLiteral)!==null&&o!==void 0?o:(d,p)=>l(ma(d,p)),this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(u=n.extensionASTNodes)!==null&&u!==void 0?u:[],n.specifiedByURL==null||typeof n.specifiedByURL=="string"||de(!1,`${this.name} must provide "specifiedByURL" as a string, but got: ${Y(n.specifiedByURL)}.`),n.serialize==null||typeof n.serialize=="function"||de(!1,`${this.name} must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.`),n.parseLiteral&&(typeof n.parseValue=="function"&&typeof n.parseLiteral=="function"||de(!1,`${this.name} must provide both "parseValue" and "parseLiteral" functions.`))}get[Symbol.toStringTag](){return"GraphQLScalarType"}toConfig(){return{name:this.name,description:this.description,specifiedByURL:this.specifiedByURL,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class pt{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.isTypeOf=n.isTypeOf,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=()=>bf(n),this._interfaces=()=>Af(n),n.isTypeOf==null||typeof n.isTypeOf=="function"||de(!1,`${this.name} must provide "isTypeOf" as a function, but got: ${Y(n.isTypeOf)}.`)}get[Symbol.toStringTag](){return"GraphQLObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Sf(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function Af(i){var n;const t=vf((n=i.interfaces)!==null&&n!==void 0?n:[]);return Array.isArray(t)||de(!1,`${i.name} interfaces must be an Array or a function which returns an Array.`),t}function bf(i){const n=_f(i.fields);return Ni(n)||de(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),wt(n,(t,s)=>{var o;Ni(t)||de(!1,`${i.name}.${s} field config must be an object.`),t.resolve==null||typeof t.resolve=="function"||de(!1,`${i.name}.${s} field resolver must be a function if provided, but got: ${Y(t.resolve)}.`);const u=(o=t.args)!==null&&o!==void 0?o:{};return Ni(u)||de(!1,`${i.name}.${s} args must be an object with argument names as keys.`),{name:st(s),description:t.description,type:t.type,args:wf(u),resolve:t.resolve,subscribe:t.subscribe,deprecationReason:t.deprecationReason,extensions:Mn(t.extensions),astNode:t.astNode}})}function wf(i){return Object.entries(i).map(([n,t])=>({name:st(n),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Mn(t.extensions),astNode:t.astNode}))}function Ni(i){return Ot(i)&&!Array.isArray(i)}function Sf(i){return wt(i,n=>({description:n.description,type:n.type,args:Cf(n.args),resolve:n.resolve,subscribe:n.subscribe,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function Cf(i){return ai(i,n=>n.name,n=>({description:n.description,type:n.type,defaultValue:n.defaultValue,deprecationReason:n.deprecationReason,extensions:n.extensions,astNode:n.astNode}))}function lD(i){return ln(i.type)&&i.defaultValue===void 0}class Ts{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=bf.bind(void 0,n),this._interfaces=Af.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||de(!1,`${this.name} must provide "resolveType" as a function, but got: ${Y(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLInterfaceType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}getInterfaces(){return typeof this._interfaces=="function"&&(this._interfaces=this._interfaces()),this._interfaces}toConfig(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:Sf(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}class Es{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.resolveType=n.resolveType,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._types=cD.bind(void 0,n),n.resolveType==null||typeof n.resolveType=="function"||de(!1,`${this.name} must provide "resolveType" as a function, but got: ${Y(n.resolveType)}.`)}get[Symbol.toStringTag](){return"GraphQLUnionType"}getTypes(){return typeof this._types=="function"&&(this._types=this._types()),this._types}toConfig(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function cD(i){const n=vf(i.types);return Array.isArray(n)||de(!1,`Must provide Array of types or a function which returns such an array for Union ${i.name}.`),n}class Ri{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._values=fD(this.name,n.values),this._valueLookup=new Map(this._values.map(s=>[s.value,s])),this._nameLookup=Oi(this._values,s=>s.name)}get[Symbol.toStringTag](){return"GraphQLEnumType"}getValues(){return this._values}getValue(n){return this._nameLookup[n]}serialize(n){const t=this._valueLookup.get(n);if(t===void 0)throw new j(`Enum "${this.name}" cannot represent value: ${Y(n)}`);return t.name}parseValue(n){if(typeof n!="string"){const s=Y(n);throw new j(`Enum "${this.name}" cannot represent non-string value: ${s}.`+cs(this,s))}const t=this.getValue(n);if(t==null)throw new j(`Value "${n}" does not exist in "${this.name}" enum.`+cs(this,n));return t.value}parseLiteral(n,t){if(n.kind!==_.ENUM){const o=dt(n);throw new j(`Enum "${this.name}" cannot represent non-enum value: ${o}.`+cs(this,o),{nodes:n})}const s=this.getValue(n.value);if(s==null){const o=dt(n);throw new j(`Value "${o}" does not exist in "${this.name}" enum.`+cs(this,o),{nodes:n})}return s.value}toConfig(){const n=ai(this.getValues(),t=>t.name,t=>({description:t.description,value:t.value,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,values:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function cs(i,n){const t=i.getValues().map(o=>o.name),s=Ss(n,t);return ws("the enum value",s)}function fD(i,n){return Ni(n)||de(!1,`${i} values must be an object with value names as keys.`),Object.entries(n).map(([t,s])=>(Ni(s)||de(!1,`${i}.${t} must refer to an object with a "value" key representing an internal value but got: ${Y(s)}.`),{name:iD(t),description:s.description,value:s.value!==void 0?s.value:t,deprecationReason:s.deprecationReason,extensions:Mn(s.extensions),astNode:s.astNode}))}class Is{constructor(n){var t;this.name=st(n.name),this.description=n.description,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._fields=dD.bind(void 0,n)}get[Symbol.toStringTag](){return"GraphQLInputObjectType"}getFields(){return typeof this._fields=="function"&&(this._fields=this._fields()),this._fields}toConfig(){const n=wt(this.getFields(),t=>({description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:t.extensions,astNode:t.astNode}));return{name:this.name,description:this.description,fields:n,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes}}toString(){return this.name}toJSON(){return this.toString()}}function dD(i){const n=_f(i.fields);return Ni(n)||de(!1,`${i.name} fields must be an object with field names as keys or a function which returns such an object.`),wt(n,(t,s)=>(!("resolve"in t)||de(!1,`${i.name}.${s} field has a resolve property, but Input Types cannot define resolvers.`),{name:st(s),description:t.description,type:t.type,defaultValue:t.defaultValue,deprecationReason:t.deprecationReason,extensions:Mn(t.extensions),astNode:t.astNode}))}const sa=2147483647,oa=-2147483648,pD=new Rt({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize(i){const n=dr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isInteger(t))throw new j(`Int cannot represent non-integer value: ${Y(n)}`);if(t>sa||t<oa)throw new j("Int cannot represent non 32-bit signed integer value: "+Y(n));return t},parseValue(i){if(typeof i!="number"||!Number.isInteger(i))throw new j(`Int cannot represent non-integer value: ${Y(i)}`);if(i>sa||i<oa)throw new j(`Int cannot represent non 32-bit signed integer value: ${i}`);return i},parseLiteral(i){if(i.kind!==_.INT)throw new j(`Int cannot represent non-integer value: ${dt(i)}`,{nodes:i});const n=parseInt(i.value,10);if(n>sa||n<oa)throw new j(`Int cannot represent non 32-bit signed integer value: ${i.value}`,{nodes:i});return n}}),hD=new Rt({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize(i){const n=dr(i);if(typeof n=="boolean")return n?1:0;let t=n;if(typeof n=="string"&&n!==""&&(t=Number(n)),typeof t!="number"||!Number.isFinite(t))throw new j(`Float cannot represent non numeric value: ${Y(n)}`);return t},parseValue(i){if(typeof i!="number"||!Number.isFinite(i))throw new j(`Float cannot represent non numeric value: ${Y(i)}`);return i},parseLiteral(i){if(i.kind!==_.FLOAT&&i.kind!==_.INT)throw new j(`Float cannot represent non numeric value: ${dt(i)}`,i);return parseFloat(i.value)}}),Ve=new Rt({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize(i){const n=dr(i);if(typeof n=="string")return n;if(typeof n=="boolean")return n?"true":"false";if(typeof n=="number"&&Number.isFinite(n))return n.toString();throw new j(`String cannot represent value: ${Y(i)}`)},parseValue(i){if(typeof i!="string")throw new j(`String cannot represent a non string value: ${Y(i)}`);return i},parseLiteral(i){if(i.kind!==_.STRING)throw new j(`String cannot represent a non string value: ${dt(i)}`,{nodes:i});return i.value}}),Un=new Rt({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize(i){const n=dr(i);if(typeof n=="boolean")return n;if(Number.isFinite(n))return n!==0;throw new j(`Boolean cannot represent a non boolean value: ${Y(n)}`)},parseValue(i){if(typeof i!="boolean")throw new j(`Boolean cannot represent a non boolean value: ${Y(i)}`);return i},parseLiteral(i){if(i.kind!==_.BOOLEAN)throw new j(`Boolean cannot represent a non boolean value: ${dt(i)}`,{nodes:i});return i.value}}),Ff=new Rt({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize(i){const n=dr(i);if(typeof n=="string")return n;if(Number.isInteger(n))return String(n);throw new j(`ID cannot represent value: ${Y(i)}`)},parseValue(i){if(typeof i=="string")return i;if(typeof i=="number"&&Number.isInteger(i))return i.toString();throw new j(`ID cannot represent value: ${Y(i)}`)},parseLiteral(i){if(i.kind!==_.STRING&&i.kind!==_.INT)throw new j("ID cannot represent a non-string and non-integer value: "+dt(i),{nodes:i});return i.value}}),Cs=Object.freeze([Ve,pD,hD,Un,Ff]);function mD(i){return Cs.some(({name:n})=>i.name===n)}function dr(i){if(Ot(i)){if(typeof i.valueOf=="function"){const n=i.valueOf();if(!Ot(n))return n}if(typeof i.toJSON=="function")return i.toJSON()}return i}function gD(i){return ht(i,zt)}class zt{constructor(n){var t,s;this.name=st(n.name),this.description=n.description,this.locations=n.locations,this.isRepeatable=(t=n.isRepeatable)!==null&&t!==void 0?t:!1,this.extensions=Mn(n.extensions),this.astNode=n.astNode,Array.isArray(n.locations)||de(!1,`@${n.name} locations must be an Array.`);const o=(s=n.args)!==null&&s!==void 0?s:{};Ot(o)&&!Array.isArray(o)||de(!1,`@${n.name} args must be an object with argument names as keys.`),this.args=wf(o)}get[Symbol.toStringTag](){return"GraphQLDirective"}toConfig(){return{name:this.name,description:this.description,locations:this.locations,args:Cf(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}}toString(){return"@"+this.name}toJSON(){return this.toString()}}const yD=new zt({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[Q.FIELD,Q.FRAGMENT_SPREAD,Q.INLINE_FRAGMENT],args:{if:{type:new ae(Un),description:"Included when true."}}}),TD=new zt({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[Q.FIELD,Q.FRAGMENT_SPREAD,Q.INLINE_FRAGMENT],args:{if:{type:new ae(Un),description:"Skipped when true."}}}),ED="No longer supported",Nf=new zt({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[Q.FIELD_DEFINITION,Q.ARGUMENT_DEFINITION,Q.INPUT_FIELD_DEFINITION,Q.ENUM_VALUE],args:{reason:{type:Ve,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).",defaultValue:ED}}}),Of=new zt({name:"specifiedBy",description:"Exposes a URL that specifies the behavior of this scalar.",locations:[Q.SCALAR],args:{url:{type:new ae(Ve),description:"The URL that specifies the behavior of this scalar."}}}),xi=Object.freeze([yD,TD,Nf,Of]);function ID(i){return typeof i=="object"&&typeof(i==null?void 0:i[Symbol.iterator])=="function"}function sr(i,n){if(ln(n)){const t=sr(i,n.ofType);return(t==null?void 0:t.kind)===_.NULL?null:t}if(i===null)return{kind:_.NULL};if(i===void 0)return null;if(di(n)){const t=n.ofType;if(ID(i)){const s=[];for(const o of i){const u=sr(o,t);u!=null&&s.push(u)}return{kind:_.LIST,values:s}}return sr(i,t)}if(et(n)){if(!Ot(i))return null;const t=[];for(const s of Object.values(n.getFields())){const o=sr(i[s.name],s.type);o&&t.push({kind:_.OBJECT_FIELD,name:{kind:_.NAME,value:s.name},value:o})}return{kind:_.OBJECT,fields:t}}if(If(n)){const t=n.serialize(i);if(t==null)return null;if(typeof t=="boolean")return{kind:_.BOOLEAN,value:t};if(typeof t=="number"&&Number.isFinite(t)){const s=String(t);return Uc.test(s)?{kind:_.INT,value:s}:{kind:_.FLOAT,value:s}}if(typeof t=="string")return Zn(n)?{kind:_.ENUM,value:t}:n===Ff&&Uc.test(t)?{kind:_.INT,value:t}:{kind:_.STRING,value:t};throw new TypeError(`Cannot convert value to AST: ${Y(t)}.`)}Xn(!1,"Unexpected input type: "+Y(n))}const Uc=/^-?(?:0|[1-9][0-9]*)$/,Na=new pt({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:()=>({description:{type:Ve,resolve:i=>i.description},types:{description:"A list of all types supported by this server.",type:new ae(new yn(new ae(Hn))),resolve(i){return Object.values(i.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:new ae(Hn),resolve:i=>i.getQueryType()},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:Hn,resolve:i=>i.getMutationType()},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:Hn,resolve:i=>i.getSubscriptionType()},directives:{description:"A list of all directives supported by this server.",type:new ae(new yn(new ae(Rf))),resolve:i=>i.getDirectives()}})}),Rf=new pt({name:"__Directive",description:`A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.`,fields:()=>({name:{type:new ae(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},isRepeatable:{type:new ae(Un),resolve:i=>i.isRepeatable},locations:{type:new ae(new yn(new ae(kf))),resolve:i=>i.locations},args:{type:new ae(new yn(new ae(Fs))),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}}})}),kf=new Ri({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:Q.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:Q.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:Q.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:Q.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:Q.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:Q.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:Q.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:Q.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:Q.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:Q.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:Q.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:Q.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:Q.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:Q.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:Q.UNION,description:"Location adjacent to a union definition."},ENUM:{value:Q.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:Q.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:Q.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:Q.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),Hn=new pt({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByURL`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:()=>({kind:{type:new ae(Bf),resolve(i){if(Jt(i))return Ae.SCALAR;if(Tn(i))return Ae.OBJECT;if(cn(i))return Ae.INTERFACE;if(Kn(i))return Ae.UNION;if(Zn(i))return Ae.ENUM;if(et(i))return Ae.INPUT_OBJECT;if(di(i))return Ae.LIST;if(ln(i))return Ae.NON_NULL;Xn(!1,`Unexpected type: "${Y(i)}".`)}},name:{type:Ve,resolve:i=>"name"in i?i.name:void 0},description:{type:Ve,resolve:i=>"description"in i?i.description:void 0},specifiedByURL:{type:Ve,resolve:i=>"specifiedByURL"in i?i.specifiedByURL:void 0},fields:{type:new yn(new ae(xf)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Tn(i)||cn(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},interfaces:{type:new yn(new ae(Hn)),resolve(i){if(Tn(i)||cn(i))return i.getInterfaces()}},possibleTypes:{type:new yn(new ae(Hn)),resolve(i,n,t,{schema:s}){if(oD(i))return s.getPossibleTypes(i)}},enumValues:{type:new yn(new ae(Lf)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(Zn(i)){const t=i.getValues();return n?t:t.filter(s=>s.deprecationReason==null)}}},inputFields:{type:new yn(new ae(Fs)),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){if(et(i)){const t=Object.values(i.getFields());return n?t:t.filter(s=>s.deprecationReason==null)}}},ofType:{type:Hn,resolve:i=>"ofType"in i?i.ofType:void 0}})}),xf=new pt({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:()=>({name:{type:new ae(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},args:{type:new ae(new yn(new ae(Fs))),args:{includeDeprecated:{type:Un,defaultValue:!1}},resolve(i,{includeDeprecated:n}){return n?i.args:i.args.filter(t=>t.deprecationReason==null)}},type:{type:new ae(Hn),resolve:i=>i.type},isDeprecated:{type:new ae(Un),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})}),Fs=new pt({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:()=>({name:{type:new ae(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},type:{type:new ae(Hn),resolve:i=>i.type},defaultValue:{type:Ve,description:"A GraphQL-formatted string representing the default value for this input value.",resolve(i){const{type:n,defaultValue:t}=i,s=sr(t,n);return s?dt(s):null}},isDeprecated:{type:new ae(Un),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})}),Lf=new pt({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:()=>({name:{type:new ae(Ve),resolve:i=>i.name},description:{type:Ve,resolve:i=>i.description},isDeprecated:{type:new ae(Un),resolve:i=>i.deprecationReason!=null},deprecationReason:{type:Ve,resolve:i=>i.deprecationReason}})});var Ae;(function(i){i.SCALAR="SCALAR",i.OBJECT="OBJECT",i.INTERFACE="INTERFACE",i.UNION="UNION",i.ENUM="ENUM",i.INPUT_OBJECT="INPUT_OBJECT",i.LIST="LIST",i.NON_NULL="NON_NULL"})(Ae||(Ae={}));const Bf=new Ri({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:Ae.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:Ae.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:Ae.INTERFACE,description:"Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields."},UNION:{value:Ae.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:Ae.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:Ae.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:Ae.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:Ae.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}});new ae(Na);new ae(Ve);new ae(Ve);const Ns=Object.freeze([Na,Rf,kf,Hn,xf,Fs,Lf,Bf]);function DD(i){return Ns.some(({name:n})=>i.name===n)}class Pf{constructor(n){var t,s;this.__validationErrors=n.assumeValid===!0?[]:void 0,Ot(n)||de(!1,"Must provide configuration object."),!n.types||Array.isArray(n.types)||de(!1,`"types" must be Array if provided but got: ${Y(n.types)}.`),!n.directives||Array.isArray(n.directives)||de(!1,`"directives" must be Array if provided but got: ${Y(n.directives)}.`),this.description=n.description,this.extensions=Mn(n.extensions),this.astNode=n.astNode,this.extensionASTNodes=(t=n.extensionASTNodes)!==null&&t!==void 0?t:[],this._queryType=n.query,this._mutationType=n.mutation,this._subscriptionType=n.subscription,this._directives=(s=n.directives)!==null&&s!==void 0?s:xi;const o=new Set(n.types);if(n.types!=null)for(const u of n.types)o.delete(u),zn(u,o);this._queryType!=null&&zn(this._queryType,o),this._mutationType!=null&&zn(this._mutationType,o),this._subscriptionType!=null&&zn(this._subscriptionType,o);for(const u of this._directives)if(gD(u))for(const l of u.args)zn(l.type,o);zn(Na,o),this._typeMap=Object.create(null),this._subTypeMap=Object.create(null),this._implementationsMap=Object.create(null);for(const u of o){if(u==null)continue;const l=u.name;if(l||de(!1,"One of the provided types for building the Schema is missing a name."),this._typeMap[l]!==void 0)throw new Error(`Schema must contain uniquely named types but contains multiple types named "${l}".`);if(this._typeMap[l]=u,cn(u)){for(const d of u.getInterfaces())if(cn(d)){let p=this._implementationsMap[d.name];p===void 0&&(p=this._implementationsMap[d.name]={objects:[],interfaces:[]}),p.interfaces.push(u)}}else if(Tn(u)){for(const d of u.getInterfaces())if(cn(d)){let p=this._implementationsMap[d.name];p===void 0&&(p=this._implementationsMap[d.name]={objects:[],interfaces:[]}),p.objects.push(u)}}}}get[Symbol.toStringTag](){return"GraphQLSchema"}getQueryType(){return this._queryType}getMutationType(){return this._mutationType}getSubscriptionType(){return this._subscriptionType}getRootType(n){switch(n){case Pn.QUERY:return this.getQueryType();case Pn.MUTATION:return this.getMutationType();case Pn.SUBSCRIPTION:return this.getSubscriptionType()}}getTypeMap(){return this._typeMap}getType(n){return this.getTypeMap()[n]}getPossibleTypes(n){return Kn(n)?n.getTypes():this.getImplementations(n).objects}getImplementations(n){const t=this._implementationsMap[n.name];return t??{objects:[],interfaces:[]}}isSubType(n,t){let s=this._subTypeMap[n.name];if(s===void 0){if(s=Object.create(null),Kn(n))for(const o of n.getTypes())s[o.name]=!0;else{const o=this.getImplementations(n);for(const u of o.objects)s[u.name]=!0;for(const u of o.interfaces)s[u.name]=!0}this._subTypeMap[n.name]=s}return s[t.name]!==void 0}getDirectives(){return this._directives}getDirective(n){return this.getDirectives().find(t=>t.name===n)}toConfig(){return{description:this.description,query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object.values(this.getTypeMap()),directives:this.getDirectives(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes,assumeValid:this.__validationErrors!==void 0}}}function zn(i,n){const t=uD(i);if(!n.has(t)){if(n.add(t),Kn(t))for(const s of t.getTypes())zn(s,n);else if(Tn(t)||cn(t)){for(const s of t.getInterfaces())zn(s,n);for(const s of Object.values(t.getFields())){zn(s.type,n);for(const o of s.args)zn(o.type,n)}}else if(et(t))for(const s of Object.values(t.getFields()))zn(s.type,n)}return n}function vD(i){return i.kind===_.SCHEMA_DEFINITION||pr(i)||i.kind===_.DIRECTIVE_DEFINITION}function pr(i){return i.kind===_.SCALAR_TYPE_DEFINITION||i.kind===_.OBJECT_TYPE_DEFINITION||i.kind===_.INTERFACE_TYPE_DEFINITION||i.kind===_.UNION_TYPE_DEFINITION||i.kind===_.ENUM_TYPE_DEFINITION||i.kind===_.INPUT_OBJECT_TYPE_DEFINITION}function _D(i){return i.kind===_.SCHEMA_EXTENSION||Oa(i)}function Oa(i){return i.kind===_.SCALAR_TYPE_EXTENSION||i.kind===_.OBJECT_TYPE_EXTENSION||i.kind===_.INTERFACE_TYPE_EXTENSION||i.kind===_.UNION_TYPE_EXTENSION||i.kind===_.ENUM_TYPE_EXTENSION||i.kind===_.INPUT_OBJECT_TYPE_EXTENSION}function AD(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():xi;for(const l of s)n[l.name]=l.args.map(d=>d.name);const o=i.getDocument().definitions;for(const l of o)if(l.kind===_.DIRECTIVE_DEFINITION){var u;const d=(u=l.arguments)!==null&&u!==void 0?u:[];n[l.name.value]=d.map(p=>p.name.value)}return{Directive(l){const d=l.name.value,p=n[d];if(l.arguments&&p)for(const y of l.arguments){const T=y.name.value;if(!p.includes(T)){const D=Ss(T,p);i.reportError(new j(`Unknown argument "${T}" on directive "@${d}".`+ws(D),{nodes:y}))}}return!1}}}function bD(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():xi;for(const u of s)n[u.name]=u.locations;const o=i.getDocument().definitions;for(const u of o)u.kind===_.DIRECTIVE_DEFINITION&&(n[u.name.value]=u.locations.map(l=>l.value));return{Directive(u,l,d,p,y){const T=u.name.value,D=n[T];if(!D){i.reportError(new j(`Unknown directive "@${T}".`,{nodes:u}));return}const S=wD(y);S&&!D.includes(S)&&i.reportError(new j(`Directive "@${T}" may not be used on ${S}.`,{nodes:u}))}}}function wD(i){const n=i[i.length-1];switch("kind"in n||Xn(!1),n.kind){case _.OPERATION_DEFINITION:return SD(n.operation);case _.FIELD:return Q.FIELD;case _.FRAGMENT_SPREAD:return Q.FRAGMENT_SPREAD;case _.INLINE_FRAGMENT:return Q.INLINE_FRAGMENT;case _.FRAGMENT_DEFINITION:return Q.FRAGMENT_DEFINITION;case _.VARIABLE_DEFINITION:return Q.VARIABLE_DEFINITION;case _.SCHEMA_DEFINITION:case _.SCHEMA_EXTENSION:return Q.SCHEMA;case _.SCALAR_TYPE_DEFINITION:case _.SCALAR_TYPE_EXTENSION:return Q.SCALAR;case _.OBJECT_TYPE_DEFINITION:case _.OBJECT_TYPE_EXTENSION:return Q.OBJECT;case _.FIELD_DEFINITION:return Q.FIELD_DEFINITION;case _.INTERFACE_TYPE_DEFINITION:case _.INTERFACE_TYPE_EXTENSION:return Q.INTERFACE;case _.UNION_TYPE_DEFINITION:case _.UNION_TYPE_EXTENSION:return Q.UNION;case _.ENUM_TYPE_DEFINITION:case _.ENUM_TYPE_EXTENSION:return Q.ENUM;case _.ENUM_VALUE_DEFINITION:return Q.ENUM_VALUE;case _.INPUT_OBJECT_TYPE_DEFINITION:case _.INPUT_OBJECT_TYPE_EXTENSION:return Q.INPUT_OBJECT;case _.INPUT_VALUE_DEFINITION:{const t=i[i.length-3];return"kind"in t||Xn(!1),t.kind===_.INPUT_OBJECT_TYPE_DEFINITION?Q.INPUT_FIELD_DEFINITION:Q.ARGUMENT_DEFINITION}default:Xn(!1,"Unexpected kind: "+Y(n.kind))}}function SD(i){switch(i){case Pn.QUERY:return Q.QUERY;case Pn.MUTATION:return Q.MUTATION;case Pn.SUBSCRIPTION:return Q.SUBSCRIPTION}}function CD(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);for(const u of i.getDocument().definitions)pr(u)&&(s[u.name.value]=!0);const o=[...Object.keys(t),...Object.keys(s)];return{NamedType(u,l,d,p,y){const T=u.name.value;if(!t[T]&&!s[T]){var D;const S=(D=y[2])!==null&&D!==void 0?D:d,R=S!=null&&FD(S);if(R&&Mc.includes(T))return;const x=Ss(T,R?Mc.concat(o):o);i.reportError(new j(`Unknown type "${T}".`+ws(x),{nodes:u}))}}}}const Mc=[...Cs,...Ns].map(i=>i.name);function FD(i){return"kind"in i&&(vD(i)||_D(i))}function ND(i){var n,t,s;const o=i.getSchema(),u=(n=(t=(s=o==null?void 0:o.astNode)!==null&&s!==void 0?s:o==null?void 0:o.getQueryType())!==null&&t!==void 0?t:o==null?void 0:o.getMutationType())!==null&&n!==void 0?n:o==null?void 0:o.getSubscriptionType();let l=0;return{SchemaDefinition(d){if(u){i.reportError(new j("Cannot define a new schema within a schema extension.",{nodes:d}));return}l>0&&i.reportError(new j("Must provide only one schema definition.",{nodes:d})),++l}}}function OD(i){const n=i.getSchema(),t=Object.create(null);for(const o of i.getDocument().definitions)pr(o)&&(t[o.name.value]=o);return{ScalarTypeExtension:s,ObjectTypeExtension:s,InterfaceTypeExtension:s,UnionTypeExtension:s,EnumTypeExtension:s,InputObjectTypeExtension:s};function s(o){const u=o.name.value,l=t[u],d=n==null?void 0:n.getType(u);let p;if(l?p=RD[l.kind]:d&&(p=kD(d)),p){if(p!==o.kind){const y=xD(o.kind);i.reportError(new j(`Cannot extend non-${y} type "${u}".`,{nodes:l?[l,o]:o}))}}else{const y=Object.keys({...t,...n==null?void 0:n.getTypeMap()}),T=Ss(u,y);i.reportError(new j(`Cannot extend type "${u}" because it is not defined.`+ws(T),{nodes:o.name}))}}}const RD={[_.SCALAR_TYPE_DEFINITION]:_.SCALAR_TYPE_EXTENSION,[_.OBJECT_TYPE_DEFINITION]:_.OBJECT_TYPE_EXTENSION,[_.INTERFACE_TYPE_DEFINITION]:_.INTERFACE_TYPE_EXTENSION,[_.UNION_TYPE_DEFINITION]:_.UNION_TYPE_EXTENSION,[_.ENUM_TYPE_DEFINITION]:_.ENUM_TYPE_EXTENSION,[_.INPUT_OBJECT_TYPE_DEFINITION]:_.INPUT_OBJECT_TYPE_EXTENSION};function kD(i){if(Jt(i))return _.SCALAR_TYPE_EXTENSION;if(Tn(i))return _.OBJECT_TYPE_EXTENSION;if(cn(i))return _.INTERFACE_TYPE_EXTENSION;if(Kn(i))return _.UNION_TYPE_EXTENSION;if(Zn(i))return _.ENUM_TYPE_EXTENSION;if(et(i))return _.INPUT_OBJECT_TYPE_EXTENSION;Xn(!1,"Unexpected type: "+Y(i))}function xD(i){switch(i){case _.SCALAR_TYPE_EXTENSION:return"scalar";case _.OBJECT_TYPE_EXTENSION:return"object";case _.INTERFACE_TYPE_EXTENSION:return"interface";case _.UNION_TYPE_EXTENSION:return"union";case _.ENUM_TYPE_EXTENSION:return"enum";case _.INPUT_OBJECT_TYPE_EXTENSION:return"input object";default:Xn(!1,"Unexpected kind: "+Y(i))}}function LD(i){var n;const t=Object.create(null),s=i.getSchema(),o=(n=s==null?void 0:s.getDirectives())!==null&&n!==void 0?n:xi;for(const d of o)t[d.name]=Oi(d.args.filter(lD),p=>p.name);const u=i.getDocument().definitions;for(const d of u)if(d.kind===_.DIRECTIVE_DEFINITION){var l;const p=(l=d.arguments)!==null&&l!==void 0?l:[];t[d.name.value]=Oi(p.filter(BD),y=>y.name.value)}return{Directive:{leave(d){const p=d.name.value,y=t[p];if(y){var T;const D=(T=d.arguments)!==null&&T!==void 0?T:[],S=new Set(D.map(R=>R.name.value));for(const[R,x]of Object.entries(y))if(!S.has(R)){const L=Ca(x.type)?Y(x.type):dt(x.type);i.reportError(new j(`Directive "@${p}" argument "${R}" of type "${L}" is required, but it was not provided.`,{nodes:d}))}}}}}}function BD(i){return i.type.kind===_.NON_NULL_TYPE&&i.defaultValue==null}function jt(i,n,t){if(i){if(i.kind===_.VARIABLE){const s=i.name.value;if(t==null||t[s]===void 0)return;const o=t[s];return o===null&&ln(n)?void 0:o}if(ln(n))return i.kind===_.NULL?void 0:jt(i,n.ofType,t);if(i.kind===_.NULL)return null;if(di(n)){const s=n.ofType;if(i.kind===_.LIST){const u=[];for(const l of i.values)if($c(l,t)){if(ln(s))return;u.push(null)}else{const d=jt(l,s,t);if(d===void 0)return;u.push(d)}return u}const o=jt(i,s,t);return o===void 0?void 0:[o]}if(et(n)){if(i.kind!==_.OBJECT)return;const s=Object.create(null),o=Oi(i.fields,u=>u.name.value);for(const u of Object.values(n.getFields())){const l=o[u.name];if(!l||$c(l.value,t)){if(u.defaultValue!==void 0)s[u.name]=u.defaultValue;else if(ln(u.type))return;continue}const d=jt(l.value,u.type,t);if(d===void 0)return;s[u.name]=d}return s}if(If(n)){let s;try{s=n.parseLiteral(i,t)}catch{return}return s===void 0?void 0:s}Xn(!1,"Unexpected input type: "+Y(n))}}function $c(i,n){return i.kind===_.VARIABLE&&(n==null||n[i.name.value]===void 0)}function PD(i,n,t){var s;const o={},u=(s=n.arguments)!==null&&s!==void 0?s:[],l=Oi(u,d=>d.name.value);for(const d of i.args){const p=d.name,y=d.type,T=l[p];if(!T){if(d.defaultValue!==void 0)o[p]=d.defaultValue;else if(ln(y))throw new j(`Argument "${p}" of required type "${Y(y)}" was not provided.`,{nodes:n});continue}const D=T.value;let S=D.kind===_.NULL;if(D.kind===_.VARIABLE){const x=D.name.value;if(t==null||!UD(t,x)){if(d.defaultValue!==void 0)o[p]=d.defaultValue;else if(ln(y))throw new j(`Argument "${p}" of required type "${Y(y)}" was provided the variable "$${x}" which was not provided a runtime value.`,{nodes:D});continue}S=t[x]==null}if(S&&ln(y))throw new j(`Argument "${p}" of non-null type "${Y(y)}" must not be null.`,{nodes:D});const R=jt(D,y,t);if(R===void 0)throw new j(`Argument "${p}" has invalid value ${dt(D)}.`,{nodes:D});o[p]=R}return o}function Uf(i,n,t){var s;const o=(s=n.directives)===null||s===void 0?void 0:s.find(u=>u.name.value===i.name);if(o)return PD(i,o,t)}function UD(i,n){return Object.prototype.hasOwnProperty.call(i,n)}function Mf(i,n){const t=new Map;for(const s of i){const o=n(s),u=t.get(o);u===void 0?t.set(o,[s]):u.push(s)}return t}function MD(i){return{DirectiveDefinition(s){var o;const u=(o=s.arguments)!==null&&o!==void 0?o:[];return t(`@${s.name.value}`,u)},InterfaceTypeDefinition:n,InterfaceTypeExtension:n,ObjectTypeDefinition:n,ObjectTypeExtension:n};function n(s){var o;const u=s.name.value,l=(o=s.fields)!==null&&o!==void 0?o:[];for(const p of l){var d;const y=p.name.value,T=(d=p.arguments)!==null&&d!==void 0?d:[];t(`${u}.${y}`,T)}return!1}function t(s,o){const u=Mf(o,l=>l.name.value);for(const[l,d]of u)d.length>1&&i.reportError(new j(`Argument "${s}(${l}:)" can only be defined once.`,{nodes:d.map(p=>p.name)}));return!1}}function $D(i){return{Field:n,Directive:n};function n(t){var s;const o=(s=t.arguments)!==null&&s!==void 0?s:[],u=Mf(o,l=>l.name.value);for(const[l,d]of u)d.length>1&&i.reportError(new j(`There can be only one argument named "${l}".`,{nodes:d.map(p=>p.name)}))}}function VD(i){const n=Object.create(null),t=i.getSchema();return{DirectiveDefinition(s){const o=s.name.value;if(t!=null&&t.getDirective(o)){i.reportError(new j(`Directive "@${o}" already exists in the schema. It cannot be redefined.`,{nodes:s.name}));return}return n[o]?i.reportError(new j(`There can be only one directive named "@${o}".`,{nodes:[n[o],s.name]})):n[o]=s.name,!1}}}function GD(i){const n=Object.create(null),t=i.getSchema(),s=t?t.getDirectives():xi;for(const d of s)n[d.name]=!d.isRepeatable;const o=i.getDocument().definitions;for(const d of o)d.kind===_.DIRECTIVE_DEFINITION&&(n[d.name.value]=!d.repeatable);const u=Object.create(null),l=Object.create(null);return{enter(d){if(!("directives"in d)||!d.directives)return;let p;if(d.kind===_.SCHEMA_DEFINITION||d.kind===_.SCHEMA_EXTENSION)p=u;else if(pr(d)||Oa(d)){const y=d.name.value;p=l[y],p===void 0&&(l[y]=p=Object.create(null))}else p=Object.create(null);for(const y of d.directives){const T=y.name.value;n[T]&&(p[T]?i.reportError(new j(`The directive "@${T}" can only be used once at this location.`,{nodes:[p[T],y]})):p[T]=y)}}}}function qD(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{EnumTypeDefinition:o,EnumTypeExtension:o};function o(u){var l;const d=u.name.value;s[d]||(s[d]=Object.create(null));const p=(l=u.values)!==null&&l!==void 0?l:[],y=s[d];for(const T of p){const D=T.name.value,S=t[d];Zn(S)&&S.getValue(D)?i.reportError(new j(`Enum value "${d}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:T.name})):y[D]?i.reportError(new j(`Enum value "${d}.${D}" can only be defined once.`,{nodes:[y[D],T.name]})):y[D]=T.name}return!1}}function jD(i){const n=i.getSchema(),t=n?n.getTypeMap():Object.create(null),s=Object.create(null);return{InputObjectTypeDefinition:o,InputObjectTypeExtension:o,InterfaceTypeDefinition:o,InterfaceTypeExtension:o,ObjectTypeDefinition:o,ObjectTypeExtension:o};function o(u){var l;const d=u.name.value;s[d]||(s[d]=Object.create(null));const p=(l=u.fields)!==null&&l!==void 0?l:[],y=s[d];for(const T of p){const D=T.name.value;WD(t[d],D)?i.reportError(new j(`Field "${d}.${D}" already exists in the schema. It cannot also be defined in this type extension.`,{nodes:T.name})):y[D]?i.reportError(new j(`Field "${d}.${D}" can only be defined once.`,{nodes:[y[D],T.name]})):y[D]=T.name}return!1}}function WD(i,n){return Tn(i)||cn(i)||et(i)?i.getFields()[n]!=null:!1}function YD(i){const n=[];let t=Object.create(null);return{ObjectValue:{enter(){n.push(t),t=Object.create(null)},leave(){const s=n.pop();s||Xn(!1),t=s}},ObjectField(s){const o=s.name.value;t[o]?i.reportError(new j(`There can be only one input field named "${o}".`,{nodes:[t[o],s.name]})):t[o]=s.name}}}function QD(i){const n=i.getSchema(),t=Object.create(null),s=n?{query:n.getQueryType(),mutation:n.getMutationType(),subscription:n.getSubscriptionType()}:{};return{SchemaDefinition:o,SchemaExtension:o};function o(u){var l;const d=(l=u.operationTypes)!==null&&l!==void 0?l:[];for(const p of d){const y=p.operation,T=t[y];s[y]?i.reportError(new j(`Type for ${y} already defined in the schema. It cannot be redefined.`,{nodes:p})):T?i.reportError(new j(`There can be only one ${y} type in schema.`,{nodes:[T,p]})):t[y]=p}return!1}}function zD(i){const n=Object.create(null),t=i.getSchema();return{ScalarTypeDefinition:s,ObjectTypeDefinition:s,InterfaceTypeDefinition:s,UnionTypeDefinition:s,EnumTypeDefinition:s,InputObjectTypeDefinition:s};function s(o){const u=o.name.value;if(t!=null&&t.getType(u)){i.reportError(new j(`Type "${u}" already exists in the schema. It cannot also be defined in this type definition.`,{nodes:o.name}));return}return n[u]?i.reportError(new j(`There can be only one type named "${u}".`,{nodes:[n[u],o.name]})):n[u]=o.name,!1}}const JD=Object.freeze([ND,QD,zD,qD,jD,MD,VD,CD,bD,GD,OD,AD,$D,YD,LD]);class HD{constructor(n,t){this._ast=n,this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}get[Symbol.toStringTag](){return"ASTValidationContext"}reportError(n){this._onError(n)}getDocument(){return this._ast}getFragment(n){let t;if(this._fragments)t=this._fragments;else{t=Object.create(null);for(const s of this.getDocument().definitions)s.kind===_.FRAGMENT_DEFINITION&&(t[s.name.value]=s);this._fragments=t}return t[n]}getFragmentSpreads(n){let t=this._fragmentSpreads.get(n);if(!t){t=[];const s=[n];let o;for(;o=s.pop();)for(const u of o.selections)u.kind===_.FRAGMENT_SPREAD?t.push(u):u.selectionSet&&s.push(u.selectionSet);this._fragmentSpreads.set(n,t)}return t}getRecursivelyReferencedFragments(n){let t=this._recursivelyReferencedFragments.get(n);if(!t){t=[];const s=Object.create(null),o=[n.selectionSet];let u;for(;u=o.pop();)for(const l of this.getFragmentSpreads(u)){const d=l.name.value;if(s[d]!==!0){s[d]=!0;const p=this.getFragment(d);p&&(t.push(p),o.push(p.selectionSet))}}this._recursivelyReferencedFragments.set(n,t)}return t}}class XD extends HD{constructor(n,t,s){super(n,s),this._schema=t}get[Symbol.toStringTag](){return"SDLValidationContext"}getSchema(){return this._schema}}function KD(i,n,t=JD){const s=[],o=new XD(i,n,l=>{s.push(l)}),u=t.map(l=>l(o));return gf(i,eD(u)),s}function ZD(i){const n=KD(i);if(n.length!==0)throw new Error(n.map(t=>t.message).join(`

`))}function ev(i,n){Ot(i)&&Ot(i.__schema)||de(!1,`Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: ${Y(i)}.`);const t=i.__schema,s=ai(t.types,O=>O.name,O=>S(O));for(const O of[...Cs,...Ns])s[O.name]&&(s[O.name]=O);const o=t.queryType?T(t.queryType):null,u=t.mutationType?T(t.mutationType):null,l=t.subscriptionType?T(t.subscriptionType):null,d=t.directives?t.directives.map(mt):[];return new Pf({description:t.description,query:o,mutation:u,subscription:l,types:Object.values(s),directives:d,assumeValid:n==null?void 0:n.assumeValid});function p(O){if(O.kind===Ae.LIST){const Z=O.ofType;if(!Z)throw new Error("Decorated type deeper than introspection query.");return new yn(p(Z))}if(O.kind===Ae.NON_NULL){const Z=O.ofType;if(!Z)throw new Error("Decorated type deeper than introspection query.");const sn=p(Z);return new ae(aD(sn))}return y(O)}function y(O){const Z=O.name;if(!Z)throw new Error(`Unknown type reference: ${Y(O)}.`);const sn=s[Z];if(!sn)throw new Error(`Invalid or incomplete schema, unknown type: ${Z}. Ensure that a full introspection query is used in order to build a client schema.`);return sn}function T(O){return rD(y(O))}function D(O){return sD(y(O))}function S(O){if(O!=null&&O.name!=null&&O.kind!=null)switch(O.kind){case Ae.SCALAR:return R(O);case Ae.OBJECT:return L(O);case Ae.INTERFACE:return X(O);case Ae.UNION:return he(O);case Ae.ENUM:return Ge(O);case Ae.INPUT_OBJECT:return be(O)}const Z=Y(O);throw new Error(`Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ${Z}.`)}function R(O){return new Rt({name:O.name,description:O.description,specifiedByURL:O.specifiedByURL})}function x(O){if(O.interfaces===null&&O.kind===Ae.INTERFACE)return[];if(!O.interfaces){const Z=Y(O);throw new Error(`Introspection result missing interfaces: ${Z}.`)}return O.interfaces.map(D)}function L(O){return new pt({name:O.name,description:O.description,interfaces:()=>x(O),fields:()=>Ne(O)})}function X(O){return new Ts({name:O.name,description:O.description,interfaces:()=>x(O),fields:()=>Ne(O)})}function he(O){if(!O.possibleTypes){const Z=Y(O);throw new Error(`Introspection result missing possibleTypes: ${Z}.`)}return new Es({name:O.name,description:O.description,types:()=>O.possibleTypes.map(T)})}function Ge(O){if(!O.enumValues){const Z=Y(O);throw new Error(`Introspection result missing enumValues: ${Z}.`)}return new Ri({name:O.name,description:O.description,values:ai(O.enumValues,Z=>Z.name,Z=>({description:Z.description,deprecationReason:Z.deprecationReason}))})}function be(O){if(!O.inputFields){const Z=Y(O);throw new Error(`Introspection result missing inputFields: ${Z}.`)}return new Is({name:O.name,description:O.description,fields:()=>rn(O.inputFields)})}function Ne(O){if(!O.fields)throw new Error(`Introspection result missing fields: ${Y(O)}.`);return ai(O.fields,Z=>Z.name,xe)}function xe(O){const Z=p(O.type);if(!Ef(Z)){const sn=Y(Z);throw new Error(`Introspection must provide output type for fields, but received: ${sn}.`)}if(!O.args){const sn=Y(O);throw new Error(`Introspection result missing field args: ${sn}.`)}return{description:O.description,deprecationReason:O.deprecationReason,type:Z,args:rn(O.args)}}function rn(O){return ai(O,Z=>Z.name,Ke)}function Ke(O){const Z=p(O.type);if(!Tf(Z)){const kt=Y(Z);throw new Error(`Introspection must provide input type for arguments, but received: ${kt}.`)}const sn=O.defaultValue!=null?jt(WI(O.defaultValue),Z):void 0;return{description:O.description,type:Z,defaultValue:sn,deprecationReason:O.deprecationReason}}function mt(O){if(!O.args){const Z=Y(O);throw new Error(`Introspection result missing directive args: ${Z}.`)}if(!O.locations){const Z=Y(O);throw new Error(`Introspection result missing directive locations: ${Z}.`)}return new zt({name:O.name,description:O.description,isRepeatable:O.isRepeatable,locations:O.locations.slice(),args:rn(O.args)})}}function nv(i,n,t){var s,o,u,l;const d=[],p=Object.create(null),y=[];let T;const D=[];for(const w of n.definitions)if(w.kind===_.SCHEMA_DEFINITION)T=w;else if(w.kind===_.SCHEMA_EXTENSION)D.push(w);else if(pr(w))d.push(w);else if(Oa(w)){const V=w.name.value,P=p[V];p[V]=P?P.concat([w]):[w]}else w.kind===_.DIRECTIVE_DEFINITION&&y.push(w);if(Object.keys(p).length===0&&d.length===0&&y.length===0&&D.length===0&&T==null)return i;const S=Object.create(null);for(const w of i.types)S[w.name]=Ge(w);for(const w of d){var R;const V=w.name.value;S[V]=(R=Vc[V])!==null&&R!==void 0?R:Sn(w)}const x={query:i.query&&X(i.query),mutation:i.mutation&&X(i.mutation),subscription:i.subscription&&X(i.subscription),...T&&sn([T]),...sn(D)};return{description:(s=T)===null||s===void 0||(o=s.description)===null||o===void 0?void 0:o.value,...x,types:Object.values(S),directives:[...i.directives.map(he),...y.map(hr)],extensions:Object.create(null),astNode:(u=T)!==null&&u!==void 0?u:i.astNode,extensionASTNodes:i.extensionASTNodes.concat(D),assumeValid:(l=t==null?void 0:t.assumeValid)!==null&&l!==void 0?l:!1};function L(w){return di(w)?new yn(L(w.ofType)):ln(w)?new ae(L(w.ofType)):X(w)}function X(w){return S[w.name]}function he(w){const V=w.toConfig();return new zt({...V,args:wt(V.args,Z)})}function Ge(w){if(DD(w)||mD(w))return w;if(Jt(w))return xe(w);if(Tn(w))return rn(w);if(cn(w))return Ke(w);if(Kn(w))return mt(w);if(Zn(w))return Ne(w);if(et(w))return be(w);Xn(!1,"Unexpected type: "+Y(w))}function be(w){var V;const P=w.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];return new Is({...P,fields:()=>({...wt(P.fields,me=>({...me,type:L(me.type)})),...ot(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function Ne(w){var V;const P=w.toConfig(),M=(V=p[w.name])!==null&&V!==void 0?V:[];return new Ri({...P,values:{...P.values,...$n(M)},extensionASTNodes:P.extensionASTNodes.concat(M)})}function xe(w){var V;const P=w.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];let me=P.specifiedByURL;for(const ge of M){var Ue;me=(Ue=Gc(ge))!==null&&Ue!==void 0?Ue:me}return new Rt({...P,specifiedByURL:me,extensionASTNodes:P.extensionASTNodes.concat(M)})}function rn(w){var V;const P=w.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];return new pt({...P,interfaces:()=>[...w.getInterfaces().map(X),...hi(M)],fields:()=>({...wt(P.fields,O),...pi(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function Ke(w){var V;const P=w.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];return new Ts({...P,interfaces:()=>[...w.getInterfaces().map(X),...hi(M)],fields:()=>({...wt(P.fields,O),...pi(M)}),extensionASTNodes:P.extensionASTNodes.concat(M)})}function mt(w){var V;const P=w.toConfig(),M=(V=p[P.name])!==null&&V!==void 0?V:[];return new Es({...P,types:()=>[...w.getTypes().map(X),...Xt(M)],extensionASTNodes:P.extensionASTNodes.concat(M)})}function O(w){return{...w,type:L(w.type),args:w.args&&wt(w.args,Z)}}function Z(w){return{...w,type:L(w.type)}}function sn(w){const V={};for(const M of w){var P;const me=(P=M.operationTypes)!==null&&P!==void 0?P:[];for(const Ue of me)V[Ue.operation]=kt(Ue.type)}return V}function kt(w){var V;const P=w.name.value,M=(V=Vc[P])!==null&&V!==void 0?V:S[P];if(M===void 0)throw new Error(`Unknown type: "${P}".`);return M}function Ht(w){return w.kind===_.LIST_TYPE?new yn(Ht(w.type)):w.kind===_.NON_NULL_TYPE?new ae(Ht(w.type)):kt(w)}function hr(w){var V;return new zt({name:w.name.value,description:(V=w.description)===null||V===void 0?void 0:V.value,locations:w.locations.map(({value:P})=>P),isRepeatable:w.repeatable,args:mr(w.arguments),astNode:w})}function pi(w){const V=Object.create(null);for(const me of w){var P;const Ue=(P=me.fields)!==null&&P!==void 0?P:[];for(const ge of Ue){var M;V[ge.name.value]={type:Ht(ge.type),description:(M=ge.description)===null||M===void 0?void 0:M.value,args:mr(ge.arguments),deprecationReason:fs(ge),astNode:ge}}}return V}function mr(w){const V=w??[],P=Object.create(null);for(const me of V){var M;const Ue=Ht(me.type);P[me.name.value]={type:Ue,description:(M=me.description)===null||M===void 0?void 0:M.value,defaultValue:jt(me.defaultValue,Ue),deprecationReason:fs(me),astNode:me}}return P}function ot(w){const V=Object.create(null);for(const me of w){var P;const Ue=(P=me.fields)!==null&&P!==void 0?P:[];for(const ge of Ue){var M;const Cn=Ht(ge.type);V[ge.name.value]={type:Cn,description:(M=ge.description)===null||M===void 0?void 0:M.value,defaultValue:jt(ge.defaultValue,Cn),deprecationReason:fs(ge),astNode:ge}}}return V}function $n(w){const V=Object.create(null);for(const me of w){var P;const Ue=(P=me.values)!==null&&P!==void 0?P:[];for(const ge of Ue){var M;V[ge.name.value]={description:(M=ge.description)===null||M===void 0?void 0:M.value,deprecationReason:fs(ge),astNode:ge}}}return V}function hi(w){return w.flatMap(V=>{var P,M;return(P=(M=V.interfaces)===null||M===void 0?void 0:M.map(kt))!==null&&P!==void 0?P:[]})}function Xt(w){return w.flatMap(V=>{var P,M;return(P=(M=V.types)===null||M===void 0?void 0:M.map(kt))!==null&&P!==void 0?P:[]})}function Sn(w){var V;const P=w.name.value,M=(V=p[P])!==null&&V!==void 0?V:[];switch(w.kind){case _.OBJECT_TYPE_DEFINITION:{var me;const Ze=[w,...M];return new pt({name:P,description:(me=w.description)===null||me===void 0?void 0:me.value,interfaces:()=>hi(Ze),fields:()=>pi(Ze),astNode:w,extensionASTNodes:M})}case _.INTERFACE_TYPE_DEFINITION:{var Ue;const Ze=[w,...M];return new Ts({name:P,description:(Ue=w.description)===null||Ue===void 0?void 0:Ue.value,interfaces:()=>hi(Ze),fields:()=>pi(Ze),astNode:w,extensionASTNodes:M})}case _.ENUM_TYPE_DEFINITION:{var ge;const Ze=[w,...M];return new Ri({name:P,description:(ge=w.description)===null||ge===void 0?void 0:ge.value,values:$n(Ze),astNode:w,extensionASTNodes:M})}case _.UNION_TYPE_DEFINITION:{var Cn;const Ze=[w,...M];return new Es({name:P,description:(Cn=w.description)===null||Cn===void 0?void 0:Cn.value,types:()=>Xt(Ze),astNode:w,extensionASTNodes:M})}case _.SCALAR_TYPE_DEFINITION:{var Li;return new Rt({name:P,description:(Li=w.description)===null||Li===void 0?void 0:Li.value,specifiedByURL:Gc(w),astNode:w,extensionASTNodes:M})}case _.INPUT_OBJECT_TYPE_DEFINITION:{var xt;const Ze=[w,...M];return new Is({name:P,description:(xt=w.description)===null||xt===void 0?void 0:xt.value,fields:()=>ot(Ze),astNode:w,extensionASTNodes:M})}}}}const Vc=Oi([...Cs,...Ns],i=>i.name);function fs(i){const n=Uf(Nf,i);return n==null?void 0:n.reason}function Gc(i){const n=Uf(Of,i);return n==null?void 0:n.url}function tv(i,n){i!=null&&i.kind===_.DOCUMENT||de(!1,"Must provide valid Document AST."),(n==null?void 0:n.assumeValid)!==!0&&(n==null?void 0:n.assumeValidSDL)!==!0&&ZD(i);const s=nv({description:void 0,types:[],directives:[],extensions:Object.create(null),extensionASTNodes:[],assumeValid:!1},i,n);if(s.astNode==null)for(const u of s.types)switch(u.name){case"Query":s.query=u;break;case"Mutation":s.mutation=u;break;case"Subscription":s.subscription=u;break}const o=[...s.directives,...xi.filter(u=>s.directives.every(l=>l.name!==u.name))];return new Pf({...s,directives:o})}function iv(i,n){const t=jI(i,{noLocation:n==null?void 0:n.noLocation,allowLegacyFragmentVariables:n==null?void 0:n.allowLegacyFragmentVariables});return tv(t,{assumeValidSDL:n==null?void 0:n.assumeValidSDL,assumeValid:n==null?void 0:n.assumeValid})}const qc=`
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
  This method returns historical info fo Points
  </p>
  </div>
  """
  customerHistoryPoints(input: CustomerHistoryPointsInput!): CustomerHistoryPointsResponse
  """
  <div>
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This method returns historical info fo Rewards
  </p>
  </div>
  """
  customerHistoryRewards(input: CustomerHistoryRewardsInput!): CustomerHistoryRewardsResponse
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
  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/cross-sign-8749566-7139691.png?f=webp" alt="not verified" width="32" style="vertical-align:middle"/>
  <img src="https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-e1458196160872.png" alt="pending" width="32" style="vertical-align:middle"/>
  <p>
  This API method allows the calling application to Credit Rewards to Customer
  </p>
  </div>
  """
  mergeCustomerLoyaltyAccount(identityValue: String!, mergeCustomersInput: MergeCustomersInput!): MergeCustomersResponse
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
  benifitId: Int
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
`;class rv{constructor(n){Ie(this,"mapping");this.mapping=n}getFor(n){return this.mapping.get(n.name)}}var ar;(function(i){i.UNION="union",i.ARGUMENT="argument",i.FIELD="field"})(ar||(ar={}));function sv(i){const n=new Map;return ov(i,t=>{Tn(t)&&av(t,s=>{const o=ga(s.type);aa(n,o).references.push({kind:ar.FIELD,parent:t,by:s}),uv(s,l=>{const d=ga(l.type);aa(n,d).references.push({kind:ar.ARGUMENT,field:s,type:t,by:l})})}),Kn(t)&&t.getTypes().forEach(s=>{aa(n,s).references.push({kind:ar.UNION,by:t})})}),new rv(n)}function ov(i,n){Object.entries(i.getTypeMap()).forEach(([,t])=>{t.name.startsWith("__")||n(t)})}function av(i,n){Object.entries(i.getFields()).forEach(([,t])=>{n(t)})}function uv(i,n){Object.entries(i.args).forEach(([,t])=>{n(t)})}function aa(i,n){let t=i.get(n.name);return t||(t={references:[]},i.set(n.name,t)),t}function ga(i){return ln(i)||di(i)?ga(i.ofType):i}const fn=Dv(),ya=wa(ba.DIRECTIVES,[]);var Wc;const lv=Os((Wc=fn.getQueryType())==null?void 0:Wc.getFields());var Yc;const cv=Os((Yc=fn.getMutationType())==null?void 0:Yc.getFields());var Qc;const fv=Os((Qc=fn.getSubscriptionType())==null?void 0:Qc.getFields()),Ra=Nt.keyBy(Vf(),i=>i.name.toLocaleLowerCase()),dv=Nt.mapValues(Ra,i=>{const n=ya.find(t=>(t==null?void 0:t.name)===i.name||(t==null?void 0:t.name)==="*");return n?n.args.some(t=>t==="*")?i.args:n.args.map(t=>i.args.find(s=>s.name===t)).filter(t=>!!t):[]}),pv=Os(fn.getTypeMap()),hv=sv(fn);function Os(i){return Nt.mapKeys(i||{},(n,t)=>t.toLocaleLowerCase())}function mv(){return Nt.size(fn.getTypeMap())<=10}function gv(){return[ua("Queries",fn.getQueryType()),ua("Mutations",fn.getMutationType()),ua("Subscriptions",fn.getSubscriptionType()),vv(),Ev()].filter(i=>!!i)}function ua(i,n){return Tv(i,yv(n))}function yv(i){return Nt.sortBy((i==null?void 0:i.getFields())||{},n=>n.name)}function Tv(i,n){return n.length===0?null:{type:"menu",title:i,children:n.map(t=>({type:"page",title:t.name,section:i,deprecated:!!t.deprecationReason,href:fr.joinUrlPaths(vs,i.toLocaleLowerCase(),t.name)}))}}function Ev(){return mv()?null:{type:"menu",title:"Types",children:Nt.sortBy(Nt.map(fn.getTypeMap()),n=>n.name).filter(n=>!n.name.startsWith("__")).map(n=>({type:"page",title:n.name,section:"Types",href:fr.joinUrlPaths(vs,"types",n.name)}))}}function Pv(){return!!fn.getQueryType()}function Uv(i){return lv[i.toLocaleLowerCase()]}function Mv(){return!!fn.getMutationType()}function $v(i){return cv[i.toLocaleLowerCase()]}function Vv(){return!!fn.getSubscriptionType()}function Gv(i){return fv[i.toLocaleLowerCase()]}function qv(i){return pv[i.toLocaleLowerCase()]}function Iv(i){return Ra[i.toLocaleLowerCase()]}function jv(i){return Iv(i.name)!==void 0}function Wv(){return Nt.size(Ra)>0}function Yv(i){return dv[i.name.toLocaleLowerCase()]||[]}function Qv(i){if(i)return hv.getFor(i)}function zv(i){return Nt.flatMap(i.getFields(),n=>({field:n,possibleDescriptions:$f(n,i)}))}function $f(i,n){return i?i.description?[{description:i.description,from:n}]:Tn(n)?n.getInterfaces().flatMap(t=>$f(t.getFields()[i.name],t)):[]:[]}function Vf(){return ya.some(i=>(i==null?void 0:i.name)==="*")?fn.getDirectives().filter(i=>!["include","skip","deprecated","specifiedBy"].includes(i.name)):ya.filter(i=>!!(i!=null&&i.name)).map(({name:i})=>i?fn.getDirective(i):void 0).filter(i=>!!i)}function Dv(){return qc.trim().length===0?ev(JSON.parse(JSON.stringify({__schema:{types:[]}}))):iv(qc)}function vv(){const i=Vf();return i.length===0?null:{type:"menu",title:"Directives",children:i.map(n=>({type:"page",title:n.name,href:fr.joinUrlPaths(vs,"directives",n.name),section:"Directives"}))}}const Jv=wa(ba.APP_TITLE,"GraphQL Documentation"),Gf=Av().concat(gv());wv(Gf);const _v=Object.freeze(Gf),Hv=bv();function Av(){return wa(ba.PAGES,Cv()).filter(n=>!!n).map(n=>jf([],n))}function bv(){const i=Sv();if(i)return i.href;throw new Error("No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.")}function wv(i){function n(s,o){for(const u of s){if(u.type==="page"){o(u);continue}u.type==="menu"&&n(u.children,o)}}let t;n(i,s=>{t&&(t.next={title:s.title,section:s.section,href:s.href},s.previous={title:t.title,section:t.section,href:t.href}),t=s})}function Sv(){return qf(()=>!0)}function Xv(i){return qf(n=>n.href.toLocaleLowerCase()===i.toLocaleLowerCase())}function qf(i){function n(t){for(const s of t){if(s.type==="page"&&i(s))return s;if(s.type==="menu"){const o=n(s.children);if(o)return o}}return null}return n(_v)}function jf(i,n){if(typeof n.content=="string")return{type:"page",title:n.title,content:n.content,href:fr.joinUrlPaths(vs,...i,jc(n.title))};const t=i.concat([jc(n.title)]);return{type:"menu",title:n.title,children:n.content.map(s=>({...jf(t,s),section:n.title}))}}function jc(i){return fr.generatePathSegment(i,new tf)}function Cv(){return[{title:"Introduction",content:[{title:"Welcome",content:`
        # Welcome 🎉

        [Congratulations!](https://www.youtube.com/watch?v=1Bix44C1EzY) You have successfully created your first Magidoc website.

        Now that you are up and running, you can customize this website even further by providing some configuration inside your [magidoc.mjs ⚙️](https://magidoc.js.org/cli/magidoc-configuration). 
        If you wish to remove or modify this page, have a look at the *customPages* configuration.
        `.split(`
`).map(i=>i.trim()).join(`
`)}]}]}export{Pv as A,tf as B,Uv as C,Vv as D,Gv as E,uD as F,ln as G,di as H,Df as I,If as J,qv as K,Qv as L,zv as M,jv as N,_ as O,Bv as P,_s as Q,ar as R,Xc as S,xv as T,tr as U,aI as V,Nt as _,kv as a,wa as b,Jn as c,Tn as d,ct as e,cn as f,Jc as g,Jt as h,Zn as i,Kn as j,et as k,mv as l,De as m,Jv as n,Lv as o,_v as p,Hv as q,Xv as r,fn as s,ba as t,fr as u,Wv as v,Iv as w,Yv as x,Mv as y,$v as z};
