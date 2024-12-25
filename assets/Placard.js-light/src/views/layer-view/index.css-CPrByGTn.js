function e({opacity:t,hidden:i}){return this.style.cssText=`
        display: inherit;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        background: transparent;
        opacity: ${t||1};
        visibility:  ${(i?"hidden":!1)||"visible"};
        `,!0}export{e as default};
