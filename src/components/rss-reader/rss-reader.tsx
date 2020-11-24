import { Component, Element, Host, h, Prop } from '@stencil/core';

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
  @Element() el;

  @Prop() url: string = 'https://blog.jmtalarn.com/feed.xml';
  @Prop() name: string = 'Web dev notes';
  @Prop() count: number = 5;
  @Prop() articleWidth: string;
  @Prop() display: 'list' | 'grid' = 'list';
  feed: Array<RssItem> = [];

  async componentWillLoad() {
    const ret = await fetch(this.url);

    const text = await ret.text();

    this.feed = Array.from(new window.DOMParser().parseFromString(text, 'text/xml').scrollingElement.children[0].children)
      .filter(item => item.tagName === 'item')
      .slice(0, this.count)
      .map(item => {
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

    return (
      <Host>
        <div class="rss-reader">
          <h3>
            {this.name} {this.count}
          </h3>
          <a href="{this.url}">{this.url}</a>
          <div class={rssListClassName}>
            {this.feed.map(item => (
              <div class="rss-article">
                <h4>
                  <a href={item.link.textContent} target="_blank">
                    {item.title.textContent}
                  </a>
                </h4>
                <small>{item.pubDate.textContent}</small>
                <p>{item.description.textContent}</p>
              </div>
            ))}
          </div>
          <slot></slot>
        </div>
      </Host>
    );
  }
  componentDidRender() {
    if (this.articleWidth) {
      this.el.shadowRoot.querySelector('.rss-reader').style.setProperty('--article-width', this.articleWidth);
      console.log('article-width', this.el.shadowRoot.querySelector('.rss-reader').style.getPropertyValue('--article-width'));
      console.log(this.el.shadowRoot.querySelector('.rss-reader'));
    }
  }
}
