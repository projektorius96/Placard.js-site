(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();class O{static draw({canvas:e,options:n}){e.style.cssText=`
            opacity: ${n.opacity||1};
        `;let r=stage.grid.GRIDCELL_DIM;const o=D(0,r,e.width),i=e.getContext("2d");i.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),i.clearRect(0,0,i.canvas.width,i.canvas.height);function s(c,a,h=r,u=r){i.beginPath(),i.rect(c,a,h,u),i.strokeStyle="black",i.lineWidth=2,i.stroke()}const f=Math.ceil(i.canvas.clientHeight/r);return[...new Array(f)].map((c,a)=>1+a).forEach(c=>{o.forEach((a,h)=>{c===1&&s(r*h,0),s(r*h,r*c)})}),!0}}function D(t,e,n,r=!0,o=[]){const i=[];e:for(t;t<n+r;t+=e){for(let s of o)if(s==t)continue e;i.push(t)}return i}class G{static draw({canvas:e,options:n={scalingFactorX:1,scalingFactorY:1},on:r=!1}){const o=e.parentElement;let i=o.grid.GRIDCELL_DIM,s=(Number(o.getAttribute("readonly:width"))/Number(e.width))**-1,f=(Number(o.getAttribute("readonly:height"))/Number(e.height))**-1,c=Math.min(s,f),a=i*n.scalingFactorX*c**-1,h=i*n.scalingFactorY*c**-1,u=Math.ceil(o.clientWidth/i),g=Math.ceil(o.clientHeight/i),y=a*c,m=h*c,P=(u*i-y)/2,L=(g*i-m)/2;const l=new Path2D;l.type="rect",l.fillStyle=n.fillStyle,l.x=P,l.y=L,l.rect(0,0,a*c,h*c);const d=e.getContext("2d");return d.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),d.fillStyle=l.fillStyle,d.save(),r&&typeof r=="function"&&r({path:l}),d.fill(l),d.restore(),l}}class R{static draw({canvas:e,options:n,on:r=!1}){const o=e.parentElement;let i=o.grid.GRIDCELL_DIM,s=(Number(o.getAttribute("readonly:width"))/Number(e.width))**-1,f=(Number(o.getAttribute("readonly:height"))/Number(e.height))**-1,c=Math.min(s,f),a=i*(n.scalingFactorXY||1)*c**-1,h=i*(n.scalingFactorXY||1)*c**-1,u=Math.ceil(o.clientWidth/i),g=Math.ceil(o.clientHeight/i),y=a*c,m=h*c,P=u*i/2,L=g*i/2;const l=new Path2D;l.type="line",l.strokeStyle=n.strokeStyle,l.lineWidth=n.lineWidth,l.x=P,l.y=L;const d=e.getContext("2d");return d.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),d.beginPath(),n.offset?(l.moveTo(0+n.offset.POS_X,0+n.offset.POS_Y),l.lineTo(0+n.offset.POS_X+y*n.offset.COS_ANGLE,0+n.offset.POS_Y+m*n.offset.SIN_ANGLE)):(l.moveTo(0,0),l.lineTo(0+y*N,0+m*A)),d.strokeStyle=l.strokeStyle,d.lineWidth=l.lineWidth,d.save(),r&&typeof r=="function"&&r({path:l}),d.stroke(l),d.restore(),l}}const N=Math.cos(0),A=Math.sin(0);function w({context:t,path:e,GUI_STUB:n}){switch(e.type){case"rect":t.setTransform(..._(b(0),e.x,e.y));break;case"line":t.setTransform(..._(b(n.CURRENT_ANGLE),e.x,e.y));break}return!0}function _(t,e=0,n=0){const r=window.devicePixelRatio,o=Math.cos(t),i=Math.sin(t);let s=o,f=i,c=-i;return[s,f,c,o,e,n].map(g=>g=g*r)}function b(t){return t*(Math.PI/180)}const x=20,p="pointermove",M=1/Math.sin(Math.PI/4),E={CURRENT_ANGLE:-45};function C({canvas:t,context:e,cursor:n}){switch(t.id){case"grid":e.stack=[O.draw({canvas:t,options:{opacity:.25}})];break;case"right-triangle":e.stack=[G.draw({canvas:t,options:{scalingFactorX:.1,scalingFactorY:.1,fillStyle:"black"},on:function({path:r}){w({context:e,path:r,GUI_STUB:E})}}),R.draw({canvas:t,options:{strokeStyle:"red",lineWidth:4,scalingFactorXY:3,offset:{POS_X:0,POS_Y:0,COS_ANGLE:N,SIN_ANGLE:A}},on:function({path:r}){w({context:e,path:r,GUI_STUB:E})}}),R.draw({canvas:t,options:{strokeStyle:"green",lineWidth:4,scalingFactorXY:3,offset:{POS_X:stage.grid.GRIDCELL_DIM*3,POS_Y:0,COS_ANGLE:Math.cos(Math.PI/2),SIN_ANGLE:-Math.sin(Math.PI/2)}},on:function({path:r}){w({context:e,path:r,GUI_STUB:E})}}),R.draw({canvas:t,options:{strokeStyle:"blue",lineWidth:4,scalingFactorXY:3,offset:{POS_X:0,POS_Y:0,COS_ANGLE:Math.cos(Math.PI/4)*M,SIN_ANGLE:-Math.sin(Math.PI/4)*M}},on:function({path:r}){w({context:e,path:r,GUI_STUB:E}),e.isPointInStroke(r,n.x,n.y)?e.strokeStyle="coral":e.strokeStyle=r.strokeStyle}})];break}}const S="layers";Object.defineProperties(HTMLElement.prototype,{[S]:{get(){return this.children}}});function T({stage:t,options:e}){t.grid={GRIDCELL_DIM:t.clientWidth/k(e.GRIDCELL_DIM_RATIO)};const n={stageWidth:(t==null?void 0:t.clientWidth)*window.devicePixelRatio,stageHeight:(t==null?void 0:t.clientHeight)*window.devicePixelRatio};return t[S].length>0&&Array.from(t[S]).forEach(r=>{r.width=n.stageWidth,r.height=n.stageHeight}),!0}function W(t){if(!Array.isArray(t))return Array.from(t)}function k(t=0){const e=Math.ceil(t);return e%2===1?e+1:e}function I(t){return window.requestAnimationFrame(()=>{T({stage:t,options:{GRIDCELL_DIM_RATIO:x}})&&W(t.layers).forEach(e=>{e.addEventListener(p,n=>{const r=e.getContext("2d");r.clearRect(0,0,e.width,e.height);const o={x:e.width/e.getBoundingClientRect().width,y:e.height/e.getBoundingClientRect().height},i={x:(n.clientX-e.getBoundingClientRect().left)*o.x,y:(n.clientY-e.getBoundingClientRect().top)*o.y};C({canvas:e,context:r,cursor:i})}),e.dispatchEvent(new Event(p))})}),!0}const Y="placard.js",X="0.0.2",v="module",F={vite:"^5.4.0"},H={name:Y,version:X,type:v,devDependencies:F};document.addEventListener("DOMContentLoaded",()=>{document.title=H.name;const t=document.getElementById("stage");t?(t.setAttribute("readonly:width",Math.floor(t.clientWidth*window.devicePixelRatio)),t.setAttribute("readonly:height",Math.floor(t.clientHeight*window.devicePixelRatio)),I(t),window.addEventListener("resize",I.bind(null,t))):console.warn('Make sure you have declared %c"stage" in your %c"index.html" entry file',"font-style: italic;","font-style: italic;")});
