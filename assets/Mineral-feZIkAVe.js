import{_ as Y}from"./PageCreator.vue_vue_type_script_setup_true_lang-C-r2xLa5.js";import{d as G,u as q,s as H,c as E,i as Z,B as _,a as D,o as V,b as l,e as S,f as i,g as f,t,h as e,k as r,F as W,x as c,j as F,I as h,y as ee,E as le,l as u,_ as p,G as ne}from"./main-B5J7UeQh.js";import{c as ae,_ as oe,a as te,S as ie,b as ue}from"./FileUploadNotice.vue_vue_type_script_setup_true_lang-CF0a6kFR.js";import{_ as z}from"./WikiTemplate.vue_vue_type_script_setup_true_lang-C1iKzIDl.js";import{T as de}from"./TextareaInput-D5G4mDsp.js";import{_ as se}from"./DateSelect.vue_vue_type_script_setup_true_lang-CcQVWqGs.js";import{m as re,n as K,_ as me,a as pe}from"./common-E6S2d5V_.js";import"./debounce-B7UkYTDg.js";const ve={key:0},be={key:0},fe={key:1},Ve={key:2},ge=G({__name:"MineralOutput",setup(a){const n=q(),{name:o,discovered:u,discoveredlink:d,image:s,glyphs:m,system:p,planet:v,moon:c,mode:b,researchteam2:y,orgName:g,appearance:h,elements:x,discDate:U,polymorphic:N,metalContent:j,formation:k,docBy:C,regionData:I,release:F,notes:G,docBySentence:M}=H(n),w=E((()=>{const e=parseInt(j.value);if(!isNaN(e))return e+"%"}));Z((()=>{x.value[0]===x.value[1]&&(x.value[1]="")})),_(d,(e=>{e&&(u.value="")}));const A=E((()=>x.value.filter(Boolean)));return(a,n)=>(V(),D(W,null,[l("div",null,[n[0]||(n[0]=l("span",null,"{{Version|",-1)),f(t(e(F)),1),n[1]||(n[1]=l("span",null,"}}",-1))]),n[3]||(n[3]=l("div",null,[l("span",null,"{{Royal Space Society}}")],-1)),n[4]||(n[4]=l("div",null,"{{Mineral infobox",-1)),l("div",null,"| name = "+t(e(o)),1),l("div",null,"| image = "+t(e(s)||"nmsMisc_NotAvailable.png"),1),l("div",null,"| galaxy = "+t(e(I).galaxy),1),l("div",null,"| region = "+t(e(I).region),1),l("div",null,"| system = "+t(e(p)),1),l("div",null,"| planet = "+t(e(v)),1),l("div",null,"| moon = "+t(e(c)),1),l("div",null,"| content = "+t(w.value),1),l("div",null,"| formation = "+t(e(k)),1),l("div",null,"| notes = "+t(e(G)),1),l("div",null,"| element_primary = "+t(e(x)[0]),1),l("div",null,"| element_secondary = "+t(e(x)[1]),1),l("div",null,"| polymorphic = "+t(e(N)),1),l("div",null,"| civilized = "+t(e(ae)),1),l("div",null,"| discoveredlink = "+t(e(d)),1),l("div",null,"| discovered = "+t(e(u)),1),l("div",null,"| discovered_on = "+t(e(U)),1),l("div",null,"| mode = "+t(e(b)),1),l("div",null,"| researchteam = "+t(e(y)),1),l("div",null,"| release = "+t(e(F)),1),n[5]||(n[5]=l("div",null,"}}",-1)),l("div",null,"'''"+t(e(o))+"''' is a variety of mineral.",1),n[6]||(n[6]=l("br",null,null,-1)),n[7]||(n[7]=l("div",null,"==Summary==",-1)),l("div",null,"'''"+t(e(o))+"''' is a type of [[mineral]]. "+t(e(h)),1),n[8]||(n[8]=l("br",null,null,-1)),n[9]||(n[9]=l("div",null,"==Alias Names==",-1)),e(g)?(V(),D("div",ve,[i(z,{"template-name":"aliasc"},{default:r((()=>[f("text=Original|name="+t(e(g)),1)])),_:1})])):S("",!0),l("div",null,[i(z,{"template-name":"aliasc"},{default:r((()=>[f("text=Current|name="+t(e(o)),1)])),_:1})]),n[10]||(n[10]=l("br",null,null,-1)),n[11]||(n[11]=l("div",null,"==Discovery Menu==",-1)),l("div",null,"* Metal Content: "+t(w.value),1),l("div",null,"* Formation Process: "+t(e(k)),1),l("div",null,"* Notes: "+t(e(G)),1),n[12]||(n[12]=l("br",null,null,-1)),n[13]||(n[13]=l("div",null,"==Location==",-1)),l("div",null,[n[2]||(n[2]=f(" It can be found on the ")),e(c)?(V(),D("span",be,"[[moon]] [["+t(e(c))+"]] of the",1)):S("",!0),f(" [[planet]] [["+t(e(v))+"]] in the [["+t(e(p))+"]] [[star system]]. ",1)]),l("div",null,[i(z,{"template-name":"CoordGlyphConvert"},{default:r((()=>[f(t(e(m)),1)])),_:1})]),n[14]||(n[14]=l("br",null,null,-1)),n[15]||(n[15]=l("div",null,"==Resources==",-1)),A.value.length?(V(),D("div",fe," This mineral provides the "+t(A.value.length>1?"resources":"resource")+" "+t(A.value.map((e=>`[[${e}]]`)).join(" and "))+" when mined. ",1)):S("",!0),n[16]||(n[16]=l("br",null,null,-1)),n[17]||(n[17]=l("div",null,"==Additional Information==",-1)),e(C)&&e(C)!==e(d)&&e(C)!==e(u)?(V(),D("div",Ve,"Documented by "+t(e(M)),1)):S("",!0),n[18]||(n[18]=l("br",null,null,-1)),n[19]||(n[19]=l("div",null,"==Gallery==",-1)),i(oe)],64))}}),ye={class:"is-flex is-justify-content-space-between is-align-items-center full-width"},Ne=["id"],Q=G({__name:"ResourceInput",props:{resetEvent:{},label:{},index:{}},setup(a){const n=q(),{elements:o}=H(n),u=c("resourcesMineral");return(a,n)=>(V(),F(h,null,{label:r((()=>[l("div",ye,[l("label",{id:e(u)},t(a.label),9,Ne),i(le,{tooltip:"Encontrado en el escaneo de mineral. Dejar vacío si no está en la lista.","help-img":`mineral/element${a.index}`,"help-title":`${a.label}`},{default:r((()=>n[1]||(n[1]=[f(" Encontrado en el escaneo de mineral. Dejar vacío si no está en la lista.")]))),_:1},8,["help-img","help-title"])])])),input:r((()=>[i(ee,{modelValue:e(o)[a.index],"onUpdate:modelValue":n[0]||(n[0]=l=>e(o)[a.index]=l),"aria-labelledby":e(u),options:e(re),"reset-event":a.resetEvent},null,8,["modelValue","aria-labelledby","options","reset-event"])])),_:1}))}}),xe=G({__name:"MineralInput",setup(l){const a=q(),{name:n,discovered:o,discoveredlink:t,image:d,glyphs:s,system:m,planet:v,moon:c,researchteam2:b,orgName:_,appearance:y,notes:g,discDate:h,polymorphic:x,metalContent:U,formation:N,docBy:j}=H(a),k=E((()=>""!==K(U.value))),C=E((()=>""!==K(x.value))),I=E((()=>!o.value)),G=E((()=>!t.value));return(l,a)=>(V(),D(W,null,[i(p,{modelValue:e(n),"onUpdate:modelValue":a[0]||(a[0]=e=>u(n)?n.value=e:null),"help-img":"mineral/mineralName","help-title":"Nombre del Mineral",label:"Nombre del Mineral:",tooltip:"Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o)."},{default:r((()=>a[17]||(a[17]=[f(" Introduce exactamente como se ve en el juego. Cuidado con el 0 (cero) y la O (o). ")]))),_:1},8,["modelValue"]),i(ie,{modelValue:e(d),"onUpdate:modelValue":a[1]||(a[1]=e=>u(d)?d.value=e:null),label:"Imagen principal","help-title":"Subida de Archivo",tooltip:"La imagen no se subirá a la wiki. Esto es solo para autocompletar el nombre de la imagen."},{default:r((()=>[i(te)])),_:1},8,["modelValue"]),i(p,{modelValue:e(_),"onUpdate:modelValue":a[2]||(a[2]=e=>u(_)?_.value=e:null),label:"Nombre original antes de registrar (si está disponible):"},null,8,["modelValue"]),i(p,{modelValue:e(m),"onUpdate:modelValue":a[3]||(a[3]=e=>u(m)?m.value=e:null),label:"Nombre del sistema:"},null,8,["modelValue"]),i(p,{modelValue:e(v),"onUpdate:modelValue":a[4]||(a[4]=e=>u(v)?v.value=e:null),label:"Nombre del planeta:",tooltip:"Nombre del planeta O el planeta alrededor del cual orbita la luna donde se encuentra la criatura."},null,8,["modelValue"]),i(p,{modelValue:e(c),"onUpdate:modelValue":a[5]||(a[5]=e=>u(c)?c.value=e:null),label:"Nombre de la luna (si la planta está en la luna):",tooltip:"Si la criatura está ubicada en una luna. Déjelo en blanco si la planta está en un planeta."},null,8,["modelValue"]),i(ne,{modelValue:e(s),"onUpdate:modelValue":a[6]||(a[6]=e=>u(s)?s.value=e:null)},null,8,["modelValue"]),i(p,{modelValue:e(U),"onUpdate:modelValue":a[7]||(a[7]=e=>u(U)?U.value=e:null),label:"Contenido de metales:",tooltip:"Encontrado en el escaneo de minerales.","help-img":"mineral/content","help-title":"Contenido metálico",invalid:k.value,"error-message":"Sólo debe contener números",maxlength:"2"},{default:r((()=>a[18]||(a[18]=[f("Encontrado en el escaneo de minerales.")]))),_:1},8,["modelValue","invalid"]),i(me,{modelValue:e(N),"onUpdate:modelValue":a[8]||(a[8]=e=>u(N)?N.value=e:null)},null,8,["modelValue"]),i(pe,{modelValue:e(g),"onUpdate:modelValue":a[9]||(a[9]=e=>u(g)?g.value=e:null)},null,8,["modelValue"]),i(p,{modelValue:e(x),"onUpdate:modelValue":a[10]||(a[10]=e=>u(x)?x.value=e:null),label:"Polimórfico (número de instancias):",maxlength:"2",invalid:C.value,"error-message":"Sólo debe contener números","help-title":"Polimorfismo",tooltip:"Cuántos modelos diferentes de este mineral se descubrieron."},{default:r((()=>a[19]||(a[19]=[f('A veces, varios modelos de minerales tienen el mismo nombre. Esto se llama "polimorfismo". Introduzca el número de cuantos modelos minerales diferentes tenían este nombre. ')]))),_:1},8,["modelValue","invalid"]),i(Q,{label:"Elemento Primario",index:0}),i(Q,{label:"Elemento Secundario",index:1}),i(se,{modelValue:e(h),"onUpdate:modelValue":a[11]||(a[11]=e=>u(h)?h.value=e:null),label:"Fecha del descubrimiento"},null,8,["modelValue"]),I.value?(V(),F(p,{key:0,modelValue:e(t),"onUpdate:modelValue":a[12]||(a[12]=e=>u(t)?t.value=e:null),label:"Nombre en la wiki del descubridor:"},null,8,["modelValue"])):S("",!0),G.value?(V(),F(p,{key:1,modelValue:e(o),"onUpdate:modelValue":a[13]||(a[13]=e=>u(o)?o.value=e:null),label:"Alias del descubridor si no tiene wiki:"},null,8,["modelValue"])):S("",!0),i(p,{modelValue:e(j),"onUpdate:modelValue":a[14]||(a[14]=e=>u(j)?j.value=e:null),label:"Nombre del documentador si no es el descubridor:"},null,8,["modelValue"]),i(p,{modelValue:e(b),"onUpdate:modelValue":a[15]||(a[15]=e=>u(b)?b.value=e:null),label:"Departamento: (Opcional)"},null,8,["modelValue"]),i(de,{modelValue:e(y),"onUpdate:modelValue":a[16]||(a[16]=e=>u(y)?y.value=e:null),label:"Apariencia:"},null,8,["modelValue"]),i(ue)],64))}}),we=G({__name:"Mineral",setup:e=>(e,l)=>(V(),F(Y,null,{input:r((()=>[i(xe)])),output:r((()=>[i(ge)])),_:1}))});export{we as default};
