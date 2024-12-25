function o({container:e,opacity:i,hidden:s,position:n="left",minWidth:t=15}){return this.style.cssText=`
            user-select: none;
            position: absolute;
                z-index:999;
            justify-self: ${(e.style.display="grid")&&n};
            min-width: ${t}%;
            border: 2px solid black;
            border-radius: 0.5em;
            padding: 0.5em;
            background-color: #d8d8d8;
            display: ${s?"none":"inherit"};
            opacity: ${i};
        `,window.addEventListener("resize",()=>{window.screen.orientation.type.includes("portrait")?(this.style.minWidth="100%",this.style.bottom="0px"):(this.style.minWidth=`${t}%`,this.style.bottom="unset")}),!0}export{o as default};
