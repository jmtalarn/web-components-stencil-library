interface RssItem {
  title: HTMLTitleElement;
  link: HTMLLinkElement;
  description: Element;
  pubDate: Element;
}
export declare class RssReader {
  el: any;
  url: string;
  name: string;
  count: number;
  articleWidth: string;
  display: 'list' | 'grid';
  feed: Array<RssItem>;
  componentWillLoad(): Promise<void>;
  render(): any;
  componentDidRender(): void;
}
export {};
