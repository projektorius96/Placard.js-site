function s(t){this.style.cssText=`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
    `;const e=new CSSStyleSheet;return e.insertRule(t.cssRuleOverride||`
            ${this.tagName.toLowerCase()} > ul, ol {
                margin: 0;
                padding: 0;
                text-align: center;
            }
        `),e}export{s as default};
