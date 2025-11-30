// Small highlight metrics about the association
import { LitElement, html, css } from "lit";

export class InfoBand extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .band {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 12px;
    }

    .item {
      padding: 12px;
      border-radius: 12px;
      background-color: rgba(15, 26, 56, 0.85);
      border: 1px solid rgba(155, 177, 212, 0.4);
    }

    .label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      opacity: 0.7;
      margin-bottom: 4px;
    }

    .value {
      font-size: 1rem;
      font-weight: 600;
    }
  `;

  render() {
    return html`
      <div class="band" aria-label="Association highlights">
        <div class="item">
          <div class="label">Teams</div>
          <div class="value">8 active teams U8–U16</div>
        </div>
        <div class="item">
          <div class="label">Focus</div>
          <div class="value">Player growth and serious fun</div>
        </div>
        <div class="item">
          <div class="label">Season</div>
          <div class="value">Fall 2025 registration now open</div>
        </div>
      </div>
    `;
  }
}

customElements.define("info-band", InfoBand);
