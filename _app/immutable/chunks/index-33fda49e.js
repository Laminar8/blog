function k(){}function U(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function L(){return Object.create(null)}function y(t){t.forEach(D)}function V(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function xt(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function X(t){return Object.keys(t).length===0}function Y(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function bt(t,e,n){t.$$.on_destroy.push(Y(e,n))}function wt(t,e,n,i){if(t){const r=W(t,e,n,i);return t[0](r)}}function W(t,e,n,i){return t[1]&&i?U(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function $t(t,e,n,i,r,o){if(r){const s=W(e,n,i,o);t.p(s,r)}}function Et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function At(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Nt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Tt(t){return t==null?"":t}let E=!1;function Z(){E=!0}function tt(){E=!1}function et(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:et(1,r,g=>e[n[g]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const o=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);o.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<o.length&&s[c].claim_order>=o[u].claim_order;)u++;const f=u<o.length?o[u]:null;t.insertBefore(s[c],f)}}function it(t,e){t.appendChild(e)}function rt(t,e){if(E){for(nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function st(t,e,n){t.insertBefore(e,n||null)}function ct(t,e,n){E&&!n?rt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function S(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function St(){return C(" ")}function Ct(){return C("")}function q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:ot(t,i,e[i])}function lt(t){return Array.from(t.childNodes)}function I(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,i,r=!1){I(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function R(t,e,n,i){return F(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||o.push(l.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function jt(t,e,n){return R(t,e,n,S)}function Ht(t,e,n){return R(t,e,n,G)}function ut(t,e){return F(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>C(e),!0)}function Lt(t){return ut(t," ")}function z(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function qt(t,e){const n=z(t,"HTML_TAG_START",0),i=z(t,"HTML_TAG_END",n);if(n===i)return new O(void 0,e);I(t);const r=t.splice(n,i-n+1);m(r[0]),m(r[r.length-1]);const o=r.slice(1,r.length-1);for(const s of o)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new O(o,e)}function zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ot(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let b;function at(){if(b===void 0){b=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{b=!0}}return b}function Pt(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=S("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=at();let o;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=q(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=q(i.contentWindow,"resize",e)}),it(t,i),()=>{(r||o&&i.contentWindow)&&o(),m(i)}}function Bt(t,e,n){t.classList[n?"add":"remove"](e)}function ft(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Dt(t,e=document.body){return Array.from(e.querySelectorAll(t))}class dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=G(n.nodeName):this.e=S(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)st(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(m)}}class O extends dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)ct(this.t,this.n[n],e)}}let p;function h(t){p=t}function M(){if(!p)throw new Error("Function called outside component initialization");return p}function Wt(t){M().$$.on_mount.push(t)}function Gt(t){M().$$.after_update.push(t)}function It(){const t=M();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=ft(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}const _=[],P=[],v=[],B=[],J=Promise.resolve();let N=!1;function K(){N||(N=!0,J.then(Q))}function Ft(){return K(),J}function T(t){v.push(t)}const A=new Set;let w=0;function Q(){const t=p;do{for(;w<_.length;){const e=_[w];w++,h(e),_t(e.$$)}for(h(null),_.length=0,w=0;P.length;)P.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];A.has(n)||(A.add(n),n())}v.length=0}while(_.length);for(;B.length;)B.pop()();N=!1,A.clear(),h(t)}function _t(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const $=new Set;let d;function Rt(){d={r:0,c:[],p:d}}function Jt(){d.r||y(d.c),d=d.p}function ht(t,e){t&&t.i&&($.delete(t),t.i(e))}function Kt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Qt(t,e){const n={},i={},r={$$scope:1};let o=t.length;for(;o--;){const s=t[o],l=e[o];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[o]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ut(t){t&&t.c()}function Vt(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||T(()=>{const c=o.map(D).filter(V);s?s.push(...c):y(c),t.$$.on_mount=[]}),l.forEach(T)}function pt(t,e){const n=t.$$;n.fragment!==null&&(y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(_.push(t),K(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,i,r,o,s,l=[-1]){const c=p;h(t);const u=t.$$={fragment:null,ctx:null,props:o,update:k,not_equal:r,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:L(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,g,...j)=>{const H=j.length?j[0]:g;return u.ctx&&r(u.ctx[a],u.ctx[a]=H)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](H),f&&yt(t,a)),g}):[],u.update(),f=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){Z();const a=lt(e.target);u.fragment&&u.fragment.l(a),a.forEach(m)}else u.fragment&&u.fragment.c();e.intro&&ht(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),tt(),Q()}h(c)}class Yt{$destroy(){pt(this,1),this.$destroy=k}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!X(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{k as A,wt as B,$t as C,Et as D,vt as E,rt as F,bt as G,Dt as H,kt as I,xt as J,T as K,Pt as L,Tt as M,O as N,qt as O,Nt as P,It as Q,U as R,Yt as S,At as T,Mt as U,Bt as V,Qt as W,G as X,Ht as Y,St as a,ct as b,Lt as c,Jt as d,Ct as e,ht as f,Rt as g,m as h,Xt as i,Gt as j,S as k,jt as l,lt as m,ot as n,Wt as o,Ot as p,C as q,ut as r,gt as s,Kt as t,zt as u,Ut as v,Vt as w,mt as x,pt as y,Ft as z};
