import{cK as Ft,cL as G,aF as me,S as he,cM as k,T as ge,cN as be,cO as ot,aB as lt,b4 as _e,bU as Se,b9 as ve,aW as ut,a9 as j,cP as M,ao as Kt,cQ as J,cR as it,cS as b,cT as X,cU as H,cV as B,ak as ye,Z as ft,a0 as Ce,ar as Ut,bP as Ee,ba as Te,bE as we,aD as Ae,bu as _t,br as St,cW as Pe,ai as Me,cX as Ne,cY as xe,aa as Le,cZ as Re,c_ as jt,a7 as $e,bj as y,bT as Ve,bb as K,ag as Q,ah as _,bm as tt,ae as Ie,aZ as vt,af as yt,a2 as Oe}from"./links-Cs2zMmC8.js";
/**
* @vue/runtime-dom v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const De="http://www.w3.org/2000/svg",Be="http://www.w3.org/1998/Math/MathML",P=typeof document<"u"?document:null,Ct=P&&P.createElement("template"),ke={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o="svg"===t?P.createElementNS(De,e):"mathml"===t?P.createElementNS(Be,e):P.createElement(e,n?{is:n}:void 0);return"select"===e&&s&&null!=s.multiple&&o.setAttribute("multiple",s.multiple),o},createText:e=>P.createTextNode(e),createComment:e=>P.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>P.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),o!==r&&(o=o.nextSibling););else{Ct.innerHTML="svg"===s?`<svg>${e}</svg>`:"mathml"===s?`<math>${e}</math>`:e;const o=Ct.content;if("svg"===s||"mathml"===s){const e=o.firstChild;for(;e.firstChild;)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},w="transition",I="animation",$=Symbol("_vtc"),Wt=(e,{slots:t})=>me(he,qt(e),t);Wt.displayName="Transition";const Gt={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},He=Wt.props=k({},ge,Gt),L=(e,t=[])=>{b(e)?e.forEach((e=>e(...t))):e&&e(...t)},Et=e=>!!e&&(b(e)?e.some((e=>e.length>1)):e.length>1);function qt(e){const t={};for(const n in e)n in Gt||(t[n]=e[n]);if(!1===e.css)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,m=Fe(o),h=m&&m[0],v=m&&m[1],{onBeforeEnter:g,onEnter:b,onEnterCancelled:_,onLeave:y,onLeaveCancelled:S,onBeforeAppear:E=g,onAppear:w=b,onAppearCancelled:x=_}=t,P=(e,t,n)=>{A(e,t?u:i),A(e,t?c:a),n&&n()},T=(e,t)=>{e._isLeaving=!1,A(e,p),A(e,f),A(e,d),t&&t()},N=e=>(t,n)=>{const o=e?w:b,a=()=>P(t,e,n);L(o,[t,a]),Tt((()=>{A(t,e?l:r),C(t,e?u:i),Et(o)||wt(t,s,h,a)}))};return k(t,{onBeforeEnter(e){L(g,[e]),C(e,r),C(e,a)},onBeforeAppear(e){L(E,[e]),C(e,l),C(e,c)},onEnter:N(!1),onAppear:N(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>T(e,t);C(e,p),C(e,d),Xt(),Tt((()=>{e._isLeaving&&(A(e,p),C(e,f),Et(y)||wt(e,s,v,n))})),L(y,[e,n])},onEnterCancelled(e){P(e,!1),L(_,[e])},onAppearCancelled(e){P(e,!0),L(x,[e])},onLeaveCancelled(e){T(e),L(S,[e])}})}function Fe(e){if(null==e)return null;if(be(e))return[et(e.enter),et(e.leave)];{const t=et(e);return[t,t]}}function et(e){return ot(e)}function C(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[$]||(e[$]=new Set)).add(t)}function A(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[$];n&&(n.delete(t),n.size||(e[$]=void 0))}function Tt(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Ke=0;function wt(e,t,n,s){const o=e._endId=++Ke,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:a,timeout:i,propCount:l}=zt(e,t);if(!a)return s();const c=a+"end";let u=0;const p=()=>{e.removeEventListener(c,d),r()},d=t=>{t.target===e&&++u>=l&&p()};setTimeout((()=>{u<l&&p()}),i+1),e.addEventListener(c,d)}function zt(e,t){const n=window.getComputedStyle(e),s=e=>(n[e]||"").split(", "),o=s(`${w}Delay`),r=s(`${w}Duration`),a=At(o,r),i=s(`${I}Delay`),l=s(`${I}Duration`),c=At(i,l);let u=null,p=0,d=0;t===w?a>0&&(u=w,p=a,d=r.length):t===I?c>0&&(u=I,p=c,d=l.length):(p=Math.max(a,c),u=p>0?a>c?w:I:null,d=u?u===w?r.length:l.length:0);return{type:u,timeout:p,propCount:d,hasTransform:u===w&&/\b(transform|all)(,|$)/.test(s(`${w}Property`).toString())}}function At(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Pt(t)+Pt(e[n]))))}function Pt(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function Xt(){return document.body.offsetHeight}function Ue(e,t,n){const s=e[$];s&&(t=(t?[t,...s]:[...s]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const q=Symbol("_vod"),Zt=Symbol("_vsh"),je={beforeMount(e,{value:t},{transition:n}){e[q]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):O(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),O(e,!0),s.enter(e)):s.leave(e,(()=>{O(e,!1)})):O(e,t))},beforeUnmount(e,{value:t}){O(e,t)}};function O(e,t){e.style.display=t?e[q]:"none",e[Zt]=!t}function We(){je.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Yt=Symbol("");function $n(e){const t=lt();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>at(e,n)))},s=()=>{const s=e(t.proxy);rt(t.subTree,s),n(s)};_e((()=>{Se(s);const e=new MutationObserver(s);e.observe(t.subTree.el.parentNode,{childList:!0}),ve((()=>e.disconnect()))}))}function rt(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{rt(n.activeBranch,t)}))}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)at(e.el,t);else if(e.type===ft)e.children.forEach((e=>rt(e,t)));else if(e.type===Ce){let{el:n,anchor:s}=e;for(;n&&(at(n,t),n!==s);)n=n.nextSibling}}function at(e,t){if(1===e.nodeType){const n=e.style;let s="";for(const e in t)n.setProperty(`--${e}`,t[e]),s+=`--${e}: ${t[e]};`;n[Yt]=s}}const Ge=/(^|;)\s*display\s*:/;function qe(e,t,n){const s=e.style,o=G(n);let r=!1;if(n&&!o){if(t)if(G(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&W(s,t,"")}else for(const e in t)null==n[e]&&W(s,e,"");for(const e in n)"display"===e&&(r=!0),W(s,e,n[e])}else if(o){if(t!==n){const e=s[Yt];e&&(n+=";"+e),s.cssText=n,r=Ge.test(n)}}else t&&e.removeAttribute("style");q in e&&(e[q]=r?s.display:"",e[Zt]&&(s.display="none"))}const Mt=/\s*!important$/;function W(e,t,n){if(b(n))n.forEach((n=>W(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=ze(e,t);Mt.test(n)?e.setProperty(M(s),n.replace(Mt,""),"important"):e[s]=n}}const Nt=["Webkit","Moz","ms"],nt={};function ze(e,t){const n=nt[t];if(n)return n;let s=j(t);if("filter"!==s&&s in e)return nt[t]=s;s=Le(s);for(let n=0;n<Nt.length;n++){const o=Nt[n]+s;if(o in e)return nt[t]=o}return t}const xt="http://www.w3.org/1999/xlink";function Xe(e,t,n,s,o){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(xt,t.slice(6,t.length)):e.setAttributeNS(xt,t,n);else{const s=Re(t);null==n||s&&!jt(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Ze(e,t,n,s,o,r,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,o,r),void(e[t]=n??"");const i=e.tagName;if("value"===t&&"PROGRESS"!==i&&!i.includes("-")){const s=n??"";return(("OPTION"===i?e.getAttribute("value")||"":e.value)!==s||!("_value"in e))&&(e.value=s),null==n&&e.removeAttribute(t),void(e._value=n)}let l=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=jt(n):null==n&&"string"===s?(n="",l=!0):"number"===s&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function E(e,t,n,s){e.addEventListener(t,n,s)}function Ye(e,t,n,s){e.removeEventListener(t,n,s)}const Lt=Symbol("_vei");function Je(e,t,n,s,o=null){const r=e[Lt]||(e[Lt]={}),a=r[t];if(s&&a)a.value=s;else{const[n,i]=Qe(t);if(s){E(e,n,r[t]=nn(s,o),i)}else a&&(Ye(e,n,a,i),r[t]=void 0)}}const Rt=/(?:Once|Passive|Capture)$/;function Qe(e){let t;if(Rt.test(e)){let n;for(t={};n=e.match(Rt);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[":"===e[2]?e.slice(3):M(e.slice(2)),t]}let st=0;const tn=Promise.resolve(),en=()=>st||(tn.then((()=>st=0)),st=Date.now());function nn(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();$e(sn(e,n.value),t,5,[e])};return n.value=e,n.attached=en(),n}function sn(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const $t=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,on=(e,t,n,s,o,r,a,i,l)=>{const c="svg"===o;"class"===t?Ue(e,s,c):"style"===t?qe(e,n,s):Ne(t)?xe(t)||Je(e,t,n,s,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):rn(e,t,s,c))?Ze(e,t,s,r,a,i,l):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),Xe(e,t,s,c))};function rn(e,t,n,s){if(s)return!!("innerHTML"===t||"textContent"===t||t in e&&$t(t)&&Ft(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"form"===t||"list"===t&&"INPUT"===e.tagName||"type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!$t(t)||!G(n))&&t in e}/*! #__NO_SIDE_EFFECTS__ */function an(e,t){const n=Ut(e);class s extends pt{constructor(e){super(n,e,t)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const Vn=e=>an(e,yn),cn=typeof HTMLElement<"u"?HTMLElement:class{};class pt extends cn{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),ut((()=>{this._connected||(kt(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})),this._ob.observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:s}=e;let o;if(n&&!b(n))for(const e in n){const t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=ot(this._props[e])),(o||(o=Object.create(null)))[j(e)]=!0)}this._numberProps=o,t&&this._resolveProps(e),this._applyStyles(s),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=b(t)?t:Object.keys(t||{});for(const e of Object.keys(this))"_"!==e[0]&&n.includes(e)&&this._setProp(e,this[e],!0,!1);for(const e of n.map(j))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t)}})}_setAttr(e){let t=this.hasAttribute(e)?this.getAttribute(e):void 0;const n=j(e);this._numberProps&&this._numberProps[n]&&(t=ot(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,s=!0){t!==this._props[e]&&(this._props[e]=t,s&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(M(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(M(e),t+""):t||this.removeAttribute(M(e))))}_update(){kt(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Kt(this._def,k({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),M(e)!==e&&t(M(e),n)};let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof pt){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function In(e="$style"){{const t=lt();if(!t)return J;const n=t.type.__cssModules;if(!n)return J;return n[e]||J}}const Jt=new WeakMap,Qt=new WeakMap,z=Symbol("_moveCb"),Vt=Symbol("_enterCb"),te={name:"TransitionGroup",props:k({},He,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=lt(),s=Ee();let o,r;return Te((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!dn(o[0].el,n.vnode.el,t))return;o.forEach(un),o.forEach(fn);const s=o.filter(pn);Xt(),s.forEach((e=>{const n=e.el,s=n.style;C(n,t),s.transform=s.webkitTransform=s.transitionDuration="";const o=n[z]=e=>{e&&e.target!==n||(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener("transitionend",o),n[z]=null,A(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const a=we(e),i=qt(a);let l=a.tag||ft;if(o=[],r)for(let e=0;e<r.length;e++){const t=r[e];t.el&&t.el instanceof Element&&(o.push(t),_t(t,St(t,i,s,n)),Jt.set(t,t.el.getBoundingClientRect()))}r=t.default?Ae(t.default()):[];for(let e=0;e<r.length;e++){const t=r[e];null!=t.key&&_t(t,St(t,i,s,n))}return Kt(l,null,r)}}},ln=e=>delete e.mode,On=te;function un(e){const t=e.el;t[z]&&t[z](),t[Vt]&&t[Vt]()}function fn(e){Qt.set(e,e.el.getBoundingClientRect())}function pn(e){const t=Jt.get(e),n=Qt.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${s}px,${o}px)`,t.transitionDuration="0s",e}}function dn(e,t,n){const s=e.cloneNode(),o=e[$];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&s.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&s.classList.add(e))),s.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(s);const{hasTransform:a}=zt(s);return r.removeChild(s),a}const N=e=>{const t=e.props["onUpdate:modelValue"]||!1;return b(t)?e=>Pe(t,e):t};function mn(e){e.target.composing=!0}function It(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const h=Symbol("_assign"),ct={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[h]=N(o);const r=s||o.props&&"number"===o.props.type;E(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n&&(s=s.trim()),r&&(s=it(s)),e[h](s)})),n&&E(e,"change",(()=>{e.value=e.value.trim()})),t||(E(e,"compositionstart",mn),E(e,"compositionend",It),E(e,"change",It))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:o}},r){if(e[h]=N(r),e.composing)return;const a=t??"";(!o&&"number"!==e.type||/^0\d/.test(e.value)?e.value:it(e.value))!==a&&(document.activeElement===e&&"range"!==e.type&&(n||s&&e.value.trim()===a)||(e.value=a))}},ee={deep:!0,created(e,t,n){e[h]=N(n),E(e,"change",(()=>{const t=e._modelValue,n=V(e),s=e.checked,o=e[h];if(b(t)){const e=X(t,n),r=-1!==e;if(s&&!r)o(t.concat(n));else if(!s&&r){const n=[...t];n.splice(e,1),o(n)}}else if(H(t)){const e=new Set(t);s?e.add(n):e.delete(n),o(e)}else o(se(e,s))}))},mounted:Ot,beforeUpdate(e,t,n){e[h]=N(n),Ot(e,t,n)}};function Ot(e,{value:t,oldValue:n},s){e._modelValue=t,b(t)?e.checked=X(t,s.props.value)>-1:H(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=B(t,se(e,!0)))}const ne={created(e,{value:t},n){e.checked=B(t,n.props.value),e[h]=N(n),E(e,"change",(()=>{e[h](V(e))}))},beforeUpdate(e,{value:t,oldValue:n},s){e[h]=N(s),t!==n&&(e.checked=B(t,s.props.value))}},hn={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=H(t);E(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?it(V(e)):V(e)));e[h](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,ut((()=>{e._assigning=!1}))})),e[h]=N(s)},mounted(e,{value:t,modifiers:{number:n}}){Dt(e,t)},beforeUpdate(e,t,n){e[h]=N(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||Dt(e,t)}};function Dt(e,t,n){const s=e.multiple,o=b(t);if(!s||o||H(t)){for(let n=0,r=e.options.length;n<r;n++){const r=e.options[n],a=V(r);if(s)if(o){const e=typeof a;r.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):X(t,a)>-1}else r.selected=t.has(a);else if(B(V(r),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}!s&&-1!==e.selectedIndex&&(e.selectedIndex=-1)}}function V(e){return"_value"in e?e._value:e.value}function se(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const gn={created(e,t,n){U(e,t,n,null,"created")},mounted(e,t,n){U(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){U(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){U(e,t,n,s,"updated")}};function oe(e,t){switch(e){case"SELECT":return hn;case"TEXTAREA":return ct;default:switch(t){case"checkbox":return ee;case"radio":return ne;default:return ct}}}function U(e,t,n,s,o){const r=oe(e.tagName,n.props&&n.props.type)[o];r&&r(e,t,n,s)}function bn(){ct.getSSRProps=({value:e})=>({value:e}),ne.getSSRProps=({value:e},t)=>{if(t.props&&B(t.props.value,e))return{checked:!0}},ee.getSSRProps=({value:e},t)=>{if(b(e)){if(t.props&&X(e,t.props.value)>-1)return{checked:!0}}else if(H(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},gn.getSSRProps=(e,t)=>{if("string"!=typeof t.type)return;const n=oe(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const _n=["ctrl","shift","alt","meta"],Sn={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>_n.some((n=>e[`${n}Key`]&&!t.includes(n)))},Dn=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(n,...s)=>{for(let e=0;e<t.length;e++){const s=Sn[t[e]];if(s&&s(n,t))return}return e(n,...s)})},vn={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bn=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=n=>{if(!("key"in n))return;const s=M(n.key);return t.some((e=>e===s||vn[e]===s))?e(n):void 0})},ie=k({patchProp:on},ke);let D,Bt=!1;function re(){return D||(D=ye(ie))}function ae(){return D=Bt?D:Me(ie),Bt=!0,D}const kt=(...e)=>{re().render(...e)},yn=(...e)=>{ae().hydrate(...e)},kn=(...e)=>{const t=re().createApp(...e),{mount:n}=t;return t.mount=e=>{const s=le(e);if(!s)return;const o=t._component;!Ft(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,ce(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t},Hn=(...e)=>{const t=ae().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=le(e);if(t)return n(t,!0,ce(t))},t};function ce(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function le(e){return G(e)?document.querySelector(e):e}let Ht=!1;const Fn=()=>{Ht||(Ht=!0,bn(),We())},Kn=(e,t)=>{const n=e.__vccOpts||e;for(const[e,s]of t)n[e]=s;return n},Cn="/RSSWikiPageCreator/assets/icons/help.svg",En=["aria-disabled"],Tn=_("img",{src:Cn,alt:"Help"},null,-1),wn={class:"tooltiptext nms-font"},An={id:"explanationHeading",class:"explanationHeading title is-4"},Pn={id:"explanationContent",class:"explanationContent nms-font"},Mn=["href"],Nn=["srcset"],xn=["src"],Ln=_("form",{method:"dialog"},[_("button",{class:"button",type:"submit",autofocus:""}," Cerrar ")],-1),Un=Ut({__name:"Explanation",props:{img:{},open:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){var n;const s=e,o=y(null),r=y(null),a=y(null),i=(null==(n=s.img)?void 0:n.trim())??"",l=y("0 -100vh"),c=y(""),u=y(0),p=y(0),d=y(!1),f=y(!1),m=t;function h(){l.value="0 -100vh",c.value||(c.value=i),d.value||(d.value=!0),m("update:open",!0),ut((()=>{o.value&&(o.value.showModal(),l.value="0 0",o.value.scrollTo(0,0))}))}function v(){p.value=1,u.value=1}return Ve((()=>{s.open&&h()})),(e,t)=>(K(),Q(ft,null,[_("button",{"aria-disabled":!e.$slots.content||void 0,class:"tooltip",onClick:t[0]||(t[0]=t=>e.$slots.content&&h())},[Tn,_("p",wn,[tt(e.$slots,"default")])],8,En),(K(),Ie(Oe,{to:"body"},[d.value?(K(),Q("dialog",{key:0,style:vt({translate:l.value}),class:"explanation modal-content content",ref_key:"dialogElement",ref:o,onClose:t[3]||(t[3]=t=>e.$emit("update:open",!1))},[_("h2",An,[tt(e.$slots,"heading")]),_("div",Pn,[tt(e.$slots,"content")]),c.value&&!f.value?(K(),Q("a",{key:0,href:`./assets/images/jpg/${c.value}.jpg`,class:"explanationLink loading",id:"explanationLink",ref_key:"linkElement",ref:a,rel:"noopener noreferrer",target:"_blank"},[_("picture",null,[_("source",{srcset:`./assets/images/webp/${c.value}.webp`,class:"explanationWebpImg",id:"explanationWebpImg",type:"image/webp"},null,8,Nn),_("img",{src:`./assets/images/jpg/${c.value}.jpg`,style:vt({opacity:u.value,"margin-block-start":p.value+"rem"}),alt:"Explainer Image",class:"explanationFallbackImg",id:"explanationFallbackImg",ref_key:"imgElement",ref:r,onLoadstart:t[1]||(t[1]=e=>f.value=!1),onLoad:v,onError:t[2]||(t[2]=e=>f.value=!0)},null,44,xn)])],8,Mn)):yt("",!0),Ln],36)):yt("",!0)]))],64))}});export{Wt as T,pt as V,Kn as _,On as a,Hn as b,kn as c,an as d,Vn as e,$n as f,gn as g,yn as h,Fn as i,ne as j,hn as k,ct as l,je as m,Dn as n,Un as o,kt as r,In as u,ee as v,Bn as w};
