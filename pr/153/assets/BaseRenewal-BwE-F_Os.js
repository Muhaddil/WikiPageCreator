import{_ as q}from"./PageCreator.vue_vue_type_script_setup_true_lang-BGDSxfVF.js";import{d as b,u as R,s as S,o as v,a as $,t as U,f as m,p as O,r as V,B as k,C as z,b as s,D as A,H,e as u,h as i,k as g,l as I,_ as M,J as F,P as N,j as G}from"./main-BviRhVon.js";import{T as J}from"./TextareaInput-BTQiyBNF.js";const L={class:"formatted-text"},K=b({__name:"baseOutput",setup(e){const a=R(),{censusrenewal:s}=S(a);return(e,a)=>(v(),$("pre",L,U(m(s)),1))}}),Q=O(K,[["__scopeId","data-v-41f504f8"]]),W={class:"code-container"},X={class:"checkbox-container"},Z=b({__name:"BaseInput",setup(e){const a=R(),{censusrenewal:n,release:l,name:t}=S(a),o=(new Date).getUTCFullYear(),r=l.value,c=V(!1),d=V("");function p(e){let a=function(e){const a=o,s=/censusrenewal\s*=\s*([^\n]*)/,n=e.match(s);if(n&&n[1]){let l=n[1].split(",").map((e=>e.trim()));if(0===l.length)return e.replace(s,`censusrenewal = ${a}`);if(c.value)for(let e=parseInt(l[l.length-1],10)+1;e<=a;e++)l.includes(e.toString())||l.push(e.toString());return l.includes(a.toString())||l.push(a.toString()),e.replace(s,`censusrenewal = ${l.join(", ")}`)}return e.trimEnd()+`\ncensusrenewal = ${a}`}(e);return a=function(e){let a=e.replace(/{{Version\|([^\n]*)}}/,`{{Version|${r}}}`);return a=a.replace(/\| release =\s*([^\n]*)/,`| release = ${r}`),a}(a),a}function f(){if(n.value){const e=p(n.value);a.censusrenewal=e,d.value=function(e){const a=e.match(/\| name =\s*([^\n]*)/);return a&&a[1]?a[1].trim():""}(n.value),a.name=d.value}}k(c,(()=>{f()})),k(n,(()=>{f()}));const b=z();function _(e){b.error(e,{position:N.BOTTOM_RIGHT})}function h(){const e=[{field:a.name,message:"¡Pon el nombre de tu base!"}];for(const{field:a,message:s}of e)if(!a)return void _(s);b.success("¡Creada!",{position:N.BOTTOM_RIGHT}),window.open(`https://nomanssky.fandom.com/wiki/${a.name}?action=edit#editform`,"_blank")}return(e,a)=>(v(),$("div",W,[a[6]||(a[6]=s("h2",{class:"title"},"Actualización del Censo RSS",-1)),a[7]||(a[7]=s("p",{class:"description"}," Pega aquí el código que deseas actualizar. Los valores se actualizarán automáticamente con el año actual y la versión más reciente. ",-1)),s("div",X,[s("label",null,[A(s("input",{type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e)},null,512),[[H,c.value]]),a[3]||(a[3]=u(" Añadir todos los años desde el último registrado. "))]),a[4]||(a[4]=s("div",{class:"note"},[s("p",null,[s("strong",null,"Nota:"),u(" Selecciona esto antes de ingresar tu código o puede haber errores.")])],-1))]),i(M,{modelValue:m(t),"onUpdate:modelValue":a[1]||(a[1]=e=>I(t)?t.value=e:null),"help-img":"base/baseName","help-title":"Nombre de la Base:",label:"Nombre de la Base",tooltip:"Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o)."},{default:g((()=>a[5]||(a[5]=[u(" Escribe exactamente como se ve en el juego. Cuidado con 0 (cero) y O (o). ")]))),_:1},8,["modelValue"]),i(m(F),{as:"a",label:"Ir a la base",severity:"warn",onClick:h}),a[8]||(a[8]=s("br",null,null,-1)),a[9]||(a[9]=s("br",null,null,-1)),i(J,{modelValue:m(n),"onUpdate:modelValue":a[2]||(a[2]=e=>I(n)?n.value=e:null),label:"Pega tu código aquí",placeholder:"Ejemplo de código a pegar",class:"textarea-input"},null,8,["modelValue"]),a[10]||(a[10]=s("div",{class:"note"},[s("p",null,[s("strong",null,"Nota:"),u(" Si no tienes ningún año en el campo de "),s("code",null,"censusrenewal"),u(", el sistema fallará. ")])],-1))]))}}),ee=O(Z,[["__scopeId","data-v-e5f42bf8"]]),ne=b({__name:"BaseRenewal",setup:e=>(e,a)=>(v(),G(q,null,{input:g((()=>[i(ee)])),output:g((()=>[i(Q)])),_:1}))});export{ne as default};
