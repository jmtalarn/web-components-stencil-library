import { Component, Element, Host, h, Prop } from '@stencil/core';
export class RssReader {
  constructor() {
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
    return (h(Host, null,
      h("div", { class: "rss-reader" },
        h("h3", null, this.name),
        h("small", null,
          "These are the last ",
          this.count,
          " articles published there."),
        h("div", { class: rssListClassName }, this.feed.map((item) => (h("div", { class: "rss-article" },
          h("h4", null,
            h("a", { href: item.link.textContent, target: "_blank" }, item.title.textContent)),
          h("small", null, item.pubDate.textContent),
          h("p", null, item.description.textContent))))),
        h("slot", null))));
  }
  componentDidRender() {
    const rssReader = this.el.shadowRoot.querySelector('.rss-reader');
    if (this.articleStyle) {
      const rssArticles = Array.from(rssReader.querySelectorAll('.rss-article'));
      rssArticles.forEach((article) => {
        article.style.cssText = this.articleStyle;
      });
    }
    if (this.articleWidth) {
      rssReader.style.setProperty('--article-width', this.articleWidth);
    }
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
    },
    "articleWidth": {
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
      "attribute": "article-width",
      "reflect": false
    },
    "display": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'list' | 'grid'",
        "resolved": "\"grid\" | \"list\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "display",
      "reflect": false,
      "defaultValue": "'list'"
    },
    "articleStyle": {
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
      "attribute": "article-style",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
