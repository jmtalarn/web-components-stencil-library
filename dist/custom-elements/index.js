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

const rssReaderCss = ":host{display:block}.rss-reader{--article-grid-width:var(--article-width, 12rem);--article-list-width:var(--article-width, 100%)}.rss-channel.grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit, minmax(var(--article-grid-width), 1fr))}.rss-channel.list .rss-article{width:var(--article-list-width)}.rss-article{position:relative;line-height:1.5rem;margin:1rem auto;padding:0.5rem;display:flex;flex-direction:column}.rss-article h4,.rss-article p{margin:0}.rss-article p{height:var(--article-excerpt-height, auto);overflow:hidden}.rss-article .read-more{margin-top:auto;text-align:right}";

const RssReader = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
    this.url = 'https://blog.jmtalarn.com/feed.xml';
    this.name = 'Web dev notes';
    this.count = 5;
    this.display = 'list';
    this.readMore = 'Read more...';
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
    return (h(Host, null, h("div", { class: "rss-reader" }, h("h3", null, this.name), h("small", null, "These are the last ", this.count, " articles published there."), h("div", { class: rssListClassName }, this.feed.map((item) => (h("div", { class: "rss-article" }, h("h4", null, item.title.textContent), h("small", null, item.pubDate.textContent), h("p", null, item.description.textContent), h("a", { class: "read-more", href: item.link.textContent, target: "_blank" }, this.readMore))))), h("slot", null))));
  }
  componentDidRender() {
    const rssReader = this.el.shadowRoot.querySelector('.rss-reader');
    if (this.articleStyle) {
      const rssArticles = Array.from(rssReader.querySelectorAll('.rss-article'));
      rssArticles.forEach((article) => {
        article.style.cssText = this.articleStyle;
      });
    }
    if (this.articleExcerptHeight) {
      rssReader.style.setProperty('--article-excerpt-height', this.articleExcerptHeight);
    }
    if (this.articleWidth) {
      rssReader.style.setProperty('--article-width', this.articleWidth);
    }
  }
  get el() { return this; }
  static get style() { return rssReaderCss; }
};

const CardComponent$1 = /*@__PURE__*/proxyCustomElement(CardComponent, [1,"card-component",{"cardTitle":[1,"card-title"]}]);
const MyComponent$1 = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-component",{"first":[1],"middle":[1],"last":[1]}]);
const RssReader$1 = /*@__PURE__*/proxyCustomElement(RssReader, [1,"rss-reader",{"url":[1],"name":[1],"count":[2],"articleWidth":[1,"article-width"],"display":[1],"articleStyle":[1,"article-style"],"articleExcerptHeight":[1,"article-excerpt-height"],"readMore":[1,"read-more"]}]);
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
