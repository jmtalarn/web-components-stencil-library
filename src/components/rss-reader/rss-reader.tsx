import { Component, Host, h, Prop } from '@stencil/core';

interface RssItem {
  title: HTMLTitleElement;
  link: HTMLLinkElement;
  description: Element;
  pubDate: Element;
}

@Component({
  tag: 'rss-reader',
  styleUrl: 'rss-reader.css',
  shadow: true,
})
export class RssReader {
  @Prop() url: string = 'https://blog.jmtalarn.com/feed.xml';
  @Prop() name: string = 'Web dev notes';
  @Prop() count: number = 5;
  feed: Array<RssItem> = [];

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
    return (
      <Host>
        <h3>
          {this.name} {this.count}
        </h3>
        <a href="{this.url}">{this.url}</a>

        {this.feed.map(item => (
          <div>
            <h4>
              <a href={item.link.textContent} target="_blank">
                {item.title.textContent}
              </a>
            </h4>
            <small>{item.pubDate.textContent}</small>
            <p>{item.description.textContent}</p>
          </div>
        ))}

        <slot></slot>
      </Host>
    );
  }
}
