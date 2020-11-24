import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rss-reader',
  styleUrl: 'rss-reader.css',
  shadow: true,
})
export class RssReader {
  render() {
    return (
      <Host>
        <h3>This is a RSS Reader</h3>
        <slot></slot>
      </Host>
    );
  }
}
