document.querySelectorAll(".nav__link").forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();var n=t.getAttribute("href").slice(1),o=document.getElementById(n);window.history.pushState("",document.title,window.location.pathname+window.location.search),o&&o.scrollIntoView({behavior:"smooth"})})});
//# sourceMappingURL=index.9b0fd53d.js.map
