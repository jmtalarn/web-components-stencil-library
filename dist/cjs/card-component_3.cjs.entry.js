'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7511f354.js');

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
    this.feed = [];
  }
  async componentWillLoad() {
    const ret = await fetch(this.url);
    const text = await ret.text();
    this.feed = Array.from(new window.DOMParser().parseFromString(text, 'text/xml').scrollingElement.children[0].children)
      .filter(item => item.tagName === 'item')
      .slice(0, this.count)
      .map(item => ({
      title: item.querySelector('title'),
      link: item.querySelector('link'),
      description: item.querySelector('description'),
      pubDate: item.querySelector('pubDate'),
    }));
    console.log({ title: this.feed[0].title, link: this.feed[0].link });
  }
  /*
 <div>
          {this.feed.map(item => (
            <h4>{item.title}</h4>
          ))}
        </div>
        */
  render() {
    return (index.h(index.Host, null, index.h("h3", null, this.name, " ", this.count), index.h("a", { href: "{this.url}" }, this.url), this.feed.map(item => (index.h("div", null, index.h("h4", null, index.h("a", { href: item.link.textContent, target: "_blank" }, item.title.textContent)), index.h("small", null, item.pubDate.textContent), index.h("p", null, item.description.textContent)))), index.h("slot", null)));
  }
};
RssReader.style = rssReaderCss;

exports.card_component = CardComponent;
exports.my_component = MyComponent;
exports.rss_reader = RssReader;
