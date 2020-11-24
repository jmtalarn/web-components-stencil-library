import { Component, Host, h } from '@stencil/core';
export class RssReader {
  render() {
    return (h(Host, null,
      h("h3", null, "This is a RSS Reader"),
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
}
