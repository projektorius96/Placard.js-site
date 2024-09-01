(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();Object.defineProperties(Document.prototype,{findOne:{value:document.getElementById.bind(document)},findAll:{value:document.getElementsByClassName.bind(document)}});Object.defineProperty(HTMLElement.prototype,"views",{get(){return this.children}});const g={gridcellDim:64};function x({canvas:t,gridcellDim:e,gridcellMatrix:s}){const n=t.getContext("2d");n.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),n.clearRect(0,0,n.canvas.width,n.canvas.height);function i(r,d,c=e,f=e){n.beginPath(),n.rect(r,d,c,f),n.strokeStyle="black",n.lineWidth=1,n.stroke()}const o=Math.floor(Number(n.canvas.height/e));return[...new Array(o)].map((r,d)=>1+d).forEach(r=>{s.forEach((d,c)=>{r===1&&i(e*c,0),i(e*c,e*r)})}),!0}function R(t,e,s,n=!0,i=[]){const o=[];e:for(t;t<s+n;t+=e){for(let r of i)if(r==t)continue e;o.push(t)}return o}function P({canvas:t,gridcellDim:e,scalingFactorX:s=2,scalingFactorY:n=2,gridEnabled:i=!0,hitDetectionEnabled:o=!0}){const r=(Number(t.parentElement.getAttribute("readonly:width"))/Number(t.width))**-1,d=(Number(t.parentElement.getAttribute("readonly:height"))/Number(t.height))**-1,c=Math.min(r,d),f=Math.ceil(t.parentElement.clientWidth/e),b=Math.ceil(t.parentElement.clientHeight/e),u=e*s,h=e*n,m=window.screen.orientation.type.includes("portrait")&&i!==!1?"coral":"green",p=i?(f*e-u*c)/2:(t.parentElement.clientWidth-u*c)/2,w=i?(b*e-h*c)/2:(t.parentElement.clientHeight-h*c)/2,a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),a.fillStyle=m,a.scale(devicePixelRatio,devicePixelRatio),a.fillRect(p,w,u*c,h*c),o&&E({canvas:t,viewConfig:{x:p,y:w,absoluteHeight:h,absoluteWidth:u,size:c,fill:m}})}function E({canvas:t,viewConfig:e}){t.addEventListener("mousemove",s=>{const n={x:t.width/t.getBoundingClientRect().width,y:t.height/t.getBoundingClientRect().height},i=new Path2D;i.rect(e.x,e.y,e.absoluteWidth*e.size,e.absoluteHeight*e.size);const o=(s.clientX-t.getBoundingClientRect().left)*n.x,r=(s.clientY-t.getBoundingClientRect().top)*n.y,d=t.getContext("2d");d.clearRect(0,0,t.width,t.height),d.isPointInPath(i,o,r)?d.fillStyle="red":d.fillStyle=e.fill,d.fillRect(e.x,e.y,e.absoluteWidth*e.size,e.absoluteHeight*e.size)})}const H="placard.js";document.addEventListener("DOMContentLoaded",()=>{document.title=H});const l=globalThis.stage=document.findOne("stage");l.setAttribute("readonly:width",Math.floor(l.clientWidth*window.devicePixelRatio));l.setAttribute("readonly:height",Math.floor(l.clientHeight*window.devicePixelRatio));function y(){l.views.grid.width=l.clientWidth*window.devicePixelRatio,l.views.grid.height=l.clientHeight*window.devicePixelRatio,l.views.rect.width=l.clientWidth*window.devicePixelRatio,l.views.rect.height=l.clientHeight*window.devicePixelRatio,window.requestAnimationFrame(()=>{x({canvas:l.views.grid,gridcellMatrix:R(0,g.gridcellDim,l.views.grid.width),gridcellDim:g.gridcellDim})&&P({canvas:l.views.rect,gridcellDim:g.gridcellDim})})}y();window.addEventListener("resize",y.bind(null,!1));