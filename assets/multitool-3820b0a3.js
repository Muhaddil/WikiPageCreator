import{g as l,r as V,p as t,d as z,ao as J,o as r,ap as A,w as d,aq as K,j as w,s as Q,m as W,z as X,ar as Y,e as M,as as Z,t as ee,a as ne,b as f,c as te}from"./links-08a7c615.js";import{h as G,a as oe,i as N,b as T,c as se,d as ae}from"./startup-758f1c28.js";import"./gallery-b9f5c425.js";import"./Explanation.vue_vue_type_script_setup_true_lang-dea90ee6.js";function R(){l.output.regNr.innerText=V(t.region)}function E(){const e=z(),t=l.output.addInfo,n="[["+F()+"]]"+e;t.innerText=n}function $(){const e=t.mainColour,n=t.secColour,a=t.name,o=t.subtype.toLowerCase(),i=t.type.toLowerCase(),s=l.input.appearanceInput;if(!e.trim()&&!n.trim())return;const c=e.trim()?`${M(e)} ${e.trim()}`:M(i),r=n.trim()?` with ${n} accents`:"",u=`${a} is ${c} ${"starter pistol"===o?o:i} multi-tool${r}.`;s.value=u,d(s)}function k(){ce(),t.albumInitialised?G():document.addEventListener("albumLoaded",(()=>G()))}function x(){k(),b()}function ce(){const{srLocName:e,planet:n,moon:a,axes:l}=t,o=t.location.toLowerCase(),i=X(n,a);let s,c;const r=(()=>{const n=t.srLoc;return e||n.includes("Space")?n.toLowerCase():o.includes("Space")?o:i})();o.includes("space")?(s=`fly to the ${o}`,c=`the ${r}`,o!==r&&e?r.includes("space")||(c=`${r} [[${e}]]`):s="take from cabinet"):(c=`${r} [[${e}]]`,s=`fly to ${i} (${l})`,r.toLowerCase().includes("space")?c=`the ${r}`:a&&"moon"===r&&e===a||!a&&"planet"===r&&e===n?s=`fly to ${l}`:e||(c=`${i}`,s=`fly to ${l}`));d(`Save and reload on ${c}, then ${s}.`,"acquirement"),t.actualSrLoc=r}function b(){const e=t.srLocName,n=t.location,a=t.srPlanetImg||"nmsMisc_notAvailable.png",o=t.sysImg||"nmsMisc_notAvailable.png",i=t.cabinetPlanetImg||"nmsMisc_notAvailable.png",s=t.axesImg||"nmsMisc_notAvailable.png",c=["srImgInput","sysImgInput","cabInput","coordsInput"],u=[{},{},{},{}],p=J(),m=(()=>{const a=t.srLoc;return a.includes("Space")||e?a:n.includes("Space")?n:p})(),f="Sentinel Pillar"===n?"Pillar":"Cabinet",d=n.includes("Space")?"":`(${f} ${p} highlighted)`;function y(e,t,n){e.picName=t,e.desc=n}y(u[0],a,`Save/Reload ${m}`),y(u[1],o,`System ${d}`),!n.includes("Space")&&(y(u[2],i,`${f} ${p}`),y(u[3],s,"Coordinates"));const I=[];for(let e=0;e<u.length;e++){const t=u[e],n=t.picName,a=t.desc,o=c[e];if(!n||!a){r(l.input[o],"none");continue}r(l.input[o],"");const i=document.createElement("span");i.style.display="block",i.innerText=`${n}|${a}`,I.push(i.outerHTML),l.output[o+"Label"].innerText=a}l.output.acquirementGallery.innerHTML=I.join("")}function D(){const e=t.type,n=l.input.locInput;e in A?(r(n,"none"),n.value=A[e],d(n)):r(n,""),L(),B(),b()}function ie(){const e=t.location,n=l.input.typeInput,a=l.input.subtypeInput;if(!("string"==typeof e&&n instanceof HTMLSelectElement&&a instanceof HTMLSelectElement))return;const o=structuredClone(A);delete o.Royal;const i=Object.fromEntries(Object.entries(o).map((e=>e.reverse())));e in i?(r(n,"none"),r(a,"none"),n.value=i[e],d(n)):r(n,""),L(),B(),b()}function O(){const e=t.location,n=["planetInput","moonInput","axesInput"];for(const t of n){const n=l.input[t],a=e.includes("Space");r(n,a?"none":""),a&&(n.value="",d(n),K(n))}}function H(){const e=t.srLoc,n=l.input.srInput;e.includes("Space")?(r(n,"none"),n.value="",d(n)):r(n,"")}function L(){const e=t.location,n=l.input.costInput,a="Sentinel Pillar"===e||"Harmonic Camp"===e;r(n,a?"none":""),a&&(n.value="",w(n,"input"))}function B(){const e=t.type,n=l.input.crystalsInput;if(["Royal","Sentinel","Atlantid"].includes(e)){const e=n.closest(".checkboxes").querySelectorAll('input[type="checkbox"]');r(n,"none"),e.forEach((e=>{e.checked=!1,w(e,"change")}))}else r(n,"")}function j(){const e=t.type,n=l.input.subtypeInput,a={Pistol:[["Pistol","Starter Pistol"],["Estandar","Pistola de inicio"]],Rifle:[["Rifle","SMG"],["Estandar (Grande)","SMG (Small)"]],Experimental:[["Rifle","Pistol"],["Rifle (Grande)","Pistola (Pequeña)"]],Alien:[["Rifle","SMG","Pistol"],["Rifle (Grande)","SMG (Mediana)","Pistola (Pequeña)"]]},o=Object.keys(a).includes(e);r(n,o?"":"none"),o?Q(n,a[e][0],a[e][1]):n.value="",W(n)}function le(){return"Album"}function re(){return"Multi-Tool"}function ue(){return`<br>{{Class|${t.class}}} - ${function(){const e=t.subtype;return!e||t.isStarter?"":e+" -"}()} ${t.slots} Slots`}function pe(){return(()=>{const e=t.axes,n=t.acquirement.replace("Save and reload","S/r");return e&&!Y(!1)?n.replace(/[()]/g,"").replace(e,`(${e})`):n})()}function F(){const{type:e}=t;return`Royal Space Society Multi-Tool Album - ${e}`}function me(){const e=["","Discovery Menu","Price Page","Base Stats","Minor Settlement","Sentinel Pillar","Harmonic Camp","Monolith","Tool in Hand","First Person View"],n=t.location,a=["Minor Settlement","Sentinel Pillar","Harmonic Camp","Monolith"];if(a.includes(n))a.filter((e=>e!==n)).forEach((t=>{const n=e.indexOf(t);e.splice(n,1)}));else for(let t=e.length-1;t>=0;t--)a.includes(e[t])&&e.splice(t,1);t.galleryArray=e}const de=[{element:"nameInput",func:()=>{oe(),$()}},{element:"typeInput",func:()=>{E(),D(),j(),M(t.type,"enPrefix"),N(),T(),$()}},{element:"subtypeInput",func:()=>{T(),E(),$(),N()}},{element:"researchTeam",func:()=>E()},{element:"locInput",func:function(){x(),O(),L(),ie()}},{element:"srlocInput",func:()=>{x(),H()}},{element:["srInput","planetInput","moonInput"],func:()=>x()},{element:"axesInput",func:()=>k()},{element:["slotsInput","classInput"],func:()=>T()},{element:["srImgInput","sysImgInput","cabInput","coordsInput"],func:()=>b()},{element:["srImgUpload","sysImgUpload","cabUpload","coordsUpload"],handler:"change",func:function(){Z(this),b()}},{element:"portalglyphsInput",func:()=>R()},{element:["discoveredInput","discoveredlinkInput"],func:()=>se()},{element:["mainColourInput","secColourInput"],func:()=>$()},{element:"hideAppearanceButton",handler:"click",func:function(){ee("appearance",this)}}];f.albumDescExternal=()=>pe(),f.albumOtherExternal=()=>ue(),f.albumItemTypeExternal=()=>re(),f.albumTypeExternal=()=>le(),f.generateGalleryArray=()=>me(),f.albumLinkGen=()=>F(),te("galleryExplanationExternal","\nHay un orden preferido de imágenes:\n\t<div class='is-flex is-justify-content-center'>\n\t\t<ol class='has-text-left'>\n\t\t\t<li>Menú de descubrimiento</li>\n\t\t\t<li>Página de precios</li>\n\t\t\t<li>Estadísticas base</li>\n\t\t\t<li>Asentamiento menor/Pilar centinela/Campamento armónico/Monolito</li>\n\t\t\t<li>Multiherramienta en mano</li>\n\t\t\t<li>Vista en primera persona</li>\n\t\t</ol>\n\t</div>"),ne(de),x(),E(),D(),j(),O(),H(),R(),L(),ae(),M(t.type??"","enPrefix");
