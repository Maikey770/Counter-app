// Hero section at the top of the page
import { LitElement, html, css } from "lit";
import "./ctabutton.js";

export class HeroBanner extends LitElement {
  static styles = css`
    :host {
      display: block;
      border-radius: inherit;
      padding: 24px;
      background: radial-gradient(circle at top, #1b3570 0, #05070b 55%);
      color: #f5f7fb;
    }

    .eyebrow {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.75rem;
      opacity: 0.8;
      margin-bottom: 8px;
    }

    h1 {
      margin: 0 0 12px;
      font-size: clamp(1.8rem, 3vw, 2.4rem);
    }

    p {
      margin: 0 0 16px;
      max-width: 40rem;
      opacity: 0.9;
    }
  `;

  render() {
    return html`
      <div class="eyebrow">ICEking presents</div>
      <h1>Silver Chariot Youth Hockey Association</h1>
      <p>
        A focused hub for parents, players, and volunteers. Important information
        like upcoming games and key news is always easy to find.
      </p>
      <cta-button label="Register for the season"></cta-button>
    `;
  }
}

customElements.define("hero-banner", HeroBanner);
