import{e as w}from"../chunks/index.3158323b.js";import{p as P,r as k}from"../chunks/pages.017ecf58.js";import{s as y,a as g,X as C,d as m,c as u,i as l}from"../chunks/scheduler.88297443.js";import{S,i as j,b as d,d as _,m as $,a as h,t as v,e as b}from"../chunks/index.012ade26.js";import{C as M,P as O}from"../chunks/PreviousNextPage.4a0979da.js";const q=P.length>0,z=({url:n})=>{const t=k(n.pathname);if(!t)throw w(404,"Could not find the page you are looking for");return{page:t}},D=Object.freeze(Object.defineProperty({__proto__:null,load:z,prerender:q},Symbol.toStringTag,{value:"Module"}));function B(n){let t,i,a,s,r,p;return document.title=t=`
    `+(n[0].page.section?`${n[0].page.section} - `:"")+n[0].page.title+`
  `,a=new M({props:{source:n[0].page.content}}),r=new O({props:{page:n[0].page}}),{c(){i=g(),d(a.$$.fragment),s=g(),d(r.$$.fragment)},l(e){C("svelte-52tmna",document.head).forEach(m),i=u(e),_(a.$$.fragment,e),s=u(e),_(r.$$.fragment,e)},m(e,o){l(e,i,o),$(a,e,o),l(e,s,o),$(r,e,o),p=!0},p(e,[o]){(!p||o&1)&&t!==(t=`
    `+(e[0].page.section?`${e[0].page.section} - `:"")+e[0].page.title+`
  `)&&(document.title=t);const c={};o&1&&(c.source=e[0].page.content),a.$set(c);const f={};o&1&&(f.page=e[0].page),r.$set(f)},i(e){p||(h(a.$$.fragment,e),h(r.$$.fragment,e),p=!0)},o(e){v(a.$$.fragment,e),v(r.$$.fragment,e),p=!1},d(e){e&&(m(i),m(s)),b(a,e),b(r,e)}}}function E(n,t,i){let{data:a}=t;return n.$$set=s=>{"data"in s&&i(0,a=s.data)},[a]}class F extends S{constructor(t){super(),j(this,t,E,B,y,{data:0})}}export{F as component,D as universal};
