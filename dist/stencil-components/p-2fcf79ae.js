let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,u=e=>"sc-"+e.o,a={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?d(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=d(e,null);return i.u=t,c.length>0&&(i.$=c),i},d=(e,t)=>({t:0,p:e,i:t,m:null,$:null,u:null}),p={},y=(e,t,n,l,s,o)=>{if(n!==l){let c=F(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=h(n),o=h(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else{const r=f(l);if((c||r&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&o||s)&&!r&&e.setAttribute(t,l=!0===l?"":l)}}},m=/\s/,h=e=>e?e.split(m):[],w=(e,t,n,l)=>{const s=11===t.m.nodeType&&t.m.host?t.m.host:t.m,o=e&&e.u||a,c=t.u||a;for(l in o)l in c||y(s,l,o[l],void 0,n,t.t);for(l in c)y(s,l,o[l],c[l],n,t.t)},b=(t,n,l)=>{let o,c,r=n.$[l],i=0;if(null!==r.i)o=r.m=s.createTextNode(r.i);else if(o=r.m=s.createElement(r.p),w(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.$)for(i=0;i<r.$.length;++i)c=b(t,r,i),c&&o.appendChild(c);return o},g=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=b(null,l,o),r&&(s[o].m=r,i.insertBefore(r,n)))},j=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.m.remove()},S=(e,t)=>e.p===t.p,v=(e,t)=>{const n=t.m=e.m,l=e.$,s=t.$,o=t.i;null===o?("slot"===t.p||w(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],u=t[r],a=l.length-1,f=l[0],$=l[a];for(;o<=r&&c<=a;)null==i?i=t[++o]:null==u?u=t[--r]:null==f?f=l[++c]:null==$?$=l[--a]:S(i,f)?(v(i,f),i=t[++o],f=l[++c]):S(u,$)?(v(u,$),u=t[--r],$=l[--a]):S(i,$)?(v(i,$),e.insertBefore(i.m,u.m.nextSibling),i=t[++o],$=l[--a]):S(u,f)?(v(u,f),e.insertBefore(u.m,i.m),u=t[--r],f=l[++c]):(s=b(t&&t[c],n,c),f=l[++c],s&&i.m.parentNode.insertBefore(s,i.m));o>r?g(e,null==l[a+1]?null:l[a+1].m,n,l,c,a):c>a&&j(t,o,r)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),g(n,null,t,s,0,s.length-1)):null!==l&&j(l,0,l.length-1)):e.i!==o&&(n.data=o)},M=(e,t)=>{t&&!e.h&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.h=t)))},k=(e,t)=>{if(e.t|=16,!(4&e.t))return M(e,e.g),Q((()=>O(e,t)));e.t|=512},O=(e,t)=>{const n=e.j;return T(void 0,(()=>C(e,n,t)))},C=async(n,l,o)=>{const c=n.S,r=c["s-rc"];o&&(e=>{const t=e.v,n=e.S,l=t.t,o=((e,t)=>{let n=u(t),l=z.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(n);((n,l)=>{const s=n.S,o=n.M||d(null,null),c=(e=>e&&e.p===p)(l)?l:$(null,null,l);t=s.tagName,c.p=null,c.t|=4,n.M=c,c.m=o.m=s.shadowRoot||s,e=s["s-sc"],v(o,c)})(n,P(n,l)),r&&(r.map((e=>e())),c["s-rc"]=void 0);{const e=c["s-p"],t=()=>x(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},P=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(t){N(t,e.S)}return t},x=e=>{const t=e.S,n=e.g;64&e.t||(e.t|=64,A(t),e.k(t),n||E()),e.h&&(e.h(),e.h=void 0),512&e.t&&K((()=>k(e,!1))),e.t&=-517},E=()=>{A(s.documentElement),K((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"stencil-components"}});return e.dispatchEvent(t),t})(l)))},T=(e,t)=>e&&e.then?e.then(t):t(),A=e=>e.classList.add("hydrated"),H=(e,t,n)=>{if(t.O){const l=Object.entries(t.O),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>U(this).C.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=U(e),o=s.C.get(t),c=s.t,r=s.j;n=((e,t)=>null==e||f(e)?e:1&t?e+"":e)(n,l.O[t][0]),8&c&&void 0!==o||n===o||(s.C.set(t,n),r&&2==(18&c)&&k(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},L=(e,t={})=>{const n=[],c=t.exclude||[],i=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let p,y=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],o:t[1],O:t[2],P:t[3]};l.O=t[2];const s=l.o,a=class extends HTMLElement{constructor(e){super(e),q(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),y?d.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=U(e),n=t.v,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){M(t,t.g=n);break}}n.O&&Object.entries(n.O).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=_(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(H(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){N(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!z.has(t)){const l=()=>{};((e,t,n)=>{let l=z.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,z.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,c=()=>k(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return U(this).T}};l.A=e[0],c.includes(s)||i.get(s)||(n.push(s),i.define(s,H(a,l,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),y=!1,d.length?d.map((e=>e.connectedCallback())):o.jmp((()=>p=setTimeout(E,30)))},R=new WeakMap,U=e=>R.get(e),W=(e,t)=>R.set(t.j=e,t),q=(e,t)=>{const n={t:0,S:e,v:t,C:new Map};return n.T=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],R.set(e,n)},F=(e,t)=>t in e,N=(e,t)=>(0,console.error)(e,t),V=new Map,_=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=V.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(V.set(n,e),e[t])),N)},z=new Map,B=[],D=[],G=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?K(J):o.raf(J))},I=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){N(e)}e.length=0},J=()=>{I(B),I(D),(n=B.length>0)&&o.raf(J)},K=e=>c().then(e),Q=G(D,!0);export{p as H,L as b,$ as h,c as p,W as r}