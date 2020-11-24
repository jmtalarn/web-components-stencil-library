import { Component, Host, h, Prop } from '@stencil/core';
export class RssReader {
  constructor() {
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
    return (h(Host, null,
      h("h3", null,
        this.name,
        " ",
        this.count),
      h("a", { href: "{this.url}" }, this.url),
      this.feed.map(item => (h("div", null,
        h("h4", null,
          h("a", { href: item.link.textContent, target: "_blank" }, item.title.textContent)),
        h("small", null, item.pubDate.textContent),
        h("p", null, item.description.textContent)))),
      h("slot", null)));
  }
  static get is() { return "rss-reader"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["rss-reader.css"]
  }; }
  static get styleUrls() { return {
    "$": ["rss-reader.css"]
  }; }
  static get properties() { return {
    "url": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "url",
      "reflect": false,
      "defaultValue": "'https://blog.jmtalarn.com/feed.xml'"
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false,
      "defaultValue": "'Web dev notes'"
    },
    "count": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "count",
      "reflect": false,
      "defaultValue": "5"
    }
  }; }
}
