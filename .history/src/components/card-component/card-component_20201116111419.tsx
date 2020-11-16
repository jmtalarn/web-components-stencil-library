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
        <slot></slot>
      </Host>
    );
  }

}
