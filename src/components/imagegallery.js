// Simple static image-style gallery band
import { LitElement, html, css } from "lit";

export class ImageGallery extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    h2 {
      margin: 0 0 12px;
      font-size: 1.1rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px;
    }

    .thumb {
      position: relative;
      padding-top: 62%;
      border-radius: 16px;
      overflow: hidden;
      background:
        radial-gradient(circle at top, rgba(80, 130, 220, 0.6), transparent 55%),
        linear-gradient(135deg, #101728, #05070b);
      border: 1px solid rgba(155, 177, 212, 0.4);
    }

    .thumb-label {
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 10px;
      font-size: 0.8rem;
      color: #f5f7fb;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
    }
  `;

  render() {
    return html`
      <section aria-label="Game and practice gallery">
        <h2>Rink Moments</h2>
        <div class="grid">
          <div class="thumb">
            <div class="thumb-label">U12 team huddle before faceoff</div>
          </div>
          <div class="thumb">
            <div class="thumb-label">Goalie warmup drills</div>
          </div>
          <div class="thumb">
            <div class="thumb-label">Parents cheering from the stands</div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("image-gallery", ImageGallery);
