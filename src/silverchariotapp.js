import { LitElement, html, css } from "lit";

// import child components
import "./components/headerbar.js";
import "./components/mobilemenu.js";
import "./components/herobanner.js";
import "./components/ctabutton.js";
import "./components/gamecard.js";
import "./components/schedulerow.js";
import "./components/newscard.js";
import "./components/footersection.js";
import "./components/infoband.js";
import "./components/imagegallery.js";

// Main app shell for Silver Chariot site
export class SilverChariotApp extends LitElement {
  static properties = {
    page: { type: String },
    mobileMenuOpen: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #05070b;
      color: #f5f7fb;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        sans-serif;
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 16px 40px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .band {
      border-radius: 16px;
      padding: 16px;
      background-color: rgba(9, 16, 32, 0.9);
      border: 1px solid rgba(155, 177, 212, 0.4);
    }

    .schedule-band {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .schedule-list,
    .news-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 12px;
    }

    @media (max-width: 768px) {
      main {
        padding-top: 16px;
      }
    }
  `; 

  constructor() {
    super();
    this.page = "home";
    this.mobileMenuOpen = false;
  }

  // simple navigation state change
  navigate(page) {
    this.page = page;
    const slug = page === "home" ? "/" : `/${page}`;
    window.history.pushState({}, "", slug);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  render() {
    return html`
      <header-bar
        .page=${this.page}
        @nav-home=${() => this.navigate("home")}
        @nav-schedule=${() => this.navigate("schedule")}
        @nav-news=${() => this.navigate("news")}
        @toggle-menu=${this.toggleMobileMenu.bind(this)}
      ></header-bar>

      <mobile-menu
        ?open=${this.mobileMenuOpen}
        .page=${this.page}
        @nav-home=${() => this.navigate("home")}
        @nav-schedule=${() => this.navigate("schedule")}
        @nav-news=${() => this.navigate("news")}
        @close-menu=${this.toggleMobileMenu.bind(this)}
      ></mobile-menu>

      <main>
        <section class="band">
          <hero-banner></hero-banner>
        </section>

        <section class="band">
          <info-band></info-band>
        </section>

        <section class="band schedule-band">
          <schedule-row heading="Upcoming Games"></schedule-row>
          <div class="schedule-list">
            <game-card></game-card>
            <game-card></game-card>
            <game-card></game-card>
          </div>
          <cta-button label="View full schedule"></cta-button>
        </section>

        <section class="band">
          <h2 style="margin: 0 0 12px; font-size: 1.1rem;">
            Silver Chariot News
          </h2>
          <div class="news-list">
            <news-card></news-card>
            <news-card></news-card>
            <news-card></news-card>
          </div>
        </section>

        <section class="band">
          <image-gallery></image-gallery>
        </section>
      </main>

      <footer-section></footer-section>
    `;
  }
}

customElements.define("silver-chariot-app", SilverChariotApp);
