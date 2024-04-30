import{s as y,e as v,i as p,d as m,f as O,g as L,h as U,j as $,l as g,m as h,n as k}from"./scheduler.88297443.js";import{S as E,i as V,a as d,t as _,b as w,d as A,m as b,e as N}from"./index.012ade26.js";import{b as T}from"./paths.0549de47.js";import{s as x,x as B,u as D,N as I,O as l}from"./pages.84d42361.js";import{d as C}from"./PreviousNextPage.626c0c83.js";import{c as J}from"./ArgsList.6d956a87.js";function P(s){let n,a;return n=new C({props:{type:"blue",$$slots:{default:[F]},$$scope:{ctx:s}}}),{c(){w(n.$$.fragment)},l(i){A(n.$$.fragment,i)},m(i,e){b(n,i,e),a=!0},p(i,e){const t={};e&67&&(t.$$scope={dirty:e,ctx:i}),n.$set(t)},i(i){a||(d(n.$$.fragment,i),a=!0)},o(i){_(n.$$.fragment,i),a=!1},d(i){N(n,i)}}}function q(s){let n,a=s[0].name.value+"",i;return{c(){n=g("@"),i=g(a)},l(e){n=h(e,"@"),i=h(e,a)},m(e,t){p(e,n,t),p(e,i,t)},p(e,t){t&1&&a!==(a=e[0].name.value+"")&&k(i,a)},d(e){e&&(m(n),m(i))}}}function F(s){let n,a,i,e;return a=new J({props:{tooltipText:s[1],direction:"top",align:"center",$$slots:{default:[q]},$$scope:{ctx:s}}}),{c(){n=O("a"),w(a.$$.fragment),this.h()},l(t){n=L(t,"A",{href:!0,class:!0});var r=U(n);A(a.$$.fragment,r),r.forEach(m),this.h()},h(){$(n,"href",i=D.joinUrlPaths(T,`/directives/${s[0].name.value}`)),$(n,"class","override-tooltip-width svelte-a6h330")},m(t,r){p(t,n,r),b(a,n,null),e=!0},p(t,r){const u={};r&2&&(u.tooltipText=t[1]),r&65&&(u.$$scope={dirty:r,ctx:t}),a.$set(u),(!e||r&1&&i!==(i=D.joinUrlPaths(T,`/directives/${t[0].name.value}`)))&&$(n,"href",i)},i(t){e||(d(a.$$.fragment,t),e=!0)},o(t){_(a.$$.fragment,t),e=!1},d(t){t&&m(n),N(a)}}}function G(s){let n=s[2](),a,i,e=n&&P(s);return{c(){e&&e.c(),a=v()},l(t){e&&e.l(t),a=v()},m(t,r){e&&e.m(t,r),p(t,a,r),i=!0},p(t,[r]){n&&e.p(t,r)},i(t){i||(d(e),i=!0)},o(t){_(e),i=!1},d(t){t&&m(a),e&&e.d(t)}}}function K(s,n,a){let{directive:i}=n,e,t;function r(o){switch(o.kind){case l.INT:case l.BOOLEAN:case l.FLOAT:return String(o.value);case l.STRING:case l.ENUM:return`"${o.value}"`;case l.NULL:return"null";case l.LIST:return`[${o.values.map(r).join(", ")}]`;case l.OBJECT:return`{${o.fields.map(c=>`${c.name.value}: ${r(c.value)}`).join(", ")}}`}}function u(){return!!e&&I(e)}function S(o,c){const f=c.find(j=>j.name.value===o.name);return f?r(f.value):JSON.stringify(o.defaultValue)}return s.$$set=o=>{"directive"in o&&a(0,i=o.directive)},s.$$.update=()=>{if(s.$$.dirty&1&&a(3,e=x.getDirective(i.name.value)),s.$$.dirty&9){let o=`@${i.name.value}`;const c=e?B(e):[];c.length>0&&(o+=`(${c.map(f=>`${f.name}: ${S(f,i.arguments||[])}`).join(", ")})`),a(1,t=o.trim())}},[i,t,u,e]}class X extends E{constructor(n){super(),V(this,n,K,G,y,{directive:0})}}export{X as D};
