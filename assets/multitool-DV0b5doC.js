import{g as l,r as z,p as t,d as J,J as K,o as r,K as N,w as f,L as Q,j as R,s as W,m as X,z as Y,M as Z,e as x,N as ee,t as ne,a as te,b as y,c as oe}from"./links-DDD3ZfIQ.js";import{h as G,a as ae,i as q,b as A,c as se,d as ie}from"./startup-B9dfFkDF.js";import"./gallery-DCr0w1li.js";import"./glyphgeneratorV2-BFy_Kves.js";import"./Explanation.vue_vue_type_script_setup_true_lang-CuOHgiZh.js";function k(){l.output.regNr.innerText=z(t.region)}function $(){const e=J(),t=l.output.addInfo,n="[["+U()+"]]"+e;t.innerText=n}function P(){const e=t.mainColour,n=t.secColour,a=t.name,o=t.subtype.toLowerCase(),i=t.type.toLowerCase(),s=l.input.appearanceInput;if(!e.trim()&&!n.trim())return;const c=`${a} is ${e.trim()?`${x(e)} ${e.trim()}`:x(i)} ${"starter pistol"===o?o:i} multi-tool${n.trim()?` with ${n} accents`:""}.`;s.value=c,f(s)}function D(){ce(),t.albumInitialised?G():document.addEventListener("albumLoaded",(()=>G()))}function E(){D(),g()}function ce(){const{srLocName:e,planet:n,moon:a,axes:o}=t,i=t.location.toLowerCase(),l=Y(n,a);let s,c;const r=(()=>{const n=t.srLoc;return e||n.includes("Space")?n.toLowerCase():i.includes("Space")?i:l})();i.includes("space")?(s=`fly to the ${i}`,c=`the ${r}`,i!==r&&e?r.includes("space")||(c=`${r} [[${e}]]`):s="take from cabinet"):(c=`${r} [[${e}]]`,s=`fly to ${l} (${o})`,r.toLowerCase().includes("space")?c=`the ${r}`:a&&"moon"===r&&e===a||!a&&"planet"===r&&e===n?s=`fly to ${o}`:e||(c=`${l}`,s=`fly to ${o}`));f(`Save and reload on ${c}, then ${s}.`,"acquirement"),t.actualSrLoc=r}function g(){const e=t.srLocName,n=t.location,a=t.srPlanetImg||"nmsMisc_notAvailable.png",o=t.sysImg||"nmsMisc_notAvailable.png",i=t.cabinetPlanetImg||"nmsMisc_notAvailable.png",s=t.axesImg||"nmsMisc_notAvailable.png",c=["srImgInput","sysImgInput","cabInput","coordsInput"],u=[{},{},{},{}],p=K(),m=(()=>{const a=t.srLoc;return a.includes("Space")||e?a:n.includes("Space")?n:p})(),d="Sentinel Pillar"===n?"Pillar":"Cabinet",f=n.includes("Space")?"":`(${d} ${p} highlighted)`;function y(e,t,n){e.picName=t,e.desc=n}y(u[0],a,`Save/Reload ${m}`),y(u[1],o,`System ${f}`),!n.includes("Space")&&(y(u[2],i,`${d} ${p}`),y(u[3],s,"Coordinates"));const I=[];for(let e=0;e<u.length;e++){const t=u[e],n=t.picName,a=t.desc,o=c[e];if(!n||!a){r(l.input[o],"none");continue}r(l.input[o],"");const i=document.createElement("span");i.style.display="block",i.innerText=`${n}|${a}`,I.push(i.outerHTML),l.output[o+"Label"].innerText=a}l.output.acquirementGallery.innerHTML=I.join("")}function H(){const e=t.type,n=l.input.locInput;e in N?(r(n,"none"),n.value=N[e],f(n)):r(n,""),L(),j(),g()}function le(){const e=t.location,n=l.input.typeInput,a=l.input.subtypeInput;if(!("string"==typeof e&&n instanceof HTMLSelectElement&&a instanceof HTMLSelectElement))return;const o=structuredClone(N);delete o.Royal;const i=Object.fromEntries(Object.entries(o).map((e=>e.reverse())));e in i?(r(n,"none"),r(a,"none"),n.value=i[e],f(n)):r(n,""),L(),j(),g()}function O(){const e=t.location,n=["planetInput","moonInput","axesInput"];for(const t of n){const n=l.input[t],a=e.includes("Space");r(n,a?"none":""),a&&(n.value="",f(n),Q(n))}}function B(){const e=t.srLoc,n=l.input.srInput;e.includes("Space")?(r(n,"none"),n.value="",f(n)):r(n,"")}function L(){const e=t.location,n=l.input.costInput,a="Sentinel Pillar"===e||"Harmonic Camp"===e;r(n,a?"none":""),a&&(n.value="",R(n,"input"))}function j(){const e=t.type,n=l.input.crystalsInput;if(["Royal","Sentinel","Atlantid"].includes(e)){const e=n.closest(".checkboxes").querySelectorAll('input[type="checkbox"]');r(n,"none"),e.forEach((e=>{e.checked=!1,R(e,"change")}))}else r(n,"")}function F(){const e=t.type,n=l.input.subtypeInput,a={Pistol:[["Pistol","Starter Pistol"],["Estandar","Pistola de inicio"]],Rifle:[["Rifle","SMG"],["Estandar (Grande)","SMG (Small)"]],Experimental:[["Rifle","Pistol"],["Rifle (Grande)","Pistola (Pequeña)"]],Alien:[["Rifle","SMG","Pistol"],["Rifle (Grande)","SMG (Mediana)","Pistola (Pequeña)"]]},o=Object.keys(a).includes(e);r(n,o?"":"none"),o?W(n,a[e][0],a[e][1]):n.value="",X(n)}function re(){return"Album"}function ue(){return"Multi-Tool"}function pe(){return`<br>{{Class|${t.class}}} - ${function(){const e=t.subtype;return!e||t.isStarter?"":e+" -"}()} ${t.slots} Slots`}function me(){return(()=>{const e=t.axes,n=t.acquirement.replace("Save and reload","S/r");return e&&!Z(!1)?n.replace(/[()]/g,"").replace(e,`(${e})`):n})()}function U(){const{type:e}=t;return`Royal Space Society Multi-Tool Album - ${e}`}const d={"Discovery Menu":"Menú de descubrimiento","Price Page":"Página de precios","Base Stats":"Estadísticas base","Minor Settlement":"Asentamiento menor","Sentinel Pillar":"Pilar de centinela","Harmonic Camp":"Campamento armónico",Monolith:"Monolito","Tool in Hand":"Herramienta en mano","First Person View":"Vista en primera persona"};function de(){const e=["",d["Discovery Menu"],d["Price Page"],d["Base Stats"],d["Minor Settlement"],d["Sentinel Pillar"],d["Harmonic Camp"],d.Monolith,d["Tool in Hand"],d["First Person View"]],n=["Asentamiento menor","Pilar de centinela","Campamento armónico","Monolito"],a=d[t.location];if(a&&n.includes(a))n.filter((e=>e!==a)).forEach((t=>{const n=e.indexOf(t);e.splice(n,1)}));else for(let t=e.length-1;t>=0;t--)n.includes(e[t])&&e.splice(t,1);t.galleryArray=e}const fe=[{element:"nameInput",func:()=>{ae(),P()}},{element:"typeInput",func:()=>{$(),H(),F(),x(t.type,"enPrefix"),q(),A(),P()}},{element:"subtypeInput",func:()=>{A(),$(),P(),q()}},{element:"researchTeam",func:()=>$()},{element:"locInput",func:function(){E(),O(),L(),le()}},{element:"srlocInput",func:()=>{E(),B()}},{element:["srInput","planetInput","moonInput"],func:()=>E()},{element:"axesInput",func:()=>D()},{element:["slotsInput","classInput"],func:()=>A()},{element:["srImgInput","sysImgInput","cabInput","coordsInput"],func:()=>g()},{element:["srImgUpload","sysImgUpload","cabUpload","coordsUpload"],handler:"change",func:function(){ee(this),g()}},{element:"portalglyphsInput",func:()=>k()},{element:["discoveredInput","discoveredlinkInput"],func:()=>se()},{element:["mainColourInput","secColourInput"],func:()=>P()},{element:"hideAppearanceButton",handler:"click",func:function(){ne("appearance",this)}}];y.albumDescExternal=()=>me(),y.albumOtherExternal=()=>pe(),y.albumItemTypeExternal=()=>ue(),y.albumTypeExternal=()=>re(),y.generateGalleryArray=()=>de(),y.albumLinkGen=()=>U(),oe("galleryExplanationExternal","\nHay un orden preferido de imágenes:\n\t<div class='is-flex is-justify-content-center'>\n\t\t<ol class='has-text-left'>\n\t\t\t<li>Menú de descubrimiento</li>\n\t\t\t<li>Página de precios</li>\n\t\t\t<li>Estadísticas base</li>\n\t\t\t<li>Asentamiento menor/Pilar centinela/Campamento armónico/Monolito</li>\n\t\t\t<li>Multiherramienta en mano</li>\n\t\t\t<li>Vista en primera persona</li>\n\t\t</ol>\n\t</div>"),te(fe),E(),$(),H(),F(),O(),B(),k(),L(),ie(),x(t.type??"","enPrefix");
