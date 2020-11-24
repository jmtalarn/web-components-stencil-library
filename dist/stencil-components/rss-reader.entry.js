import { r as registerInstance, h, e as Host } from './index-144a4261.js';

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

export { RssReader as rss_reader };
