'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f5720457.js');

const rssReaderCss = ":host{display:block}";

const RssReader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("h3", null, "This is a RSS Reader"), index.h("slot", null)));
  }
};
RssReader.style = rssReaderCss;

exports.rss_reader = RssReader;
