import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class CardComponent {
  render() {
    return (
      <Host>
        <article>
          <h2 name="title"></h2>
          <p>
            <slot name="content"></slot>
          </p>
          <div name="cta"></div>
        </article>
      </Host>
    );
  }
}
