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
          <h2 class="header" slot="title" />
          <slot name="content" />
          <slot name="cta" />
        </article>
      </Host>
    );
  }
}
