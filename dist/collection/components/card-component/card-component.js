import { Component, Prop, Host, h } from '@stencil/core';
export class CardComponent {
  render() {
    return (h(Host, null,
      h("article", null,
        h("header", null,
          h("h2", { class: "header" }, this.cardTitle)),
        h("p", { class: "content" },
          h("slot", { name: "content" })),
        h("footer", null,
          h("slot", { name: "cta" })))));
  }
  static get is() { return "card-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["card-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["card-component.css"]
  }; }
  static get properties() { return {
    "cardTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "card-title",
      "reflect": false
    }
  }; }
}
