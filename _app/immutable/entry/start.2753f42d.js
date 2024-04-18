import{o as _e,t as we}from"../chunks/scheduler.88297443.js";import{S as Ge,a as Ke,I as M,g as Ce,f as Me,b as ye,c as le,s as te,i as ve,d as F,P as Ve,e as Xe}from"../chunks/singletons.cf72d844.js";import{b as K}from"../chunks/paths.a6281d70.js";import{R as qe,H as ne}from"../chunks/control.f5b05b5f.js";function Ze(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function Qe(n){return n.split("%25").map(decodeURI).join("%25")}function et(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const tt=["href","pathname","search","searchParams","toString","toJSON"];function nt(n,o){const d=new URL(n);for(const s of tt)Object.defineProperty(d,s,{get(){return o(),n[s]},enumerable:!0,configurable:!0});return at(d),d}function at(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const rt="/__data.json";function ot(n){return n.replace(/\/$/,"")+rt}function it(...n){let o=5381;for(const d of n)if(typeof d=="string"){let s=d.length;for(;s;)o=o*33^d.charCodeAt(--s)}else if(ArrayBuffer.isView(d)){const s=new Uint8Array(d.buffer,d.byteOffset,d.byteLength);let u=s.length;for(;u;)o=o*33^s[--u]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&ae.delete(Se(n)),fe(n,o));const ae=new Map;function st(n,o){const d=Se(n,o),s=document.querySelector(d);if(s!=null&&s.textContent){const{body:u,...f}=JSON.parse(s.textContent),E=s.getAttribute("data-ttl");return E&&ae.set(d,{body:u,init:f,ttl:1e3*Number(E)}),Promise.resolve(new Response(u,f))}return fe(n,o)}function ct(n,o,d){if(ae.size>0){const s=Se(n,d),u=ae.get(s);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(d==null?void 0:d.cache))return new Response(u.body,u.init);ae.delete(s)}}return fe(o,d)}function Se(n,o){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const u=[];o.headers&&u.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&u.push(o.body),s+=`[data-hash="${it(...u)}"]`}return s}const lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ft(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${dt(n).map(s=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(u)return o.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const E=s.split(/\[(.+?)\](?!\])/);return"/"+E.map((g,m)=>{if(m%2){if(g.startsWith("x+"))return be(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return be(String.fromCharCode(...g.slice(2).split("-").map(U=>parseInt(U,16))));const h=lt.exec(g);if(!h)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,j,S,N]=h;return o.push({name:S,matcher:N,optional:!!x,rest:!!j,chained:j?m===1&&E[0]==="":!1}),j?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return be(g)}).join("")}).join("")}/?$`),params:o}}function ut(n){return!/^\([^)]+\)$/.test(n)}function dt(n){return n.slice(1).split("/").filter(ut)}function pt(n,o,d){const s={},u=n.slice(1),f=u.filter(l=>l!==void 0);let E=0;for(let l=0;l<o.length;l+=1){const g=o[l];let m=u[l-E];if(g.chained&&g.rest&&E&&(m=u.slice(l-E,l+1).filter(h=>h).join("/"),E=0),m===void 0){g.rest&&(s[g.name]="");continue}if(!g.matcher||d[g.matcher](m)){s[g.name]=m;const h=o[l+1],x=u[l+1];h&&!h.rest&&h.optional&&x&&g.chained&&(E=0),!h&&!x&&Object.keys(s).length===f.length&&(E=0);continue}if(g.optional&&g.chained){E++;continue}return}if(!E)return s}function be(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:n,server_loads:o,dictionary:d,matchers:s}){const u=new Set(o);return Object.entries(d).map(([l,[g,m,h]])=>{const{pattern:x,params:j}=ft(l),S={id:l,exec:N=>{const U=x.exec(N);if(U)return pt(U,j,s)},errors:[1,...h||[]].map(N=>n[N]),layouts:[0,...m||[]].map(E),leaf:f(g)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function f(l){const g=l<0;return g&&(l=~l),[g,n[l]]}function E(l){return l===void 0?l:[u.has(l),n[l]]}}function ze(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Fe(n,o){const d=JSON.stringify(o);try{sessionStorage[n]=d}catch{}}const gt=-1,mt=-2,_t=-3,wt=-4,yt=-5,vt=-6;function bt(n,o){if(typeof n=="number")return u(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const d=n,s=Array(d.length);function u(f,E=!1){if(f===gt)return;if(f===_t)return NaN;if(f===wt)return 1/0;if(f===yt)return-1/0;if(f===vt)return-0;if(E)throw new Error("Invalid input");if(f in s)return s[f];const l=d[f];if(!l||typeof l!="object")s[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const g=l[0],m=o==null?void 0:o[g];if(m)return s[f]=m(u(l[1]));switch(g){case"Date":s[f]=new Date(l[1]);break;case"Set":const h=new Set;s[f]=h;for(let S=1;S<l.length;S+=1)h.add(u(l[S]));break;case"Map":const x=new Map;s[f]=x;for(let S=1;S<l.length;S+=2)x.set(u(l[S]),u(l[S+1]));break;case"RegExp":s[f]=new RegExp(l[1],l[2]);break;case"Object":s[f]=Object(l[1]);break;case"BigInt":s[f]=BigInt(l[1]);break;case"null":const j=Object.create(null);s[f]=j;for(let S=1;S<l.length;S+=2)j[l[S]]=u(l[S+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(l.length);s[f]=g;for(let m=0;m<l.length;m+=1){const h=l[m];h!==mt&&(g[m]=u(h))}}else{const g={};s[f]=g;for(const m in l){const h=l[m];g[m]=u(h)}}return s[f]}return u(0)}function Et(n){return n.filter(o=>o!=null)}const Je=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Je];const kt=new Set([...Je]);[...kt];async function St(n){var o;for(const d in n)if(typeof((o=n[d])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,u])=>[s,await u])));return n}const Rt="x-sveltekit-invalidated",At="x-sveltekit-trailing-slash",z=ze(Ge)??{},ee=ze(Ke)??{};function Ee(n){z[n]=te()}function It(n,o){var Te;const d=ht(n),s=n.nodes[0],u=n.nodes[1];s(),u();const f=document.documentElement,E=[],l=[];let g=null;const m={before_navigate:[],on_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},x=!1,j=!1,S=!0,N=!1,U=!1,H=!1,B=!1,V,D=(Te=history.state)==null?void 0:Te[M];D||(D=Date.now(),history.replaceState({...history.state,[M]:D},"",location.href));const ue=z[D];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let q,J,Y;async function Re(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const e=new URL(location.href),i=Z(e,!0);g=null;const t=J={},r=i&&await he(i);if(t===J&&r){if(r.type==="redirect")return re(new URL(r.location,e).href,{},[e.pathname],t);r.props.page!==void 0&&(q=r.props.page),V.$set(r.props)}}function Ae(e){l.some(i=>i==null?void 0:i.snapshot)&&(ee[e]=l.map(i=>{var t;return(t=i==null?void 0:i.snapshot)==null?void 0:t.capture()}))}function Ie(e){var i;(i=ee[e])==null||i.forEach((t,r)=>{var a,c;(c=(a=l[r])==null?void 0:a.snapshot)==null||c.restore(t)})}function Le(){Ee(D),Fe(Ge,z),Ae(D),Fe(Ke,ee)}async function re(e,{noScroll:i=!1,replaceState:t=!1,keepFocus:r=!1,state:a={},invalidateAll:c=!1},p,v){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:i?te():null,keepfocus:r,redirect_chain:p,details:{state:a,replaceState:t},nav_token:v,accepted:()=>{c&&(B=!0)},blocked:()=>{},type:"goto"})}async function Pe(e){return g={id:e.id,promise:he(e).then(i=>(i.type==="loaded"&&i.state.error&&(g=null),i))},g.promise}async function oe(...e){const t=d.filter(r=>e.some(a=>r.exec(a))).map(r=>Promise.all([...r.layouts,r.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(t)}function Oe(e){var r;h=e.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),q=e.props.page,V=new n.root({target:o,props:{...e.props,stores:F,components:l},hydrate:!0}),Ie(D);const t={from:null,to:{params:h.params,route:{id:((r=h.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};m.after_navigate.forEach(a=>a(t)),j=!0}async function X({url:e,params:i,branch:t,status:r,error:a,route:c,form:p}){let v="never";for(const w of t)(w==null?void 0:w.slash)!==void 0&&(v=w.slash);e.pathname=Ze(e.pathname,v),e.search=e.search;const b={type:"loaded",state:{url:e,params:i,branch:t,error:a,route:c},props:{constructors:Et(t).map(w=>w.node.component)}};p!==void 0&&(b.props.form=p);let y={},L=!q,A=0;for(let w=0;w<Math.max(t.length,h.branch.length);w+=1){const _=t[w],O=h.branch[w];(_==null?void 0:_.data)!==(O==null?void 0:O.data)&&(L=!0),_&&(y={...y,..._.data},L&&(b.props[`data_${A}`]=y),A+=1)}return(!h.url||e.href!==h.url.href||h.error!==a||p!==void 0&&p!==q.form||L)&&(b.props.page={error:a,params:i,route:{id:(c==null?void 0:c.id)??null},status:r,url:new URL(e),form:p??null,data:L?y:q.data}),b}async function de({loader:e,parent:i,url:t,params:r,route:a,server_data_node:c}){var y,L,A;let p=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((y=b.universal)!=null&&y.load){let P=function(..._){for(const O of _){const{href:T}=new URL(O,t);v.dependencies.add(T)}};const w={route:new Proxy(a,{get:(_,O)=>(v.route=!0,_[O])}),params:new Proxy(r,{get:(_,O)=>(v.params.add(O),_[O])}),data:(c==null?void 0:c.data)??null,url:nt(t,()=>{v.url=!0}),async fetch(_,O){let T;_ instanceof Request?(T=_.url,O={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...O}):T=_;const C=new URL(T,t);return P(C.href),C.origin===t.origin&&(T=C.href.slice(t.origin.length)),j?ct(T,C.href,O):st(T,O)},setHeaders:()=>{},depends:P,parent(){return v.parent=!0,i()}};p=await b.universal.load.call(null,w)??null,p=p?await St(p):null}return{node:b,loader:e,server:c,universal:(L=b.universal)!=null&&L.load?{type:"data",data:p,uses:v}:null,data:p??(c==null?void 0:c.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Ue(e,i,t,r,a){if(B)return!0;if(!r)return!1;if(r.parent&&e||r.route&&i||r.url&&t)return!0;for(const c of r.params)if(a[c]!==h.params[c])return!0;for(const c of r.dependencies)if(E.some(p=>p(new URL(c))))return!0;return!1}function pe(e,i){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?i??null:null}async function he({id:e,invalidating:i,url:t,params:r,route:a}){if((g==null?void 0:g.id)===e)return g.promise;const{errors:c,layouts:p,leaf:v}=a,b=[...p,v];c.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const L=h.url?e!==h.url.pathname+h.url.search:!1,A=h.route?a.id!==h.route.id:!1;let P=!1;const w=b.map((k,I)=>{var G;const R=h.branch[I],$=!!(k!=null&&k[0])&&((R==null?void 0:R.loader)!==k[1]||Ue(P,A,L,(G=R.server)==null?void 0:G.uses,r));return $&&(P=!0),$});if(w.some(Boolean)){try{y=await He(t,w)}catch(k){return ie({status:k instanceof ne?k.status:500,error:await Q(k,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(y.type==="redirect")return y}const _=y==null?void 0:y.nodes;let O=!1;const T=b.map(async(k,I)=>{var ge;if(!k)return;const R=h.branch[I],$=_==null?void 0:_[I];if((!$||$.type==="skip")&&k[1]===(R==null?void 0:R.loader)&&!Ue(O,A,L,(ge=R.universal)==null?void 0:ge.uses,r))return R;if(O=!0,($==null?void 0:$.type)==="error")throw $;return de({loader:k[1],url:t,params:r,route:a,parent:async()=>{var De;const $e={};for(let me=0;me<I;me+=1)Object.assign($e,(De=await T[me])==null?void 0:De.data);return $e},server_data_node:pe($===void 0&&k[0]?{type:"skip"}:$??null,k[0]?R==null?void 0:R.server:void 0)})});for(const k of T)k.catch(()=>{});const C=[];for(let k=0;k<b.length;k+=1)if(b[k])try{C.push(await T[k])}catch(I){if(I instanceof qe)return{type:"redirect",location:I.location};let R=500,$;if(_!=null&&_.includes(I))R=I.status??R,$=I.error;else if(I instanceof ne)R=I.status,$=I.body;else{if(await F.updated.check())return await W(t);$=await Q(I,{params:r,url:t,route:{id:a.id}})}const G=await xe(k,C,c);return G?await X({url:t,params:r,branch:C.slice(0,G.idx).concat(G.node),status:R,error:$,route:a}):await Ne(t,{id:a.id},$,R)}else C.push(void 0);return await X({url:t,params:r,branch:C,status:200,error:null,route:a,form:i?void 0:null})}async function xe(e,i,t){for(;e--;)if(t[e]){let r=e;for(;!i[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:i,url:t,route:r}){const a={};let c=null;if(n.server_loads[0]===0)try{const y=await He(t,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;c=y.nodes[0]??null}catch{(t.origin!==location.origin||t.pathname!==location.pathname||x)&&await W(t)}const v=await de({loader:s,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),b={node:await u(),loader:u,universal:null,server:null,data:null};return await X({url:t,params:a,branch:[v,b],status:e,error:i,route:null})}function Z(e,i){if(ve(e,K))return;const t=se(e);for(const r of d){const a=r.exec(t);if(a)return{id:e.pathname+e.search,invalidating:i,route:r,params:et(a),url:e}}}function se(e){return Qe(e.pathname.slice(K.length)||"/")}function je({url:e,type:i,intent:t,delta:r}){let a=!1;const c=Be(h,t,e,i);r!==void 0&&(c.navigation.delta=r);const p={...c.navigation,cancel:()=>{a=!0,c.reject(new Error("navigation was cancelled"))}};return U||m.before_navigate.forEach(v=>v(p)),a?null:c}async function ce({url:e,scroll:i,keepfocus:t,redirect_chain:r,details:a,type:c,delta:p,nav_token:v={},accepted:b,blocked:y}){var T,C,k;const L=Z(e,!1),A=je({url:e,type:c,delta:p,intent:L});if(!A){y();return}const P=D;b(),U=!0,j&&F.navigating.set(A.navigation),J=v;let w=L&&await he(L);if(!w){if(ve(e,K))return await W(e);w=await Ne(e,{id:null},await Q(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(L==null?void 0:L.url)||e,J!==v)return A.reject(new Error("navigation was aborted")),!1;if(w.type==="redirect")if(r.length>10||r.includes(e.pathname))w=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(w.location,e).href,{},[...r,e.pathname],v),!1;else((T=w.props.page)==null?void 0:T.status)>=400&&await F.updated.check()&&await W(e);if(E.length=0,B=!1,N=!0,Ee(P),Ae(P),(C=w.props.page)!=null&&C.url&&w.props.page.url.pathname!==e.pathname&&(e.pathname=(k=w.props.page)==null?void 0:k.url.pathname),a){const I=a.replaceState?0:1;if(a.state[M]=D+=I,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let R=D+1;for(;ee[R]||z[R];)delete ee[R],delete z[R],R+=1}}if(g=null,j){h=w.state,w.props.page&&(w.props.page.url=e);const I=(await Promise.all(m.on_navigate.map(R=>R(A.navigation)))).filter(R=>typeof R=="function");if(I.length>0){let R=function(){m.after_navigate=m.after_navigate.filter($=>!I.includes($))};I.push(R),m.after_navigate.push(...I)}V.$set(w.props)}else Oe(w);const{activeElement:_}=document;if(await we(),S){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));i?scrollTo(i.x,i.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==_&&document.activeElement!==document.body;!t&&!O&&ke(),S=!0,w.props.page&&(q=w.props.page),U=!1,c==="popstate"&&Ie(D),A.fulfil(void 0),m.after_navigate.forEach(I=>I(A.navigation)),F.navigating.set(null),N=!1}async function Ne(e,i,t,r){return e.origin===location.origin&&e.pathname===location.pathname&&!x?await ie({status:r,error:t,url:e,route:i}):await W(e)}function W(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;f.addEventListener("mousemove",c=>{const p=c.target;clearTimeout(e),e=setTimeout(()=>{r(p,2)},20)});function i(c){r(c.composedPath()[0],1)}f.addEventListener("mousedown",i),f.addEventListener("touchstart",i,{passive:!0});const t=new IntersectionObserver(c=>{for(const p of c)p.isIntersecting&&(oe(se(new URL(p.target.href))),t.unobserve(p.target))},{threshold:0});function r(c,p){const v=Me(c,f);if(!v)return;const{url:b,external:y,download:L}=ye(v,K);if(y||L)return;const A=le(v);if(!A.reload)if(p<=A.preload_data){const P=Z(b,!1);P&&Pe(P)}else p<=A.preload_code&&oe(se(b))}function a(){t.disconnect();for(const c of f.querySelectorAll("a")){const{url:p,external:v,download:b}=ye(c,K);if(v||b)continue;const y=le(c);y.reload||(y.preload_code===Ve.viewport&&t.observe(c),y.preload_code===Ve.eager&&oe(se(p)))}}m.after_navigate.push(a),a()}function Q(e,i){return e instanceof ne?e.body:n.hooks.handleError({error:e,event:i})??{message:i.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{_e(()=>(m.after_navigate.push(e),()=>{const i=m.after_navigate.indexOf(e);m.after_navigate.splice(i,1)}))},before_navigate:e=>{_e(()=>(m.before_navigate.push(e),()=>{const i=m.before_navigate.indexOf(e);m.before_navigate.splice(i,1)}))},on_navigate:e=>{_e(()=>(m.on_navigate.push(e),()=>{const i=m.on_navigate.indexOf(e);m.on_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(N||!j)&&(S=!1)},goto:(e,i={})=>re(e,i,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:i}=new URL(e,location.href);E.push(t=>t.href===i)}return Re()},invalidate_all:()=>(B=!0,Re()),preload_data:async e=>{const i=new URL(e,Ce(document)),t=Z(i,!1);if(!t)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Pe(t)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const i=new URL(location.href),{branch:t,route:r}=h;if(!r)return;const a=await xe(h.branch.length,t,r.errors);if(a){const c=await X({url:i,params:h.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});h=c.state,V.$set(c.props),we().then(ke)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(V.$set({form:null,page:{...q,form:e.data,status:e.status}}),await we(),V.$set({form:e.data}),e.type==="success"&&ke())},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Le(),!U){const a=Be(h,void 0,null,"leave"),c={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation was cancelled"))}};m.before_navigate.forEach(p=>p(c))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(i=navigator.connection)!=null&&i.saveData||Ye(),f.addEventListener("click",t=>{var P;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Me(t.composedPath()[0],f);if(!r)return;const{url:a,external:c,target:p,download:v}=ye(r,K);if(!a)return;if(p==="_parent"||p==="_top"){if(window.parent!==window)return}else if(p&&p!=="_self")return;const b=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||v)return;if(c||b.reload){je({url:a,type:"link"})?U=!0:t.preventDefault();return}const[L,A]=a.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(h.url.hash===a.hash){t.preventDefault(),(P=r.ownerDocument.getElementById(A))==null||P.scrollIntoView();return}if(H=!0,Ee(D),e(a),!b.replace_state)return;H=!1,t.preventDefault()}ce({url:a,scroll:b.noscroll?te():null,keepfocus:b.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),f.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const p=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ve(p,K))return;const v=t.target,{keep_focus:b,noscroll:y,reload:L,replace_state:A}=le(v);if(L)return;t.preventDefault(),t.stopPropagation();const P=new FormData(v),w=a==null?void 0:a.getAttribute("name");w&&P.append(w,(a==null?void 0:a.getAttribute("value"))??""),p.search=new URLSearchParams(P).toString(),ce({url:p,scroll:y?te():null,keepfocus:b??!1,redirect_chain:[],details:{state:{},replaceState:A??p.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if(J={},(r=t.state)!=null&&r[M]){if(t.state[M]===D)return;const a=z[t.state[M]],c=new URL(location.href);if(h.url.href.split("#")[0]===location.href.split("#")[0]){e(c),z[D]=te(),D=t.state[M],scrollTo(a.x,a.y);return}const p=t.state[M]-D;await ce({url:c,scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{D=t.state[M]},blocked:()=>{history.go(-p)},type:"popstate",delta:p,nav_token:J})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[M]:++D},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&F.navigating.set(null)});function e(t){h.url=t,F.page.set({...q,url:t}),F.page.notify()}},_hydrate:async({status:e=200,error:i,node_ids:t,params:r,route:a,data:c,form:p})=>{x=!0;const v=new URL(location.href);({params:r={},route:a={id:null}}=Z(v,!1)||{});let b;try{const y=t.map(async(P,w)=>{const _=c[w];return _!=null&&_.uses&&(_.uses=We(_.uses)),de({loader:n.nodes[P],url:v,params:r,route:a,parent:async()=>{const O={};for(let T=0;T<w;T+=1)Object.assign(O,(await y[T]).data);return O},server_data_node:pe(_)})}),L=await Promise.all(y),A=d.find(({id:P})=>P===a.id);if(A){const P=A.layouts;for(let w=0;w<P.length;w++)P[w]||L.splice(w,0,void 0)}b=await X({url:v,params:r,branch:L,status:e,error:i,form:p,route:A??null})}catch(y){if(y instanceof qe){await W(new URL(y.location,location.href));return}b=await ie({status:y instanceof ne?y.status:500,error:await Q(y,{url:v,params:r,route:a}),url:v,route:a})}Oe(b)}}}async function He(n,o){const d=new URL(n);d.pathname=ot(n.pathname),n.pathname.endsWith("/")&&d.searchParams.append(At,"1"),d.searchParams.append(Rt,o.map(u=>u?"1":"0").join(""));const s=await fe(d.href);if(!s.ok)throw new ne(s.status,await s.json());return new Promise(async u=>{var h;const f=new Map,E=s.body.getReader(),l=new TextDecoder;function g(x){return bt(x,{Promise:j=>new Promise((S,N)=>{f.set(j,{fulfil:S,reject:N})})})}let m="";for(;;){const{done:x,value:j}=await E.read();if(x&&!m)break;for(m+=!j&&m?`
`:l.decode(j);;){const S=m.indexOf(`
`);if(S===-1)break;const N=JSON.parse(m.slice(0,S));if(m=m.slice(S+1),N.type==="redirect")return u(N);if(N.type==="data")(h=N.nodes)==null||h.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=We(U.uses),U.data=g(U.data))}),u(N);else if(N.type==="chunk"){const{id:U,data:H,error:B}=N,V=f.get(U);f.delete(U),B?V.reject(g(B)):V.fulfil(g(H))}}}})}function We(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function ke(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,d=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),d!==null?o.setAttribute("tabindex",d):o.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const u=[];for(let f=0;f<s.rangeCount;f+=1)u.push(s.getRangeAt(f));setTimeout(()=>{if(s.rangeCount===u.length){for(let f=0;f<s.rangeCount;f+=1){const E=u[f],l=s.getRangeAt(f);if(E.commonAncestorContainer!==l.commonAncestorContainer||E.startContainer!==l.startContainer||E.endContainer!==l.endContainer||E.startOffset!==l.startOffset||E.endOffset!==l.endOffset)return}s.removeAllRanges()}})}}}function Be(n,o,d,s){var g,m;let u,f;const E=new Promise((h,x)=>{u=h,f=x});return E.catch(()=>{}),{navigation:{from:{params:n.params,route:{id:((g=n.route)==null?void 0:g.id)??null},url:n.url},to:d&&{params:(o==null?void 0:o.params)??null,route:{id:((m=o==null?void 0:o.route)==null?void 0:m.id)??null},url:d},willUnload:!o,type:s,complete:E},fulfil:u,reject:f}}async function xt(n,o,d){const s=It(n,o);Xe({client:s}),d?await s._hydrate(d):s.goto(location.href,{replaceState:!0}),s._start_router()}export{xt as start};
