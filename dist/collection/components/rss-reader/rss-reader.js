import { Component, Host, h, Prop } from '@stencil/core';
export class RssReader {
  constructor() {
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
    return (h(Host, null,
      h("h3", null,
        this.name,
        " ",
        this.count),
      h("a", { href: "{this.url}" }, this.url),
      h("div", null, this.thing),
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
