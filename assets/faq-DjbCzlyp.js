import"./modulepreload-polyfill-B5Qt9EMX.js";import"./links-7iKJrTAm.js";document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("searchInput"),t=document.querySelectorAll(".faq-item, .section");e&&e.addEventListener("input",(function(){const o=e.value.toLowerCase();t.forEach((e=>{var t,l,n,s;const i=(null==(l=null==(t=e.querySelector("summary"))?void 0:t.textContent)?void 0:l.toLowerCase())||"",d=(null==(s=null==(n=e.querySelector("p"))?void 0:n.textContent)?void 0:s.toLowerCase())||"";i.includes(o)||d.includes(o)?(e.classList.remove("hidden"),e.style.display=""):(e.classList.add("hidden"),e.style.display="none")}))}))})),document.querySelectorAll("details").forEach((e=>{e.addEventListener("toggle",(()=>{const t=e.querySelector("p");t&&(e.open?(t.style.height=`${t.scrollHeight}px`,t.style.opacity="1"):(t.style.opacity="0",t.style.height="0",setTimeout((()=>{t.style.transition="none",t.style.height="",t.style.opacity="",t.style.transition=""}),100)))}))}));