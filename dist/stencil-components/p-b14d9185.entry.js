import{r,h as s,H as t}from"./p-2fcf79ae.js";const e=class{constructor(s){r(this,s)}render(){return s(t,null,s("article",null,s("header",null,s("h2",{class:"header"},this.cardTitle)),s("p",{class:"content"},s("slot",{name:"content"})),s("footer",null,s("slot",{name:"cta"}))))}};e.style=":host{display:inline-block}article{width:20rem;border-radius:5px;border:none;box-shadow:0px 0px 2px #00000055;padding:0.5rem;margin:0.5rem}article h2.header{margin:0}";const n=class{constructor(s){r(this,s)}getText(){return(this.first||"")+((r=this.middle)?" "+r:"")+((s=this.last)?" "+s:"");var r,s}render(){return s("div",null,"Hello, World! I'm ",this.getText())}};n.style=":host{display:block}";const l=class{constructor(s){r(this,s)}render(){return s(t,null,s("h3",null,"This is a RSS Reader"),s("slot",null))}};l.style=":host{display:block}";export{e as card_component,n as my_component,l as rss_reader}