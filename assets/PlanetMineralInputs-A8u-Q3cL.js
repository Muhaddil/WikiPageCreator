import{d as F,u as I,C as W,r as k,B as _,c as z,a as b,o as V,f as l,h as u,k as n,b as d,J as y,g as c,F as O,a0 as P,j as T,e as D,_ as v,I as h,y as C,E as N,P as M,p as S,i as j,s as K}from"./main-NAshHr3n.js";import{s as E}from"./index-CVIXNCCH.js";import{S as A,a as B}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-QcBa1nhx.js";import{c as Y,a as q,b as Q,_ as X,d as Z}from"./ActivitySelect.vue_vue_type_script_setup_true_lang-CFLXzv6f.js";import{s as G}from"./index-CJcbame6.js";import{_ as ee,a as le,b as oe,c as te,m as H}from"./floranutSourceInput.vue_vue_type_script_setup_true_lang-DCWdUbUS.js";import{n as ae,_ as ne,a as se,m as L}from"./common-Co9spTuf.js";const ie={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},de=F({__name:"PlanetFaunaInputs",setup(e){const a=I(),o=W();const t=k([]),i=()=>{var e;t.value.length<25?t.value.push({id:t.value.length,name:"",image:"",hemisphere:"",rarity:"",ecosystem:"",activity:"",genus:"",weight:"",height:"",hasWikipage:"",discovered:""}):(e="No puedes agregar más de 25 criaturas.",o.error(e,{position:M.BOTTOM_RIGHT}))};_(t,(()=>{(()=>{const e=t.value.map((e=>{const l="Yes"===e.hasWikipage?`[[${e.name}]]`:e.name;return`|-\n|[[File: ${e.image||"nmsMisc_NotAvailable.png"}|150px]] || ${l} || ${e.rarity} / ${e.ecosystem} / ${e.activity} || [[${e.genus}]] || ${e.height}m || ${e.weight}kg`})).join("\n\n");a.generatedOutputFauna=e})()}),{deep:!0});const s=k([]),m=k(""),r=k([]);_((()=>t.value.map((e=>e.ecosystem))),(e=>{s.value=[...new Set(e.flatMap((e=>Object.keys(Y.ecosystems[e]||{}))))]})),_(m,(e=>{t.value.map((l=>{var a;e&&l.ecosystem&&(r.value=(null==(a=Y.ecosystems[l.ecosystem][e])?void 0:a.produces)||[])}))}));const p=z((()=>s.value.map((e=>({label:e,value:e})))));return(e,a)=>(V(),b("div",null,[l(u(E),{class:"my-4",header:"Fauna:",toggleable:""},{default:n((()=>[l(u(y),{onClick:i},{default:n((()=>a[0]||(a[0]=[c("+ Añadir Fauna")]))),_:1}),a[5]||(a[5]=d("br",null,null,-1)),a[6]||(a[6]=d("br",null,null,-1)),(V(!0),b(O,null,P(t.value,((e,o)=>(V(),b("div",{key:e.id},[l(u(E),{class:"my-4",header:`Criatura: ${e.name}`,toggleable:""},{default:n((()=>[l(v,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,"help-title":"Nombre de la criatura",label:"Nombre de la criatura:",helpImg:"creature/creatureName",tooltip:"Se puede encontrar en el menú de descubrimiento"},{default:n((()=>a[1]||(a[1]=[c("Se puede encontrar en el menú de descubrimiento."),d("br",null,null,-1),c("Introduzca exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o). ")]))),_:2},1032,["modelValue","onUpdate:modelValue"]),l(A,{modelValue:e.image,"onUpdate:modelValue":l=>e.image=l,label:"Nombre del archivo de la criatura:","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:n((()=>[l(B)])),_:2},1032,["modelValue","onUpdate:modelValue"]),l(q,{modelValue:e.hemisphere,"onUpdate:modelValue":l=>e.hemisphere=l},null,8,["modelValue","onUpdate:modelValue"]),l(Q,{modelValue:e.rarity,"onUpdate:modelValue":l=>e.rarity=l},null,8,["modelValue","onUpdate:modelValue"]),l(X,{modelValue:e.ecosystem,"onUpdate:modelValue":l=>e.ecosystem=l},null,8,["modelValue","onUpdate:modelValue"]),l(Z,{modelValue:e.activity,"onUpdate:modelValue":l=>e.activity=l},null,8,["modelValue","onUpdate:modelValue"]),l(h,null,{label:n((()=>[d("div",ie,[a[2]||(a[2]=d("label",null,"Género:",-1)),l(N,{tooltip:"Encontrado en el menú de descubrimiento de criaturas."})])])),input:n((()=>[l(C,{modelValue:e.genus,"onUpdate:modelValue":l=>e.genus=l,options:p.value},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1024),l(v,{modelValue:e.weight,"onUpdate:modelValue":l=>e.weight=l,label:"Peso en KG:",maxlength:"5",placeholder:"1.5",tooltip:"Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'.","help-img":"creature/creatureWeight","help-title":"Peso de la criatura"},null,8,["modelValue","onUpdate:modelValue"]),l(v,{modelValue:e.height,"onUpdate:modelValue":l=>e.height=l,label:"Altura en M:",maxlength:"5",placeholder:"1.5",tooltip:"Encontrado en el escaneo de criaturas. No se necesitan poner 'kg'.","help-img":"creature/creatureHeight","help-title":"Altura de la criatura"},null,8,["modelValue","onUpdate:modelValue"]),l(v,{modelValue:e.discovered,"onUpdate:modelValue":l=>e.discovered=l,label:"Descubridor:"},null,8,["modelValue","onUpdate:modelValue"]),l(h,null,{label:n((()=>a[3]||(a[3]=[d("div",{class:"is-flex is-justify-content-space-between is-align-items-center full-width"},[d("label",{for:"hasWikipage-checkbox"},"¿Tiene página el la wiki?")],-1)]))),input:n((()=>[l(u(G),{modelValue:e.hasWikipage,"onUpdate:modelValue":l=>e.hasWikipage=l,"false-value":"","input-id":"hasWikipage-checkbox","true-value":"Yes",binary:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),t.value.length>=1?(V(),T(u(y),{key:0,onClick:e=>(e=>{t.value.splice(e,1)})(o)},{default:n((()=>a[4]||(a[4]=[c(" Eliminar Criatura ")]))),_:2},1032,["onClick"])):D("",!0)])),_:2},1032,["header"])])))),128))])),_:1})]))}}),_e=S(de,[["__scopeId","data-v-fc1adc69"]]),me={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},re={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},ue=F({__name:"PlanetFloraInputs",setup(e){const a=I(),o=W();const t=k([]),i=()=>{var e;t.value.length<25?t.value.push({id:t.value.length,name:"",image:"",hasWikipage:"",discovered:"",age:"",nutsource:"",notes:"",root:"",elements1:"",elements2:"",elementsall:""}):(e="No puedes agregar más de 25 plantas.",o.error(e,{position:M.BOTTOM_RIGHT}))};j((()=>{t.value.forEach((e=>{e.elements1===e.elements2&&(e.elements2="");const l=[e.elements1,e.elements2].filter(Boolean).map((e=>`[[${e}]]`));e.elementsall=l.join(", ")}))}));return _(t,(()=>{(()=>{const e=t.value.map((e=>{const l="Yes"===e.hasWikipage?`[[${e.name}]]`:e.name;return`|-\n||[[File: ${e.image||"nmsMisc_NotAvailable.png"}|150px]] || ${l} || ${e.age} || ${e.root} || ${e.nutsource} || ${e.notes} || ${e.elementsall} || ${e.discovered}`})).join("\n");a.generatedOutputFlora=e})()}),{deep:!0}),(e,a)=>(V(),b("div",null,[l(u(E),{class:"my-4",header:"Flora:",toggleable:""},{default:n((()=>[l(u(y),{onClick:i},{default:n((()=>a[0]||(a[0]=[c("+ Añadir Flora")]))),_:1}),a[8]||(a[8]=d("br",null,null,-1)),a[9]||(a[9]=d("br",null,null,-1)),(V(!0),b(O,null,P(t.value,((e,o)=>(V(),b("div",{key:e.id},[l(u(E),{class:"my-4",header:`Planta: ${e.name}`,toggleable:""},{default:n((()=>[l(v,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,"help-title":"Nombre de la flora",label:"Nombre de la planta:",helpImg:"flora/floraName",tooltip:"Encontrado en el visor de análisis."},{default:n((()=>a[1]||(a[1]=[c("Encontrado en el visor de análisis."),d("br",null,null,-1),c("Introduzca exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o). ")]))),_:2},1032,["modelValue","onUpdate:modelValue"]),l(A,{modelValue:e.image,"onUpdate:modelValue":l=>e.image=l,label:"Nombre del archivo de la planta:","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:n((()=>[l(B)])),_:2},1032,["modelValue","onUpdate:modelValue"]),l(ee,{modelValue:e.age,"onUpdate:modelValue":l=>e.age=l},null,8,["modelValue","onUpdate:modelValue"]),l(le,{modelValue:e.root,"onUpdate:modelValue":l=>e.root=l},null,8,["modelValue","onUpdate:modelValue"]),l(oe,{modelValue:e.nutsource,"onUpdate:modelValue":l=>e.nutsource=l},null,8,["modelValue","onUpdate:modelValue"]),l(te,{modelValue:e.notes,"onUpdate:modelValue":l=>e.notes=l},null,8,["modelValue","onUpdate:modelValue"]),l(h,null,{label:n((()=>[d("div",me,[a[3]||(a[3]=d("label",null,"Elemento Primario",-1)),l(N,{tooltip:"Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.","help-img":"flora/element0","help-title":"`Elemento Primario`"},{default:n((()=>a[2]||(a[2]=[c(" Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.")]))),_:1})])])),input:n((()=>[l(C,{modelValue:e.elements1,"onUpdate:modelValue":l=>e.elements1=l,options:u(H)},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1024),l(h,null,{label:n((()=>[d("div",re,[a[5]||(a[5]=d("label",null,"Elemento Secundario",-1)),l(N,{tooltip:"Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.","help-img":"flora/element1","help-title":"`Elemento Secundario`"},{default:n((()=>a[4]||(a[4]=[c(" Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.")]))),_:1})])])),input:n((()=>[l(C,{modelValue:e.elements2,"onUpdate:modelValue":l=>e.elements2=l,options:u(H)},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1024),l(v,{modelValue:e.discovered,"onUpdate:modelValue":l=>e.discovered=l,label:"Descubridor:"},null,8,["modelValue","onUpdate:modelValue"]),l(h,null,{label:n((()=>a[6]||(a[6]=[d("div",{class:"is-flex is-justify-content-space-between is-align-items-center full-width"},[d("label",{for:"hasWikipage-checkbox"},"¿Tiene página el la wiki?")],-1)]))),input:n((()=>[l(u(G),{modelValue:e.hasWikipage,"onUpdate:modelValue":l=>e.hasWikipage=l,"false-value":"","input-id":"hasWikipage-checkbox","true-value":"Yes",binary:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),t.value.length>=1?(V(),T(u(y),{key:0,onClick:e=>(e=>{t.value.splice(e,1)})(o)},{default:n((()=>a[7]||(a[7]=[c(" Eliminar Flora ")]))),_:2},1032,["onClick"])):D("",!0)])),_:2},1032,["header"])])))),128))])),_:1})]))}}),ye=S(ue,[["__scopeId","data-v-7df6d5ef"]]),pe={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},ce={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},ge=F({__name:"PlanetMineralInputs",setup(e){const a=I(),{elements:o}=K(a),t=W();j((()=>{o.value[0]===o.value[1]&&(o.value[1]="")}));const i=k([]),s=()=>{var e;i.value.length<25?i.value.push({id:i.value.length,name:"",image:"",hasWikipage:"",discovered:"",notes:"",formation:"",elements1:"",elements2:"",elementsall:"",metalContent:""}):(e="No puedes agregar más de 25 minerales.",t.error(e,{position:M.BOTTOM_RIGHT}))};j((()=>{i.value.forEach((e=>{e.elements1===e.elements2&&(e.elements2="");const l=[e.elements1,e.elements2].filter(Boolean).map((e=>`[[${e}]]`));e.elementsall=l.join(", ")}))})),_((()=>i.value.map((e=>e.metalContent))),(e=>{i.value.forEach(((l,a)=>{const n=e[a];n&&!n.includes("%")&&(l.metalContent=`${n}%`)}))}),{deep:!0});_(i,(()=>{(()=>{const e=i.value.map((e=>{const l="Yes"===e.hasWikipage?`[[${e.name}]]`:e.name;return`|-\n||[[File: ${e.image||"nmsMisc_NotAvailable.png"}|150px]] || ${l} || ${e.metalContent} || ${e.formation} || ${e.notes} || ${e.elementsall} || ${e.discovered}`})).join("\n\n");a.generatedOutputMinerals=e})()}),{deep:!0});const m=z((()=>i.value.some((e=>""!==ae(e.metalContent)))));return(e,a)=>(V(),b("div",null,[l(u(E),{class:"my-4",header:"Minerales:",toggleable:""},{default:n((()=>[l(u(y),{onClick:s},{default:n((()=>a[0]||(a[0]=[c("+ Añadir Mineral")]))),_:1}),a[9]||(a[9]=d("br",null,null,-1)),a[10]||(a[10]=d("br",null,null,-1)),(V(!0),b(O,null,P(i.value,((e,o)=>(V(),b("div",{key:e.id},[l(u(E),{class:"my-4",header:`Mineral: ${e.name}`,toggleable:""},{default:n((()=>[l(v,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,"help-title":"Nombre del mineral",label:"Nombre del mineral:",helpImg:"mineral/mineralName",tooltip:"Encontrado en el visor de análisis."},{default:n((()=>a[1]||(a[1]=[c("Encontrado en el visor de análisis."),d("br",null,null,-1),c("Introduzca exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o). ")]))),_:2},1032,["modelValue","onUpdate:modelValue"]),l(A,{modelValue:e.image,"onUpdate:modelValue":l=>e.image=l,label:"Nombre del archivo de la planta:","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:n((()=>[l(B)])),_:2},1032,["modelValue","onUpdate:modelValue"]),l(v,{modelValue:e.metalContent,"onUpdate:modelValue":l=>e.metalContent=l,label:"Contenido de metales:",tooltip:"Encontrado en el escaneo de minerales.","help-img":"mineral/content","help-title":"Contenido metálico",invalid:m.value,"error-message":"Sólo debe contener números",maxlength:"2"},{default:n((()=>a[2]||(a[2]=[c("Encontrado en el escaneo de minerales.")]))),_:2},1032,["modelValue","onUpdate:modelValue","invalid"]),l(ne,{modelValue:e.formation,"onUpdate:modelValue":l=>e.formation=l},null,8,["modelValue","onUpdate:modelValue"]),l(se,{modelValue:e.notes,"onUpdate:modelValue":l=>e.notes=l},null,8,["modelValue","onUpdate:modelValue"]),l(h,null,{label:n((()=>[d("div",pe,[a[4]||(a[4]=d("label",null,"Elemento Primario",-1)),l(N,{tooltip:"Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.","help-img":"mineral/element0","help-title":"`Elemento Primario`"},{default:n((()=>a[3]||(a[3]=[c(" Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.")]))),_:1})])])),input:n((()=>[l(C,{modelValue:e.elements1,"onUpdate:modelValue":l=>e.elements1=l,options:u(L)},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1024),l(h,null,{label:n((()=>[d("div",ce,[a[6]||(a[6]=d("label",null,"Elemento Secundario",-1)),l(N,{tooltip:"Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.","help-img":"mineral/element1","help-title":"`Elemento Secundario`"},{default:n((()=>a[5]||(a[5]=[c(" Encontrado en el escaneo de flora. Dejar vacío si no está en la lista.")]))),_:1})])])),input:n((()=>[l(C,{modelValue:e.elements2,"onUpdate:modelValue":l=>e.elements2=l,options:u(L)},null,8,["modelValue","onUpdate:modelValue","options"])])),_:2},1024),l(v,{modelValue:e.discovered,"onUpdate:modelValue":l=>e.discovered=l,label:"Descubridor:"},null,8,["modelValue","onUpdate:modelValue"]),l(h,null,{label:n((()=>a[7]||(a[7]=[d("div",{class:"is-flex is-justify-content-space-between is-align-items-center full-width"},[d("label",{for:"hasWikipage-checkbox"},"¿Tiene página el la wiki?")],-1)]))),input:n((()=>[l(u(G),{modelValue:e.hasWikipage,"onUpdate:modelValue":l=>e.hasWikipage=l,"false-value":"","input-id":"hasWikipage-checkbox","true-value":"Yes",binary:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),i.value.length>=1?(V(),T(u(y),{key:0,onClick:e=>(e=>{i.value.splice(e,1)})(o)},{default:n((()=>a[8]||(a[8]=[c(" Eliminar Flora ")]))),_:2},1032,["onClick"])):D("",!0)])),_:2},1032,["header"])])))),128))])),_:1})]))}}),Ee=S(ge,[["__scopeId","data-v-961b87cb"]]);export{_e as P,ye as a,Ee as b};
