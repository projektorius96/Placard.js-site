(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=l(i);fetch(i.href,r)}})();function H({canvas:e,gridcellDim:t}){const l=M(0,t,e.width),n=e.getContext("2d");n.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),n.clearRect(0,0,n.canvas.width,n.canvas.height);function i(o,s,d=t,c=t){n.beginPath(),n.rect(o,s,d,c),n.strokeStyle="black",n.lineWidth=1,n.stroke()}const r=Math.ceil(n.canvas.clientHeight/t);return[...new Array(r)].map((o,s)=>1+s).forEach(o=>{l.forEach((s,d)=>{o===1&&i(t*d,0),i(t*d,t*o)})}),!0}function M(e,t,l,n=!0,i=[]){const r=[];e:for(e;e<l+n;e+=t){for(let o of i)if(o==e)continue e;r.push(e)}return r}const y=[];function O(e){return e.length>=stage.layers.rect.stack.length?e.slice(-stage.layers.rect.stack.length):e}function P({canvas:e,gridcellDim:t,options:l,scalingFactorX:n=2,scalingFactorY:i=2,hitDetectionEnabled:r=!0}){const o=e.parentElement,s=(Number(o.getAttribute("readonly:width"))/Number(e.width))**-1,d=(Number(o.getAttribute("readonly:height"))/Number(e.height))**-1,c=Math.min(s,d),u=window.screen.orientation.type.includes("portrait")?t*n*c**-1*2:t*n*c**-1,a=window.screen.orientation.type.includes("portrait")?t*i*c**-1*2:t*i*c**-1,w=l.fill,R=Math.ceil(o.clientWidth/t),E=Math.ceil(o.clientHeight/t),b=(R*t-u*c)/2,x=(E*t-a*c)/2,f=new Path2D,h=e.getContext("2d");h.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),h.fillStyle=l.defaultFill,h.save();let[p,g]=[0,0];window.screen.orientation.type.includes("portrait")?([p,g]=[(o.clientWidth-u*c)/2,(o.clientHeight-a*c)/2],f.rect(p,g,u*c,a*c)):f.rect(b,x,u*c,a*c),r&&(window.screen.orientation.type.includes("portrait")?y.push({path:f,viewConfig:{x:p,y:g,absoluteHeight:a,absoluteWidth:u,size:c,fill:w,defaultFill:l.defaultFill}})&&v({canvas:e}):y.push({path:f,viewConfig:{x:b,y:x,absoluteHeight:a,absoluteWidth:u,size:c,fill:w,defaultFill:l.defaultFill}})&&v({canvas:e})),h.fill(f),h.restore()}function v({canvas:e}){const t=e.getContext("2d");e.addEventListener("mousemove",l=>{const n={x:e.width/e.getBoundingClientRect().width,y:e.height/e.getBoundingClientRect().height},i=(l.clientX-e.getBoundingClientRect().left)*n.x,r=(l.clientY-e.getBoundingClientRect().top)*n.y;[...new Array(stage.layers.rect.stack.length)].map(o=>O(y)).forEach((o,s)=>{t.isPointInPath(o[s].path,i,r)?t.fillStyle=o[s].viewConfig.fill:t.fillStyle=o[s].viewConfig.defaultFill,t.fill(o[s].path)})})}Object.defineProperties(Document.prototype,{findOne:{value:document.getElementById.bind(document)},findAll:{value:document.getElementsByClassName.bind(document)}});const m="layers";Object.defineProperty(HTMLElement.prototype,m,{get(){return this.children}});function A(e,t=20){const l={stageWidth:(e==null?void 0:e.clientWidth)*window.devicePixelRatio,stageHeight:(e==null?void 0:e.clientHeight)*window.devicePixelRatio};return e[m].length>0&&Array.from(e[m]).forEach(n=>{n.width=l.stageWidth,n.height=l.stageHeight}),{gridcellDim:Math.floor(e.clientWidth,e.clientHeight)/t}}function C(e){window.requestAnimationFrame(()=>{let{gridcellDim:t}=A(e);H({canvas:stage.layers.grid,gridcellDim:t})&&(stage.layers.rect.stack=[P({canvas:e.layers.rect,gridcellDim:t,options:{defaultFill:"lightpink",fill:"blue"}}),P({canvas:e.layers.rect,gridcellDim:t*.5,options:{defaultFill:"lightgreen",fill:"orange"}})].fill({type:stage.layers.rect.id}))})}const L="placard.js";document.addEventListener("DOMContentLoaded",()=>{document.title=L;const e=document.findOne("stage");e.setAttribute("readonly:width",Math.floor(e.clientWidth*window.devicePixelRatio)),e.setAttribute("readonly:height",Math.floor(e.clientHeight*window.devicePixelRatio)),C(e),window.addEventListener("resize",C.bind(null,e))});