const t=document.querySelectorAll("button"),e=t[0],l=t[1];let n=null;e.addEventListener("click",(function(){n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.setAttribute("disabled",!0),l.removeAttribute("disabled")})),l.addEventListener("click",(function(){clearInterval(n),e.removeAttribute("disabled"),l.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.51ea69be.js.map
