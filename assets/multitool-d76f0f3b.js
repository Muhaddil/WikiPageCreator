import{g as i,i as V,f as n,j as z,an as J,A as r,ao as A,w as f,e as K,v as q,y as Q,z as W,p as X,ap as Y,k as E,aq as Z,t as ee,b as te,l as d,m as ne}from"./links-d1733aaa.js";import{h as N,a as oe,i as k,b as C,c as se,d as ae}from"./startup-3b040c56.js";import"./gallery-ce50fe90.js";import"./Explanation.vue_vue_type_script_setup_true_lang-143f978d.js";function D(){i.output.regNr.innerText=V(n.region)}function x(){const n=z(),e=i.output.addInfo,t="[["+F()+"]]"+n;e.innerText=t}function $(){const e=n.mainColour,t=n.secColour,l=n.name,a=n.subtype.toLowerCase(),o=n.type.toLowerCase(),s=i.input.appearanceInput;if(!e.trim()&&!t.trim())return;const c=e.trim()?`${E(e)} ${e.trim()}`:E(o),r=t.trim()?` with ${t} accents`:"",u=`${l} is ${c} ${"starter pistol"===a?a:o} multi-tool${r}.`;s.value=u,f(s)}function R(){ce(),n.albumInitialised?N():document.addEventListener("albumLoaded",(()=>N()))}function L(){R(),b()}function ce(){const{srLocName:e,planet:t,moon:i,axes:l}=n,a=n.location.toLowerCase(),o=X(t,i);let s,c;const r=(()=>{const t=n.srLoc;return e||t.includes("Space")?t.toLowerCase():a.includes("Space")?a:o})();a.includes("space")?(s=`fly to the ${a}`,c=`the ${r}`,a!==r&&e?r.includes("space")||(c=`${r} [[${e}]]`):s="take from cabinet"):(c=`${r} [[${e}]]`,s=`fly to ${o} (${l})`,r.toLowerCase().includes("space")?c=`the ${r}`:i&&"moon"===r&&e===i||!i&&"planet"===r&&e===t?s=`fly to ${l}`:e||(c=`${o}`,s=`fly to ${l}`));f(`Save and reload on ${c}, then ${s}.`,"acquirement"),n.actualSrLoc=r}function b(){const e=n.srLocName,t=n.location,l=n.srPlanetImg||"nmsMisc_notAvailable.png",a=n.sysImg||"nmsMisc_notAvailable.png",o=n.cabinetPlanetImg||"nmsMisc_notAvailable.png",s=n.axesImg||"nmsMisc_notAvailable.png",c=["srImgInput","sysImgInput","cabInput","coordsInput"],u=[{},{},{},{}],p=J(),m=(()=>{const i=n.srLoc;return i.includes("Space")||e?i:t.includes("Space")?t:p})(),f="Sentinel Pillar"===t?"Pillar":"Cabinet",d=t.includes("Space")?"":`(${f} ${p} highlighted)`;function I(n,e,t){n.picName=e,n.desc=t}I(u[0],l,`Save/Reload ${m}`),I(u[1],a,`System ${d}`),!t.includes("Space")&&(I(u[2],o,`${f} ${p}`),I(u[3],s,"Coordinates"));const y=[];for(let n=0;n<u.length;n++){const e=u[n],t=e.picName,l=e.desc,a=c[n];if(!t||!l){r(i.input[a],"none");continue}r(i.input[a],"");const o=document.createElement("span");o.style.display="block",o.innerText=`${t}|${l}`,y.push(o.outerHTML),i.output[a+"Label"].innerText=l}i.output.acquirementGallery.innerHTML=y.join("")}function G(){const e=n.type,t=i.input.locInput;e in A?(r(t,"none"),t.value=A[e],f(t)):r(t,""),M(),B(),b()}function le(){const e=n.location,t=i.input.typeInput,l=i.input.subtypeInput;if(!("string"==typeof e&&t instanceof HTMLSelectElement&&l instanceof HTMLSelectElement))return;const a=structuredClone(A);delete a.Royal;const o=Object.fromEntries(Object.entries(a).map((n=>n.reverse())));e in o?(r(t,"none"),r(l,"none"),t.value=o[e],f(t)):r(t,""),M(),B(),b()}function H(){const e=n.location,t=["planetInput","moonInput","axesInput"];for(const n of t){const t=i.input[n],l=e.includes("Space");r(t,l?"none":""),l&&(t.value="",f(t),K(t))}}function O(){const e=n.srLoc,t=i.input.srInput;e.includes("Space")?(r(t,"none"),t.value="",f(t)):r(t,"")}function M(){const e=n.location,t=i.input.costInput,l="Sentinel Pillar"===e||"Harmonic Camp"===e;r(t,l?"none":""),l&&(t.value="",q(t,"input"))}function B(){const e=n.type,t=i.input.crystalsInput;if(["Royal","Sentinel","Atlantid"].includes(e)){const n=t.closest(".checkboxes").querySelectorAll('input[type="checkbox"]');r(t,"none"),n.forEach((n=>{n.checked=!1,q(n,"change")}))}else r(t,"")}function j(){const e=n.type,t=i.input.subtypeInput,l={Pistol:[["Pistol","Starter Pistol"],["Standard","Starter Pistol"]],Rifle:[["Rifle","SMG"],["Standard (Large)","SMG (Small)"]],Experimental:[["Rifle","Pistol"],["Rifle (Large)","Pistol (Small)"]],Alien:[["Rifle","SMG","Pistol"],["Rifle (Large)","SMG (Medium)","Pistol (Small)"]]},a=Object.keys(l).includes(e);r(t,a?"":"none"),a?Q(t,l[e][0],l[e][1]):t.value="",W(t)}function ie(){return"Album"}function re(){return"Multi-Tool"}function ue(){return`<br>{{Class|${n.class}}} - ${function(){const e=n.subtype;return!e||n.isStarter?"":e+" -"}()} ${n.slots} Slots`}function pe(){return(()=>{const e=n.axes,t=n.acquirement.replace("Save and reload","S/r");return e&&!Y(!1)?t.replace(/[()]/g,"").replace(e,`(${e})`):t})()}function F(){const{type:e}=n;return`Eisvana Multi-Tool Album - ${e}`}function me(){const e=["","Discovery Menu","Price Page","Base Stats","Minor Settlement","Sentinel Pillar","Harmonic Camp","Monolith","Tool in Hand","First Person View"],t=n.location,i=["Minor Settlement","Sentinel Pillar","Harmonic Camp","Monolith"];if(i.includes(t))i.filter((n=>n!==t)).forEach((n=>{const t=e.indexOf(n);e.splice(t,1)}));else for(let n=e.length-1;n>=0;n--)i.includes(e[n])&&e.splice(n,1);n.galleryArray=e}const fe=[{element:"nameInput",func:()=>{oe(),$()}},{element:"typeInput",func:()=>{x(),G(),j(),E(n.type,"enPrefix"),k(),C(),$()}},{element:"subtypeInput",func:()=>{C(),x(),$(),k()}},{element:"researchTeam",func:()=>x()},{element:"locInput",func:function(){L(),H(),M(),le()}},{element:"srlocInput",func:()=>{L(),O()}},{element:["srInput","planetInput","moonInput"],func:()=>L()},{element:"axesInput",func:()=>R()},{element:["slotsInput","classInput"],func:()=>C()},{element:["srImgInput","sysImgInput","cabInput","coordsInput"],func:()=>b()},{element:["srImgUpload","sysImgUpload","cabUpload","coordsUpload"],handler:"change",func:function(){Z(this),b()}},{element:"portalglyphsInput",func:()=>D()},{element:["discoveredInput","discoveredlinkInput"],func:()=>se()},{element:["mainColourInput","secColourInput"],func:()=>$()},{element:"hideAppearanceButton",handler:"click",func:function(){ee("appearance",this)}}];d.albumDescExternal=()=>pe(),d.albumOtherExternal=()=>ue(),d.albumItemTypeExternal=()=>re(),d.albumTypeExternal=()=>ie(),d.generateGalleryArray=()=>me(),d.albumLinkGen=()=>F(),ne("galleryExplanationExternal","\n\tThere is a preferred order of pictures:\n\t<div class='is-flex is-justify-content-center'>\n\t\t<ol class='has-text-left'>\n\t\t\t<li>Discovery Menu</li>\n\t\t\t<li>Price Page</li>\n\t\t\t<li>Base Stats</li>\n\t\t\t<li>Minor Settlement/Sentinel Pillar/Harmonic Camp/Monolith</li>\n\t\t\t<li>Tool in Hand</li>\n\t\t\t<li>First Person View</li>\n\t\t</ol>\n\t</div>"),te(fe),L(),x(),G(),j(),H(),O(),D(),M(),ae(),E(n.type??"","enPrefix");