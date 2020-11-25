'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3e7e9d8a.js');

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

const rssReaderCss = ":host{display:block}.rss-reader{--article-grid-width:var(--article-width, 12rem);--article-list-width:var(--article-width, 100%)}.rss-channel.grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit, minmax(var(--article-grid-width), 1fr))}.rss-channel.list .rss-article{width:var(--article-list-width)}.rss-article{line-height:1.5rem;margin:1rem auto;padding:0.5rem}.rss-article h4,.rss-article p{margin:0}";

const RssReader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.url = 'https://blog.jmtalarn.com/feed.xml';
    this.name = 'Web dev notes';
    this.count = 5;
    this.display = 'list';
    this.feed = [];
  }
  async componentWillLoad() {
    const ret = await fetch(this.url);
    const text = await ret.text();
    this.feed = Array.from(new window.DOMParser().parseFromString(text, 'text/xml').scrollingElement.children[0].children)
      .filter((item) => item.tagName === 'item')
      .slice(0, this.count)
      .map((item) => {
      return {
        title: item.querySelector('title'),
        link: item.querySelector('link'),
        description: item.querySelector('description'),
        pubDate: item.querySelector('pubDate'),
      };
    });
  }
  /*
 <div>
      {this.feed.map(item => (
      <h4>{item.title}</h4>
      ))}
    </div>
    */
  render() {
    const rssListClassName = `rss-channel ${this.display === 'grid' ? 'grid' : 'list'}`;
    return (index.h(index.Host, null, index.h("div", { class: "rss-reader" }, index.h("h3", null, this.name), index.h("small", null, "These are the last ", this.count, " articles published there."), index.h("div", { class: rssListClassName }, this.feed.map((item) => (index.h("div", { class: "rss-article" }, index.h("h4", null, index.h("a", { href: item.link.textContent, target: "_blank" }, item.title.textContent)), index.h("small", null, item.pubDate.textContent), index.h("p", null, item.description.textContent))))), index.h("slot", null))));
  }
  componentDidRender() {
    if (this.articleStyle) {
      const rssArticles = this.el.shadowRoot.querySelectorAll('.rss-article');
      Array.from(rssArticles).forEach((article) => {
        article.style = this.articleStyle;
      });
    }
    if (this.articleWidth) {
      rssReader.style.setProperty('--article-width', this.articleWidth);
    }
  }
  get el() { return index.getElement(this); }
};
RssReader.style = rssReaderCss;

exports.card_component = CardComponent;
exports.my_component = MyComponent;
exports.rss_reader = RssReader;
