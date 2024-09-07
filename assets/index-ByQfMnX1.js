(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();function M({canvas:e,gridcellDim:t}){const s=W(0,t,e.width),o=e.getContext("2d");o.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),o.clearRect(0,0,o.canvas.width,o.canvas.height);function i(c,n,u=t,a=t){o.beginPath(),o.rect(c,n,u,a),o.strokeStyle="black",o.lineWidth=1,o.stroke()}const r=Math.ceil(o.canvas.clientHeight/t);return[...new Array(r)].map((c,n)=>1+n).forEach(c=>{s.forEach((n,u)=>{c===1&&i(t*u,0),i(t*u,t*c)})}),!0}function W(e,t,s,o=!0,i=[]){const r=[];e:for(e;e<s+o;e+=t){for(let c of i)if(c==e)continue e;r.push(e)}return r}function O({canvas:e,gridcellDim:t,scalingFactorX:s=2,scalingFactorY:o=2,gridEnabled:i=!0,hitDetectionEnabled:r=!0}){const c={isMobile:window.screen.orientation.type.includes("portrait")&&i!==!1},n=e.parentElement,u=(Number(n.getAttribute("readonly:width"))/Number(e.width))**-1,a=(Number(n.getAttribute("readonly:height"))/Number(e.height))**-1,l=Math.min(u,a),P=Math.ceil(n.clientWidth/t),H=Math.ceil(n.clientHeight/t),d=t*s*l**-1,h=t*o*l**-1,m="green",g=i?(P*t-d*l)/2:(n.clientWidth-d*l)/2,x=i?(H*t-h*l)/2:(n.clientHeight-h*l)/2,f=e.getContext("2d");if(f.clearRect(0,0,e.width,e.height),f.fillStyle=m,f.scale(devicePixelRatio,devicePixelRatio),c.isMobile){let[y,p]=[(n.clientWidth-d*l)/2,(n.clientHeight-h*l)/2];f.fillRect(y,p,d*l,h*l)}else f.fillRect(g,x,d*l,h*l);if(r)if(c.isMobile){let[y,p]=[(n.clientWidth-d*l)/2,(n.clientHeight-h*l)/2];R({canvas:e,viewConfig:{x:y,y:p,absoluteHeight:h,absoluteWidth:d,size:l,fill:m}})}else R({canvas:e,viewConfig:{x:g,y:x,absoluteHeight:h,absoluteWidth:d,size:l,fill:m}})}function R({canvas:e,viewConfig:t}){e.addEventListener("mousemove",s=>{const o={x:e.width/e.getBoundingClientRect().width,y:e.height/e.getBoundingClientRect().height},i=new Path2D;i.rect(t.x,t.y,t.absoluteWidth*t.size,t.absoluteHeight*t.size);const r=(s.clientX-e.getBoundingClientRect().left)*o.x,c=(s.clientY-e.getBoundingClientRect().top)*o.y,n=e.getContext("2d");n.clearRect(0,0,e.width,e.height),n.isPointInPath(i,r,c)?n.fillStyle="red":n.fillStyle=t.fill,n.fillRect(t.x,t.y,t.absoluteWidth*t.size,t.absoluteHeight*t.size)})}Object.defineProperties(Document.prototype,{findOne:{value:document.getElementById.bind(document)},findAll:{value:document.getElementsByClassName.bind(document)}});const b="layers";Object.defineProperty(HTMLElement.prototype,b,{get(){return this.children}});function L(e,t=20){const s={stageWidth:(e==null?void 0:e.clientWidth)*window.devicePixelRatio,stageHeight:(e==null?void 0:e.clientHeight)*window.devicePixelRatio};return e[b].length>0&&Array.from(e[b]).forEach(o=>{o.width=s.stageWidth,o.height=s.stageHeight}),{gridcellDim:Math.floor(e.clientWidth,e.clientHeight)/t}}function w(e){window.requestAnimationFrame(()=>{let{gridcellDim:t}=L(e);M({canvas:stage.layers.grid,gridcellDim:t})&&O({canvas:stage.layers.rect,gridcellDim:t})})}const A="placard.js";document.addEventListener("DOMContentLoaded",()=>{document.title=A;const e=document.findOne("stage");e.setAttribute("readonly:width",Math.floor(e.clientWidth*window.devicePixelRatio)),e.setAttribute("readonly:height",Math.floor(e.clientHeight*window.devicePixelRatio)),w(e),window.addEventListener("resize",w.bind(null,e))});
