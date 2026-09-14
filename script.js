document.getElementById("year").textContent=new Date().getFullYear();
const btn=document.getElementById("shareBtn"),toast=document.getElementById("toast");
function msg(x){toast.textContent=x;toast.classList.add("show");clearTimeout(window._t);window._t=setTimeout(()=>toast.classList.remove("show"),2200)}
btn.onclick=async()=>{try{if(navigator.share){await navigator.share({title:document.title,text:"My personal QR card",url:location.href})}else{await navigator.clipboard.writeText(location.href);msg("Link copied")}}catch(e){msg("Share cancelled")}};
