import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const cardComponentCss = ":host{display:inline-block}article{width:20rem;border-radius:5px;border:none;box-shadow:0px 0px 2px #00000055;padding:0.5rem;margin:0.5rem}article h2.header{margin:0}";

const CardComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("article", null, h("header", null, h("h2", { class: "header" }, this.cardTitle)), h("p", { class: "content" }, h("slot", { name: "content" })), h("footer", null, h("slot", { name: "cta" })))));
  }
  static get style() { return cardComponentCss; }
};

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const rssReaderCss = ":host{display:block}";

const RssReader = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.url = 'https://blog.jmtalarn.com/feed.xml';
    this.name = 'Web dev notes';
    this.count = 5;
    this.thing = 'Nothing here';
  }
  async componentWillLoad() {
    const ret = await fetch(this.url);
    this.thing = await ret.text();
  }
  render() {
    return (h(Host, null, h("h3", null, this.name, " ", this.count), h("a", { href: "{this.url}" }, this.url), h("div", null, this.thing), h("slot", null)));
  }
  static get style() { return rssReaderCss; }
};

const CardComponent$1 = /*@__PURE__*/proxyCustomElement(CardComponent, [1,"card-component",{"cardTitle":[1,"card-title"]}]);
const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const RssReader$1 = /*@__PURE__*/proxyCustomElement(RssReader, [1,"rss-reader",{"url":[1],"name":[1],"count":[2]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      CardComponent$1,
  MyComponent$1,
  RssReader$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { CardComponent$1 as CardComponent, MyComponent$1 as MyComponent, RssReader$1 as RssReader, defineCustomElements };
