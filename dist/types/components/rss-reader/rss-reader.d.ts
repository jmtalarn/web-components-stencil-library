interface RssItem {
  title: HTMLTitleElement;
  link: HTMLLinkElement;
  description: Element;
  pubDate: Element;
}
export declare class RssReader {
  url: string;
  name: string;
  count: number;
  feed: Array<RssItem>;
  componentWillLoad(): Promise<void>;
  render(): any;
}
export {};
