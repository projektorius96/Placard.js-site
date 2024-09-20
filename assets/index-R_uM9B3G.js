(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();class D{static draw({canvas:e,options:n}){e.style.cssText=`
            opacity: ${n.opacity||1};
        `;let r=stage.grid.GRIDCELL_DIM;const o=G(0,r,e.width),i=e.getContext("2d");i.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),i.clearRect(0,0,i.canvas.width,i.canvas.height);function c(s,a,h=r,u=r){i.beginPath(),i.rect(s,a,h,u),i.strokeStyle="black",i.lineWidth=2,i.stroke()}const f=Math.ceil(i.canvas.clientHeight/r);return[...new Array(f)].map((s,a)=>1+a).forEach(s=>{o.forEach((a,h)=>{s===1&&c(r*h,0),c(r*h,r*s)})}),!0}}function G(t,e,n,r=!0,o=[]){const i=[];e:for(t;t<n+r;t+=e){for(let c of o)if(c==t)continue e;i.push(t)}return i}class _{static draw({canvas:e,options:n={scalingFactorX:1,scalingFactorY:1},on:r=!1}){const o=e.parentElement;let i=o.grid.GRIDCELL_DIM,c=(Number(o.getAttribute("readonly:width"))/Number(e.width))**-1,f=(Number(o.getAttribute("readonly:height"))/Number(e.height))**-1,s=Math.min(c,f),a=i*n.scalingFactorX*s**-1,h=i*n.scalingFactorY*s**-1,u=Math.ceil(o.clientWidth/i),g=Math.ceil(o.clientHeight/i),m=a*s,w=h*s,L=(u*i-m)/2,S=(g*i-w)/2;const l=new Path2D;l.type=_.name,l.fillStyle=n.fillStyle,l.x=L,l.y=S,l.rect(0,0,a*s,h*s);const d=e.getContext("2d");return d.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),d.fillStyle=l.fillStyle,d.save(),r&&typeof r=="function"&&r({path:l}),d.fill(l),d.restore(),l}}class y{static draw({canvas:e,options:n,on:r=!1}){const o=e.parentElement;let i=o.grid.GRIDCELL_DIM,c=(Number(o.getAttribute("readonly:width"))/Number(e.width))**-1,f=(Number(o.getAttribute("readonly:height"))/Number(e.height))**-1,s=Math.min(c,f),a=i*(n.scalingFactorXY||1)*s**-1,h=i*(n.scalingFactorXY||1)*s**-1,u=Math.ceil(o.clientWidth/i),g=Math.ceil(o.clientHeight/i),m=a*s,w=h*s,L=u*i/2,S=g*i/2;const l=new Path2D;l.type=y.name,l.strokeStyle=n.strokeStyle,l.lineWidth=n.lineWidth,l.x=L,l.y=S;const d=e.getContext("2d");return d.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),d.beginPath(),n.offset?(l.moveTo(0+n.offset.POS_X,0+n.offset.POS_Y),l.lineTo(0+n.offset.POS_X+m*n.offset.COS_ANGLE,0+n.offset.POS_Y+w*n.offset.SIN_ANGLE)):(l.moveTo(0,0),l.lineTo(0+m*A,0+w*O)),d.strokeStyle=l.strokeStyle,d.lineWidth=l.lineWidth,d.save(),r&&typeof r=="function"&&r({path:l}),d.stroke(l),d.restore(),l}}const A=Math.cos(0),O=Math.sin(0);function E({context:t,path:e,GUI_STUB:n}){switch(e.type){case"rect":t.setTransform(...b(p(0),e.x,e.y));break;case"line":t.setTransform(...b(p(n.CURRENT_ANGLE),e.x,e.y));break}return!0}function b(t,e=0,n=0){const r=window.devicePixelRatio,o=Math.cos(t),i=Math.sin(t);let c=o,f=i,s=-i;return[c,f,s,o,e,n].map(g=>g=g*r)}function p(t){return t*(Math.PI/180)}const x=20,M="pointermove",I=1/Math.sin(Math.PI/4),P={CURRENT_ANGLE:-45};function C({canvas:t,context:e,cursor:n}){switch(t.id){case"grid":e.stack=[D.draw({canvas:t,options:{opacity:.25}})];break;case"right-triangle":e.stack=[_.draw({canvas:t,options:{scalingFactorX:.1,scalingFactorY:.1,fillStyle:"black"},on:function({path:r}){E({context:e,path:r,GUI_STUB:P})}}),y.draw({canvas:t,options:{strokeStyle:"red",lineWidth:4,scalingFactorXY:3,offset:{POS_X:0,POS_Y:0,COS_ANGLE:A,SIN_ANGLE:O}},on:function({path:r}){E({context:e,path:r,GUI_STUB:P})}}),y.draw({canvas:t,options:{strokeStyle:"green",lineWidth:4,scalingFactorXY:3,offset:{POS_X:stage.grid.GRIDCELL_DIM*3,POS_Y:0,COS_ANGLE:Math.cos(Math.PI/2),SIN_ANGLE:-Math.sin(Math.PI/2)}},on:function({path:r}){E({context:e,path:r,GUI_STUB:P})}}),y.draw({canvas:t,options:{strokeStyle:"blue",lineWidth:4,scalingFactorXY:3,offset:{POS_X:0,POS_Y:0,COS_ANGLE:Math.cos(Math.PI/4)*I,SIN_ANGLE:-Math.sin(Math.PI/4)*I}},on:function({path:r}){E({context:e,path:r,GUI_STUB:P}),e.isPointInStroke(r,n.x,n.y)?e.strokeStyle="coral":e.strokeStyle=r.strokeStyle}})];break}}const R="layers";Object.defineProperties(HTMLElement.prototype,{[R]:{get(){return this.children}}});function T({stage:t,options:e}){t.grid={GRIDCELL_DIM:t.clientWidth/k(e.GRIDCELL_DIM_RATIO)};const n={stageWidth:(t==null?void 0:t.clientWidth)*window.devicePixelRatio,stageHeight:(t==null?void 0:t.clientHeight)*window.devicePixelRatio};return t[R].length>0&&Array.from(t[R]).forEach(r=>{r.width=n.stageWidth,r.height=n.stageHeight}),!0}function W(t){if(!Array.isArray(t))return Array.from(t)}function k(t=0){const e=Math.ceil(t);return e%2===1?e+1:e}function N(t){return window.requestAnimationFrame(()=>{T({stage:t,options:{GRIDCELL_DIM_RATIO:x}})&&W(t.layers).forEach(e=>{e.addEventListener(M,n=>{const r=e.getContext("2d");r.clearRect(0,0,e.width,e.height);const o={x:e.width/e.getBoundingClientRect().width,y:e.height/e.getBoundingClientRect().height},i={x:(n.clientX-e.getBoundingClientRect().left)*o.x,y:(n.clientY-e.getBoundingClientRect().top)*o.y};C({canvas:e,context:r,cursor:i})}),e.dispatchEvent(new Event(M))})}),!0}const Y="placard.js",X="0.0.2",v="module",F={vite:"^5.4.0"},H={name:Y,version:X,type:v,devDependencies:F};document.addEventListener("DOMContentLoaded",()=>{document.title=H.name;const t=document.getElementById("stage");t?(t.setAttribute("readonly:width",Math.floor(t.clientWidth*window.devicePixelRatio)),t.setAttribute("readonly:height",Math.floor(t.clientHeight*window.devicePixelRatio)),N(t),window.addEventListener("resize",N.bind(null,t))):console.warn('Make sure you have declared %c"stage" in your %c"index.html" entry file',"font-style: italic;","font-style: italic;")});
