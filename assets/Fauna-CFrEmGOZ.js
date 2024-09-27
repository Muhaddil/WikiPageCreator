const __vite__mapDeps=(e,a=__vite__mapDeps,n=a.f||(a.f=["assets/gallery-DcHFXztO.js","assets/runtime-dom.esm-bundler-D7aUqjIY.js","assets/links-DvbpPHwL.js","assets/links-BCT4BkVa.css","assets/Explanation.vue_vue_type_script_setup_true_lang-CDMDNdc8.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/gallery-CqhdxE9m.css"]))=>e.map((e=>n[e]));import{u as ke,_ as Ie,a as Ce}from"./main-Da-AT7xu.js";import{m as S,n as le,p as we}from"./runtime-dom.esm-bundler-D7aUqjIY.js";import{ar as O,bh as v,ae as X,c3 as a,ah as n,bH as r,an as o,ao as t,cL as Q,cM as w,c5 as V,aT as d,ag as E,Z,br as ae,bQ as l,H as Oe,G as Me,cN as Pe,bp as U,b9 as xe,c as ie,b$ as Re,bt as re,af as ne,d7 as W}from"./links-DvbpPHwL.js";import{_ as I,a as N,w as q,b as y,c as $e,d as Ge,S as Te,e as Fe,f as He,g as Be,I as Le,h as je,O as ze}from"./index-BhYhAxdR.js";import{_ as f}from"./Explanation.vue_vue_type_script_setup_true_lang-CDMDNdc8.js";import{f as We,a as qe,b as Xe,c as Qe}from"./floraDatalists5-BvkhBkRk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Ze={Aquarius:"Aquarius",WorldsOne:"Mundos Parte 1",Adrift:"Adrift",Orbital:"Orbital",Omega:"Omega",Echoes:"Echoes",Singularity:"Singularidad",Interceptor:"Interceptor",Fractal:"Fractal",Waypoint:"Waypoint",Endurance:"Endurance",Outlaws:"Outlaws",SentinelUp:"Sentinel",Frontiers:"Frontiers",Prisms:"Prisms",Expeditions:"Expediciones",Companions:"Compañeros",NextGen:"Nueva Generación",Origins:"Origins",Desolation:"Desolation",Crossplay:"Crossplay",ExoMech:"ExoMech","Living Ship":"Living Ship",Synthesis:"Sintesis",Beyond:"Mas Alla",Visions:"Visiones",Abyss:"Abismo",NEXT:"NEXT","Atlas Rises":"Atlas Rises",Pathfinder:"Pathfinder",Foundation:"Fundación",Release:"Lanzamiento"},ce=O({__name:"FaunaInfobox",props:{creatureName:{},hub:{},galaxy:{},regions:{},image:{},systemName:{},planetName:{},coordinates:{},moonName:{},glyphs:{},hemisphere:{},rarity:{},ecosystem:{},activity:{},gender:{},gender2:{},notes:{},behaviours:{},diet:{},weight:{},height:{},genus:{},produces:{},discoveredlinkName:{},discoveredName:{},discDate:{},mode:{},researchteam:{},release:{}},setup:e=>(e,l)=>(v(),X(I,{"is-single-line":!1,"template-name":"Creature infobox"},{default:a((()=>[n("div",null,"| name = "+r(e.creatureName),1),n("div",null,"| image = "+r(e.image||"nmsMisc_NotAvailable.png"),1),n("div",null,"| galaxy = "+r(e.galaxy),1),n("div",null,"| region = "+r(e.regions),1),n("div",null,"| system = "+r(e.systemName),1),n("div",null,"| planet = "+r(e.planetName),1),n("div",null,"| moon = "+r(e.moonName),1),n("div",null,[l[0]||(l[0]=o("| coordinates = ")),t(I,{"template-name":"Glyphs2Coords"},{default:a((()=>[o(r(e.glyphs),1)])),_:1})]),n("div",null,"| hemisphere = "+r(e.hemisphere),1),n("div",null,"| rarity = "+r(e.rarity),1),n("div",null,"| ecosystem = "+r(e.ecosystem),1),n("div",null,"| activity = "+r(e.activity),1),n("div",null,"| gender = "+r(e.gender)+" "+r(e.gender2),1),n("div",null,"| behaviour = "+r(e.behaviours),1),n("div",null,"| diet = "+r(e.diet),1),n("div",null,"| weight = "+r(e.weight),1),n("div",null,"| height = "+r(e.height),1),n("div",null,"| notes = "+r(e.notes),1),n("div",null,"| produces = "+r(e.produces),1),n("div",null,"| genus = "+r(e.genus),1),n("div",null,"| civilized = "+r(e.hub),1),n("div",null,"| discovered = "+r(e.discoveredName),1),n("div",null,"| discoveredlink = "+r(e.discoveredlinkName),1),n("div",null,"| mode = "+r(e.mode),1),n("div",null,"| researchteam = "+r(e.researchteam),1),n("div",null,"| release = "+r(e.release),1)])),_:1}))}),Je=["value"],Ke=O({__name:"ReleaseInput",setup(e){const o=Q(),{release:t}=w(o);return(e,o)=>(v(),X(N,null,{label:a((()=>o[1]||(o[1]=[n("label",null,"Version:",-1)]))),input:a((()=>[V(n("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>d(t)?t.value=e:null)},[(v(!0),E(Z,null,ae(l(Ze),((e,a)=>(v(),E("option",{value:a},r(e),9,Je)))),256))],512),[[S,l(t)]])])),_:1}))}}),Ye={id:"floraNotesDatalist"},he=["value"],_e=O({__name:"creatureBehavioursInput",setup(e){const i=Q(),{behaviour:u}=w(i);return(e,i)=>(v(),X(N,null,{label:a((()=>[i[4]||(i[4]=n("div",{class:"label-combo"},[n("label",null,"Comportamiento:")],-1)),t(f,{img:"creature/creatureBehaviour"},{heading:a((()=>i[1]||(i[1]=[o("Comportamiento")]))),content:a((()=>i[2]||(i[2]=[o(" Encontrado en el escaneo de criaturas. ")]))),default:a((()=>[i[3]||(i[3]=o(" Encontrado en el escaneo de criaturas. "))])),_:1})])),input:a((()=>[V(n("input",{list:"floraNotesDatalist","onUpdate:modelValue":i[0]||(i[0]=e=>d(u)?u.value=e:null),type:"text"},null,512),[[le,l(u)]]),n("datalist",Ye,[(v(!0),E(Z,null,ae(l(Oe),((e,a)=>(v(),E("option",{value:a},r(e),9,he)))),256))])])),_:1}))}}),en={id:"creatureNotesDatalist"},nn=["value"],ln=O({__name:"creatureNotesInput",setup(e){const i=Q(),{notes:u}=w(i);return(e,i)=>(v(),X(N,null,{label:a((()=>[i[4]||(i[4]=n("div",{class:"label-combo"},[n("label",null,"Notas:")],-1)),t(f,{img:"creature/creatureNotes"},{heading:a((()=>i[1]||(i[1]=[o("Notas")]))),content:a((()=>i[2]||(i[2]=[o(" Encontrado en el escaneo de criaturas. Puede diferir del menú de descubrimiento. ")]))),default:a((()=>[i[3]||(i[3]=o(" Encontrado en el escaneo de criaturas. "))])),_:1})])),input:a((()=>[V(n("input",{list:"creatureNotesDatalist","onUpdate:modelValue":i[0]||(i[0]=e=>d(u)?u.value=e:null),type:"text"},null,512),[[le,l(u)]]),n("datalist",en,[(v(!0),E(Z,null,ae(l(Me),((e,a)=>(v(),E("option",{value:a},r(e),9,nn)))),256))])])),_:1}))}}),an={key:0},on={key:0},tn={key:1},gn=O({__name:"Fauna",setup(e){const i=Pe(),{fullArticleElement:u}=w(i),s=ke(),c=U(null);xe((()=>{u.value=c.value,ie("galleryArray",["","Scanner view","Discovery Menu"]),ie("galleryExplanationExternal","\n    Hay un orden preferido de imágenes de la galería:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Vista de escáner</li>\n\t\t\t<li>Menú de descubrimiento</li>\n\t\t</ol>\n \t</div>"),Ie((()=>import("./gallery-DcHFXztO.js").then((e=>e._))),__vite__mapDeps([0,1,2,3,4,5,6]))}));const m=Q(),{release:p,name:g,galaxy:b,hub:h,orgName:_,image:x,discovered:A,discoveredlink:D,system:k,planet:O,moon:C,glyphs:j,hemisphere:M,activity:P,rarity:R,type:G,behaviour:H,age:F,gender:T,gender2:z,roots:B,region:L,nutrients:X,notes:Y,elements:K,polymorphic:$,discDate:J,docBy:ee,researchteam:ae,appearance:oe,ecosystem:te,sanitisedStrings:ue,docBySentence:se}=w(m),de=U(""),me=U(""),pe=U(""),ve=U("");q(F,(()=>de.value=W(F.value,Object.keys(We))),{debounce:500}),q(B,(()=>me.value=W(B.value,Object.keys(qe))),{debounce:500}),q(X,(()=>pe.value=W(X.value,Object.keys(Xe))),{debounce:500}),q(Y,(()=>ve.value=W(Y.value,Object.keys(Qe))),{debounce:500}),Re((()=>{K.value[0]===K.value[1]&&(K.value[1]="")}));const ge=U(""),be=U(!1);function ye(){const{isValidData:e,message:a}=Ce();ge.value=a.value,be.value=!e.value}return(e,i)=>{const u=re("creatureDietsInput"),m=re("creatureProducesInput");return v(),E(Z,null,[t(Le,null,{default:a((()=>[n("form",{class:"table",onSubmit:i[20]||(i[20]=we((()=>{}),["prevent"]))},[t(Ke),t(y,{label:"Nombre de la criatura:",identifier:"nameInput",modelValue:l(g),"onUpdate:modelValue":i[0]||(i[0]=e=>d(g)?g.value=e:null),img:"creature/creatureName"},{heading:a((()=>i[24]||(i[24]=[o("Nombre de la Planta")]))),content:a((()=>i[25]||(i[25]=[o("Introduzca exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o).")]))),default:a((()=>[i[26]||(i[26]=o(" Introduzca exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o). "))])),_:1},8,["modelValue"]),t(y,{label:"Nombre original antes de registrar (si está disponible):",identifier:"orgNameInput",modelValue:l(_),"onUpdate:modelValue":i[1]||(i[1]=e=>d(_)?_.value=e:null)},null,8,["modelValue"]),t(y,{label:"Nombre de la Galaxia:",identifier:"galaxyInput",modelValue:l(b),"onUpdate:modelValue":i[2]||(i[2]=e=>d(b)?b.value=e:null)},null,8,["modelValue"]),t(y,{label:"Nombre de la region:",identifier:"regionInput",modelValue:l(L),"onUpdate:modelValue":i[3]||(i[3]=e=>d(L)?L.value=e:null)},null,8,["modelValue"]),t($e),t(y,{label:"Nombre del sistema:",identifier:"systemInput",modelValue:l(k),"onUpdate:modelValue":i[4]||(i[4]=e=>d(k)?k.value=e:null)},null,8,["modelValue"]),t(y,{label:"Nombre del planeta:",identifier:"planetInput",modelValue:l(O),"onUpdate:modelValue":i[5]||(i[5]=e=>d(O)?O.value=e:null)},{default:a((()=>i[27]||(i[27]=[o(" Nombre del planeta O el planeta rodeado por la luna donde se puede encontrar la planta. ")]))),_:1},8,["modelValue"]),t(y,{label:"Nombre de la luna (si la planta está en la luna):",identifier:"moonInput",modelValue:l(C),"onUpdate:modelValue":i[6]||(i[6]=e=>d(C)?C.value=e:null)},{default:a((()=>i[28]||(i[28]=[o(" Si la planta está ubicada en una luna. Déjelo en blanco si la planta está en un planeta. ")]))),_:1},8,["modelValue"]),t(Ge),t(N,null,{label:a((()=>[i[32]||(i[32]=n("label",{for:"genus"},"Genuses:",-1)),t(f,{img:"creature/creatureHemisphere"},{heading:a((()=>i[29]||(i[29]=[o("Hemisferio")]))),content:a((()=>i[30]||(i[30]=[o(" Consulte la wiki para obtener una lista de géneros. El género se define por la apariencia general de una criatura."),n("br",null,null,-1),o(" Consulte la wiki para obtener una "),n("a",{href:"Genus#Genus_List","data-wiki":""},"lista de los genuses",-1)]))),default:a((()=>[i[31]||(i[31]=o(" Consulte la wiki para obtener una lista de géneros. "))])),_:1})])),input:a((()=>[V(n("select",{"onUpdate:modelValue":i[7]||(i[7]=e=>d(M)?M.value=e:null),id:"genusInput"},null,512),[[S,l(M)]])])),_:1}),t(N,null,{default:a((()=>i[33]||(i[33]=[n("p",null,"La siguiente información se puede encontrar en el menú de descubrimiento de criaturas.",-1)]))),_:1}),t(N,null,{label:a((()=>[i[37]||(i[37]=n("label",{for:"hemisphere"},"Hemisferio:",-1)),t(f,{img:"creature/creatureHemisphere"},{heading:a((()=>i[34]||(i[34]=[o("Hemisferio")]))),content:a((()=>i[35]||(i[35]=[o(" Encontrado en el menú de descubrimiento de criaturas. "),n("br",null,null,-1),o(" Si no se proporciona ningún hemisferio, deje la entrada vacía. ")]))),default:a((()=>[i[36]||(i[36]=o(" Encontrado en el menú de descubrimiento de criaturas. "))])),_:1})])),input:a((()=>[V(n("select",{"onUpdate:modelValue":i[8]||(i[8]=e=>d(M)?M.value=e:null),id:"hemisphere"},i[38]||(i[38]=[n("option",{value:""},null,-1),n("option",{value:"North"},"Norte",-1),n("option",{value:"South"},"Sur",-1)]),512),[[S,l(M)]])])),_:1}),t(N,null,{label:a((()=>[i[42]||(i[42]=n("label",{for:"rarity"},"Rareza:",-1)),t(f,{img:"creature/creatureRarity"},{heading:a((()=>i[39]||(i[39]=[o("Hemisferio")]))),content:a((()=>i[40]||(i[40]=[o(" Encontrado en el menú de descubrimiento de criaturas. "),n("br",null,null,-1),o(" Si no se proporciona ningún hemisferio, deje la entrada vacía. ")]))),default:a((()=>[i[41]||(i[41]=o(" Encontrado en el menú de descubrimiento de criaturas. "))])),_:1})])),input:a((()=>[V(n("select",{"onUpdate:modelValue":i[9]||(i[9]=e=>d(R)?R.value=e:null),id:"rarity"},i[43]||(i[43]=[n("option",{value:"Common"},"Común",-1),n("option",{value:"Uncommon"},"No común",-1),n("option",{value:"Rare"},"Raro",-1)]),512),[[S,l(R)]])])),_:1}),t(N,null,{label:a((()=>[i[47]||(i[47]=n("label",{for:"ecosystem"},"Ecosistema:",-1)),t(f,{img:"creature/creatureEcosystem"},{heading:a((()=>i[44]||(i[44]=[o("Ecosistema")]))),content:a((()=>i[45]||(i[45]=[o(" Encontrado en el menú de descubrimiento de criaturas. ")]))),default:a((()=>[i[46]||(i[46]=o(" Encontrado en el menú de descubrimiento de criaturas. "))])),_:1})])),input:a((()=>[V(n("select",{"onUpdate:modelValue":i[10]||(i[10]=e=>d(te)?te.value=e:null),id:"ecosystem"},i[48]||(i[48]=[n("option",{value:"Ground"},"Terrestre",-1),n("option",{value:"Flying"},"Voladora",-1),n("option",{value:"Underwater"},"Submarina",-1),n("option",{value:"Underground"},"Subterreánea",-1)]),512),[[S,l(te)]])])),_:1}),t(N,null,{label:a((()=>[i[52]||(i[52]=n("label",{for:"activity"},"Actividad:",-1)),t(f,{img:"creature/creatureActivity"},{heading:a((()=>i[49]||(i[49]=[o("Actividad")]))),content:a((()=>i[50]||(i[50]=[o(" Encontrado en el menú de descubrimiento de criaturas. ")]))),default:a((()=>[i[51]||(i[51]=o(" Encontrado en el menú de descubrimiento de criaturas. "))])),_:1})])),input:a((()=>[V(n("select",{"onUpdate:modelValue":i[11]||(i[11]=e=>d(P)?P.value=e:null),id:"activity"},i[53]||(i[53]=[n("option",{value:"Always Active"},"Siempre activa",-1),n("option",{value:"Diurnal"},"Diurna",-1),n("option",{value:"Nocturnal"},"Nocturna",-1),n("option",{value:"Mostly Diurnal"},"Generalmente Diurna",-1),n("option",{value:"Mostly Nocturnal"},"Generalmente Nocturna",-1)]),512),[[S,l(P)]])])),_:1}),i[77]||(i[77]=n("div",{class:"tableHeader text"},[n("p",null,"La siguiente información se puede encontrar en el escaneo de criaturas.")],-1)),t(N,null,{label:a((()=>[i[57]||(i[57]=n("label",{for:"gender"},"Genero:",-1)),t(f,{img:"creature/creatureGender"},{heading:a((()=>i[54]||(i[54]=[o("Género")]))),content:a((()=>i[55]||(i[55]=[o(" Encontrado en el menú de descubrimiento de criaturas. ")]))),default:a((()=>[i[56]||(i[56]=o(" Encontrado en el menú de descubrimiento de criaturas. "))])),_:1})])),input:a((()=>[V(n("select",{"onUpdate:modelValue":i[12]||(i[12]=e=>d(T)?T.value=e:null),id:"gender1"},i[58]||(i[58]=[n("option",{value:"Asynchronous"},"Asíncrono",-1),n("option",{value:"Circular"},"Circular",-1),n("option",{value:"Electronic"},"Electrónico",-1),n("option",{value:"Mutable"},"Mutable",-1),n("option",{value:"Non-boolean"},"No booleano",-1),n("option",{value:"Non-Euclidean"},"No euclidiano",-1),n("option",{value:"Uninitialised"},"No inicializado",-1),n("option",{value:"Unmeasurable"},"Inmensurable",-1),n("option",{value:"Virtual"},"Virtual",-1),n("option",{value:"Alpha"},"Alfa",-1),n("option",{value:"Asymmetric"},"Asimétrico",-1),n("option",{value:"Asymptotic"},"Asintótico",-1),n("option",{value:"Exotic"},"Exótico",-1),n("option",{value:"Female"},"Hembra",-1),n("option",{value:"Non-uniform"},"No uniforme",-1),n("option",{value:"None"},"Ninguno",-1),n("option",{value:"Orthogonal"},"Ortogonal",-1),n("option",{value:"Prime"},"Principal",-1),n("option",{value:"Radical"},"Radical",-1),n("option",{value:"Rational"},"Racional",-1),n("option",{value:"Symmetric"},"Simétrico",-1),n("option",{value:"Unknown"},"Desconocido",-1),n("option",{value:"Vectorised"},"Vectorizado",-1)]),512),[[S,l(T)]])])),_:1}),t(N,null,{label:a((()=>[i[62]||(i[62]=n("label",{for:"gender"},"Segundo Género:",-1)),t(f,{img:""},{heading:a((()=>i[59]||(i[59]=[o("Segundo Género")]))),content:a((()=>i[60]||(i[60]=[o(" Algunos géneros tienen dos géneros, mientras que otros tienen un solo género."),n("br",null,null,-1),o(" Las aves, los peces y la fauna rara/anómala, por ejemplo, tienen un solo género."),n("br",null,null,-1),o(" Pueden aparecer como dos géneros, pero tendrán exactamente la misma apariencia. ")]))),default:a((()=>[i[61]||(i[61]=o(" Sólo se aplica a ciertos géneros. Se puede encontrar en el escaneo de criaturas. "))])),_:1})])),input:a((()=>[V(n("select",{"onUpdate:modelValue":i[13]||(i[13]=e=>d(z)?z.value=e:null),id:"gender2"},i[63]||(i[63]=[n("option",{value:"- None"},"Ninguno",-1),n("option",{value:"- Asynchronous"},"Asíncrono",-1),n("option",{value:"- Circular"},"Circular",-1),n("option",{value:"- Electronic"},"Electrónico",-1),n("option",{value:"- Mutable"},"Mutable",-1),n("option",{value:"- Non-boolean"},"No booleano",-1),n("option",{value:"- Non-Euclidean"},"No euclidiano",-1),n("option",{value:"- Uninitialised"},"No inicializado",-1),n("option",{value:"- Unmeasurable"},"Inmensurable",-1),n("option",{value:"- Virtual"},"Virtual",-1),n("option",{value:"- Alpha"},"Alfa",-1),n("option",{value:"- Asymmetric"},"Asimétrico",-1),n("option",{value:"- Asymptotic"},"Asintótico",-1),n("option",{value:"- Exotic"},"Exótico",-1),n("option",{value:"- Female"},"Hembra",-1),n("option",{value:"- Non-uniform"},"No uniforme",-1),n("option",{value:"- Orthogonal"},"Ortogonal",-1),n("option",{value:"- Prime"},"Principal",-1),n("option",{value:"- Radical"},"Radical",-1),n("option",{value:"- Rational"},"Racional",-1),n("option",{value:"- Symmetric"},"Simétrico",-1),n("option",{value:"- Unknown"},"Desconocido",-1),n("option",{value:"- Vectorised"},"Vectorizado",-1)]),512),[[S,l(z)]])])),_:1}),t(_e),t(u),t(y,{modelValue:l(M),"onUpdate:modelValue":i[14]||(i[14]=e=>d(M)?M.value=e:null),identifier:"weight",label:"Peso:",maxlength:"5"},{default:a((()=>[t(f,{img:"creature/creatureWeight"},{heading:a((()=>i[64]||(i[64]=[o("Peso")]))),content:a((()=>i[65]||(i[65]=[o(' Encontrado en el escaneo de criaturas. No se necesitan "kg". ')]))),default:a((()=>[i[66]||(i[66]=o(' Encontrado en el escaneo de criaturas. No se necesitan "kg". '))])),_:1})])),_:1},8,["modelValue"]),t(y,{modelValue:l(M),"onUpdate:modelValue":i[15]||(i[15]=e=>d(M)?M.value=e:null),identifier:"height",label:"Altura:",maxlength:"3"},{default:a((()=>[t(f,{img:"creature/creatureWeight"},{heading:a((()=>i[67]||(i[67]=[o("Altura")]))),content:a((()=>i[68]||(i[68]=[o(' Encontrado en el escaneo de criaturas. No se necesitan "m". ')]))),default:a((()=>[i[69]||(i[69]=o(' Encontrado en el escaneo de criaturas. No se necesitan "m". '))])),_:1})])),_:1},8,["modelValue"]),t(y,{modelValue:l(M),"onUpdate:modelValue":i[16]||(i[16]=e=>d(M)?M.value=e:null),identifier:"weight2",label:"Peso del genero 2: (si hay)",maxlength:"5"},{default:a((()=>[t(f,{img:"creature/creatureWeight"},{heading:a((()=>i[70]||(i[70]=[o("Peso")]))),content:a((()=>i[71]||(i[71]=[o(' Encontrado en el escaneo de criaturas. No se necesitan "kg". ')]))),default:a((()=>[i[72]||(i[72]=o(' Encontrado en el escaneo de criaturas. No se necesitan "kg". '))])),_:1})])),_:1},8,["modelValue"]),t(y,{modelValue:l(M),"onUpdate:modelValue":i[17]||(i[17]=e=>d(M)?M.value=e:null),identifier:"height2",label:"Altura del genero 2: (si hay)",maxlength:"3"},{default:a((()=>[t(f,{img:"creature/creatureWeight"},{heading:a((()=>i[73]||(i[73]=[o("Altura")]))),content:a((()=>i[74]||(i[74]=[o(' Encontrado en el escaneo de criaturas. No se necesitan "m". ')]))),default:a((()=>[i[75]||(i[75]=o(' Encontrado en el escaneo de criaturas. No se necesitan "m". '))])),_:1})])),_:1},8,["modelValue"]),t(ln),t(m),t(Te,null,{default:a((()=>[t(Fe),t(y,{label:"Nombre del documentador si no es el descubridor:",identifier:"docBy",modelValue:l(ee),"onUpdate:modelValue":i[18]||(i[18]=e=>d(ee)?ee.value=e:null)},null,8,["modelValue"]),t(He)])),_:1}),t(N,null,{default:a((()=>[i[76]||(i[76]=n("label",{for:"appearance"},"Apariencia:",-1)),V(n("textarea",{"onUpdate:modelValue":i[19]||(i[19]=e=>d(oe)?oe.value=e:null),id:"appearance",placeholder:"Esta flora es una <size> <colour> <type>."},null,512),[[le,l(oe)]])])),_:1})],32),i[78]||(i[78]=n("div",{id:"galleryInput"},null,-1)),i[79]||(i[79]=n("div",{id:"galleryItems",class:"gallery-items-wrapper"},null,-1)),t(Be)])),_:1}),t(je,{open:be.value,"onUpdate:open":i[21]||(i[21]=e=>be.value=e),"error-message":ge.value},null,8,["open","error-message"]),t(ze,{onMousedown:ye},{default:a((()=>[n("div",{ref_key:"wikiText",ref:c,class:"wikiText",id:"fullArticle",onMouseup:i[22]||(i[22]=(...e)=>l(s).getSelectedText&&l(s).getSelectedText(...e)),onTouchend:i[23]||(i[23]=(...e)=>l(s).getSelectedText&&l(s).getSelectedText(...e))},[n("div",null,[t(I,{"template-name":"Version"},{default:a((()=>[o(r(l(p)),1)])),_:1})]),t(ce,{creatureName:l(ue).name,image:l(x),hub:l(h),galaxy:l(b),region:l(L),"system-name":l(ue).system,"planet-name":l(ue).planet,"moon-name":l(ue).moon,type:l(G),glyphs:l(j),behaviours:l(H),polymorphic:l($),age:l(F),gender:l(T),gender2:l(z),roots:l(B),nutrients:l(X),notes:l(Y),rarity:l(R),ecosystem:l(te),activity:l(P),hemisphere:l(M),"elem-primary":l(K)[0],"elem-secondary":l(K)[1],"disc-date":l(J).replaceAll("-","/"),"discovered-name":l(ue).discovered,"discoveredlink-name":l(ue).discoveredlink,researchteam:l(ae),release:l(p)},null,8,["creatureName","image","hub","galaxy","region","system-name","planet-name","moon-name","type","glyphs","behaviours","polymorphic","age","gender","gender2","roots","nutrients","notes","rarity","ecosystem","activity","hemisphere","elem-primary","elem-secondary","disc-date","discovered-name","discoveredlink-name","researchteam","release"]),n("div",null,"'''"+r(l(ue).name)+"''' is a species of flora.",1),i[81]||(i[81]=n("br",null,null,-1)),i[82]||(i[82]=n("div",null,"==Summary==",-1)),n("div",null,"'''"+r(l(ue).name)+"''' is a [[creature]], a member of the "+r(l(M))+" [[genus]].",1),i[83]||(i[83]=n("br",null,null,-1)),i[84]||(i[84]=n("div",null,"==Appearance==",-1)),o(" "+r(l(oe))+" ",1),i[85]||(i[85]=n("br",null,null,-1)),i[86]||(i[86]=n("div",null,"==Discovery Menu==",-1)),n("div",null,"'''Additional Observations''': "+r(l(Y)),1),i[87]||(i[87]=n("br",null,null,-1)),i[88]||(i[88]=n("div",null,"==Alias Names==",-1)),l(_)?(v(),E("div",an,[t(I,{"template-name":"aliasc"},{default:a((()=>[o("text=Original|name="+r(l(ue).orgName),1)])),_:1})])):ne("",!0),n("div",null,[t(I,{"template-name":"aliasc"},{default:a((()=>[o("text=Current|name="+r(l(ue).name),1)])),_:1})]),i[89]||(i[89]=n("br",null,null,-1)),i[90]||(i[90]=n("div",null,"==Location==",-1)),n("div",null,[i[80]||(i[80]=o(" It can be found on the ")),l(C)?(v(),E("span",on,"[[moon]] [["+r(l(ue).moon)+"]] of the",1)):ne("",!0),o(" [[planet]] [["+r(l(ue).planet)+"]] in the [["+r(l(ue).system)+"]] [[star system]]. ",1)]),n("div",null,[t(I,{"template-name":"CoordGlyphConvert"},{default:a((()=>[o(r(l(j)),1)])),_:1})]),i[91]||(i[91]=n("br",null,null,-1)),i[92]||(i[92]=n("div",null,"==Additional Information==",-1)),l(ee)&&l(ee)!==l(D)&&l(ee)!==l(A)?(v(),E("div",tn,"Documented by "+r(l(se)),1)):ne("",!0),i[93]||(i[93]=n("br",null,null,-1)),i[94]||(i[94]=n("div",{id:"gallery"},null,-1))],544)])),_:1})],64)}}});export{gn as default};