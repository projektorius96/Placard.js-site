import e from"./src/index-q0B0Z0BZ.js";import r from"./implementation/index-Bsb9ISN2.js";import i,{GUI as l}from"./user-settings-BA-055cK.js";import p from"./package.json-B32qRvxr.js";document.addEventListener("DOMContentLoaded",()=>{document.title=p.name;const o=[0,0],{setAngle:a}=e.Helpers.Trigonometry,n=new e.ViewGroup.Stage({}),t=l.find({name:"slider",index:1});t&&(t.on("input",d=>{const[s,w]=[-1,1],m={angle:s*Math.floor(d.target.value)};n.replaceChildren()||n.add([new e.ViewGroup.Layer({name:"grid",opacity:.25,hidden:!1}),new e.ViewGroup.Layer({name:"right-triangle",transform:[...a(m.angle),...o]}),new e.ViewGroup.Layer({name:"wireframe",hidden:!0})]),window.dispatchEvent(new Event("resize"))}),t.dispatchEvent(new Event("input"))),r({stage:n,Placard:e,UserSettings:i})&&window.addEventListener("resize",r.bind(null,{stage:n,Placard:e,UserSettings:i}))});
