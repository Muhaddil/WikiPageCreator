import{f as e,g as l,i as f,j as b,k as h,w as I,t as E,b as $,l as c,m as s}from"./links-0148c252.js";import{a as x,b as C,c as y,d as v}from"./albumactions-214a2e18.js";import"./startup-59004f77.js";import"./gallery-39686dc2.js";import"./Explanation.vue_vue_type_script_setup_true_lang-01de3da4.js";function u(){const t=e.region;l.output.regNr.innerText=f(t)}function m(){const t=b(),a=e.catalogue;l.output.addInfo.innerText=`[[${a}]]${t}`}function F(){e.catalogue="Eisvana Starship Album - Organic Frigate"}function o(){const t=e.name,a=e.tentacles,n=e.mainColour,i=e.secColour,r=l.input.appearanceInput;if(!(n.trim()||i.trim()||a.trim()))return;const s=`${t} is ${n.trim()?`${h(n)} ${n.trim()}`:""} organic frigate${i.trim()?` with ${i} accents`:""} with ${a}.`;r.value=s,I(r)}function P(){return`{{Class|${e.class}}}`}function O(){return"Organic Frigate Album"}const T=[{element:"nameInput",func:()=>{x(),o()}},{element:"portalglyphsInput",func:()=>u()},{element:["mainColourInput","secColourInput","tentacleInput"],func:()=>o()},{element:"researchTeam",func:()=>m()},{element:"classInput",func:()=>C()},{element:"hideAppearanceButton",handler:"click",func:function(){E("appearance",this)}},{element:["discoveredInput","discoveredlinkInput"],func:()=>y()}];c.albumOtherExternal=()=>P(),c.albumItemTypeExternal=()=>O(),s("galleryExplanationExternal","\nHay un orden preferido de imágenes de la galería:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Vista trasera de la fragata</li>\n\t\t\t<li>Pantalla de interacción</li>\n\t\t\t<li>Página del sistema</li>\n\t\t</ol>\n \t</div>"),s("galleryArray",["","Vista trasera de la fragata","Pantalla de interacción","Página del sistema"]),$(T),u(),F(),m(),v();
