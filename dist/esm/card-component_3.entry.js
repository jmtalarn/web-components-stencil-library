import { r as registerInstance, h, H as Host, g as getElement } from './index-b51d5781.js';

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

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
MyComponent.style = myComponentCss;

const rssReaderCss = ":host{display:block}.rss-reader{--article-grid-width:var(--article-width, 12rem);--article-list-width:var(--article-width, 100%)}.rss-channel.grid{display:grid;gap:1rem;grid-template-columns:repeat(auto-fit, minmax(var(--article-grid-width), 1fr))}.rss-channel.list .rss-article{width:var(--article-list-width)}.rss-article{line-height:1.5rem;margin:1rem auto;padding:0.5rem}.rss-article h4,.rss-article p{margin:0}";

const RssReader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      .filter(item => item.tagName === 'item')
      .slice(0, this.count)
      .map(item => {
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
    return (h(Host, null, h("div", { class: "rss-reader" }, h("h3", null, this.name), h("small", null, "These are the last ", this.count, " articles published there."), h("div", { class: rssListClassName }, this.feed.map(item => (h("div", { class: "rss-article" }, h("h4", null, h("a", { href: item.link.textContent, target: "_blank" }, item.title.textContent)), h("small", null, item.pubDate.textContent), h("p", null, item.description.textContent))))), h("slot", null))));
  }
  componentDidRender() {
    if (this.articleWidth) {
      this.el.shadowRoot.querySelector('.rss-reader').style.setProperty('--article-width', this.articleWidth);
      console.log('article-width', this.el.shadowRoot.querySelector('.rss-reader').style.getPropertyValue('--article-width'));
      console.log(this.el.shadowRoot.querySelector('.rss-reader'));
    }
  }
  get el() { return getElement(this); }
};
RssReader.style = rssReaderCss;

export { CardComponent as card_component, MyComponent as my_component, RssReader as rss_reader };
