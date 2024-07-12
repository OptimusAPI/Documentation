import{U as Se,V as Ye,g as oe}from"./pages.39989525.js";import{s as _e,u as R,D as G,E as W,h as D,d as S,j as Me,F as ne,i as M,G as Y,H as re,A as U,C as X,l as He,m as Re,n as De,e as Z,M as Ve,K as j,p as xe,r as ce,f as fe,a as Ie,g as de,c as Be,v as ie,w as E,I as q,x as ge,y as he,z as pe,J as je,q as ae}from"./scheduler.88297443.js";import{S as ye,i as we,g as J,t as P,c as K,a as T,b as le,d as qe,m as se,e as ue}from"./index.012ade26.js";typeof window<"u"&&(window.Prism=window.Prism||{},window.Prism.manual=!0);var Oe={exports:{}};(function(l){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(a){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,o=0,t={},n={manual:a.Prism&&a.Prism.manual,disableWorkerMessageHandler:a.Prism&&a.Prism.disableWorkerMessageHandler,util:{encode:function u(s){return s instanceof i?new i(s.type,u(s.content),s.alias):Array.isArray(s)?s.map(u):s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++o}),u.__id},clone:function u(s,g){g=g||{};var p,v;switch(n.util.type(s)){case"Object":if(v=n.util.objId(s),g[v])return g[v];p={},g[v]=p;for(var _ in s)s.hasOwnProperty(_)&&(p[_]=u(s[_],g));return p;case"Array":return v=n.util.objId(s),g[v]?g[v]:(p=[],g[v]=p,s.forEach(function(y,f){p[f]=u(y,g)}),p);default:return s}},getLanguage:function(u){for(;u;){var s=c.exec(u.className);if(s)return s[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,s){u.className=u.className.replace(RegExp(c,"gi"),""),u.classList.add("language-"+s)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(p){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(p.stack)||[])[1];if(u){var s=document.getElementsByTagName("script");for(var g in s)if(s[g].src==u)return s[g]}return null}},isActive:function(u,s,g){for(var p="no-"+s;u;){var v=u.classList;if(v.contains(s))return!0;if(v.contains(p))return!1;u=u.parentElement}return!!g}},languages:{plain:t,plaintext:t,text:t,txt:t,extend:function(u,s){var g=n.util.clone(n.languages[u]);for(var p in s)g[p]=s[p];return g},insertBefore:function(u,s,g,p){p=p||n.languages;var v=p[u],_={};for(var y in v)if(v.hasOwnProperty(y)){if(y==s)for(var f in g)g.hasOwnProperty(f)&&(_[f]=g[f]);g.hasOwnProperty(y)||(_[y]=v[y])}var F=p[u];return p[u]=_,n.languages.DFS(n.languages,function(z,I){I===F&&z!=u&&(this[z]=_)}),_},DFS:function u(s,g,p,v){v=v||{};var _=n.util.objId;for(var y in s)if(s.hasOwnProperty(y)){g.call(s,y,s[y],p||y);var f=s[y],F=n.util.type(f);F==="Object"&&!v[_(f)]?(v[_(f)]=!0,u(f,g,null,v)):F==="Array"&&!v[_(f)]&&(v[_(f)]=!0,u(f,g,y,v))}}},plugins:{},highlightAll:function(u,s){n.highlightAllUnder(document,u,s)},highlightAllUnder:function(u,s,g){var p={callback:g,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",p),p.elements=Array.prototype.slice.apply(p.container.querySelectorAll(p.selector)),n.hooks.run("before-all-elements-highlight",p);for(var v=0,_;_=p.elements[v++];)n.highlightElement(_,s===!0,p.callback)},highlightElement:function(u,s,g){var p=n.util.getLanguage(u),v=n.languages[p];n.util.setLanguage(u,p);var _=u.parentElement;_&&_.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(_,p);var y=u.textContent,f={element:u,language:p,grammar:v,code:y};function F(I){f.highlightedCode=I,n.hooks.run("before-insert",f),f.element.innerHTML=f.highlightedCode,n.hooks.run("after-highlight",f),n.hooks.run("complete",f),g&&g.call(f.element)}if(n.hooks.run("before-sanity-check",f),_=f.element.parentElement,_&&_.nodeName.toLowerCase()==="pre"&&!_.hasAttribute("tabindex")&&_.setAttribute("tabindex","0"),!f.code){n.hooks.run("complete",f),g&&g.call(f.element);return}if(n.hooks.run("before-highlight",f),!f.grammar){F(n.util.encode(f.code));return}if(s&&a.Worker){var z=new Worker(n.filename);z.onmessage=function(I){F(I.data)},z.postMessage(JSON.stringify({language:f.language,code:f.code,immediateClose:!0}))}else F(n.highlight(f.code,f.grammar,f.language))},highlight:function(u,s,g){var p={code:u,grammar:s,language:g};if(n.hooks.run("before-tokenize",p),!p.grammar)throw new Error('The language "'+p.language+'" has no grammar.');return p.tokens=n.tokenize(p.code,p.grammar),n.hooks.run("after-tokenize",p),i.stringify(n.util.encode(p.tokens),p.language)},tokenize:function(u,s){var g=s.rest;if(g){for(var p in g)s[p]=g[p];delete s.rest}var v=new h;return m(v,v.head,u),b(u,v,s,v.head,0),C(v)},hooks:{all:{},add:function(u,s){var g=n.hooks.all;g[u]=g[u]||[],g[u].push(s)},run:function(u,s){var g=n.hooks.all[u];if(!(!g||!g.length))for(var p=0,v;v=g[p++];)v(s)}},Token:i};a.Prism=n;function i(u,s,g,p){this.type=u,this.content=s,this.alias=g,this.length=(p||"").length|0}i.stringify=function u(s,g){if(typeof s=="string")return s;if(Array.isArray(s)){var p="";return s.forEach(function(F){p+=u(F,g)}),p}var v={type:s.type,content:u(s.content,g),tag:"span",classes:["token",s.type],attributes:{},language:g},_=s.alias;_&&(Array.isArray(_)?Array.prototype.push.apply(v.classes,_):v.classes.push(_)),n.hooks.run("wrap",v);var y="";for(var f in v.attributes)y+=" "+f+'="'+(v.attributes[f]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+y+">"+v.content+"</"+v.tag+">"};function d(u,s,g,p){u.lastIndex=s;var v=u.exec(g);if(v&&p&&v[1]){var _=v[1].length;v.index+=_,v[0]=v[0].slice(_)}return v}function b(u,s,g,p,v,_){for(var y in g)if(!(!g.hasOwnProperty(y)||!g[y])){var f=g[y];f=Array.isArray(f)?f:[f];for(var F=0;F<f.length;++F){if(_&&_.cause==y+","+F)return;var z=f[F],I=z.inside,ke=!!z.lookbehind,Ae=!!z.greedy,Ge=z.alias;if(Ae&&!z.pattern.global){var We=z.pattern.toString().match(/[imsuy]*$/)[0];z.pattern=RegExp(z.pattern.source,We+"g")}for(var Fe=z.pattern||z,L=p.next,H=v;L!==s.tail&&!(_&&H>=_.reach);H+=L.value.length,L=L.next){var O=L.value;if(s.length>u.length)return;if(!(O instanceof i)){var Q=1,N;if(Ae){if(N=d(Fe,H,u,ke),!N||N.index>=u.length)break;var $=N.index,Ue=N.index+N[0].length,B=H;for(B+=L.value.length;$>=B;)L=L.next,B+=L.value.length;if(B-=L.value.length,H=B,L.value instanceof i)continue;for(var V=L;V!==s.tail&&(B<Ue||typeof V.value=="string");V=V.next)Q++,B+=V.value.length;Q--,O=u.slice(H,B),N.index-=H}else if(N=d(Fe,0,O,ke),!N)continue;var $=N.index,ee=N[0],me=O.slice(0,$),Ee=O.slice($+ee.length),ve=H+O.length;_&&ve>_.reach&&(_.reach=ve);var te=L.prev;me&&(te=m(s,te,me),H+=me.length),w(s,te,Q);var Ze=new i(y,I?n.tokenize(ee,I):ee,Ge,ee);if(L=m(s,te,Ze),Ee&&m(s,L,Ee),Q>1){var be={cause:y+","+F,reach:ve};b(u,s,g,L.prev,H,be),_&&be.reach>_.reach&&(_.reach=be.reach)}}}}}}function h(){var u={value:null,prev:null,next:null},s={value:null,prev:u,next:null};u.next=s,this.head=u,this.tail=s,this.length=0}function m(u,s,g){var p=s.next,v={value:g,prev:s,next:p};return s.next=v,p.prev=v,u.length++,v}function w(u,s,g){for(var p=s.next,v=0;v<g&&p!==u.tail;v++)p=p.next;s.next=p,p.prev=s,u.length-=v}function C(u){for(var s=[],g=u.head.next;g!==u.tail;)s.push(g.value),g=g.next;return s}if(!a.document)return a.addEventListener&&(n.disableWorkerMessageHandler||a.addEventListener("message",function(u){var s=JSON.parse(u.data),g=s.language,p=s.code,v=s.immediateClose;a.postMessage(n.highlight(p,n.languages[g],g)),v&&a.close()},!1)),n;var A=n.util.currentScript();A&&(n.filename=A.src,A.hasAttribute("data-manual")&&(n.manual=!0));function k(){n.manual||n.highlightAll()}if(!n.manual){var x=document.readyState;x==="loading"||x==="interactive"&&A&&A.defer?document.addEventListener("DOMContentLoaded",k):window.requestAnimationFrame?window.requestAnimationFrame(k):window.setTimeout(k,16)}return n}(e);l.exports&&(l.exports=r),typeof Se<"u"&&(Se.Prism=r),r.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",function(a){a.type==="entity"&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(c,o){var t={};t["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[o]},t.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:t}};n["language-"+o]={pattern:/[\s\S]+/,inside:r.languages[o]};var i={};i[c]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:n},r.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(r.languages.markup.tag,"addAttribute",{value:function(a,c){r.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+a+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[c,"language-"+c],inside:r.languages[c]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(a){var c=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;a.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+c.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+c.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+c.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+c.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:c,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},a.languages.css.atrule.inside.rest=a.languages.css;var o=a.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:r.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),r.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),r.languages.markup&&(r.languages.markup.tag.addInlined("script","javascript"),r.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),r.languages.js=r.languages.javascript,function(){if(typeof r>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var a="Loading…",c=function(A,k){return"✖ Error "+A+" while fetching file: "+k},o="✖ Error: File does not exist or is empty",t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",d="loaded",b="failed",h="pre[data-src]:not(["+n+'="'+d+'"]):not(['+n+'="'+i+'"])';function m(A,k,x){var u=new XMLHttpRequest;u.open("GET",A,!0),u.onreadystatechange=function(){u.readyState==4&&(u.status<400&&u.responseText?k(u.responseText):u.status>=400?x(c(u.status,u.statusText)):x(o))},u.send(null)}function w(A){var k=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(A||"");if(k){var x=Number(k[1]),u=k[2],s=k[3];return u?s?[x,Number(s)]:[x,void 0]:[x,x]}}r.hooks.add("before-highlightall",function(A){A.selector+=", "+h}),r.hooks.add("before-sanity-check",function(A){var k=A.element;if(k.matches(h)){A.code="",k.setAttribute(n,i);var x=k.appendChild(document.createElement("CODE"));x.textContent=a;var u=k.getAttribute("data-src"),s=A.language;if(s==="none"){var g=(/\.(\w+)$/.exec(u)||[,"none"])[1];s=t[g]||g}r.util.setLanguage(x,s),r.util.setLanguage(k,s);var p=r.plugins.autoloader;p&&p.loadLanguages(s),m(u,function(v){k.setAttribute(n,d);var _=w(k.getAttribute("data-range"));if(_){var y=v.split(/\r\n?|\n/g),f=_[0],F=_[1]==null?y.length:_[1];f<0&&(f+=y.length),f=Math.max(0,Math.min(f-1,y.length)),F<0&&(F+=y.length),F=Math.max(0,Math.min(F,y.length)),v=y.slice(f,F).join(`
`),k.hasAttribute("data-start")||k.setAttribute("data-start",String(f+1))}x.textContent=v,r.highlightElement(x)},function(v){k.setAttribute(n,b),x.textContent=v})}}),r.plugins.fileHighlight={highlight:function(k){for(var x=(k||document).querySelectorAll(h),u=0,s;s=x[u++];)r.highlightElement(s)}};var C=!1;r.fileHighlight=function(){C||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),C=!0),r.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Oe);var Xe=Oe.exports;const ht=Ye(Xe);(function(){if(typeof Prism>"u"||typeof document>"u")return;var l="line-numbers",e=/\n(?!$)/g,r=Prism.plugins.lineNumbers={getLine:function(t,n){if(!(t.tagName!=="PRE"||!t.classList.contains(l))){var i=t.querySelector(".line-numbers-rows");if(i){var d=parseInt(t.getAttribute("data-start"),10)||1,b=d+(i.children.length-1);n<d&&(n=d),n>b&&(n=b);var h=n-d;return i.children[h]}}},resize:function(t){a([t])},assumeViewportIndependence:!0};function a(t){if(t=t.filter(function(i){var d=c(i),b=d["white-space"];return b==="pre-wrap"||b==="pre-line"}),t.length!=0){var n=t.map(function(i){var d=i.querySelector("code"),b=i.querySelector(".line-numbers-rows");if(!(!d||!b)){var h=i.querySelector(".line-numbers-sizer"),m=d.textContent.split(e);h||(h=document.createElement("span"),h.className="line-numbers-sizer",d.appendChild(h)),h.innerHTML="0",h.style.display="block";var w=h.getBoundingClientRect().height;return h.innerHTML="",{element:i,lines:m,lineHeights:[],oneLinerHeight:w,sizer:h}}}).filter(Boolean);n.forEach(function(i){var d=i.sizer,b=i.lines,h=i.lineHeights,m=i.oneLinerHeight;h[b.length-1]=void 0,b.forEach(function(w,C){if(w&&w.length>1){var A=d.appendChild(document.createElement("span"));A.style.display="block",A.textContent=w}else h[C]=m})}),n.forEach(function(i){for(var d=i.sizer,b=i.lineHeights,h=0,m=0;m<b.length;m++)b[m]===void 0&&(b[m]=d.children[h++].getBoundingClientRect().height)}),n.forEach(function(i){var d=i.sizer,b=i.element.querySelector(".line-numbers-rows");d.style.display="none",d.innerHTML="",i.lineHeights.forEach(function(h,m){b.children[m].style.height=h+"px"})})}}function c(t){return t?window.getComputedStyle?getComputedStyle(t):t.currentStyle||null:null}var o=void 0;window.addEventListener("resize",function(){r.assumeViewportIndependence&&o===window.innerWidth||(o=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre."+l))))}),Prism.hooks.add("complete",function(t){if(t.code){var n=t.element,i=n.parentNode;if(!(!i||!/pre/i.test(i.nodeName))&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,l)){n.classList.remove(l),i.classList.add(l);var d=t.code.match(e),b=d?d.length+1:1,h,m=new Array(b+1).join("<span></span>");h=document.createElement("span"),h.setAttribute("aria-hidden","true"),h.className="line-numbers-rows",h.innerHTML=m,i.hasAttribute("data-start")&&(i.style.counterReset="linenumber "+(parseInt(i.getAttribute("data-start"),10)-1)),t.element.appendChild(h),a([i]),Prism.hooks.run("line-numbers",t)}}}),Prism.hooks.add("line-numbers",function(t){t.plugins=t.plugins||{},t.plugins.lineNumbers=!0})})();(function(){if(typeof Prism>"u"||typeof document>"u")return;var l=[],e={},r=function(){};Prism.plugins.toolbar={};var a=Prism.plugins.toolbar.registerButton=function(t,n){var i;if(typeof n=="function"?i=n:i=function(d){var b;return typeof n.onClick=="function"?(b=document.createElement("button"),b.type="button",b.addEventListener("click",function(){n.onClick.call(this,d)})):typeof n.url=="string"?(b=document.createElement("a"),b.href=n.url):b=document.createElement("span"),n.className&&b.classList.add(n.className),b.textContent=n.text,b},t in e){console.warn('There is a button with the key "'+t+'" registered already.');return}l.push(e[t]=i)};function c(t){for(;t;){var n=t.getAttribute("data-toolbar-order");if(n!=null)return n=n.trim(),n.length?n.split(/\s*,\s*/g):[];t=t.parentElement}}var o=Prism.plugins.toolbar.hook=function(t){var n=t.element.parentNode;if(!(!n||!/pre/i.test(n.nodeName))&&!n.parentNode.classList.contains("code-toolbar")){var i=document.createElement("div");i.classList.add("code-toolbar"),n.parentNode.insertBefore(i,n),i.appendChild(n);var d=document.createElement("div");d.classList.add("toolbar");var b=l,h=c(t.element);h&&(b=h.map(function(m){return e[m]||r})),b.forEach(function(m){var w=m(t);if(w){var C=document.createElement("div");C.classList.add("toolbar-item"),C.appendChild(w),d.appendChild(C)}}),i.appendChild(d)}};a("label",function(t){var n=t.element.parentNode;if(!(!n||!/pre/i.test(n.nodeName))&&n.hasAttribute("data-label")){var i,d,b=n.getAttribute("data-label");try{d=document.querySelector("template#"+b)}catch{}return d?i=d.content:(n.hasAttribute("data-url")?(i=document.createElement("a"),i.href=n.getAttribute("data-url")):i=document.createElement("span"),i.textContent=b),i}}),Prism.hooks.add("complete",o)})();(function(){if(typeof Prism>"u"||typeof document>"u")return;if(!Prism.plugins.toolbar){console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");return}function l(o,t){o.addEventListener("click",function(){r(t)})}function e(o){var t=document.createElement("textarea");t.value=o.getText(),t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy");setTimeout(function(){n?o.success():o.error()},1)}catch(i){setTimeout(function(){o.error(i)},1)}document.body.removeChild(t)}function r(o){navigator.clipboard?navigator.clipboard.writeText(o.getText()).then(o.success,function(){e(o)}):e(o)}function a(o){window.getSelection().selectAllChildren(o)}function c(o){var t={copy:"Copy","copy-error":"Press Ctrl+C to copy","copy-success":"Copied!","copy-timeout":5e3},n="data-prismjs-";for(var i in t){for(var d=n+i,b=o;b&&!b.hasAttribute(d);)b=b.parentElement;b&&(t[i]=b.getAttribute(d))}return t}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(o){var t=o.element,n=c(t),i=document.createElement("button");i.className="copy-to-clipboard-button",i.setAttribute("type","button");var d=document.createElement("span");return i.appendChild(d),h("copy"),l(i,{getText:function(){return t.textContent},success:function(){h("copy-success"),b()},error:function(){h("copy-error"),setTimeout(function(){a(t)},1),b()}}),i;function b(){setTimeout(function(){h("copy")},n["copy-timeout"])}function h(m){d.textContent=n[m],i.setAttribute("data-copy-state",m)}})})();function Ce(l){let e,r;return{c(){e=G("title"),r=He(l[1])},l(a){e=W(a,"title",{});var c=D(e);r=Re(c,l[1]),c.forEach(S)},m(a,c){M(a,e,c),Y(e,r)},p(a,c){c&2&&De(r,a[1])},d(a){a&&S(e)}}}function Je(l){let e,r,a=l[1]&&Ce(l),c=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:l[0]},{height:l[0]},l[2],l[3]],o={};for(let t=0;t<c.length;t+=1)o=R(o,c[t]);return{c(){e=G("svg"),a&&a.c(),r=G("path"),this.h()},l(t){e=W(t,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var n=D(e);a&&a.l(n),r=W(n,"path",{d:!0}),D(r).forEach(S),n.forEach(S),this.h()},h(){Me(r,"d","M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"),ne(e,o)},m(t,n){M(t,e,n),a&&a.m(e,null),Y(e,r)},p(t,[n]){t[1]?a?a.p(t,n):(a=Ce(t),a.c(),a.m(e,r)):a&&(a.d(1),a=null),ne(e,o=oe(c,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},n&1&&{width:t[0]},n&1&&{height:t[0]},n&4&&t[2],n&8&&t[3]]))},i:re,o:re,d(t){t&&S(e),a&&a.d()}}}function Ke(l,e,r){let a,c;const o=["size","title"];let t=U(e,o),{size:n=16}=e,{title:i=void 0}=e;return l.$$set=d=>{r(5,e=R(R({},e),X(d))),r(3,t=U(e,o)),"size"in d&&r(0,n=d.size),"title"in d&&r(1,i=d.title)},l.$$.update=()=>{r(4,a=e["aria-label"]||e["aria-labelledby"]||i),r(2,c={"aria-hidden":a?void 0:!0,role:a?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=X(e),[n,i,c,t,a]}class Qe extends ye{constructor(e){super(),we(this,e,Ke,Je,_e,{size:0,title:1})}}const pt=Qe,$e=l=>({}),ze=l=>({}),et=l=>({}),Le=l=>({});function tt(l){let e,r,a,c,o,t;const n=l[10].default,i=ce(n,l,l[9],null);let d=!l[3]&&(l[8].icon||l[4])&&Te(l),b=[{rel:a=l[7].target==="_blank"?"noopener noreferrer":void 0},{href:l[2]},l[7]],h={};for(let m=0;m<b.length;m+=1)h=R(h,b[m]);return{c(){e=fe("a"),i&&i.c(),r=Ie(),d&&d.c(),this.h()},l(m){e=de(m,"A",{rel:!0,href:!0});var w=D(e);i&&i.l(w),r=Be(w),d&&d.l(w),w.forEach(S),this.h()},h(){ie(e,h),E(e,"bx--link",!0),E(e,"bx--link--disabled",l[5]),E(e,"bx--link--inline",l[3]),E(e,"bx--link--visited",l[6]),E(e,"bx--link--sm",l[1]==="sm"),E(e,"bx--link--lg",l[1]==="lg")},m(m,w){M(m,e,w),i&&i.m(e,null),Y(e,r),d&&d.m(e,null),l[20](e),c=!0,o||(t=[q(e,"click",l[15]),q(e,"mouseover",l[16]),q(e,"mouseenter",l[17]),q(e,"mouseleave",l[18])],o=!0)},p(m,w){i&&i.p&&(!c||w&512)&&ge(i,n,m,m[9],c?pe(n,m[9],w,null):he(m[9]),null),!m[3]&&(m[8].icon||m[4])?d?(d.p(m,w),w&280&&T(d,1)):(d=Te(m),d.c(),T(d,1),d.m(e,null)):d&&(J(),P(d,1,1,()=>{d=null}),K()),ie(e,h=oe(b,[(!c||w&128&&a!==(a=m[7].target==="_blank"?"noopener noreferrer":void 0))&&{rel:a},(!c||w&4)&&{href:m[2]},w&128&&m[7]])),E(e,"bx--link",!0),E(e,"bx--link--disabled",m[5]),E(e,"bx--link--inline",m[3]),E(e,"bx--link--visited",m[6]),E(e,"bx--link--sm",m[1]==="sm"),E(e,"bx--link--lg",m[1]==="lg")},i(m){c||(T(i,m),T(d),c=!0)},o(m){P(i,m),P(d),c=!1},d(m){m&&S(e),i&&i.d(m),d&&d.d(),l[20](null),o=!1,je(t)}}}function nt(l){let e,r,a,c,o;const t=l[10].default,n=ce(t,l,l[9],null);let i=!l[3]&&(l[8].icon||l[4])&&Pe(l),d=[l[7]],b={};for(let h=0;h<d.length;h+=1)b=R(b,d[h]);return{c(){e=fe("p"),n&&n.c(),r=Ie(),i&&i.c(),this.h()},l(h){e=de(h,"P",{});var m=D(e);n&&n.l(m),r=Be(m),i&&i.l(m),m.forEach(S),this.h()},h(){ie(e,b),E(e,"bx--link",!0),E(e,"bx--link--disabled",l[5]),E(e,"bx--link--inline",l[3]),E(e,"bx--link--visited",l[6])},m(h,m){M(h,e,m),n&&n.m(e,null),Y(e,r),i&&i.m(e,null),l[19](e),a=!0,c||(o=[q(e,"click",l[11]),q(e,"mouseover",l[12]),q(e,"mouseenter",l[13]),q(e,"mouseleave",l[14])],c=!0)},p(h,m){n&&n.p&&(!a||m&512)&&ge(n,t,h,h[9],a?pe(t,h[9],m,null):he(h[9]),null),!h[3]&&(h[8].icon||h[4])?i?(i.p(h,m),m&280&&T(i,1)):(i=Pe(h),i.c(),T(i,1),i.m(e,null)):i&&(J(),P(i,1,1,()=>{i=null}),K()),ie(e,b=oe(d,[m&128&&h[7]])),E(e,"bx--link",!0),E(e,"bx--link--disabled",h[5]),E(e,"bx--link--inline",h[3]),E(e,"bx--link--visited",h[6])},i(h){a||(T(n,h),T(i),a=!0)},o(h){P(n,h),P(i),a=!1},d(h){h&&S(e),n&&n.d(h),i&&i.d(),l[19](null),c=!1,je(o)}}}function Te(l){let e,r;const a=l[10].icon,c=ce(a,l,l[9],ze),o=c||rt(l);return{c(){e=fe("div"),o&&o.c(),this.h()},l(t){e=de(t,"DIV",{});var n=D(e);o&&o.l(n),n.forEach(S),this.h()},h(){E(e,"bx--link__icon",!0)},m(t,n){M(t,e,n),o&&o.m(e,null),r=!0},p(t,n){c?c.p&&(!r||n&512)&&ge(c,a,t,t[9],r?pe(a,t[9],n,$e):he(t[9]),ze):o&&o.p&&(!r||n&16)&&o.p(t,r?n:-1)},i(t){r||(T(o,t),r=!0)},o(t){P(o,t),r=!1},d(t){t&&S(e),o&&o.d(t)}}}function rt(l){let e,r,a;var c=l[4];function o(t,n){return{}}return c&&(e=ae(c,o())),{c(){e&&le(e.$$.fragment),r=Z()},l(t){e&&qe(e.$$.fragment,t),r=Z()},m(t,n){e&&se(e,t,n),M(t,r,n),a=!0},p(t,n){if(n&16&&c!==(c=t[4])){if(e){J();const i=e;P(i.$$.fragment,1,0,()=>{ue(i,1)}),K()}c?(e=ae(c,o()),le(e.$$.fragment),T(e.$$.fragment,1),se(e,r.parentNode,r)):e=null}},i(t){a||(e&&T(e.$$.fragment,t),a=!0)},o(t){e&&P(e.$$.fragment,t),a=!1},d(t){t&&S(r),e&&ue(e,t)}}}function Pe(l){let e,r;const a=l[10].icon,c=ce(a,l,l[9],Le),o=c||it(l);return{c(){e=fe("div"),o&&o.c(),this.h()},l(t){e=de(t,"DIV",{});var n=D(e);o&&o.l(n),n.forEach(S),this.h()},h(){E(e,"bx--link__icon",!0)},m(t,n){M(t,e,n),o&&o.m(e,null),r=!0},p(t,n){c?c.p&&(!r||n&512)&&ge(c,a,t,t[9],r?pe(a,t[9],n,et):he(t[9]),Le):o&&o.p&&(!r||n&16)&&o.p(t,r?n:-1)},i(t){r||(T(o,t),r=!0)},o(t){P(o,t),r=!1},d(t){t&&S(e),o&&o.d(t)}}}function it(l){let e,r,a;var c=l[4];function o(t,n){return{}}return c&&(e=ae(c,o())),{c(){e&&le(e.$$.fragment),r=Z()},l(t){e&&qe(e.$$.fragment,t),r=Z()},m(t,n){e&&se(e,t,n),M(t,r,n),a=!0},p(t,n){if(n&16&&c!==(c=t[4])){if(e){J();const i=e;P(i.$$.fragment,1,0,()=>{ue(i,1)}),K()}c?(e=ae(c,o()),le(e.$$.fragment),T(e.$$.fragment,1),se(e,r.parentNode,r)):e=null}},i(t){a||(e&&T(e.$$.fragment,t),a=!0)},o(t){e&&P(e.$$.fragment,t),a=!1},d(t){t&&S(r),e&&ue(e,t)}}}function at(l){let e,r,a,c;const o=[nt,tt],t=[];function n(i,d){return i[5]?0:1}return e=n(l),r=t[e]=o[e](l),{c(){r.c(),a=Z()},l(i){r.l(i),a=Z()},m(i,d){t[e].m(i,d),M(i,a,d),c=!0},p(i,[d]){let b=e;e=n(i),e===b?t[e].p(i,d):(J(),P(t[b],1,1,()=>{t[b]=null}),K(),r=t[e],r?r.p(i,d):(r=t[e]=o[e](i),r.c()),T(r,1),r.m(a.parentNode,a))},i(i){c||(T(r),c=!0)},o(i){P(r),c=!1},d(i){i&&S(a),t[e].d(i)}}}function lt(l,e,r){const a=["size","href","inline","icon","disabled","visited","ref"];let c=U(e,a),{$$slots:o={},$$scope:t}=e;const n=Ve(o);let{size:i=void 0}=e,{href:d=void 0}=e,{inline:b=!1}=e,{icon:h=void 0}=e,{disabled:m=!1}=e,{visited:w=!1}=e,{ref:C=null}=e;function A(f){j.call(this,l,f)}function k(f){j.call(this,l,f)}function x(f){j.call(this,l,f)}function u(f){j.call(this,l,f)}function s(f){j.call(this,l,f)}function g(f){j.call(this,l,f)}function p(f){j.call(this,l,f)}function v(f){j.call(this,l,f)}function _(f){xe[f?"unshift":"push"](()=>{C=f,r(0,C)})}function y(f){xe[f?"unshift":"push"](()=>{C=f,r(0,C)})}return l.$$set=f=>{e=R(R({},e),X(f)),r(7,c=U(e,a)),"size"in f&&r(1,i=f.size),"href"in f&&r(2,d=f.href),"inline"in f&&r(3,b=f.inline),"icon"in f&&r(4,h=f.icon),"disabled"in f&&r(5,m=f.disabled),"visited"in f&&r(6,w=f.visited),"ref"in f&&r(0,C=f.ref),"$$scope"in f&&r(9,t=f.$$scope)},[C,i,d,b,h,m,w,c,n,t,o,A,k,x,u,s,g,p,v,_,y]}class st extends ye{constructor(e){super(),we(this,e,lt,at,_e,{size:1,href:2,inline:3,icon:4,disabled:5,visited:6,ref:0})}}const mt=st;function Ne(l){let e,r;return{c(){e=G("title"),r=He(l[1])},l(a){e=W(a,"title",{});var c=D(e);r=Re(c,l[1]),c.forEach(S)},m(a,c){M(a,e,c),Y(e,r)},p(a,c){c&2&&De(r,a[1])},d(a){a&&S(e)}}}function ut(l){let e,r,a=l[1]&&Ne(l),c=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:l[0]},{height:l[0]},l[2],l[3]],o={};for(let t=0;t<c.length;t+=1)o=R(o,c[t]);return{c(){e=G("svg"),a&&a.c(),r=G("path"),this.h()},l(t){e=W(t,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var n=D(e);a&&a.l(n),r=W(n,"path",{d:!0}),D(r).forEach(S),n.forEach(S),this.h()},h(){Me(r,"d","M16 22L6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"),ne(e,o)},m(t,n){M(t,e,n),a&&a.m(e,null),Y(e,r)},p(t,[n]){t[1]?a?a.p(t,n):(a=Ne(t),a.c(),a.m(e,r)):a&&(a.d(1),a=null),ne(e,o=oe(c,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},n&1&&{width:t[0]},n&1&&{height:t[0]},n&4&&t[2],n&8&&t[3]]))},i:re,o:re,d(t){t&&S(e),a&&a.d()}}}function ot(l,e,r){let a,c;const o=["size","title"];let t=U(e,o),{size:n=16}=e,{title:i=void 0}=e;return l.$$set=d=>{r(5,e=R(R({},e),X(d))),r(3,t=U(e,o)),"size"in d&&r(0,n=d.size),"title"in d&&r(1,i=d.title)},l.$$.update=()=>{r(4,a=e["aria-label"]||e["aria-labelledby"]||i),r(2,c={"aria-hidden":a?void 0:!0,role:a?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=X(e),[n,i,c,t,a]}class ct extends ye{constructor(e){super(),we(this,e,ot,ut,_e,{size:0,title:1})}}const vt=ct;export{pt as C,mt as L,ht as P,vt as a};
