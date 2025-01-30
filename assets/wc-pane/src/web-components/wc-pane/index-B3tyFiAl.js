import p from"./index.css-DMIiUIs-.js";const d="wc-pane";customElements.define(d,class extends HTMLElement{constructor({container:t,position:e,minWidth:m,draggable:o=!1,opacity:s=.75,hidden:n=!1}){return super(),p.call(this,{container:t,position:e,minWidth:m,opacity:s,hidden:n}),o&&r(this),t!==document.body?t.prepend(this):document.body.prepend(this),this}find({name:t,index:e=0}){return document.getElementsByName(t).item(e)}getInput({name:t,index:e=1}){return document.getElementsByName(t).item(e)}addSection({sectionCount:t=1,accessor:e="child",flex_direction:m="column"}){return Array.from({length:t}).map(()=>document.createElement("section")).map((o,s)=>(o.style.cssText=`
                    display: flex;
                    flex-direction: ${m};
                    padding: 4px;
                `,o.setAttribute("id",`${e}${e!=="parent"?s+1:""}`),o.setAttribute("name",`${e}${e!=="parent"?s+1:""}`),o))}addGroup({name:t,override_label:e="",nodes:m=[],open:o=!1,label:s=!0,nestedUnder:n=null}){const a=new CSSStyleSheet;a.replaceSync(`
                    summary::marker {
                        content: "✅";
                    }

                    summary.open::marker {
                        content: "❎";
                    }
                `);const u=document.createElement("summary");u.id=e||t,u.textContent=u.id;const l=document.createElement("details");if(l.appendChild(u),l.name=t,l.open=o,u.classList.toggle("open",l.open),s||(u.style.display="none"),l.addEventListener("toggle",()=>{u.classList.toggle("open",l.open)}),!l.append(...m))return n!==null&&n instanceof HTMLElement?(l.style.width="100%",!n.append(l)&&document.adoptedStyleSheets.push(a)):!this.append(l)&&document.adoptedStyleSheets.push(a),{name:t}}});function r(t){let e=null;function m(n){e.style.left=`${n.pageX}px`,e.style.top=`${n.pageY}px`}function o(){document.rm("mousemove",m),e=null}function s(n){e===null&&(e=n.currentTarget);const{altKey:a}=n;a&&(n.preventDefault(),document.on("mousemove",m))}t.on("mousedown",s),document.on("mouseup",o)}export{d as wc_pane};
