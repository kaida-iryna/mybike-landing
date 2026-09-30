document.querySelectorAll(".nav__link").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();let o=e.getAttribute("href").slice(1),n=document.getElementById(o);window.history.pushState("",document.title,window.location.pathname+window.location.search),n&&n.scrollIntoView({behavior:"smooth"})})});
//# sourceMappingURL=index.1e91d76b.js.map
