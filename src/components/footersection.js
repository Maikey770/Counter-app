// Simple footer with basic information
import { LitElement, html, css } from "lit";

export class FooterSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin-top: 32px;
      border-top: 1px solid rgba(155, 177, 212, 0.3);
      background-color: #05070b;
      color: #f5f7fb;
    }

    footer {
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
      font-size: 0.8rem;
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    a {
      color: inherit;
      text-decoration: none;
      opacity: 0.8;
    }

    a:hover {
      opacity: 1;
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <footer>
        <div class="col">
          <strong>Silver Chariot Youth Hockey</strong>
          <span>Home rink: State College Ice Pavilion</span>
          <span>ICEking Digital · Brand &amp; Site Design</span>
        </div>
        <div class="col">
          <a href="#">Contact</a>
          <a href="#">Volunteer</a>
          <a href="#">Policies</a>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-section", FooterSection);
