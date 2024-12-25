function e(){const t=new CSSStyleSheet;return t.insertRule(`
        :root {
            --vertical-scrollbar-width: calc(100vw - 100%);
        }
    `),t.insertRule(`
        body,
        body * {
            box-sizing: border-box;
        }
    `),t.insertRule(`
        body {
            padding: 0;
            margin: 0;
        }
    `),document.adoptedStyleSheets.push(t),this.style.cssText=`
        display: block;
        width: calc( 100vw - var(--vertical-scrollbar-width) );
        height: 100vh;
        position: relative;
        top: 0px;
        left: 0px;
        `,!0}export{e as default};
