import{p as a,as as u,t as e,u as s,a as l,j as o,g as c,b as r}from"./links-yjpowTHF.js";import{l as i,p as m,s as d,a as n,b as p,w as t,c as f,d as g,e as h,f as w,r as I,g as E}from"./index-PMGlZMQM.js";const S=[{element:["systemInput","portalglyphsInput"],func:()=>i()},{element:"faunaNumberInput",func:function(){m(parseInt(a[this.dataset.destNoauto]),"faunaSentencePlural")}},{element:"sentinelInput",func:()=>d()},{element:["descriptionInput","wormmaxdepthInput"],func:function(){n(this)}},{element:"sandwormInput",func:()=>p()},{element:"sandwormImgUpload",handler:"change",func:function(){u(this)}},{element:"autoSpawn",func:()=>t()},{element:"addResourceButton",handler:"click",func:function(){f(this)}},{element:"faunaToggleButton",handler:"click",func:function(){e("fauna",this)}},{element:"floraToggleButton",handler:"click",func:function(){e("flora",this)}},{element:"mineralToggleButton",handler:"click",func:function(){e("mineral",this)}},{element:"addFaunaButton",handler:"click",func:function(){g(this)}},{element:"addFloraButton",handler:"click",func:function(){h(this)}},{element:"addMineralButton",handler:"click",func:function(){w(this)}}],B={input:{resourceInputs:"resourceInputs",autoSpawn:"autoSpawnInput"},output:{resourceBullets:"resourceBullets",creatures:"creatures",plants:"plants",minerals:"minerals",sandworm:"sandworm"}};r.resetExternal=()=>document.dispatchEvent(new Event("pageReset")),document.addEventListener("pageReset",(()=>I())),s(B),l(S),o(c.input.resourceInputs.querySelector("button"),"click"),n(),t(),E();