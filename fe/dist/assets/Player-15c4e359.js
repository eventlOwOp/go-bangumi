import{u as A,d as p,o as C,i as E,b as P,f as $,s as M,F as H,t as S,g as N}from"./index-e67bbfbf.js";import{a as u}from"./axios-9cbf0d09.js";import{A as l,p as O,a as V,s as F,i as B}from"./sidebar-a809c39c.js";import"./_commonjsHelpers-725317a4.js";var K=S('<div class="container-md mt-4"id=container><div class=row><div class="col-md-10 col-sm-12 mb-3 player-wrapper"><div id=artplayer></div></div><div class="col-md-2 col-sm-12 mb-3 sidebar-wrapper"style=position:relative><div class=sidebar><div class=item-control-wrap><span class="item item-control">返回</span><span class="item item-control">更新</span><span class="item item-control">一起看'),W=S("<span class=item>");function z(i){const r=location.href.split("#")[0];location.replace(r+"#"+i)}function J(){l.CONTROL_HIDE_TIME=1e3;let{path:i}=A();i=decodeURI(i);const[r,k]=p([]),[I,_]=p({}),T=u.post("/scandir",{path:decodeURI(i)}).then(({data:t})=>{k(t.data),_({alist:t.alist})});let s=decodeURIComponent(location.hash.slice(1));s===""&&(s=localStorage.getItem(i)??null);const[a,d]=p(s);async function m(t){return I().alist?await u.post("/geturl",{dir:i,ep:t}).then(({data:e})=>e):`/video/${encodeURI(i)}/${encodeURI(t)}`}C(async()=>{function t(){art.currentTime=localStorage.getItem(a())??0}(async function(){await T,s===null&&(d(r()[0].file),t()),r().every(e=>e.file!=s)&&(d(r()[0].file),localStorage.removeItem(a()),t())})(),window.art=new l({container:document.getElementById("artplayer"),url:await m(a()),screenshot:!0,theme:"#23ade5",fullscreen:!0,fullscreenWeb:!0,miniProgressBar:!0,pip:!0,hotkey:!1,useSSR:!0,poster:O,icons:{loading:`<div style="display:flex;flex-direction:column;align-items:center;"><img src="${V}" width="24" height="24"/><span style="font-style:normal;">Loading</span></div>`,state:`<img width="150" heigth="150" src="${F}"/>`,indicator:`<img width="16" heigth="16" src="${B}"/>`}}),art.on("resize",()=>{art.autoHeight()}),art.on("video:timeupdate",()=>{art.currentTime&&localStorage.setItem(a(),art.currentTime)}),art.on("video:ended",()=>{localStorage.removeItem(a());const e=b();e&&d(e)}),N(async()=>{z(a()),localStorage.setItem(i,a()),await art.switchUrl(await m(a())),art.pause(),t()}),document.addEventListener("keydown",async e=>{if(!["TEXTAREA","INPUT"].includes(e.target.tagName)){if(e.key==="f")e.preventDefault(),art.fullscreenWebToggle();else if(e.key===" ")e.preventDefault(),art.toggle();else if(e.key==="k")e.preventDefault(),art.forward=80;else if(e.key==="ArrowRight")e.preventDefault(),art.forward=l.SEEK_STEP;else if(e.key==="ArrowLeft")e.preventDefault(),art.backward=l.SEEK_STEP;else if(e.key==="ArrowUp")e.preventDefault(),art.volume+=l.VOLUME_STEP;else if(e.key==="ArrowDown")e.preventDefault(),art.volume-=l.VOLUME_STEP;else if(/^\d$/.test(e.key)){e.preventDefault();const n=parseInt(e.key);n&&(art.playbackRate=n)}}}),s&&t()});function b(){let t=0,e=null;for(;r()[t].file!=a();)++t;return++t<r().length&&(e=r()[t].file),e}async function U(){const t=await u.post("/together/add",{url:await m(a()),name:`${i} ${a()}`}).then(e=>e.data.id);location.href=`/together/${t}`}return(()=>{var t=K(),e=t.firstChild,n=e.firstChild,L=n.firstChild,R=n.nextSibling,g=R.firstChild,D=g.firstChild,h=D.firstChild,y=h.nextSibling,x=y.nextSibling;return h.addEventListener("click",()=>location.href="/"),y.addEventListener("click",()=>location.href="/add?s="+encodeURIComponent(i)),x.addEventListener("click",U),E(g,P(H,{get each(){return r()},children:f=>(()=>{var o=W();return o.addEventListener("click",()=>d(f.file)),E(o,()=>f.name),$(c=>{var w=f.file===a(),v=f.name;return w!==c.e&&o.classList.toggle("active",c.e=w),v!==c.t&&M(o,"title",c.t=v),c},{e:void 0,t:void 0}),o})()}),null),$(()=>L.innerHTML=l.html),t})()}export{J as default};
//# sourceMappingURL=Player-15c4e359.js.map