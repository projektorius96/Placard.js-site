import i from"./index.css-1CT1Y3m8.js";const o=new URL(import.meta.url).pathname.split("/").at(-2);customElements.define(o,class extends HTMLDivElement{constructor({container:t=document.body,id:e="stage"}){return i.call(super()),this.id=e,t!==document.body?t.prepend(this):document.body.prepend(this),this}connectedCallback(){this.setAttribute("readonly:width",Math.floor(this.clientWidth*window.devicePixelRatio)),this.setAttribute("readonly:height",Math.floor(this.clientHeight*window.devicePixelRatio))}},{extends:"div"});export{o as stage_view};