import"./styles-DjLqoQvK.js";import{p as e,g as o,r as b,d as I,e as h,w as y,t as E,a as $,b as s,c as u}from"./links-CF9w79L7.js";import{a as x,b as C,c as v,d as P}from"./startup-BpDubhIE.js";import"./gallery-D8qYHnHp.js";import"./Explanation.vue_vue_type_script_setup_true_lang--42vB0P1.js";function m(){const t=e.region;o.output.regNr.innerText=b(t)}function g(){const t=I(),a=e.catalogue;o.output.addInfo.innerText=`[[${a}]]${t}`}function S(){e.catalogue="Royal Space Society Starship Album - Organic Frigate"}function c(){const t=e.name,a=e.tentacles,n=e.mainColour,i=e.secColour,r=o.input.appearanceInput;if(!(n.trim()||i.trim()||a.trim()))return;const s=`${t} is ${n.trim()?`${h(n)} ${n.trim()}`:""} organic frigate${i.trim()?` with ${i} accents`:""} with ${a}.`;r.value=s,y(r)}function w(){return`{{Class|${e.class}}}`}function F(){return"Organic Frigate Album"}const O=[{element:"nameInput",func:()=>{x(),c()}},{element:"portalglyphsInput",func:()=>m()},{element:["mainColourInput","secColourInput","tentacleInput"],func:()=>c()},{element:"researchTeam",func:()=>g()},{element:"classInput",func:()=>C()},{element:"hideAppearanceButton",handler:"click",func:function(){E("appearance",this)}},{element:["discoveredInput","discoveredlinkInput"],func:()=>v()}];s.albumOtherExternal=()=>w(),s.albumItemTypeExternal=()=>F(),u("galleryExplanationExternal","\nHay un orden preferido de imágenes de la galería:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Vista trasera de la fragata</li>\n\t\t\t<li>Pantalla de interacción</li>\n\t\t\t<li>Página del sistema</li>\n\t\t</ol>\n \t</div>");const i={"Rear view of frigate":"Vista trasera de la fragata","Interaction screen":"Pantalla de interacción","System Page":"Página del Sistema"};u("galleryArray",["",i["Rear view of frigate"],i["Interaction screen"],i["System Page"]]),$(O),m(),S(),g(),P();
