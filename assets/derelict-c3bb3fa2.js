import{w as i,f as u,n as h,o as T,u as x,b as E,g as s,q as m,s as k,v as d,x as I,l as v}from"./links-003eaada.js";import{e as A,f as p}from"./albumactions-dfd9635c.js";import{c as L}from"./startup-b7fc9dec.js";import"./gallery-79a9d9c3.js";import"./Explanation.vue_vue_type_script_setup_true_lang-cd5cd368.js";const g='| [[File:<output name="image"></output>|150px]] || [[<output name="system"></output>]] || <output name="rooms"></output> || <output name="enemies"></output> || {{gl/Small|<output name="portalglyphs"></output>}} || <output name="discoverer"></output><br>\n|-';function y(){const e=document.getElementsByName("enemiesInput"),t=[];for(const n of Array.from(e))n.checked&&t.push(n.value);i(t.join(", "),"enemies")}function B(){const e=h.link,{class:t}=u;return"album"===e?`${u.name}`:`Eisvana Starship Album - Derelict Freighter#${t}-Class`}function C(e){const t=e.value,n=t.substring(4),a=T(t).slice(0,-5);i(n,"regionglyphs"),i(a,"coordinates")}function b(){const{discovered:e,discoveredlink:t}=u;i(e||`{{Profile|${t}}}`,"discoverer")}const w=[{element:"portalglyphsInput",func:function(){C(this)}},{element:"enemiesInput",func:()=>y()},{element:["discoveredInput","discoveredlinkInput"],func:()=>b()}],D={input:{enemies:"enemies",classTableActions:"classTableActions",galaxyTableActions:"galaxyTableActions"},output:{portalglyphsPreview:"portalglyphsPreview",galaxyTable:"galaxyTable",galaxyTableEntry:"galaxyTableEntry",indexEntry:"indexEntry",albumText:"albumText"}},F=[{element:"copyButton",handler:"click",func:function(){L(this,"classTableEntry")}},{element:"openAlbumButton",handler:"click",func:function(){A(this)}}];v.albumLinkGen=()=>B(),x(D),E(w),s.output.galaxyTable.innerHTML=g,s.output.albumText.innerHTML=g;const f="galaxyTableActionsNote",H=`<p id="${f}">If the page already exists, just add an entry for the derelict freighter from your system</p>`;p.body.insertAdjacentHTML("afterbegin",H);const G=p.body.innerHTML;m(p,s.input.galaxyTableActions,"afterbegin");const l=k(G,{},F),r=l.getElementById(f);r&&(r.id="indexTableActionsNote",r.innerText="If the page doesn't exist yet, add an entry to the catalogue as well");const o=l.getElementById("albumBtn");o&&(o.id="tableBtn",o.dataset.link="classTableEntry",o.innerText="Copy Index Entry Code");const a=l.getElementById("albumLink");a&&(a.id="pageLink",a.dataset.link="classTableEntry",a.innerText="Open Index Page"),m(l,s.input.classTableActions,"afterbegin");const M=s.input.fileInput,j=s.input.portalglyphsInput;d(M,"input"),d(j,"input"),y(),I(),b();