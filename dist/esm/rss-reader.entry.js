import { r as registerInstance, h, H as Host } from './index-ed5cb505.js';

const rssReaderCss = ":host{display:block}";

const RssReader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h3", null, "This is a RSS Reader"), h("slot", null)));
  }
};
RssReader.style = rssReaderCss;

export { RssReader as rss_reader };
