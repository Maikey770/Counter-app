// Card for a single news story
import { LitElement, html, css } from "lit";

export class NewsCard extends LitElement {
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
    }

    h3 {
      margin: 0;
      font-size: 1rem;
    }

    p {
      margin: 0;
      font-size: 0.85rem;
      opacity: 0.9;
    }
  `;

  render() {
    return html`
      <article class="card">
        <div class="meta">Nov 26 · Association Update</div>
        <h3>Silver Chariot Winter Skills Camp Announced</h3>
        <p>
          Focused small-group ice sessions to build edge work, control, and game
          awareness for U10–U16 players.
        </p>
      </article>
    `;
  }
}

customElements.define("news-card", NewsCard);
