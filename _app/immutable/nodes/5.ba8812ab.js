import{y as M,z as P,r as b}from"../chunks/pages.459746eb.js";import{e as S}from"../chunks/index.3158323b.js";import{s as T,a as u,X as w,d as m,c as d,i as c}from"../chunks/scheduler.88297443.js";import{S as N,i as O,b as _,d as g,m as $,a as h,t as v,e as y}from"../chunks/index.012ade26.js";import{F as j,Q as z}from"../chunks/FieldDetails.976aac7e.js";import{P as B}from"../chunks/PreviousNextPage.8affb3c4.js";const F=M(),Q=({params:n,url:a})=>{const o=P(n.mutation),t=b(a.pathname);if(!o||!t)throw S(404,`Mutation ${n.mutation} not found.`);return{field:o,page:t}},U=Object.freeze(Object.defineProperty({__proto__:null,load:Q,prerender:F},Symbol.toStringTag,{value:"Module"}));function q(n){let a,o,t,r,i,f;return document.title=a="Mutation - "+n[0].field.name,t=new j({props:{field:n[0].field,type:z.MUTATION}}),i=new B({props:{page:n[0].page}}),{c(){o=u(),_(t.$$.fragment),r=u(),_(i.$$.fragment)},l(e){w("svelte-1ha51ns",document.head).forEach(m),o=d(e),g(t.$$.fragment,e),r=d(e),g(i.$$.fragment,e)},m(e,s){c(e,o,s),$(t,e,s),c(e,r,s),$(i,e,s),f=!0},p(e,[s]){(!f||s&1)&&a!==(a="Mutation - "+e[0].field.name)&&(document.title=a);const l={};s&1&&(l.field=e[0].field),t.$set(l);const p={};s&1&&(p.page=e[0].page),i.$set(p)},i(e){f||(h(t.$$.fragment,e),h(i.$$.fragment,e),f=!0)},o(e){v(t.$$.fragment,e),v(i.$$.fragment,e),f=!1},d(e){e&&(m(o),m(r)),y(t,e),y(i,e)}}}function x(n,a,o){let{data:t}=a;return n.$$set=r=>{"data"in r&&o(0,t=r.data)},[t]}class X extends N{constructor(a){super(),O(this,a,x,q,T,{data:0})}}export{X as component,U as universal};
