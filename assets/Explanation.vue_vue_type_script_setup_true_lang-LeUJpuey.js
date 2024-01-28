import{cQ as Ft,cR as W,bb as de,az as me,cS as k,aA as he,cT as ge,cU as st,b7 as ct,c8 as be,ak as _e,bC as Se,ag as lt,aQ as j,cV as P,R as Kt,cW as Q,cX as z,cY as b,cZ as q,c_ as H,c$ as $,aW as ve,P as ut,aI as Ce,J as Ut,c5 as ye,bD as Ee,bX as Te,b9 as we,bO as _t,bL as St,d0 as Ae,aU as Me,d1 as Pe,d2 as Ne,aR as xe,d3 as Le,d4 as jt,aO as Re,a7 as C,a8 as $e,L as K,M as Y,O as _,U as Z,V as Ve,ah as vt,a2 as Ct,ai as Ie}from"./links-aG3Svk__.js";
/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Oe="http://www.w3.org/2000/svg",De="http://www.w3.org/1998/Math/MathML",M=typeof document<"u"?document:null,yt=M&&M.createElement("template"),Be={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o="svg"===t?M.createElementNS(Oe,e):"mathml"===t?M.createElementNS(De,e):M.createElement(e,n?{is:n}:void 0);return"select"===e&&s&&null!=s.multiple&&o.setAttribute("multiple",s.multiple),o},createText:e=>M.createTextNode(e),createComment:e=>M.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>M.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),o!==r&&(o=o.nextSibling););else{yt.innerHTML="svg"===s?`<svg>${e}</svg>`:"mathml"===s?`<math>${e}</math>`:e;const o=yt.content;if("svg"===s||"mathml"===s){const e=o.firstChild;for(;e.firstChild;)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},w="transition",O="animation",V=Symbol("_vtc"),Wt=(e,{slots:t})=>de(me,Gt(e),t);Wt.displayName="Transition";const zt={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ke=Wt.props=k({},he,zt),L=(e,t=[])=>{b(e)?e.forEach((e=>e(...t))):e&&e(...t)},Et=e=>!!e&&(b(e)?e.some((e=>e.length>1)):e.length>1);function Gt(e){const t={};for(const n in e)n in zt||(t[n]=e[n]);if(!1===e.css)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,m=He(o),h=m&&m[0],v=m&&m[1],{onBeforeEnter:g,onEnter:b,onEnterCancelled:_,onLeave:C,onLeaveCancelled:S,onBeforeAppear:E=g,onAppear:w=b,onAppearCancelled:P=_}=t,x=(e,t,n)=>{A(e,t?u:i),A(e,t?c:a),n&&n()},$=(e,t)=>{e._isLeaving=!1,A(e,p),A(e,f),A(e,d),t&&t()},T=e=>(t,n)=>{const o=e?w:b,a=()=>x(t,e,n);L(o,[t,a]),Tt((()=>{A(t,e?l:r),y(t,e?u:i),Et(o)||wt(t,s,h,a)}))};return k(t,{onBeforeEnter(e){L(g,[e]),y(e,r),y(e,a)},onBeforeAppear(e){L(E,[e]),y(e,l),y(e,c)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>$(e,t);y(e,p),Xt(),y(e,d),Tt((()=>{e._isLeaving&&(A(e,p),y(e,f),Et(C)||wt(e,s,v,n))})),L(C,[e,n])},onEnterCancelled(e){x(e,!1),L(_,[e])},onAppearCancelled(e){x(e,!0),L(P,[e])},onLeaveCancelled(e){$(e),L(S,[e])}})}function He(e){if(null==e)return null;if(ge(e))return[tt(e.enter),tt(e.leave)];{const t=tt(e);return[t,t]}}function tt(e){return st(e)}function y(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[V]||(e[V]=new Set)).add(t)}function A(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[V];n&&(n.delete(t),n.size||(e[V]=void 0))}function Tt(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Fe=0;function wt(e,t,n,s){const o=e._endId=++Fe,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:a,timeout:i,propCount:l}=qt(e,t);if(!a)return s();const c=a+"end";let u=0;const p=()=>{e.removeEventListener(c,d),r()},d=t=>{t.target===e&&++u>=l&&p()};setTimeout((()=>{u<l&&p()}),i+1),e.addEventListener(c,d)}function qt(e,t){const n=window.getComputedStyle(e),s=e=>(n[e]||"").split(", "),o=s(`${w}Delay`),r=s(`${w}Duration`),a=At(o,r),i=s(`${O}Delay`),l=s(`${O}Duration`),c=At(i,l);let u=null,p=0,d=0;t===w?a>0&&(u=w,p=a,d=r.length):t===O?c>0&&(u=O,p=c,d=l.length):(p=Math.max(a,c),u=p>0?a>c?w:O:null,d=u?u===w?r.length:l.length:0);return{type:u,timeout:p,propCount:d,hasTransform:u===w&&/\b(transform|all)(,|$)/.test(s(`${w}Property`).toString())}}function At(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Mt(t)+Mt(e[n]))))}function Mt(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function Xt(){return document.body.offsetHeight}function Ke(e,t,n){const s=e[V];s&&(t=(t?[t,...s]:[...s]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ft=Symbol("_vod"),Ue={beforeMount(e,{value:t},{transition:n}){e[ft]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):D(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),D(e,!0),s.enter(e)):s.leave(e,(()=>{D(e,!1)})):D(e,t))},beforeUnmount(e,{value:t}){D(e,t)}};function D(e,t){e.style.display=t?e[ft]:"none"}function je(){Ue.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Jt=Symbol("");function Ln(e){const t=ct();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>it(e,n)))},s=()=>{const s=e(t.proxy);ot(t.subTree,s),n(s)};be(s),_e((()=>{const e=new MutationObserver(s);e.observe(t.subTree.el.parentNode,{childList:!0}),Se((()=>e.disconnect()))}))}function ot(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{ot(n.activeBranch,t)}))}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)it(e.el,t);else if(e.type===ut)e.children.forEach((e=>ot(e,t)));else if(e.type===Ce){let{el:n,anchor:s}=e;for(;n&&(it(n,t),n!==s);)n=n.nextSibling}}function it(e,t){if(1===e.nodeType){const n=e.style;let s="";for(const e in t)n.setProperty(`--${e}`,t[e]),s+=`--${e}: ${t[e]};`;n[Jt]=s}}function We(e,t,n){const s=e.style,o=s.display,r=W(n);if(n&&!r){if(t&&!W(t))for(const e in t)null==n[e]&&rt(s,e,"");for(const e in n)rt(s,e,n[e])}else if(r){if(t!==n){const e=s[Jt];e&&(n+=";"+e),s.cssText=n}}else t&&e.removeAttribute("style");ft in e&&(s.display=o)}const Pt=/\s*!important$/;function rt(e,t,n){if(b(n))n.forEach((n=>rt(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=ze(e,t);Pt.test(n)?e.setProperty(P(s),n.replace(Pt,""),"important"):e[s]=n}}const Nt=["Webkit","Moz","ms"],et={};function ze(e,t){const n=et[t];if(n)return n;let s=j(t);if("filter"!==s&&s in e)return et[t]=s;s=xe(s);for(let n=0;n<Nt.length;n++){const o=Nt[n]+s;if(o in e)return et[t]=o}return t}const xt="http://www.w3.org/1999/xlink";function Ge(e,t,n,s,o){if(s&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(xt,t.slice(6,t.length)):e.setAttributeNS(xt,t,n);else{const s=Le(t);null==n||s&&!jt(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function qe(e,t,n,s,o,r,a){if("innerHTML"===t||"textContent"===t)return s&&a(s,o,r),void(e[t]=n??"");const i=e.tagName;if("value"===t&&"PROGRESS"!==i&&!i.includes("-")){e._value=n;const s=n??"";return("OPTION"===i?e.getAttribute("value"):e.value)!==s&&(e.value=s),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=jt(n):null==n&&"string"===s?(n="",l=!0):"number"===s&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function E(e,t,n,s){e.addEventListener(t,n,s)}function Xe(e,t,n,s){e.removeEventListener(t,n,s)}const Lt=Symbol("_vei");function Je(e,t,n,s,o=null){const r=e[Lt]||(e[Lt]={}),a=r[t];if(s&&a)a.value=s;else{const[n,i]=Qe(t);if(s){E(e,n,r[t]=tn(s,o),i)}else a&&(Xe(e,n,a,i),r[t]=void 0)}}const Rt=/(?:Once|Passive|Capture)$/;function Qe(e){let t;if(Rt.test(e)){let n;for(t={};n=e.match(Rt);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[":"===e[2]?e.slice(3):P(e.slice(2)),t]}let nt=0;const Ye=Promise.resolve(),Ze=()=>nt||(Ye.then((()=>nt=0)),nt=Date.now());function tn(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();Re(en(e,n.value),t,5,[e])};return n.value=e,n.attached=Ze(),n}function en(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const $t=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,nn=(e,t,n,s,o,r,a,i,l)=>{const c="svg"===o;"class"===t?Ke(e,s,c):"style"===t?We(e,n,s):Pe(t)?Ne(t)||Je(e,t,n,s,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):sn(e,t,s,c))?qe(e,t,s,r,a,i,l):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),Ge(e,t,s,c))};function sn(e,t,n,s){if(s)return!!("innerHTML"===t||"textContent"===t||t in e&&$t(t)&&Ft(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"form"===t||"list"===t&&"INPUT"===e.tagName||"type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!$t(t)||!W(n))&&t in e}/*! #__NO_SIDE_EFFECTS__ */function on(e,t){const n=Ut(e);class s extends pt{constructor(e){super(n,e,t)}}return s.def=n,s}/*! #__NO_SIDE_EFFECTS__ */const Rn=e=>on(e,Sn),rn=typeof HTMLElement<"u"?HTMLElement:class{};class pt extends rn{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),lt((()=>{this._connected||(kt(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})),this._ob.observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:s}=e;let o;if(n&&!b(n))for(const e in n){const t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=st(this._props[e])),(o||(o=Object.create(null)))[j(e)]=!0)}this._numberProps=o,t&&this._resolveProps(e),this._applyStyles(s),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=b(t)?t:Object.keys(t||{});for(const e of Object.keys(this))"_"!==e[0]&&n.includes(e)&&this._setProp(e,this[e],!0,!1);for(const e of n.map(j))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t)}})}_setAttr(e){let t=this.getAttribute(e);const n=j(e);this._numberProps&&this._numberProps[n]&&(t=st(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,s=!0){t!==this._props[e]&&(this._props[e]=t,s&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(P(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(P(e),t+""):t||this.removeAttribute(P(e))))}_update(){kt(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Kt(this._def,k({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),P(e)!==e&&t(P(e),n)};let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof pt){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function $n(e="$style"){{const t=ct();if(!t)return Q;const n=t.type.__cssModules;if(!n)return Q;return n[e]||Q}}const Qt=new WeakMap,Yt=new WeakMap,G=Symbol("_moveCb"),Vt=Symbol("_enterCb"),Zt={name:"TransitionGroup",props:k({},ke,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ct(),s=ye();let o,r;return Ee((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!fn(o[0].el,n.vnode.el,t))return;o.forEach(cn),o.forEach(ln);const s=o.filter(un);Xt(),s.forEach((e=>{const n=e.el,s=n.style;y(n,t),s.transform=s.webkitTransform=s.transitionDuration="";const o=n[G]=e=>{e&&e.target!==n||(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener("transitionend",o),n[G]=null,A(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const a=Te(e),i=Gt(a);let l=a.tag||ut;o=r,r=t.default?we(t.default()):[];for(let e=0;e<r.length;e++){const t=r[e];null!=t.key&&_t(t,St(t,i,s,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];_t(t,St(t,i,s,n)),Qt.set(t,t.el.getBoundingClientRect())}return Kt(l,null,r)}}},an=e=>delete e.mode,Vn=Zt;function cn(e){const t=e.el;t[G]&&t[G](),t[Vt]&&t[Vt]()}function ln(e){Yt.set(e,e.el.getBoundingClientRect())}function un(e){const t=Qt.get(e),n=Yt.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${s}px,${o}px)`,t.transitionDuration="0s",e}}function fn(e,t,n){const s=e.cloneNode(),o=e[V];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&s.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&s.classList.add(e))),s.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(s);const{hasTransform:a}=qt(s);return r.removeChild(s),a}const N=e=>{const t=e.props["onUpdate:modelValue"]||!1;return b(t)?e=>Ae(t,e):t};function pn(e){e.target.composing=!0}function It(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const h=Symbol("_assign"),at={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[h]=N(o);const r=s||o.props&&"number"===o.props.type;E(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n&&(s=s.trim()),r&&(s=z(s)),e[h](s)})),n&&E(e,"change",(()=>{e.value=e.value.trim()})),t||(E(e,"compositionstart",pn),E(e,"compositionend",It),E(e,"change",It))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:o}},r){if(e[h]=N(r),e.composing)return;const a=t??"";(o||"number"===e.type?z(e.value):e.value)!==a&&(document.activeElement===e&&"range"!==e.type&&(n||s&&e.value.trim()===a)||(e.value=a))}},te={deep:!0,created(e,t,n){e[h]=N(n),E(e,"change",(()=>{const t=e._modelValue,n=I(e),s=e.checked,o=e[h];if(b(t)){const e=q(t,n),r=-1!==e;if(s&&!r)o(t.concat(n));else if(!s&&r){const n=[...t];n.splice(e,1),o(n)}}else if(H(t)){const e=new Set(t);s?e.add(n):e.delete(n),o(e)}else o(ne(e,s))}))},mounted:Ot,beforeUpdate(e,t,n){e[h]=N(n),Ot(e,t,n)}};function Ot(e,{value:t,oldValue:n},s){e._modelValue=t,b(t)?e.checked=q(t,s.props.value)>-1:H(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=$(t,ne(e,!0)))}const ee={created(e,{value:t},n){e.checked=$(t,n.props.value),e[h]=N(n),E(e,"change",(()=>{e[h](I(e))}))},beforeUpdate(e,{value:t,oldValue:n},s){e[h]=N(s),t!==n&&(e.checked=$(t,s.props.value))}},dn={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=H(t);E(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?z(I(e)):I(e)));e[h](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,lt((()=>{e._assigning=!1}))})),e[h]=N(s)},mounted(e,{value:t,oldValue:n,modifiers:{number:s}}){Dt(e,t,n,s)},beforeUpdate(e,t,n){e[h]=N(n)},updated(e,{value:t,oldValue:n,modifiers:{number:s}}){e._assigning||Dt(e,t,n,s)}};function Dt(e,t,n,s){const o=e.multiple,r=b(t);if((!o||r||H(t))&&(!r||!$(t,n))){for(let n=0,a=e.options.length;n<a;n++){const a=e.options[n],i=I(a);if(o)if(r){const e=typeof i;a.selected="string"===e||"number"===e?t.includes(s?z(i):i):q(t,i)>-1}else a.selected=t.has(i);else if($(I(a),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}!o&&-1!==e.selectedIndex&&(e.selectedIndex=-1)}}function I(e){return"_value"in e?e._value:e.value}function ne(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const mn={created(e,t,n){U(e,t,n,null,"created")},mounted(e,t,n){U(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){U(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){U(e,t,n,s,"updated")}};function se(e,t){switch(e){case"SELECT":return dn;case"TEXTAREA":return at;default:switch(t){case"checkbox":return te;case"radio":return ee;default:return at}}}function U(e,t,n,s,o){const r=se(e.tagName,n.props&&n.props.type)[o];r&&r(e,t,n,s)}function hn(){at.getSSRProps=({value:e})=>({value:e}),ee.getSSRProps=({value:e},t)=>{if(t.props&&$(t.props.value,e))return{checked:!0}},te.getSSRProps=({value:e},t)=>{if(b(e)){if(t.props&&q(e,t.props.value)>-1)return{checked:!0}}else if(H(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},mn.getSSRProps=(e,t)=>{if("string"!=typeof t.type)return;const n=se(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const gn=["ctrl","shift","alt","meta"],bn={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>gn.some((n=>e[`${n}Key`]&&!t.includes(n)))},In=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(n,...s)=>{for(let e=0;e<t.length;e++){const s=bn[t[e]];if(s&&s(n,t))return}return e(n,...s)})},_n={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},On=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=n=>{if(!("key"in n))return;const s=P(n.key);return t.some((e=>e===s||_n[e]===s))?e(n):void 0})},oe=k({patchProp:nn},Be);let B,Bt=!1;function ie(){return B||(B=ve(oe))}function re(){return B=Bt?B:Me(oe),Bt=!0,B}const kt=(...e)=>{ie().render(...e)},Sn=(...e)=>{re().hydrate(...e)},Dn=(...e)=>{const t=ie().createApp(...e),{mount:n}=t;return t.mount=e=>{const s=ce(e);if(!s)return;const o=t._component;!Ft(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,ae(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t},Bn=(...e)=>{const t=re().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=ce(e);if(t)return n(t,!0,ae(t))},t};function ae(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ce(e){return W(e)?document.querySelector(e):e}let Ht=!1;const kn=()=>{Ht||(Ht=!0,hn(),je())},Hn=(e,t)=>{const n=e.__vccOpts||e;for(const[e,s]of t)n[e]=s;return n},vn="/RSSWikiPageCreator/assets/icons/help.svg",Cn=["aria-disabled"],yn=_("img",{src:vn,alt:"Help"},null,-1),En={class:"tooltiptext nms-font"},Tn={id:"explanationHeading",class:"explanationHeading title is-4"},wn={id:"explanationContent",class:"explanationContent nms-font"},An=["href"],Mn=["srcset"],Pn=["src"],Nn=_("form",{method:"dialog"},[_("button",{class:"button",type:"submit",autofocus:""}," Cerrar ")],-1),Fn=Ut({__name:"Explanation",props:{img:{},open:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){var n;const s=e,o=C(null),r=C(null),a=C(null),i=(null==(n=s.img)?void 0:n.trim())??"",l=C("0 -100vh"),c=C(""),u=C(0),p=C(0),d=C(!1),f=C(!1),m=t;function h(){l.value="0 -100vh",c.value||(c.value=i),d.value||(d.value=!0),m("update:open",!0),lt((()=>{o.value&&(o.value.showModal(),l.value="0 0",o.value.scrollTo(0,0))}))}function v(){p.value=1,u.value=1}return $e((()=>{s.open&&h()})),(e,t)=>(K(),Y(ut,null,[_("button",{"aria-disabled":!e.$slots.content||void 0,class:"tooltip",onClick:t[0]||(t[0]=t=>e.$slots.content&&h())},[yn,_("p",En,[Z(e.$slots,"default")])],8,Cn),(K(),Ve(Ie,{to:"body"},[d.value?(K(),Y("dialog",{key:0,style:vt({translate:l.value}),class:"explanation modal-content content",ref_key:"dialogElement",ref:o,onClose:t[3]||(t[3]=t=>e.$emit("update:open",!1))},[_("h2",Tn,[Z(e.$slots,"heading")]),_("div",wn,[Z(e.$slots,"content")]),c.value&&!f.value?(K(),Y("a",{key:0,href:`./assets/images/jpg/${c.value}.jpg`,class:"explanationLink loading",id:"explanationLink",ref_key:"linkElement",ref:a,rel:"noopener noreferrer",target:"_blank"},[_("picture",null,[_("source",{srcset:`./assets/images/webp/${c.value}.webp`,class:"explanationWebpImg",id:"explanationWebpImg",type:"image/webp"},null,8,Mn),_("img",{src:`./assets/images/jpg/${c.value}.jpg`,style:vt({opacity:u.value,"margin-block-start":p.value+"rem"}),alt:"Explainer Image",class:"explanationFallbackImg",id:"explanationFallbackImg",ref_key:"imgElement",ref:r,onLoadstart:t[1]||(t[1]=e=>f.value=!1),onLoad:v,onError:t[2]||(t[2]=e=>f.value=!0)},null,44,Pn)])],8,An)):Ct("",!0),Nn],36)):Ct("",!0)]))],64))}});export{Wt as T,pt as V,Hn as _,Fn as a,at as b,te as c,Dn as d,Vn as e,Bn as f,on as g,Rn as h,Sn as i,kn as j,Ln as k,mn as l,ee as m,Ue as n,On as o,kt as r,$n as u,dn as v,In as w};