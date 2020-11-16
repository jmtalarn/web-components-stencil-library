import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class CardComponent {
  @Prop() title: string;

  render() {
    return (
      <Host>
        <article>
          <h2 class="header">{this.title}</h2>
          <slot name="content" />
          <slot name="cta" />
        </article>
      </Host>
    );
  }
}
