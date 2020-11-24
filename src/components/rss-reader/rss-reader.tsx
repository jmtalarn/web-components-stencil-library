import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'rss-reader',
  styleUrl: 'rss-reader.css',
  shadow: true,
})
export class RssReader {
  @Prop() url: string = 'https://blog.jmtalarn.com/feed.xml';
  @Prop() name: string = 'Web dev notes';
  @Prop() count: number = 5;
  render() {
    return (
      <Host>
        <h3>
          {this.name} {this.count}
        </h3>
        <a href="{this.url}">{this.url}</a>
        <slot></slot>
      </Host>
    );
  }
}
