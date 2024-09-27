import{v as X,n as B}from"./runtime-dom.esm-bundler-D7aUqjIY.js";import{ar as $,cN as U,cM as x,b$ as M,bh as u,ag as v,ah as s,c5 as I,bQ as _,aT as L,an as b,Z as w,cL as P,bp as h,bn as z,ad as V,bH as C,b0 as A,cA as K,cK as Y,cg as ee,ao as S,ae as y,af as T,c3 as d,bv as q,bs as k,br as te,al as ae,a$ as ne,b2 as le,a2 as oe,b_ as se}from"./links-DvbpPHwL.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{b as Q,u as ie}from"./main-Da-AT7xu.js";import{_ as F}from"./Explanation.vue_vue_type_script_setup_true_lang-CDMDNdc8.js";const re={class:"debug-skip-label is-flex"},ue=$({__name:"DebugActions",setup(e){const a=U(),{debug:t}=x(a),l=()=>localStorage.clear();return M((()=>document.documentElement.dataset.debug=t.value.toString())),(e,a)=>(u(),v(w,null,[s("label",re,[I(s("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>L(t)?t.value=e:null),class:"checkbox",type:"checkbox",id:"skipCheck"},null,512),[[X,_(t)]]),a[1]||(a[1]=b("Habilitar depuración (sin controles, sin ventanas emergentes)"))]),s("button",{class:"button is-danger is-small mx-4",id:"clearCache",onClick:l}," Borrar almacenamiento local ")],64))}}),ce=N(ue,[["__scopeId","data-v-f6602541"]]),pe=["href"],de=$({__name:"CreatePageButton",setup(e){const a=P(),{pageName:t}=x(a),l=U(),{debug:n}=x(l),s=h(),o=h(!0),i=z({fail:"",idle:"Crear página"}),r=h(i.idle);function c(){const{isValidData:e,message:a}=Q(!1,n.value);s.value=e.value?K+"Special:EditPage/"+t.value:void 0,!e.value&&(i.fail=a.value,r.value=i.fail,o.value=e.value,setTimeout((()=>{r.value=i.idle,o.value=!0}),1500))}const d=V((()=>o.value?"is-outlined is-primary":"is-danger no-interaction"));return(e,a)=>(u(),v("a",{class:A([d.value,"button"]),href:s.value,id:"create",rel:"noopener noreferrer",target:"_blank",onClick:c},C(r.value),11,pe))}});function Z(e){var a;const t=null==(a=e.value)?void 0:a.innerText.replace(/\n{3,}/g,"\n\n").trim();return{articleText:h(t)}}const me=$({__name:"CopyArticleButton",setup(e){const a=ie(),{text:t,copy:l}=x(a),n=U(),{fullArticleElement:s,debug:o}=x(n),i=h(!0),r=h(!1),c=z({fail:"",idle:"Copiar código",success:"¡Copiado!"}),d=h(c.idle);function p(){t.value=Y(),l.value=!0;const{isValidData:e,message:a}=Q(o.value),{articleText:n}=Z(s);navigator.clipboard.writeText(n.value??""),l.value=!0,c.fail=a.value,d.value=e.value?c.success:c.fail,r.value=!0,i.value=e.value,setTimeout((()=>{d.value=c.idle,i.value=!0,r.value=!1}),1500)}const m=V((()=>{const e=r.value?"no-interaction":"";return`${i.value?"is-outlined is-primary":"is-danger"} ${e}`}));return(e,a)=>(u(),v("button",{class:A([m.value,"button"]),id:"copy",type:"button",onClick:p},C(d.value),3))}}),fe=["href"],G=$({__name:"WikiLink",props:{link:{},text:{}},setup(e){const a=e,t=V((()=>K+a.link));return(e,a)=>(u(),v("a",{href:t.value,rel:"noopener noreferrer",target:"_blank"},C(e.text),9,fe))}}),ge={class:"buttons"},ve=["download","href"],Xe=$({__name:"Actions",setup(e){const a=P(),{name:t,pageName:l}=x(a),n=U(),{fullArticleElement:o}=x(n),i=V((()=>ee(t.value)));M((()=>l.value=i.value));const r=V((()=>l.value+".txt")),c=h();function d(){const{articleText:e}=Z(o);c.value=e.value?"data:text/plain,"+encodeURIComponent(e.value):void 0}return(e,t)=>(u(),v(w,null,[t[1]||(t[1]=s("p",{class:"has-text-centered"},[b(" Primero debes copiar el código y luego pegarlo en la página wiki."),s("br"),b("Además, no olvides cargar las imágenes que hayas puesto aquí. ")],-1)),s("div",ge,[S(me),s("a",{download:r.value,href:c.value,class:"button is-outlined is-primary",id:"download",onClick:d},"Descargar codigo",8,ve),S(G,{class:"button is-outlined is-primary",link:"Special:Upload?multiple=true",text:"Subir Archivos"}),S(de),s("button",{class:"button is-warning",id:"reset",type:"reset",onClick:t[0]||(t[0]=e=>_(a).$reset())}," Restablecer entradas "),_(false)?(u(),y(ce,{key:0})):T("",!0)])],64))}}),Ye=$({__name:"WikiTemplate",props:{templateName:{},isSingleLine:{type:Boolean,default:!0}},setup(e){const a=e.isSingleLine?"span":"div";return(e,t)=>(u(),v(w,null,[(u(),y(q(_(a)),null,{default:d((()=>[t[0]||(t[0]=s("span",null,"{{",-1)),s("span",null,C(e.templateName)+C(e.isSingleLine?"|":""),1)])),_:1})),s("span",null,[k(e.$slots,"default")]),(u(),y(q(_(a)),null,{default:d((()=>t[1]||(t[1]=[s("span",null,"}}",-1)]))),_:1}))],64))}}),be={},_e={class:"table"};function he(e,a){return u(),v("div",_e,[k(e.$slots,"default")])}const ye=N(be,[["render",he]]),$e={class:"table-cell text"},ke={class:"table-cell data"},xe={key:1,class:"table-cell"},D=$({__name:"InputRow",setup:e=>(e,a)=>(u(),y(ye,null,{default:d((()=>[e.$slots.label&&e.$slots.input?(u(),v(w,{key:0},[s("div",$e,[k(e.$slots,"label")]),s("div",ke,[k(e.$slots,"input")])],64)):(u(),v("div",xe,[k(e.$slots,"default")]))])),_:3}))}),Ce={for:"discoveredlinkInput"},Se={for:"discoveredInput"},et=$({__name:"DiscovererInputs",props:{type:{default:"Descubridor"}},setup(e){const a=P(),{discovered:t,discoveredlink:l}=x(a);return(e,a)=>(u(),v(w,null,[_(t)?T("",!0):(u(),y(D,{key:0},{label:d((()=>[s("label",Ce,"Nombre del "+C(e.type)+" en la wiki:",1)])),input:d((()=>[I(s("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>L(l)?l.value=e:null),type:"text",id:"discoveredlinkInput"},null,512),[[B,_(l)]])])),_:1})),_(l)?T("",!0):(u(),y(D,{key:1},{label:d((()=>[s("label",Se,"Alias del "+C(e.type)+" si no tiene wiki:",1)])),input:d((()=>[I(s("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>L(t)?t.value=e:null),type:"text",id:"discoveredInput"},null,512),[[B,_(t)]])])),_:1}))],64))}}),we={},Te={class:"error"};function De(e,a){return u(),v("p",Te,[k(e.$slots,"default")])}const H=N(we,[["render",De]]),Ee={id:"portalglyphButtons"},Ie=["id","value"],Le={class:"glyph icon is-small"},Ve={name:"portalglyphs",id:"portalglyphsPreview",class:"glyph"},W=12,tt=$({__name:"GlyphInput",setup(e){const a=/[0-9A-F]/,t=P(),{glyphs:l,isValidGlyphs:n}=x(t);function o(e){if(!e.target||!(e.target instanceof HTMLButtonElement||e.target instanceof HTMLElement&&e.target.parentElement instanceof HTMLButtonElement))return;const a=e.target instanceof HTMLButtonElement?e.target:e.target.parentElement;a instanceof HTMLButtonElement&&l.value.length<W&&(l.value+=a.value)}function i(){l.value=l.value.slice(0,-1)}function r(){l.value=l.value.toUpperCase().split("").filter((e=>a.test(e))).join("")}const c=e=>e.toString(16).toUpperCase(),p=V((()=>l.value.length===W&&!n.value));return(e,a)=>(u(),v(w,null,[S(D,null,{label:d((()=>[s("div",{class:"label-combo"},[a[1]||(a[1]=s("label",{for:"portalglyphsInput"},"Glifos:",-1)),s("button",{class:"button is-small is-danger",type:"button",id:"glyphDeleteButton",onClick:i}," ← Borrar ")]),S(F,{img:"shared/glyphs"},{heading:d((()=>a[2]||(a[2]=[b("Glifos del portal")]))),content:d((()=>a[3]||(a[3]=[b(" Encontrado en modo foto. Los glifos son específicos de cada planeta. "),s("iframe",{src:"https://nmspar.vercel.app/",sandbox:"allow-scripts allow-same-origin",title:"Glyph Reader",class:"explanation-embed",width:"450",height:"300"},"Lector de glifos",-1)]))),default:d((()=>[a[4]||(a[4]=b(" Encontrado en modo foto. Los glifos son específicos de cada planeta. "))])),_:1})])),input:d((()=>[I(s("input",{class:A([{"error-input":p.value},"glyphs-input"]),id:"portalglyphsInput",type:"text",maxlength:"12","onUpdate:modelValue":a[0]||(a[0]=e=>L(l)?l.value=e:null),onInput:r},null,34),[[B,_(l)]]),p.value?(u(),y(H,{key:0,class:"error"},{default:d((()=>[a[5]||(a[5]=b("No es una región valida de la RSS, por favor mira las ")),S(G,{link:"Regions_RSS",text:"regiones de la RSS"}),a[6]||(a[6]=b(" para obtener una lista de regiones validas."))])),_:1})):T("",!0)])),_:1}),S(D,null,{default:d((()=>[s("div",Ee,[(u(),v(w,null,te(16,(e=>s("button",{class:"button",type:"button",id:"glyphButton"+e,value:c(e-1),onClick:o},[s("span",Le,C(c(e-1)),1)],8,Ie))),64))]),s("output",Ve,C(_(l)),1)])),_:1})],64))}}),Pe=1e7,at=$({__name:"InfoboxImageInput",setup(e){const a=P(),{image:t}=x(a),l=h(!1),n=h(!1),o=h(!1),i=h(!1);function r(e){var a;if(!(e.target&&e.target instanceof HTMLInputElement))return;const s=null==(a=e.target.files)?void 0:a[0];t.value=(null==s?void 0:s.name)??"",i.value=!!(s&&s.size>Pe),!o.value&&!i.value&&(l.value=!0,n.value=!0,o.value=!0)}return M((()=>{n.value&&!l.value&&(n.value=!1)})),M((()=>{!o.value&&l.value&&(o.value=!0)})),(e,a)=>(u(),y(D,null,{label:d((()=>[a[10]||(a[10]=s("label",{for:"picInput"},"Nombre de la imagen principal, incluida la extensión del archivo:",-1)),S(F,{open:l.value,"onUpdate:open":a[0]||(a[0]=e=>l.value=e)},{heading:d((()=>a[2]||(a[2]=[b("Subir archivo")]))),content:d((()=>[n.value?(u(),v(w,{key:1},[s("span",null,[a[6]||(a[6]=b(" No olvides subir tu foto a la wiki en ")),S(G,{link:"Special:Upload?multiple=true",text:"Subir Archivos"}),a[7]||(a[7]=b(". El botón de carga solo completa automáticamente el nombre de la imagen en el código, no se carga automáticamente en la wiki. "))]),a[8]||(a[8]=s("div",{class:"mt-3"},[s("span",{class:"has-text-weight-bold"},"NOTA"),b(': Puede acceder a esta ventana emergente en cualquier momento haciendo clic en "?" junto al botón de carga de la imagen principal. ')],-1))],64)):(u(),v(w,{key:0},[a[3]||(a[3]=b(" Cualquier imagen que cargue aquí no se cargará en la wiki. Esto es sólo para autocompletar el nombre de la imagen. El tamaño máximo del archivo es 10 MB. Puedes subir tus fotos a la wiki en ")),S(G,{link:"Special:Upload?multiple=true",text:"Subir Archivos"}),a[4]||(a[4]=b(". ")),a[5]||(a[5]=s("iframe",{src:"https://nmscd.com/Image-Compressor/",title:"Compresor de imagen",class:"explanation-embed",width:"450",height:"300"},"Compresor de imagen",-1))],64))])),default:d((()=>[a[9]||(a[9]=b(" La imagen no se cargará en la wiki. Esto es sólo para autocompletar el nombre de la imagen. "))])),_:1},8,["open"])])),input:d((()=>[I(s("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>L(t)?t.value=e:null),type:"text",id:"picInput"},null,512),[[B,_(t)]]),s("input",{class:A({"error-input":i.value}),type:"file",onChange:r},null,34),i.value?(u(),y(H,{key:0},{default:d((()=>a[11]||(a[11]=[b("Este archivo es demasiado grande para cargarlo en la wiki. El tamaño máximo del archivo es 10 MB. Comprime tu archivo aquí: "),s("a",{href:"https://nmscd.com/Image-Compressor/",target:"_blank",rel:"noopener noreferrer"},"Compresor de imagen",-1)]))),_:1})):T("",!0)])),_:1}))}}),nt=$({__name:"ResearchteamInput",setup(e){const a=P(),{researchteam:t}=x(a);return(e,a)=>(u(),y(D,null,{label:d((()=>a[1]||(a[1]=[s("label",null,"¿Perteneces a un gremio?",-1)]))),input:d((()=>[I(s("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>L(t)?t.value=e:null),type:"text",id:"researchTeam",placeholder:"Si es que si, di a cual"},null,512),[[B,_(t)]])])),_:1}))}}),Be=["for"],Me=["list","value","id","maxlength"],lt=$({__name:"SimpleInput",props:{label:{},identifier:{},list:{},img:{},modelValue:{},error:{},maxlength:{}},emits:["update:modelValue","change"],setup(e,{emit:a}){const t=a;function l(e){if(!(e.target instanceof HTMLInputElement))return;const a=e.target.value;t("update:modelValue",a)}return(e,a)=>(u(),y(D,null,{label:d((()=>[s("label",{for:e.identifier},C(e.label),9,Be),e.$slots.default?(u(),y(F,{key:0,img:e.img},ae({default:d((()=>[k(e.$slots,"default")])),_:2},[e.$slots.heading?{name:"heading",fn:d((()=>[k(e.$slots,"heading")])),key:"0"}:void 0,e.$slots.content?{name:"content",fn:d((()=>[k(e.$slots,"content")])),key:"1"}:void 0]),1032,["img"])):T("",!0)])),input:d((()=>[s("input",{class:A({"error-input":e.error}),list:e.list,value:e.modelValue,id:e.identifier,maxlength:e.maxlength,type:"text",onInput:l,onChange:a[0]||(a[0]=a=>e.$emit("change",a))},null,42,Me),e.error?(u(),y(H,{key:0,innerHTML:e.error},null,8,["innerHTML"])):T("",!0)])),_:3}))}}),Ae={class:"explanation-content"},ot=$({__name:"ExplanationError",props:{open:{type:Boolean},errorMessage:{}},emits:["update:open"],setup(e){const a=e,t=h("0 -100vh"),l=h(null);return M((()=>{a.open&&(t.value="0 -100vh",ne((()=>{var e;null==(e=l.value)||e.showModal(),t.value="0 0"})))})),(e,a)=>(u(),y(oe,{to:"body"},[s("dialog",{style:le({translate:t.value}),class:"explanation modal-content content",ref_key:"dialogElement",ref:l,onClose:a[0]||(a[0]=a=>e.$emit("update:open",!1))},[a[1]||(a[1]=s("h2",{class:"explanation-heading"},"Datos faltantes/incorrectos",-1)),s("div",Ae,C(e.errorMessage),1),a[2]||(a[2]=s("form",{method:"dialog"},[s("button",{class:"button",type:"submit",autofocus:""}," Cerrar ")],-1))],36)]))}}),Ne={},Ge={id:"input",class:"column is-full-mobile"};function Ue(e,a){return u(),v("div",Ge,[k(e.$slots,"default")])}const st=N(Ne,[["render",Ue]]),Re={},Fe={id:"output",class:"column is-full-mobile"};function He(e,a){return u(),v("div",Fe,[k(e.$slots,"default")])}const it=N(Re,[["render",He]]);function O(e){return"function"==typeof e?e():_(e)}typeof WorkerGlobalScope<"u"&&(globalThis,WorkerGlobalScope);const j=()=>{};function qe(e,a){return function(...t){return new Promise(((l,n)=>{Promise.resolve(e((()=>a.apply(this,t)),{fn:a,thisArg:this,args:t})).then(l).catch(n)}))}}const We=e=>e();function Oe(e,a={}){let t,l,n=j;const s=e=>{clearTimeout(e),n(),n=j};return o=>{const u=O(e),i=O(a.maxWait);return t&&s(t),u<=0||void 0!==i&&i<=0?(l&&(s(l),l=null),Promise.resolve(o())):new Promise(((e,r)=>{n=a.rejectOnCancel?r:e,i&&!l&&(l=setTimeout((()=>{t&&s(t),l=null,e(o())}),i)),t=setTimeout((()=>{l&&s(l),l=null,e(o())}),u)}))}}function je(e,a,t={}){const{eventFilter:l=We,...n}=t;return se(e,qe(l,a),n)}function rt(e,a,t={}){const{debounce:l=0,maxWait:n,...s}=t;return je(e,a,{...s,eventFilter:Oe(l,{maxWait:n})})}export{H as E,st as I,it as O,ye as S,Ye as _,D as a,lt as b,at as c,tt as d,et as e,nt as f,Xe as g,ot as h,rt as w};