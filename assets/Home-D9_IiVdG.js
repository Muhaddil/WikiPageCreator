import{ar as c,ad as h,bh as n,ag as o,an as A,bH as d,af as f,b2 as v,ah as i,bn as _,b9 as x,Z as u,br as b,ao as y,ae as k}from"./links-DvbpPHwL.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C=["href","title"],S={key:0,class:"alt-text"},V=c({__name:"PageLink",props:{text:{},url:{},imgAlt:{},img:{},inactive:{type:Boolean}},setup(t){const s=t,e=h((()=>{const t=s.text.slice(0,1).toLowerCase();return`Crea ${"aeiou".includes(t)?"un":"una"} página de ${s.imgAlt}`}));return(t,s)=>(n(),o("a",{href:t.url,title:e.value,class:"button",style:v({backgroundImage:"url("+t.img+")"})},[A(d(t.text)+" ",1),t.img?f("",!0):(n(),o("span",S,d(t.imgAlt),1))],12,C))}}),L=p(V,[["__scopeId","data-v-3de46a6a"]]),$=["href"],B=["src","alt"],I=c({__name:"CivImage",props:{link:{},imgAlt:{},img:{}},setup:t=>(t,s)=>(n(),o("a",{href:t.link,target:"_blank",rel:"noopener noreferrer"},[i("img",{src:t.img,alt:t.imgAlt},null,8,B)],8,$))}),N=p(I,[["__scopeId","data-v-04c5eaf5"]]),w={class:"page-options"},W={class:"images"},F=c({__name:"Home",setup(t){const s=[{text:"",url:"./base.html",img:"./assets/images/buttons/1_001.png",imgAlt:"Bases Censo"},{text:"",url:"./basenocensus.html",img:"./assets/images/buttons/1_002.png",imgAlt:"Bases Normales"},{text:"",url:"./racetrack.html",img:"./assets/images/buttons/1_003.png",imgAlt:"Circuitos"},{text:"",url:"./settlement.html",img:"./assets/images/buttons/1_004.png",imgAlt:"Asentamientos"},{text:"",url:"./fauna.html",img:"./assets/images/buttons/1_012_2.png",imgAlt:"Fauna"},{text:"",url:"./sandworm.html",img:"./assets/images/buttons/1_015.png",imgAlt:"Gusano de Arena"},{text:"",url:"./flora.html",img:"./assets/images/buttons/1_006.png",imgAlt:"Flora"},{text:"",url:"./starship.html",img:"./assets/images/buttons/1_013.png",imgAlt:"Naves"},{text:"",url:"./multitool.html",img:"./assets/images/buttons/1_007.png",imgAlt:"Multiherramientas"},{text:"",url:"./mineral.html",img:"./assets/images/buttons/1_005.png",imgAlt:"Mineral"},{text:"",url:"./derelict.html",img:"./assets/images/buttons/1_014.png",imgAlt:"Carguero Abandonado"},{text:"",url:"./biofrig.html",img:"./assets/images/buttons/1_009.png",imgAlt:"Fragatas Organicas"},{text:"",url:"./system.html",img:"./assets/images/buttons/1_008.png",imgAlt:"Sistemas"},{text:"",url:"./planet.html",img:"./assets/images/buttons/1_010.png",imgAlt:"Planetas"},{text:"",url:"./moon.html",img:"./assets/images/buttons/1_011.png",imgAlt:"Lunas"}];function e(t){let s=getComputedStyle(document.documentElement).getPropertyValue(t).trim();if(s.startsWith("url(")&&s.endsWith(")")){let t=s.slice(4,-1);return t.startsWith('"')&&t.endsWith('"')&&(t=t.slice(1,-1)),t}return s}const a=_([]),l=_({value:""});return x((()=>{l.value=e("--hublogo"),a.push({link:"https://nomanssky.fandom.com/es/wiki/Royal_Space_Society",imgAlt:"Royal Space Society logo",img:l.value}),setInterval((()=>{const t=e("--hublogo");t!==l.value&&(l.value=t,a[0].img=l.value)}),10)})),(t,e)=>(n(),o(u,null,[e[0]||(e[0]=i("h1",{class:"title is-spaced"},"Creador de páginas Wiki",-1)),i("div",w,[(n(),o(u,null,b(s,(t=>y(L,{url:t.url,text:t.text,img:t.img,imgAlt:t.imgAlt,disabled:t.inactive},null,8,["url","text","img","imgAlt","disabled"]))),64))]),e[1]||(e[1]=i("div",{class:"built-by"},[i("div",null,"Traído a usted por:")],-1)),i("div",W,[(n(!0),o(u,null,b(a,(t=>(n(),k(N,{img:t.img,"img-alt":t.imgAlt,link:t.link},null,8,["img","img-alt","link"])))),256))]),e[2]||(e[2]=i("div",null,[i("b",null,"Royal Space Society")],-1))],64))}}),M=p(F,[["__scopeId","data-v-b552abc5"]]);export{M as default};
