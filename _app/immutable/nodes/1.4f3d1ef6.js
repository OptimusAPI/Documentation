import{s as q,a as y,f as u,l as b,X as x,d as c,c as j,g as f,h as v,m as w,j as z,i as H,G as d,n as S,H as $,B as A}from"../chunks/scheduler.88297443.js";import{S as B,i as C}from"../chunks/index.012ade26.js";import{p as D}from"../chunks/stores.4b54356e.js";function G(a){let n,l,e,r,s=a[0].status+"",o,m,p,_;return document.title=n="Error - "+a[0].status,{c(){l=y(),e=u("div"),r=u("h1"),o=b(s),m=y(),p=u("p"),_=b(a[1]),this.h()},l(t){x("svelte-1wpfhz9",document.head).forEach(c),l=j(t),e=f(t,"DIV",{class:!0});var h=v(e);r=f(h,"H1",{});var E=v(r);o=w(E,s),E.forEach(c),m=j(h),p=f(h,"P",{});var g=v(p);_=w(g,a[1]),g.forEach(c),h.forEach(c),this.h()},h(){z(e,"class","wrapper svelte-1ldjxpt")},m(t,i){H(t,l,i),H(t,e,i),d(e,r),d(r,o),d(e,m),d(e,p),d(p,_)},p(t,[i]){i&1&&n!==(n="Error - "+t[0].status)&&(document.title=n),i&1&&s!==(s=t[0].status+"")&&S(o,s),i&2&&S(_,t[1])},i:$,o:$,d(t){t&&(c(l),c(e))}}}function I(a,n,l){let e;A(a,D,s=>l(0,e=s));let r;return a.$$.update=()=>{var s;if(a.$$.dirty&1){const o=((s=e.error)==null?void 0:s.message)||"An unexpected error occurred.";l(1,r=o.endsWith(".")?o:`${o}.`)}},[e,r]}class X extends B{constructor(n){super(),C(this,n,I,G,q,{})}}export{X as component};
