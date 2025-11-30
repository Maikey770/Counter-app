// Simple primary call-to-action button
import { LitElement, html, css } from "lit";

export class CtaButton extends LitElement {
  static properties = {
    label: { type: String }
  };

  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      display: inline-flex;
      align-items: center;
      padding: 10px 18px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      font-weight: 600;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.8rem;
      background: linear-gradient(90deg, #376fff, #cfd6e6);
      color: #05070b;
    }
  `;

  constructor() {
    super();
    this.label = "Learn more";
  }

  render() {
    return html`<button type="button">${this.label}</button>`;
  }
}

customElements.define("cta-button", CtaButton);
