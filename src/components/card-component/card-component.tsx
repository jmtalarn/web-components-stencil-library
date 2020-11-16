import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class CardComponent {
  @Prop() cardTitle: string;

  render() {
    return (
      <Host>
        <article>
          <header>
            <h2 class="header">{this.cardTitle}</h2>
          </header>
          <p class="content">
            <slot name="content" />
          </p>
          <footer>
            <slot name="cta" />
          </footer>
        </article>
      </Host>
    );
  }
}
