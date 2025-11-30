// Top navigation bar
import { LitElement, html, css } from "https://esm.run/lit";

export class HeaderBar extends LitElement {
  static properties = {
    page: { type: String }
  };

  static styles = css`
    :host {
      display: block;
      background: linear-gradient(90deg, #05070b, #0a2148);
      color: #f5f7fb;
      border-bottom: 1px solid rgba(155, 177, 212, 0.4);
    }

    header {
      max-width: 1200px;
      margin: 0 auto;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-size: 0.9rem;
    }

    .logo-mark {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 2px solid #cfd6e6;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    button {
      background: none;
      border: none;
      color: inherit;
      font: inherit;
      cursor: pointer;
      padding: 4px 10px;
      border-radius: 999px;
      transition: background-color 0.15s ease, color 0.15s ease;
    }

    button[data-active="true"] {
      background-color: #376fff;
      color: #ffffff;
    }

    .menu-toggle {
      display: none;
    }

    @media (max-width: 768px) {
      nav {
        display: none;
      }

      .menu-toggle {
        display: inline-flex;
        padding: 4px 10px;
        border-radius: 999px;
        border: 1px solid rgba(155, 177, 212, 0.6);
      }
    }
  `;

  emitNav(name) {
    this.dispatchEvent(
      new CustomEvent(name, { bubbles: true, composed: true })
    );
  }

  toggleMenu() {
    this.dispatchEvent(
      new CustomEvent("toggle-menu", { bubbles: true, composed: true })
    );
  }

  render() {
    return html`
      <header>
        <div class="brand" aria-label="Silver Chariot Youth Hockey">
          <div class="logo-mark">SC</div>
          <span>Silver Chariot</span>
        </div>

        <nav aria-label="Main navigation">
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
        </nav>

        <button
          class="menu-toggle"
          @click=${this.toggleMenu}
          aria-label="Open navigation menu"
        >
          Menu
        </button>
      </header>
    `;
  }
}

customElements.define("header-bar", HeaderBar);
