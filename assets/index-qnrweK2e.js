(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=n(o);fetch(o.href,t)}})();class P{static draw({canvas:i,options:n}){i.style.cssText=`
            opacity: ${n.opacity||1};
        `;let r=stage.grid.GRIDCELL_DIM;const o=p(0,r,i.width),t=i.getContext("2d");t.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),t.clearRect(0,0,t.canvas.width,t.canvas.height);function s(a,c,d=r,u=r){t.beginPath(),t.rect(a,c,d,u),t.strokeStyle="black",t.lineWidth=2,t.stroke()}const h=Math.ceil(t.canvas.clientHeight/r);return[...new Array(h)].map((a,c)=>1+c).forEach(a=>{o.forEach((c,d)=>{a===1&&s(r*d,0),s(r*d,r*a)})}),!0}}function p(e,i,n,r=!0,o=[]){const t=[];e:for(e;e<n+r;e+=i){for(let s of o)if(s==e)continue e;t.push(e)}return t}class S{static draw({canvas:i,options:n,scalingFactorX:r=1,scalingFactorY:o=1}){const t=i.parentElement;let s=t.grid.GRIDCELL_DIM,h=(Number(t.getAttribute("readonly:width"))/Number(i.width))**-1,a=(Number(t.getAttribute("readonly:height"))/Number(i.height))**-1,c=Math.min(h,a),d=s*r*c**-1,u=s*o*c**-1;const L=Math.ceil(t.clientWidth/s),w=Math.ceil(t.clientHeight/s),g=(L*s-d*c)/2,y=(w*s-u*c)/2,l=new Path2D;l.type=S.name;const f=i.getContext("2d");return f.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),f.fillStyle=n.fillStyle,l.rect(g,y,d*c,u*c),l}}class m{static draw({canvas:i,options:n}){const r=i.parentElement;let o=r.grid.GRIDCELL_DIM,t=(Number(r.getAttribute("readonly:width"))/Number(i.width))**-1,s=(Number(r.getAttribute("readonly:height"))/Number(i.height))**-1,h=Math.min(t,s),a=o*(n.scalingFactorXY||1)*h**-1,c=o*(n.scalingFactorXY||1)*h**-1,d=Math.ceil(r.clientWidth/o),u=Math.ceil(r.clientHeight/o),L=a*h,w=c*h,g=d*o/2,y=u*o/2;const l=new Path2D;l.type=m.name,l.strokeStyle=n.strokeStyle,l.lineWidth=n.lineWidth;const f=i.getContext("2d");return f.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),f.beginPath(),n.offset?(l.moveTo(g+n.offset.POS_X,y+n.offset.POS_Y),l.lineTo(g+n.offset.POS_X+L*n.offset.COS_ANGLE,y+n.offset.POS_Y+w*n.offset.SIN_ANGLE)):(l.moveTo(g,y),l.lineTo(g+L*DEFAULT_COS_ANGLE,y+w*DEFAULT_SIN_ANGLE)),f.lineWidth=n.lineWidth,f.strokeStyle=n.strokeStyle,l}}function M({canvas:e}){const i=e.getContext("2d"),n=new Path2D;switch(globalThis._stack=n.stack=[],e.id){case"grid":P.draw({canvas:stage.layers[e.id],options:{opacity:.25}});break;case"right-triangle":n.stack.push(S.draw({scalingFactorX:.1,scalingFactorY:.1,canvas:stage.layers[e.id],options:{fillStyle:"black"}}),m.draw({canvas:stage.layers[e.id],options:{scalingFactorXY:3,strokeStyle:"red",lineWidth:4,offset:{POS_X:0,POS_Y:0,COS_ANGLE:I,SIN_ANGLE:N}}}),m.draw({canvas:stage.layers[e.id],options:{scalingFactorXY:3,strokeStyle:"green",lineWidth:4,offset:{POS_X:stage.grid.GRIDCELL_DIM*3,POS_Y:0,COS_ANGLE:Math.cos(Math.PI/2),SIN_ANGLE:-Math.sin(Math.PI/2)}}}),m.draw({canvas:stage.layers[e.id],options:{scalingFactorXY:3,strokeStyle:"blue",lineWidth:4,offset:{POS_X:0,POS_Y:0,COS_ANGLE:Math.cos(Math.PI/4)*b,SIN_ANGLE:-Math.sin(Math.PI/4)*b}}}));break}n.stack.forEach((r,o)=>{switch(r.type){case S.name:i.fill(r);break;case m.name:i.strokeStyle=r.strokeStyle,i.lineWidth=r.lineWidth,i.stroke(r);break}r.index=++o})}const A=20,I=Math.cos(0),N=Math.sin(0),b=1/Math.sin(Math.PI/4),_="layers";Object.defineProperty(HTMLElement.prototype,_,{get(){return this.children}});function O({stage:e,options:i}){e.grid={GRIDCELL_DIM:e.clientWidth/v(i.GRIDCELL_DIM_RATIO)};const n={stageWidth:(e==null?void 0:e.clientWidth)*window.devicePixelRatio,stageHeight:(e==null?void 0:e.clientHeight)*window.devicePixelRatio};return e[_].length>0&&Array.from(e[_]).forEach(r=>{r.width=n.stageWidth,r.height=n.stageHeight}),!0}function D(e){if(!Array.isArray(e))return Array.from(e)}function v(e=0){const i=Math.ceil(e);return i%2===1?i+1:i}function E(e){return window.requestAnimationFrame(()=>{O({stage:e,options:{GRIDCELL_DIM_RATIO:A}})&&D(e.layers).forEach(i=>M({canvas:i}))}),!0}const x="placard.js",R="0.0.2",W="module",G={vite:"^5.4.0"},k={name:x,version:R,type:W,devDependencies:G};document.addEventListener("DOMContentLoaded",()=>{document.title=k.name;const e=document.getElementById("stage");e?(e.setAttribute("readonly:width",Math.floor(e.clientWidth*window.devicePixelRatio)),e.setAttribute("readonly:height",Math.floor(e.clientHeight*window.devicePixelRatio)),E(e),window.addEventListener("resize",E.bind(null,e))):console.warn('Make sure you have declared %c"stage" in your %c"index.html" entry file',"font-style: italic;","font-style: italic;")});