import{v as E,w as N,r as O,x as y}from"../chunks/pages.f322f354.js";import{e as H}from"../chunks/index.3158323b.js";import{s as k,f as M,a as h,g as T,h as q,c as w,d as $,i as u,G as b,l as P,m as S,n as z,X as G}from"../chunks/scheduler.88297443.js";import{S as C,i as j,b as d,d as p,m as g,a as l,g as I,t as m,c as L,e as _}from"../chunks/index.012ade26.js";import{A as B,C as X,P as F}from"../chunks/PreviousNextPage.1d8ed180.js";import{A as J}from"../chunks/ArgsList.d985edbf.js";const K=E(),Q=({params:o,url:t})=>{const n=N(o.directive),r=O(t.pathname);if(!n||!r)throw H(404,`Directive ${o.directive} not found.`);return{directive:n,page:r}},ie=Object.freeze(Object.defineProperty({__proto__:null,load:Q,prerender:K},Symbol.toStringTag,{value:"Module"}));function R(o){let t=o[0].name+"",n;return{c(){n=P(t)},l(r){n=S(r,t)},m(r,i){u(r,n,i)},p(r,i){i&1&&t!==(t=r[0].name+"")&&z(n,t)},d(r){r&&$(n)}}}function D(o){let t,n,r,i;return t=new B({props:{id:"arguments",depth:2,$$slots:{default:[U]},$$scope:{ctx:o}}}),r=new J({props:{data:o[1]}}),{c(){d(t.$$.fragment),n=h(),d(r.$$.fragment)},l(a){p(t.$$.fragment,a),n=w(a),p(r.$$.fragment,a)},m(a,c){g(t,a,c),u(a,n,c),g(r,a,c),i=!0},p(a,c){const e={};c&4&&(e.$$scope={dirty:c,ctx:a}),t.$set(e);const s={};c&2&&(s.data=a[1]),r.$set(s)},i(a){i||(l(t.$$.fragment,a),l(r.$$.fragment,a),i=!0)},o(a){m(t.$$.fragment,a),m(r.$$.fragment,a),i=!1},d(a){a&&$(n),_(t,a),_(r,a)}}}function U(o){let t;return{c(){t=P("Arguments")},l(n){t=S(n,"Arguments")},m(n,r){u(n,t,r)},d(n){n&&$(t)}}}function V(o){let t,n,r,i,a,c;n=new B({props:{id:"title",depth:1,$$slots:{default:[R]},$$scope:{ctx:o}}}),i=new X({props:{source:o[0].description}});let e=o[1].length>0&&D(o);return{c(){t=M("section"),d(n.$$.fragment),r=h(),d(i.$$.fragment),a=h(),e&&e.c()},l(s){t=T(s,"SECTION",{});var f=q(t);p(n.$$.fragment,f),r=w(f),p(i.$$.fragment,f),a=w(f),e&&e.l(f),f.forEach($)},m(s,f){u(s,t,f),g(n,t,null),b(t,r),g(i,t,null),b(t,a),e&&e.m(t,null),c=!0},p(s,[f]){const v={};f&5&&(v.$$scope={dirty:f,ctx:s}),n.$set(v);const A={};f&1&&(A.source=s[0].description),i.$set(A),s[1].length>0?e?(e.p(s,f),f&2&&l(e,1)):(e=D(s),e.c(),l(e,1),e.m(t,null)):e&&(I(),m(e,1,1,()=>{e=null}),L())},i(s){c||(l(n.$$.fragment,s),l(i.$$.fragment,s),l(e),c=!0)},o(s){m(n.$$.fragment,s),m(i.$$.fragment,s),m(e),c=!1},d(s){s&&$(t),_(n),_(i),e&&e.d()}}}function W(o,t,n){let{directive:r}=t,i;return o.$$set=a=>{"directive"in a&&n(0,r=a.directive)},o.$$.update=()=>{o.$$.dirty&1&&n(1,i=y(r))},[r,i]}class Y extends C{constructor(t){super(),j(this,t,W,V,k,{directive:0})}}function Z(o){let t,n,r,i,a,c;return document.title=t="Directive - "+o[0].directive.name,r=new Y({props:{directive:o[0].directive}}),a=new F({props:{page:o[0].page}}),{c(){n=h(),d(r.$$.fragment),i=h(),d(a.$$.fragment)},l(e){G("svelte-fycjkl",document.head).forEach($),n=w(e),p(r.$$.fragment,e),i=w(e),p(a.$$.fragment,e)},m(e,s){u(e,n,s),g(r,e,s),u(e,i,s),g(a,e,s),c=!0},p(e,[s]){(!c||s&1)&&t!==(t="Directive - "+e[0].directive.name)&&(document.title=t);const f={};s&1&&(f.directive=e[0].directive),r.$set(f);const v={};s&1&&(v.page=e[0].page),a.$set(v)},i(e){c||(l(r.$$.fragment,e),l(a.$$.fragment,e),c=!0)},o(e){m(r.$$.fragment,e),m(a.$$.fragment,e),c=!1},d(e){e&&($(n),$(i)),_(r,e),_(a,e)}}}function x(o,t,n){let{data:r}=t;return o.$$set=i=>{"data"in i&&n(0,r=i.data)},[r]}class oe extends C{constructor(t){super(),j(this,t,x,Z,k,{data:0})}}export{oe as component,ie as universal};
