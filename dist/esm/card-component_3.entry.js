import { r as registerInstance, h, H as Host } from './index-53492a65.js';

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

const rssReaderCss = ":host{display:block}";

const RssReader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("h3", null, this.name, " ", this.count), h("a", { href: "{this.url}" }, this.url), h("div", null, this.feed.map(item => (h("h4", null, h("a", { href: item.link.textContent, target: "_blank" }, item.title.textContent))))), h("slot", null)));
  }
};
RssReader.style = rssReaderCss;

export { CardComponent as card_component, MyComponent as my_component, RssReader as rss_reader };
