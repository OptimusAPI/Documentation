var R=Object.defineProperty;var G=(t,e,n)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var f=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);function z(){}const ft=t=>t;function F(t,e){for(const n in e)t[n]=e[n];return t}function _t(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function I(t){return t()}function ht(){return Object.create(null)}function U(t){t.forEach(I)}function dt(t){return typeof t=="function"}function mt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let p;function pt(t,e){return t===e?!0:(p||(p=document.createElement("a")),p.href=e,t===p.href)}function yt(t){return Object.keys(t).length===0}function H(t,...e){if(t==null){for(const i of e)i(void 0);return z}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t){let e;return H(t,n=>e=n)(),e}function bt(t,e,n){t.$$.on_destroy.push(H(e,n))}function xt(t,e,n,i){if(t){const s=L(t,e,n,i);return t[0](s)}}function L(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function Et(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function vt(t,e,n,i,s,l){if(s){const c=L(e,n,i,l);t.p(c,s)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Tt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Nt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function kt(t){const e={};for(const n in t)e[n]=!0;return e}function At(t,e,n){return t.set(n),e}let g=!1;function jt(){g=!0}function Dt(){g=!1}function W(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&r.push(u)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,u=(s>0&&e[n[s]].claim_order<=a?s+1:W(1,s,B=>e[n[B]].claim_order,a))-1;i[r]=n[u]+1;const A=u+1;n[A]=r,s=Math.max(A,s)}const l=[],c=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(l.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);l.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<l.length&&c[r].claim_order>=l[a].claim_order;)a++;const u=a<l.length?l[a]:null;t.insertBefore(c[r],u)}}function K(t,e){t.appendChild(e)}function Q(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=T("style");return e.textContent="/* empty */",V(Q(t),e),e.sheet}function V(t,e){return K(t.head||t,e),e.sheet}function X(t,e){if(g){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Y(t,e,n){t.insertBefore(e,n||null)}function Z(t,e,n){g&&!n?X(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function T(t){return document.createElement(t)}function M(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function Lt(){return N(" ")}function Mt(){return N("")}function Pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function St(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ot(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const $=["width","height"];function tt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&$.indexOf(i)===-1?t[i]=e[i]:k(t,i,e[i])}function qt(t,e){for(const n in e)k(t,n,e[n])}function et(t,e){Object.keys(e).forEach(n=>{nt(t,n,e[n])})}function nt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:k(t,e,n)}function Bt(t){return/-/.test(t)?et:tt}function Rt(t){return t.dataset.svelteH}function Gt(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,i,s=!1){P(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function O(t,e,n,i){return S(t,s=>s.nodeName===e,s=>{const l=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||l.push(o.name)}l.forEach(c=>s.removeAttribute(c))},()=>i(e))}function zt(t,e,n){return O(t,e,n,T)}function Ft(t,e,n){return O(t,e,n,M)}function it(t,e){return S(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function It(t){return it(t," ")}function j(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Ut(t,e){const n=j(t,"HTML_TAG_START",0),i=j(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new D(e);P(t);const s=t.splice(n,i-n+1);E(s[0]),E(s[s.length-1]);const l=s.slice(1,s.length-1);for(const c of l)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new D(e,l)}function Wt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Jt(t,e){t.value=e??""}function Kt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Qt(t,e,n){t.classList.toggle(e,!!n)}function st(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Vt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class ct{constructor(e=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=M(n.nodeName):this.e=T(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Y(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(E)}}class D extends ct{constructor(n=!1,i){super(n);f(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)Z(this.t,this.n[i],n)}}function Xt(t,e){return new t(e)}let y;function b(t){y=t}function d(){if(!y)throw new Error("Function called outside component initialization");return y}function Yt(t){d().$$.on_mount.push(t)}function Zt(t){d().$$.after_update.push(t)}function $t(t){d().$$.on_destroy.push(t)}function te(){const t=d();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=st(e,n,{cancelable:i});return s.slice().forEach(c=>{c.call(t,l)}),!l.defaultPrevented}return!0}}function ee(t,e){return d().$$.context.set(t,e),e}function ne(t){return d().$$.context.get(t)}function ie(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const m=[],C=[];let h=[];const v=[],q=Promise.resolve();let w=!1;function rt(){w||(w=!0,q.then(ot))}function se(){return rt(),q}function lt(t){h.push(t)}function ce(t){v.push(t)}const x=new Set;let _=0;function ot(){if(_!==0)return;const t=y;do{try{for(;_<m.length;){const e=m[_];_++,b(e),at(e.$$)}}catch(e){throw m.length=0,_=0,e}for(b(null),m.length=0,_=0;C.length;)C.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];x.has(n)||(x.add(n),n())}h.length=0}while(m.length);for(;v.length;)v.pop()();w=!1,x.clear(),b(t)}function at(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(lt)}}function re(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{ot as $,Nt as A,bt as B,Tt as C,M as D,Ft as E,qt as F,X as G,z as H,Pt as I,U as J,ie as K,lt as L,kt as M,ce as N,te as O,Jt as P,Ot as Q,Ht as R,gt as S,At as T,D as U,Ut as V,$t as W,Vt as X,_t as Y,d as Z,b as _,Lt as a,ne as a0,Rt as a1,ee as a2,St as a3,Bt as a4,H as a5,dt as a6,pt as a7,Q as a8,Ct as a9,st as aa,ft as ab,ht as ac,yt as ad,re as ae,y as af,I as ag,m as ah,rt as ai,jt as aj,Dt as ak,Zt as b,It as c,E as d,Mt as e,T as f,zt as g,Gt as h,Z as i,k as j,Kt as k,N as l,it as m,Wt as n,Yt as o,C as p,Xt as q,xt as r,mt as s,se as t,F as u,tt as v,Qt as w,vt as x,wt as y,Et as z};
