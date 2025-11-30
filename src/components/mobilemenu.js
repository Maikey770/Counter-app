// Mobile slide-down menu
import { LitElement, html, css } from "lit";

export class MobileMenu extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    page: { type: String }
  };

  static styles = css`
    :host {
      display: block;
    }

    .sheet {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 40;
      display: none;
    }

    :host([open]) .sheet {
      display: block;
    }

    .panel {
      position: absolute;
      inset-inline: 0;
      top: 0;
      background-color: #05070b;
      padding: 16px;
      border-bottom-left-radius: 24px;
      border-bottom-right-radius: 24px;
      border-bottom: 1px solid rgba(155, 177, 212, 0.4);
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .links {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    button {
      background: none;
      border: none;
      color: #f5f7fb;
      font: inherit;
      cursor: pointer;
      text-align: left;
      padding: 8px 4px;
      border-radius: 8px;
    }

    button[data-active="true"] {
      background-color: rgba(55, 111, 255, 0.2);
    }

    @media (min-width: 769px) {
      .sheet {
        display: none !important;
      }
    }
  `;

  emitNav(name) {
    this.dispatchEvent(
      new CustomEvent(name, { bubbles: true, composed: true })
    );
    this.close();
  }

  close() {
    this.dispatchEvent(
      new CustomEvent("close-menu", { bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <div class="sheet" role="dialog" aria-modal="true">
        <div class="panel">
          <div class="row">
            <span>Silver Chariot</span>
            <button @click=${this.close} aria-label="Close menu">X</button>
          </div>
          <div class="links">
            <button
              data-active=${this.page === "home"}
              @click=${() => this.emitNav("nav-home")}
            >
              Home
            </button>
            <button
              data-active=${this.page === "schedule"}
              @click=${() => this.emitNav("nav-schedule")}
            >
              Schedule
            </button>
            <button
              data-active=${this.page === "news"}
              @click=${() => this.emitNav("nav-news")}
            >
              News
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("mobile-menu", MobileMenu);
