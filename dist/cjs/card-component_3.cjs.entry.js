'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0d4ae52c.js');

const cardComponentCss = ":host{display:inline-block}article{width:20rem;border-radius:5px;border:none;box-shadow:0px 0px 2px #00000055;padding:0.5rem;margin:0.5rem}article h2.header{margin:0}";

const CardComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("article", null, index.h("header", null, index.h("h2", { class: "header" }, this.cardTitle)), index.h("p", { class: "content" }, index.h("slot", { name: "content" })), index.h("footer", null, index.h("slot", { name: "cta" })))));
  }
};
CardComponent.style = cardComponentCss;

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return index.h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

const rssReaderCss = ":host{display:block}";

const RssReader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.url = 'https://blog.jmtalarn.com/feed.xml';
    this.name = 'Web dev notes';
    this.count = 5;
  }
  render() {
    return (index.h(index.Host, null, index.h("h3", null, this.name, " ", this.count), index.h("a", { href: "{this.url}" }, this.url), index.h("slot", null)));
  }
};
RssReader.style = rssReaderCss;

exports.card_component = CardComponent;
exports.my_component = MyComponent;
exports.rss_reader = RssReader;
