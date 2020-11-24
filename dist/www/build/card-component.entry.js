import { r as registerInstance, h, e as Host } from './index-144a4261.js';

const cardComponentCss = ":host{display:inline-block}article{width:20rem;border-radius:5px;border:none;box-shadow:0px 0px 2px #00000055;padding:0.5rem;margin:0.5rem}article h2.header{margin:0}";

const CardComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("article", null, h("header", null, h("h2", { class: "header" }, this.cardTitle)), h("p", { class: "content" }, h("slot", { name: "content" })), h("footer", null, h("slot", { name: "cta" })))));
  }
};
CardComponent.style = cardComponentCss;

export { CardComponent as card_component };
