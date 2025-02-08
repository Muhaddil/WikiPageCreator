import{a8 as m,a as d,o as r,b as l,Z as a,K as w,R as y,J as B,M as $,aw as u,X as k,f as P,Y as i,e as p,t as I,n as D,j as g,k as h,$ as A,D as S,ab as V,ac as H}from"./main-NAshHr3n.js";var f={name:"PlusIcon",extends:m};function K(e,n,t,o,s,i){return r(),d("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[l("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}f.render=K;var b={name:"MinusIcon",extends:m};function M(e,n,t,o,s,i){return r(),d("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[l("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1)]),16)}b.render=M;var L=function(e){var n=e.dt;return"\n.p-panel {\n    border: 1px solid ".concat(n("panel.border.color"),";\n    border-radius: ").concat(n("panel.border.radius"),";\n    background: ").concat(n("panel.background"),";\n    color: ").concat(n("panel.color"),";\n}\n\n.p-panel-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: ").concat(n("panel.header.padding"),";\n    background: ").concat(n("panel.header.background"),";\n    color: ").concat(n("panel.header.color"),";\n    border-style: solid;\n    border-width: ").concat(n("panel.header.border.width"),";\n    border-color: ").concat(n("panel.header.border.color"),";\n    border-radius: ").concat(n("panel.header.border.radius"),";\n}\n\n.p-panel-toggleable .p-panel-header {\n    padding: ").concat(n("panel.toggleable.header.padding"),";\n}\n\n.p-panel-title {\n    line-height: 1;\n    font-weight: ").concat(n("panel.title.font.weight"),";\n}\n\n.p-panel-content {\n    padding: ").concat(n("panel.content.padding"),";\n}\n\n.p-panel-footer {\n    padding: ").concat(n("panel.footer.padding"),";\n}\n")},T={root:function(e){return["p-panel p-component",{"p-panel-toggleable":e.props.toggleable}]},header:"p-panel-header",title:"p-panel-title",headerActions:"p-panel-header-actions",pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",content:"p-panel-content",footer:"p-panel-footer"},E=w.extend({name:"panel",theme:L,classes:T}),N={name:"BasePanel",extends:$,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}}},style:E,provide:function(){return{$pcPanel:this,$parentInstance:this}}},j={name:"Panel",extends:N,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(e){this.id=e||u()},collapsed:function(e){this.d_collapsed=e}},mounted:function(){this.id=this.id||u()},methods:{toggle:function(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})},onKeyDown:function(e){("Enter"===e.code||"NumpadEnter"===e.code||"Space"===e.code)&&(this.toggle(e),e.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:f,MinusIcon:b,Button:B},directives:{ripple:y}},Z=["id"],R=["id","aria-labelledby"];function q(e,n,t,o,s,c){var u=k("Button");return r(),d("div",a({class:e.cx("root")},e.ptmi("root")),[l("div",a({class:e.cx("header")},e.ptm("header")),[i(e.$slots,"header",{id:s.id+"_header",class:D(e.cx("title"))},(function(){return[e.header?(r(),d("span",a({key:0,id:s.id+"_header",class:e.cx("title")},e.ptm("title")),I(e.header),17,Z)):p("",!0)]})),l("div",a({class:e.cx("headerActions")},e.ptm("headerActions")),[i(e.$slots,"icons"),e.toggleable?(r(),g(u,a({key:0,id:s.id+"_header",class:e.cx("pcToggleButton"),"aria-label":c.buttonAriaLabel,"aria-controls":s.id+"_content","aria-expanded":!s.d_collapsed,unstyled:e.unstyled,onClick:c.toggle,onKeydown:c.onKeyDown},e.toggleButtonProps,{pt:e.ptm("pcToggleButton")}),{icon:h((function(n){return[i(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:s.d_collapsed},(function(){return[(r(),g(A(s.d_collapsed?"PlusIcon":"MinusIcon"),a({class:n.class},e.ptm("pcToggleButton").icon),null,16,["class"]))]}))]})),_:3},16,["id","class","aria-label","aria-controls","aria-expanded","unstyled","onClick","onKeydown","pt"])):p("",!0)],16)],16),P(H,a({name:"p-toggleable-content"},e.ptm("transition")),{default:h((function(){return[S(l("div",a({id:s.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":s.id+"_header"},e.ptm("contentContainer")),[l("div",a({class:e.cx("content")},e.ptm("content")),[i(e.$slots,"default")],16),e.$slots.footer?(r(),d("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[i(e.$slots,"footer")],16)):p("",!0)],16,R),[[V,!s.d_collapsed]])]})),_:3},16)],16)}j.render=q;export{f as a,b,j as s};
