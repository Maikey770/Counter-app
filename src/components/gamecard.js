// Card for a single upcoming game
import { LitElement, html, css } from "lit";

export class GameCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      border-radius: 16px;
      border: 1px solid rgba(155, 177, 212, 0.4);
      padding: 12px;
      background: rgba(5, 7, 11, 0.9);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .meta {
      font-size: 0.8rem;
      opacity: 0.8;
      display: flex;
      justify-content: space-between;
      gap: 8px;
    }

    .teams {
      font-weight: 600;
    }

    .tag {
      padding: 2px 8px;
      border-radius: 999px;
      border: 1px solid rgba(155, 177, 212, 0.5);
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
  `;

  render() {
    return html`
      <article class="card" aria-label="Upcoming game">
        <div class="meta">
          <span>12/08 · 7:30 PM</span>
          <span class="tag">Home</span>
        </div>
        <div class="teams">Silver Chariot U14 vs. Valley Blades</div>
        <div class="meta">
          <span>State College Ice Pavilion</span>
          <span>League Game</span>
        </div>
      </article>
    `;
  }
}

customElements.define("game-card", GameCard);
