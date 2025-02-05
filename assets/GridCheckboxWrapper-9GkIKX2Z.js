import{Q as S,Y as j,R as _,af as m,$ as B,a as d,o as i,b as c,f as b,T as p,e as h,D as v,S as a,t as f,n as C,j as D,a0 as I,k as L,a1 as $,a2 as E,d as V,q as F,v as K,x as M,h as g,c as x,F as y,M as w,p as N}from"./main-B5J7UeQh.js";import{d as A,e as T}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-CF0a6kFR.js";import{s as U}from"./index-BzQx1JrD.js";var q=function(e){var t=e.dt;return"\n.p-fieldset {\n    background: ".concat(t("fieldset.background"),";\n    border: 1px solid ").concat(t("fieldset.border.color"),";\n    border-radius: ").concat(t("fieldset.border.radius"),";\n    color: ").concat(t("fieldset.color"),";\n    padding: ").concat(t("fieldset.padding"),";\n    margin: 0;\n}\n\n.p-fieldset-legend {\n    background: ").concat(t("fieldset.legend.background"),";\n    border-radius: ").concat(t("fieldset.legend.border.radius"),";\n    border-width: ").concat(t("fieldset.legend.border.width"),";\n    border-style: solid;\n    border-color: ").concat(t("fieldset.legend.border.color"),";\n    padding: ").concat(t("fieldset.legend.padding"),";\n    transition: background ").concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),";\n}\n\n.p-fieldset-toggleable > .p-fieldset-legend {\n    padding: 0;\n}\n\n.p-fieldset-toggle-button {\n    cursor: pointer;\n    user-select: none;\n    overflow: hidden;\n    position: relative;\n    text-decoration: none;\n    display: flex;\n    gap: ").concat(t("fieldset.legend.gap"),";\n    align-items: center;\n    justify-content: center;\n    padding: ").concat(t("fieldset.legend.padding"),";\n    background: transparent;\n    border: 0 none;\n    border-radius: ").concat(t("fieldset.legend.border.radius"),";\n    transition: background ").concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),";\n    outline-color: transparent;\n}\n\n.p-fieldset-legend-label {\n    font-weight: ").concat(t("fieldset.legend.font.weight"),";\n}\n\n.p-fieldset-toggle-button:focus-visible {\n    box-shadow: ").concat(t("fieldset.legend.focus.ring.shadow"),";\n    outline: ").concat(t("fieldset.legend.focus.ring.width")," ").concat(t("fieldset.legend.focus.ring.style")," ").concat(t("fieldset.legend.focus.ring.color"),";\n    outline-offset: ").concat(t("fieldset.legend.focus.ring.offset"),";\n}\n\n.p-fieldset-toggleable > .p-fieldset-legend:hover {\n    color: ").concat(t("fieldset.legend.hover.color"),";\n    background: ").concat(t("fieldset.legend.hover.background"),";\n}\n\n.p-fieldset-toggle-icon {\n    color: ").concat(t("fieldset.toggle.icon.color"),";\n    transition: color ").concat(t("fieldset.transition.duration"),";\n}\n\n.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {\n    color: ").concat(t("fieldset.toggle.icon.hover.color"),";\n}\n\n.p-fieldset .p-fieldset-content {\n    padding: ").concat(t("fieldset.content.padding"),";\n}\n")},G={root:function(e){return["p-fieldset p-component",{"p-fieldset-toggleable":e.props.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},R=S.extend({name:"fieldset",theme:q,classes:G}),W={name:"BaseFieldset",extends:_,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:R,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},Y={name:"Fieldset",extends:W,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(e){this.id=e||m()},collapsed:function(e){this.d_collapsed=e}},mounted:function(){this.id=this.id||m()},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){("Enter"===e.code||"NumpadEnter"===e.code||"Space"===e.code)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:j},components:{PlusIcon:T,MinusIcon:A}};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return(t=Q(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){var t=H(e,"string");return"symbol"==u(t)?t:t+""}function H(e,t){if("object"!=u(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!=u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var J=["id"],X=["id","aria-controls","aria-expanded","aria-label"],Z=["id","aria-labelledby"];function ee(e,t,n,o,l,r){var s=B("ripple");return i(),d("fieldset",a({class:e.cx("root")},e.ptmi("root")),[c("legend",a({class:e.cx("legend")},e.ptm("legend")),[p(e.$slots,"legend",{toggleCallback:r.toggle},(function(){return[e.toggleable?h("",!0):(i(),d("span",a({key:0,id:l.id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17,J)),e.toggleable?v((i(),d("button",a({key:1,id:l.id+"_header",type:"button","aria-controls":l.id+"_content","aria-expanded":!l.d_collapsed,"aria-label":r.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),onKeydown:t[1]||(t[1]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},P(P({},e.toggleButtonProps),e.ptm("toggleButton"))),[p(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:l.d_collapsed,class:C(e.cx("toggleIcon"))},(function(){return[(i(),D(I(l.d_collapsed?"PlusIcon":"MinusIcon"),a({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]})),c("span",a({class:e.cx("legendLabel")},e.ptm("legendLabel")),f(e.legend),17)],16,X)),[[s]]):h("",!0)]}))],16),b(E,a({name:"p-toggleable-content"},e.ptm("transition")),{default:L((function(){return[v(c("div",a({id:l.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":l.id+"_header"},e.ptm("contentContainer")),[c("div",a({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"default")],16)],16,Z),[[$,!l.d_collapsed]])]})),_:3},16)],16)}Y.render=ee;const te={class:"is-flex is-align-items-end is-gap-1 is-flex-grow-1"},ne=["for"],oe=V({__name:"CompactCheckbox",props:F({label:{},trueValue:{},falseValue:{},value:{},name:{}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=K(e,"modelValue"),n=M("checkbox-");return(e,o)=>(i(),d("div",te,[b(g(U),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e),"false-value":e.falseValue,"input-id":g(n),"true-value":e.trueValue,binary:""},null,8,["modelValue","false-value","input-id","true-value"]),c("label",{for:g(n),class:"is-flex-grow-1"},f(e.label),9,ne)]))}});function le(e,t){return e.reduce(((e,n,o)=>{const l=Math.floor(o/t);return e[l]||(e[l]=[]),e[l].push(n),e}),[])}const re={class:"columns is-mobile mb-0 checkbox-row"},ae="Yes",ie="No",se=V({__name:"GridCheckboxWrapper",props:{checkboxes:{}},setup(e){const t=e,n=x((()=>le(t.checkboxes,2)));return(e,t)=>(i(!0),d(y,null,w(n.value,(e=>(i(),d("div",re,[(i(!0),d(y,null,w(e,(e=>(i(),d("div",{key:e.label,class:"column is-flex is-align-items-center checkbox-wrapper"},[b(oe,{modelValue:e.model,"onUpdate:modelValue":t=>e.model=t,"false-value":e.falseValue??ie,label:e.label,"true-value":e.trueValue??ae},null,8,["modelValue","onUpdate:modelValue","false-value","label","true-value"])])))),128))])))),256))}}),pe=N(se,[["__scopeId","data-v-bd36cdd8"]]);export{pe as G,Y as s};
