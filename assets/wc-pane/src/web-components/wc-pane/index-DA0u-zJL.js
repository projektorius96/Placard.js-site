import r from"./index.css-DMIiUIs-.js";const a="wc-pane";customElements.define(a,class extends HTMLElement{constructor({container:t,position:e,minWidth:l,draggable:o=!1,opacity:m=.75,hidden:n=!1}){return super(),r.call(this,{container:t,position:e,minWidth:l,opacity:m,hidden:n}),o&&d(this),t!==document.body?t.prepend(this):document.body.prepend(this),this}find({name:t,index:e=0}){return document.getElementsByName(t).item(e)}addSection({sectionCount:t=1,accessor:e="child",flex_direction:l="column"}){return Array.from({length:t}).map(()=>document.createElement("section")).map((o,m)=>(o.style.cssText=`
                    display: flex;
                    flex-direction: ${l};
                    padding: 4px;
                `,o.setAttribute("id",`${e}${e!=="parent"?m+1:""}`),o.setAttribute("name",`${e}${e!=="parent"?m+1:""}`),o))}addGroup({name:t,override_label:e="",nodes:l=[],open:o=!1,label:m=!0}){const n=new CSSStyleSheet;n.replaceSync(`
                    summary::marker {
                        content: "✅";
                    }

                    summary.open::marker {
                        content: "❎";
                    }
                `);const s=document.createElement("summary");s.id=e||t,s.textContent=s.id;const u=document.createElement("details");if(u.appendChild(s),u.name=t,u.open=o,s.classList.toggle("open",u.open),m||(s.style.display="none"),u.addEventListener("toggle",()=>{s.classList.toggle("open",u.open)}),!u.append(...l))return!this.append(u)&&document.adoptedStyleSheets.push(n),{name:t}}});function d(t){let e=null;function l(n){e.style.left=`${n.pageX}px`,e.style.top=`${n.pageY}px`}function o(){document.rm("mousemove",l),e=null}function m(n){e===null&&(e=n.currentTarget);const{altKey:s}=n;s&&(n.preventDefault(),document.on("mousemove",l))}t.on("mousedown",m),document.on("mouseup",o)}export{a as wc_pane};
