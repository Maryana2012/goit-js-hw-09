function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("7Y9D8");const i=document.querySelector(".form"),l=document.querySelector("input[name=delay]"),u=document.querySelector("input[name=step]"),s=document.querySelector("input[name=amount]");function d(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r&&n({position:e,delay:t}),o({position:e,delay:t})}),t)}))}l.addEventListener("input",(function(){const e=l.value;localStorage.setItem("delay",e)})),u.addEventListener("input",(function(){const e=u.value;localStorage.setItem("step",e)})),s.addEventListener("input",(function(){const e=s.value;localStorage.setItem("amount",e)})),i.addEventListener("submit",(function(t){t.preventDefault();const n=localStorage.getItem("delay"),o=localStorage.getItem("step"),r=localStorage.getItem("amount"),i=JSON.parse(r),l=JSON.parse(o);let u=JSON.parse(n);for(let t=1;t<=i;t+=1)d(t,u).then((({position:t,delay:n})=>{e(a).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(a).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),u+=l}));
//# sourceMappingURL=03-promises.c9bde864.js.map
