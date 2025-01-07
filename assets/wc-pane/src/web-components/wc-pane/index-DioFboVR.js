import r from"./index.css-DMIiUIs-.js";const a="wc-pane";customElements.define(a,class extends HTMLElement{constructor({container:t,position:e,minWidth:s,draggable:o=!1,opacity:l=.75,hidden:n=!1}){return super(),r.call(this,{container:t,position:e,minWidth:s,opacity:l,hidden:n}),o&&d(this),t!==document.body?t.prepend(this):document.body.prepend(this),this}find({name:t,index:e=0}){return document.getElementsByName(t).item(e)}getInput({name:t,index:e=1}){return document.getElementsByName(t).item(e)}addSection({sectionCount:t=1,accessor:e="child",flex_direction:s="column"}){return Array.from({length:t}).map(()=>document.createElement("section")).map((o,l)=>(o.style.cssText=`
                    display: flex;
                    flex-direction: ${s};
                    padding: 4px;
                `,o.setAttribute("id",`${e}${e!=="parent"?l+1:""}`),o.setAttribute("name",`${e}${e!=="parent"?l+1:""}`),o))}addGroup({name:t,override_label:e="",nodes:s=[],open:o=!1,label:l=!0}){const n=new CSSStyleSheet;n.replaceSync(`
                    summary::marker {
                        content: "✅";
                    }

                    summary.open::marker {
                        content: "❎";
                    }
                `);const m=document.createElement("summary");m.id=e||t,m.textContent=m.id;const u=document.createElement("details");if(u.appendChild(m),u.name=t,u.open=o,m.classList.toggle("open",u.open),l||(m.style.display="none"),u.addEventListener("toggle",()=>{m.classList.toggle("open",u.open)}),!u.append(...s))return!this.append(u)&&document.adoptedStyleSheets.push(n),{name:t}}});function d(t){let e=null;function s(n){e.style.left=`${n.pageX}px`,e.style.top=`${n.pageY}px`}function o(){document.rm("mousemove",s),e=null}function l(n){e===null&&(e=n.currentTarget);const{altKey:m}=n;m&&(n.preventDefault(),document.on("mousemove",s))}t.on("mousedown",l),document.on("mouseup",o)}export{a as wc_pane};
